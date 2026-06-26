export const meta = {
  name: 'travel-wiki-research-expand',
  description: 'Research-grounded term expansion: web-research candidates, author bilingual entries, adversarially fact-check each',
  phases: [
    { title: 'Research', detail: '웹 리서치로 누락/기초 표제어 후보 발굴' },
    { title: 'Author', detail: '카테고리별 신규 표제어 집필(EN/KO+SVG)' },
    { title: 'Verify', detail: '표제어별 적대적 팩트체크·교정' },
  ],
};

const DATA = __DATA__;
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
  return `너는 여행산업 도메인 리서처다. "Travel Wiki" 백과사전의 카테고리 "${c.title}" (id "${c.id}")에 추가할 표제어를 **실제 웹 리서치**로 발굴한다.

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
  return `너는 여행산업 도메인 전문가 집필자다. "Travel Wiki"의 카테고리 "${c.title}"(id "${c.id}")에 **신규 표제어**를 집필한다.

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
