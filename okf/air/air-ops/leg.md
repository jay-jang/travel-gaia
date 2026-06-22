---
type: Business Term
title: Leg
description: A leg is a single physical movement of an aircraft from one takeoff (departure airport) to the next landing (arrival airport). It is the operational building block of a flight; a flight number may operate over one or more legs.
tags:
  - air-ops
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: leg
vertical: air
category: air-ops
conceptType: business-term
status: active
term_ko: 운항 구간(Leg)
definition_ko: 'leg(운항 구간)은 한 번의 이륙(출발 공항)에서 다음 착륙(도착 공항)까지의 항공기 단일 물리적 이동이다. 항공편의 운영상 기본 단위이며, 하나의 편명이 하나 이상의 leg으로 운항될 수 있다.'
longDef: 'Legs describe the operational reality of an aircraft''s routing, used in schedule data (e.g., SSIM leg records) and operations control. A multi-leg flight under a single flight number (a through or direct flight) presents to the buyer as one segment but is operated as two or more legs, each with its own departure/arrival times and possibly different equipment.'
longDef_ko: 'leg은 항공기 노선의 운영상 실제를 나타내며, 스케줄 데이터(예: SSIM leg 레코드)와 운항 통제에 사용된다. 단일 편명으로 운항되는 여러 leg 항공편(through 또는 직항편)은 구매자에게는 하나의 segment로 표시되지만, 각각 고유한 출발/도착 시각과 경우에 따라 다른 기재(equipment)를 가진 둘 이상의 leg으로 운항된다.'
standardBody: IATA
aliases:
  - Flight Leg
  - Hop
relationships:
  - type: child
    targetTerm: Segment
  - type: related
    targetTerm: Schedule Change
distinctions:
  - targetTerm: Segment
    explanation: 'A leg is one physical takeoff-to-landing hop, while a segment is the sold/marketed flight under one flight number that may span several legs.'
    explanation_ko: 'leg은 하나의 물리적 이착륙 구간인 반면, segment는 여러 leg에 걸칠 수 있는, 하나의 편명으로 판매·마케팅되는 항공편이다.'
  - targetTerm: ARNK
    explanation: 'ARNK is a non-flown placeholder bridging a surface break, while a leg is an actual physical flown hop of an aircraft.'
    explanation_ko: 'ARNK는 지상 구간 단절을 연결하는 비운항 자리표시자인 반면, leg은 항공기의 실제 물리적 운항 구간이다.'
  - targetTerm: Origin & Destination
    explanation: 'A leg is a single nonstop flight operation; an O&D is the full market between true origin and destination, possibly spanning multiple legs.'
    explanation_ko: '레그(leg)는 하나의 직항 비행 운항이고, O&D는 실제 출발지와 도착지 사이의 전체 시장으로 여러 레그에 걸칠 수 있다.'
sources:
  - name: Standard Schedules Information Manual (SSIM)
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/standard-schedules-information/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="40" x2="42" y2="40"/><path d="M9 36 C16 16 32 16 39 24"/><path d="M33 12 L41 20 L32 24"/></svg>
---

> A leg is a single physical movement of an aircraft from one takeoff (departure airport) to the next landing (arrival airport). It is the operational building block of a flight; a flight number may operate over one or more legs.

Legs describe the operational reality of an aircraft's routing, used in schedule data (e.g., SSIM leg records) and operations control. A multi-leg flight under a single flight number (a through or direct flight) presents to the buyer as one segment but is operated as two or more legs, each with its own departure/arrival times and possibly different equipment.

**한국어 / Korean** — **운항 구간(Leg)** — leg(운항 구간)은 한 번의 이륙(출발 공항)에서 다음 착륙(도착 공항)까지의 항공기 단일 물리적 이동이다. 항공편의 운영상 기본 단위이며, 하나의 편명이 하나 이상의 leg으로 운항될 수 있다.

leg은 항공기 노선의 운영상 실제를 나타내며, 스케줄 데이터(예: SSIM leg 레코드)와 운항 통제에 사용된다. 단일 편명으로 운항되는 여러 leg 항공편(through 또는 직항편)은 구매자에게는 하나의 segment로 표시되지만, 각각 고유한 출발/도착 시각과 경우에 따라 다른 기재(equipment)를 가진 둘 이상의 leg으로 운항된다.

**Aliases:** `Flight Leg`, `Hop`

# Related
- [Segment](/air/air-ops/segment.md) — child
- [Schedule Change](/air/air-partner/schedule-change.md) — related

# Distinctions
- **Leg** vs [Segment](/air/air-ops/segment.md) — A leg is one physical takeoff-to-landing hop, while a segment is the sold/marketed flight under one flight number that may span several legs.
- **Leg** vs [ARNK](/air/air-ops/arnk.md) — ARNK is a non-flown placeholder bridging a surface break, while a leg is an actual physical flown hop of an aircraft.
- **Leg** vs [Origin & Destination](/air/air-shop/origin-destination.md) — A leg is a single nonstop flight operation; an O&D is the full market between true origin and destination, possibly spanning multiple legs.

# Citations
[1] [IATA — Standard Schedules Information Manual (SSIM)](https://www.iata.org/en/publications/manuals/standard-schedules-information/)
