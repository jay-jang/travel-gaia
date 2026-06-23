---
type: Standard Term
title: Fulfillment (Rail)
description: 'In OSDM, fulfillment is the realized travel document or entitlement that results from a confirmed booking — the rail equivalent of issuing a usable ticket. It is a core lifecycle object that links the abstract offer/booking to a controllable, validatable ticket.'
tags:
  - rail
  - active
  - UIC
timestamp: '2026-06-17T00:00:00Z'
id: fulfillment-rail
vertical: ground
category: rail
conceptType: standard-term
status: active
term_ko: 철도 발권·이행(Fulfillment)
definition_ko: 'OSDM에서 fulfillment는 확정된 예약으로부터 실체화된 여행 문서 또는 권리, 즉 사용 가능한 승차권을 발행하는 것에 해당하는 철도 개념이다. 추상적인 오퍼/예약을 통제·검표 가능한 승차권으로 연결하는 핵심 생애주기 객체다.'
longDef: 'Fulfillment defines how a confirmed booking becomes a controllable ticket, typically carrying a control number and a barcode (such as the UIC Flexible Content Barcode) so that on-board or gate validation can verify the contract without a central PNR lookup. OSDM models fulfillment distinctly so that after-sales actions (refund, exchange, partial cancellation) can reference and re-issue the realized document. TAP TSI similarly treats fulfillment as one of the standardized rail interfaces alongside timetables, tariffs, and reservations.'
longDef_ko: 'fulfillment은 확정된 예약이 통제 가능한 승차권이 되는 방식을 정의하며, 일반적으로 control number와 바코드(예: UIC Flexible Content Barcode)를 담아 중앙 PNR 조회 없이 차내·게이트 검표로 계약을 검증할 수 있게 한다. OSDM은 fulfillment을 별개로 모델링하여 사후 처리(환불, 변경, 부분 취소)가 실체화된 문서를 참조하고 재발행할 수 있게 한다. TAP TSI 또한 fulfillment을 시각표·운임·예약과 더불어 표준화된 철도 인터페이스의 하나로 다룬다.'
standardBody: UIC
aliases:
  - OSDM Fulfillment
  - Rail Fulfillment
  - Fulfilment
providerTerms:
  - provider: OSDM (UIC IRS 90918-10)
    term: Fulfillment
    context: 'OSDM names the realized travel document object exactly ''Fulfillment'' — described in the model as what ''could once have been called tickets'', the proof-of-purchase produced from a confirmed Booking.'
    context_ko: 'OSDM은 실현된 여행 문서 객체를 정확히 ''Fulfillment''로 명명하며, 모델에서 ''한때 티켓이라 불렸던 것''으로 설명되는, 확정된 Booking으로부터 생성되는 구매 증빙이다.'
    relationship: same
  - provider: UIC ticket layouts (IRS 90918-8)
    term: RCT2 / RCCST / A4RT (secured-paper & mobile layouts)
    context: 'Where the fulfillment is a printable document, UIC IRS 90918-8 defines the layouts it is rendered into — RCT2 and RCCST on secured paper and A4RT on blank paper or a mobile screen.'
    context_ko: '이행물(fulfillment)이 출력 문서일 때, UIC IRS 90918-8은 그 렌더링 레이아웃을 정의한다 — 보안용지의 RCT2·RCCST, 백지/모바일 화면의 A4RT.'
    relationship: narrower
  - provider: IATA (ONE Order / EMD)
    term: ONE Order document / EMD / e-ticket
    context: 'The air-side analogue of the issued, usable travel document is the e-ticket or Electronic Miscellaneous Document under ONE Order; it serves the same fulfillment role but is a different standard and data structure.'
    context_ko: '발권되어 사용 가능한 여행 문서의 항공 측 대응물은 ONE Order 하의 e-ticket 또는 EMD(전자 부가 문서)로, 동일한 이행 역할을 하지만 표준·데이터 구조는 다르다.'
    relationship: related
relationships:
  - type: parent
    targetTerm: OSDM
  - type: related
    targetTerm: Flexible Content Barcode (FCB)
  - type: related
    targetTerm: Admission
  - type: related
    targetTerm: TAP TSI
  - type: contrasts
    targetTerm: E-ticket
  - type: related
    targetTerm: Reissue
distinctions:
  - targetTerm: E-ticket
    explanation: Rail fulfillment is the OSDM concept of realizing a controllable ticket from a booking; the air E-ticket is one specific issued document. Rail fulfillment commonly relies on a barcode/control number rather than a GDS-style ticket coupon.
    explanation_ko: '철도 fulfillment은 예약으로부터 통제 가능한 승차권을 실체화하는 OSDM 개념이고, 항공의 E-ticket은 발행된 특정 문서다. 철도 fulfillment은 GDS식 발권 쿠폰보다 바코드/control number에 의존하는 경우가 많다.'
  - targetTerm: Flexible Content Barcode (FCB)
    explanation: 'FCB is the barcode technology that carries the contract; fulfillment is the broader lifecycle step of producing and controlling the travel document, which may use FCB.'
    explanation_ko: 'FCB는 계약을 담는 바코드 기술이고, fulfillment은 여행 문서를 생성·통제하는 더 넓은 생애주기 단계로 FCB를 사용할 수 있다.'
sources:
  - name: 'OSDM Models — Fulfillment (control number, ticketing/validation)'
    org: UIC
    version: ''
    section: ''
    url: 'https://osdm.io/spec/models/'
  - name: 'Telematics Applications for Passenger Service TSI (timetables, tariffs, reservations, fulfillment)'
    org: European Union / ERA
    version: ''
    section: ''
    url: 'https://www.era.europa.eu/domains/registers/tap_en'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="10" width="24" height="30" rx="2"/><path d="M16 18h12M16 24h12M16 30h7"/><path d="M28 36l4 4 8-9"/></svg>
---

> In OSDM, fulfillment is the realized travel document or entitlement that results from a confirmed booking — the rail equivalent of issuing a usable ticket. It is a core lifecycle object that links the abstract offer/booking to a controllable, validatable ticket.

Fulfillment defines how a confirmed booking becomes a controllable ticket, typically carrying a control number and a barcode (such as the UIC Flexible Content Barcode) so that on-board or gate validation can verify the contract without a central PNR lookup. OSDM models fulfillment distinctly so that after-sales actions (refund, exchange, partial cancellation) can reference and re-issue the realized document. TAP TSI similarly treats fulfillment as one of the standardized rail interfaces alongside timetables, tariffs, and reservations.

**한국어 / Korean** — **철도 발권·이행(Fulfillment)** — OSDM에서 fulfillment는 확정된 예약으로부터 실체화된 여행 문서 또는 권리, 즉 사용 가능한 승차권을 발행하는 것에 해당하는 철도 개념이다. 추상적인 오퍼/예약을 통제·검표 가능한 승차권으로 연결하는 핵심 생애주기 객체다.

fulfillment은 확정된 예약이 통제 가능한 승차권이 되는 방식을 정의하며, 일반적으로 control number와 바코드(예: UIC Flexible Content Barcode)를 담아 중앙 PNR 조회 없이 차내·게이트 검표로 계약을 검증할 수 있게 한다. OSDM은 fulfillment을 별개로 모델링하여 사후 처리(환불, 변경, 부분 취소)가 실체화된 문서를 참조하고 재발행할 수 있게 한다. TAP TSI 또한 fulfillment을 시각표·운임·예약과 더불어 표준화된 철도 인터페이스의 하나로 다룬다.

**Aliases:** `OSDM Fulfillment`, `Rail Fulfillment`, `Fulfilment`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| OSDM (UIC IRS 90918-10) | `Fulfillment` | same | OSDM names the realized travel document object exactly 'Fulfillment' — described in the model as what 'could once have been called tickets', the proof-of-purchase produced from a confirmed Booking. |
| UIC ticket layouts (IRS 90918-8) | `RCT2 / RCCST / A4RT (secured-paper & mobile layouts)` | narrower | Where the fulfillment is a printable document, UIC IRS 90918-8 defines the layouts it is rendered into — RCT2 and RCCST on secured paper and A4RT on blank paper or a mobile screen. |
| IATA (ONE Order / EMD) | `ONE Order document / EMD / e-ticket` | related | The air-side analogue of the issued, usable travel document is the e-ticket or Electronic Miscellaneous Document under ONE Order; it serves the same fulfillment role but is a different standard and data structure. |

# Related
- [OSDM](/ground/rail/osdm.md) — parent
- [Flexible Content Barcode (FCB)](/ground/rail/flexible-content-barcode-fcb.md) — related
- [Admission](/ground/rail/admission.md) — related
- [TAP TSI](/ground/rail/tap-tsi.md) — related
- [E-ticket](/air/air-ticket/e-ticket.md) — contrasts
- [Reissue](/air/air-ticket/reissue.md) — related

# Distinctions
- **Fulfillment (Rail)** vs [E-ticket](/air/air-ticket/e-ticket.md) — Rail fulfillment is the OSDM concept of realizing a controllable ticket from a booking; the air E-ticket is one specific issued document. Rail fulfillment commonly relies on a barcode/control number rather than a GDS-style ticket coupon.
- **Fulfillment (Rail)** vs [Flexible Content Barcode (FCB)](/ground/rail/flexible-content-barcode-fcb.md) — FCB is the barcode technology that carries the contract; fulfillment is the broader lifecycle step of producing and controlling the travel document, which may use FCB.

# Citations
[1] [UIC — OSDM Models — Fulfillment (control number, ticketing/validation)](https://osdm.io/spec/models/)
[2] [European Union / ERA — Telematics Applications for Passenger Service TSI (timetables, tariffs, reservations, fulfillment)](https://www.era.europa.eu/domains/registers/tap_en)
