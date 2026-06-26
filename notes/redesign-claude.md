# Travel Wiki — 재설계 제안 (claude code)

[CONCEPT]
"여행 산업 편람(field manual)" — 인쇄된 용어사전/연감의 권위와 밀도를 화면으로. 장식이 아니라 **활자와 괘선(rule)**이 구조를 만들고, 교차참조는 **여백 사이드노트**와 **스택 칼럼**으로 공간적으로 탐색한다.

[VISUAL SYSTEM]
- 폰트: **Newsreader**(에디토리얼 세리프 — 표제/본문, 신문 같은 권위) + **IBM Plex Sans**(UI·라벨·짧은 정의, "엔지니어링 레퍼런스" 톤, 진부하지 않음) + **IBM Plex Mono**(코드: IATA/RBD/ISO 등 다수). 셋 다 OFL·임베드 가능. 한글은 시스템 폰트(Apple SD Gothic/Malgun/Noto KR) 폴백 — 라틴 디스플레이만 base64 임베드.
- 팔레트: **종이+잉크**. light: paper `#f7f4ec`(따뜻한 미색, 차가운 회청 탈피), ink `#1b1a16`, muted `#5c574d`, rule `#ddd6c6`, accent **oxblood `#7a2520`**(링크/활성에만 극소량). dark: bg `#14130f`, ink `#ece7d8`. 16개 카테고리색은 **8px 키라인/스와치**로만, 채움 금지.
- 밀도: 높음(정보 우선). 보더/그림자: **1px 헤어라인 괘선만**, 드롭섀도·둥근카드 없음(radius 0~2px). 모션: 거의 0(120ms 페이드만, 카운트업·리프트 없음).

[IA & NAV]
- 텍스트: 좌측 상시 **디렉터리 사이드바**=16카테고리 목차(개수 표시)+그래프/색인/클래스룸. 상단 **검색**(`/`로 포커스, 커맨드팔레트식). 브레드크럼.
- 브라우징: **색인(Index)**을 1급 디렉터리로 승격 — 책 색인처럼 A–Z/카테고리별 조밀 활자 리스트(표제어+KO+카테고리 스와치+점선 leader). 카테고리 페이지=조밀 정의 리스트.
- **그래픽 내비게이션(차별점) 3층**:
  1) **스택 칼럼(Matuschak)**: 교차참조 클릭 → 우측에 새 칼럼이 쌓여 맥락 유지한 채 연결을 따라감. 시그니처 인터랙션.
  2) **여백 사이드노트(Tufte)**: 표제어 페이지의 related/distinctions/sources를 우측 여백 노트로.
  3) **지식 아틀라스**: 그래프를 모노크롬 "별자리/지도"로 재설계(노드=차수 크기, 카테고리=소색, 호버=정의 미리보기, 클릭=스택). + 표제어 페이지에 **로컬 미니맵**(해당 용어+직접연결)을 인라인 도식으로.

[KEY SCREENS]
- 홈/디렉터리: 히어로 없음. **마스트헤드**(세리프 제목+한 줄 목적+굵은 괘선) → **디렉터리**(16카테고리 2~3단 활자 목차, 각 카테고리에 KO·개수·샘플 3개) → "혼동 쌍(distinctions)" 섹션(우리만의 가치)을 활자 리스트로 → 최근/주요 표제어 칼럼. 연감을 펼친 느낌.
- 표제어: 세리프 표제+KO 부제+카테고리 키라인+status. 2단: 본문=정의/확장/공급자 등가(테이블)/예시, 우여백=related·distinctions("혼동주의")·sources·미니맵. related 클릭→칼럼 스택.
- 카테고리: 조밀 정의 리스트(표제어—짧은 정의), 카테고리 헤더(색 키라인+설명).
- 그래프: 풀블리드 조용한 아틀라스, 좌레일=개념목록/범례 필터, 모노 노드+헤어라인 엣지(실선=related/점선=distinction), 호버 미리보기, 클릭=측면 스택.
- 색인: 책형 색인, A–Z 점프바(mono), 2~3단, 표제어+KO+스와치+점선 leader.

[ANTI-AI]
그라데이션·글래스·거대 디스플레이·카운트업·섀도 필카드 전부 제거. 권위는 진짜 에디토리얼 세리프+헤어라인 괘선+종이 팔레트+조밀한 활자 위계에서 나온다 — 인쇄 레퍼런스북의 언어로, 템플릿형 AI SaaS와 정반대. 스택칼럼+사이드노트는 기성품이 아닌 맞춤 인터랙션.

[HTML/CSS]
```
--paper:#f7f4ec; --ink:#1b1a16; --muted:#5c574d; --rule:#ddd6c6; --accent:#7a2520;
--serif:'Newsreader',Georgia,'Apple SD Gothic Neo','Malgun Gothic',serif;
--sans:'IBM Plex Sans',system-ui,'Apple SD Gothic Neo',sans-serif;
--mono:'IBM Plex Mono',ui-monospace,monospace;
--measure:68ch;
```
- 마스트헤드: `.masthead{border-bottom:2px solid var(--ink)}` + small-caps eyebrow.
- 사이드노트: `.sidenote{float:right;clear:right;width:14rem;margin-right:-15.5rem;font:.82rem/1.5 var(--sans);color:var(--muted)}`
- 스택: `.stack{display:flex;overflow-x:auto;scroll-snap-type:x mandatory} .col{flex:0 0 min(46rem,92vw);scroll-snap-align:start;border-right:1px solid var(--rule)}`
- 키라인: `.term-head{border-left:6px solid var(--cc)}`
- baseline: `:root{--r:0} .card,.btn{border-radius:var(--r)} a{color:var(--accent);text-underline-offset:2px}`

[RISKS]
- **한글 폰트**: 오프라인 임베드시 KR 웹폰트는 용량 폭증 → 라틴 디스플레이만 임베드, KO는 시스템 폴백(현재 빌드도 동일 전략). 최대 트레이드오프.
- 스택 칼럼/사이드노트는 좁은 화면에서 단일 칼럼·인라인 토글로 축소 필요(반응형 복잡도).
- 조밀 활자는 가독성 튜닝 필요(line-height/measure).
