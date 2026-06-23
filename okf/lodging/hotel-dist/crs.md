---
type: Acronym
title: CRS
description: 'A Central Reservation System is the hotel-side system that stores and distributes room inventory, rates, and availability across multiple channels and that captures and manages reservations centrally. It acts as the single source of truth for sellable inventory and rate plans pushed out to the brand website, GDS, OTAs, and other channels.'
tags:
  - hotel-dist
  - active
timestamp: '2026-06-17T00:00:00Z'
id: crs
vertical: lodging
category: hotel-dist
conceptType: acronym
status: active
abbreviation: CRS
term_ko: 중앙 예약 시스템(CRS)
definition_ko: '중앙 예약 시스템(CRS)은 객실 인벤토리, 요금, 가용성을 여러 채널에 걸쳐 저장·분배하고 예약을 중앙에서 수집·관리하는 호텔 측 시스템이다. 브랜드 웹사이트, GDS, OTA 및 기타 채널로 송출되는 판매 가능 인벤토리와 요금제의 단일 진실 공급원(single source of truth) 역할을 한다.'
longDef: 'A hotel CRS centralizes ARI (availability, rates, inventory) for one or many properties and connects upstream to demand channels (brand.com booking engine, GDS, OTAs, metasearch) and downstream to property systems. It differs from a PMS, which runs the on-property operations; bookings typically flow CRS -> PMS for fulfillment. Distribution to many online channels is often handled together with or via a Channel Manager.'
longDef_ko: '호텔 CRS는 하나 또는 여러 객실의 ARI(가용성, 요금, 인벤토리)를 중앙화하며, 상류로는 수요 채널(브랜드 닷컴 예약 엔진, GDS, OTA, 메타서치)과, 하류로는 자산 운영 시스템과 연결된다. 이는 현장 운영을 담당하는 PMS와 구별되며, 예약은 일반적으로 CRS에서 PMS로 흘러 이행(fulfillment)된다. 다수의 온라인 채널로의 분배는 흔히 채널 매니저(Channel Manager)와 함께 또는 이를 통해 처리된다.'
aliases:
  - Central Reservation System
  - Central Reservations System
  - Hotel CRS
providerTerms:
  - provider: Sabre Hospitality
    term: SynXis Central Reservations
    context: 'SynXis CR is Sabre Hospitality''s hotel CRS that holds central inventory/rates and distributes ARI plus receives reservations across GDS, OTA, and brand.com channels.'
    context_ko: 'SynXis CR은 Sabre Hospitality의 호텔 CRS로, 중앙 재고/요금을 보유하고 ARI를 배포하며 GDS·OTA·브랜드닷컴 채널 전반에서 예약을 수신한다.'
    relationship: same
  - provider: OpenTravel/HTNG
    term: OTA_HotelResNotifRQ (CRS reservation delivery)
    context: Standards bodies define CRS-to-PMS reservation delivery via the OpenTravel/HTNG HotelResNotif message that pushes new/modify/cancel bookings from the central system.
    context_ko: 표준 단체들은 중앙 시스템에서 신규/변경/취소 예약을 푸시하는 OpenTravel/HTNG HotelResNotif 메시지를 통해 CRS-PMS 간 예약 전달을 정의한다.
    relationship: related
relationships:
  - type: related
    targetTerm: PMS
  - type: related
    targetTerm: Channel Manager
  - type: related
    targetTerm: ARI
  - type: related
    targetTerm: GDS
  - type: related
    targetTerm: Rate Plan
  - type: related
    targetTerm: Allotment
distinctions:
  - targetTerm: PMS
    explanation: 'CRS manages distribution and central reservations; PMS manages on-property operations like check-in, folios, and housekeeping.'
    explanation_ko: 'CRS는 분배와 중앙 예약을 관리하고, PMS는 체크인, 폴리오(folio), 하우스키핑 같은 현장 운영을 관리한다.'
  - targetTerm: Channel Manager
    explanation: 'CRS is the central inventory/reservation hub; a Channel Manager is the connectivity layer that syncs ARI to many online channels (sometimes a CRS feature, sometimes a separate product).'
    explanation_ko: 'CRS는 중앙 인벤토리/예약 허브이고, 채널 매니저는 ARI를 다수의 온라인 채널로 동기화하는 연결 계층이다(CRS의 기능일 때도 있고 별도 제품일 때도 있다).'
  - targetTerm: Booking Engine
    explanation: The CRS is the central system that holds and distributes a hotel's inventory and rates across all channels; the booking engine is the guest-facing front end of the direct channel that queries the CRS and creates direct reservations.
    explanation_ko: 'CRS는 호텔의 재고·요금을 보유하고 전 채널에 유통하는 중앙 시스템이고, 부킹 엔진은 CRS를 조회하여 직접 예약을 생성하는 직접 채널의 고객 대면 프런트엔드다.'
  - targetTerm: Departure Control System (DCS)
    explanation: 'A CRS/reservation system holds the booking and inventory before travel; the DCS takes over at the airport for check-in, boarding and load control, receiving its passenger data from the reservation system via PNL/ADL.'
    explanation_ko: 'CRS/예약 시스템은 여행 전 예약과 재고를 보유하고, DCS는 공항에서 체크인·탑승·탑재 통제를 인계받아 PNL/ADL을 통해 예약 시스템으로부터 승객 데이터를 수신한다.'
  - targetTerm: GDS
    explanation: GDS aggregates multiple suppliers across the industry; a CRS is a single carrier's or hotel's own reservation system.
    explanation_ko: 'GDS는 업계 전반의 여러 공급사를 통합하고, CRS는 개별 항공사 또는 호텔 자체의 예약 시스템이다.'
  - targetTerm: Hotel Representation Company
    explanation: 'A CRS is the technology that stores and distributes a hotel''s inventory; a representation company is the commercial intermediary that signs up independents, gives them a chain code, and sells/markets them—often on top of a CRS.'
    explanation_ko: 'CRS는 호텔의 인벤토리를 저장·분배하는 기술이고, 대표 판매 회사는 독립 호텔을 모집해 chain code를 부여하고 판매·마케팅하는 상업적 중개자로, 흔히 CRS 위에서 운영된다.'
  - targetTerm: Passenger Service System (PSS)
    explanation: A CRS (reservations system) is one component within a PSS; the PSS is the broader platform that also includes inventory and departure control alongside reservations.
    explanation_ko: 'CRS(예약 시스템)는 PSS 안의 한 구성요소이고, PSS는 예약과 함께 재고와 출발 통제까지 포함하는 더 넓은 플랫폼이다.'
  - targetTerm: Single Image Inventory
    explanation: A CRS is the central reservation system (the software/platform); Single Image Inventory is the architectural principle—one shared availability pool fed to all channels—that a CRS implements.
    explanation_ko: 'CRS는 중앙 예약 시스템(소프트웨어/플랫폼)이고, Single Image Inventory는 하나의 공유 가용성 풀을 모든 채널에 공급하는 아키텍처 원칙으로, CRS가 이를 구현한다.'
sources:
  - name: HTNG interface specifications
    org: HTNG
    version: ''
    section: ''
    url: 'https://www.ahla.com/htng-technical-specifications'
  - name: OpenTravel Specification
    org: OpenTravel Alliance
    version: ''
    section: ''
    url: 'https://opentravel.org/download-specs/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="24" r="6"/><circle cx="24" cy="8" r="3"/><circle cx="24" cy="40" r="3"/><circle cx="8" cy="16" r="3"/><circle cx="40" cy="16" r="3"/><circle cx="8" cy="32" r="3"/><circle cx="40" cy="32" r="3"/><path d="M24 11v7M24 30v7M11 17l8 4M37 17l-8 4M11 31l8-4M37 31l-8-4"/></svg>
---

> A Central Reservation System is the hotel-side system that stores and distributes room inventory, rates, and availability across multiple channels and that captures and manages reservations centrally. It acts as the single source of truth for sellable inventory and rate plans pushed out to the brand website, GDS, OTAs, and other channels.

A hotel CRS centralizes ARI (availability, rates, inventory) for one or many properties and connects upstream to demand channels (brand.com booking engine, GDS, OTAs, metasearch) and downstream to property systems. It differs from a PMS, which runs the on-property operations; bookings typically flow CRS -> PMS for fulfillment. Distribution to many online channels is often handled together with or via a Channel Manager.

**한국어 / Korean** — **중앙 예약 시스템(CRS)** — 중앙 예약 시스템(CRS)은 객실 인벤토리, 요금, 가용성을 여러 채널에 걸쳐 저장·분배하고 예약을 중앙에서 수집·관리하는 호텔 측 시스템이다. 브랜드 웹사이트, GDS, OTA 및 기타 채널로 송출되는 판매 가능 인벤토리와 요금제의 단일 진실 공급원(single source of truth) 역할을 한다.

호텔 CRS는 하나 또는 여러 객실의 ARI(가용성, 요금, 인벤토리)를 중앙화하며, 상류로는 수요 채널(브랜드 닷컴 예약 엔진, GDS, OTA, 메타서치)과, 하류로는 자산 운영 시스템과 연결된다. 이는 현장 운영을 담당하는 PMS와 구별되며, 예약은 일반적으로 CRS에서 PMS로 흘러 이행(fulfillment)된다. 다수의 온라인 채널로의 분배는 흔히 채널 매니저(Channel Manager)와 함께 또는 이를 통해 처리된다.

**Aliases:** `Central Reservation System`, `Central Reservations System`, `Hotel CRS`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Sabre Hospitality | `SynXis Central Reservations` | same | SynXis CR is Sabre Hospitality's hotel CRS that holds central inventory/rates and distributes ARI plus receives reservations across GDS, OTA, and brand.com channels. |
| OpenTravel/HTNG | `OTA_HotelResNotifRQ (CRS reservation delivery)` | related | Standards bodies define CRS-to-PMS reservation delivery via the OpenTravel/HTNG HotelResNotif message that pushes new/modify/cancel bookings from the central system. |

# Related
- [PMS](/lodging/hotel-dist/pms.md) — related
- [Channel Manager](/lodging/hotel-dist/channel-manager.md) — related
- [ARI](/lodging/hotel-dist/ari.md) — related
- [GDS](/common/standards/gds.md) — related
- [Rate Plan](/lodging/hotel-rate/rate-plan.md) — related
- [Allotment](/lodging/hotel-rate/allotment.md) — related

# Distinctions
- **CRS** vs [PMS](/lodging/hotel-dist/pms.md) — CRS manages distribution and central reservations; PMS manages on-property operations like check-in, folios, and housekeeping.
- **CRS** vs [Channel Manager](/lodging/hotel-dist/channel-manager.md) — CRS is the central inventory/reservation hub; a Channel Manager is the connectivity layer that syncs ARI to many online channels (sometimes a CRS feature, sometimes a separate product).
- **CRS** vs [Booking Engine](/lodging/hotel-dist/booking-engine.md) — The CRS is the central system that holds and distributes a hotel's inventory and rates across all channels; the booking engine is the guest-facing front end of the direct channel that queries the CRS and creates direct reservations.
- **CRS** vs [Departure Control System (DCS)](/air/air-ops/departure-control-system-dcs.md) — A CRS/reservation system holds the booking and inventory before travel; the DCS takes over at the airport for check-in, boarding and load control, receiving its passenger data from the reservation system via PNL/ADL.
- **CRS** vs [GDS](/common/standards/gds.md) — GDS aggregates multiple suppliers across the industry; a CRS is a single carrier's or hotel's own reservation system.
- **CRS** vs [Hotel Representation Company](/lodging/hotel-dist/hotel-representation-company.md) — A CRS is the technology that stores and distributes a hotel's inventory; a representation company is the commercial intermediary that signs up independents, gives them a chain code, and sells/markets them—often on top of a CRS.
- **CRS** vs [Passenger Service System (PSS)](/common/standards/passenger-service-system-pss.md) — A CRS (reservations system) is one component within a PSS; the PSS is the broader platform that also includes inventory and departure control alongside reservations.
- **CRS** vs [Single Image Inventory](/lodging/hotel-dist/single-image-inventory.md) — A CRS is the central reservation system (the software/platform); Single Image Inventory is the architectural principle—one shared availability pool fed to all channels—that a CRS implements.

# Citations
[1] [HTNG — HTNG interface specifications](https://www.ahla.com/htng-technical-specifications)
[2] [OpenTravel Alliance — OpenTravel Specification](https://opentravel.org/download-specs/)
