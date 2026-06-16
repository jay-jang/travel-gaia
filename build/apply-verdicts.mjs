// Apply verify-only workflow verdicts to data/cat-*.json
// usage: node build/apply-verdicts.mjs <verify-result.json>
// verdict drop/isReal=false -> remove entry; fix -> merge non-empty patch fields; keep/failed -> no change.
import { readFileSync, writeFileSync } from 'node:fs';

const resFile = process.argv[2];
if (!resFile) { console.error('usage: node build/apply-verdicts.mjs <verify-result.json>'); process.exit(1); }
const p = JSON.parse(readFileSync(resFile, 'utf8'));
const data = Array.isArray(p) ? p : (p.result || []);
if (!data.length) { console.error('no verdicts found in result'); process.exit(1); }

const isEmpty = v => v == null || (typeof v === 'string' && v.trim() === '') || (Array.isArray(v) && v.length === 0);

const byCat = {};
for (const r of data) { if (!r || !r.cat || !r.id) continue; (byCat[r.cat] = byCat[r.cat] || []).push(r); }

let totDrop = 0, totFix = 0, totKeep = 0, totFail = 0;
const droppedAll = [];
for (const cat of Object.keys(byCat)) {
  const file = `data/cat-${cat}.json`;
  let arr;
  try { arr = JSON.parse(readFileSync(file, 'utf8')); } catch { console.error(`skip ${cat}: cannot read ${file}`); continue; }
  const byId = new Map(arr.map(e => [e.id, e]));
  const dropIds = new Set();
  const fixedTerms = [];
  for (const r of byCat[cat]) {
    const v = r.v;
    if (!v) { totFail++; continue; }                                  // verifier died → keep author version
    if (v.verdict === 'drop' || v.isReal === false) { dropIds.add(r.id); droppedAll.push(`${cat}/${r.id}`); totDrop++; continue; }
    if (v.verdict === 'fix' && v.patch) {
      const e = byId.get(r.id);
      if (e) { let changed = 0; for (const k of Object.keys(v.patch)) { if (!isEmpty(v.patch[k])) { e[k] = v.patch[k]; changed++; } } if (changed) { fixedTerms.push(r.id); totFix++; } else totKeep++; }
      else totKeep++;
    } else totKeep++;
  }
  if (dropIds.size) arr = arr.filter(e => !dropIds.has(e.id));
  writeFileSync(file, JSON.stringify(arr, null, 2));
  console.log(`${cat}: drop ${dropIds.size}${dropIds.size ? ' [' + [...dropIds].join(', ') + ']' : ''} · fix ${fixedTerms.length} · total ${arr.length}`);
}
console.log(`\nTOTAL: keep ${totKeep} · fix ${totFix} · drop ${totDrop} · failed ${totFail}`);
if (droppedAll.length) console.log('dropped:', droppedAll.join(', '));
