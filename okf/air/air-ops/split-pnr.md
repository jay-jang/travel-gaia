---
type: Process
title: Split PNR
description: 'Splitting a PNR is the reservation process of dividing one Passenger Name Record into two so that one or more passengers can be handled separately from the rest of the party. The divided passengers are moved into a new PNR with its own Record Locator, while the original PNR retains the remaining passengers.'
tags:
  - air-ops
  - active
timestamp: '2026-06-17T00:00:00Z'
id: split-pnr
vertical: air
category: air-ops
conceptType: process
status: active
term_ko: Split PNR (PNR 분리 / Divide)
definition_ko: 'Split PNR은 하나의 PNR(Passenger Name Record)을 둘로 나누어 일부 승객을 나머지 일행과 분리해 처리하는 예약 작업이다. 분리된 승객은 자체 Record Locator를 가진 새 PNR로 옮겨지고, 원본 PNR에는 나머지 승객이 남는다.'
longDef: 'Agents split a PNR when part of a group needs a different itinerary, cancellation, reissue, or special handling that should not affect the others — for example one traveller of two changing a return flight. After a successful split the systems cross-reference the two records (commonly tagged as PARENT/ASSOCIATE PNRs and noted in PNR history). Splitting is also required operationally before partial cancellation or reissue so each passenger''s ticketing remains consistent. Cryptic commands differ by GDS (e.g., Amadeus SP, Sabre D / divide-party flows).'
longDef_ko: '일행 중 일부만 다른 여정·취소·재발행·특별 처리가 필요하고 나머지에 영향을 주면 안 될 때(예: 2인 중 1인만 귀국편 변경) PNR을 split한다. 분리가 성공하면 두 레코드는 보통 PARENT/ASSOCIATE PNR로 태깅되고 PNR history에 기록되며 상호 참조된다. 부분 취소나 재발행 전에 각 승객의 발권 일관성을 유지하기 위해서도 split이 운영상 필요하다. cryptic 명령은 GDS마다 달라 Amadeus는 SP, Sabre는 divide-party(D) 흐름을 쓴다.'
aliases:
  - Divide PNR
  - Divided Booking
  - PNR Split
  - Associate PNR
providerTerms:
  - provider: Amadeus
    term: Split (SP)
    context: Splits selected passengers into an associate PNR with a separate record locator.
    context_ko: 선택한 승객을 별도 record locator를 가진 associate PNR로 분리.
    relationship: same
  - provider: Sabre
    term: Divide (D)
    context: Divide-the-booking function that separates one or more name elements into a new PNR.
    context_ko: 하나 이상의 이름 요소를 새 PNR로 분리하는 divide-the-booking 기능.
    relationship: same
relationships:
  - type: related
    targetTerm: PNR
  - type: related
    targetTerm: Group PNR
  - type: related
    targetTerm: Record Locator
  - type: related
    targetTerm: Reissue
distinctions:
  - targetTerm: Group PNR
    explanation: 'Splitting a PNR creates a new separate record for some passengers; a Group PNR is a single record holding many passengers under shared inventory. Splitting is often the action applied to part of a group, not the group structure itself.'
    explanation_ko: 'Split PNR은 일부 승객을 위한 새 분리 레코드를 만드는 작업이고, Group PNR은 공유 inventory 아래 다수 승객을 담는 하나의 레코드다. split은 흔히 group의 일부에 적용하는 동작이지 group 구조 자체가 아니다.'
sources:
  - org: Amadeus
    name: Amadeus Service Hub — How to split a PNR (Cryptic)
    version: ''
    section: ''
    url: ''
  - org: IATA
    name: Passenger Services Conference Resolutions Manual (PSCRM)
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10 24h8"/><path d="M18 24 28 14h10"/><path d="M18 24 28 34h10"/><circle cx="10" cy="24" r="3"/><circle cx="40" cy="14" r="3"/><circle cx="40" cy="34" r="3"/></svg>
---

> Splitting a PNR is the reservation process of dividing one Passenger Name Record into two so that one or more passengers can be handled separately from the rest of the party. The divided passengers are moved into a new PNR with its own Record Locator, while the original PNR retains the remaining passengers.

Agents split a PNR when part of a group needs a different itinerary, cancellation, reissue, or special handling that should not affect the others — for example one traveller of two changing a return flight. After a successful split the systems cross-reference the two records (commonly tagged as PARENT/ASSOCIATE PNRs and noted in PNR history). Splitting is also required operationally before partial cancellation or reissue so each passenger's ticketing remains consistent. Cryptic commands differ by GDS (e.g., Amadeus SP, Sabre D / divide-party flows).

**한국어 / Korean** — **Split PNR (PNR 분리 / Divide)** — Split PNR은 하나의 PNR(Passenger Name Record)을 둘로 나누어 일부 승객을 나머지 일행과 분리해 처리하는 예약 작업이다. 분리된 승객은 자체 Record Locator를 가진 새 PNR로 옮겨지고, 원본 PNR에는 나머지 승객이 남는다.

일행 중 일부만 다른 여정·취소·재발행·특별 처리가 필요하고 나머지에 영향을 주면 안 될 때(예: 2인 중 1인만 귀국편 변경) PNR을 split한다. 분리가 성공하면 두 레코드는 보통 PARENT/ASSOCIATE PNR로 태깅되고 PNR history에 기록되며 상호 참조된다. 부분 취소나 재발행 전에 각 승객의 발권 일관성을 유지하기 위해서도 split이 운영상 필요하다. cryptic 명령은 GDS마다 달라 Amadeus는 SP, Sabre는 divide-party(D) 흐름을 쓴다.

**Aliases:** `Divide PNR`, `Divided Booking`, `PNR Split`, `Associate PNR`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Amadeus | `Split (SP)` | same | Splits selected passengers into an associate PNR with a separate record locator. |
| Sabre | `Divide (D)` | same | Divide-the-booking function that separates one or more name elements into a new PNR. |

# Related
- [PNR](/air/air-ops/pnr.md) — related
- [Group PNR](/air/air-ops/group-pnr.md) — related
- [Record Locator](/air/air-ops/record-locator.md) — related
- [Reissue](/air/air-ticket/reissue.md) — related

# Distinctions
- **Split PNR** vs [Group PNR](/air/air-ops/group-pnr.md) — Splitting a PNR creates a new separate record for some passengers; a Group PNR is a single record holding many passengers under shared inventory. Splitting is often the action applied to part of a group, not the group structure itself.

# Citations
[1] Amadeus — Amadeus Service Hub — How to split a PNR (Cryptic)
[2] [IATA — Passenger Services Conference Resolutions Manual (PSCRM)](https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/)
