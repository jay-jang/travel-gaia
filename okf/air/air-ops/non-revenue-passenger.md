---
type: Business Term
title: Non-Revenue Passenger
description: 'A non-revenue passenger (NRPAX or NRSA — Non-Revenue Space Available) is a person traveling on an airline who pays little or no fare, including airline employees and their eligible family members using staff travel benefits, crew members deadheading to position for duty, travel-industry agents on familiarization trips, and holders of complimentary or heavily discounted tickets. Non-revenue passengers are typically boarded on a standby basis after all revenue passengers have been accommodated and do not contribute meaningfully to fare-box revenue.'
tags:
  - air-ops
  - active
  - IATA
timestamp: '2026-07-20T00:00:00Z'
id: non-revenue-passenger
vertical: air
category: air-ops
conceptType: business-term
status: active
abbreviation: NRPAX
term_ko: '비수익 승객(Non-Revenue Passenger, NRPAX/NRSA)'
definition_ko: '비수익 승객(NRPAX 또는 NRSA — Non-Revenue Space Available)은 항공사 직원 및 스태프 여행 혜택을 받는 가족, 데드헤드로 이동하는 승무원, 팸 트립(familiarization trip)을 떠나는 여행 업계 종사자, 무상 또는 대폭 할인 항공권 소지자 등 거의 또는 전혀 운임을 지불하지 않고 항공기를 이용하는 여객이다. 비수익 승객은 일반적으로 모든 유상 승객 탑승 후 대기(standby) 방식으로 탑승하며, 운임 수익에 기여하지 않는다.'
longDef: 'Airlines distinguish several non-revenue categories. Staff travel (ID travel) covers employee personal-use benefits — the airline''s own staff fly at sharply reduced fares and family members may fly on pass benefits. Interline staff travel (ZED — Zonal Employee Discount fares) extends reciprocal staff discounts across airlines via bilateral ZED agreements. Industry discount (ID) fares are offered to travel agents at significant discounts in exchange for promotion of the airline. Complimentary (COMP) travel includes vouchers issued for service recovery, frequent-flyer program rewards fulfilled as free tickets, and upgrades cleared from the upgrade waitlist. Deadheading crew (see Deadhead Flight) are a specific sub-type required operationally. Non-revenue passengers create a yield-management tension: each NRSA seat taken reduces last-minute revenue inventory. To protect revenue, airlines govern NRSA priority boarding order (generally: revenue upgrades > ZED/ID fares > airline employees) and restrict or eliminate non-revenue travel on high-demand flights. IATA Resolution 788 and bilateral staff-travel agreements specify ZED/ID fare rules.'
longDef_ko: '항공사는 비수익 범주를 여러 가지로 구분한다. 스태프 트래블(ID 여행)은 직원 개인용 혜택으로, 항공사 직원은 대폭 할인된 운임으로, 가족은 패스 혜택으로 비행한다. 인터라인 스태프 트래블(ZED — 지역별 직원 할인 운임)은 양자 ZED 협정을 통해 항공사 간 상호 직원 할인을 확대한다. 업계 할인(ID) 운임은 항공사 홍보 대가로 여행사에 상당한 할인을 제공한다. 무상(COMP) 여행에는 서비스 보상 바우처, 상용고객 프로그램 리워드로 발행된 무료 항공권, 업그레이드 대기자 명단에서 확정된 업그레이드가 포함된다. 데드헤딩 승무원(Deadhead Flight 참조)은 운항상 필요한 특정 하위 유형이다. 비수익 승객은 수율 관리 긴장을 초래하므로, 항공사는 NRSA 탑승 우선순위 순서(일반적으로 수익 업그레이드 > ZED/ID 운임 > 항공사 직원 순)를 관리하고, 수요가 높은 항공편에서 비수익 여행을 제한 또는 금지한다.'
standardBody: IATA
aliases:
  - NRSA
  - Non-Revenue Space Available
  - Staff Travel Passenger
  - ID Travel
  - ZED Travel
  - Industry Discount Passenger
relationships:
  - type: related
    targetTerm: Standby
  - type: related
    targetTerm: Load Factor
  - type: related
    targetTerm: Revenue Management
  - type: related
    targetTerm: Passenger Type Code
  - type: related
    targetTerm: Deadhead Flight
  - type: related
    targetTerm: Overbooking
distinctions:
  - targetTerm: Deadhead Flight
    explanation: 'A deadhead crew member is a sub-type of non-revenue passenger: airline duty personnel traveling to position for their next operating assignment. The broader NRPAX category also includes employees and family members traveling for personal purposes, industry agents, and complimentary ticket holders.'
    explanation_ko: '데드헤딩 승무원은 비수익 승객의 하위 유형으로, 다음 운항 임무를 위해 이동하는 항공사 직무 직원이다. 더 넓은 NRPAX 범주에는 개인 여행을 하는 직원·가족, 업계 에이전트, 무상 항공권 소지자도 포함된다.'
  - targetTerm: Standby
    explanation: 'Standby is the boarding status: a passenger waiting for an open seat on a specific flight without a confirmed booking. Non-revenue passengers almost always travel on standby, but a paying passenger whose earlier flight was cancelled can also travel standby on a revenue basis; the two concepts overlap but are not identical.'
    explanation_ko: 'Standby는 탑승 상태, 즉 확정 예약 없이 특정 항공편의 빈 좌석을 기다리는 승객의 상태다. 비수익 승객은 거의 항상 standby로 여행하지만, 이전 항공편이 취소된 유상 승객도 수익 기준으로 standby로 여행할 수 있으므로 두 개념은 겹치지만 동일하지 않다.'
  - targetTerm: Passenger Type Code
    explanation: 'A Passenger Type Code (PTC) is the GDS code used in pricing to categorize a traveler (ADT, CHD, INF, etc.). Non-revenue passengers may be ticketed with specific non-revenue PTCs (e.g., ID — Industry Discount) that trigger the applicable fare discount; PTC is the booking/ticketing mechanism, NRPAX is the policy category.'
    explanation_ko: '승객 유형 코드(PTC)는 여행자를 분류하기 위해 가격 산정 시 GDS에서 사용하는 코드(ADT, CHD, INF 등)다. 비수익 승객은 해당 운임 할인을 적용하는 특정 비수익 PTC(예: ID — 업계 할인)로 발권될 수 있다. PTC는 예약/발권 메커니즘이고, NRPAX는 정책 범주다.'
sources:
  - name: IATA Resolution 788 (Staff Travel)
    org: IATA
    version: ''
    section: 'Zonal Employee Discount (ZED) Framework'
    url: 'https://www.iata.org/en/programs/airline-distribution/staff-travel/'
    tier: association
  - name: IATA Passenger Services Conference Resolutions Manual (PSCRM)
    org: IATA
    version: '46th Edition (2026)'
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="14" r="6"/><path d="M10 40c0-8 6-14 14-14s14 6 14 14"/><rect x="32" y="26" width="10" height="7" rx="1.5" stroke-dasharray="3,2"/><line x1="34" y1="29" x2="40" y2="29" stroke-dasharray="3,2"/></svg>
---

> A non-revenue passenger (NRPAX or NRSA — Non-Revenue Space Available) is a person traveling on an airline who pays little or no fare, including airline employees and their eligible family members using staff travel benefits, crew members deadheading to position for duty, travel-industry agents on familiarization trips, and holders of complimentary or heavily discounted tickets. Non-revenue passengers are typically boarded on a standby basis after all revenue passengers have been accommodated and do not contribute meaningfully to fare-box revenue.

Airlines distinguish several non-revenue categories: staff travel (ID travel) for employees, ZED (Zonal Employee Discount) interline staff travel, industry discount (ID) fares for travel agents, complimentary (COMP) vouchers, and deadheading crew. Non-revenue passengers create yield-management tension — each NRSA seat taken reduces last-minute revenue inventory — so airlines govern NRSA priority boarding order and restrict non-revenue travel on high-demand flights. IATA Resolution 788 specifies ZED/ID fare rules.

**한국어 / Korean** — **비수익 승객(Non-Revenue Passenger, NRPAX/NRSA)** — 비수익 승객(NRPAX 또는 NRSA)은 항공사 직원 및 스태프 여행 혜택을 받는 가족, 데드헤딩 승무원, 팸 트립을 떠나는 여행 업계 종사자, 무상 또는 대폭 할인 항공권 소지자 등 거의 또는 전혀 운임을 지불하지 않고 항공기를 이용하는 여객이다. 비수익 승객은 일반적으로 모든 유상 승객 탑승 후 대기 방식으로 탑승한다.

비수익 범주에는 스태프 트래블(ID), ZED 인터라인 직원 여행, 여행사 대상 업계 할인(ID) 운임, 무상(COMP) 바우처, 데드헤딩 승무원이 포함된다. 비수익 승객은 수율 관리 긴장을 초래하므로 항공사는 NRSA 탑승 우선순위를 관리하고, 수요가 높은 항공편에서 비수익 여행을 제한한다.

**Aliases:** `NRSA`, `Non-Revenue Space Available`, `Staff Travel Passenger`, `ID Travel`, `ZED Travel`, `Industry Discount Passenger`

# Related
- [Standby](/air/air-ops/standby.md) — related
- [Load Factor](/air/air-shop/load-factor.md) — related
- [Revenue Management](/common/standards/revenue-management.md) — related
- [Passenger Type Code](/common/customer/passenger-type-code.md) — related
- [Deadhead Flight](/air/air-ops/deadhead-flight.md) — related
- [Overbooking](/air/air-shop/overbooking.md) — related

# Distinctions
- **Non-Revenue Passenger** vs [Deadhead Flight](/air/air-ops/deadhead-flight.md) — A deadhead crew member is a sub-type of non-revenue passenger: airline duty personnel traveling to position for their next operating assignment. The broader NRPAX category also includes employees and family members traveling for personal purposes, industry agents, and complimentary ticket holders.
- **Non-Revenue Passenger** vs [Standby](/air/air-ops/standby.md) — Standby is the boarding status: a passenger waiting for an open seat on a specific flight without a confirmed booking. Non-revenue passengers almost always travel on standby, but a paying passenger whose earlier flight was cancelled can also travel standby on a revenue basis; the two concepts overlap but are not identical.
- **Non-Revenue Passenger** vs [Passenger Type Code](/common/customer/passenger-type-code.md) — A Passenger Type Code (PTC) is the GDS code used in pricing to categorize a traveler (ADT, CHD, INF, etc.). Non-revenue passengers may be ticketed with specific non-revenue PTCs (e.g., ID — Industry Discount) that trigger the applicable fare discount; PTC is the booking/ticketing mechanism, NRPAX is the policy category.

# Citations
[1] [IATA — IATA Resolution 788 (Staff Travel)](https://www.iata.org/en/programs/airline-distribution/staff-travel/)
[2] [IATA — IATA Passenger Services Conference Resolutions Manual (PSCRM) — 46th Edition (2026)](https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/)
