#!/usr/bin/env node
// OKF v0.1 conformance check + lossless round-trip check vs data/glossary.json.
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { loadOkf } from './okf-load.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OKF = join(ROOT, 'okf');
const { entries, files, issues } = loadOkf(OKF);

let fail = 0;
console.log(`=== OKF conformance ===`);
console.log(`concept files: ${files.length}`);
if (issues.length) { fail += issues.length; console.log(`CONFORMANCE ISSUES (${issues.length}):`); issues.slice(0, 20).forEach(i => console.log('  ' + i)); }
else console.log(`OK: every concept has parseable frontmatter with non-empty 'type'`);

// round-trip vs glossary.json (the data the bundle was generated from)
if (existsSync(join(ROOT, 'data', 'glossary.json'))) {
  const g = JSON.parse(readFileSync(join(ROOT, 'data', 'glossary.json'), 'utf8'));
  const orig = new Map(g.entries.map(e => [e.id, e]));
  const got = new Map(entries.map(e => [e.id, e]));
  console.log(`\n=== round-trip vs glossary.json ===`);
  console.log(`original entries: ${orig.size} | loaded from okf: ${got.size}`);
  const missing = [...orig.keys()].filter(id => !got.has(id));
  const extra = [...got.keys()].filter(id => !orig.has(id));
  if (missing.length) { fail++; console.log(`MISSING in okf (${missing.length}): ${missing.slice(0, 10).join(', ')}`); }
  if (extra.length) { fail++; console.log(`EXTRA in okf (${extra.length}): ${extra.slice(0, 10).join(', ')}`); }

  const norm = v => JSON.stringify(v ?? null);
  const SCALARS = ['term', 'definition', 'term_ko', 'definition_ko', 'longDef', 'longDef_ko', 'conceptType', 'status', 'abbreviation', 'standardBody', 'category', 'icon', 'lastReviewed'];
  let mism = 0; const examples = [];
  for (const [id, o] of orig) {
    const e = got.get(id); if (!e) continue;
    const diffs = [];
    for (const k of SCALARS) if (norm(o[k] || '') !== norm(e[k] || '')) diffs.push(k);
    if (norm(o.aliases || []) !== norm(e.aliases || [])) diffs.push('aliases');
    if (norm(o.sources || []) !== norm(e.sources || [])) diffs.push('sources');
    if (norm(o.providerTerms || []) !== norm(e.providerTerms || [])) diffs.push('providerTerms');
    const rel = a => (a || []).map(r => ({ type: r.type, targetTerm: r.targetTerm }));
    if (norm(rel(o.relationships)) !== norm(rel(e.relationships))) diffs.push('relationships');
    const dis = a => (a || []).map(d => ({ targetTerm: d.targetTerm, explanation: d.explanation, explanation_ko: d.explanation_ko || '' }));
    if (norm(dis(o.distinctions)) !== norm(dis(e.distinctions))) diffs.push('distinctions');
    if (diffs.length) { mism++; if (examples.length < 8) examples.push(`${id}: ${diffs.join(',')}`); }
  }
  if (mism) { fail++; console.log(`FIELD MISMATCHES: ${mism} entries`); examples.forEach(x => console.log('  ' + x)); }
  else console.log(`OK: all ${orig.size} entries round-trip identically (term/defs/KO/aliases/providerTerms/relationships/distinctions/sources/icon)`);
}

// ---- content-health (informational; does not fail the build) ----
console.log(`\n=== content health (WARN, non-fatal) ===`);
{
  const norm2 = s => String(s || '').toLowerCase().replace(/\s+/g, ' ').trim();
  const idByTerm = new Map(); for (const e of entries) { const n = norm2(e.term); if (n && !idByTerm.has(n)) idByTerm.set(n, e.id); (e.aliases || []).forEach(a => { const k = norm2(a); if (k && !idByTerm.has(k)) idByTerm.set(k, e.id); }); if (e.abbreviation) { const k = norm2(e.abbreviation); if (k && !idByTerm.has(k)) idByTerm.set(k, e.id); } }
  const byId = new Map(entries.map(e => [e.id, e]));
  const PRIMARY = new Set(['regulation', 'standard-body', 'regulator-guidance', 'association', 'vendor-doc']);
  const tokenCheck = (val, quote) => { if (!val || !String(val).trim()) return true; if (!quote) return false; const q = quote.toLowerCase(); const toks = String(val).toLowerCase().split(/[^a-z0-9.]+/).filter(t => t.length >= 2 || /[0-9]/.test(t)); return toks.length > 0 && toks.every(t => q.includes(t)); };
  let cites = 0, citesUrl = 0, noSrc = 0, withProv = 0, rels = 0, relRelated = 0;
  let citesPrimary = 0, citesVer = 0, allSecondary = 0, verNoQuote = 0, verTokenMiss = 0, conceptStdNoPrimary = 0;
  const distPairs = new Set();
  for (const e of entries) {
    if (!(e.sources || []).length) noSrc++;
    const srcs = e.sources || [];
    const hasPrimary = srcs.some(s => PRIMARY.has(s.tier));
    if (srcs.length && !hasPrimary) allSecondary++;
    if (/standard|regulation/.test(e.conceptType || '') && srcs.length && !hasPrimary) conceptStdNoPrimary++;
    srcs.forEach(s => { cites++; if (s.url && String(s.url).trim()) citesUrl++; if (PRIMARY.has(s.tier)) citesPrimary++;
      const vs = (s.version && s.version.trim()) || (s.section && s.section.trim());
      if (vs) { citesVer++; if (!s.verifyQuote || !(s.url && s.url.trim())) verNoQuote++; else if (!tokenCheck(s.version, s.verifyQuote) || !tokenCheck(s.section, s.verifyQuote)) verTokenMiss++; } });
    if ((e.providerTerms || []).length) withProv++;
    (e.relationships || []).forEach(r => { rels++; if (r.type === 'related') relRelated++; });
    (e.distinctions || []).forEach(d => { const t = (d.targetId && byId.has(d.targetId)) ? d.targetId : idByTerm.get(norm2(d.targetTerm)); if (t && t !== e.id) distPairs.add(e.id + '>' + t); });
  }
  let oneway = 0; for (const k of distPairs) { const [a, b] = k.split('>'); if (!distPairs.has(b + '>' + a)) oneway++; }
  const pct = (a, b) => b ? Math.round(100 * a / b) + '%' : '-';
  console.log(`  citations: ${cites} | with URL: ${citesUrl} (${pct(citesUrl, cites)})${cites - citesUrl ? `  ⚠ ${cites - citesUrl} without URL` : ''}`);
  console.log(`  citations primary-tier: ${citesPrimary} (${pct(citesPrimary, cites)}) | with clause/version: ${citesVer} (${pct(citesVer, cites)})`);
  console.log(`  entries with no primary source: ${allSecondary}${conceptStdNoPrimary ? ` (incl. ${conceptStdNoPrimary} standard/regulation terms ⚠)` : ''}`);
  console.log(`  clause/version w/o evidence(url+verifyQuote): ${verNoQuote}${verNoQuote ? ' ⚠' : ' ✓'} | token-mismatch vs evidence (hallucination): ${verTokenMiss}${verTokenMiss ? ' ⚠' : ' ✓'}`);
  console.log(`  entries without any source: ${noSrc}`);
  console.log(`  entries with providerTerms: ${withProv}/${entries.length} (${pct(withProv, entries.length)})`);
  console.log(`  relationships: ${rels} | type=related: ${relRelated} (${pct(relRelated, rels)})`);
  console.log(`  distinction directed links: ${distPairs.size} | one-way (no reverse): ${oneway}${oneway ? '  ⚠' : ' ✓'}`);
}

console.log(`\n${fail ? 'FAIL (' + fail + ' problem groups)' : 'ALL OKF CHECKS PASSED'}`);
process.exit(fail ? 1 : 0);
