---
type: Standard
title: NDC
description: 'New Distribution Capability is an IATA-led, XML-based data transmission standard that enables airlines to distribute rich, personalized content (including ancillaries, branded fares, and dynamic offers) directly to travel sellers, independent of traditional GDS/EDIFACT messaging. It uses an Offer/Order data model.'
tags:
  - standards
  - active
  - IATA
timestamp: '2026-06-15T00:00:00Z'
id: ndc
vertical: common
category: standards
conceptType: standard
status: active
abbreviation: NDC
term_ko: 신유통역량(NDC)
definition_ko: 'NDC는 IATA가 주도하는 XML 기반 데이터 전송 표준으로, 항공사가 부가 서비스, 브랜디드 운임, 동적 오퍼(Offer)를 포함한 풍부하고 개인화된 콘텐츠를 기존 GDS/EDIFACT 메시징과 무관하게 여행 판매자에게 직접 유통할 수 있게 한다. Offer/Order 데이터 모델을 사용한다.'
longDef: 'NDC defines a suite of XML schemas (e.g., AirShopping, OfferPrice, OrderCreate, OrderRetrieve) under IATA''s Passenger Standards Conference. It supports product differentiation and dynamic pricing that legacy ATPCO filed-fare/availability messaging cannot fully express, and is a foundational standard alongside ONE Order in IATA''s move toward an Offer-and-Order retailing model.'
longDef_ko: 'NDC는 IATA 여객표준회의(Passenger Standards Conference) 산하에서 일련의 XML 스키마(예: AirShopping, OfferPrice, OrderCreate, OrderRetrieve)를 정의한다. 기존 ATPCO 등록 운임/가용성 메시징으로는 충분히 표현할 수 없는 상품 차별화와 동적 가격 책정을 지원하며, IATA가 추진하는 Offer-and-Order 리테일링 모델에서 ONE Order와 함께 핵심 기반 표준이다.'
standardBody: IATA
aliases:
  - New Distribution Capability
relationships:
  - type: related
    targetTerm: GDS Bypass
  - type: related
    targetTerm: GDS
  - type: related
    targetTerm: Offer
  - type: related
    targetTerm: Order
  - type: related
    targetTerm: ONE Order
  - type: related
    targetTerm: Aggregator
  - type: related
    targetTerm: Ancillary Service
  - type: related
    targetTerm: Fare Family
  - type: contrasts
    targetTerm: OpenTravel Alliance
distinctions:
  - targetTerm: GDS Bypass
    explanation: NDC is the XML-based data transmission standard; GDS Bypass is a strategic routing decision that often uses NDC.
    explanation_ko: 'NDC는 XML 기반 데이터 전송 표준이고, GDS 우회는 흔히 NDC를 활용하여 GDS 채널을 우회하는 비즈니스 전략적 결정이다.'
  - targetTerm: GDS
    explanation: NDC is a messaging standard for distributing content; a GDS is a distribution platform that may carry NDC or legacy content.
    explanation_ko: 'NDC는 콘텐츠를 유통하기 위한 메시징 표준이고, GDS는 NDC 콘텐츠나 레거시 콘텐츠를 실어 나를 수 있는 유통 플랫폼이다.'
  - targetTerm: OpenTravel Alliance
    explanation: 'NDC is IATA''s air-distribution XML standard; OpenTravel is a separate, broader cross-sector travel XML schema body.'
    explanation_ko: 'NDC는 IATA의 항공 유통 XML 표준이고, OpenTravel은 이와 별개로 여러 산업 분야를 아우르는 더 광범위한 여행 XML 스키마 단체이다.'
  - targetTerm: ONE Order
    explanation: NDC standardizes shopping/booking offers and orders; ONE Order standardizes the single customer order record that replaces PNR/e-ticket/EMD.
    explanation_ko: 'NDC는 조회/예약 단계의 오퍼와 주문을 표준화하고, ONE Order는 PNR/e-ticket/EMD를 대체하는 단일 고객 주문 기록을 표준화한다.'
sources:
  - name: New Distribution Capability (NDC)
    org: IATA
    version: ''
    section: ''
    url: ''
  - name: NDC Standards / Passenger Standards Conference
    org: IATA
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="10" width="32" height="24" rx="3"/><path d="M8 18h32"/><circle cx="12" cy="14" r="0.5" fill="currentColor"/><path d="M14 26h8M14 30h12"/><path d="M30 24l5 4-5 4"/><path d="M18 38h12M24 34v4"/></svg>
---

> New Distribution Capability is an IATA-led, XML-based data transmission standard that enables airlines to distribute rich, personalized content (including ancillaries, branded fares, and dynamic offers) directly to travel sellers, independent of traditional GDS/EDIFACT messaging. It uses an Offer/Order data model.

NDC defines a suite of XML schemas (e.g., AirShopping, OfferPrice, OrderCreate, OrderRetrieve) under IATA's Passenger Standards Conference. It supports product differentiation and dynamic pricing that legacy ATPCO filed-fare/availability messaging cannot fully express, and is a foundational standard alongside ONE Order in IATA's move toward an Offer-and-Order retailing model.

**한국어 / Korean** — **신유통역량(NDC)** — NDC는 IATA가 주도하는 XML 기반 데이터 전송 표준으로, 항공사가 부가 서비스, 브랜디드 운임, 동적 오퍼(Offer)를 포함한 풍부하고 개인화된 콘텐츠를 기존 GDS/EDIFACT 메시징과 무관하게 여행 판매자에게 직접 유통할 수 있게 한다. Offer/Order 데이터 모델을 사용한다.

NDC는 IATA 여객표준회의(Passenger Standards Conference) 산하에서 일련의 XML 스키마(예: AirShopping, OfferPrice, OrderCreate, OrderRetrieve)를 정의한다. 기존 ATPCO 등록 운임/가용성 메시징으로는 충분히 표현할 수 없는 상품 차별화와 동적 가격 책정을 지원하며, IATA가 추진하는 Offer-and-Order 리테일링 모델에서 ONE Order와 함께 핵심 기반 표준이다.

**Aliases:** `New Distribution Capability`

# Related
- [GDS Bypass](/common/standards/gds-bypass.md) — related
- [GDS](/common/standards/gds.md) — related
- [Offer](/common/standards/offer.md) — related
- [Order](/common/standards/order.md) — related
- [ONE Order](/common/standards/one-order.md) — related
- [Aggregator](/common/standards/aggregator.md) — related
- [Ancillary Service](/air/air-ticket/ancillary-service.md) — related
- [Fare Family](/air/air-shop/fare-family.md) — related
- [OpenTravel Alliance](/common/standards/opentravel-alliance.md) — contrasts

# Distinctions
- **NDC** vs [GDS Bypass](/common/standards/gds-bypass.md) — NDC is the XML-based data transmission standard; GDS Bypass is a strategic routing decision that often uses NDC.
- **NDC** vs [GDS](/common/standards/gds.md) — NDC is a messaging standard for distributing content; a GDS is a distribution platform that may carry NDC or legacy content.
- **NDC** vs [OpenTravel Alliance](/common/standards/opentravel-alliance.md) — NDC is IATA's air-distribution XML standard; OpenTravel is a separate, broader cross-sector travel XML schema body.
- **NDC** vs [ONE Order](/common/standards/one-order.md) — NDC standardizes shopping/booking offers and orders; ONE Order standardizes the single customer order record that replaces PNR/e-ticket/EMD.

# Citations
[1] IATA — New Distribution Capability (NDC)
[2] IATA — NDC Standards / Passenger Standards Conference
