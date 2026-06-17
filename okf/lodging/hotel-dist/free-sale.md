---
type: Business Term
title: Free Sale
description: 'Free sale is a distribution arrangement in which a channel may confirm hotel bookings without checking a specific live allotment for each request, typically up to an agreed limit and subject to release/stop-sell conditions. The hotel commits to honor confirmed free-sale bookings, relying on the seller to respect stop-sell signals rather than on real-time allocation checks.'
tags:
  - hotel-dist
  - active
  - OpenTravel
timestamp: '2026-06-17T00:00:00Z'
id: free-sale
vertical: lodging
category: hotel-dist
conceptType: business-term
status: active
term_ko: 프리세일(free sale)
definition_ko: '프리세일(free sale)은 채널이 각 요청마다 특정 실시간 할당량(allotment)을 확인하지 않고도 호텔 예약을 확정할 수 있게 하는 분배 방식으로, 일반적으로 합의된 한도까지 적용되며 해제/판매 중지(stop-sell) 조건의 적용을 받는다. 호텔은 확정된 프리세일 예약을 이행할 것을 약속하며, 실시간 할당 확인이 아니라 판매자가 판매 중지 신호를 준수하는 것에 의존한다.'
longDef: 'Free sale (or ''sell free'') lets a channel sell rooms on the assumption that availability exists, often governed by a free-sale limit and a stop-sell/close-out mechanism the hotel triggers when it wants to stop receiving bookings. It contrasts with allotment-based selling, where the channel can only sell from a finite pre-allocated block, and with fully dynamic two-way (pooled) availability. Free sale increases conversion and reduces missed bookings but carries overbooking risk if stop-sell is not applied promptly.'
longDef_ko: '프리세일(''sell free'')은 채널이 가용성이 존재한다는 가정 하에 객실을 판매하도록 허용하며, 흔히 프리세일 한도와, 호텔이 예약 수신을 중단하고자 할 때 발동하는 판매 중지(stop-sell)/마감(close-out) 메커니즘에 의해 규율된다. 이는 채널이 사전 할당된 유한한 블록에서만 판매할 수 있는 할당량 기반 판매, 그리고 완전 동적 양방향(풀링) 가용성과 대비된다. 프리세일은 전환율을 높이고 놓친 예약을 줄이지만, 판매 중지가 신속히 적용되지 않으면 오버부킹 위험을 수반한다.'
standardBody: OpenTravel
aliases:
  - Freesale
  - Free Sell
  - Sell Free
  - Free Sale Inventory
relationships:
  - type: contrasts
    targetTerm: Allotment
  - type: related
    targetTerm: Availability
  - type: related
    targetTerm: ARI
  - type: related
    targetTerm: Channel Manager
  - type: related
    targetTerm: Overbooking
distinctions:
  - targetTerm: Allotment
    explanation: Free sale lets a channel confirm bookings without checking a finite block (subject to stop-sell); an allotment is a fixed pre-allocated number of rooms a channel may sell.
    explanation_ko: '프리세일은 채널이 유한한 블록을 확인하지 않고도 예약을 확정할 수 있게 하지만(판매 중지의 적용을 받음), 할당량(allotment)은 채널이 판매할 수 있도록 사전에 할당된 고정 객실 수다.'
  - targetTerm: Overbooking
    explanation: Free sale is a selling mechanism that can lead to overbooking if stop-sell is delayed; overbooking is the resulting state of having sold more rooms than available.
    explanation_ko: '프리세일은 판매 중지가 지연되면 오버부킹으로 이어질 수 있는 판매 메커니즘이고, 오버부킹은 가용 객실보다 많은 객실을 판매한 결과 상태다.'
sources:
  - name: OpenTravel Specification
    org: OpenTravel Alliance
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M5 30v-6a3 3 0 013-3h26a6 6 0 016 6v9"/><path d="M5 30h36M5 30v6M41 36v3M5 36v3"/><path d="M11 21v-4a2 2 0 012-2h6a2 2 0 012 2v4M23 21v-4a2 2 0 012-2h6a2 2 0 012 2v4"/><path d="M33 9l3 3-3 3M36 12h-9"/></svg>
---

> Free sale is a distribution arrangement in which a channel may confirm hotel bookings without checking a specific live allotment for each request, typically up to an agreed limit and subject to release/stop-sell conditions. The hotel commits to honor confirmed free-sale bookings, relying on the seller to respect stop-sell signals rather than on real-time allocation checks.

Free sale (or 'sell free') lets a channel sell rooms on the assumption that availability exists, often governed by a free-sale limit and a stop-sell/close-out mechanism the hotel triggers when it wants to stop receiving bookings. It contrasts with allotment-based selling, where the channel can only sell from a finite pre-allocated block, and with fully dynamic two-way (pooled) availability. Free sale increases conversion and reduces missed bookings but carries overbooking risk if stop-sell is not applied promptly.

**한국어 / Korean** — **프리세일(free sale)** — 프리세일(free sale)은 채널이 각 요청마다 특정 실시간 할당량(allotment)을 확인하지 않고도 호텔 예약을 확정할 수 있게 하는 분배 방식으로, 일반적으로 합의된 한도까지 적용되며 해제/판매 중지(stop-sell) 조건의 적용을 받는다. 호텔은 확정된 프리세일 예약을 이행할 것을 약속하며, 실시간 할당 확인이 아니라 판매자가 판매 중지 신호를 준수하는 것에 의존한다.

프리세일('sell free')은 채널이 가용성이 존재한다는 가정 하에 객실을 판매하도록 허용하며, 흔히 프리세일 한도와, 호텔이 예약 수신을 중단하고자 할 때 발동하는 판매 중지(stop-sell)/마감(close-out) 메커니즘에 의해 규율된다. 이는 채널이 사전 할당된 유한한 블록에서만 판매할 수 있는 할당량 기반 판매, 그리고 완전 동적 양방향(풀링) 가용성과 대비된다. 프리세일은 전환율을 높이고 놓친 예약을 줄이지만, 판매 중지가 신속히 적용되지 않으면 오버부킹 위험을 수반한다.

**Aliases:** `Freesale`, `Free Sell`, `Sell Free`, `Free Sale Inventory`

# Related
- [Allotment](/lodging/hotel-rate/allotment.md) — contrasts
- [Availability](/air/air-shop/availability.md) — related
- [ARI](/lodging/hotel-dist/ari.md) — related
- [Channel Manager](/lodging/hotel-dist/channel-manager.md) — related
- [Overbooking](/air/air-shop/overbooking.md) — related

# Distinctions
- **Free Sale** vs [Allotment](/lodging/hotel-rate/allotment.md) — Free sale lets a channel confirm bookings without checking a finite block (subject to stop-sell); an allotment is a fixed pre-allocated number of rooms a channel may sell.
- **Free Sale** vs [Overbooking](/air/air-shop/overbooking.md) — Free sale is a selling mechanism that can lead to overbooking if stop-sell is delayed; overbooking is the resulting state of having sold more rooms than available.

# Citations
[1] OpenTravel Alliance — OpenTravel Specification
