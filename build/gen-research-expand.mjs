// Bakes per-category config + rosters into build/research-expand-workflow.template.mjs
// -> writes build/research-expand-workflow.mjs (ready for the Workflow tool).
import { readFileSync, writeFileSync } from 'node:fs';

// Per-category expansion plan. isNew categories start from 0 (foundational set);
// existing categories get weighted deepening (focused on fast-moving / high-demand areas).
const CFG = {
  // ---- existing categories: weighted deepening ----
  standards: { title: 'Distribution Standards & APIs', target: 12, focus: 'NDC/Offer-Order/ONE Order 심화, 메시지·스키마(EDIFACT, XML, JSON), 인증·거버넌스·인증 프로그램(예: NDC Certified/Capability), 신흥 유통 표준·프로토콜, 시장 어댑터/하이브리드 모델. (철도 OSDM은 rail 카테고리이므로 제외)' },
  pay: { title: 'Payments & Settlement', target: 10, focus: '카드/대체결제수단, 정산 심화(BSP/ARC, RET/HOT 파일, billing analysis), 사기·리스크(3-D Secure 2, 챠지백 라이프사이클), VCC/MoR 심화, 환불·디스퓨트, 통화(DCC), 인터체인지·수수료 구조, 결제 토큰·네트워크.' },
  'hotel-dist': { title: 'Hotel — Distribution & Booking', target: 10, focus: 'OTA/베드뱅크/채널매니저/스위치 심화, 메타서치·디스플레이, GDS 호텔(체인코드/HCN), ARI 메시징, 콘텐츠·매핑, 머천트 vs 에이전시 모델, 커미션·오버라이드, 직접예약 전환(direct booking).' },
  'air-shop': { title: 'Air — Shopping, Pricing & Availability', target: 9, focus: '운임 산출·재고·수익관리(RM) 심화, 브랜디드 페어·속성, NDC 다이내믹/컨티뉴어스 프라이싱, 운임규정 카테고리(Cat 1~50) 개념, 가용성 결정(AVS/seamless), 부대수입(ancillary) 프라이싱.' },
  customer: { title: 'Customer, Loyalty & Profiles', target: 7, focus: '로열티·프로파일 심화, 개인화·세그먼테이션, 동의·프라이버시(GDPR 외), 신원·생체(One ID 심화), 멤버십 제휴·포인트 환산, 고객 데이터 플랫폼(CDP).' },
  'air-ticket': { title: 'Air — Ticketing & Orders', target: 6, focus: '발권·주문 심화: ONE Order의 Order/OrderItem, EMD-A/EMD-S, ADM/ACM, 재발행·환불 자동화, IATA 표준 문서, 인터라인 정산 문서(IET).' },
  'hotel-rate': { title: 'Hotel — Inventory & Rates', target: 7, focus: '요금·재고 심화: 다이내믹/오픈 프라이싱, 파생 요금(derived rate), 멤버 요율, LRA/NLRA(Last Room Availability), 디파짓·개런티 정책, 가용성 컨트롤(CTA/CTD), 야간감사(night audit) 지표.' },
  'air-ops': { title: 'Air — Operations & Reservation', target: 6, focus: '예약·운영 심화: PNR 엘리먼트 구성, 분리·병합 심화, EMD 연계 SSR, 큐 관리, DCS·체크인 경계, 메시징(TTY/Type-B/PADIS).' },
  'air-partner': { title: 'Air — Codeshare, Interline & Schedules', target: 5, focus: '코드셰어·인터라인·공동운항 심화: free-flow vs block codeshare, 인터라인 e-ticket(IET), 프로레이션 심화, 얼라이언스 거버넌스, 슬롯/스케줄 조정(IATA SSIM/WSG).' },
  codes: { title: 'Identifiers & Codes', target: 6, focus: '식별자·코드 심화: ATPCO/운임 관련 코드, IATA SSIM 표기, 우편·위치(UN/LOCODE 외), 통화 소수자리(ISO 4217 minor unit), 항공사 prefix·numeric, GDS 오피스 식별자.' },
  // ---- new categories: foundational sets (start from 0) ----
  car: { title: 'Car Rental & Mobility', isNew: true, target: 12, focus: '렌터카 유통·예약·요율·보장의 핵심 표제어 기초 구축: rate plan(daily/weekly/monthly), CDW/LDW·SLI·PAI 보장, ACRISS/SIPP 차량 분류 코드, 보증금·연령 수수료, no-show, 편도 반납 수수료(one-way drop), 카운터 업셀, 차량군(car class), GDS 렌터카(CarMaster 등).' },
  rail: { title: 'Rail & Multimodal', isNew: true, target: 12, focus: '철도 유통·운임·복합운송 기초: OSDM(Open Sales and Distribution Model), 운임·예약 분리(open ticket vs reservation), 인터레일/유레일 패스, 좌석 예약(seat reservation), PNR-less 발권, 통합 운임(through fare), 복합운송(multimodal), 철도 운임 권역, NRT/오픈리턴.' },
  cruise: { title: 'Cruise & Sea', isNew: true, target: 11, focus: '크루즈 유통·예약 기초: 선실 등급(cabin category), 총톤수(GRT), 기항지(port of call), 선택 다이닝, 크루즈 단독 상품(cruise-only), 항만세·정부세(NCCF/port charges), 승선·하선(embark/disembark), 정원 점유(berth/double occupancy), 크루즈 예약(GDS/Revelex 등).' },
  insurance: { title: 'Travel Insurance & Protection', isNew: true, target: 11, focus: '여행보험·보호상품 기초: 여행취소(trip cancellation)·중단(interruption), CFAR(Cancel For Any Reason), 보장·면책(coverage/exclusion), 보험금 청구(claim), 인수(underwriting), 의료·긴급대피(medical evacuation), 부착률(attach rate), 보험 중개 규제, 머천트형 취소보호 상품.' },
  disruption: { title: 'Disruption & Passenger Rights', isNew: true, target: 12, focus: '운항중단·승객권리 기초: EU261/UK261, US DOT 2024 자동환불 규정, 결항·지연·초과예약 보상(denied boarding/DBC), 자발/비자발 탑승거부, 케어 의무(duty of care), 재수용(re-accommodation/IRROPS 심화), 탑맥 지연(tarmac delay rule), 수하물 배상(몬트리올 협약), 보상 면제(특별 상황/extraordinary circumstances).' },
  sustainability: { title: 'Sustainability & Emissions', isNew: true, target: 11, focus: '지속가능성·배출 기초: SAF(지속가능 항공연료), CORSIA, 탄소배출 산정(ICAO/GHG 방법론), 탄소상쇄(offset), book-and-claim, EU ETS 배출권, 항공 환경세, 그린 운임·탄소 라벨, RTK 기반 효율 지표.' },
};

const ids = Object.keys(CFG);
const cats = [];
const roster = [];
for (const id of ids) {
  let arr;
  try { arr = JSON.parse(readFileSync(`data/cat-${id}.json`, 'utf8')); }
  catch { console.error(`ERROR: cannot read data/cat-${id}.json — create it first`); process.exit(1); }
  const existing = arr.map(e => e.term);
  roster.push(...existing);
  cats.push({ id, title: CFG[id].title, isNew: !!CFG[id].isNew, target: CFG[id].target, focus: CFG[id].focus, existing });
}

const tpl = readFileSync('build/research-expand-workflow.template.mjs', 'utf8');
if (!tpl.includes('__DATA__')) { console.error('ERROR: template missing __DATA__ token'); process.exit(1); }
const out = tpl.replace('__DATA__', JSON.stringify({ cats, roster }));
writeFileSync('build/research-expand-workflow.mjs', out);

const totalTarget = cats.reduce((a, c) => a + c.target, 0);
console.log('wrote build/research-expand-workflow.mjs');
console.log(`categories: ${cats.length} (new: ${cats.filter(c => c.isNew).length}) | roster: ${roster.length}`);
console.log(`target new entries: ${totalTarget}  ->  projected total ~${roster.length + totalTarget}`);
console.log('per cat target:', cats.map(c => `${c.id}:${c.target}${c.isNew ? '*' : ''}`).join(' '));
