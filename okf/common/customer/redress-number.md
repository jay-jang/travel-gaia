---
type: Code
title: Redress Number
description: 'A Redress Number is a unique identifier issued by the U.S. Department of Homeland Security through the DHS Traveler Redress Inquiry Program (DHS TRIP) to travelers who have repeatedly experienced screening difficulties, such as being misidentified as a person on a watch list. When entered into a reservation, it helps Secure Flight differentiate the traveler from similarly named individuals and reduce false matches.'
tags:
  - customer
  - active
  - U.S. Department of Homeland Security (DHS TRIP)
timestamp: '2026-06-17T00:00:00Z'
id: redress-number
vertical: common
category: customer
conceptType: code
status: active
term_ko: Redress Number(DHS TRIP 구제번호)
definition_ko: Redress Number는 감시목록 인물로 오인되는 등 보안검색에서 반복적으로 어려움을 겪은 여행자에게 미국 국토안보부(DHS)가 DHS TRIP(여행자 구제 문의 프로그램)을 통해 발급하는 고유 식별번호다. 예약에 입력하면 Secure Flight가 동명이인과 해당 여행자를 구분해 오인 매칭을 줄이는 데 도움이 된다.
longDef: 'Travelers apply through DHS TRIP after recurring problems such as denied or delayed boarding, repeated additional screening, or being told their name resembles one on a government watch list. The resulting Redress Control Number is added to the airline reservation (and may be stored in a customer profile) and is transmitted to TSA via Secure Flight to improve identity resolution. The Redress program is administratively separate from trusted-traveler programs; a Redress Number does not confer expedited screening and is unrelated to a Known Traveler Number.'
longDef_ko: '여행자는 탑승 거부·지연, 반복적인 추가 검색, 또는 자신의 이름이 정부 감시목록의 이름과 유사하다는 통보 같은 문제가 반복될 때 DHS TRIP에 신청한다. 발급된 Redress Control Number는 항공 예약에 입력되고(고객 프로필에도 저장될 수 있음) Secure Flight를 통해 TSA로 전송되어 신원 식별 정확도를 높인다. 구제 프로그램은 신뢰여행자 프로그램과 행정적으로 별개이며, Redress Number는 신속 검색 자격을 주지 않고 KTN과도 무관하다.'
standardBody: U.S. Department of Homeland Security (DHS TRIP)
aliases:
  - DHS TRIP Redress Control Number
  - Redress Control Number
providerTerms:
  - provider: DHS
    term: DHS TRIP
    context: The Traveler Redress Inquiry Program that issues Redress Numbers.
    context_ko: Redress Number를 발급하는 여행자 구제 문의 프로그램.
    relationship: broader
  - provider: IATA / GDS
    term: SSR DOCO (Redress)
    context: In reservations the redress number is entered as an SSR DOCO element associated to the passenger name (not the segment) for transmission to TSA Secure Flight
    context_ko: 예약에서 Redress 번호는 TSA Secure Flight 전송을 위해 승객명에 연결된 SSR DOCO 요소로 입력된다(구간이 아닌 승객 단위)
    relationship: related
relationships:
  - type: related
    targetTerm: Secure Flight
  - type: related
    targetTerm: Customer Profile
  - type: related
    targetTerm: PNR
  - type: contrasts
    targetTerm: Known Traveler Number
distinctions:
  - targetTerm: Known Traveler Number
    explanation: 'A Redress Number resolves recurring misidentification and does not provide any screening benefit, whereas a Known Traveler Number grants access to expedited screening; they are separate, unrelated identifiers.'
    explanation_ko: 'Redress Number는 반복되는 오인 식별을 해소하기 위한 번호로 검색 혜택을 주지 않는 반면, KTN은 신속 검색 자격을 부여한다. 둘은 서로 별개이며 무관한 식별번호다.'
sources:
  - org: U.S. Department of Homeland Security
    name: DHS TRIP - Frequently Asked Questions
    version: ''
    section: ''
    url: 'https://trip.dhs.gov/s/faq-page'
    tier: regulator-guidance
  - org: TSA
    name: Secure Flight Program
    version: ''
    section: ''
    url: 'https://www.tsa.gov/travel/security-screening/secure-flight'
    tier: regulator-guidance
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="16" cy="16" r="6"/><path d="M8 36c0-5 4-8 8-8s8 3 8 8"/><path d="M30 18l12 12"/><path d="M42 18L30 30"/><path d="M28 8h12"/></svg>
---

> A Redress Number is a unique identifier issued by the U.S. Department of Homeland Security through the DHS Traveler Redress Inquiry Program (DHS TRIP) to travelers who have repeatedly experienced screening difficulties, such as being misidentified as a person on a watch list. When entered into a reservation, it helps Secure Flight differentiate the traveler from similarly named individuals and reduce false matches.

Travelers apply through DHS TRIP after recurring problems such as denied or delayed boarding, repeated additional screening, or being told their name resembles one on a government watch list. The resulting Redress Control Number is added to the airline reservation (and may be stored in a customer profile) and is transmitted to TSA via Secure Flight to improve identity resolution. The Redress program is administratively separate from trusted-traveler programs; a Redress Number does not confer expedited screening and is unrelated to a Known Traveler Number.

**한국어 / Korean** — **Redress Number(DHS TRIP 구제번호)** — Redress Number는 감시목록 인물로 오인되는 등 보안검색에서 반복적으로 어려움을 겪은 여행자에게 미국 국토안보부(DHS)가 DHS TRIP(여행자 구제 문의 프로그램)을 통해 발급하는 고유 식별번호다. 예약에 입력하면 Secure Flight가 동명이인과 해당 여행자를 구분해 오인 매칭을 줄이는 데 도움이 된다.

여행자는 탑승 거부·지연, 반복적인 추가 검색, 또는 자신의 이름이 정부 감시목록의 이름과 유사하다는 통보 같은 문제가 반복될 때 DHS TRIP에 신청한다. 발급된 Redress Control Number는 항공 예약에 입력되고(고객 프로필에도 저장될 수 있음) Secure Flight를 통해 TSA로 전송되어 신원 식별 정확도를 높인다. 구제 프로그램은 신뢰여행자 프로그램과 행정적으로 별개이며, Redress Number는 신속 검색 자격을 주지 않고 KTN과도 무관하다.

**Aliases:** `DHS TRIP Redress Control Number`, `Redress Control Number`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| DHS | `DHS TRIP` | broader | The Traveler Redress Inquiry Program that issues Redress Numbers. |
| IATA / GDS | `SSR DOCO (Redress)` | related | In reservations the redress number is entered as an SSR DOCO element associated to the passenger name (not the segment) for transmission to TSA Secure Flight |

# Related
- [Secure Flight](/common/customer/secure-flight.md) — related
- [Customer Profile](/common/customer/customer-profile.md) — related
- [PNR](/air/air-ops/pnr.md) — related
- [Known Traveler Number](/common/customer/known-traveler-number.md) — contrasts

# Distinctions
- **Redress Number** vs [Known Traveler Number](/common/customer/known-traveler-number.md) — A Redress Number resolves recurring misidentification and does not provide any screening benefit, whereas a Known Traveler Number grants access to expedited screening; they are separate, unrelated identifiers.

# Citations
[1] [U.S. Department of Homeland Security — DHS TRIP - Frequently Asked Questions](https://trip.dhs.gov/s/faq-page)
[2] [TSA — Secure Flight Program](https://www.tsa.gov/travel/security-screening/secure-flight)
