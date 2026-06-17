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
sources:
  - org: ATPCO
    name: What are ATPCO fare rules categories?
    version: ''
    section: Fare rule categories
    url: 'https://atpco.net/single-blog/what-are-atpco-fare-rules-categories/'
  - org: Travelport
    name: Fare Rules Guide
    version: ''
    section: Fare rule categories
    url: ''
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

# Citations
[1] [ATPCO — What are ATPCO fare rules categories? — Fare rule categories](https://atpco.net/single-blog/what-are-atpco-fare-rules-categories/)
[2] Travelport — Fare Rules Guide — Fare rule categories
