---
type: Business Term
title: Aggregator
description: 'In travel distribution, an aggregator is an intermediary that consolidates inventory, rates, and content from many suppliers into a single normalized feed or API for resellers (such as OTAs and travel agencies). Examples include hotel bedbanks and NDC/content aggregation platforms.'
tags:
  - standards
  - active
timestamp: '2026-06-15T00:00:00Z'
id: aggregator
vertical: common
category: standards
conceptType: business-term
status: active
term_ko: 애그리게이터(콘텐츠 통합자)
definition_ko: '여행 유통에서 애그리게이터(aggregator)는 여러 공급사의 재고, 요금, 콘텐츠를 하나의 정규화된 피드나 API로 통합하여 재판매자(OTA, 여행사 등)에게 제공하는 중개자이다. 호텔 베드뱅크와 NDC/콘텐츠 통합 플랫폼 등이 그 예이다.'
longDef: 'Aggregators reduce integration overhead by giving sellers one connection to reach many suppliers, normalizing differing formats (EDIFACT, NDC, OpenTravel, proprietary APIs) into a unified interface. A hotel bedbank is a common aggregator type; NDC aggregators consolidate multiple airlines'' NDC connections for travel sellers.'
longDef_ko: '애그리게이터는 판매자에게 단일 연결로 여러 공급사에 도달할 수 있게 하여 연동 부담을 줄이며, 서로 다른 형식(EDIFACT, NDC, OpenTravel, 자체 API)을 하나의 통합 인터페이스로 정규화한다. 호텔 베드뱅크가 대표적인 애그리게이터 유형이며, NDC 애그리게이터는 여러 항공사의 NDC 연결을 여행 판매자를 위해 통합한다.'
aliases:
  - Content Aggregator
  - Inventory Aggregator
  - Travel Aggregator
providerTerms:
  - provider: NDC/IATA
    term: NDC aggregator
    context: 'In NDC distribution, aggregators consolidate many airlines'' NDC connections into a single API so travel sellers integrate once instead of carrier-by-carrier'
    context_ko: NDC 유통에서 애그리게이터는 여러 항공사의 NDC 연결을 단일 API로 통합해 여행 판매자가 항공사별로 연결하지 않고 한 번만 연동하도록 함
    relationship: narrower
  - provider: Duffel
    term: Duffel (NDC aggregator/API)
    context: Pure-play NDC aggregator providing a single API over many airlines' NDC content for travel sellers
    context_ko: 여러 항공사 NDC 콘텐츠를 단일 API로 제공하는 전문 NDC 애그리게이터
    relationship: narrower
  - provider: Travelfusion
    term: Travelfusion
    context: Long-established aggregator consolidating LCC and NDC supplier content into one connection
    context_ko: LCC 및 NDC 공급자 콘텐츠를 하나의 연결로 통합하는 오래된 애그리게이터
    relationship: narrower
  - provider: Verteil / AirGateway
    term: 'Verteil, AirGateway'
    context: NDC aggregator technology providers that normalize content and sit between airlines and travel sellers
    context_ko: 콘텐츠를 정규화하여 항공사와 여행 판매자 사이에 위치하는 NDC 애그리게이터 기술 제공자
    relationship: narrower
relationships:
  - type: related
    targetTerm: GDS Bypass
  - type: related
    targetTerm: OTA (Online Travel Agency)
  - type: related
    targetTerm: Metasearch
  - type: related
    targetTerm: GDS
  - type: related
    targetTerm: Bedbank
  - type: related
    targetTerm: NDC
distinctions:
  - targetTerm: Metasearch
    explanation: An aggregator pools supplier content into a feed/API for resellers (back-end); metasearch is a consumer-facing price-comparison and referral product.
    explanation_ko: '애그리게이터는 공급사 콘텐츠를 모아 재판매자를 위한 피드/API로 제공하는 백엔드이고, 메타서치는 소비자 대상 가격 비교 및 연결 서비스이다.'
  - targetTerm: GDS
    explanation: 'A GDS is a large, established global aggregation platform with ticketing/settlement; ''aggregator'' is a broader term for any supplier-content consolidator, including bedbanks and NDC hubs.'
    explanation_ko: 'GDS는 발권/정산 기능을 갖춘 대규모의 확립된 글로벌 통합 플랫폼이고, ''애그리게이터''는 베드뱅크와 NDC 허브를 포함해 공급사 콘텐츠를 통합하는 모든 주체를 아우르는 더 넓은 용어이다.'
  - targetTerm: Bedbank
    explanation: A bedbank is a specific hotel-inventory aggregator selling net rates wholesale; aggregator is the general category.
    explanation_ko: '베드뱅크는 순요금(net rate)을 도매로 판매하는 특정 호텔 재고 애그리게이터이고, 애그리게이터는 그 상위의 일반 범주이다.'
  - targetTerm: Direct Connect
    explanation: A Direct Connect is the seller's own integration to a single supplier; an aggregator offers one connection that consolidates many suppliers' direct connects on the seller's behalf.
    explanation_ko: '다이렉트 커넥트는 판매자가 단일 공급사와 직접 맺는 연동이고, 애그리게이터는 여러 공급사의 직접 연결을 판매자 대신 하나로 통합해 제공한다.'
  - targetTerm: Dynamic Packaging
    explanation: An aggregator supplies the consolidated multi-supplier content; dynamic packaging is what a seller does with that content to build and price a combined trip.
    explanation_ko: '애그리게이터는 여러 공급사의 통합 콘텐츠를 공급하고, 다이내믹 패키징은 판매자가 그 콘텐츠로 결합된 여정을 구성하고 가격을 매기는 행위이다.'
  - targetTerm: NDC Exchange
    explanation: An aggregator is the general category of supplier-content consolidator; NDC Exchange is a specific ATPCO/SITA industry hub that also normalizes and translates NDC and OTA schema versions between parties.
    explanation_ko: '애그리게이터는 공급사 콘텐츠 통합자를 아우르는 일반 범주이고, NDC Exchange는 당사자 간 NDC·OTA 스키마 버전을 정규화·변환하기도 하는 특정 ATPCO/SITA 산업 허브이다.'
sources:
  - name: Travel content aggregation (industry definition)
    org: Phocuswright / industry usage
    version: ''
    section: ''
    url: ''
    tier: secondary
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="10" r="4"/><circle cx="10" cy="24" r="4"/><circle cx="10" cy="38" r="4"/><circle cx="38" cy="24" r="5"/><path d="M14 11l8 8M14 24h10M14 37l8-8"/><path d="M26 24l8 0"/></svg>
---

> In travel distribution, an aggregator is an intermediary that consolidates inventory, rates, and content from many suppliers into a single normalized feed or API for resellers (such as OTAs and travel agencies). Examples include hotel bedbanks and NDC/content aggregation platforms.

Aggregators reduce integration overhead by giving sellers one connection to reach many suppliers, normalizing differing formats (EDIFACT, NDC, OpenTravel, proprietary APIs) into a unified interface. A hotel bedbank is a common aggregator type; NDC aggregators consolidate multiple airlines' NDC connections for travel sellers.

**한국어 / Korean** — **애그리게이터(콘텐츠 통합자)** — 여행 유통에서 애그리게이터(aggregator)는 여러 공급사의 재고, 요금, 콘텐츠를 하나의 정규화된 피드나 API로 통합하여 재판매자(OTA, 여행사 등)에게 제공하는 중개자이다. 호텔 베드뱅크와 NDC/콘텐츠 통합 플랫폼 등이 그 예이다.

애그리게이터는 판매자에게 단일 연결로 여러 공급사에 도달할 수 있게 하여 연동 부담을 줄이며, 서로 다른 형식(EDIFACT, NDC, OpenTravel, 자체 API)을 하나의 통합 인터페이스로 정규화한다. 호텔 베드뱅크가 대표적인 애그리게이터 유형이며, NDC 애그리게이터는 여러 항공사의 NDC 연결을 여행 판매자를 위해 통합한다.

**Aliases:** `Content Aggregator`, `Inventory Aggregator`, `Travel Aggregator`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| NDC/IATA | `NDC aggregator` | narrower | In NDC distribution, aggregators consolidate many airlines' NDC connections into a single API so travel sellers integrate once instead of carrier-by-carrier |
| Duffel | `Duffel (NDC aggregator/API)` | narrower | Pure-play NDC aggregator providing a single API over many airlines' NDC content for travel sellers |
| Travelfusion | `Travelfusion` | narrower | Long-established aggregator consolidating LCC and NDC supplier content into one connection |
| Verteil / AirGateway | `Verteil, AirGateway` | narrower | NDC aggregator technology providers that normalize content and sit between airlines and travel sellers |

# Related
- [GDS Bypass](/common/standards/gds-bypass.md) — related
- [OTA (Online Travel Agency)](/common/standards/ota-online-travel-agency.md) — related
- [Metasearch](/common/standards/metasearch.md) — related
- [GDS](/common/standards/gds.md) — related
- [Bedbank](/lodging/hotel-dist/bedbank.md) — related
- [NDC](/common/standards/ndc.md) — related

# Distinctions
- **Aggregator** vs [Metasearch](/common/standards/metasearch.md) — An aggregator pools supplier content into a feed/API for resellers (back-end); metasearch is a consumer-facing price-comparison and referral product.
- **Aggregator** vs [GDS](/common/standards/gds.md) — A GDS is a large, established global aggregation platform with ticketing/settlement; 'aggregator' is a broader term for any supplier-content consolidator, including bedbanks and NDC hubs.
- **Aggregator** vs [Bedbank](/lodging/hotel-dist/bedbank.md) — A bedbank is a specific hotel-inventory aggregator selling net rates wholesale; aggregator is the general category.
- **Aggregator** vs [Direct Connect](/common/standards/direct-connect.md) — A Direct Connect is the seller's own integration to a single supplier; an aggregator offers one connection that consolidates many suppliers' direct connects on the seller's behalf.
- **Aggregator** vs [Dynamic Packaging](/common/standards/dynamic-packaging.md) — An aggregator supplies the consolidated multi-supplier content; dynamic packaging is what a seller does with that content to build and price a combined trip.
- **Aggregator** vs [NDC Exchange](/common/standards/ndc-exchange.md) — An aggregator is the general category of supplier-content consolidator; NDC Exchange is a specific ATPCO/SITA industry hub that also normalizes and translates NDC and OTA schema versions between parties.

# Citations
[1] Phocuswright / industry usage — Travel content aggregation (industry definition)
