---
type: Business Term
title: GDS Bypass
description: 'A distribution strategy where travel suppliers (principally airlines and hotels) bypass traditional Global Distribution Systems (GDS) by connecting directly to distributors (OTAs, TMCs, corporate tools) via APIs (like NDC or custom XML/JSON APIs). This reduces distribution costs (GDS segment fees) and allows suppliers to control offers and rich content.'
tags:
  - standards
  - active
timestamp: '2026-06-15T00:00:00Z'
id: gds-bypass
vertical: common
category: standards
conceptType: business-term
status: active
term_ko: GDS 우회
definition_ko: '여행 공급업체(주로 항공사 및 호텔)가 API(NDC 또는 맞춤형 XML/JSON API 등)를 통해 판매 채널(OTA, TMC, 기업 예약 도구 등)에 직접 연결하여 기존 GDS(글로벌 유통 시스템)를 우회하는 유통 전략이다. 이는 GDS 세그먼트 수수료 등의 유통 비용을 줄이고, 공급업체가 직접 오퍼와 다양한 콘텐츠를 통제할 수 있게 한다.'
longDef: 'GDS Bypass has grown rapidly with the rise of IATA''s NDC standard and low-cost carrier (LCC) models, which avoid GDS fees entirely. Airlines incentivize GDS Bypass by applying surcharges to GDS bookings or removing cheaper inventory from GDS channels. In the hotel sector, GDS bypass occurs through direct API connections to bedbanks or OTAs, avoiding traditional hotel GDS fees.'
longDef_ko: GDS 우회는 GDS 수수료를 완전히 회피하는 저비용항공사(LCC) 모델 및 IATA의 NDC 표준 등장과 함께 빠르게 성장했다. 항공사들은 GDS 예약에 할증료(surcharge)를 부과하거나 GDS 채널에서 저렴한 인벤토리를 제거함으로써 GDS 우회를 유도한다. 호텔 부문에서는 베드뱅크나 OTA로의 직접 API 연결을 통해 전통적인 호텔 GDS 수수료를 회피하며 GDS 우회가 일어난다.
aliases:
  - GDS Bypassing
  - Direct Distribution
  - Direct Connect Distribution
providerTerms:
  - provider: Lufthansa Group
    term: Direct Connect
    context: Lufthansa's GDS bypass channels with special fare access and no GDS fee.
    context_ko: 'Lufthansa의 GDS 우회 채널로, 특별 운임 조회 가능 및 GDS 수수료 면제.'
    relationship: sameAs
  - provider: American Airlines
    term: AA Direct Connect
    context: Direct API connection that bypasses GDS channels.
    context_ko: GDS 채널을 우회하는 직접 API 연결.
    relationship: sameAs
relationships:
  - type: contrasts
    targetTerm: GDS
  - type: related
    targetTerm: NDC
  - type: related
    targetTerm: Direct Connect
  - type: related
    targetTerm: Aggregator
distinctions:
  - targetTerm: GDS
    explanation: GDS is the intermediary being bypassed; GDS Bypass is the strategy of routing around it.
    explanation_ko: 'GDS는 우회 대상이 되는 중개 플랫폼이며, GDS 우회는 해당 플랫폼을 거치지 않는 유통 전략이다.'
  - targetTerm: Direct Connect
    explanation: Direct Connect is the technical API link; GDS Bypass is the business strategy that utilizes it.
    explanation_ko: 'Direct Connect는 기술적인 API 연결 방식이고, GDS 우회는 이를 활용한 비즈니스 전략이다.'
  - targetTerm: NDC
    explanation: NDC is the XML-based data transmission standard; GDS Bypass is a strategic routing decision that often uses NDC.
    explanation_ko: 'NDC는 XML 기반 데이터 전송 표준이고, GDS 우회는 흔히 NDC를 활용하여 GDS 채널을 우회하는 비즈니스 전략적 결정이다.'
sources:
  - name: IATA New Distribution Capability (NDC) Implementation Guide
    org: IATA
    version: ''
    section: ''
    url: 'https://guides.developer.iata.org/docs/21-1_ImplementationGuide.pdf'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M8 12h32M8 24h12m16 0h4M8 36h32"/><path d="M28 20l4 4-4 4"/><circle cx="24" cy="24" r="2"/></svg>
---

> A distribution strategy where travel suppliers (principally airlines and hotels) bypass traditional Global Distribution Systems (GDS) by connecting directly to distributors (OTAs, TMCs, corporate tools) via APIs (like NDC or custom XML/JSON APIs). This reduces distribution costs (GDS segment fees) and allows suppliers to control offers and rich content.

GDS Bypass has grown rapidly with the rise of IATA's NDC standard and low-cost carrier (LCC) models, which avoid GDS fees entirely. Airlines incentivize GDS Bypass by applying surcharges to GDS bookings or removing cheaper inventory from GDS channels. In the hotel sector, GDS bypass occurs through direct API connections to bedbanks or OTAs, avoiding traditional hotel GDS fees.

**한국어 / Korean** — **GDS 우회** — 여행 공급업체(주로 항공사 및 호텔)가 API(NDC 또는 맞춤형 XML/JSON API 등)를 통해 판매 채널(OTA, TMC, 기업 예약 도구 등)에 직접 연결하여 기존 GDS(글로벌 유통 시스템)를 우회하는 유통 전략이다. 이는 GDS 세그먼트 수수료 등의 유통 비용을 줄이고, 공급업체가 직접 오퍼와 다양한 콘텐츠를 통제할 수 있게 한다.

GDS 우회는 GDS 수수료를 완전히 회피하는 저비용항공사(LCC) 모델 및 IATA의 NDC 표준 등장과 함께 빠르게 성장했다. 항공사들은 GDS 예약에 할증료(surcharge)를 부과하거나 GDS 채널에서 저렴한 인벤토리를 제거함으로써 GDS 우회를 유도한다. 호텔 부문에서는 베드뱅크나 OTA로의 직접 API 연결을 통해 전통적인 호텔 GDS 수수료를 회피하며 GDS 우회가 일어난다.

**Aliases:** `GDS Bypassing`, `Direct Distribution`, `Direct Connect Distribution`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Lufthansa Group | `Direct Connect` | sameAs | Lufthansa's GDS bypass channels with special fare access and no GDS fee. |
| American Airlines | `AA Direct Connect` | sameAs | Direct API connection that bypasses GDS channels. |

# Related
- [GDS](/common/standards/gds.md) — contrasts
- [NDC](/common/standards/ndc.md) — related
- [Direct Connect](/common/standards/direct-connect.md) — related
- [Aggregator](/common/standards/aggregator.md) — related

# Distinctions
- **GDS Bypass** vs [GDS](/common/standards/gds.md) — GDS is the intermediary being bypassed; GDS Bypass is the strategy of routing around it.
- **GDS Bypass** vs [Direct Connect](/common/standards/direct-connect.md) — Direct Connect is the technical API link; GDS Bypass is the business strategy that utilizes it.
- **GDS Bypass** vs [NDC](/common/standards/ndc.md) — NDC is the XML-based data transmission standard; GDS Bypass is a strategic routing decision that often uses NDC.

# Citations
[1] [IATA — IATA New Distribution Capability (NDC) Implementation Guide](https://guides.developer.iata.org/docs/21-1_ImplementationGuide.pdf)
