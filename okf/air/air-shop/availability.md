---
type: Business Term
title: Availability
description: 'Availability is the count of bookable seats an airline is willing to sell on a given flight, displayed per booking class (RBD) for a specific date and origin-destination. It tells a seller how many seats can be sold in each class at the moment of the query, rather than the physical capacity of the aircraft.'
tags:
  - air-shop
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: availability
vertical: air
category: air-shop
conceptType: business-term
status: active
term_ko: 좌석 가용성
definition_ko: 'Availability(좌석 가용성)는 항공사가 특정 항공편에서 판매하고자 하는 예약 가능 좌석 수로, 특정 날짜와 출발-도착지에 대해 예약 등급(RBD)별로 표시된다. 이는 항공기의 물리적 좌석 수가 아니라, 조회 시점에 각 등급에서 판매 가능한 좌석 수를 판매자에게 알려준다.'
longDef: 'Availability is returned in response to an availability request and is expressed as a numeric value per RBD (for example F4 J9 Y9 B7), where the number indicates how many seats may still be sold in that class. Carriers may return availability from a static cache (AVS-based), from a real-time link to the inventory system, or via dynamic/seamless availability methods that may also account for married-segment logic. Availability differs from inventory and from the schedule: the schedule defines that a flight operates, while availability defines whether and how many seats can currently be sold per class.'
longDef_ko: 'Availability는 가용성 요청에 대한 응답으로 반환되며, RBD별 숫자 값(예: F4 J9 Y9 B7)으로 표현된다. 여기서 숫자는 해당 등급에서 추가로 판매 가능한 좌석 수를 나타낸다. 항공사는 정적 캐시(AVS 기반), 재고 시스템과의 실시간 연동, 또는 결합 구간(married-segment) 로직을 함께 반영하는 동적/심리스(seamless) 가용성 방식을 통해 가용성을 반환할 수 있다. Availability는 재고(inventory) 및 스케줄과 구별된다. 스케줄이 항공편의 운항 여부를 정의하는 반면, 가용성은 현재 등급별로 좌석을 판매할 수 있는지 그리고 몇 석을 판매할 수 있는지를 정의한다.'
standardBody: IATA
aliases:
  - Seat Availability
  - Air Availability
  - AVS
providerTerms:
  - provider: Amadeus
    term: Air Availability / Schedule and Availability
    context: 'Amadeus distinguishes neutral, schedule, and seamless (carrier-linked) availability displays.'
    context_ko: 'Amadeus는 중립(neutral), 스케줄, 심리스(항공사 연동) 가용성 조회를 구분한다.'
    relationship: same
  - provider: Sabre
    term: Air Availability / Bargain Finder Max
    context: Sabre returns class-by-class seat availability in availability and shopping responses.
    context_ko: Sabre는 가용성 및 쇼핑 응답에서 등급별 좌석 가용성을 반환한다.
    relationship: same
relationships:
  - type: related
    targetTerm: RBD
  - type: related
    targetTerm: Origin & Destination
  - type: related
    targetTerm: Married Segment
  - type: related
    targetTerm: Overbooking
  - type: related
    targetTerm: Schedule Change
distinctions:
  - targetTerm: RBD
    explanation: RBD is the class code; availability is the number of seats sellable in that RBD.
    explanation_ko: 'RBD는 등급 코드이고, 가용성은 해당 RBD에서 판매 가능한 좌석 수이다.'
  - targetTerm: Overbooking
    explanation: Overbooking can make availability exceed physical capacity by selling above the seat count.
    explanation_ko: Overbooking은 실제 좌석 수를 초과해 판매함으로써 가용성이 물리적 좌석 수를 넘어서게 만들 수 있다.
  - targetTerm: ARI
    explanation: Availability is just the 'A' (whether a room can be sold for given dates); ARI bundles availability together with rates and inventory counts.
    explanation_ko: 'Availability(가용성)는 ARI 중 ''A''(특정 날짜에 객실을 판매할 수 있는지 여부)만을 가리키며, ARI는 가용성을 요금 및 인벤토리 수량과 함께 묶은 개념이다.'
  - targetTerm: Availability Status (AVS)
    explanation: 'Availability is the per-class count of bookable seats a seller sees; AVS is the specific legacy teletype mechanism that pushes status (and, as NAVS, numeric seat-count) updates so that remote systems can build and maintain those availability displays.'
    explanation_ko: 'Availability는 판매자가 보는 클래스별 예약 가능 좌석 수이고, AVS는 원격 시스템이 그 availability 표시를 구축·유지할 수 있도록 상태(NAVS의 경우 수치화된 좌석 수) 갱신을 푸시하는 구체적인 레거시 teletype 메커니즘이다.'
  - targetTerm: Booking Limit
    explanation: Availability is what the seller sees per class at query time; the booking limit is the internal control whose remaining headroom produces that availability.
    explanation_ko: 'Availability는 조회 시점에 판매자가 클래스별로 보는 값이고, booking limit은 그 잔여 여유분이 해당 availability를 만들어내는 내부 통제값이다.'
  - targetTerm: Offer
    explanation: 'Availability indicates whether seats/classes are sellable; an Offer is a constructed, priced bundle proposal built on top of availability.'
    explanation_ko: '가용성(Availability)은 좌석/등급의 판매 가능 여부를 나타내고, 오퍼는 그 가용성을 토대로 구성하여 가격을 책정한 묶음 제안이다.'
  - targetTerm: Seat Map
    explanation: Availability tells whether seats can be sold in a given booking class (RBD) at the flight/cabin level; a Seat Map shows the physical layout and which individual seats are open for assignment. Availability drives selling; seat map drives seat selection.
    explanation_ko: 'Availability는 특정 예약 클래스(RBD)에서 항공편/cabin 단위로 좌석 판매 가능 여부를 알려주고, Seat Map은 물리적 배치와 어떤 개별 좌석을 배정할 수 있는지를 보여준다. availability는 판매를, seat map은 좌석 선택을 좌우한다.'
  - targetTerm: Shopping API
    explanation: 'Availability indicates whether seats/classes are sellable; a Shopping API returns constructed, priced Offers built on top of that availability.'
    explanation_ko: '가용성(Availability)은 좌석/등급의 판매 가능 여부를 나타내고, 쇼핑 API는 그 가용성을 토대로 구성하여 가격을 매긴 오퍼를 반환한다.'
sources:
  - name: AIRIMP (ATA/IATA Reservations Interline Message Procedures)
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/airline-industry-reservations-interline-message-procedures-airimp/'
    tier: association
  - name: Amadeus Air documentation — Availability
    org: Amadeus
    version: ''
    section: ''
    url: 'https://amadeus.com/en/portfolio/airlines/numeric-availability'
    tier: vendor-doc
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="9" width="34" height="30" rx="3"/><line x1="7" y1="17" x2="41" y2="17"/><line x1="15" y1="6" x2="15" y2="12"/><line x1="33" y1="6" x2="33" y2="12"/><path d="M16 28l5 5 11-11"/></svg>
---

> Availability is the count of bookable seats an airline is willing to sell on a given flight, displayed per booking class (RBD) for a specific date and origin-destination. It tells a seller how many seats can be sold in each class at the moment of the query, rather than the physical capacity of the aircraft.

Availability is returned in response to an availability request and is expressed as a numeric value per RBD (for example F4 J9 Y9 B7), where the number indicates how many seats may still be sold in that class. Carriers may return availability from a static cache (AVS-based), from a real-time link to the inventory system, or via dynamic/seamless availability methods that may also account for married-segment logic. Availability differs from inventory and from the schedule: the schedule defines that a flight operates, while availability defines whether and how many seats can currently be sold per class.

**한국어 / Korean** — **좌석 가용성** — Availability(좌석 가용성)는 항공사가 특정 항공편에서 판매하고자 하는 예약 가능 좌석 수로, 특정 날짜와 출발-도착지에 대해 예약 등급(RBD)별로 표시된다. 이는 항공기의 물리적 좌석 수가 아니라, 조회 시점에 각 등급에서 판매 가능한 좌석 수를 판매자에게 알려준다.

Availability는 가용성 요청에 대한 응답으로 반환되며, RBD별 숫자 값(예: F4 J9 Y9 B7)으로 표현된다. 여기서 숫자는 해당 등급에서 추가로 판매 가능한 좌석 수를 나타낸다. 항공사는 정적 캐시(AVS 기반), 재고 시스템과의 실시간 연동, 또는 결합 구간(married-segment) 로직을 함께 반영하는 동적/심리스(seamless) 가용성 방식을 통해 가용성을 반환할 수 있다. Availability는 재고(inventory) 및 스케줄과 구별된다. 스케줄이 항공편의 운항 여부를 정의하는 반면, 가용성은 현재 등급별로 좌석을 판매할 수 있는지 그리고 몇 석을 판매할 수 있는지를 정의한다.

**Aliases:** `Seat Availability`, `Air Availability`, `AVS`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Amadeus | `Air Availability / Schedule and Availability` | same | Amadeus distinguishes neutral, schedule, and seamless (carrier-linked) availability displays. |
| Sabre | `Air Availability / Bargain Finder Max` | same | Sabre returns class-by-class seat availability in availability and shopping responses. |

# Related
- [RBD](/air/air-shop/rbd.md) — related
- [Origin & Destination](/air/air-shop/origin-destination.md) — related
- [Married Segment](/air/air-ops/married-segment.md) — related
- [Overbooking](/air/air-shop/overbooking.md) — related
- [Schedule Change](/air/air-partner/schedule-change.md) — related

# Distinctions
- **Availability** vs [RBD](/air/air-shop/rbd.md) — RBD is the class code; availability is the number of seats sellable in that RBD.
- **Availability** vs [Overbooking](/air/air-shop/overbooking.md) — Overbooking can make availability exceed physical capacity by selling above the seat count.
- **Availability** vs [ARI](/lodging/hotel-dist/ari.md) — Availability is just the 'A' (whether a room can be sold for given dates); ARI bundles availability together with rates and inventory counts.
- **Availability** vs [Availability Status (AVS)](/air/air-shop/availability-status.md) — Availability is the per-class count of bookable seats a seller sees; AVS is the specific legacy teletype mechanism that pushes status (and, as NAVS, numeric seat-count) updates so that remote systems can build and maintain those availability displays.
- **Availability** vs [Booking Limit](/air/air-shop/booking-limit.md) — Availability is what the seller sees per class at query time; the booking limit is the internal control whose remaining headroom produces that availability.
- **Availability** vs [Offer](/common/standards/offer.md) — Availability indicates whether seats/classes are sellable; an Offer is a constructed, priced bundle proposal built on top of availability.
- **Availability** vs [Seat Map](/air/air-ops/seat-map.md) — Availability tells whether seats can be sold in a given booking class (RBD) at the flight/cabin level; a Seat Map shows the physical layout and which individual seats are open for assignment. Availability drives selling; seat map drives seat selection.
- **Availability** vs [Shopping API](/common/standards/shopping-api.md) — Availability indicates whether seats/classes are sellable; a Shopping API returns constructed, priced Offers built on top of that availability.

# Citations
[1] [IATA — AIRIMP (ATA/IATA Reservations Interline Message Procedures)](https://www.iata.org/en/publications/manuals/airline-industry-reservations-interline-message-procedures-airimp/)
[2] [Amadeus — Amadeus Air documentation — Availability](https://amadeus.com/en/portfolio/airlines/numeric-availability)
