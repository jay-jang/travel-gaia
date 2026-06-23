---
type: Standard
title: Standard Schedules Information Manual (SSIM)
description: 'The Standard Schedules Information Manual (SSIM) is the IATA manual and data-format standard defining how airlines exchange flight-schedule information — flight numbers, operating periods and frequencies, times, aircraft types, terminals, time zones and codeshare data. It is the authoritative reference underpinning the SSM and ASM update messages and the SSIM batch file used across the industry.'
tags:
  - air-ops
  - active
  - IATA
timestamp: '2026-06-18T00:00:00Z'
id: standard-schedules-information-manual-ssim
vertical: air
category: air-ops
conceptType: standard
status: active
abbreviation: SSIM
term_ko: Standard Schedules Information Manual (SSIM / 표준 스케줄 정보 매뉴얼)
definition_ko: 'Standard Schedules Information Manual(SSIM)은 항공사가 flight 스케줄 정보를 어떻게 교환하는지를 정의하는 IATA 매뉴얼이자 데이터 포맷 표준이다 — 편명, 운항 기간·빈도, 시각, aircraft type, terminal, time zone, codeshare 데이터 등. SSM·ASM 갱신 메시지와 업계 전반에서 쓰이는 SSIM batch 파일의 권위 있는 기준이다.'
longDef: 'SSIM specifies both the batch file format (the SSIM record types used to transmit an entire season''s schedule, e.g. flight-leg and segment records) and the message procedures for incremental schedule changes. The two best-known message types it defines are the Standard Schedules Message (SSM), used to create, change and cancel schedules in a structured way, and the Ad-hoc Schedule Message (ASM), used for single-flight adjustments. Recipients include GDSs, OAG and other schedule aggregators, airport coordinators, codeshare and interline partners, and reservation/inventory systems that build availability on top of the schedule. SSIM also standardizes elements such as service type codes, frequency-rate designators, day-of-operation patterns and UTC/local time handling so that a published schedule is interpreted identically by every recipient. It complements, and is distributed alongside, IATA''s slot and scheduling standards (Worldwide Airport Slot Guidelines).'
longDef_ko: 'SSIM은 batch 파일 포맷(한 시즌 전체 스케줄을 전송하는 SSIM 레코드 타입들, 예: flight-leg 및 segment 레코드)과 점진적 스케줄 변경을 위한 메시지 절차를 모두 규정한다. SSIM이 정의하는 가장 잘 알려진 두 메시지 타입은 구조화된 방식으로 스케줄을 생성·변경·취소하는 Standard Schedules Message(SSM)와 단일 flight 조정에 쓰는 Ad-hoc Schedule Message(ASM)이다. 수신자에는 GDS, OAG와 기타 스케줄 aggregator, airport coordinator, codeshare·interline 파트너, 그리고 스케줄 위에 availability를 구축하는 예약·inventory 시스템이 포함된다. SSIM은 service type 코드, 빈도율 지정자, 운항 요일 패턴, UTC/현지 시각 처리 같은 요소도 표준화하여, 공표된 스케줄이 모든 수신자에게 동일하게 해석되게 한다. IATA의 slot·스케줄링 표준(Worldwide Airport Slot Guidelines)을 보완하며 함께 배포된다.'
standardBody: IATA
aliases:
  - SSIM
  - Standard Schedules Information Manual
  - SSIM file
providerTerms:
  - provider: OAG
    term: SSIM / SSM & ASM feeds
    context: Airlines transfer schedule data to OAG using SSIM-based file and SSM/ASM update formats.
    context_ko: 항공사는 SSIM 기반 파일과 SSM/ASM 갱신 포맷으로 OAG에 스케줄 데이터를 전송한다.
    relationship: related
  - provider: Cirium
    term: SSIM-format schedule feeds
    context: Cirium ingests and distributes airline schedules in IATA SSIM fixed-width format and via SSM/ASM update messages.
    context_ko: Cirium은 IATA SSIM 고정폭 포맷과 SSM/ASM 업데이트 메시지로 항공사 schedule을 수집·배포한다.
    relationship: same
  - provider: IATA
    term: SSM / ASM messages
    context: SSM (Standard Schedules Message) transmits permanent schedule changes and ASM (Ad Hoc Schedules Message) transmits single-day deviations under the SSIM standard.
    context_ko: 'SSM(Standard Schedules Message)은 영구 schedule 변경을, ASM(Ad Hoc Schedules Message)은 단일일 편차를 SSIM 표준 하에 전송한다.'
    relationship: narrower
relationships:
  - type: child
    targetTerm: Standard Schedules Message
  - type: related
    targetTerm: Schedule Change
  - type: related
    targetTerm: Aircraft Type Code
  - type: related
    targetTerm: Flight Number
  - type: related
    targetTerm: Slot
  - type: related
    targetTerm: Availability Status Message (AVS)
distinctions:
  - targetTerm: Standard Schedules Message
    explanation: 'The SSM is one message type defined within the SSIM; the SSIM is the full manual and file-format standard that defines the SSM, the ASM, the batch SSIM file and all the supporting code conventions.'
    explanation_ko: 'SSM은 SSIM 안에서 정의된 하나의 메시지 타입이고, SSIM은 SSM·ASM·batch SSIM 파일과 그 모든 보조 코드 관례를 정의하는 전체 매뉴얼이자 파일 포맷 표준이다.'
  - targetTerm: Availability Status Message (AVS)
    explanation: 'SSIM standards govern the schedule (which flights operate, when, with what aircraft); AVS messages govern the bookable seat status on those flights. Schedule data is the layer beneath availability.'
    explanation_ko: 'SSIM 표준은 스케줄(어떤 flight가 언제 어떤 aircraft로 운항하는지)을 규율하고, AVS 메시지는 그 flight들의 판매 가능 좌석 상태를 규율한다. 스케줄 데이터는 availability 아래 계층이다.'
sources:
  - org: IATA
    name: Standard Schedules Information Manual (SSIM)
    version: 36th Edition (2026)
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/standard-schedules-information/'
    tier: association
    verifyQuote: 'Significant Changes and Amendments to the 36th edition (2026) of the Standard Schedules Information Manual (SSIM) include:'
    verified: true
  - org: OAG
    name: Data Transfer to OAG using SSM & ASM Updating
    version: ''
    section: ''
    url: 'https://www.oag.com/hubfs/Inbound-Services/Data-Transfer-to-OAG-using-SSM-and-ASM-Updating.pdf'
    tier: vendor-doc
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="7" width="30" height="34" rx="2"/><line x1="14" y1="15" x2="34" y2="15"/><line x1="14" y1="22" x2="28" y2="22"/><line x1="14" y1="29" x2="31" y2="29"/><path d="M30 35l3-7 3 7"/><path d="M31.5 32h3"/></svg>
---

> The Standard Schedules Information Manual (SSIM) is the IATA manual and data-format standard defining how airlines exchange flight-schedule information — flight numbers, operating periods and frequencies, times, aircraft types, terminals, time zones and codeshare data. It is the authoritative reference underpinning the SSM and ASM update messages and the SSIM batch file used across the industry.

SSIM specifies both the batch file format (the SSIM record types used to transmit an entire season's schedule, e.g. flight-leg and segment records) and the message procedures for incremental schedule changes. The two best-known message types it defines are the Standard Schedules Message (SSM), used to create, change and cancel schedules in a structured way, and the Ad-hoc Schedule Message (ASM), used for single-flight adjustments. Recipients include GDSs, OAG and other schedule aggregators, airport coordinators, codeshare and interline partners, and reservation/inventory systems that build availability on top of the schedule. SSIM also standardizes elements such as service type codes, frequency-rate designators, day-of-operation patterns and UTC/local time handling so that a published schedule is interpreted identically by every recipient. It complements, and is distributed alongside, IATA's slot and scheduling standards (Worldwide Airport Slot Guidelines).

**한국어 / Korean** — **Standard Schedules Information Manual (SSIM / 표준 스케줄 정보 매뉴얼)** — Standard Schedules Information Manual(SSIM)은 항공사가 flight 스케줄 정보를 어떻게 교환하는지를 정의하는 IATA 매뉴얼이자 데이터 포맷 표준이다 — 편명, 운항 기간·빈도, 시각, aircraft type, terminal, time zone, codeshare 데이터 등. SSM·ASM 갱신 메시지와 업계 전반에서 쓰이는 SSIM batch 파일의 권위 있는 기준이다.

SSIM은 batch 파일 포맷(한 시즌 전체 스케줄을 전송하는 SSIM 레코드 타입들, 예: flight-leg 및 segment 레코드)과 점진적 스케줄 변경을 위한 메시지 절차를 모두 규정한다. SSIM이 정의하는 가장 잘 알려진 두 메시지 타입은 구조화된 방식으로 스케줄을 생성·변경·취소하는 Standard Schedules Message(SSM)와 단일 flight 조정에 쓰는 Ad-hoc Schedule Message(ASM)이다. 수신자에는 GDS, OAG와 기타 스케줄 aggregator, airport coordinator, codeshare·interline 파트너, 그리고 스케줄 위에 availability를 구축하는 예약·inventory 시스템이 포함된다. SSIM은 service type 코드, 빈도율 지정자, 운항 요일 패턴, UTC/현지 시각 처리 같은 요소도 표준화하여, 공표된 스케줄이 모든 수신자에게 동일하게 해석되게 한다. IATA의 slot·스케줄링 표준(Worldwide Airport Slot Guidelines)을 보완하며 함께 배포된다.

**Aliases:** `SSIM`, `Standard Schedules Information Manual`, `SSIM file`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| OAG | `SSIM / SSM & ASM feeds` | related | Airlines transfer schedule data to OAG using SSIM-based file and SSM/ASM update formats. |
| Cirium | `SSIM-format schedule feeds` | same | Cirium ingests and distributes airline schedules in IATA SSIM fixed-width format and via SSM/ASM update messages. |
| IATA | `SSM / ASM messages` | narrower | SSM (Standard Schedules Message) transmits permanent schedule changes and ASM (Ad Hoc Schedules Message) transmits single-day deviations under the SSIM standard. |

# Related
- [Standard Schedules Message](/air/air-partner/standard-schedules-message.md) — child
- [Schedule Change](/air/air-partner/schedule-change.md) — related
- [Aircraft Type Code](/common/codes/aircraft-type-code.md) — related
- [Flight Number](/common/codes/flight-number.md) — related
- [Slot](/air/air-partner/slot.md) — related
- [Availability Status Message (AVS)](/air/air-ops/availability-status-message-avs.md) — related

# Distinctions
- **Standard Schedules Information Manual (SSIM)** vs [Standard Schedules Message](/air/air-partner/standard-schedules-message.md) — The SSM is one message type defined within the SSIM; the SSIM is the full manual and file-format standard that defines the SSM, the ASM, the batch SSIM file and all the supporting code conventions.
- **Standard Schedules Information Manual (SSIM)** vs [Availability Status Message (AVS)](/air/air-ops/availability-status-message-avs.md) — SSIM standards govern the schedule (which flights operate, when, with what aircraft); AVS messages govern the bookable seat status on those flights. Schedule data is the layer beneath availability.

# Citations
[1] [IATA — Standard Schedules Information Manual (SSIM) — 36th Edition (2026)](https://www.iata.org/en/publications/manuals/standard-schedules-information/)
[2] [OAG — Data Transfer to OAG using SSM & ASM Updating](https://www.oag.com/hubfs/Inbound-Services/Data-Transfer-to-OAG-using-SSM-and-ASM-Updating.pdf)
