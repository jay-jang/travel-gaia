// Make distinctions bidirectional in data/glossary.json: for every A->B distinction
// lacking a B->A counterpart, add the reverse on B (reusing the contrast explanation).
// then: node build/to-okf.mjs && node build/build.mjs
import { readFileSync, writeFileSync } from 'node:fs';

const g = JSON.parse(readFileSync('data/glossary.json', 'utf8'));
const E = g.entries;
const byId = new Map(E.map(e => [e.id, e]));
const norm = s => String(s || '').toLowerCase().replace(/\s+/g, ' ').trim();
const lookup = new Map();
const add = (k, id) => { const n = norm(k); if (n && !lookup.has(n)) lookup.set(n, id); };
for (const e of E) add(e.term, e.id);
for (const e of E) { add(e.abbreviation, e.id); (e.aliases || []).forEach(a => add(a, e.id)); }
const resolve = d => (d.targetId && byId.has(d.targetId)) ? d.targetId : lookup.get(norm(d.targetTerm));

// snapshot original distinctions so newly-added reverses aren't re-processed
const orig = new Map(E.map(e => [e.id, (e.distinctions || []).slice()]));
const pairs = new Set();
for (const e of E) for (const d of orig.get(e.id)) { const t = resolve(d); if (t && t !== e.id) pairs.add(e.id + '>' + t); }

let added = 0;
for (const e of E) {
  for (const d of orig.get(e.id)) {
    const t = resolve(d); if (!t || t === e.id) continue;
    if (pairs.has(t + '>' + e.id)) continue;                 // reverse already exists
    const B = byId.get(t); B.distinctions = B.distinctions || [];
    B.distinctions.push({ targetTerm: e.term, explanation: d.explanation || '', explanation_ko: d.explanation_ko || '' });
    pairs.add(t + '>' + e.id); added++;
  }
}
g.meta = g.meta || {};
writeFileSync('data/glossary.json', JSON.stringify(g, null, 2));
console.log(`distinction symmetry: added ${added} reverse links. now bidirectional.`);
console.log('next: node build/to-okf.mjs && node build/build.mjs && node build/okf-validate.mjs');
