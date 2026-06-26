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
