---
type: Metric
title: Ticketed Point Mileage (TPM)
description: 'Ticketed Point Mileage (TPM) is the distance covered by a single flight coupon between two consecutive ticketed points, published by IATA and calculated on the basis of nonstop or through scheduled services. It is the building-block distance summed across an itinerary in mileage-based fare construction and used in prorate-factor calculation.'
tags:
  - air-shop
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: ticketed-point-mileage
vertical: air
category: air-shop
conceptType: metric
status: active
abbreviation: TPM
term_ko: 발권 지점 간 마일리지 (TPM)
definition_ko: 'Ticketed Point Mileage(TPM, 발권 지점 간 마일리지)는 연속된 두 발권 지점 사이의 하나의 flight coupon이 커버하는 거리로, IATA가 nonstop 또는 through 정기 서비스 기준으로 산정해 공시한다. 마일리지 기반 운임 산출에서 여정 전체에 걸쳐 합산되는 기본 거리이며, prorate-factor 계산에도 사용된다.'
longDef: 'TPMs are published in IATA''s Mileage Suite under Resolution 011; the TPM Manual contains more than 65,000 city-pair mileages. In fare construction, the TPMs for each ticketed sector of a fare component are summed and compared with the Maximum Permitted Mileage (MPM) for the component''s origin-destination to determine whether the through-fare applies as filed or attracts a mileage surcharge. TPMs also feed proration: revenue from an interline ticket can be apportioned among carriers using mileage prorate factors derived from TPM, unless a Special Prorate Agreement overrides them. TPM is a flown-distance measure of an actual coupon, distinct from the MPM allowance for an O&D.'
longDef_ko: 'TPM은 Resolution 011 하의 IATA Mileage Suite에 공시되며, TPM Manual에는 65,000개가 넘는 city-pair 마일리지가 수록되어 있다. 운임 산출에서 fare component의 각 발권 sector에 대한 TPM을 합산하여 해당 component의 출발지-도착지 MPM과 비교해, through-fare가 파일링된 대로 적용되는지 아니면 마일리지 할증이 붙는지를 판정한다. TPM은 proration에도 입력된다. interline 항공권의 수익은 Special Prorate Agreement가 우선 적용되지 않는 한 TPM에서 도출한 마일리지 prorate factor를 사용해 항공사 간에 배분될 수 있다. TPM은 실제 coupon의 비행 거리 측정값으로, O&D에 대한 허용치인 MPM과 구별된다.'
standardBody: IATA
aliases:
  - Ticketed Point Mileage
  - TPM
relationships:
  - type: related
    targetTerm: Maximum Permitted Mileage (MPM)
  - type: related
    targetTerm: Fare Construction
  - type: related
    targetTerm: Proration
  - type: related
    targetTerm: Flight Coupon
  - type: related
    targetTerm: Surcharge
distinctions:
  - targetTerm: Maximum Permitted Mileage (MPM)
    explanation: TPM is the actual flown distance per coupon; MPM is the maximum allowed distance for a through-fare's O&D. The mileage system compares summed TPM against MPM.
    explanation_ko: 'TPM은 coupon별 실제 비행 거리이고, MPM은 through-fare의 O&D에 대한 최대 허용 거리이다. 마일리지 시스템은 TPM 합계를 MPM과 비교한다.'
  - targetTerm: Proration
    explanation: 'TPM is a distance datum; proration is the process of splitting interline revenue, which can use TPM-derived mileage factors as one prorate basis.'
    explanation_ko: 'TPM은 거리 데이터이고, proration은 interline 수익을 분배하는 과정으로 TPM에서 도출한 마일리지 factor를 하나의 prorate 기준으로 사용할 수 있다.'
sources:
  - org: IATA
    name: Ticketed Point Mileage (TPM)
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/mileage/ticketed-point-mileage-tpm/'
  - org: IATA
    name: Mileage Suite (Resolution 011)
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/mileage/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="24" r="3"/><circle cx="37" cy="24" r="3"/><line x1="14" y1="24" x2="34" y2="24"/><line x1="19" y1="21" x2="19" y2="27"/><line x1="24" y1="20" x2="24" y2="28"/><line x1="29" y1="21" x2="29" y2="27"/></svg>
---

> Ticketed Point Mileage (TPM) is the distance covered by a single flight coupon between two consecutive ticketed points, published by IATA and calculated on the basis of nonstop or through scheduled services. It is the building-block distance summed across an itinerary in mileage-based fare construction and used in prorate-factor calculation.

TPMs are published in IATA's Mileage Suite under Resolution 011; the TPM Manual contains more than 65,000 city-pair mileages. In fare construction, the TPMs for each ticketed sector of a fare component are summed and compared with the Maximum Permitted Mileage (MPM) for the component's origin-destination to determine whether the through-fare applies as filed or attracts a mileage surcharge. TPMs also feed proration: revenue from an interline ticket can be apportioned among carriers using mileage prorate factors derived from TPM, unless a Special Prorate Agreement overrides them. TPM is a flown-distance measure of an actual coupon, distinct from the MPM allowance for an O&D.

**한국어 / Korean** — **발권 지점 간 마일리지 (TPM)** — Ticketed Point Mileage(TPM, 발권 지점 간 마일리지)는 연속된 두 발권 지점 사이의 하나의 flight coupon이 커버하는 거리로, IATA가 nonstop 또는 through 정기 서비스 기준으로 산정해 공시한다. 마일리지 기반 운임 산출에서 여정 전체에 걸쳐 합산되는 기본 거리이며, prorate-factor 계산에도 사용된다.

TPM은 Resolution 011 하의 IATA Mileage Suite에 공시되며, TPM Manual에는 65,000개가 넘는 city-pair 마일리지가 수록되어 있다. 운임 산출에서 fare component의 각 발권 sector에 대한 TPM을 합산하여 해당 component의 출발지-도착지 MPM과 비교해, through-fare가 파일링된 대로 적용되는지 아니면 마일리지 할증이 붙는지를 판정한다. TPM은 proration에도 입력된다. interline 항공권의 수익은 Special Prorate Agreement가 우선 적용되지 않는 한 TPM에서 도출한 마일리지 prorate factor를 사용해 항공사 간에 배분될 수 있다. TPM은 실제 coupon의 비행 거리 측정값으로, O&D에 대한 허용치인 MPM과 구별된다.

**Aliases:** `Ticketed Point Mileage`, `TPM`

# Related
- [Maximum Permitted Mileage (MPM)](/air/air-shop/maximum-permitted-mileage.md) — related
- [Fare Construction](/air/air-shop/fare-construction.md) — related
- [Proration](/air/air-partner/proration.md) — related
- [Flight Coupon](/air/air-ticket/flight-coupon.md) — related
- [Surcharge](/air/air-shop/surcharge.md) — related

# Distinctions
- **Ticketed Point Mileage (TPM)** vs [Maximum Permitted Mileage (MPM)](/air/air-shop/maximum-permitted-mileage.md) — TPM is the actual flown distance per coupon; MPM is the maximum allowed distance for a through-fare's O&D. The mileage system compares summed TPM against MPM.
- **Ticketed Point Mileage (TPM)** vs [Proration](/air/air-partner/proration.md) — TPM is a distance datum; proration is the process of splitting interline revenue, which can use TPM-derived mileage factors as one prorate basis.

# Citations
[1] [IATA — Ticketed Point Mileage (TPM)](https://www.iata.org/en/publications/manuals/mileage/ticketed-point-mileage-tpm/)
[2] [IATA — Mileage Suite (Resolution 011)](https://www.iata.org/en/publications/manuals/mileage/)
