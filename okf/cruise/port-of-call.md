---
type: Business Term
title: Port of Call
description: 'An intermediate destination on a cruise itinerary where the ship docks alongside or anchors offshore so guests can go ashore and explore, as distinct from the embarkation and disembarkation ports that begin and end the voyage. Ports of call are the anchor for shore-excursion sales and the core building block of cruise itinerary modeling.'
tags:
  - cruise
  - active
  - OpenTravel Alliance
timestamp: '2026-06-17T00:00:00Z'
id: port-of-call
category: cruise
conceptType: business-term
status: active
term_ko: 기항지(Port of Call)
definition_ko: '크루즈 일정상의 중간 목적지로, 선박이 부두에 접안하거나 외해에 정박해 선객이 하선하여 둘러볼 수 있게 하는 곳이다. 항해를 시작·종료하는 승선·하선 항구와 구별된다. 기항지는 기항지 투어(shore excursion) 판매의 기준점이자 크루즈 일정 모델링의 핵심 구성 요소이다.'
longDef: 'Each port of call carries an arrival and departure time, a tendering-versus-docking status, and a set of bookable shore excursions; together the sequence of ports defines the itinerary and its marketing identity (e.g. a Western Caribbean or Norwegian Fjords cruise). The OpenTravel cruise message set represents itineraries as ordered sequences of ports with embark/debark and call times, and distribution and onboard systems sell excursions and plan logistics against each call. A ''sea day'' is an itinerary day with no port of call.'
longDef_ko: '각 기항지는 도착·출발 시각, 텐더(소형선) 이용 여부 대 접안 여부, 그리고 예약 가능한 기항지 투어 세트를 갖는다. 이 항구들의 순서가 모여 일정과 그 마케팅 정체성(예: 서부 카리브해 또는 노르웨이 피오르 크루즈)을 정의한다. OpenTravel 크루즈 메시지 셋은 일정을 승하선·기항 시각을 포함한 항구의 순서 있는 나열로 표현하며, 유통·선내 시스템은 각 기항을 기준으로 투어를 판매하고 물류를 계획한다. 기항지가 없는 일정 날은 ''sea day(항해일)''이다.'
standardBody: OpenTravel Alliance
aliases:
  - Port Call
  - Calling Port
  - Stop
relationships:
  - type: related
    targetTerm: Shore Excursion
  - type: related
    targetTerm: Embarkation
  - type: related
    targetTerm: Itinerary
  - type: related
    targetTerm: Repositioning Cruise
  - type: related
    targetTerm: UN/LOCODE
distinctions:
  - targetTerm: Embarkation
    explanation: 'Embarkation is specifically the boarding event at the voyage''s starting (home) port; a port of call is an intermediate stop where guests go ashore and return, not where the cruise begins or ends.'
    explanation_ko: 'Embarkation은 구체적으로 항해 출발(모항) 항구에서의 승선 행위이고, port of call은 선객이 하선했다가 돌아오는 중간 기항지로 크루즈가 시작되거나 끝나는 곳이 아니다.'
  - targetTerm: Itinerary
    explanation: 'The itinerary is the full ordered plan of the voyage; a port of call is one stop within it, alongside sea days and the turnaround ports.'
    explanation_ko: 'Itinerary는 항해의 전체 순서 계획이고, port of call은 그 안의 한 기항지로 항해일과 회항(turnaround) 항구와 함께 구성된다.'
sources:
  - name: Everything You Need to Know About Shore Excursions
    org: Cruise industry
    version: ''
    section: ''
    url: ''
  - name: Cruising Terms (cruise glossary)
    org: Cruise industry
    version: ''
    section: ''
    url: ''
  - name: OpenTravel Specification (cruise itinerary messages)
    org: OpenTravel Alliance
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="18" r="6"/><path d="M24 24v14"/><path d="M16 32a8 6 0 0 0 16 0"/><line x1="18" y1="30" x2="30" y2="30"/></svg>
---

> An intermediate destination on a cruise itinerary where the ship docks alongside or anchors offshore so guests can go ashore and explore, as distinct from the embarkation and disembarkation ports that begin and end the voyage. Ports of call are the anchor for shore-excursion sales and the core building block of cruise itinerary modeling.

Each port of call carries an arrival and departure time, a tendering-versus-docking status, and a set of bookable shore excursions; together the sequence of ports defines the itinerary and its marketing identity (e.g. a Western Caribbean or Norwegian Fjords cruise). The OpenTravel cruise message set represents itineraries as ordered sequences of ports with embark/debark and call times, and distribution and onboard systems sell excursions and plan logistics against each call. A 'sea day' is an itinerary day with no port of call.

**한국어 / Korean** — **기항지(Port of Call)** — 크루즈 일정상의 중간 목적지로, 선박이 부두에 접안하거나 외해에 정박해 선객이 하선하여 둘러볼 수 있게 하는 곳이다. 항해를 시작·종료하는 승선·하선 항구와 구별된다. 기항지는 기항지 투어(shore excursion) 판매의 기준점이자 크루즈 일정 모델링의 핵심 구성 요소이다.

각 기항지는 도착·출발 시각, 텐더(소형선) 이용 여부 대 접안 여부, 그리고 예약 가능한 기항지 투어 세트를 갖는다. 이 항구들의 순서가 모여 일정과 그 마케팅 정체성(예: 서부 카리브해 또는 노르웨이 피오르 크루즈)을 정의한다. OpenTravel 크루즈 메시지 셋은 일정을 승하선·기항 시각을 포함한 항구의 순서 있는 나열로 표현하며, 유통·선내 시스템은 각 기항을 기준으로 투어를 판매하고 물류를 계획한다. 기항지가 없는 일정 날은 'sea day(항해일)'이다.

**Aliases:** `Port Call`, `Calling Port`, `Stop`

# Related
- [Shore Excursion](/cruise/shore-excursion.md) — related
- [Embarkation](/cruise/embarkation.md) — related
- [Itinerary](/air-ops/itinerary.md) — related
- [Repositioning Cruise](/cruise/repositioning-cruise.md) — related
- [UN/LOCODE](/codes/un-locode.md) — related

# Distinctions
- **Port of Call** vs [Embarkation](/cruise/embarkation.md) — Embarkation is specifically the boarding event at the voyage's starting (home) port; a port of call is an intermediate stop where guests go ashore and return, not where the cruise begins or ends.
- **Port of Call** vs [Itinerary](/air-ops/itinerary.md) — The itinerary is the full ordered plan of the voyage; a port of call is one stop within it, alongside sea days and the turnaround ports.

# Citations
[1] Cruise industry — Everything You Need to Know About Shore Excursions
[2] Cruise industry — Cruising Terms (cruise glossary)
[3] OpenTravel Alliance — OpenTravel Specification (cruise itinerary messages)
