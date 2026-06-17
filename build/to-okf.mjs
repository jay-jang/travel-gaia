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
// bundle-relative path to a concept by id
const linkTo = (id) => { const cat = idToCat.get(id); return cat ? `/${cat}/${id}.md` : null; };
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

// ---- write concept files + per-category index ----
for (const c of CATS) {
  const list = (entriesByCat.get(c.id) || []).slice().sort((a, b) => a.term.localeCompare(b.term));
  if (!list.length) continue;
  mkdirSync(join(OKF, c.id), { recursive: true });
  for (const e of list) {
    const md = matter.stringify('\n' + conceptBody(e), conceptFrontmatter(e), { lineWidth: -1 });
    writeFileSync(join(OKF, c.id, `${e.id}.md`), md);
    fileCount++;
  }
  // category index.md (reserved file: no frontmatter)
  const idx = [`# ${catName(c)}`, '', esc(c.desc_en || c.desc || '').trim(), ''];
  for (const e of list) idx.push(`* [${esc(e.term)}](${e.id}.md) - ${esc(e.definition).split(/(?<=\.)\s/)[0].slice(0, 140)}`);
  writeFileSync(join(OKF, c.id, 'index.md'), idx.join('\n') + '\n');
}

// ---- root index.md (only place an index.md may carry frontmatter: okf_version) ----
const rootIdx = [
  '---', 'okf_version: "0.1"', '---', '',
  `# ${esc(META.name || 'Travel Gaia')} — Knowledge Bundle`, '',
  esc(META.tagline || '') + `  (${ENTRIES.length} concepts · ${CATS.length} categories · bilingual KO/EN)`, '',
  'A cross-provider travel-industry terminology catalog as an OKF v0.1 bundle: each concept is one markdown file with YAML frontmatter; relationships and distinctions are bundle-relative cross-links.', '',
  '# Categories', '',
];
for (const c of CATS) {
  const n = (entriesByCat.get(c.id) || []).length; if (!n) continue;
  rootIdx.push(`* [${catName(c)}](${c.id}/) - ${esc(c.desc_en || c.desc || '')} (${n})`);
}
writeFileSync(join(OKF, 'index.md'), rootIdx.join('\n') + '\n');

// ---- log.md ----
const log = [
  '# Travel Gaia — Update Log', '',
  `## ${TODAY}`,
  `* **Re-architecture**: Restructured the catalog into an OKF v0.1 knowledge bundle (${fileCount} concept files across ${CATS.length} categories). \`build/build.mjs\` now consumes \`okf/\` as the source of truth.`,
  '',
];
writeFileSync(join(OKF, 'log.md'), log.join('\n') + '\n');

console.log(`OKF bundle written -> okf/`);
console.log(`concept files: ${fileCount} | categories: ${CATS.filter(c => (entriesByCat.get(c.id) || []).length).length} | + index.md (root + per-cat) + log.md`);
