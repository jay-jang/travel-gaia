---
type: Standard
title: Inter-Airline Through Check-In (IATCI)
description: 'An industry standard and the message exchange behind it — coordinated with IATA''s Passenger and Airport Data Interchange Standards (PADIS) and carried as EDIFACT messages — that lets a passenger and their baggage on a multi-airline itinerary be checked in once, at the start of the journey, for all connecting flights. The first carrier issues onward boarding passes and through-checks bags to the final destination by querying the downstream operating carrier''s check-in and flight systems.'
tags:
  - air-partner
  - active
  - IATA
timestamp: '2026-06-18T00:00:00Z'
id: inter-airline-through-check-in-iatci
vertical: air
category: air-partner
conceptType: standard
status: active
abbreviation: IATCI
term_ko: 항공사 간 일괄 탑승수속 (IATCI)
definition_ko: '여러 항공사가 연결된 여정에서 승객과 수하물을 여정 시작 시 한 번에 모든 연결편까지 체크인(check-in)할 수 있게 하는 산업 표준이자 그 배후의 메시지 교환으로, IATA의 Passenger and Airport Data Interchange Standards(PADIS)와 조율되며 EDIFACT 메시지로 전송된다. 첫 항공사가 하류(downstream) 운항사의 체크인·항공편 시스템을 조회하여 이후 구간의 탑승권을 발급하고 수하물을 최종 목적지까지 통과 수속(through-check)한다.'
longDef: 'IATCI is maintained by an industry interest group of airlines, system/software providers, and ground handlers that cooperates closely with IATA PADIS, providing the EDIFACT message guidelines and a Message Implementation Guide. It defines two main scenarios: Scenario 1 — InterAirline Through Check-In (a passenger checks in with the first carrier and the downstream carrier accepts the passenger/bags) — and Scenario 2 — InterAirline Local Check-In and Flight Management. Carriers must have a bilateral or multilateral IATCI agreement in place before through check-in is possible between them, and the rules govern how passenger and baggage data, seat assignments, and boarding passes are exchanged between the carriers'' departure control systems. IATCI is a core piece of interline operational mechanics, complementing the commercial interline agreement and interline e-ticketing that make multi-carrier ticketing possible.'
longDef_ko: 'IATCI는 항공사, 시스템/소프트웨어 제공자, 지상 조업사로 구성된 산업 이익 단체가 유지·관리하며, IATA PADIS와 긴밀히 협력하여 EDIFACT 메시지 지침과 Message Implementation Guide를 제공한다. 두 가지 주요 시나리오를 정의한다: 시나리오 1 — InterAirline Through Check-In(승객이 첫 항공사에서 체크인하고 하류 항공사가 승객/수하물을 수용) — 과 시나리오 2 — InterAirline Local Check-In and Flight Management. 항공사 간에 통과 수속이 가능하려면 사전에 양자 또는 다자 IATCI 협정이 있어야 하며, 규칙은 승객·수하물 데이터, 좌석 배정, 탑승권이 각 항공사의 출발통제시스템(DCS) 간에 어떻게 교환되는지를 규율한다. IATCI는 인터라인(interline) 운영 메커니즘의 핵심으로, 다항공사 발권을 가능케 하는 상업적 인터라인 협정 및 인터라인 전자항공권 발권을 보완한다.'
standardBody: IATA
aliases:
  - IATCI
  - Interairline Through Check-In
  - Through Check-In
relationships:
  - type: related
    targetTerm: Interline
  - type: related
    targetTerm: Passenger and Airport Data Interchange Standards (PADIS)
  - type: related
    targetTerm: EDIFACT
  - type: related
    targetTerm: Departure Control System (DCS)
  - type: related
    targetTerm: Interline Electronic Ticketing
  - type: related
    targetTerm: Most Significant Carrier (MSC)
  - type: related
    targetTerm: Connection
distinctions:
  - targetTerm: Interline
    explanation: 'An interline agreement is the commercial arrangement letting carriers ticket and carry passengers across an itinerary; IATCI is the operational check-in standard that, on top of that relationship, lets the passenger and bags be checked in once for the whole journey.'
    explanation_ko: '인터라인 협정은 항공사들이 여정 전체에 걸쳐 발권·운송하도록 하는 상업적 협정이고, IATCI는 그 관계 위에서 승객과 수하물을 여정 전체에 대해 한 번에 체크인하게 하는 운영상의 체크인 표준이다.'
sources:
  - org: IATCI Group
    name: IATCI - Home
    version: ''
    section: ''
    url: 'https://iatci.com/'
  - org: IATA
    name: Passenger and Airport Data Interchange Standards (PADIS) EDIFACT Implementation Guide
    version: ''
    section: ''
    url: 'https://standards.atlassian.net/wiki/spaces/AIDM/pages/832471053'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="30" width="16" height="12" rx="2"/><path d="M10 30v-4a4 4 0 0 1 8 0v4"/><path d="M26 14h10l6 6-6 6H26z"/><line x1="30" y1="20" x2="36" y2="20"/><path d="M14 30c10-2 12-8 12-14"/></svg>
---

> An industry standard and the message exchange behind it — coordinated with IATA's Passenger and Airport Data Interchange Standards (PADIS) and carried as EDIFACT messages — that lets a passenger and their baggage on a multi-airline itinerary be checked in once, at the start of the journey, for all connecting flights. The first carrier issues onward boarding passes and through-checks bags to the final destination by querying the downstream operating carrier's check-in and flight systems.

IATCI is maintained by an industry interest group of airlines, system/software providers, and ground handlers that cooperates closely with IATA PADIS, providing the EDIFACT message guidelines and a Message Implementation Guide. It defines two main scenarios: Scenario 1 — InterAirline Through Check-In (a passenger checks in with the first carrier and the downstream carrier accepts the passenger/bags) — and Scenario 2 — InterAirline Local Check-In and Flight Management. Carriers must have a bilateral or multilateral IATCI agreement in place before through check-in is possible between them, and the rules govern how passenger and baggage data, seat assignments, and boarding passes are exchanged between the carriers' departure control systems. IATCI is a core piece of interline operational mechanics, complementing the commercial interline agreement and interline e-ticketing that make multi-carrier ticketing possible.

**한국어 / Korean** — **항공사 간 일괄 탑승수속 (IATCI)** — 여러 항공사가 연결된 여정에서 승객과 수하물을 여정 시작 시 한 번에 모든 연결편까지 체크인(check-in)할 수 있게 하는 산업 표준이자 그 배후의 메시지 교환으로, IATA의 Passenger and Airport Data Interchange Standards(PADIS)와 조율되며 EDIFACT 메시지로 전송된다. 첫 항공사가 하류(downstream) 운항사의 체크인·항공편 시스템을 조회하여 이후 구간의 탑승권을 발급하고 수하물을 최종 목적지까지 통과 수속(through-check)한다.

IATCI는 항공사, 시스템/소프트웨어 제공자, 지상 조업사로 구성된 산업 이익 단체가 유지·관리하며, IATA PADIS와 긴밀히 협력하여 EDIFACT 메시지 지침과 Message Implementation Guide를 제공한다. 두 가지 주요 시나리오를 정의한다: 시나리오 1 — InterAirline Through Check-In(승객이 첫 항공사에서 체크인하고 하류 항공사가 승객/수하물을 수용) — 과 시나리오 2 — InterAirline Local Check-In and Flight Management. 항공사 간에 통과 수속이 가능하려면 사전에 양자 또는 다자 IATCI 협정이 있어야 하며, 규칙은 승객·수하물 데이터, 좌석 배정, 탑승권이 각 항공사의 출발통제시스템(DCS) 간에 어떻게 교환되는지를 규율한다. IATCI는 인터라인(interline) 운영 메커니즘의 핵심으로, 다항공사 발권을 가능케 하는 상업적 인터라인 협정 및 인터라인 전자항공권 발권을 보완한다.

**Aliases:** `IATCI`, `Interairline Through Check-In`, `Through Check-In`

# Related
- [Interline](/air/air-partner/interline.md) — related
- [Passenger and Airport Data Interchange Standards (PADIS)](/common/standards/passenger-and-airport-data-interchange-standards-padis.md) — related
- [EDIFACT](/common/standards/edifact.md) — related
- [Departure Control System (DCS)](/air/air-ops/departure-control-system-dcs.md) — related
- [Interline Electronic Ticketing](/air/air-partner/interline-electronic-ticketing.md) — related
- [Most Significant Carrier (MSC)](/air/air-partner/most-significant-carrier-msc.md) — related
- [Connection](/air/air-partner/connection.md) — related

# Distinctions
- **Inter-Airline Through Check-In (IATCI)** vs [Interline](/air/air-partner/interline.md) — An interline agreement is the commercial arrangement letting carriers ticket and carry passengers across an itinerary; IATCI is the operational check-in standard that, on top of that relationship, lets the passenger and bags be checked in once for the whole journey.

# Citations
[1] [IATCI Group — IATCI - Home](https://iatci.com/)
[2] [IATA — Passenger and Airport Data Interchange Standards (PADIS) EDIFACT Implementation Guide](https://standards.atlassian.net/wiki/spaces/AIDM/pages/832471053)
