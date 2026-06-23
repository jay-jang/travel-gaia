---
type: Standard Term
title: Non-integrated Reservation Ticket (NRT)
description: An NRT is a UIC ticket type in which the travel entitlement (admission) and any seat reservation are sold separately — an open ticket plus an optional reservation. It is one of the UIC commercial ticket categories built around the separation of fare/admission from reservation in international rail.
tags:
  - rail
  - active
  - UIC
timestamp: '2026-06-17T00:00:00Z'
id: non-integrated-reservation-ticket-nrt
vertical: ground
category: rail
conceptType: standard-term
status: active
abbreviation: NRT
term_ko: 비통합 예약권(NRT)
definition_ko: 'NRT(Non-integrated Reservation Ticket)는 운송 권리(admission)와 좌석 예약을 별도로 판매하는 UIC 승차권 유형으로, 개방형 승차권에 선택적 예약을 더한 형태다. 국제 철도에서 운임·운송 권리와 예약을 분리하는 방식을 따르는 UIC 상업 승차권 분류 중 하나다.'
longDef: 'Under UIC''s commercial framework, NRT tickets are governed by the Special Conditions of International Carriage for NRT (SCIC-NRT). Because the admission is decoupled from the reservation, NRT supports flexible, route-based or open tickets that are not tied to a single train, with reservations added only where a service requires or offers them. NRT contrasts with IRT, where the reservation is integral to the product.'
longDef_ko: 'UIC 상업 체계에서 NRT 승차권은 NRT 국제운송 특별조건(SCIC-NRT)의 적용을 받는다. admission이 예약과 분리되어 있어, NRT는 단일 열차에 묶이지 않는 유연한 경로 기반·개방형 승차권을 지원하며, 노선이 요구하거나 제공하는 경우에만 예약을 추가한다. NRT는 예약이 상품에 일체화된 IRT와 대비된다.'
standardBody: UIC
aliases:
  - Non-Integrated Reservation Ticket
  - NRT ticket
providerTerms:
  - provider: OSDM (UIC IRS 90918-10)
    term: Separate AdmissionOfferPart + optional ReservationOfferPart
    context: 'OSDM represents an NRT as an open admission sold as its own AdmissionOfferPart with an optional, separately purchasable ReservationOfferPart — the structural split that defines a non-integrated ticket.'
    context_ko: 'OSDM은 NRT를 자체 AdmissionOfferPart로 판매되는 오픈 어드미션에 선택적·별도 구매 ReservationOfferPart가 붙는 구조로 표현하며, 이 분리가 비통합권의 정의다.'
    relationship: related
  - provider: 'UIC / ERA TAP TSI (TD B.1, PRIFIS/UIC-DRTF)'
    term: 'NRT tariff (Leaflet 108-1, stored in PRIFIS → UIC-DRTF)'
    context: 'NRT fares are the non-yielded through fares historically governed by UIC Leaflet 108-1 and distributed via PRIFIS (Price and Fare Information Storage), now the UIC Database for Rail Tariffs and Fares; TAP TSI TD B.1 standardizes their exchange.'
    context_ko: 'NRT 운임은 역사적으로 UIC Leaflet 108-1이 규정하고 PRIFIS(Price and Fare Information Storage, 현 UIC-DRTF)로 배포된 비수익관리 통과운임이며, TAP TSI TD B.1이 그 교환을 표준화한다.'
    relationship: related
relationships:
  - type: contrasts
    targetTerm: Integrated Reservation Ticket (IRT)
  - type: related
    targetTerm: Admission
  - type: related
    targetTerm: Standard International Passenger Tariff (TCV)
  - type: related
    targetTerm: OSDM
distinctions:
  - targetTerm: Integrated Reservation Ticket (IRT)
    explanation: In NRT the ticket and reservation are separate products that can be bought independently; in IRT the reservation is inseparable from the ticket as one product.
    explanation_ko: 'NRT는 승차권과 예약이 독립적으로 구매 가능한 별개 상품이고, IRT는 예약이 승차권과 분리될 수 없는 단일 상품이다.'
  - targetTerm: Open Ticket
    explanation: 'An NRT is the rail commercial category enabling open, train-independent entitlements; an air Open Ticket is a single coupon left open as to date/flight. The NRT abbreviation also differs from air usage (it is not ''Normal Round Trip'').'
    explanation_ko: 'NRT는 열차에 묶이지 않는 개방형 권리를 가능케 하는 철도 상업 분류이고, 항공의 Open Ticket은 날짜/편을 비워둔 단일 쿠폰이다. 또한 NRT 약어는 항공의 용법(''Normal Round Trip'')과 다르다.'
sources:
  - name: NRT (Non-Integrated Reservation Tickets) working group
    org: UIC
    version: ''
    section: ''
    url: 'https://uic.org/com/enews/nr/620/article/the-nrt-non-integrated-reservation-tickets-irt-and-nt-commercial-groups-met-in'
    tier: association
  - name: Special Conditions of International Carriage for NRT (SCIC-NRT)
    org: UIC
    version: 9 December 2012 edition
    section: ''
    url: 'https://www.cit-rail.org/media/files/public/CIT-Info_EN/2013/SCIC-NRT_09.12.2012_en.pdf'
    tier: association
    verifyQuote: Special Conditions of International Carriage (SCIC) for Journeys using Non Integrated Reservation Tickets (NRT) — 9 December 2012 edition
    verified: true
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="18" width="15" height="12" rx="2"/><rect x="27" y="18" width="15" height="12" rx="2"/><path d="M21 24h6" stroke-dasharray="2 3"/><path d="M10 24h7M31 24h7"/></svg>
---

> An NRT is a UIC ticket type in which the travel entitlement (admission) and any seat reservation are sold separately — an open ticket plus an optional reservation. It is one of the UIC commercial ticket categories built around the separation of fare/admission from reservation in international rail.

Under UIC's commercial framework, NRT tickets are governed by the Special Conditions of International Carriage for NRT (SCIC-NRT). Because the admission is decoupled from the reservation, NRT supports flexible, route-based or open tickets that are not tied to a single train, with reservations added only where a service requires or offers them. NRT contrasts with IRT, where the reservation is integral to the product.

**한국어 / Korean** — **비통합 예약권(NRT)** — NRT(Non-integrated Reservation Ticket)는 운송 권리(admission)와 좌석 예약을 별도로 판매하는 UIC 승차권 유형으로, 개방형 승차권에 선택적 예약을 더한 형태다. 국제 철도에서 운임·운송 권리와 예약을 분리하는 방식을 따르는 UIC 상업 승차권 분류 중 하나다.

UIC 상업 체계에서 NRT 승차권은 NRT 국제운송 특별조건(SCIC-NRT)의 적용을 받는다. admission이 예약과 분리되어 있어, NRT는 단일 열차에 묶이지 않는 유연한 경로 기반·개방형 승차권을 지원하며, 노선이 요구하거나 제공하는 경우에만 예약을 추가한다. NRT는 예약이 상품에 일체화된 IRT와 대비된다.

**Aliases:** `Non-Integrated Reservation Ticket`, `NRT ticket`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| OSDM (UIC IRS 90918-10) | `Separate AdmissionOfferPart + optional ReservationOfferPart` | related | OSDM represents an NRT as an open admission sold as its own AdmissionOfferPart with an optional, separately purchasable ReservationOfferPart — the structural split that defines a non-integrated ticket. |
| UIC / ERA TAP TSI (TD B.1, PRIFIS/UIC-DRTF) | `NRT tariff (Leaflet 108-1, stored in PRIFIS → UIC-DRTF)` | related | NRT fares are the non-yielded through fares historically governed by UIC Leaflet 108-1 and distributed via PRIFIS (Price and Fare Information Storage), now the UIC Database for Rail Tariffs and Fares; TAP TSI TD B.1 standardizes their exchange. |

# Related
- [Integrated Reservation Ticket (IRT)](/ground/rail/integrated-reservation-ticket-irt.md) — contrasts
- [Admission](/ground/rail/admission.md) — related
- [Standard International Passenger Tariff (TCV)](/ground/rail/standard-international-passenger-tariff-tcv.md) — related
- [OSDM](/ground/rail/osdm.md) — related

# Distinctions
- **Non-integrated Reservation Ticket (NRT)** vs [Integrated Reservation Ticket (IRT)](/ground/rail/integrated-reservation-ticket-irt.md) — In NRT the ticket and reservation are separate products that can be bought independently; in IRT the reservation is inseparable from the ticket as one product.
- **Non-integrated Reservation Ticket (NRT)** vs [Open Ticket](/air/air-ticket/open-ticket.md) — An NRT is the rail commercial category enabling open, train-independent entitlements; an air Open Ticket is a single coupon left open as to date/flight. The NRT abbreviation also differs from air usage (it is not 'Normal Round Trip').

# Citations
[1] [UIC — NRT (Non-Integrated Reservation Tickets) working group](https://uic.org/com/enews/nr/620/article/the-nrt-non-integrated-reservation-tickets-irt-and-nt-commercial-groups-met-in)
[2] [UIC — Special Conditions of International Carriage for NRT (SCIC-NRT) — 9 December 2012 edition](https://www.cit-rail.org/media/files/public/CIT-Info_EN/2013/SCIC-NRT_09.12.2012_en.pdf)
