---
type: Standard Term
title: Negotiated Fare
description: 'A negotiated fare is a private or contract fare offered to a specific channel (such as a consolidator, corporation, or agency) rather than published to the general public, governed by ATPCO Category 35 (Negotiated Fares). Category 35 carries the ticketing-security and net/sell fare-creation rules that control who may sell the fare and how the net cost and selling price are derived.'
tags:
  - air-shop
  - active
  - ATPCO
timestamp: '2026-06-17T00:00:00Z'
id: negotiated-fare
vertical: air
category: air-shop
conceptType: standard-term
status: active
term_ko: 협정 운임 (Negotiated Fare / Cat 35)
definition_ko: 'Negotiated fare(협정 운임)는 일반 대중에게 공시되지 않고 특정 채널(consolidator, 기업, 여행사 등)에 제공되는 private 또는 contract 운임으로, ATPCO Category 35(Negotiated Fares)의 규율을 받는다. Category 35는 누가 운임을 판매할 수 있는지와 net 비용 및 판매가가 어떻게 도출되는지를 통제하는 ticketing-security 및 net/sell 운임 생성 규정을 담는다.'
longDef: 'Category 35 lets a carrier file fares restricted to authorized sellers, typically with a net amount the agency pays the airline and a selling amount it may charge the traveler, plus markup/markdown and fare-creation provisions so private fares can be built from a base without duplicating all data. Ticketing-security fields ensure such fares are not ticketed outside the authorized agreement (and, in combinations, that a private fare is not improperly combined with another carrier''s public fares). Negotiated fares cover consolidator, corporate, and agency contract fares and are a major distribution lever distinct from published public fares. They are commonly contrasted with Category 25 (Fare By Rule) and with web/published fares.'
longDef_ko: 'Category 35는 항공사가 인가된 판매자에게만 제한된 운임을 파일링하게 하며, 보통 여행사가 항공사에 지불하는 net 금액과 여행자에게 청구할 수 있는 selling 금액, 그리고 모든 데이터를 중복하지 않고 base에서 private fare를 구성할 수 있도록 하는 markup/markdown 및 운임 생성 조항을 포함한다. ticketing-security 필드는 그러한 운임이 인가된 계약 밖에서 발권되지 않도록(그리고 combination에서 private fare가 다른 항공사의 공시 운임과 부적절하게 결합되지 않도록) 보장한다. negotiated fare는 consolidator, 기업, 여행사 contract 운임을 포괄하며, 공시된 public 운임과 구별되는 주요 유통 수단이다. 흔히 Category 25(Fare By Rule) 및 web/공시 운임과 대비된다.'
standardBody: ATPCO
aliases:
  - Cat 35
  - Category 35
  - Private Fare
  - Net Fare
  - Contract Fare
providerTerms:
  - provider: ATPCO
    term: Category 35 — Negotiated Fares
    context: ATPCO Cat 35 defines ticketing-security and net/sell fare-creation rules for negotiated/private fares.
    context_ko: ATPCO Cat 35는 negotiated/private 운임에 대한 ticketing-security 및 net/sell 운임 생성 규정을 정의한다.
    relationship: same
  - provider: Travelport
    term: Cat35 - Negotiated Fares
    context: Travelport documents Cat 35 as the rule for ticketing security and creation of negotiated/private fares.
    context_ko: Travelport는 Cat 35를 negotiated/private 운임의 ticketing security 및 생성 규정으로 문서화한다.
    relationship: same
relationships:
  - type: related
    targetTerm: Fare Rule
  - type: related
    targetTerm: Fare Basis Code
  - type: related
    targetTerm: ATPCO
  - type: related
    targetTerm: Net Rate
  - type: related
    targetTerm: Validating Carrier
distinctions:
  - targetTerm: Fare Rule
    explanation: 'Fare Rule is the general framework of numbered ATPCO categories; Negotiated Fare is the specific construct governed by one of them (Category 35), covering private/contract fares and their ticketing security.'
    explanation_ko: 'Fare Rule은 번호가 매겨진 ATPCO 카테고리들의 일반 체계이고, Negotiated Fare는 그중 하나(Category 35)의 규율을 받는 구체적 구조로, private/contract 운임과 그 ticketing security를 다룬다.'
  - targetTerm: Fare Basis Code
    explanation: 'A fare basis code labels any fare, public or private; Negotiated Fare specifically denotes a privately filed Category 35 fare restricted to authorized sellers, often invisible in neutral public displays.'
    explanation_ko: 'Fare basis code는 public이든 private이든 모든 운임에 붙는 라벨이고, Negotiated Fare는 특히 인가된 판매자에게만 제한되어 파일링된 Category 35 private 운임을 가리키며 중립 public 조회에서는 보이지 않는 경우가 많다.'
  - targetTerm: Tour Code
    explanation: A negotiated fare is the discounted/contracted fare itself; the tour code is the identifier written into the ticket that ties that specific issuance back to the negotiated agreement for settlement and audit.
    explanation_ko: 'Negotiated Fare는 할인된/계약된 운임 자체이고, tour code는 그 특정 발권을 정산·감사를 위해 협상된 합의에 연결시키기 위해 항공권에 기재되는 식별자이다.'
sources:
  - org: Travelport
    name: Cat35 - Negotiated Fares (Support)
    version: ''
    section: Category 35
    url: 'https://support.travelport.com/webhelp/FaresAndPricing/Content/Cat35%20-%20Negotiated%20Fares.htm'
  - org: ATPCO
    name: What are ATPCO fare rules categories? (Cat 35 Negotiated)
    version: ''
    section: Category 35
    url: 'https://atpco.net/single-blog/what-are-atpco-fare-rules-categories/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 10h20a2 2 0 012 2v26l-5-3-4 3-4-3-4 3-4-3-5 3V12a2 2 0 012-2z"/><line x1="18" y1="18" x2="30" y2="18"/><line x1="18" y1="24" x2="26" y2="24"/><circle cx="31" cy="25" r="4"/></svg>
---

> A negotiated fare is a private or contract fare offered to a specific channel (such as a consolidator, corporation, or agency) rather than published to the general public, governed by ATPCO Category 35 (Negotiated Fares). Category 35 carries the ticketing-security and net/sell fare-creation rules that control who may sell the fare and how the net cost and selling price are derived.

Category 35 lets a carrier file fares restricted to authorized sellers, typically with a net amount the agency pays the airline and a selling amount it may charge the traveler, plus markup/markdown and fare-creation provisions so private fares can be built from a base without duplicating all data. Ticketing-security fields ensure such fares are not ticketed outside the authorized agreement (and, in combinations, that a private fare is not improperly combined with another carrier's public fares). Negotiated fares cover consolidator, corporate, and agency contract fares and are a major distribution lever distinct from published public fares. They are commonly contrasted with Category 25 (Fare By Rule) and with web/published fares.

**한국어 / Korean** — **협정 운임 (Negotiated Fare / Cat 35)** — Negotiated fare(협정 운임)는 일반 대중에게 공시되지 않고 특정 채널(consolidator, 기업, 여행사 등)에 제공되는 private 또는 contract 운임으로, ATPCO Category 35(Negotiated Fares)의 규율을 받는다. Category 35는 누가 운임을 판매할 수 있는지와 net 비용 및 판매가가 어떻게 도출되는지를 통제하는 ticketing-security 및 net/sell 운임 생성 규정을 담는다.

Category 35는 항공사가 인가된 판매자에게만 제한된 운임을 파일링하게 하며, 보통 여행사가 항공사에 지불하는 net 금액과 여행자에게 청구할 수 있는 selling 금액, 그리고 모든 데이터를 중복하지 않고 base에서 private fare를 구성할 수 있도록 하는 markup/markdown 및 운임 생성 조항을 포함한다. ticketing-security 필드는 그러한 운임이 인가된 계약 밖에서 발권되지 않도록(그리고 combination에서 private fare가 다른 항공사의 공시 운임과 부적절하게 결합되지 않도록) 보장한다. negotiated fare는 consolidator, 기업, 여행사 contract 운임을 포괄하며, 공시된 public 운임과 구별되는 주요 유통 수단이다. 흔히 Category 25(Fare By Rule) 및 web/공시 운임과 대비된다.

**Aliases:** `Cat 35`, `Category 35`, `Private Fare`, `Net Fare`, `Contract Fare`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| ATPCO | `Category 35 — Negotiated Fares` | same | ATPCO Cat 35 defines ticketing-security and net/sell fare-creation rules for negotiated/private fares. |
| Travelport | `Cat35 - Negotiated Fares` | same | Travelport documents Cat 35 as the rule for ticketing security and creation of negotiated/private fares. |

# Related
- [Fare Rule](/air/air-shop/fare-rule.md) — related
- [Fare Basis Code](/air/air-shop/fare-basis-code.md) — related
- [ATPCO](/air/air-shop/atpco.md) — related
- [Net Rate](/lodging/hotel-dist/net-rate.md) — related
- [Validating Carrier](/air/air-ticket/validating-carrier.md) — related

# Distinctions
- **Negotiated Fare** vs [Fare Rule](/air/air-shop/fare-rule.md) — Fare Rule is the general framework of numbered ATPCO categories; Negotiated Fare is the specific construct governed by one of them (Category 35), covering private/contract fares and their ticketing security.
- **Negotiated Fare** vs [Fare Basis Code](/air/air-shop/fare-basis-code.md) — A fare basis code labels any fare, public or private; Negotiated Fare specifically denotes a privately filed Category 35 fare restricted to authorized sellers, often invisible in neutral public displays.
- **Negotiated Fare** vs [Tour Code](/air/air-ticket/tour-code.md) — A negotiated fare is the discounted/contracted fare itself; the tour code is the identifier written into the ticket that ties that specific issuance back to the negotiated agreement for settlement and audit.

# Citations
[1] [Travelport — Cat35 - Negotiated Fares (Support) — Category 35](https://support.travelport.com/webhelp/FaresAndPricing/Content/Cat35%20-%20Negotiated%20Fares.htm)
[2] [ATPCO — What are ATPCO fare rules categories? (Cat 35 Negotiated) — Category 35](https://atpco.net/single-blog/what-are-atpco-fare-rules-categories/)
