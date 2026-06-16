// Remove relationships/distinctions whose targetTerm does not resolve to any entry
// (or is a self-ref), using the SAME term/abbr/alias lookup as build.mjs.
// This makes the build report 0 unresolved cross-refs (verify-ui asserts this).
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';

const DATA = 'data';
const norm = s => String(s || '').toLowerCase().replace(/\s+/g, ' ').trim();
const files = readdirSync(DATA).filter(f => /^cat-.*\.json$/.test(f)).sort();
const cats = files.map(f => ({ f, arr: JSON.parse(readFileSync(`${DATA}/${f}`, 'utf8')) }));

// build lookup exactly like build.mjs: canonical terms first, then abbr/aliases
const all = [];
cats.forEach(c => all.push(...c.arr));
const lookup = new Map();
const add = (k, id) => { const n = norm(k); if (n && !lookup.has(n)) lookup.set(n, id); };
for (const e of all) add(e.term, e.id);
for (const e of all) { add(e.abbreviation, e.id); (e.aliases || []).forEach(a => add(a, e.id)); }

const resolves = (target, fromId) => { const id = lookup.get(norm(target)); return id && id !== fromId; };

let prunedRel = 0, prunedDist = 0;
const removed = [];
for (const c of cats) {
  for (const e of c.arr) {
    if (Array.isArray(e.relationships)) {
      const before = e.relationships.length;
      e.relationships = e.relationships.filter(r => r && r.targetTerm && resolves(r.targetTerm, e.id));
      const d = before - e.relationships.length; if (d) { prunedRel += d; removed.push(`${e.id} rel x${d}`); }
    }
    if (Array.isArray(e.distinctions)) {
      const before = e.distinctions.length;
      e.distinctions = e.distinctions.filter(x => x && x.targetTerm && resolves(x.targetTerm, e.id));
      const d = before - e.distinctions.length; if (d) { prunedDist += d; removed.push(`${e.id} dist x${d}`); }
    }
  }
  writeFileSync(`${DATA}/${c.f}`, JSON.stringify(c.arr, null, 2));
}
console.log(`pruned ${prunedRel} relationships + ${prunedDist} distinctions (unresolved/self-ref)`);
if (removed.length) console.log('affected:', removed.join(' | '));
