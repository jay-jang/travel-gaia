---
type: Business Term
title: Attribute-Based Selling
description: 'An airline retailing methodology, enabled by IATA''s NDC and Modern Airline Retailing (MAR) framework, in which an airline constructs and prices a traveller''s purchase as a set of individually valued product attributes — seat type, legroom, baggage allowance, meal preference, lounge access, priority boarding — rather than selling a single fare bundle tied to a traditional booking class. The airline generates a real-time, personalised Offer from disaggregated components and distributes it via NDC API to any channel.'
tags:
  - air-shop
  - active
  - IATA
timestamp: '2026-08-07T00:00:00Z'
id: attribute-based-selling
vertical: air
category: air-shop
conceptType: business-term
status: active
abbreviation: ABS
term_ko: 속성 기반 판매(Attribute-Based Selling)
definition_ko: 'IATA의 NDC 및 현대 항공사 리테일링(MAR) 프레임워크가 가능하게 하는 항공사 리테일링 방법론으로, 전통적인 예약 클래스(Booking Class)에 묶인 단일 운임 번들을 판매하는 대신, 좌석 유형·레그룸·수하물 허용량·식사 선호·라운지 이용·우선 탑승 등 개별적으로 가치를 평가한 상품 속성의 집합으로 여행자의 구매를 구성·가격 책정한다. 항공사는 분해된 구성 요소로 실시간 개인화된 Offer를 생성하고 NDC API를 통해 모든 채널에 배포한다.'
longDef: 'Attribute-Based Selling is the commercial retailing strategy built on IATA''s Offers and Orders architecture (NDC 21.3 onwards). In the traditional distribution model, an airline files a fare in a booking class (e.g., "Y" economy) and the class price implicitly bundles seat, bags, change conditions, and other inclusions; the traveller gets the whole bundle or nothing. Under ABS, the airline decomposes the travel product into separately addressed, individually priced attributes — a specific seat position (window, aisle, extra-legroom row), a checked-bag allowance, a meal, or Wi-Fi — that can be individually surfaced to the traveller during shopping and selectively included or excluded from the dynamic Offer. The result is that two travellers on the same flight see different Offers built for their profiles, travel history, and preferences, each paying only for what they value. IATA frames this transition as moving from "class-based distribution" to "offer-based distribution": "product attributes (differentiation) provide the ability to show competitive features that may be unique to the Offer and therefore drive purchase decisions." ABS is not a formal named IATA standard (unlike NDC, which is the technical message specification); it is the broadly adopted industry term for the retailing outcome that NDC and MAR enable. It should be distinguished from simple ancillary selling (where add-ons are bolted onto a pre-chosen class fare) and from low-cost-carrier fare unbundling (which separates items from a base fare but remains within a class/bucket framework). ABS removes the class concept from the core offer construction entirely.'
longDef_ko: '속성 기반 판매(ABS)는 IATA의 Offers and Orders 아키텍처(NDC 21.3 이후) 위에 구축된 상업 리테일링 전략이다. 전통적인 유통 모델에서는 항공사가 예약 클래스(예: "Y" 이코노미)에 운임을 등록하고, 클래스 가격은 좌석·수하물·변경 조건 등을 암묵적으로 묶는다. ABS에서는 항공사가 여행 상품을 개별적으로 처리·가격 책정된 속성(특정 좌석 위치, 위탁 수하물, 식사, Wi-Fi 등)으로 분해하여 쇼핑 중 여행자에게 개별 노출하고 동적 Offer에 선택적으로 포함하거나 제외한다. 결과적으로 같은 항공편의 두 여행자가 각자의 프로필·여행 이력·선호도에 맞게 구성된 서로 다른 Offer를 보게 된다. IATA는 이 전환을 "클래스 기반 유통"에서 "오퍼 기반 유통"으로의 이동으로 규정한다. ABS는 NDC(기술 메시지 규격)와 달리 공식 IATA 명칭 표준은 아니며, NDC와 MAR이 가능하게 하는 리테일링 결과물에 대한 업계 공통 용어이다.'
standardBody: IATA
aliases:
  - Attribute-Based Pricing (air)
  - ABS
  - Offer-Based Distribution
relationships:
  - type: broader
    targetTerm: NDC
  - type: related
    targetTerm: Offer
  - type: related
    targetTerm: Dynamic Offer
  - type: related
    targetTerm: Fare Family
  - type: related
    targetTerm: Ancillary Service
  - type: related
    targetTerm: AirShopping
distinctions:
  - targetTerm: NDC
    explanation: 'NDC (New Distribution Capability) is the IATA XML API standard that is the technical foundation for ABS; Attribute-Based Selling is the commercial retailing methodology and business model built on top of NDC. NDC is the plumbing; ABS is what flows through it.'
    explanation_ko: 'NDC(New Distribution Capability)는 ABS의 기술적 토대가 되는 IATA XML API 표준이고, ABS는 NDC 위에 구축된 상업 리테일링 방법론이자 비즈니스 모델이다. NDC가 배관이라면 ABS는 그것을 통해 흐르는 것이다.'
  - targetTerm: Ancillary Service
    explanation: 'Ancillary Services are add-ons offered after the traveller has chosen a base fare and class; in classic ancillary selling the booking-class bundle already exists. ABS moves attribute selection to the core offer-construction phase before any class or bundle is fixed — attributes are not post-sale upsells but the primary basis on which the offer is assembled.'
    explanation_ko: 'Ancillary Service는 여행자가 기본 운임과 클래스를 선택한 후 제공되는 부가 서비스로, 기존 부가서비스 판매에서는 예약 클래스 번들이 이미 존재한다. ABS는 속성 선택을 클래스나 번들이 고정되기 전의 오퍼 구성 단계 핵심으로 옮긴다. 속성은 판매 후 업셀이 아니라 오퍼가 조립되는 주요 근거이다.'
  - targetTerm: Fare Family
    explanation: 'A Fare Family is a branded bundle of a base fare plus a defined set of inclusions (e.g., "Comfort" = extra legroom + 1 bag + lounge). ABS supersedes Fare Families as the default model: instead of the airline pre-defining bundles, the traveller assembles their own by selecting individual attributes from the Offer in real time.'
    explanation_ko: 'Fare Family는 기본 운임에 정해진 포함 사항(예: "Comfort" = 추가 레그룸 + 수하물 1개 + 라운지)을 묶은 브랜드 번들이다. ABS는 Fare Family를 기본 모델로 대체한다. 항공사가 사전에 번들을 정의하는 대신, 여행자가 실시간 Offer에서 개별 속성을 선택하여 자신만의 번들을 조립한다.'
sources:
  - name: 'Distribution with Offers and Orders (NDC) — Modern Airline Retailing'
    org: IATA
    version: 'NDC 24.1 (latest)'
    section: ''
    url: 'https://www.iata.org/en/programs/airline-distribution/retailing/ndc/'
    tier: association
  - name: NDC Fact Sheet
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/iata-repository/pressroom/fact-sheets/fact-sheet-ndc/'
    tier: association
icon: '<svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="10" width="36" height="28" rx="3"/><line x1="6" y1="20" x2="42" y2="20"/><line x1="18" y1="20" x2="18" y2="38"/><path d="M12 15h3"/><path d="M24 15h3"/><path d="M36 15h3"/><circle cx="10" cy="30" r="2.5" fill="currentColor" fill-opacity="0.15"/><circle cx="10" cy="30" r="2.5"/><circle cx="10" cy="34" r="2.5" fill="currentColor" fill-opacity="0.3"/><circle cx="10" cy="34" r="2.5"/></svg>'
---

> An airline retailing methodology, enabled by IATA's NDC and Modern Airline Retailing (MAR) framework, in which an airline constructs and prices a traveller's purchase as a set of individually valued product attributes — seat type, legroom, baggage allowance, meal preference, lounge access, priority boarding — rather than selling a single fare bundle tied to a traditional booking class. The airline generates a real-time, personalised Offer from disaggregated components and distributes it via NDC API to any channel.

Attribute-Based Selling is the commercial retailing strategy built on IATA's Offers and Orders architecture (NDC 21.3 onwards). In the traditional distribution model, an airline files a fare in a booking class (e.g., "Y" economy) and the class price implicitly bundles seat, bags, change conditions, and other inclusions; the traveller gets the whole bundle or nothing. Under ABS, the airline decomposes the travel product into separately addressed, individually priced attributes — a specific seat position (window, aisle, extra-legroom row), a checked-bag allowance, a meal, or Wi-Fi — that can be individually surfaced to the traveller during shopping and selectively included or excluded from the dynamic Offer. The result is that two travellers on the same flight see different Offers built for their profiles, travel history, and preferences, each paying only for what they value. IATA frames this transition as moving from "class-based distribution" to "offer-based distribution." ABS is not a formal named IATA standard (unlike NDC); it is the broadly adopted industry term for the retailing outcome that NDC and MAR enable. It should be distinguished from simple ancillary selling (where add-ons are bolted onto a pre-chosen class fare) and from low-cost-carrier fare unbundling (which separates items from a base fare but remains within a class/bucket framework).

**한국어 / Korean** — **속성 기반 판매(Attribute-Based Selling)** — IATA의 NDC 및 현대 항공사 리테일링(MAR) 프레임워크가 가능하게 하는 항공사 리테일링 방법론으로, 전통적인 예약 클래스에 묶인 단일 운임 번들을 판매하는 대신, 좌석 유형·레그룸·수하물·식사·라운지·우선 탑승 등 개별 속성으로 여행자의 구매를 구성·가격 책정한다.

ABS는 IATA의 Offers and Orders 아키텍처 위에 구축된 상업 리테일링 전략이다. 전통적 모델에서는 항공사가 예약 클래스에 운임을 등록하고 클래스 가격이 좌석·수하물·변경 조건 등을 암묵적으로 묶는다. ABS에서는 상품을 개별 속성으로 분해하여 쇼핑 단계에서 여행자에게 노출하고, 각자의 프로필과 선호에 맞는 실시간 Offer를 생성한다. ABS는 NDC(기술 표준)와 달리 IATA 공식 표준 명칭은 아니며, NDC와 MAR이 가능하게 하는 리테일링 결과에 대한 업계 공통 용어이다.

**Aliases:** `Attribute-Based Pricing (air)`, `ABS`, `Offer-Based Distribution`

# Related
- [NDC](/common/standards/ndc.md) — broader
- [Offer](/common/standards/offer.md) — related
- [Dynamic Offer](/common/standards/dynamic-offer.md) — related
- [Fare Family](/air/air-shop/fare-family.md) — related
- [Ancillary Service](/air/air-ticket/ancillary-service.md) — related
- [AirShopping](/common/standards/airshopping.md) — related

# Distinctions
- **Attribute-Based Selling** vs [NDC](/common/standards/ndc.md) — NDC (New Distribution Capability) is the IATA XML API standard that is the technical foundation for ABS; Attribute-Based Selling is the commercial retailing methodology and business model built on top of NDC. NDC is the plumbing; ABS is what flows through it.
- **Attribute-Based Selling** vs [Ancillary Service](/air/air-ticket/ancillary-service.md) — Ancillary Services are add-ons offered after the traveller has chosen a base fare and class; in classic ancillary selling the booking-class bundle already exists. ABS moves attribute selection to the core offer-construction phase before any class or bundle is fixed — attributes are not post-sale upsells but the primary basis on which the offer is assembled.
- **Attribute-Based Selling** vs [Fare Family](/air/air-shop/fare-family.md) — A Fare Family is a branded bundle of a base fare plus a defined set of inclusions (e.g., "Comfort" = extra legroom + 1 bag + lounge). ABS supersedes Fare Families as the default model: instead of the airline pre-defining bundles, the traveller assembles their own by selecting individual attributes from the Offer in real time.

# Citations
[1] [IATA — Distribution with Offers and Orders (NDC) — Modern Airline Retailing](https://www.iata.org/en/programs/airline-distribution/retailing/ndc/)
[2] [IATA — NDC Fact Sheet](https://www.iata.org/en/iata-repository/pressroom/fact-sheets/fact-sheet-ndc/)
