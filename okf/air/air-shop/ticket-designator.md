---
type: Standard Term
title: Ticket Designator
description: 'A Ticket Designator is a code (1–8 characters) appended to a fare basis code after a slash delimiter to indicate the passenger category or discount type for which the fare is authorized. Airlines file ticket designators in ATPCO alongside their fares, and reservations systems strip the designator from the fare basis when displaying the basis on the ticket; they serve as the carrier-defined authorization signal distinguishing, for example, a corporate-discount fare (CD) from an industry-discount fare (ID).'
tags:
  - air-shop
  - active
  - ATPCO
timestamp: '2026-10-02T00:00:00Z'
id: ticket-designator
vertical: air
category: air-shop
conceptType: standard-term
status: active
term_ko: 티켓 지정자(Ticket Designator)
definition_ko: 'Ticket Designator는 운임 기준 코드(fare basis code) 뒤에 슬래시(/) 구분자 다음에 붙는 1~8자리 코드로, 해당 운임이 허가된 승객 범주 또는 할인 유형을 나타낸다. 항공사는 ATPCO에 운임과 함께 ticket designator를 등록하며, 예약 시스템은 항공권에 운임 기준 코드를 표시할 때 designator를 분리한다. 예를 들어 기업 할인 운임(CD)과 업계 할인 운임(ID)을 구분하는 항공사 정의 인증 신호 역할을 한다.'
longDef: 'Airlines register ticket designators in ATPCO Table 173. The designator is appended to the filed fare basis to form the full fare basis that appears on itinerary displays (e.g., YLOWCD for a Y-class low fare with corporate designator CD), but systems typically display only the base fare basis on the ticket itself. Common designator categories include: corporate (CD), industry/staff (ID), press/media (PV), emergency (EM), bereavement (BR), senior/youth (SD/YD), companion (CP), and promotional codes specific to individual carriers. The designator controls who may purchase the fare without requiring a separate booking class — this is important because multiple discount types can share a single booking class (RBD) while remaining separately authorized and auditable. Misuse of a ticket designator (e.g., claiming corporate discount without eligibility) is an audit risk and may result in debit memos from the carrier.'
longDef_ko: '항공사는 ATPCO Table 173에 ticket designator를 등록한다. Designator는 등록된 fare basis에 추가되어 여정 표시에 전체 fare basis(예: YLOWCD — Y클래스 저가 운임 + 기업 designator CD)가 되지만, 시스템은 보통 항공권에 기본 fare basis만 표시한다. 일반적인 designator 범주로는 기업(CD), 업계/직원(ID), 언론/미디어(PV), 응급(EM), 조문(BR), 시니어/청소년(SD/YD), 동반자(CP) 및 항공사별 프로모션 코드가 있다. Designator는 별도의 예약 클래스(RBD) 없이도 구매 자격을 통제하여, 여러 할인 유형이 단일 예약 클래스를 공유하면서도 별도로 인가되고 감사 추적이 가능하다. Ticket designator의 오용(예: 자격 없이 기업 할인 주장)은 감사 위험이 되며 항공사 debit memo로 이어질 수 있다.'
standardBody: ATPCO
aliases:
  - Fare Designator
  - Discount Designator
relationships:
  - type: related
    targetTerm: Fare Basis Code
  - type: related
    targetTerm: RBD
  - type: related
    targetTerm: Negotiated Fare
  - type: related
    targetTerm: Corporate Rate
  - type: parent
    targetTerm: ATPCO
distinctions:
  - targetTerm: Fare Basis Code
    explanation: 'The fare basis code identifies the specific fare (class, booking conditions, etc.); the ticket designator is an authorization suffix appended to that code that restricts who may use the fare. A fare basis code can exist without a designator; a designator cannot exist without a fare basis code.'
    explanation_ko: 'Fare basis code는 특정 운임(클래스, 예약 조건 등)을 식별하고, ticket designator는 그 코드에 추가된 인증 접미사로 해당 운임을 사용할 수 있는 사람을 제한한다. Fare basis code는 designator 없이 존재할 수 있지만, designator는 fare basis code 없이 존재할 수 없다.'
  - targetTerm: RBD
    explanation: 'An RBD (Reservation Booking Designator) is a single-letter class code that drives inventory control and revenue management; a ticket designator is a multi-character authorization suffix that identifies the discount category within one or more RBDs without creating additional booking classes.'
    explanation_ko: 'RBD는 재고 통제와 수익 관리를 구동하는 단일 문자 클래스 코드이고, ticket designator는 추가 예약 클래스 없이 하나 이상의 RBD 내 할인 범주를 식별하는 다중 문자 인증 접미사이다.'
sources:
  - name: Glossary — Ticket Designator
    org: ATPCO
    version: ''
    section: ''
    url: 'https://www.atpco.net/glossary'
    tier: standard-body
  - name: Fare Basis Codes Reference
    org: Travelport (uAPI documentation)
    version: ''
    section: ''
    url: 'https://support.travelport.com/webhelp/uapi/Content/Air/Shared_Air_Topics/Fare_Basis_Codes.htm'
    tier: vendor-doc
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="16" width="36" height="16" rx="3"/><circle cx="14" cy="24" r="3"/><circle cx="34" cy="24" r="3"/><line x1="20" y1="21" x2="28" y2="21"/><line x1="20" y1="27" x2="28" y2="27"/><line x1="30" y1="9" x2="36" y2="9"/><line x1="33" y1="6" x2="33" y2="12"/></svg>
---

> A Ticket Designator is a code (1–8 characters) appended to a fare basis code after a slash delimiter to indicate the passenger category or discount type for which the fare is authorized. Airlines file ticket designators in ATPCO alongside their fares, and reservations systems strip the designator from the fare basis when displaying the basis on the ticket; they serve as the carrier-defined authorization signal distinguishing, for example, a corporate-discount fare (CD) from an industry-discount fare (ID).

Airlines register ticket designators in ATPCO Table 173. The designator is appended to the filed fare basis to form the full fare basis that appears on itinerary displays (e.g., YLOWCD for a Y-class low fare with corporate designator CD), but systems typically display only the base fare basis on the ticket itself. Common designator categories include: corporate (CD), industry/staff (ID), press/media (PV), emergency (EM), bereavement (BR), senior/youth (SD/YD), companion (CP), and promotional codes specific to individual carriers. The designator controls who may purchase the fare without requiring a separate booking class — this is important because multiple discount types can share a single booking class (RBD) while remaining separately authorized and auditable. Misuse of a ticket designator is an audit risk and may result in debit memos from the carrier.

**한국어 / Korean** — **티켓 지정자(Ticket Designator)** — Ticket Designator는 운임 기준 코드(fare basis code) 뒤에 슬래시(/) 구분자 다음에 붙는 1~8자리 코드로, 해당 운임이 허가된 승객 범주 또는 할인 유형을 나타낸다. 항공사는 ATPCO에 운임과 함께 ticket designator를 등록하며, 예약 시스템은 항공권에 운임 기준 코드를 표시할 때 designator를 분리한다.

**Aliases:** `Fare Designator`, `Discount Designator`

# Related
- [Fare Basis Code](/air/air-shop/fare-basis-code.md) — related
- [RBD](/air/air-shop/rbd.md) — related
- [Negotiated Fare](/air/air-shop/negotiated-fare.md) — related
- [Corporate Rate](/lodging/hotel-rate/corporate-rate.md) — related
- [ATPCO](/air/air-shop/atpco.md) — parent

# Distinctions
- **Ticket Designator** vs [Fare Basis Code](/air/air-shop/fare-basis-code.md) — The fare basis code identifies the specific fare (class, booking conditions, etc.); the ticket designator is an authorization suffix appended to that code that restricts who may use the fare. A fare basis code can exist without a designator; a designator cannot exist without a fare basis code.
- **Ticket Designator** vs [RBD](/air/air-shop/rbd.md) — An RBD (Reservation Booking Designator) is a single-letter class code that drives inventory control and revenue management; a ticket designator is a multi-character authorization suffix that identifies the discount category within one or more RBDs without creating additional booking classes.

# Citations
[1] [ATPCO — Glossary: Ticket Designator](https://www.atpco.net/glossary)
[2] [Travelport uAPI — Fare Basis Codes Reference](https://support.travelport.com/webhelp/uapi/Content/Air/Shared_Air_Topics/Fare_Basis_Codes.htm)
