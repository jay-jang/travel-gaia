---
type: Role
title: Marketing Carrier
description: 'The airline whose designator code and flight number appear on a ticket or in a reservation for a given flight, and which markets and sells that flight to the customer. On a codeshare flight the marketing carrier may differ from the airline that physically operates the flight.'
tags:
  - air-partner
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: marketing-carrier
vertical: air
category: air-partner
conceptType: role
status: active
term_ko: 판매 항공사(마케팅 캐리어)
definition_ko: '특정 항공편에 대해 항공권이나 예약에 자사의 지정자 코드와 편명이 표시되며, 해당 항공편을 고객에게 마케팅하고 판매하는 항공사. 공동운항편에서는 판매 항공사가 실제로 항공편을 운항하는 항공사와 다를 수 있다.'
longDef: 'In a codeshare relationship the marketing carrier is the airline placing its code on the flight, regardless of who operates the aircraft. The marketing carrier''s flight number is what the passenger sees at booking, and disclosure rules require informing the passenger of the underlying operating carrier. The marketing carrier is distinct from the validating carrier, which is the carrier whose stock and accounting are used to issue the ticket.'
longDef_ko: '공동운항 관계에서 판매 항공사는 누가 항공기를 운항하는지와 무관하게 자사의 코드를 항공편에 부여하는 항공사다. 승객이 예약 시 보게 되는 것은 판매 항공사의 편명이며, 고지 규정에 따라 그 기반이 되는 운항 항공사를 승객에게 알려야 한다. 판매 항공사는 발권 항공사(validating carrier), 즉 항공권 발권에 그 항공권 양식과 회계가 사용되는 항공사와는 구별된다.'
standardBody: IATA
aliases:
  - Marketing Airline
  - Selling Carrier
providerTerms:
  - provider: NDC/IATA
    term: MarketingCarrier.AirlineID
    context: 'In NDC messages the marketing carrier is represented by the MarketingCarrier element (AirlineID), the code under which the segment is sold, distinct from the OperatingCarrier element on each flight segment.'
    context_ko: 'NDC 메시지에서 판매 항공사는 MarketingCarrier 요소(AirlineID)로 표현되며, 이는 구간이 판매되는 코드로서 각 항공 구간의 OperatingCarrier 요소와 구별된다.'
    relationship: same
relationships:
  - type: contrasts
    targetTerm: Operating Carrier
  - type: related
    targetTerm: Codeshare
  - type: related
    targetTerm: Airline Designator
  - type: related
    targetTerm: Validating Carrier
distinctions:
  - targetTerm: Operating Carrier
    explanation: The marketing carrier sells the flight under its code; the operating carrier physically flies the aircraft.
    explanation_ko: '판매 항공사는 자사의 코드로 항공편을 판매하고, 운항 항공사는 실제로 항공기를 운항한다.'
  - targetTerm: Validating Carrier
    explanation: The marketing carrier owns the flight code shown to the passenger; the validating carrier is the airline on whose document/stock the ticket is issued and settled.
    explanation_ko: '판매 항공사는 승객에게 표시되는 편명 코드를 보유하고, 발권 항공사는 그 항공권 서류/양식을 사용해 항공권이 발권되고 정산되는 항공사다.'
  - targetTerm: Most Significant Carrier (MSC)
    explanation: 'Marketing carrier is the airline whose code is on the booking; the MSC is a selected role under Resolution 302 — since 2015 it is generally the marketing carrier of the first international sector, but it is determined by the rule''s geographic method, not simply by who marketed each flight.'
    explanation_ko: 'Marketing carrier는 예약에 자사 코드가 붙은 항공사이고, MSC는 Resolution 302에 따라 선택되는 역할이다 — 2015년 이후 대체로 첫 국제 구간의 마케팅 항공사이지만, 단순히 각 항공편을 누가 마케팅했는지가 아니라 규칙의 지리적 방식으로 결정된다.'
sources:
  - name: Standard Schedules Information Manual (SSIM)
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/standard-schedules-information/'
  - name: DOT rules on disclosure of code-share arrangements
    org: U.S. Department of Transportation
    version: ''
    section: ''
    url: 'https://www.transportation.gov/airconsumer/codeshare-disclosure'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10 14h22l8 8-8 8H10z"/><path d="M16 22h12"/><path d="M16 26h8"/><path d="M40 30l4 3-4 3v-2h-3v-2h3z" fill="currentColor" stroke="none"/><path d="M37 34c4 4 9 4 9 4"/></svg>
---

> The airline whose designator code and flight number appear on a ticket or in a reservation for a given flight, and which markets and sells that flight to the customer. On a codeshare flight the marketing carrier may differ from the airline that physically operates the flight.

In a codeshare relationship the marketing carrier is the airline placing its code on the flight, regardless of who operates the aircraft. The marketing carrier's flight number is what the passenger sees at booking, and disclosure rules require informing the passenger of the underlying operating carrier. The marketing carrier is distinct from the validating carrier, which is the carrier whose stock and accounting are used to issue the ticket.

**한국어 / Korean** — **판매 항공사(마케팅 캐리어)** — 특정 항공편에 대해 항공권이나 예약에 자사의 지정자 코드와 편명이 표시되며, 해당 항공편을 고객에게 마케팅하고 판매하는 항공사. 공동운항편에서는 판매 항공사가 실제로 항공편을 운항하는 항공사와 다를 수 있다.

공동운항 관계에서 판매 항공사는 누가 항공기를 운항하는지와 무관하게 자사의 코드를 항공편에 부여하는 항공사다. 승객이 예약 시 보게 되는 것은 판매 항공사의 편명이며, 고지 규정에 따라 그 기반이 되는 운항 항공사를 승객에게 알려야 한다. 판매 항공사는 발권 항공사(validating carrier), 즉 항공권 발권에 그 항공권 양식과 회계가 사용되는 항공사와는 구별된다.

**Aliases:** `Marketing Airline`, `Selling Carrier`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| NDC/IATA | `MarketingCarrier.AirlineID` | same | In NDC messages the marketing carrier is represented by the MarketingCarrier element (AirlineID), the code under which the segment is sold, distinct from the OperatingCarrier element on each flight segment. |

# Related
- [Operating Carrier](/air/air-partner/operating-carrier.md) — contrasts
- [Codeshare](/air/air-partner/codeshare.md) — related
- [Airline Designator](/common/codes/airline-designator.md) — related
- [Validating Carrier](/air/air-ticket/validating-carrier.md) — related

# Distinctions
- **Marketing Carrier** vs [Operating Carrier](/air/air-partner/operating-carrier.md) — The marketing carrier sells the flight under its code; the operating carrier physically flies the aircraft.
- **Marketing Carrier** vs [Validating Carrier](/air/air-ticket/validating-carrier.md) — The marketing carrier owns the flight code shown to the passenger; the validating carrier is the airline on whose document/stock the ticket is issued and settled.
- **Marketing Carrier** vs [Most Significant Carrier (MSC)](/air/air-partner/most-significant-carrier-msc.md) — Marketing carrier is the airline whose code is on the booking; the MSC is a selected role under Resolution 302 — since 2015 it is generally the marketing carrier of the first international sector, but it is determined by the rule's geographic method, not simply by who marketed each flight.

# Citations
[1] [IATA — Standard Schedules Information Manual (SSIM)](https://www.iata.org/en/publications/manuals/standard-schedules-information/)
[2] [U.S. Department of Transportation — DOT rules on disclosure of code-share arrangements](https://www.transportation.gov/airconsumer/codeshare-disclosure)
