---
type: Code
title: Coupon Status
description: 'Coupon status is the lifecycle state of an individual electronic ticket flight coupon, indicating where it is in the issue-to-use process — for example Open for Use, Airport Control, Checked In, Boarded/Lifted, Flown/Used, Exchanged/Reissued, Refunded, Void, or Suspended. The status governs what actions (use, exchange, refund, void, revalidation) are permitted on that coupon.'
tags:
  - air-ticket
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: coupon-status
vertical: air
category: air-ticket
conceptType: code
status: active
term_ko: Coupon Status (쿠폰 상태)
definition_ko: 'Coupon Status(쿠폰 상태)는 개별 전자 항공권 항공편 쿠폰의 생애주기 상태로, 발행에서 사용까지의 과정 중 쿠폰이 어디에 있는지를 나타낸다(예: Open for Use, Airport Control, Checked In, Boarded/Lifted, Flown/Used, Exchanged/Reissued, Refunded, Void, Suspended). 이 상태에 따라 해당 쿠폰에 허용되는 행위(사용, 교환, 환불, 보이드, revalidation)가 결정된다.'
longDef: 'Each flight coupon on an e-ticket carries a status that changes as the coupon moves through its lifecycle, kept in sync between the validating/operating carrier''s e-ticket database and the GDS/agent record. Common statuses include Open for Use (O — valid and unused), Airport Control (the coupon is under departure-control), Checked In, Boarded/Lifted, Flown/Used (F — travel completed), Exchanged/Reissued (E — value moved to a new document), Refunded, Void, Suspended, and Printed. The current status determines permissible processing: only coupons in eligible states (e.g. Open for Use) can be voided, exchanged, revalidated, or refunded, while statuses such as Exchanged, Refunded, Flown, or Void preclude reuse. Carriers and GDSs implement these codes per the relevant IATA e-ticketing resolutions, though display mnemonics vary by system.'
longDef_ko: '전자 항공권의 각 항공편 쿠폰은 생애주기를 거치며 변하는 상태를 가지며, 이는 validating/operating 항공사의 전자 항공권 데이터베이스와 GDS/대리점 기록 간에 동기화된다. 흔한 상태로는 Open for Use(O — 유효하며 미사용), Airport Control(출발 통제 하에 있음), Checked In, Boarded/Lifted, Flown/Used(F — 여행 완료), Exchanged/Reissued(E — 가치가 새 서류로 이동), Refunded, Void, Suspended, Printed 등이 있다. 현재 상태는 허용되는 처리를 결정한다. Open for Use 등 적격 상태의 쿠폰만 보이드·교환·revalidation·환불이 가능하며, Exchanged·Refunded·Flown·Void 같은 상태는 재사용을 불가능하게 한다. 항공사와 GDS는 관련 IATA 전자 발권 규정에 따라 이 코드를 구현하지만, 표시 약어(mnemonic)는 시스템마다 다르다.'
standardBody: IATA
aliases:
  - Coupon Status Code
  - E-ticket Coupon Status
  - Flight Coupon Status
providerTerms:
  - provider: Amadeus
    term: E-ticket coupon status codes
    context: 'Amadeus publishes cryptic coupon status codes such as O (Open for use), F (Flown/used), and E (Exchanged) in the e-ticket record.'
    context_ko: 'Amadeus는 전자 항공권 기록에 O(Open for use), F(Flown/used), E(Exchanged) 등의 크립틱 쿠폰 상태 코드를 게시한다.'
    relationship: same
relationships:
  - type: related
    targetTerm: Flight Coupon
  - type: related
    targetTerm: E-ticket
  - type: related
    targetTerm: Void
  - type: related
    targetTerm: Reissue
  - type: related
    targetTerm: Refund
  - type: related
    targetTerm: Open Ticket
distinctions:
  - targetTerm: Flight Coupon
    explanation: The flight coupon is the segment-level portion of a ticket; coupon status is the state attribute attached to that coupon describing its position in the lifecycle.
    explanation_ko: 'Flight coupon은 항공권의 구간 단위 부분이고, coupon status는 그 쿠폰에 부여되어 생애주기상 위치를 기술하는 상태 속성이다.'
  - targetTerm: Void
    explanation: 'Void is one specific coupon/ticket status (cancellation of issuance, typically same-day); coupon status is the broader set of all possible lifecycle states a coupon can hold.'
    explanation_ko: 'Void는 특정한 하나의 쿠폰/항공권 상태(발행 취소, 보통 당일)이고, coupon status는 쿠폰이 가질 수 있는 모든 생애주기 상태의 더 넓은 집합이다.'
sources:
  - org: Amadeus
    name: How to understand e-ticket coupon status codes (Cryptic)
    version: ''
    section: ''
    url: 'https://servicehub.amadeus.com/c/portal/view-solution/879101/how-to-understand-e-ticket-coupon-status-codes-cryptic-'
  - org: IATA
    name: Ticketing Handbook
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="12" width="32" height="24" rx="3"/><path d="M14 24l4 4 8-8"/><circle cx="32" cy="24" r="3"/></svg>
---

> Coupon status is the lifecycle state of an individual electronic ticket flight coupon, indicating where it is in the issue-to-use process — for example Open for Use, Airport Control, Checked In, Boarded/Lifted, Flown/Used, Exchanged/Reissued, Refunded, Void, or Suspended. The status governs what actions (use, exchange, refund, void, revalidation) are permitted on that coupon.

Each flight coupon on an e-ticket carries a status that changes as the coupon moves through its lifecycle, kept in sync between the validating/operating carrier's e-ticket database and the GDS/agent record. Common statuses include Open for Use (O — valid and unused), Airport Control (the coupon is under departure-control), Checked In, Boarded/Lifted, Flown/Used (F — travel completed), Exchanged/Reissued (E — value moved to a new document), Refunded, Void, Suspended, and Printed. The current status determines permissible processing: only coupons in eligible states (e.g. Open for Use) can be voided, exchanged, revalidated, or refunded, while statuses such as Exchanged, Refunded, Flown, or Void preclude reuse. Carriers and GDSs implement these codes per the relevant IATA e-ticketing resolutions, though display mnemonics vary by system.

**한국어 / Korean** — **Coupon Status (쿠폰 상태)** — Coupon Status(쿠폰 상태)는 개별 전자 항공권 항공편 쿠폰의 생애주기 상태로, 발행에서 사용까지의 과정 중 쿠폰이 어디에 있는지를 나타낸다(예: Open for Use, Airport Control, Checked In, Boarded/Lifted, Flown/Used, Exchanged/Reissued, Refunded, Void, Suspended). 이 상태에 따라 해당 쿠폰에 허용되는 행위(사용, 교환, 환불, 보이드, revalidation)가 결정된다.

전자 항공권의 각 항공편 쿠폰은 생애주기를 거치며 변하는 상태를 가지며, 이는 validating/operating 항공사의 전자 항공권 데이터베이스와 GDS/대리점 기록 간에 동기화된다. 흔한 상태로는 Open for Use(O — 유효하며 미사용), Airport Control(출발 통제 하에 있음), Checked In, Boarded/Lifted, Flown/Used(F — 여행 완료), Exchanged/Reissued(E — 가치가 새 서류로 이동), Refunded, Void, Suspended, Printed 등이 있다. 현재 상태는 허용되는 처리를 결정한다. Open for Use 등 적격 상태의 쿠폰만 보이드·교환·revalidation·환불이 가능하며, Exchanged·Refunded·Flown·Void 같은 상태는 재사용을 불가능하게 한다. 항공사와 GDS는 관련 IATA 전자 발권 규정에 따라 이 코드를 구현하지만, 표시 약어(mnemonic)는 시스템마다 다르다.

**Aliases:** `Coupon Status Code`, `E-ticket Coupon Status`, `Flight Coupon Status`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Amadeus | `E-ticket coupon status codes` | same | Amadeus publishes cryptic coupon status codes such as O (Open for use), F (Flown/used), and E (Exchanged) in the e-ticket record. |

# Related
- [Flight Coupon](/air/air-ticket/flight-coupon.md) — related
- [E-ticket](/air/air-ticket/e-ticket.md) — related
- [Void](/air/air-ticket/void.md) — related
- [Reissue](/air/air-ticket/reissue.md) — related
- [Refund](/air/air-ticket/refund.md) — related
- [Open Ticket](/air/air-ticket/open-ticket.md) — related

# Distinctions
- **Coupon Status** vs [Flight Coupon](/air/air-ticket/flight-coupon.md) — The flight coupon is the segment-level portion of a ticket; coupon status is the state attribute attached to that coupon describing its position in the lifecycle.
- **Coupon Status** vs [Void](/air/air-ticket/void.md) — Void is one specific coupon/ticket status (cancellation of issuance, typically same-day); coupon status is the broader set of all possible lifecycle states a coupon can hold.

# Citations
[1] [Amadeus — How to understand e-ticket coupon status codes (Cryptic)](https://servicehub.amadeus.com/c/portal/view-solution/879101/how-to-understand-e-ticket-coupon-status-codes-cryptic-)
[2] IATA — Ticketing Handbook
