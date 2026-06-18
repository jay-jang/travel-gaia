---
type: Code
title: Rate Qualifier
description: 'A rate qualifier is a code appended to a GDS car-availability or sell entry that constrains which rental rates are returned — most commonly Corporate Discount (CD), Customer ID (ID), Promotion/Promotional Code (PC) and One-Way (DO/drop-off). Qualifiers entered on the availability display are carried through to the sell request automatically.'
tags:
  - car
  - active
timestamp: '2026-06-18T00:00:00Z'
id: rate-qualifier
vertical: ground
category: car
conceptType: code
status: active
term_ko: 요율 한정자(Rate Qualifier)
definition_ko: 'Rate qualifier(요율 한정자)는 GDS 렌터카 조회·판매 엔트리에 덧붙여 어떤 대여 요율이 조회될지를 한정하는 코드로, 가장 흔히 법인 할인(CD), 고객 ID(ID), 프로모션 코드(PC), 편도(DO/반납)가 있다. 조회 화면에 입력한 한정자는 sell 요청으로 자동 승계된다.'
longDef: 'Car-rental rates in a GDS are not flat: a given vehicle and location can return very different prices depending on the negotiated programs and promotions a particular booking is entitled to. Rate qualifiers let the agent or booking tool tell the rental company''s system which contract or campaign to price against. In Galileo/Travelport car availability the corporate discount is entered as /CD-, the customer ID as /ID-, and a one-way rental via /DO- for the drop-off location, alongside modifiers such as /UNL (unlimited mileage) and /GUAR (guaranteed rates); Amadeus and Sabre use functionally equivalent qualifiers. Because the CD, ID, PC and DO values entered on the availability screen are automatically appended to the subsequent sell, the qualified rate that displayed is the rate that books, which makes correct qualifier entry central to corporate-rate distribution and rate accuracy.'
longDef_ko: 'GDS의 렌터카 요율은 단일하지 않다. 동일한 차종·지점이라도 해당 예약이 받을 자격이 있는 협상 프로그램과 프로모션에 따라 매우 다른 가격이 조회된다. Rate qualifier(요율 한정자)는 여행사 또는 예약 도구가 렌터카 회사 시스템에 어느 계약·캠페인 기준으로 요금을 산정할지 알려 주는 수단이다. Galileo/Travelport 렌터카 조회에서 법인 할인은 /CD-, 고객 ID는 /ID-, 편도 대여는 반납 지점에 대한 /DO-로 입력하며, /UNL(무제한 주행거리), /GUAR(보장 요율) 같은 수식어도 함께 쓴다. Amadeus와 Sabre도 기능적으로 동일한 한정자를 사용한다. 조회 화면에 입력한 CD, ID, PC, DO 값은 이후 sell(판매) 요청에 자동으로 이어지므로, 표시된 한정 요율이 곧 예약되는 요율이 된다. 따라서 올바른 한정자 입력은 법인 요율 유통과 요율 정확성의 핵심이다.'
aliases:
  - Rate Qualifier
  - Car Availability Qualifier
  - Search Qualifier
providerTerms:
  - provider: Travelport (Galileo)
    term: '/CD-, /ID-, /PC-, /DO-'
    context: 'Galileo car availability/sell appends CD (corporate discount), ID (customer ID), PC (promotional code) and DO (drop-off/one-way) qualifiers automatically to the sell request'
    context_ko: 'Galileo 렌터카 조회/판매에서 CD(법인 할인), ID(고객 ID), PC(프로모션 코드), DO(반납/편도) 한정자가 sell 요청에 자동으로 승계된다'
    relationship: same
  - provider: Amadeus
    term: '/CD-, /ID- (and /RC- for rate category)'
    context: 'Amadeus Cars uses the same /CD- (corporate discount) and /ID- (customer ID) qualifiers on car availability; the /RC- qualifier separately selects a rate category (e.g. /RC-A- association, /RC-G- government)'
    context_ko: 'Amadeus Cars도 렌터카 조회에서 동일한 /CD-(법인 할인)와 /ID-(고객 ID) 한정자를 사용하며, /RC- 한정자는 별도로 요율 카테고리(예: /RC-A- 협회, /RC-G- 정부)를 선택한다'
    relationship: same
relationships:
  - type: related
    targetTerm: Corporate Rate
  - type: related
    targetTerm: Rate Access Code (RAC)
  - type: related
    targetTerm: Availability
  - type: related
    targetTerm: ACRISS Code
  - type: related
    targetTerm: One-Way Drop Fee
distinctions:
  - targetTerm: Rate Access Code (RAC)
    explanation: 'A Rate Access Code (RAC) identifies a specific filed rate plan to retrieve; a rate qualifier is the entitlement input (corporate ID, promo code, one-way) that the system uses to decide which rates the booking may see at all.'
    explanation_ko: 'Rate Access Code(RAC)는 조회할 특정 등록 요율 플랜을 식별하는 코드이고, rate qualifier는 시스템이 해당 예약이 어떤 요율을 볼 자격이 있는지 판단하는 데 쓰는 자격 입력(법인 ID, 프로모션 코드, 편도)이다.'
  - targetTerm: Corporate Rate
    explanation: A corporate rate is the negotiated price/program itself; the corporate-discount qualifier (CD) is merely the code entered into the GDS to make that corporate rate return in availability.
    explanation_ko: 'Corporate rate는 협상된 가격·프로그램 그 자체이고, 법인 할인 한정자(CD)는 그 corporate rate가 조회에 나오도록 GDS에 입력하는 코드일 뿐이다.'
sources:
  - org: Budget Car Rental
    name: Travel Agents GDS Reservation Tools — Galileo
    version: ''
    section: ''
    url: 'https://www.budget.com/en/programs/travel-agent/gds-reservation-tools'
  - org: Travelport
    name: 'Galileo Formats Guide for Cars (car availability qualifiers, CAL)'
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="20" cy="20" r="11"/><line x1="28" y1="28" x2="40" y2="40"/><path d="M15 20h10M20 15v10"/></svg>
---

> A rate qualifier is a code appended to a GDS car-availability or sell entry that constrains which rental rates are returned — most commonly Corporate Discount (CD), Customer ID (ID), Promotion/Promotional Code (PC) and One-Way (DO/drop-off). Qualifiers entered on the availability display are carried through to the sell request automatically.

Car-rental rates in a GDS are not flat: a given vehicle and location can return very different prices depending on the negotiated programs and promotions a particular booking is entitled to. Rate qualifiers let the agent or booking tool tell the rental company's system which contract or campaign to price against. In Galileo/Travelport car availability the corporate discount is entered as /CD-, the customer ID as /ID-, and a one-way rental via /DO- for the drop-off location, alongside modifiers such as /UNL (unlimited mileage) and /GUAR (guaranteed rates); Amadeus and Sabre use functionally equivalent qualifiers. Because the CD, ID, PC and DO values entered on the availability screen are automatically appended to the subsequent sell, the qualified rate that displayed is the rate that books, which makes correct qualifier entry central to corporate-rate distribution and rate accuracy.

**한국어 / Korean** — **요율 한정자(Rate Qualifier)** — Rate qualifier(요율 한정자)는 GDS 렌터카 조회·판매 엔트리에 덧붙여 어떤 대여 요율이 조회될지를 한정하는 코드로, 가장 흔히 법인 할인(CD), 고객 ID(ID), 프로모션 코드(PC), 편도(DO/반납)가 있다. 조회 화면에 입력한 한정자는 sell 요청으로 자동 승계된다.

GDS의 렌터카 요율은 단일하지 않다. 동일한 차종·지점이라도 해당 예약이 받을 자격이 있는 협상 프로그램과 프로모션에 따라 매우 다른 가격이 조회된다. Rate qualifier(요율 한정자)는 여행사 또는 예약 도구가 렌터카 회사 시스템에 어느 계약·캠페인 기준으로 요금을 산정할지 알려 주는 수단이다. Galileo/Travelport 렌터카 조회에서 법인 할인은 /CD-, 고객 ID는 /ID-, 편도 대여는 반납 지점에 대한 /DO-로 입력하며, /UNL(무제한 주행거리), /GUAR(보장 요율) 같은 수식어도 함께 쓴다. Amadeus와 Sabre도 기능적으로 동일한 한정자를 사용한다. 조회 화면에 입력한 CD, ID, PC, DO 값은 이후 sell(판매) 요청에 자동으로 이어지므로, 표시된 한정 요율이 곧 예약되는 요율이 된다. 따라서 올바른 한정자 입력은 법인 요율 유통과 요율 정확성의 핵심이다.

**Aliases:** `Rate Qualifier`, `Car Availability Qualifier`, `Search Qualifier`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Travelport (Galileo) | `/CD-, /ID-, /PC-, /DO-` | same | Galileo car availability/sell appends CD (corporate discount), ID (customer ID), PC (promotional code) and DO (drop-off/one-way) qualifiers automatically to the sell request |
| Amadeus | `/CD-, /ID- (and /RC- for rate category)` | same | Amadeus Cars uses the same /CD- (corporate discount) and /ID- (customer ID) qualifiers on car availability; the /RC- qualifier separately selects a rate category (e.g. /RC-A- association, /RC-G- government) |

# Related
- [Corporate Rate](/lodging/hotel-rate/corporate-rate.md) — related
- [Rate Access Code (RAC)](/lodging/hotel-dist/rate-access-code.md) — related
- [Availability](/air/air-shop/availability.md) — related
- [ACRISS Code](/ground/car/acriss-code.md) — related
- [One-Way Drop Fee](/ground/car/one-way-drop-fee.md) — related

# Distinctions
- **Rate Qualifier** vs [Rate Access Code (RAC)](/lodging/hotel-dist/rate-access-code.md) — A Rate Access Code (RAC) identifies a specific filed rate plan to retrieve; a rate qualifier is the entitlement input (corporate ID, promo code, one-way) that the system uses to decide which rates the booking may see at all.
- **Rate Qualifier** vs [Corporate Rate](/lodging/hotel-rate/corporate-rate.md) — A corporate rate is the negotiated price/program itself; the corporate-discount qualifier (CD) is merely the code entered into the GDS to make that corporate rate return in availability.

# Citations
[1] [Budget Car Rental — Travel Agents GDS Reservation Tools — Galileo](https://www.budget.com/en/programs/travel-agent/gds-reservation-tools)
[2] Travelport — Galileo Formats Guide for Cars (car availability qualifiers, CAL)
