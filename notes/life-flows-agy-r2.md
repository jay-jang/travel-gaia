I have reconciled the positions from both agents and produced a single, buildable spec. I have saved the full specification document at [life_flows_spec.md](file:///home/ubuntu/.gemini/antigravity-cli/brain/1407171d-b12b-4015-8d44-72f90629b253/life_flows_spec.md).

Here is the converged build spec:

### A. Final Flow Set & Phase Scope
We adopt a **5-flow model** to properly isolate complex post-sale and payment lifecycles, but split implementation into phases:
* **v1 flows**: **Search** (Availability/pricing), **Booking** (Offer selection to confirmation/document issuance), and **Fulfillment** (Check-in to service completion; formerly "Onboarding").
* **v1.1 flows**: **Payment & Settlement** (reconciliation loops) and **Change / Disruption / Refund** (post-sale exception workflows).
* **Decision Rationale**: Folding payment and refund flows directly into booking/fulfillment creates overly cluttered diagrams. These stages involve entirely different sets of B2B backend actors (e.g., clearhouses, insurers, merchant vs. agency pipelines) and deserve separate sequence paths.

---

### B. V1 Vertical Scope Matrix
* **Decision**: Focus exclusively on **Air + Lodging** for v1. Defer Ground, Cruise, and Tours.
* **Rationale**: Ground transport (rail vs. car rental) introduces highly divergent fulfillment steps (platform ticket gates vs. physical car inspections) that will delay shipping if forced into v1.

| Vertical | Flows Included in v1 | Approximate Steps |
| :--- | :--- | :---: |
| **Air** | Search, Booking, Fulfillment | 7 to 9 steps per flow |
| **Lodging** | Search, Booking, Fulfillment | 6 to 8 steps per flow |

---

### C. Mobile Rendering Choice
* **Decision**: **HTML Message Log** (Position 1/Codex).
* **Rationale**: Squeezing SVG swimlanes onto small screens or attempting complex d3 reflows into cards is highly fragile. On mobile, we will hide the SVG canvas and render the steps as a vertical, semantic HTML list (`<ol>`), styled to look like an API/message payload log. This guarantees native text-wrapping, clean typography, and robust layout performance.

---

### D. Unified `LIFE_FLOWS` Schema

```js
const LIFE_FLOWS = {
  search: {
    id: "search",
    title: { en: "Life of a Search", ko: "검색의 생애" },
    artifact: { en: "Availability and price query", ko: "재고 및 가격 조회 요청" },
    start: { en: "Traveler or seller expresses intent", ko: "여행자 또는 판매자가 의도를 입력" },
    end: { en: "Comparable options are returned for shopping", ko: "비교 가능한 선택지가 쇼핑 화면에 반환" },
    variants: {
      air: {
        actors: [
          { id: "traveler", label: { en: "Traveler", ko: "여행자" }, type: "person" },
          { id: "retailer", label: { en: "OTA / TMC", ko: "OTA / TMC" }, type: "seller" },
          { id: "gds", label: { en: "GDS / Aggregator", ko: "GDS / 집계기" }, type: "intermediary" },
          { id: "airline", label: { en: "Airline", ko: "항공사" }, type: "supplier" }
        ],
        steps: [
          {
            id: "air-search-01",
            from: "traveler",
            to: "retailer",
            direction: "request", // 'request' | 'response' | 'async'
            message: { en: "Search parameters", ko: "검색 조건 입력" },
            action: { 
              en: "Enter origin, destination, dates, and passengers.", 
              ko: "출발지, 도착지, 일정, 탑승객 수 등을 입력합니다." 
            },
            terms: ["origin-and-destination", "passenger-type-code"],
            note: {
              en: "The query starts as user intent before conversion to structured GDS/API requests.",
              ko: "조회는 구조화된 API 요청으로 변환되기 전 사용자 단의 검색 의도에서 시작됩니다."
            },
            emphasis: "normal" // 'normal' | 'risk' | 'handoff'
          }
        ]
      }
    }
  }
};
```

---

### E. Must-Not-Forget Implementation Notes
* **No SVG Text-Wrapping**: Keep the SVG text labels inside the diagram minimal (just the `message` label). Put the longer descriptions (`action`, `note`) inside the HTML sidebar inspector.
* **Interactive Linking**: Steps must link to the glossary terms via their standard term IDs. Clicking a step should highlight the SVG arrow and open the inspector panel.
