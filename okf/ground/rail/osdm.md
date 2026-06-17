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
sources:
  - name: Open Sales and Distribution Model (OSDM) project
    org: UIC
    version: IRS 90918-10
    section: ''
    url: ''
  - name: What is OSDM? (Passenger Department factsheet)
    org: UIC
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="10" width="28" height="22" rx="3"/><path d="M10 20h28"/><circle cx="16" cy="15" r="1.5" fill="currentColor"/><circle cx="21" cy="15" r="1.5" fill="currentColor"/><path d="M16 38l-3 4M32 38l3 4M14 32v6M34 32v6"/><path d="M19 26h10"/></svg>
---

> The Open Sales and Distribution Model is a UIC-backed open standard that defines a modern API and data model for rail offer, booking, fulfillment, and after-sales across carriers and distributors. It is intended to be the foundational, interoperable standard for rail (and increasingly multimodal) distribution, playing a role analogous to NDC and the Offer/Order model in air.

OSDM is published under the UIC International Railway Solution series (IRS 90918-10) and structures an offer into separable offer parts — admissions, reservations, and ancillaries. It standardizes the full retail lifecycle (search/offer, booking, fulfillment, after-sales) so that allocating systems, distributors, and retailers can exchange rail products without bilateral, proprietary integrations. OSDM is explicitly designed to sell trains 'and other modes,' positioning it as a multimodal distribution standard rather than a purely rail-internal protocol.

**한국어 / Korean** — **개방형 판매·유통 모델(OSDM)** — OSDM(Open Sales and Distribution Model)은 UIC가 후원하는 개방형 표준으로, 여러 철도 운영사와 유통사를 가로질러 오퍼(offer), 예약, 발권(fulfillment), 사후 처리(after-sales)를 위한 현대적 API와 데이터 모델을 정의한다. 철도(및 점차 복합운송) 유통의 기반이 되는 상호운용 표준을 지향하며, 항공의 NDC 및 Offer/Order 모델에 대응하는 역할을 한다.

OSDM은 UIC의 국제철도해법(IRS) 시리즈(IRS 90918-10)로 발행되며, 하나의 오퍼를 분리 가능한 오퍼 파트(offer part) — admission, reservation, ancillary — 로 구조화한다. 검색/오퍼, 예약, 발권, 사후 처리에 이르는 리테일 전 생애주기를 표준화하여, 배분 시스템·유통사·리테일러가 일대일 독점 연동 없이 철도 상품을 교환할 수 있게 한다. OSDM은 명시적으로 열차 '및 다른 교통수단'을 함께 판매하도록 설계되어, 순수 철도 내부 프로토콜이 아니라 복합운송 유통 표준으로 자리매김한다.

**Aliases:** `Open Sales and Distribution Model`

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

# Citations
[1] UIC — Open Sales and Distribution Model (OSDM) project — IRS 90918-10
[2] UIC — What is OSDM? (Passenger Department factsheet)
