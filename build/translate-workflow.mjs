export const meta = {
  name: 'travel-gaia-translate',
  description: 'Add Korean translations (_ko fields) to each category JSON for KO/EN toggle',
  phases: [{ title: 'Translate', detail: '카테고리별 한국어 번역 필드 추가' }],
};

const DIR = '/home/ubuntu/workspace/travel-gaia/data';
const CATS = ['air-ops','air-shop','air-ticket','air-partner','hotel-rate','hotel-dist','pay','codes','customer','standards'];

const VERDICT = {
  type:'object', additionalProperties:false,
  properties:{ id:{type:'string'}, count:{type:'integer'}, ok:{type:'boolean'}, notes:{type:'array',items:{type:'string'}} },
  required:['id','count','ok'],
};

phase('Translate');
const results = await parallel(CATS.map(id => () => agent(
`너는 여행 산업 도메인 전문 번역가다. 파일 "${DIR}/cat-${id}.json"의 각 entry에 **한국어 번역 필드**를 추가한다(KO/EN 토글용).

작업:
1. Read 도구로 "${DIR}/cat-${id}.json"을 읽는다(JSON 배열).
2. 배열의 **각 entry**에 아래 _ko 필드를 추가한다(기존 필드는 절대 삭제/변경 금지):
   - term_ko: 표제어의 간결한 한국어 명칭/풀이 (예: PNR → "여객 예약 기록", Codeshare → "공동운항", RBD → "예약 등급 지정자").
     산업 약어/코드는 한국어 안에 영문 병기 가능. 없으면 영문 그대로.
   - definition_ko: definition을 자연스러운 한국어로 번역. 산업 용어(PNR, EMD, NDC 등 약어/고유명)는 영문 유지.
   - longDef_ko: longDef가 있으면 번역, 없거나 ""이면 "".
   - notes가 있으면 notes_ko 추가(번역). 없거나 ""이면 "".
   - distinctions가 있으면 각 항목에 explanation_ko 추가(번역).
   - providerTerms가 있으면 각 항목에 context_ko 추가(번역). context가 비었으면 "".
3. 번역 품질: 직역 금지, 전문적이고 자연스러운 한국어. 의미 왜곡/추가 정보 생성 금지(번역만).
4. Write 도구로 "${DIR}/cat-${id}.json"에 **수정된 JSON 배열 전체**를 다시 저장한다(순수 JSON, 마크다운/주석 없이, 모든 기존 필드 보존).
5. StructuredOutput으로 {id:"${id}", count:<entry 개수>, ok:<정상 true>, notes:[특이사항]} 반환.`,
  { label:`translate:${id}`, phase:'Translate', schema:VERDICT, agentType:'general-purpose' }
)));

const ok = results.filter(Boolean);
log(`번역 완료: ${ok.length}/${CATS.length} 카테고리, 총 ${ok.reduce((a,s)=>a+(s.count||0),0)} entry`);
return ok;
