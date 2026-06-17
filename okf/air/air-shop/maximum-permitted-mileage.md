---
type: Metric
title: Maximum Permitted Mileage (MPM)
description: 'Maximum Permitted Mileage (MPM) is the maximum distance a passenger may travel between two points on a given published through-fare without a mileage surcharge, published by IATA for international fare construction. MPM values are established from the shortest combinations of nonstop sectors over construction points, increased by 20%.'
tags:
  - air-shop
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: maximum-permitted-mileage
vertical: air
category: air-shop
conceptType: metric
status: active
abbreviation: MPM
term_ko: 최대 허용 마일리지 (MPM)
definition_ko: 'Maximum Permitted Mileage(MPM, 최대 허용 마일리지)는 특정 공시 through-fare로 두 지점 사이를 마일리지 할증 없이 이동할 수 있는 최대 거리로, IATA가 국제선 운임 산출을 위해 공시한다. MPM 값은 construction point를 거치는 최단 nonstop sector 조합에 20%를 가산하여 산정된다.'
longDef: 'MPM is part of IATA''s Mileage Suite under Resolution 011 and is the primary input to the mileage system of international fare construction. During pricing, the sum of the itinerary''s Ticketed Point Mileages (TPM) is compared with the MPM for the fare''s origin-destination: if total TPM is within MPM, the through-fare applies unchanged; if it exceeds MPM, a mileage surcharge (graduated as 5M, 10M, 15M, 20M, 25M for up to 5%, 10%, 15%, 20%, 25% over) is applied, with travel beyond 25% requiring a different fare or construction. The MPM Manual contains close to 7 million MPM distances. MPM exists so a single published fare can cover many routings without filing a fare for each, while still limiting how circuitously a passenger may travel on it.'
longDef_ko: 'MPM은 Resolution 011 하의 IATA Mileage Suite의 일부이며, 국제선 운임 산출의 마일리지 시스템에 들어가는 주요 입력값이다. pricing 시 여정의 Ticketed Point Mileage(TPM) 합계를 해당 운임의 출발지-도착지 MPM과 비교한다. TPM 합계가 MPM 이내이면 through-fare가 그대로 적용되고, MPM을 초과하면 마일리지 할증(초과율 5%·10%·15%·20%·25%에 대해 5M·10M·15M·20M·25M로 단계화)이 적용되며, 25% 초과 시에는 다른 운임이나 산출 방식이 필요하다. MPM Manual에는 약 700만 개의 MPM 거리가 수록되어 있다. MPM은 단일 공시 운임이 routing마다 운임을 파일링하지 않고도 여러 routing을 포괄하게 하되, 그 운임으로 얼마나 우회해 이동할 수 있는지를 제한하기 위해 존재한다.'
standardBody: IATA
aliases:
  - Maximum Permitted Mileage
  - MPM
  - Max Permitted Mileage
relationships:
  - type: related
    targetTerm: Ticketed Point Mileage (TPM)
  - type: related
    targetTerm: Fare Construction
  - type: related
    targetTerm: Surcharge
  - type: related
    targetTerm: Fare Component
  - type: related
    targetTerm: Origin & Destination
distinctions:
  - targetTerm: Ticketed Point Mileage (TPM)
    explanation: TPM is the actual flown distance of a single flight coupon; MPM is the maximum allowable distance for a through-fare's O&D. Construction compares the summed TPMs against the MPM to decide whether a mileage surcharge applies.
    explanation_ko: 'TPM은 하나의 flight coupon의 실제 비행 거리이고, MPM은 through-fare의 O&D에 대한 최대 허용 거리이다. 산출에서는 TPM 합계를 MPM과 비교해 마일리지 할증 적용 여부를 결정한다.'
  - targetTerm: Surcharge
    explanation: MPM is the distance threshold; the mileage surcharge is the percentage uplift to the fare that results when summed TPMs exceed the MPM.
    explanation_ko: 'MPM은 거리 임계값이고, 마일리지 surcharge는 TPM 합계가 MPM을 초과할 때 운임에 가산되는 백분율 할증이다.'
sources:
  - org: IATA
    name: Maximum Permitted Mileage Manual (MPM)
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/mileage/mileage-manual-mpm/'
  - org: IATA
    name: Mileage Suite (Resolution 011)
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/mileage/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="35" r="3"/><circle cx="37" cy="13" r="3"/><path d="M13 33C20 30 18 20 26 17" stroke-dasharray="4 3"/><path d="M14 33l24-16"/><path d="M34 11l3 2 1 3"/></svg>
---

> Maximum Permitted Mileage (MPM) is the maximum distance a passenger may travel between two points on a given published through-fare without a mileage surcharge, published by IATA for international fare construction. MPM values are established from the shortest combinations of nonstop sectors over construction points, increased by 20%.

MPM is part of IATA's Mileage Suite under Resolution 011 and is the primary input to the mileage system of international fare construction. During pricing, the sum of the itinerary's Ticketed Point Mileages (TPM) is compared with the MPM for the fare's origin-destination: if total TPM is within MPM, the through-fare applies unchanged; if it exceeds MPM, a mileage surcharge (graduated as 5M, 10M, 15M, 20M, 25M for up to 5%, 10%, 15%, 20%, 25% over) is applied, with travel beyond 25% requiring a different fare or construction. The MPM Manual contains close to 7 million MPM distances. MPM exists so a single published fare can cover many routings without filing a fare for each, while still limiting how circuitously a passenger may travel on it.

**한국어 / Korean** — **최대 허용 마일리지 (MPM)** — Maximum Permitted Mileage(MPM, 최대 허용 마일리지)는 특정 공시 through-fare로 두 지점 사이를 마일리지 할증 없이 이동할 수 있는 최대 거리로, IATA가 국제선 운임 산출을 위해 공시한다. MPM 값은 construction point를 거치는 최단 nonstop sector 조합에 20%를 가산하여 산정된다.

MPM은 Resolution 011 하의 IATA Mileage Suite의 일부이며, 국제선 운임 산출의 마일리지 시스템에 들어가는 주요 입력값이다. pricing 시 여정의 Ticketed Point Mileage(TPM) 합계를 해당 운임의 출발지-도착지 MPM과 비교한다. TPM 합계가 MPM 이내이면 through-fare가 그대로 적용되고, MPM을 초과하면 마일리지 할증(초과율 5%·10%·15%·20%·25%에 대해 5M·10M·15M·20M·25M로 단계화)이 적용되며, 25% 초과 시에는 다른 운임이나 산출 방식이 필요하다. MPM Manual에는 약 700만 개의 MPM 거리가 수록되어 있다. MPM은 단일 공시 운임이 routing마다 운임을 파일링하지 않고도 여러 routing을 포괄하게 하되, 그 운임으로 얼마나 우회해 이동할 수 있는지를 제한하기 위해 존재한다.

**Aliases:** `Maximum Permitted Mileage`, `MPM`, `Max Permitted Mileage`

# Related
- [Ticketed Point Mileage (TPM)](/air/air-shop/ticketed-point-mileage.md) — related
- [Fare Construction](/air/air-shop/fare-construction.md) — related
- [Surcharge](/air/air-shop/surcharge.md) — related
- [Fare Component](/air/air-shop/fare-component.md) — related
- [Origin & Destination](/air/air-shop/origin-destination.md) — related

# Distinctions
- **Maximum Permitted Mileage (MPM)** vs [Ticketed Point Mileage (TPM)](/air/air-shop/ticketed-point-mileage.md) — TPM is the actual flown distance of a single flight coupon; MPM is the maximum allowable distance for a through-fare's O&D. Construction compares the summed TPMs against the MPM to decide whether a mileage surcharge applies.
- **Maximum Permitted Mileage (MPM)** vs [Surcharge](/air/air-shop/surcharge.md) — MPM is the distance threshold; the mileage surcharge is the percentage uplift to the fare that results when summed TPMs exceed the MPM.

# Citations
[1] [IATA — Maximum Permitted Mileage Manual (MPM)](https://www.iata.org/en/publications/manuals/mileage/mileage-manual-mpm/)
[2] [IATA — Mileage Suite (Resolution 011)](https://www.iata.org/en/publications/manuals/mileage/)
