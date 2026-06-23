export const meta = {
  name: 'travel-gaia-source-trust',
  description: 'Classify source tier + fill WEB-CONFIRMED clause/version (with evidence quote); upgrade secondary→primary. No hallucinated clause numbers.',
  phases: [{ title: 'SourceTrust', detail: '카테고리별 tier 분류 + 조문/버전 검증 기입' }],
};

const DATA = __DATA__;
const { cats } = DATA;

const OUT_SCHEMA = {
  type: 'object', additionalProperties: false, properties: {
    id: { type: 'string' },
    items: {
      type: 'array', items: {
        type: 'object', additionalProperties: false, properties: {
          id: { type: 'string' },
          sources: {
            type: 'array', items: {
              type: 'object', additionalProperties: false, properties: {
                matchName: { type: 'string' }, tier: { type: 'string' },
                url: { type: 'string' }, version: { type: 'string' }, section: { type: 'string' },
                verifyQuote: { type: 'string' },
              }, required: ['matchName'],
            },
          },
        }, required: ['id'],
      },
    },
  }, required: ['id', 'items'],
};

const RULES = `tier(권위 계층) 판정 — 도메인 단축규칙:
- eur-lex.europa.eu, ecfr.gov, federalregister.gov → regulation
- developer.iata.org, newgeniss.iata.org, iso.org, emvco.com, *.iata.org/.../ndc 스펙 → standard-body
- transportation.gov(DOT), faa.gov, naic.org → regulator-guidance
- iata.org/en/programs/… (프로그램/마케팅 소개) → association (함정: 이건 standard-body 아님)
- iata.org/en/publications/… (매뉴얼), opentravel.org, htng.org, clia.org, ahla.com, acriss.org, uic.org, gbfs.org → association
- support.travelport.com, developer.* (Amadeus/Sabre/Stripe/Adyen/Booking partner) → vendor-doc
- atpco.net → vendor-doc
- en.wikipedia.org → encyclopedia
- altexsoft.com, xotels.com, squaremouth.com, BCD/일반 블로그·미디어 → secondary

조문/버전 환각 방지 (절대):
- version/section은 **WebFetch로 1차 원문 본문을 직접 확인**한 경우에만 기입. 본문에서 그 문자열(예: "Article 7", "Resolution 787", "NDC 21.3", "Category 31")을 직접 보았을 때만.
- 확인하면 **verifyQuote**에 원문 발췌(≤200자, 그 조문/버전 문자열을 반드시 포함)를 저장.
- 못 보면 version/section은 **빈 채로** 둔다(추측·웹유통 번호 그대로 기입 금지). 빈 필드 > 틀린 필드.
- 고위험 정본 URL: EU261→eur-lex CELEX:32004R0261, NDC→developer.iata.org/en/ndc, Montreal Convention→ICAO/eur-lex 원문, 3DS→emvco.com/emv-technologies/3d-secure. ATPCO Category·IATA Resolution 번호는 공개 원문이 없거나 로그인 장벽이면 **번호 기입 금지**(tier만 vendor-doc/standard-body).`;

function prompt(c) {
  const blocks = c.entries.map(e => {
    const srcs = (e.sources || []).map((s, i) => `    [${i}] name:"${s.name || ''}" org:"${s.org || ''}" url:"${s.url || ''}"${s.version ? ` version:"${s.version}"` : ''}${s.section ? ` section:"${s.section}"` : ''}`).join('\n');
    return `# ${e.term} (id:${e.id}) [${e.conceptType || ''}]\n  ${e.def}\n  sources:\n${srcs}`;
  }).join('\n');
  return `너는 표준·규정 1차문서에 정통한 출처 큐레이터다. 카테고리 "${c.title}"(id "${c.id}")의 각 출처에 대해 두 가지를 한다.

작업 1) **tier 분류**: 모든 출처에 tier를 부여(아래 규칙).
작업 2) **조문/버전 검증 기입**: 표준/규정 성격(conceptType=standard|regulation|standard-term이거나 규정 인용) 출처는 **WebFetch로 1차 원문을 확인**해 정확한 version/section을 기입하고 verifyQuote(근거 발췌)를 남긴다. 확인 못 하면 비운다.
(선택) 현재 url이 2차(블로그/위키)거나 없으면, 1차 원문 url을 찾아 그 출처의 url로 교체/보강(WebFetch 확인). 기존 출처를 삭제하지는 마라.

${RULES}

항목:
${blocks}

각 출처는 matchName(위 name과 정확히 일치)로 식별. 변경/확인한 필드만 채워라(tier는 항상). StructuredOutput으로 {id:"${c.id}", items:[{id, sources:[{matchName, tier, url?, version?, section?, verifyQuote?}]}]} 반환.`;
}

phase('SourceTrust');
const res = await parallel(cats.map(c => () =>
  agent(prompt(c), { label: `src:${c.id}`, phase: 'SourceTrust', schema: OUT_SCHEMA, agentType: 'general-purpose' })
));
const out = res.filter(Boolean);
const cnt = (f) => out.reduce((a, r) => a + r.items.reduce((b, i) => b + (i.sources || []).filter(f).length, 0), 0);
log(`완료 ${out.length}/${cats.length} 카테고리 · tier ${cnt(s => s.tier)} · version/section ${cnt(s => s.version || s.section)} (verifyQuote ${cnt(s => s.verifyQuote)})`);
return out;
