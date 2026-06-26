# 의뢰: "Travel Wiki" 모던 디자인 재설계 (CSS만)

너는 시니어 프로덕트 디자이너 겸 프런트엔드다. **Travel Wiki**(여행 산업 용어 백과사전)의
비주얼을 **더 모던하고 세련되게** 재디자인하라. 산출물은 드롭인 가능한 **완성된 `<style>` 블록 하나**다.

## 사이트 성격
- 의존성 0의 **단일 HTML standalone** 위키(오프라인·더블클릭 실행). 한/영 토글, 다크모드, 용어 관계
  Knowledge Graph(canvas) 포함. 톤: 신뢰감 있는 레퍼런스 + 모던 docs/SaaS 감성.
- 뷰: 홈(hero+통계+카테고리 카드+"헷갈리는 용어"), 카테고리 목록, 표제어 상세(정의/동의어/공급자표/관계/혼동주의/출처),
  검색 결과, 그래프.

## 하드 제약 (반드시 지켜라 — 안 지키면 적용 불가)
1. **외부 의존성 절대 금지**: @import, 웹폰트(Google Fonts 등), CDN, 외부 url() 이미지 금지. 폰트는
   시스템 폰트 스택만(한글 포함: "Noto Sans KR","Apple SD Gothic Neo" 등). 아이콘은 이모지/CSS만.
2. **클래스 셀렉터를 바꾸지 마라**. 아래 목록의 클래스에 스타일을 입혀라(마크업은 그대로다). 새 클래스 추가 금지.
3. **다크모드 유지**: `:root{}` (라이트) + `[data-theme="dark"]{}` (다크) 둘 다 정의.
4. **CSS 변수 이름 보존**(값은 자유롭게 변경 가능, 추가 변수 OK): 다음 변수는 JS 인라인 스타일이 직접 참조하므로
   반드시 정의되어 있어야 한다 →
   `--bg --surface --surface-2 --border --text --muted --faint --accent --accent-weak --accent-2 --warn --warn-weak --danger --shadow --mono --sans --side --maxw`
   - `--side`: 좌측 사이드바 폭(현재 300px, grid-template-columns에 사용). `--maxw`: 본문 최대폭.
5. 반응형 유지: `@media (max-width:880px)`에서 사이드바가 `position:fixed`로 슬라이드되고, 데스크톱에선
   `.scrim{display:none}`(그리드 아이템화 방지) 이어야 한다.
6. 접근성: 본문 대비 충분히, focus 상태 보이게, 폰트 크기 적정.

## 스타일링 대상 클래스 (이 셀렉터들에 모던 스타일을)
레이아웃: `.top .brand .globe .searchwrap #q .mag .hint .tbtn .actions .menu-toggle .shell aside.nav .nav-title .cat-link .cnt .dot main .scrim`
홈: `.hero .stats .stat .sec-title .cards .card .ct .cd .cn .cta-graph .conflict .disclaimer`
목록/상세: `.crumbs .termlist .tl-item .h .d .abbr article .term-sub .badges .badge .badge.cat .st-active .st-deprecated .st-ambiguous .lead .field (h3) .chips .chip table.pt (th,td) .prov .rel-group .rl .rel-link .rel-dead .dist ul.src .notes .rel-meta .searchmeta mark .empty footer`
그래프: `.graph-head .kg-legend .legend-item (.ld) .graph-wrap #kg .kg-tip .kg-foot`
- 헤더 `header.top`은 `position:sticky;top:0`, 사이드바 `aside.nav`는 `position:sticky;top:59px;height:calc(100vh - 59px)` 가정(높이 바꾸면 top 값도 맞춰라). `#main`은 `.shell` 그리드의 2열.

## 디자인 방향 (모던하게, 과감해도 됨)
- 정제된 타이포 스케일, 넉넉한 여백, 부드러운 라운드/그림자, 세련된 컬러 시스템(라이트/다크 모두 고급스럽게),
  카드/배지/표의 디테일, 그래프 영역도 어울리게. 단, 가독성·정보 밀도 우선(장식 과잉 금지).

## 출력 형식 (엄수)
- **오직 `<style> ... </style>` 한 블록만** 출력하라. 설명/마크다운/코드펜스 금지. 위 모든 클래스/변수를 포함한 완성본.

---
아래는 **현재 CSS**(셀렉터·구조 참고용). 이를 모던하게 갈아엎되 위 제약을 지켜라:
