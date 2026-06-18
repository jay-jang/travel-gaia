---
type: Standard
title: MERITS
description: 'MERITS (Multiple East-West Railways Integrated Timetable Storage) is the UIC-owned database that consolidates the timetable and station data of hundreds of European (and some non-European) railway undertakings into a single integrated dataset, published on a regular update cycle. Exchanged in EDIFACT format using SKDUPD (timetable) and TSDUPD (station) messages, it is the authoritative rail schedule data source that feeds journey planners and distribution systems.'
tags:
  - rail
  - active
  - UIC
timestamp: '2026-06-18T00:00:00Z'
id: merits
vertical: ground
category: rail
conceptType: standard
status: active
abbreviation: MERITS
term_ko: MERITS(유럽 철도 통합 시각표 데이터베이스)
definition_ko: 'MERITS(Multiple East-West Railways Integrated Timetable Storage)는 UIC가 소유한 데이터베이스로, 수백 개 유럽(및 일부 비유럽) 철도사업자의 시각표·역 데이터를 하나의 통합 데이터셋으로 집약하며 정기 갱신 주기로 발행한다. EDIFACT 형식의 SKDUPD(시각표)·TSDUPD(역) 메시지로 교환되며, 여정 검색기와 유통 시스템에 공급되는 권위 있는 철도 운행시각 데이터 원천이다.'
longDef: 'MERITS (Multiple East-West Railways Integrated Timetable Storage) integrates the timetables of a few hundred railway undertakings across Europe and selected non-European countries, covering train schedules and connected bus and ship services along with station data such as coordinates and service attributes. The single exchange format is EDIFACT: SKDUPD messages carry timetable data and TSDUPD messages carry station/location data. MERITS is not a consumer-facing product but infrastructure for railway companies and data integrators — UIC offers third-party access (e.g. licensed timetable-and-station data) and provides open-source tools to convert MERITS EDIFACT files to CSV. As an integrated schedule source it underpins journey planning and feeds the offer/availability stage of distribution standards such as OSDM, complementing the company codes (RICS) and location codes (CRD/ENEE) that identify the actors and points referenced in the schedules.'
longDef_ko: 'MERITS(Multiple East-West Railways Integrated Timetable Storage)는 유럽 및 일부 비유럽 국가의 수백 개 철도사업자 시각표를 통합하여, 열차 시각표와 연계 버스·선박 서비스, 그리고 좌표·서비스 속성 같은 역 데이터를 함께 담는다. 단일 교환 형식은 EDIFACT로, SKDUPD 메시지는 시각표 데이터를, TSDUPD 메시지는 역·위치 데이터를 전달한다. MERITS는 일반 소비자용 제품이 아니라 철도 회사·데이터 통합사를 위한 인프라로, UIC는 제3자 접근(예: 라이선스형 시각표·역 데이터)을 제공하고 MERITS EDIFACT 파일을 CSV로 변환하는 오픈소스 도구를 제공한다. 통합 시각표 원천으로서 여정 검색을 뒷받침하고 OSDM 같은 유통 표준의 오퍼/가용성 단계에 공급되며, 시각표가 참조하는 주체·지점을 식별하는 회사코드(RICS)·위치코드(CRD/ENEE)를 보완한다.'
standardBody: UIC
aliases:
  - Multiple East-West Railways Integrated Timetable Storage
  - MERITS database
relationships:
  - type: related
    targetTerm: EDIFACT
  - type: related
    targetTerm: OSDM
  - type: related
    targetTerm: Standard Schedules Message
  - type: related
    targetTerm: Availability
  - type: related
    targetTerm: RICS Code (Company Code)
  - type: related
    targetTerm: TAP TSI
distinctions:
  - targetTerm: Standard Schedules Message
    explanation: 'MERITS is a UIC integrated rail timetable database exchanged via EDIFACT SKDUPD/TSDUPD messages; the Standard Schedules Message (SSIM) is the IATA standard for exchanging airline schedule data. Both convey schedules, but MERITS is the rail-mode integrated timetable store while SSIM is the air-mode schedule message format.'
    explanation_ko: 'MERITS는 EDIFACT SKDUPD/TSDUPD 메시지로 교환되는 UIC 통합 철도 시각표 데이터베이스이고, Standard Schedules Message(SSIM)는 항공 스케줄 데이터를 교환하는 IATA 표준이다. 둘 다 스케줄을 전달하지만, MERITS는 철도 통합 시각표 저장소, SSIM은 항공 스케줄 메시지 형식이다.'
  - targetTerm: OSDM
    explanation: 'MERITS supplies the integrated timetable and station data (the schedule layer); OSDM is the distribution standard for offering, booking and fulfilling rail products. MERITS feeds the schedule/offer input that an OSDM-based sales flow builds offers on top of — data source versus distribution API.'
    explanation_ko: 'MERITS는 통합 시각표·역 데이터(스케줄 레이어)를 공급하고, OSDM은 철도 상품을 오퍼·예약·발권하는 유통 표준이다. MERITS는 OSDM 기반 판매 흐름이 오퍼를 구성하는 스케줄/오퍼 입력을 공급한다 — 데이터 원천 대 유통 API의 관계다.'
sources:
  - org: UIC
    name: MERITS database
    version: ''
    section: ''
    url: ''
  - org: Global Railway Review
    name: UIC gives third party access to MERITS Integrated Data
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="10" width="32" height="28" rx="2"/><path d="M8 18h32"/><path d="M14 10v8M22 10v8M30 10v8"/><path d="M13 26h6M13 31h10M25 26h10M27 31h8"/></svg>
---

> MERITS (Multiple East-West Railways Integrated Timetable Storage) is the UIC-owned database that consolidates the timetable and station data of hundreds of European (and some non-European) railway undertakings into a single integrated dataset, published on a regular update cycle. Exchanged in EDIFACT format using SKDUPD (timetable) and TSDUPD (station) messages, it is the authoritative rail schedule data source that feeds journey planners and distribution systems.

MERITS (Multiple East-West Railways Integrated Timetable Storage) integrates the timetables of a few hundred railway undertakings across Europe and selected non-European countries, covering train schedules and connected bus and ship services along with station data such as coordinates and service attributes. The single exchange format is EDIFACT: SKDUPD messages carry timetable data and TSDUPD messages carry station/location data. MERITS is not a consumer-facing product but infrastructure for railway companies and data integrators — UIC offers third-party access (e.g. licensed timetable-and-station data) and provides open-source tools to convert MERITS EDIFACT files to CSV. As an integrated schedule source it underpins journey planning and feeds the offer/availability stage of distribution standards such as OSDM, complementing the company codes (RICS) and location codes (CRD/ENEE) that identify the actors and points referenced in the schedules.

**한국어 / Korean** — **MERITS(유럽 철도 통합 시각표 데이터베이스)** — MERITS(Multiple East-West Railways Integrated Timetable Storage)는 UIC가 소유한 데이터베이스로, 수백 개 유럽(및 일부 비유럽) 철도사업자의 시각표·역 데이터를 하나의 통합 데이터셋으로 집약하며 정기 갱신 주기로 발행한다. EDIFACT 형식의 SKDUPD(시각표)·TSDUPD(역) 메시지로 교환되며, 여정 검색기와 유통 시스템에 공급되는 권위 있는 철도 운행시각 데이터 원천이다.

MERITS(Multiple East-West Railways Integrated Timetable Storage)는 유럽 및 일부 비유럽 국가의 수백 개 철도사업자 시각표를 통합하여, 열차 시각표와 연계 버스·선박 서비스, 그리고 좌표·서비스 속성 같은 역 데이터를 함께 담는다. 단일 교환 형식은 EDIFACT로, SKDUPD 메시지는 시각표 데이터를, TSDUPD 메시지는 역·위치 데이터를 전달한다. MERITS는 일반 소비자용 제품이 아니라 철도 회사·데이터 통합사를 위한 인프라로, UIC는 제3자 접근(예: 라이선스형 시각표·역 데이터)을 제공하고 MERITS EDIFACT 파일을 CSV로 변환하는 오픈소스 도구를 제공한다. 통합 시각표 원천으로서 여정 검색을 뒷받침하고 OSDM 같은 유통 표준의 오퍼/가용성 단계에 공급되며, 시각표가 참조하는 주체·지점을 식별하는 회사코드(RICS)·위치코드(CRD/ENEE)를 보완한다.

**Aliases:** `Multiple East-West Railways Integrated Timetable Storage`, `MERITS database`

# Related
- [EDIFACT](/common/standards/edifact.md) — related
- [OSDM](/ground/rail/osdm.md) — related
- [Standard Schedules Message](/air/air-partner/standard-schedules-message.md) — related
- [Availability](/air/air-shop/availability.md) — related
- [RICS Code (Company Code)](/ground/rail/rics-code.md) — related
- [TAP TSI](/ground/rail/tap-tsi.md) — related

# Distinctions
- **MERITS** vs [Standard Schedules Message](/air/air-partner/standard-schedules-message.md) — MERITS is a UIC integrated rail timetable database exchanged via EDIFACT SKDUPD/TSDUPD messages; the Standard Schedules Message (SSIM) is the IATA standard for exchanging airline schedule data. Both convey schedules, but MERITS is the rail-mode integrated timetable store while SSIM is the air-mode schedule message format.
- **MERITS** vs [OSDM](/ground/rail/osdm.md) — MERITS supplies the integrated timetable and station data (the schedule layer); OSDM is the distribution standard for offering, booking and fulfilling rail products. MERITS feeds the schedule/offer input that an OSDM-based sales flow builds offers on top of — data source versus distribution API.

# Citations
[1] UIC — MERITS database
[2] Global Railway Review — UIC gives third party access to MERITS Integrated Data
