---
type: Standard Term
title: Seat Reservation
description: 'A seat reservation is a reservation bound to a specific train and place, which may be compulsory, optional, or impossible depending on the service type. In OSDM it is a separate offer part from the admission, so the admission-versus-reservation split is a core rail-distribution concept.'
tags:
  - rail
  - active
  - UIC
timestamp: '2026-06-17T00:00:00Z'
id: seat-reservation
vertical: ground
category: rail
conceptType: standard-term
status: active
term_ko: 좌석 예약(Seat Reservation)
definition_ko: 'seat reservation은 특정 열차와 좌석에 묶인 예약으로, 노선 유형에 따라 의무(compulsory)·선택(optional)·불가(impossible)일 수 있다. OSDM에서 admission과 별개의 오퍼 파트이므로, admission과 reservation의 분리는 철도 유통의 핵심 개념이다.'
longDef: 'Reservation requirements vary by service: high-speed and yield-managed trains often make reservations compulsory and integral, regional services frequently make them impossible, and many intercity services make them optional. OSDM models the reservation distinctly from the admission so that systems can express ''ticket only,'' ''reservation only,'' or bundled products, and so reservations can be added, changed, or cancelled independently in after-sales.'
longDef_ko: '예약 요건은 노선별로 다르다 — 고속·수익관리 열차는 흔히 예약을 의무·일체형으로 두고, 지역 열차는 예약이 불가한 경우가 많으며, 많은 도시간 열차는 선택 사항으로 둔다. OSDM은 reservation을 admission과 구별해 모델링하여 ''승차권만'', ''예약만'', 또는 묶음 상품을 표현할 수 있게 하고, 사후 처리에서 예약을 독립적으로 추가·변경·취소할 수 있게 한다.'
standardBody: UIC
aliases:
  - Reservation (OSDM)
  - Place Reservation
providerTerms:
  - provider: OSDM (UIC IRS 90918-10)
    term: ReservationOfferPart / Reservation
    context: 'OSDM names the place-bound reservation ''ReservationOfferPart'' (becoming ''Reservation'' when booked), explicitly a separate offer part from the AdmissionOfferPart so a reservation can be sold without buying the admission again.'
    context_ko: 'OSDM은 특정 열차·좌석에 결합된 예약을 ''ReservationOfferPart''(예약 확정 시 ''Reservation'')로 명명하며, 어드미션을 다시 구매하지 않고도 예약만 판매할 수 있도록 AdmissionOfferPart와 명시적으로 분리한다.'
    relationship: same
  - provider: ERA TAP TSI (TD B.5)
    term: Reservation data exchange (TD B.5)
    context: ERA TAP TSI Technical Document B.5 standardizes the electronic exchange of reservation messages between rail actors — the regulated interface behind cross-carrier seat reservations.
    context_ko: 'ERA TAP TSI 기술문서 B.5는 철도 주체 간 예약 메시지의 전자적 교환을 표준화하며, 운송인 간 좌석예약을 뒷받침하는 규제 인터페이스다.'
    relationship: related
relationships:
  - type: parent
    targetTerm: OSDM
  - type: contrasts
    targetTerm: Admission
  - type: related
    targetTerm: Integrated Reservation Ticket (IRT)
  - type: related
    targetTerm: Non-integrated Reservation Ticket (NRT)
  - type: contrasts
    targetTerm: Seat Map
distinctions:
  - targetTerm: Admission
    explanation: The seat reservation reserves a specific place on a specific train; the admission is the underlying right to travel. A reservation alone does not grant carriage without an admission.
    explanation_ko: 'seat reservation은 특정 열차의 특정 좌석을 잡는 것이고, admission은 여행할 기본 권리다. 예약만으로는 admission 없이 운송 권리가 생기지 않는다.'
  - targetTerm: Seat Map
    explanation: A seat map is the visual layout used to select a place; a seat reservation is the resulting bound entitlement to that place on a given train.
    explanation_ko: 'seat map은 좌석을 고르는 시각적 배치도이고, seat reservation은 그 결과로 특정 열차의 좌석에 묶인 권리다.'
  - targetTerm: Interrail Pass
    explanation: The pass grants the right to travel (admission); seat reservations for compulsory-reservation trains are a separate purchase on top of the pass.
    explanation_ko: '패스는 여행할 권리(admission)를 부여하고, 예약 의무 열차의 좌석 예약은 패스에 더해 별도로 구매한다.'
sources:
  - name: OSDM Models — Reservations (seat/accommodation bound to specific trains)
    org: UIC
    version: ''
    section: ''
    url: 'https://osdm.io/spec/models/'
  - name: What's the difference between tickets and seat reservations?
    org: Rail operator guidance
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M16 14v14a3 3 0 0 0 3 3h11"/><path d="M16 28h14v8"/><path d="M16 14h-3M30 36v2"/><path d="M30 22l4-4 3 3-4 4z"/><path d="M37 21l-3 9-4 1 1-4z"/></svg>
---

> A seat reservation is a reservation bound to a specific train and place, which may be compulsory, optional, or impossible depending on the service type. In OSDM it is a separate offer part from the admission, so the admission-versus-reservation split is a core rail-distribution concept.

Reservation requirements vary by service: high-speed and yield-managed trains often make reservations compulsory and integral, regional services frequently make them impossible, and many intercity services make them optional. OSDM models the reservation distinctly from the admission so that systems can express 'ticket only,' 'reservation only,' or bundled products, and so reservations can be added, changed, or cancelled independently in after-sales.

**한국어 / Korean** — **좌석 예약(Seat Reservation)** — seat reservation은 특정 열차와 좌석에 묶인 예약으로, 노선 유형에 따라 의무(compulsory)·선택(optional)·불가(impossible)일 수 있다. OSDM에서 admission과 별개의 오퍼 파트이므로, admission과 reservation의 분리는 철도 유통의 핵심 개념이다.

예약 요건은 노선별로 다르다 — 고속·수익관리 열차는 흔히 예약을 의무·일체형으로 두고, 지역 열차는 예약이 불가한 경우가 많으며, 많은 도시간 열차는 선택 사항으로 둔다. OSDM은 reservation을 admission과 구별해 모델링하여 '승차권만', '예약만', 또는 묶음 상품을 표현할 수 있게 하고, 사후 처리에서 예약을 독립적으로 추가·변경·취소할 수 있게 한다.

**Aliases:** `Reservation (OSDM)`, `Place Reservation`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| OSDM (UIC IRS 90918-10) | `ReservationOfferPart / Reservation` | same | OSDM names the place-bound reservation 'ReservationOfferPart' (becoming 'Reservation' when booked), explicitly a separate offer part from the AdmissionOfferPart so a reservation can be sold without buying the admission again. |
| ERA TAP TSI (TD B.5) | `Reservation data exchange (TD B.5)` | related | ERA TAP TSI Technical Document B.5 standardizes the electronic exchange of reservation messages between rail actors — the regulated interface behind cross-carrier seat reservations. |

# Related
- [OSDM](/ground/rail/osdm.md) — parent
- [Admission](/ground/rail/admission.md) — contrasts
- [Integrated Reservation Ticket (IRT)](/ground/rail/integrated-reservation-ticket-irt.md) — related
- [Non-integrated Reservation Ticket (NRT)](/ground/rail/non-integrated-reservation-ticket-nrt.md) — related
- [Seat Map](/air/air-ops/seat-map.md) — contrasts

# Distinctions
- **Seat Reservation** vs [Admission](/ground/rail/admission.md) — The seat reservation reserves a specific place on a specific train; the admission is the underlying right to travel. A reservation alone does not grant carriage without an admission.
- **Seat Reservation** vs [Seat Map](/air/air-ops/seat-map.md) — A seat map is the visual layout used to select a place; a seat reservation is the resulting bound entitlement to that place on a given train.
- **Seat Reservation** vs [Interrail Pass](/ground/rail/interrail-pass.md) — The pass grants the right to travel (admission); seat reservations for compulsory-reservation trains are a separate purchase on top of the pass.

# Citations
[1] [UIC — OSDM Models — Reservations (seat/accommodation bound to specific trains)](https://osdm.io/spec/models/)
[2] Rail operator guidance — What's the difference between tickets and seat reservations?
