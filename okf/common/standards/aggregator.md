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
sources:
  - name: Travel content aggregation (industry definition)
    org: Phocuswright / industry usage
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="10" r="4"/><circle cx="10" cy="24" r="4"/><circle cx="10" cy="38" r="4"/><circle cx="38" cy="24" r="5"/><path d="M14 11l8 8M14 24h10M14 37l8-8"/><path d="M26 24l8 0"/></svg>
---

> In travel distribution, an aggregator is an intermediary that consolidates inventory, rates, and content from many suppliers into a single normalized feed or API for resellers (such as OTAs and travel agencies). Examples include hotel bedbanks and NDC/content aggregation platforms.

Aggregators reduce integration overhead by giving sellers one connection to reach many suppliers, normalizing differing formats (EDIFACT, NDC, OpenTravel, proprietary APIs) into a unified interface. A hotel bedbank is a common aggregator type; NDC aggregators consolidate multiple airlines' NDC connections for travel sellers.

**한국어 / Korean** — **애그리게이터(콘텐츠 통합자)** — 여행 유통에서 애그리게이터(aggregator)는 여러 공급사의 재고, 요금, 콘텐츠를 하나의 정규화된 피드나 API로 통합하여 재판매자(OTA, 여행사 등)에게 제공하는 중개자이다. 호텔 베드뱅크와 NDC/콘텐츠 통합 플랫폼 등이 그 예이다.

애그리게이터는 판매자에게 단일 연결로 여러 공급사에 도달할 수 있게 하여 연동 부담을 줄이며, 서로 다른 형식(EDIFACT, NDC, OpenTravel, 자체 API)을 하나의 통합 인터페이스로 정규화한다. 호텔 베드뱅크가 대표적인 애그리게이터 유형이며, NDC 애그리게이터는 여러 항공사의 NDC 연결을 여행 판매자를 위해 통합한다.

**Aliases:** `Content Aggregator`, `Inventory Aggregator`, `Travel Aggregator`

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

# Citations
[1] Phocuswright / industry usage — Travel content aggregation (industry definition)
