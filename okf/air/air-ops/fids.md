---
type: System
title: FIDS
description: 'A FIDS (Flight Information Display System) is the airport display infrastructure — screens, monitors, and kiosks — that presents real-time flight departure and arrival information to passengers and airport staff. A FIDS server consolidates data from airline Departure Control Systems (DCS), FLIFO feeds, and schedule databases, and pushes gate assignments, boarding times, delay notices, and baggage carousel assignments to displays throughout the terminal.'
tags:
  - air-ops
  - active
  - IATA
timestamp: '2026-07-30T00:00:00Z'
id: fids
vertical: air
category: air-ops
conceptType: system
status: active
abbreviation: FIDS
term_ko: 항공편 정보 표시 시스템(FIDS)
definition_ko: 'FIDS(Flight Information Display System)는 여행객과 공항 직원에게 실시간 출발·도착 항공편 정보를 제공하는 공항 표시 인프라(스크린·모니터·키오스크)이다. FIDS 서버는 항공사의 출발 통제 시스템(DCS), FLIFO 피드, 스케줄 데이터베이스로부터 데이터를 통합하여 게이트 배정, 탑승 시간, 지연 공지, 수하물 수취대 배정 등을 터미널 전역의 디스플레이에 전송한다.'
longDef: 'FIDS is a core component of the airport passenger experience and operational communications ecosystem. The system ingests schedule data from OAG, SSIM files, and airline Operations Control Centres, then overlays real-time operational updates from DCS (actual gate assignments, boarding status), ACARS-derived OOOI reports (aircraft Out/Off/On/In events), and airline FLIFO feeds (delays, gate changes, cancellations). Display content is segmented by audience: departures boards for outbound passengers, arrivals monitors for meeters-and-greeters, and staff-facing operational consoles. Modern FIDS extend to digital wayfinding, mobile push notifications, and accessible audio announcement integration. IATA Recommended Practice 1797 (Airline Industry Data Model, AIDM) defines data elements that feed FIDS, including flight status codes, gate identifiers, and baggage belt assignments. Major FIDS vendors include SITA (Airport Management solutions), Amadeus (Airport Vision), and Inform. FIDS infrastructure is referenced in IATA''s Airport Development Reference Manual (ADRM) as a mandatory operational system for all IATA-coordinated airports. Where CUTE (Common Use Terminal Equipment) manages the agent and airline workstations at check-in counters and gates, FIDS manages the passenger-facing public information layer.'
longDef_ko: 'FIDS는 공항 여객 경험과 운항 통신 생태계의 핵심 구성요소다. 이 시스템은 OAG, SSIM 파일, 항공사 운항 통제 센터로부터 스케줄 데이터를 수신하고, DCS(실제 게이트 배정·탑승 현황), ACARS 기반 OOOI 보고서(항공기 Out/Off/On/In 이벤트), 항공사 FLIFO 피드(지연·게이트 변경·결항)의 실시간 운항 업데이트를 덮어쓴다. 표시 내용은 수신 대상에 따라 구분된다. 출발 안내판은 출국 여행객용, 도착 모니터는 마중 나온 사람용, 운항 콘솔은 직원용이다. 현대 FIDS는 디지털 길 안내, 모바일 푸시 알림, 접근성 음성 방송 연동으로 확장된다. IATA 권장 관행 1797(항공 산업 데이터 모델, AIDM)은 항공편 상태 코드, 게이트 식별자, 수하물 벨트 배정을 포함하여 FIDS에 공급되는 데이터 요소를 정의한다. 주요 FIDS 공급업체로는 SITA(공항 관리 솔루션), 아마데우스(Airport Vision), Inform 등이 있다. FIDS 인프라는 IATA 공항 개발 참고 매뉴얼(ADRM)에서 모든 IATA 조율 공항의 필수 운항 시스템으로 규정된다. CUTE가 체크인 카운터와 게이트의 직원·항공사 워크스테이션을 관리한다면, FIDS는 여행객 대상 공공 정보 레이어를 관리한다.'
standardBody: IATA / ACI World
aliases:
  - Flight Information Display System
  - Departures Board
  - Arrivals Board
relationships:
  - type: related
    targetTerm: Departure Control System (DCS)
  - type: related
    targetTerm: FLIFO
  - type: related
    targetTerm: CUTE
  - type: related
    targetTerm: On-Time Performance (OTP)
  - type: related
    targetTerm: ACARS
distinctions:
  - targetTerm: CUTE
    explanation: 'CUTE (Common Use Terminal Equipment) provides the shared computing environment and workstation infrastructure at check-in counters and departure gates for airline agents; FIDS is the public-facing display layer that shows flight status to passengers throughout the terminal — both systems receive data from DCS and airline operations but serve different audiences and functions.'
    explanation_ko: 'CUTE는 체크인 카운터 및 탑승 게이트에서 항공사 직원을 위한 공유 컴퓨팅 환경과 워크스테이션 인프라를 제공하고, FIDS는 터미널 전역에서 여행객에게 항공편 상태를 표시하는 공용 디스플레이 레이어다. 두 시스템 모두 DCS와 항공사 운항 데이터를 수신하지만 서로 다른 수신 대상과 기능을 담당한다.'
  - targetTerm: FLIFO
    explanation: 'FLIFO (Flight Information) is the data feed containing real-time flight status updates (delays, gate changes, cancellations) that airlines publish; FIDS is the physical airport display system that consumes FLIFO data (along with DCS and schedule data) and presents it to passengers.'
    explanation_ko: 'FLIFO는 항공사가 공개하는 실시간 항공편 상태 업데이트(지연·게이트 변경·결항) 데이터 피드이고, FIDS는 FLIFO 데이터(및 DCS·스케줄 데이터)를 소비하여 여행객에게 표시하는 공항의 물리적 표시 시스템이다.'
sources:
  - name: Airport Development Reference Manual (ADRM) — Terminal Operational Systems
    org: IATA
    version: 11th Edition
    section: Chapter 7 — Airport IT Systems
    url: 'https://www.iata.org/en/publications/store/airport-development-reference-manual/'
    tier: association
  - name: SITA Airport Management — Flight Information Display
    org: SITA
    version: ''
    section: ''
    url: 'https://www.sita.aero/solutions/sita-for-airports/airport-management/'
    tier: vendor-doc
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="8" width="40" height="26" rx="2"/><path d="M16 34v6 M32 34v6 M10 40h28"/><path d="M8 14h8 M8 20h14 M8 26h10"/><path d="M24 14h16 M24 20h12 M24 26h14"/></svg>
---

> A FIDS (Flight Information Display System) is the airport display infrastructure — screens, monitors, and kiosks — that presents real-time flight departure and arrival information to passengers and airport staff. A FIDS server consolidates data from airline Departure Control Systems (DCS), FLIFO feeds, and schedule databases, and pushes gate assignments, boarding times, delay notices, and baggage carousel assignments to displays throughout the terminal.

FIDS is a core component of the airport passenger experience and operational communications ecosystem. The system ingests schedule data from OAG, SSIM files, and airline Operations Control Centres, then overlays real-time operational updates from DCS (actual gate assignments, boarding status), ACARS-derived OOOI reports (aircraft Out/Off/On/In events), and airline FLIFO feeds (delays, gate changes, cancellations). Display content is segmented by audience: departures boards for outbound passengers, arrivals monitors for meeters-and-greeters, and staff-facing operational consoles. Modern FIDS extend to digital wayfinding, mobile push notifications, and accessible audio announcement integration. IATA Recommended Practice 1797 (Airline Industry Data Model, AIDM) defines data elements that feed FIDS, including flight status codes, gate identifiers, and baggage belt assignments. Major FIDS vendors include SITA (Airport Management solutions), Amadeus (Airport Vision), and Inform. FIDS infrastructure is referenced in IATA's Airport Development Reference Manual (ADRM) as a mandatory operational system for all IATA-coordinated airports. Where CUTE (Common Use Terminal Equipment) manages the agent and airline workstations at check-in counters and gates, FIDS manages the passenger-facing public information layer.

**한국어 / Korean** — **항공편 정보 표시 시스템(FIDS)** — FIDS(Flight Information Display System)는 여행객과 공항 직원에게 실시간 출발·도착 항공편 정보를 제공하는 공항 표시 인프라(스크린·모니터·키오스크)이다. FIDS 서버는 항공사의 출발 통제 시스템(DCS), FLIFO 피드, 스케줄 데이터베이스로부터 데이터를 통합하여 게이트 배정, 탑승 시간, 지연 공지, 수하물 수취대 배정 등을 터미널 전역의 디스플레이에 전송한다.

FIDS는 공항 여객 경험과 운항 통신 생태계의 핵심 구성요소다. OAG·SSIM 파일·항공사 운항 통제 센터에서 스케줄 데이터를 수신하고, DCS(실제 게이트 배정·탑승 현황), ACARS 기반 OOOI 보고서, 항공사 FLIFO 피드의 실시간 운항 업데이트를 반영한다. 현대 FIDS는 디지털 길 안내, 모바일 푸시 알림, 접근성 음성 방송 연동으로 확장된다. IATA 공항 개발 참고 매뉴얼(ADRM)은 FIDS를 IATA 조율 공항의 필수 운항 시스템으로 규정한다.

**Aliases:** `Flight Information Display System`, `Departures Board`, `Arrivals Board`

# Related
- [Departure Control System (DCS)](/air/air-ops/departure-control-system-dcs.md) — related
- [FLIFO](/air/air-ops/flifo.md) — related
- [CUTE](/common/standards/cute.md) — related
- [On-Time Performance (OTP)](/air/air-ops/on-time-performance.md) — related
- [ACARS](/air/air-ops/acars.md) — related

# Distinctions
- **FIDS** vs [CUTE](/common/standards/cute.md) — CUTE (Common Use Terminal Equipment) provides the shared computing environment and workstation infrastructure at check-in counters and departure gates for airline agents; FIDS is the public-facing display layer that shows flight status to passengers throughout the terminal — both systems receive data from DCS and airline operations but serve different audiences and functions.
- **FIDS** vs [FLIFO](/air/air-ops/flifo.md) — FLIFO (Flight Information) is the data feed containing real-time flight status updates (delays, gate changes, cancellations) that airlines publish; FIDS is the physical airport display system that consumes FLIFO data (along with DCS and schedule data) and presents it to passengers.

# Citations
[1] [IATA — Airport Development Reference Manual (ADRM) — Terminal Operational Systems — 11th Edition](https://www.iata.org/en/publications/store/airport-development-reference-manual/)
[2] [SITA — SITA Airport Management — Flight Information Display](https://www.sita.aero/solutions/sita-for-airports/airport-management/)
