---
type: Process
title: Origin & Destination Control (O&D Control)
description: 'Origin & Destination Control (O&D control) is a network revenue-management method that values each seat by the contribution of the passenger''s full origin-to-destination itinerary rather than by individual leg, so the system can prefer a connecting passenger worth more across the network over a higher local fare on a single leg. It is the basis for itinerary-aware (married-segment) availability.'
tags:
  - air-shop
  - active
timestamp: '2026-06-17T00:00:00Z'
id: origin-destination-control
category: air-shop
conceptType: process
status: active
abbreviation: O&D Control
term_ko: O&D 통제 (Origin & Destination Control)
definition_ko: Origin & Destination Control(O&D 통제)은 각 좌석을 개별 leg가 아니라 승객의 전체 출발지-도착지 여정의 기여도로 평가하는 네트워크 revenue management 방법이다. 따라서 시스템은 단일 leg의 더 높은 로컬 운임보다 네트워크 전체에서 더 가치 있는 연결 승객을 선호할 수 있다. 여정 인식(married-segment) availability의 기반이다.
longDef: 'Leg-based revenue management optimizes each flight in isolation and can accept a high local fare that blocks a more valuable connecting itinerary using the same seat. O&D control instead measures whether an itinerary''s fare clears the combined marginal value (bid prices) of every leg it traverses, optimizing total network revenue. Techniques include virtual nesting (mapping O&D fares into a leg''s value buckets) and full network bid-price control. Carriers report meaningful revenue gains (commonly cited in the low single-digit percent range) from O&D over leg control. Operationally it underpins seamless/dynamic availability and married-segment logic, where availability for a through O&D may differ from the availability of its individual legs sold locally.'
longDef_ko: 'Leg 기반 revenue management는 각 항공편을 개별적으로 최적화하여, 동일한 좌석을 쓰는 더 가치 있는 연결 여정을 막는 높은 로컬 운임을 수락할 수 있다. O&D 통제는 대신 여정의 운임이 그것이 거치는 모든 leg의 결합 한계 가치(bid price)를 넘는지를 측정하여 네트워크 총수익을 최적화한다. 기법으로는 virtual nesting(O&D 운임을 leg의 가치 버킷에 매핑)과 전체 네트워크 bid-price 통제가 있다. 항공사들은 leg 통제 대비 O&D로 의미 있는 수익 증대(흔히 한 자릿수 초반 퍼센트 범위로 인용됨)를 보고한다. 운영상으로는 seamless/dynamic availability와 married-segment 로직의 기반이 되며, 통과(through) O&D에 대한 availability가 로컬로 판매되는 개별 leg의 availability와 다를 수 있다.'
aliases:
  - OD Control
  - Network Revenue Management
  - Origin-Destination Control
  - O&D Revenue Management
providerTerms:
  - provider: Sabre
    term: O&D Control / Married Segment Control
    context: Sabre availability and RM tooling implements O&D-based seat valuation and married-segment availability.
    context_ko: Sabre의 availability 및 RM 도구는 O&D 기반 좌석 가치 평가와 married-segment availability를 구현한다.
    relationship: same
relationships:
  - type: broader
    targetTerm: Revenue Management
  - type: related
    targetTerm: Bid Price
  - type: related
    targetTerm: Origin & Destination
  - type: related
    targetTerm: Married Segment
  - type: related
    targetTerm: Availability
distinctions:
  - targetTerm: Origin & Destination
    explanation: Origin & Destination is the geographic point-pair (the market unit); O&D control is the revenue-management technique that values seats over that full O&D rather than per leg.
    explanation_ko: 'Origin & Destination은 지리적 지점 쌍(시장 단위)이고, O&D control은 좌석을 leg 단위가 아니라 그 전체 O&D에 걸쳐 평가하는 revenue management 기법이다.'
  - targetTerm: Married Segment
    explanation: A married segment is the booking-side rule that ties connecting segments so they cannot be split; O&D control is the RM rationale that produces and prices those itinerary-level availabilities.
    explanation_ko: 'Married segment는 연결 세그먼트를 묶어 분리하지 못하게 하는 booking 측 규칙이고, O&D control은 그러한 여정 단위 availability를 산출하고 가격책정하는 RM 논리이다.'
sources:
  - org: Journal of Revenue and Pricing Management (Springer)
    name: Unlocking the value from origin and destination revenue management
    version: ''
    section: ''
    url: ''
  - org: MIT (Peter Belobaba)
    name: 'Network Revenue Management: O&D Control'
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="24" r="3"/><circle cx="24" cy="11" r="3"/><circle cx="24" cy="37" r="3"/><circle cx="39" cy="24" r="3"/><path d="M12 24h24"/><path d="M11 22l11-9M37 22L26 13M11 26l11 9M37 26L26 35"/></svg>
---

> Origin & Destination Control (O&D control) is a network revenue-management method that values each seat by the contribution of the passenger's full origin-to-destination itinerary rather than by individual leg, so the system can prefer a connecting passenger worth more across the network over a higher local fare on a single leg. It is the basis for itinerary-aware (married-segment) availability.

Leg-based revenue management optimizes each flight in isolation and can accept a high local fare that blocks a more valuable connecting itinerary using the same seat. O&D control instead measures whether an itinerary's fare clears the combined marginal value (bid prices) of every leg it traverses, optimizing total network revenue. Techniques include virtual nesting (mapping O&D fares into a leg's value buckets) and full network bid-price control. Carriers report meaningful revenue gains (commonly cited in the low single-digit percent range) from O&D over leg control. Operationally it underpins seamless/dynamic availability and married-segment logic, where availability for a through O&D may differ from the availability of its individual legs sold locally.

**한국어 / Korean** — **O&D 통제 (Origin & Destination Control)** — Origin & Destination Control(O&D 통제)은 각 좌석을 개별 leg가 아니라 승객의 전체 출발지-도착지 여정의 기여도로 평가하는 네트워크 revenue management 방법이다. 따라서 시스템은 단일 leg의 더 높은 로컬 운임보다 네트워크 전체에서 더 가치 있는 연결 승객을 선호할 수 있다. 여정 인식(married-segment) availability의 기반이다.

Leg 기반 revenue management는 각 항공편을 개별적으로 최적화하여, 동일한 좌석을 쓰는 더 가치 있는 연결 여정을 막는 높은 로컬 운임을 수락할 수 있다. O&D 통제는 대신 여정의 운임이 그것이 거치는 모든 leg의 결합 한계 가치(bid price)를 넘는지를 측정하여 네트워크 총수익을 최적화한다. 기법으로는 virtual nesting(O&D 운임을 leg의 가치 버킷에 매핑)과 전체 네트워크 bid-price 통제가 있다. 항공사들은 leg 통제 대비 O&D로 의미 있는 수익 증대(흔히 한 자릿수 초반 퍼센트 범위로 인용됨)를 보고한다. 운영상으로는 seamless/dynamic availability와 married-segment 로직의 기반이 되며, 통과(through) O&D에 대한 availability가 로컬로 판매되는 개별 leg의 availability와 다를 수 있다.

**Aliases:** `OD Control`, `Network Revenue Management`, `Origin-Destination Control`, `O&D Revenue Management`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Sabre | `O&D Control / Married Segment Control` | same | Sabre availability and RM tooling implements O&D-based seat valuation and married-segment availability. |

# Related
- [Revenue Management](/air-shop/revenue-management.md) — broader
- [Bid Price](/air-shop/bid-price.md) — related
- [Origin & Destination](/air-shop/origin-destination.md) — related
- [Married Segment](/air-ops/married-segment.md) — related
- [Availability](/air-shop/availability.md) — related

# Distinctions
- **Origin & Destination Control (O&D Control)** vs [Origin & Destination](/air-shop/origin-destination.md) — Origin & Destination is the geographic point-pair (the market unit); O&D control is the revenue-management technique that values seats over that full O&D rather than per leg.
- **Origin & Destination Control (O&D Control)** vs [Married Segment](/air-ops/married-segment.md) — A married segment is the booking-side rule that ties connecting segments so they cannot be split; O&D control is the RM rationale that produces and prices those itinerary-level availabilities.

# Citations
[1] Journal of Revenue and Pricing Management (Springer) — Unlocking the value from origin and destination revenue management
[2] MIT (Peter Belobaba) — Network Revenue Management: O&D Control
