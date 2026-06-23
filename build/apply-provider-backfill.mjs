// Apply provider-backfill workflow result: add new providerTerms to glossary entries.
// usage: node build/apply-provider-backfill.mjs <result.json>
import { readFileSync, writeFileSync } from 'node:fs';

const resFile = process.argv[2];
if (!resFile) { console.error('usage: node build/apply-provider-backfill.mjs <result.json>'); process.exit(1); }
const parsed = JSON.parse(readFileSync(resFile, 'utf8'));
const data = Array.isArray(parsed) ? parsed : (parsed.result || []);

const g = JSON.parse(readFileSync('data/glossary.json', 'utf8'));
const byId = new Map(g.entries.map(e => [e.id, e]));
const norm = s => String(s || '').toLowerCase().replace(/\s+/g, ' ').trim();
const REL = new Set(['same', 'narrower', 'broader', 'related', 'conflicting']);

let added = 0, skipped = 0; const per = {};
for (const r of data) {
  for (const it of (r.items || [])) {
    const e = byId.get(it.id); if (!e) continue;
    e.providerTerms = e.providerTerms || [];
    const seen = new Set(e.providerTerms.map(p => norm(p.provider) + '|' + norm(p.term)));
    for (const pt of (it.providerTerms || [])) {
      if (!pt.provider || !pt.term || !String(pt.provider).trim() || !String(pt.term).trim()) { skipped++; continue; }
      const key = norm(pt.provider) + '|' + norm(pt.term);
      if (seen.has(key)) { skipped++; continue; }
      seen.add(key);
      e.providerTerms.push({
        provider: String(pt.provider).trim(), term: String(pt.term).trim(),
        context: pt.context || '', context_ko: pt.context_ko || '',
        relationship: REL.has(pt.relationship) ? pt.relationship : 'related',
      });
      added++; per[r.id] = (per[r.id] || 0) + 1;
    }
  }
}
writeFileSync('data/glossary.json', JSON.stringify(g, null, 2));
const withProv = g.entries.filter(e => (e.providerTerms || []).length).length;
console.log(`applied: +${added} providerTerms (skipped ${skipped} dup/blank). entries with providerTerms: ${withProv}/${g.entries.length} (${Math.round(100 * withProv / g.entries.length)}%)`);
console.log('per cat:', JSON.stringify(per));
console.log('next: node build/to-okf.mjs && node build/build.mjs && node build/okf-validate.mjs');
