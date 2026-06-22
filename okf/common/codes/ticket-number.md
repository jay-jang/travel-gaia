---
type: Code
title: Ticket Number
description: 'The 13-digit number that uniquely identifies an airline ticket/transport document. It is structured as a 3-digit airline (accounting) code, a 4-digit form code, a 6-digit serial number, and a final check digit (e.g., 001-2345678901).'
tags:
  - codes
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: ticket-number
vertical: common
category: codes
conceptType: code
status: active
term_ko: 항공권 번호(전자항공권 번호)
definition_ko: '항공권/운송 서류를 고유하게 식별하는 13자리 번호. 3자리 항공사(정산) 코드, 4자리 form code, 6자리 일련번호, 마지막 검증 숫자(check digit)로 구성된다(예: 001-2345678901).'
longDef: 'Each flight coupon of an e-ticket is addressed by the document number plus a coupon number (1-4). When an itinerary needs more coupons than one document allows, conjunction tickets share a continuous serial range. Unlike a PNR locator (which references the whole reservation) or a flight number (which references a route/date), the ticket number references one passenger''s purchased document and is used for refunds, reissues, voids, exchanges, and BSP/ARC settlement. The leading three digits are the airline''s accounting code identifying the validating carrier.'
longDef_ko: '전자항공권의 각 비행 쿠폰(flight coupon)은 서류 번호에 쿠폰 번호(1~4)를 더해 지정된다. 여정에 한 서류가 허용하는 쿠폰보다 많은 쿠폰이 필요하면, 연결권(conjunction ticket)이 연속된 일련번호 범위를 공유한다. 예약 전체를 가리키는 PNR 예약번호나 노선·날짜를 가리키는 편명과 달리, 항공권 번호는 한 승객이 구매한 서류 하나를 가리키며 환불·재발행·취소(void)·교환과 BSP/ARC 정산에 사용된다. 앞 세 자리는 검증 항공사(validating carrier)를 식별하는 항공사 정산 코드이다.'
standardBody: IATA
aliases:
  - E-Ticket Number
  - Document Number
  - Airline Ticket Number
  - Electronic Ticket Number
relationships:
  - type: related
    targetTerm: E-ticket
  - type: related
    targetTerm: Flight Coupon
  - type: related
    targetTerm: Airline Accounting Code
  - type: related
    targetTerm: PNR
  - type: related
    targetTerm: Reissue
  - type: related
    targetTerm: Refund
  - type: related
    targetTerm: Validating Carrier
distinctions:
  - targetTerm: PNR
    explanation: A PNR locator references the whole reservation (which may hold several passengers and tickets); a ticket number references a single passenger's transport document of 13 digits.
    explanation_ko: 'PNR 예약번호는 (여러 승객·여러 항공권을 포함할 수 있는) 예약 전체를 가리키고, 항공권 번호는 한 승객의 13자리 운송 서류 하나를 가리킨다.'
  - targetTerm: Airline Accounting Code
    explanation: The accounting code is only the first 3 digits identifying the airline; the ticket number is the full 13-digit document number that contains it.
    explanation_ko: '정산 코드는 항공사를 식별하는 앞 3자리에 불과하고, 항공권 번호는 그것을 포함하는 13자리 전체 서류 번호이다.'
  - targetTerm: Air Waybill Number
    explanation: 'A ticket number identifies a passenger document and embeds the 3-digit airline accounting (numeric) code; an AWB number identifies a cargo consignment and embeds the 3-digit IATA airline prefix, with a modulo-7 check digit on the serial.'
    explanation_ko: 'Ticket Number는 여객 발권 문서를 식별하며 3자리 항공사 회계(숫자) 코드를 포함하는 반면, AWB 번호는 화물 consignment를 식별하며 3자리 IATA 항공사 prefix를 포함하고 일련번호에 modulo-7 check digit을 둔다.'
  - targetTerm: License Plate Number
    explanation: A ticket number identifies the passenger's transportation document; the LPN identifies the physical bag and is recorded against the passenger's record but is not the ticket.
    explanation_ko: '항공권 번호(ticket number)는 승객의 운송 문서를 식별하지만, LPN은 물리적 수하물을 식별하며 승객 기록에 연결되어 기록될 뿐 항공권 자체는 아니다.'
sources:
  - org: IATA
    name: Passenger Services Conference Resolutions Manual (PSCRM) — electronic ticket / document numbering
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/'
  - org: AltexSoft
    name: IATA Numbers and Codes Explained
    version: ''
    section: ''
    url: 'https://www.altexsoft.com/blog/iata-numbers-codes/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M6 14h36v8a3 3 0 000 6v6H6v-6a3 3 0 000-6z"/><path d="M24 14v26" stroke-dasharray="2 3"/><path d="M11 22h7M11 27h5"/><path d="M30 22h7M30 27h7M30 32h4"/></svg>
---

> The 13-digit number that uniquely identifies an airline ticket/transport document. It is structured as a 3-digit airline (accounting) code, a 4-digit form code, a 6-digit serial number, and a final check digit (e.g., 001-2345678901).

Each flight coupon of an e-ticket is addressed by the document number plus a coupon number (1-4). When an itinerary needs more coupons than one document allows, conjunction tickets share a continuous serial range. Unlike a PNR locator (which references the whole reservation) or a flight number (which references a route/date), the ticket number references one passenger's purchased document and is used for refunds, reissues, voids, exchanges, and BSP/ARC settlement. The leading three digits are the airline's accounting code identifying the validating carrier.

**한국어 / Korean** — **항공권 번호(전자항공권 번호)** — 항공권/운송 서류를 고유하게 식별하는 13자리 번호. 3자리 항공사(정산) 코드, 4자리 form code, 6자리 일련번호, 마지막 검증 숫자(check digit)로 구성된다(예: 001-2345678901).

전자항공권의 각 비행 쿠폰(flight coupon)은 서류 번호에 쿠폰 번호(1~4)를 더해 지정된다. 여정에 한 서류가 허용하는 쿠폰보다 많은 쿠폰이 필요하면, 연결권(conjunction ticket)이 연속된 일련번호 범위를 공유한다. 예약 전체를 가리키는 PNR 예약번호나 노선·날짜를 가리키는 편명과 달리, 항공권 번호는 한 승객이 구매한 서류 하나를 가리키며 환불·재발행·취소(void)·교환과 BSP/ARC 정산에 사용된다. 앞 세 자리는 검증 항공사(validating carrier)를 식별하는 항공사 정산 코드이다.

**Aliases:** `E-Ticket Number`, `Document Number`, `Airline Ticket Number`, `Electronic Ticket Number`

# Related
- [E-ticket](/air/air-ticket/e-ticket.md) — related
- [Flight Coupon](/air/air-ticket/flight-coupon.md) — related
- [Airline Accounting Code](/common/codes/airline-accounting-code.md) — related
- [PNR](/air/air-ops/pnr.md) — related
- [Reissue](/air/air-ticket/reissue.md) — related
- [Refund](/air/air-ticket/refund.md) — related
- [Validating Carrier](/air/air-ticket/validating-carrier.md) — related

# Distinctions
- **Ticket Number** vs [PNR](/air/air-ops/pnr.md) — A PNR locator references the whole reservation (which may hold several passengers and tickets); a ticket number references a single passenger's transport document of 13 digits.
- **Ticket Number** vs [Airline Accounting Code](/common/codes/airline-accounting-code.md) — The accounting code is only the first 3 digits identifying the airline; the ticket number is the full 13-digit document number that contains it.
- **Ticket Number** vs [Air Waybill Number](/common/codes/air-waybill-number.md) — A ticket number identifies a passenger document and embeds the 3-digit airline accounting (numeric) code; an AWB number identifies a cargo consignment and embeds the 3-digit IATA airline prefix, with a modulo-7 check digit on the serial.
- **Ticket Number** vs [License Plate Number](/common/codes/license-plate-number.md) — A ticket number identifies the passenger's transportation document; the LPN identifies the physical bag and is recorded against the passenger's record but is not the ticket.

# Citations
[1] [IATA — Passenger Services Conference Resolutions Manual (PSCRM) — electronic ticket / document numbering](https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/)
[2] [AltexSoft — IATA Numbers and Codes Explained](https://www.altexsoft.com/blog/iata-numbers-codes/)
