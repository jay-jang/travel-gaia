---
type: Standard
title: Optional Services
description: 'Optional Services is ATPCO''s dedicated product and data filing through which airlines file, price, and distribute paid and free ancillaries (such as checked bags, seat selection, lounge access, and meals) using standardized industry sub-codes. It is the shopping/pricing-side mechanism that lets ancillaries be quoted alongside fares before a ticket or EMD is issued.'
tags:
  - air-shop
  - active
  - ATPCO
timestamp: '2026-06-17T00:00:00Z'
id: optional-services
vertical: air
category: air-shop
conceptType: standard
status: active
term_ko: 선택 서비스 (Optional Services)
definition_ko: 'Optional Services(선택 서비스)는 항공사가 표준 industry sub-code를 사용해 유료·무료 부가 서비스(위탁 수하물, 좌석 지정, 라운지 이용, 기내식 등)를 신고·가격책정·배포하는 ATPCO의 전용 상품이자 데이터 파일링이다. 항공권이나 EMD가 발행되기 전에 부가 서비스가 운임과 함께 견적되도록 하는 shopping/pricing 측의 메커니즘이다.'
longDef: 'ATPCO''s Optional Services product structures each ancillary as an industry sub-code carrying a Reason For Issuance Code (RFIC) group and a unique Reason For Issuance Sub Code (RFISC), together with provisions records that define to whom the service applies, when and where it applies, and how much it costs. Sub-codes are the standardized vocabulary that lets a bag or seat be priced and compared consistently across GDS, NDC, and airline.com channels. Optional Services data drives the price shown at shop time; once purchased, the ancillary is documented on the ticketing side via an EMD or ancillary fee. RFISC codes beginning 98x/99x are reserved under IATA resolutions for services outside the Optional Services scope.'
longDef_ko: 'ATPCO의 Optional Services 상품은 각 부가 서비스를 RFIC(Reason For Issuance Code) 그룹과 고유한 RFISC(Reason For Issuance Sub Code)를 가진 industry sub-code로 구조화하고, 해당 서비스가 누구에게·언제·어디서 적용되며 비용이 얼마인지를 정의하는 provisions 레코드와 결합한다. sub-code는 수하물이나 좌석이 GDS, NDC, 항공사 자사 웹사이트(airline.com) 채널 전반에서 일관되게 가격책정·비교되도록 하는 표준 어휘이다. Optional Services 데이터는 shopping 시점에 표시되는 가격을 구동하며, 구매 후 부가 서비스는 ticketing 측에서 EMD 또는 ancillary fee로 문서화된다. 98x/99x로 시작하는 RFISC 코드는 IATA resolution에 따라 Optional Services 범위 밖의 서비스를 위해 예약되어 있다.'
standardBody: ATPCO
aliases:
  - OC
  - Optional Services Product
  - Service Fees
providerTerms:
  - provider: ATPCO
    term: Optional Services / Industry Sub Codes (RFISC)
    context: ATPCO is the official source of Optional Services industry sub-codes and filing for ancillary pricing.
    context_ko: ATPCO는 부가 서비스 가격책정을 위한 Optional Services industry sub-code와 파일링의 공식 출처이다.
    relationship: same
  - provider: Travelport
    term: Air Pricing for Optional Services (Universal API)
    context: Travelport's Universal API supports pricing optional services via sub-code data in shopping responses.
    context_ko: Travelport의 Universal API는 shopping 응답에서 sub-code 데이터를 통해 선택 서비스 가격책정을 지원한다.
    relationship: related
relationships:
  - type: related
    targetTerm: Ancillary Service
  - type: related
    targetTerm: Fare Family
  - type: related
    targetTerm: ATPCO
  - type: related
    targetTerm: EMD
  - type: related
    targetTerm: Offer
distinctions:
  - targetTerm: Ancillary Service
    explanation: 'Ancillary Service is the generic, ticketing-side concept of any extra a passenger buys; Optional Services is ATPCO''s specific shop/pricing product and data structure (with RFISC sub-codes) that prices and distributes those ancillaries.'
    explanation_ko: 'Ancillary Service는 승객이 구매하는 모든 추가 항목을 가리키는 ticketing 측의 일반 개념이고, Optional Services는 그 부가 서비스를 가격책정·배포하는 ATPCO의 구체적 shop/pricing 상품이자 데이터 구조(RFISC sub-code 포함)이다.'
  - targetTerm: EMD
    explanation: Optional Services is the filed data that prices an ancillary at shop time; the EMD is the document issued afterward to fulfill and account for the purchased service.
    explanation_ko: 'Optional Services는 shop 시점에 부가 서비스 가격을 산출하는 파일링 데이터이고, EMD는 그 후 구매된 서비스를 이행·정산하기 위해 발행되는 문서이다.'
sources:
  - org: ATPCO
    name: Ancillaries (Optional Services product)
    version: ''
    section: ''
    url: 'https://atpco.net/ancillaries/'
  - org: ATPCO
    name: Optional Services Industry Sub Codes
    version: ''
    section: ''
    url: 'https://www.atpco.net/resource/optional-services-industry-sub-codes'
  - org: Travelport
    name: Air Pricing for Optional Services — Universal API
    version: ''
    section: ''
    url: 'https://support.travelport.com/webhelp/uapi/Content/Air/Air_Pricing/Air_Pricing_for_Optional_Services.htm'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="15" width="30" height="22" rx="3"/><path d="M18 15v-3a6 6 0 0112 0v3"/><line x1="16" y1="24" x2="32" y2="24"/><path d="M27 21l3 3-3 3"/></svg>
---

> Optional Services is ATPCO's dedicated product and data filing through which airlines file, price, and distribute paid and free ancillaries (such as checked bags, seat selection, lounge access, and meals) using standardized industry sub-codes. It is the shopping/pricing-side mechanism that lets ancillaries be quoted alongside fares before a ticket or EMD is issued.

ATPCO's Optional Services product structures each ancillary as an industry sub-code carrying a Reason For Issuance Code (RFIC) group and a unique Reason For Issuance Sub Code (RFISC), together with provisions records that define to whom the service applies, when and where it applies, and how much it costs. Sub-codes are the standardized vocabulary that lets a bag or seat be priced and compared consistently across GDS, NDC, and airline.com channels. Optional Services data drives the price shown at shop time; once purchased, the ancillary is documented on the ticketing side via an EMD or ancillary fee. RFISC codes beginning 98x/99x are reserved under IATA resolutions for services outside the Optional Services scope.

**한국어 / Korean** — **선택 서비스 (Optional Services)** — Optional Services(선택 서비스)는 항공사가 표준 industry sub-code를 사용해 유료·무료 부가 서비스(위탁 수하물, 좌석 지정, 라운지 이용, 기내식 등)를 신고·가격책정·배포하는 ATPCO의 전용 상품이자 데이터 파일링이다. 항공권이나 EMD가 발행되기 전에 부가 서비스가 운임과 함께 견적되도록 하는 shopping/pricing 측의 메커니즘이다.

ATPCO의 Optional Services 상품은 각 부가 서비스를 RFIC(Reason For Issuance Code) 그룹과 고유한 RFISC(Reason For Issuance Sub Code)를 가진 industry sub-code로 구조화하고, 해당 서비스가 누구에게·언제·어디서 적용되며 비용이 얼마인지를 정의하는 provisions 레코드와 결합한다. sub-code는 수하물이나 좌석이 GDS, NDC, 항공사 자사 웹사이트(airline.com) 채널 전반에서 일관되게 가격책정·비교되도록 하는 표준 어휘이다. Optional Services 데이터는 shopping 시점에 표시되는 가격을 구동하며, 구매 후 부가 서비스는 ticketing 측에서 EMD 또는 ancillary fee로 문서화된다. 98x/99x로 시작하는 RFISC 코드는 IATA resolution에 따라 Optional Services 범위 밖의 서비스를 위해 예약되어 있다.

**Aliases:** `OC`, `Optional Services Product`, `Service Fees`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| ATPCO | `Optional Services / Industry Sub Codes (RFISC)` | same | ATPCO is the official source of Optional Services industry sub-codes and filing for ancillary pricing. |
| Travelport | `Air Pricing for Optional Services (Universal API)` | related | Travelport's Universal API supports pricing optional services via sub-code data in shopping responses. |

# Related
- [Ancillary Service](/air/air-ticket/ancillary-service.md) — related
- [Fare Family](/air/air-shop/fare-family.md) — related
- [ATPCO](/air/air-shop/atpco.md) — related
- [EMD](/air/air-ticket/emd.md) — related
- [Offer](/common/standards/offer.md) — related

# Distinctions
- **Optional Services** vs [Ancillary Service](/air/air-ticket/ancillary-service.md) — Ancillary Service is the generic, ticketing-side concept of any extra a passenger buys; Optional Services is ATPCO's specific shop/pricing product and data structure (with RFISC sub-codes) that prices and distributes those ancillaries.
- **Optional Services** vs [EMD](/air/air-ticket/emd.md) — Optional Services is the filed data that prices an ancillary at shop time; the EMD is the document issued afterward to fulfill and account for the purchased service.

# Citations
[1] [ATPCO — Ancillaries (Optional Services product)](https://atpco.net/ancillaries/)
[2] [ATPCO — Optional Services Industry Sub Codes](https://www.atpco.net/resource/optional-services-industry-sub-codes)
[3] [Travelport — Air Pricing for Optional Services — Universal API](https://support.travelport.com/webhelp/uapi/Content/Air/Air_Pricing/Air_Pricing_for_Optional_Services.htm)
