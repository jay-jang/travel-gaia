# "Life of …" flows — synthesized build spec (codex × agy converged)

Two independent opinions (codex gpt-5.5, agy) were collected (Round 1), cross-reviewed
(Round 2), and **fully converged**. Source rounds: `life-flows-{codex,agy}.md`,
`life-flows-{codex,agy}-r2.md`, `life-flows-agy-full.md`.

## Settled (both, Round 1)
- New route **`#/flows`** — NOT a toggle inside `#/classroom` (Distribution Flow stays a stage board).
- New **`LIFE_FLOWS`** structure, separate from `FLOWS`.
- Primary graphic = **swimlane sequence diagram**: actor lanes as columns, directional message
  arrows (request solid / response thin-dashed / async dotted). One artifact, one ordered sequence.
- Drop "Onboarding" label → flow = **Fulfillment** (traveler check-in→boarding/pickup/redemption→
  service→checkout). Supplier onboarding deferred (later "Operations/Supply Activation").
- Universal flow concept, **vertical-specific** steps/actors/vocabulary.
- Bilingual (ko/en), hand-authored. Steps carry clickable glossary term ids → HTML inspector.
- Reuse inlined d3. **SVG diagram + HTML controls/inspector** (don't fight SVG text wrapping).
- Field-manual aesthetic (hairlines, monochrome lanes, maroon accents).

## Converged decisions (Round 2)
- **A. Flow set:** 5 canonical, **ship 3 in v1**: `search`, `booking`, `fulfillment`.
  v1.1 = `payment_settlement`, `change_refund` (their own swimlanes — different actors/timing/
  reversals). In v1, payment is only a Booking step; change/refund only a related-flow note.
- **B. v1 matrix:** **Air + Lodging only.**
  | Flow | Air | Lodging |
  |---|---:|---:|
  | Search | 6 | 5 |
  | Booking | 7 (incl. payment auth / ticketing handoff) | 6 (incl. guarantee/deposit/confirm) |
  | Fulfillment | 6 | 5 |
- **C. Mobile:** hide SVG; render an **HTML message-log `<ol>`** from the same `steps[]`
  (step no., actor badges, arrow type, bilingual action, clickable terms, note).
- **D. Final schema** (build to this exactly):

```js
LIFE_FLOWS[flowId] = {
  id, name:{en,ko}, shortName?:{en,ko}, description:{en,ko}, artifact:{en,ko},
  status: 'v1' | 'v1_1' | 'deferred',
  variants: {
    air|lodging|ground|cruise|tours: {
      intro:{en,ko},
      actors: [ { id, name:{en,ko}, shortName?:{en,ko}, role?:{en,ko} } ],
      steps:  [ {
        id, from, to,                 // actor ids
        type: 'request'|'response'|'async',   // request=solid, response=dashed, async=dotted
        action:{en,ko},               // short arrow/list label
        message?:{en,ko},             // payload/business object, mono
        description:{en,ko},          // inspector body
        terms: [glossaryId,…],        // clickable
        note?:{en,ko}, phase?, emphasis?:'normal'|'key'|'risk', relatedFlowIds?:[]
      } ]
    }
  }
}
```

## Implementation notes
- Route `#/flows`; UI = flow selector (Search|Booking|Fulfillment) + vertical selector (Air|Lodging).
- Desktop: d3 for SVG swimlane geometry/arrows only; lane order derived from `actors[]`.
- Step inspector + mobile log are HTML from the same `steps[]`.
- Clicking a step highlights its arrow and shows description + glossary terms (link to `#/term/<id>`).
- Cross-link: each step maps to a Distribution-Flow stage (shop/book/pay/fulfill/settle); link both ways.
- Use only glossary term ids that exist (verify against data, like `FLOWS` does).
- Keep payment_settlement / change_refund as separate `status:'v1_1'` records, not hidden branches.
