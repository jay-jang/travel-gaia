---
type: Standard
title: OSDM
description: 'The Open Sales and Distribution Model is a UIC-backed open standard that defines a modern API and data model for rail offer, booking, fulfillment, and after-sales across carriers and distributors. It is intended to be the foundational, interoperable standard for rail (and increasingly multimodal) distribution, playing a role analogous to NDC and the Offer/Order model in air.'
tags:
  - rail
  - active
  - UIC
timestamp: '2026-06-17T00:00:00Z'
id: osdm
vertical: ground
category: rail
conceptType: standard
status: active
abbreviation: OSDM
term_ko: 개방형 판매·유통 모델(OSDM)
definition_ko: 'OSDM(Open Sales and Distribution Model)은 UIC가 후원하는 개방형 표준으로, 여러 철도 운영사와 유통사를 가로질러 오퍼(offer), 예약, 발권(fulfillment), 사후 처리(after-sales)를 위한 현대적 API와 데이터 모델을 정의한다. 철도(및 점차 복합운송) 유통의 기반이 되는 상호운용 표준을 지향하며, 항공의 NDC 및 Offer/Order 모델에 대응하는 역할을 한다.'
longDef: 'OSDM is published under the UIC International Railway Solution series (IRS 90918-10) and structures an offer into separable offer parts — admissions, reservations, and ancillaries. It standardizes the full retail lifecycle (search/offer, booking, fulfillment, after-sales) so that allocating systems, distributors, and retailers can exchange rail products without bilateral, proprietary integrations. OSDM is explicitly designed to sell trains ''and other modes,'' positioning it as a multimodal distribution standard rather than a purely rail-internal protocol.'
longDef_ko: 'OSDM은 UIC의 국제철도해법(IRS) 시리즈(IRS 90918-10)로 발행되며, 하나의 오퍼를 분리 가능한 오퍼 파트(offer part) — admission, reservation, ancillary — 로 구조화한다. 검색/오퍼, 예약, 발권, 사후 처리에 이르는 리테일 전 생애주기를 표준화하여, 배분 시스템·유통사·리테일러가 일대일 독점 연동 없이 철도 상품을 교환할 수 있게 한다. OSDM은 명시적으로 열차 ''및 다른 교통수단''을 함께 판매하도록 설계되어, 순수 철도 내부 프로토콜이 아니라 복합운송 유통 표준으로 자리매김한다.'
standardBody: UIC
aliases:
  - Open Sales and Distribution Model
providerTerms:
  - provider: UIC (IRS 90918-10)
    term: IRS 90918-10
    context: 'OSDM''s formal standards identity is UIC International Railway Solution (IRS) 90918-10, the specification number under which the API and data model are published.'
    context_ko: 'OSDM의 공식 표준 식별자는 UIC IRS(International Railway Solution) 90918-10으로, API와 데이터 모델이 발행되는 명세 번호다.'
    relationship: same
  - provider: 'UIC / Hit Rail (legacy Hermes/HOSA, PRIFIS)'
    term: Hermes/HOSA + PRIFIS (predecessor distribution stack)
    context: 'OSDM was designed by examining and replacing the legacy Hermes/HOSA reservation ecosystem and the PRIFIS tariff distribution tool (now UIC-DRTF), together with obsolete UIC Leaflets 108-1/108-2/108-3.'
    context_ko: 'OSDM은 레거시 Hermes/HOSA 예약 생태계와 PRIFIS 운임 배포 도구(현 UIC-DRTF), 그리고 폐기된 UIC Leaflet 108-1/108-2/108-3을 검토·대체하며 설계되었다.'
    relationship: broader
  - provider: IATA (NDC / Offers & Orders)
    term: NDC (New Distribution Capability)
    context: 'NDC is the air industry''s offer-and-order distribution standard occupying the analogous role to OSDM in rail; both are XML/JSON offer-order models, but NDC is airline-specific and not interoperable with OSDM.'
    context_ko: NDC는 항공 산업의 오퍼·오더 유통 표준으로 철도의 OSDM과 유사한 역할을 한다. 둘 다 오퍼·오더 모델이지만 NDC는 항공 전용이며 OSDM과 상호운용되지 않는다.
    relationship: related
relationships:
  - type: related
    targetTerm: NDC
  - type: related
    targetTerm: Offer
  - type: related
    targetTerm: Order
  - type: child
    targetTerm: Admission
  - type: child
    targetTerm: Seat Reservation
  - type: child
    targetTerm: Fulfillment (Rail)
  - type: related
    targetTerm: Standard International Passenger Tariff (TCV)
  - type: related
    targetTerm: TAP TSI
  - type: related
    targetTerm: Multimodal Transport
  - type: related
    targetTerm: REST API
distinctions:
  - targetTerm: NDC
    explanation: 'OSDM is the UIC open standard for rail (and multimodal) offer/booking/fulfillment; NDC is IATA''s equivalent XML standard for air. They are sibling distribution standards in different modes, sharing an offer/order philosophy.'
    explanation_ko: 'OSDM은 철도(및 복합운송)의 오퍼/예약/발권을 위한 UIC 개방형 표준이고, NDC는 항공의 동등한 XML 표준(IATA)이다. 서로 다른 교통수단에 속한 자매 유통 표준으로, offer/order 철학을 공유한다.'
  - targetTerm: TAP TSI
    explanation: OSDM is a voluntary open API/data-model standard for commercial distribution; TAP TSI is the EU legal regulation mandating interoperable interfaces. OSDM is one concrete way to implement the retail interfaces that TAP TSI prescribes.
    explanation_ko: 'OSDM은 상업적 유통을 위한 자발적 개방형 API/데이터 모델 표준이고, TAP TSI는 상호운용 인터페이스를 의무화하는 EU 법규다. OSDM은 TAP TSI가 규정하는 리테일 인터페이스를 구현하는 하나의 구체적 방식이다.'
  - targetTerm: MERITS
    explanation: 'MERITS supplies the integrated timetable and station data (the schedule layer); OSDM is the distribution standard for offering, booking and fulfilling rail products. MERITS feeds the schedule/offer input that an OSDM-based sales flow builds offers on top of — data source versus distribution API.'
    explanation_ko: 'MERITS는 통합 시각표·역 데이터(스케줄 레이어)를 공급하고, OSDM은 철도 상품을 오퍼·예약·발권하는 유통 표준이다. MERITS는 OSDM 기반 판매 흐름이 오퍼를 구성하는 스케줄/오퍼 입력을 공급한다 — 데이터 원천 대 유통 API의 관계다.'
sources:
  - name: Open Sales and Distribution Model (OSDM) project
    org: UIC
    version: IRS 90918-10
    section: ''
    url: 'https://uic.org/projects-99/osdm'
    tier: association
    verifyQuote: The Open Sales and Distribution Model (OSDM) is a rail sector specification enabling interoperable ticket sales for trains and other modes of transport and is defined in the new UIC International Railway Solution (IRS) 90918-10.
    verified: true
  - name: What is OSDM? (Passenger Department factsheet)
    org: UIC
    version: ''
    section: ''
    url: 'https://uic.org/IMG/pdf/uic-passenger-open-sales-and-distribution-model.pdf'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="10" width="28" height="22" rx="3"/><path d="M10 20h28"/><circle cx="16" cy="15" r="1.5" fill="currentColor"/><circle cx="21" cy="15" r="1.5" fill="currentColor"/><path d="M16 38l-3 4M32 38l3 4M14 32v6M34 32v6"/><path d="M19 26h10"/></svg>
---

> The Open Sales and Distribution Model is a UIC-backed open standard that defines a modern API and data model for rail offer, booking, fulfillment, and after-sales across carriers and distributors. It is intended to be the foundational, interoperable standard for rail (and increasingly multimodal) distribution, playing a role analogous to NDC and the Offer/Order model in air.

OSDM is published under the UIC International Railway Solution series (IRS 90918-10) and structures an offer into separable offer parts — admissions, reservations, and ancillaries. It standardizes the full retail lifecycle (search/offer, booking, fulfillment, after-sales) so that allocating systems, distributors, and retailers can exchange rail products without bilateral, proprietary integrations. OSDM is explicitly designed to sell trains 'and other modes,' positioning it as a multimodal distribution standard rather than a purely rail-internal protocol.

**한국어 / Korean** — **개방형 판매·유통 모델(OSDM)** — OSDM(Open Sales and Distribution Model)은 UIC가 후원하는 개방형 표준으로, 여러 철도 운영사와 유통사를 가로질러 오퍼(offer), 예약, 발권(fulfillment), 사후 처리(after-sales)를 위한 현대적 API와 데이터 모델을 정의한다. 철도(및 점차 복합운송) 유통의 기반이 되는 상호운용 표준을 지향하며, 항공의 NDC 및 Offer/Order 모델에 대응하는 역할을 한다.

OSDM은 UIC의 국제철도해법(IRS) 시리즈(IRS 90918-10)로 발행되며, 하나의 오퍼를 분리 가능한 오퍼 파트(offer part) — admission, reservation, ancillary — 로 구조화한다. 검색/오퍼, 예약, 발권, 사후 처리에 이르는 리테일 전 생애주기를 표준화하여, 배분 시스템·유통사·리테일러가 일대일 독점 연동 없이 철도 상품을 교환할 수 있게 한다. OSDM은 명시적으로 열차 '및 다른 교통수단'을 함께 판매하도록 설계되어, 순수 철도 내부 프로토콜이 아니라 복합운송 유통 표준으로 자리매김한다.

**Aliases:** `Open Sales and Distribution Model`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| UIC (IRS 90918-10) | `IRS 90918-10` | same | OSDM's formal standards identity is UIC International Railway Solution (IRS) 90918-10, the specification number under which the API and data model are published. |
| UIC / Hit Rail (legacy Hermes/HOSA, PRIFIS) | `Hermes/HOSA + PRIFIS (predecessor distribution stack)` | broader | OSDM was designed by examining and replacing the legacy Hermes/HOSA reservation ecosystem and the PRIFIS tariff distribution tool (now UIC-DRTF), together with obsolete UIC Leaflets 108-1/108-2/108-3. |
| IATA (NDC / Offers & Orders) | `NDC (New Distribution Capability)` | related | NDC is the air industry's offer-and-order distribution standard occupying the analogous role to OSDM in rail; both are XML/JSON offer-order models, but NDC is airline-specific and not interoperable with OSDM. |

# Related
- [NDC](/common/standards/ndc.md) — related
- [Offer](/common/standards/offer.md) — related
- [Order](/common/standards/order.md) — related
- [Admission](/ground/rail/admission.md) — child
- [Seat Reservation](/ground/rail/seat-reservation.md) — child
- [Fulfillment (Rail)](/ground/rail/fulfillment-rail.md) — child
- [Standard International Passenger Tariff (TCV)](/ground/rail/standard-international-passenger-tariff-tcv.md) — related
- [TAP TSI](/ground/rail/tap-tsi.md) — related
- [Multimodal Transport](/ground/rail/multimodal-transport.md) — related
- [REST API](/common/standards/rest-api.md) — related

# Distinctions
- **OSDM** vs [NDC](/common/standards/ndc.md) — OSDM is the UIC open standard for rail (and multimodal) offer/booking/fulfillment; NDC is IATA's equivalent XML standard for air. They are sibling distribution standards in different modes, sharing an offer/order philosophy.
- **OSDM** vs [TAP TSI](/ground/rail/tap-tsi.md) — OSDM is a voluntary open API/data-model standard for commercial distribution; TAP TSI is the EU legal regulation mandating interoperable interfaces. OSDM is one concrete way to implement the retail interfaces that TAP TSI prescribes.
- **OSDM** vs [MERITS](/ground/rail/merits.md) — MERITS supplies the integrated timetable and station data (the schedule layer); OSDM is the distribution standard for offering, booking and fulfilling rail products. MERITS feeds the schedule/offer input that an OSDM-based sales flow builds offers on top of — data source versus distribution API.

# Citations
[1] [UIC — Open Sales and Distribution Model (OSDM) project — IRS 90918-10](https://uic.org/projects-99/osdm)
[2] [UIC — What is OSDM? (Passenger Department factsheet)](https://uic.org/IMG/pdf/uic-passenger-open-sales-and-distribution-model.pdf)
