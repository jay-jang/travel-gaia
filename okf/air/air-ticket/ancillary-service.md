---
type: Business Term
title: Ancillary Service
description: 'A chargeable product or service sold by an airline in addition to the base air transportation, such as paid checked baggage, advance seat selection, priority boarding, lounge access, or onboard amenities. Ancillary services are documented and settled via EMDs and described through ATPCO/NDC service definitions.'
tags:
  - air-ticket
  - active
  - ATPCO
timestamp: '2026-06-15T00:00:00Z'
id: ancillary-service
vertical: air
category: air-ticket
conceptType: business-term
status: active
term_ko: 부가 서비스 (Ancillary Service)
definition_ko: '기본 항공 운송에 더해 항공사가 판매하는 유료 상품 또는 서비스로, 유료 위탁 수하물, 사전 좌석 지정, 우선 탑승, 라운지 이용, 기내 편의 용품 등이 이에 해당한다. 부가 서비스는 EMD를 통해 증빙 및 정산되며 ATPCO/NDC 서비스 정의를 통해 기술된다.'
longDef: 'Ancillary services are commonly divided into a-la-carte items (purchasable optional services) and service fees (e.g., change or payment fees). They are filed and described in industry data via ATPCO Optional Services data and standardized service codes (including RFISC, the Reason For Issuance Sub Code), and increasingly merchandised through NDC offers. When sold, an ancillary is typically issued as an EMD-A (associated to a flight) or EMD-S (standalone). Ancillaries are a major and growing revenue stream for airlines and a core element of modern airline retailing.'
longDef_ko: '부가 서비스는 일반적으로 알라카르트 항목(구매 가능한 선택 서비스)과 서비스 수수료(예: 변경 또는 지불 수수료)로 구분된다. 이들은 ATPCO Optional Services 데이터와 표준화된 서비스 코드(RFISC, 즉 Reason For Issuance Sub Code 포함)를 통해 업계 데이터에 등록 및 기술되며, 점점 더 NDC 오퍼를 통해 판매되고 있다. 판매될 때 부가 서비스는 일반적으로 EMD-A(항공편에 연결됨) 또는 EMD-S(독립형)로 발행된다. 부가 서비스는 항공사에게 주요하고 성장하는 수익원이며 현대 항공사 리테일링의 핵심 요소이다.'
standardBody: ATPCO
aliases:
  - Ancillary
  - Ancillaries
  - Add-on Service
  - Optional Service
relationships:
  - type: related
    targetTerm: EMD
  - type: related
    targetTerm: NDC
  - type: related
    targetTerm: Offer
  - type: related
    targetTerm: ATPCO
  - type: related
    targetTerm: Fare Family
distinctions:
  - targetTerm: EMD
    explanation: Ancillary Service is the product offered/sold; the EMD is the document that issues and settles it.
    explanation_ko: 'Ancillary Service는 제공/판매되는 상품이며, EMD는 이를 발행하고 정산하는 서류이다.'
  - targetTerm: Fare Family
    explanation: A fare family bundles fare attributes and included benefits into branded fares; ancillary services are the unbundled add-ons sold separately.
    explanation_ko: 'Fare Family는 운임 속성과 포함 혜택을 브랜드 운임으로 묶은 것이며, 부가 서비스는 별도로 판매되는 언번들된 추가 상품이다.'
  - targetTerm: Optional Services
    explanation: 'Ancillary Service is the generic, ticketing-side concept of any extra a passenger buys; Optional Services is ATPCO''s specific shop/pricing product and data structure (with RFISC sub-codes) that prices and distributes those ancillaries.'
    explanation_ko: 'Ancillary Service는 승객이 구매하는 모든 추가 항목을 가리키는 ticketing 측의 일반 개념이고, Optional Services는 그 부가 서비스를 가격책정·배포하는 ATPCO의 구체적 shop/pricing 상품이자 데이터 구조(RFISC sub-code 포함)이다.'
  - targetTerm: Reason for Issuance Code / Sub Code (RFIC / RFISC)
    explanation: Ancillary Service is the product offered to the passenger; RFISC is the standardized code that names that product for distribution and accounting systems.
    explanation_ko: 'Ancillary Service는 승객에게 제공되는 상품이고, RFISC는 유통·회계 시스템에서 그 상품을 명명하는 표준 코드이다.'
  - targetTerm: Shore Excursion
    explanation: 'In airline distribution an Ancillary Service is any extra sold beyond the seat (bags, seats, meals); a shore excursion is the cruise industry''s flagship ancillary, but it is specifically tied to a port of call rather than to a flight segment.'
    explanation_ko: '항공 유통에서 Ancillary Service는 좌석 외에 판매되는 모든 부가(수하물·좌석·기내식)이고, 기항지 투어는 크루즈 산업의 대표 부가 상품이지만 항공 구간이 아니라 특정 기항지에 연결된다는 점이 특징이다.'
  - targetTerm: Universal Product Attributes (UPA)
    explanation: 'An ancillary service is a sellable add-on product (e.g., a paid bag); a UPA is descriptive rich content that merchandises/explains products and attributes—it does not itself price or sell the item.'
    explanation_ko: '부가서비스(ancillary service)는 판매 가능한 추가 상품(예: 유료 수하물)이고, UPA는 상품·속성을 머천다이징/설명하는 서술형 리치 콘텐츠로, 그 자체가 항목의 가격을 매기거나 판매하지는 않는다.'
sources:
  - name: ATPCO Optional Services data
    org: ATPCO
    version: ''
    section: ''
    url: 'https://atpco.net/ancillaries/'
  - name: New Distribution Capability (NDC)
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/programs/airline-distribution/retailing/ndc/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M24 8l3 12 12 3-12 3-3 12-3-12-12-3 12-3z"/><path d="M11 10v4M9 12h4"/><path d="M38 34v4M36 36h4"/></svg>
---

> A chargeable product or service sold by an airline in addition to the base air transportation, such as paid checked baggage, advance seat selection, priority boarding, lounge access, or onboard amenities. Ancillary services are documented and settled via EMDs and described through ATPCO/NDC service definitions.

Ancillary services are commonly divided into a-la-carte items (purchasable optional services) and service fees (e.g., change or payment fees). They are filed and described in industry data via ATPCO Optional Services data and standardized service codes (including RFISC, the Reason For Issuance Sub Code), and increasingly merchandised through NDC offers. When sold, an ancillary is typically issued as an EMD-A (associated to a flight) or EMD-S (standalone). Ancillaries are a major and growing revenue stream for airlines and a core element of modern airline retailing.

**한국어 / Korean** — **부가 서비스 (Ancillary Service)** — 기본 항공 운송에 더해 항공사가 판매하는 유료 상품 또는 서비스로, 유료 위탁 수하물, 사전 좌석 지정, 우선 탑승, 라운지 이용, 기내 편의 용품 등이 이에 해당한다. 부가 서비스는 EMD를 통해 증빙 및 정산되며 ATPCO/NDC 서비스 정의를 통해 기술된다.

부가 서비스는 일반적으로 알라카르트 항목(구매 가능한 선택 서비스)과 서비스 수수료(예: 변경 또는 지불 수수료)로 구분된다. 이들은 ATPCO Optional Services 데이터와 표준화된 서비스 코드(RFISC, 즉 Reason For Issuance Sub Code 포함)를 통해 업계 데이터에 등록 및 기술되며, 점점 더 NDC 오퍼를 통해 판매되고 있다. 판매될 때 부가 서비스는 일반적으로 EMD-A(항공편에 연결됨) 또는 EMD-S(독립형)로 발행된다. 부가 서비스는 항공사에게 주요하고 성장하는 수익원이며 현대 항공사 리테일링의 핵심 요소이다.

**Aliases:** `Ancillary`, `Ancillaries`, `Add-on Service`, `Optional Service`

# Related
- [EMD](/air/air-ticket/emd.md) — related
- [NDC](/common/standards/ndc.md) — related
- [Offer](/common/standards/offer.md) — related
- [ATPCO](/air/air-shop/atpco.md) — related
- [Fare Family](/air/air-shop/fare-family.md) — related

# Distinctions
- **Ancillary Service** vs [EMD](/air/air-ticket/emd.md) — Ancillary Service is the product offered/sold; the EMD is the document that issues and settles it.
- **Ancillary Service** vs [Fare Family](/air/air-shop/fare-family.md) — A fare family bundles fare attributes and included benefits into branded fares; ancillary services are the unbundled add-ons sold separately.
- **Ancillary Service** vs [Optional Services](/air/air-shop/optional-services.md) — Ancillary Service is the generic, ticketing-side concept of any extra a passenger buys; Optional Services is ATPCO's specific shop/pricing product and data structure (with RFISC sub-codes) that prices and distributes those ancillaries.
- **Ancillary Service** vs [Reason for Issuance Code / Sub Code (RFIC / RFISC)](/air/air-ticket/rfic-rfisc.md) — Ancillary Service is the product offered to the passenger; RFISC is the standardized code that names that product for distribution and accounting systems.
- **Ancillary Service** vs [Shore Excursion](/cruise/cruise/shore-excursion.md) — In airline distribution an Ancillary Service is any extra sold beyond the seat (bags, seats, meals); a shore excursion is the cruise industry's flagship ancillary, but it is specifically tied to a port of call rather than to a flight segment.
- **Ancillary Service** vs [Universal Product Attributes (UPA)](/common/standards/universal-product-attributes-upa.md) — An ancillary service is a sellable add-on product (e.g., a paid bag); a UPA is descriptive rich content that merchandises/explains products and attributes—it does not itself price or sell the item.

# Citations
[1] [ATPCO — ATPCO Optional Services data](https://atpco.net/ancillaries/)
[2] [IATA — New Distribution Capability (NDC)](https://www.iata.org/en/programs/airline-distribution/retailing/ndc/)
