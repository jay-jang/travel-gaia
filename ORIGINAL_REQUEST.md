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
