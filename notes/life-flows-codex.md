Reading additional input from stdin...
OpenAI Codex v0.140.0
--------
workdir: /home/ubuntu/workspace/travel-gaia
model: gpt-5.5
provider: openai
approval: never
sandbox: workspace-write [workdir, /tmp, $TMPDIR]
reasoning effort: medium
reasoning summaries: none
session id: 019f02ea-da52-7f43-8523-3c941d50a952
--------
user
# Design brief — "Life of …" flows (per-vertical journey graphics)

## Context
**Travel Wiki** is a single, offline, self-contained `index.html` glossary of travel-industry
terminology (466 terms), built from an OKF markdown bundle (`okf/`) by `build/build.mjs`.
- Design: editorial "field manual" aesthetic — paper/ink, serif (Source Serif 4) for prose,
  sans (Inter) for labels, IBM Plex Mono for codes; hairline rules; maroon accent `#7a2520`;
  near-square corners (`--r:2px`); quiet/monochrome. Light + dark themes via CSS vars.
- Tech: hash-router SPA, vanilla JS, **d3.js is inlined** (offline). No external requests at runtime.
- Verticals: `air`, `lodging`, `ground` (car + rail), `cruise`, `tours`; plus `common`
  (cross-industry: pay, codes, customer, standards, insurance, disruption, sustainability).

### Existing related views (do NOT duplicate; complement/reuse)
1. **Distribution Flow** (`#/classroom`, "유통 구조"): a per-vertical **static 7-stage board** —
   `supply → distribute → shop → book → pay → fulfill → settle` — each stage lists **actors**
   (e.g. Airline, GDS, OTA, Customer) and **clickable glossary term ids**, plus a `postSale`
   block and a cross-industry `foundation` layer. Data shape per vertical:
   `{ intro, stages:{ supply:{actors[],desc,terms[]}, … }, postSale:{…} }`.
2. **Concept Map** (`#/map`): 6 business-flow layers, terms by relationship degree.
3. **Mindmap** (`#/mindmap`): radial taxonomy tree.

## Goal
Add new **"Life of …" flows**: graphic journeys that trace **one artifact** hop-by-hop through
the actors/systems on the distribution path — e.g. **Life of a Search**, **Life of a Booking**,
**Life of Onboarding**. Think "Life of a Query / Life of a Packet" style sequence journeys,
not another static stage board. Per vertical where it makes sense.

## Decisions needed (be opinionated; give a concrete recommendation + rationale)
1. **Flow set**: Confirm/refine the canonical set. Beyond Search/Booking/Onboarding, should we
   include e.g. **Life of a Payment/Settlement**, **Life of a Disruption/Refund**, **Life of a
   Ticket/Order**? Define each precisely: what artifact, start state → end state.
2. **"Onboarding" disambiguation**: traveler onboarding (check-in → boarding/embarkation →
   in-service) vs supplier/partner onboarding (connecting new supply into distribution)?
   Pick one as the primary meaning (or split into two flows).
3. **Universality vs vertical-specific**: which flows are universal across all verticals and which
   are vertical-specific? How to handle per-vertical divergence (e.g. "boarding" for air/cruise
   vs "pickup" for car, "redemption" for tours)?
4. **Graphic form**: best visualization for a sequence/journey across **actors + systems**:
   (a) swimlane sequence diagram (actor lanes + directional message arrows, request→response),
   (b) horizontal numbered stepper with actor badges, or (c) layered timeline?
   Must fit the field-manual aesthetic, render with inline SVG/d3, be offline, and be
   mobile-responsive. Recommend one and say why.
5. **Data model**: extend the existing `FLOWS` structure or introduce a new `LIFE_FLOWS`?
   Propose a concrete schema for a flow = ordered **steps**, each with: actor/system, action,
   direction (request/response/async), message/arrow label, referenced glossary term ids,
   optional note. Keep it authorable by hand and bilingual (ko/en) like the rest.
6. **Placement/IR**: new route (`#/flows`) with a flow-type + vertical selector, OR extend the
   Distribution Flow page with a "view: Distribution | Life of Search | Life of Booking | …"
   toggle? Which is cleaner for users and code?
7. **v1 scope**: which verticals × which flows to ship first, and at what depth (#steps).
8. **Pitfalls / anything we're missing.**

Please give a clear, buildable recommendation. Keep it concrete (schemas, step lists, layout
sketch). This will be cross-reviewed against a second independent opinion, so state your
strongest position on contested points.
warning: Codex's Linux sandbox uses bubblewrap and needs access to create user namespaces.
codex
I’ll ground the recommendation in the current code shape first, especially how `FLOWS`, routing, and bilingual labels are represented, so the proposal maps cleanly to the existing app.
codex
The shell sandbox is failing before commands run (`bwrap` network namespace setup), so I can’t inspect local files in this turn. I’ll proceed from the structure in your brief and keep the recommendation implementation-oriented rather than speculative about exact line names.
codex
**Recommendation**

Create a new `#/flows` route backed by a new `LIFE_FLOWS` data structure. Do not extend the existing Distribution Flow board. The existing board explains the industry operating model by stage; these new views should explain how one artifact moves through that model over time.

The strongest position: use **swimlane sequence diagrams** as the primary graphic, with a compact mobile fallback that preserves the same step order. The whole point is actor-to-actor/system-to-system movement, and a swimlane makes request/response, async handoffs, and ownership changes visible in a way a stepper cannot.

**Canonical Flow Set**

Ship these as the canonical set:

1. **Life of a Search**
   - Artifact: availability/pricing/search query.
   - Start: traveler or seller expresses intent.
   - End: ranked/filtered options are returned for shopping.
   - Why: most clearly illustrates distribution mechanics.

2. **Life of a Booking**
   - Artifact: reservation/order/PNR/booking record.
   - Start: traveler selects an offer.
   - End: supplier confirms and traveler receives confirmation or documents.
   - Why: core commercial transaction across all verticals.

3. **Life of a Payment & Settlement**
   - Artifact: payment authorization, capture, remittance, settlement record.
   - Start: traveler commits to pay.
   - End: funds and accounting records reach seller/supplier/intermediary.
   - Why: cross-industry, often misunderstood, complements booking without crowding it.

4. **Life of a Change / Disruption / Refund**
   - Artifact: change request, cancel/refund request, waiver, reaccommodation, credit.
   - Start: traveler, supplier, or event triggers a post-booking exception.
   - End: itinerary/order is changed, refunded, credited, or closed.
   - Why: explains post-sale reality and makes the glossary more useful.

5. **Life of Fulfillment**
   - Artifact: travel entitlement being consumed.
   - Start: traveler arrives to consume the service.
   - End: service is delivered, no-showed, checked out, returned, completed, or reconciled.
   - This is where “onboarding” belongs, but renamed. “Onboarding” is ambiguous and too air/cruise-coded.

Do **not** add “Life of a Ticket/Order” as a separate top-level v1 flow. Fold ticket/order issuance into Booking for air and rail, and use vertical-specific step labels. Otherwise Booking vs Ticket/Order will confuse users.

**Onboarding Decision**

Use **Fulfillment** as the primary user-facing flow, not “Onboarding.”

Split the concepts internally:

- **Traveler fulfillment**: check-in, boarding, embarkation, pickup, redemption, stay, return, checkout.
- **Supplier onboarding**: a different administrative lifecycle: contracting, content loading, mapping, certification, activation, monitoring.

For this product, make traveler fulfillment primary. Supplier onboarding is useful later, but it belongs under an “Operations” or “Supply Activation” flow, not the first release.

**Universality**

Universal flows across all verticals:

- Search
- Booking
- Payment & Settlement
- Change / Refund
- Fulfillment

But the **step vocabulary and actors must diverge by vertical**. Use shared flow IDs with vertical-specific variants.

Example divergence:

- Air fulfillment: check-in → document check → bag drop/security → boarding → flown coupon/status.
- Cruise fulfillment: online check-in → embarkation slot → port check-in → boarding → onboard account → disembarkation.
- Lodging fulfillment: pre-arrival → check-in → stay → incidentals → checkout.
- Car fulfillment: pickup → license/payment verification → vehicle handoff → rental period → return/inspection.
- Rail fulfillment: ticket validation → gate/platform → onboard inspection → journey completion.
- Tours fulfillment: voucher/redemption → guide/operator check-in → activity delivery → reconciliation.

So: universal conceptual flow, vertical-specific steps.

**Graphic Form**

Use **swimlane sequence diagrams**.

Layout:

```text
Traveler/Seller     OTA/TMC/Retailer     Aggregator/GDS/API     Supplier System      Payment/Back Office
      |                    |                    |                    |                    |
  1. Search intent  -----> |                    |                    |                    |
      |              2. Normalize query ------> |                    |                    |
      |                    |              3. Availability req -----> |                    |
      |                    |              <---- 4. Offers/fares      |                    |
      |              <---- 5. Ranked options    |                    |                    |
  <--- 6. Results          |                    |                    |                    |
```

Desktop:
- Horizontal lanes as columns.
- Steps are message arrows between lanes.
- Request arrows solid.
- Response arrows thin/dashed.
- Async/event arrows dotted.
- Actor/system labels fixed at top.
- Clicking a step highlights referenced glossary terms.

Mobile:
- Render the same data as a vertical “message log”:
  `01 Traveler → OTA: Search intent`
- Preserve direction, actor badges, terms, and notes.
- Avoid trying to squeeze full swimlanes onto narrow screens.

This fits the field-manual aesthetic: hairline SVG rules, monochrome lanes, maroon step numbers or active highlights, Source Serif notes, Inter labels, IBM Plex Mono for message codes.

**Data Model**

Introduce `LIFE_FLOWS`, separate from `FLOWS`.

Reason: `FLOWS` is stage-board data. Life flows are ordered message journeys with direction, actors, and term references. Combining them will make both models worse.

Concrete schema:

```js
const LIFE_FLOWS = {
  search: {
    id: "search",
    title: { en: "Life of a Search", ko: "검색의 생애" },
    artifact: {
      en: "Availability and price query",
      ko: "재고 및 가격 조회 요청"
    },
    start: {
      en: "Traveler or seller expresses intent",
      ko: "여행자 또는 판매자가 의도를 입력"
    },
    end: {
      en: "Comparable options are returned for shopping",
      ko: "비교 가능한 선택지가 쇼핑 화면에 반환"
    },
    appliesTo: ["air", "lodging", "ground", "cruise", "tours"],
    variants: {
      air: {
        actors: [
          { id: "traveler", label: { en: "Traveler", ko: "여행자" }, kind: "person" },
          { id: "retailer", label: { en: "OTA / TMC", ko: "OTA / TMC" }, kind: "seller" },
          { id: "gds", label: { en: "GDS / Aggregator", ko: "GDS / 집계기" }, kind: "system" },
          { id: "airline", label: { en: "Airline", ko: "항공사" }, kind: "supplier" }
        ],
        steps: [
          {
            id: "air-search-01",
            from: "traveler",
            to: "retailer",
            direction: "request",
            action: { en: "Enter origin, destination, dates, passengers", ko: "출발지, 도착지, 날짜, 인원 입력" },
            message: { en: "Search intent", ko: "검색 의도" },
            terms: ["availability", "fare", "origin-and-destination"],
            note: { en: "The query starts as traveler intent, not yet a supplier request.", ko: "아직 공급사 요청이 아니라 여행자의 의도다." }
          },
          {
            id: "air-search-02",
            from: "retailer",
            to: "gds",
            direction: "request",
            action: { en: "Normalize request and ask for options", ko: "요청을 정규화하고 선택지를 조회" },
            message: { en: "Availability request", ko: "재고 조회 요청" },
            terms: ["gds", "availability"]
          },
          {
            id: "air-search-03",
            from: "gds",
            to: "airline",
            direction: "request",
            action: { en: "Request inventory, fares, and rules", ko: "좌석, 운임, 규정 조회" },
            message: { en: "Offer / fare request", ko: "오퍼 / 운임 요청" },
            terms: ["fare", "inventory", "ndc"]
          },
          {
            id: "air-search-04",
            from: "airline",
            to: "gds",
            direction: "response",
            action: { en: "Return bookable options", ko: "예약 가능한 선택지 반환" },
            message: { en: "Offers", ko: "오퍼" },
            terms: ["offer", "availability"]
          }
        ]
      }
    }
  }
};
```

Useful optional fields:

```js
{
  phase: "prebook" | "booking" | "payment" | "fulfillment" | "postsale",
  emphasis: "normal" | "risk" | "handoff",
  reversible: true,
  relatedFlowIds: ["booking", "payment"],
  glossaryMode: "inline" // or "sidecar"
}
```

Keep it hand-authored. Do not over-normalize into separate actor catalogs yet. Repetition is acceptable because vertical meaning differs.

**Route / Placement**

Create a new route: `#/flows`.

Cleaner user model:

- `#/classroom`: “How distribution is structured.”
- `#/flows`: “How a thing moves through the structure.”

UI:

```text
[Flow selector] Search | Booking | Payment | Change/Refund | Fulfillment
[Vertical selector] Air | Lodging | Ground | Cruise | Tours
[Diagram]
[Step inspector / glossary references]
```

Do not put this behind a toggle inside Distribution Flow. The page will become overloaded: one view is a stage board, the other is a temporal sequence diagram.

You can cross-link them:
- From a Distribution Flow stage, link to relevant life flows.
- From a Life Flow step, show its corresponding stage: `shop`, `book`, `pay`, `fulfill`, `settle`.

**V1 Scope**

Ship a focused v1:

1. **Air**
   - Search: 7-9 steps
   - Booking: 8-10 steps
   - Fulfillment: 7-9 steps

2. **Lodging**
   - Search: 6-8 steps
   - Booking: 7-9 steps
   - Fulfillment: 6-8 steps

3. **Ground**
   - Booking: 7-9 steps
   - Fulfillment: 6-8 steps
   - Treat car and rail as subvariants only where needed.

Defer:
- Cruise fulfillment until you can model embarkation/onboard account/disembarkation clearly.
- Tours fulfillment until voucher/redemption/operator reconciliation terms are solid.
- Payment & Settlement and Change/Refund can be v1.1 because they need careful cross-vertical accuracy.

**Example V1 Step Lists**

Air Search:

1. Traveler → Retailer: enter trip intent.
2. Retailer → Shopping engine/GDS/API: normalize search.
3. GDS/API → Airline: request availability/fares/offers.
4. Airline → GDS/API: return offers, fare rules, availability.
5. GDS/API → Retailer: aggregate and normalize options.
6. Retailer → Traveler: display ranked results.
7. Traveler → Retailer: filter/select candidate offer.

Air Booking:

1. Traveler → Retailer: select offer.
2. Retailer → Airline/GDS: price/validate offer.
3. Airline/GDS → Retailer: confirm price and rules.
4. Traveler → Retailer: provide passenger details.
5. Retailer → Airline/GDS: create booking/order/PNR.
6. Airline/GDS → Retailer: return record locator/order ID.
7. Retailer → Payment provider: authorize/capture payment.
8. Airline/GDS → Retailer: issue ticket/document where applicable.
9. Retailer → Traveler: send confirmation.

Lodging Fulfillment:

1. Traveler → Property/Retailer: pre-arrival request or modification.
2. Property system → PMS: prepare reservation.
3. Traveler → Front desk/Kiosk/App: check in.
4. PMS → Access/payment systems: room assignment, deposit, key.
5. Traveler → Property: consume stay and incidentals.
6. Property → PMS: post charges/status.
7. Traveler → Property: check out.
8. PMS → Back office/Retailer: final folio/reconciliation.

**Implementation Shape**

Renderer pipeline:

```text
LIFE_FLOWS data
  → selected flow + vertical variant
  → derive lane order from actors[]
  → compute step coordinates
  → render SVG lanes/arrows with d3
  → render side/mobile step list from same steps[]
```

CSS classes:

```css
.life-flow
.life-flow__toolbar
.life-flow__diagram
.life-flow__lane
.life-flow__actor
.life-flow__step
.life-flow__arrow--request
.life-flow__arrow--response
.life-flow__arrow--async
.life-flow__inspector
```

Use SVG for the diagram, HTML for controls and inspector. Do not render all labels inside SVG if you need wrapping and bilingual text; SVG text wrapping is irritating. Prefer short SVG message labels plus an HTML step inspector/list.

**Pitfalls**

The main risk is accidentally rebuilding the Distribution Flow board with different labels. Keep every Life Flow centered on one artifact and one ordered sequence.

Other risks:

- Too many actors per diagram. Cap v1 at 4-6 lanes per vertical.
- Too many glossary links per step. Use 2-5 high-value terms, not every possible term.
- Ambiguous “ground.” Consider `ground_car` and `ground_rail` variants internally while keeping one Ground tab.
- Payment details can become legally/accounting-specific. Keep v1 descriptive, not settlement-instructional.
- Don’t force request/response symmetry. Some events are async: schedule change, voucher redemption, settlement file, refund status.
- Mobile needs its own representation. A squeezed swimlane will fail.
- “Onboarding” should not be the public label. Use “Fulfillment”; mention check-in/boarding/pickup/redemption in vertical subtitles.

Bottom line: build `#/flows` as a separate journey-diagram view, use `LIFE_FLOWS`, ship Search/Booking/Fulfillment for Air and Lodging first, add Ground Booking/Fulfillment, and treat Payment plus Change/Refund as the next layer once the visual and authoring pattern are proven.
tokens used
7,623
**Recommendation**

Create a new `#/flows` route backed by a new `LIFE_FLOWS` data structure. Do not extend the existing Distribution Flow board. The existing board explains the industry operating model by stage; these new views should explain how one artifact moves through that model over time.

The strongest position: use **swimlane sequence diagrams** as the primary graphic, with a compact mobile fallback that preserves the same step order. The whole point is actor-to-actor/system-to-system movement, and a swimlane makes request/response, async handoffs, and ownership changes visible in a way a stepper cannot.

**Canonical Flow Set**

Ship these as the canonical set:

1. **Life of a Search**
   - Artifact: availability/pricing/search query.
   - Start: traveler or seller expresses intent.
   - End: ranked/filtered options are returned for shopping.
   - Why: most clearly illustrates distribution mechanics.

2. **Life of a Booking**
   - Artifact: reservation/order/PNR/booking record.
   - Start: traveler selects an offer.
   - End: supplier confirms and traveler receives confirmation or documents.
   - Why: core commercial transaction across all verticals.

3. **Life of a Payment & Settlement**
   - Artifact: payment authorization, capture, remittance, settlement record.
   - Start: traveler commits to pay.
   - End: funds and accounting records reach seller/supplier/intermediary.
   - Why: cross-industry, often misunderstood, complements booking without crowding it.

4. **Life of a Change / Disruption / Refund**
   - Artifact: change request, cancel/refund request, waiver, reaccommodation, credit.
   - Start: traveler, supplier, or event triggers a post-booking exception.
   - End: itinerary/order is changed, refunded, credited, or closed.
   - Why: explains post-sale reality and makes the glossary more useful.

5. **Life of Fulfillment**
   - Artifact: travel entitlement being consumed.
   - Start: traveler arrives to consume the service.
   - End: service is delivered, no-showed, checked out, returned, completed, or reconciled.
   - This is where “onboarding” belongs, but renamed. “Onboarding” is ambiguous and too air/cruise-coded.

Do **not** add “Life of a Ticket/Order” as a separate top-level v1 flow. Fold ticket/order issuance into Booking for air and rail, and use vertical-specific step labels. Otherwise Booking vs Ticket/Order will confuse users.

**Onboarding Decision**

Use **Fulfillment** as the primary user-facing flow, not “Onboarding.”

Split the concepts internally:

- **Traveler fulfillment**: check-in, boarding, embarkation, pickup, redemption, stay, return, checkout.
- **Supplier onboarding**: a different administrative lifecycle: contracting, content loading, mapping, certification, activation, monitoring.

For this product, make traveler fulfillment primary. Supplier onboarding is useful later, but it belongs under an “Operations” or “Supply Activation” flow, not the first release.

**Universality**

Universal flows across all verticals:

- Search
- Booking
- Payment & Settlement
- Change / Refund
- Fulfillment

But the **step vocabulary and actors must diverge by vertical**. Use shared flow IDs with vertical-specific variants.

Example divergence:

- Air fulfillment: check-in → document check → bag drop/security → boarding → flown coupon/status.
- Cruise fulfillment: online check-in → embarkation slot → port check-in → boarding → onboard account → disembarkation.
- Lodging fulfillment: pre-arrival → check-in → stay → incidentals → checkout.
- Car fulfillment: pickup → license/payment verification → vehicle handoff → rental period → return/inspection.
- Rail fulfillment: ticket validation → gate/platform → onboard inspection → journey completion.
- Tours fulfillment: voucher/redemption → guide/operator check-in → activity delivery → reconciliation.

So: universal conceptual flow, vertical-specific steps.

**Graphic Form**

Use **swimlane sequence diagrams**.

Layout:

```text
Traveler/Seller     OTA/TMC/Retailer     Aggregator/GDS/API     Supplier System      Payment/Back Office
      |                    |                    |                    |                    |
  1. Search intent  -----> |                    |                    |                    |
      |              2. Normalize query ------> |                    |                    |
      |                    |              3. Availability req -----> |                    |
      |                    |              <---- 4. Offers/fares      |                    |
      |              <---- 5. Ranked options    |                    |                    |
  <--- 6. Results          |                    |                    |                    |
```

Desktop:
- Horizontal lanes as columns.
- Steps are message arrows between lanes.
- Request arrows solid.
- Response arrows thin/dashed.
- Async/event arrows dotted.
- Actor/system labels fixed at top.
- Clicking a step highlights referenced glossary terms.

Mobile:
- Render the same data as a vertical “message log”:
  `01 Traveler → OTA: Search intent`
- Preserve direction, actor badges, terms, and notes.
- Avoid trying to squeeze full swimlanes onto narrow screens.

This fits the field-manual aesthetic: hairline SVG rules, monochrome lanes, maroon step numbers or active highlights, Source Serif notes, Inter labels, IBM Plex Mono for message codes.

**Data Model**

Introduce `LIFE_FLOWS`, separate from `FLOWS`.

Reason: `FLOWS` is stage-board data. Life flows are ordered message journeys with direction, actors, and term references. Combining them will make both models worse.

Concrete schema:

```js
const LIFE_FLOWS = {
  search: {
    id: "search",
    title: { en: "Life of a Search", ko: "검색의 생애" },
    artifact: {
      en: "Availability and price query",
      ko: "재고 및 가격 조회 요청"
    },
    start: {
      en: "Traveler or seller expresses intent",
      ko: "여행자 또는 판매자가 의도를 입력"
    },
    end: {
      en: "Comparable options are returned for shopping",
      ko: "비교 가능한 선택지가 쇼핑 화면에 반환"
    },
    appliesTo: ["air", "lodging", "ground", "cruise", "tours"],
    variants: {
      air: {
        actors: [
          { id: "traveler", label: { en: "Traveler", ko: "여행자" }, kind: "person" },
          { id: "retailer", label: { en: "OTA / TMC", ko: "OTA / TMC" }, kind: "seller" },
          { id: "gds", label: { en: "GDS / Aggregator", ko: "GDS / 집계기" }, kind: "system" },
          { id: "airline", label: { en: "Airline", ko: "항공사" }, kind: "supplier" }
        ],
        steps: [
          {
            id: "air-search-01",
            from: "traveler",
            to: "retailer",
            direction: "request",
            action: { en: "Enter origin, destination, dates, passengers", ko: "출발지, 도착지, 날짜, 인원 입력" },
            message: { en: "Search intent", ko: "검색 의도" },
            terms: ["availability", "fare", "origin-and-destination"],
            note: { en: "The query starts as traveler intent, not yet a supplier request.", ko: "아직 공급사 요청이 아니라 여행자의 의도다." }
          },
          {
            id: "air-search-02",
            from: "retailer",
            to: "gds",
            direction: "request",
            action: { en: "Normalize request and ask for options", ko: "요청을 정규화하고 선택지를 조회" },
            message: { en: "Availability request", ko: "재고 조회 요청" },
            terms: ["gds", "availability"]
          },
          {
            id: "air-search-03",
            from: "gds",
            to: "airline",
            direction: "request",
            action: { en: "Request inventory, fares, and rules", ko: "좌석, 운임, 규정 조회" },
            message: { en: "Offer / fare request", ko: "오퍼 / 운임 요청" },
            terms: ["fare", "inventory", "ndc"]
          },
          {
            id: "air-search-04",
            from: "airline",
            to: "gds",
            direction: "response",
            action: { en: "Return bookable options", ko: "예약 가능한 선택지 반환" },
            message: { en: "Offers", ko: "오퍼" },
            terms: ["offer", "availability"]
          }
        ]
      }
    }
  }
};
```

Useful optional fields:

```js
{
  phase: "prebook" | "booking" | "payment" | "fulfillment" | "postsale",
  emphasis: "normal" | "risk" | "handoff",
  reversible: true,
  relatedFlowIds: ["booking", "payment"],
  glossaryMode: "inline" // or "sidecar"
}
```

Keep it hand-authored. Do not over-normalize into separate actor catalogs yet. Repetition is acceptable because vertical meaning differs.

**Route / Placement**

Create a new route: `#/flows`.

Cleaner user model:

- `#/classroom`: “How distribution is structured.”
- `#/flows`: “How a thing moves through the structure.”

UI:

```text
[Flow selector] Search | Booking | Payment | Change/Refund | Fulfillment
[Vertical selector] Air | Lodging | Ground | Cruise | Tours
[Diagram]
[Step inspector / glossary references]
```

Do not put this behind a toggle inside Distribution Flow. The page will become overloaded: one view is a stage board, the other is a temporal sequence diagram.

You can cross-link them:
- From a Distribution Flow stage, link to relevant life flows.
- From a Life Flow step, show its corresponding stage: `shop`, `book`, `pay`, `fulfill`, `settle`.

**V1 Scope**

Ship a focused v1:

1. **Air**
   - Search: 7-9 steps
   - Booking: 8-10 steps
   - Fulfillment: 7-9 steps

2. **Lodging**
   - Search: 6-8 steps
   - Booking: 7-9 steps
   - Fulfillment: 6-8 steps

3. **Ground**
   - Booking: 7-9 steps
   - Fulfillment: 6-8 steps
   - Treat car and rail as subvariants only where needed.

Defer:
- Cruise fulfillment until you can model embarkation/onboard account/disembarkation clearly.
- Tours fulfillment until voucher/redemption/operator reconciliation terms are solid.
- Payment & Settlement and Change/Refund can be v1.1 because they need careful cross-vertical accuracy.

**Example V1 Step Lists**

Air Search:

1. Traveler → Retailer: enter trip intent.
2. Retailer → Shopping engine/GDS/API: normalize search.
3. GDS/API → Airline: request availability/fares/offers.
4. Airline → GDS/API: return offers, fare rules, availability.
5. GDS/API → Retailer: aggregate and normalize options.
6. Retailer → Traveler: display ranked results.
7. Traveler → Retailer: filter/select candidate offer.

Air Booking:

1. Traveler → Retailer: select offer.
2. Retailer → Airline/GDS: price/validate offer.
3. Airline/GDS → Retailer: confirm price and rules.
4. Traveler → Retailer: provide passenger details.
5. Retailer → Airline/GDS: create booking/order/PNR.
6. Airline/GDS → Retailer: return record locator/order ID.
7. Retailer → Payment provider: authorize/capture payment.
8. Airline/GDS → Retailer: issue ticket/document where applicable.
9. Retailer → Traveler: send confirmation.

Lodging Fulfillment:

1. Traveler → Property/Retailer: pre-arrival request or modification.
2. Property system → PMS: prepare reservation.
3. Traveler → Front desk/Kiosk/App: check in.
4. PMS → Access/payment systems: room assignment, deposit, key.
5. Traveler → Property: consume stay and incidentals.
6. Property → PMS: post charges/status.
7. Traveler → Property: check out.
8. PMS → Back office/Retailer: final folio/reconciliation.

**Implementation Shape**

Renderer pipeline:

```text
LIFE_FLOWS data
  → selected flow + vertical variant
  → derive lane order from actors[]
  → compute step coordinates
  → render SVG lanes/arrows with d3
  → render side/mobile step list from same steps[]
```

CSS classes:

```css
.life-flow
.life-flow__toolbar
.life-flow__diagram
.life-flow__lane
.life-flow__actor
.life-flow__step
.life-flow__arrow--request
.life-flow__arrow--response
.life-flow__arrow--async
.life-flow__inspector
```

Use SVG for the diagram, HTML for controls and inspector. Do not render all labels inside SVG if you need wrapping and bilingual text; SVG text wrapping is irritating. Prefer short SVG message labels plus an HTML step inspector/list.

**Pitfalls**

The main risk is accidentally rebuilding the Distribution Flow board with different labels. Keep every Life Flow centered on one artifact and one ordered sequence.

Other risks:

- Too many actors per diagram. Cap v1 at 4-6 lanes per vertical.
- Too many glossary links per step. Use 2-5 high-value terms, not every possible term.
- Ambiguous “ground.” Consider `ground_car` and `ground_rail` variants internally while keeping one Ground tab.
- Payment details can become legally/accounting-specific. Keep v1 descriptive, not settlement-instructional.
- Don’t force request/response symmetry. Some events are async: schedule change, voucher redemption, settlement file, refund status.
- Mobile needs its own representation. A squeezed swimlane will fail.
- “Onboarding” should not be the public label. Use “Fulfillment”; mention check-in/boarding/pickup/redemption in vertical subtitles.

Bottom line: build `#/flows` as a separate journey-diagram view, use `LIFE_FLOWS`, ship Search/Booking/Fulfillment for Air and Lodging first, add Ground Booking/Fulfillment, and treat Payment plus Change/Refund as the next layer once the visual and authoring pattern are proven.
