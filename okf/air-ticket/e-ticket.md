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
relationships:
  - type: parent
    targetTerm: Flight Coupon
  - type: related
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
sources:
  - name: Electronic Ticketing
    org: IATA
    version: ''
    section: ''
    url: ''
  - name: Passenger Services Conference Resolutions Manual (PSCRM)
    org: IATA
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="14" width="36" height="20" rx="3"/><path d="M22 14v20"/><path d="M22 19v2M22 25v2M22 31v0"/><path d="M28 21h8M28 27h6"/><path d="M11 24h6"/></svg>
---

> An electronic record of a passenger's transportation entitlement held in the issuing/validating carrier's (or BSP) database, identified by a 13-digit ticket number, that replaces the traditional paper ticket. IATA mandated 100% electronic ticketing for BSP-issued air transport documents from 1 June 2008.

An e-ticket comprises ticket-level data (passenger name, fare calculation, form of payment, endorsements/restrictions) plus one or more flight coupons, each tied to a flight segment with its own coupon status (e.g., OPEN FOR USE, AIRPORT CONTROL/CHECKED IN, FLOWN/USED, REFUNDED, VOID, EXCHANGED). The 13-digit number consists of a 3-digit airline accounting code (e.g., 006 for Delta), a form/serial portion, and a check digit. The e-ticket is the standard document for carriage of passengers; EMDs are the analogous electronic document for ancillary and non-flight charges.

**한국어 / Korean** — **전자항공권 (E-ticket)** — 발권/Validating Carrier(또는 BSP)의 데이터베이스에 보관되는 승객의 운송 권리에 대한 전자 기록으로, 13자리 항공권 번호로 식별되며 기존의 종이 항공권을 대체한다. IATA는 2008년 6월 1일부터 BSP 발권 항공운송 서류에 대해 100% 전자 발권을 의무화했다.

전자항공권은 항공권 단위 데이터(승객명, 운임 계산, 지불 수단, 배서/제한 사항)와 하나 이상의 Flight Coupon으로 구성되며, 각 쿠폰은 특정 비행 구간에 연결되어 고유한 쿠폰 상태(예: OPEN FOR USE, AIRPORT CONTROL/CHECKED IN, FLOWN/USED, REFUNDED, VOID, EXCHANGED)를 가진다. 13자리 번호는 3자리 항공사 회계 코드(예: 델타항공의 경우 006), 폼/일련번호 부분, 그리고 체크 디지트로 구성된다. 전자항공권은 승객 운송을 위한 표준 서류이며, EMD는 부가 서비스 및 비항공 요금에 대응하는 전자 서류이다.

**Aliases:** `Electronic Ticket`, `ETKT`, `Electronic Ticketing`

# Related
- [Flight Coupon](/air-ticket/flight-coupon.md) — parent
- [EMD](/air-ticket/emd.md) — related
- [Validating Carrier](/air-ticket/validating-carrier.md) — related
- [BSP](/pay/bsp.md) — related
- [PNR](/air-ops/pnr.md) — related

# Distinctions
- **E-ticket** vs [EMD](/air-ticket/emd.md) — E-ticket documents flight transportation; EMD documents ancillary services, fees, and non-air charges.
- **E-ticket** vs [PNR](/air-ops/pnr.md) — PNR is the reservation record; the e-ticket is the issued transport document that fulfills it.
- **E-ticket** vs [Flight Coupon](/air-ticket/flight-coupon.md) — A flight coupon is one redeemable component within an e-ticket; a single e-ticket may hold up to four coupons.

# Citations
[1] IATA — Electronic Ticketing
[2] IATA — Passenger Services Conference Resolutions Manual (PSCRM)
