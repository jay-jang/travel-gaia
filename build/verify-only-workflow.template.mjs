export const meta = {
  name: 'travel-wiki-verify-only',
  description: 'Adversarial web fact-check of unverified expansion entries; returns keep/fix/drop verdict + patch per entry',
  phases: [
    { title: 'Verify', detail: '미검증 표제어 적대적 웹 팩트체크' },
  ],
};

const DATA = __DATA__;
const { items } = DATA;

const VERDICT_SCHEMA = {
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
      },
    },
  }, required: ['term', 'isReal', 'verdict'],
};

function verifyPrompt(it) {
  const e = it.entry;
  return `너는 회의적인 산업표준 팩트체커다. 아래 신규 표제어 entry가 환각/오류를 포함한다고 가정하고 **웹으로 검증**하라(WebSearch/WebFetch).

카테고리: ${it.catTitle} (${it.cat})
entry(JSON):
${JSON.stringify(e)}

검증 항목:
1) 실재하며 올바르게 명명된 산업 용어인가? (오타/잘못된 약어/존재하지 않는 개념이면 isReal=false, verdict="drop")
2) 영문 definition/longDef가 정확한가?
3) 한국어 term_ko/definition_ko가 정확하고 자연스러운가?
4) sources가 실재하는가? 날조된 Resolution/조문/섹션/버전 번호가 있는가? (날조면 patch.sources로 교체)
5) relationships/distinctions의 targetTerm과 설명이 옳은가?

판정(verdict):
- "drop": 실재하지 않거나 근본적으로 틀렸고 교정 불가.
- "fix": 교정 가능. patch에 **교정이 필요한 필드만** 담아라(올바른 필드는 생략). sources가 날조면 실제 권위 출처로 교체하거나 {org,name}만 남기고 version/section/url=""로 단순화.
- "keep": 견고함.

icon은 검증 대상이 아니다(이미 유효). StructuredOutput으로 {term:"${e.term}", isReal, verdict, confidence:"high|med|low", issues:[...], patch:{...}} 반환.`;
}

phase('Verify');
const pairs = await parallel(items.map(it => () =>
  agent(verifyPrompt(it), { label: `verify:${it.cat}:${String(it.entry.id || it.entry.term).slice(0, 24)}`, phase: 'Verify', schema: VERDICT_SCHEMA, agentType: 'general-purpose' })
    .then(v => ({ cat: it.cat, id: it.entry.id, term: it.entry.term, v }))
));

const res = pairs.filter(Boolean);
const tally = { keep: 0, fix: 0, drop: 0, failed: 0 };
for (const p of res) {
  if (!p.v) { tally.failed++; continue; }
  if (p.v.verdict === 'drop' || p.v.isReal === false) tally.drop++;
  else if (p.v.verdict === 'fix') tally.fix++;
  else tally.keep++;
}
log(`검증 완료: keep ${tally.keep} · fix ${tally.fix} · drop ${tally.drop} · 실패 ${tally.failed} / 총 ${items.length}`);
return res;
