---
type: Business Term
title: Passive Segment
description: 'A passive segment is a flight segment added to a PNR for record-keeping, pricing, or ticketing purposes that does not generate a real inventory request to, or hold space in, the operating carrier''s reservation system. It mirrors a booking that was actually confirmed elsewhere (e.g., directly with the airline or in another system).'
tags:
  - air-ops
  - active
timestamp: '2026-06-17T00:00:00Z'
id: passive-segment
vertical: air
category: air-ops
conceptType: business-term
status: active
term_ko: 수동 구간(Passive Segment)
definition_ko: 'passive segment(수동 구간)는 기록 관리, 운임 산정 또는 발권 목적으로 PNR에 추가되는 항공 segment로, 운항 항공사의 예약 시스템에 실제 재고 요청을 보내거나 좌석을 점유하지 않는다. 실제로는 다른 곳(예: 항공사 직접 또는 다른 시스템)에서 확약된 예약을 반영한다.'
longDef: 'Passive segments are typically created with passive status codes so the GDS shows the itinerary for ticketing and documentation without sending an active sell message that would decrement seat inventory. They are commonly used to ticket a booking made outside the GDS, to build complete itineraries for fare construction, or for airline reporting. Misuse of passive segments (e.g., to circumvent ticketing) is policed by GDSs and airlines, and ARNK is a related non-air placeholder for surface gaps.'
longDef_ko: 'passive segment는 일반적으로 passive 상태 코드로 생성되어, 좌석 재고를 차감하는 능동 판매(sell) 메시지를 보내지 않고도 GDS가 발권 및 문서화를 위해 여정을 표시하도록 한다. 주로 GDS 외부에서 이루어진 예약을 발권하거나, 운임 구성을 위해 완전한 여정을 구성하거나, 항공사 보고 목적으로 사용된다. passive segment의 오용(예: 발권 회피)은 GDS와 항공사에 의해 단속되며, ARNK는 지상 구간 공백을 나타내는 관련 비항공 자리표시자(placeholder)다.'
aliases:
  - Passive Booking
  - Informational Segment
  - Ghost Segment
providerTerms:
  - provider: Sabre
    term: Passive Segment / GK status
    context: Sabre uses passive status codes such as GK to add informational segments that do not access inventory
    context_ko: Sabre는 GK와 같은 passive 상태 코드를 사용하여 재고에 접근하지 않는 정보성 segment를 추가한다
    relationship: same
  - provider: Amadeus
    term: Passive Segment
    context: Amadeus supports passive segments for ticketing of externally confirmed space
    context_ko: Amadeus는 외부에서 확약된 좌석의 발권을 위해 passive segment를 지원한다
    relationship: same
relationships:
  - type: broader
    targetTerm: Segment
  - type: related
    targetTerm: ARNK
  - type: related
    targetTerm: PNR
  - type: related
    targetTerm: Ticketing Time Limit
distinctions:
  - targetTerm: ARNK
    explanation: 'A passive segment is an informational air segment that does not access inventory, whereas ARNK is a non-air placeholder marking a surface (non-flown) gap in the itinerary.'
    explanation_ko: 'passive segment는 재고에 접근하지 않는 정보성 항공 segment인 반면, ARNK는 여정에서 지상(비운항) 공백을 표시하는 비항공 자리표시자다.'
  - targetTerm: Married Segment
    explanation: 'A passive segment holds no live inventory, while married segments are active inventory-controlled connections sold and managed as a unit.'
    explanation_ko: 'passive segment는 실시간 재고를 점유하지 않는 반면, married segment는 하나의 단위로 판매·관리되는, 재고 통제를 받는 능동 연결편이다.'
  - targetTerm: Open Segment
    explanation: 'A Passive Segment is a non-active segment created to mirror a booking confirmed elsewhere (e.g., for ticketing), holding no live inventory; an Open Segment is undated and unconfirmed by design rather than a copy of an external confirmation.'
    explanation_ko: 'Passive Segment는 다른 곳에서 확약된 예약을 (예: 발권 목적으로) 반영하려 만든 비활성 segment로 실제 inventory를 보유하지 않는다. Open Segment는 외부 확약의 사본이 아니라 본래 날짜 없이 미확약 상태로 설계된 구간이다.'
sources:
  - name: Sabre Format Finder — Passive Segments
    org: Sabre
    version: ''
    section: ''
    url: 'https://developer.sabre.com/docs/soap_apis/management/itinerary/Add_Passive_Segment'
  - name: Amadeus Functional Documentation — Passive Segments
    org: Amadeus
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="34" r="3.5"/><circle cx="38" cy="14" r="3.5"/><line x1="13" y1="31" x2="35.4" y2="16.6" stroke-dasharray="1 5"/></svg>
---

> A passive segment is a flight segment added to a PNR for record-keeping, pricing, or ticketing purposes that does not generate a real inventory request to, or hold space in, the operating carrier's reservation system. It mirrors a booking that was actually confirmed elsewhere (e.g., directly with the airline or in another system).

Passive segments are typically created with passive status codes so the GDS shows the itinerary for ticketing and documentation without sending an active sell message that would decrement seat inventory. They are commonly used to ticket a booking made outside the GDS, to build complete itineraries for fare construction, or for airline reporting. Misuse of passive segments (e.g., to circumvent ticketing) is policed by GDSs and airlines, and ARNK is a related non-air placeholder for surface gaps.

**한국어 / Korean** — **수동 구간(Passive Segment)** — passive segment(수동 구간)는 기록 관리, 운임 산정 또는 발권 목적으로 PNR에 추가되는 항공 segment로, 운항 항공사의 예약 시스템에 실제 재고 요청을 보내거나 좌석을 점유하지 않는다. 실제로는 다른 곳(예: 항공사 직접 또는 다른 시스템)에서 확약된 예약을 반영한다.

passive segment는 일반적으로 passive 상태 코드로 생성되어, 좌석 재고를 차감하는 능동 판매(sell) 메시지를 보내지 않고도 GDS가 발권 및 문서화를 위해 여정을 표시하도록 한다. 주로 GDS 외부에서 이루어진 예약을 발권하거나, 운임 구성을 위해 완전한 여정을 구성하거나, 항공사 보고 목적으로 사용된다. passive segment의 오용(예: 발권 회피)은 GDS와 항공사에 의해 단속되며, ARNK는 지상 구간 공백을 나타내는 관련 비항공 자리표시자(placeholder)다.

**Aliases:** `Passive Booking`, `Informational Segment`, `Ghost Segment`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Sabre | `Passive Segment / GK status` | same | Sabre uses passive status codes such as GK to add informational segments that do not access inventory |
| Amadeus | `Passive Segment` | same | Amadeus supports passive segments for ticketing of externally confirmed space |

# Related
- [Segment](/air/air-ops/segment.md) — broader
- [ARNK](/air/air-ops/arnk.md) — related
- [PNR](/air/air-ops/pnr.md) — related
- [Ticketing Time Limit](/air/air-ticket/ticketing-time-limit.md) — related

# Distinctions
- **Passive Segment** vs [ARNK](/air/air-ops/arnk.md) — A passive segment is an informational air segment that does not access inventory, whereas ARNK is a non-air placeholder marking a surface (non-flown) gap in the itinerary.
- **Passive Segment** vs [Married Segment](/air/air-ops/married-segment.md) — A passive segment holds no live inventory, while married segments are active inventory-controlled connections sold and managed as a unit.
- **Passive Segment** vs [Open Segment](/air/air-ops/open-segment.md) — A Passive Segment is a non-active segment created to mirror a booking confirmed elsewhere (e.g., for ticketing), holding no live inventory; an Open Segment is undated and unconfirmed by design rather than a copy of an external confirmation.

# Citations
[1] [Sabre — Sabre Format Finder — Passive Segments](https://developer.sabre.com/docs/soap_apis/management/itinerary/Add_Passive_Segment)
[2] Amadeus — Amadeus Functional Documentation — Passive Segments
