---
type: Metric
title: CASM
description: 'Cost per Available Seat Mile (CASM) is an airline unit cost metric equal to total operating costs divided by available seat miles (ASMs). It measures how much it costs an airline to fly one seat one mile, enabling comparison of operational efficiency across carriers of different sizes and network structures. It is the primary cost benchmark in airline investor reporting and competitive analysis.'
tags:
  - air-shop
  - active
  - IATA
timestamp: '2026-07-16T00:00:00Z'
id: casm
vertical: air
category: air-shop
conceptType: metric
status: active
abbreviation: CASM
term_ko: '가용 좌석 마일당 비용(CASM)'
definition_ko: 'CASM(Cost per Available Seat Mile)은 총 영업 비용을 가용 좌석 마일(ASM) 수로 나눈 항공사 단위 비용 지표다. 좌석 마일 운항에 드는 비용을 측정하여 규모와 네트워크 구조가 다른 항공사 간 운영 효율을 비교할 수 있게 한다. 항공사 IR 보고 및 경쟁 분석의 주요 비용 벤치마크다.'
longDef: 'CASM is computed as: CASM = Total Operating Costs ÷ Available Seat Miles, expressed in US cents per ASM (or equivalent per ASK for metric-system markets). Analysts frequently strip out fuel — a cost outside management control — to produce "CASM ex-fuel" or "CASM ex-fuel and special items," which isolates structural cost competitiveness. Full-service carriers tend to carry higher CASM than low-cost carriers due to labour contracts, two-cabin service, connecting-hub networks, and distribution costs. Stage-length effects are material: longer flights lower unit costs because fixed per-flight costs (landing fees, turnaround time) are spread over more miles. CASM trends are closely watched as an indicator of cost discipline; airlines with persistently rising CASM relative to RASM erode their unit margin. US carriers report CASM in DOT Form 41 filings; the metric is a standard line item in quarterly earnings calls and is directly comparable across US carriers via the BTS database.'
longDef_ko: 'CASM 계산식: CASM = 총 영업 비용 ÷ 가용 좌석 마일, 미국 센트/ASM(미터법 시장은 ASK당)으로 표현한다. 분석가들은 경영진의 통제 밖에 있는 비용인 연료를 제외하여 "CASM ex-fuel" 또는 "CASM ex-fuel and special items"을 산출함으로써 구조적 비용 경쟁력을 분리한다. 풀서비스 항공사는 노동 계약, 2클래스 서비스, 연결 허브 네트워크, 유통 비용으로 인해 저비용항공사보다 CASM이 높은 경향이 있다. 구간 거리 효과도 크다. 비행당 고정비(착륙료, 정비 시간)가 더 많은 마일에 분산되므로 장거리 운항일수록 단위 비용이 낮아진다. CASM 추세는 비용 규율의 지표로 주시되며, RASM 대비 CASM이 지속적으로 상승하는 항공사는 단위 마진이 잠식된다. 미국 항공사는 DOT Form 41 제출 자료에서 CASM을 보고하며, BTS 데이터베이스를 통해 항공사 간 직접 비교가 가능하다.'
standardBody: IATA
aliases:
  - Cost per Available Seat Mile
  - Cost per ASM
  - CASK
  - Unit Cost
  - CASM ex-fuel
relationships:
  - type: related
    targetTerm: RASM
  - type: related
    targetTerm: Load Factor
  - type: related
    targetTerm: Revenue Management
distinctions:
  - targetTerm: RASM
    explanation: 'CASM is the cost side of airline unit economics — what it costs to fly one seat one mile; RASM is the revenue side — what revenue that seat mile earns. A positive unit margin requires RASM to exceed CASM.'
    explanation_ko: 'CASM은 항공사 단위 경제의 비용 측면(좌석 마일 운항 비용)이고, RASM은 수익 측면(좌석 마일당 수익)이다. 양의 단위 마진을 얻으려면 RASM이 CASM을 초과해야 한다.'
  - targetTerm: Load Factor
    explanation: 'Load Factor measures capacity utilisation; CASM measures cost efficiency independent of how full the aircraft is — an airline can have a high load factor but still poor unit economics if CASM is too high.'
    explanation_ko: '탑승률은 용량 활용도를 측정하고, CASM은 항공기가 얼마나 찼는지와 무관하게 비용 효율을 측정한다. 탑승률이 높더라도 CASM이 지나치게 높으면 단위 경제는 여전히 나쁠 수 있다.'
sources:
  - name: Air Carrier Financial Reports (Form 41 Financial Data)
    org: U.S. Bureau of Transportation Statistics (BTS)
    version: ''
    section: Schedule P-1.2 — Statement of Operations
    url: 'https://www.transtats.bts.gov/databases.asp?Z1qr_VQ=E&Z1qr_Qr5p=N8vn6v10%20f6n6v56vp5&f7owrpavQ='
    tier: regulator-guidance
  - name: IATA Annual Review 2024
    org: IATA
    version: '2024'
    section: Financial Results
    url: 'https://www.iata.org/en/publications/annual-review/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M9 40V10"/><path d="M9 40h30"/><rect x="12" y="22" width="7" height="18"/><rect x="22" y="27" width="7" height="13"/><rect x="32" y="31" width="7" height="9"/><polyline points="15,20 25,25 35,29"/></svg>
---

> Cost per Available Seat Mile (CASM) is an airline unit cost metric equal to total operating costs divided by available seat miles (ASMs). It measures how much it costs an airline to fly one seat one mile, enabling comparison of operational efficiency across carriers of different sizes and network structures. It is the primary cost benchmark in airline investor reporting and competitive analysis.

CASM is computed as: CASM = Total Operating Costs ÷ Available Seat Miles, expressed in US cents per ASM (or equivalent per ASK for metric-system markets). Analysts frequently strip out fuel — a cost outside management control — to produce "CASM ex-fuel" or "CASM ex-fuel and special items," which isolates structural cost competitiveness. Full-service carriers tend to carry higher CASM than low-cost carriers due to labour contracts, two-cabin service, connecting-hub networks, and distribution costs. Stage-length effects are material: longer flights lower unit costs because fixed per-flight costs (landing fees, turnaround time) are spread over more miles. CASM trends are closely watched as an indicator of cost discipline; airlines with persistently rising CASM relative to RASM erode their unit margin.

**한국어 / Korean** — **가용 좌석 마일당 비용(CASM)** — CASM(Cost per Available Seat Mile)은 총 영업 비용을 가용 좌석 마일(ASM) 수로 나눈 항공사 단위 비용 지표다. 좌석 마일 운항에 드는 비용을 측정하여 규모와 네트워크 구조가 다른 항공사 간 운영 효율을 비교할 수 있게 한다.

CASM 계산식: CASM = 총 영업 비용 ÷ 가용 좌석 마일. 분석가들은 경영진의 통제 밖에 있는 연료비를 제외하여 "CASM ex-fuel"을 산출함으로써 구조적 비용 경쟁력을 분리한다.

**Aliases:** `Cost per Available Seat Mile`, `Cost per ASM`, `CASK`, `Unit Cost`, `CASM ex-fuel`

# Related
- [RASM](/air/air-shop/rasm.md) — related
- [Load Factor](/air/air-shop/load-factor.md) — related
- [Revenue Management](/air/air-shop/revenue-management.md) — related

# Distinctions
- **CASM** vs [RASM](/air/air-shop/rasm.md) — CASM is the cost side of airline unit economics — what it costs to fly one seat one mile; RASM is the revenue side — what revenue that seat mile earns. A positive unit margin requires RASM to exceed CASM.
- **CASM** vs [Load Factor](/air/air-shop/load-factor.md) — Load Factor measures capacity utilisation; CASM measures cost efficiency independent of how full the aircraft is — an airline can have a high load factor but still poor unit economics if CASM is too high.

# Citations
[1] [U.S. Bureau of Transportation Statistics (BTS) — Air Carrier Financial Reports (Form 41 Financial Data)](https://www.transtats.bts.gov/databases.asp?Z1qr_VQ=E&Z1qr_Qr5p=N8vn6v10%20f6n6v56vp5&f7owrpavQ=)
[2] [IATA — IATA Annual Review 2024](https://www.iata.org/en/publications/annual-review/)
