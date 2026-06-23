// Apply source-trust workflow result to glossary: set tier; fill version/section ONLY when the
// value's tokens actually appear in the evidence verifyQuote (deterministic anti-hallucination).
// usage: node build/apply-source-trust.mjs <result.json>
import { readFileSync, writeFileSync } from 'node:fs';

const resFile = process.argv[2];
if (!resFile) { console.error('usage: node build/apply-source-trust.mjs <result.json>'); process.exit(1); }
const parsed = JSON.parse(readFileSync(resFile, 'utf8'));
const data = Array.isArray(parsed) ? parsed : (parsed.result || []);
const g = JSON.parse(readFileSync('data/glossary.json', 'utf8'));
const byId = new Map(g.entries.map(e => [e.id, e]));
const norm = s => String(s || '').toLowerCase().replace(/\s+/g, ' ').trim();
const TIERS = new Set(['regulation', 'standard-body', 'regulator-guidance', 'association', 'vendor-doc', 'encyclopedia', 'secondary']);
const PRIMARY = new Set(['regulation', 'standard-body', 'regulator-guidance', 'association', 'vendor-doc']);
const okUrl = u => typeof u === 'string' && /^https?:\/\/[^\s]+\.[^\s]+/.test(u.trim());
// value tokens (incl. numbers like 21.3) must ALL appear in the quote
const tokenCheck = (val, quote) => { if (!val || !String(val).trim()) return true; if (!quote) return false; const q = quote.toLowerCase();
  const toks = String(val).toLowerCase().split(/[^a-z0-9.]+/).filter(t => t.length >= 2 || /[0-9]/.test(t)); return toks.length > 0 && toks.every(t => q.includes(t)); };

let tier = 0, urls = 0, ver = 0, sec = 0, rejected = 0;
for (const r of data) {
  for (const it of (r.items || [])) {
    const e = byId.get(it.id); if (!e || !e.sources) continue;
    for (const su of (it.sources || [])) {
      const s = e.sources.find(x => norm(x.name) === norm(su.matchName)) || (e.sources.length === 1 ? e.sources[0] : null);
      if (!s) continue;
      if (su.tier && TIERS.has(su.tier)) { s.tier = su.tier; tier++; }
      // url: fill gap, or replace with a confirmed primary (verifyQuote present)
      if (okUrl(su.url)) { if (!(s.url && s.url.trim())) { s.url = su.url.trim(); urls++; }
        else if (su.verifyQuote && PRIMARY.has(su.tier) && su.url.trim() !== s.url.trim()) { s.url = su.url.trim(); urls++; } }
      // version/section: ONLY if tokens are present in verifyQuote
      const q = su.verifyQuote || '';
      if (su.version && String(su.version).trim()) { if (tokenCheck(su.version, q)) { s.version = String(su.version).trim(); s.verifyQuote = q.slice(0, 240); s.verified = true; ver++; } else rejected++; }
      if (su.section && String(su.section).trim()) { if (tokenCheck(su.section, q)) { s.section = String(su.section).trim(); s.verifyQuote = q.slice(0, 240); s.verified = true; sec++; } else rejected++; }
    }
  }
}
writeFileSync('data/glossary.json', JSON.stringify(g, null, 2));
console.log(`applied: tier ${tier} · url ${urls} · version ${ver} · section ${sec} | rejected (token-mismatch, anti-hallucination) ${rejected}`);
console.log('next: node build/to-okf.mjs && node build/build.mjs && node build/okf-validate.mjs');
