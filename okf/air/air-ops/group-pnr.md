---
type: Document
title: Group PNR
description: 'A Group PNR is a single Passenger Name Record created to hold a block of seats for a group of passengers (typically a defined minimum, such as 10 or more) travelling together on the same itinerary, often before all individual names are known. Names are added against the held seats over time, and unassigned places are tracked until name-in or cancellation.'
tags:
  - air-ops
  - active
timestamp: '2026-06-17T00:00:00Z'
id: group-pnr
vertical: air
category: air-ops
conceptType: document
status: active
term_ko: Group PNR (단체 PNR / 단체 예약)
definition_ko: 'Group PNR은 같은 여정을 함께 이용하는 단체 승객(보통 10명 이상 등 정해진 최소 인원)을 위해 좌석 block을 잡아두는 하나의 PNR(Passenger Name Record)이며, 종종 개별 이름이 모두 확정되기 전에 생성된다. 확보한 좌석에 시간이 지나며 이름을 추가하고, 미배정 좌석은 name-in 또는 취소 시점까지 관리된다.'
longDef: 'Group bookings are governed by negotiated group fares and carrier group policies, with deadlines (name list submission, deposit, final payment/ticketing) that differ from individual fares. The Group PNR shows the booked group size versus the number of names entered (unassigned count), and may be split into individual PNRs for ticketing or when members deviate. Carriers control group inventory separately from regular Availability, and over-blocking or late name-in can trigger fees, penalties, or seat reduction.'
longDef_ko: '단체 예약은 협상된 group fare와 항공사 단체 규정의 적용을 받으며, 명단 제출·예치금·최종 결제/발권 마감 등 개인 운임과 다른 기한이 존재한다. Group PNR에는 예약된 단체 규모와 입력된 이름 수(미배정 인원)가 함께 표시되고, 발권을 위해 또는 일부 인원의 여정 변경 시 개별 PNR로 split될 수 있다. 항공사는 단체 inventory를 일반 Availability와 별도로 관리하며, 과다 block이나 늦은 name-in은 수수료·페널티·좌석 감축을 유발할 수 있다.'
aliases:
  - Group Booking
  - Group Reservation
  - Group Block
providerTerms:
  - provider: Amadeus
    term: Group PNR
    context: PNR holding a number of seats with unassigned names tracked by element 0 and NM count.
    context_ko: 좌석 수를 보유하며 element 0과 NM 수로 미배정 이름을 관리하는 PNR.
    relationship: same
  - provider: Sabre
    term: Group PNR (group name field / 0 group seats)
    context: 'Sabre holds a group block under a single PNR with a group name field and a numeric seat count, names added later via NM entries.'
    context_ko: 'Sabre는 group name 필드와 좌석 수를 가진 단일 PNR로 group block을 보유하며, 이름은 이후 NM 엔트리로 추가한다.'
    relationship: same
  - provider: NDC/IATA
    term: Group Order / BookaGroup (group request)
    context: 'In NDC group flows (e.g. Lufthansa Group BookaGroup), a group request is created and later converted to an Order, replacing the classic group PNR block.'
    context_ko: 'NDC group flow(예: Lufthansa Group BookaGroup)에서는 group 요청을 생성한 뒤 Order로 전환하여 기존 group PNR block을 대체한다.'
    relationship: related
relationships:
  - type: broader
    targetTerm: PNR
  - type: related
    targetTerm: Split PNR
  - type: related
    targetTerm: Availability
  - type: related
    targetTerm: Allotment
distinctions:
  - targetTerm: Allotment
    explanation: An Allotment is a pre-negotiated block of inventory a carrier or supplier grants a distributor to sell; a Group PNR is a specific reservation record holding seats for one identified travelling group. A group booking may draw on an allotment but is not the same as the allotment agreement.
    explanation_ko: 'Allotment는 항공사·공급자가 판매자에게 사전 협상으로 부여한 inventory block이고, Group PNR은 식별된 한 단체를 위해 좌석을 보유한 구체적 예약 레코드다. 단체 예약이 allotment를 사용할 수 있지만 allotment 계약 자체와는 다르다.'
  - targetTerm: Split PNR
    explanation: 'Splitting a PNR creates a new separate record for some passengers; a Group PNR is a single record holding many passengers under shared inventory. Splitting is often the action applied to part of a group, not the group structure itself.'
    explanation_ko: 'Split PNR은 일부 승객을 위한 새 분리 레코드를 만드는 작업이고, Group PNR은 공유 inventory 아래 다수 승객을 담는 하나의 레코드다. split은 흔히 group의 일부에 적용하는 동작이지 group 구조 자체가 아니다.'
sources:
  - org: Amadeus
    name: Amadeus Groups User Guide
    version: ''
    section: ''
    url: ''
    tier: vendor-doc
  - org: IATA
    name: Passenger Services Conference Resolutions Manual (PSCRM)
    version: 46th Edition (2026)
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/'
    tier: association
    verifyQuote: 'Significant Changes and Amendments to the 46th edition (2026) of the IATA Passenger Services Conference Resolution Manual include:'
    verified: true
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="17" cy="16" r="5"/><circle cx="31" cy="16" r="5"/><path d="M9 34c0-5 3.5-8 8-8s8 3 8 8"/><path d="M23 34c0-5 3.5-8 8-8s8 3 8 8"/></svg>
---

> A Group PNR is a single Passenger Name Record created to hold a block of seats for a group of passengers (typically a defined minimum, such as 10 or more) travelling together on the same itinerary, often before all individual names are known. Names are added against the held seats over time, and unassigned places are tracked until name-in or cancellation.

Group bookings are governed by negotiated group fares and carrier group policies, with deadlines (name list submission, deposit, final payment/ticketing) that differ from individual fares. The Group PNR shows the booked group size versus the number of names entered (unassigned count), and may be split into individual PNRs for ticketing or when members deviate. Carriers control group inventory separately from regular Availability, and over-blocking or late name-in can trigger fees, penalties, or seat reduction.

**한국어 / Korean** — **Group PNR (단체 PNR / 단체 예약)** — Group PNR은 같은 여정을 함께 이용하는 단체 승객(보통 10명 이상 등 정해진 최소 인원)을 위해 좌석 block을 잡아두는 하나의 PNR(Passenger Name Record)이며, 종종 개별 이름이 모두 확정되기 전에 생성된다. 확보한 좌석에 시간이 지나며 이름을 추가하고, 미배정 좌석은 name-in 또는 취소 시점까지 관리된다.

단체 예약은 협상된 group fare와 항공사 단체 규정의 적용을 받으며, 명단 제출·예치금·최종 결제/발권 마감 등 개인 운임과 다른 기한이 존재한다. Group PNR에는 예약된 단체 규모와 입력된 이름 수(미배정 인원)가 함께 표시되고, 발권을 위해 또는 일부 인원의 여정 변경 시 개별 PNR로 split될 수 있다. 항공사는 단체 inventory를 일반 Availability와 별도로 관리하며, 과다 block이나 늦은 name-in은 수수료·페널티·좌석 감축을 유발할 수 있다.

**Aliases:** `Group Booking`, `Group Reservation`, `Group Block`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Amadeus | `Group PNR` | same | PNR holding a number of seats with unassigned names tracked by element 0 and NM count. |
| Sabre | `Group PNR (group name field / 0 group seats)` | same | Sabre holds a group block under a single PNR with a group name field and a numeric seat count, names added later via NM entries. |
| NDC/IATA | `Group Order / BookaGroup (group request)` | related | In NDC group flows (e.g. Lufthansa Group BookaGroup), a group request is created and later converted to an Order, replacing the classic group PNR block. |

# Related
- [PNR](/air/air-ops/pnr.md) — broader
- [Split PNR](/air/air-ops/split-pnr.md) — related
- [Availability](/air/air-shop/availability.md) — related
- [Allotment](/lodging/hotel-rate/allotment.md) — related

# Distinctions
- **Group PNR** vs [Allotment](/lodging/hotel-rate/allotment.md) — An Allotment is a pre-negotiated block of inventory a carrier or supplier grants a distributor to sell; a Group PNR is a specific reservation record holding seats for one identified travelling group. A group booking may draw on an allotment but is not the same as the allotment agreement.
- **Group PNR** vs [Split PNR](/air/air-ops/split-pnr.md) — Splitting a PNR creates a new separate record for some passengers; a Group PNR is a single record holding many passengers under shared inventory. Splitting is often the action applied to part of a group, not the group structure itself.

# Citations
[1] Amadeus — Amadeus Groups User Guide
[2] [IATA — Passenger Services Conference Resolutions Manual (PSCRM) — 46th Edition (2026)](https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/)
