---
type: Standard
title: Voluntary Refunds (ATPCO Category 33)
description: ATPCO Fare Rule Category 33 is the machine-readable rule set defining the conditions and applicable charges under which voluntary refunds of a ticket are permitted. It powers GDS and carrier automated refund products by letting systems compute refundable amounts and penalties without manual handling.
tags:
  - air-ticket
  - active
  - ATPCO
timestamp: '2026-06-17T00:00:00Z'
id: voluntary-refunds-atpco-category-33
vertical: air
category: air-ticket
conceptType: standard
status: active
abbreviation: Cat 33
term_ko: 자발적 환불 (ATPCO Category 33)
definition_ko: ATPCO 운임 규정 Category 33은 항공권의 자발적 환불이 허용되는 조건과 적용 요금을 정의하는 기계 판독 가능 규정 집합이다. 시스템이 수작업 없이 환불 가능 금액과 위약금을 계산하게 하여 GDS 및 항공사 자동 환불 제품을 구동한다.
longDef: 'Category 33 communicates, for a given fare, whether a full or partial voluntary refund is permitted, the cancellation/refund penalties, and the conditions for returning value to the passenger; the coded restrictions apply to the base fare, with taxes and fees handled separately. Automated refund products read Category 33 to determine and guarantee refund outcomes; carriers may file waivers in Category 33 (and General Rule 0) to authorize guaranteed automated refunds. Like Category 31, gaps in Category 33 data are a major reason refund automation is incomplete in some markets. It is the authoritative standard underpinning the generic Refund concept for voluntary cases.'
longDef_ko: 'Category 33은 특정 운임에 대해 전액 또는 부분 자발적 환불 허용 여부, 취소/환불 위약금, 승객에게 가치를 반환하는 조건을 전달한다. 코드화된 제한은 기본 운임에 적용되며 세금·수수료는 별도로 처리된다. 자동 환불 제품은 Category 33을 읽어 환불 결과를 결정하고 보장한다. 항공사는 Category 33(및 General Rule 0)에 면제를 신고하여 보장된 자동 환불을 승인할 수 있다. Category 31과 마찬가지로 Category 33 데이터의 공백은 일부 시장에서 환불 자동화가 불완전한 주요 원인이다. 자발적 환불에 대한 일반 Refund 개념을 뒷받침하는 권위 있는 표준이다.'
standardBody: ATPCO
aliases:
  - Category 33
  - Cat 33
  - ATPCO Category 33
  - Voluntary Refunds
providerTerms:
  - provider: Sabre
    term: Automated Refunds
    context: Sabre Automated Refunds uses ATPCO Category 33 (with waivers in Category 33/General Rule 0) to guarantee refund transactions.
    context_ko: Sabre Automated Refunds는 ATPCO Category 33(Category 33/General Rule 0의 면제 포함)을 사용해 환불 거래를 보장한다.
    relationship: related
relationships:
  - type: related
    targetTerm: ATPCO
  - type: related
    targetTerm: Refund
  - type: related
    targetTerm: Fare Rule
  - type: related
    targetTerm: Voluntary Changes (ATPCO Category 31)
  - type: related
    targetTerm: Penalty Fee
distinctions:
  - targetTerm: Voluntary Changes (ATPCO Category 31)
    explanation: Category 33 governs voluntary refunds (returning value and cancelling travel); Category 31 governs voluntary changes (reissuing the ticket for new travel). They are separate sibling categories.
    explanation_ko: 'Category 33은 자발적 환불(가치 반환 및 여행 취소)을, Category 31은 자발적 변경(새 여행을 위한 재발권)을 관장한다. 둘은 분리된 형제 카테고리이다.'
  - targetTerm: Refund
    explanation: Refund is the outcome of returning value to the passenger; Category 33 is the ATPCO rule data that machine-determines whether and how much of a voluntary refund is due.
    explanation_ko: 'Refund는 승객에게 가치를 반환하는 결과이고, Category 33은 자발적 환불이 가능한지와 금액을 기계적으로 결정하는 ATPCO 규정 데이터이다.'
sources:
  - org: ATPCO
    name: What are ATPCO fare rules categories? (Cat 33 Voluntary Refunds)
    version: ''
    section: ''
    url: 'https://atpco.net/single-blog/what-are-atpco-fare-rules-categories/'
  - org: American Airlines
    name: ATPCO General Rule 0 - waivers filed in Cat 31/Cat 33
    version: ''
    section: ''
    url: 'https://saleslink.aa.com/en-US/resources/html/atpco-rule-0.html'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="8" width="24" height="32" rx="3"/><path d="M16 16h12M16 21h8"/><path d="M37 30a6 6 0 1 1-2-4.6"/><polyline points="37 24 37 28 33 28"/><path d="M24 30v6M21.5 33.5l2.5 2.5 2.5-2.5"/></svg>
---

> ATPCO Fare Rule Category 33 is the machine-readable rule set defining the conditions and applicable charges under which voluntary refunds of a ticket are permitted. It powers GDS and carrier automated refund products by letting systems compute refundable amounts and penalties without manual handling.

Category 33 communicates, for a given fare, whether a full or partial voluntary refund is permitted, the cancellation/refund penalties, and the conditions for returning value to the passenger; the coded restrictions apply to the base fare, with taxes and fees handled separately. Automated refund products read Category 33 to determine and guarantee refund outcomes; carriers may file waivers in Category 33 (and General Rule 0) to authorize guaranteed automated refunds. Like Category 31, gaps in Category 33 data are a major reason refund automation is incomplete in some markets. It is the authoritative standard underpinning the generic Refund concept for voluntary cases.

**한국어 / Korean** — **자발적 환불 (ATPCO Category 33)** — ATPCO 운임 규정 Category 33은 항공권의 자발적 환불이 허용되는 조건과 적용 요금을 정의하는 기계 판독 가능 규정 집합이다. 시스템이 수작업 없이 환불 가능 금액과 위약금을 계산하게 하여 GDS 및 항공사 자동 환불 제품을 구동한다.

Category 33은 특정 운임에 대해 전액 또는 부분 자발적 환불 허용 여부, 취소/환불 위약금, 승객에게 가치를 반환하는 조건을 전달한다. 코드화된 제한은 기본 운임에 적용되며 세금·수수료는 별도로 처리된다. 자동 환불 제품은 Category 33을 읽어 환불 결과를 결정하고 보장한다. 항공사는 Category 33(및 General Rule 0)에 면제를 신고하여 보장된 자동 환불을 승인할 수 있다. Category 31과 마찬가지로 Category 33 데이터의 공백은 일부 시장에서 환불 자동화가 불완전한 주요 원인이다. 자발적 환불에 대한 일반 Refund 개념을 뒷받침하는 권위 있는 표준이다.

**Aliases:** `Category 33`, `Cat 33`, `ATPCO Category 33`, `Voluntary Refunds`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Sabre | `Automated Refunds` | related | Sabre Automated Refunds uses ATPCO Category 33 (with waivers in Category 33/General Rule 0) to guarantee refund transactions. |

# Related
- [ATPCO](/air/air-shop/atpco.md) — related
- [Refund](/air/air-ticket/refund.md) — related
- [Fare Rule](/air/air-shop/fare-rule.md) — related
- [Voluntary Changes (ATPCO Category 31)](/air/air-ticket/voluntary-changes-atpco-category-31.md) — related
- [Penalty Fee](/air/air-ticket/penalty-fee.md) — related

# Distinctions
- **Voluntary Refunds (ATPCO Category 33)** vs [Voluntary Changes (ATPCO Category 31)](/air/air-ticket/voluntary-changes-atpco-category-31.md) — Category 33 governs voluntary refunds (returning value and cancelling travel); Category 31 governs voluntary changes (reissuing the ticket for new travel). They are separate sibling categories.
- **Voluntary Refunds (ATPCO Category 33)** vs [Refund](/air/air-ticket/refund.md) — Refund is the outcome of returning value to the passenger; Category 33 is the ATPCO rule data that machine-determines whether and how much of a voluntary refund is due.

# Citations
[1] [ATPCO — What are ATPCO fare rules categories? (Cat 33 Voluntary Refunds)](https://atpco.net/single-blog/what-are-atpco-fare-rules-categories/)
[2] [American Airlines — ATPCO General Rule 0 - waivers filed in Cat 31/Cat 33](https://saleslink.aa.com/en-US/resources/html/atpco-rule-0.html)
