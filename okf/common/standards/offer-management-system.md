---
type: System
title: Offer Management System
description: 'An Offer Management System is the airline-retailing platform that constructs, prices, and manages Offers in response to shopping requests, dynamically bundling flights, ancillaries, and third-party products with conditions and validity. It is the ''shop'' side counterpart to the Order Management System in IATA''s Offer and Order model.'
tags:
  - standards
  - active
timestamp: '2026-06-17T00:00:00Z'
id: offer-management-system
vertical: common
category: standards
conceptType: system
status: active
abbreviation: OMS
term_ko: 오퍼 관리 시스템(Offer Management System)
definition_ko: '오퍼 관리 시스템(Offer Management System)은 조회 요청에 대응하여 오퍼(Offer)를 구성·가격책정·관리하는 항공 리테일링 플랫폼으로, 항공편·부가 서비스·제3자 상품을 조건과 유효기간과 함께 동적으로 묶는다. IATA의 Offer and Order 모델에서 주문 관리 시스템(Order Management System)에 대응하는 ''조회(shop)'' 측 시스템이다.'
longDef: 'Often abbreviated OMS (or labelled the ''Offer'' half of a combined Offer & Order Management System), it owns offer creation, dynamic pricing/dynamic offers, eligibility, personalization, and merchandising logic, typically feeding NDC AirShopping/OfferPrice responses. When a customer accepts an Offer, control passes to the Order Management System, which creates and services the resulting Order. The two together replace fragmented legacy pricing, availability, and PNR/ticketing functions in modern airline retailing.'
longDef_ko: '흔히 OMS로 약칭되거나 통합 Offer & Order Management System의 ''Offer'' 절반으로 불리며, 오퍼 생성, 동적 가격/동적 오퍼, 자격 판단, 개인화, 머천다이징 로직을 담당하고 보통 NDC AirShopping/OfferPrice 응답을 만들어 낸다. 고객이 오퍼를 수락하면 제어권이 주문 관리 시스템으로 넘어가 결과 주문(Order)을 생성·서비스한다. 두 시스템이 함께 현대 항공 리테일링에서 분산된 레거시 가격·가용성·PNR/발권 기능을 대체한다.'
aliases:
  - Offer Management System (OMS)
  - OfMS
  - Offer Engine
providerTerms:
  - provider: Amadeus
    term: Amadeus Nevio
    context: Amadeus's offer-and-order platform that constructs and prices dynamic offers for airline retailing
    context_ko: 항공 리테일링용 동적 오퍼를 구성·가격 산정하는 Amadeus의 오퍼·주문 플랫폼
    relationship: narrower
  - provider: Sabre
    term: Sabre Mosaic (Offer Management)
    context: Sabre Mosaic's offer-management suite builds and personalizes offers with a real-time pricing engine
    context_ko: 실시간 가격 엔진으로 오퍼를 구성·개인화하는 Sabre Mosaic의 오퍼 관리 스위트
    relationship: narrower
  - provider: PROS
    term: PROS (offer/pricing engine)
    context: PSS-neutral offer and dynamic-pricing engine used by airlines to generate offers
    context_ko: 항공사가 오퍼 생성에 사용하는 PSS 중립 오퍼·동적 가격 엔진
    relationship: narrower
  - provider: Datalex
    term: Datalex (Retailaer)
    context: PSS-neutral airline retailing/offer platform constructing dynamic offers
    context_ko: 동적 오퍼를 구성하는 PSS 중립 항공 리테일링·오퍼 플랫폼
    relationship: narrower
relationships:
  - type: related
    targetTerm: Offer
  - type: contrasts
    targetTerm: Order Management System (OMS)
  - type: related
    targetTerm: NDC
  - type: related
    targetTerm: Shopping API
  - type: related
    targetTerm: Ancillary Service
distinctions:
  - targetTerm: Order Management System (OMS)
    explanation: 'An Offer Management System builds and prices Offers in the shopping phase; an Order Management System creates, holds, and services the Order after the customer buys. The ''OMS'' abbreviation is shared and often refers to a combined Offer & Order platform.'
    explanation_ko: '오퍼 관리 시스템은 조회 단계에서 오퍼를 구성·가격책정하고, 주문 관리 시스템은 고객 구매 이후 주문을 생성·보관·서비스한다. ''OMS'' 약어는 둘이 공유하며 흔히 통합 Offer & Order 플랫폼을 가리킨다.'
  - targetTerm: Offer
    explanation: The Offer is the data object (the priced proposal); the Offer Management System is the platform that produces and governs Offers.
    explanation_ko: 'Offer는 데이터 객체(가격이 매겨진 제안)이고, 오퍼 관리 시스템은 그 오퍼를 만들어 내고 관리하는 플랫폼이다.'
sources:
  - org: IATA
    name: Airline Retailing - Order and Offer Management
    version: ''
    section: ''
    url: 'https://www.iata.org/en/services/consulting/airlines/airline-retailing-order-and-offer-management/'
  - org: IATA
    name: Distribution with Offers and Orders (NDC)
    version: ''
    section: ''
    url: 'https://www.iata.org/en/programs/airline-distribution/retailing/ndc/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="8" width="32" height="32" rx="3"/><path d="M14 18h12"/><path d="M14 24h20"/><path d="M14 30h16"/><path d="M30 14l4 4 6-7" stroke-width="2.5"/></svg>
---

> An Offer Management System is the airline-retailing platform that constructs, prices, and manages Offers in response to shopping requests, dynamically bundling flights, ancillaries, and third-party products with conditions and validity. It is the 'shop' side counterpart to the Order Management System in IATA's Offer and Order model.

Often abbreviated OMS (or labelled the 'Offer' half of a combined Offer & Order Management System), it owns offer creation, dynamic pricing/dynamic offers, eligibility, personalization, and merchandising logic, typically feeding NDC AirShopping/OfferPrice responses. When a customer accepts an Offer, control passes to the Order Management System, which creates and services the resulting Order. The two together replace fragmented legacy pricing, availability, and PNR/ticketing functions in modern airline retailing.

**한국어 / Korean** — **오퍼 관리 시스템(Offer Management System)** — 오퍼 관리 시스템(Offer Management System)은 조회 요청에 대응하여 오퍼(Offer)를 구성·가격책정·관리하는 항공 리테일링 플랫폼으로, 항공편·부가 서비스·제3자 상품을 조건과 유효기간과 함께 동적으로 묶는다. IATA의 Offer and Order 모델에서 주문 관리 시스템(Order Management System)에 대응하는 '조회(shop)' 측 시스템이다.

흔히 OMS로 약칭되거나 통합 Offer & Order Management System의 'Offer' 절반으로 불리며, 오퍼 생성, 동적 가격/동적 오퍼, 자격 판단, 개인화, 머천다이징 로직을 담당하고 보통 NDC AirShopping/OfferPrice 응답을 만들어 낸다. 고객이 오퍼를 수락하면 제어권이 주문 관리 시스템으로 넘어가 결과 주문(Order)을 생성·서비스한다. 두 시스템이 함께 현대 항공 리테일링에서 분산된 레거시 가격·가용성·PNR/발권 기능을 대체한다.

**Aliases:** `Offer Management System (OMS)`, `OfMS`, `Offer Engine`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Amadeus | `Amadeus Nevio` | narrower | Amadeus's offer-and-order platform that constructs and prices dynamic offers for airline retailing |
| Sabre | `Sabre Mosaic (Offer Management)` | narrower | Sabre Mosaic's offer-management suite builds and personalizes offers with a real-time pricing engine |
| PROS | `PROS (offer/pricing engine)` | narrower | PSS-neutral offer and dynamic-pricing engine used by airlines to generate offers |
| Datalex | `Datalex (Retailaer)` | narrower | PSS-neutral airline retailing/offer platform constructing dynamic offers |

# Related
- [Offer](/common/standards/offer.md) — related
- [Order Management System (OMS)](/common/standards/order-management-system-oms.md) — contrasts
- [NDC](/common/standards/ndc.md) — related
- [Shopping API](/common/standards/shopping-api.md) — related
- [Ancillary Service](/air/air-ticket/ancillary-service.md) — related

# Distinctions
- **Offer Management System** vs [Order Management System (OMS)](/common/standards/order-management-system-oms.md) — An Offer Management System builds and prices Offers in the shopping phase; an Order Management System creates, holds, and services the Order after the customer buys. The 'OMS' abbreviation is shared and often refers to a combined Offer & Order platform.
- **Offer Management System** vs [Offer](/common/standards/offer.md) — The Offer is the data object (the priced proposal); the Offer Management System is the platform that produces and governs Offers.

# Citations
[1] [IATA — Airline Retailing - Order and Offer Management](https://www.iata.org/en/services/consulting/airlines/airline-retailing-order-and-offer-management/)
[2] [IATA — Distribution with Offers and Orders (NDC)](https://www.iata.org/en/programs/airline-distribution/retailing/ndc/)
