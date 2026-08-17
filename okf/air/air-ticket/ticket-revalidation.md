---
type: Process
title: Ticket Revalidation
description: 'Ticket revalidation is the process of updating the flight coupon data of an existing e-ticket—changing the flight date, flight number, or departure/arrival times—without generating a new ticket document or a new ticket number. Revalidation is permitted only when the carrier, fare, class of service, routing, and origin/destination remain unchanged, and the coupon status is Open or Airport-controlled. It is governed by IATA Resolution 722 and is the least disruptive form of voluntary or involuntary flight change.'
tags:
  - air-ticket
  - active
  - IATA
timestamp: '2026-08-17T00:00:00Z'
id: ticket-revalidation
vertical: air
category: air-ticket
conceptType: process
status: active
term_ko: 항공권 재확인(Revalidation)
definition_ko: '항공권 재확인(Ticket Revalidation)은 기존 전자 항공권의 비행 쿠폰 데이터—비행 날짜, 편명, 출·도착 시각—를 새로운 항공권 문서나 항공권 번호 발행 없이 업데이트하는 절차다. 항공사, 운임, 좌석 등급, 노선, 출·도착지가 변경되지 않고 쿠폰 상태가 Open 또는 Airport-controlled인 경우에만 허용된다. IATA Resolution 722에 의해 규율되며, 자발적 또는 비자발적 항공편 변경 중 가장 덜 복잡한 방식이다.'
longDef: 'A revalidation differs from a reissue or exchange in that it does not produce a new accountable document: the original 13-digit ticket number is retained, no additional collection (ADC) or refund is processed, and no new BSP/ARC transaction is generated. To qualify for revalidation: (1) the same carrier must operate both the original and new flight; (2) the fare, class of service (RBD), and routing must be identical; (3) no change in origin or destination is permitted; (4) the coupon status must be Open (O) or Airport-controlled (A). In GDS environments, revalidation is executed via a specific command (e.g., "TRVA" in Galileo) that stamps an "RV" indicator on the coupon to signal that the flight details have been officially altered. Carriers use revalidation to rebook passengers onto later flights of the same class in the event of minor schedule adjustments, operational reflows, or voluntary same-day changes without a fare difference. Where any of the revalidation conditions are not met—different carrier, class upgrade, different routing, or a fare difference arises—a full exchange or reissue is required instead.'
longDef_ko: '재확인(Revalidation)은 재발행(Reissue) 또는 교환(Exchange)과 달리 새로운 회계 문서를 생성하지 않는다. 기존 13자리 항공권 번호가 유지되고 추가 징수(ADC)나 환급이 처리되지 않으며 BSP/ARC 신규 거래도 발생하지 않는다. 재확인 자격 요건: (1) 동일 항공사가 원래 및 신규 항공편 모두 운항, (2) 운임·좌석 등급(RBD)·노선이 동일, (3) 출·도착지 변경 불가, (4) 쿠폰 상태가 Open(O) 또는 Airport-controlled(A). GDS 환경에서는 특정 명령(예: Galileo의 "TRVA")으로 재확인을 실행하고 항공편 세부 사항이 공식 변경되었음을 나타내는 "RV" 표시가 쿠폰에 찍힌다. 항공사는 소규모 일정 조정, 운항 리플로우 또는 운임 차이 없는 자발적 당일 변경 시 동일 등급 후속 항공편으로 승객을 재예약하는 데 재확인을 사용한다. 재확인 조건 중 하나라도 미충족—다른 항공사, 등급 업그레이드, 다른 노선, 운임 차이 발생—시 전체 교환 또는 재발행이 필요하다.'
standardBody: IATA
aliases:
  - Revalidation
  - ETR Revalidation
  - Coupon Revalidation
relationships:
  - type: contrasts
    targetTerm: Exchange
  - type: contrasts
    targetTerm: Reissue
  - type: related
    targetTerm: Involuntary Reissue
  - type: related
    targetTerm: Flight Coupon
  - type: related
    targetTerm: Coupon Status
  - type: related
    targetTerm: E-ticket
distinctions:
  - targetTerm: Exchange
    explanation: 'An exchange is the process of surrendering an existing ticket and issuing a new one with a new ticket number, often involving fare recalculation, ADC, or residual value—applied when carrier, class, routing, or fare changes. Revalidation is a simpler coupon update with no new ticket number when nothing material changes.'
    explanation_ko: '교환(Exchange)은 기존 항공권을 반납하고 새 항공권 번호로 신규 발행하는 절차로 운임 재산정, ADC, 잔여 가치 처리를 포함하며 항공사·등급·노선·운임이 변경될 때 적용된다. 재확인(Revalidation)은 실질적인 변경이 없을 때 새 항공권 번호 없이 쿠폰 데이터만 업데이트하는 더 간단한 절차다.'
  - targetTerm: Reissue
    explanation: 'Reissue is synonymous with exchange in IATA terminology—a new 13-digit ticket document is produced. Revalidation retains the original ticket number and is used only when conditions (same carrier, class, routing, no fare difference) are all met.'
    explanation_ko: '재발행(Reissue)은 IATA 용어에서 교환(Exchange)과 동의어로 새 13자리 항공권 문서가 생성된다. 재확인(Revalidation)은 원래 항공권 번호를 유지하며 동일 항공사·등급·노선·운임 차이 없음 등 조건이 모두 충족될 때만 사용된다.'
  - targetTerm: Involuntary Reissue
    explanation: 'An involuntary reissue is carrier-initiated and results in a new ticket document, typically when a schedule change causes a class or routing difference that cannot be handled by simple revalidation. Revalidation is used for the simpler scenario: a carrier-initiated flight number or time change within the same class and routing.'
    explanation_ko: '비자발적 재발행(Involuntary Reissue)은 항공사 주도로 등급이나 노선 차이가 발생하는 일정 변경 시 새 항공권 문서를 발행한다. 재확인(Revalidation)은 동일 등급·노선 내 항공사 주도의 편명 또는 시각 변경이라는 더 단순한 시나리오에 사용된다.'
  - targetTerm: Flight Coupon
    explanation: 'A flight coupon is the accountable portion of the e-ticket that represents the entitlement to travel on one specific flight segment; revalidation updates the coupon''s flight details (flight number, date, times) while keeping the coupon itself intact and its ticket number unchanged.'
    explanation_ko: '비행 쿠폰(Flight Coupon)은 하나의 특정 항공편 구간에 대한 여행 권리를 나타내는 전자 항공권의 회계 구성 요소이며, 재확인(Revalidation)은 쿠폰과 항공권 번호를 그대로 유지하면서 쿠폰의 항공편 정보(편명, 날짜, 시각)를 업데이트한다.'
sources:
  - name: Passenger Services Conference Resolutions Manual (PSCRM) — Resolution 722
    org: IATA
    version: 46th Edition (2026)
    section: Resolution 722 — Electronic Ticket
    url: 'https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/'
    tier: association
  - name: Revalidating ETRs (Electronic Ticket Records)
    org: Travelport (Galileo / Apollo)
    version: ''
    section: ''
    url: 'https://support.travelport.com/webhelp/Smartpoint1P/Content/Air/Ticketing/Revalidating_ETRs.htm'
    tier: vendor-doc
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="10" width="36" height="28" rx="3"/><line x1="6" y1="18" x2="42" y2="18"/><line x1="18" y1="10" x2="18" y2="38"/><path d="M26 27l4 4 6-7"/></svg>
---

> Ticket revalidation is the process of updating the flight coupon data of an existing e-ticket—changing the flight date, flight number, or departure/arrival times—without generating a new ticket document or a new ticket number. Revalidation is permitted only when the carrier, fare, class of service, routing, and origin/destination remain unchanged, and the coupon status is Open or Airport-controlled. It is governed by IATA Resolution 722 and is the least disruptive form of voluntary or involuntary flight change.

A revalidation differs from a reissue or exchange in that it does not produce a new accountable document: the original 13-digit ticket number is retained, no additional collection (ADC) or refund is processed, and no new BSP/ARC transaction is generated. To qualify: (1) the same carrier must operate both original and new flight; (2) fare, class (RBD), and routing must be identical; (3) no change in origin/destination; (4) coupon status must be Open (O) or Airport-controlled (A). In GDS environments, revalidation is executed via a specific command (e.g., "TRVA" in Galileo) that stamps an "RV" indicator on the coupon. Where any condition is not met—different carrier, class upgrade, different routing, or fare difference—a full exchange or reissue is required instead.

**한국어 / Korean** — **항공권 재확인(Revalidation)** — 항공권 재확인은 기존 전자 항공권의 비행 쿠폰 데이터를 새로운 항공권 문서나 번호 발행 없이 업데이트하는 절차다. 동일 항공사·운임·등급·노선이 유지되고 쿠폰 상태가 Open 또는 Airport-controlled인 경우에만 허용되며, IATA Resolution 722에 의해 규율된다. 재확인은 새 항공권 번호·ADC·BSP 거래를 생성하지 않으며, 조건 미충족 시 전체 교환·재발행이 필요하다.

**Aliases:** `Revalidation`, `ETR Revalidation`, `Coupon Revalidation`

# Related
- [Exchange](/air/air-ticket/exchange.md) — contrasts
- [Reissue](/air/air-ticket/reissue.md) — contrasts
- [Involuntary Reissue](/air/air-ticket/involuntary-reissue.md) — related
- [Flight Coupon](/air/air-ticket/flight-coupon.md) — related
- [Coupon Status](/air/air-ticket/coupon-status.md) — related
- [E-ticket](/air/air-ticket/e-ticket.md) — related

# Distinctions
- **Ticket Revalidation** vs [Exchange](/air/air-ticket/exchange.md) — An exchange surrenders the existing ticket and issues a new one with a new number, often involving fare recalculation and ADC; revalidation is a simpler coupon update with no new ticket number when nothing material changes.
- **Ticket Revalidation** vs [Reissue](/air/air-ticket/reissue.md) — Reissue = exchange in IATA terms: new 13-digit ticket document produced. Revalidation retains the original ticket number and applies only when same carrier, class, routing, and no fare difference conditions are all met.
- **Ticket Revalidation** vs [Involuntary Reissue](/air/air-ticket/involuntary-reissue.md) — An involuntary reissue results in a new ticket document for carrier-initiated changes where class or routing differences arise; revalidation covers the simpler case of a flight number or time change within the same class and routing.
- **Ticket Revalidation** vs [Flight Coupon](/air/air-ticket/flight-coupon.md) — A flight coupon is the accountable unit representing entitlement to travel on one segment; revalidation updates the coupon's flight details while keeping the coupon and ticket number intact.

# Citations
[1] [IATA — Passenger Services Conference Resolutions Manual (PSCRM) — Resolution 722](https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/)
[2] [Travelport — Revalidating ETRs (Electronic Ticket Records)](https://support.travelport.com/webhelp/Smartpoint1P/Content/Air/Ticketing/Revalidating_ETRs.htm)
