// Bake per-category data (sources missing URL + `related` edges w/ target defs) into
// build/trust-relabel-workflow.template.mjs -> build/trust-relabel-workflow.mjs
import { readFileSync, writeFileSync } from 'node:fs';

const g = JSON.parse(readFileSync('data/glossary.json', 'utf8'));
const E = g.entries;
const catTitle = new Map(g.categories.map(c => [c.id, c.title]));
const byId = new Map(E.map(e => [e.id, e]));
const norm = s => String(s || '').toLowerCase().replace(/\s+/g, ' ').trim();
const lookup = new Map();
const add = (k, id) => { const n = norm(k); if (n && !lookup.has(n)) lookup.set(n, id); };
for (const e of E) add(e.term, e.id);
for (const e of E) { add(e.abbreviation, e.id); (e.aliases || []).forEach(a => add(a, e.id)); }
const shortDef = e => String(e.definition || '').split(/(?<=\.)\s/)[0].slice(0, 150);

const catEntries = {};
for (const e of E) {
  const missingSources = (e.sources || []).filter(s => !(s.url && String(s.url).trim()))
    .map(s => ({ org: s.org || '', name: s.name || '', version: s.version || '', section: s.section || '' }));
  const related = (e.relationships || []).filter(r => r.type === 'related').map(r => {
    const tid = r.targetId || lookup.get(norm(r.targetTerm));
    return { targetTerm: r.targetTerm, targetDef: tid && byId.get(tid) ? shortDef(byId.get(tid)) : '' };
  });
  if (!missingSources.length && !related.length) continue;
  (catEntries[e.category] = catEntries[e.category] || []).push({ id: e.id, term: e.term, def: shortDef(e), missingSources, related });
}

const cats = Object.keys(catEntries).map(id => ({ id, title: catTitle.get(id) || id, entries: catEntries[id] }));

const tpl = readFileSync('build/trust-relabel-workflow.template.mjs', 'utf8');
if (!tpl.includes('__DATA__')) { console.error('template missing __DATA__'); process.exit(1); }
writeFileSync('build/trust-relabel-workflow.mjs', tpl.replace('__DATA__', JSON.stringify({ cats })));

const totSrc = cats.reduce((a, c) => a + c.entries.reduce((b, e) => b + e.missingSources.length, 0), 0);
const totRel = cats.reduce((a, c) => a + c.entries.reduce((b, e) => b + e.related.length, 0), 0);
console.log('wrote build/trust-relabel-workflow.mjs');
console.log(`categories: ${cats.length} | sources missing URL: ${totSrc} | related edges to review: ${totRel} | payload KB: ${(tpl.replace('__DATA__', JSON.stringify({ cats })).length / 1024).toFixed(0)}`);
