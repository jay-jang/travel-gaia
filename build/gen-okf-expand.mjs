// Bake a term-expansion workflow from the current glossary (OKF era), vertical-aware.
// -> build/research-expand-workflow.mjs  (reuses research-expand-workflow.template.mjs)
import { readFileSync, writeFileSync } from 'node:fs';

const g = JSON.parse(readFileSync('data/glossary.json', 'utf8'));
const catTitle = new Map(g.categories.map(c => [c.id, c.title]));

// per-subcategory expansion plan: vertical context + target + research focus (add genuinely missing terms)
const CFG = {
  // AIR vertical
  'air-ops':     { v:'Air', target:5, focus:'항공 예약·운영(PNR/세그먼트/DCS/큐/메시징) 중 누락 표제어. 예: ticketing field, EMD 연계, schedule change 처리, type-A/B, PADIS 요소, divide booking 세부.' },
  'air-shop':    { v:'Air', target:5, focus:'항공 운임·재고·수익관리 중 누락. 예: fare ladder, branded fare attribute, ancillary bundling, AVS/seamless availability, married-segment logic, dynamic offer pricing.' },
  'air-ticket':  { v:'Air', target:4, focus:'항공 발권·주문 중 누락. 예: ONE Order OrderItem/Service, EMD-A vs EMD-S, ADM/ACM 세부, exchange/reissue 자동화, settlement document.' },
  'air-partner': { v:'Air', target:4, focus:'코드셰어·인터라인·스케줄 중 누락. 예: free-flow vs block codeshare, SPA 세부, IATCI(인터라인 체크인), alliance metal, ASKs/ASMs capacity.' },
  // LODGING vertical
  'hotel-rate':  { v:'Lodging', target:5, focus:'호텔 재고·요금 중 누락. 예: yield/overbooking(호텔), wash factor, group block, comp rooms, derived/dependent rate 세부, rate fence.' },
  'hotel-dist':  { v:'Lodging', target:5, focus:'호텔 유통·예약 중 누락. 예: GDS hotel(HCN), wholesale/merchant 모델, mapping/content(GIATA 외), metasearch(호텔), book-and-pay, connectivity certification.' },
  // GROUND vertical
  'car':         { v:'Ground', target:6, focus:'렌터카·모빌리티 중 누락. 예: rate qualifier, corporate discount(CD/BCD), loyalty(rental), no-show/late-return, mobility(car-share/ride-hail) 표준, GDS car(rate category).' },
  'rail':        { v:'Ground', target:6, focus:'철도·복합운송 중 누락. 예: OSDM offer/order(rail), open ticket, rail pass reservation, через-fare/through-rail, NRT/IRT 세부, station code(rail), TCV.' },
  // CRUISE vertical (thin -> more)
  'cruise':      { v:'Cruise', target:8, focus:'크루즈 유통·예약·운영 중 누락. 예: deck/category code, dining seating, gratuities, fly-cruise, shorex booking, GRT/berth, port charges/taxes, cruise GDS(예: cruise connectivity), late traveler, booking guarantee.' },
  // COMMON vertical
  'pay':         { v:'Common', target:5, focus:'결제·정산 중 누락. 예: settlement file(RET/HOT), card network(scheme), 3DS2 flow, refund/dispute lifecycle, FX/DCC 세부, ARC/BSP 차이 보강.' },
  'codes':       { v:'Common', target:4, focus:'식별자·코드 중 누락. 예: SSIM, office ID/IATA number 세부, baggage tag(IATA 753), aircraft registration, ATPCO codes, location identifier(추가).' },
  'customer':    { v:'Common', target:5, focus:'고객·로열티 중 누락. 예: tier benefit, points/miles 차이, household account, consent(GDPR 외 CCPA), biometric(One ID 세부), CDP/segmentation 보강.' },
  'standards':   { v:'Common', target:6, focus:'유통표준·API 중 누락. 예: NDC message(AirShopping/OfferPrice/OrderCreate), schema versioning, OAuth/security, webhook/async, capability exchange, IATA codeset.' },
  'insurance':   { v:'Common', target:5, focus:'여행보험·보호 중 누락. 예: named-peril vs all-risk, deductible/excess, policy schedule, assistance services, baggage/delay coverage, IPT(보험세).' },
  'disruption':  { v:'Common', target:4, focus:'운항중단·승객권리 중 누락. 예: rebooking/rerouting rules, EC261 compensation tiers, duty of care 세부, missed connection, involuntary refund(추가).' },
  'sustainability':{ v:'Common', target:5, focus:'지속가능성·배출 중 누락. 예: SAF mandate/blending, carbon credit registry, scope1/2 vs scope3, well-to-wake, GHG factor, offset vs insetting.' },
};

const ids = Object.keys(CFG).filter(id => catTitle.has(id));
const cats = [];
const roster = [];
const entriesByCat = {};
g.entries.forEach(e => { (entriesByCat[e.category] = entriesByCat[e.category] || []).push(e); roster.push(e.term); });
for (const id of ids) {
  const existing = (entriesByCat[id] || []).map(e => e.term);
  cats.push({ id, title: `${catTitle.get(id)} (vertical: ${CFG[id].v})`, isNew: false, target: CFG[id].target, focus: CFG[id].focus, existing });
}

const tpl = readFileSync('build/research-expand-workflow.template.mjs', 'utf8');
if (!tpl.includes('__DATA__')) { console.error('template missing __DATA__'); process.exit(1); }
writeFileSync('build/research-expand-workflow.mjs', tpl.replace('__DATA__', JSON.stringify({ cats, roster })));

const total = cats.reduce((a, c) => a + c.target, 0);
console.log('wrote build/research-expand-workflow.mjs');
console.log(`subcategories: ${cats.length} | roster: ${roster.length} | target new: ${total} -> ~${roster.length + total}`);
console.log('per cat target:', cats.map(c => `${c.id}:${c.target}`).join(' '));
