---
type: Business Term
title: On-Request Booking
description: >-
  A booking model in which the reseller must obtain the operator's manual or
  asynchronous confirmation before the sale becomes final.
tags:
  - tour-dist
  - active
  - Tours & Activities
timestamp: '2026-06-24T00:00:00Z'
id: on-request-booking
vertical: tours
category: tour-dist
conceptType: business-term
status: active
term_ko: 요청형 예약(On-Request Booking)
definition_ko: 판매가 최종 확정되기 전에 리셀러가 운영사의 수동 또는 비동기 확정을 받아야 하는 예약 방식이다.
longDef: >-
  On-request (or request) booking is used when an operator lacks real-time
  connectivity or wants to vet bookings: the traveler submits a request, the
  operator confirms or declines within a stated window, and payment is captured
  or released accordingly. It adds friction and abandonment risk versus instant
  confirmation but lets long-tail and complex products be sold before full API
  integration exists.
longDef_ko: >-
  요청형(request) 예약은 운영사가 실시간 연동이 없거나 예약을 사전 검토하려는 경우에 쓰인다. 여행자가 요청을 보내면 운영사가 정해진
  시간 안에 확정·거절하고, 그에 따라 결제가 청구되거나 해제된다. 즉시확정 대비 마찰과 이탈 위험이 크지만, 완전한 API 연동 이전에도
  롱테일·복잡 상품을 판매할 수 있게 한다.
aliases:
  - Request Booking
  - Freesale on Request
  - Manual Confirmation Booking
relationships:
  - type: contrasts
    targetTerm: Instant Confirmation
  - type: related
    targetTerm: Reseller API
distinctions:
  - targetTerm: Instant Confirmation
    explanation: >-
      On-request booking defers the sale to the operator's manual confirmation;
      instant confirmation finalizes it at purchase against live availability.
    explanation_ko: '요청형 예약은 운영사의 수동 확정으로 판매를 미루고, 즉시 확정은 실시간 가용성을 상대로 구매 시점에 판매를 확정한다.'
sources:
  - name: Rezdy — Request / manual confirmation bookings
    org: Rezdy
    version: ''
    section: ''
    url: 'https://www.rezdy.com/'
    tier: vendor-doc
icon: >-
  <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none"
  stroke-linecap="round" stroke-linejoin="round"><path d="M14 8h20M14 40h20M16
  8c0 9 16 11 16 16S16 31 16 40M32 8c0 9-16 11-16 16"/></svg>
---

> A booking model in which the reseller must obtain the operator's manual or asynchronous confirmation before the sale becomes final.

On-request (or request) booking is used when an operator lacks real-time connectivity or wants to vet bookings: the traveler submits a request, the operator confirms or declines within a stated window, and payment is captured or released accordingly. It adds friction and abandonment risk versus instant confirmation but lets long-tail and complex products be sold before full API integration exists.

**한국어 / Korean** — **요청형 예약(On-Request Booking)** — 판매가 최종 확정되기 전에 리셀러가 운영사의 수동 또는 비동기 확정을 받아야 하는 예약 방식이다.

요청형(request) 예약은 운영사가 실시간 연동이 없거나 예약을 사전 검토하려는 경우에 쓰인다. 여행자가 요청을 보내면 운영사가 정해진 시간 안에 확정·거절하고, 그에 따라 결제가 청구되거나 해제된다. 즉시확정 대비 마찰과 이탈 위험이 크지만, 완전한 API 연동 이전에도 롱테일·복잡 상품을 판매할 수 있게 한다.

**Aliases:** `Request Booking`, `Freesale on Request`, `Manual Confirmation Booking`

# Related
- Instant Confirmation — contrasts
- Reseller API — related

# Distinctions
- **On-Request Booking** vs Instant Confirmation — On-request booking defers the sale to the operator's manual confirmation; instant confirmation finalizes it at purchase against live availability.

# Citations
[1] [Rezdy — Rezdy — Request / manual confirmation bookings](https://www.rezdy.com/)
