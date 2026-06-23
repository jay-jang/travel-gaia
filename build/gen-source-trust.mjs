// Bake per-category sources into the source-trust workflow template.
import { readFileSync, writeFileSync } from 'node:fs';
const g = JSON.parse(readFileSync('data/glossary.json', 'utf8'));
const catTitle = new Map(g.categories.map(c => [c.id, c.title]));
const shortDef = e => String(e.definition || '').split(/(?<=\.)\s/)[0].slice(0, 150);

const catEntries = {};
for (const e of g.entries) {
  if (!(e.sources || []).length) continue;
  (catEntries[e.category] = catEntries[e.category] || []).push({
    id: e.id, term: e.term, def: shortDef(e), conceptType: e.conceptType || '',
    sources: (e.sources || []).map(s => ({ name: s.name || '', org: s.org || '', url: s.url || '', version: s.version || '', section: s.section || '' })),
  });
}
const cats = Object.keys(catEntries).map(id => ({ id, title: catTitle.get(id) || id, entries: catEntries[id] }));
const tpl = readFileSync('build/source-trust-workflow.template.mjs', 'utf8');
const out = tpl.replace('__DATA__', JSON.stringify({ cats }));
writeFileSync('build/source-trust-workflow.mjs', out);
const totSrc = cats.reduce((a, c) => a + c.entries.reduce((b, e) => b + e.sources.length, 0), 0);
console.log('wrote build/source-trust-workflow.mjs');
console.log(`categories: ${cats.length} | sources to classify/verify: ${totSrc} | payload KB: ${(out.length / 1024).toFixed(0)}`);
