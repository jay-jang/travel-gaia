---
type: Standard Term
title: Shopping API
description: 'A Shopping API is the distribution interface a travel seller calls to search a supplier''s products and receive priced offers in response to trip criteria such as origin, destination, dates, and passengers. In IATA NDC the canonical example is the AirShopping message (IATA_AirShoppingRQ/RS), which returns flight offers with fares, branded options, and ancillaries.'
tags:
  - standards
  - active
  - IATA (NDC AirShopping)
timestamp: '2026-06-17T00:00:00Z'
id: shopping-api
vertical: common
category: standards
conceptType: standard-term
status: active
term_ko: 쇼핑 API(조회 API)
definition_ko: '쇼핑 API(Shopping API)는 여행 판매자가 출발지·도착지·날짜·승객 등 여정 조건에 대해 공급사의 상품을 검색하고 가격이 매겨진 오퍼를 응답으로 받기 위해 호출하는 유통 인터페이스이다. IATA NDC에서 대표적인 예는 AirShopping 메시지(IATA_AirShoppingRQ/RS)로, 운임·브랜디드 옵션·부가 서비스를 포함한 항공 오퍼를 반환한다.'
longDef: 'The shopping step is the entry point of the Offer and Order flow: a seller submits a request (e.g. IATA_AirShoppingRQ) and the supplier''s Offer engine returns a response (IATA_AirShoppingRS) of priced availability offers, often supporting anonymous or personalized, attribute, affinity, and calendar/date-range shopping with media at offer level. Selected offers are then re-priced (e.g. OfferPrice) and committed via OrderCreate. Shopping APIs are exposed over SOAP/XML and increasingly REST/JSON, and also exist outside NDC for hotels and other content.'
longDef_ko: '조회(shopping) 단계는 Offer and Order 흐름의 진입점이다. 판매자가 요청(예: IATA_AirShoppingRQ)을 보내면 공급사의 오퍼 엔진이 가격이 매겨진 가용성 오퍼들의 응답(IATA_AirShoppingRS)을 반환하며, 익명 또는 개인화된 조회, 속성(attribute)·친화도(affinity)·달력/기간 조회, 오퍼 단위 미디어 등을 지원하는 경우가 많다. 선택된 오퍼는 이후 재가격책정(예: OfferPrice)되고 OrderCreate로 확정된다. 쇼핑 API는 SOAP/XML 및 점차 REST/JSON으로 제공되며, NDC 밖에서도 호텔 등 다른 콘텐츠를 위해 존재한다.'
standardBody: IATA (NDC AirShopping)
aliases:
  - Air Shopping API
  - AirShopping
  - Search API
  - Shopping Service
providerTerms:
  - provider: IATA
    term: AirShopping (IATA_AirShoppingRQ / IATA_AirShoppingRS)
    context: The NDC shopping message pair that returns priced flight offers
    context_ko: 가격이 매겨진 항공 오퍼를 반환하는 NDC 조회 메시지 쌍
    relationship: narrower
relationships:
  - type: related
    targetTerm: NDC
  - type: related
    targetTerm: Offer
  - type: related
    targetTerm: Offer Management System
  - type: related
    targetTerm: Availability
  - type: related
    targetTerm: REST API
distinctions:
  - targetTerm: Availability
    explanation: 'Availability indicates whether seats/classes are sellable; a Shopping API returns constructed, priced Offers built on top of that availability.'
    explanation_ko: '가용성(Availability)은 좌석/등급의 판매 가능 여부를 나타내고, 쇼핑 API는 그 가용성을 토대로 구성하여 가격을 매긴 오퍼를 반환한다.'
  - targetTerm: Offer
    explanation: An Offer is the priced proposal object; the Shopping API is the request/response interface used to obtain Offers during search.
    explanation_ko: 'Offer는 가격이 매겨진 제안 객체이고, 쇼핑 API는 검색 중 오퍼를 얻기 위해 사용하는 요청/응답 인터페이스이다.'
  - targetTerm: AirShopping
    explanation: 'Shopping API is the generic concept of any programmatic shopping interface; AirShopping is the specific, standardized NDC message that implements air shopping within IATA''s schema set.'
    explanation_ko: 'Shopping API는 모든 프로그래밍 방식 쇼핑 인터페이스를 가리키는 일반 개념이고, AirShopping은 IATA 스키마 집합 안에서 항공 쇼핑을 구현하는 특정 표준 NDC 메시지이다.'
sources:
  - org: IATA
    name: NDC Standards (AirShopping message)
    version: ''
    section: ''
    url: 'https://www.iata.org/en/programs/airline-distribution/retailing/ndc/'
  - org: ATPCO
    name: NDC Solutions - AirShopping API
    version: ''
    section: ''
    url: 'https://devportal.atpco.net/ndc-solutions/default/airshopping-request'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="21" cy="21" r="12"/><line x1="30" y1="30" x2="40" y2="40"/><path d="M15 21h12"/><path d="M27 21l-4-4"/><path d="M27 21l-4 4"/></svg>
---

> A Shopping API is the distribution interface a travel seller calls to search a supplier's products and receive priced offers in response to trip criteria such as origin, destination, dates, and passengers. In IATA NDC the canonical example is the AirShopping message (IATA_AirShoppingRQ/RS), which returns flight offers with fares, branded options, and ancillaries.

The shopping step is the entry point of the Offer and Order flow: a seller submits a request (e.g. IATA_AirShoppingRQ) and the supplier's Offer engine returns a response (IATA_AirShoppingRS) of priced availability offers, often supporting anonymous or personalized, attribute, affinity, and calendar/date-range shopping with media at offer level. Selected offers are then re-priced (e.g. OfferPrice) and committed via OrderCreate. Shopping APIs are exposed over SOAP/XML and increasingly REST/JSON, and also exist outside NDC for hotels and other content.

**한국어 / Korean** — **쇼핑 API(조회 API)** — 쇼핑 API(Shopping API)는 여행 판매자가 출발지·도착지·날짜·승객 등 여정 조건에 대해 공급사의 상품을 검색하고 가격이 매겨진 오퍼를 응답으로 받기 위해 호출하는 유통 인터페이스이다. IATA NDC에서 대표적인 예는 AirShopping 메시지(IATA_AirShoppingRQ/RS)로, 운임·브랜디드 옵션·부가 서비스를 포함한 항공 오퍼를 반환한다.

조회(shopping) 단계는 Offer and Order 흐름의 진입점이다. 판매자가 요청(예: IATA_AirShoppingRQ)을 보내면 공급사의 오퍼 엔진이 가격이 매겨진 가용성 오퍼들의 응답(IATA_AirShoppingRS)을 반환하며, 익명 또는 개인화된 조회, 속성(attribute)·친화도(affinity)·달력/기간 조회, 오퍼 단위 미디어 등을 지원하는 경우가 많다. 선택된 오퍼는 이후 재가격책정(예: OfferPrice)되고 OrderCreate로 확정된다. 쇼핑 API는 SOAP/XML 및 점차 REST/JSON으로 제공되며, NDC 밖에서도 호텔 등 다른 콘텐츠를 위해 존재한다.

**Aliases:** `Air Shopping API`, `AirShopping`, `Search API`, `Shopping Service`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| IATA | `AirShopping (IATA_AirShoppingRQ / IATA_AirShoppingRS)` | narrower | The NDC shopping message pair that returns priced flight offers |

# Related
- [NDC](/common/standards/ndc.md) — related
- [Offer](/common/standards/offer.md) — related
- [Offer Management System](/common/standards/offer-management-system.md) — related
- [Availability](/air/air-shop/availability.md) — related
- [REST API](/common/standards/rest-api.md) — related

# Distinctions
- **Shopping API** vs [Availability](/air/air-shop/availability.md) — Availability indicates whether seats/classes are sellable; a Shopping API returns constructed, priced Offers built on top of that availability.
- **Shopping API** vs [Offer](/common/standards/offer.md) — An Offer is the priced proposal object; the Shopping API is the request/response interface used to obtain Offers during search.
- **Shopping API** vs [AirShopping](/common/standards/airshopping.md) — Shopping API is the generic concept of any programmatic shopping interface; AirShopping is the specific, standardized NDC message that implements air shopping within IATA's schema set.

# Citations
[1] [IATA — NDC Standards (AirShopping message)](https://www.iata.org/en/programs/airline-distribution/retailing/ndc/)
[2] [ATPCO — NDC Solutions - AirShopping API](https://devportal.atpco.net/ndc-solutions/default/airshopping-request)
