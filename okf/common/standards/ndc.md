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
providerTerms:
  - provider: Amadeus
    term: Amadeus NDC (NDC-X program)
    context: 'Amadeus is an IATA-certified NDC system provider for airlines and sellers, with the broadest NDC airline network among GDSs'
    context_ko: 'Amadeus는 항공사·판매자용 IATA 인증 NDC 시스템 제공자로, GDS 중 가장 넓은 NDC 항공사 네트워크를 보유'
    relationship: narrower
  - provider: Sabre
    term: Sabre NDC (Beyond NDC)
    context: Sabre is certified as an NDC system provider for both airlines and sellers and aggregates multiple carriers' NDC content
    context_ko: Sabre는 항공사·판매자 양측의 NDC 시스템 제공자로 인증되어 여러 항공사 NDC 콘텐츠를 통합함
    relationship: narrower
  - provider: Travelport
    term: Travelport NDC (seller-side)
    context: Travelport offers NDC-enabled retailing on the seller side and was the first GDS to reach IATA NDC Level 3 certification
    context_ko: Travelport는 판매자 측 NDC 리테일링을 제공하며 IATA NDC 레벨 3 인증에 처음 도달한 GDS
    relationship: narrower
relationships:
  - type: related
    targetTerm: GDS Bypass
  - type: contrasts
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
  - targetTerm: Airline Industry Data Model (AIDM)
    explanation: AIDM is the shared underlying data model/repository of agreed concepts; NDC is one messaging standard generated from and aligned to that model.
    explanation_ko: 'AIDM은 합의된 개념을 담은 공유 기반 데이터 모델/저장소이고, NDC는 그 모델로부터 생성되어 정렬된 하나의 메시징 표준이다.'
  - targetTerm: Airline Retailing Maturity (ARM)
    explanation: ARM is a maturity measurement and registry of an organization's retailing progress; NDC is the underlying XML distribution standard whose adoption ARM helps assess.
    explanation_ko: 'ARM은 조직의 리테일링 진척도를 측정하고 등록하는 성숙도 지표이고, NDC는 ARM이 그 채택 정도를 평가하는 데 쓰이는 기반 XML 유통 표준이다.'
  - targetTerm: Direct Connect
    explanation: Direct Connect is a distribution arrangement (who connects to whom); NDC is a messaging standard that a Direct Connect may (but need not) use.
    explanation_ko: '다이렉트 커넥트는 누가 누구와 연결되는지에 관한 유통 방식이고, NDC는 다이렉트 커넥트가 사용할 수도(반드시는 아님) 있는 메시징 표준이다.'
  - targetTerm: EDIFACT
    explanation: 'EDIFACT is the legacy compact-text EDI standard underpinning classic GDS/PSS messaging; NDC is IATA''s modern XML (increasingly JSON/REST) standard designed to express rich, personalized offers EDIFACT cannot fully convey.'
    explanation_ko: 'EDIFACT는 기존 GDS/PSS 메시징을 떠받치는 레거시 압축 텍스트 EDI 표준이고, NDC는 EDIFACT로는 충분히 표현할 수 없는 풍부하고 개인화된 오퍼를 담기 위해 설계된 IATA의 현대적 XML(점차 JSON/REST) 표준이다.'
  - targetTerm: Enhanced and Simplified Distribution (EDIST)
    explanation: 'NDC is the IATA program/brand and capability concept; EDIST is the formal name of the actual XML message schemas (AirShopping, OrderCreate, etc.) that implement NDC and ONE Order.'
    explanation_ko: 'NDC는 IATA의 프로그램·브랜드이자 역량 개념이고, EDIST는 NDC와 ONE Order를 실제로 구현하는 XML 메시지 스키마(AirShopping, OrderCreate 등)의 공식 명칭이다.'
  - targetTerm: IATA Resolution 787
    explanation: 'NDC is the XML standard/capability itself; Resolution 787 is the IATA resolution that established and governs it. One is the technology standard, the other its constitutional basis.'
    explanation_ko: 'NDC는 XML 표준/역량 그 자체이고, Resolution 787은 그것을 수립·거버넌스하는 IATA 결의이다. 하나는 기술 표준, 다른 하나는 그 헌법적 근거이다.'
  - targetTerm: NDC Capable
    explanation: NDC is the distribution standard itself; NDC Capable is a conformance designation about whether a given IT provider's product implements that standard.
    explanation_ko: 'NDC는 유통 표준 자체이고, NDC Capable은 특정 IT 사업자의 제품이 그 표준을 구현하는지에 관한 적합성 지정이다.'
  - targetTerm: NDC Exchange
    explanation: 'NDC is the messaging standard; NDC Exchange is a connectivity platform/marketplace that carries, normalizes, and translates NDC (and other) messages between airlines and sellers.'
    explanation_ko: 'NDC는 메시징 표준이고, NDC Exchange는 항공사와 판매자 사이에서 NDC(및 기타) 메시지를 실어 나르고 정규화·변환하는 연결 플랫폼/마켓플레이스이다.'
  - targetTerm: OpenTravel 2.0 Object Model
    explanation: OpenTravel 2.0 is a broad multi-sector travel object model; NDC is IATA's air-specific offer-and-order distribution standard.
    explanation_ko: 'OpenTravel 2.0은 여러 분야를 아우르는 광범위한 여행 오브젝트 모델이고, NDC는 IATA의 항공 전용 offer-and-order 유통 표준이다.'
  - targetTerm: OSDM
    explanation: 'OSDM is the UIC open standard for rail (and multimodal) offer/booking/fulfillment; NDC is IATA''s equivalent XML standard for air. They are sibling distribution standards in different modes, sharing an offer/order philosophy.'
    explanation_ko: 'OSDM은 철도(및 복합운송)의 오퍼/예약/발권을 위한 UIC 개방형 표준이고, NDC는 항공의 동등한 XML 표준(IATA)이다. 서로 다른 교통수단에 속한 자매 유통 표준으로, offer/order 철학을 공유한다.'
  - targetTerm: REST API
    explanation: REST is a transport/architectural style; NDC is a domain data standard whose messages may be carried over SOAP/XML or REST/JSON.
    explanation_ko: 'REST는 전송/아키텍처 스타일이고, NDC는 그 메시지를 SOAP/XML 또는 REST/JSON으로 실어 나를 수 있는 도메인 데이터 표준이다.'
sources:
  - name: New Distribution Capability (NDC)
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/programs/airline-distribution/retailing/ndc/'
    tier: association
  - name: NDC Standards / Passenger Standards Conference
    org: IATA
    version: ''
    section: ''
    url: 'https://developer.iata.org/en/ndc/'
    tier: standard-body
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="10" width="32" height="24" rx="3"/><path d="M8 18h32"/><circle cx="12" cy="14" r="0.5" fill="currentColor"/><path d="M14 26h8M14 30h12"/><path d="M30 24l5 4-5 4"/><path d="M18 38h12M24 34v4"/></svg>
---

> New Distribution Capability is an IATA-led, XML-based data transmission standard that enables airlines to distribute rich, personalized content (including ancillaries, branded fares, and dynamic offers) directly to travel sellers, independent of traditional GDS/EDIFACT messaging. It uses an Offer/Order data model.

NDC defines a suite of XML schemas (e.g., AirShopping, OfferPrice, OrderCreate, OrderRetrieve) under IATA's Passenger Standards Conference. It supports product differentiation and dynamic pricing that legacy ATPCO filed-fare/availability messaging cannot fully express, and is a foundational standard alongside ONE Order in IATA's move toward an Offer-and-Order retailing model.

**한국어 / Korean** — **신유통역량(NDC)** — NDC는 IATA가 주도하는 XML 기반 데이터 전송 표준으로, 항공사가 부가 서비스, 브랜디드 운임, 동적 오퍼(Offer)를 포함한 풍부하고 개인화된 콘텐츠를 기존 GDS/EDIFACT 메시징과 무관하게 여행 판매자에게 직접 유통할 수 있게 한다. Offer/Order 데이터 모델을 사용한다.

NDC는 IATA 여객표준회의(Passenger Standards Conference) 산하에서 일련의 XML 스키마(예: AirShopping, OfferPrice, OrderCreate, OrderRetrieve)를 정의한다. 기존 ATPCO 등록 운임/가용성 메시징으로는 충분히 표현할 수 없는 상품 차별화와 동적 가격 책정을 지원하며, IATA가 추진하는 Offer-and-Order 리테일링 모델에서 ONE Order와 함께 핵심 기반 표준이다.

**Aliases:** `New Distribution Capability`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Amadeus | `Amadeus NDC (NDC-X program)` | narrower | Amadeus is an IATA-certified NDC system provider for airlines and sellers, with the broadest NDC airline network among GDSs |
| Sabre | `Sabre NDC (Beyond NDC)` | narrower | Sabre is certified as an NDC system provider for both airlines and sellers and aggregates multiple carriers' NDC content |
| Travelport | `Travelport NDC (seller-side)` | narrower | Travelport offers NDC-enabled retailing on the seller side and was the first GDS to reach IATA NDC Level 3 certification |

# Related
- [GDS Bypass](/common/standards/gds-bypass.md) — related
- [GDS](/common/standards/gds.md) — contrasts
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
- **NDC** vs [Airline Industry Data Model (AIDM)](/common/standards/airline-industry-data-model-aidm.md) — AIDM is the shared underlying data model/repository of agreed concepts; NDC is one messaging standard generated from and aligned to that model.
- **NDC** vs [Airline Retailing Maturity (ARM)](/common/standards/airline-retailing-maturity-arm.md) — ARM is a maturity measurement and registry of an organization's retailing progress; NDC is the underlying XML distribution standard whose adoption ARM helps assess.
- **NDC** vs [Direct Connect](/common/standards/direct-connect.md) — Direct Connect is a distribution arrangement (who connects to whom); NDC is a messaging standard that a Direct Connect may (but need not) use.
- **NDC** vs [EDIFACT](/common/standards/edifact.md) — EDIFACT is the legacy compact-text EDI standard underpinning classic GDS/PSS messaging; NDC is IATA's modern XML (increasingly JSON/REST) standard designed to express rich, personalized offers EDIFACT cannot fully convey.
- **NDC** vs [Enhanced and Simplified Distribution (EDIST)](/common/standards/enhanced-and-simplified-distribution-edist.md) — NDC is the IATA program/brand and capability concept; EDIST is the formal name of the actual XML message schemas (AirShopping, OrderCreate, etc.) that implement NDC and ONE Order.
- **NDC** vs [IATA Resolution 787](/common/standards/iata-resolution-787.md) — NDC is the XML standard/capability itself; Resolution 787 is the IATA resolution that established and governs it. One is the technology standard, the other its constitutional basis.
- **NDC** vs [NDC Capable](/common/standards/ndc-capable.md) — NDC is the distribution standard itself; NDC Capable is a conformance designation about whether a given IT provider's product implements that standard.
- **NDC** vs [NDC Exchange](/common/standards/ndc-exchange.md) — NDC is the messaging standard; NDC Exchange is a connectivity platform/marketplace that carries, normalizes, and translates NDC (and other) messages between airlines and sellers.
- **NDC** vs [OpenTravel 2.0 Object Model](/common/standards/opentravel-2-0-object-model.md) — OpenTravel 2.0 is a broad multi-sector travel object model; NDC is IATA's air-specific offer-and-order distribution standard.
- **NDC** vs [OSDM](/ground/rail/osdm.md) — OSDM is the UIC open standard for rail (and multimodal) offer/booking/fulfillment; NDC is IATA's equivalent XML standard for air. They are sibling distribution standards in different modes, sharing an offer/order philosophy.
- **NDC** vs [REST API](/common/standards/rest-api.md) — REST is a transport/architectural style; NDC is a domain data standard whose messages may be carried over SOAP/XML or REST/JSON.

# Citations
[1] [IATA — New Distribution Capability (NDC)](https://www.iata.org/en/programs/airline-distribution/retailing/ndc/)
[2] [IATA — NDC Standards / Passenger Standards Conference](https://developer.iata.org/en/ndc/)
