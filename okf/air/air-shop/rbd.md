---
type: Code
title: RBD
description: 'An RBD (Reservation Booking Designator) is a single-letter code that identifies the booking class in which a seat is sold and inventory is controlled on a flight. Each RBD maps to a fare and a level of inventory, distinct from the physical cabin (First, Business, Economy).'
tags:
  - air-shop
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: rbd
vertical: air
category: air-shop
conceptType: code
status: active
abbreviation: RBD
term_ko: 예약 등급 지정자 (RBD)
definition_ko: 'RBD(Reservation Booking Designator, 예약 등급 지정자)는 항공편에서 좌석이 판매되고 재고가 관리되는 예약 등급을 식별하는 한 글자 코드이다. 각 RBD는 운임 및 재고 수준에 매핑되며, 물리적 객실 등급(First, Business, Economy)과는 구별된다.'
longDef: 'RBDs are single alphabetic characters (for example F, J, Y, B, M, Q) that airlines use to segment a cabin into multiple priced inventory buckets for revenue management. The fare basis code references an RBD as its prime/booking code, and availability is published per RBD. Several different RBDs typically exist within one physical cabin, allowing the carrier to sell the same cabin at different fare levels and to control how many seats are released to each price point.'
longDef_ko: 'RBD는 한 글자의 알파벳 문자(예: F, J, Y, B, M, Q)로, 항공사가 수익 관리를 위해 하나의 객실 등급을 여러 가격대의 재고 버킷으로 세분화하는 데 사용한다. 운임 기준 코드(fare basis code)는 RBD를 주요/예약 코드로 참조하며, 가용성은 RBD별로 공시된다. 일반적으로 하나의 물리적 객실 등급 안에 여러 RBD가 존재하여, 항공사는 동일한 객실을 서로 다른 운임 수준으로 판매하고 각 가격대에 배정되는 좌석 수를 제어할 수 있다.'
standardBody: IATA
aliases:
  - Reservation Booking Designator
  - Booking Class
  - Booking Code
  - Class of Service
providerTerms:
  - provider: Sabre
    term: Class of Service / Booking Class
    context: Sabre refers to the single-letter inventory code as the class of service.
    context_ko: Sabre는 한 글자 재고 코드를 class of service(서비스 등급)로 지칭한다.
    relationship: same
  - provider: Amadeus
    term: Booking Class
    context: Amadeus uses booking class for the RBD letter controlling inventory.
    context_ko: Amadeus는 재고를 제어하는 RBD 문자를 booking class(예약 등급)로 칭한다.
    relationship: same
relationships:
  - type: related
    targetTerm: Availability
  - type: related
    targetTerm: Fare Basis Code
  - type: related
    targetTerm: Fare Family
  - type: related
    targetTerm: Passenger Type Code
distinctions:
  - targetTerm: Fare Basis Code
    explanation: 'The RBD is the single booking-class letter; the fare basis code is the longer alphanumeric string identifying the full fare, usually starting with the RBD.'
    explanation_ko: 'RBD는 한 글자의 예약 등급 문자이고, 운임 기준 코드는 전체 운임을 식별하는 더 긴 영숫자 문자열로 보통 해당 RBD로 시작한다.'
  - targetTerm: Availability
    explanation: RBD is the class identifier; availability is the seat count sellable in that RBD.
    explanation_ko: 'RBD는 등급 식별자이고, 가용성은 해당 RBD에서 판매 가능한 좌석 수이다.'
sources:
  - name: AIRIMP (ATA/IATA Reservations Interline Message Procedures)
    org: IATA
    version: ''
    section: ''
    url: ''
  - name: ATPCO Fares data documentation
    org: ATPCO
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 30V18a3 3 0 016 0v9h8a3 3 0 013 3v6"/><path d="M14 33h17"/><path d="M14 30h-2a2 2 0 00-2 2v6"/><circle cx="34" cy="15" r="7"/><path d="M32 18v-6h2.5a1.5 1.5 0 010 3H32m2 0l2.5 3"/></svg>
---

> An RBD (Reservation Booking Designator) is a single-letter code that identifies the booking class in which a seat is sold and inventory is controlled on a flight. Each RBD maps to a fare and a level of inventory, distinct from the physical cabin (First, Business, Economy).

RBDs are single alphabetic characters (for example F, J, Y, B, M, Q) that airlines use to segment a cabin into multiple priced inventory buckets for revenue management. The fare basis code references an RBD as its prime/booking code, and availability is published per RBD. Several different RBDs typically exist within one physical cabin, allowing the carrier to sell the same cabin at different fare levels and to control how many seats are released to each price point.

**한국어 / Korean** — **예약 등급 지정자 (RBD)** — RBD(Reservation Booking Designator, 예약 등급 지정자)는 항공편에서 좌석이 판매되고 재고가 관리되는 예약 등급을 식별하는 한 글자 코드이다. 각 RBD는 운임 및 재고 수준에 매핑되며, 물리적 객실 등급(First, Business, Economy)과는 구별된다.

RBD는 한 글자의 알파벳 문자(예: F, J, Y, B, M, Q)로, 항공사가 수익 관리를 위해 하나의 객실 등급을 여러 가격대의 재고 버킷으로 세분화하는 데 사용한다. 운임 기준 코드(fare basis code)는 RBD를 주요/예약 코드로 참조하며, 가용성은 RBD별로 공시된다. 일반적으로 하나의 물리적 객실 등급 안에 여러 RBD가 존재하여, 항공사는 동일한 객실을 서로 다른 운임 수준으로 판매하고 각 가격대에 배정되는 좌석 수를 제어할 수 있다.

**Aliases:** `Reservation Booking Designator`, `Booking Class`, `Booking Code`, `Class of Service`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Sabre | `Class of Service / Booking Class` | same | Sabre refers to the single-letter inventory code as the class of service. |
| Amadeus | `Booking Class` | same | Amadeus uses booking class for the RBD letter controlling inventory. |

# Related
- [Availability](/air/air-shop/availability.md) — related
- [Fare Basis Code](/air/air-shop/fare-basis-code.md) — related
- [Fare Family](/air/air-shop/fare-family.md) — related
- [Passenger Type Code](/common/customer/passenger-type-code.md) — related

# Distinctions
- **RBD** vs [Fare Basis Code](/air/air-shop/fare-basis-code.md) — The RBD is the single booking-class letter; the fare basis code is the longer alphanumeric string identifying the full fare, usually starting with the RBD.
- **RBD** vs [Availability](/air/air-shop/availability.md) — RBD is the class identifier; availability is the seat count sellable in that RBD.

# Citations
[1] IATA — AIRIMP (ATA/IATA Reservations Interline Message Procedures)
[2] ATPCO — ATPCO Fares data documentation
