export const meta = {
  name: 'travel-gaia-research-expand',
  description: 'Research-grounded term expansion: web-research candidates, author bilingual entries, adversarially fact-check each',
  phases: [
    { title: 'Research', detail: '웹 리서치로 누락/기초 표제어 후보 발굴' },
    { title: 'Author', detail: '카테고리별 신규 표제어 집필(EN/KO+SVG)' },
    { title: 'Verify', detail: '표제어별 적대적 팩트체크·교정' },
  ],
};

const DATA = {"cats":[{"id":"standards","title":"Distribution Standards & APIs","isNew":false,"target":12,"focus":"NDC/Offer-Order/ONE Order 심화, 메시지·스키마(EDIFACT, XML, JSON), 인증·거버넌스·인증 프로그램(예: NDC Certified/Capability), 신흥 유통 표준·프로토콜, 시장 어댑터/하이브리드 모델. (철도 OSDM은 rail 카테고리이므로 제외)","existing":["GDS","NDC","Offer","Order","OTA (Online Travel Agency)","OpenTravel Alliance","HTNG","Metasearch","Aggregator","ONE Order","EDIFACT","REST API","Direct Connect","Dynamic Packaging","Offer Management System","Order Management System (OMS)","Airline Retailing Maturity (ARM)","Shopping API","GDS Bypass"]},{"id":"pay","title":"Payments & Settlement","isNew":false,"target":10,"focus":"카드/대체결제수단, 정산 심화(BSP/ARC, RET/HOT 파일, billing analysis), 사기·리스크(3-D Secure 2, 챠지백 라이프사이클), VCC/MoR 심화, 환불·디스퓨트, 통화(DCC), 인터체인지·수수료 구조, 결제 토큰·네트워크.","existing":["BSP","ARC","IATA Clearing House","VCC","Merchant of Record","Agency Model","Merchant Model","3-D Secure","Chargeback","IATA EasyPay","PCI DSS","Strong Customer Authentication","Form of Payment","Remittance","Tokenization","Acquirer","Interchange Fee","Settlement Cycle"]},{"id":"hotel-dist","title":"Hotel — Distribution & Booking","isNew":false,"target":10,"focus":"OTA/베드뱅크/채널매니저/스위치 심화, 메타서치·디스플레이, GDS 호텔(체인코드/HCN), ARI 메시징, 콘텐츠·매핑, 머천트 vs 에이전시 모델, 커미션·오버라이드, 직접예약 전환(direct booking).","existing":["CRS","PMS","Channel Manager","ARI","Bedbank","Net Rate","Commissionable Rate","Cancellation Policy","Guarantee Policy","Free Sale","Hotel Switch","Property Mapping","Rate Shopping","Direct Booking","No-Show","Booking Engine","Distribution Cost","Two-Way XML"]},{"id":"air-shop","title":"Air — Shopping, Pricing & Availability","isNew":false,"target":9,"focus":"운임 산출·재고·수익관리(RM) 심화, 브랜디드 페어·속성, NDC 다이내믹/컨티뉴어스 프라이싱, 운임규정 카테고리(Cat 1~50) 개념, 가용성 결정(AVS/seamless), 부대수입(ancillary) 프라이싱.","existing":["Availability","RBD","Fare Basis Code","Fare Family","Origin & Destination","Journey","Fare Component","ATPCO","NUC","Overbooking","Fare Rule","Class of Service","Revenue Management","Fare Construction","Pricing Unit","Tax (YQ/YR)","Surcharge","Continuous Pricing"]},{"id":"customer","title":"Customer, Loyalty & Profiles","isNew":false,"target":7,"focus":"로열티·프로파일 심화, 개인화·세그먼테이션, 동의·프라이버시(GDPR 외), 신원·생체(One ID 심화), 멤버십 제휴·포인트 환산, 고객 데이터 플랫폼(CDP).","existing":["Passenger Type Code","Frequent Flyer Program","Frequent Flyer Number","IATA One ID","Customer Profile","Loyalty Tier Status","Name Change","PRM","Secure Flight","GDPR Consent","Known Traveler Number","Redress Number","Unaccompanied Minor","Mileage Accrual","Award Redemption","Companion","Traveler Preference","Corporate Profile"]},{"id":"air-ticket","title":"Air — Ticketing & Orders","isNew":false,"target":6,"focus":"발권·주문 심화: ONE Order의 Order/OrderItem, EMD-A/EMD-S, ADM/ACM, 재발행·환불 자동화, IATA 표준 문서, 인터라인 정산 문서(IET).","existing":["E-ticket","Flight Coupon","EMD","Reissue","Involuntary Reissue","Refund","Void","Ticketing Time Limit","Validating Carrier","Ancillary Service","MCO (Miscellaneous Charges Order)","Exchange","Agency Debit Memo (ADM)","Residual Value","Conjunction Ticket","Penalty Fee","Open Ticket","Coupon Status"]},{"id":"hotel-rate","title":"Hotel — Inventory & Rates","isNew":false,"target":7,"focus":"요금·재고 심화: 다이내믹/오픈 프라이싱, 파생 요금(derived rate), 멤버 요율, LRA/NLRA(Last Room Availability), 디파짓·개런티 정책, 가용성 컨트롤(CTA/CTD), 야간감사(night audit) 지표.","existing":["Rate Plan","Room Type","Board Basis","Occupancy","ADR","RevPAR","BAR","Allotment","Rate Parity","Length of Stay","Rate Code","Package Rate","Corporate Rate","Stop Sell","Minimum Length of Stay (MLOS)","Release Period","Run of House (ROH)","Non-Refundable Rate"]},{"id":"air-ops","title":"Air — Operations & Reservation","isNew":false,"target":6,"focus":"예약·운영 심화: PNR 엘리먼트 구성, 분리·병합 심화, EMD 연계 SSR, 큐 관리, DCS·체크인 경계, 메시징(TTY/Type-B/PADIS).","existing":["PNR","Segment","Leg","Married Segment","Passive Segment","ARNK","SSR","OSI","MCT","Queue","Record Locator","Split PNR","Group PNR","Itinerary","Seat Map","Waitlist","Booking Status Code","Open Segment"]},{"id":"air-partner","title":"Air — Codeshare, Interline & Schedules","isNew":false,"target":5,"focus":"코드셰어·인터라인·공동운항 심화: free-flow vs block codeshare, 인터라인 e-ticket(IET), 프로레이션 심화, 얼라이언스 거버넌스, 슬롯/스케줄 조정(IATA SSIM/WSG).","existing":["Codeshare","Interline","Marketing Carrier","Operating Carrier","SPA (Special Prorate Agreement)","MITA","Proration","Slot","Schedule Change","IROPS","Airline Alliance","Joint Venture","Block Space Agreement","Wet Lease","Hub-and-Spoke","Through Fare","Connection","Re-accommodation"]},{"id":"codes","title":"Identifiers & Codes","isNew":false,"target":6,"focus":"식별자·코드 심화: ATPCO/운임 관련 코드, IATA SSIM 표기, 우편·위치(UN/LOCODE 외), 통화 소수자리(ISO 4217 minor unit), 항공사 prefix·numeric, GDS 오피스 식별자.","existing":["IATA Code","ICAO Code","Airport Code","Airline Designator","City Code","Pseudo City Code","UN/LOCODE","ISO 4217 Currency Code","ISO 3166 Country Code","Chain Code","Airline Accounting Code","Flight Number","Aircraft Type Code","IATA Number","Ticket Number","Meal Code","Class Code","Station Code"]},{"id":"car","title":"Car Rental & Mobility","isNew":true,"target":12,"focus":"렌터카 유통·예약·요율·보장의 핵심 표제어 기초 구축: rate plan(daily/weekly/monthly), CDW/LDW·SLI·PAI 보장, ACRISS/SIPP 차량 분류 코드, 보증금·연령 수수료, no-show, 편도 반납 수수료(one-way drop), 카운터 업셀, 차량군(car class), GDS 렌터카(CarMaster 등).","existing":[]},{"id":"rail","title":"Rail & Multimodal","isNew":true,"target":12,"focus":"철도 유통·운임·복합운송 기초: OSDM(Open Sales and Distribution Model), 운임·예약 분리(open ticket vs reservation), 인터레일/유레일 패스, 좌석 예약(seat reservation), PNR-less 발권, 통합 운임(through fare), 복합운송(multimodal), 철도 운임 권역, NRT/오픈리턴.","existing":[]},{"id":"cruise","title":"Cruise & Sea","isNew":true,"target":11,"focus":"크루즈 유통·예약 기초: 선실 등급(cabin category), 총톤수(GRT), 기항지(port of call), 선택 다이닝, 크루즈 단독 상품(cruise-only), 항만세·정부세(NCCF/port charges), 승선·하선(embark/disembark), 정원 점유(berth/double occupancy), 크루즈 예약(GDS/Revelex 등).","existing":[]},{"id":"insurance","title":"Travel Insurance & Protection","isNew":true,"target":11,"focus":"여행보험·보호상품 기초: 여행취소(trip cancellation)·중단(interruption), CFAR(Cancel For Any Reason), 보장·면책(coverage/exclusion), 보험금 청구(claim), 인수(underwriting), 의료·긴급대피(medical evacuation), 부착률(attach rate), 보험 중개 규제, 머천트형 취소보호 상품.","existing":[]},{"id":"disruption","title":"Disruption & Passenger Rights","isNew":true,"target":12,"focus":"운항중단·승객권리 기초: EU261/UK261, US DOT 2024 자동환불 규정, 결항·지연·초과예약 보상(denied boarding/DBC), 자발/비자발 탑승거부, 케어 의무(duty of care), 재수용(re-accommodation/IRROPS 심화), 탑맥 지연(tarmac delay rule), 수하물 배상(몬트리올 협약), 보상 면제(특별 상황/extraordinary circumstances).","existing":[]},{"id":"sustainability","title":"Sustainability & Emissions","isNew":true,"target":11,"focus":"지속가능성·배출 기초: SAF(지속가능 항공연료), CORSIA, 탄소배출 산정(ICAO/GHG 방법론), 탄소상쇄(offset), book-and-claim, EU ETS 배출권, 항공 환경세, 그린 운임·탄소 라벨, RTK 기반 효율 지표.","existing":[]}],"roster":["GDS","NDC","Offer","Order","OTA (Online Travel Agency)","OpenTravel Alliance","HTNG","Metasearch","Aggregator","ONE Order","EDIFACT","REST API","Direct Connect","Dynamic Packaging","Offer Management System","Order Management System (OMS)","Airline Retailing Maturity (ARM)","Shopping API","GDS Bypass","BSP","ARC","IATA Clearing House","VCC","Merchant of Record","Agency Model","Merchant Model","3-D Secure","Chargeback","IATA EasyPay","PCI DSS","Strong Customer Authentication","Form of Payment","Remittance","Tokenization","Acquirer","Interchange Fee","Settlement Cycle","CRS","PMS","Channel Manager","ARI","Bedbank","Net Rate","Commissionable Rate","Cancellation Policy","Guarantee Policy","Free Sale","Hotel Switch","Property Mapping","Rate Shopping","Direct Booking","No-Show","Booking Engine","Distribution Cost","Two-Way XML","Availability","RBD","Fare Basis Code","Fare Family","Origin & Destination","Journey","Fare Component","ATPCO","NUC","Overbooking","Fare Rule","Class of Service","Revenue Management","Fare Construction","Pricing Unit","Tax (YQ/YR)","Surcharge","Continuous Pricing","Passenger Type Code","Frequent Flyer Program","Frequent Flyer Number","IATA One ID","Customer Profile","Loyalty Tier Status","Name Change","PRM","Secure Flight","GDPR Consent","Known Traveler Number","Redress Number","Unaccompanied Minor","Mileage Accrual","Award Redemption","Companion","Traveler Preference","Corporate Profile","E-ticket","Flight Coupon","EMD","Reissue","Involuntary Reissue","Refund","Void","Ticketing Time Limit","Validating Carrier","Ancillary Service","MCO (Miscellaneous Charges Order)","Exchange","Agency Debit Memo (ADM)","Residual Value","Conjunction Ticket","Penalty Fee","Open Ticket","Coupon Status","Rate Plan","Room Type","Board Basis","Occupancy","ADR","RevPAR","BAR","Allotment","Rate Parity","Length of Stay","Rate Code","Package Rate","Corporate Rate","Stop Sell","Minimum Length of Stay (MLOS)","Release Period","Run of House (ROH)","Non-Refundable Rate","PNR","Segment","Leg","Married Segment","Passive Segment","ARNK","SSR","OSI","MCT","Queue","Record Locator","Split PNR","Group PNR","Itinerary","Seat Map","Waitlist","Booking Status Code","Open Segment","Codeshare","Interline","Marketing Carrier","Operating Carrier","SPA (Special Prorate Agreement)","MITA","Proration","Slot","Schedule Change","IROPS","Airline Alliance","Joint Venture","Block Space Agreement","Wet Lease","Hub-and-Spoke","Through Fare","Connection","Re-accommodation","IATA Code","ICAO Code","Airport Code","Airline Designator","City Code","Pseudo City Code","UN/LOCODE","ISO 4217 Currency Code","ISO 3166 Country Code","Chain Code","Airline Accounting Code","Flight Number","Aircraft Type Code","IATA Number","Ticket Number","Meal Code","Class Code","Station Code"]};
const { cats, roster } = DATA;
const ROSTER = roster.join(', ');

const ICON_SPEC = '아이콘(SVG) 규격: viewBox="0 0 48 48", 외부참조/래스터/<image> 금지, stroke="currentColor" stroke-width="2" fill="none"(필요시 fill="currentColor" 소량), 둥근 선(stroke-linecap/linejoin="round"), 용어 개념을 단순 라인아트로, width/height 속성 없이 path/circle/rect/line/polyline만, 600자 이내 한 줄 문자열.';

const ENTRY = {
  type: 'object', additionalProperties: true,
  properties: {
    id: { type: 'string' }, term: { type: 'string' }, abbreviation: { type: 'string' },
    aliases: { type: 'array', items: { type: 'string' } },
    category: { type: 'string' }, conceptType: { type: 'string' }, status: { type: 'string' },
    definition: { type: 'string' }, longDef: { type: 'string' }, standardBody: { type: 'string' },
    term_ko: { type: 'string' }, definition_ko: { type: 'string' }, longDef_ko: { type: 'string' },
    providerTerms: { type: 'array', items: { type: 'object', additionalProperties: true, properties: { provider: { type: 'string' }, term: { type: 'string' }, context: { type: 'string' }, context_ko: { type: 'string' }, relationship: { type: 'string' } } } },
    relationships: { type: 'array', items: { type: 'object', additionalProperties: true, properties: { type: { type: 'string' }, targetTerm: { type: 'string' } } } },
    distinctions: { type: 'array', items: { type: 'object', additionalProperties: true, properties: { targetTerm: { type: 'string' }, explanation: { type: 'string' }, explanation_ko: { type: 'string' } } } },
    sources: { type: 'array', items: { type: 'object', additionalProperties: true, properties: { org: { type: 'string' }, name: { type: 'string' }, version: { type: 'string' }, section: { type: 'string' }, url: { type: 'string' } } } },
    icon: { type: 'string' },
  },
  required: ['id', 'term', 'category', 'conceptType', 'status', 'definition', 'definition_ko', 'term_ko', 'icon', 'sources'],
};

const RESEARCH_SCHEMA = {
  type: 'object', additionalProperties: false, properties: {
    id: { type: 'string' },
    candidates: {
      type: 'array', items: {
        type: 'object', additionalProperties: false, properties: {
          term: { type: 'string' }, abbreviation: { type: 'string' }, rationale: { type: 'string' },
          sources: { type: 'array', items: { type: 'object', additionalProperties: false, properties: { org: { type: 'string' }, name: { type: 'string' }, url: { type: 'string' } } } },
        }, required: ['term', 'rationale'],
      },
    },
  }, required: ['id', 'candidates'],
};

const AUTHOR_SCHEMA = { type: 'object', additionalProperties: false, properties: { id: { type: 'string' }, newEntries: { type: 'array', items: ENTRY } }, required: ['id', 'newEntries'] };

const VERIFY_SCHEMA = {
  type: 'object', additionalProperties: false, properties: {
    term: { type: 'string' }, isReal: { type: 'boolean' }, verdict: { type: 'string' }, confidence: { type: 'string' },
    issues: { type: 'array', items: { type: 'string' } },
    patch: {
      type: 'object', additionalProperties: true, properties: {
        term: { type: 'string' }, term_ko: { type: 'string' }, abbreviation: { type: 'string' },
        aliases: { type: 'array', items: { type: 'string' } }, conceptType: { type: 'string' }, status: { type: 'string' },
        definition: { type: 'string' }, definition_ko: { type: 'string' }, longDef: { type: 'string' }, longDef_ko: { type: 'string' }, standardBody: { type: 'string' },
        providerTerms: { type: 'array', items: { type: 'object', additionalProperties: true } },
        relationships: { type: 'array', items: { type: 'object', additionalProperties: true, properties: { type: { type: 'string' }, targetTerm: { type: 'string' } } } },
        distinctions: { type: 'array', items: { type: 'object', additionalProperties: true, properties: { targetTerm: { type: 'string' }, explanation: { type: 'string' }, explanation_ko: { type: 'string' } } } },
        sources: { type: 'array', items: { type: 'object', additionalProperties: true } },
        icon: { type: 'string' },
      },
    },
  }, required: ['term', 'isReal', 'verdict'],
};

const isEmpty = v => v == null || (typeof v === 'string' && v.trim() === '') || (Array.isArray(v) && v.length === 0);
function applyPatch(e, patch) { if (!patch) return e; const out = Object.assign({}, e); for (const k of Object.keys(patch)) { if (!isEmpty(patch[k])) out[k] = patch[k]; } return out; }
const kebab = s => String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

function researchPrompt(c) {
  const head = c.isNew
    ? '이 카테고리는 신규로 현재 표제어가 없다. 이 도메인의 **기초가 되는 가장 중요한** 표제어를 선정하라.'
    : `이미 존재하는 표제어(중복 금지): ${c.existing.join(', ')}`;
  return `너는 여행산업 도메인 리서처다. "Travel Gaia" 백과사전의 카테고리 "${c.title}" (id "${c.id}")에 추가할 표제어를 **실제 웹 리서치**로 발굴한다.

${head}

리서치 초점: ${c.focus}

WebSearch/WebFetch로 IATA·ATPCO·OpenTravel·HTNG·ISO·ICAO·EU(261)/US DOT·GDS 벤더·CLIA·UIC/OSDM 등 1차·권위 출처를 조사하여, 이 카테고리에서 **실제 산업에서 통용되는 중요한** 표제어 후보 ${c.target + 4}개를 제시하라.
- 전체 ROSTER(타 카테고리 포함, 이미 존재하므로 중복 금지): ${ROSTER}
- 각 후보: term(정확한 영문 표제어), abbreviation(없으면 ""), rationale(중요/누락 이유 1문장), sources(실제 확인한 {org,name,url}).
- 환각 금지: 실재하지 않거나 이미 ROSTER/기존목록에 있는 용어는 제외. 약어는 정식 명칭으로.

StructuredOutput으로 {id:"${c.id}", candidates:[...]} 반환.`;
}

function authorPrompt(c, rsch) {
  const cands = ((rsch && rsch.candidates) || []).map((x, i) => `${i + 1}. ${x.term}${x.abbreviation ? ` (${x.abbreviation})` : ''} — ${x.rationale}${(x.sources && x.sources.length) ? ` [출처: ${x.sources.map(s => s.name || s.org).filter(Boolean).join('; ')}]` : ''}`).join('\n');
  return `너는 여행산업 도메인 전문가 집필자다. "Travel Gaia"의 카테고리 "${c.title}"(id "${c.id}")에 **신규 표제어**를 집필한다.

아래는 리서치가 발굴한 후보다(부정확/약한 것은 제외하고, 더 적합한 동일 도메인 용어로 대체 가능). 정확히 ${c.target}개의 entry를 작성하라:
${cands || '(후보 없음 — 도메인 지식으로 핵심 표제어 직접 선정)'}

각 entry 필드:
- id: term의 kebab-case. term, abbreviation(없으면 ""), aliases[], category="${c.id}".
- conceptType: acronym|standard-term|standard|business-term|provider-term|code|metric|process|role|document|regulation
- status: active|deprecated|ambiguous
- definition(영문 1~3문장, 정확), longDef(영문 확장, 없으면 ""), standardBody(없으면 "")
- 한국어: term_ko(한국어 명칭/풀이), definition_ko, longDef_ko(영문 longDef 없으면 "")  // 산업 약어/코드는 한국어 안에서 영문 유지
- providerTerms:[{provider,term,context,context_ko,relationship: same|narrower|broader|related|conflicting}]  // 확신할 때만, 아니면 []
- relationships:[{type: sameAs|broader|narrower|parent|child|related|conflicts|replaces|contrasts, targetTerm}]  // targetTerm은 아래 ROSTER 또는 네가 만든 형제 신규 표제어의 정확한 이름
- distinctions:[{targetTerm, explanation, explanation_ko}]  // 혼동되는 용어와의 구분(이 백과사전의 핵심 가치) — 가능하면 1~3개
- sources:[{org,name,version,section,url}]  // ≥1 필수. 리서치 출처 활용. 조문/Resolution/섹션 번호 상상 금지 — 확신 없으면 org+문서명만, version/section/url은 "".
- icon: 용어 개념의 SVG 아이콘. ${ICON_SPEC}

정확성: 실제 공개 산업표준·규정 근거. 환각 금지. 기존 중복 금지: ${c.isNew ? '(없음)' : c.existing.join(', ')}
교차링크용 ROSTER(정확한 이름만): ${ROSTER}

StructuredOutput으로 {id:"${c.id}", newEntries:[${c.target}개]} 반환.`;
}

function verifyPrompt(c, e) {
  return `너는 회의적인 산업표준 팩트체커다. 아래 신규 표제어 entry가 환각/오류를 포함한다고 가정하고 **웹으로 검증**하라(WebSearch/WebFetch).

카테고리: ${c.title} (${c.id})
entry(JSON):
${JSON.stringify(e)}

검증 항목:
1) 실재하며 올바르게 명명된 산업 용어인가? (오타/잘못된 약어/존재하지 않는 개념이면 isReal=false)
2) 영문 definition/longDef가 정확한가?
3) 한국어 term_ko/definition_ko가 정확하고 자연스러운가?
4) sources가 실재하는가? 날조된 Resolution/조문/섹션/버전 번호가 있는가?
5) relationships/distinctions의 targetTerm과 설명이 옳은가?

판정(verdict):
- "drop": 실재하지 않거나 근본적으로 틀렸고 교정 불가.
- "fix": 교정 가능. patch에 **교정이 필요한 필드만** 담아라(올바른 필드는 생략). sources가 날조면 실제 권위 출처로 교체하거나 {org,name}만 남기고 version/section/url=""로 단순화.
- "keep": 견고함.

StructuredOutput으로 {term:"${e.term}", isReal, verdict, confidence:"high|med|low", issues:[...], patch:{...}} 반환.`;
}

phase('Research');
const results = await pipeline(cats,
  // 1) research candidates via web
  (c) => agent(researchPrompt(c), { label: `research:${c.id}`, phase: 'Research', schema: RESEARCH_SCHEMA, agentType: 'general-purpose' }),
  // 2) author full bilingual entries
  (rsch, c) => agent(authorPrompt(c, rsch), { label: `author:${c.id}`, phase: 'Author', schema: AUTHOR_SCHEMA, agentType: 'general-purpose' }),
  // 3) adversarial per-entry fact-check + reconcile
  (authored, c) => {
    const entries = (((authored && authored.newEntries) || [])).filter(e => e && e.term);
    if (!entries.length) return { id: c.id, newEntries: [], icons: [], dropped: 0 };
    return parallel(entries.map(e => () =>
      agent(verifyPrompt(c, e), { label: `verify:${c.id}:${(e.id || kebab(e.term)).slice(0, 24)}`, phase: 'Verify', schema: VERIFY_SCHEMA, agentType: 'general-purpose' })
        .then(v => ({ e, v }))
    )).then(pairs => {
      const kept = []; let dropped = 0;
      for (const p of pairs.filter(Boolean)) {
        const { e, v } = p;
        if (!v) { kept.push(e); continue; }              // verifier died → keep author's version
        if (v.verdict === 'drop' || v.isReal === false) { dropped++; continue; }
        kept.push(v.verdict === 'fix' ? applyPatch(e, v.patch) : e);
      }
      log(`${c.id}: 집필 ${entries.length} · 유지 ${kept.length} · 제거 ${dropped}`);
      return { id: c.id, newEntries: kept, icons: [], dropped };
    });
  }
);

const res = results.filter(Boolean);
log(`완료: ${res.length}/${cats.length} 카테고리 · 신규 ${res.reduce((a, r) => a + r.newEntries.length, 0)}개 (제거 ${res.reduce((a, r) => a + (r.dropped || 0), 0)}개)`);
return res;
