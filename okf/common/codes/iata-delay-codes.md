---
type: Code
title: IATA Delay Codes
description: 'The standardized two-character delay-reason codes defined in IATA''s Airport Handling Manual chapter AHM 730, used to record and report the primary cause of a flight delay. They are the de-facto global standard for coding on-time-performance data and the delay fields of aircraft movement (MVT) messages.'
tags:
  - codes
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: iata-delay-codes
vertical: common
category: codes
conceptType: code
status: active
term_ko: IATA 지연 코드 (IATA Delay Codes)
definition_ko: 'IATA의 공항 핸들링 매뉴얼(Airport Handling Manual) AHM 730에 정의된 표준 2자리 지연 사유 코드로, 항공편 지연의 주요 원인을 기록·보고하는 데 사용된다. 정시운항(OTP) 데이터 코딩과 항공기 운항(MVT) 메시지의 지연 필드에 대한 사실상의 글로벌 표준이다.'
longDef: 'AHM 730 defines roughly 100 numeric codes (00-99) grouped into categories such as passenger and baggage handling, cargo and mail, aircraft and ramp handling, technical/aircraft equipment, damage/EDP failures, flight operations and crewing, weather, airport/governmental authorities (including ATFM restrictions), reactionary (knock-on) delays and miscellaneous causes. Two-letter alphabetic equivalents exist, but movement-message standards (such as AHM 780 MVT) specify the numeric form. By giving every airline and ground handler a common vocabulary, the codes make delay statistics, punctuality reporting and root-cause analysis comparable across carriers and airports.'
longDef_ko: 'AHM 730은 약 100개의 숫자 코드(00-99)를 정의하며, 이는 여객·수하물 처리, 화물·우편, 항공기·램프 처리, 기술/기재 결함, 손상·전산(EDP) 장애, 운항·승무, 기상, 공항/정부 당국(ATFM 제한 포함), 연쇄(reactionary) 지연, 기타 사유 등의 범주로 분류된다. 2자리 알파벳 등가 코드도 존재하지만 운항 메시지 표준(예: AHM 780 MVT)은 숫자 형식을 규정한다. 모든 항공사와 지상조업사에 공통 어휘를 제공함으로써, 이 코드는 지연 통계·정시성 보고·근본원인 분석을 항공사와 공항 전반에 걸쳐 비교 가능하게 만든다.'
standardBody: IATA
aliases:
  - Standard IATA Delay Codes
  - AHM 730 Delay Codes
  - Delay Codes
providerTerms:
  - provider: IATA (AHM 731)
    term: Sub-delay codes
    context: AHM 731 extension adding a granular sub-code beneath the AHM 730 two-character delay code to capture finer root-cause detail.
    context_ko: 'AHM 730의 2자리 지연 코드 아래에 세분화된 하위 코드를 더하는 AHM 731 확장으로, 보다 정밀한 근본 원인을 기록한다.'
    relationship: narrower
relationships:
  - type: related
    targetTerm: IROPS
  - type: related
    targetTerm: Schedule Change
  - type: related
    targetTerm: Flight Number
distinctions:
  - targetTerm: IROPS
    explanation: 'IROPS describes the operational situation of irregular operations (delays, cancellations, diversions); IATA delay codes are the standardized two-character labels that classify why a specific delay occurred within that situation.'
    explanation_ko: 'IROPS는 비정상 운항(지연·결항·회항)이라는 운영 상황 자체를 가리키는 반면, IATA 지연 코드는 그 상황 안에서 특정 지연이 왜 발생했는지를 분류하는 표준 2자리 라벨이다.'
sources:
  - org: IATA
    name: 'Airport Handling Manual (AHM), Standard IATA Delay Codes'
    version: ''
    section: AHM 730
    url: 'https://www.iata.org/en/publications/store/airport-handling-manual/'
  - org: Wikipedia
    name: IATA delay codes
    version: ''
    section: ''
    url: 'https://en.wikipedia.org/wiki/IATA_delay_codes'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="24" r="15"/><path d="M24 15v9l6 4"/><path d="M37 11l3-3M11 11L8 8"/></svg>
---

> The standardized two-character delay-reason codes defined in IATA's Airport Handling Manual chapter AHM 730, used to record and report the primary cause of a flight delay. They are the de-facto global standard for coding on-time-performance data and the delay fields of aircraft movement (MVT) messages.

AHM 730 defines roughly 100 numeric codes (00-99) grouped into categories such as passenger and baggage handling, cargo and mail, aircraft and ramp handling, technical/aircraft equipment, damage/EDP failures, flight operations and crewing, weather, airport/governmental authorities (including ATFM restrictions), reactionary (knock-on) delays and miscellaneous causes. Two-letter alphabetic equivalents exist, but movement-message standards (such as AHM 780 MVT) specify the numeric form. By giving every airline and ground handler a common vocabulary, the codes make delay statistics, punctuality reporting and root-cause analysis comparable across carriers and airports.

**한국어 / Korean** — **IATA 지연 코드 (IATA Delay Codes)** — IATA의 공항 핸들링 매뉴얼(Airport Handling Manual) AHM 730에 정의된 표준 2자리 지연 사유 코드로, 항공편 지연의 주요 원인을 기록·보고하는 데 사용된다. 정시운항(OTP) 데이터 코딩과 항공기 운항(MVT) 메시지의 지연 필드에 대한 사실상의 글로벌 표준이다.

AHM 730은 약 100개의 숫자 코드(00-99)를 정의하며, 이는 여객·수하물 처리, 화물·우편, 항공기·램프 처리, 기술/기재 결함, 손상·전산(EDP) 장애, 운항·승무, 기상, 공항/정부 당국(ATFM 제한 포함), 연쇄(reactionary) 지연, 기타 사유 등의 범주로 분류된다. 2자리 알파벳 등가 코드도 존재하지만 운항 메시지 표준(예: AHM 780 MVT)은 숫자 형식을 규정한다. 모든 항공사와 지상조업사에 공통 어휘를 제공함으로써, 이 코드는 지연 통계·정시성 보고·근본원인 분석을 항공사와 공항 전반에 걸쳐 비교 가능하게 만든다.

**Aliases:** `Standard IATA Delay Codes`, `AHM 730 Delay Codes`, `Delay Codes`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| IATA (AHM 731) | `Sub-delay codes` | narrower | AHM 731 extension adding a granular sub-code beneath the AHM 730 two-character delay code to capture finer root-cause detail. |

# Related
- [IROPS](/air/air-partner/irops.md) — related
- [Schedule Change](/air/air-partner/schedule-change.md) — related
- [Flight Number](/common/codes/flight-number.md) — related

# Distinctions
- **IATA Delay Codes** vs [IROPS](/air/air-partner/irops.md) — IROPS describes the operational situation of irregular operations (delays, cancellations, diversions); IATA delay codes are the standardized two-character labels that classify why a specific delay occurred within that situation.

# Citations
[1] [IATA — Airport Handling Manual (AHM), Standard IATA Delay Codes — AHM 730](https://www.iata.org/en/publications/store/airport-handling-manual/)
[2] [Wikipedia — IATA delay codes](https://en.wikipedia.org/wiki/IATA_delay_codes)
