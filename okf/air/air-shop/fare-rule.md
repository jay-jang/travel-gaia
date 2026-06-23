---
type: Standard Term
title: Fare Rule
description: 'A Fare Rule is the set of conditions and restrictions that govern when and how a published fare may be sold, ticketed, and used. In ATPCO fare filing, these conditions are organized into numbered categories (e.g., advance purchase, minimum/maximum stay, seasonality, penalties) that attach to a fare via Category 0 (Rule Application) and its footnotes.'
tags:
  - air-shop
  - active
  - ATPCO
timestamp: '2026-06-17T00:00:00Z'
id: fare-rule
vertical: air
category: air-shop
conceptType: standard-term
status: active
term_ko: 운임 규정 (Fare Rule)
definition_ko: 'Fare Rule은 공시 운임을 언제, 어떻게 판매·발권·사용할 수 있는지를 규정하는 조건과 제약의 집합이다. ATPCO 운임 파일링에서는 이 조건들이 사전구매, 최소/최대 체류, 시즌, 페널티 등 번호가 매겨진 카테고리(Category)로 구조화되어 운임에 연결된다.'
longDef: 'Fare Rules are filed by carriers (typically through ATPCO) alongside the fare amount and are evaluated during pricing to determine fare eligibility for a given itinerary, date, passenger, and point of sale. ATPCO structures rule provisions into discrete categories: well-known examples include Category 1 (Eligibility), Category 3 (Seasonality), Category 4 (Flight Application), Category 5 (Advance Reservation/Ticketing), Category 6 (Minimum Stay), Category 7 (Maximum Stay), Category 8 (Stopovers), Category 9 (Transfers), Category 14 (Travel Dates), Category 15 (Sales Restrictions), Category 16 (Penalties), and Category 25 (Fare By Rule). A pricing engine matches the applicable rule data against each Fare Component before the fare can be applied, so a low fare that fails any rule provision is rejected in favor of a higher qualifying fare.'
longDef_ko: 'Fare Rule은 운임 금액과 함께 항공사가 (주로 ATPCO를 통해) 파일링하며, pricing 단계에서 특정 여정·날짜·승객·판매지점에 대한 운임 적용 가능 여부를 판단하는 데 평가된다. ATPCO는 규정 조항을 개별 카테고리로 구조화하는데, 대표적으로 Category 1(Eligibility), 3(Seasonality), 4(Flight Application), 5(Advance Reservation/Ticketing), 6(Minimum Stay), 7(Maximum Stay), 8(Stopovers), 9(Transfers), 14(Travel Dates), 15(Sales Restrictions), 16(Penalties), 25(Fare By Rule) 등이 있다. pricing 엔진은 각 Fare Component에 적용 가능한 규정 데이터를 대조하여 운임 적용 여부를 결정하며, 규정 조항을 하나라도 충족하지 못하는 저렴한 운임은 거절되고 조건을 만족하는 상위 운임이 적용된다.'
standardBody: ATPCO
aliases:
  - Fare Rules
  - Tariff Rule
  - Rule Record
providerTerms:
  - provider: ATPCO
    term: Rule Category
    context: ATPCO numbers rule provisions into categories (Cat 1-50) that compose a fare rule.
    context_ko: ATPCO는 운임 규정 조항을 카테고리(Cat 1-50) 번호로 구조화하여 fare rule을 구성한다.
    relationship: narrower
  - provider: Travelport
    term: Fare Rules / Record 0
    context: GDS displays ATPCO-filed rule provisions to agents under fare rule retrieval entries.
    context_ko: GDS는 ATPCO에 파일링된 규정 조항을 운임 규정 조회 항목으로 상담원에게 표시한다.
    relationship: same
relationships:
  - type: related
    targetTerm: Fare Basis Code
  - type: related
    targetTerm: Fare Component
  - type: related
    targetTerm: ATPCO
  - type: related
    targetTerm: Fare Family
distinctions:
  - targetTerm: Fare Basis Code
    explanation: The Fare Basis Code is the alphanumeric label identifying a specific fare; the Fare Rule is the body of conditions that the fare (and its basis code) must satisfy to be applied.
    explanation_ko: 'Fare Basis Code는 특정 운임을 식별하는 영숫자 코드이며, Fare Rule은 그 운임(및 basis code)이 적용되기 위해 충족해야 하는 조건의 본문이다.'
  - targetTerm: Endorsements / Restrictions Box
    explanation: 'The fare rule is the underlying ATPCO-filed condition (e.g., the fare is non-endorsable); the endorsement box is where the resulting restriction is written onto the actual ticket so that accepting/reissuing carriers see and enforce it.'
    explanation_ko: 'Fare Rule은 ATPCO에 신고된 기저 조건(예: 해당 운임이 non-endorsable임)이고, endorsement 란은 그 결과로 도출된 제한이 실제 항공권에 기재되어 인수·reissue 항공사가 확인하고 집행하도록 하는 위치이다.'
  - targetTerm: Negotiated Fare
    explanation: 'Fare Rule is the general framework of numbered ATPCO categories; Negotiated Fare is the specific construct governed by one of them (Category 35), covering private/contract fares and their ticketing security.'
    explanation_ko: 'Fare Rule은 번호가 매겨진 ATPCO 카테고리들의 일반 체계이고, Negotiated Fare는 그중 하나(Category 35)의 규율을 받는 구체적 구조로, private/contract 운임과 그 ticketing security를 다룬다.'
sources:
  - org: ATPCO
    name: What are ATPCO fare rules categories?
    version: ''
    section: Fare rule categories
    url: 'https://atpco.net/single-blog/what-are-atpco-fare-rules-categories/'
    tier: vendor-doc
  - org: Travelport
    name: Fare Rules Guide
    version: ''
    section: Fare rule categories
    url: 'https://support.travelport.com/webhelp/JSONAPIs/Airv11/Content/Air11/Price/FareRulesGuide.htm'
    tier: vendor-doc
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="6" width="28" height="36" rx="3"/><line x1="16" y1="15" x2="32" y2="15"/><line x1="16" y1="22" x2="32" y2="22"/><line x1="16" y1="29" x2="26" y2="29"/><path d="M28 34l3 3 6-6"/></svg>
---

> A Fare Rule is the set of conditions and restrictions that govern when and how a published fare may be sold, ticketed, and used. In ATPCO fare filing, these conditions are organized into numbered categories (e.g., advance purchase, minimum/maximum stay, seasonality, penalties) that attach to a fare via Category 0 (Rule Application) and its footnotes.

Fare Rules are filed by carriers (typically through ATPCO) alongside the fare amount and are evaluated during pricing to determine fare eligibility for a given itinerary, date, passenger, and point of sale. ATPCO structures rule provisions into discrete categories: well-known examples include Category 1 (Eligibility), Category 3 (Seasonality), Category 4 (Flight Application), Category 5 (Advance Reservation/Ticketing), Category 6 (Minimum Stay), Category 7 (Maximum Stay), Category 8 (Stopovers), Category 9 (Transfers), Category 14 (Travel Dates), Category 15 (Sales Restrictions), Category 16 (Penalties), and Category 25 (Fare By Rule). A pricing engine matches the applicable rule data against each Fare Component before the fare can be applied, so a low fare that fails any rule provision is rejected in favor of a higher qualifying fare.

**한국어 / Korean** — **운임 규정 (Fare Rule)** — Fare Rule은 공시 운임을 언제, 어떻게 판매·발권·사용할 수 있는지를 규정하는 조건과 제약의 집합이다. ATPCO 운임 파일링에서는 이 조건들이 사전구매, 최소/최대 체류, 시즌, 페널티 등 번호가 매겨진 카테고리(Category)로 구조화되어 운임에 연결된다.

Fare Rule은 운임 금액과 함께 항공사가 (주로 ATPCO를 통해) 파일링하며, pricing 단계에서 특정 여정·날짜·승객·판매지점에 대한 운임 적용 가능 여부를 판단하는 데 평가된다. ATPCO는 규정 조항을 개별 카테고리로 구조화하는데, 대표적으로 Category 1(Eligibility), 3(Seasonality), 4(Flight Application), 5(Advance Reservation/Ticketing), 6(Minimum Stay), 7(Maximum Stay), 8(Stopovers), 9(Transfers), 14(Travel Dates), 15(Sales Restrictions), 16(Penalties), 25(Fare By Rule) 등이 있다. pricing 엔진은 각 Fare Component에 적용 가능한 규정 데이터를 대조하여 운임 적용 여부를 결정하며, 규정 조항을 하나라도 충족하지 못하는 저렴한 운임은 거절되고 조건을 만족하는 상위 운임이 적용된다.

**Aliases:** `Fare Rules`, `Tariff Rule`, `Rule Record`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| ATPCO | `Rule Category` | narrower | ATPCO numbers rule provisions into categories (Cat 1-50) that compose a fare rule. |
| Travelport | `Fare Rules / Record 0` | same | GDS displays ATPCO-filed rule provisions to agents under fare rule retrieval entries. |

# Related
- [Fare Basis Code](/air/air-shop/fare-basis-code.md) — related
- [Fare Component](/air/air-shop/fare-component.md) — related
- [ATPCO](/air/air-shop/atpco.md) — related
- [Fare Family](/air/air-shop/fare-family.md) — related

# Distinctions
- **Fare Rule** vs [Fare Basis Code](/air/air-shop/fare-basis-code.md) — The Fare Basis Code is the alphanumeric label identifying a specific fare; the Fare Rule is the body of conditions that the fare (and its basis code) must satisfy to be applied.
- **Fare Rule** vs [Endorsements / Restrictions Box](/air/air-ticket/endorsements-restrictions-box.md) — The fare rule is the underlying ATPCO-filed condition (e.g., the fare is non-endorsable); the endorsement box is where the resulting restriction is written onto the actual ticket so that accepting/reissuing carriers see and enforce it.
- **Fare Rule** vs [Negotiated Fare](/air/air-shop/negotiated-fare.md) — Fare Rule is the general framework of numbered ATPCO categories; Negotiated Fare is the specific construct governed by one of them (Category 35), covering private/contract fares and their ticketing security.

# Citations
[1] [ATPCO — What are ATPCO fare rules categories? — Fare rule categories](https://atpco.net/single-blog/what-are-atpco-fare-rules-categories/)
[2] [Travelport — Fare Rules Guide — Fare rule categories](https://support.travelport.com/webhelp/JSONAPIs/Airv11/Content/Air11/Price/FareRulesGuide.htm)
