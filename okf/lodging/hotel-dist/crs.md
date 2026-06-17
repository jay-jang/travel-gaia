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
sources:
  - name: HTNG interface specifications
    org: HTNG
    version: ''
    section: ''
    url: ''
  - name: OpenTravel Specification
    org: OpenTravel Alliance
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="24" r="6"/><circle cx="24" cy="8" r="3"/><circle cx="24" cy="40" r="3"/><circle cx="8" cy="16" r="3"/><circle cx="40" cy="16" r="3"/><circle cx="8" cy="32" r="3"/><circle cx="40" cy="32" r="3"/><path d="M24 11v7M24 30v7M11 17l8 4M37 17l-8 4M11 31l8-4M37 31l-8-4"/></svg>
---

> A Central Reservation System is the hotel-side system that stores and distributes room inventory, rates, and availability across multiple channels and that captures and manages reservations centrally. It acts as the single source of truth for sellable inventory and rate plans pushed out to the brand website, GDS, OTAs, and other channels.

A hotel CRS centralizes ARI (availability, rates, inventory) for one or many properties and connects upstream to demand channels (brand.com booking engine, GDS, OTAs, metasearch) and downstream to property systems. It differs from a PMS, which runs the on-property operations; bookings typically flow CRS -> PMS for fulfillment. Distribution to many online channels is often handled together with or via a Channel Manager.

**한국어 / Korean** — **중앙 예약 시스템(CRS)** — 중앙 예약 시스템(CRS)은 객실 인벤토리, 요금, 가용성을 여러 채널에 걸쳐 저장·분배하고 예약을 중앙에서 수집·관리하는 호텔 측 시스템이다. 브랜드 웹사이트, GDS, OTA 및 기타 채널로 송출되는 판매 가능 인벤토리와 요금제의 단일 진실 공급원(single source of truth) 역할을 한다.

호텔 CRS는 하나 또는 여러 객실의 ARI(가용성, 요금, 인벤토리)를 중앙화하며, 상류로는 수요 채널(브랜드 닷컴 예약 엔진, GDS, OTA, 메타서치)과, 하류로는 자산 운영 시스템과 연결된다. 이는 현장 운영을 담당하는 PMS와 구별되며, 예약은 일반적으로 CRS에서 PMS로 흘러 이행(fulfillment)된다. 다수의 온라인 채널로의 분배는 흔히 채널 매니저(Channel Manager)와 함께 또는 이를 통해 처리된다.

**Aliases:** `Central Reservation System`, `Central Reservations System`, `Hotel CRS`

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

# Citations
[1] HTNG — HTNG interface specifications
[2] OpenTravel Alliance — OpenTravel Specification
