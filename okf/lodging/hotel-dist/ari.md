---
type: Acronym
title: ARI
description: 'ARI stands for Availability, Rates, and Inventory — the core set of data a hotel distributes to sales channels: which dates/room types are available, at what prices, and how many units remain. Keeping ARI synchronized and accurate across channels is the central function of hotel distribution.'
tags:
  - hotel-dist
  - active
  - OpenTravel
timestamp: '2026-06-17T00:00:00Z'
id: ari
vertical: lodging
category: hotel-dist
conceptType: acronym
status: active
abbreviation: ARI
term_ko: 가용성·요금·인벤토리(ARI)
definition_ko: 'ARI는 Availability(가용성), Rates(요금), Inventory(인벤토리)의 약어로, 호텔이 판매 채널에 분배하는 핵심 데이터 묶음을 가리킨다. 즉 어떤 날짜/객실 유형이 판매 가능한지, 어떤 가격인지, 몇 개의 객실이 남아 있는지를 의미한다. ARI를 채널 전반에 걸쳐 동기화하고 정확하게 유지하는 것이 호텔 분배의 핵심 기능이다.'
longDef: 'ARI is the data payload exchanged between a hotel''s inventory source (CRS/PMS) and its channels via a Channel Manager. It is commonly transmitted using standardized messages that update availability counts, rate values, and restrictions such as length-of-stay or stop-sell. Inconsistent ARI leads to overbooking or rate parity breaches.'
longDef_ko: 'ARI는 호텔의 인벤토리 소스(CRS/PMS)와 채널 사이에 채널 매니저를 통해 교환되는 데이터 페이로드다. 일반적으로 가용성 수량, 요금 값, 그리고 최소 숙박일수(length-of-stay)나 판매 중지(stop-sell) 같은 제약 조건을 갱신하는 표준화된 메시지로 전송된다. ARI가 일관되지 않으면 오버부킹이나 요금 패리티 위반으로 이어진다.'
standardBody: OpenTravel
aliases:
  - 'Availability, Rates and Inventory'
  - Availability Rates Inventory
relationships:
  - type: related
    targetTerm: Channel Manager
  - type: related
    targetTerm: CRS
  - type: related
    targetTerm: Availability
  - type: related
    targetTerm: Rate Plan
  - type: related
    targetTerm: Allotment
  - type: related
    targetTerm: Rate Parity
  - type: related
    targetTerm: Length of Stay
distinctions:
  - targetTerm: Channel Manager
    explanation: ARI is the availability/rate/inventory data; the Channel Manager is the system that distributes and synchronizes that data.
    explanation_ko: 'ARI는 가용성/요금/인벤토리 데이터이고, 채널 매니저는 그 데이터를 분배하고 동기화하는 시스템이다.'
  - targetTerm: Availability
    explanation: Availability is just the 'A' (whether a room can be sold for given dates); ARI bundles availability together with rates and inventory counts.
    explanation_ko: 'Availability(가용성)는 ARI 중 ''A''(특정 날짜에 객실을 판매할 수 있는지 여부)만을 가리키며, ARI는 가용성을 요금 및 인벤토리 수량과 함께 묶은 개념이다.'
sources:
  - name: OpenTravel Specification
    org: OpenTravel Alliance
    version: ''
    section: ''
    url: ''
  - name: HTNG interface specifications
    org: HTNG
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="9" width="28" height="28" rx="2"/><path d="M6 17h28M14 9V5M26 9V5"/><path d="M12 23h2M19 23h2M12 30h2"/><circle cx="36" cy="32" r="8"/><path d="M33 32l2 2 4-4"/></svg>
---

> ARI stands for Availability, Rates, and Inventory — the core set of data a hotel distributes to sales channels: which dates/room types are available, at what prices, and how many units remain. Keeping ARI synchronized and accurate across channels is the central function of hotel distribution.

ARI is the data payload exchanged between a hotel's inventory source (CRS/PMS) and its channels via a Channel Manager. It is commonly transmitted using standardized messages that update availability counts, rate values, and restrictions such as length-of-stay or stop-sell. Inconsistent ARI leads to overbooking or rate parity breaches.

**한국어 / Korean** — **가용성·요금·인벤토리(ARI)** — ARI는 Availability(가용성), Rates(요금), Inventory(인벤토리)의 약어로, 호텔이 판매 채널에 분배하는 핵심 데이터 묶음을 가리킨다. 즉 어떤 날짜/객실 유형이 판매 가능한지, 어떤 가격인지, 몇 개의 객실이 남아 있는지를 의미한다. ARI를 채널 전반에 걸쳐 동기화하고 정확하게 유지하는 것이 호텔 분배의 핵심 기능이다.

ARI는 호텔의 인벤토리 소스(CRS/PMS)와 채널 사이에 채널 매니저를 통해 교환되는 데이터 페이로드다. 일반적으로 가용성 수량, 요금 값, 그리고 최소 숙박일수(length-of-stay)나 판매 중지(stop-sell) 같은 제약 조건을 갱신하는 표준화된 메시지로 전송된다. ARI가 일관되지 않으면 오버부킹이나 요금 패리티 위반으로 이어진다.

**Aliases:** `Availability, Rates and Inventory`, `Availability Rates Inventory`

# Related
- [Channel Manager](/lodging/hotel-dist/channel-manager.md) — related
- [CRS](/lodging/hotel-dist/crs.md) — related
- [Availability](/air/air-shop/availability.md) — related
- [Rate Plan](/lodging/hotel-rate/rate-plan.md) — related
- [Allotment](/lodging/hotel-rate/allotment.md) — related
- [Rate Parity](/lodging/hotel-rate/rate-parity.md) — related
- [Length of Stay](/lodging/hotel-rate/length-of-stay.md) — related

# Distinctions
- **ARI** vs [Channel Manager](/lodging/hotel-dist/channel-manager.md) — ARI is the availability/rate/inventory data; the Channel Manager is the system that distributes and synchronizes that data.
- **ARI** vs [Availability](/air/air-shop/availability.md) — Availability is just the 'A' (whether a room can be sold for given dates); ARI bundles availability together with rates and inventory counts.

# Citations
[1] OpenTravel Alliance — OpenTravel Specification
[2] HTNG — HTNG interface specifications
