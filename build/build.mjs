#!/usr/bin/env node
// Travel Gaia build: load OKF bundle (okf/) -> resolve cross-refs -> validate -> inline into index.html
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { loadOkf } from './okf-load.mjs';

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
  { id:'car',         short:'렌터카·모빌리티', title:'Car Rental & Mobility',                   color:'#d6336c', desc:'렌터카 요율·보장(CDW/LDW)·예약 등 차량 대여와 모빌리티.', desc_en:'Rental rates, CDW/LDW coverage, bookings — car rental & mobility.' },
  { id:'rail',        short:'철도·복합운송',   title:'Rail & Multimodal',                       color:'#5f3dc4', desc:'OSDM·운임·복합운송 등 철도 유통 개념.', desc_en:'OSDM, fares, multimodal — rail distribution concepts.' },
  { id:'cruise',      short:'크루즈·해상',     title:'Cruise & Sea',                            color:'#1098ad', desc:'선실 등급·GRT·기항지 등 크루즈 유통.', desc_en:'Cabin categories, GRT, ports of call — cruise distribution.' },
  { id:'insurance',   short:'여행보험·보호',   title:'Travel Insurance & Protection',           color:'#2b8a3e', desc:'여행자보험·CFAR·취소보호 등 보호 상품.', desc_en:'Travel insurance, CFAR, cancellation protection — ancillary protection.' },
  { id:'disruption',  short:'운항중단·승객권리', title:'Disruption & Passenger Rights',         color:'#c92a2a', desc:'EU261·DOT 환불규정·초과예약 보상 등 승객 권리.', desc_en:'EU261, DOT refund rules, denied-boarding compensation — passenger rights.' },
  { id:'sustainability', short:'지속가능성·배출', title:'Sustainability & Emissions',           color:'#66a80f', desc:'SAF·CORSIA·탄소배출 산정 등 지속가능 항공.', desc_en:'SAF, CORSIA, emissions accounting — sustainable travel.' },
];
const catIds = new Set(CATEGORIES.map(c => c.id));

const REL_TYPES = new Set(['sameAs','broader','narrower','parent','child','related','conflicts','replaces','contrasts']);
const norm = s => String(s||'').toLowerCase().replace(/\s+/g,' ').trim();

// ---- load the OKF knowledge bundle (okf/ is the source of truth) ----
const OKF = join(ROOT, 'okf');
let loaded;
try { loaded = loadOkf(OKF); }
catch (e) { console.error(`ERROR: cannot read OKF bundle at okf/: ${e.message}\nRun "node build/to-okf.mjs" to (re)generate it from data/glossary.json.`); process.exit(1); }
if (!loaded.entries.length) { console.error('ERROR: no concept files found under okf/.'); process.exit(1); }
let entries = loaded.entries;
const okfIssues = loaded.issues;       // OKF conformance problems (non-empty type, parseable frontmatter)
const byCatCount = {};
entries.forEach(e => { byCatCount[e.category] = (byCatCount[e.category] || 0) + 1; });
const fileReport = [`  okf/: ${loaded.files.length} concept files`].concat(
  CATEGORIES.filter(c => byCatCount[c.id]).map(c => `    ${c.id}: ${byCatCount[c.id]}`));

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

// ---- embed display fonts (base64 woff2, keeps single-file/offline) ----
const FONTS = [
  { file:'ss4-400.woff2', family:'Source Serif 4', weight:400 },
  { file:'ss4-600.woff2', family:'Source Serif 4', weight:600 },
];
let fontCss = '';
for (const f of FONTS) {
  try { const b64 = readFileSync(join(ROOT,'build','fonts',f.file)).toString('base64');
    fontCss += `@font-face{font-family:'${f.family}';font-style:normal;font-weight:${f.weight};font-display:swap;src:url(data:font/woff2;base64,${b64}) format('woff2')}\n`;
  } catch { console.error(`WARN: font ${f.file} missing, skipped`); }
}

// ---- inline into template -> index.html ----
const tpl = readFileSync(join(ROOT,'build','template.html'),'utf8');
const json = JSON.stringify(glossary).replace(/</g,'\\u003c');   // safe inside <script>
if (!tpl.includes('__GLOSSARY_DATA__')) { console.error('ERROR: template missing __GLOSSARY_DATA__ marker'); process.exit(1); }
// NB: use function replacers so '$' in the inlined payloads is NOT treated as a
// String.replace special pattern ($&, $`, $', $1 …). Minified d3/JSON contain '$'.
let html = tpl.replace('/*__FONTS__*/', () => fontCss).replace('__GLOSSARY_DATA__', () => json);

// ---- inline d3 so the single-file artifact stays offline / zero-dependency (graph uses D3) ----
const D3_CDN = '<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js"></script>';
let d3KB = 0, d3inlined = false;
if (html.includes(D3_CDN)) {
  try {
    const d3src = readFileSync(join(ROOT,'build','vendor','d3.min.js'),'utf8').replace(/<\/script>/gi,'<\\/script>');
    html = html.replace(D3_CDN, () => `<script>/* d3 v7.8.5 — vendored & inlined for offline single-file */\n${d3src}\n</script>`);
    d3KB = (d3src.length/1024).toFixed(0); d3inlined = true;
  } catch { console.error('WARN: build/vendor/d3.min.js missing — graph will require network (CDN d3). Run: npm i d3@7.8.5 --no-save && cp node_modules/d3/dist/d3.min.js build/vendor/d3.min.js'); }
}
const remoteScripts = (html.match(/<script[^>]+src=["']https?:/gi)||[]).length;
writeFileSync(join(ROOT,'index.html'), html);
const fontKB = (fontCss.length/1024).toFixed(0);

// ---- report ----
const perCat = CATEGORIES.map(c => `  ${c.id}: ${entries.filter(e=>e.category===c.id).length}`).join('\n');
console.log(`\n=== Travel Gaia build report (${TODAY}) ===`);
console.log(`files:\n${fileReport.join('\n')}`);
console.log(`entries: ${entries.length}  |  categories: ${CATEGORIES.length}`);
console.log(`per category:\n${perCat}`);
console.log(`OKF conformance issues: ${okfIssues.length}${okfIssues.length?'\n  '+okfIssues.slice(0,10).join('\n  '):''}`);
console.log(`duplicate ids dropped: ${dups.length}${dups.length?' ['+[...new Set(dups)].join(', ')+']':''}`);
console.log(`unresolved cross-refs: ${unresolved.length}${unresolved.length?'\n  '+unresolved.join('\n  '):''}`);
console.log(`entries missing sources: ${missingSource.length}${missingSource.length?' ['+missingSource.join(', ')+']':''}`);
console.log(`bad category: ${badCat.length}${badCat.length?' ['+badCat.join(', ')+']':''}`);
console.log(`bad status: ${badStatus.length}${badStatus.length?' ['+badStatus.join(', ')+']':''}`);
const withIcon = entries.filter(e => e.icon && /<svg/i.test(e.icon)).length;
console.log(`entries with SVG icon: ${withIcon}/${entries.length}`);
console.log(`embedded fonts: ${fontKB} KB | index.html total: ${(html.length/1024).toFixed(0)} KB | data: ${(JSON.stringify(glossary).length/1024).toFixed(1)} KB`);
console.log(`d3: ${d3inlined?`inlined ${d3KB} KB (offline)`:'NOT inlined (CDN)'} | remote <script src>: ${remoteScripts}${remoteScripts?' ⚠ NOT offline':' (offline OK)'}`);
console.log(`OK -> index.html, data/glossary.json\n`);
