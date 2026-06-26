# Round 2 — cross-review & converge: "Life of …" flows

Two AIs (you + one other) independently answered the Round 1 brief for the Travel Wiki
"Life of …" journey flows. You now see the other's positions. **Converge to a single
buildable spec.** Be decisive on the contested points; don't hedge.

## Already agreed by BOTH (treat as settled — do not relitigate)
- New route `#/flows` (NOT a toggle inside the `#/classroom` Distribution Flow board).
- New `LIFE_FLOWS` data structure, separate from the existing `FLOWS` stage-board data.
- Primary graphic = **swimlane sequence diagram** (actor lanes as columns + directional
  message arrows: request solid, response thin/dashed, async dotted). Mobile = vertical
  step list/log preserving order, actor badges, terms, notes.
- Drop the label "Onboarding"; flow #3 = **Fulfillment** (traveler check-in→boarding/
  pickup/redemption→service→checkout). Supplier onboarding deferred.
- Universal flow concept, **vertical-specific steps/actors/vocabulary**.
- Bilingual (ko/en), hand-authored. Steps carry clickable glossary term ids → HTML step
  inspector. Reuse inlined d3. SVG for diagram, HTML for controls/inspector (don't fight
  SVG text wrapping). Field-manual aesthetic (hairlines, monochrome lanes, maroon accents).
- v1 leads with **Air + Lodging**; Payment and Change/Refund come later.

## Contested points — give your FINAL converged answer on each
**A. Flow set & how Payment / Change-Refund are handled.**
- Position 1 (codex): define 5 canonical flows (Search, Booking, **Payment & Settlement**,
  **Change/Disruption/Refund**, Fulfillment); ship Search/Booking/Fulfillment in v1, add
  Payment + Change/Refund as v1.1 *separate* flows.
- Position 2 (agy): only **3 flows**; fold payment INTO Booking as a step, and put
  disruption/refund as a narrative extension of post-booking — no separate flows.
- Decide: is the final model 3 flows or 5 flows (with 3 shipped first)? Are Payment and
  Change/Refund eventually their own swimlane flows, or folded into Booking/Fulfillment?

**B. v1 vertical scope.**
- codex: Air + Lodging + **Ground** (Ground = Booking + Fulfillment).
- agy: **Air + Lodging only**.
- Decide the exact v1 matrix (verticals × flows × approx step counts).

**C. Mobile rendering.**
- codex: render mobile as an HTML "message log" list from the same `steps[]` (not d3).
- agy: d3 reflows the swimlane into vertical timeline cards.
- Decide one (simplicity & robustness matter; it's an offline single file).

**D. Unified schema.** Reconcile the two schemas into ONE final `LIFE_FLOWS` shape.
- codex fields: `from,to,direction,action,message,terms[],note` (+optional
  `phase,emphasis,reversible,relatedFlowIds`); top-level `variants[vertical].{actors[],steps[]}`.
- agy fields: `fromActor,toActor,type,label,payloadLabel,terms[],desc`; top-level
  `verticals[vertical].{intro,steps[]}` with separate actor theming.
- Produce the single final schema (field names + structure) you both should build to.

## Output
A short, decisive converged spec: (A) final flow set + v1 list, (B) v1 vertical matrix,
(C) mobile choice, (D) the one final `LIFE_FLOWS` schema (as a code block), plus any
must-not-forget implementation note. This becomes the build spec.
