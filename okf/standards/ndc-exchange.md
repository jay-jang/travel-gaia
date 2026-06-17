---
type: Provider Term
title: NDC Exchange
description: 'NDC Exchange is an industry-owned hub/marketplace, developed by ATPCO with SITA, that connects airlines and travel sellers to exchange offers and orders through a single API. Its message hub normalizes differing NDC schema versions in real time and can translate non-NDC formats such as OpenTravel (OTA) XML, lowering the barrier to NDC adoption.'
tags:
  - standards
  - active
timestamp: '2026-06-17T00:00:00Z'
id: ndc-exchange
category: standards
conceptType: provider-term
status: active
term_ko: NDC Exchange(NDC 익스체인지)
definition_ko: 'NDC Exchange는 ATPCO가 SITA와 함께 개발한 산업 소유 허브/마켓플레이스로, 단일 API를 통해 항공사와 여행 판매자가 오퍼와 주문을 교환하도록 연결한다. 그 메시지 허브는 서로 다른 NDC 스키마 버전을 실시간으로 정규화하고 OpenTravel(OTA) XML 같은 비(非)NDC 형식도 변환할 수 있어 NDC 도입 장벽을 낮춘다.'
longDef: 'Being format- and version-agnostic, NDC Exchange lets a carrier or aggregator connect once regardless of the schema version each counterparty supports, with the hub handling normalization and routing. Early participants include ARC for settlement support and Routehappy by ATPCO for rich-content merchandising, positioning NDC Exchange as a connectivity adapter and hybrid distribution layer in the modern airline retailing ecosystem.'
longDef_ko: '형식과 버전에 구애받지 않으므로, NDC Exchange는 항공사나 애그리게이터가 각 상대방이 지원하는 스키마 버전과 무관하게 한 번만 연결하면 되도록 하며, 허브가 정규화와 라우팅을 처리한다. 초기 참여자로 정산 지원을 맡은 ARC와 리치 콘텐츠 머천다이징을 제공하는 Routehappy by ATPCO가 있어, NDC Exchange는 현대 항공 리테일링 생태계에서 연결 어댑터이자 하이브리드 유통 계층으로 자리한다.'
aliases:
  - NDC Exchange
  - ATPCO NDC Exchange
providerTerms:
  - provider: ATPCO
    term: NDC Exchange
    context: 'ATPCO (with SITA) developed and operates NDC Exchange as an industry-owned hub for offers, orders, and rich content'
    context_ko: ATPCO(및 SITA)가 오퍼·주문·리치 콘텐츠를 위한 산업 소유 허브로 NDC Exchange를 개발·운영함
    relationship: same
relationships:
  - type: related
    targetTerm: NDC
  - type: related
    targetTerm: Aggregator
  - type: related
    targetTerm: ATPCO
  - type: related
    targetTerm: GDS Bypass
distinctions:
  - targetTerm: Aggregator
    explanation: An aggregator is the general category of supplier-content consolidator; NDC Exchange is a specific ATPCO/SITA industry hub that also normalizes and translates NDC and OTA schema versions between parties.
    explanation_ko: '애그리게이터는 공급사 콘텐츠 통합자를 아우르는 일반 범주이고, NDC Exchange는 당사자 간 NDC·OTA 스키마 버전을 정규화·변환하기도 하는 특정 ATPCO/SITA 산업 허브이다.'
  - targetTerm: NDC
    explanation: 'NDC is the messaging standard; NDC Exchange is a connectivity platform/marketplace that carries, normalizes, and translates NDC (and other) messages between airlines and sellers.'
    explanation_ko: 'NDC는 메시징 표준이고, NDC Exchange는 항공사와 판매자 사이에서 NDC(및 기타) 메시지를 실어 나르고 정규화·변환하는 연결 플랫폼/마켓플레이스이다.'
sources:
  - org: ATPCO
    name: Routehappy by ATPCO announces integration of rich content into NDC Exchange
    version: ''
    section: ''
    url: 'https://atpco.net/single-press/routehappy-by-atpco-announces-integration-of-rich-content-into-ndc-exchange/'
  - org: ATPCO
    name: Get Connected. Get Noticed. Stay Happy. (Routehappy + NDC Exchange)
    version: ''
    section: ''
    url: 'https://info.atpco.net/atpco-routehappy-ndc-exchange'
  - org: ATPCO
    name: ATPCO and SITA Collaborate to Build NDC Exchange to Overcome Barriers to NDC Adoption
    version: ''
    section: ''
    url: 'https://atpco.net/single-press/atpco-and-sita-collaborate-to-build-ndc-exchange-to-overcome-barriers-to-ndc-adoption/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="24" r="6"/><circle cx="8" cy="12" r="3"/><circle cx="40" cy="12" r="3"/><circle cx="8" cy="36" r="3"/><circle cx="40" cy="36" r="3"/><path d="M11 13l8 6M37 13l-8 6M11 35l8-6M37 35l-8-6"/></svg>
---

> NDC Exchange is an industry-owned hub/marketplace, developed by ATPCO with SITA, that connects airlines and travel sellers to exchange offers and orders through a single API. Its message hub normalizes differing NDC schema versions in real time and can translate non-NDC formats such as OpenTravel (OTA) XML, lowering the barrier to NDC adoption.

Being format- and version-agnostic, NDC Exchange lets a carrier or aggregator connect once regardless of the schema version each counterparty supports, with the hub handling normalization and routing. Early participants include ARC for settlement support and Routehappy by ATPCO for rich-content merchandising, positioning NDC Exchange as a connectivity adapter and hybrid distribution layer in the modern airline retailing ecosystem.

**한국어 / Korean** — **NDC Exchange(NDC 익스체인지)** — NDC Exchange는 ATPCO가 SITA와 함께 개발한 산업 소유 허브/마켓플레이스로, 단일 API를 통해 항공사와 여행 판매자가 오퍼와 주문을 교환하도록 연결한다. 그 메시지 허브는 서로 다른 NDC 스키마 버전을 실시간으로 정규화하고 OpenTravel(OTA) XML 같은 비(非)NDC 형식도 변환할 수 있어 NDC 도입 장벽을 낮춘다.

형식과 버전에 구애받지 않으므로, NDC Exchange는 항공사나 애그리게이터가 각 상대방이 지원하는 스키마 버전과 무관하게 한 번만 연결하면 되도록 하며, 허브가 정규화와 라우팅을 처리한다. 초기 참여자로 정산 지원을 맡은 ARC와 리치 콘텐츠 머천다이징을 제공하는 Routehappy by ATPCO가 있어, NDC Exchange는 현대 항공 리테일링 생태계에서 연결 어댑터이자 하이브리드 유통 계층으로 자리한다.

**Aliases:** `NDC Exchange`, `ATPCO NDC Exchange`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| ATPCO | `NDC Exchange` | same | ATPCO (with SITA) developed and operates NDC Exchange as an industry-owned hub for offers, orders, and rich content |

# Related
- [NDC](/standards/ndc.md) — related
- [Aggregator](/standards/aggregator.md) — related
- [ATPCO](/air-shop/atpco.md) — related
- [GDS Bypass](/standards/gds-bypass.md) — related

# Distinctions
- **NDC Exchange** vs [Aggregator](/standards/aggregator.md) — An aggregator is the general category of supplier-content consolidator; NDC Exchange is a specific ATPCO/SITA industry hub that also normalizes and translates NDC and OTA schema versions between parties.
- **NDC Exchange** vs [NDC](/standards/ndc.md) — NDC is the messaging standard; NDC Exchange is a connectivity platform/marketplace that carries, normalizes, and translates NDC (and other) messages between airlines and sellers.

# Citations
[1] [ATPCO — Routehappy by ATPCO announces integration of rich content into NDC Exchange](https://atpco.net/single-press/routehappy-by-atpco-announces-integration-of-rich-content-into-ndc-exchange/)
[2] [ATPCO — Get Connected. Get Noticed. Stay Happy. (Routehappy + NDC Exchange)](https://info.atpco.net/atpco-routehappy-ndc-exchange)
[3] [ATPCO — ATPCO and SITA Collaborate to Build NDC Exchange to Overcome Barriers to NDC Adoption](https://atpco.net/single-press/atpco-and-sita-collaborate-to-build-ndc-exchange-to-overcome-barriers-to-ndc-adoption/)
