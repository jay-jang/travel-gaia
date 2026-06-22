---
type: Standard Term
title: Availability Status (AVS)
description: 'Availability Status (AVS) is a teletype message, in AIRIMP/Type B format, by which an airline advises other airlines, GDSs, and reservation systems of the open or closed sell status of its flights by class. A standard AVS reports a status such as Open, On Request, Waitlist, or Closed, while NAVS (Numeric AVS) additionally conveys a specific number of seats still available for a flight/date/booking class, keeping remote availability displays synchronized with the controlling carrier''s inventory.'
tags:
  - air-shop
  - active
  - IATA
timestamp: '2026-06-18T00:00:00Z'
id: availability-status
vertical: air
category: air-shop
conceptType: standard-term
status: active
abbreviation: AVS
term_ko: '가용성 상태 (Availability Status, AVS)'
definition_ko: 'Availability Status(AVS)는 항공사가 자사 항공편의 클래스별 판매 가능(open)/불가(closed) 상태를 다른 항공사, GDS, 예약 시스템에 통지하는 AIRIMP/Type B 형식의 teletype 메시지다. 일반 AVS는 Open, On Request, Waitlist, Closed 같은 상태를 보고하고, NAVS(Numeric AVS)는 항공편·날짜·예약 클래스별로 남은 좌석의 구체적인 수량까지 추가로 전달하여, 원격 availability 표시를 통제 운송사의 인벤토리와 동기화된 상태로 유지한다.'
longDef: 'AVS is part of the legacy availability-distribution model that predates real-time direct-access and seamless availability. Rather than query the controlling airline''s inventory at the moment of a request, a GDS or partner reservation system maintains its own status map of each flight and class, and the controlling carrier pushes unsolicited AVS messages whenever a class status changes. A standard AVS reports a status per class (Open, On Request, Waitlist, or Closed). NAVS (Numeric AVS) is a refinement in which the carrier additionally sends a specific small number of seats still available (typically a single digit) for a given flight/date/booking class, allowing remote displays to show a numeric seat count rather than just open/closed. The messages travel over teletype in AIRIMP format and carry flight number, date, board/off points, and per-class status (and, for NAVS, numeric) indicators. AVS/NAVS-based availability is inherently approximate and can drift out of date between updates, which is why GDSs increasingly supplement or replace it with dynamic/seamless availability methods (direct access, real-time polling, and ultimately NDC shopping) that compute availability against live inventory at query time. AVS/NAVS nonetheless remains widely pushed by carriers and is used whenever the GDS cannot poll the carrier directly (e.g. non-participating carriers or link-down conditions).'
longDef_ko: 'AVS는 실시간 direct-access 및 seamless availability 이전의 레거시 availability 배포 모델의 일부다. 요청 시점에 통제 항공사의 인벤토리를 조회하는 대신, GDS나 파트너 예약 시스템은 각 항공편·클래스의 상태 맵을 자체적으로 유지하고, 통제 운송사는 클래스 상태가 바뀔 때마다 비요청(unsolicited) AVS 메시지를 푸시한다. 일반 AVS는 클래스별 상태(Open, On Request, Waitlist, Closed)를 보고한다. NAVS(Numeric AVS)는 여기에 항공편·날짜·예약 클래스별로 남은 좌석의 구체적인 소량(보통 한 자릿수)을 추가로 보내, 원격 표시가 open/closed만이 아닌 수치화된 좌석 수를 표시할 수 있게 하는 정교화된 변형이다. 메시지는 AIRIMP 형식으로 teletype을 통해 전달되며 flight number, 날짜, board/off 지점, 클래스별 상태(NAVS의 경우 수치) 표시자를 담는다. AVS/NAVS 기반 availability는 본질적으로 근사적이며 갱신 사이에 최신성을 잃을 수 있어, GDS들은 이를 조회 시점에 실시간 인벤토리에 대해 availability를 계산하는 dynamic/seamless availability 방식(direct access, 실시간 polling, 궤극적으로 NDC shopping)으로 점점 보강·대체했다. 그럼에도 AVS/NAVS는 운송사들이 여전히 폭넘게 푸시하며, GDS가 운송사를 직접 폴링할 수 없을 때(예: 미참여 운송사, 링크 다운 상황) 사용된다.'
standardBody: IATA
aliases:
  - AVS
  - NAVS
  - Availability Status Message
  - Numeric AVS
relationships:
  - type: related
    targetTerm: Availability
  - type: broader
    targetTerm: AIRIMP
  - type: broader
    targetTerm: Type B Message
  - type: related
    targetTerm: GDS
  - type: related
    targetTerm: Free Sale
  - type: related
    targetTerm: RBD
distinctions:
  - targetTerm: Availability
    explanation: 'Availability is the per-class count of bookable seats a seller sees; AVS is the specific legacy teletype mechanism that pushes status (and, as NAVS, numeric seat-count) updates so that remote systems can build and maintain those availability displays.'
    explanation_ko: 'Availability는 판매자가 보는 클래스별 예약 가능 좌석 수이고, AVS는 원격 시스템이 그 availability 표시를 구축·유지할 수 있도록 상태(NAVS의 경우 수치화된 좌석 수) 갱신을 푸시하는 구체적인 레거시 teletype 메커니즘이다.'
  - targetTerm: Free Sale
    explanation: Free sale lets a partner sell a flight/class up to an agreed level without checking the controlling carrier each time; AVS is the status-message stream that tells that partner when a class has closed and free sale must stop. They are complementary parts of the same status-driven distribution model.
    explanation_ko: 'Free sale은 파트너가 매번 통제 운송사를 확인하지 않고 합의된 수준까지 항공편/클래스를 판매하도록 허용하고, AVS는 그 파트너에게 클래스가 닫혀 free sale을 중단해야 할 때를 알려주는 상태 메시지 스트림이다. 둘은 동일한 상태 기반 배포 모델의 상호 보완적 부분이다.'
sources:
  - org: IATA
    name: AIRIMP (Airline Industry Reservations Interline Message Procedures)
    url: 'https://www.iata.org/en/publications/manuals/airline-industry-reservations-interline-message-procedures-airimp/'
  - org: Travelport
    name: Air Pricing with Inventory Options – AVS/NAVS (Numeric AVS) availability
    url: 'https://support.travelport.com/webhelp/uapi/Content/Air/Air_Pricing/Air_Pricing_with_Inventory_Options.htm'
  - org: Amadeus
    name: Numeric Availability (NAVS) for Airlines
    url: 'https://amadeus.com/en/portfolio/airlines/numeric-availability'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="12" width="24" height="18" rx="3"/><path d="M6 17l12 7 12-7"/><circle cx="36" cy="32" r="8"/><path d="M33 32l2.5 2.5L40 30"/></svg>
---

> Availability Status (AVS) is a teletype message, in AIRIMP/Type B format, by which an airline advises other airlines, GDSs, and reservation systems of the open or closed sell status of its flights by class. A standard AVS reports a status such as Open, On Request, Waitlist, or Closed, while NAVS (Numeric AVS) additionally conveys a specific number of seats still available for a flight/date/booking class, keeping remote availability displays synchronized with the controlling carrier's inventory.

AVS is part of the legacy availability-distribution model that predates real-time direct-access and seamless availability. Rather than query the controlling airline's inventory at the moment of a request, a GDS or partner reservation system maintains its own status map of each flight and class, and the controlling carrier pushes unsolicited AVS messages whenever a class status changes. A standard AVS reports a status per class (Open, On Request, Waitlist, or Closed). NAVS (Numeric AVS) is a refinement in which the carrier additionally sends a specific small number of seats still available (typically a single digit) for a given flight/date/booking class, allowing remote displays to show a numeric seat count rather than just open/closed. The messages travel over teletype in AIRIMP format and carry flight number, date, board/off points, and per-class status (and, for NAVS, numeric) indicators. AVS/NAVS-based availability is inherently approximate and can drift out of date between updates, which is why GDSs increasingly supplement or replace it with dynamic/seamless availability methods (direct access, real-time polling, and ultimately NDC shopping) that compute availability against live inventory at query time. AVS/NAVS nonetheless remains widely pushed by carriers and is used whenever the GDS cannot poll the carrier directly (e.g. non-participating carriers or link-down conditions).

**한국어 / Korean** — **가용성 상태 (Availability Status, AVS)** — Availability Status(AVS)는 항공사가 자사 항공편의 클래스별 판매 가능(open)/불가(closed) 상태를 다른 항공사, GDS, 예약 시스템에 통지하는 AIRIMP/Type B 형식의 teletype 메시지다. 일반 AVS는 Open, On Request, Waitlist, Closed 같은 상태를 보고하고, NAVS(Numeric AVS)는 항공편·날짜·예약 클래스별로 남은 좌석의 구체적인 수량까지 추가로 전달하여, 원격 availability 표시를 통제 운송사의 인벤토리와 동기화된 상태로 유지한다.

AVS는 실시간 direct-access 및 seamless availability 이전의 레거시 availability 배포 모델의 일부다. 요청 시점에 통제 항공사의 인벤토리를 조회하는 대신, GDS나 파트너 예약 시스템은 각 항공편·클래스의 상태 맵을 자체적으로 유지하고, 통제 운송사는 클래스 상태가 바뀔 때마다 비요청(unsolicited) AVS 메시지를 푸시한다. 일반 AVS는 클래스별 상태(Open, On Request, Waitlist, Closed)를 보고한다. NAVS(Numeric AVS)는 여기에 항공편·날짜·예약 클래스별로 남은 좌석의 구체적인 소량(보통 한 자릿수)을 추가로 보내, 원격 표시가 open/closed만이 아닌 수치화된 좌석 수를 표시할 수 있게 하는 정교화된 변형이다. 메시지는 AIRIMP 형식으로 teletype을 통해 전달되며 flight number, 날짜, board/off 지점, 클래스별 상태(NAVS의 경우 수치) 표시자를 담는다. AVS/NAVS 기반 availability는 본질적으로 근사적이며 갱신 사이에 최신성을 잃을 수 있어, GDS들은 이를 조회 시점에 실시간 인벤토리에 대해 availability를 계산하는 dynamic/seamless availability 방식(direct access, 실시간 polling, 궤극적으로 NDC shopping)으로 점점 보강·대체했다. 그럼에도 AVS/NAVS는 운송사들이 여전히 폭넘게 푸시하며, GDS가 운송사를 직접 폴링할 수 없을 때(예: 미참여 운송사, 링크 다운 상황) 사용된다.

**Aliases:** `AVS`, `NAVS`, `Availability Status Message`, `Numeric AVS`

# Related
- [Availability](/air/air-shop/availability.md) — related
- [AIRIMP](/air/air-ops/airimp.md) — broader
- [Type B Message](/air/air-ops/type-b-message.md) — broader
- [GDS](/common/standards/gds.md) — related
- [Free Sale](/lodging/hotel-dist/free-sale.md) — related
- [RBD](/air/air-shop/rbd.md) — related

# Distinctions
- **Availability Status (AVS)** vs [Availability](/air/air-shop/availability.md) — Availability is the per-class count of bookable seats a seller sees; AVS is the specific legacy teletype mechanism that pushes status (and, as NAVS, numeric seat-count) updates so that remote systems can build and maintain those availability displays.
- **Availability Status (AVS)** vs [Free Sale](/lodging/hotel-dist/free-sale.md) — Free sale lets a partner sell a flight/class up to an agreed level without checking the controlling carrier each time; AVS is the status-message stream that tells that partner when a class has closed and free sale must stop. They are complementary parts of the same status-driven distribution model.

# Citations
[1] [IATA — AIRIMP (Airline Industry Reservations Interline Message Procedures)](https://www.iata.org/en/publications/manuals/airline-industry-reservations-interline-message-procedures-airimp/)
[2] [Travelport — Air Pricing with Inventory Options – AVS/NAVS (Numeric AVS) availability](https://support.travelport.com/webhelp/uapi/Content/Air/Air_Pricing/Air_Pricing_with_Inventory_Options.htm)
[3] [Amadeus — Numeric Availability (NAVS) for Airlines](https://amadeus.com/en/portfolio/airlines/numeric-availability)
