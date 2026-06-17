---
type: Document
title: Flight Coupon
description: The portion of an e-ticket that corresponds to a single flight segment and represents the passenger's entitlement to be carried on that specific flight. Each coupon carries an independent status indicating where it is in its lifecycle.
tags:
  - air-ticket
  - active
  - IATA
timestamp: '2026-06-15T00:00:00Z'
id: flight-coupon
vertical: air
category: air-ticket
conceptType: document
status: active
term_ko: 비행 쿠폰 (Flight Coupon)
definition_ko: '단일 비행 구간에 대응하는 전자항공권의 부분으로, 해당 특정 항공편에 탑승할 수 있는 승객의 권리를 나타낸다. 각 쿠폰은 생애 주기상의 현재 위치를 나타내는 독립적인 상태를 가진다.'
longDef: 'A single ticket may contain up to four flight coupons; itineraries with more segments require conjunction tickets. Typical coupon statuses include OPEN FOR USE (O), AIRPORT CONTROL/CHECKED IN (A), FLOWN/USED (F), VOID (V), REFUNDED (R), EXCHANGED/REISSUED (E), and SUSPENDED (S). Coupon status is the authoritative control point for boarding, refund, reissue, and revenue recognition; for example, a coupon must be open (or under airport control) to be exchanged in a reissue, and final statuses such as Flown, Void, Exchanged, or Refunded block reuse.'
longDef_ko: '단일 항공권은 최대 4개의 Flight Coupon을 포함할 수 있으며, 구간이 더 많은 여정에는 연결 항공권(conjunction ticket)이 필요하다. 일반적인 쿠폰 상태로는 OPEN FOR USE (O), AIRPORT CONTROL/CHECKED IN (A), FLOWN/USED (F), VOID (V), REFUNDED (R), EXCHANGED/REISSUED (E), SUSPENDED (S) 등이 있다. 쿠폰 상태는 탑승, 환불, 재발행 및 수익 인식을 위한 핵심 통제 지점이다. 예를 들어, 재발행 시 쿠폰을 교환하려면 해당 쿠폰이 OPEN 상태(또는 airport control 상태)여야 하며, Flown, Void, Exchanged, Refunded와 같은 최종 상태는 재사용을 차단한다.'
standardBody: IATA
aliases:
  - Coupon
  - Electronic Flight Coupon
relationships:
  - type: child
    targetTerm: E-ticket
  - type: related
    targetTerm: Segment
  - type: related
    targetTerm: Reissue
  - type: related
    targetTerm: Refund
distinctions:
  - targetTerm: Segment
    explanation: A segment is the reservation/operational unit of travel; a flight coupon is the corresponding revenue/entitlement portion of the ticket.
    explanation_ko: 'Segment는 여행의 예약/운항 단위이며, Flight Coupon은 이에 대응하는 항공권의 수익/권리 부분이다.'
  - targetTerm: E-ticket
    explanation: The e-ticket is the whole document; a flight coupon is one of its (up to four) usable parts.
    explanation_ko: '전자항공권은 서류 전체이며, Flight Coupon은 그 안에서 사용 가능한 (최대 4개의) 부분 중 하나이다.'
sources:
  - name: Passenger Services Conference Resolutions Manual (PSCRM)
    org: IATA
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M7 16h34v6a3 3 0 000 6v6H7v-6a3 3 0 000-6z"/><path d="M20 16v3M20 24v3M20 29v3"/><path d="M27 22l4 4 8-9"/></svg>
---

> The portion of an e-ticket that corresponds to a single flight segment and represents the passenger's entitlement to be carried on that specific flight. Each coupon carries an independent status indicating where it is in its lifecycle.

A single ticket may contain up to four flight coupons; itineraries with more segments require conjunction tickets. Typical coupon statuses include OPEN FOR USE (O), AIRPORT CONTROL/CHECKED IN (A), FLOWN/USED (F), VOID (V), REFUNDED (R), EXCHANGED/REISSUED (E), and SUSPENDED (S). Coupon status is the authoritative control point for boarding, refund, reissue, and revenue recognition; for example, a coupon must be open (or under airport control) to be exchanged in a reissue, and final statuses such as Flown, Void, Exchanged, or Refunded block reuse.

**한국어 / Korean** — **비행 쿠폰 (Flight Coupon)** — 단일 비행 구간에 대응하는 전자항공권의 부분으로, 해당 특정 항공편에 탑승할 수 있는 승객의 권리를 나타낸다. 각 쿠폰은 생애 주기상의 현재 위치를 나타내는 독립적인 상태를 가진다.

단일 항공권은 최대 4개의 Flight Coupon을 포함할 수 있으며, 구간이 더 많은 여정에는 연결 항공권(conjunction ticket)이 필요하다. 일반적인 쿠폰 상태로는 OPEN FOR USE (O), AIRPORT CONTROL/CHECKED IN (A), FLOWN/USED (F), VOID (V), REFUNDED (R), EXCHANGED/REISSUED (E), SUSPENDED (S) 등이 있다. 쿠폰 상태는 탑승, 환불, 재발행 및 수익 인식을 위한 핵심 통제 지점이다. 예를 들어, 재발행 시 쿠폰을 교환하려면 해당 쿠폰이 OPEN 상태(또는 airport control 상태)여야 하며, Flown, Void, Exchanged, Refunded와 같은 최종 상태는 재사용을 차단한다.

**Aliases:** `Coupon`, `Electronic Flight Coupon`

# Related
- [E-ticket](/air/air-ticket/e-ticket.md) — child
- [Segment](/air/air-ops/segment.md) — related
- [Reissue](/air/air-ticket/reissue.md) — related
- [Refund](/air/air-ticket/refund.md) — related

# Distinctions
- **Flight Coupon** vs [Segment](/air/air-ops/segment.md) — A segment is the reservation/operational unit of travel; a flight coupon is the corresponding revenue/entitlement portion of the ticket.
- **Flight Coupon** vs [E-ticket](/air/air-ticket/e-ticket.md) — The e-ticket is the whole document; a flight coupon is one of its (up to four) usable parts.

# Citations
[1] IATA — Passenger Services Conference Resolutions Manual (PSCRM)
