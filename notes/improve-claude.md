# Travel Wiki 추가 개선점 (claude code)

[우선순위 표]
| 제목 | 임팩트 | 난이도 | 한 줄 설명 |
|---|---|---|---|
| 검색 엔진 강화(가중 역색인+퍼지+KO초성+alias) | 상 | 중 | 토큰 매칭 → term>abbr>alias>def 가중, 오타 허용, 한글 초성, 0-dep 인라인 |
| "비교/혼동쌍" 1급 뷰 + 공급자 매트릭스 | 상 | 중 | 제품 핵심가치(동의어·distinction)를 한 화면에 나란히 — 현재는 1개씩만 봄 |
| Vertical을 내비/홈에 노출 | 상 | 하~중 | 이미 데이터엔 vertical 있음 → 사이드바/홈을 vertical 그룹으로(접이식), vertical 랜딩 |
| 출처·신뢰 하드닝 + 콘텐츠 헬스 리포트 | 상 | 중 | 빈 url/version 보강, 빌드시 약한출처·고아용어·미싱 distinction 경고 |
| OKF를 "제품"으로 발행 | 중상 | 중 | okf/ 번들 다운로드(zip) + JSON-LD(schema.org DefinedTerm) + "consume OKF" 문서 |
| 접근성(a11y)+reduced-motion+키보드 그래프 | 중 | 중 | SVG 그래프/캔버스 클래스룸 ARIA·키보드·대비, 라우트 포커스, 모션 토글 |
| 단일파일 크기 예산 | 중 | 중 | index.html 2.38MB(d3 273KB+폰트+407 인라인) — SVG 최소화, 측정·예산화 |
| 콘텐츠 기여 워크플로우 + pre-commit 검증 | 중 | 하 | "용어 추가법" 문서 + 템플릿 concept + pre-commit(okf-validate+build) |
| 양국어 일관성 감사 | 중 | 중 | KO 정의 영문혼용·동일 EN→일관 KO, KO 검색 품질 |
| 용어 최신성/표준버전 타임라인 | 중 | 중 | status(deprecated/ambiguous) 노출, NDC 등 표준 버전 "as of" |

[상세] 상위 5
1) 검색 엔진 강화 — 무엇: 현재 검색은 단순 토큰 포함. 왜: 레퍼런스는 "빨리 찾기"가 생명, 약어·alias·KO로 찾는 경우가 많음. 어떻게: build시 가중 역색인(term/abbr/alias/def 가중치) JSON 인라인 → 런타임 퍼지(편집거리 1~2)+KO 초성 인덱스, 결과 키보드 탐색. 0-dep 유지.
2) 비교/혼동쌍 뷰 — 무엇: distinctions·providerTerms가 데이터에 풍부한데 1개 표제어 안에 갇힘. 왜: "OTA vs OpenTravel", "Marketing vs Operating carrier" 구분이 이 제품의 USP. 어떻게: `#/compare/a,b[,c]` 라우트(정의/공급자명/관계/구분 나란히) + `#/confusables` 갤러리(모든 distinction 쌍) + 표제어×공급자 매트릭스.
3) Vertical 내비 노출 — 무엇: glossary.verticals + 엔트리 vertical 메타는 있으나 UI는 16카테고리 평면. 왜: "크게 묶고 세분화" 구조가 사용자에게 안 보임. 어떻게: 사이드바를 vertical→subcategory 접이식 트리로, 홈 디렉터리를 vertical 섹션으로, `#/vertical/<id>` 랜딩(소속 세분류+대표어). (다른 agent의 그래프/클래스룸과 조율.)
4) 출처·신뢰 하드닝 — 무엇: 다수 source가 org+name만(url/version/section 빈값). 왜: 권위=검증가능성. 어떻게: 검증가능 항목에 실제 URL·조문/버전 보강(리서치 패스), build 리포트에 "약한 출처(URL 없음) N", "고아 용어(링크 0)", "distinction 없는 혼동가능군" 경고 → 콘텐츠 헬스 게이트.
5) OKF 제품화 — 무엇: okf/는 정본이지만 외부에 노출 안 됨. 왜: "사람·에이전트가 읽는 지식포맷"이 차별점. 어떻게: 빌드가 `okf-bundle.zip` 산출+다운로드 링크, 각 표제어에 JSON-LD(schema.org DefinedTerm/inDefinedTermSet) 임베드(SEO·상호운용), README에 "OKF로 소비하기"(git clone/agent 읽기) 섹션.

[한 줄 총평] 딱 하나면 **검색 엔진 강화** — 407개로 커진 지금 "원하는 용어를 즉시 찾는" 경험이 레퍼런스 채택의 1순위 병목이고, 0-dep 인라인으로 구현 가능해 ROI가 가장 높다.
