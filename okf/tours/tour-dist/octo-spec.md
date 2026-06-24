---
type: Standard
title: OCTO
description: >-
  An open, community-maintained API specification for tours, activities and
  attractions connectivity, defining a common model for products, options,
  availability and bookings.
tags:
  - tour-dist
  - active
  - Tours & Activities
timestamp: '2026-06-24T00:00:00Z'
id: octo-spec
vertical: tours
category: tour-dist
conceptType: standard
status: active
abbreviation: OCTO
term_ko: OCTO(개방형 관광 연결 표준)
definition_ko: '투어·액티비티·어트랙션 연동을 위한 개방형 커뮤니티 유지보수 API 사양으로, 상품·옵션·가용성·예약에 대한 공통 모델을 정의한다.'
longDef: >-
  OCTO (Open Connectivity for Tourism Operators) addresses the experiences
  sector's historical lack of a connectivity standard, where each marketplace
  and reservation system built bespoke APIs. By standardizing
  product/option/unit/availability/booking endpoints, OCTO aims to cut
  integration cost and make instant-confirmation inventory more widely
  distributable — the role EDIFACT/NDC and OpenTravel play in air and hotel.
longDef_ko: >-
  OCTO(Open Connectivity for Tourism Operators)는 마켓플레이스·예약 시스템마다 맞춤 API를 만들어 온,
  익스피리언스 부문의 표준 부재 문제를 다룬다. 상품/옵션/유닛/가용성/예약 엔드포인트를 표준화해 연동 비용을 낮추고 즉시확정 재고의 유통성을
  넓히는 것을 목표로 하며, 이는 항공의 EDIFACT/NDC, 호텔의 OpenTravel이 하는 역할에 해당한다.
aliases:
  - Open Connectivity for Tourism Operators
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
sources:
  - name: OCTo — Open API specification
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

> An open, community-maintained API specification for tours, activities and attractions connectivity, defining a common model for products, options, availability and bookings.

OCTO (Open Connectivity for Tourism Operators) addresses the experiences sector's historical lack of a connectivity standard, where each marketplace and reservation system built bespoke APIs. By standardizing product/option/unit/availability/booking endpoints, OCTO aims to cut integration cost and make instant-confirmation inventory more widely distributable — the role EDIFACT/NDC and OpenTravel play in air and hotel.

**한국어 / Korean** — **OCTO(개방형 관광 연결 표준)** — 투어·액티비티·어트랙션 연동을 위한 개방형 커뮤니티 유지보수 API 사양으로, 상품·옵션·가용성·예약에 대한 공통 모델을 정의한다.

OCTO(Open Connectivity for Tourism Operators)는 마켓플레이스·예약 시스템마다 맞춤 API를 만들어 온, 익스피리언스 부문의 표준 부재 문제를 다룬다. 상품/옵션/유닛/가용성/예약 엔드포인트를 표준화해 연동 비용을 낮추고 즉시확정 재고의 유통성을 넓히는 것을 목표로 하며, 이는 항공의 EDIFACT/NDC, 호텔의 OpenTravel이 하는 역할에 해당한다.

**Aliases:** `Open Connectivity for Tourism Operators`, `OCTO Spec`, `octo.travel`

# Related
- Reseller API — related
- Connectivity Hub — related
- OpenTravel Alliance — related

# Distinctions
- **OCTO** vs Reseller API — A reseller API is any single platform's proprietary connectivity interface; OCTO is an open cross-industry specification multiple platforms can implement to interoperate.

# Citations
[1] [OCTO — OCTo — Open API specification](https://octo.travel/)
