---
type: Standard
title: Enhanced and Simplified Distribution (EDIST)
description: 'Enhanced and Simplified Distribution is the formal IATA name for the family of XML messages that implement NDC and ONE Order, such as AirShopping, OfferPrice, OrderCreate, and OrderRetrieve. The term distinguishes the concrete message schema itself from the NDC program and brand.'
tags:
  - standards
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: enhanced-and-simplified-distribution-edist
vertical: common
category: standards
conceptType: standard
status: active
abbreviation: EDIST
term_ko: 강화·단순화 유통 메시지(EDIST)
definition_ko: 'Enhanced and Simplified Distribution(EDIST)는 AirShopping, OfferPrice, OrderCreate, OrderRetrieve 등 NDC와 ONE Order를 구현하는 XML 메시지 계열에 대한 IATA의 공식 명칭이다. 이 용어는 구체적인 메시지 스키마 자체를 NDC 프로그램·브랜드와 구분한다.'
longDef: 'Enhanced Distribution messages cover shopping, ordering, and managing offers and orders (with or without tickets), while Simplified Distribution messages cover orders without tickets, servicing, accounting, payment, and refund (the ONE Order side). EDIST schemas are published under PADIS governance (PSC Resolution 783) following the PADIS publication procedures and release calendar, and are aligned to the AIDM.'
longDef_ko: 'Enhanced Distribution 메시지는 (항공권 유무와 무관하게) 오퍼와 주문의 조회·주문·관리를 다루고, Simplified Distribution 메시지는 항공권 없는 주문, 서비싱, 회계, 결제, 환불(ONE Order 측면)을 다룬다. EDIST 스키마는 PADIS 거버넌스(PSC 결의 783)와 PADIS 발행 절차·릴리스 일정에 따라 발행되며 AIDM에 정렬된다.'
standardBody: IATA
aliases:
  - EDIST
  - Enhanced and Simplified Distribution
  - NDC EDIST
  - EDIST XML
providerTerms:
  - provider: Sabre
    term: Sabre NDC IT (NDC-IT) message suite
    context: 'Sabre implements the EDIST/NDC message family (AirShopping, OfferPrice, OrderCreate, etc.) through its NDC IT APIs'
    context_ko: Sabre는 NDC IT API를 통해 EDIST/NDC 메시지 패밀리(AirShopping·OfferPrice·OrderCreate 등)를 구현함
    relationship: narrower
  - provider: ATPCO
    term: ATPCO NDC Solutions (OrderViewRS/OrderCreate)
    context: ATPCO's NDC developer APIs implement the EDIST message schemas for offers and orders
    context_ko: ATPCO의 NDC 개발자 API가 오퍼·주문용 EDIST 메시지 스키마를 구현함
    relationship: narrower
relationships:
  - type: child
    targetTerm: Passenger and Airport Data Interchange Standards (PADIS)
  - type: broader
    targetTerm: NDC
  - type: broader
    targetTerm: ONE Order
  - type: related
    targetTerm: Airline Industry Data Model (AIDM)
distinctions:
  - targetTerm: NDC
    explanation: 'NDC is the IATA program/brand and capability concept; EDIST is the formal name of the actual XML message schemas (AirShopping, OrderCreate, etc.) that implement NDC and ONE Order.'
    explanation_ko: 'NDC는 IATA의 프로그램·브랜드이자 역량 개념이고, EDIST는 NDC와 ONE Order를 실제로 구현하는 XML 메시지 스키마(AirShopping, OrderCreate 등)의 공식 명칭이다.'
  - targetTerm: EDIFACT
    explanation: EDIST is the modern XML message family for offers and orders; EDIFACT is the legacy compact-text EDI syntax for classic reservations/ticketing messaging.
    explanation_ko: 'EDIST는 오퍼와 주문을 위한 현대적 XML 메시지 계열이고, EDIFACT는 전통적 예약/발권 메시징을 위한 레거시 압축 텍스트 EDI 구문이다.'
  - targetTerm: Airline Industry Data Model (AIDM)
    explanation: AIDM defines the vocabulary and relationships; EDIST is the concrete XML message schema family derived from the AIDM concepts.
    explanation_ko: 'AIDM은 어휘와 관계를 정의하고, EDIST는 그 AIDM 개념으로부터 도출된 구체적인 XML 메시지 스키마 계열이다.'
  - targetTerm: IATA Resolution 787
    explanation: EDIST is the IATA programme/governance umbrella that evolves the NDC and ONE Order standards under Resolution 787; Resolution 787 is the originating resolution that created the NDC standard.
    explanation_ko: 'EDIST는 Resolution 787 하에서 NDC와 ONE Order 표준을 발전시키는 IATA 프로그램/거버넌스 우산이고, Resolution 787은 NDC 표준을 만든 발원 결의이다.'
  - targetTerm: Passenger and Airport Data Interchange Standards (PADIS)
    explanation: PADIS is the governance/authority publishing and versioning schemas; EDIST is the specific NDC XML message family published under PADIS governance.
    explanation_ko: 'PADIS는 스키마를 발행·버전 관리하는 거버넌스/권한 기구이고, EDIST는 PADIS 거버넌스 아래 발행되는 구체적인 NDC XML 메시지 계열이다.'
sources:
  - org: IATA
    name: Enhanced and Simplified Distribution Implementation Guide
    version: ''
    section: ''
    url: 'https://guides.developer.iata.org/docs/21-1_ImplementationGuide.pdf'
    tier: standard-body
  - org: IATA
    name: Distribution with Offers & Orders (NDC)
    version: ''
    section: ''
    url: 'https://www.iata.org/en/programs/airline-distribution/retailing/ndc/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8H10a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-6"/><path d="M18 22l-4 4 4 4M30 22l4 4-4 4M26 20l-4 12"/><path d="M30 8h10v10"/><path d="M40 8L28 20"/></svg>
---

> Enhanced and Simplified Distribution is the formal IATA name for the family of XML messages that implement NDC and ONE Order, such as AirShopping, OfferPrice, OrderCreate, and OrderRetrieve. The term distinguishes the concrete message schema itself from the NDC program and brand.

Enhanced Distribution messages cover shopping, ordering, and managing offers and orders (with or without tickets), while Simplified Distribution messages cover orders without tickets, servicing, accounting, payment, and refund (the ONE Order side). EDIST schemas are published under PADIS governance (PSC Resolution 783) following the PADIS publication procedures and release calendar, and are aligned to the AIDM.

**한국어 / Korean** — **강화·단순화 유통 메시지(EDIST)** — Enhanced and Simplified Distribution(EDIST)는 AirShopping, OfferPrice, OrderCreate, OrderRetrieve 등 NDC와 ONE Order를 구현하는 XML 메시지 계열에 대한 IATA의 공식 명칭이다. 이 용어는 구체적인 메시지 스키마 자체를 NDC 프로그램·브랜드와 구분한다.

Enhanced Distribution 메시지는 (항공권 유무와 무관하게) 오퍼와 주문의 조회·주문·관리를 다루고, Simplified Distribution 메시지는 항공권 없는 주문, 서비싱, 회계, 결제, 환불(ONE Order 측면)을 다룬다. EDIST 스키마는 PADIS 거버넌스(PSC 결의 783)와 PADIS 발행 절차·릴리스 일정에 따라 발행되며 AIDM에 정렬된다.

**Aliases:** `EDIST`, `Enhanced and Simplified Distribution`, `NDC EDIST`, `EDIST XML`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Sabre | `Sabre NDC IT (NDC-IT) message suite` | narrower | Sabre implements the EDIST/NDC message family (AirShopping, OfferPrice, OrderCreate, etc.) through its NDC IT APIs |
| ATPCO | `ATPCO NDC Solutions (OrderViewRS/OrderCreate)` | narrower | ATPCO's NDC developer APIs implement the EDIST message schemas for offers and orders |

# Related
- [Passenger and Airport Data Interchange Standards (PADIS)](/common/standards/passenger-and-airport-data-interchange-standards-padis.md) — child
- [NDC](/common/standards/ndc.md) — broader
- [ONE Order](/common/standards/one-order.md) — broader
- [Airline Industry Data Model (AIDM)](/common/standards/airline-industry-data-model-aidm.md) — related

# Distinctions
- **Enhanced and Simplified Distribution (EDIST)** vs [NDC](/common/standards/ndc.md) — NDC is the IATA program/brand and capability concept; EDIST is the formal name of the actual XML message schemas (AirShopping, OrderCreate, etc.) that implement NDC and ONE Order.
- **Enhanced and Simplified Distribution (EDIST)** vs [EDIFACT](/common/standards/edifact.md) — EDIST is the modern XML message family for offers and orders; EDIFACT is the legacy compact-text EDI syntax for classic reservations/ticketing messaging.
- **Enhanced and Simplified Distribution (EDIST)** vs [Airline Industry Data Model (AIDM)](/common/standards/airline-industry-data-model-aidm.md) — AIDM defines the vocabulary and relationships; EDIST is the concrete XML message schema family derived from the AIDM concepts.
- **Enhanced and Simplified Distribution (EDIST)** vs [IATA Resolution 787](/common/standards/iata-resolution-787.md) — EDIST is the IATA programme/governance umbrella that evolves the NDC and ONE Order standards under Resolution 787; Resolution 787 is the originating resolution that created the NDC standard.
- **Enhanced and Simplified Distribution (EDIST)** vs [Passenger and Airport Data Interchange Standards (PADIS)](/common/standards/passenger-and-airport-data-interchange-standards-padis.md) — PADIS is the governance/authority publishing and versioning schemas; EDIST is the specific NDC XML message family published under PADIS governance.

# Citations
[1] [IATA — Enhanced and Simplified Distribution Implementation Guide](https://guides.developer.iata.org/docs/21-1_ImplementationGuide.pdf)
[2] [IATA — Distribution with Offers & Orders (NDC)](https://www.iata.org/en/programs/airline-distribution/retailing/ndc/)
