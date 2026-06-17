---
type: Provider Term
title: GDS
description: 'A Global Distribution System is a centralized intermediary platform that aggregates inventory, fares, and availability from airlines, hotels, car rental, and other suppliers and distributes it to travel agencies for shopping, booking, and ticketing. Major GDSs include Amadeus, Sabre, and Travelport (Galileo/Apollo/Worldspan).'
tags:
  - standards
  - active
timestamp: '2026-06-15T00:00:00Z'
id: gds
vertical: common
category: standards
conceptType: provider-term
status: active
abbreviation: GDS
term_ko: 글로벌 유통 시스템(GDS)
definition_ko: 'GDS는 항공사, 호텔, 렌터카 등 여러 공급사의 재고, 운임, 좌석 가용성을 통합하여 여행사가 조회, 예약, 발권할 수 있도록 유통하는 중앙집중식 중개 플랫폼이다. 주요 GDS로는 Amadeus, Sabre, Travelport(Galileo/Apollo/Worldspan)가 있다.'
longDef: 'GDSs evolved from airline-owned Computer Reservation Systems (CRS) in the 1960s-70s. They traditionally rely on EDIFACT and proprietary messaging and ATPCO-filed fares, holding bookings in a PNR and issuing tickets through BSP/ARC. NDC and direct connect APIs increasingly supplement or bypass classic GDS distribution.'
longDef_ko: 'GDS는 1960~70년대 항공사 소유의 예약 시스템(CRS)에서 발전했다. 전통적으로 EDIFACT와 자체 메시징, ATPCO에 등록된 운임에 의존하며, 예약을 PNR에 보관하고 BSP/ARC를 통해 발권한다. NDC와 직접 연결(direct connect) API가 점차 기존 GDS 유통을 보완하거나 우회하고 있다.'
aliases:
  - Global Distribution System
  - Computer Reservation System (legacy)
providerTerms:
  - provider: Amadeus
    term: Amadeus GDS
    context: One of the three major global GDS platforms
    context_ko: 3대 글로벌 GDS 플랫폼 중 하나
    relationship: narrower
  - provider: Sabre
    term: Sabre GDS
    context: Major global GDS platform
    context_ko: 주요 글로벌 GDS 플랫폼
    relationship: narrower
  - provider: Travelport
    term: Galileo / Apollo / Worldspan
    context: Travelport's GDS platforms
    context_ko: Travelport의 GDS 플랫폼
    relationship: narrower
relationships:
  - type: related
    targetTerm: GDS Bypass
  - type: related
    targetTerm: NDC
  - type: related
    targetTerm: OTA (Online Travel Agency)
  - type: related
    targetTerm: PNR
  - type: related
    targetTerm: ATPCO
  - type: related
    targetTerm: Pseudo City Code
  - type: related
    targetTerm: BSP
distinctions:
  - targetTerm: GDS Bypass
    explanation: GDS is the intermediary being bypassed; GDS Bypass is the strategy of routing around it.
    explanation_ko: 'GDS는 우회 대상이 되는 중개 플랫폼이며, GDS 우회는 해당 플랫폼을 거치지 않는 유통 전략이다.'
  - targetTerm: NDC
    explanation: GDS is the distribution platform/intermediary; NDC is an XML messaging standard that changes how content (including via GDS) is shopped and sold.
    explanation_ko: 'GDS는 유통 플랫폼이자 중개자이고, NDC는 콘텐츠를 조회하고 판매하는 방식을 바꾸는 XML 메시징 표준이다(GDS를 통한 콘텐츠도 포함).'
  - targetTerm: OTA (Online Travel Agency)
    explanation: A GDS distributes supplier content to sellers; an OTA is a seller that consumes GDS (or direct) content to sell to consumers.
    explanation_ko: 'GDS는 공급사 콘텐츠를 판매자에게 유통하고, OTA는 GDS(또는 직접 연결) 콘텐츠를 받아 소비자에게 판매하는 판매자이다.'
  - targetTerm: CRS
    explanation: GDS aggregates multiple suppliers across the industry; a CRS is a single carrier's or hotel's own reservation system.
    explanation_ko: 'GDS는 업계 전반의 여러 공급사를 통합하고, CRS는 개별 항공사 또는 호텔 자체의 예약 시스템이다.'
sources:
  - name: Airline Distribution overview
    org: IATA
    version: ''
    section: ''
    url: ''
  - name: Global Distribution System
    org: Amadeus / Sabre / Travelport documentation
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="24" r="10"/><path d="M14 24h20M24 14v20"/><path d="M18 17a14 14 0 0 0 0 14M30 17a14 14 0 0 1 0 14"/><path d="M24 24L10 38M24 24l14-14M24 24L10 10M24 24l14 14"/><circle cx="10" cy="10" r="2"/><circle cx="38" cy="10" r="2"/><circle cx="10" cy="38" r="2"/><circle cx="38" cy="38" r="2"/></svg>
---

> A Global Distribution System is a centralized intermediary platform that aggregates inventory, fares, and availability from airlines, hotels, car rental, and other suppliers and distributes it to travel agencies for shopping, booking, and ticketing. Major GDSs include Amadeus, Sabre, and Travelport (Galileo/Apollo/Worldspan).

GDSs evolved from airline-owned Computer Reservation Systems (CRS) in the 1960s-70s. They traditionally rely on EDIFACT and proprietary messaging and ATPCO-filed fares, holding bookings in a PNR and issuing tickets through BSP/ARC. NDC and direct connect APIs increasingly supplement or bypass classic GDS distribution.

**한국어 / Korean** — **글로벌 유통 시스템(GDS)** — GDS는 항공사, 호텔, 렌터카 등 여러 공급사의 재고, 운임, 좌석 가용성을 통합하여 여행사가 조회, 예약, 발권할 수 있도록 유통하는 중앙집중식 중개 플랫폼이다. 주요 GDS로는 Amadeus, Sabre, Travelport(Galileo/Apollo/Worldspan)가 있다.

GDS는 1960~70년대 항공사 소유의 예약 시스템(CRS)에서 발전했다. 전통적으로 EDIFACT와 자체 메시징, ATPCO에 등록된 운임에 의존하며, 예약을 PNR에 보관하고 BSP/ARC를 통해 발권한다. NDC와 직접 연결(direct connect) API가 점차 기존 GDS 유통을 보완하거나 우회하고 있다.

**Aliases:** `Global Distribution System`, `Computer Reservation System (legacy)`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Amadeus | `Amadeus GDS` | narrower | One of the three major global GDS platforms |
| Sabre | `Sabre GDS` | narrower | Major global GDS platform |
| Travelport | `Galileo / Apollo / Worldspan` | narrower | Travelport's GDS platforms |

# Related
- [GDS Bypass](/common/standards/gds-bypass.md) — related
- [NDC](/common/standards/ndc.md) — related
- [OTA (Online Travel Agency)](/common/standards/ota-online-travel-agency.md) — related
- [PNR](/air/air-ops/pnr.md) — related
- [ATPCO](/air/air-shop/atpco.md) — related
- [Pseudo City Code](/common/codes/pseudo-city-code.md) — related
- [BSP](/common/pay/bsp.md) — related

# Distinctions
- **GDS** vs [GDS Bypass](/common/standards/gds-bypass.md) — GDS is the intermediary being bypassed; GDS Bypass is the strategy of routing around it.
- **GDS** vs [NDC](/common/standards/ndc.md) — GDS is the distribution platform/intermediary; NDC is an XML messaging standard that changes how content (including via GDS) is shopped and sold.
- **GDS** vs [OTA (Online Travel Agency)](/common/standards/ota-online-travel-agency.md) — A GDS distributes supplier content to sellers; an OTA is a seller that consumes GDS (or direct) content to sell to consumers.
- **GDS** vs [CRS](/lodging/hotel-dist/crs.md) — GDS aggregates multiple suppliers across the industry; a CRS is a single carrier's or hotel's own reservation system.

# Citations
[1] IATA — Airline Distribution overview
[2] Amadeus / Sabre / Travelport documentation — Global Distribution System
