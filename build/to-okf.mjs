#!/usr/bin/env node
// Convert the current catalog (data/glossary.json) -> an OKF v0.1 knowledge bundle under okf/.
// Bundle layout: okf/<category>/<id>.md (concept) + okf/<category>/index.md + okf/index.md + okf/log.md
// Frontmatter carries OKF standard fields (type/title/description/tags/timestamp) plus lossless
// extension keys; the markdown body is human-readable (definition, KO, provider table, bundle-relative
// cross-links, # Citations). build/build.mjs consumes this bundle.
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import matter from 'gray-matter';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OKF = join(ROOT, 'okf');
const g = JSON.parse(readFileSync(join(ROOT, 'data', 'glossary.json'), 'utf8'));
const { categories: CATS, entries: ENTRIES, meta: META } = g;

const TODAY = process.argv[2] || META.generatedAt || '2026-06-17';
const catById = new Map(CATS.map(c => [c.id, c]));
const idToCat = new Map(ENTRIES.map(e => [e.id, e.category]));
const catName = c => (c && (c.title || c.short || c.id)) || '';
const okfType = ct => String(ct || 'reference').split(/[-_\s]+/).map(w => w ? w[0].toUpperCase() + w.slice(1) : w).join(' ');

// ---- verticals (big groupings) -> the 16 categories are their subcategories ----
const VERTICALS = [
  { id: 'air',     short: '항공',      title: 'Air',              desc_en: 'Airline reservation, shopping, ticketing and inter-carrier concepts.' },
  { id: 'lodging', short: '숙박',      title: 'Lodging',          desc_en: 'Hotel inventory, rates and distribution.' },
  { id: 'ground',  short: '지상교통',  title: 'Ground Transport', desc_en: 'Car rental, rail and multimodal ground transport.' },
  { id: 'cruise',  short: '크루즈',    title: 'Cruise',           desc_en: 'Cruise products, cabins and sea-travel distribution.' },
  { id: 'common',  short: '산업 공통', title: 'Cross-Industry',   desc_en: 'Payments, identifiers, standards, customer, regulation — shared across verticals.' },
];
const CAT_VERTICAL = {
  'air-ops': 'air', 'air-shop': 'air', 'air-ticket': 'air', 'air-partner': 'air',
  'hotel-rate': 'lodging', 'hotel-dist': 'lodging',
  'car': 'ground', 'rail': 'ground',
  'cruise': 'cruise',
  'pay': 'common', 'codes': 'common', 'customer': 'common', 'standards': 'common',
  'insurance': 'common', 'disruption': 'common', 'sustainability': 'common',
};
const vertOf = catId => CAT_VERTICAL[catId] || 'common';
const vertById = new Map(VERTICALS.map(v => [v.id, v]));

// bundle-relative path to a concept by id: /<vertical>/<category>/<id>.md
const linkTo = (id) => { const cat = idToCat.get(id); return cat ? `/${vertOf(cat)}/${cat}/${id}.md` : null; };
const esc = s => String(s == null ? '' : s);

// ---- (re)create bundle dir ----
if (existsSync(OKF)) rmSync(OKF, { recursive: true, force: true });
mkdirSync(OKF, { recursive: true });

const entriesByCat = new Map();
for (const e of ENTRIES) { (entriesByCat.get(e.category) || entriesByCat.set(e.category, []).get(e.category)).push(e); }

let fileCount = 0;

function conceptBody(e) {
  const L = [];
  L.push(`> ${esc(e.definition).trim()}`);
  if (e.longDef) L.push('', esc(e.longDef).trim());
  // Korean
  const koBits = [];
  if (e.term_ko && e.term_ko !== e.term) koBits.push(`**${esc(e.term_ko)}**`);
  if (e.definition_ko) koBits.push(esc(e.definition_ko).trim());
  if (koBits.length) { L.push('', `**한국어 / Korean** — ${koBits.join(' — ')}`); if (e.longDef_ko) L.push('', esc(e.longDef_ko).trim()); }
  if (e.aliases && e.aliases.length) L.push('', `**Aliases:** ${e.aliases.map(a => `\`${esc(a)}\``).join(', ')}`);
  // provider equivalents
  if (e.providerTerms && e.providerTerms.length) {
    L.push('', '# Provider & standard equivalents', '', '| Provider | Term | Relationship | Context |', '| --- | --- | --- | --- |');
    for (const p of e.providerTerms) {
      const ctx = (p.context || p.context_ko || '').replace(/\|/g, '\\|').replace(/\n/g, ' ');
      L.push(`| ${esc(p.provider)} | \`${esc(p.term)}\` | ${esc(p.relationship)} | ${ctx} |`);
    }
  }
  // related (bundle-relative cross-links)
  if (e.relationships && e.relationships.length) {
    L.push('', '# Related');
    for (const r of e.relationships) {
      const path = r.targetId ? linkTo(r.targetId) : null;
      L.push(path ? `- [${esc(r.targetTerm)}](${path}) — ${esc(r.type)}` : `- ${esc(r.targetTerm)} — ${esc(r.type)}`);
    }
  }
  // distinctions
  if (e.distinctions && e.distinctions.length) {
    L.push('', '# Distinctions');
    for (const d of e.distinctions) {
      const path = d.targetId ? linkTo(d.targetId) : null;
      const tgt = path ? `[${esc(d.targetTerm)}](${path})` : `**${esc(d.targetTerm)}**`;
      L.push(`- **${esc(e.term)}** vs ${tgt} — ${esc(d.explanation)}`);
    }
  }
  // citations
  if (e.sources && e.sources.length) {
    L.push('', '# Citations');
    e.sources.forEach((s, i) => {
      const label = [s.org, s.name, s.version, s.section].filter(Boolean).map(esc).join(' — ');
      L.push(s.url ? `[${i + 1}] [${label}](${esc(s.url)})` : `[${i + 1}] ${label}`);
    });
  }
  return L.join('\n') + '\n';
}

function conceptFrontmatter(e) {
  const tags = [...new Set([e.category, e.status].concat(e.standardBody ? [e.standardBody] : []).filter(Boolean))];
  const fm = {
    type: okfType(e.conceptType),
    title: e.term,
    description: esc(e.definition).trim(),
    tags,
    timestamp: `${(e.lastReviewed || TODAY)}T00:00:00Z`,
    // --- lossless extensions ---
    id: e.id,
    vertical: vertOf(e.category),
    category: e.category,
    conceptType: e.conceptType || '',
    status: e.status || 'active',
  };
  if (e.abbreviation) fm.abbreviation = e.abbreviation;
  if (e.term_ko) fm.term_ko = e.term_ko;
  if (e.definition_ko) fm.definition_ko = e.definition_ko;
  if (e.longDef) fm.longDef = e.longDef;
  if (e.longDef_ko) fm.longDef_ko = e.longDef_ko;
  if (e.standardBody) fm.standardBody = e.standardBody;
  if (e.aliases && e.aliases.length) fm.aliases = e.aliases;
  if (e.providerTerms && e.providerTerms.length) fm.providerTerms = e.providerTerms;
  if (e.relationships && e.relationships.length) fm.relationships = e.relationships.map(r => ({ type: r.type, targetTerm: r.targetTerm }));
  if (e.distinctions && e.distinctions.length) fm.distinctions = e.distinctions.map(d => ({ targetTerm: d.targetTerm, explanation: d.explanation, explanation_ko: d.explanation_ko || '' }));
  if (e.sources && e.sources.length) fm.sources = e.sources;
  if (e.icon) fm.icon = e.icon;
  return fm;
}

// ---- write concept files + per-subcategory index, grouped by vertical ----
// catsByVertical preserves CATS order within each vertical
const catsByVertical = new Map(VERTICALS.map(v => [v.id, []]));
for (const c of CATS) { const v = vertOf(c.id); (catsByVertical.get(v) || catsByVertical.set(v, []).get(v)).push(c); }

for (const c of CATS) {
  const list = (entriesByCat.get(c.id) || []).slice().sort((a, b) => a.term.localeCompare(b.term));
  if (!list.length) continue;
  const v = vertOf(c.id);
  const dir = join(OKF, v, c.id);
  mkdirSync(dir, { recursive: true });
  for (const e of list) {
    const md = matter.stringify('\n' + conceptBody(e), conceptFrontmatter(e), { lineWidth: -1 });
    writeFileSync(join(dir, `${e.id}.md`), md);
    fileCount++;
  }
  // subcategory index.md (reserved file: no frontmatter)
  const idx = [`# ${catName(c)}`, '', esc(c.desc_en || c.desc || '').trim(), ''];
  for (const e of list) idx.push(`* [${esc(e.term)}](${e.id}.md) - ${esc(e.definition).split(/(?<=\.)\s/)[0].slice(0, 140)}`);
  writeFileSync(join(dir, 'index.md'), idx.join('\n') + '\n');
}

// ---- per-vertical index.md (lists its subcategories) ----
for (const v of VERTICALS) {
  const cats = (catsByVertical.get(v.id) || []).filter(c => (entriesByCat.get(c.id) || []).length);
  if (!cats.length) continue;
  const vidx = [`# ${v.title} — ${v.short}`, '', esc(v.desc_en || ''), '', '# Subcategories', ''];
  for (const c of cats) {
    const n = (entriesByCat.get(c.id) || []).length;
    vidx.push(`* [${catName(c)}](${c.id}/) - ${esc(c.desc_en || c.desc || '')} (${n})`);
  }
  writeFileSync(join(OKF, v.id, 'index.md'), vidx.join('\n') + '\n');
}

// ---- root index.md (only place an index.md may carry frontmatter: okf_version) ----
const rootIdx = [
  '---', 'okf_version: "0.1"', '---', '',
  `# ${esc(META.name || 'Travel Wiki')} — Knowledge Bundle`, '',
  esc(META.tagline || '') + `  (${ENTRIES.length} concepts · ${VERTICALS.length} verticals · ${CATS.length} subcategories · bilingual KO/EN)`, '',
  'A cross-provider travel-industry terminology catalog as an OKF v0.1 bundle, organized as **verticals → subcategories → concepts**. Each concept is one markdown file with YAML frontmatter; relationships and distinctions are bundle-relative cross-links.', '',
  '# Verticals', '',
];
for (const v of VERTICALS) {
  const cats = (catsByVertical.get(v.id) || []).filter(c => (entriesByCat.get(c.id) || []).length);
  if (!cats.length) continue;
  const n = cats.reduce((a, c) => a + (entriesByCat.get(c.id) || []).length, 0);
  rootIdx.push(`* [${v.title} — ${v.short}](${v.id}/) - ${esc(v.desc_en || '')} (${cats.length} subcategories, ${n} concepts)`);
}
writeFileSync(join(OKF, 'index.md'), rootIdx.join('\n') + '\n');

// ---- log.md ----
const log = [
  '# Travel Wiki — Update Log', '',
  `## ${TODAY}`,
  `* **Restructure**: Reorganized the bundle into ${VERTICALS.length} verticals → ${CATS.length} subcategories → ${fileCount} concepts (okf/<vertical>/<subcategory>/<id>.md). Added a \`vertical\` field to every concept.`,
  '',
];
writeFileSync(join(OKF, 'log.md'), log.join('\n') + '\n');

console.log(`OKF bundle written -> okf/  (verticals -> subcategories -> concepts)`);
console.log(`verticals: ${VERTICALS.length} | subcategories: ${CATS.filter(c => (entriesByCat.get(c.id) || []).length).length} | concepts: ${fileCount} | + index.md (root + per-vertical + per-subcategory) + log.md`);
