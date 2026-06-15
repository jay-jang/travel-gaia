export const meta = {
  name: 'travel-gaia-content',
  description: 'Author + adversarially verify travel-terminology encyclopedia entries, one file per category',
  phases: [
    { title: 'Author', detail: '카테고리별 표제어 작성 (출처 근거)' },
    { title: 'Verify', detail: '적대적 사실검증 + data/cat-*.json 기록' },
  ],
};

const DIR = '/home/ubuntu/workspace/travel-gaia/data';

const CATEGORIES = [
  { id:'air-ops',     title:'Air — Operations & Reservation',
    terms:['PNR','Segment','Leg','Married Segment','Passive Segment','ARNK','SSR','OSI','MCT','Queue'] },
  { id:'air-shop',    title:'Air — Shopping, Pricing & Availability',
    terms:['Availability','RBD','Fare Basis Code','Fare Family','Origin & Destination','Journey','Fare Component','ATPCO','NUC','Overbooking'] },
  { id:'air-ticket',  title:'Air — Ticketing & Orders',
    terms:['E-ticket','Flight Coupon','EMD','Reissue','Involuntary Reissue','Refund','Void','Ticketing Time Limit','Validating Carrier','Ancillary Service'] },
  { id:'air-partner', title:'Air — Codeshare, Interline & Schedules',
    terms:['Codeshare','Interline','Marketing Carrier','Operating Carrier','SPA (Special Prorate Agreement)','MITA','Proration','Slot','Schedule Change','IROPS'] },
  { id:'hotel-rate',  title:'Hotel — Inventory & Rates',
    terms:['Rate Plan','Room Type','Board Basis','Occupancy','ADR','RevPAR','BAR','Allotment','Rate Parity','Length of Stay'] },
  { id:'hotel-dist',  title:'Hotel — Distribution & Booking',
    terms:['CRS','PMS','Channel Manager','ARI','Bedbank','Net Rate','Commissionable Rate','Cancellation Policy','Guarantee Policy','Free Sale'] },
  { id:'pay',         title:'Payments & Settlement',
    terms:['BSP','ARC','IATA Clearing House','VCC','Merchant of Record','Agency Model','Merchant Model','3-D Secure','Chargeback','IATA EasyPay'] },
  { id:'codes',       title:'Identifiers & Codes',
    terms:['IATA Code','ICAO Code','Airport Code','Airline Designator','City Code','Pseudo City Code','UN/LOCODE','ISO 4217 Currency Code','ISO 3166 Country Code','Chain Code'] },
  { id:'customer',    title:'Customer, Loyalty & Profiles',
    terms:['Passenger Type Code','Frequent Flyer Program','Frequent Flyer Number','IATA One ID','Customer Profile','Loyalty Tier Status','Name Change','PRM','Secure Flight','GDPR Consent'] },
  { id:'standards',   title:'Distribution Standards & APIs',
    terms:['GDS','NDC','Offer','Order','OTA (Online Travel Agency)','OpenTravel Alliance','HTNG','Metasearch','Aggregator','ONE Order'] },
];

const ROSTER = CATEGORIES.map(c => `[${c.title}]\n  ${c.terms.join(', ')}`).join('\n');

const SCHEMA_DOC = `각 entry JSON 필드:
- id: term의 kebab-case (예: "PNR"->"pnr", "OTA (Online Travel Agency)"->"ota-online-travel-agency")
- term: 표제어 (배정된 이름 그대로)
- abbreviation: 약어 (없으면 "")
- aliases: [동의어/풀네임/철자변형] (예: PNR -> ["Passenger Name Record","Booking Record"])
- category: "{CATID}" 고정
- conceptType: acronym|standard-term|business-term|provider-term|code|metric|process|role|document 중 하나
- status: active|deprecated|ambiguous 중 하나
- definition: 1~3문장, 정확하고 검증가능
- longDef: 선택, 확장 설명 (없으면 "")
- standardBody: 선택, 기준 기관 (IATA/ATPCO/OpenTravel/HTNG/ISO/ICAO 등, 없으면 "")
- providerTerms: [{provider, term, context(1줄), relationship: same|narrower|broader|related|conflicting}]  // 확신할 때만, 아니면 []
- relationships: [{type: sameAs|broader|narrower|parent|child|related|conflicts|replaces|contrasts, targetTerm}]  // targetTerm은 아래 ROSTER의 정확한 이름만
- distinctions: [{targetTerm, explanation(1줄)}]  // 혼동 쌍 (예: Segment vs Leg)
- sources: [{name, org, version, section, url}]  // ≥1 필수. version/section/url은 확신없으면 ""`;

const RULES = `정확성 규칙(매우 중요):
- 정의는 실제 공개 산업표준/스펙(IATA, ATPCO, OpenTravel, HTNG, ISO, ICAO, GDS 벤더 문서) 근거.
- providerTerms는 확신할 때만. 추측 금지. 모르면 [].
- sources에 Resolution/조문/스펙 번호를 상상하지 말 것. 확신 없으면 org+문서명만 쓰고 version/section은 "".
- relationships/distinctions의 targetTerm은 반드시 ROSTER에 있는 정확한 이름 사용(철자 일치). 자기 자신 참조 금지.
- "OTA (Online Travel Agency)"(여행사)와 "OpenTravel Alliance"(XML 표준)는 절대 혼동하지 말 것.`;

const VERDICT_SCHEMA = {
  type:'object', additionalProperties:false,
  properties:{
    id:{type:'string'}, count:{type:'integer'}, ok:{type:'boolean'},
    issues:{type:'array', items:{type:'string'}},
  }, required:['id','count','ok'],
};

phase('Author');
const results = await pipeline(
  CATEGORIES,
  // stage 1: author entries -> return ONLY a JSON array (text)
  (c) => agent(
`너는 여행 산업 도메인 전문가다. "Travel Gaia" 용어 백과사전의 한 카테고리를 집필한다.

카테고리: "${c.title}" (category id: "${c.id}")

아래 표제어 각각에 대해 정확히 하나의 entry를 작성하라(이 목록만, 추가/누락 금지):
${c.terms.map((t,i)=>`${i+1}. ${t}`).join('\n')}

교차링크(relationships/distinctions)에 쓸 수 있는 전체 표제어 ROSTER(정확한 이름만 사용):
${ROSTER}

${SCHEMA_DOC.replace('{CATID}', c.id)}

${RULES}

출력: 위 entry들을 담은 **JSON 배열 하나만** 출력하라. 마크다운/설명/코드펜스 없이 순수 JSON 배열만.`,
    { label:`author:${c.id}`, phase:'Author' }
  ),
  // stage 2: adversarial verify, then WRITE the file, return small summary
  (draft, c) => agent(
`너는 "Travel Gaia"의 적대적 사실검증가다. 카테고리 "${c.title}"(id "${c.id}")의 초안 entry JSON 배열을 검증·수정한다.

해야 할 일:
1. 부정확/오해소지 정의 수정.
2. 출처(sources)에 환각된 Resolution/조문/스펙 번호가 있으면 제거(org+문서명만 남김). version/section/url은 확신없으면 "".
3. 검증 불가하거나 틀린 providerTerms 매핑 제거.
4. "OTA (Online Travel Agency)"와 "OpenTravel Alliance"가 혼동되지 않았는지 확인.
5. entry를 삭제하지 말 것(개수 유지). 각 entry에 sources ≥1 보장. category는 "${c.id}".
6. relationships/distinctions의 targetTerm은 ROSTER의 정확한 이름이어야 함:
${ROSTER}

검증 후, 최종 JSON 배열을 파일에 저장하라:
- Write 도구로 경로 "${DIR}/cat-${c.id}.json" 에 **순수 JSON 배열만** 기록(마크다운/주석 없이).

초안 JSON:
${draft || '[]'}

파일 저장 완료 후, StructuredOutput으로 {id:"${c.id}", count:<entry 개수>, ok:<문제없으면 true>, issues:[수정/제거한 것 요약]} 반환.`,
    { label:`verify:${c.id}`, phase:'Verify', schema:VERDICT_SCHEMA, agentType:'general-purpose' }
  )
);

const summary = results.filter(Boolean);
log(`완료 카테고리: ${summary.length}/${CATEGORIES.length}, 총 entry: ${summary.reduce((a,s)=>a+(s.count||0),0)}`);
return summary;
