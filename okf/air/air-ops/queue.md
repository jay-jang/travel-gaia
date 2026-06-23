---
type: Business Term
title: Queue
description: 'A queue is an electronic work list within a CRS/GDS or airline host into which PNRs (or messages) are automatically or manually placed so that they can be reviewed and acted upon, for example after a schedule change, ticketing time limit, or waitlist clearance. Each queue is identified by a number/category and routes work to the appropriate agent or office.'
tags:
  - air-ops
  - active
timestamp: '2026-06-17T00:00:00Z'
id: queue
vertical: air
category: air-ops
conceptType: business-term
status: active
term_ko: 작업 대기열(Queue)
definition_ko: 'queue(큐, 작업 대기열)는 CRS/GDS 또는 항공사 호스트 내의 전자 작업 목록으로, 스케줄 변경, 발권 시한, 대기자 확약 등의 이후에 PNR(또는 메시지)이 자동 또는 수동으로 배치되어 검토 및 처리될 수 있도록 한다. 각 queue는 번호/카테고리로 식별되며 작업을 적절한 에이전트나 사무소로 라우팅한다.'
longDef: 'Queues are the workflow backbone of reservation systems: the host places a PNR on a designated queue when an event requires human follow-up (schedule changes, time-limit warnings, confirmations from waitlist, special service replies). Agents ''work the queue'' by retrieving PNRs one by one, taking action, and removing or re-queuing them. Numbering and category conventions differ by GDS (for example, schedule-change and ticketing queues), but the concept of an event-driven work list is common across systems.'
longDef_ko: 'queue는 예약 시스템 워크플로의 근간이다. 호스트는 사람이 후속 처리해야 하는 이벤트(스케줄 변경, 시한 경고, 대기자 확약, 특별 서비스 응답)가 발생하면 지정된 queue에 PNR을 배치한다. 에이전트는 PNR을 하나씩 조회하여 조치를 취하고 이를 제거하거나 다시 큐에 넣는 방식으로 ''queue를 처리''한다. 번호 및 카테고리 규칙은 GDS마다 다르지만(예: 스케줄 변경 및 발권 queue), 이벤트 기반 작업 목록이라는 개념은 시스템 전반에 공통적이다.'
aliases:
  - GDS Queue
  - PNR Queue
  - Work Queue
providerTerms:
  - provider: Amadeus
    term: Queue
    context: Amadeus organizes PNR follow-up work into numbered queues and categories
    context_ko: Amadeus는 PNR 후속 처리 작업을 번호가 매겨진 queue와 카테고리로 구성한다
    relationship: same
  - provider: Sabre
    term: Queue
    context: Sabre routes PNRs needing action to numbered queues for agents to work
    context_ko: Sabre는 조치가 필요한 PNR을 에이전트가 처리하도록 번호가 매겨진 queue로 라우팅한다
    relationship: same
  - provider: Travelport
    term: Queue
    context: Galileo/Apollo and Worldspan use queues to manage PNR follow-up
    context_ko: Galileo/Apollo와 Worldspan은 PNR 후속 처리를 관리하기 위해 queue를 사용한다
    relationship: same
  - provider: Amadeus
    term: Queue (QE place / QE40)
    context: Amadeus places PNRs on numbered work queues via QE entries (e.g. QE40) for downstream agent action such as ticketing or schedule-change handling.
    context_ko: 'Amadeus는 QE 엔트리(예: QE40)로 PNR을 번호가 매겨진 작업 queue에 올려 발권·schedule change 처리 같은 후속 업무에 사용한다.'
    relationship: same
  - provider: Sabre
    term: 'Queue (QP/40 place, Q-prefixed commands)'
    context: Sabre routes PNRs to category/number queues with Q-prefixed commands (e.g. QP/40) for organized agency and airline workflows.
    context_ko: 'Sabre는 Q-접두 명령(예: QP/40)으로 PNR을 category/번호 queue에 보내 조직화된 agency·airline workflow에 사용한다.'
    relationship: same
relationships:
  - type: related
    targetTerm: PNR
  - type: related
    targetTerm: Schedule Change
  - type: related
    targetTerm: Ticketing Time Limit
  - type: related
    targetTerm: IROPS
distinctions:
  - targetTerm: Ticketing Time Limit
    explanation: A queue is the GDS workflow bucket where pending-ticketing PNRs are placed; the ticketing time limit is the deadline itself.
    explanation_ko: '큐(queue)는 발권 대기 중인 PNR이 배치되는 GDS 업무 처리 버킷이며, 발권 시한은 기한 그 자체이다.'
sources:
  - name: Amadeus Functional Documentation — Queues
    org: Amadeus
    version: ''
    section: ''
    url: ''
  - name: Sabre Format Finder — Queues
    org: Sabre
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="12" r="2"/><circle cx="9" cy="24" r="2"/><circle cx="9" cy="36" r="2"/><line x1="17" y1="12" x2="40" y2="12"/><line x1="17" y1="24" x2="40" y2="24"/><line x1="17" y1="36" x2="40" y2="36"/></svg>
---

> A queue is an electronic work list within a CRS/GDS or airline host into which PNRs (or messages) are automatically or manually placed so that they can be reviewed and acted upon, for example after a schedule change, ticketing time limit, or waitlist clearance. Each queue is identified by a number/category and routes work to the appropriate agent or office.

Queues are the workflow backbone of reservation systems: the host places a PNR on a designated queue when an event requires human follow-up (schedule changes, time-limit warnings, confirmations from waitlist, special service replies). Agents 'work the queue' by retrieving PNRs one by one, taking action, and removing or re-queuing them. Numbering and category conventions differ by GDS (for example, schedule-change and ticketing queues), but the concept of an event-driven work list is common across systems.

**한국어 / Korean** — **작업 대기열(Queue)** — queue(큐, 작업 대기열)는 CRS/GDS 또는 항공사 호스트 내의 전자 작업 목록으로, 스케줄 변경, 발권 시한, 대기자 확약 등의 이후에 PNR(또는 메시지)이 자동 또는 수동으로 배치되어 검토 및 처리될 수 있도록 한다. 각 queue는 번호/카테고리로 식별되며 작업을 적절한 에이전트나 사무소로 라우팅한다.

queue는 예약 시스템 워크플로의 근간이다. 호스트는 사람이 후속 처리해야 하는 이벤트(스케줄 변경, 시한 경고, 대기자 확약, 특별 서비스 응답)가 발생하면 지정된 queue에 PNR을 배치한다. 에이전트는 PNR을 하나씩 조회하여 조치를 취하고 이를 제거하거나 다시 큐에 넣는 방식으로 'queue를 처리'한다. 번호 및 카테고리 규칙은 GDS마다 다르지만(예: 스케줄 변경 및 발권 queue), 이벤트 기반 작업 목록이라는 개념은 시스템 전반에 공통적이다.

**Aliases:** `GDS Queue`, `PNR Queue`, `Work Queue`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Amadeus | `Queue` | same | Amadeus organizes PNR follow-up work into numbered queues and categories |
| Sabre | `Queue` | same | Sabre routes PNRs needing action to numbered queues for agents to work |
| Travelport | `Queue` | same | Galileo/Apollo and Worldspan use queues to manage PNR follow-up |
| Amadeus | `Queue (QE place / QE40)` | same | Amadeus places PNRs on numbered work queues via QE entries (e.g. QE40) for downstream agent action such as ticketing or schedule-change handling. |
| Sabre | `Queue (QP/40 place, Q-prefixed commands)` | same | Sabre routes PNRs to category/number queues with Q-prefixed commands (e.g. QP/40) for organized agency and airline workflows. |

# Related
- [PNR](/air/air-ops/pnr.md) — related
- [Schedule Change](/air/air-partner/schedule-change.md) — related
- [Ticketing Time Limit](/air/air-ticket/ticketing-time-limit.md) — related
- [IROPS](/air/air-partner/irops.md) — related

# Distinctions
- **Queue** vs [Ticketing Time Limit](/air/air-ticket/ticketing-time-limit.md) — A queue is the GDS workflow bucket where pending-ticketing PNRs are placed; the ticketing time limit is the deadline itself.

# Citations
[1] Amadeus — Amadeus Functional Documentation — Queues
[2] Sabre — Sabre Format Finder — Queues
