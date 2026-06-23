---
type: Standard Term
title: AirShopping
description: 'AirShopping is the entry-point NDC message that initiates a shopping session and returns a list of flight Offers built from the airline''s offer engine in response to request criteria such as origin, destination, dates, cabin and passenger types. It is the first transaction in the NDC offer-and-order workflow, returning offers that a seller can later price and book.'
tags:
  - standards
  - active
  - IATA
timestamp: '2026-06-18T00:00:00Z'
id: airshopping
vertical: common
category: standards
conceptType: standard-term
status: active
term_ko: AirShopping (NDC 항공 쇼핑 메시지)
definition_ko: 'AirShopping은 쇼핑 세션을 개시하는 NDC의 진입점(entry-point) 메시지로, 출발지·도착지·날짜·객실등급·승객유형 등 요청 조건에 따라 항공사 오퍼 엔진이 생성한 항공 Offer 목록을 반환한다. NDC의 오퍼-주문(offer-and-order) 워크플로에서 가장 먼저 수행되는 트랜잭션으로, 판매자가 이후 가격을 확정(price)하고 예약(book)할 수 있는 오퍼들을 돌려준다.'
longDef: 'AirShopping supports both specific (dated, O&D-bound) and flexible (anonymous, calendar/branded) shopping. The response carries one or more OfferItems with priced or indicative offers, branded fares, and merchandising content, each identified by an OfferID that the seller references in subsequent OfferPrice and OrderCreate calls. Because the airline''s offer management system constructs the offer dynamically, AirShopping enables dynamic offers and continuous pricing rather than returning fixed published fares. It is distinct from the legacy availability/fare-quote split of EDIFACT distribution, where shopping was assembled by the GDS rather than the airline.'
longDef_ko: 'AirShopping은 특정(날짜·구간 지정) 쇼핑과 유연(익명·캘린더/브랜디드) 쇼핑을 모두 지원한다. 응답에는 가격이 매겨졌거나 지시적인(indicative) 오퍼, 브랜디드 운임, 머천다이징 콘텐츠를 담은 하나 이상의 OfferItem이 포함되며, 각 오퍼는 OfferID로 식별된다. 판매자는 이 OfferID를 이후 OfferPrice 및 OrderCreate 호출에서 참조한다. 항공사의 오퍼 관리 시스템(OMS)이 오퍼를 동적으로 구성하므로, AirShopping은 고정 공시운임을 반환하는 대신 동적 오퍼(dynamic offer)와 연속 가격결정(continuous pricing)을 가능하게 한다. 쇼핑을 GDS가 조립하던 EDIFACT 유통의 availability/fare-quote 분리 방식과는 구별된다.'
standardBody: IATA
aliases:
  - AirShopping Request/Response
  - AirShoppingRQ/RS
providerTerms:
  - provider: NDC/IATA
    term: IATA_AirShoppingRQ / IATA_AirShoppingRS (21.3+)
    context: 'From NDC 21.3, the AirShopping message schemas carry the IATA_ prefix under the AIDM-aligned naming convention'
    context_ko: NDC 21.3부터 AirShopping 메시지 스키마는 AIDM 정렬 명명 규칙에 따라 IATA_ 접두사를 가짐
    relationship: same
  - provider: Sabre
    term: NDC IT AirShopping / Bargain Finder Max (BFM)
    context: 'Sabre exposes NDC AirShopping via its NDC IT API, while Bargain Finder Max is the unified shop endpoint blending ATPCO, NDC and LCC content (being succeeded by Sabre Flight Shop)'
    context_ko: 'Sabre는 NDC IT API로 NDC AirShopping을 제공하며, Bargain Finder Max는 ATPCO·NDC·LCC 콘텐츠를 통합하는 조회 엔드포인트(Sabre Flight Shop으로 대체 중)'
    relationship: related
  - provider: Travelport
    term: CatalogProductOfferings (Search API)
    context: Travelport's JSON Air API uses CatalogProductOfferingsRequest/Response for shopping; the contentSourceList toggles GDS vs NDC content
    context_ko: Travelport JSON Air API는 조회에 CatalogProductOfferingsRequest/Response를 사용하며 contentSourceList로 GDS·NDC 콘텐츠를 전환함
    relationship: related
  - provider: OpenTravel
    term: OTA_AirLowFareSearchRQ / OTA_AirAvailRQ
    context: Legacy OpenTravel air shopping/availability messages that predate and parallel the NDC AirShopping offer flow
    context_ko: NDC AirShopping 오퍼 흐름에 앞서며 병행하는 레거시 OpenTravel 항공 조회·가용성 메시지
    relationship: related
relationships:
  - type: child
    targetTerm: NDC
  - type: related
    targetTerm: Offer
  - type: broader
    targetTerm: Shopping API
  - type: related
    targetTerm: Dynamic Offer
  - type: related
    targetTerm: Order
  - type: related
    targetTerm: Offer Management System
distinctions:
  - targetTerm: Shopping API
    explanation: 'Shopping API is the generic concept of any programmatic shopping interface; AirShopping is the specific, standardized NDC message that implements air shopping within IATA''s schema set.'
    explanation_ko: 'Shopping API는 모든 프로그래밍 방식 쇼핑 인터페이스를 가리키는 일반 개념이고, AirShopping은 IATA 스키마 집합 안에서 항공 쇼핑을 구현하는 특정 표준 NDC 메시지이다.'
  - targetTerm: Offer
    explanation: An Offer is the data object (the airline's priced product proposal); AirShopping is the request/response message that produces a list of Offers.
    explanation_ko: 'Offer는 데이터 객체(항공사의 가격 책정된 상품 제안)이고, AirShopping은 그 Offer 목록을 생성하는 요청/응답 메시지이다.'
sources:
  - org: IATA
    name: Distribution with Offers and Orders (NDC) Fact Sheet
    version: ''
    section: ''
    url: 'https://www.iata.org/en/iata-repository/pressroom/fact-sheets/fact-sheet-ndc/'
    tier: association
  - org: IATA
    name: NDC Implementation Guide / AirShopping message
    version: ''
    section: ''
    url: 'https://guides.developer.iata.org/docs/21-1_ImplementationGuide.pdf'
    tier: standard-body
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="19" cy="19" r="11"/><path d="M27 27l10 10"/><path d="M14 16h10M14 20h7M14 24h9"/></svg>
---

> AirShopping is the entry-point NDC message that initiates a shopping session and returns a list of flight Offers built from the airline's offer engine in response to request criteria such as origin, destination, dates, cabin and passenger types. It is the first transaction in the NDC offer-and-order workflow, returning offers that a seller can later price and book.

AirShopping supports both specific (dated, O&D-bound) and flexible (anonymous, calendar/branded) shopping. The response carries one or more OfferItems with priced or indicative offers, branded fares, and merchandising content, each identified by an OfferID that the seller references in subsequent OfferPrice and OrderCreate calls. Because the airline's offer management system constructs the offer dynamically, AirShopping enables dynamic offers and continuous pricing rather than returning fixed published fares. It is distinct from the legacy availability/fare-quote split of EDIFACT distribution, where shopping was assembled by the GDS rather than the airline.

**한국어 / Korean** — **AirShopping (NDC 항공 쇼핑 메시지)** — AirShopping은 쇼핑 세션을 개시하는 NDC의 진입점(entry-point) 메시지로, 출발지·도착지·날짜·객실등급·승객유형 등 요청 조건에 따라 항공사 오퍼 엔진이 생성한 항공 Offer 목록을 반환한다. NDC의 오퍼-주문(offer-and-order) 워크플로에서 가장 먼저 수행되는 트랜잭션으로, 판매자가 이후 가격을 확정(price)하고 예약(book)할 수 있는 오퍼들을 돌려준다.

AirShopping은 특정(날짜·구간 지정) 쇼핑과 유연(익명·캘린더/브랜디드) 쇼핑을 모두 지원한다. 응답에는 가격이 매겨졌거나 지시적인(indicative) 오퍼, 브랜디드 운임, 머천다이징 콘텐츠를 담은 하나 이상의 OfferItem이 포함되며, 각 오퍼는 OfferID로 식별된다. 판매자는 이 OfferID를 이후 OfferPrice 및 OrderCreate 호출에서 참조한다. 항공사의 오퍼 관리 시스템(OMS)이 오퍼를 동적으로 구성하므로, AirShopping은 고정 공시운임을 반환하는 대신 동적 오퍼(dynamic offer)와 연속 가격결정(continuous pricing)을 가능하게 한다. 쇼핑을 GDS가 조립하던 EDIFACT 유통의 availability/fare-quote 분리 방식과는 구별된다.

**Aliases:** `AirShopping Request/Response`, `AirShoppingRQ/RS`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| NDC/IATA | `IATA_AirShoppingRQ / IATA_AirShoppingRS (21.3+)` | same | From NDC 21.3, the AirShopping message schemas carry the IATA_ prefix under the AIDM-aligned naming convention |
| Sabre | `NDC IT AirShopping / Bargain Finder Max (BFM)` | related | Sabre exposes NDC AirShopping via its NDC IT API, while Bargain Finder Max is the unified shop endpoint blending ATPCO, NDC and LCC content (being succeeded by Sabre Flight Shop) |
| Travelport | `CatalogProductOfferings (Search API)` | related | Travelport's JSON Air API uses CatalogProductOfferingsRequest/Response for shopping; the contentSourceList toggles GDS vs NDC content |
| OpenTravel | `OTA_AirLowFareSearchRQ / OTA_AirAvailRQ` | related | Legacy OpenTravel air shopping/availability messages that predate and parallel the NDC AirShopping offer flow |

# Related
- [NDC](/common/standards/ndc.md) — child
- [Offer](/common/standards/offer.md) — related
- [Shopping API](/common/standards/shopping-api.md) — broader
- [Dynamic Offer](/common/standards/dynamic-offer.md) — related
- [Order](/common/standards/order.md) — related
- [Offer Management System](/common/standards/offer-management-system.md) — related

# Distinctions
- **AirShopping** vs [Shopping API](/common/standards/shopping-api.md) — Shopping API is the generic concept of any programmatic shopping interface; AirShopping is the specific, standardized NDC message that implements air shopping within IATA's schema set.
- **AirShopping** vs [Offer](/common/standards/offer.md) — An Offer is the data object (the airline's priced product proposal); AirShopping is the request/response message that produces a list of Offers.

# Citations
[1] [IATA — Distribution with Offers and Orders (NDC) Fact Sheet](https://www.iata.org/en/iata-repository/pressroom/fact-sheets/fact-sheet-ndc/)
[2] [IATA — NDC Implementation Guide / AirShopping message](https://guides.developer.iata.org/docs/21-1_ImplementationGuide.pdf)
