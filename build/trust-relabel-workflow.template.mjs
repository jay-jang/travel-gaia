export const meta = {
  name: 'travel-gaia-trust-relabel',
  description: 'Backfill authoritative source URLs (web-confirmed) and reclassify generic `related` edges into precise relationship types',
  phases: [{ title: 'TrustRelabel', detail: '카테고리별 출처 URL 백필 + 관계 재분류' }],
};

const DATA = __DATA__;
const { cats } = DATA;

const REL_TYPES = ['broader', 'narrower', 'parent', 'child', 'sameAs', 'contrasts', 'replaces', 'related'];

const OUT_SCHEMA = {
  type: 'object', additionalProperties: false, properties: {
    id: { type: 'string' },
    items: {
      type: 'array', items: {
        type: 'object', additionalProperties: false, properties: {
          id: { type: 'string' },
          sourceUrls: { type: 'array', items: { type: 'object', additionalProperties: false, properties: { org: { type: 'string' }, name: { type: 'string' }, url: { type: 'string' } }, required: ['name', 'url'] } },
          relabels: { type: 'array', items: { type: 'object', additionalProperties: false, properties: { targetTerm: { type: 'string' }, type: { type: 'string' } }, required: ['targetTerm', 'type'] } },
        }, required: ['id'],
      },
    },
  }, required: ['id', 'items'],
};

function prompt(c) {
  const blocks = c.entries.map(e => {
    const srcs = (e.missingSources || []).map(s => `    · {org:"${s.org || ''}", name:"${s.name || ''}"${s.version ? `, version:"${s.version}"` : ''}${s.section ? `, section:"${s.section}"` : ''}}`).join('\n');
    const rels = (e.related || []).map(r => `    · "${r.targetTerm}" — ${r.targetDef || '(정의 미상)'}`).join('\n');
    return `# ${e.term} (id: ${e.id})\n  정의: ${e.def}\n${srcs ? `  [URL 없는 출처]\n${srcs}\n` : ''}${rels ? `  ['related' 관계 → 재분류 검토 대상]\n${rels}\n` : ''}`;
  }).join('\n');
  return `너는 여행산업 표준 리서처 겸 지식그래프 큐레이터다. 카테고리 "${c.title}"(id "${c.id}")의 항목들에 대해 두 가지 작업을 한다.

작업 1) **출처 URL 백필**: 아래 'URL 없는 출처' 각각에 대해 **실제 공식/권위 문서 URL**을 WebSearch/WebFetch로 찾아라.
- 반드시 **실제로 검색·확인한 URL만** 반환(WebFetch로 페이지가 그 출처/주제와 일치하는지 확인). **추측·생성 금지.**
- 공식 도메인 우선(예: iata.org, atpco.net, opentravel.org, eur-lex.europa.eu, transportation.gov, iso.org, emvco.com 등). 확신 없으면 그 출처는 **생략**(빈 채로 두는 게 틀린 URL보다 낫다).
- 반환: items[].sourceUrls = [{org, name, url}] (찾은 것만). name은 위 출처의 name과 일치시켜라.

작업 2) **관계 재분류**: 아래 'related 관계' 각각을, 두 용어의 의미에 비추어 더 정확한 타입으로 바꿔라(확실할 때만; 애매하면 'related' 유지하여 생략).
- 타입: broader(상위개념), narrower(하위개념), parent/child(구성요소 관계), sameAs(동의어/같은 개념), contrasts(대조/혼동), replaces(대체/후속). 방향 주의(이 항목 기준).
- 반환: items[].relabels = [{targetTerm, type}] (바꾸는 것만; 'related'로 둘 것은 넣지 마라).

항목:
${blocks}

각 항목에 변경이 없으면 그 항목은 빈 sourceUrls/relabels로 두거나 생략 가능. StructuredOutput으로 {id:"${c.id}", items:[...]} 반환.`;
}

phase('TrustRelabel');
const res = await parallel(cats.map(c => () =>
  agent(prompt(c), { label: `trust:${c.id}`, phase: 'TrustRelabel', schema: OUT_SCHEMA, agentType: 'general-purpose' })
));
const out = res.filter(Boolean);
log(`완료 ${out.length}/${cats.length} 카테고리 · URL ${out.reduce((a, r) => a + r.items.reduce((b, i) => b + (i.sourceUrls || []).length, 0), 0)}개 · relabel ${out.reduce((a, r) => a + r.items.reduce((b, i) => b + (i.relabels || []).length, 0), 0)}개`);
return out;
