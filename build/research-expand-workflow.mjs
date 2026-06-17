export const meta = {
  name: 'travel-gaia-research-expand',
  description: 'Research-grounded term expansion: web-research candidates, author bilingual entries, adversarially fact-check each',
  phases: [
    { title: 'Research', detail: '웹 리서치로 누락/기초 표제어 후보 발굴' },
    { title: 'Author', detail: '카테고리별 신규 표제어 집필(EN/KO+SVG)' },
    { title: 'Verify', detail: '표제어별 적대적 팩트체크·교정' },
  ],
};

const DATA = {"cats":[{"id":"air-ops","title":"Air — Operations & Reservation (vertical: Air)","isNew":false,"target":5,"focus":"항공 예약·운영(PNR/세그먼트/DCS/큐/메시징) 중 누락 표제어. 예: ticketing field, EMD 연계, schedule change 처리, type-A/B, PADIS 요소, divide booking 세부.","existing":["AIRIMP","ARNK","Booking Status Code","Departure Control System (DCS)","Group PNR","Itinerary","Leg","Married Segment","MCT","Open Segment","OSI","Passenger Name List / Additions and Deletions List (PNL/ADL)","Passive Segment","PNR","PNR History","Queue","Received From Element (RF)","Record Locator","Seat Map","Segment","Split PNR","SSR","Type B Message","Waitlist"]},{"id":"air-shop","title":"Air — Shopping, Pricing & Availability (vertical: Air)","isNew":false,"target":5,"focus":"항공 운임·재고·수익관리 중 누락. 예: fare ladder, branded fare attribute, ancillary bundling, AVS/seamless availability, married-segment logic, dynamic offer pricing.","existing":["Add-on","ATPCO","Availability","Bid Price","Booking Limit","Class of Service","Continuous Pricing","Fare Basis Code","Fare Component","Fare Construction","Fare Family","Fare Rule","Journey","Maximum Permitted Mileage (MPM)","Negotiated Fare","NUC","Optional Services","Origin & Destination","Origin & Destination Control (O&D Control)","Overbooking","Pricing Unit","Protection Level","RBD","Revenue Management","Surcharge","Tax (YQ/YR)","Ticketed Point Mileage (TPM)"]},{"id":"air-ticket","title":"Air — Ticketing & Orders (vertical: Air)","isNew":false,"target":4,"focus":"항공 발권·주문 중 누락. 예: ONE Order OrderItem/Service, EMD-A vs EMD-S, ADM/ACM 세부, exchange/reissue 자동화, settlement document.","existing":["Additional Collection (ADC)","Agency Credit Memo (ACM)","Agency Debit Memo (ADM)","Ancillary Service","Conjunction Ticket","Coupon Status","E-ticket","EMD","Exchange","Flight Coupon","Interline Electronic Ticket (IET)","Involuntary Reissue","MCO (Miscellaneous Charges Order)","Open Ticket","Penalty Fee","Reason for Issuance Code / Sub Code (RFIC / RFISC)","Refund","Reissue","Residual Value","Ticketing Time Limit","Validating Carrier","Void","Voluntary Changes (ATPCO Category 31)","Voluntary Refunds (ATPCO Category 33)"]},{"id":"air-partner","title":"Air — Codeshare, Interline & Schedules (vertical: Air)","isNew":false,"target":4,"focus":"코드셰어·인터라인·스케줄 중 누락. 예: free-flow vs block codeshare, SPA 세부, IATCI(인터라인 체크인), alliance metal, ASKs/ASMs capacity.","existing":["Airline Alliance","Antitrust Immunity","Block Space Agreement","Capacity Purchase Agreement","Codeshare","Connection","Hub-and-Spoke","Interline","Interline Electronic Ticketing","IROPS","Joint Venture","Marketing Carrier","Metal Neutrality","MITA","Operating Carrier","Proration","Re-accommodation","Schedule Change","Slot","SPA (Special Prorate Agreement)","Standard Schedules Message","Through Fare","Wet Lease"]},{"id":"hotel-rate","title":"Hotel — Inventory & Rates (vertical: Lodging)","isNew":false,"target":5,"focus":"호텔 재고·요금 중 누락. 예: yield/overbooking(호텔), wash factor, group block, comp rooms, derived/dependent rate 세부, rate fence.","existing":["ADR","Allotment","BAR","Board Basis","Closed to Arrival (CTA)","Corporate Rate","Derived Rate","Dynamic Pricing","Last Room Availability (LRA)","Length of Stay","Minimum Length of Stay (MLOS)","Non-Last Room Availability (NLRA)","Non-Refundable Rate","Occupancy","Open Pricing","Package Rate","Rack Rate","Rate Code","Rate Parity","Rate Plan","Release Period","RevPAR","Room Type","Run of House (ROH)","Stop Sell"]},{"id":"hotel-dist","title":"Hotel — Distribution & Booking (vertical: Lodging)","isNew":false,"target":5,"focus":"호텔 유통·예약 중 누락. 예: GDS hotel(HCN), wholesale/merchant 모델, mapping/content(GIATA 외), metasearch(호텔), book-and-pay, connectivity certification.","existing":["ARI","Bedbank","Billboard Effect","Booking Engine","Cancellation Policy","Channel Manager","Commissionable Rate","Cost Per Acquisition (CPA)","CRS","Direct Booking","Distribution Cost","Free Sale","GIATA ID","Guarantee Policy","HEDNA","Hotel Switch","Last Room Availability","Net Rate","No-Show","Opaque Inventory","PMS","Private Label Chain Code","Property Mapping","Rate Access Code (RAC)","Rate Leakage","Rate Parity Clause","Rate Shopping","Two-Way XML"]},{"id":"car","title":"Car Rental & Mobility (vertical: Ground)","isNew":false,"target":6,"focus":"렌터카·모빌리티 중 누락. 예: rate qualifier, corporate discount(CD/BCD), loyalty(rental), no-show/late-return, mobility(car-share/ride-hail) 표준, GDS car(rate category).","existing":["ACRISS Code","Car Class","Collision Damage Waiver","Fuel Purchase Option","Loss Damage Waiver","One-Way Drop Fee","Rental Agreement","SIPP Code","Supplemental Liability Insurance","Time and Mileage","Unlimited Mileage","Young Driver Surcharge"]},{"id":"rail","title":"Rail & Multimodal (vertical: Ground)","isNew":false,"target":6,"focus":"철도·복합운송 중 누락. 예: OSDM offer/order(rail), open ticket, rail pass reservation, через-fare/through-rail, NRT/IRT 세부, station code(rail), TCV.","existing":["Admission","Eurail Pass","Flexible Content Barcode (FCB)","Fulfillment (Rail)","Integrated Reservation Ticket (IRT)","Interrail Pass","Multimodal Transport","Non-integrated Reservation Ticket (NRT)","OSDM","Seat Reservation","Standard International Passenger Tariff (TCV)","TAP TSI"]},{"id":"cruise","title":"Cruise & Sea (vertical: Cruise)","isNew":false,"target":8,"focus":"크루즈 유통·예약·운영 중 누락. 예: deck/category code, dining seating, gratuities, fly-cruise, shorex booking, GRT/berth, port charges/taxes, cruise GDS(예: cruise connectivity), late traveler, booking guarantee.","existing":["Cabin Category","Cruise-Only Fare","Embarkation","Guarantee Cabin (GTY)","Muster Drill","Non-Commissionable Fare (NCF)","Onboard Credit (OBC)","Open Seating Dining","Port of Call","Repositioning Cruise","Shore Excursion","Single Supplement"]},{"id":"pay","title":"Payments & Settlement (vertical: Common)","isNew":false,"target":5,"focus":"결제·정산 중 누락. 예: settlement file(RET/HOT), card network(scheme), 3DS2 flow, refund/dispute lifecycle, FX/DCC 세부, ARC/BSP 차이 보강.","existing":["3-D Secure","Acquirer","Agency Model","ARC","Authorization Hold","BSP","CASS","Chargeback","Chargeback Reason Code","Data Interchange Specifications Handbook (DISH)","Dynamic Currency Conversion (DCC)","Form of Payment","IATA Clearing House","IATA EasyPay","Interchange Fee","Merchant Model","Merchant of Record","PCI DSS","Remittance","Remittance Holding Capacity (RHC)","Settlement Cycle","Simplified Invoicing and Settlement (SIS)","Strong Customer Authentication","Tokenization","Transparency in Payments (TIP)","UATP","VCC"]},{"id":"codes","title":"Identifiers & Codes (vertical: Common)","isNew":false,"target":4,"focus":"식별자·코드 중 누락. 예: SSIM, office ID/IATA number 세부, baggage tag(IATA 753), aircraft registration, ATPCO codes, location identifier(추가).","existing":["Air Waybill Number","Aircraft Type Code","Airline Accounting Code","Airline Designator","Airport Code","Chain Code","City Code","Class Code","Flight Number","IATA Code","IATA Delay Codes","IATA Number","IATA Traffic Conference Area","ICAO Code","ISO 3166 Country Code","ISO 3166-2 Subdivision Code","ISO 4217 Currency Code","Meal Code","Pseudo City Code","SITA Teletype Address","Station Code","Ticket Number","TIDS Code","UN/LOCODE"]},{"id":"customer","title":"Customer, Loyalty & Profiles (vertical: Common)","isNew":false,"target":5,"focus":"고객·로열티 중 누락. 예: tier benefit, points/miles 차이, household account, consent(GDPR 외 CCPA), biometric(One ID 세부), CDP/segmentation 보강.","existing":["Award Redemption","Breakage","Companion","Corporate Profile","Customer Data Platform","Customer Profile","Digital Travel Credential","Frequent Flyer Number","Frequent Flyer Program","GDPR Consent","IATA One ID","Known Traveler Number","Loyalty Tier Status","Mileage Accrual","Name Change","Passenger Type Code","PRM","Redress Number","RFM Segmentation","Secure Flight","Single Customer View","Status Match","Transfer Partner","Traveler Preference","Unaccompanied Minor"]},{"id":"standards","title":"Distribution Standards & APIs (vertical: Common)","isNew":false,"target":6,"focus":"유통표준·API 중 누락. 예: NDC message(AirShopping/OfferPrice/OrderCreate), schema versioning, OAuth/security, webhook/async, capability exchange, IATA codeset.","existing":["Aggregator","Airline Industry Data Model (AIDM)","Airline Retailing Maturity (ARM)","Direct Connect","Dynamic Offer","Dynamic Packaging","EDIFACT","Enhanced and Simplified Distribution (EDIST)","GDS","GDS Bypass","HTNG","Metasearch","NDC","NDC Capable","NDC Exchange","Offer","Offer Management System","ONE Order","OpenTravel 2.0 Object Model","OpenTravel Alliance","Order","Order Management System (OMS)","OTA (Online Travel Agency)","Passenger and Airport Data Interchange Standards (PADIS)","Passenger Service System (PSS)","REST API","Settlement with Orders (SwO)","Shopping API","Standard Retailer and Supplier Interline Agreement (SRSIA)","Type B Messaging"]},{"id":"insurance","title":"Travel Insurance & Protection (vertical: Common)","isNew":false,"target":5,"focus":"여행보험·보호 중 누락. 예: named-peril vs all-risk, deductible/excess, policy schedule, assistance services, baggage/delay coverage, IPT(보험세).","existing":["Cancel For Any Reason (CFAR)","Cancellation Fee Waiver","Comprehensive Travel Insurance","Emergency Medical Evacuation","Limited Lines Travel Insurance Producer","Merchant Cancellation Protection","Pre-Existing Condition Waiver","Repatriation of Remains","Travel Medical Insurance","Trip Cancellation","Trip Interruption"]},{"id":"disruption","title":"Disruption & Passenger Rights (vertical: Common)","isNew":false,"target":4,"focus":"운항중단·승객권리 중 누락. 예: rebooking/rerouting rules, EC261 compensation tiers, duty of care 세부, missed connection, involuntary refund(추가).","existing":["Automatic Refund Rule","Denied Boarding Compensation","EU Regulation 261/2004","Extraordinary Circumstances","Involuntary Denied Boarding","Montreal Convention 1999","Property Irregularity Report","Right to Care","Tarmac Delay Rule","UK Regulation 261","Voluntary Denied Boarding","WorldTracer"]},{"id":"sustainability","title":"Sustainability & Emissions (vertical: Common)","isNew":false,"target":5,"focus":"지속가능성·배출 중 누락. 예: SAF mandate/blending, carbon credit registry, scope1/2 vs scope3, well-to-wake, GHG factor, offset vs insetting.","existing":["Contrail (Non-CO2 Effects)","CORSIA (Carbon Offsetting and Reduction Scheme for International Aviation)","CORSIA Eligible Emissions Unit (EEU)","EU Allowance (EUA)","EU Emissions Trading System (EU ETS)","Flight Emissions Label (FEL)","GHG Protocol Scope 3 (Business Travel)","IATA CO2 Connect","ICAO Carbon Emissions Calculator (ICEC)","ReFuelEU Aviation","Sustainable Aviation Fuel (SAF)"]}],"roster":["3-D Secure","Acquirer","ACRISS Code","Add-on","Additional Collection (ADC)","Admission","ADR","Agency Credit Memo (ACM)","Agency Debit Memo (ADM)","Agency Model","Aggregator","Air Waybill Number","Aircraft Type Code","AIRIMP","Airline Accounting Code","Airline Alliance","Airline Designator","Airline Industry Data Model (AIDM)","Airline Retailing Maturity (ARM)","Airport Code","Allotment","Ancillary Service","Antitrust Immunity","ARC","ARI","ARNK","ATPCO","Authorization Hold","Automatic Refund Rule","Availability","Award Redemption","BAR","Bedbank","Bid Price","Billboard Effect","Block Space Agreement","Board Basis","Booking Engine","Booking Limit","Booking Status Code","Breakage","BSP","Cabin Category","Cancel For Any Reason (CFAR)","Cancellation Fee Waiver","Cancellation Policy","Capacity Purchase Agreement","Car Class","CASS","Chain Code","Channel Manager","Chargeback","Chargeback Reason Code","City Code","Class Code","Class of Service","Closed to Arrival (CTA)","Codeshare","Collision Damage Waiver","Commissionable Rate","Companion","Comprehensive Travel Insurance","Conjunction Ticket","Connection","Continuous Pricing","Contrail (Non-CO2 Effects)","Corporate Profile","Corporate Rate","CORSIA (Carbon Offsetting and Reduction Scheme for International Aviation)","CORSIA Eligible Emissions Unit (EEU)","Cost Per Acquisition (CPA)","Coupon Status","CRS","Cruise-Only Fare","Customer Data Platform","Customer Profile","Data Interchange Specifications Handbook (DISH)","Denied Boarding Compensation","Departure Control System (DCS)","Derived Rate","Digital Travel Credential","Direct Booking","Direct Connect","Distribution Cost","Dynamic Currency Conversion (DCC)","Dynamic Offer","Dynamic Packaging","Dynamic Pricing","E-ticket","EDIFACT","Embarkation","EMD","Emergency Medical Evacuation","Enhanced and Simplified Distribution (EDIST)","EU Allowance (EUA)","EU Emissions Trading System (EU ETS)","EU Regulation 261/2004","Eurail Pass","Exchange","Extraordinary Circumstances","Fare Basis Code","Fare Component","Fare Construction","Fare Family","Fare Rule","Flexible Content Barcode (FCB)","Flight Coupon","Flight Emissions Label (FEL)","Flight Number","Form of Payment","Free Sale","Frequent Flyer Number","Frequent Flyer Program","Fuel Purchase Option","Fulfillment (Rail)","GDPR Consent","GDS","GDS Bypass","GHG Protocol Scope 3 (Business Travel)","GIATA ID","Group PNR","Guarantee Cabin (GTY)","Guarantee Policy","HEDNA","Hotel Switch","HTNG","Hub-and-Spoke","IATA Clearing House","IATA CO2 Connect","IATA Code","IATA Delay Codes","IATA EasyPay","IATA Number","IATA One ID","IATA Traffic Conference Area","ICAO Carbon Emissions Calculator (ICEC)","ICAO Code","Integrated Reservation Ticket (IRT)","Interchange Fee","Interline","Interline Electronic Ticket (IET)","Interline Electronic Ticketing","Interrail Pass","Involuntary Denied Boarding","Involuntary Reissue","IROPS","ISO 3166 Country Code","ISO 3166-2 Subdivision Code","ISO 4217 Currency Code","Itinerary","Joint Venture","Journey","Known Traveler Number","Last Room Availability","Last Room Availability (LRA)","Leg","Length of Stay","Limited Lines Travel Insurance Producer","Loss Damage Waiver","Loyalty Tier Status","Marketing Carrier","Married Segment","Maximum Permitted Mileage (MPM)","MCO (Miscellaneous Charges Order)","MCT","Meal Code","Merchant Cancellation Protection","Merchant Model","Merchant of Record","Metal Neutrality","Metasearch","Mileage Accrual","Minimum Length of Stay (MLOS)","MITA","Montreal Convention 1999","Multimodal Transport","Muster Drill","Name Change","NDC","NDC Capable","NDC Exchange","Negotiated Fare","Net Rate","No-Show","Non-Commissionable Fare (NCF)","Non-integrated Reservation Ticket (NRT)","Non-Last Room Availability (NLRA)","Non-Refundable Rate","NUC","Occupancy","Offer","Offer Management System","Onboard Credit (OBC)","ONE Order","One-Way Drop Fee","Opaque Inventory","Open Pricing","Open Seating Dining","Open Segment","Open Ticket","OpenTravel 2.0 Object Model","OpenTravel Alliance","Operating Carrier","Optional Services","Order","Order Management System (OMS)","Origin & Destination","Origin & Destination Control (O&D Control)","OSDM","OSI","OTA (Online Travel Agency)","Overbooking","Package Rate","Passenger and Airport Data Interchange Standards (PADIS)","Passenger Name List / Additions and Deletions List (PNL/ADL)","Passenger Service System (PSS)","Passenger Type Code","Passive Segment","PCI DSS","Penalty Fee","PMS","PNR","PNR History","Port of Call","Pre-Existing Condition Waiver","Pricing Unit","Private Label Chain Code","PRM","Property Irregularity Report","Property Mapping","Proration","Protection Level","Pseudo City Code","Queue","Rack Rate","Rate Access Code (RAC)","Rate Code","Rate Leakage","Rate Parity","Rate Parity Clause","Rate Plan","Rate Shopping","RBD","Re-accommodation","Reason for Issuance Code / Sub Code (RFIC / RFISC)","Received From Element (RF)","Record Locator","Redress Number","ReFuelEU Aviation","Refund","Reissue","Release Period","Remittance","Remittance Holding Capacity (RHC)","Rental Agreement","Repatriation of Remains","Repositioning Cruise","Residual Value","REST API","Revenue Management","RevPAR","RFM Segmentation","Right to Care","Room Type","Run of House (ROH)","Schedule Change","Seat Map","Seat Reservation","Secure Flight","Segment","Settlement Cycle","Settlement with Orders (SwO)","Shopping API","Shore Excursion","Simplified Invoicing and Settlement (SIS)","Single Customer View","Single Supplement","SIPP Code","SITA Teletype Address","Slot","SPA (Special Prorate Agreement)","Split PNR","SSR","Standard International Passenger Tariff (TCV)","Standard Retailer and Supplier Interline Agreement (SRSIA)","Standard Schedules Message","Station Code","Status Match","Stop Sell","Strong Customer Authentication","Supplemental Liability Insurance","Surcharge","Sustainable Aviation Fuel (SAF)","TAP TSI","Tarmac Delay Rule","Tax (YQ/YR)","Through Fare","Ticket Number","Ticketed Point Mileage (TPM)","Ticketing Time Limit","TIDS Code","Time and Mileage","Tokenization","Transfer Partner","Transparency in Payments (TIP)","Travel Medical Insurance","Traveler Preference","Trip Cancellation","Trip Interruption","Two-Way XML","Type B Message","Type B Messaging","UATP","UK Regulation 261","UN/LOCODE","Unaccompanied Minor","Unlimited Mileage","Validating Carrier","VCC","Void","Voluntary Changes (ATPCO Category 31)","Voluntary Denied Boarding","Voluntary Refunds (ATPCO Category 33)","Waitlist","Wet Lease","WorldTracer","Young Driver Surcharge"]};
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
