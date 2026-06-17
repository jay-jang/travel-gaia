---
type: Business Term
title: Departure Control System (DCS)
description: 'A Departure Control System (DCS) is the airport-side operational system that manages passenger check-in, baggage acceptance, boarding and aircraft load control. It is the counterpart to the reservation system: it receives booked passenger data (via PNL/ADL), assigns seats and bags, produces boarding passes, and controls the boarding and weight-and-balance process at departure.'
tags:
  - air-ops
  - active
timestamp: '2026-06-17T00:00:00Z'
id: departure-control-system-dcs
category: air-ops
conceptType: business-term
status: active
abbreviation: DCS
term_ko: 출발 통제 시스템(DCS)
definition_ko: 'DCS(Departure Control System, 출발 통제 시스템)는 승객 체크인, 수하물 접수, 탑승, 항공기 탑재(load control)를 관리하는 공항 측 운영 시스템이다. 예약 시스템의 짝이 되는 시스템으로, 예약 승객 데이터를 (PNL/ADL을 통해) 수신하여 좌석과 수하물을 배정하고, 탑승권을 생성하며, 출발 시점의 탑승 및 중량·평형(weight-and-balance) 과정을 통제한다.'
longDef: 'The DCS automates an airline''s airport handling and typically spans three areas: flight preparation (aircraft/seat configuration, check-in readiness), check-in (counter, web, kiosk and mobile, mostly using e-tickets), and boarding/load control (document and security checks, gate boarding, and weight-and-balance for safe dispatch). It marks the boundary between the reservation world (where the PNR and ticket live) and the airport operational world: the reservation system pushes the passenger list and changes via PNL/ADL, after which the DCS owns the passenger from check-in through boarding. DCS platforms are offered by suppliers such as Amadeus, Sabre and SITA, and some carriers run in-house systems.'
longDef_ko: 'DCS는 항공사의 공항 핸들링을 자동화하며 보통 세 영역에 걸친다: 항공편 준비(항공기/좌석 구성, 체크인 준비), 체크인(카운터·웹·키오스크·모바일, 주로 e-ticket 사용), 탑승/탑재 통제(서류·보안 점검, 게이트 탑승, 안전 운항을 위한 중량·평형). 예약 세계(PNR과 항공권이 존재)와 공항 운영 세계의 경계를 이루며, 예약 시스템이 PNL/ADL로 승객 명단과 변경을 밀어 넣은 뒤부터는 DCS가 체크인부터 탑승까지 승객을 관장한다. DCS 플랫폼은 Amadeus, Sabre, SITA 등이 제공하며 일부 항공사는 자체 시스템을 운영한다.'
aliases:
  - DCS
  - Departure Control System
providerTerms:
  - provider: Amadeus
    term: Altea Departure Control
    context: 'Amadeus provides DCS solutions covering check-in, boarding and load control'
    context_ko: Amadeus는 체크인·탑승·탑재 통제를 아우르는 DCS 솔루션을 제공한다
    relationship: narrower
  - provider: SITA
    term: SITA Departure Control Services
    context: SITA offers a shared departure-control platform used by many airlines
    context_ko: SITA는 다수 항공사가 사용하는 공유형 출발 통제 플랫폼을 제공한다
    relationship: narrower
relationships:
  - type: related
    targetTerm: Passenger Name List / Additions and Deletions List (PNL/ADL)
  - type: related
    targetTerm: Type B Message
  - type: related
    targetTerm: CRS
  - type: related
    targetTerm: E-ticket
  - type: related
    targetTerm: Secure Flight
  - type: related
    targetTerm: No-Show
distinctions:
  - targetTerm: CRS
    explanation: 'A CRS/reservation system holds the booking and inventory before travel; the DCS takes over at the airport for check-in, boarding and load control, receiving its passenger data from the reservation system via PNL/ADL.'
    explanation_ko: 'CRS/예약 시스템은 여행 전 예약과 재고를 보유하고, DCS는 공항에서 체크인·탑승·탑재 통제를 인계받아 PNL/ADL을 통해 예약 시스템으로부터 승객 데이터를 수신한다.'
  - targetTerm: PMS
    explanation: 'Both are operational back-office systems, but a DCS handles airline airport departure operations whereas a PMS (Property Management System) runs hotel front-desk and operational functions.'
    explanation_ko: '둘 다 운영 백오피스 시스템이지만, DCS는 항공사 공항 출발 운영을 처리하고 PMS(Property Management System)는 호텔 프런트데스크 및 운영 기능을 담당한다.'
sources:
  - org: Amadeus
    name: Departure Control System (DCS) - Travel Glossary
    version: ''
    section: ''
    url: 'https://amadeus.com/en/travel-glossary/departure-control-system'
  - org: Wikipedia
    name: Departure control system
    version: ''
    section: ''
    url: 'https://en.wikipedia.org/wiki/Departure_control_system'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="10" width="18" height="14" rx="2"/><line x1="11" y1="15" x2="21" y2="15"/><line x1="11" y1="19" x2="18" y2="19"/><path d="M28 17 H40 M40 17 L36 13 M40 17 L36 21"/><path d="M16 28 C24 38 32 38 40 32"/><path d="M35 30 L41 31 L39 37"/></svg>
---

> A Departure Control System (DCS) is the airport-side operational system that manages passenger check-in, baggage acceptance, boarding and aircraft load control. It is the counterpart to the reservation system: it receives booked passenger data (via PNL/ADL), assigns seats and bags, produces boarding passes, and controls the boarding and weight-and-balance process at departure.

The DCS automates an airline's airport handling and typically spans three areas: flight preparation (aircraft/seat configuration, check-in readiness), check-in (counter, web, kiosk and mobile, mostly using e-tickets), and boarding/load control (document and security checks, gate boarding, and weight-and-balance for safe dispatch). It marks the boundary between the reservation world (where the PNR and ticket live) and the airport operational world: the reservation system pushes the passenger list and changes via PNL/ADL, after which the DCS owns the passenger from check-in through boarding. DCS platforms are offered by suppliers such as Amadeus, Sabre and SITA, and some carriers run in-house systems.

**한국어 / Korean** — **출발 통제 시스템(DCS)** — DCS(Departure Control System, 출발 통제 시스템)는 승객 체크인, 수하물 접수, 탑승, 항공기 탑재(load control)를 관리하는 공항 측 운영 시스템이다. 예약 시스템의 짝이 되는 시스템으로, 예약 승객 데이터를 (PNL/ADL을 통해) 수신하여 좌석과 수하물을 배정하고, 탑승권을 생성하며, 출발 시점의 탑승 및 중량·평형(weight-and-balance) 과정을 통제한다.

DCS는 항공사의 공항 핸들링을 자동화하며 보통 세 영역에 걸친다: 항공편 준비(항공기/좌석 구성, 체크인 준비), 체크인(카운터·웹·키오스크·모바일, 주로 e-ticket 사용), 탑승/탑재 통제(서류·보안 점검, 게이트 탑승, 안전 운항을 위한 중량·평형). 예약 세계(PNR과 항공권이 존재)와 공항 운영 세계의 경계를 이루며, 예약 시스템이 PNL/ADL로 승객 명단과 변경을 밀어 넣은 뒤부터는 DCS가 체크인부터 탑승까지 승객을 관장한다. DCS 플랫폼은 Amadeus, Sabre, SITA 등이 제공하며 일부 항공사는 자체 시스템을 운영한다.

**Aliases:** `DCS`, `Departure Control System`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Amadeus | `Altea Departure Control` | narrower | Amadeus provides DCS solutions covering check-in, boarding and load control |
| SITA | `SITA Departure Control Services` | narrower | SITA offers a shared departure-control platform used by many airlines |

# Related
- [Passenger Name List / Additions and Deletions List (PNL/ADL)](/air-ops/pnl-adl.md) — related
- [Type B Message](/air-ops/type-b-message.md) — related
- [CRS](/hotel-dist/crs.md) — related
- [E-ticket](/air-ticket/e-ticket.md) — related
- [Secure Flight](/customer/secure-flight.md) — related
- [No-Show](/hotel-dist/no-show.md) — related

# Distinctions
- **Departure Control System (DCS)** vs [CRS](/hotel-dist/crs.md) — A CRS/reservation system holds the booking and inventory before travel; the DCS takes over at the airport for check-in, boarding and load control, receiving its passenger data from the reservation system via PNL/ADL.
- **Departure Control System (DCS)** vs [PMS](/hotel-dist/pms.md) — Both are operational back-office systems, but a DCS handles airline airport departure operations whereas a PMS (Property Management System) runs hotel front-desk and operational functions.

# Citations
[1] [Amadeus — Departure Control System (DCS) - Travel Glossary](https://amadeus.com/en/travel-glossary/departure-control-system)
[2] [Wikipedia — Departure control system](https://en.wikipedia.org/wiki/Departure_control_system)
