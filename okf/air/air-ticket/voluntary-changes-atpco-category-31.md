---
type: Standard
title: Voluntary Changes (ATPCO Category 31)
description: ATPCO Fare Rule Category 31 is the machine-readable rule set defining the conditions and applicable charges under which voluntary ticket changes are permitted. It is the data foundation enabling automated reissue and exchange of tickets across GDS and carrier systems.
tags:
  - air-ticket
  - active
  - ATPCO
timestamp: '2026-06-17T00:00:00Z'
id: voluntary-changes-atpco-category-31
vertical: air
category: air-ticket
conceptType: standard
status: active
abbreviation: Cat 31
term_ko: 자발적 변경 (ATPCO Category 31)
definition_ko: ATPCO 운임 규정 Category 31은 자발적 항공권 변경이 허용되는 조건과 적용 요금을 정의하는 기계 판독 가능 규정 집합이다. GDS 및 항공사 시스템 전반에서 자동화된 재발권·교환을 가능하게 하는 데이터 토대이다.
longDef: 'Category 31 codes, for a given fare, whether voluntary changes are permitted, the change/penalty charges, the data needed to recalculate fare differences (additional collection or residual value), permitted itinerary changes, and the repricing method to apply. Automated exchange products (e.g., Sabre Automated Exchanges, Amadeus Ticket Changer, Travelport Automated Exchanges) read Category 31 to compute and guarantee a reissue without manual intervention; carriers may file waivers in Category 31 to authorize guaranteed automated transactions. Industry automation remains incomplete in part because of missing Category 31 data or undefined rules for reissuing taxes and fees. It is the standard underpinning the Reissue and Exchange concepts.'
longDef_ko: 'Category 31은 특정 운임에 대해 자발적 변경 허용 여부, 변경/위약 요금, 운임 차액(추가 징수 또는 잔여 가치) 재계산에 필요한 데이터, 허용되는 여정 변경, 적용할 재가격 산정 방식을 코드화한다. 자동 교환 제품(예: Sabre Automated Exchanges, Amadeus Ticket Changer, Travelport Automated Exchanges)은 Category 31을 읽어 수작업 없이 재발권을 계산하고 보장한다. 항공사는 Category 31에 면제(waiver)를 신고하여 보장된 자동 거래를 승인할 수 있다. 세금·수수료 재발권 규칙이 정의되지 않았거나 Category 31 데이터가 누락되어 산업 자동화는 여전히 불완전하다. 이는 Reissue 및 Exchange 개념을 뒷받침하는 표준이다.'
standardBody: ATPCO
aliases:
  - Category 31
  - Cat 31
  - ATPCO Category 31
  - Voluntary Changes
providerTerms:
  - provider: Amadeus
    term: Amadeus Ticket Changer (ATC)
    context: ATC Reissue computes automated voluntary reissues using ATPCO Category 31 rules.
    context_ko: ATC Reissue는 ATPCO Category 31 규정을 사용해 자동 자발적 재발권을 계산한다.
    relationship: related
  - provider: Sabre
    term: Automated Exchanges
    context: Sabre Automated Exchanges reads Category 31 (and Cat 33 for refunds) to guarantee exchange transactions where waivers are filed.
    context_ko: Sabre Automated Exchanges는 면제가 신고된 경우 교환 거래를 보장하기 위해 Category 31(환불은 Cat 33)을 읽는다.
    relationship: related
relationships:
  - type: related
    targetTerm: ATPCO
  - type: related
    targetTerm: Reissue
  - type: related
    targetTerm: Exchange
  - type: related
    targetTerm: Fare Rule
  - type: related
    targetTerm: Voluntary Refunds (ATPCO Category 33)
  - type: related
    targetTerm: Penalty Fee
distinctions:
  - targetTerm: Voluntary Refunds (ATPCO Category 33)
    explanation: Category 31 governs voluntary changes (reissue/exchange of the ticket); Category 33 governs voluntary refunds (returning value). They are sibling automated categories with separate data and waivers.
    explanation_ko: 'Category 31은 자발적 변경(항공권 재발권/교환)을, Category 33은 자발적 환불(가치 반환)을 관장한다. 둘은 데이터와 면제가 분리된 형제 자동화 카테고리이다.'
  - targetTerm: Reissue
    explanation: Reissue is the operational process of producing a new ticket; Category 31 is the underlying ATPCO rule data that tells systems whether and how that reissue may be priced.
    explanation_ko: 'Reissue는 새 항공권을 만들어내는 운영 절차이고, Category 31은 그 재발권이 가능한지와 어떻게 가격을 산정할지를 시스템에 알려주는 ATPCO 규정 데이터이다.'
  - targetTerm: Involuntary Reissue
    explanation: 'Category 31 covers voluntary changes initiated by the passenger; involuntary reissues caused by airline schedule changes or IROPS are handled under separate policies and waivers, not Cat 31''s voluntary penalty conditions.'
    explanation_ko: Category 31은 승객이 시작한 자발적 변경을 다룬다. 항공사 스케줄 변경이나 IROPS로 인한 비자발적 재발권은 Cat 31의 자발적 위약 조건이 아니라 별도 정책·면제로 처리된다.
sources:
  - org: ATPCO
    name: What are ATPCO fare rules categories? (Cat 31 Voluntary Changes)
    version: ''
    section: ''
    url: 'https://atpco.net/single-blog/what-are-atpco-fare-rules-categories/'
  - org: Amadeus
    name: Amadeus Ticket Changer - automated voluntary reissue
    version: ''
    section: ''
    url: 'https://amadeus.com/documents/en/travel-industry/sales-sheet/amadeus-ticket-changer.pdf'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="8" width="24" height="32" rx="3"/><path d="M16 16h12M16 21h8"/><path d="M37 26a6 6 0 0 0-10-3l-2 2"/><polyline points="25 21 25 25 29 25"/><path d="M27 34a6 6 0 0 0 10-3l2-2"/><polyline points="39 31 39 27 35 27"/></svg>
---

> ATPCO Fare Rule Category 31 is the machine-readable rule set defining the conditions and applicable charges under which voluntary ticket changes are permitted. It is the data foundation enabling automated reissue and exchange of tickets across GDS and carrier systems.

Category 31 codes, for a given fare, whether voluntary changes are permitted, the change/penalty charges, the data needed to recalculate fare differences (additional collection or residual value), permitted itinerary changes, and the repricing method to apply. Automated exchange products (e.g., Sabre Automated Exchanges, Amadeus Ticket Changer, Travelport Automated Exchanges) read Category 31 to compute and guarantee a reissue without manual intervention; carriers may file waivers in Category 31 to authorize guaranteed automated transactions. Industry automation remains incomplete in part because of missing Category 31 data or undefined rules for reissuing taxes and fees. It is the standard underpinning the Reissue and Exchange concepts.

**한국어 / Korean** — **자발적 변경 (ATPCO Category 31)** — ATPCO 운임 규정 Category 31은 자발적 항공권 변경이 허용되는 조건과 적용 요금을 정의하는 기계 판독 가능 규정 집합이다. GDS 및 항공사 시스템 전반에서 자동화된 재발권·교환을 가능하게 하는 데이터 토대이다.

Category 31은 특정 운임에 대해 자발적 변경 허용 여부, 변경/위약 요금, 운임 차액(추가 징수 또는 잔여 가치) 재계산에 필요한 데이터, 허용되는 여정 변경, 적용할 재가격 산정 방식을 코드화한다. 자동 교환 제품(예: Sabre Automated Exchanges, Amadeus Ticket Changer, Travelport Automated Exchanges)은 Category 31을 읽어 수작업 없이 재발권을 계산하고 보장한다. 항공사는 Category 31에 면제(waiver)를 신고하여 보장된 자동 거래를 승인할 수 있다. 세금·수수료 재발권 규칙이 정의되지 않았거나 Category 31 데이터가 누락되어 산업 자동화는 여전히 불완전하다. 이는 Reissue 및 Exchange 개념을 뒷받침하는 표준이다.

**Aliases:** `Category 31`, `Cat 31`, `ATPCO Category 31`, `Voluntary Changes`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Amadeus | `Amadeus Ticket Changer (ATC)` | related | ATC Reissue computes automated voluntary reissues using ATPCO Category 31 rules. |
| Sabre | `Automated Exchanges` | related | Sabre Automated Exchanges reads Category 31 (and Cat 33 for refunds) to guarantee exchange transactions where waivers are filed. |

# Related
- [ATPCO](/air/air-shop/atpco.md) — related
- [Reissue](/air/air-ticket/reissue.md) — related
- [Exchange](/air/air-ticket/exchange.md) — related
- [Fare Rule](/air/air-shop/fare-rule.md) — related
- [Voluntary Refunds (ATPCO Category 33)](/air/air-ticket/voluntary-refunds-atpco-category-33.md) — related
- [Penalty Fee](/air/air-ticket/penalty-fee.md) — related

# Distinctions
- **Voluntary Changes (ATPCO Category 31)** vs [Voluntary Refunds (ATPCO Category 33)](/air/air-ticket/voluntary-refunds-atpco-category-33.md) — Category 31 governs voluntary changes (reissue/exchange of the ticket); Category 33 governs voluntary refunds (returning value). They are sibling automated categories with separate data and waivers.
- **Voluntary Changes (ATPCO Category 31)** vs [Reissue](/air/air-ticket/reissue.md) — Reissue is the operational process of producing a new ticket; Category 31 is the underlying ATPCO rule data that tells systems whether and how that reissue may be priced.
- **Voluntary Changes (ATPCO Category 31)** vs [Involuntary Reissue](/air/air-ticket/involuntary-reissue.md) — Category 31 covers voluntary changes initiated by the passenger; involuntary reissues caused by airline schedule changes or IROPS are handled under separate policies and waivers, not Cat 31's voluntary penalty conditions.

# Citations
[1] [ATPCO — What are ATPCO fare rules categories? (Cat 31 Voluntary Changes)](https://atpco.net/single-blog/what-are-atpco-fare-rules-categories/)
[2] [Amadeus — Amadeus Ticket Changer - automated voluntary reissue](https://amadeus.com/documents/en/travel-industry/sales-sheet/amadeus-ticket-changer.pdf)
