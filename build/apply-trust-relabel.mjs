// Apply trust-relabel workflow result to data/glossary.json:
//  - fill empty source.url from web-found URLs (validated format)
//  - reclassify `related` relationships to precise types
// usage: node build/apply-trust-relabel.mjs <result.json>
import { readFileSync, writeFileSync } from 'node:fs';

const resFile = process.argv[2];
if (!resFile) { console.error('usage: node build/apply-trust-relabel.mjs <result.json>'); process.exit(1); }
const parsed = JSON.parse(readFileSync(resFile, 'utf8'));
const data = Array.isArray(parsed) ? parsed : (parsed.result || []);

const g = JSON.parse(readFileSync('data/glossary.json', 'utf8'));
const byId = new Map(g.entries.map(e => [e.id, e]));
const norm = s => String(s || '').toLowerCase().replace(/\s+/g, ' ').trim();
const REL = new Set(['broader', 'narrower', 'parent', 'child', 'sameAs', 'contrasts', 'replaces']);
const okUrl = u => typeof u === 'string' && /^https?:\/\/[^\s]+\.[^\s]+/.test(u.trim());

let urls = 0, relabels = 0, badUrl = 0;
for (const r of data) {
  for (const it of (r.items || [])) {
    const e = byId.get(it.id); if (!e) continue;
    for (const su of (it.sourceUrls || [])) {
      if (!okUrl(su.url)) { if (su.url) badUrl++; continue; }
      const s = (e.sources || []).find(x => norm(x.name) === norm(su.name) && (!su.org || norm(x.org) === norm(su.org)) && !(x.url && x.url.trim()))
        || (e.sources || []).find(x => norm(x.name) === norm(su.name) && !(x.url && x.url.trim()));
      if (s) { s.url = su.url.trim(); urls++; }
    }
    for (const rl of (it.relabels || [])) {
      if (!REL.has(rl.type)) continue;
      const rels = (e.relationships || []).filter(x => norm(x.targetTerm) === norm(rl.targetTerm) && x.type === 'related');
      rels.forEach(x => { x.type = rl.type; relabels++; });
    }
  }
}
writeFileSync('data/glossary.json', JSON.stringify(g, null, 2));
console.log(`applied: +${urls} source URLs · ${relabels} relationships relabeled · ${badUrl} bad URLs rejected`);
console.log('next: node build/to-okf.mjs && node build/build.mjs && node build/okf-validate.mjs');
