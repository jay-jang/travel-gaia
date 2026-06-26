# Design Brief: "Life of..." Journeys for Travel Wiki

This document outlines the proposed design and implementation specification for the new **"Life of..."** flow views in Travel Wiki. These views will provide dynamic, interactive sequence diagrams showing how travel artifacts (Search Queries, Bookings, Passengers) flow through industry systems and actors.

---

## 1. Flow Set: Defining the Canonical Journeys

We recommend launching with **three core transaction-centric flows** that trace the lifecycle of key travel artifacts. We integrate payment/settlement and disruption into these core journeys rather than building them as separate flows to avoid redundancy and keep the content anchored in high-value business contexts.

```mermaid
graph TD
    subgraph "1. Life of a Search"
        A[Traveler Search Request] --> B[OTA / Metasearch Aggregation]
        B --> C[GDS / NDC API Queries]
        C --> D[Supplier CRS Availability Cache]
        D --> E[Offer Sheets / Price Grid]
      end

    subgraph "2. Life of a Booking"
        F[Checkout Click] --> G[Booking Engine / PNR Creation]
        G --> H[Payment Auth & Gateways]
        H --> I[Inventory Reservation & Ticketing]
        I --> J[BSP / ARC Settle Prep]
      end

    subgraph "3. Life of a Passenger / Guest Journey"
        K[T-24h Check-in] --> L[APIS / Identity Verification]
        L --> M[DCS Boarding Pass / PMS Registration]
        M --> N[Physical Boarding / Folio Activation]
        N --> O[Revenue Recognition]
      end
```

### Flow Definitions & Boundaries

1. **Life of a Search (The "Shopping" Phase)**
   - **Artifact**: Search Request (`Search Query` $\rightarrow$ `Offer Sheet / Price Grid`).
   - **Start State**: Traveler inputs parameters (origin, destination, dates) on a client interface (OTA/Metasearch).
   - **End State**: Aggregated, priced, and bookable offers are rendered to the traveler.
   - **Key Glossary Terms**: `ota`, `gds`, `ndc`, `metasearch`, `crs`, `cache`, `availability`.

2. **Life of a Booking (The "Transaction" Phase)**
   - **Artifact**: Passenger Name Record (`PNR`) / `Order` (NDC).
   - **Start State**: Traveler clicks "Book Now" and submits traveler details + credit card authorization.
   - **End State**: PNR is generated, ticketed/confirmed across suppliers, payment is cleared, and a Record Locator is delivered.
   - **Key Glossary Terms**: `pnr`, `record-locator`, `ticketing`, `bsp`, `arc`, `voiding`, `payment-gateway`.

3. **Life of a Passenger/Guest Journey (The "Fulfillment" Phase)**
   - **Artifact**: Boarding Pass / Check-in Manifest / Folio.
   - **Start State**: Check-in window opens (typically T-24 hours).
   - **End State**: Passenger boards the vehicle or enters the room (status changes to "Flown" or "In-House"), triggering revenue recognition.
   - **Key Glossary Terms**: `check-in`, `dcs`, `apis`, `boarding-pass`, `pms`, `revenue-recognition`, `no-show`.

---

## 2. "Onboarding" Disambiguation

> [!IMPORTANT]
> We recommend defining "Onboarding" exclusively as **Traveler/Guest Onboarding (Check-in $\rightarrow$ Security $\rightarrow$ Boarding/Embarkation)**. 

### Rationale
* **Glossary Alignment**: The Wiki glossary contains heavy operational terminology around traveler fulfillment (APIS, DCS, Boarding Pass, Manifest, Room Keys, PMS) that are visually exciting and sequence-driven.
* **Supplier Onboarding** (e.g., getting a boutique hotel listed on the GDS or integrating a new airline into an aggregator) is a long-running, manual, offline B2B project management process. It lacks the step-by-step transaction momentum that makes "Life of..." diagrams engaging.
* *Solution for Supplier Onboarding*: Document it as a static text explanation or a sidebar within the existing Distribution Flow page (`#/classroom`) rather than dedicating an interactive timeline to it.

---

## 3. Universality vs. Vertical-Specific

To scale across `air`, `lodging`, `ground`, `cruise`, and `tours`, we will use **Universal Flow Blueprints** with dynamic **Vertical Override Layers**.

* The sequence structural engine remains identical (e.g., Step 3 in a Booking flow is always "Inventory Reservation & Lock").
* The UI dynamically swaps terms, system names, and descriptions based on the selected vertical:

| Universal Step | Air Overrides | Lodging Overrides | Ground (Car Rental) Overrides |
| :--- | :--- | :--- | :--- |
| **Step 1: Intent** | Shopping Query | Availability Request | Rate Lookup |
| **Step 3: Core Write** | Create PNR in GDS/CRS | Create Reservation in CRS/PMS | Create Rental Agreement in FMS |
| **Step 5: Fulfillment** | Departure Control System (DCS) | Property Management System (PMS) | Counter Agent / Fleet System |
| **Step 6: Settlement** | BSP / ARC Clearinghouse | Guest Folio Invoice Settlement | Credit Card Pre-auth Settlement |

---

## 4. Graphic Form: The "Hybrid Sequence Swimlane"

To match the editorial "field manual" aesthetic (paper background, serif typography, high-contrast minimal rules) and maintain mobile responsiveness, we recommend a **D3-rendered Hybrid Sequence Swimlane** that reflows automatically.

### Desktop View (Horizontal Swimlanes)
* Actors form vertical columns.
* Steps flow top-to-bottom.
* Messages are represented by crisp, thin, directional lines with arrowheads (`stroke: #7a2520`).
* Clicking a line highlights the step, displays metadata in the sidebar, and highlights relevant glossary terms.

```
 TRAVELER          OTA / AGENT           GDS / HUB          SUPPLIER CRS
    │                   │                   │                   │
    ├─(1) Search Query─>│                   │                   │
    │                   ├──────(2) Lookup──>│                   │
    │                   │                   ├─────(3) Direct───>│
    │                   │                   │     Availability  │
    │                   │                   │<────(4) Inventory─┤
    │                   │<─────(5) Offers───┤                   │
    │<─(6) Price Grid───┤                   │                   │
    │                   │                   │                   │
```

### Mobile View (Vertical Flow Stepper)
On screens `< 768px`, the grid collapses into a vertical timeline card layout. Actor badges (e.g., `[Traveler]`, `[GDS]`) are printed inside each step card, avoiding horizontal overflow or unreadable text columns.

---

## 5. Data Model Schema (`LIFE_FLOWS`)

We propose the following bilingual, JSON-compatible format. This structure is human-editable and plugs directly into the existing build system.

```typescript
export interface LifeFlowStep {
  id: string;
  fromActor: string; // matches actors in CSS theme
  toActor: string;
  type: 'request' | 'response' | 'async';
  label: { en: string; ko: string };
  payloadLabel?: string; // e.g. "OTA_AirLowFareSearchRQ"
  terms: string[]; // ids matching glossary terms for clickable links
  desc: { en: string; ko: string };
  note?: { en: string; ko: string };
}

export interface VerticalFlow {
  intro: { en: string; ko: string };
  steps: LifeFlowStep[];
}

export interface LifeFlow {
  id: string;
  name: { en: string; ko: string };
  desc: { en: string; ko: string };
  verticals: {
    [verticalId: string]: VerticalFlow;
  };
}

export const LIFE_FLOWS: Record<string, LifeFlow> = {
  search: {
    id: "search",
    name: { en: "Life of a Search", ko: "검색의 일생" },
    desc: { en: "How a query goes from traveler to inventory.", ko: "여행객의 검색 요청이 인벤토리까지 도달하는 과정" },
    verticals: {
      air: {
        intro: { en: "Airline ticket search...", ko: "항공권 검색 과정..." },
        steps: [
          {
            id: "air_search_req",
            fromActor: "traveler",
            toActor: "ota",
            type: "request",
            label: { en: "1. Search Query", ko: "1. 검색 요청" },
            payloadLabel: "OTA_AirLowFareSearchRQ",
            terms: ["ota", "booking-engine"],
            desc: {
              en: "Traveler inputs dates and city pairs on OTA interface.",
              ko: "여행객이 OTA 인터페이스에 날짜와 출발/도착 도시를 입력합니다."
            }
          }
          // Additional steps...
        ]
      }
    }
  }
};
```

---

## 6. Placement & Navigation (Information Architecture)

We recommend creating a **new route `#/flows`** instead of overloading the existing `#/classroom` grid.

```
┌────────────────────────────────────────────────────────────────────────┐
│  Travel Wiki (Field Manual)                   [ Glossary ] [ Flows ]   │
├────────────────────────────────────────────────────────────────────────┤
│  Flow: [ Life of a Booking  v ]    Vertical: [ Air (Airline)     v ]   │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│   ( D3 Canvas: Hybrid Sequence Diagram with Maroon Accent Rules )      │
│                                                                        │
│   ┌─── Traveler ─────────── GDS / NDC ─────────── Airline CRS ──┐      │
│   │                                                             │      │
│   │   1. Click Book ───────────>                                │      │
│   │                             2. Create PNR ───────>          │      │
│   │                                                             │      │
│                                                                        │
├────────────────────────────────────────────────────────────────────────┤
│  Step Details (Sidebar or Bottom Drawer)                                │
│  "Step 2: Create PNR" (항공권 예약 정보 생성)                           │
│  Description: The GDS requests the Airline CRS to hold inventory and   │
│  issues a Passenger Name Record (PNR).                                 │
│  Related Terms: [GDS] [PNR] [Record Locator]                           │
└────────────────────────────────────────────────────────────────────────┘
```

### Rationale
* **UX Isolation**: The sequence diagram requires dedicated vertical height to look elegant. `#/classroom` already holds the static 7-stage distribution board, which should be kept separate to prevent scroll fatigue.
* **Bi-directional Linking**: Clicking a term in the sequence details pane opens the glossary sidebar. The glossary terms page will also display a section: *"This term is featured in: [Life of a Booking (Air) - Step 2]"*.

---

## 7. v1 Target Scope

We recommend prioritizing **Air** and **Lodging** verticals across **three primary flows**.

| Flow | Vertical | Steps | Key Actors Included |
| :--- | :--- | :---: | :--- |
| **Life of a Search** | **Air** | 6 | Traveler $\rightarrow$ OTA $\rightarrow$ GDS $\rightarrow$ Airline CRS $\rightarrow$ Aggregator $\rightarrow$ Traveler |
| **Life of a Search** | **Lodging** | 5 | Traveler $\rightarrow$ Metasearch $\rightarrow$ OTA $\rightarrow$ Channel Manager $\rightarrow$ CRS/PMS |
| **Life of a Booking** | **Air** | 7 | Traveler $\rightarrow$ OTA $\rightarrow$ GDS $\rightarrow$ CRS (inventory block) $\rightarrow$ Payment $\rightarrow$ BSP (ticketing) |
| **Life of a Booking** | **Lodging** | 6 | Traveler $\rightarrow$ OTA $\rightarrow$ Channel Manager $\rightarrow$ CRS $\rightarrow$ PMS (room lock) $\rightarrow$ Confirmation |
| **Life of a Passenger** | **Air** | 6 | Check-in $\rightarrow$ APIS verification $\rightarrow$ DCS (boarding pass) $\rightarrow$ Gate $\rightarrow$ Boarding |
| **Life of a Guest** | **Lodging** | 5 | Arrival $\rightarrow$ PMS Check-in $\rightarrow$ Folio Opening $\rightarrow$ Room Key Generation $\rightarrow$ In-House status |

---

## 8. Potential Pitfalls & Mitigations

1. **Text Label Wrapping in D3**: 
   * *Problem*: Korean translation text strings are frequently longer than their English counterparts, leading to layout overlaps.
   * *Mitigation*: Render text inside SVG `<foreignObject>` wrappers using flexbox/HTML text wrapping, or use clean, modern absolute-positioned HTML tooltips overlaid on the SVG coordinates.
2. **Offline Compile Size**:
   * *Problem*: D3.js can bloatedly expand files if not handled properly.
   * *Mitigation*: D3 is already inlined in the existing Travel Wiki bundle. We will reuse the preloaded D3 library to prevent any size footprint expansion.
3. **Complex Flow Loops**:
   * *Problem*: Sequence diagrams can become messy when depicting asynchronous API webhooks or error loops.
   * *Mitigation*: Limit sequence arrows to success paths (the "happy path"), and handle alternate/exceptional routes (such as credit card declines or overbooking) inside the Step Details narrative panel.
