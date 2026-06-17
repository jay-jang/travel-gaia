---
type: Standard Term
title: Add-on
description: An add-on (also called an arbitrary or proportional fare) is an amount combined with a published international fare to construct an unpublished fare to or from an interior point for which no through-fare is filed. It is a fare-construction building block that extends a gateway fare inland without requiring a separately published fare for every interior city.
tags:
  - air-shop
  - active
  - ATPCO
timestamp: '2026-06-17T00:00:00Z'
id: add-on
category: air-shop
conceptType: standard-term
status: active
term_ko: 애드온 (Add-on)
definition_ko: 'Add-on(애드온, arbitrary 또는 proportional fare라고도 함)은 through-fare가 파일링되지 않은 내륙 지점까지/에서의 미공시 운임을 구성하기 위해 공시된 국제선 운임에 결합하는 금액이다. 모든 내륙 도시에 대해 별도의 공시 운임을 두지 않고도 gateway 운임을 내륙으로 연장하는 fare-construction 기본 요소이다.'
longDef: 'Add-ons let carriers price travel to a non-gateway (interior) point by adding a proportional amount to a published fare between gateways. For example, an international fare published only to a coastal gateway can be extended to an inland city by combining it with a filed add-on amount, producing a constructed fare. Add-ons are not valid as fares on their own; they are proportional amounts that must be combined with a published fare in the same direction. They are filed and distributed (e.g., via ATPCO) and consumed by pricing engines during automated fare construction. Add-ons broaden coverage of the fare ladder without exploding the number of published through-fares.'
longDef_ko: 'Add-on은 gateway 사이에 공시된 운임에 proportional 금액을 더해 비(非)gateway(내륙) 지점까지의 여행을 가격책정하게 한다. 예를 들어 해안 gateway까지만 공시된 국제선 운임을 파일링된 add-on 금액과 결합해 내륙 도시까지 연장하면 constructed fare가 생성된다. add-on은 그 자체로는 운임으로 유효하지 않으며, 같은 방향의 공시 운임과 반드시 결합되어야 하는 proportional 금액이다. add-on은 (예: ATPCO를 통해) 파일링·배포되고 자동 운임 산출 과정에서 pricing 엔진이 소비한다. add-on은 공시 through-fare 수를 폭증시키지 않으면서 운임 사다리의 적용 범위를 넓힌다.'
standardBody: ATPCO
aliases:
  - Add-On
  - Arbitrary
  - Proportional Fare
  - Arbitrary Fare
providerTerms:
  - provider: ATPCO
    term: Add-ons / Arbitraries (Constructed Fares)
    context: ATPCO files add-on (arbitrary/proportional) amounts that pricing engines combine with published fares.
    context_ko: ATPCO는 pricing 엔진이 공시 운임과 결합하는 add-on(arbitrary/proportional) 금액을 파일링한다.
    relationship: same
relationships:
  - type: related
    targetTerm: Fare Construction
  - type: related
    targetTerm: Fare Component
  - type: related
    targetTerm: ATPCO
  - type: related
    targetTerm: NUC
  - type: related
    targetTerm: Origin & Destination
distinctions:
  - targetTerm: Fare Construction
    explanation: Fare Construction is the overall process of building and validating a journey's total fare; an add-on is one specific building block used within it to extend a published fare to an interior point.
    explanation_ko: 'Fare Construction은 여정 총운임을 구성·검증하는 전체 과정이고, add-on은 그 안에서 공시 운임을 내륙 지점까지 연장하는 데 쓰이는 하나의 구체적 구성 요소이다.'
  - targetTerm: Fare Basis Code
    explanation: A fare basis code identifies a complete published fare; an add-on is a proportional amount that cannot stand alone and must be combined with such a published fare to form a constructed fare.
    explanation_ko: 'Fare basis code는 완전한 공시 운임을 식별하고, add-on은 단독으로 성립할 수 없으며 constructed fare를 만들기 위해 그러한 공시 운임과 결합되어야 하는 proportional 금액이다.'
sources:
  - org: ATPCO
    name: Airline Industry Glossary (add-on / arbitrary / proportional fare)
    version: ''
    section: ''
    url: 'https://www.atpco.net/resources/glossary'
  - org: ATPCO
    name: 'FareManager (constructed fares: add-ons and arbitraries)'
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="20" width="12" height="8" rx="1.5"/><line x1="24" y1="24" x2="32" y2="24"/><line x1="28" y1="20" x2="28" y2="28"/><rect x="34" y="20" width="8" height="8" rx="1.5" stroke-dasharray="3 2"/></svg>
---

> An add-on (also called an arbitrary or proportional fare) is an amount combined with a published international fare to construct an unpublished fare to or from an interior point for which no through-fare is filed. It is a fare-construction building block that extends a gateway fare inland without requiring a separately published fare for every interior city.

Add-ons let carriers price travel to a non-gateway (interior) point by adding a proportional amount to a published fare between gateways. For example, an international fare published only to a coastal gateway can be extended to an inland city by combining it with a filed add-on amount, producing a constructed fare. Add-ons are not valid as fares on their own; they are proportional amounts that must be combined with a published fare in the same direction. They are filed and distributed (e.g., via ATPCO) and consumed by pricing engines during automated fare construction. Add-ons broaden coverage of the fare ladder without exploding the number of published through-fares.

**한국어 / Korean** — **애드온 (Add-on)** — Add-on(애드온, arbitrary 또는 proportional fare라고도 함)은 through-fare가 파일링되지 않은 내륙 지점까지/에서의 미공시 운임을 구성하기 위해 공시된 국제선 운임에 결합하는 금액이다. 모든 내륙 도시에 대해 별도의 공시 운임을 두지 않고도 gateway 운임을 내륙으로 연장하는 fare-construction 기본 요소이다.

Add-on은 gateway 사이에 공시된 운임에 proportional 금액을 더해 비(非)gateway(내륙) 지점까지의 여행을 가격책정하게 한다. 예를 들어 해안 gateway까지만 공시된 국제선 운임을 파일링된 add-on 금액과 결합해 내륙 도시까지 연장하면 constructed fare가 생성된다. add-on은 그 자체로는 운임으로 유효하지 않으며, 같은 방향의 공시 운임과 반드시 결합되어야 하는 proportional 금액이다. add-on은 (예: ATPCO를 통해) 파일링·배포되고 자동 운임 산출 과정에서 pricing 엔진이 소비한다. add-on은 공시 through-fare 수를 폭증시키지 않으면서 운임 사다리의 적용 범위를 넓힌다.

**Aliases:** `Add-On`, `Arbitrary`, `Proportional Fare`, `Arbitrary Fare`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| ATPCO | `Add-ons / Arbitraries (Constructed Fares)` | same | ATPCO files add-on (arbitrary/proportional) amounts that pricing engines combine with published fares. |

# Related
- [Fare Construction](/air-shop/fare-construction.md) — related
- [Fare Component](/air-shop/fare-component.md) — related
- [ATPCO](/air-shop/atpco.md) — related
- [NUC](/air-shop/nuc.md) — related
- [Origin & Destination](/air-shop/origin-destination.md) — related

# Distinctions
- **Add-on** vs [Fare Construction](/air-shop/fare-construction.md) — Fare Construction is the overall process of building and validating a journey's total fare; an add-on is one specific building block used within it to extend a published fare to an interior point.
- **Add-on** vs [Fare Basis Code](/air-shop/fare-basis-code.md) — A fare basis code identifies a complete published fare; an add-on is a proportional amount that cannot stand alone and must be combined with such a published fare to form a constructed fare.

# Citations
[1] [ATPCO — Airline Industry Glossary (add-on / arbitrary / proportional fare)](https://www.atpco.net/resources/glossary)
[2] ATPCO — FareManager (constructed fares: add-ons and arbitraries)
