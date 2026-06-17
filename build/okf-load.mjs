// Shared OKF v0.1 bundle loader. Used by build.mjs (to build the site) and
// okf-validate.mjs (conformance + round-trip checks).
import { readdirSync, readFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import matter from 'gray-matter';

export const RESERVED = new Set(['index.md', 'log.md']);

// recursively list concept files (non-reserved *.md) under dir
export function listConceptFiles(dir, base = dir, out = []) {
  for (const name of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, name.name);
    if (name.isDirectory()) listConceptFiles(full, base, out);
    else if (name.name.endsWith('.md') && !RESERVED.has(name.name)) out.push(full);
  }
  return out.sort();
}

// reconstruct a catalog entry from a concept's frontmatter (lossless inverse of to-okf.mjs)
export function fmToEntry(fm, fallbackId, fallbackCat, fallbackVert) {
  const e = { ...fm };
  e.term = fm.title;
  e.definition = fm.description;
  e.id = fm.id || fallbackId;
  e.category = fm.category || fallbackCat;
  e.vertical = fm.vertical || fallbackVert || '';
  e.lastReviewed = fm.timestamp ? String(fm.timestamp).slice(0, 10) : '';
  // strip OKF-standard-only keys that are represented elsewhere on the entry
  delete e.title; delete e.description; delete e.timestamp; delete e.tags; delete e.type;
  return e;
}

// load all concepts in a bundle into entries[]
export function loadOkf(okfDir) {
  const files = listConceptFiles(okfDir);
  const entries = [];
  const issues = [];
  for (const f of files) {
    let parsed;
    try { parsed = matter(readFileSync(f, 'utf8')); }
    catch (err) { issues.push(`${relative(okfDir, f)}: frontmatter parse error: ${err.message}`); continue; }
    const fm = parsed.data || {};
    const rel = relative(okfDir, f).split(sep);   // [vertical, subcategory, <id>.md]
    const fbId = rel[rel.length - 1].replace(/\.md$/, '');
    const fbCat = rel.length >= 2 ? rel[rel.length - 2] : '';
    const fbVert = rel.length >= 3 ? rel[rel.length - 3] : (rel[0] || '');
    if (!fm.type || !String(fm.type).trim()) issues.push(`${relative(okfDir, f)}: missing required non-empty 'type'`);
    entries.push(fmToEntry(fm, fbId, fbCat, fbVert));
  }
  return { entries, files, issues };
}
