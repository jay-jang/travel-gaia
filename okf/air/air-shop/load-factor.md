---
type: Metric
title: Load Factor
description: 'Load Factor (LF) is the percentage of available seat-kilometres (ASK) that are filled by revenue passengers, calculated as Revenue Passenger Kilometres (RPK) divided by Available Seat Kilometres (ASK) multiplied by 100. It is the primary measure of airline capacity utilisation, published by IATA in monthly traffic statistics and used by ICAO for comparative aviation analysis.'
tags:
  - air-shop
  - active
  - IATA
timestamp: '2026-06-29T00:00:00Z'
id: load-factor
vertical: air
category: air-shop
conceptType: metric
status: active
abbreviation: LF
term_ko: '탑승률(Load Factor)'
definition_ko: '탑승률(Load Factor, LF)은 수익 여객이 차지하는 가용 좌석-킬로미터(ASK)의 비율로, 수익 여객 킬로미터(RPK)를 가용 좌석 킬로미터(ASK)로 나눈 뒤 100을 곱해 산출한다. IATA가 매월 항공 교통 통계에서 발표하고 ICAO가 비교 항공 분석에 활용하는 항공사 주요 운송 효율 지표다.'
longDef: 'A passenger load factor (PLF) at or above the breakeven load factor signals that average fares are covering unit costs; airlines use it alongside yield (revenue per RPK) to measure revenue quality. System-wide load factors rose from around 75–77% in the early 2010s to above 83% in 2023 as revenue management systems matured and airlines right-sized capacity. The metric is produced at flight, route, and network level and is a standard item in IATA Monthly Statistics and airline investor reporting. Cargo load factor (CLF) applies the same formula to freight, substituting freight tonne kilometres (FTK) for RPK and available freight tonne kilometres (AFTK) for ASK.'
longDef_ko: '여객 탑승률(PLF)이 손익분기 탑승률(breakeven load factor) 이상이면 평균 운임이 단위 비용을 충당하고 있다는 신호다. 항공사는 탑승률과 함께 수익률(RPK당 수익)을 활용해 수익 품질을 측정한다. 수익 관리 시스템이 성숙하고 항공사의 적절한 용량 조정이 이루어지면서 시스템 탑승률은 2010년대 초반 약 75~77%에서 2023년 83% 이상으로 상승했다. 이 지표는 항공편·노선·네트워크 수준에서 산출되며 IATA 월간 통계 및 항공사 IR 보고의 표준 항목이다. 화물 탑승률(CLF)은 동일한 공식을 화물에 적용하여 RPK 대신 화물 톤 킬로미터(FTK), ASK 대신 가용 화물 톤 킬로미터(AFTK)를 사용한다.'
standardBody: IATA
aliases:
  - Passenger Load Factor
  - PLF
  - Seat Factor
relationships:
  - type: related
    targetTerm: Revenue Management
  - type: related
    targetTerm: Overbooking
  - type: related
    targetTerm: Spill and Spoilage
  - type: related
    targetTerm: Bid Price
distinctions:
  - targetTerm: Revenue Management
    explanation: 'Load Factor measures the percentage of capacity filled; Revenue Management is the system and discipline that controls pricing and inventory to optimise load factor and yield simultaneously — load factor is an output metric, revenue management is the input process.'
    explanation_ko: '탑승률은 용량이 채워진 비율을 측정하는 지표이고, Revenue Management는 탑승률과 수익률을 동시에 최적화하기 위해 요금과 재고를 통제하는 시스템·학문이다. 탑승률은 결과 지표이고 Revenue Management는 입력 프로세스다.'
  - targetTerm: Overbooking
    explanation: 'Overbooking is the practice of selling more seats than the aircraft holds to compensate for expected no-shows; Load Factor is the ex-post outcome metric measuring how many seats were actually filled by revenue passengers.'
    explanation_ko: '초과 예약은 예상 결항객을 보상하기 위해 항공기 수용 좌석보다 많이 판매하는 관행이고, 탑승률은 실제로 수익 여객이 탑승한 좌석 비율을 사후 측정하는 결과 지표다.'
  - targetTerm: Spill and Spoilage
    explanation: 'Spill (demand exceeding capacity) and spoilage (unfilled capacity) are the two failure modes Load Factor diagnoses: a load factor approaching 100% signals potential spill; a consistently low load factor signals spoilage and under-utilisation.'
    explanation_ko: '유출(Spill, 수요가 용량을 초과)과 낭비(Spoilage, 용량 미충족)는 탑승률이 진단하는 두 가지 실패 모드다. 탑승률이 100%에 가까우면 유출 가능성을 신호하고, 지속적으로 낮은 탑승률은 낭비와 비효율을 신호한다.'
sources:
  - name: World Air Transport Statistics (WATS)
    org: IATA
    version: 68th Edition (2024)
    section: Traffic Statistics Definitions
    url: 'https://www.iata.org/en/publications/store/world-air-transport-statistics/'
    tier: association
  - name: ICAO Air Transport Reporting Forms and Traffic Statistics
    org: ICAO
    version: ''
    section: Definitions — Doc 9750
    url: 'https://www.icao.int/sustainability/Pages/Glossary.aspx'
    tier: standard-body
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M9 40V10"/><path d="M9 40h30"/><rect x="12" y="28" width="7" height="12"/><rect x="22" y="20" width="7" height="20"/><rect x="32" y="24" width="7" height="16"/><polyline points="15,26 25,18 35,22"/></svg>
---

> Load Factor (LF) is the percentage of available seat-kilometres (ASK) that are filled by revenue passengers, calculated as Revenue Passenger Kilometres (RPK) divided by Available Seat Kilometres (ASK) multiplied by 100. It is the primary measure of airline capacity utilisation, published by IATA in monthly traffic statistics and used by ICAO for comparative aviation analysis.

A passenger load factor (PLF) at or above the breakeven load factor signals that average fares are covering unit costs; airlines use it alongside yield (revenue per RPK) to measure revenue quality. System-wide load factors rose from around 75–77% in the early 2010s to above 83% in 2023 as revenue management systems matured and airlines right-sized capacity. The metric is produced at flight, route, and network level and is a standard item in IATA Monthly Statistics and airline investor reporting. Cargo load factor (CLF) applies the same formula to freight, substituting freight tonne kilometres (FTK) for RPK and available freight tonne kilometres (AFTK) for ASK.

**한국어 / Korean** — **탑승률(Load Factor)** — 탑승률(Load Factor, LF)은 수익 여객이 차지하는 가용 좌석-킬로미터(ASK)의 비율로, 수익 여객 킬로미터(RPK)를 가용 좌석 킬로미터(ASK)로 나눈 뒤 100을 곱해 산출한다. IATA가 매월 항공 교통 통계에서 발표하고 ICAO가 비교 항공 분석에 활용하는 항공사 주요 운송 효율 지표다.

여객 탑승률(PLF)이 손익분기 탑승률(breakeven load factor) 이상이면 평균 운임이 단위 비용을 충당하고 있다는 신호다. 항공사는 탑승률과 함께 수익률(RPK당 수익)을 활용해 수익 품질을 측정한다. 수익 관리 시스템이 성숙하고 항공사의 적절한 용량 조정이 이루어지면서 시스템 탑승률은 2010년대 초반 약 75~77%에서 2023년 83% 이상으로 상승했다. 이 지표는 항공편·노선·네트워크 수준에서 산출되며 IATA 월간 통계 및 항공사 IR 보고의 표준 항목이다. 화물 탑승률(CLF)은 동일한 공식을 화물에 적용하여 RPK 대신 화물 톤 킬로미터(FTK), ASK 대신 가용 화물 톤 킬로미터(AFTK)를 사용한다.

**Aliases:** `Passenger Load Factor`, `PLF`, `Seat Factor`

# Related
- [Revenue Management](/air/air-shop/revenue-management.md) — related
- [Overbooking](/air/air-shop/overbooking.md) — related
- [Spill and Spoilage](/air/air-shop/spill-and-spoilage.md) — related
- [Bid Price](/air/air-shop/bid-price.md) — related

# Distinctions
- **Load Factor** vs [Revenue Management](/air/air-shop/revenue-management.md) — Load Factor measures the percentage of capacity filled; Revenue Management is the system and discipline that controls pricing and inventory to optimise load factor and yield simultaneously — load factor is an output metric, revenue management is the input process.
- **Load Factor** vs [Overbooking](/air/air-shop/overbooking.md) — Overbooking is the practice of selling more seats than the aircraft holds to compensate for expected no-shows; Load Factor is the ex-post outcome metric measuring how many seats were actually filled by revenue passengers.
- **Load Factor** vs [Spill and Spoilage](/air/air-shop/spill-and-spoilage.md) — Spill (demand exceeding capacity) and spoilage (unfilled capacity) are the two failure modes Load Factor diagnoses: a load factor approaching 100% signals potential spill; a consistently low load factor signals spoilage and under-utilisation.

# Citations
[1] [IATA — World Air Transport Statistics (WATS) — 68th Edition (2024)](https://www.iata.org/en/publications/store/world-air-transport-statistics/)
[2] [ICAO — ICAO Air Transport Reporting Forms and Traffic Statistics — Doc 9750](https://www.icao.int/sustainability/Pages/Glossary.aspx)
