---
type: Business Term
title: Direct Connect
description: 'A Direct Connect is a dedicated API integration linking a buyer''s booking platform (OTA, TMC, corporate tool, or agency system) directly to an airline''s or other supplier''s reservation system, bypassing or supplementing the GDS. It enables real-time access to the supplier''s own content, often including NDC offers and ancillaries.'
tags:
  - standards
  - active
timestamp: '2026-06-17T00:00:00Z'
id: direct-connect
vertical: common
category: standards
conceptType: business-term
status: active
term_ko: 다이렉트 커넥트(직접 연결)
definition_ko: '다이렉트 커넥트(Direct Connect)는 구매자의 예약 플랫폼(OTA, TMC, 기업 출장 도구, 여행사 시스템)을 항공사 등 공급사의 예약 시스템에 직접 연결하는 전용 API 연동으로, GDS를 우회하거나 보완한다. 공급사 자체 콘텐츠(흔히 NDC 오퍼와 부가 서비스 포함)에 실시간으로 접근할 수 있게 한다.'
longDef: 'Direct Connects can be implemented over NDC-compliant APIs, proprietary supplier APIs, or even legacy ATPCO/EDIFACT interfaces. Airlines use them to reduce GDS distribution costs, control merchandising, and personalize offers, while large corporate accounts and aggregators use them for richer or differentiated content. Maintaining many point-to-point Direct Connects is integration-heavy, which is why aggregators and GDS NDC programs exist to consolidate them.'
longDef_ko: '다이렉트 커넥트는 NDC 호환 API, 공급사 자체 API, 또는 레거시 ATPCO/EDIFACT 인터페이스로도 구현될 수 있다. 항공사는 이를 통해 GDS 유통 비용을 줄이고 머천다이징을 통제하며 오퍼를 개인화하고, 대형 기업 계정과 애그리게이터는 더 풍부하거나 차별화된 콘텐츠를 얻기 위해 사용한다. 다수의 일대일 다이렉트 커넥트를 유지하는 것은 연동 부담이 크므로, 이를 통합하기 위해 애그리게이터와 GDS의 NDC 프로그램이 존재한다.'
aliases:
  - Direct Connection
  - Airline Direct Connect
  - Supplier Direct Connect
relationships:
  - type: related
    targetTerm: NDC
  - type: related
    targetTerm: GDS
  - type: related
    targetTerm: Aggregator
  - type: related
    targetTerm: REST API
  - type: related
    targetTerm: OTA (Online Travel Agency)
distinctions:
  - targetTerm: GDS
    explanation: A Direct Connect is a point-to-point link straight to one supplier; a GDS is a shared intermediary aggregating many suppliers for many sellers.
    explanation_ko: '다이렉트 커넥트는 한 공급사로 직접 이어지는 일대일 연결이고, GDS는 여러 공급사를 여러 판매자에게 통합해 주는 공용 중개자이다.'
  - targetTerm: Aggregator
    explanation: A Direct Connect is the seller's own integration to a single supplier; an aggregator offers one connection that consolidates many suppliers' direct connects on the seller's behalf.
    explanation_ko: '다이렉트 커넥트는 판매자가 단일 공급사와 직접 맺는 연동이고, 애그리게이터는 여러 공급사의 직접 연결을 판매자 대신 하나로 통합해 제공한다.'
  - targetTerm: NDC
    explanation: Direct Connect is a distribution arrangement (who connects to whom); NDC is a messaging standard that a Direct Connect may (but need not) use.
    explanation_ko: '다이렉트 커넥트는 누가 누구와 연결되는지에 관한 유통 방식이고, NDC는 다이렉트 커넥트가 사용할 수도(반드시는 아님) 있는 메시징 표준이다.'
  - targetTerm: GDS Bypass
    explanation: Direct Connect is the technical API link; GDS Bypass is the business strategy that utilizes it.
    explanation_ko: 'Direct Connect는 기술적인 API 연결 방식이고, GDS 우회는 이를 활용한 비즈니스 전략이다.'
sources:
  - org: IATA
    name: Airline Distribution / NDC overview
    version: ''
    section: ''
    url: ''
  - org: Industry usage
    name: Direct connect (travel distribution definition)
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="18" width="12" height="12" rx="2"/><rect x="32" y="18" width="12" height="12" rx="2"/><line x1="16" y1="24" x2="32" y2="24"/><circle cx="24" cy="24" r="2.5" fill="currentColor"/></svg>
---

> A Direct Connect is a dedicated API integration linking a buyer's booking platform (OTA, TMC, corporate tool, or agency system) directly to an airline's or other supplier's reservation system, bypassing or supplementing the GDS. It enables real-time access to the supplier's own content, often including NDC offers and ancillaries.

Direct Connects can be implemented over NDC-compliant APIs, proprietary supplier APIs, or even legacy ATPCO/EDIFACT interfaces. Airlines use them to reduce GDS distribution costs, control merchandising, and personalize offers, while large corporate accounts and aggregators use them for richer or differentiated content. Maintaining many point-to-point Direct Connects is integration-heavy, which is why aggregators and GDS NDC programs exist to consolidate them.

**한국어 / Korean** — **다이렉트 커넥트(직접 연결)** — 다이렉트 커넥트(Direct Connect)는 구매자의 예약 플랫폼(OTA, TMC, 기업 출장 도구, 여행사 시스템)을 항공사 등 공급사의 예약 시스템에 직접 연결하는 전용 API 연동으로, GDS를 우회하거나 보완한다. 공급사 자체 콘텐츠(흔히 NDC 오퍼와 부가 서비스 포함)에 실시간으로 접근할 수 있게 한다.

다이렉트 커넥트는 NDC 호환 API, 공급사 자체 API, 또는 레거시 ATPCO/EDIFACT 인터페이스로도 구현될 수 있다. 항공사는 이를 통해 GDS 유통 비용을 줄이고 머천다이징을 통제하며 오퍼를 개인화하고, 대형 기업 계정과 애그리게이터는 더 풍부하거나 차별화된 콘텐츠를 얻기 위해 사용한다. 다수의 일대일 다이렉트 커넥트를 유지하는 것은 연동 부담이 크므로, 이를 통합하기 위해 애그리게이터와 GDS의 NDC 프로그램이 존재한다.

**Aliases:** `Direct Connection`, `Airline Direct Connect`, `Supplier Direct Connect`

# Related
- [NDC](/common/standards/ndc.md) — related
- [GDS](/common/standards/gds.md) — related
- [Aggregator](/common/standards/aggregator.md) — related
- [REST API](/common/standards/rest-api.md) — related
- [OTA (Online Travel Agency)](/common/standards/ota-online-travel-agency.md) — related

# Distinctions
- **Direct Connect** vs [GDS](/common/standards/gds.md) — A Direct Connect is a point-to-point link straight to one supplier; a GDS is a shared intermediary aggregating many suppliers for many sellers.
- **Direct Connect** vs [Aggregator](/common/standards/aggregator.md) — A Direct Connect is the seller's own integration to a single supplier; an aggregator offers one connection that consolidates many suppliers' direct connects on the seller's behalf.
- **Direct Connect** vs [NDC](/common/standards/ndc.md) — Direct Connect is a distribution arrangement (who connects to whom); NDC is a messaging standard that a Direct Connect may (but need not) use.
- **Direct Connect** vs [GDS Bypass](/common/standards/gds-bypass.md) — Direct Connect is the technical API link; GDS Bypass is the business strategy that utilizes it.

# Citations
[1] IATA — Airline Distribution / NDC overview
[2] Industry usage — Direct connect (travel distribution definition)
