I will list the contents of the App Data Directory to see the context and files of the Travel Wiki project.
I will list the current permission grants to see what paths and commands are available to read/write/execute.
I will list the contents of the `/home/ubuntu/.gemini/antigravity-cli/scratch` directory to see if there is an existing codebase or subdirectories.
I will list the contents of the `/home/ubuntu/.gemini/antigravity-cli/worktrees` directory.
I will create a design brief artifact specifying the architectural and UI/UX design for the "Life of..." journey visualizations in Travel Wiki. This brief addresses all 8 questions with recommendations, schemas, step definitions, and responsive SVG sketches.
I have created a comprehensive, buildable design brief for the **"Life of..."** flow views in the Travel Wiki. The full specification, including diagrams, data schemas, layouts, and responsive flow strategies, can be viewed in the artifact file:

👉 **[life_of_flows_design_brief.md](file:///home/ubuntu/.gemini/antigravity-cli/brain/92f7e8fc-b8aa-4758-a8c2-e0be0e25f2f5/life_of_flows_design_brief.md)**

---

### Summary of Key Recommendations & Rationale

1. **Canonical Flow Set**: Launch with three high-impact flows:
   * **Life of a Search** (shopping, query fan-out to aggregators/GDS).
   * **Life of a Booking** (payment auth, PNR write, ticketing).
   * **Life of a Passenger/Guest Journey** (fulfillment, check-in, revenue recognition).
   * *Rationale*: Rather than bloating the UI with separate payment or disruption views, payment is handled as a core step in Booking, and disruptions/refunds are incorporated as extensions of post-booking operations.
2. **Onboarding Clarification**: Rebrand onboarding as **"Life of a Passenger/Guest Journey"** (operational check-in to boarding). 
   * *Rationale*: Traveler operations map directly to the Wiki's rich vocabulary (APIS, DCS, PMS, manifest). Supplier/partner onboarding is a slow, manual project management flow that is better suited for a static table or side-note on `#/classroom`.
3. **Universal blueprints with Vertical Overrides**: Define a single core state machine per flow type, but use a dynamic translation dictionary to swap actor names, system terminology, and descriptions depending on the selected vertical (Air, Lodging, Ground, Cruise, Tours).
4. **Hybrid Sequence Swimlane (D3)**: Render vertical columns for actors with horizontal flow arrows on desktop, which dynamically reflows into a vertical card-based timeline stepper on mobile (converting actors to color-coded badges to fit `<768px` viewports).
5. **Data Model Schema (`LIFE_FLOWS`)**: Define a structured, bilingual JS object format linking actors, actions, directions, payloads, descriptions, and clickable glossary term IDs.
6. **Information Architecture**: Introduce a new dedicated route (`#/flows`) containing the D3 interactive sandbox, rather than cluttering the already dense static table layout on `#/classroom`.
7. **v1 Scope**: Target **Air** and **Lodging** verticals across the 3 primary flows first, capping sequence paths at 5–8 steps per flow to preserve readability.
