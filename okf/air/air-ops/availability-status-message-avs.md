---
type: Standard Term
title: Availability Status Message (AVS)
description: 'An Availability Status Message (AVS) is an AIRIMP teletype message by which an airline advises connected CRS/GDS systems and other carriers to open or close seats for sale on a given flight, by flight number, date and booking class. It is the foundational message that keeps a seller''s availability display synchronized with the carrier''s current inventory state.'
tags:
  - air-ops
  - active
  - IATA
timestamp: '2026-06-18T00:00:00Z'
id: availability-status-message-avs
vertical: air
category: air-ops
conceptType: standard-term
status: active
abbreviation: AVS
term_ko: Availability Status Message (AVS / 가용성 status 메시지)
definition_ko: Availability Status Message(AVS)는 항공사가 연결된 CRS/GDS와 타 항공사에 특정 flight(편명·날짜·booking class 단위)의 좌석 판매를 열거나 닫도록 통지하는 AIRIMP teletype 메시지다. seller의 availability 화면을 항공사의 현재 inventory 상태와 동기화시키는 근간 메시지다.
longDef: 'Under the AVS ("availability status") regime, the carrier''s inventory system pushes status changes to recipients that hold a cached availability picture, signalling for each flight/segment/class whether seats are open for sale, closed, or on free sale. AVS messages carry status indicators (for example open / closed / on request) so that a CRS or GDS does not have to query the host on every shopping request — this is the lower-cost "AVS participation" level, contrasted with higher real-time levels such as direct-access or last-seat availability where the seller interrogates the host live. Because AVS only periodically refreshes the cached picture, sell attempts against a stale ''open'' status can still be rejected by the host, which is why higher participation levels exist. AVS is governed by the IATA/A4A AIRIMP procedures alongside the booking, schedule and status messages used in interline and distribution messaging.'
longDef_ko: 'AVS(''availability status'') 방식에서 항공사 inventory 시스템은 availability를 캐시해 두는 수신자에게 상태 변경을 push하여, 각 flight/segment/class별로 좌석이 판매 가능(open)인지, 닫힘(closed)인지, free sale인지를 알린다. AVS 메시지는 상태 표시자(예: open / closed / on request)를 실어, CRS·GDS가 모든 shopping 요청마다 호스트에 질의하지 않아도 되게 한다 — 이는 비용이 낮은 ''AVS participation'' 수준으로, seller가 호스트를 실시간 조회하는 direct-access나 last-seat availability 같은 상위 수준과 대비된다. AVS는 캐시된 화면을 주기적으로만 갱신하므로, 오래된 ''open'' 상태에 대한 sell 시도가 호스트에서 거절될 수 있고, 그래서 상위 participation 수준이 존재한다. AVS는 interline·distribution 메시징에서 쓰이는 booking·schedule·status 메시지와 함께 IATA/A4A AIRIMP 절차에 의해 규율된다.'
standardBody: IATA
aliases:
  - AVS Message
  - Availability Status
  - Avail Status Message
providerTerms:
  - provider: GDS (industry)
    term: AVS / non-AVS participation
    context: 'Carriers participate with a GDS at an AVS (cached, status-message-driven) level or at higher real-time levels such as direct access or last-seat availability.'
    context_ko: 항공사는 GDS와 AVS(캐시·status 메시지 기반) 수준 또는 direct access·last-seat availability 같은 상위 실시간 수준으로 participation한다.
    relationship: related
  - provider: Travelport
    term: AVS / NAVS (Numeric AVS)
    context: 'Carriers push AVS and Numeric AVS (NAVS) messages 24/7 to Travelport, which populate its in-house AVS/NAVS availability database used when direct-access is unavailable.'
    context_ko: '항공사는 AVS와 Numeric AVS(NAVS) 메시지를 24/7로 Travelport에 push하며, 이는 direct-access가 없을 때 사용되는 자체 AVS/NAVS availability DB를 채운다.'
    relationship: narrower
relationships:
  - type: parent
    targetTerm: AIRIMP
  - type: related
    targetTerm: Availability
  - type: related
    targetTerm: Free Sale
  - type: related
    targetTerm: Booking Status Code
  - type: related
    targetTerm: Type B Message
  - type: related
    targetTerm: Standard Schedules Message
distinctions:
  - targetTerm: Standard Schedules Message
    explanation: 'An SSM distributes the existence and timing of flights (schedule creates, changes, cancellations); an AVS distributes the bookable seat status of those flights by class. Schedule first, then availability on it.'
    explanation_ko: 'SSM은 flight의 존재와 시각(스케줄 생성·변경·취소)을 배포하고, AVS는 그 flight들의 class별 판매 가능 좌석 상태를 배포한다. 스케줄이 먼저, 그 위의 availability가 그 다음이다.'
  - targetTerm: Booking Status Code
    explanation: 'A Booking Status Code (e.g. HK, SS, UC) describes the state of one segment inside a specific PNR; an AVS describes, at the inventory level, whether a class on a flight is open or closed for everyone. AVS feeds the availability display that a sell then acts against.'
    explanation_ko: 'Booking Status Code(예: HK, SS, UC)는 특정 PNR 내 한 segment의 상태를 나타내고, AVS는 inventory 차원에서 어떤 flight의 class가 모두에게 open인지 closed인지를 나타낸다. AVS는 availability 화면을 채우고, sell은 그 화면에 대해 작동한다.'
  - targetTerm: Standard Schedules Information Manual (SSIM)
    explanation: 'SSIM standards govern the schedule (which flights operate, when, with what aircraft); AVS messages govern the bookable seat status on those flights. Schedule data is the layer beneath availability.'
    explanation_ko: 'SSIM 표준은 스케줄(어떤 flight가 언제 어떤 aircraft로 운항하는지)을 규율하고, AVS 메시지는 그 flight들의 판매 가능 좌석 상태를 규율한다. 스케줄 데이터는 availability 아래 계층이다.'
sources:
  - org: IATA
    name: Airline Industry Reservations Interline Message Procedures (AIRIMP)
    version: ''
    section: Availability Status Messages
    url: 'https://www.iata.org/en/publications/manuals/airline-industry-reservations-interline-message-procedures-airimp/'
  - org: AeroCRS / GO7
    name: AVS Recap (PSS Support)
    version: ''
    section: ''
    url: 'https://support.aerocrs.com/hc/en-us/articles/360035474011-AVS-Recap'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="10" width="36" height="28" rx="3"/><path d="M6 18h36"/><circle cx="15" cy="28" r="4"/><path d="M13.5 28l1.2 1.2 2.3-2.6"/><line x1="24" y1="26" x2="36" y2="26"/><line x1="24" y1="31" x2="32" y2="31"/></svg>
---

> An Availability Status Message (AVS) is an AIRIMP teletype message by which an airline advises connected CRS/GDS systems and other carriers to open or close seats for sale on a given flight, by flight number, date and booking class. It is the foundational message that keeps a seller's availability display synchronized with the carrier's current inventory state.

Under the AVS ("availability status") regime, the carrier's inventory system pushes status changes to recipients that hold a cached availability picture, signalling for each flight/segment/class whether seats are open for sale, closed, or on free sale. AVS messages carry status indicators (for example open / closed / on request) so that a CRS or GDS does not have to query the host on every shopping request — this is the lower-cost "AVS participation" level, contrasted with higher real-time levels such as direct-access or last-seat availability where the seller interrogates the host live. Because AVS only periodically refreshes the cached picture, sell attempts against a stale 'open' status can still be rejected by the host, which is why higher participation levels exist. AVS is governed by the IATA/A4A AIRIMP procedures alongside the booking, schedule and status messages used in interline and distribution messaging.

**한국어 / Korean** — **Availability Status Message (AVS / 가용성 status 메시지)** — Availability Status Message(AVS)는 항공사가 연결된 CRS/GDS와 타 항공사에 특정 flight(편명·날짜·booking class 단위)의 좌석 판매를 열거나 닫도록 통지하는 AIRIMP teletype 메시지다. seller의 availability 화면을 항공사의 현재 inventory 상태와 동기화시키는 근간 메시지다.

AVS('availability status') 방식에서 항공사 inventory 시스템은 availability를 캐시해 두는 수신자에게 상태 변경을 push하여, 각 flight/segment/class별로 좌석이 판매 가능(open)인지, 닫힘(closed)인지, free sale인지를 알린다. AVS 메시지는 상태 표시자(예: open / closed / on request)를 실어, CRS·GDS가 모든 shopping 요청마다 호스트에 질의하지 않아도 되게 한다 — 이는 비용이 낮은 'AVS participation' 수준으로, seller가 호스트를 실시간 조회하는 direct-access나 last-seat availability 같은 상위 수준과 대비된다. AVS는 캐시된 화면을 주기적으로만 갱신하므로, 오래된 'open' 상태에 대한 sell 시도가 호스트에서 거절될 수 있고, 그래서 상위 participation 수준이 존재한다. AVS는 interline·distribution 메시징에서 쓰이는 booking·schedule·status 메시지와 함께 IATA/A4A AIRIMP 절차에 의해 규율된다.

**Aliases:** `AVS Message`, `Availability Status`, `Avail Status Message`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| GDS (industry) | `AVS / non-AVS participation` | related | Carriers participate with a GDS at an AVS (cached, status-message-driven) level or at higher real-time levels such as direct access or last-seat availability. |
| Travelport | `AVS / NAVS (Numeric AVS)` | narrower | Carriers push AVS and Numeric AVS (NAVS) messages 24/7 to Travelport, which populate its in-house AVS/NAVS availability database used when direct-access is unavailable. |

# Related
- [AIRIMP](/air/air-ops/airimp.md) — parent
- [Availability](/air/air-shop/availability.md) — related
- [Free Sale](/lodging/hotel-dist/free-sale.md) — related
- [Booking Status Code](/air/air-ops/booking-status-code.md) — related
- [Type B Message](/air/air-ops/type-b-message.md) — related
- [Standard Schedules Message](/air/air-partner/standard-schedules-message.md) — related

# Distinctions
- **Availability Status Message (AVS)** vs [Standard Schedules Message](/air/air-partner/standard-schedules-message.md) — An SSM distributes the existence and timing of flights (schedule creates, changes, cancellations); an AVS distributes the bookable seat status of those flights by class. Schedule first, then availability on it.
- **Availability Status Message (AVS)** vs [Booking Status Code](/air/air-ops/booking-status-code.md) — A Booking Status Code (e.g. HK, SS, UC) describes the state of one segment inside a specific PNR; an AVS describes, at the inventory level, whether a class on a flight is open or closed for everyone. AVS feeds the availability display that a sell then acts against.
- **Availability Status Message (AVS)** vs [Standard Schedules Information Manual (SSIM)](/air/air-ops/standard-schedules-information-manual-ssim.md) — SSIM standards govern the schedule (which flights operate, when, with what aircraft); AVS messages govern the bookable seat status on those flights. Schedule data is the layer beneath availability.

# Citations
[1] [IATA — Airline Industry Reservations Interline Message Procedures (AIRIMP) — Availability Status Messages](https://www.iata.org/en/publications/manuals/airline-industry-reservations-interline-message-procedures-airimp/)
[2] [AeroCRS / GO7 — AVS Recap (PSS Support)](https://support.aerocrs.com/hc/en-us/articles/360035474011-AVS-Recap)
