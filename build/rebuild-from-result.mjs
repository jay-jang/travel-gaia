// Clean reconciliation: final glossary = base 327 + ALL new entries from the (verified) expansion result.
// Starting from the committed base avoids keeping earlier unverified versions of re-verified entries.
// usage: node build/rebuild-from-result.mjs <result.json>
// then: node build/to-okf.mjs && node build/build.mjs && node build/okf-validate.mjs
import { readFileSync, writeFileSync } from 'node:fs';

const resFile = process.argv[2];
if (!resFile) { console.error('usage: node build/rebuild-from-result.mjs <result.json>'); process.exit(1); }

const base = JSON.parse(readFileSync('build/base-glossary-327.json', 'utf8'));
const cur = JSON.parse(readFileSync('data/glossary.json', 'utf8'));     // for meta/verticals/categories
const parsed = JSON.parse(readFileSync(resFile, 'utf8'));
const data = Array.isArray(parsed) ? parsed : (parsed.result || []);

const norm = s => String(s || '').toLowerCase().replace(/\s+/g, ' ').trim();
const entries = base.entries.slice();                                   // 327 base
const ids = new Set(entries.map(e => e.id));
const terms = new Set(entries.map(e => norm(e.term)));

let added = 0; const per = {}; let dup = 0;
for (const r of data) {
  if (!r || !r.id) continue;
  for (const ne of (r.newEntries || [])) {
    if (!ne || !ne.id || !ne.term) continue;
    ne.category = r.id;
    if (ids.has(ne.id) || terms.has(norm(ne.term))) { dup++; continue; }
    if (!ne.icon || !/<svg/i.test(ne.icon)) ne.icon = ne.icon || '';
    ids.add(ne.id); terms.add(norm(ne.term));
    entries.push(ne); added++; per[r.id] = (per[r.id] || 0) + 1;
  }
}

const glossary = Object.assign({}, cur, { entries });
glossary.meta = Object.assign({}, cur.meta, { entryCount: entries.length });
writeFileSync('data/glossary.json', JSON.stringify(glossary, null, 2));
console.log(`reconciled glossary: base ${base.entries.length} + new ${added} = ${entries.length} (dup skipped ${dup})`);
console.log('new per cat:', JSON.stringify(per));
console.log('next: node build/to-okf.mjs && node build/build.mjs && node build/okf-validate.mjs');
