---
type: System
title: OAG
description: 'OAG (Official Airline Guide) is the world''s largest commercial aviation data platform, providing authoritative flight schedule data, on-time performance (OTP) statistics, flight status, and route information to airlines, airports, GDS, online travel agencies, and corporate travel tools. Designated by IATA as a Centralized Schedule Data Processor (CSDP), OAG receives airline schedule submissions in SSIM format and redistributes them to data consumers worldwide.'
tags:
  - standards
  - active
  - IATA
timestamp: '2026-07-30T00:00:00Z'
id: oag
vertical: common
category: standards
conceptType: system
status: active
abbreviation: OAG
term_ko: OAG (공식 항공 가이드)
definition_ko: 'OAG(Official Airline Guide)는 세계 최대의 상업용 항공 데이터 플랫폼으로, 항공사·공항·GDS·OTA·법인 여행 도구에 권위 있는 항공편 스케줄 데이터, 정시 운항률(OTP), 항공편 상태, 노선 정보를 제공한다. IATA로부터 중앙 스케줄 데이터 처리자(CSDP)로 지정된 OAG는 항공사의 SSIM 형식 스케줄 제출을 수신하여 전 세계 데이터 소비자에게 재배포한다.'
longDef: 'Originally published in 1929 as a printed timetable, the Official Airline Guide evolved into an electronic data service and is now operated by OAG Aviation Worldwide Ltd, headquartered in Luton, UK. Under IATA''s Standard Schedules Information Manual (SSIM), airlines submit schedule data to CSDPs such as OAG, which validate, consolidate, and disseminate the data through APIs, flat-file downloads, and data feeds. OAG data is integrated into GDS for fare and availability searches, into metasearch engines for itinerary display, into corporate travel management platforms for policy compliance checking, and into airport operations systems for gate planning. OAG''s on-time performance database — tracking actual vs. scheduled departure and arrival times across tens of millions of flights — is a standard benchmarking input for airline operational analysis, passenger compensation (EU Regulation 261/2004 extraordinary circumstances assessments), and travel insurance flight delay triggers. OAG FlightView provides real-time FLIFO data to airports, airlines, and consumer apps. The OAG Airline Monthly Statistics publication is a recognized industry data source for traffic analysis.'
longDef_ko: '1929년 인쇄 시간표로 처음 발행된 Official Airline Guide는 전자 데이터 서비스로 진화했으며, 현재는 영국 루턴에 본사를 둔 OAG Aviation Worldwide Ltd가 운영한다. IATA의 표준 스케줄 정보 매뉴얼(SSIM)에 따라 항공사는 OAG 등 CSDP에 스케줄 데이터를 제출하며, CSDP는 이를 검증·통합·배포한다. OAG 데이터는 운임·가용성 조회를 위한 GDS, 일정 표시를 위한 메타서치 엔진, 정책 준수 확인을 위한 법인 여행 관리 플랫폼, 게이트 계획을 위한 공항 운항 시스템에 통합된다. OAG의 정시 운항 데이터베이스는 수천만 개의 항공편에 대해 실제 출발·도착 시간과 예정 시간을 추적하며, 항공사 운항 분석 벤치마킹 기준 데이터, EU Regulation 261/2004의 비상 상황 평가, 여행 보험의 항공편 지연 트리거 등에 활용된다. OAG FlightView는 공항·항공사·소비자 앱에 실시간 FLIFO 데이터를 제공한다.'
standardBody: IATA (SSIM CSDP designation)
aliases:
  - Official Airline Guide
  - OAG Aviation Worldwide
relationships:
  - type: related
    targetTerm: Standard Schedules Information Manual (SSIM)
  - type: related
    targetTerm: FLIFO
  - type: related
    targetTerm: GDS
  - type: related
    targetTerm: On-Time Performance (OTP)
  - type: related
    targetTerm: Flight Number
distinctions:
  - targetTerm: GDS
    explanation: 'A GDS is a transaction platform where travel agents shop and book flights, hotels, and cars; OAG is a data platform that publishes schedule, OTP, and route intelligence used as a reference input by GDS and other systems — OAG does not hold bookings or issue tickets.'
    explanation_ko: 'GDS는 여행사가 항공편·호텔·렌터카를 조회·예약하는 거래 플랫폼이고, OAG는 GDS 및 다른 시스템의 기준 입력으로 활용되는 스케줄·OTP·노선 인텔리전스를 제공하는 데이터 플랫폼이다. OAG는 예약을 보관하거나 발권하지 않는다.'
  - targetTerm: Standard Schedules Information Manual (SSIM)
    explanation: 'SSIM is the IATA standard that defines how airlines format and submit their schedule data; OAG is a Centralized Schedule Data Processor (CSDP) that receives SSIM-format submissions from airlines and redistributes the consolidated data commercially.'
    explanation_ko: 'SSIM은 항공사가 스케줄 데이터를 포맷하고 제출하는 방법을 정의하는 IATA 표준이고, OAG는 항공사로부터 SSIM 형식 제출을 수신하여 통합 데이터를 상업적으로 재배포하는 중앙 스케줄 데이터 처리자(CSDP)이다.'
sources:
  - name: Standard Schedules Information Manual (SSIM) — Centralized Schedule Data Processors
    org: IATA
    version: 9th Edition
    section: Part 1 — Schedule Data Submission and Dissemination
    url: 'https://www.iata.org/en/publications/store/standard-schedules-information/'
    tier: standard-body
  - name: OAG — About OAG Aviation Worldwide
    org: OAG Aviation Worldwide Ltd
    version: ''
    section: ''
    url: 'https://www.oag.com/about-oag'
    tier: vendor-doc
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="8" width="36" height="32" rx="2"/><path d="M6 16h36"/><path d="M14 12h2 M18 12h2"/><path d="M10 22h6 M10 28h10 M10 34h8"/><path d="M30 22l4 0 M30 27l6 0 M30 32l4 0"/></svg>
---

> OAG (Official Airline Guide) is the world's largest commercial aviation data platform, providing authoritative flight schedule data, on-time performance (OTP) statistics, flight status, and route information to airlines, airports, GDS, online travel agencies, and corporate travel tools. Designated by IATA as a Centralized Schedule Data Processor (CSDP), OAG receives airline schedule submissions in SSIM format and redistributes them to data consumers worldwide.

Originally published in 1929 as a printed timetable, the Official Airline Guide evolved into an electronic data service and is now operated by OAG Aviation Worldwide Ltd, headquartered in Luton, UK. Under IATA's Standard Schedules Information Manual (SSIM), airlines submit schedule data to CSDPs such as OAG, which validate, consolidate, and disseminate the data through APIs, flat-file downloads, and data feeds. OAG data is integrated into GDS for fare and availability searches, into metasearch engines for itinerary display, into corporate travel management platforms for policy compliance checking, and into airport operations systems for gate planning. OAG's on-time performance database — tracking actual vs. scheduled departure and arrival times across tens of millions of flights — is a standard benchmarking input for airline operational analysis, passenger compensation (EU Regulation 261/2004 extraordinary circumstances assessments), and travel insurance flight delay triggers. OAG FlightView provides real-time FLIFO data to airports, airlines, and consumer apps. The OAG Airline Monthly Statistics publication is a recognized industry data source for traffic analysis.

**한국어 / Korean** — **OAG (공식 항공 가이드)** — OAG(Official Airline Guide)는 세계 최대의 상업용 항공 데이터 플랫폼으로, 항공사·공항·GDS·OTA·법인 여행 도구에 권위 있는 항공편 스케줄 데이터, 정시 운항률(OTP), 항공편 상태, 노선 정보를 제공한다. IATA로부터 중앙 스케줄 데이터 처리자(CSDP)로 지정된 OAG는 항공사의 SSIM 형식 스케줄 제출을 수신하여 전 세계 데이터 소비자에게 재배포한다.

1929년 인쇄 시간표로 처음 발행된 Official Airline Guide는 전자 데이터 서비스로 진화했으며, 현재는 영국 루턴에 본사를 둔 OAG Aviation Worldwide Ltd가 운영한다. IATA의 표준 스케줄 정보 매뉴얼(SSIM)에 따라 항공사는 OAG 등 CSDP에 스케줄 데이터를 제출하며, CSDP는 이를 검증·통합·배포한다. OAG 데이터는 운임·가용성 조회를 위한 GDS, 일정 표시를 위한 메타서치 엔진, 정책 준수 확인을 위한 법인 여행 관리 플랫폼, 게이트 계획을 위한 공항 운항 시스템에 통합된다. OAG의 정시 운항 데이터베이스는 수천만 개의 항공편에 대해 실제 출발·도착 시간과 예정 시간을 추적하며, 항공사 운항 분석 벤치마킹, EU Regulation 261/2004 비상 상황 평가, 여행 보험 항공편 지연 트리거에 활용된다.

**Aliases:** `Official Airline Guide`, `OAG Aviation Worldwide`

# Related
- [Standard Schedules Information Manual (SSIM)](/air/air-partner/standard-schedules-information-manual-ssim.md) — related
- [FLIFO](/air/air-ops/flifo.md) — related
- [GDS](/common/standards/gds.md) — related
- [On-Time Performance (OTP)](/air/air-ops/on-time-performance.md) — related
- [Flight Number](/air/air-ops/flight-number.md) — related

# Distinctions
- **OAG** vs [GDS](/common/standards/gds.md) — A GDS is a transaction platform where travel agents shop and book flights, hotels, and cars; OAG is a data platform that publishes schedule, OTP, and route intelligence used as a reference input by GDS and other systems — OAG does not hold bookings or issue tickets.
- **OAG** vs [Standard Schedules Information Manual (SSIM)](/air/air-partner/standard-schedules-information-manual-ssim.md) — SSIM is the IATA standard that defines how airlines format and submit their schedule data; OAG is a Centralized Schedule Data Processor (CSDP) that receives SSIM-format submissions from airlines and redistributes the consolidated data commercially.

# Citations
[1] [IATA — Standard Schedules Information Manual (SSIM) — Centralized Schedule Data Processors — 9th Edition](https://www.iata.org/en/publications/store/standard-schedules-information/)
[2] [OAG Aviation Worldwide Ltd — OAG — About OAG Aviation Worldwide](https://www.oag.com/about-oag)
