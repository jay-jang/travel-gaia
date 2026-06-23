# 마인드맵 UI 설계 (claude code)

[레이아웃] **접이식 radial tree(d3.hierarchy+d3.tree, 방사형)** — 루트(Travel Gaia) 중심, 5 vertical→16 category→term이 바깥으로. "마인드맵" 미감 + 분류 조망에 최적. **대안**: 가로 dendrogram(라벨 가독 ↑, 빽빽한 읽기용).

[407 처리] 기본은 **root+5 vertical+16 category(약 21노드)만** 펼침(각 노드에 표제어 수). category 클릭 시 그 하위 ~25 term 펼침/접기. 검색창으로 특정 term 경로 자동 펼침+하이라이트. d3.zoom 줌/팬.

[상호작용] hover=노드 강조+툴팁(KO/EN 표제어+정의 스니펫). category 클릭=확장/축소. term(리프) 클릭=`#/term/id` 이동(또는 포커스). "모두 펼치기/접기" 컨트롤. 현재 경로 브레드크럼.

[force-graph와 차별] force-graph=관계망(related/broader/distinctions, 비계층, 탐색용). 마인드맵=**분류 트리(vertical→category→term), 구조 조망/이해용**. 상보적: "어디에 속하나/전체 구조"=마인드맵, "무엇과 연결되나"=그래프. 별도 라우트(`#/mindmap` vs `#/graph`)로 공존, 인라인 d3 재사용.

[관계 표현] MVP는 **순수 계층 트리**(명료성 우선). cross-link(relationships/distinctions)는 force-graph에 맡김. 선택적으로 term 호버 시 그 term의 관계를 옅은 곡선(edge bundling)으로 오버레이 가능하나 MVP 제외.

[구현] d3.hierarchy(glossary→root/vertical/category/term) + d3.tree(방사: separation→[angle,radius]→project). SVG(407노드 OK; 과밀시 canvas). 접기=표준 `_children` 토글. d3.zoom 팬/줌. 색=카테고리 color 변수, 다크모드 CSS 변수. 라벨=LANG 따라 term/term_ko. 별도 IIFE/네임스페이스로 기존 force-graph 전역과 충돌 회피.

[모바일] 좁은 화면=기본 접힘+줌/팬, 또는 들여쓰기 list-tree로 폴백. 핀치 줌.

[리스크] (1) 407 라벨 겹침 → 기본 term 접기 + 방사 간격 + 펼침/호버시만 라벨. (2) 전체 펼침시 DOM/perf → 기본 접힘, 캡. (3) startViewTransition/RAF 헤드리스 플래키 → 컨테이너 렌더+가드. (4) d3 전역 충돌 → 네임스페이스.

[한줄총평] 마인드맵=분류 구조의 조망(트리). force-graph와 역할 분리, **기본 접힘+클릭 확장**으로 407을 다룬다.
