---
type: Standard
title: Interline Electronic Ticketing
description: 'The capability for two airlines to issue, exchange, and accept each other''s electronic ticket coupons on a single itinerary, governed by IATA''s e-ticketing standards (notably Resolution 722f). IET lets a passenger hold one electronic ticket whose coupons span multiple carriers, and it is the technical prerequisite for modern interline travel and for re-accommodating passengers onto partner airlines during disruptions.'
tags:
  - air-partner
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: interline-electronic-ticketing
vertical: air
category: air-partner
conceptType: standard
status: active
abbreviation: IET
term_ko: 인터라인 전자항공권(IET)
definition_ko: '두 항공사가 하나의 여정에서 서로의 전자항공권 쿠폰을 발행·교환·인수할 수 있는 기능으로, IATA의 e-ticketing 표준(특히 Resolution 722f)에 따라 규율된다. IET를 통해 승객은 여러 항공사를 가로지르는 쿠폰을 가진 하나의 전자항공권을 보유할 수 있으며, 이는 현대적 인터라인 여행과 운항 중단 시 파트너 항공사로의 승객 재수용을 위한 기술적 전제 조건이다.'
longDef: 'Interline electronic ticketing (IET) replaced the paper interline ticket: instead of physically endorsing a coupon to another carrier, the validating carrier issues an electronic ticket whose coupons can be ''owned'' and used on a partner airline, with the two carriers'' systems exchanging coupon status and settlement data. Carriers must build a bilateral IET link (typically a Bilateral Interline E-ticketing Agreement, BIETA) on top of their interline traffic agreement before they can interline electronically. IET is what makes through-checking, online coupon status updates, and—critically—real-time involuntary re-accommodation onto a partner during IROPS possible. It is settled financially through interline billing and the IATA Clearing House and underlies the standard interline framework alongside MITA/BIETA.'
longDef_ko: '인터라인 전자항공권(IET)은 종이 인터라인 항공권을 대체했다. 쿠폰을 물리적으로 다른 항공사에 배서(endorse)하는 대신, 발권 항공사(validating carrier)가 전자항공권을 발행하면 그 쿠폰을 파트너 항공사가 ''소유''하고 사용할 수 있으며, 두 항공사의 시스템이 쿠폰 상태와 정산 데이터를 교환한다. 항공사가 전자적으로 인터라인하려면 인터라인 운송 협정 위에 양자 IET 링크(일반적으로 BIETA, Bilateral Interline E-ticketing Agreement)를 구축해야 한다. IET는 일관 위탁(through-checking), 실시간 쿠폰 상태 갱신, 그리고 결정적으로 IROPS 중 파트너로의 실시간 비자발적 재수용을 가능하게 한다. 그 결과는 인터라인 청구와 IATA Clearing House를 통해 재무적으로 정산되며, MITA/BIETA와 함께 표준 인터라인 체계의 기반을 이룬다.'
standardBody: IATA
aliases:
  - IET
  - Interline Electronic Ticketing
  - Interline E-ticketing
  - Interline E-Ticket
  - IeT
providerTerms:
  - provider: IATA
    term: Interline e-ticketing (Resolution 722f)
    context: 'IATA Resolution 722f governs the EDIFACT interline electronic ticketing standard that lets two airlines issue, exchange, and accept each other''s e-ticket coupons on a single itinerary.'
    context_ko: IATA Resolution 722f는 두 항공사가 단일 여정에서 서로의 전자항공권 쿠폰을 발권·교환·인수할 수 있게 하는 EDIFACT 인터라인 전자발권 표준을 규정한다.
    relationship: same
relationships:
  - type: related
    targetTerm: Interline
  - type: related
    targetTerm: MITA
  - type: related
    targetTerm: E-ticket
  - type: related
    targetTerm: Flight Coupon
  - type: related
    targetTerm: Re-accommodation
  - type: related
    targetTerm: Validating Carrier
distinctions:
  - targetTerm: Interline
    explanation: Interline is the commercial agreement to accept another carrier's ticket; IET is the specific electronic-ticketing capability that makes that acceptance work on e-tickets rather than paper coupons.
    explanation_ko: '인터라인은 다른 항공사의 항공권을 인수하기로 하는 상업적 협정이고, IET는 그 인수를 종이 쿠폰이 아닌 전자항공권으로 작동하게 하는 구체적인 전자발권 기능이다.'
  - targetTerm: MITA
    explanation: MITA establishes the standard multilateral interline relationship; IET is the technical e-ticketing layer (and BIETA the bilateral link) that two MITA carriers must implement to exchange electronic coupons.
    explanation_ko: 'MITA는 표준 다자간 인터라인 관계를 수립하고, IET는 두 MITA 항공사가 전자 쿠폰을 교환하기 위해 구현해야 하는 기술적 전자발권 계층(그리고 BIETA는 그 양자 링크)이다.'
  - targetTerm: E-ticket
    explanation: An e-ticket is the electronic record of a single carrier's ticket; IET extends that concept so coupons on one electronic ticket can span and be honored by multiple interlining carriers.
    explanation_ko: '전자항공권은 단일 항공사 항공권의 전자 기록이고, IET는 그 개념을 확장하여 하나의 전자항공권상의 쿠폰이 여러 인터라인 항공사를 가로질러 인정될 수 있도록 한다.'
sources:
  - name: Multilateral & Bilateral Interline Traffic Agreements (MITA & BIETA) — interline e-ticketing
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/multilateral-interline-traffic-agreements/'
    tier: association
  - name: 'Passenger Services Conference Resolutions Manual (PSCRM), Resolution 722f (Electronic Ticketing)'
    org: IATA
    version: 46th edition (2026)
    section: Resolution 722f
    url: 'https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/'
    tier: association
    verifyQuote: 'Significant Changes and Amendments to the 46th edition (2026): Resolutions 722 (f,g,h) - Updated text to state the no show indicator shall be included in the display response when set, and shall only be in the history when deleted.'
    verified: true
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="14" width="20" height="14" rx="2"/><path d="M6 19h20"/><path d="M10 24h6"/><rect x="24" y="22" width="18" height="14" rx="2"/><path d="M24 27h18"/><path d="M28 32h6"/><path d="M26 18l4 4-4 4" /></svg>
---

> The capability for two airlines to issue, exchange, and accept each other's electronic ticket coupons on a single itinerary, governed by IATA's e-ticketing standards (notably Resolution 722f). IET lets a passenger hold one electronic ticket whose coupons span multiple carriers, and it is the technical prerequisite for modern interline travel and for re-accommodating passengers onto partner airlines during disruptions.

Interline electronic ticketing (IET) replaced the paper interline ticket: instead of physically endorsing a coupon to another carrier, the validating carrier issues an electronic ticket whose coupons can be 'owned' and used on a partner airline, with the two carriers' systems exchanging coupon status and settlement data. Carriers must build a bilateral IET link (typically a Bilateral Interline E-ticketing Agreement, BIETA) on top of their interline traffic agreement before they can interline electronically. IET is what makes through-checking, online coupon status updates, and—critically—real-time involuntary re-accommodation onto a partner during IROPS possible. It is settled financially through interline billing and the IATA Clearing House and underlies the standard interline framework alongside MITA/BIETA.

**한국어 / Korean** — **인터라인 전자항공권(IET)** — 두 항공사가 하나의 여정에서 서로의 전자항공권 쿠폰을 발행·교환·인수할 수 있는 기능으로, IATA의 e-ticketing 표준(특히 Resolution 722f)에 따라 규율된다. IET를 통해 승객은 여러 항공사를 가로지르는 쿠폰을 가진 하나의 전자항공권을 보유할 수 있으며, 이는 현대적 인터라인 여행과 운항 중단 시 파트너 항공사로의 승객 재수용을 위한 기술적 전제 조건이다.

인터라인 전자항공권(IET)은 종이 인터라인 항공권을 대체했다. 쿠폰을 물리적으로 다른 항공사에 배서(endorse)하는 대신, 발권 항공사(validating carrier)가 전자항공권을 발행하면 그 쿠폰을 파트너 항공사가 '소유'하고 사용할 수 있으며, 두 항공사의 시스템이 쿠폰 상태와 정산 데이터를 교환한다. 항공사가 전자적으로 인터라인하려면 인터라인 운송 협정 위에 양자 IET 링크(일반적으로 BIETA, Bilateral Interline E-ticketing Agreement)를 구축해야 한다. IET는 일관 위탁(through-checking), 실시간 쿠폰 상태 갱신, 그리고 결정적으로 IROPS 중 파트너로의 실시간 비자발적 재수용을 가능하게 한다. 그 결과는 인터라인 청구와 IATA Clearing House를 통해 재무적으로 정산되며, MITA/BIETA와 함께 표준 인터라인 체계의 기반을 이룬다.

**Aliases:** `IET`, `Interline Electronic Ticketing`, `Interline E-ticketing`, `Interline E-Ticket`, `IeT`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| IATA | `Interline e-ticketing (Resolution 722f)` | same | IATA Resolution 722f governs the EDIFACT interline electronic ticketing standard that lets two airlines issue, exchange, and accept each other's e-ticket coupons on a single itinerary. |

# Related
- [Interline](/air/air-partner/interline.md) — related
- [MITA](/air/air-partner/mita.md) — related
- [E-ticket](/air/air-ticket/e-ticket.md) — related
- [Flight Coupon](/air/air-ticket/flight-coupon.md) — related
- [Re-accommodation](/air/air-partner/re-accommodation.md) — related
- [Validating Carrier](/air/air-ticket/validating-carrier.md) — related

# Distinctions
- **Interline Electronic Ticketing** vs [Interline](/air/air-partner/interline.md) — Interline is the commercial agreement to accept another carrier's ticket; IET is the specific electronic-ticketing capability that makes that acceptance work on e-tickets rather than paper coupons.
- **Interline Electronic Ticketing** vs [MITA](/air/air-partner/mita.md) — MITA establishes the standard multilateral interline relationship; IET is the technical e-ticketing layer (and BIETA the bilateral link) that two MITA carriers must implement to exchange electronic coupons.
- **Interline Electronic Ticketing** vs [E-ticket](/air/air-ticket/e-ticket.md) — An e-ticket is the electronic record of a single carrier's ticket; IET extends that concept so coupons on one electronic ticket can span and be honored by multiple interlining carriers.

# Citations
[1] [IATA — Multilateral & Bilateral Interline Traffic Agreements (MITA & BIETA) — interline e-ticketing](https://www.iata.org/en/publications/manuals/multilateral-interline-traffic-agreements/)
[2] [IATA — Passenger Services Conference Resolutions Manual (PSCRM), Resolution 722f (Electronic Ticketing) — 46th edition (2026) — Resolution 722f](https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/)
