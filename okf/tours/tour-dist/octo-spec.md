---
type: Standard
title: OCTO
description: >-
  An open, community-maintained API standard — a shared JSON schema and set of
  endpoints (supplier, products, availability, bookings) — for tours, activities
  and attractions connectivity, which platforms implement to interoperate.
tags:
  - tour-dist
  - active
  - Tours & Activities
timestamp: '2026-06-25T00:00:00Z'
id: octo-spec
vertical: tours
category: tour-dist
conceptType: standard
status: active
abbreviation: OCTO
term_ko: OCTO(개방형 투어·액티비티 연결 표준)
definition_ko: >-
  투어·액티비티·어트랙션 연동을 위한 개방형 커뮤니티 유지보수 API 표준으로, 공급자·상품·가용성·예약 엔드포인트와 공통 JSON 스키마를
  정의하며, 플랫폼들이 이를 구현해 상호 운용한다.
longDef: >-
  OCTO addresses the experiences sector's historical lack of a connectivity
  standard, where every marketplace and reservation system built bespoke APIs.
  Crucially OCTO is the shared vocabulary/schema — not a service that moves
  bookings: it standardizes how products, options, units, availability and
  bookings are expressed so any compliant reseller and reservation system can
  interoperate. It plays the role EDIFACT/NDC and OpenTravel play in air and
  hotel, lowering integration cost and widening instant-confirmation
  distribution.
longDef_ko: >-
  OCTO는 마켓플레이스·예약 시스템마다 맞춤 API를 만들어 온, 익스피리언스 부문의 표준 부재 문제를 다룬다. 중요한 점은 OCTO가
  예약을 처리하는 서비스가 아니라 공유 어휘/스키마라는 것이다. 상품·옵션·유닛·가용성·예약을 표현하는 방식을 표준화해, 준수하는 리셀러와
  예약 시스템이 상호 운용되게 한다. 항공의 EDIFACT/NDC, 호텔의 OpenTravel이 하는 역할로서 연동 비용을 낮추고 즉시확정
  유통을 넓힌다.
aliases:
  - Open Connectivity for Tours Activities & Attractions
  - OCTO Spec
  - octo.travel
relationships:
  - type: related
    targetTerm: Reseller API
  - type: related
    targetTerm: Connectivity Hub
  - type: related
    targetTerm: OpenTravel Alliance
distinctions:
  - targetTerm: Reseller API
    explanation: >-
      A reseller API is any single platform's proprietary connectivity
      interface; OCTO is an open cross-industry specification multiple platforms
      can implement to interoperate.
    explanation_ko: >-
      리셀러 API는 특정 플랫폼 하나의 독자 연동 인터페이스이고, OCTO는 여러 플랫폼이 구현해 상호 운용할 수 있는 개방형 범산업
      사양이다.
  - targetTerm: Connectivity Hub
    explanation: >-
      OCTO is the open schema/vocabulary that systems speak; a connectivity hub
      is a running service that interconnects many operators and resellers. A
      hub may implement OCTO, but OCTO itself moves no bookings.
    explanation_ko: >-
      OCTO는 시스템들이 말하는 개방형 스키마/어휘이고, 커넥티비티 허브는 다수 운영사·리셀러를 상호 연결하는 실행 서비스다. 허브가
      OCTO를 구현할 수 있지만, OCTO 자체는 예약을 처리하지 않는다.
sources:
  - name: OCTo — Open API specification (octo.travel)
    org: OCTO
    version: ''
    section: ''
    url: 'https://octo.travel/'
    tier: association
icon: >-
  <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none"
  stroke-linecap="round" stroke-linejoin="round"><path d="M18 8v8M30 8v8"/><rect
  x="14" y="16" width="20" height="12" rx="3"/><path d="M24 28v6a6 6 0 0 0 6
  6h2"/></svg>
---

> An open, community-maintained API standard — a shared JSON schema and set of endpoints (supplier, products, availability, bookings) — for tours, activities and attractions connectivity, which platforms implement to interoperate.

OCTO addresses the experiences sector's historical lack of a connectivity standard, where every marketplace and reservation system built bespoke APIs. Crucially OCTO is the shared vocabulary/schema — not a service that moves bookings: it standardizes how products, options, units, availability and bookings are expressed so any compliant reseller and reservation system can interoperate. It plays the role EDIFACT/NDC and OpenTravel play in air and hotel, lowering integration cost and widening instant-confirmation distribution.

**한국어 / Korean** — **OCTO(개방형 투어·액티비티 연결 표준)** — 투어·액티비티·어트랙션 연동을 위한 개방형 커뮤니티 유지보수 API 표준으로, 공급자·상품·가용성·예약 엔드포인트와 공통 JSON 스키마를 정의하며, 플랫폼들이 이를 구현해 상호 운용한다.

OCTO는 마켓플레이스·예약 시스템마다 맞춤 API를 만들어 온, 익스피리언스 부문의 표준 부재 문제를 다룬다. 중요한 점은 OCTO가 예약을 처리하는 서비스가 아니라 공유 어휘/스키마라는 것이다. 상품·옵션·유닛·가용성·예약을 표현하는 방식을 표준화해, 준수하는 리셀러와 예약 시스템이 상호 운용되게 한다. 항공의 EDIFACT/NDC, 호텔의 OpenTravel이 하는 역할로서 연동 비용을 낮추고 즉시확정 유통을 넓힌다.

**Aliases:** `Open Connectivity for Tours Activities & Attractions`, `OCTO Spec`, `octo.travel`

# Related
- Reseller API — related
- Connectivity Hub — related
- OpenTravel Alliance — related

# Distinctions
- **OCTO** vs Reseller API — A reseller API is any single platform's proprietary connectivity interface; OCTO is an open cross-industry specification multiple platforms can implement to interoperate.
- **OCTO** vs Connectivity Hub — OCTO is the open schema/vocabulary that systems speak; a connectivity hub is a running service that interconnects many operators and resellers. A hub may implement OCTO, but OCTO itself moves no bookings.

# Citations
[1] [OCTO — OCTo — Open API specification (octo.travel)](https://octo.travel/)
