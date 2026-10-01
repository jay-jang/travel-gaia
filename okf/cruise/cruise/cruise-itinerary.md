---
type: Business Term
title: Cruise Itinerary
description: 'A cruise itinerary is the published sequence of ports of call, sea days, and dates that defines a specific cruise voyage, specifying where the ship will sail, how long it will stay in each port, and when it departs and returns to the homeport. It is the core product specification that cruise lines use to differentiate sailings, market regions, and price voyages — the same ship may offer multiple itineraries of different lengths and destinations.'
tags:
  - cruise
  - active
  - CLIA (Cruise Lines International Association)
timestamp: '2026-10-01T00:00:00Z'
id: cruise-itinerary
vertical: cruise
category: cruise
conceptType: business-term
status: active
term_ko: 크루즈 여정(Cruise Itinerary)
definition_ko: '크루즈 여정은 특정 크루즈 항해를 정의하는 기항지, 해상일, 날짜의 공시 순서로, 선박이 어디를 항해하고, 각 항구에 얼마나 머물며, 모항에서 언제 출발하고 귀항하는지를 명시한다. 크루즈 라인이 항해를 차별화하고, 지역을 마케팅하며, 항해 가격을 책정하는 핵심 상품 사양이다 — 같은 선박이 서로 다른 기간과 목적지의 여러 여정을 제공할 수 있다.'
longDef: 'A cruise itinerary typically lists each day of the voyage with the corresponding port of call (or "at sea" notation for sea days), along with scheduled arrival and departure times in local time. Itineraries are categorized by region (Caribbean, Mediterranean, Alaska, Norwegian Fjords, etc.), voyage length (3-night, 7-night, 14-night), and itinerary shape — closed-loop or repositioning. A closed-loop itinerary departs from and returns to the same homeport, while a repositioning itinerary departs from one port and ends at a different one. The itinerary is the primary driver of the cruise''s retail price: unique or exotic itineraries (e.g., world cruises, polar expeditions) command significant premiums, while Caribbean loops are typically the most price-competitive. Itinerary changes — caused by weather, port closures, or mechanical issues — are a significant source of guest relations issues and are addressed in passenger contracts. The OpenTravel cruise specification models a cruise itinerary as a sequence of cruise packages with port, dates, and ship identifiers.'
longDef_ko: '크루즈 여정은 보통 각 항해일을 기항지(또는 해상일의 경우 "at sea" 표기)와 함께 현지 시간의 도착·출항 예정 시각으로 나열한다. 여정은 지역(카리브해, 지중해, 알래스카, 노르웨이 피오르드 등), 항해 기간(3박, 7박, 14박), 여정 형태 — 폐쇄 루프(closed-loop) 또는 리포지셔닝 — 으로 분류된다. 폐쇄 루프 여정은 같은 모항에서 출발·귀항하고, 리포지셔닝 여정은 한 항구에서 출발해 다른 항구에서 종료된다. 여정은 크루즈 소매 가격의 주요 결정 요인이다: 독특하거나 이국적인 여정(예: 세계 일주 크루즈, 극지 탐험)은 상당한 프리미엄을 받고, 카리브해 루프는 일반적으로 가격 경쟁이 가장 치열하다. 날씨, 항구 폐쇄, 기계 문제로 인한 여정 변경은 중요한 고객 관계 이슈이며 여객 계약에서 다루어진다. OpenTravel 크루즈 사양은 크루즈 여정을 항구, 날짜, 선박 식별자가 포함된 크루즈 패키지 순서로 모델링한다.'
standardBody: CLIA (Cruise Lines International Association)
aliases:
  - Cruise Route
  - Sailing Itinerary
  - Voyage Itinerary
relationships:
  - type: broader
    targetTerm: Voyage Number
  - type: related
    targetTerm: Port of Call
  - type: related
    targetTerm: Sea Day
  - type: related
    targetTerm: Homeport
  - type: related
    targetTerm: Embarkation
  - type: related
    targetTerm: Disembarkation
  - type: related
    targetTerm: Turnaround Day
distinctions:
  - targetTerm: Itinerary
    explanation: 'A cruise itinerary is the published product specification for a cruise voyage — the ship''s route, ports, and schedule; an Itinerary in air travel is the ordered list of flight segments in a passenger''s PNR. Although the word is shared, the cruise itinerary is a product definition rather than an individual passenger''s booking record.'
    explanation_ko: '크루즈 여정(Cruise Itinerary)은 크루즈 항해의 공시 상품 사양, 즉 선박의 루트, 기항지, 일정이고, 항공에서 Itinerary는 승객의 PNR에 담긴 항공 구간의 순서 목록이다. 같은 단어를 사용하지만, 크루즈 여정은 개별 승객의 예약 기록이 아니라 상품 정의이다.'
  - targetTerm: Voyage Number
    explanation: 'A cruise itinerary is the route template specifying ports, sea days, and dates for a class of sailing; a voyage number is the unique identifier assigned to a specific scheduled departure of that itinerary on a specific ship and sail date.'
    explanation_ko: '크루즈 여정은 기항지, 해상일, 날짜를 명시하는 항해 유형의 루트 템플릿이고, 항해 번호(Voyage Number)는 특정 선박과 출항일의 구체적인 예정 출발에 부여되는 고유 식별자이다.'
  - targetTerm: Turnaround Day
    explanation: 'A cruise itinerary is the planned route and schedule across multiple days; a turnaround day is the specific operational day at the homeport when one itinerary ends (disembarkation) and the next begins (embarkation) on the same ship.'
    explanation_ko: '크루즈 여정은 여러 날에 걸친 계획된 루트와 일정이고, 전환일(Turnaround Day)은 모항에서 한 여정이 끝나고(하선) 같은 선박에서 다음 여정이 시작되는(승선) 특정 운영일이다.'
sources:
  - name: Cruise Industry Overview and Itinerary Types
    org: CLIA (Cruise Lines International Association)
    version: ''
    section: ''
    url: 'https://cruising.org/research-and-advocacy/research'
    tier: association
  - name: OpenTravel Cruise Message Set — Cruise Package and Itinerary Structure
    org: OpenTravel Alliance
    version: ''
    section: ''
    url: 'https://opentravel.org/download-specs/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M6 34 C10 28, 16 22, 24 20 C32 18, 38 22, 42 28"/><circle cx="10" cy="31" r="3"/><circle cx="24" cy="21" r="3"/><circle cx="38" cy="27" r="3"/><path d="M10 31 L24 21 L38 27"/><path d="M20 40 h8"/><path d="M24 38 v-8"/></svg>
---

> A cruise itinerary is the published sequence of ports of call, sea days, and dates that defines a specific cruise voyage, specifying where the ship will sail, how long it will stay in each port, and when it departs and returns to the homeport. It is the core product specification that cruise lines use to differentiate sailings, market regions, and price voyages — the same ship may offer multiple itineraries of different lengths and destinations.

A cruise itinerary typically lists each day of the voyage with the corresponding port of call (or "at sea" notation for sea days), along with scheduled arrival and departure times in local time. Itineraries are categorized by region (Caribbean, Mediterranean, Alaska, Norwegian Fjords, etc.), voyage length (3-night, 7-night, 14-night), and itinerary shape — closed-loop or repositioning. A closed-loop itinerary departs from and returns to the same homeport, while a repositioning itinerary departs from one port and ends at a different one. The itinerary is the primary driver of the cruise's retail price: unique or exotic itineraries (e.g., world cruises, polar expeditions) command significant premiums, while Caribbean loops are typically the most price-competitive. Itinerary changes — caused by weather, port closures, or mechanical issues — are a significant source of guest relations issues and are addressed in passenger contracts. The OpenTravel cruise specification models a cruise itinerary as a sequence of cruise packages with port, dates, and ship identifiers.

**한국어 / Korean** — **크루즈 여정(Cruise Itinerary)** — 크루즈 여정은 특정 크루즈 항해를 정의하는 기항지, 해상일, 날짜의 공시 순서로, 선박이 어디를 항해하고, 각 항구에 얼마나 머물며, 모항에서 언제 출발하고 귀항하는지를 명시한다. 크루즈 라인이 항해를 차별화하고, 지역을 마케팅하며, 항해 가격을 책정하는 핵심 상품 사양이다.

크루즈 여정은 보통 각 항해일을 기항지(또는 해상일의 경우 "at sea" 표기)와 함께 현지 시간의 도착·출항 예정 시각으로 나열한다. 여정은 지역, 기간, 형태(폐쇄 루프 또는 리포지셔닝)로 분류된다. 여정은 크루즈 소매 가격의 주요 결정 요인이다.

**Aliases:** `Cruise Route`, `Sailing Itinerary`, `Voyage Itinerary`

# Related
- [Voyage Number](/cruise/cruise/voyage-number.md) — broader
- [Port of Call](/cruise/cruise/port-of-call.md) — related
- [Sea Day](/cruise/cruise/sea-day.md) — related
- [Homeport](/cruise/cruise/homeport.md) — related
- [Embarkation](/cruise/cruise/embarkation.md) — related
- [Disembarkation](/cruise/cruise/disembarkation.md) — related
- [Turnaround Day](/cruise/cruise/turnaround-day.md) — related

# Distinctions
- **Cruise Itinerary** vs [Itinerary](/air/air-ops/itinerary.md) — A cruise itinerary is the published product specification for a cruise voyage — the ship's route, ports, and schedule; an Itinerary in air travel is the ordered list of flight segments in a passenger's PNR. Although the word is shared, the cruise itinerary is a product definition rather than an individual passenger's booking record.
- **Cruise Itinerary** vs [Voyage Number](/cruise/cruise/voyage-number.md) — A cruise itinerary is the route template specifying ports, sea days, and dates for a class of sailing; a voyage number is the unique identifier assigned to a specific scheduled departure of that itinerary on a specific ship and sail date.
- **Cruise Itinerary** vs [Turnaround Day](/cruise/cruise/turnaround-day.md) — A cruise itinerary is the planned route and schedule across multiple days; a turnaround day is the specific operational day at the homeport when one itinerary ends (disembarkation) and the next begins (embarkation) on the same ship.

# Citations
[1] [CLIA (Cruise Lines International Association) — Cruise Industry Overview and Itinerary Types](https://cruising.org/research-and-advocacy/research)
[2] [OpenTravel Alliance — OpenTravel Cruise Message Set — Cruise Package and Itinerary Structure](https://opentravel.org/download-specs/)
