// Merge expand-workflow result (array of {id,newEntries,icons}) into data/cat-*.json
// usage: node build/merge-expand.mjs <result.json>
import { readFileSync, writeFileSync } from 'node:fs';

const raw = readFileSync(process.argv[2], 'utf8');
// workflow output is a JSON object {summary,agentCount,logs,result:[...]}; accept that or a bare array
const parsed = JSON.parse(raw);
const data = Array.isArray(parsed) ? parsed : (parsed.result || []);
if (!data.length) { console.error('no result entries found'); process.exit(1); }

const norm = s => String(s || '').toLowerCase().replace(/\s+/g, ' ').trim();
let totNew = 0, totIcon = 0;
for (const r of data) {
  if (!r || !r.id) continue;
  const file = `data/cat-${r.id}.json`;
  let arr;
  try { arr = JSON.parse(readFileSync(file, 'utf8')); } catch { console.error(`skip ${r.id}: cannot read ${file}`); continue; }
  const byTerm = new Map(arr.map(e => [norm(e.term), e]));
  let iconAttached = 0;
  (r.icons || []).forEach(({ term, svg }) => { const e = byTerm.get(norm(term)); if (e && svg && /<svg/i.test(svg)) { e.icon = svg; iconAttached++; } });
  const ids = new Set(arr.map(e => e.id)), terms = new Set(arr.map(e => norm(e.term)));
  let added = 0;
  (r.newEntries || []).forEach(ne => {
    if (!ne || !ne.id || !ne.term) return;
    ne.category = r.id;
    if (ids.has(ne.id) || terms.has(norm(ne.term))) return; // dedup
    ids.add(ne.id); terms.add(norm(ne.term)); arr.push(ne); added++;
  });
  writeFileSync(file, JSON.stringify(arr, null, 2));
  totNew += added; totIcon += iconAttached;
  console.log(`${r.id}: +${added} new · ${iconAttached} icons · total ${arr.length}`);
}
console.log(`\nTOTAL: +${totNew} new entries · ${totIcon} icons attached`);
