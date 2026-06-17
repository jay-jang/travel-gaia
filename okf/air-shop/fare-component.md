---
type: Business Term
title: Fare Component
description: 'A fare component is the portion of an itinerary covered by a single fare, running from one fare-break point to the next and governed by one fare basis and its rules. Fare components are the building blocks summed during fare construction to build the total price of a journey.'
tags:
  - air-shop
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: fare-component
category: air-shop
conceptType: business-term
status: active
term_ko: 운임 컴포넌트
definition_ko: '운임 컴포넌트(fare component)는 하나의 운임이 적용되는 여정의 구간으로, 한 운임 분기점(fare-break point)에서 다음 분기점까지 이어지며 하나의 운임 기준과 그 규정의 적용을 받는다. 운임 컴포넌트는 운임 산정 과정에서 합산되어 여정 총액을 구성하는 기본 단위이다.'
longDef: 'In fare construction, an itinerary is divided at fare-break points into fare components, each defined over an O&D and carrying one fare basis code, one set of fare rules, and (for international) one NUC amount. Multiple fare components are grouped into pricing units (such as round-trip or circle-trip pricing units) where rules like minimum stay, combinability, and through-fare checks apply. Each fare component may itself span several flight segments when no fare break occurs between them.'
longDef_ko: '운임 산정에서 여정은 운임 분기점을 기준으로 운임 컴포넌트로 분할되며, 각 컴포넌트는 하나의 O&D로 정의되고 하나의 운임 기준 코드, 하나의 운임 규정 집합, 그리고 (국제선의 경우) 하나의 NUC 금액을 갖는다. 여러 운임 컴포넌트는 가격 산정 단위(pricing unit, 예: 왕복 또는 일주 여행 가격 산정 단위)로 묶이며, 여기서 최소 체류 기간, 결합 가능성(combinability), 통과 운임(through-fare) 검증과 같은 규정이 적용된다. 각 운임 컴포넌트는 그 사이에 운임 분기가 발생하지 않는 경우 여러 비행 세그먼트에 걸칠 수 있다.'
standardBody: IATA
aliases:
  - Pricing Unit Component
providerTerms:
  - provider: ATPCO
    term: Fare Component (in fare construction)
    context: ATPCO rules apply at the fare-component level during automated pricing.
    context_ko: ATPCO 규정은 자동 운임 산정 과정에서 운임 컴포넌트 단위로 적용된다.
    relationship: same
relationships:
  - type: related
    targetTerm: Fare Basis Code
  - type: related
    targetTerm: Origin & Destination
  - type: related
    targetTerm: Journey
  - type: related
    targetTerm: NUC
  - type: related
    targetTerm: ATPCO
distinctions:
  - targetTerm: Segment
    explanation: A segment is one booked flight portion; a fare component is a priced span bounded by fare breaks and may cover several segments.
    explanation_ko: '세그먼트는 예약된 하나의 비행 구간이고, 운임 컴포넌트는 운임 분기로 경계가 정해진 가격 산정 구간으로 여러 세그먼트를 포함할 수 있다.'
  - targetTerm: Origin & Destination
    explanation: An O&D is a market point-pair; a fare component is the priced unit defined over an O&D with one fare and rule set.
    explanation_ko: 'O&D는 시장의 지점 쌍이고, 운임 컴포넌트는 하나의 운임과 규정 집합을 갖고 O&D 단위로 정의되는 가격 산정 단위이다.'
sources:
  - name: IATA fare construction principles / Ticketing Handbook
    org: IATA
    version: ''
    section: ''
    url: ''
  - name: ATPCO Automated Rules documentation
    org: ATPCO
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="24" r="3"/><circle cx="37" cy="24" r="3"/><line x1="14" y1="24" x2="34" y2="24"/><rect x="19" y="30" width="10" height="10" rx="2"/><path d="M24 30v-8"/></svg>
---

> A fare component is the portion of an itinerary covered by a single fare, running from one fare-break point to the next and governed by one fare basis and its rules. Fare components are the building blocks summed during fare construction to build the total price of a journey.

In fare construction, an itinerary is divided at fare-break points into fare components, each defined over an O&D and carrying one fare basis code, one set of fare rules, and (for international) one NUC amount. Multiple fare components are grouped into pricing units (such as round-trip or circle-trip pricing units) where rules like minimum stay, combinability, and through-fare checks apply. Each fare component may itself span several flight segments when no fare break occurs between them.

**한국어 / Korean** — **운임 컴포넌트** — 운임 컴포넌트(fare component)는 하나의 운임이 적용되는 여정의 구간으로, 한 운임 분기점(fare-break point)에서 다음 분기점까지 이어지며 하나의 운임 기준과 그 규정의 적용을 받는다. 운임 컴포넌트는 운임 산정 과정에서 합산되어 여정 총액을 구성하는 기본 단위이다.

운임 산정에서 여정은 운임 분기점을 기준으로 운임 컴포넌트로 분할되며, 각 컴포넌트는 하나의 O&D로 정의되고 하나의 운임 기준 코드, 하나의 운임 규정 집합, 그리고 (국제선의 경우) 하나의 NUC 금액을 갖는다. 여러 운임 컴포넌트는 가격 산정 단위(pricing unit, 예: 왕복 또는 일주 여행 가격 산정 단위)로 묶이며, 여기서 최소 체류 기간, 결합 가능성(combinability), 통과 운임(through-fare) 검증과 같은 규정이 적용된다. 각 운임 컴포넌트는 그 사이에 운임 분기가 발생하지 않는 경우 여러 비행 세그먼트에 걸칠 수 있다.

**Aliases:** `Pricing Unit Component`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| ATPCO | `Fare Component (in fare construction)` | same | ATPCO rules apply at the fare-component level during automated pricing. |

# Related
- [Fare Basis Code](/air-shop/fare-basis-code.md) — related
- [Origin & Destination](/air-shop/origin-destination.md) — related
- [Journey](/air-shop/journey.md) — related
- [NUC](/air-shop/nuc.md) — related
- [ATPCO](/air-shop/atpco.md) — related

# Distinctions
- **Fare Component** vs [Segment](/air-ops/segment.md) — A segment is one booked flight portion; a fare component is a priced span bounded by fare breaks and may cover several segments.
- **Fare Component** vs [Origin & Destination](/air-shop/origin-destination.md) — An O&D is a market point-pair; a fare component is the priced unit defined over an O&D with one fare and rule set.

# Citations
[1] IATA — IATA fare construction principles / Ticketing Handbook
[2] ATPCO — ATPCO Automated Rules documentation
