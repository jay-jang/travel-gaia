#!/usr/bin/env node
// Travel Gaia build: merge data/cat-*.json -> resolve cross-refs -> validate -> inline into index.html
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DATA = join(ROOT, 'data');
const TODAY = new Date().toISOString().slice(0, 10);

// ---- category metadata = single source of truth (see DESIGN.md) ----
const CATEGORIES = [
  { id:'air-ops',     short:'항공 운영·예약',  title:'Air — Operations & Reservation',          color:'#1f6feb', desc:'PNR·세그먼트·SSR 등 항공 예약/운영의 기본 구성요소.', desc_en:'PNR, segments, SSR — the building blocks of air reservation & operations.' },
  { id:'air-shop',    short:'항공 운임·재고',  title:'Air — Shopping, Pricing & Availability',  color:'#2f86d6', desc:'RBD·운임 기준코드·가용성 등 조회와 운임 산출 개념.', desc_en:'RBD, fare basis, availability — air shopping & pricing concepts.' },
  { id:'air-ticket',  short:'항공 발권·주문',  title:'Air — Ticketing & Orders',                color:'#0b8f6b', desc:'e-티켓·EMD·재발행/환불 등 발권과 주문(Order) 영역.', desc_en:'E-tickets, EMD, reissue/refund and the Order domain.' },
  { id:'air-partner', short:'공동운항·연계',  title:'Air — Codeshare, Interline & Schedules',  color:'#7d57c2', desc:'코드셰어·인터라인·운항/판매사 등 항공사 간 협약.', desc_en:'Codeshare, interline, marketing/operating carriers — airline partnerships.' },
  { id:'hotel-rate',  short:'호텔 재고·요금',  title:'Hotel — Inventory & Rates',               color:'#c0623d', desc:'레이트플랜·룸타입·ADR/RevPAR 등 객실 재고와 요금.', desc_en:'Rate plans, room types, ADR/RevPAR — hotel inventory & rates.' },
  { id:'hotel-dist',  short:'호텔 유통·예약',  title:'Hotel — Distribution & Booking',          color:'#d18a1a', desc:'CRS/PMS·채널매니저·베드뱅크 등 호텔 유통 구조.', desc_en:'CRS/PMS, channel managers, bedbanks — hotel distribution.' },
  { id:'pay',         short:'결제·정산',      title:'Payments & Settlement',                   color:'#b5560f', desc:'BSP/ARC·VCC·MoR 등 결제 모델과 산업 정산.', desc_en:'BSP/ARC, VCC, merchant of record — payment models & settlement.' },
  { id:'codes',       short:'식별자·코드',    title:'Identifiers & Codes',                     color:'#5b6678', desc:'IATA/ICAO·통화/국가(ISO)·PCC 등 산업 식별 체계.', desc_en:'IATA/ICAO, ISO currency/country, PCC — industry identifier systems.' },
  { id:'customer',    short:'고객·로열티',    title:'Customer, Loyalty & Profiles',            color:'#0e8a8a', desc:'승객유형코드·FFP·One ID 등 고객/프로파일 개념.', desc_en:'Passenger type codes, FFP, One ID — customer & profile concepts.' },
  { id:'standards',   short:'유통표준·API',   title:'Distribution Standards & APIs',           color:'#444c5e', desc:'GDS·NDC·OpenTravel·HTNG 등 유통 표준과 API.', desc_en:'GDS, NDC, OpenTravel, HTNG — distribution standards & APIs.' },
];
const catIds = new Set(CATEGORIES.map(c => c.id));

const REL_TYPES = new Set(['sameAs','broader','narrower','parent','child','related','conflicts','replaces','contrasts']);
const norm = s => String(s||'').toLowerCase().replace(/\s+/g,' ').trim();

// ---- load category data files ----
const files = readdirSync(DATA).filter(f => /^cat-.*\.json$/.test(f)).sort();
if (!files.length) { console.error('ERROR: no data/cat-*.json found. Run the content workflow first.'); process.exit(1); }

let entries = [];
const fileReport = [];
for (const f of files) {
  let parsed;
  try { parsed = JSON.parse(readFileSync(join(DATA, f), 'utf8')); }
  catch (e) { console.error(`ERROR: ${f} is not valid JSON: ${e.message}`); process.exit(1); }
  const arr = Array.isArray(parsed) ? parsed : (parsed.entries || []);
  fileReport.push(`  ${f}: ${arr.length}`);
  entries.push(...arr);
}

// ---- dedupe by id ----
const seen = new Map(); const dups = [];
entries = entries.filter(e => {
  if (!e || !e.id) { return false; }
  if (seen.has(e.id)) { dups.push(e.id); return false; }
  seen.set(e.id, e); return true;
});

// ---- build term -> id lookup (term/abbr/aliases) ----
const lookup = new Map();
const addLookup = (key, id) => { const k = norm(key); if (k && !lookup.has(k)) lookup.set(k, id); };
for (const e of entries) addLookup(e.term, e.id);           // canonical names first
for (const e of entries) { addLookup(e.abbreviation, e.id); (e.aliases||[]).forEach(a => addLookup(a, e.id)); }

// ---- resolve cross-references; collect issues ----
const unresolved = [], missingSource = [], badCat = [], badStatus = [];
const resolveRef = (ref, fromId) => {
  const id = lookup.get(norm(ref.targetTerm));
  if (id && id !== fromId) { ref.targetId = id; return true; }
  if (id === fromId) return false;                 // drop self-ref
  unresolved.push(`${fromId} → "${ref.targetTerm}"`); return false;
};
for (const e of entries) {
  e.lastReviewed = e.lastReviewed || TODAY;
  if (!catIds.has(e.category)) badCat.push(`${e.id} (category=${e.category})`);
  if (e.status && !['active','deprecated','ambiguous'].includes(e.status)) badStatus.push(`${e.id} (status=${e.status})`);
  if (!e.sources || !e.sources.length) missingSource.push(e.id);
  e.relationships = (e.relationships||[]).filter(r => r && r.targetTerm && (REL_TYPES.has(r.type)||(r.type='related')) && resolveRef(r, e.id));
  e.distinctions = (e.distinctions||[]).filter(d => d && d.targetTerm && resolveRef(d, e.id));
}

entries.sort((a,b) => a.term.localeCompare(b.term));

// ---- assemble glossary + write ----
const glossary = {
  meta: { name:'Travel Gaia', tagline:'여행 산업 용어 백과사전', generatedAt:TODAY,
          entryCount:entries.length, categoryCount:CATEGORIES.length },
  categories: CATEGORIES,
  entries,
};
writeFileSync(join(DATA,'glossary.json'), JSON.stringify(glossary,null,2));

// ---- inline into template -> index.html ----
const tpl = readFileSync(join(ROOT,'build','template.html'),'utf8');
const json = JSON.stringify(glossary).replace(/</g,'\\u003c');   // safe inside <script>
if (!tpl.includes('__GLOSSARY_DATA__')) { console.error('ERROR: template missing __GLOSSARY_DATA__ marker'); process.exit(1); }
writeFileSync(join(ROOT,'index.html'), tpl.replace('__GLOSSARY_DATA__', json));

// ---- report ----
const perCat = CATEGORIES.map(c => `  ${c.id}: ${entries.filter(e=>e.category===c.id).length}`).join('\n');
console.log(`\n=== Travel Gaia build report (${TODAY}) ===`);
console.log(`files:\n${fileReport.join('\n')}`);
console.log(`entries: ${entries.length}  |  categories: ${CATEGORIES.length}`);
console.log(`per category:\n${perCat}`);
console.log(`duplicate ids dropped: ${dups.length}${dups.length?' ['+[...new Set(dups)].join(', ')+']':''}`);
console.log(`unresolved cross-refs: ${unresolved.length}${unresolved.length?'\n  '+unresolved.join('\n  '):''}`);
console.log(`entries missing sources: ${missingSource.length}${missingSource.length?' ['+missingSource.join(', ')+']':''}`);
console.log(`bad category: ${badCat.length}${badCat.length?' ['+badCat.join(', ')+']':''}`);
console.log(`bad status: ${badStatus.length}${badStatus.length?' ['+badStatus.join(', ')+']':''}`);
const total = JSON.stringify(glossary).length;
console.log(`index.html data payload: ${(total/1024).toFixed(1)} KB`);
console.log(`OK -> index.html, data/glossary.json\n`);
