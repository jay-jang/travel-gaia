export const meta = {
  name: 'travel-wiki-provider-backfill',
  description: 'Add cross-provider/standard equivalents (providerTerms) where genuine naming differences exist; web-grounded, no hallucination',
  phases: [{ title: 'ProviderTerms', detail: '카테고리별 공급자/표준 대응어 백필' }],
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
          providerTerms: {
            type: 'array', items: {
              type: 'object', additionalProperties: false, properties: {
                provider: { type: 'string' }, term: { type: 'string' },
                context: { type: 'string' }, context_ko: { type: 'string' },
                relationship: { type: 'string' },
              }, required: ['provider', 'term'],
            },
          },
        }, required: ['id'],
      },
    },
  }, required: ['id', 'items'],
};

function prompt(c) {
  const blocks = c.entries.map(e => `# ${e.term} (id: ${e.id})${e.have ? ` [이미 보유: ${e.have}]` : ''}\n  ${e.def}`).join('\n');
  return `너는 여행산업 유통/공급자 시스템 전문가다. 카테고리 "${c.title}"(id "${c.id}")의 용어들에 대해, **같은 개념을 공급자·표준이 다르게 부르는 이름(providerTerms)**을 보강한다.

핵심 원칙:
- **실제로 공급자/표준별 명칭·구현 차이가 있는 용어에만** 추가하라. 보편/규제/추상 용어(예: EU261, CORSIA, 일반 비즈니스 용어)는 대응어가 없으면 **빈 배열**로 두라(억지로 만들지 마라).
- 후보 공급자/표준(카테고리에 맞게 선택): Amadeus, Sabre, Travelport(Galileo/Apollo/Worldspan), NDC/IATA, ATPCO, OpenTravel, HTNG, Booking.com, Expedia, Oracle OPERA(PMS), Sabre Hospitality, 카드 스킴(Visa/Mastercard/EMVCo), Worldpay/Adyen, 렌터카/철도 시스템 등.
- **WebSearch/WebFetch로 확인**한 실제 명칭만. 환각/추측 금지. 확신 없으면 그 항목 생략.
- 각 providerTerm: {provider, term(그 공급자가 쓰는 명칭/코드), context(1줄 영문 설명: 그 공급자 맥락에서 어떻게 쓰이는지), context_ko(한국어), relationship: same|narrower|broader|related|conflicting}.
- 이미 보유한 공급자와 중복되지 않게, **새로 추가할 것만** 반환.

용어:
${blocks}

각 용어에 추가할 대응어가 없으면 그 용어는 빈 providerTerms로 두거나 생략. StructuredOutput으로 {id:"${c.id}", items:[{id, providerTerms:[...]}]} 반환.`;
}

phase('ProviderTerms');
const res = await parallel(cats.map(c => () =>
  agent(prompt(c), { label: `prov:${c.id}`, phase: 'ProviderTerms', schema: OUT_SCHEMA, agentType: 'general-purpose' })
));
const out = res.filter(Boolean);
log(`완료 ${out.length}/${cats.length} 카테고리 · 신규 providerTerms ${out.reduce((a, r) => a + r.items.reduce((b, i) => b + (i.providerTerms || []).length, 0), 0)}개`);
return out;
