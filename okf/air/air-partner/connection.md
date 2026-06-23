---
type: Business Term
title: Connection
description: 'A point in an itinerary where a passenger changes from one flight to another to continue toward the final destination, as opposed to a nonstop or direct journey. A valid connection requires at least the minimum connecting time (MCT) at the connecting airport between the arriving and departing flights.'
tags:
  - air-partner
  - active
timestamp: '2026-06-17T00:00:00Z'
id: connection
vertical: air
category: air-partner
conceptType: business-term
status: active
term_ko: 연결편(커넥션)
definition_ko: '직항(nonstop)이나 직행(direct) 여정과 달리, 승객이 최종 목적지로 계속 가기 위해 한 항공편에서 다른 항공편으로 갈아타는 여정상의 지점. 유효한 연결은 도착 항공편과 출발 항공편 사이에 연결 공항에서 최소한 최소 연결 시간(MCT) 이상을 필요로 한다.'
longDef: 'Connections may be "online" (both flights on the same carrier) or "interline"/"codeshare" (different carriers), the latter relying on interline or codeshare agreements for through-ticketing and baggage handling. Connection points are reflected in the itinerary as separate segments rather than a stopover when the change is treated as transit; whether two segments are a connection or a stopover depends on the time and fare rules. The MCT defines the shortest legal gap, and connecting traffic is what hub-and-spoke networks are built to generate. A through fare typically prices the connecting journey as one product.'
longDef_ko: '연결은 "online"(두 항공편이 같은 항공사)일 수도, "interline"/"codeshare"(서로 다른 항공사)일 수도 있으며, 후자는 일관 발권과 수하물 처리를 위해 인터라인 또는 공동운항 협정에 의존한다. 갈아타기가 통과(transit)로 취급되면 연결 지점은 스톱오버(stopover)가 아니라 별개의 세그먼트(segment)로 여정에 반영되며, 두 세그먼트가 연결인지 스톱오버인지는 시간과 운임 규정에 따라 달라진다. MCT는 법적으로 허용되는 최소 간격을 정의하고, 연결 운송은 허브 앤 스포크 네트워크가 만들어내도록 설계된 대상이다. 일관 운임은 일반적으로 연결 여정을 하나의 상품으로 책정한다.'
aliases:
  - Connecting Flight
  - Connecting Itinerary
  - Online Connection
  - Interline Connection
providerTerms:
  - provider: IATA
    term: 'Minimum Connecting Time (MCT, SSIM Chapter 8)'
    context: IATA SSIM Chapter 8 defines the MCT standard—the shortest interval to transfer a passenger and bags between flights at a point—which GDSs apply to determine whether a connection is bookable as a valid connection.
    context_ko: 'IATA SSIM 8장은 한 지점에서 승객과 수하물을 항공편 간 환승하는 데 필요한 최소 시간(MCT) 표준을 정의하며, GDS는 이를 적용해 해당 연결이 유효한 연결편으로 예약 가능한지 판단한다.'
    relationship: related
relationships:
  - type: related
    targetTerm: MCT
  - type: related
    targetTerm: Segment
  - type: related
    targetTerm: Married Segment
  - type: related
    targetTerm: Hub-and-Spoke
  - type: related
    targetTerm: Through Fare
  - type: related
    targetTerm: Interline
distinctions:
  - targetTerm: MCT
    explanation: A connection is the act of changing flights toward a destination; MCT is the minimum time that must elapse at the connecting airport for that connection to be considered valid.
    explanation_ko: 'connection은 목적지를 향해 항공편을 갈아타는 행위이고, MCT는 그 연결이 유효하다고 인정되기 위해 연결 공항에서 경과해야 하는 최소 시간이다.'
  - targetTerm: Segment
    explanation: A segment is a single marketed flight portion of an itinerary; a connection is the relationship between two consecutive segments where the passenger transfers between flights.
    explanation_ko: '세그먼트는 여정에서 판매되는 단일 항공편 부분이고, connection은 승객이 두 항공편 사이를 환승하는, 연속된 두 세그먼트 간의 관계다.'
  - targetTerm: Hub-and-Spoke
    explanation: 'Hub-and-spoke is the overall network strategy of funneling traffic through hubs; a connection is the individual passenger event of changing flights, which the hub model is designed to generate efficiently.'
    explanation_ko: '허브 앤 스포크는 운송을 허브로 모으는 전체 네트워크 전략이고, connection은 항공편을 갈아타는 개별 승객 단위의 사건으로, 허브 모델은 이를 효율적으로 만들어내도록 설계된다.'
  - targetTerm: Missed Connection
    explanation: A Connection is the operational/scheduling fact of changing between segments of a journey; Missed Connection is the insurance benefit that pays catch-up costs when a delay breaks that connection.
    explanation_ko: 'Connection은 여정의 구간을 갈아타는 운항·스케줄상의 사실이고, Missed Connection은 지연으로 그 연결이 깨졌을 때 따라잡기 비용을 지급하는 보험 보장이다.'
sources:
  - name: Standard Schedules Information Manual (SSIM)
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/standard-schedules-information/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="12" r="3"/><circle cx="24" cy="24" r="4"/><circle cx="40" cy="36" r="3"/><line x1="10.5" y1="13.8" x2="21" y2="21.5"/><line x1="27" y1="26.5" x2="37.5" y2="34.2"/><path d="M24 20 a4 4 0 0 1 0 8"/></svg>
---

> A point in an itinerary where a passenger changes from one flight to another to continue toward the final destination, as opposed to a nonstop or direct journey. A valid connection requires at least the minimum connecting time (MCT) at the connecting airport between the arriving and departing flights.

Connections may be "online" (both flights on the same carrier) or "interline"/"codeshare" (different carriers), the latter relying on interline or codeshare agreements for through-ticketing and baggage handling. Connection points are reflected in the itinerary as separate segments rather than a stopover when the change is treated as transit; whether two segments are a connection or a stopover depends on the time and fare rules. The MCT defines the shortest legal gap, and connecting traffic is what hub-and-spoke networks are built to generate. A through fare typically prices the connecting journey as one product.

**한국어 / Korean** — **연결편(커넥션)** — 직항(nonstop)이나 직행(direct) 여정과 달리, 승객이 최종 목적지로 계속 가기 위해 한 항공편에서 다른 항공편으로 갈아타는 여정상의 지점. 유효한 연결은 도착 항공편과 출발 항공편 사이에 연결 공항에서 최소한 최소 연결 시간(MCT) 이상을 필요로 한다.

연결은 "online"(두 항공편이 같은 항공사)일 수도, "interline"/"codeshare"(서로 다른 항공사)일 수도 있으며, 후자는 일관 발권과 수하물 처리를 위해 인터라인 또는 공동운항 협정에 의존한다. 갈아타기가 통과(transit)로 취급되면 연결 지점은 스톱오버(stopover)가 아니라 별개의 세그먼트(segment)로 여정에 반영되며, 두 세그먼트가 연결인지 스톱오버인지는 시간과 운임 규정에 따라 달라진다. MCT는 법적으로 허용되는 최소 간격을 정의하고, 연결 운송은 허브 앤 스포크 네트워크가 만들어내도록 설계된 대상이다. 일관 운임은 일반적으로 연결 여정을 하나의 상품으로 책정한다.

**Aliases:** `Connecting Flight`, `Connecting Itinerary`, `Online Connection`, `Interline Connection`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| IATA | `Minimum Connecting Time (MCT, SSIM Chapter 8)` | related | IATA SSIM Chapter 8 defines the MCT standard—the shortest interval to transfer a passenger and bags between flights at a point—which GDSs apply to determine whether a connection is bookable as a valid connection. |

# Related
- [MCT](/air/air-ops/mct.md) — related
- [Segment](/air/air-ops/segment.md) — related
- [Married Segment](/air/air-ops/married-segment.md) — related
- [Hub-and-Spoke](/air/air-partner/hub-and-spoke.md) — related
- [Through Fare](/air/air-partner/through-fare.md) — related
- [Interline](/air/air-partner/interline.md) — related

# Distinctions
- **Connection** vs [MCT](/air/air-ops/mct.md) — A connection is the act of changing flights toward a destination; MCT is the minimum time that must elapse at the connecting airport for that connection to be considered valid.
- **Connection** vs [Segment](/air/air-ops/segment.md) — A segment is a single marketed flight portion of an itinerary; a connection is the relationship between two consecutive segments where the passenger transfers between flights.
- **Connection** vs [Hub-and-Spoke](/air/air-partner/hub-and-spoke.md) — Hub-and-spoke is the overall network strategy of funneling traffic through hubs; a connection is the individual passenger event of changing flights, which the hub model is designed to generate efficiently.
- **Connection** vs [Missed Connection](/common/insurance/missed-connection.md) — A Connection is the operational/scheduling fact of changing between segments of a journey; Missed Connection is the insurance benefit that pays catch-up costs when a delay breaks that connection.

# Citations
[1] [IATA — Standard Schedules Information Manual (SSIM)](https://www.iata.org/en/publications/manuals/standard-schedules-information/)
