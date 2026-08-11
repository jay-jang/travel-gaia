---
type: Metric
title: Revenue Passenger Kilometres (RPK)
description: 'Revenue Passenger Kilometres (RPK) is the measure of airline passenger traffic demand, calculated by multiplying the number of revenue-paying passengers on each flight by the distance flown in kilometres. It represents the demand side of the airline traffic equation and is the standard IATA metric for tracking how much revenue traffic airlines actually carry.'
tags:
  - air-shop
  - active
  - IATA
timestamp: '2026-08-11T00:00:00Z'
id: revenue-passenger-kilometres
vertical: air
category: air-shop
conceptType: metric
status: active
abbreviation: RPK
term_ko: '수익 여객 킬로미터(RPK)'
definition_ko: 'RPK(Revenue Passenger Kilometres, 수익 여객 킬로미터)는 각 항공편의 수익 여객 수에 운항 거리(km)를 곱하여 산출하는 항공사 여객 교통 수요 지표다. 항공 교통 방정식의 수요 측면을 나타내며, 항공사가 실제로 운송하는 수익 교통량을 추적하는 표준 IATA 지표다.'
longDef: 'RPK = Σ (revenue passengers on flight × kilometres flown). In imperial-system markets (primarily the US), the equivalent metric is Revenue Passenger Miles (RPM). A revenue passenger is one who pays at least 25% of the applicable adult fare — an IATA convention that excludes staff travel, frequent-flyer redemptions below threshold, and some charter arrangements depending on carrier policy. RPK is published monthly in IATA air traffic data and annually in the World Air Transport Statistics (WATS). Growth in RPK relative to Available Seat Kilometres (ASK) drives the Load Factor upward: when demand grows faster than capacity, load factors rise and yields tend to firm. Analysts track the gap between RPK and ASK growth — the "capacity discipline" spread — as a signal of pricing power across the industry. Cargo traffic has its own analogue: Freight Tonne Kilometres (FTK) and Available Freight Tonne Kilometres (AFTK).'
longDef_ko: 'RPK = Σ(항공편 수익 여객 수 × 운항 거리). 미국 등 야드파운드법 시장에서는 수익 여객 마일(RPM)이 동등 지표다. 수익 여객은 적용 성인 운임의 25% 이상을 지불하는 여객으로, IATA 관례에 따라 직원 여행, 기준 미달 FFP 마일리지 상환, 일부 용선 계약 등은 제외된다. RPK는 IATA 월간 항공 교통 데이터 및 연간 세계항공운송통계(WATS)에 게재된다. ASK 대비 RPK 성장은 탑승률을 상승시킨다. 수요가 공급보다 빠르게 성장하면 탑승률이 높아지고 수익률이 강해지는 경향이 있다. 분석가들은 RPK와 ASK 성장의 격차인 ''용량 규율'' 스프레드를 산업 전반의 가격 결정력 신호로 추적한다. 화물 교통에서는 화물 톤 킬로미터(FTK)와 가용 화물 톤 킬로미터(AFTK)가 각각 동등 지표다.'
standardBody: IATA
aliases:
  - RPK
  - Revenue Passenger Miles
  - RPM
  - Passenger Traffic
relationships:
  - type: related
    targetTerm: Load Factor
  - type: related
    targetTerm: RASM
  - type: related
    targetTerm: Available Seat Kilometres (ASK)
distinctions:
  - targetTerm: Available Seat Kilometres (ASK)
    explanation: 'RPK is the demand realised — how many revenue-passenger-kilometres were actually flown; ASK is the supply offered — how many seat-kilometres were available whether filled or not. Dividing RPK by ASK yields Load Factor.'
    explanation_ko: 'RPK는 실현된 수요, 즉 실제로 운항된 수익 여객 킬로미터이고, ASK는 제공된 공급, 즉 채워졌는지 여부와 관계없이 가용한 좌석 킬로미터다. RPK를 ASK로 나누면 탑승률이 산출된다.'
  - targetTerm: Load Factor
    explanation: 'Load Factor is the ratio (RPK ÷ ASK × 100) derived from RPK; it tells you efficiency, not volume. A high RPK combined with a higher proportional ASK can still yield a low load factor.'
    explanation_ko: '탑승률은 RPK에서 파생된 비율(RPK ÷ ASK × 100)로 효율을 나타내며, 교통량을 나타내지 않는다. RPK가 높아도 ASK 증가율이 더 크면 탑승률은 낮을 수 있다.'
  - targetTerm: RASM
    explanation: 'RASM measures revenue per ASM/ASK (a unit revenue metric); RPK measures the volume of revenue traffic carried regardless of revenue per unit.'
    explanation_ko: 'RASM은 ASM/ASK당 수익(단위 수익 지표)을 측정하고, RPK는 단위당 수익과 무관하게 운반된 수익 교통량을 측정한다.'
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
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="16" cy="11" r="4"/><path d="M9 24c0-3.9 3.1-7 7-7s7 3.1 7 7"/><circle cx="32" cy="11" r="4"/><path d="M25 24c0-3.9 3.1-7 7-7s7 3.1 7 7"/><line x1="7" y1="38" x2="41" y2="38"/><polyline points="38,35 41,38 38,41"/></svg>
---

> Revenue Passenger Kilometres (RPK) is the measure of airline passenger traffic demand, calculated by multiplying the number of revenue-paying passengers on each flight by the distance flown in kilometres. It represents the demand side of the airline traffic equation and is the standard IATA metric for tracking how much revenue traffic airlines actually carry.

RPK = Σ (revenue passengers on flight × kilometres flown). In imperial-system markets (primarily the US), the equivalent metric is Revenue Passenger Miles (RPM). A revenue passenger is one who pays at least 25% of the applicable adult fare — an IATA convention that excludes staff travel, frequent-flyer redemptions below threshold, and some charter arrangements depending on carrier policy. RPK is published monthly in IATA air traffic data and annually in the World Air Transport Statistics (WATS). Growth in RPK relative to Available Seat Kilometres (ASK) drives the Load Factor upward: when demand grows faster than capacity, load factors rise and yields tend to firm. Analysts track the gap between RPK and ASK growth — the "capacity discipline" spread — as a signal of pricing power across the industry. Cargo traffic has its own analogue: Freight Tonne Kilometres (FTK) and Available Freight Tonne Kilometres (AFTK).

**한국어 / Korean** — **수익 여객 킬로미터(RPK)** — RPK(Revenue Passenger Kilometres, 수익 여객 킬로미터)는 각 항공편의 수익 여객 수에 운항 거리(km)를 곱하여 산출하는 항공사 여객 교통 수요 지표다. 항공 교통 방정식의 수요 측면을 나타내며, 항공사가 실제로 운송하는 수익 교통량을 추적하는 표준 IATA 지표다.

RPK = Σ(항공편 수익 여객 수 × 운항 거리). 미국 등 야드파운드법 시장에서는 수익 여객 마일(RPM)이 동등 지표다. 수익 여객은 적용 성인 운임의 25% 이상을 지불하는 여객으로, IATA 관례에 따라 직원 여행, 기준 미달 FFP 마일리지 상환, 일부 용선 계약 등은 제외된다. RPK는 IATA 월간 항공 교통 데이터 및 연간 세계항공운송통계(WATS)에 게재된다. ASK 대비 RPK 성장은 탑승률을 상승시킨다. 수요가 공급보다 빠르게 성장하면 탑승률이 높아지고 수익률이 강해지는 경향이 있다. 분석가들은 RPK와 ASK 성장의 격차인 '용량 규율' 스프레드를 산업 전반의 가격 결정력 신호로 추적한다.

**Aliases:** `RPK`, `Revenue Passenger Miles`, `RPM`, `Passenger Traffic`

# Related
- [Load Factor](/air/air-shop/load-factor.md) — related
- [RASM](/air/air-shop/rasm.md) — related
- [Available Seat Kilometres (ASK)](/air/air-shop/available-seat-kilometres.md) — related

# Distinctions
- **Revenue Passenger Kilometres (RPK)** vs [Available Seat Kilometres (ASK)](/air/air-shop/available-seat-kilometres.md) — RPK is the demand realised — how many revenue-passenger-kilometres were actually flown; ASK is the supply offered — how many seat-kilometres were available whether filled or not. Dividing RPK by ASK yields Load Factor.
- **Revenue Passenger Kilometres (RPK)** vs [Load Factor](/air/air-shop/load-factor.md) — Load Factor is the ratio (RPK ÷ ASK × 100) derived from RPK; it tells you efficiency, not volume. A high RPK combined with a higher proportional ASK can still yield a low load factor.
- **Revenue Passenger Kilometres (RPK)** vs [RASM](/air/air-shop/rasm.md) — RASM measures revenue per ASM/ASK (a unit revenue metric); RPK measures the volume of revenue traffic carried regardless of revenue per unit.

# Citations
[1] [IATA — World Air Transport Statistics (WATS) — 68th Edition (2024)](https://www.iata.org/en/publications/store/world-air-transport-statistics/)
[2] [IATA — Demystifying Key Air Traffic Metrics — Understanding RPKs and ASKs](https://www.iata.org/en/publications/newsletters/iata-knowledge-hub/demystifying-key-air-traffic-metrics-understanding-rpks-and-asks/)
