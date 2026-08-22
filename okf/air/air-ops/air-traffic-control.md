---
type: System
title: Air Traffic Control
description: 'Air Traffic Control (ATC) is the ground-based service provided by civil aviation authorities that directs aircraft through controlled airspace and on airport surfaces to ensure safe separation, orderly flow, and efficient use of airspace. It is a mandatory component of every commercial flight operation, governed internationally by ICAO Annex 11 — Air Traffic Services.'
tags:
  - air-ops
  - active
  - ICAO
timestamp: '2026-08-22T00:00:00Z'
id: air-traffic-control
vertical: air
category: air-ops
conceptType: system
status: active
abbreviation: ATC
term_ko: 항공교통관제(ATC)
definition_ko: '항공교통관제(ATC, Air Traffic Control)는 민간 항공 당국이 제공하는 지상 기반 서비스로, 관제 공역 내 항공기와 공항 지표면의 항공기를 지시하여 안전한 분리, 질서 있는 흐름, 효율적인 공역 이용을 보장한다. 모든 상업 항공편 운항에서 필수적인 구성 요소이며, ICAO Annex 11 — 항공교통업무(Air Traffic Services)에 의해 국제적으로 규율된다.'
longDef: 'ATC encompasses three distinct services: Area Control (en-route airspace separation), Approach Control (arrivals and departures around terminal areas), and Aerodrome Control (movements on the airport surface and in the circuit). Controllers communicate by radiotelephony (VHF/UHF) using ICAO-standard phraseology and assign altitudes, headings, speeds, and sequences. Radar and, increasingly, ADS-B (Automatic Dependent Surveillance–Broadcast) provide situational awareness. Where ATC is not available (Class G uncontrolled airspace), pilots use CTAF/UNICOM and self-separation. ATC delays are a primary driver of flight delay statistics and are closely tracked by EUROCONTROL in Europe and the FAA in the US.'
longDef_ko: 'ATC는 세 가지 별개의 서비스를 포함한다: 항로 공역에서의 간격 유지를 담당하는 지역 관제(Area Control), 터미널 주변 도착·출발을 담당하는 접근 관제(Approach Control), 공항 지표면과 이착륙 주변 이동을 담당하는 비행장 관제(Aerodrome Control). 관제사는 VHF/UHF 무선전화로 ICAO 표준 용어를 사용하여 고도, 방향, 속도, 순서를 배정한다. 레이더와 점점 더 많이 사용되는 ADS-B(자동 종속 감시 방송)가 상황 인식을 제공한다. ATC가 없는 경우(G등급 비관제 공역)에는 조종사가 CTAF/UNICOM을 사용하고 자체 분리를 유지한다. ATC 지연은 항공 지연 통계의 주요 원인이며, 유럽에서는 EUROCONTROL이, 미국에서는 FAA가 이를 면밀히 추적한다.'
standardBody: ICAO
aliases:
  - Air Traffic Services
  - ATS
  - Air Traffic Management
  - ATM
relationships:
  - type: related
    targetTerm: NOTAM
  - type: related
    targetTerm: Slot
  - type: related
    targetTerm: Ground Handling
  - type: related
    targetTerm: AOG
  - type: related
    targetTerm: FIDS
distinctions:
  - targetTerm: Ground Handling
    explanation: 'Ground Handling covers the physical servicing of aircraft on the ramp (fueling, catering, baggage); ATC is the regulatory communication service that authorises all aircraft movement in controlled airspace and on the manoeuvring area.'
    explanation_ko: 'Ground Handling은 램프에서의 항공기 물리적 서비스(급유, 케이터링, 수하물)를 담당하고, ATC는 관제 공역과 기동 구역에서의 모든 항공기 움직임을 허가하는 규제적 통신 서비스이다.'
  - targetTerm: NOTAM
    explanation: 'A NOTAM conveys information about airspace hazards, restrictions, or changes in navigation aid status; ATC is the operational service that enforces those restrictions and sequences aircraft around hazards in real time.'
    explanation_ko: 'NOTAM은 공역 위험 요소, 제한 사항, 항법 시설 상태 변경 등의 정보를 전달하고, ATC는 실시간으로 그 제한을 시행하고 항공기가 위험 요소를 피해 이동하도록 조율하는 운항 서비스이다.'
  - targetTerm: Slot
    explanation: 'An airport slot is an administrative entitlement to use airport infrastructure at a specific time; ATC translates that scheduled flow into real-time sequencing of individual aircraft with radar vectors and clearances.'
    explanation_ko: '공항 슬롯은 특정 시간에 공항 인프라를 사용할 수 있는 행정적 권한이고, ATC는 레이더 벡터와 허가를 통해 개별 항공기를 실시간으로 순서화하여 그 예정된 흐름을 구현하는 서비스이다.'
sources:
  - name: 'Annex 11 — Air Traffic Services'
    org: ICAO
    version: '16th Edition (2018)'
    section: 'Chapters 1-6'
    url: 'https://store.icao.int/en/annex-11-air-traffic-services'
    tier: standard-body
  - name: 'Doc 4444 PANS-ATM — Procedures for Air Navigation Services: Air Traffic Management'
    org: ICAO
    version: '16th Edition (2016)'
    section: ''
    url: 'https://store.icao.int/en/procedures-for-air-navigation-services-air-traffic-management-doc-4444'
    tier: standard-body
  - name: 'EUROCONTROL Network Manager — ATC Capacity and Delay Statistics'
    org: EUROCONTROL
    version: ''
    section: ''
    url: 'https://www.eurocontrol.int/network-manager'
    tier: regulator-guidance
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="24" r="16" stroke-dasharray="4 3"/><circle cx="24" cy="24" r="8"/><circle cx="24" cy="24" r="2" fill="currentColor" stroke="none"/><line x1="24" y1="24" x2="36" y2="12"/><line x1="24" y1="38" x2="24" y2="44"/><line x1="20" y1="44" x2="28" y2="44"/></svg>
---

> Air Traffic Control (ATC) is the ground-based service provided by civil aviation authorities that directs aircraft through controlled airspace and on airport surfaces to ensure safe separation, orderly flow, and efficient use of airspace. It is a mandatory component of every commercial flight operation, governed internationally by ICAO Annex 11 — Air Traffic Services.

ATC encompasses three distinct services: Area Control (en-route airspace separation), Approach Control (arrivals and departures around terminal areas), and Aerodrome Control (movements on the airport surface and in the circuit). Controllers communicate by radiotelephony (VHF/UHF) using ICAO-standard phraseology and assign altitudes, headings, speeds, and sequences. Radar and, increasingly, ADS-B (Automatic Dependent Surveillance–Broadcast) provide situational awareness. Where ATC is not available (Class G uncontrolled airspace), pilots use CTAF/UNICOM and self-separation. ATC delays are a primary driver of flight delay statistics and are closely tracked by EUROCONTROL in Europe and the FAA in the US.

**한국어 / Korean** — **항공교통관제(ATC)** — 항공교통관제(ATC, Air Traffic Control)는 민간 항공 당국이 제공하는 지상 기반 서비스로, 관제 공역 내 항공기와 공항 지표면의 항공기를 지시하여 안전한 분리, 질서 있는 흐름, 효율적인 공역 이용을 보장한다. 모든 상업 항공편 운항에서 필수적인 구성 요소이며, ICAO Annex 11 — 항공교통업무(Air Traffic Services)에 의해 국제적으로 규율된다.

ATC는 세 가지 별개의 서비스를 포함한다: 항로 공역에서의 간격 유지를 담당하는 지역 관제(Area Control), 터미널 주변 도착·출발을 담당하는 접근 관제(Approach Control), 공항 지표면과 이착륙 주변 이동을 담당하는 비행장 관제(Aerodrome Control). 관제사는 VHF/UHF 무선전화로 ICAO 표준 용어를 사용하여 고도, 방향, 속도, 순서를 배정한다. 레이더와 점점 더 많이 사용되는 ADS-B(자동 종속 감시 방송)가 상황 인식을 제공한다. ATC가 없는 경우(G등급 비관제 공역)에는 조종사가 CTAF/UNICOM을 사용하고 자체 분리를 유지한다. ATC 지연은 항공 지연 통계의 주요 원인이며, 유럽에서는 EUROCONTROL이, 미국에서는 FAA가 이를 면밀히 추적한다.

**Aliases:** `Air Traffic Services`, `ATS`, `Air Traffic Management`, `ATM`

# Related
- [NOTAM](/air/air-ops/notam.md) — related
- [Slot](/air/air-partner/slot.md) — related
- [Ground Handling](/air/air-ops/ground-handling.md) — related
- [AOG](/air/air-ops/aog.md) — related
- [FIDS](/air/air-ops/fids.md) — related

# Distinctions
- **Air Traffic Control** vs [Ground Handling](/air/air-ops/ground-handling.md) — Ground Handling covers the physical servicing of aircraft on the ramp (fueling, catering, baggage); ATC is the regulatory communication service that authorises all aircraft movement in controlled airspace and on the manoeuvring area.
- **Air Traffic Control** vs [NOTAM](/air/air-ops/notam.md) — A NOTAM conveys information about airspace hazards, restrictions, or changes in navigation aid status; ATC is the operational service that enforces those restrictions and sequences aircraft around hazards in real time.
- **Air Traffic Control** vs [Slot](/air/air-partner/slot.md) — An airport slot is an administrative entitlement to use airport infrastructure at a specific time; ATC translates that scheduled flow into real-time sequencing of individual aircraft with radar vectors and clearances.

# Citations
[1] [ICAO — Annex 11 — Air Traffic Services — 16th Edition (2018)](https://store.icao.int/en/annex-11-air-traffic-services)
[2] [ICAO — Doc 4444 PANS-ATM — Procedures for Air Navigation Services: Air Traffic Management — 16th Edition (2016)](https://store.icao.int/en/procedures-for-air-navigation-services-air-traffic-management-doc-4444)
[3] [EUROCONTROL — EUROCONTROL Network Manager — ATC Capacity and Delay Statistics](https://www.eurocontrol.int/network-manager)
