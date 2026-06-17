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

console.log(`\n${fail ? 'FAIL (' + fail + ' problem groups)' : 'ALL OKF CHECKS PASSED'}`);
process.exit(fail ? 1 : 0);
