---
type: Document
title: E-ticket
description: 'An electronic record of a passenger''s transportation entitlement held in the issuing/validating carrier''s (or BSP) database, identified by a 13-digit ticket number, that replaces the traditional paper ticket. IATA mandated 100% electronic ticketing for BSP-issued air transport documents from 1 June 2008.'
tags:
  - air-ticket
  - active
  - IATA
timestamp: '2026-06-15T00:00:00Z'
id: e-ticket
vertical: air
category: air-ticket
conceptType: document
status: active
abbreviation: ET
term_ko: 전자항공권 (E-ticket)
definition_ko: '발권/Validating Carrier(또는 BSP)의 데이터베이스에 보관되는 승객의 운송 권리에 대한 전자 기록으로, 13자리 항공권 번호로 식별되며 기존의 종이 항공권을 대체한다. IATA는 2008년 6월 1일부터 BSP 발권 항공운송 서류에 대해 100% 전자 발권을 의무화했다.'
longDef: 'An e-ticket comprises ticket-level data (passenger name, fare calculation, form of payment, endorsements/restrictions) plus one or more flight coupons, each tied to a flight segment with its own coupon status (e.g., OPEN FOR USE, AIRPORT CONTROL/CHECKED IN, FLOWN/USED, REFUNDED, VOID, EXCHANGED). The 13-digit number consists of a 3-digit airline accounting code (e.g., 006 for Delta), a form/serial portion, and a check digit. The e-ticket is the standard document for carriage of passengers; EMDs are the analogous electronic document for ancillary and non-flight charges.'
longDef_ko: '전자항공권은 항공권 단위 데이터(승객명, 운임 계산, 지불 수단, 배서/제한 사항)와 하나 이상의 Flight Coupon으로 구성되며, 각 쿠폰은 특정 비행 구간에 연결되어 고유한 쿠폰 상태(예: OPEN FOR USE, AIRPORT CONTROL/CHECKED IN, FLOWN/USED, REFUNDED, VOID, EXCHANGED)를 가진다. 13자리 번호는 3자리 항공사 회계 코드(예: 델타항공의 경우 006), 폼/일련번호 부분, 그리고 체크 디지트로 구성된다. 전자항공권은 승객 운송을 위한 표준 서류이며, EMD는 부가 서비스 및 비항공 요금에 대응하는 전자 서류이다.'
standardBody: IATA
aliases:
  - Electronic Ticket
  - ETKT
  - Electronic Ticketing
providerTerms:
  - provider: NDC/IATA
    term: TicketDocument (TicketDocInfo)
    context: 'In an NDC order, the electronic ticket is represented by the TicketDocument element inside TicketDocInfo of OrderViewRS, carrying the 13-digit ticket number, coupons, and statuses; under ONE Order it is being consolidated into the single Order record.'
    context_ko: 'NDC 주문에서 전자항공권은 OrderViewRS의 TicketDocInfo 내 TicketDocument 요소로 표현되어 13자리 항공권번호·쿠폰·상태를 담으며, ONE Order에서는 단일 Order 레코드로 통합되고 있다.'
    relationship: same
relationships:
  - type: parent
    targetTerm: Flight Coupon
  - type: contrasts
    targetTerm: EMD
  - type: related
    targetTerm: Validating Carrier
  - type: related
    targetTerm: BSP
  - type: related
    targetTerm: PNR
distinctions:
  - targetTerm: EMD
    explanation: 'E-ticket documents flight transportation; EMD documents ancillary services, fees, and non-air charges.'
    explanation_ko: '전자항공권은 항공 운송을 증빙하고, EMD는 부가 서비스, 수수료 및 비항공 요금을 증빙한다.'
  - targetTerm: PNR
    explanation: PNR is the reservation record; the e-ticket is the issued transport document that fulfills it.
    explanation_ko: 'PNR은 예약 기록이며, 전자항공권은 이를 이행하기 위해 발권된 운송 서류이다.'
  - targetTerm: Flight Coupon
    explanation: A flight coupon is one redeemable component within an e-ticket; a single e-ticket may hold up to four coupons.
    explanation_ko: 'Flight Coupon은 전자항공권 내에서 사용 가능한 하나의 구성 요소이며, 단일 전자항공권은 최대 4개의 쿠폰을 보유할 수 있다.'
  - targetTerm: Admission
    explanation: 'Admission is the abstract entitlement in the OSDM offer; an air E-ticket is the issued fulfillment document. In rail the issued document is the fulfillment, not the admission itself.'
    explanation_ko: 'admission은 OSDM 오퍼 안의 추상적 권리이고, 항공의 E-ticket은 발행된 발권 문서다. 철도에서 발행 문서는 fulfillment이며 admission 자체가 아니다.'
  - targetTerm: Flexible Content Barcode (FCB)
    explanation: 'FCB is a self-validating, offline-checkable rail barcode; an air E-ticket is a coupon record held in a host system and validated against it. FCB enables PNR-less control, unlike GDS/host-dependent e-tickets.'
    explanation_ko: 'FCB는 오프라인 검증이 가능한 자체 검증형 철도 바코드이고, 항공 E-ticket은 호스트 시스템에 보관된 쿠폰 기록을 대조해 검증한다. FCB는 GDS/호스트 의존 e-ticket과 달리 무PNR 검표를 가능케 한다.'
  - targetTerm: Fulfillment (Rail)
    explanation: Rail fulfillment is the OSDM concept of realizing a controllable ticket from a booking; the air E-ticket is one specific issued document. Rail fulfillment commonly relies on a barcode/control number rather than a GDS-style ticket coupon.
    explanation_ko: '철도 fulfillment은 예약으로부터 통제 가능한 승차권을 실체화하는 OSDM 개념이고, 항공의 E-ticket은 발행된 특정 문서다. 철도 fulfillment은 GDS식 발권 쿠폰보다 바코드/control number에 의존하는 경우가 많다.'
  - targetTerm: Interline Electronic Ticket (IET)
    explanation: A plain e-ticket may have all coupons on one carrier; an IET is specifically an e-ticket whose coupons span multiple carriers and therefore requires interline e-ticketing agreements and proration.
    explanation_ko: '일반 E-ticket은 모든 쿠폰이 한 항공사에 속할 수 있지만, IET은 쿠폰이 여러 항공사에 걸쳐 있는 전자항공권으로 인터라인 전자발권 협정과 proration을 필요로 한다.'
  - targetTerm: Interline Electronic Ticketing
    explanation: An e-ticket is the electronic record of a single carrier's ticket; IET extends that concept so coupons on one electronic ticket can span and be honored by multiple interlining carriers.
    explanation_ko: '전자항공권은 단일 항공사 항공권의 전자 기록이고, IET는 그 개념을 확장하여 하나의 전자항공권상의 쿠폰이 여러 인터라인 항공사를 가로질러 인정될 수 있도록 한다.'
  - targetTerm: Itinerary
    explanation: 'The e-ticket is the electronic record of the contract of carriage and coupons; the Itinerary/Receipt is the human-readable summary issued alongside it. They are related documents, not the same artifact.'
    explanation_ko: 'E-ticket은 운송계약과 coupon의 전자 기록이고, Itinerary/Receipt는 그와 함께 발행되는 사람이 읽을 수 있는 요약본이다. 관련 문서이지 동일한 산출물은 아니다.'
  - targetTerm: MCO (Miscellaneous Charges Order)
    explanation: 'An e-ticket records the carriage of a passenger on flight coupons; an MCO/EMD records non-flight value such as fees, deposits, or residual amounts.'
    explanation_ko: 'E-ticket은 항공편 쿠폰상의 여객 운송을 기록하지만, MCO/EMD는 수수료, 보증금, 잔여 금액 등 비항공 가치를 기록한다.'
  - targetTerm: ONE Order
    explanation: ONE Order's single Order record is designed to replace document-based e-tickets (and EMDs) with order-level accounting and fulfillment.
    explanation_ko: ONE Order의 단일 주문 기록은 주문 단위의 회계와 이행을 통해 문서 기반 e-ticket(및 EMD)을 대체하도록 설계되었다.
  - targetTerm: Standard Traffic Document (STD)
    explanation: 'An e-ticket is one type of STD (the neutral electronic ticket). STD is the broader document-control category that also covers EMDs/virtual MPDs and refund vouchers issued from the same controlled, neutral stock.'
    explanation_ko: e-ticket은 STD의 한 유형(중립 전자항공권)이다. STD는 동일한 통제된 중립 재고에서 발행되는 EMD/virtual MPD 및 환불 바우처까지 포괄하는 더 넓은 서류 통제 범주이다.
  - targetTerm: Transitional Stored Ticket (TST)
    explanation: 'The TST is the pre-issuance pricing record held in the PNR; the e-ticket is the accountable document created from the TST and stored in the validating carrier''s ticketing database. The TST can be edited and repriced; once an e-ticket is issued, changes require reissue/revalidation.'
    explanation_ko: 'TST는 PNR에 보관되는 발권 이전 단계의 운임 레코드이고, e-ticket은 TST로부터 생성되어 validating carrier의 발권 데이터베이스에 저장되는 회계 서류이다. TST는 수정·재운임계산이 가능하지만, e-ticket이 발행되면 변경에는 reissue/revalidation이 필요하다.'
sources:
  - name: Electronic Ticketing
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/ticketing-handbook/'
    tier: association
  - name: Passenger Services Conference Resolutions Manual (PSCRM)
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="14" width="36" height="20" rx="3"/><path d="M22 14v20"/><path d="M22 19v2M22 25v2M22 31v0"/><path d="M28 21h8M28 27h6"/><path d="M11 24h6"/></svg>
---

> An electronic record of a passenger's transportation entitlement held in the issuing/validating carrier's (or BSP) database, identified by a 13-digit ticket number, that replaces the traditional paper ticket. IATA mandated 100% electronic ticketing for BSP-issued air transport documents from 1 June 2008.

An e-ticket comprises ticket-level data (passenger name, fare calculation, form of payment, endorsements/restrictions) plus one or more flight coupons, each tied to a flight segment with its own coupon status (e.g., OPEN FOR USE, AIRPORT CONTROL/CHECKED IN, FLOWN/USED, REFUNDED, VOID, EXCHANGED). The 13-digit number consists of a 3-digit airline accounting code (e.g., 006 for Delta), a form/serial portion, and a check digit. The e-ticket is the standard document for carriage of passengers; EMDs are the analogous electronic document for ancillary and non-flight charges.

**한국어 / Korean** — **전자항공권 (E-ticket)** — 발권/Validating Carrier(또는 BSP)의 데이터베이스에 보관되는 승객의 운송 권리에 대한 전자 기록으로, 13자리 항공권 번호로 식별되며 기존의 종이 항공권을 대체한다. IATA는 2008년 6월 1일부터 BSP 발권 항공운송 서류에 대해 100% 전자 발권을 의무화했다.

전자항공권은 항공권 단위 데이터(승객명, 운임 계산, 지불 수단, 배서/제한 사항)와 하나 이상의 Flight Coupon으로 구성되며, 각 쿠폰은 특정 비행 구간에 연결되어 고유한 쿠폰 상태(예: OPEN FOR USE, AIRPORT CONTROL/CHECKED IN, FLOWN/USED, REFUNDED, VOID, EXCHANGED)를 가진다. 13자리 번호는 3자리 항공사 회계 코드(예: 델타항공의 경우 006), 폼/일련번호 부분, 그리고 체크 디지트로 구성된다. 전자항공권은 승객 운송을 위한 표준 서류이며, EMD는 부가 서비스 및 비항공 요금에 대응하는 전자 서류이다.

**Aliases:** `Electronic Ticket`, `ETKT`, `Electronic Ticketing`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| NDC/IATA | `TicketDocument (TicketDocInfo)` | same | In an NDC order, the electronic ticket is represented by the TicketDocument element inside TicketDocInfo of OrderViewRS, carrying the 13-digit ticket number, coupons, and statuses; under ONE Order it is being consolidated into the single Order record. |

# Related
- [Flight Coupon](/air/air-ticket/flight-coupon.md) — parent
- [EMD](/air/air-ticket/emd.md) — contrasts
- [Validating Carrier](/air/air-ticket/validating-carrier.md) — related
- [BSP](/common/pay/bsp.md) — related
- [PNR](/air/air-ops/pnr.md) — related

# Distinctions
- **E-ticket** vs [EMD](/air/air-ticket/emd.md) — E-ticket documents flight transportation; EMD documents ancillary services, fees, and non-air charges.
- **E-ticket** vs [PNR](/air/air-ops/pnr.md) — PNR is the reservation record; the e-ticket is the issued transport document that fulfills it.
- **E-ticket** vs [Flight Coupon](/air/air-ticket/flight-coupon.md) — A flight coupon is one redeemable component within an e-ticket; a single e-ticket may hold up to four coupons.
- **E-ticket** vs [Admission](/ground/rail/admission.md) — Admission is the abstract entitlement in the OSDM offer; an air E-ticket is the issued fulfillment document. In rail the issued document is the fulfillment, not the admission itself.
- **E-ticket** vs [Flexible Content Barcode (FCB)](/ground/rail/flexible-content-barcode-fcb.md) — FCB is a self-validating, offline-checkable rail barcode; an air E-ticket is a coupon record held in a host system and validated against it. FCB enables PNR-less control, unlike GDS/host-dependent e-tickets.
- **E-ticket** vs [Fulfillment (Rail)](/ground/rail/fulfillment-rail.md) — Rail fulfillment is the OSDM concept of realizing a controllable ticket from a booking; the air E-ticket is one specific issued document. Rail fulfillment commonly relies on a barcode/control number rather than a GDS-style ticket coupon.
- **E-ticket** vs [Interline Electronic Ticket (IET)](/air/air-ticket/interline-electronic-ticket-iet.md) — A plain e-ticket may have all coupons on one carrier; an IET is specifically an e-ticket whose coupons span multiple carriers and therefore requires interline e-ticketing agreements and proration.
- **E-ticket** vs [Interline Electronic Ticketing](/air/air-partner/interline-electronic-ticketing.md) — An e-ticket is the electronic record of a single carrier's ticket; IET extends that concept so coupons on one electronic ticket can span and be honored by multiple interlining carriers.
- **E-ticket** vs [Itinerary](/air/air-ops/itinerary.md) — The e-ticket is the electronic record of the contract of carriage and coupons; the Itinerary/Receipt is the human-readable summary issued alongside it. They are related documents, not the same artifact.
- **E-ticket** vs [MCO (Miscellaneous Charges Order)](/air/air-ticket/mco-miscellaneous-charges-order.md) — An e-ticket records the carriage of a passenger on flight coupons; an MCO/EMD records non-flight value such as fees, deposits, or residual amounts.
- **E-ticket** vs [ONE Order](/common/standards/one-order.md) — ONE Order's single Order record is designed to replace document-based e-tickets (and EMDs) with order-level accounting and fulfillment.
- **E-ticket** vs [Standard Traffic Document (STD)](/air/air-ticket/standard-traffic-document-std.md) — An e-ticket is one type of STD (the neutral electronic ticket). STD is the broader document-control category that also covers EMDs/virtual MPDs and refund vouchers issued from the same controlled, neutral stock.
- **E-ticket** vs [Transitional Stored Ticket (TST)](/air/air-ticket/transitional-stored-ticket-tst.md) — The TST is the pre-issuance pricing record held in the PNR; the e-ticket is the accountable document created from the TST and stored in the validating carrier's ticketing database. The TST can be edited and repriced; once an e-ticket is issued, changes require reissue/revalidation.

# Citations
[1] [IATA — Electronic Ticketing](https://www.iata.org/en/publications/manuals/ticketing-handbook/)
[2] [IATA — Passenger Services Conference Resolutions Manual (PSCRM)](https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/)
