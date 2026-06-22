---
type: Standard Term
title: Passenger Name List / Additions and Deletions List (PNL/ADL)
description: 'PNL (Passenger Name List) and ADL (Addition and Deletion List) are the standard messages by which a reservation/inventory system delivers the booked passenger list for a flight to the Departure Control System (DCS). The PNL is the initial complete list sent ahead of a flight; ADLs are subsequent incremental messages conveying additions, deletions and changes until check-in opens.'
tags:
  - air-ops
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: pnl-adl
vertical: air
category: air-ops
conceptType: standard-term
status: active
abbreviation: PNL/ADL
term_ko: 승객 명단/증감 명단(PNL/ADL)
definition_ko: 'PNL(Passenger Name List)과 ADL(Addition and Deletion List)은 예약/재고 시스템이 특정 항공편의 예약 승객 명단을 출발 통제 시스템(DCS)에 전달하는 표준 메시지다. PNL은 항공편 출발에 앞서 보내는 최초의 완전한 명단이며, ADL은 체크인 개시 전까지 추가·삭제·변경을 전달하는 후속 증분 메시지다.'
longDef: 'The PNL/ADL flow is the precise handoff from the reservation domain to the airport departure-control domain. A reservation system generates a PNL at a defined time before departure containing booked names, status, SSR/seat/special-handling data and class breakdown; as the booking situation evolves, one or more ADLs are transmitted to keep the DCS synchronized without resending the whole list. The messages are typically carried as Type B and follow IATA passenger standards (PNL/ADL are specified in Recommended Practice 1708, documented in the Passenger Services Conference Resolution Manual / PSCRM, formerly the Passenger Standards Conference Manual / PSCM). They are the operational backbone of the reservation-to-check-in boundary, and a missing or out-of-sync PNL/ADL is a common cause of check-in discrepancies.'
longDef_ko: 'PNL/ADL 흐름은 예약 영역에서 공항 출발 통제 영역으로의 정확한 인계 지점이다. 예약 시스템은 출발 전 정해진 시점에 예약된 이름, 상태, SSR/좌석/특별 처리 데이터, 등급 구성을 담은 PNL을 생성하고, 예약 상황이 변하면 전체 명단을 재전송하지 않고도 DCS를 동기화하기 위해 하나 이상의 ADL을 전송한다. 이 메시지들은 보통 Type B로 운반되며 IATA 여객 표준을 따른다(PNL/ADL은 Recommended Practice 1708에 규정되어 있으며, 여객 서비스 회의 결의 매뉴얼(PSCRM, 과거 명칭 Passenger Standards Conference Manual / PSCM)에 문서화되어 있다). 예약-체크인 경계의 운영상 근간이며, PNL/ADL이 누락되거나 비동기화되는 것은 체크인 불일치의 흔한 원인이다.'
standardBody: IATA
aliases:
  - PNL
  - ADL
  - Passenger Name List
  - Addition and Deletion List
  - Additions/Deletions List
relationships:
  - type: related
    targetTerm: Departure Control System (DCS)
  - type: related
    targetTerm: Type B Message
  - type: related
    targetTerm: PNR
  - type: related
    targetTerm: SSR
  - type: related
    targetTerm: Secure Flight
distinctions:
  - targetTerm: PNR
    explanation: A PNR is the booking record held in the reservation system for one party; PNL/ADL are flight-level messages that consolidate and push all booked passengers (and subsequent changes) for a flight from the reservation system into the DCS.
    explanation_ko: 'PNR은 예약 시스템이 한 일행에 대해 보유하는 예약 기록이고, PNL/ADL은 한 항공편의 모든 예약 승객(및 이후 변경)을 예약 시스템에서 DCS로 통합·전달하는 항공편 단위 메시지다.'
  - targetTerm: Departure Control System (DCS)
    explanation: 'PNL/ADL are the inbound messages that feed passenger data into the DCS; the DCS is the receiving system that performs check-in, boarding and load control using that data.'
    explanation_ko: 'PNL/ADL은 승객 데이터를 DCS로 공급하는 인바운드 메시지이고, DCS는 그 데이터를 사용해 체크인·탑승·탑재 통제를 수행하는 수신 시스템이다.'
sources:
  - org: IATA
    name: Passenger Services Conference Resolution Manual (PSCRM) - Recommended Practice 1708 (PNL/ADL)
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/'
  - org: InteliSys Aviation
    name: How to manually send PNL/ADL
    version: ''
    section: ''
    url: 'https://intelisysaviation.atlassian.net/wiki/spaces/SDD/pages/1414234147/How+to+manually+send+PNL+ADL'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="6" width="28" height="36" rx="3"/><line x1="15" y1="14" x2="27" y2="14"/><line x1="15" y1="21" x2="27" y2="21"/><line x1="15" y1="28" x2="24" y2="28"/><path d="M31 25 V33 M27 29 H35"/><path d="M27 36 H35"/></svg>
---

> PNL (Passenger Name List) and ADL (Addition and Deletion List) are the standard messages by which a reservation/inventory system delivers the booked passenger list for a flight to the Departure Control System (DCS). The PNL is the initial complete list sent ahead of a flight; ADLs are subsequent incremental messages conveying additions, deletions and changes until check-in opens.

The PNL/ADL flow is the precise handoff from the reservation domain to the airport departure-control domain. A reservation system generates a PNL at a defined time before departure containing booked names, status, SSR/seat/special-handling data and class breakdown; as the booking situation evolves, one or more ADLs are transmitted to keep the DCS synchronized without resending the whole list. The messages are typically carried as Type B and follow IATA passenger standards (PNL/ADL are specified in Recommended Practice 1708, documented in the Passenger Services Conference Resolution Manual / PSCRM, formerly the Passenger Standards Conference Manual / PSCM). They are the operational backbone of the reservation-to-check-in boundary, and a missing or out-of-sync PNL/ADL is a common cause of check-in discrepancies.

**한국어 / Korean** — **승객 명단/증감 명단(PNL/ADL)** — PNL(Passenger Name List)과 ADL(Addition and Deletion List)은 예약/재고 시스템이 특정 항공편의 예약 승객 명단을 출발 통제 시스템(DCS)에 전달하는 표준 메시지다. PNL은 항공편 출발에 앞서 보내는 최초의 완전한 명단이며, ADL은 체크인 개시 전까지 추가·삭제·변경을 전달하는 후속 증분 메시지다.

PNL/ADL 흐름은 예약 영역에서 공항 출발 통제 영역으로의 정확한 인계 지점이다. 예약 시스템은 출발 전 정해진 시점에 예약된 이름, 상태, SSR/좌석/특별 처리 데이터, 등급 구성을 담은 PNL을 생성하고, 예약 상황이 변하면 전체 명단을 재전송하지 않고도 DCS를 동기화하기 위해 하나 이상의 ADL을 전송한다. 이 메시지들은 보통 Type B로 운반되며 IATA 여객 표준을 따른다(PNL/ADL은 Recommended Practice 1708에 규정되어 있으며, 여객 서비스 회의 결의 매뉴얼(PSCRM, 과거 명칭 Passenger Standards Conference Manual / PSCM)에 문서화되어 있다). 예약-체크인 경계의 운영상 근간이며, PNL/ADL이 누락되거나 비동기화되는 것은 체크인 불일치의 흔한 원인이다.

**Aliases:** `PNL`, `ADL`, `Passenger Name List`, `Addition and Deletion List`, `Additions/Deletions List`

# Related
- [Departure Control System (DCS)](/air/air-ops/departure-control-system-dcs.md) — related
- [Type B Message](/air/air-ops/type-b-message.md) — related
- [PNR](/air/air-ops/pnr.md) — related
- [SSR](/air/air-ops/ssr.md) — related
- [Secure Flight](/common/customer/secure-flight.md) — related

# Distinctions
- **Passenger Name List / Additions and Deletions List (PNL/ADL)** vs [PNR](/air/air-ops/pnr.md) — A PNR is the booking record held in the reservation system for one party; PNL/ADL are flight-level messages that consolidate and push all booked passengers (and subsequent changes) for a flight from the reservation system into the DCS.
- **Passenger Name List / Additions and Deletions List (PNL/ADL)** vs [Departure Control System (DCS)](/air/air-ops/departure-control-system-dcs.md) — PNL/ADL are the inbound messages that feed passenger data into the DCS; the DCS is the receiving system that performs check-in, boarding and load control using that data.

# Citations
[1] [IATA — Passenger Services Conference Resolution Manual (PSCRM) - Recommended Practice 1708 (PNL/ADL)](https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/)
[2] [InteliSys Aviation — How to manually send PNL/ADL](https://intelisysaviation.atlassian.net/wiki/spaces/SDD/pages/1414234147/How+to+manually+send+PNL+ADL)
