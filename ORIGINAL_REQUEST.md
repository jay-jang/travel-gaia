# Original User Request

## Initial Request — 2026-06-17T01:41:46Z

Redesign the Travel Gaia interactive graph to represent a hybrid hierarchical structure (Category -> Parent Terms -> Child Terms) and allow users to dynamically expand and collapse child concepts by clicking parent nodes.

Working directory: /home/ubuntu/workspace/travel-gaia
Integrity mode: benchmark

## Requirements

### R1. Hierarchical Graph Layout
Structure the interactive D3.js knowledge graph into a hybrid hierarchy:
- Top-level root nodes represent the 16 Categories.
- Category nodes expand to reveal top-level parent terms within that category (terms that have no parent/broader relations in that category).
- Term nodes expand to reveal their child/narrower terms (derived from the `parent`/`child` and `broader`/`narrower` relationships in the dataset).

### R2. Dynamic Click-to-Toggle (Expand & Collapse)
Implement intuitive node expansion and collapse interactions:
- Initially, only Category nodes (or a limited set of root nodes) are visible on the canvas.
- Clicking a collapsed node dynamically generates and reveals its immediate child nodes with smooth animations (nodes transitioning/flying out from the parent).
- Clicking an already-expanded parent node collapses and hides all of its nested descendant nodes to keep the viewport clean.

### R3. Visual Distinction of Hierarchy Levels
Ensure clear visual styling for nodes at different levels of the hierarchy:
- Category nodes, parent term nodes, and child term nodes must have distinct visual weights, sizing, or styling (e.g., categories are larger, parent terms have keylines, child terms are smaller).
- Smooth D3 force-directed layout forces must stabilize the node expansion/collapse nicely.

### R4. Test Suite and Build Compatibility
Ensure the build pipeline (`node build/build.mjs`) and UI test suite (`node build/verify-ui.mjs`) continue to execute and pass successfully.
- Modify the test assertions in `verify-ui.mjs` regarding the initial visible node count (`window.kgVisibleNodeIds`) to reflect the new progressive disclosure behavior (i.e. assert that only the initial root/category nodes are visible initially, rather than expecting all 327 entries to be visible on load).

## Acceptance Criteria

### Build & Test
- [ ] Running `node build/build.mjs` successfully generates the single-file `index.html`.
- [ ] Running `node build/verify-ui.mjs` completes with all assertions passing.

### Hierarchical Expansion & Toggle
- [ ] The graph initially renders only Category nodes (and optionally core root terms).
- [ ] Clicking a Category node expands and displays its parent terms.
- [ ] Clicking a parent term expands and displays its child/narrower terms.
- [ ] Clicking an expanded node collapses and hides all of its descendants recursively.
- [ ] Nodes are visually distinguished by size and style based on their level (Category vs. Parent Term vs. Child Term).
- [ ] Node expand/collapse events use smooth fly-out/fly-in transitions.
- [ ] Detail side drawer still opens correctly when a term node is clicked/selected.

## Follow-up — 2026-06-17T07:23:16Z

클래스룸 기능을 전면 개편하여 항공, 호텔, 크루즈, 공통의 4가지 버티컬을 기준으로 기초 개념부터 실무 트랜잭션 흐름까지 단계별로 학습할 수 있는 인터랙티브한 SVG 기반 학습 플랫폼을 구축하고, 이에 맞춰 UI/UX 및 테스트 세트를 재설계합니다.

Working directory: /home/ubuntu/workspace/travel-gaia
Integrity mode: development

## Requirements

### R1. 버티컬별 다단계 서비스 흐름 설계
- 항공(Air), 호텔(Hotel), 크루즈(Cruise), 공통(Common) 4개 버티컬의 학습 과정을 설계합니다.
- 기존의 Class 101, 201은 제거하고, 각 버티컬별로 기초부터 심화까지 개별 단어가 아닌 '전체 거래 및 서비스 흐름(Transaction and Service Flow)'을 보여주도록 구성합니다.
  - 예시:
    - 항공: GDS 예약/발권 흐름 및 NDC/ONE Order 현대적 유통 흐름
    - 호텔: Channel Manager - PMS - OTA 연동 및 예약/정산 흐름
    - 크루즈: 크루즈 선사 - 홀세일러 - 대리점 간 예약, 요금 코드, 기항지 연계 및 정산 흐름
    - 공통: 외화 정산(Settlement), 데이터 표준(EDIFACT/JSON), 식별자 코드 흐름 등
- 각 버티컬당 최소 2개 레벨의 흐름(예: 기초 흐름, 심화 흐름)이 있어야 하며, 각 흐름은 최소 4개 이상의 단계(Step)로 연결되어야 합니다.

### R2. SVG 기반의 인터랙티브 UI 개편
- 기존의 Canvas 2D 시각화 방식 대신, SVG 기반의 완전히 새로운 인터랙티브 UI(예: 드래그 앤 드롭 카드 맞추기, 흐름 노드 연결 퀴즈, 클릭형 단계 시뮬레이션 등)를 도입합니다.
- 사용자가 흐름 단계를 직접 조작하거나 상호작용하여 이해도를 확인할 수 있는 실시간 인터랙션 및 피드백(정답/오답 표시, 설명 툴팁 등)을 제공해야 합니다.
- 탭 UI는 '항공', '호텔', '크루즈', '공통' 4개 버티컬과 각 버티컬 내 레벨을 쉽게 탐색할 수 있는 다차원 구조(예: 대분류 버티컬 탭 - 소분류 레벨 탭/메뉴)로 개편합니다.

### R3. 이중 언어(KO/EN) 완벽 지원
- 기존 다국어 시스템(`LANG` 글로벌 변수 및 `t()` 번역 함수)과 연동하여, 새롭게 추가된 모든 설명, 퀴즈 피드백, 탭 레이블 및 흐름의 상세 내러티브가 한국어와 영어 모두로 제공되어야 합니다.

### R4. 빌드 파이프라인 및 테스트 코드 준수
- 수정 사항은 `node build/build.mjs`를 통해 정상적으로 단일 standalone `index.html`로 컴파일되어야 합니다.
- 변경된 UI 구조와 동작에 맞춰 `build/verify-ui.mjs` 테스트 코드를 업데이트하고, `node build/verify-ui.mjs` 실행 시 모든 테스트가 성공(PASS)하도록 합니다.
- 외부 라이브러리를 사용하는 경우 오프라인 standalone 구동을 위해 소스에 인라인되거나 `build/vendor/`에 파일로 포함되어 index.html로 통합되어야 합니다.

## Acceptance Criteria

### 구조 및 데이터 검증
- [ ] 항공, 호텔, 크루즈, 공통 4개 버티컬 분류가 명확히 탭/메뉴로 구분되어 노출된다.
- [ ] 각 버티컬별로 최소 2개 레벨의 흐름이 제공되며, 각 흐름은 4개 이상의 인터랙티브 단계로 진행된다.

### 인터랙티브 UI/UX 검증
- [ ] 학습 렌더링 영역이 Canvas가 아닌 SVG 엘리먼트로 동적 생성 및 관리된다.
- [ ] 흐름을 진행하면서 사용자가 드래그 앤 드롭, 노드 클릭 또는 퀴즈 풀기 등 액션을 할 수 있는 인터랙션 요소가 제공된다.
- [ ] 정답 여부나 흐름 진행 상태에 따라 동적으로 UI 피드백(애니메이션, 성공/실패 팝업, 상세 설명 등)이 바뀐다.
- [ ] 언어 변경(KO/EN) 버튼 클릭 시 모든 텍스트가 해당 언어로 실시간 동기화된다.

### 빌드 및 테스트 검증
- [ ] `node build/build.mjs` 명령어로 컴파일했을 때 컴파일 에러 없이 `index.html`이 갱신된다.
- [ ] `node build/verify-ui.mjs` 실행 시 클래스룸 개편에 따른 엘리먼트/동작성 테스트가 모두 PASS한다.
- [ ] 생성된 `index.html`은 다른 네트워크 연결이나 백엔드 서버 없이 단독 파일로 로컬 브라우저에서 완전하게 실행된다.

## Follow-up — 2026-06-23T02:09:28Z

Redesign the taxonomy Mindmap UI in Travel Gaia into a highly interactive, modern, and visually premium exploration interface. The new UI will feature smooth transitions, dynamic collapsible layouts, path-expanding search with auto-focus, layout switching, inline details, and bilingual support.

Working directory: /home/ubuntu/workspace/travel-gaia
Integrity mode: benchmark

## Requirements

### R1. Multi-Layout Mindmap Visualization
- Support toggling between a Radial Tree (circular layout) and a Horizontal Tree/Mindmap (left-to-right hierarchical tree) using D3.js.
- Ensure smooth morphing transition animations between layout switches and node expand/collapse actions.
- Provide interactive controls to zoom in/out, fit/reset the canvas, and an interactive minimap overlay displaying the entire tree overview.

### R2. Rich Node Customization & Collapsible Interactions
- Style nodes as card-like bubbles/boxes with colored borders mapped to their respective Vertical/Category.
- Categories/subcategories must show term counts, and term nodes should have distinct sizing and visual weights.
- Click interactions: Clicking subcategory or vertical nodes collapses/expands descendants recursively. Hovering shows tooltips with translation (KO/EN), definition, and connections count.

### R3. Path-Expanding Search & Inline Detail Drawer
- Add a search input on the mindmap view. Searching auto-expands parent paths to matching term nodes, pans/zooms the canvas to center the target node, and flashes/highlights it.
- Clicking a term node opens an inline sidebar/drawer on the mindmap page showing its details (definition, category, vertical, links/relationships) instead of forcing full page navigation.

### R4. Verification and Build Integrity
- The build pipeline (`node build/build.mjs`) must run successfully to produce the standalone `index.html` file.
- The UI test suite (`node build/verify-ui.mjs`) must pass. You must add programmatic JSDOM verification tests for mindmap state (e.g., verifying rendering, layout switching capability, expand/collapse toggling, and search focus path expansion).

## Acceptance Criteria

### Build & Test
- [ ] Running `node build/build.mjs` compiles without errors and generates `index.html`.
- [ ] Running `node build/verify-ui.mjs` executes and passes all tests (including new mindmap verification tests).

### Interactive Mindmap Features
- [ ] Render the taxonomy hierarchy (Vertical -> Category -> Term) in the SVG.
- [ ] Layout toggles between Radial and Horizontal Mindmap with smooth D3 transitions.
- [ ] Nodes are styled as rich visual cards/bubbles with appropriate colors, borders, and term counts.
- [ ] Zoom, pan, reset, and minimap controls are fully operational.

### Search, Expansion, and Inline Details
- [ ] Search input highlights, auto-expands the paths of matched terms, and centers the view on the matched node.
- [ ] Clicking nodes correctly collapses/expands children recursively.
- [ ] Clicking a term node displays its details in an inline drawer/sidebar within the mindmap page.
- [ ] The entire UI respects `LANG` global variable for KO/EN translations dynamically.

## Follow-up — 2026-06-24T04:45:11Z

Redesign the Travel Gaia Knowledge Graph and Mindmap UIs to reduce clutter and overlap, using graph visualization best practices to make both views display hierarchical relationships more cleanly and elegantly.

Working directory: /home/ubuntu/workspace/travel-gaia
Integrity mode: benchmark

## Requirements

### R1. Knowledge Graph Clutter-Reduction & Auto-Collapse
- Anchor Category nodes in a clean, stable circle/ring configuration (hub layout) to prevent categories from wandering and overlapping.
- Implement accordion-style auto-collapse: when a Category node is clicked/expanded, automatically collapse any other expanded category nodes to keep the visible graph compact.
- Use dynamic collision radius calculation in D3 based on text/label length to completely prevent overlaps between adjacent node cards.

### R2. Focus Mode & Link Separation
- Implement a "Focus / Isolation Mode" in the Knowledge Graph: when a node is clicked, hovered, or searched, highlight it and its 1-step direct neighbors. All other unrelated nodes and links should be dimmed or hidden.
- Distinguish links visually based on their type:
  - Hierarchical parent-child links should be solid, colored according to their vertical/category.
  - Cross-category relational and distinction links should be styled differently (e.g., thin, dashed/dotted, lighter neutral gray) to clearly separate thematic relationships from hierarchy.

### R3. Mindmap Layout & Path Highlighting
- Update the Mindmap's Horizontal Tree layout to use clean orthogonal (right-angled) link routing instead of curved Bezier links.
- Implement hierarchical path highlighting: dynamically highlight the path from the root node to the currently active/selected node with a vibrant color and subtle glow.
- Add quick depth-level controls to the mindmap control panel:
  - Collapse all to root/verticals.
  - Expand to categories (Depth 2).
  - Expand all terms.

### R4. Premium Visual Card Styling & Animations
- Redesign node representation in both views into elegant capsule cards with subtle background gradients and rounded borders.
- Include visual badges on nodes: category cards show term counts, and term cards show subtle badges for concept types or status.
- Add hover-zoom micro-animations on node cards for a highly responsive and premium interactive feel.

### R5. Verification and Test Suite Compatibility
- Ensure that the project compiles cleanly using `node build/build.mjs`.
- Ensure all tests in `build/verify-ui.mjs` execute and pass successfully. Adapt the test assertions as needed to match the accordion-style expansion or new UI elements.

## Acceptance Criteria

### Build and Verification
- [ ] Running `node build/build.mjs` runs successfully and updates `index.html` with no unresolved cross-references.
- [ ] Running `node build/verify-ui.mjs` executes and passes all assertions.

### Knowledge Graph Features
- [ ] Category nodes are anchored in a stable circular configuration and do not overlap.
- [ ] Expanding a Category node collapses all other expanded Category nodes (accordion behavior).
- [ ] Direct hierarchy links and cross-category relational links are visually distinct (e.g. solid colored vs dashed gray).
- [ ] Focus mode dims out non-neighboring nodes and links when a node is selected.

### Mindmap Features
- [ ] Horizontal Mindmap layout uses right-angle (orthogonal) link lines.
- [ ] Path from root to selected node is highlighted dynamically.
- [ ] Level-of-depth buttons ("Collapse All", "Show Categories", "Expand All") are present and functional.
- [ ] Nodes are rendered as capsule cards with gradients, borders, and count/type badges.
- [ ] Hovering over nodes triggers smooth zoom/scale micro-animations.
