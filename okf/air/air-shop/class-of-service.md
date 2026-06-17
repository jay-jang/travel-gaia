---
type: Standard Term
title: Class of Service
description: 'Class of Service is the single-letter code identifying the booking inventory class (Reservation Booking Designator) into which a seat is sold, indicating the fare/inventory bucket within a cabin rather than the physical cabin itself. It determines fare eligibility, mileage earning, upgrade, and change/refund conditions associated with the booking.'
tags:
  - air-shop
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: class-of-service
vertical: air
category: air-shop
conceptType: standard-term
status: active
abbreviation: CoS
term_ko: 서비스 등급 (Class of Service)
definition_ko: 'Class of Service는 좌석이 판매되는 예약 인벤토리 클래스(RBD, 예약 부킹 지정자)를 식별하는 한 글자 코드로, 물리적 객실 자체가 아니라 객실 내의 운임/인벤토리 버킷을 나타낸다. 운임 적용 가능 여부, 마일리지 적립, 업그레이드, 변경/환불 조건을 결정한다.'
longDef: 'In airline distribution the term Class of Service is commonly used interchangeably with booking class or RBD: each cabin (Economy, Premium Economy, Business, First) contains multiple lettered classes (e.g., Y, B, M, Q in Economy) that share the same physical seat but carry different fares and conditions. The class of service booked is recorded at the segment level of a PNR and drives downstream pricing, ticketing, and revenue accounting. Usage is overloaded in the industry: some contexts use Class of Service to mean the marketing cabin (Economy vs. Business), so the term is best disambiguated as cabin (physical product) versus booking class/RBD (inventory bucket).'
longDef_ko: '항공 유통에서 Class of Service는 흔히 booking class 또는 RBD와 혼용된다. 각 객실(Economy, Premium Economy, Business, First)에는 동일한 물리적 좌석을 공유하지만 운임과 조건이 다른 여러 문자 클래스(예: Economy의 Y, B, M, Q)가 존재한다. 예약된 class of service는 PNR의 segment 단위에 기록되며 이후의 pricing, 발권, 수입 정산을 좌우한다. 업계에서 의미가 중첩되어 사용되는데, 일부 맥락에서는 Class of Service를 마케팅 객실(Economy 대 Business)을 뜻하는 데 쓰므로, 객실(물리적 상품) 대 booking class/RBD(인벤토리 버킷)로 구분하는 것이 명확하다.'
standardBody: IATA
aliases:
  - Service Class
  - Booking Class
  - Class of Travel
providerTerms:
  - provider: Travelport
    term: Booking Class / RBD (Record 6)
    context: GDS maps each fare to one or more booking-class letters via Record 6 RBD data.
    context_ko: GDS는 Record 6 RBD 데이터를 통해 각 운임을 하나 이상의 booking class 문자에 매핑한다.
    relationship: same
relationships:
  - type: related
    targetTerm: RBD
  - type: related
    targetTerm: Availability
  - type: related
    targetTerm: Fare Basis Code
  - type: related
    targetTerm: Segment
distinctions:
  - targetTerm: RBD
    explanation: 'RBD (Reservation Booking Designator) is the formal name for the inventory class code; Class of Service is the more colloquial term for the same concept, though it is sometimes loosely used to mean the marketing cabin.'
    explanation_ko: 'RBD(Reservation Booking Designator)는 인벤토리 클래스 코드의 공식 명칭이며, Class of Service는 동일 개념을 가리키는 더 구어적 표현이다. 다만 때때로 마케팅 객실을 뜻하는 의미로 느슨하게 쓰이기도 한다.'
sources:
  - org: Travelport
    name: Booking Class & Cabin (RBD) - Record 6
    version: ''
    section: RBD / Booking Class
    url: ''
  - org: IATA
    name: Passenger Fares and Ticketing
    version: ''
    section: Booking class / class of service
    url: 'https://www.iata.org/en/training/subject-areas/fares-ticketing-courses/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="14" width="32" height="20" rx="4"/><line x1="8" y1="24" x2="40" y2="24"/><line x1="20" y1="14" x2="20" y2="34"/><line x1="30" y1="14" x2="30" y2="34"/><circle cx="14" cy="19" r="1.2" fill="currentColor"/></svg>
---

> Class of Service is the single-letter code identifying the booking inventory class (Reservation Booking Designator) into which a seat is sold, indicating the fare/inventory bucket within a cabin rather than the physical cabin itself. It determines fare eligibility, mileage earning, upgrade, and change/refund conditions associated with the booking.

In airline distribution the term Class of Service is commonly used interchangeably with booking class or RBD: each cabin (Economy, Premium Economy, Business, First) contains multiple lettered classes (e.g., Y, B, M, Q in Economy) that share the same physical seat but carry different fares and conditions. The class of service booked is recorded at the segment level of a PNR and drives downstream pricing, ticketing, and revenue accounting. Usage is overloaded in the industry: some contexts use Class of Service to mean the marketing cabin (Economy vs. Business), so the term is best disambiguated as cabin (physical product) versus booking class/RBD (inventory bucket).

**한국어 / Korean** — **서비스 등급 (Class of Service)** — Class of Service는 좌석이 판매되는 예약 인벤토리 클래스(RBD, 예약 부킹 지정자)를 식별하는 한 글자 코드로, 물리적 객실 자체가 아니라 객실 내의 운임/인벤토리 버킷을 나타낸다. 운임 적용 가능 여부, 마일리지 적립, 업그레이드, 변경/환불 조건을 결정한다.

항공 유통에서 Class of Service는 흔히 booking class 또는 RBD와 혼용된다. 각 객실(Economy, Premium Economy, Business, First)에는 동일한 물리적 좌석을 공유하지만 운임과 조건이 다른 여러 문자 클래스(예: Economy의 Y, B, M, Q)가 존재한다. 예약된 class of service는 PNR의 segment 단위에 기록되며 이후의 pricing, 발권, 수입 정산을 좌우한다. 업계에서 의미가 중첩되어 사용되는데, 일부 맥락에서는 Class of Service를 마케팅 객실(Economy 대 Business)을 뜻하는 데 쓰므로, 객실(물리적 상품) 대 booking class/RBD(인벤토리 버킷)로 구분하는 것이 명확하다.

**Aliases:** `Service Class`, `Booking Class`, `Class of Travel`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Travelport | `Booking Class / RBD (Record 6)` | same | GDS maps each fare to one or more booking-class letters via Record 6 RBD data. |

# Related
- [RBD](/air/air-shop/rbd.md) — related
- [Availability](/air/air-shop/availability.md) — related
- [Fare Basis Code](/air/air-shop/fare-basis-code.md) — related
- [Segment](/air/air-ops/segment.md) — related

# Distinctions
- **Class of Service** vs [RBD](/air/air-shop/rbd.md) — RBD (Reservation Booking Designator) is the formal name for the inventory class code; Class of Service is the more colloquial term for the same concept, though it is sometimes loosely used to mean the marketing cabin.

# Citations
[1] Travelport — Booking Class & Cabin (RBD) - Record 6 — RBD / Booking Class
[2] [IATA — Passenger Fares and Ticketing — Booking class / class of service](https://www.iata.org/en/training/subject-areas/fares-ticketing-courses/)
