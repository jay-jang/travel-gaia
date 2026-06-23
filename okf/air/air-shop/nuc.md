---
type: Standard Term
title: NUC
description: 'NUC (Neutral Unit of Construction) is a common, currency-neutral unit used in international fare construction to add and compare fare components filed in different currencies. Fare-component amounts are converted to NUCs, summed, then converted to the currency of the country of commencement using IATA Rates of Exchange (ROE).'
tags:
  - air-shop
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: nuc
vertical: air
category: air-shop
conceptType: standard-term
status: active
abbreviation: NUC
term_ko: 중립 산정 단위 (NUC)
definition_ko: 'NUC(Neutral Unit of Construction, 중립 산정 단위)는 서로 다른 통화로 신고된 운임 컴포넌트를 합산하고 비교하기 위해 국제선 운임 산정에 사용되는 공통의 통화 중립 단위이다. 운임 컴포넌트 금액은 NUC로 환산되어 합산된 뒤, IATA 환산율(ROE)을 사용해 여행 개시국의 통화로 환산된다.'
longDef: 'Because an international journey can traverse fares published in multiple local currencies, the NUC provides a single accumulation unit so that fare components can be combined and checked against fare ladders. Each currency has an IATA-published Rate of Exchange (ROE) used to convert local currency to and from NUCs; NUC totals are converted back to the selling/local currency at the end of construction. NUCs are central to IATA''s mileage- and route-based international fare construction and appear on the linear fare calculation of tickets.'
longDef_ko: '국제선 여정은 여러 현지 통화로 공시된 운임을 거칠 수 있으므로, NUC는 운임 컴포넌트를 결합하고 운임 단계(fare ladder)와 대조할 수 있도록 단일 누적 단위를 제공한다. 각 통화에는 현지 통화를 NUC로 환산하거나 그 반대로 환산하는 데 사용되는 IATA 공시 환산율(ROE)이 있으며, NUC 합계는 산정 종료 시점에 다시 판매/현지 통화로 환산된다. NUC는 마일리지 및 노선 기반의 IATA 국제선 운임 산정의 핵심이며, 항공권의 선형 운임 계산(linear fare calculation)에 표시된다.'
standardBody: IATA
aliases:
  - Neutral Unit of Construction
providerTerms:
  - provider: NDC/IATA
    term: FCU (Fare Construction Unit)
    context: 'FCU was IATA''s earlier currency-neutral fare-construction unit, superseded by NUC on 1 July 1989; NUC values are built using the IATA Rate of Exchange (IROE).'
    context_ko: 'FCU는 IATA의 이전 통화중립 운임구성 단위로 1989년 7월 1일 NUC로 대체되었으며, NUC 값은 IATA 환율(IROE)로 산출된다.'
    relationship: related
relationships:
  - type: related
    targetTerm: Fare Component
  - type: related
    targetTerm: ISO 4217 Currency Code
  - type: related
    targetTerm: Proration
  - type: related
    targetTerm: E-ticket
distinctions:
  - targetTerm: ISO 4217 Currency Code
    explanation: 'ISO 4217 codes name real local currencies; the NUC is a neutral construction unit, not a tradeable currency.'
    explanation_ko: 'ISO 4217 코드는 실제 현지 통화를 지칭하고, NUC는 거래 가능한 통화가 아니라 중립적인 산정 단위이다.'
  - targetTerm: Proration
    explanation: NUC is the unit for building a fare; proration uses fare values to split revenue among carriers on a ticket.
    explanation_ko: 'NUC는 운임을 구성하기 위한 단위이고, 정산 배분(proration)은 운임 가치를 사용해 한 항공권의 수익을 항공사 간에 분배한다.'
sources:
  - name: IATA fare construction / Ticketing Handbook (NUC and ROE)
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/ticketing-handbook/'
    tier: association
  - name: IATA Passenger Tariff / fare construction rules
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/passenger-tariffs-conference-composite-manual/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="24" r="15"/><path d="M24 14v20"/><path d="M19 19h7a3 3 0 010 6h-7"/><path d="M30 28l-6-6"/></svg>
---

> NUC (Neutral Unit of Construction) is a common, currency-neutral unit used in international fare construction to add and compare fare components filed in different currencies. Fare-component amounts are converted to NUCs, summed, then converted to the currency of the country of commencement using IATA Rates of Exchange (ROE).

Because an international journey can traverse fares published in multiple local currencies, the NUC provides a single accumulation unit so that fare components can be combined and checked against fare ladders. Each currency has an IATA-published Rate of Exchange (ROE) used to convert local currency to and from NUCs; NUC totals are converted back to the selling/local currency at the end of construction. NUCs are central to IATA's mileage- and route-based international fare construction and appear on the linear fare calculation of tickets.

**한국어 / Korean** — **중립 산정 단위 (NUC)** — NUC(Neutral Unit of Construction, 중립 산정 단위)는 서로 다른 통화로 신고된 운임 컴포넌트를 합산하고 비교하기 위해 국제선 운임 산정에 사용되는 공통의 통화 중립 단위이다. 운임 컴포넌트 금액은 NUC로 환산되어 합산된 뒤, IATA 환산율(ROE)을 사용해 여행 개시국의 통화로 환산된다.

국제선 여정은 여러 현지 통화로 공시된 운임을 거칠 수 있으므로, NUC는 운임 컴포넌트를 결합하고 운임 단계(fare ladder)와 대조할 수 있도록 단일 누적 단위를 제공한다. 각 통화에는 현지 통화를 NUC로 환산하거나 그 반대로 환산하는 데 사용되는 IATA 공시 환산율(ROE)이 있으며, NUC 합계는 산정 종료 시점에 다시 판매/현지 통화로 환산된다. NUC는 마일리지 및 노선 기반의 IATA 국제선 운임 산정의 핵심이며, 항공권의 선형 운임 계산(linear fare calculation)에 표시된다.

**Aliases:** `Neutral Unit of Construction`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| NDC/IATA | `FCU (Fare Construction Unit)` | related | FCU was IATA's earlier currency-neutral fare-construction unit, superseded by NUC on 1 July 1989; NUC values are built using the IATA Rate of Exchange (IROE). |

# Related
- [Fare Component](/air/air-shop/fare-component.md) — related
- [ISO 4217 Currency Code](/common/codes/iso-4217-currency-code.md) — related
- [Proration](/air/air-partner/proration.md) — related
- [E-ticket](/air/air-ticket/e-ticket.md) — related

# Distinctions
- **NUC** vs [ISO 4217 Currency Code](/common/codes/iso-4217-currency-code.md) — ISO 4217 codes name real local currencies; the NUC is a neutral construction unit, not a tradeable currency.
- **NUC** vs [Proration](/air/air-partner/proration.md) — NUC is the unit for building a fare; proration uses fare values to split revenue among carriers on a ticket.

# Citations
[1] [IATA — IATA fare construction / Ticketing Handbook (NUC and ROE)](https://www.iata.org/en/publications/manuals/ticketing-handbook/)
[2] [IATA — IATA Passenger Tariff / fare construction rules](https://www.iata.org/en/publications/manuals/passenger-tariffs-conference-composite-manual/)
