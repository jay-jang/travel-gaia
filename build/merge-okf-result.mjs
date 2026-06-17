// Merge a research-expand workflow result into data/glossary.json (OKF era).
// New entries are deduped by id/term, tagged with their category; then run
// `node build/to-okf.mjs` (regenerates okf/ in vertical layout) and `node build/build.mjs`.
// usage: node build/merge-okf-result.mjs <result.json>
import { readFileSync, writeFileSync } from 'node:fs';

const resFile = process.argv[2];
if (!resFile) { console.error('usage: node build/merge-okf-result.mjs <result.json>'); process.exit(1); }
const parsed = JSON.parse(readFileSync(resFile, 'utf8'));
const data = Array.isArray(parsed) ? parsed : (parsed.result || []);
if (!data.length) { console.error('no result entries'); process.exit(1); }

const g = JSON.parse(readFileSync('data/glossary.json', 'utf8'));
const norm = s => String(s || '').toLowerCase().replace(/\s+/g, ' ').trim();
const ids = new Set(g.entries.map(e => e.id));
const terms = new Set(g.entries.map(e => norm(e.term)));

let added = 0; const per = {}; const skipped = [];
for (const r of data) {
  if (!r || !r.id) continue;
  for (const ne of (r.newEntries || [])) {
    if (!ne || !ne.id || !ne.term) continue;
    ne.category = r.id;
    if (ids.has(ne.id) || terms.has(norm(ne.term))) { skipped.push(ne.id); continue; }
    if (!ne.icon || !/<svg/i.test(ne.icon)) ne.icon = ne.icon || '';   // build reports icon coverage
    ids.add(ne.id); terms.add(norm(ne.term));
    g.entries.push(ne); added++; per[r.id] = (per[r.id] || 0) + 1;
  }
}
g.meta.entryCount = g.entries.length;
writeFileSync('data/glossary.json', JSON.stringify(g, null, 2));
console.log(`merged into glossary.json: +${added} (now ${g.entries.length}) · skipped dup ${skipped.length}`);
console.log('per cat:', JSON.stringify(per));
console.log('next: node build/to-okf.mjs && node build/build.mjs && node build/okf-validate.mjs');
