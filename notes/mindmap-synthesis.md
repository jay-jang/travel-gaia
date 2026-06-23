# 마인드맵 UI — 3자 종합 (2026-06-23)

자문: notes/mindmap-{claude,codex,agy}.raw.txt.

## 쟁점=레이아웃: **접이식 Radial Tree** 확정 (2/3 + 어의/목적)
- claude·agy=radial(조망), codex=indent tree(라벨 우려). codex 우려는 **기본 depth=2(root+5 vertical+16 subcategory=21노드)**면 라벨 충돌 없음 → radial 채택. 모바일/좁은 화면 폴백=indent.

## 만장 합의
- **점진 공개**: 기본 root+vertical+subcategory만, term은 클릭 시 enter. "전체 펼치기"는 보조(경고).
- **상호작용**: subcategory 클릭=펼침/접기, term 클릭=`#/term/{id}`, term 호버=툴팁(KO/EN 정의 1줄 + 관계 수 뱃지). 드래그/휠=팬/줌.
- **검색 점프**: 매칭 term 경로 자동 확장+하이라이트+줌 이동(후속: `#/mindmap?focus=id`).
- **force-graph와 역할 분리**: 그래프=관계 탐색(비결정), 마인드맵=분류 조망(결정적 계층). 공존(별 라우트). 표제어 페이지에 상호 진입 버튼(후속).
- **cross-link 미포함**(순수 계층) — relationships/distinctions는 force-graph에 위임(스파게티 방지).
- **구현**: d3.hierarchy + d3.tree(radial `.size([2π,R])`) + d3.linkRadial + d3.zoom. SVG. 색=vertical/category color, 다크모드 CSS 변수, 라벨=LANG. 기존 force-graph 전역과 분리(네임스페이스). 정적 레이아웃(RAF 없음).

## MVP 범위
`#/mindmap` 라우트 + 사이드바 링크. 기본 depth=2 radial, 클릭 확장, term 네비, 호버 툴팁, 줌/팬, 모두 접기/리셋. (검색 자동확장·상호진입 버튼은 후속.)

## 한줄
마인드맵=분류 구조의 결정적 조망(radial tree), 기본 depth=2로 407을 다루고, 관계는 force-graph에 맡긴다.
