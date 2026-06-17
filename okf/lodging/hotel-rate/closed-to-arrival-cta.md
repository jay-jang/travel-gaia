---
type: Standard Term
title: Closed to Arrival (CTA)
description: 'Closed to Arrival (CTA) is a stay-control restriction that prevents new reservations from checking in (arriving) on a specified date, while guests already in-house may stay through that date. It is one of the four standard hotel stay controls, alongside Minimum Length of Stay, Maximum Length of Stay, and Closed to Departure (CTD).'
tags:
  - hotel-rate
  - active
timestamp: '2026-06-17T00:00:00Z'
id: closed-to-arrival-cta
vertical: lodging
category: hotel-rate
conceptType: standard-term
status: active
abbreviation: CTA
term_ko: 'Closed to Arrival (CTA, 도착 마감)'
definition_ko: 'Closed to Arrival(CTA)는 지정된 날짜에 신규 예약의 체크인(도착)을 막는 stay control(숙박 제약) 규칙으로, 이미 투숙 중인 고객은 그 날짜를 거쳐 계속 머물 수 있다. Minimum Length of Stay, Maximum Length of Stay, Closed to Departure(CTD)와 함께 호텔의 4대 표준 stay control 중 하나다.'
longDef: 'CTA is a yield tool applied to high-demand dates to stop short stays from consuming a night that the hotel would rather sell only as part of a longer, more profitable booking. For example, placing CTA on the night before a sold-out event date forces guests to arrive earlier and stay multiple nights rather than checking in for a single peak night. Because it only blocks arrivals, it does not eject or shorten existing stays — a booking that arrives before the CTA date and stays through it is unaffected. CTA is typically set per rate plan and room type and distributed over connectivity (channel manager, CRS, GDS) as an availability restriction. It is the arrival-side mirror of CTD and is frequently combined with MLOS to shape the booking curve around peaks.'
longDef_ko: 'CTA는 고수요 날짜에 적용되는 yield 도구로, 더 길고 수익성 높은 예약의 일부로만 팔고 싶은 밤(night)을 짧은 숙박이 소진하는 것을 막는다. 예를 들어 매진 이벤트 날짜의 전날 밤에 CTA를 걸면 고객은 단일 피크 야간만 체크인하는 대신 더 일찍 도착해 여러 박을 머물러야 한다. 도착만 막기 때문에 기존 숙박을 내보내거나 단축하지 않으며, CTA 날짜 이전에 도착해 그 날짜를 거쳐 머무는 예약은 영향을 받지 않는다. CTA는 보통 요금제·객실 유형별로 설정되어 연동(채널 매니저·CRS·GDS)을 통해 가용성 제약으로 유통된다. CTD의 도착 측 거울상이며, 피크 주변 예약 곡선을 형성하기 위해 MLOS와 자주 결합된다.'
aliases:
  - Closed to Arrival
  - Close to Arrival
  - No Arrivals
relationships:
  - type: related
    targetTerm: Minimum Length of Stay (MLOS)
  - type: related
    targetTerm: Length of Stay
  - type: related
    targetTerm: Stop Sell
  - type: related
    targetTerm: Availability
distinctions:
  - targetTerm: Stop Sell
    explanation: A stop sell closes a date to all sale entirely; CTA closes only new arrivals on that date while still allowing through-stays and (unlike stop sell) does not block bookings that merely span the date.
    explanation_ko: 'Stop Sell은 해당 날짜를 모든 판매에 대해 완전히 닫고, CTA는 그 날짜의 신규 도착만 막을 뿐 through-stay는 허용하며 (stop sell과 달리) 단순히 그 날짜를 걸쳐 지나가는 예약은 막지 않는다.'
  - targetTerm: Minimum Length of Stay (MLOS)
    explanation: MLOS requires any stay touching the date to meet a minimum number of nights; CTA outright forbids arrivals on the date regardless of length. They are often used together but enforce different rules.
    explanation_ko: 'MLOS는 해당 날짜에 걸치는 숙박이 최소 박수를 충족하도록 요구하고, CTA는 길이와 무관하게 그 날짜의 도착을 아예 금지한다. 흔히 함께 쓰이지만 서로 다른 규칙을 강제한다.'
sources:
  - org: Xotels
    name: CTA - Closed to Arrival Definition / Meaning
    version: ''
    section: ''
    url: 'https://www.xotels.com/en/glossary/cta-closed-to-arrival'
  - org: NetSuite
    name: How to Use Stay Controls in Hotel Revenue Management
    version: ''
    section: ''
    url: 'https://www.netsuite.com/portal/resource/articles/accounting/hotel-stay-contols.shtml'
  - org: Revenue Hub
    name: How do Restrictions Work in Hotel Revenue Management
    version: ''
    section: ''
    url: 'https://revenue-hub.com/how-do-restrictions-work-in-hotel-revenue-management/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M6 24h22"/><polyline points="20 16 28 24 20 32"/><circle cx="38" cy="24" r="8"/><line x1="32.5" y1="18.5" x2="43.5" y2="29.5"/></svg>
---

> Closed to Arrival (CTA) is a stay-control restriction that prevents new reservations from checking in (arriving) on a specified date, while guests already in-house may stay through that date. It is one of the four standard hotel stay controls, alongside Minimum Length of Stay, Maximum Length of Stay, and Closed to Departure (CTD).

CTA is a yield tool applied to high-demand dates to stop short stays from consuming a night that the hotel would rather sell only as part of a longer, more profitable booking. For example, placing CTA on the night before a sold-out event date forces guests to arrive earlier and stay multiple nights rather than checking in for a single peak night. Because it only blocks arrivals, it does not eject or shorten existing stays — a booking that arrives before the CTA date and stays through it is unaffected. CTA is typically set per rate plan and room type and distributed over connectivity (channel manager, CRS, GDS) as an availability restriction. It is the arrival-side mirror of CTD and is frequently combined with MLOS to shape the booking curve around peaks.

**한국어 / Korean** — **Closed to Arrival (CTA, 도착 마감)** — Closed to Arrival(CTA)는 지정된 날짜에 신규 예약의 체크인(도착)을 막는 stay control(숙박 제약) 규칙으로, 이미 투숙 중인 고객은 그 날짜를 거쳐 계속 머물 수 있다. Minimum Length of Stay, Maximum Length of Stay, Closed to Departure(CTD)와 함께 호텔의 4대 표준 stay control 중 하나다.

CTA는 고수요 날짜에 적용되는 yield 도구로, 더 길고 수익성 높은 예약의 일부로만 팔고 싶은 밤(night)을 짧은 숙박이 소진하는 것을 막는다. 예를 들어 매진 이벤트 날짜의 전날 밤에 CTA를 걸면 고객은 단일 피크 야간만 체크인하는 대신 더 일찍 도착해 여러 박을 머물러야 한다. 도착만 막기 때문에 기존 숙박을 내보내거나 단축하지 않으며, CTA 날짜 이전에 도착해 그 날짜를 거쳐 머무는 예약은 영향을 받지 않는다. CTA는 보통 요금제·객실 유형별로 설정되어 연동(채널 매니저·CRS·GDS)을 통해 가용성 제약으로 유통된다. CTD의 도착 측 거울상이며, 피크 주변 예약 곡선을 형성하기 위해 MLOS와 자주 결합된다.

**Aliases:** `Closed to Arrival`, `Close to Arrival`, `No Arrivals`

# Related
- [Minimum Length of Stay (MLOS)](/lodging/hotel-rate/minimum-length-of-stay-mlos.md) — related
- [Length of Stay](/lodging/hotel-rate/length-of-stay.md) — related
- [Stop Sell](/lodging/hotel-rate/stop-sell.md) — related
- [Availability](/air/air-shop/availability.md) — related

# Distinctions
- **Closed to Arrival (CTA)** vs [Stop Sell](/lodging/hotel-rate/stop-sell.md) — A stop sell closes a date to all sale entirely; CTA closes only new arrivals on that date while still allowing through-stays and (unlike stop sell) does not block bookings that merely span the date.
- **Closed to Arrival (CTA)** vs [Minimum Length of Stay (MLOS)](/lodging/hotel-rate/minimum-length-of-stay-mlos.md) — MLOS requires any stay touching the date to meet a minimum number of nights; CTA outright forbids arrivals on the date regardless of length. They are often used together but enforce different rules.

# Citations
[1] [Xotels — CTA - Closed to Arrival Definition / Meaning](https://www.xotels.com/en/glossary/cta-closed-to-arrival)
[2] [NetSuite — How to Use Stay Controls in Hotel Revenue Management](https://www.netsuite.com/portal/resource/articles/accounting/hotel-stay-contols.shtml)
[3] [Revenue Hub — How do Restrictions Work in Hotel Revenue Management](https://revenue-hub.com/how-do-restrictions-work-in-hotel-revenue-management/)
