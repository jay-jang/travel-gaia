export const meta = {
  name: 'travel-gaia-expand',
  description: 'Expand each category (+8 terms, bilingual) and generate an SVG icon per term — worktree parallel',
  phases: [{ title: 'Expand', detail: '카테고리별 신규 용어 작성(EN/KO+SVG)' }, { title: 'Illustrate', detail: '기존 용어 SVG 아이콘 생성' }],
};

const { cats, roster } = {"cats":[{"id":"air-ops","title":"Air — Operations & Reservation","existing":["PNR","Segment","Leg","Married Segment","Passive Segment","ARNK","SSR","OSI","MCT","Queue"],"suggest":["Record Locator","Split PNR","Group PNR","Itinerary","Seat Map","Waitlist","Booking Status Code","Open Segment"]},{"id":"air-shop","title":"Air — Shopping, Pricing & Availability","existing":["Availability","RBD","Fare Basis Code","Fare Family","Origin & Destination","Journey","Fare Component","ATPCO","NUC","Overbooking"],"suggest":["Fare Rule","Class of Service","Revenue Management","Fare Construction","Pricing Unit","Tax (YQ/YR)","Surcharge","Continuous Pricing"]},{"id":"air-ticket","title":"Air — Ticketing & Orders","existing":["E-ticket","Flight Coupon","EMD","Reissue","Involuntary Reissue","Refund","Void","Ticketing Time Limit","Validating Carrier","Ancillary Service"],"suggest":["MCO (Miscellaneous Charges Order)","Exchange","Agency Debit Memo (ADM)","Residual Value","Conjunction Ticket","Penalty Fee","Open Ticket","Coupon Status"]},{"id":"air-partner","title":"Air — Codeshare, Interline & Schedules","existing":["Codeshare","Interline","Marketing Carrier","Operating Carrier","SPA (Special Prorate Agreement)","MITA","Proration","Slot","Schedule Change","IROPS"],"suggest":["Airline Alliance","Joint Venture","Block Space Agreement","Wet Lease","Hub-and-Spoke","Through Fare","Connection","Re-accommodation"]},{"id":"hotel-rate","title":"Hotel — Inventory & Rates","existing":["Rate Plan","Room Type","Board Basis","Occupancy","ADR","RevPAR","BAR","Allotment","Rate Parity","Length of Stay"],"suggest":["Rate Code","Package Rate","Corporate Rate","Stop Sell","Minimum Length of Stay (MLOS)","Release Period","Run of House (ROH)","Non-Refundable Rate"]},{"id":"hotel-dist","title":"Hotel — Distribution & Booking","existing":["CRS","PMS","Channel Manager","ARI","Bedbank","Net Rate","Commissionable Rate","Cancellation Policy","Guarantee Policy","Free Sale"],"suggest":["Hotel Switch","Property Mapping","Rate Shopping","Direct Booking","No-Show","Booking Engine","Distribution Cost","Two-Way XML"]},{"id":"pay","title":"Payments & Settlement","existing":["BSP","ARC","IATA Clearing House","VCC","Merchant of Record","Agency Model","Merchant Model","3-D Secure","Chargeback","IATA EasyPay"],"suggest":["PCI DSS","Strong Customer Authentication (SCA)","Form of Payment","Remittance","Tokenization","Acquirer","Interchange Fee","Settlement Cycle"]},{"id":"codes","title":"Identifiers & Codes","existing":["IATA Code","ICAO Code","Airport Code","Airline Designator","City Code","Pseudo City Code","UN/LOCODE","ISO 4217 Currency Code","ISO 3166 Country Code","Chain Code"],"suggest":["Airline Accounting Code","Flight Number","Aircraft Type Code","Office ID / IATA Number","Ticketing Prefix","Meal Code","Class Code","Station Code"]},{"id":"customer","title":"Customer, Loyalty & Profiles","existing":["Passenger Type Code","Frequent Flyer Program","Frequent Flyer Number","IATA One ID","Customer Profile","Loyalty Tier Status","Name Change","PRM","Secure Flight","GDPR Consent"],"suggest":["Known Traveler Number (KTN)","Redress Number","Unaccompanied Minor (UMNR)","Mileage Accrual","Award Redemption","Companion","Traveler Preference","Corporate Profile"]},{"id":"standards","title":"Distribution Standards & APIs","existing":["GDS","NDC","Offer","Order","OTA (Online Travel Agency)","OpenTravel Alliance","HTNG","Metasearch","Aggregator","ONE Order"],"suggest":["EDIFACT","REST API","Direct Connect","Dynamic Packaging","Offer Management System","Order Management System (OMS)","Airline Retailing Maturity (ARM)","Shopping API"]}],"roster":["PNR","Segment","Leg","Married Segment","Passive Segment","ARNK","SSR","OSI","MCT","Queue","Availability","RBD","Fare Basis Code","Fare Family","Origin & Destination","Journey","Fare Component","ATPCO","NUC","Overbooking","E-ticket","Flight Coupon","EMD","Reissue","Involuntary Reissue","Refund","Void","Ticketing Time Limit","Validating Carrier","Ancillary Service","Codeshare","Interline","Marketing Carrier","Operating Carrier","SPA (Special Prorate Agreement)","MITA","Proration","Slot","Schedule Change","IROPS","Rate Plan","Room Type","Board Basis","Occupancy","ADR","RevPAR","BAR","Allotment","Rate Parity","Length of Stay","CRS","PMS","Channel Manager","ARI","Bedbank","Net Rate","Commissionable Rate","Cancellation Policy","Guarantee Policy","Free Sale","BSP","ARC","IATA Clearing House","VCC","Merchant of Record","Agency Model","Merchant Model","3-D Secure","Chargeback","IATA EasyPay","IATA Code","ICAO Code","Airport Code","Airline Designator","City Code","Pseudo City Code","UN/LOCODE","ISO 4217 Currency Code","ISO 3166 Country Code","Chain Code","Passenger Type Code","Frequent Flyer Program","Frequent Flyer Number","IATA One ID","Customer Profile","Loyalty Tier Status","Name Change","PRM","Secure Flight","GDPR Consent","GDS","NDC","Offer","Order","OTA (Online Travel Agency)","OpenTravel Alliance","HTNG","Metasearch","Aggregator","ONE Order"]};
const ROSTER = roster.join(', ');

const ICON_SPEC = '아이콘(SVG) 규격: viewBox="0 0 48 48", 외부 참조/래스터/<image> 금지, stroke="currentColor" stroke-width="2" fill="none"(필요시 fill="currentColor" 소량), 둥근 선(stroke-linecap/linejoin="round"), 용어 개념을 단순한 라인아트로 표현, width/height 속성 없이 path/circle/rect/line만, 600자 이내, 한 줄 문자열.';

const ENTRY = {
  type:'object', additionalProperties:true,
  properties:{
    id:{type:'string'}, term:{type:'string'}, abbreviation:{type:'string'},
    aliases:{type:'array', items:{type:'string'}},
    category:{type:'string'}, conceptType:{type:'string'}, status:{type:'string'},
    definition:{type:'string'}, longDef:{type:'string'}, standardBody:{type:'string'},
    term_ko:{type:'string'}, definition_ko:{type:'string'}, longDef_ko:{type:'string'},
    providerTerms:{type:'array', items:{type:'object', additionalProperties:true, properties:{provider:{type:'string'}, term:{type:'string'}, context:{type:'string'}, context_ko:{type:'string'}, relationship:{type:'string'}}}},
    relationships:{type:'array', items:{type:'object', additionalProperties:true, properties:{type:{type:'string'}, targetTerm:{type:'string'}}}},
    distinctions:{type:'array', items:{type:'object', additionalProperties:true, properties:{targetTerm:{type:'string'}, explanation:{type:'string'}, explanation_ko:{type:'string'}}}},
    sources:{type:'array', items:{type:'object', additionalProperties:true, properties:{org:{type:'string'}, name:{type:'string'}, version:{type:'string'}, section:{type:'string'}, url:{type:'string'}}}},
    icon:{type:'string'},
  },
  required:['id','term','category','conceptType','status','definition','definition_ko','term_ko','icon','sources'],
};
const EXPAND_SCHEMA = { type:'object', additionalProperties:false, properties:{ id:{type:'string'}, newEntries:{type:'array', items:ENTRY} }, required:['id','newEntries'] };
const ICONS_SCHEMA  = { type:'object', additionalProperties:false, properties:{ id:{type:'string'}, icons:{type:'array', items:{type:'object', additionalProperties:false, properties:{ term:{type:'string'}, svg:{type:'string'} }, required:['term','svg']}} }, required:['id','icons'] };

phase('Expand');
const out = await parallel(cats.map(c => () => Promise.all([
  // expand: author ~8 new bilingual entries with per-term SVG icon (worktree-isolated authoring)
  agent(`너는 여행 산업 도메인 전문가다. "Travel Gaia" 백과사전의 카테고리 "${c.title}"(id "${c.id}")에 **신규 표제어**를 추가 집필한다.

이미 존재하는 표제어(중복 금지): ${c.existing.join(', ')}

다음 후보를 기준으로 정확히 8개의 신규 entry를 작성하라(부정확/중복되면 같은 카테고리의 더 적절한 용어로 대체 가능):
${c.suggest.map((t,i)=>`${i+1}. ${t}`).join('\n')}

각 entry 필드:
- id: term의 kebab-case. term, abbreviation(없으면 ""), aliases[], category="${c.id}".
- conceptType: acronym|standard-term|standard|business-term|provider-term|code|metric|process|role|document
- status: active|deprecated|ambiguous
- definition(영문 1~3문장, 정확), longDef(영문 확장, 없으면 ""), standardBody(없으면 "")
- 한국어: term_ko(한국어 명칭/풀이), definition_ko, longDef_ko(영문 없으면 "")  // 산업 약어/코드는 한국어 안에서 영문 유지
- providerTerms:[{provider,term,context,context_ko,relationship: same|narrower|broader|related|conflicting}]  // 확신할 때만, 아니면 []
- relationships:[{type: sameAs|broader|narrower|parent|child|related|conflicts|replaces|contrasts, targetTerm}]  // targetTerm은 아래 ROSTER 또는 네가 새로 만든 신규 표제어의 정확한 이름
- distinctions:[{targetTerm, explanation, explanation_ko}]
- sources:[{org,name,version,section,url}]  // ≥1 필수. 조문/Resolution 번호 상상 금지. 확신 없으면 org+문서명만, version/section/url은 "".
- icon: 용어 개념의 SVG 아이콘. ${ICON_SPEC}

정확성: 실제 공개 산업표준(IATA·ATPCO·OpenTravel·HTNG·ISO·ICAO·GDS 벤더) 근거. 환각 금지.
교차링크용 기존 ROSTER(정확한 이름만): ${ROSTER}

StructuredOutput으로 {id:"${c.id}", newEntries:[8개]} 반환.`,
    { label:`expand:${c.id}`, phase:'Expand', schema:EXPAND_SCHEMA, agentType:'general-purpose' }),
  // illustrate: SVG icon for each EXISTING term
  agent(`너는 미니멀 라인아트 아이콘 디자이너다. "Travel Gaia"의 카테고리 "${c.title}"의 아래 기존 표제어 각각에 대해 개념을 표현하는 SVG 아이콘을 만들어라.

표제어: ${c.existing.join(', ')}

${ICON_SPEC}
각 아이콘은 해당 용어의 개념을 직관적으로 표현(예: PNR→문서/레코드, Segment→경로 구간, Refund→되돌림 화살표+카드, Codeshare→두 비행기/공유). 단순하고 일관된 스타일.

StructuredOutput으로 {id:"${c.id}", icons:[{term:"<정확한 표제어>", svg:"<svg ...>...</svg>"}, ... 모든 기존 표제어]} 반환.`,
    { label:`icons:${c.id}`, phase:'Illustrate', schema:ICONS_SCHEMA, agentType:'general-purpose' }),
]).then(([ex, ic]) => ({ id:c.id, newEntries:(ex&&ex.newEntries)||[], icons:(ic&&ic.icons)||[] }))));

const res = out.filter(Boolean);
log(`완료 ${res.length}/${cats.length} 카테고리 · 신규 ${res.reduce((a,r)=>a+r.newEntries.length,0)}개 · 아이콘 ${res.reduce((a,r)=>a+r.icons.length,0)}개`);
return res;
