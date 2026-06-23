---
type: Standard Term
title: Seat Map
description: 'A Seat Map is the graphical or structured representation of an aircraft cabin layout for a specific flight and cabin, showing each seat''s position, type and current availability so passengers can select a seat. It is requested and returned per flight segment, reflecting the seating configuration and any chargeable seat attributes.'
tags:
  - air-ops
  - active
  - OpenTravel Alliance
timestamp: '2026-06-17T00:00:00Z'
id: seat-map
vertical: air
category: air-ops
conceptType: standard-term
status: active
term_ko: Seat Map (좌석 배치도 / 좌석맵)
definition_ko: 'Seat Map은 특정 항공편과 cabin의 항공기 객실 배치를 그래픽 또는 구조화된 형태로 표현한 것으로, 각 좌석의 위치·유형·현재 가용 여부를 보여 승객이 좌석을 선택할 수 있게 한다. flight segment별로 요청·반환되며 좌석 구성과 유료 좌석 속성을 반영한다.'
longDef: 'Seat maps are exchanged via standardized messages: the OpenTravel OTA_AirSeatMapRQ/RS pair and, in NDC, a SeatAvailability message that returns free and paid seats (the latter as priced offers/CatalogOfferings). A seat map encodes rows and columns, seat characteristics (window/aisle, exit row, bassinet, extra legroom, blocked), occupancy/availability, and price where the seat is an Ancillary Service / EMD-paid item. Carrier configurations vary by aircraft type and version, and the map reflects pre-blocked or already-assigned seats; seat selection results are stored against the PNR segment.'
longDef_ko: 'Seat Map은 표준 메시지로 교환된다. OpenTravel의 OTA_AirSeatMapRQ/RS 쌍, NDC에서는 무료·유료 좌석(유료는 priced offer/CatalogOffering)을 반환하는 SeatAvailability 메시지가 사용된다. seat map은 행·열, 좌석 특성(창측/통로측, 비상구열, bassinet, 추가 legroom, 사용불가), 점유/가용 여부, 그리고 좌석이 Ancillary Service / EMD로 결제되는 경우의 가격을 담는다. 항공기 type·version에 따라 구성이 달라지고 사전 block되거나 이미 배정된 좌석을 반영하며, 좌석 선택 결과는 PNR segment에 저장된다.'
standardBody: OpenTravel Alliance
aliases:
  - Seatmap
  - Seating Chart
  - Seat Availability Map
  - Aircraft Seat Map
providerTerms:
  - provider: OpenTravel Alliance
    term: OTA_AirSeatMapRQ / OTA_AirSeatMapRS
    context: XML request/response messages carrying cabin seat layout and availability per segment.
    context_ko: segment별 cabin 좌석 배치와 가용 여부를 담는 XML 요청/응답 메시지.
    relationship: same
  - provider: Travelport
    term: Seat Map API
    context: Universal API/JSON service returning aircraft seat maps for booking and seat assignment.
    context_ko: 예약 및 좌석 배정을 위해 항공기 seat map을 반환하는 Universal API/JSON 서비스.
    relationship: related
  - provider: Amadeus
    term: SeatMap Display / NDC SeatAvailability
    context: 'Amadeus exposes seat maps via the SeatMap Display API and, in NDC, SeatAvailabilityRQ/RS returning cabin layout, availability and integrated seat fees.'
    context_ko: 'Amadeus는 SeatMap Display API로, NDC에서는 SeatAvailabilityRQ/RS로 cabin layout, availability, 통합 좌석 요금을 반환하며 seat map을 제공한다.'
    relationship: same
  - provider: Sabre
    term: Get Seats / Seat Map API
    context: 'Sabre''s Get Seats (Seat Map) API returns the flight seat map with seat locations, facilities, chargeable/non-chargeable status, availability and pricing.'
    context_ko: 'Sabre의 Get Seats(Seat Map) API는 좌석 위치, 시설, 유료/무료 상태, availability, 가격을 포함한 flight seat map을 반환한다.'
    relationship: same
  - provider: NDC/IATA
    term: SeatAvailabilityRS
    context: 'NDC SeatAvailabilityRS returns the data to construct a seat map on an offer or order, with integrated premium-seat fees and media content.'
    context_ko: 'NDC SeatAvailabilityRS는 offer 또는 order에 대한 seat map 구성 데이터를 반환하며, premium 좌석 요금과 media content가 통합된다.'
    relationship: same
relationships:
  - type: related
    targetTerm: Segment
  - type: related
    targetTerm: Ancillary Service
  - type: related
    targetTerm: EMD
  - type: related
    targetTerm: NDC
  - type: related
    targetTerm: OpenTravel Alliance
distinctions:
  - targetTerm: Availability
    explanation: Availability tells whether seats can be sold in a given booking class (RBD) at the flight/cabin level; a Seat Map shows the physical layout and which individual seats are open for assignment. Availability drives selling; seat map drives seat selection.
    explanation_ko: 'Availability는 특정 예약 클래스(RBD)에서 항공편/cabin 단위로 좌석 판매 가능 여부를 알려주고, Seat Map은 물리적 배치와 어떤 개별 좌석을 배정할 수 있는지를 보여준다. availability는 판매를, seat map은 좌석 선택을 좌우한다.'
  - targetTerm: Seat Reservation
    explanation: A seat map is the visual layout used to select a place; a seat reservation is the resulting bound entitlement to that place on a given train.
    explanation_ko: 'seat map은 좌석을 고르는 시각적 배치도이고, seat reservation은 그 결과로 특정 열차의 좌석에 묶인 권리다.'
sources:
  - org: OpenTravel Alliance
    name: OpenTravel Specifications — OTA_AirSeatMapRQ/RS
    version: ''
    section: ''
    url: 'https://opentravel.org/download-specs/'
  - org: IATA
    name: NDC Implementation Guide — SeatAvailability
    version: ''
    section: ''
    url: 'https://guides.developer.iata.org/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M16 11c-3 5-3 26 0 30M32 11c3 5 3 26 0 30"/><rect x="19" y="15" width="4" height="4" rx="1"/><rect x="25" y="15" width="4" height="4" rx="1"/><rect x="19" y="22" width="4" height="4" rx="1"/><rect x="25" y="22" width="4" height="4" rx="1"/><rect x="19" y="29" width="4" height="4" rx="1"/><rect x="25" y="29" width="4" height="4" rx="1"/></svg>
---

> A Seat Map is the graphical or structured representation of an aircraft cabin layout for a specific flight and cabin, showing each seat's position, type and current availability so passengers can select a seat. It is requested and returned per flight segment, reflecting the seating configuration and any chargeable seat attributes.

Seat maps are exchanged via standardized messages: the OpenTravel OTA_AirSeatMapRQ/RS pair and, in NDC, a SeatAvailability message that returns free and paid seats (the latter as priced offers/CatalogOfferings). A seat map encodes rows and columns, seat characteristics (window/aisle, exit row, bassinet, extra legroom, blocked), occupancy/availability, and price where the seat is an Ancillary Service / EMD-paid item. Carrier configurations vary by aircraft type and version, and the map reflects pre-blocked or already-assigned seats; seat selection results are stored against the PNR segment.

**한국어 / Korean** — **Seat Map (좌석 배치도 / 좌석맵)** — Seat Map은 특정 항공편과 cabin의 항공기 객실 배치를 그래픽 또는 구조화된 형태로 표현한 것으로, 각 좌석의 위치·유형·현재 가용 여부를 보여 승객이 좌석을 선택할 수 있게 한다. flight segment별로 요청·반환되며 좌석 구성과 유료 좌석 속성을 반영한다.

Seat Map은 표준 메시지로 교환된다. OpenTravel의 OTA_AirSeatMapRQ/RS 쌍, NDC에서는 무료·유료 좌석(유료는 priced offer/CatalogOffering)을 반환하는 SeatAvailability 메시지가 사용된다. seat map은 행·열, 좌석 특성(창측/통로측, 비상구열, bassinet, 추가 legroom, 사용불가), 점유/가용 여부, 그리고 좌석이 Ancillary Service / EMD로 결제되는 경우의 가격을 담는다. 항공기 type·version에 따라 구성이 달라지고 사전 block되거나 이미 배정된 좌석을 반영하며, 좌석 선택 결과는 PNR segment에 저장된다.

**Aliases:** `Seatmap`, `Seating Chart`, `Seat Availability Map`, `Aircraft Seat Map`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| OpenTravel Alliance | `OTA_AirSeatMapRQ / OTA_AirSeatMapRS` | same | XML request/response messages carrying cabin seat layout and availability per segment. |
| Travelport | `Seat Map API` | related | Universal API/JSON service returning aircraft seat maps for booking and seat assignment. |
| Amadeus | `SeatMap Display / NDC SeatAvailability` | same | Amadeus exposes seat maps via the SeatMap Display API and, in NDC, SeatAvailabilityRQ/RS returning cabin layout, availability and integrated seat fees. |
| Sabre | `Get Seats / Seat Map API` | same | Sabre's Get Seats (Seat Map) API returns the flight seat map with seat locations, facilities, chargeable/non-chargeable status, availability and pricing. |
| NDC/IATA | `SeatAvailabilityRS` | same | NDC SeatAvailabilityRS returns the data to construct a seat map on an offer or order, with integrated premium-seat fees and media content. |

# Related
- [Segment](/air/air-ops/segment.md) — related
- [Ancillary Service](/air/air-ticket/ancillary-service.md) — related
- [EMD](/air/air-ticket/emd.md) — related
- [NDC](/common/standards/ndc.md) — related
- [OpenTravel Alliance](/common/standards/opentravel-alliance.md) — related

# Distinctions
- **Seat Map** vs [Availability](/air/air-shop/availability.md) — Availability tells whether seats can be sold in a given booking class (RBD) at the flight/cabin level; a Seat Map shows the physical layout and which individual seats are open for assignment. Availability drives selling; seat map drives seat selection.
- **Seat Map** vs [Seat Reservation](/ground/rail/seat-reservation.md) — A seat map is the visual layout used to select a place; a seat reservation is the resulting bound entitlement to that place on a given train.

# Citations
[1] [OpenTravel Alliance — OpenTravel Specifications — OTA_AirSeatMapRQ/RS](https://opentravel.org/download-specs/)
[2] [IATA — NDC Implementation Guide — SeatAvailability](https://guides.developer.iata.org/)
