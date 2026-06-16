// Bakes the unverified expansion entries into build/verify-only-workflow.template.mjs
// -> build/verify-only-workflow.mjs (ready for the Workflow tool).
import { readFileSync, writeFileSync } from 'node:fs';

const TITLES = {
  'air-ops': 'Air — Operations & Reservation', 'air-shop': 'Air — Shopping, Pricing & Availability',
  'air-ticket': 'Air — Ticketing & Orders', 'air-partner': 'Air — Codeshare, Interline & Schedules',
  'hotel-rate': 'Hotel — Inventory & Rates', 'hotel-dist': 'Hotel — Distribution & Booking',
  'pay': 'Payments & Settlement', 'codes': 'Identifiers & Codes',
  'customer': 'Customer, Loyalty & Profiles', 'standards': 'Distribution Standards & APIs',
  'car': 'Car Rental & Mobility', 'rail': 'Rail & Multimodal', 'cruise': 'Cruise & Sea',
  'insurance': 'Travel Insurance & Protection', 'disruption': 'Disruption & Passenger Rights',
  'sustainability': 'Sustainability & Emissions',
};

// categories whose verify agents hit the session limit in the first run (unverified)
const UNVERIFIED = new Set(['air-ops', 'air-partner', 'hotel-rate', 'codes', 'car', 'cruise', 'rail', 'insurance', 'disruption', 'sustainability']);

const p = JSON.parse(readFileSync('build/expand-result.raw.json', 'utf8'));
const data = Array.isArray(p) ? p : (p.result || []);

const items = [];
for (const r of data) {
  if (!UNVERIFIED.has(r.id)) continue;
  for (const e of (r.newEntries || [])) {
    // strip icon to keep the baked payload smaller (icon is not verified)
    const { icon, ...rest } = e;
    items.push({ cat: r.id, catTitle: TITLES[r.id] || r.id, entry: rest });
  }
}

const tpl = readFileSync('build/verify-only-workflow.template.mjs', 'utf8');
if (!tpl.includes('__DATA__')) { console.error('ERROR: template missing __DATA__ token'); process.exit(1); }
const out = tpl.replace('__DATA__', JSON.stringify({ items }));
writeFileSync('build/verify-only-workflow.mjs', out);

console.log('wrote build/verify-only-workflow.mjs');
console.log('entries to verify:', items.length);
const per = {};
items.forEach(i => per[i.cat] = (per[i.cat] || 0) + 1);
console.log('per cat:', Object.entries(per).map(([k, v]) => `${k}:${v}`).join(' '));
console.log('baked payload KB:', (out.length / 1024).toFixed(0));
