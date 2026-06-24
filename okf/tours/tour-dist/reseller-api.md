---
type: Standard
title: Reseller API
description: >-
  The API through which a marketplace or reseller queries live availability and
  creates bookings against an operator's reservation system in real time.
tags:
  - tour-dist
  - active
  - Tours & Activities
timestamp: '2026-06-24T00:00:00Z'
id: reseller-api
vertical: tours
category: tour-dist
conceptType: standard
status: active
term_ko: 리셀러 API(Reseller API)
definition_ko: 마켓플레이스·리셀러가 운영사 예약 시스템을 상대로 실시간 가용성을 조회하고 예약을 생성하는 데 사용하는 API다.
longDef: >-
  A reseller/booking API typically exposes product catalog, availability per
  timeslot, pricing, booking create/cancel, and redemption/ticket retrieval.
  Because the sector lacks a single dominant standard, most connectivity uses
  proprietary APIs (e.g. the Viator and GetYourGuide supplier APIs) plus
  emerging efforts toward common models; OpenTravel has published messages
  relevant to tour/activity exchange. API quality determines whether inventory
  sells with instant confirmation and mobile tickets.
longDef_ko: >-
  리셀러/예약 API는 보통 상품 카탈로그, 타임슬롯별 가용성, 가격, 예약 생성/취소, 사용처리/티켓 조회를 노출한다. 업계에 단일 지배
  표준이 없어 대부분의 연동이 독자 API(예: Viator·GetYourGuide 공급자 API)와 공통 모델을 향한 초기 시도들을 함께
  사용한다. OpenTravel은 투어/액티비티 교환에 관련된 메시지를 발행한 바 있다. API 품질이 즉시확정·모바일 티켓 판매 가능 여부를
  좌우한다.
aliases:
  - Booking API (Activities)
  - Connectivity API
  - Distribution API (Activities)
relationships:
  - type: related
    targetTerm: Reservation Technology
  - type: related
    targetTerm: Instant Confirmation
  - type: related
    targetTerm: Connectivity Hub
sources:
  - name: GetYourGuide — Supplier API & connectivity
    org: GetYourGuide
    version: ''
    section: ''
    url: 'https://supplier.getyourguide.support/'
    tier: vendor-doc
  - name: OpenTravel Specifications
    org: OpenTravel Alliance
    version: ''
    section: ''
    url: 'https://opentravel.org/download-specs/'
    tier: association
icon: >-
  <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none"
  stroke-linecap="round" stroke-linejoin="round"><path d="M18 16 8 24l10 8M30
  16l10 8-10 8"/><line x1="26" y1="12" x2="22" y2="36"/></svg>
---

> The API through which a marketplace or reseller queries live availability and creates bookings against an operator's reservation system in real time.

A reseller/booking API typically exposes product catalog, availability per timeslot, pricing, booking create/cancel, and redemption/ticket retrieval. Because the sector lacks a single dominant standard, most connectivity uses proprietary APIs (e.g. the Viator and GetYourGuide supplier APIs) plus emerging efforts toward common models; OpenTravel has published messages relevant to tour/activity exchange. API quality determines whether inventory sells with instant confirmation and mobile tickets.

**한국어 / Korean** — **리셀러 API(Reseller API)** — 마켓플레이스·리셀러가 운영사 예약 시스템을 상대로 실시간 가용성을 조회하고 예약을 생성하는 데 사용하는 API다.

리셀러/예약 API는 보통 상품 카탈로그, 타임슬롯별 가용성, 가격, 예약 생성/취소, 사용처리/티켓 조회를 노출한다. 업계에 단일 지배 표준이 없어 대부분의 연동이 독자 API(예: Viator·GetYourGuide 공급자 API)와 공통 모델을 향한 초기 시도들을 함께 사용한다. OpenTravel은 투어/액티비티 교환에 관련된 메시지를 발행한 바 있다. API 품질이 즉시확정·모바일 티켓 판매 가능 여부를 좌우한다.

**Aliases:** `Booking API (Activities)`, `Connectivity API`, `Distribution API (Activities)`

# Related
- Reservation Technology — related
- Instant Confirmation — related
- Connectivity Hub — related

# Citations
[1] [GetYourGuide — GetYourGuide — Supplier API & connectivity](https://supplier.getyourguide.support/)
[2] [OpenTravel Alliance — OpenTravel Specifications](https://opentravel.org/download-specs/)
