---
type: Standard Term
title: Offer
description: 'In IATA''s Offer and Order retailing model, an Offer is a seller-controlled, time-bound proposal presented to a customer that bundles one or more products (flights, ancillaries, services) with a price and conditions. The customer selects an Offer (or OfferItems) to create an Order.'
tags:
  - standards
  - active
  - IATA
timestamp: '2026-06-15T00:00:00Z'
id: offer
vertical: common
category: standards
conceptType: standard-term
status: active
term_ko: 오퍼(Offer)
definition_ko: 'IATA의 Offer and Order 리테일링 모델에서 오퍼(Offer)는 판매자가 통제하는 유효기간이 정해진 제안으로, 하나 이상의 상품(항공편, 부가 서비스, 서비스)을 가격 및 조건과 함께 묶어 고객에게 제시한다. 고객이 오퍼(또는 OfferItem)를 선택하면 주문(Order)이 생성된다.'
longDef: 'Offers are central to NDC, where the airline constructs and prices Offers in response to shopping requests, enabling dynamic and personalized pricing; in interline scenarios IATA terms the airline that owns and is accountable for an Offer the Offer Responsible Airline (ORA). An Offer is composed of OfferItems and is distinct from the resulting Order, which represents the committed sale.'
longDef_ko: '오퍼는 NDC의 핵심으로, 항공사는 조회 요청에 대응하여 오퍼를 구성하고 가격을 책정함으로써 동적이고 개인화된 가격 책정을 가능하게 한다. 인터라인(interline) 상황에서 IATA는 오퍼를 소유하고 책임지는 항공사를 Offer Responsible Airline(ORA)이라 부른다. 오퍼는 OfferItem으로 구성되며, 확정된 판매를 나타내는 결과물인 주문(Order)과는 구별된다.'
standardBody: IATA
aliases:
  - Air Offer
  - NDC Offer
relationships:
  - type: contrasts
    targetTerm: Order
  - type: related
    targetTerm: NDC
  - type: related
    targetTerm: ONE Order
  - type: related
    targetTerm: Availability
  - type: related
    targetTerm: Ancillary Service
distinctions:
  - targetTerm: Order
    explanation: An Offer is a non-binding priced proposal before purchase; an Order is the committed record created when the customer accepts an Offer.
    explanation_ko: '오퍼는 구매 이전의 구속력 없는 가격 제안이고, 주문은 고객이 오퍼를 수락할 때 생성되는 확정 기록이다.'
  - targetTerm: Availability
    explanation: 'Availability indicates whether seats/classes are sellable; an Offer is a constructed, priced bundle proposal built on top of availability.'
    explanation_ko: '가용성(Availability)은 좌석/등급의 판매 가능 여부를 나타내고, 오퍼는 그 가용성을 토대로 구성하여 가격을 책정한 묶음 제안이다.'
  - targetTerm: AirShopping
    explanation: An Offer is the data object (the airline's priced product proposal); AirShopping is the request/response message that produces a list of Offers.
    explanation_ko: 'Offer는 데이터 객체(항공사의 가격 책정된 상품 제안)이고, AirShopping은 그 Offer 목록을 생성하는 요청/응답 메시지이다.'
  - targetTerm: Dynamic Packaging
    explanation: Dynamic packaging is a retailing technique of bundling multiple suppliers' components at one price; an NDC Offer is a single airline's standardized priced proposal that may itself include a bundle of that airline's products.
    explanation_ko: '다이내믹 패키징은 여러 공급사의 구성요소를 하나의 가격으로 묶는 리테일링 기법이고, NDC 오퍼는 한 항공사의 표준화된 가격 제안으로 그 항공사의 상품 묶음을 포함할 수 있다.'
  - targetTerm: Offer Management System
    explanation: The Offer is the data object (the priced proposal); the Offer Management System is the platform that produces and governs Offers.
    explanation_ko: 'Offer는 데이터 객체(가격이 매겨진 제안)이고, 오퍼 관리 시스템은 그 오퍼를 만들어 내고 관리하는 플랫폼이다.'
  - targetTerm: Shopping API
    explanation: An Offer is the priced proposal object; the Shopping API is the request/response interface used to obtain Offers during search.
    explanation_ko: 'Offer는 가격이 매겨진 제안 객체이고, 쇼핑 API는 검색 중 오퍼를 얻기 위해 사용하는 요청/응답 인터페이스이다.'
sources:
  - name: Offer and Order (Airline Retailing)
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/services/consulting/airlines/airline-retailing-order-and-offer-management/'
  - name: NDC Standards
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/programs/airline-distribution/retailing/ndc/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M24 8l9 5v10c0 7-5 12-9 13-4-1-9-6-9-13V13z"/><path d="M20 23l3 3 6-7"/><circle cx="36" cy="36" r="7"/><path d="M33 36l2 2 4-4"/></svg>
---

> In IATA's Offer and Order retailing model, an Offer is a seller-controlled, time-bound proposal presented to a customer that bundles one or more products (flights, ancillaries, services) with a price and conditions. The customer selects an Offer (or OfferItems) to create an Order.

Offers are central to NDC, where the airline constructs and prices Offers in response to shopping requests, enabling dynamic and personalized pricing; in interline scenarios IATA terms the airline that owns and is accountable for an Offer the Offer Responsible Airline (ORA). An Offer is composed of OfferItems and is distinct from the resulting Order, which represents the committed sale.

**한국어 / Korean** — **오퍼(Offer)** — IATA의 Offer and Order 리테일링 모델에서 오퍼(Offer)는 판매자가 통제하는 유효기간이 정해진 제안으로, 하나 이상의 상품(항공편, 부가 서비스, 서비스)을 가격 및 조건과 함께 묶어 고객에게 제시한다. 고객이 오퍼(또는 OfferItem)를 선택하면 주문(Order)이 생성된다.

오퍼는 NDC의 핵심으로, 항공사는 조회 요청에 대응하여 오퍼를 구성하고 가격을 책정함으로써 동적이고 개인화된 가격 책정을 가능하게 한다. 인터라인(interline) 상황에서 IATA는 오퍼를 소유하고 책임지는 항공사를 Offer Responsible Airline(ORA)이라 부른다. 오퍼는 OfferItem으로 구성되며, 확정된 판매를 나타내는 결과물인 주문(Order)과는 구별된다.

**Aliases:** `Air Offer`, `NDC Offer`

# Related
- [Order](/common/standards/order.md) — contrasts
- [NDC](/common/standards/ndc.md) — related
- [ONE Order](/common/standards/one-order.md) — related
- [Availability](/air/air-shop/availability.md) — related
- [Ancillary Service](/air/air-ticket/ancillary-service.md) — related

# Distinctions
- **Offer** vs [Order](/common/standards/order.md) — An Offer is a non-binding priced proposal before purchase; an Order is the committed record created when the customer accepts an Offer.
- **Offer** vs [Availability](/air/air-shop/availability.md) — Availability indicates whether seats/classes are sellable; an Offer is a constructed, priced bundle proposal built on top of availability.
- **Offer** vs [AirShopping](/common/standards/airshopping.md) — An Offer is the data object (the airline's priced product proposal); AirShopping is the request/response message that produces a list of Offers.
- **Offer** vs [Dynamic Packaging](/common/standards/dynamic-packaging.md) — Dynamic packaging is a retailing technique of bundling multiple suppliers' components at one price; an NDC Offer is a single airline's standardized priced proposal that may itself include a bundle of that airline's products.
- **Offer** vs [Offer Management System](/common/standards/offer-management-system.md) — The Offer is the data object (the priced proposal); the Offer Management System is the platform that produces and governs Offers.
- **Offer** vs [Shopping API](/common/standards/shopping-api.md) — An Offer is the priced proposal object; the Shopping API is the request/response interface used to obtain Offers during search.

# Citations
[1] [IATA — Offer and Order (Airline Retailing)](https://www.iata.org/en/services/consulting/airlines/airline-retailing-order-and-offer-management/)
[2] [IATA — NDC Standards](https://www.iata.org/en/programs/airline-distribution/retailing/ndc/)
