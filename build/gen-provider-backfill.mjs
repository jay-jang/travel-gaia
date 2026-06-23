// Bake entries lacking (rich) providerTerms into the provider-backfill workflow template.
import { readFileSync, writeFileSync } from 'node:fs';

const g = JSON.parse(readFileSync('data/glossary.json', 'utf8'));
const catTitle = new Map(g.categories.map(c => [c.id, c.title]));
const shortDef = e => String(e.definition || '').split(/(?<=\.)\s/).slice(0, 2).join(' ').slice(0, 220);

const catEntries = {};
for (const e of g.entries) {
  const have = (e.providerTerms || []).map(p => p.provider).filter(Boolean);
  if (have.length >= 2) continue;                 // already has cross-provider mapping
  (catEntries[e.category] = catEntries[e.category] || []).push({ id: e.id, term: e.term, def: shortDef(e), have: have.join(', ') });
}
const cats = Object.keys(catEntries).map(id => ({ id, title: catTitle.get(id) || id, entries: catEntries[id] }));

const tpl = readFileSync('build/provider-backfill-workflow.template.mjs', 'utf8');
if (!tpl.includes('__DATA__')) { console.error('template missing __DATA__'); process.exit(1); }
const out = tpl.replace('__DATA__', JSON.stringify({ cats }));
writeFileSync('build/provider-backfill-workflow.mjs', out);

const totEntries = cats.reduce((a, c) => a + c.entries.length, 0);
console.log('wrote build/provider-backfill-workflow.mjs');
console.log(`categories: ${cats.length} | entries to enrich (<2 providers): ${totEntries} | payload KB: ${(out.length / 1024).toFixed(0)}`);
