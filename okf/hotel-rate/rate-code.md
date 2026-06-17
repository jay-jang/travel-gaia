---
type: Code
title: Rate Code
description: 'A rate code is the short alphanumeric identifier a hotel uses to label and configure a specific set of pricing rules (the rate amounts, applicable room types, date or season ranges, restrictions and any bundled elements) within a PMS, CRS or distribution channel. It is the operational key that ties a stay to a particular Rate Plan when a reservation is created.'
tags:
  - hotel-rate
  - active
timestamp: '2026-06-17T00:00:00Z'
id: rate-code
category: hotel-rate
conceptType: code
status: active
term_ko: Rate Code (요금 코드)
definition_ko: 'Rate Code(요금 코드)는 호텔이 특정 가격 규칙 묶음(요금 금액, 적용 객실 타입, 날짜/시즌 범위, 제약 조건, 패키지 구성요소 등)을 PMS·CRS·유통 채널 안에서 식별하고 설정하기 위해 사용하는 짧은 영숫자 식별자다. 예약 생성 시 해당 투숙을 특정 Rate Plan에 연결하는 운영상의 키 역할을 한다.'
longDef: 'In property systems such as Oracle OPERA, rate codes sit at the core of the reservation and yield-management process: each rate code defines amounts (often differentiated by day-of-week, occupancy or per-person), the room types it applies to, valid date ranges or rate seasons, and may attach package elements that give the guest entitlements (breakfast, parking, etc.). When a rate code is distributed electronically it surfaces as the RatePlanCode value in OpenTravel (OTA) messages exchanged between PMS, CRS and channels. Special-purpose rate codes exist for internal needs (house-use or zero rate codes for dummy/paymaster/group-master rooms) and for derived pricing (virtual or follow rates whose amounts are computed from another code). Rate code is the implementation-level identifier, whereas Rate Plan is the conceptual product it represents.'
longDef_ko: 'Oracle OPERA 같은 PMS에서 Rate Code는 예약 및 수익관리 프로세스의 핵심이다. 각 Rate Code는 금액(요일·인원·1인당 단위로 차등화되기도 함), 적용 객실 타입, 유효 날짜 범위 또는 rate season, 그리고 조식·주차 등 패키지 구성요소를 정의한다. 전자적으로 유통될 때는 OpenTravel(OTA) 메시지의 RatePlanCode 값으로 노출된다. 내부용 코드(더미·페이마스터·그룹마스터 객실용 house-use/zero rate code)나 다른 코드에서 금액을 파생시키는 virtual/follow rate 같은 특수 목적 코드도 존재한다. Rate Code는 구현 수준의 식별자이고, Rate Plan은 그것이 나타내는 개념적 상품이다.'
aliases:
  - Rate Plan Code
  - Rate ID
providerTerms:
  - provider: Oracle OPERA
    term: Rate Code
    context: Rate codes define the prices for each room type over a date range or rate season and form the core of OPERA's yield management and reservation processes.
    context_ko: OPERA에서 Rate Code는 날짜 범위 또는 rate season별 객실 타입 가격을 정의하며 수익관리·예약 프로세스의 핵심을 이룬다.
    relationship: same
  - provider: OpenTravel Alliance
    term: RatePlanCode
    context: 'The RatePlanCode attribute in OTA hotel messages carries the rate code value when rates are distributed between PMS, CRS and channels.'
    context_ko: OTA 호텔 메시지의 RatePlanCode 속성이 PMS·CRS·채널 간 요금 유통 시 rate code 값을 전달한다.
    relationship: same
relationships:
  - type: child
    targetTerm: Rate Plan
  - type: related
    targetTerm: Room Type
  - type: related
    targetTerm: BAR
  - type: related
    targetTerm: PMS
  - type: related
    targetTerm: CRS
distinctions:
  - targetTerm: Rate Plan
    explanation: 'Rate Plan is the conceptual commercial product (e.g. Best Available Rate, room-only); Rate Code is the system identifier that implements and labels that product so it can be loaded, sold and exchanged electronically.'
    explanation_ko: 'Rate Plan은 개념적 상품(예: BAR, 객실 단독)이고, Rate Code는 그 상품을 시스템에 적재·판매·전자교환할 수 있도록 구현하고 라벨링하는 식별자다.'
sources:
  - org: Oracle
    name: OPERA Cloud / OPERA 5 Help — Rate Codes
    version: ''
    section: Rate Management
    url: 'https://docs.oracle.com/cd/E98457_01/opera_5_6_core_help/rate_codes.htm'
  - org: OpenTravel Alliance
    name: OpenTravel Hotel Specification (RatePlanCode)
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="12" width="36" height="24" rx="3"/><path d="M14 22h8M14 28h12"/><circle cx="32" cy="24" r="3"/><path d="M32 21v-3M32 30v-2"/></svg>
---

> A rate code is the short alphanumeric identifier a hotel uses to label and configure a specific set of pricing rules (the rate amounts, applicable room types, date or season ranges, restrictions and any bundled elements) within a PMS, CRS or distribution channel. It is the operational key that ties a stay to a particular Rate Plan when a reservation is created.

In property systems such as Oracle OPERA, rate codes sit at the core of the reservation and yield-management process: each rate code defines amounts (often differentiated by day-of-week, occupancy or per-person), the room types it applies to, valid date ranges or rate seasons, and may attach package elements that give the guest entitlements (breakfast, parking, etc.). When a rate code is distributed electronically it surfaces as the RatePlanCode value in OpenTravel (OTA) messages exchanged between PMS, CRS and channels. Special-purpose rate codes exist for internal needs (house-use or zero rate codes for dummy/paymaster/group-master rooms) and for derived pricing (virtual or follow rates whose amounts are computed from another code). Rate code is the implementation-level identifier, whereas Rate Plan is the conceptual product it represents.

**한국어 / Korean** — **Rate Code (요금 코드)** — Rate Code(요금 코드)는 호텔이 특정 가격 규칙 묶음(요금 금액, 적용 객실 타입, 날짜/시즌 범위, 제약 조건, 패키지 구성요소 등)을 PMS·CRS·유통 채널 안에서 식별하고 설정하기 위해 사용하는 짧은 영숫자 식별자다. 예약 생성 시 해당 투숙을 특정 Rate Plan에 연결하는 운영상의 키 역할을 한다.

Oracle OPERA 같은 PMS에서 Rate Code는 예약 및 수익관리 프로세스의 핵심이다. 각 Rate Code는 금액(요일·인원·1인당 단위로 차등화되기도 함), 적용 객실 타입, 유효 날짜 범위 또는 rate season, 그리고 조식·주차 등 패키지 구성요소를 정의한다. 전자적으로 유통될 때는 OpenTravel(OTA) 메시지의 RatePlanCode 값으로 노출된다. 내부용 코드(더미·페이마스터·그룹마스터 객실용 house-use/zero rate code)나 다른 코드에서 금액을 파생시키는 virtual/follow rate 같은 특수 목적 코드도 존재한다. Rate Code는 구현 수준의 식별자이고, Rate Plan은 그것이 나타내는 개념적 상품이다.

**Aliases:** `Rate Plan Code`, `Rate ID`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Oracle OPERA | `Rate Code` | same | Rate codes define the prices for each room type over a date range or rate season and form the core of OPERA's yield management and reservation processes. |
| OpenTravel Alliance | `RatePlanCode` | same | The RatePlanCode attribute in OTA hotel messages carries the rate code value when rates are distributed between PMS, CRS and channels. |

# Related
- [Rate Plan](/hotel-rate/rate-plan.md) — child
- [Room Type](/hotel-rate/room-type.md) — related
- [BAR](/hotel-rate/bar.md) — related
- [PMS](/hotel-dist/pms.md) — related
- [CRS](/hotel-dist/crs.md) — related

# Distinctions
- **Rate Code** vs [Rate Plan](/hotel-rate/rate-plan.md) — Rate Plan is the conceptual commercial product (e.g. Best Available Rate, room-only); Rate Code is the system identifier that implements and labels that product so it can be loaded, sold and exchanged electronically.

# Citations
[1] [Oracle — OPERA Cloud / OPERA 5 Help — Rate Codes — Rate Management](https://docs.oracle.com/cd/E98457_01/opera_5_6_core_help/rate_codes.htm)
[2] OpenTravel Alliance — OpenTravel Hotel Specification (RatePlanCode)
