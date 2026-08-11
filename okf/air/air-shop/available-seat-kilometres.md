---
type: Metric
title: Available Seat Kilometres (ASK)
description: 'Available Seat Kilometres (ASK) is the measure of an airline''s passenger-carrying capacity, calculated by multiplying the number of seats available on each flight by the distance flown in kilometres. It represents the supply side of the airline traffic equation and is the standard IATA denominator for unit cost (CASM) and unit revenue (RASM) metrics.'
tags:
  - air-shop
  - active
  - IATA
timestamp: '2026-08-11T00:00:00Z'
id: available-seat-kilometres
vertical: air
category: air-shop
conceptType: metric
status: active
abbreviation: ASK
term_ko: '가용 좌석 킬로미터(ASK)'
definition_ko: 'ASK(Available Seat Kilometres, 가용 좌석 킬로미터)는 각 항공편의 가용 좌석 수에 운항 거리(km)를 곱하여 산출하는 항공사 여객 운송 공급 능력 지표다. 항공 교통 방정식의 공급 측면을 나타내며 단위 비용(CASM)과 단위 수익(RASM) 지표의 표준 IATA 분모다.'
longDef: 'ASK = Σ (seats available on flight × kilometres flown). In imperial-system markets (primarily the US), the equivalent metric is Available Seat Miles (ASM). ASK is aggregated across all flights to produce a carrier-level or industry-level capacity figure. It is published monthly by IATA in its air traffic data releases and annually in the World Air Transport Statistics (WATS). Analysts use ASK growth as a proxy for capacity expansion: a carrier adding routes, increasing gauge (larger aircraft), or raising frequencies lifts its ASK base. CASM (Cost per ASK) divides operating costs by ASK to produce the unit cost benchmark, while RASM (Revenue per ASM) divides total revenue by ASM to produce the unit revenue benchmark. Together with Revenue Passenger Kilometres (RPK), ASK is the denominator in the Load Factor formula: Load Factor = RPK ÷ ASK × 100.'
longDef_ko: 'ASK = Σ(항공편 가용 좌석 수 × 운항 거리). 미국 등 야드파운드법 시장에서는 가용 좌석 마일(ASM)이 동등 지표다. ASK는 모든 항공편에 걸쳐 집계되어 항공사 또는 산업 수준의 공급량 수치를 산출한다. IATA는 이를 월간 항공 교통 데이터 발표 및 연간 세계항공운송통계(WATS)에 게재한다. 분석가들은 ASK 성장을 공급 확대의 대리 지표로 활용한다. 노선 추가, 기종 대형화, 운항 빈도 증가는 모두 ASK를 높인다. CASM(ASK당 비용)은 영업비용을 ASK로 나눈 단위 비용 벤치마크이고, RASM(ASM당 수익)은 총수익을 ASM으로 나눈 단위 수익 벤치마크다. RPK와 함께 ASK는 탑승률 공식의 분모다: 탑승률 = RPK ÷ ASK × 100.'
standardBody: IATA
aliases:
  - ASK
  - Available Seat Miles
  - ASM
  - Available Seat Kilometers
relationships:
  - type: related
    targetTerm: Load Factor
  - type: related
    targetTerm: CASM
  - type: related
    targetTerm: RASM
  - type: related
    targetTerm: Revenue Passenger Kilometres (RPK)
distinctions:
  - targetTerm: Load Factor
    explanation: 'ASK is the raw capacity input; Load Factor is the utilisation ratio (RPK ÷ ASK × 100) that shows what percentage of that capacity was filled by revenue passengers.'
    explanation_ko: 'ASK는 원시 공급량 투입값이고, 탑승률(Load Factor)은 그 공급량의 몇 퍼센트를 수익 여객이 채웠는지를 나타내는 활용률 비율(RPK ÷ ASK × 100)이다.'
  - targetTerm: Revenue Passenger Kilometres (RPK)
    explanation: 'ASK measures capacity (seats × km regardless of whether they are sold); RPK measures demand actually realised (revenue passengers × km flown). The two together yield Load Factor.'
    explanation_ko: 'ASK는 공급 능력(좌석 수 × km, 판매 여부 무관)을 측정하고, RPK는 실제 실현된 수요(수익 여객 × 운항 km)를 측정한다. 두 지표를 합산하면 탑승률을 산출할 수 있다.'
  - targetTerm: CASM
    explanation: 'CASM uses ASK as its denominator (operating cost ÷ ASK); ASK itself is a pure capacity volume measure that does not include any cost or revenue information.'
    explanation_ko: 'CASM은 ASK를 분모로 사용(영업비용 ÷ ASK)하며, ASK 자체는 비용·수익 정보를 포함하지 않는 순수 공급량 측정치다.'
sources:
  - name: World Air Transport Statistics (WATS)
    org: IATA
    version: 68th Edition (2024)
    section: Traffic Statistics Definitions
    url: 'https://www.iata.org/en/publications/store/world-air-transport-statistics/'
    tier: association
  - name: Demystifying Key Air Traffic Metrics — Understanding RPKs and ASKs
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/newsletters/iata-knowledge-hub/demystifying-key-air-traffic-metrics-understanding-rpks-and-asks/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="10" width="10" height="9" rx="2"/><rect x="19" y="10" width="10" height="9" rx="2"/><rect x="32" y="10" width="10" height="9" rx="2"/><line x1="6" y1="19" x2="6" y2="24"/><line x1="16" y1="19" x2="16" y2="24"/><line x1="19" y1="19" x2="19" y2="24"/><line x1="29" y1="19" x2="29" y2="24"/><line x1="32" y1="19" x2="32" y2="24"/><line x1="42" y1="19" x2="42" y2="24"/><line x1="8" y1="37" x2="40" y2="37"/><polyline points="37,34 40,37 37,40"/><polyline points="11,34 8,37 11,40"/></svg>
---

> Available Seat Kilometres (ASK) is the measure of an airline's passenger-carrying capacity, calculated by multiplying the number of seats available on each flight by the distance flown in kilometres. It represents the supply side of the airline traffic equation and is the standard IATA denominator for unit cost (CASM) and unit revenue (RASM) metrics.

ASK = Σ (seats available on flight × kilometres flown). In imperial-system markets (primarily the US), the equivalent metric is Available Seat Miles (ASM). ASK is aggregated across all flights to produce a carrier-level or industry-level capacity figure. It is published monthly by IATA in its air traffic data releases and annually in the World Air Transport Statistics (WATS). Analysts use ASK growth as a proxy for capacity expansion: a carrier adding routes, increasing gauge (larger aircraft), or raising frequencies lifts its ASK base. CASM (Cost per ASK) divides operating costs by ASK to produce the unit cost benchmark, while RASM (Revenue per ASM) divides total revenue by ASM to produce the unit revenue benchmark. Together with Revenue Passenger Kilometres (RPK), ASK is the denominator in the Load Factor formula: Load Factor = RPK ÷ ASK × 100.

**한국어 / Korean** — **가용 좌석 킬로미터(ASK)** — ASK(Available Seat Kilometres, 가용 좌석 킬로미터)는 각 항공편의 가용 좌석 수에 운항 거리(km)를 곱하여 산출하는 항공사 여객 운송 공급 능력 지표다. 항공 교통 방정식의 공급 측면을 나타내며 단위 비용(CASM)과 단위 수익(RASM) 지표의 표준 IATA 분모다.

ASK = Σ(항공편 가용 좌석 수 × 운항 거리). 미국 등 야드파운드법 시장에서는 가용 좌석 마일(ASM)이 동등 지표다. ASK는 모든 항공편에 걸쳐 집계되어 항공사 또는 산업 수준의 공급량 수치를 산출한다. IATA는 이를 월간 항공 교통 데이터 발표 및 연간 세계항공운송통계(WATS)에 게재한다. 분석가들은 ASK 성장을 공급 확대의 대리 지표로 활용한다. 노선 추가, 기종 대형화, 운항 빈도 증가는 모두 ASK를 높인다. CASM(ASK당 비용)은 영업비용을 ASK로 나눈 단위 비용 벤치마크이고, RASM(ASM당 수익)은 총수익을 ASM으로 나눈 단위 수익 벤치마크다. RPK와 함께 ASK는 탑승률 공식의 분모다: 탑승률 = RPK ÷ ASK × 100.

**Aliases:** `ASK`, `Available Seat Miles`, `ASM`, `Available Seat Kilometers`

# Related
- [Load Factor](/air/air-shop/load-factor.md) — related
- [CASM](/air/air-shop/casm.md) — related
- [RASM](/air/air-shop/rasm.md) — related
- [Revenue Passenger Kilometres (RPK)](/air/air-shop/revenue-passenger-kilometres.md) — related

# Distinctions
- **Available Seat Kilometres (ASK)** vs [Load Factor](/air/air-shop/load-factor.md) — ASK is the raw capacity input; Load Factor is the utilisation ratio (RPK ÷ ASK × 100) that shows what percentage of that capacity was filled by revenue passengers.
- **Available Seat Kilometres (ASK)** vs [Revenue Passenger Kilometres (RPK)](/air/air-shop/revenue-passenger-kilometres.md) — ASK measures capacity (seats × km regardless of whether they are sold); RPK measures demand actually realised (revenue passengers × km flown). The two together yield Load Factor.
- **Available Seat Kilometres (ASK)** vs [CASM](/air/air-shop/casm.md) — CASM uses ASK as its denominator (operating cost ÷ ASK); ASK itself is a pure capacity volume measure that does not include any cost or revenue information.

# Citations
[1] [IATA — World Air Transport Statistics (WATS) — 68th Edition (2024)](https://www.iata.org/en/publications/store/world-air-transport-statistics/)
[2] [IATA — Demystifying Key Air Traffic Metrics — Understanding RPKs and ASKs](https://www.iata.org/en/publications/newsletters/iata-knowledge-hub/demystifying-key-air-traffic-metrics-understanding-rpks-and-asks/)
