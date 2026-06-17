---
type: Process
title: Fare Construction
description: 'Fare Construction is the standardized process of calculating the total fare for an itinerary by breaking it into fare components and pricing units, applying published or constructed fares in Neutral Units of Construction (NUC), validating fare rules, and converting the total to the local currency of the country of commencement. It produces the fare calculation line shown on a ticket.'
tags:
  - air-shop
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: fare-construction
category: air-shop
conceptType: process
status: active
term_ko: 운임 산출 (Fare Construction)
definition_ko: 'Fare Construction은 여정의 총운임을 산출하는 표준화된 과정으로, 여정을 fare component와 pricing unit으로 나누고, 공시 또는 구성(constructed) 운임을 NUC(Neutral Unit of Construction) 단위로 적용하며, fare rule을 검증한 뒤 총액을 여행 개시국 통화로 환산한다. 그 결과로 항공권에 표시되는 운임 계산식(fare calculation line)이 생성된다.'
longDef: 'Under IATA fare construction principles, a journey is divided into pricing units, each comprising one or more fare components (a fare plus the flights it covers). Fares are published in local currency with an equivalent NUC amount; all construction arithmetic is performed in NUC so that fares in different currencies can be added, then the NUC total is converted to the currency of commencement using the IATA Rate of Exchange (ROE). Construction may use published through-fares, or constructed fares built from add-ons (e.g., a domestic add-on plus an international fare). Mileage-based checks (Maximum Permitted Mileage versus Ticketed Point Mileage, with mileage surcharges) and routing-based validity, together with minimum-fare checks, ensure the constructed amount is valid. Modern pricing engines automate this, but the underlying NUC/ROE framework persists alongside ATPCO-filed fares.'
longDef_ko: 'IATA 운임 산출 원칙에 따라 여정은 여러 pricing unit으로 나뉘고, 각 pricing unit은 하나 이상의 fare component(운임과 그 운임이 적용되는 비행 구간)로 구성된다. 운임은 현지 통화와 그에 상응하는 NUC 금액으로 공시되며, 서로 다른 통화의 운임을 합산할 수 있도록 모든 산출 연산은 NUC로 수행한 뒤, IATA Rate of Exchange(ROE)를 사용해 NUC 합계를 개시국 통화로 환산한다. 산출에는 공시 through-fare를 쓰거나, add-on으로 조합한 constructed fare(예: 국내 add-on + 국제 운임)를 쓸 수 있다. 마일리지 기반 점검(Maximum Permitted Mileage 대 Ticketed Point Mileage, 마일리지 할증 포함)과 routing 기반 유효성, 그리고 최저운임 점검을 통해 산출 금액의 유효성을 확보한다. 현대 pricing 엔진이 이를 자동화하지만, ATPCO 파일링 운임과 함께 NUC/ROE 체계는 여전히 유지된다.'
standardBody: IATA
aliases:
  - Fare Calculation
  - Pricing
relationships:
  - type: child
    targetTerm: Fare Component
  - type: child
    targetTerm: Pricing Unit
  - type: related
    targetTerm: NUC
  - type: related
    targetTerm: Fare Rule
  - type: related
    targetTerm: Journey
distinctions:
  - targetTerm: Fare Component
    explanation: A Fare Component is one building block (a single fare and its flights); Fare Construction is the overall process that assembles and validates components and pricing units into a total fare.
    explanation_ko: 'Fare Component는 하나의 구성 요소(단일 운임과 그 비행 구간)이며, Fare Construction은 component와 pricing unit을 조합·검증하여 총운임을 만드는 전체 과정이다.'
sources:
  - org: IATA
    name: Fundamental Skills in Journey Pricing and Ticketing
    version: ''
    section: Fare construction
    url: 'https://www.iata.org/en/training/courses/journey-pricing-ticketing/tttg14/en/'
  - org: IATA
    name: IATA Rates of Exchange
    version: ''
    section: NUC and ROE
    url: 'https://www.iata.org/en/publications/manuals/iata-rates-of-exchange/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="20" width="10" height="10" rx="1.5"/><rect x="31" y="20" width="10" height="10" rx="1.5"/><line x1="17" y1="25" x2="22" y2="25"/><line x1="26" y1="25" x2="31" y2="25"/><path d="M22 25l2-2 2 2-2 2z"/><line x1="12" y1="20" x2="12" y2="14"/><line x1="36" y1="20" x2="36" y2="14"/></svg>
---

> Fare Construction is the standardized process of calculating the total fare for an itinerary by breaking it into fare components and pricing units, applying published or constructed fares in Neutral Units of Construction (NUC), validating fare rules, and converting the total to the local currency of the country of commencement. It produces the fare calculation line shown on a ticket.

Under IATA fare construction principles, a journey is divided into pricing units, each comprising one or more fare components (a fare plus the flights it covers). Fares are published in local currency with an equivalent NUC amount; all construction arithmetic is performed in NUC so that fares in different currencies can be added, then the NUC total is converted to the currency of commencement using the IATA Rate of Exchange (ROE). Construction may use published through-fares, or constructed fares built from add-ons (e.g., a domestic add-on plus an international fare). Mileage-based checks (Maximum Permitted Mileage versus Ticketed Point Mileage, with mileage surcharges) and routing-based validity, together with minimum-fare checks, ensure the constructed amount is valid. Modern pricing engines automate this, but the underlying NUC/ROE framework persists alongside ATPCO-filed fares.

**한국어 / Korean** — **운임 산출 (Fare Construction)** — Fare Construction은 여정의 총운임을 산출하는 표준화된 과정으로, 여정을 fare component와 pricing unit으로 나누고, 공시 또는 구성(constructed) 운임을 NUC(Neutral Unit of Construction) 단위로 적용하며, fare rule을 검증한 뒤 총액을 여행 개시국 통화로 환산한다. 그 결과로 항공권에 표시되는 운임 계산식(fare calculation line)이 생성된다.

IATA 운임 산출 원칙에 따라 여정은 여러 pricing unit으로 나뉘고, 각 pricing unit은 하나 이상의 fare component(운임과 그 운임이 적용되는 비행 구간)로 구성된다. 운임은 현지 통화와 그에 상응하는 NUC 금액으로 공시되며, 서로 다른 통화의 운임을 합산할 수 있도록 모든 산출 연산은 NUC로 수행한 뒤, IATA Rate of Exchange(ROE)를 사용해 NUC 합계를 개시국 통화로 환산한다. 산출에는 공시 through-fare를 쓰거나, add-on으로 조합한 constructed fare(예: 국내 add-on + 국제 운임)를 쓸 수 있다. 마일리지 기반 점검(Maximum Permitted Mileage 대 Ticketed Point Mileage, 마일리지 할증 포함)과 routing 기반 유효성, 그리고 최저운임 점검을 통해 산출 금액의 유효성을 확보한다. 현대 pricing 엔진이 이를 자동화하지만, ATPCO 파일링 운임과 함께 NUC/ROE 체계는 여전히 유지된다.

**Aliases:** `Fare Calculation`, `Pricing`

# Related
- [Fare Component](/air-shop/fare-component.md) — child
- [Pricing Unit](/air-shop/pricing-unit.md) — child
- [NUC](/air-shop/nuc.md) — related
- [Fare Rule](/air-shop/fare-rule.md) — related
- [Journey](/air-shop/journey.md) — related

# Distinctions
- **Fare Construction** vs [Fare Component](/air-shop/fare-component.md) — A Fare Component is one building block (a single fare and its flights); Fare Construction is the overall process that assembles and validates components and pricing units into a total fare.

# Citations
[1] [IATA — Fundamental Skills in Journey Pricing and Ticketing — Fare construction](https://www.iata.org/en/training/courses/journey-pricing-ticketing/tttg14/en/)
[2] [IATA — IATA Rates of Exchange — NUC and ROE](https://www.iata.org/en/publications/manuals/iata-rates-of-exchange/)
