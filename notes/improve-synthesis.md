# Travel Gaia 개선점 — 3자(claude/codex/agy) 종합 (2026-06-19)

세 자문가에 동일 브리프(notes/improve-brief.md). 원문: improve-claude.md / improve-codex.raw.txt / improve-agy.raw.txt.
agy는 코드베이스를 직접 측정 → 수치를 **glossary.json으로 재검증 완료**:
- 출처(citations) 802개 중 URL 보유 **356개(44%)** — 나머지 56%는 클릭 불가 텍스트
- providerTerms 보유 엔트리 **122/407(30%)** → 핵심 가치(교차 동의어 매핑) 70% 미구현
- 관계 1877개 중 `related` **1703개(91%)** — build의 `(r.type='related')` fallback로 수렴, 그래프 정보밀도 낭비
- distinction 방향 링크 746개 중 **496개 단방향**(역방향 없음)

## 합의된 우선 개선(3자 공통)
1. **출처·신뢰 하드닝** (claude·codex#1·agy#1) — URL/메타(publisher·date·scope·authority) 보강 + build/okf-validate에 "URL 없음" 경고 게이트 + 표제어에 근거수준 표시. *codex·agy 모두 "다음 하나"로 지목, 난이도 하·임팩트 상.*
2. **교차 매핑 + 비교/충돌 매트릭스** (claude·codex#2·agy#2) — (a) 데이터: providerTerms 대량 보강(특히 air-ops·hotel-dist GDS), (b) UI: 표제어×공급자 매트릭스 + `#/compare` + `#/confusables`.
3. **검색 강화** (claude#1·codex#3·agy#3) — 가중 역색인(term>abbr>alias>def) + 퍼지(Levenshtein 1) + **한글 음차/초성**("피엔알"→PNR). 0-dep 인라인.
4. **관계 품질** (agy#4·codex#4) — `related` 91%를 실제 타입으로 재분류 + distinction 양방향 대칭화(496개 보강) + okf-validate QA.
5. **OKF export/JSON-LD** (claude·codex#5·agy#5) — schema.org `DefinedTerm` JSON-LD 인라인(SEO·RAG·상호운용) + okf 번들/JSON/CSV/edge-list 다운로드.

## 2차 개선(부분 합의)
- Vertical을 내비/홈에 노출 (claude; 데이터엔 이미 vertical 있음 — 다른 agent UI와 조율)
- 접근성(ARIA/키보드/reduced-motion) (codex·agy)
- 콘텐츠 헬스/커버리지 갭 리포트 + lastReviewed 만료경고 + log.md 자동갱신 (codex·agy)
- 양국어 KO 품질 감사 (3자)
- 단일파일 크기 예산 + serve.py gzip (claude·codex·agy)
- 데이터모델 v0.2: aliasesByProvider/jurisdiction/validity/evidence (codex)
- 클래스룸 Ground vertical 미구현 (agy; 다른 agent 영역)

## 결론(권고 순서)
- **즉시(저비용·고신뢰)**: ① 출처 URL 백필 + validate 게이트, ④ `related` 재분류 + distinction 대칭화 — 데이터/검증만으로 신뢰성·그래프 품질 즉시 상승.
- **다음(고UX)**: ③ 검색 강화, ② providerTerms 보강 → 비교/공급자 매트릭스.
- **그다음(차별화)**: ⑤ JSON-LD/OKF export, Vertical 내비, a11y, 크기예산.
- **단 하나만**: **출처·신뢰 하드닝**(2/3 1순위, 측정상 56% dead-text, 저비용) — "멋진 사전"에서 "인용 가능한 레퍼런스"로 가는 기준.
