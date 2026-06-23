---
type: Role
title: Operating Carrier
description: 'The airline that physically operates a flight, providing the aircraft, crew, and operational control, regardless of which carriers'' codes are sold on it. On a codeshare flight there is one operating carrier but potentially several marketing carriers.'
tags:
  - air-partner
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: operating-carrier
vertical: air
category: air-partner
conceptType: role
status: active
term_ko: 운항 항공사(오퍼레이팅 캐리어)
definition_ko: '어떤 항공사의 코드가 판매되든 관계없이 항공기, 승무원, 운항 통제를 제공하여 실제로 항공편을 운항하는 항공사. 공동운항편에서는 운항 항공사는 하나이지만 판매 항공사는 여럿일 수 있다.'
longDef: 'The operating carrier holds operational responsibility for the flight, including safety, schedule, and ground handling. Passenger disclosure regulations require that travelers be informed of the operating carrier when it differs from the marketing carrier whose code they booked. In reservation and schedule data the operating carrier is identified separately from the marketing carrier, so selling systems can show both the code sold and the airline actually flying.'
longDef_ko: '운항 항공사는 안전, 스케줄, 지상 조업을 포함한 항공편의 운항 책임을 진다. 승객 고지 규정은 승객이 예약한 코드의 판매 항공사와 운항 항공사가 다를 경우 운항 항공사를 승객에게 알리도록 요구한다. 예약 및 스케줄 데이터에서 운항 항공사는 판매 항공사와 별도로 식별되어, 판매 시스템이 판매된 코드와 실제로 운항하는 항공사를 모두 표시할 수 있다.'
standardBody: IATA
aliases:
  - Operating Airline
providerTerms:
  - provider: NDC/IATA
    term: OperatingCarrier.AirlineID
    context: 'In NDC messages the operating carrier is represented by the OperatingCarrier element (AirlineID) on each flight segment, identifying the airline physically operating the flight for disclosure alongside the MarketingCarrier.'
    context_ko: 'NDC 메시지에서 운항 항공사는 각 항공 구간의 OperatingCarrier 요소(AirlineID)로 표현되며, MarketingCarrier와 함께 고지 목적으로 실제 항공편을 운항하는 항공사를 식별한다.'
    relationship: same
relationships:
  - type: contrasts
    targetTerm: Marketing Carrier
  - type: related
    targetTerm: Codeshare
  - type: related
    targetTerm: Airline Designator
distinctions:
  - targetTerm: Marketing Carrier
    explanation: The operating carrier flies the aircraft; the marketing carrier sells the flight under its own code and number.
    explanation_ko: '운항 항공사는 항공기를 운항하고, 판매 항공사는 자사의 코드와 편명으로 항공편을 판매한다.'
  - targetTerm: Codeshare
    explanation: Operating carrier is a role on a specific flight; codeshare is the commercial arrangement that creates the distinction between operating and marketing carriers.
    explanation_ko: '운항 항공사는 특정 항공편에서의 역할이고, 공동운항은 운항 항공사와 판매 항공사의 구분을 만들어내는 상업적 협정이다.'
  - targetTerm: Validating Carrier
    explanation: The validating carrier plates and settles the ticket and may not fly any segment; the operating carrier physically performs the flight.
    explanation_ko: '발권 항공사는 항공권을 발권(plate)하고 정산하며 어떤 구간도 운항하지 않을 수 있고, 운항 항공사(Operating Carrier)는 실제로 항공편을 수행한다.'
  - targetTerm: Wet Lease
    explanation: A wet lease is the contractual arrangement; in it the lessor is the operating carrier (holding the AOC and operational control) while the lessee markets the flight.
    explanation_ko: '웻 리스는 계약상의 협정이며, 그 안에서 임대인이 (AOC와 운항 통제권을 보유한) 운항 항공사이고 임차인이 항공편을 판매한다.'
sources:
  - name: Standard Schedules Information Manual (SSIM)
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/standard-schedules-information/'
    tier: association
  - name: DOT rules on disclosure of code-share arrangements
    org: U.S. Department of Transportation
    version: ''
    section: ''
    url: 'https://www.transportation.gov/airconsumer/codeshare-disclosure'
    tier: regulator-guidance
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M6 26l14-3 6-9 3 1-3 9 9-2 3-3 3 1-2 5"/><circle cx="38" cy="36" r="7"/><path d="M38 32v4l3 2"/></svg>
---

> The airline that physically operates a flight, providing the aircraft, crew, and operational control, regardless of which carriers' codes are sold on it. On a codeshare flight there is one operating carrier but potentially several marketing carriers.

The operating carrier holds operational responsibility for the flight, including safety, schedule, and ground handling. Passenger disclosure regulations require that travelers be informed of the operating carrier when it differs from the marketing carrier whose code they booked. In reservation and schedule data the operating carrier is identified separately from the marketing carrier, so selling systems can show both the code sold and the airline actually flying.

**한국어 / Korean** — **운항 항공사(오퍼레이팅 캐리어)** — 어떤 항공사의 코드가 판매되든 관계없이 항공기, 승무원, 운항 통제를 제공하여 실제로 항공편을 운항하는 항공사. 공동운항편에서는 운항 항공사는 하나이지만 판매 항공사는 여럿일 수 있다.

운항 항공사는 안전, 스케줄, 지상 조업을 포함한 항공편의 운항 책임을 진다. 승객 고지 규정은 승객이 예약한 코드의 판매 항공사와 운항 항공사가 다를 경우 운항 항공사를 승객에게 알리도록 요구한다. 예약 및 스케줄 데이터에서 운항 항공사는 판매 항공사와 별도로 식별되어, 판매 시스템이 판매된 코드와 실제로 운항하는 항공사를 모두 표시할 수 있다.

**Aliases:** `Operating Airline`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| NDC/IATA | `OperatingCarrier.AirlineID` | same | In NDC messages the operating carrier is represented by the OperatingCarrier element (AirlineID) on each flight segment, identifying the airline physically operating the flight for disclosure alongside the MarketingCarrier. |

# Related
- [Marketing Carrier](/air/air-partner/marketing-carrier.md) — contrasts
- [Codeshare](/air/air-partner/codeshare.md) — related
- [Airline Designator](/common/codes/airline-designator.md) — related

# Distinctions
- **Operating Carrier** vs [Marketing Carrier](/air/air-partner/marketing-carrier.md) — The operating carrier flies the aircraft; the marketing carrier sells the flight under its own code and number.
- **Operating Carrier** vs [Codeshare](/air/air-partner/codeshare.md) — Operating carrier is a role on a specific flight; codeshare is the commercial arrangement that creates the distinction between operating and marketing carriers.
- **Operating Carrier** vs [Validating Carrier](/air/air-ticket/validating-carrier.md) — The validating carrier plates and settles the ticket and may not fly any segment; the operating carrier physically performs the flight.
- **Operating Carrier** vs [Wet Lease](/air/air-partner/wet-lease.md) — A wet lease is the contractual arrangement; in it the lessor is the operating carrier (holding the AOC and operational control) while the lessee markets the flight.

# Citations
[1] [IATA — Standard Schedules Information Manual (SSIM)](https://www.iata.org/en/publications/manuals/standard-schedules-information/)
[2] [U.S. Department of Transportation — DOT rules on disclosure of code-share arrangements](https://www.transportation.gov/airconsumer/codeshare-disclosure)
