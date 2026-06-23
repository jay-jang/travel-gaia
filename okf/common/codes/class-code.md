---
type: Code
title: Class Code
description: 'The single alphabetic character that identifies the booking class (fare bucket) in which a flight is sold and held, e.g., F, J, Y, B, M, Q. It is the code recorded on the segment, ticket, and boarding pass and is the operational/display form of the reservation booking designator (RBD).'
tags:
  - codes
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: class-code
vertical: common
category: codes
conceptType: code
status: active
term_ko: 클래스 코드(예약 클래스 코드)
definition_ko: '항공편이 판매·예약되는 예약 클래스(운임 버킷)를 식별하는 단일 알파벳 문자(예: F, J, Y, B, M, Q). 세그먼트·항공권·탑승권에 기록되는 코드이며, 예약 부킹 지정자(RBD)의 운영·표시 형태이다.'
longDef: 'Class codes are not standardized across carriers: the same letter can mean different cabins or fare levels at different airlines, and each airline maps its class codes to a cabin (First/Business/Premium Economy/Economy) and to fare basis codes. Y, J/C, and F are common conventions for full-fare economy, business, and first respectively. In availability and pricing the class code is the bucket the airline opens or closes by demand; the value booked normally matches the leading letter of the fare basis code. It is the same concept as the RBD, viewed from the booked/ticketed document.'
longDef_ko: '클래스 코드는 항공사 간에 표준화되어 있지 않다. 같은 문자가 항공사마다 다른 객실이나 운임 수준을 의미할 수 있으며, 각 항공사는 자사의 클래스 코드를 객실(First/Business/Premium Economy/Economy)과 운임 기준 코드(fare basis code)에 매핑한다. Y, J/C, F는 각각 정규 운임 이코노미·비즈니스·퍼스트의 흔한 관례이다. 좌석 가용성(availability)과 가격 산정에서 클래스 코드는 항공사가 수요에 따라 열고 닫는 버킷이며, 예약된 값은 보통 운임 기준 코드의 첫 글자와 일치한다. 예약·발권된 서류 관점에서 본 RBD와 동일한 개념이다.'
standardBody: IATA
aliases:
  - Booking Class
  - Booking Class Code
  - Class of Service
  - Class of Booking
providerTerms:
  - provider: IATA/ATPCO
    term: RBD (Reservation Booking Designator)
    context: Standard term for the single-letter booking class recorded on the segment; carried in fare and availability data.
    context_ko: '세그먼트에 기록되는 단일 문자 예약 클래스를 가리키는 표준 용어로, 운임·좌석조회 데이터에 담긴다.'
    relationship: same
  - provider: NDC/IATA
    term: ResBookDesigCode
    context: 'NDC schema element carrying the booking-class (RBD) letter for a segment, including the operating carrier''s RBD when different.'
    context_ko: '세그먼트의 예약 클래스(RBD) 문자를 담는 NDC 스키마 요소로, 운항사 RBD가 다를 경우 그것도 포함한다.'
    relationship: same
relationships:
  - type: sameAs
    targetTerm: RBD
  - type: contrasts
    targetTerm: Fare Basis Code
  - type: related
    targetTerm: Availability
  - type: related
    targetTerm: Fare Family
  - type: related
    targetTerm: Segment
distinctions:
  - targetTerm: RBD
    explanation: 'The class code is the same single-letter value as the RBD; ''RBD'' (reservation booking designator) is the formal/system term, while ''class code'' or ''booking class'' is the everyday term seen on segments, tickets, and displays.'
    explanation_ko: '클래스 코드는 RBD와 동일한 단일 문자 값이다. ''RBD''(reservation booking designator)는 공식·시스템 용어이고, ''클래스 코드'' 또는 ''부킹 클래스''는 세그먼트·항공권·표시 화면에서 보이는 일상 용어이다.'
  - targetTerm: Fare Basis Code
    explanation: The class code is one letter (the booking bucket); a fare basis code is a longer alphanumeric string whose first character is usually the class code and which encodes the full fare and its conditions.
    explanation_ko: '클래스 코드는 한 글자(예약 버킷)이고, 운임 기준 코드는 첫 글자가 보통 클래스 코드이며 전체 운임과 그 조건을 인코딩한 더 긴 영숫자 문자열이다.'
sources:
  - org: IATA
    name: Reservations Booking Designators (RBD) standard
    version: 46th edition (2026)
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/'
    tier: association
    verifyQuote: Significant Changes and Amendments to the 46th edition (2026) of the IATA Passenger Services Conference Resolution Manual
    verified: true
  - org: Travelport
    name: Booking Class & Cabin (RBD)
    version: ''
    section: ''
    url: 'https://support.travelport.com/webhelp/faresandpricingagencyhelp/Content/Booking%20Class%20RBD%20(Record%206).htm'
    tier: vendor-doc
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="10" width="32" height="28" rx="3"/><path d="M18 30l4-12 4 12M19.3 26h5.4"/><path d="M30 18h3a3 3 0 010 6h-3v6"/></svg>
---

> The single alphabetic character that identifies the booking class (fare bucket) in which a flight is sold and held, e.g., F, J, Y, B, M, Q. It is the code recorded on the segment, ticket, and boarding pass and is the operational/display form of the reservation booking designator (RBD).

Class codes are not standardized across carriers: the same letter can mean different cabins or fare levels at different airlines, and each airline maps its class codes to a cabin (First/Business/Premium Economy/Economy) and to fare basis codes. Y, J/C, and F are common conventions for full-fare economy, business, and first respectively. In availability and pricing the class code is the bucket the airline opens or closes by demand; the value booked normally matches the leading letter of the fare basis code. It is the same concept as the RBD, viewed from the booked/ticketed document.

**한국어 / Korean** — **클래스 코드(예약 클래스 코드)** — 항공편이 판매·예약되는 예약 클래스(운임 버킷)를 식별하는 단일 알파벳 문자(예: F, J, Y, B, M, Q). 세그먼트·항공권·탑승권에 기록되는 코드이며, 예약 부킹 지정자(RBD)의 운영·표시 형태이다.

클래스 코드는 항공사 간에 표준화되어 있지 않다. 같은 문자가 항공사마다 다른 객실이나 운임 수준을 의미할 수 있으며, 각 항공사는 자사의 클래스 코드를 객실(First/Business/Premium Economy/Economy)과 운임 기준 코드(fare basis code)에 매핑한다. Y, J/C, F는 각각 정규 운임 이코노미·비즈니스·퍼스트의 흔한 관례이다. 좌석 가용성(availability)과 가격 산정에서 클래스 코드는 항공사가 수요에 따라 열고 닫는 버킷이며, 예약된 값은 보통 운임 기준 코드의 첫 글자와 일치한다. 예약·발권된 서류 관점에서 본 RBD와 동일한 개념이다.

**Aliases:** `Booking Class`, `Booking Class Code`, `Class of Service`, `Class of Booking`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| IATA/ATPCO | `RBD (Reservation Booking Designator)` | same | Standard term for the single-letter booking class recorded on the segment; carried in fare and availability data. |
| NDC/IATA | `ResBookDesigCode` | same | NDC schema element carrying the booking-class (RBD) letter for a segment, including the operating carrier's RBD when different. |

# Related
- [RBD](/air/air-shop/rbd.md) — sameAs
- [Fare Basis Code](/air/air-shop/fare-basis-code.md) — contrasts
- [Availability](/air/air-shop/availability.md) — related
- [Fare Family](/air/air-shop/fare-family.md) — related
- [Segment](/air/air-ops/segment.md) — related

# Distinctions
- **Class Code** vs [RBD](/air/air-shop/rbd.md) — The class code is the same single-letter value as the RBD; 'RBD' (reservation booking designator) is the formal/system term, while 'class code' or 'booking class' is the everyday term seen on segments, tickets, and displays.
- **Class Code** vs [Fare Basis Code](/air/air-shop/fare-basis-code.md) — The class code is one letter (the booking bucket); a fare basis code is a longer alphanumeric string whose first character is usually the class code and which encodes the full fare and its conditions.

# Citations
[1] [IATA — Reservations Booking Designators (RBD) standard — 46th edition (2026)](https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/)
[2] [Travelport — Booking Class & Cabin (RBD)](https://support.travelport.com/webhelp/faresandpricingagencyhelp/Content/Booking%20Class%20RBD%20(Record%206).htm)
