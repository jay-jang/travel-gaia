---
type: Process
title: Redemption
description: >-
  The point-of-service act of validating and consuming a voucher or mobile
  ticket — scanning the code at the gate or meeting point — that turns a booking
  into delivered service.
tags:
  - tour-ops
  - active
  - Tours & Activities
timestamp: '2026-06-25T00:00:00Z'
id: redemption
vertical: tours
category: tour-ops
conceptType: process
status: active
term_ko: 사용처리·리뎀션(Redemption)
definition_ko: '게이트나 미팅 포인트에서 바우처·모바일 티켓을 스캔해 검증·소비하는 현장 행위로, 예약을 실제 제공된 서비스로 전환한다.'
longDef: >-
  Redemption is where distribution meets fulfilment: the reseller-issued code is
  validated against the operator's access-control/redemption system, marked
  single-use (with partial redemption for passes and combos), and the event
  reconciles back to settlement — only redeemed bookings, net of no-shows, drive
  the operator payout. Reliable redemption is the operational payoff of API
  connectivity and mobile ticketing.
longDef_ko: >-
  사용처리는 유통과 이행이 만나는 지점이다. 리셀러가 발급한 코드가 운영사의 출입통제·사용처리 시스템에서 검증되고 1회용으로
  표시되며(패스·콤보는 부분 사용처리), 그 이벤트는 정산으로 환류된다 — 노쇼를 제한 실제 사용처리된 예약만이 운영사 정산금을 발생시킨다.
  신뢰할 수 있는 사용처리는 API 연동·모바일 티켓팅의 운영적 결실이다.
aliases:
  - Ticket Redemption
  - Scan-in
  - Validation
  - Check-in (Activities)
relationships:
  - type: related
    targetTerm: Mobile Ticket
  - type: related
    targetTerm: Voucher
  - type: related
    targetTerm: Manifest
  - type: related
    targetTerm: Operator Payout
distinctions:
  - targetTerm: Voucher
    explanation: >-
      A voucher is the credential (proof of booking); redemption is the act of
      validating and consuming that credential at the point of service.
    explanation_ko: '바우처는 자격증명(예약 증빙)이고, 사용처리는 현장에서 그 자격증명을 검증·소비하는 행위다.'
sources:
  - name: Ventrata — Redemption & access control
    org: Ventrata
    version: ''
    section: ''
    url: 'https://ventrata.com/'
    tier: vendor-doc
  - name: Bokun — Redeeming bookings
    org: Bokun (Tripadvisor)
    version: ''
    section: ''
    url: 'https://www.bokun.io/'
    tier: vendor-doc
icon: >-
  <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none"
  stroke-linecap="round" stroke-linejoin="round"><path d="M10 16v-4a2 2 0 0 1
  2-2h4M32 10h4a2 2 0 0 1 2 2v4M38 32v4a2 2 0 0 1-2 2h-4M16 38h-4a2 2 0 0
  1-2-2v-4"/><line x1="10" y1="24" x2="38" y2="24"/></svg>
---

> The point-of-service act of validating and consuming a voucher or mobile ticket — scanning the code at the gate or meeting point — that turns a booking into delivered service.

Redemption is where distribution meets fulfilment: the reseller-issued code is validated against the operator's access-control/redemption system, marked single-use (with partial redemption for passes and combos), and the event reconciles back to settlement — only redeemed bookings, net of no-shows, drive the operator payout. Reliable redemption is the operational payoff of API connectivity and mobile ticketing.

**한국어 / Korean** — **사용처리·리뎀션(Redemption)** — 게이트나 미팅 포인트에서 바우처·모바일 티켓을 스캔해 검증·소비하는 현장 행위로, 예약을 실제 제공된 서비스로 전환한다.

사용처리는 유통과 이행이 만나는 지점이다. 리셀러가 발급한 코드가 운영사의 출입통제·사용처리 시스템에서 검증되고 1회용으로 표시되며(패스·콤보는 부분 사용처리), 그 이벤트는 정산으로 환류된다 — 노쇼를 제한 실제 사용처리된 예약만이 운영사 정산금을 발생시킨다. 신뢰할 수 있는 사용처리는 API 연동·모바일 티켓팅의 운영적 결실이다.

**Aliases:** `Ticket Redemption`, `Scan-in`, `Validation`, `Check-in (Activities)`

# Related
- Mobile Ticket — related
- Voucher — related
- Manifest — related
- Operator Payout — related

# Distinctions
- **Redemption** vs Voucher — A voucher is the credential (proof of booking); redemption is the act of validating and consuming that credential at the point of service.

# Citations
[1] [Ventrata — Ventrata — Redemption & access control](https://ventrata.com/)
[2] [Bokun (Tripadvisor) — Bokun — Redeeming bookings](https://www.bokun.io/)
