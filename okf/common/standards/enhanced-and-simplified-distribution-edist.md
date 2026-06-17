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
relationships:
  - type: child
    targetTerm: Passenger and Airport Data Interchange Standards (PADIS)
  - type: related
    targetTerm: NDC
  - type: related
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
sources:
  - org: IATA
    name: Enhanced and Simplified Distribution Implementation Guide
    version: ''
    section: ''
    url: ''
  - org: IATA
    name: Distribution with Offers & Orders (NDC)
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8H10a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-6"/><path d="M18 22l-4 4 4 4M30 22l4 4-4 4M26 20l-4 12"/><path d="M30 8h10v10"/><path d="M40 8L28 20"/></svg>
---

> Enhanced and Simplified Distribution is the formal IATA name for the family of XML messages that implement NDC and ONE Order, such as AirShopping, OfferPrice, OrderCreate, and OrderRetrieve. The term distinguishes the concrete message schema itself from the NDC program and brand.

Enhanced Distribution messages cover shopping, ordering, and managing offers and orders (with or without tickets), while Simplified Distribution messages cover orders without tickets, servicing, accounting, payment, and refund (the ONE Order side). EDIST schemas are published under PADIS governance (PSC Resolution 783) following the PADIS publication procedures and release calendar, and are aligned to the AIDM.

**한국어 / Korean** — **강화·단순화 유통 메시지(EDIST)** — Enhanced and Simplified Distribution(EDIST)는 AirShopping, OfferPrice, OrderCreate, OrderRetrieve 등 NDC와 ONE Order를 구현하는 XML 메시지 계열에 대한 IATA의 공식 명칭이다. 이 용어는 구체적인 메시지 스키마 자체를 NDC 프로그램·브랜드와 구분한다.

Enhanced Distribution 메시지는 (항공권 유무와 무관하게) 오퍼와 주문의 조회·주문·관리를 다루고, Simplified Distribution 메시지는 항공권 없는 주문, 서비싱, 회계, 결제, 환불(ONE Order 측면)을 다룬다. EDIST 스키마는 PADIS 거버넌스(PSC 결의 783)와 PADIS 발행 절차·릴리스 일정에 따라 발행되며 AIDM에 정렬된다.

**Aliases:** `EDIST`, `Enhanced and Simplified Distribution`, `NDC EDIST`, `EDIST XML`

# Related
- [Passenger and Airport Data Interchange Standards (PADIS)](/common/standards/passenger-and-airport-data-interchange-standards-padis.md) — child
- [NDC](/common/standards/ndc.md) — related
- [ONE Order](/common/standards/one-order.md) — related
- [Airline Industry Data Model (AIDM)](/common/standards/airline-industry-data-model-aidm.md) — related

# Distinctions
- **Enhanced and Simplified Distribution (EDIST)** vs [NDC](/common/standards/ndc.md) — NDC is the IATA program/brand and capability concept; EDIST is the formal name of the actual XML message schemas (AirShopping, OrderCreate, etc.) that implement NDC and ONE Order.
- **Enhanced and Simplified Distribution (EDIST)** vs [EDIFACT](/common/standards/edifact.md) — EDIST is the modern XML message family for offers and orders; EDIFACT is the legacy compact-text EDI syntax for classic reservations/ticketing messaging.

# Citations
[1] IATA — Enhanced and Simplified Distribution Implementation Guide
[2] IATA — Distribution with Offers & Orders (NDC)
