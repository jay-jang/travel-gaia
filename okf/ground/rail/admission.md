---
type: Standard Term
title: Admission
description: 'In OSDM an admission is the core offer part that grants the right to travel on a train — the ''ticket'' proper, expressed as a transport entitlement. It is held distinct from a seat reservation and from ancillaries, making the admission the rail analogue of the basic carriage right.'
tags:
  - rail
  - active
  - UIC
timestamp: '2026-06-17T00:00:00Z'
id: admission
vertical: ground
category: rail
conceptType: standard-term
status: active
term_ko: 운송 권리(Admission)
definition_ko: 'OSDM에서 admission은 열차로 여행할 권리를 부여하는 핵심 오퍼 파트, 즉 ''승차권'' 본체로서 운송 권리(entitlement)로 표현된다. 좌석 예약(seat reservation) 및 부가서비스(ancillary)와 별개로 다루어지며, admission은 기본 운송권에 해당하는 철도 개념이다.'
longDef: 'OSDM separates an offer into admissions, reservations, and ancillaries. The admission represents the contractual right to be carried (often valid for a fare range, route, or validity period) and can exist without a bound seat — for example on non-reservation services or with a separately purchased reservation. This separation is what lets rail sell open or flexible entitlements independent of any specific train or place.'
longDef_ko: 'OSDM은 오퍼를 admission, reservation, ancillary로 분리한다. admission은 운송될 계약상 권리(흔히 특정 운임 범위·경로·유효기간에 대해 유효)를 나타내며 좌석이 묶이지 않은 채 존재할 수 있다 — 예컨대 예약이 필요 없는 열차나 좌석 예약을 별도로 구매하는 경우다. 이 분리 덕분에 철도는 특정 열차나 좌석과 무관하게 개방형·유연 운송권을 판매할 수 있다.'
standardBody: UIC
aliases:
  - Admission (OSDM)
  - Travel Admission
providerTerms:
  - provider: OSDM (UIC IRS 90918-10)
    term: AdmissionOfferPart / Admission
    context: 'OSDM names the travel-right offer part ''AdmissionOfferPart'' at offer stage, becoming ''Admission'' inside a booked offer; this is the exact object that grants the entitlement to travel on a train, held separately from ReservationOfferPart and AncillaryOfferPart.'
    context_ko: 'OSDM은 열차 탑승 권리를 부여하는 오퍼 파트를 ''AdmissionOfferPart''(예약 확정 시 ''Admission'')로 명명하며, 좌석예약(ReservationOfferPart)·부가서비스(AncillaryOfferPart)와 분리해 모델링한다.'
    relationship: same
  - provider: TAP TSI (ERA TD B.1)
    term: NRT tariff / admission-only fare data
    context: 'ERA TAP TSI Technical Document B.1 standardizes the exchange of Non-Reservation-Ticket (NRT) tariff and fare data for international sales — i.e. fares for the admission alone, sold independently of any reservation.'
    context_ko: 'ERA TAP TSI 기술문서 B.1은 국제 판매용 비예약권(NRT) 운임 데이터 교환을 표준화하며, 이는 좌석예약과 분리되어 단독 판매되는 어드미션(승차권 본체)에 대한 운임이다.'
    relationship: related
  - provider: NDC / IATA (Offers & Orders)
    term: OfferItem (flight / fare offer item)
    context: 'In air retailing the closest structural analogue is the NDC OfferItem carrying the flight/fare entitlement; unlike OSDM it does not cleanly separate a transport entitlement from a reservation, so the mapping is conceptual rather than identical.'
    context_ko: '항공 리테일링에서 가장 가까운 구조적 대응물은 운임·여정 권리를 담는 NDC OfferItem이나, OSDM처럼 운송 권리와 좌석예약을 명확히 분리하지 않으므로 동일이 아닌 개념적 대응이다.'
    relationship: related
relationships:
  - type: parent
    targetTerm: OSDM
  - type: contrasts
    targetTerm: Seat Reservation
  - type: related
    targetTerm: Non-integrated Reservation Ticket (NRT)
  - type: related
    targetTerm: Integrated Reservation Ticket (IRT)
  - type: related
    targetTerm: Ancillary Service
  - type: contrasts
    targetTerm: E-ticket
distinctions:
  - targetTerm: Seat Reservation
    explanation: 'The admission is the right to travel (the ticket); the seat reservation binds a specific place on a specific train. On many services you hold an admission with no reservation, or buy them separately.'
    explanation_ko: 'admission은 여행할 권리(승차권)이고, seat reservation은 특정 열차의 특정 좌석을 지정한다. 많은 노선에서는 예약 없이 admission만 보유하거나, 둘을 따로 구매한다.'
  - targetTerm: E-ticket
    explanation: 'Admission is the abstract entitlement in the OSDM offer; an air E-ticket is the issued fulfillment document. In rail the issued document is the fulfillment, not the admission itself.'
    explanation_ko: 'admission은 OSDM 오퍼 안의 추상적 권리이고, 항공의 E-ticket은 발행된 발권 문서다. 철도에서 발행 문서는 fulfillment이며 admission 자체가 아니다.'
sources:
  - name: 'OSDM Models — offer parts: admissions, reservations, ancillaries'
    org: UIC
    version: ''
    section: ''
    url: 'https://osdm.io/spec/models/'
    tier: standard-body
  - name: OSDM Offer structure (admissions / reservations / ancillaries)
    org: UIC
    version: ''
    section: ''
    url: 'https://osdm.io/spec/offer-structure/'
    tier: standard-body
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M8 16h32a2 2 0 0 1 2 2v4a3 3 0 0 0 0 6v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-4a3 3 0 0 0 0-6v-4a2 2 0 0 1 2-2z"/><path d="M28 16v18" stroke-dasharray="2 3"/><path d="M13 24h9"/></svg>
---

> In OSDM an admission is the core offer part that grants the right to travel on a train — the 'ticket' proper, expressed as a transport entitlement. It is held distinct from a seat reservation and from ancillaries, making the admission the rail analogue of the basic carriage right.

OSDM separates an offer into admissions, reservations, and ancillaries. The admission represents the contractual right to be carried (often valid for a fare range, route, or validity period) and can exist without a bound seat — for example on non-reservation services or with a separately purchased reservation. This separation is what lets rail sell open or flexible entitlements independent of any specific train or place.

**한국어 / Korean** — **운송 권리(Admission)** — OSDM에서 admission은 열차로 여행할 권리를 부여하는 핵심 오퍼 파트, 즉 '승차권' 본체로서 운송 권리(entitlement)로 표현된다. 좌석 예약(seat reservation) 및 부가서비스(ancillary)와 별개로 다루어지며, admission은 기본 운송권에 해당하는 철도 개념이다.

OSDM은 오퍼를 admission, reservation, ancillary로 분리한다. admission은 운송될 계약상 권리(흔히 특정 운임 범위·경로·유효기간에 대해 유효)를 나타내며 좌석이 묶이지 않은 채 존재할 수 있다 — 예컨대 예약이 필요 없는 열차나 좌석 예약을 별도로 구매하는 경우다. 이 분리 덕분에 철도는 특정 열차나 좌석과 무관하게 개방형·유연 운송권을 판매할 수 있다.

**Aliases:** `Admission (OSDM)`, `Travel Admission`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| OSDM (UIC IRS 90918-10) | `AdmissionOfferPart / Admission` | same | OSDM names the travel-right offer part 'AdmissionOfferPart' at offer stage, becoming 'Admission' inside a booked offer; this is the exact object that grants the entitlement to travel on a train, held separately from ReservationOfferPart and AncillaryOfferPart. |
| TAP TSI (ERA TD B.1) | `NRT tariff / admission-only fare data` | related | ERA TAP TSI Technical Document B.1 standardizes the exchange of Non-Reservation-Ticket (NRT) tariff and fare data for international sales — i.e. fares for the admission alone, sold independently of any reservation. |
| NDC / IATA (Offers & Orders) | `OfferItem (flight / fare offer item)` | related | In air retailing the closest structural analogue is the NDC OfferItem carrying the flight/fare entitlement; unlike OSDM it does not cleanly separate a transport entitlement from a reservation, so the mapping is conceptual rather than identical. |

# Related
- [OSDM](/ground/rail/osdm.md) — parent
- [Seat Reservation](/ground/rail/seat-reservation.md) — contrasts
- [Non-integrated Reservation Ticket (NRT)](/ground/rail/non-integrated-reservation-ticket-nrt.md) — related
- [Integrated Reservation Ticket (IRT)](/ground/rail/integrated-reservation-ticket-irt.md) — related
- [Ancillary Service](/air/air-ticket/ancillary-service.md) — related
- [E-ticket](/air/air-ticket/e-ticket.md) — contrasts

# Distinctions
- **Admission** vs [Seat Reservation](/ground/rail/seat-reservation.md) — The admission is the right to travel (the ticket); the seat reservation binds a specific place on a specific train. On many services you hold an admission with no reservation, or buy them separately.
- **Admission** vs [E-ticket](/air/air-ticket/e-ticket.md) — Admission is the abstract entitlement in the OSDM offer; an air E-ticket is the issued fulfillment document. In rail the issued document is the fulfillment, not the admission itself.

# Citations
[1] [UIC — OSDM Models — offer parts: admissions, reservations, ancillaries](https://osdm.io/spec/models/)
[2] [UIC — OSDM Offer structure (admissions / reservations / ancillaries)](https://osdm.io/spec/offer-structure/)
