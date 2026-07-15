---
type: Metric
title: Aircraft Utilization
description: 'Aircraft utilization is the average number of block hours per day that an aircraft in an airline''s fleet is in productive use, calculated as total block hours flown divided by the number of aircraft in the fleet over a given period. It is a core airline efficiency and capacity metric tracked by IATA in its World Air Transport Statistics (WATS).'
tags:
  - air-ops
  - active
  - IATA
timestamp: '2026-07-15T00:00:00Z'
id: aircraft-utilization
vertical: air
category: air-ops
conceptType: metric
status: active
term_ko: 항공기 활용률(Aircraft Utilization)
definition_ko: '항공기 활용률은 항공사 함대의 항공기 한 대가 하루 평균 생산적으로 사용된 블록 시간(block hours)을 말하며, 특정 기간 동안 비행한 총 블록 시간을 함대 내 항공기 수로 나누어 계산한다. IATA 세계 항공 운송 통계(WATS)에서 추적하는 핵심 항공사 효율성·용량 지표이다.'
longDef: 'Aircraft utilization is measured in block hours per aircraft per day, where a block hour begins when the aircraft first moves under its own power (blocks out / off-chocks) and ends when it reaches its parking position at the destination (blocks in / on-chocks). High utilization (e.g. 12–14 hours/day for narrow-bodies in low-cost carrier operations) indicates that aircraft are minimizing time on the ground between flights, reducing per-seat fixed-cost. Utilization is constrained by turnaround time, maintenance schedules, crew rest requirements, curfews, and seasonality. Low utilization due to AOG events, schedule disruptions, or demand shortfalls increases unit cost and reduces network efficiency. Alongside Load Factor and On-Time Performance (OTP), aircraft utilization is one of the three primary operational KPIs for airline management and is published annually in the IATA World Air Transport Statistics (WATS).'
longDef_ko: '항공기 활용률은 항공기가 자체 동력으로 처음 움직이기 시작한 시점(블록아웃/오프-촉스)부터 목적지 주기 장소에 도착한 시점(블록인/온-촉스)까지를 1 블록 시간으로 계산한다. 저비용 항공사의 협동형 기종은 하루 12~14시간 이상의 높은 활용률을 기록하며, 지상 정박 시간을 최소화하여 좌석당 고정비를 낮춘다. 활용률은 회항 시간, 정비 일정, 승무원 휴식 규정, 야간 운항 제한(커퓨), 계절적 수요에 의해 제약을 받는다. AOG, 스케줄 지연, 수요 부족으로 인한 낮은 활용률은 단위 비용을 높이고 네트워크 효율을 저하시킨다. 항공기 활용률은 탑승률(Load Factor), 정시운항률(OTP)과 함께 항공사 운영의 3대 핵심 KPI 중 하나이며, IATA 세계 항공 운송 통계(WATS)에 매년 발표된다.'
standardBody: IATA
aliases:
  - Aircraft Daily Utilization
  - Fleet Utilization
  - Block Hours per Aircraft per Day
relationships:
  - type: related
    targetTerm: Block Time
  - type: related
    targetTerm: Load Factor
  - type: related
    targetTerm: On-Time Performance (OTP)
  - type: related
    targetTerm: AOG
distinctions:
  - targetTerm: Load Factor
    explanation: 'Load factor measures how full each flight is (passengers vs. seats); aircraft utilization measures how many hours per day the aircraft is in the air across all flights. Both together describe airline productivity.'
    explanation_ko: '탑승률(Load Factor)은 각 항공편이 얼마나 꽉 찼는지(승객 대 좌석)를 측정하고, 항공기 활용률은 항공기가 하루에 모든 항공편을 통해 얼마나 많은 시간 동안 운항하는지를 측정한다. 두 지표를 함께 보면 항공사의 생산성을 파악할 수 있다.'
  - targetTerm: Block Time
    explanation: 'Block time is the duration of a single flight from chocks-off to chocks-on; aircraft utilization is the aggregate of block times across all flights per aircraft per day.'
    explanation_ko: 'Block Time은 단일 항공편의 오프촉스부터 온촉스까지의 비행 시간이고, 항공기 활용률은 하루 동안 한 항공기의 모든 항공편 블록 시간의 합계이다.'
sources:
  - name: World Air Transport Statistics (WATS)
    org: IATA
    version: WATS 2024 (68th Edition)
    section: 'Section 3 — Fleet and Utilization'
    url: 'https://www.iata.org/en/publications/store/world-air-transport-statistics/'
    tier: association
  - name: ICAO Doc 9060 — Forecasting and Economic Planning
    org: ICAO
    version: ''
    section: ''
    url: 'https://store.icao.int/en/forecasting-and-economic-planning-doc-9060'
    tier: standard-body
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="30" cy="28" r="10"/><path d="M30 22v6l4 2"/><path d="M8 28l10-8 6 4"/><path d="M6 32h6"/></svg>
---

> Aircraft utilization is the average number of block hours per day that an aircraft in an airline's fleet is in productive use, calculated as total block hours flown divided by the number of aircraft in the fleet over a given period. It is a core airline efficiency and capacity metric tracked by IATA in its World Air Transport Statistics (WATS).

Aircraft utilization is measured in block hours per aircraft per day, where a block hour begins when the aircraft first moves under its own power (blocks out / off-chocks) and ends when it reaches its parking position at the destination (blocks in / on-chocks). High utilization (e.g. 12–14 hours/day for narrow-bodies in low-cost carrier operations) indicates that aircraft are minimizing time on the ground between flights, reducing per-seat fixed-cost. Utilization is constrained by turnaround time, maintenance schedules, crew rest requirements, curfews, and seasonality. Low utilization due to AOG events, schedule disruptions, or demand shortfalls increases unit cost and reduces network efficiency. Alongside Load Factor and On-Time Performance (OTP), aircraft utilization is one of the three primary operational KPIs for airline management and is published annually in the IATA World Air Transport Statistics (WATS).

**한국어 / Korean** — **항공기 활용률(Aircraft Utilization)** — 항공기 활용률은 항공사 함대의 항공기 한 대가 하루 평균 생산적으로 사용된 블록 시간(block hours)을 말하며, 특정 기간 동안 비행한 총 블록 시간을 함대 내 항공기 수로 나누어 계산한다. IATA 세계 항공 운송 통계(WATS)에서 추적하는 핵심 항공사 효율성·용량 지표이다.

항공기 활용률은 항공기가 자체 동력으로 처음 움직이기 시작한 시점(블록아웃/오프-촉스)부터 목적지 주기 장소에 도착한 시점(블록인/온-촉스)까지를 1 블록 시간으로 계산한다. 저비용 항공사의 협동형 기종은 하루 12~14시간 이상의 높은 활용률을 기록하며, 지상 정박 시간을 최소화하여 좌석당 고정비를 낮춘다. 활용률은 회항 시간, 정비 일정, 승무원 휴식 규정, 야간 운항 제한(커퓨), 계절적 수요에 의해 제약을 받는다. AOG, 스케줄 지연, 수요 부족으로 인한 낮은 활용률은 단위 비용을 높이고 네트워크 효율을 저하시킨다.

**Aliases:** `Aircraft Daily Utilization`, `Fleet Utilization`, `Block Hours per Aircraft per Day`

# Related
- [Block Time](/air/air-ops/block-time.md) — related
- [Load Factor](/air/air-shop/load-factor.md) — related
- [On-Time Performance (OTP)](/common/standards/on-time-performance.md) — related
- [AOG](/air/air-ops/aog.md) — related

# Distinctions
- **Aircraft Utilization** vs [Load Factor](/air/air-shop/load-factor.md) — Load factor measures how full each flight is (passengers vs. seats); aircraft utilization measures how many hours per day the aircraft is in the air across all flights. Both together describe airline productivity.
- **Aircraft Utilization** vs [Block Time](/air/air-ops/block-time.md) — Block time is the duration of a single flight from chocks-off to chocks-on; aircraft utilization is the aggregate of block times across all flights per aircraft per day.

# Citations
[1] [IATA — World Air Transport Statistics (WATS) — WATS 2024 (68th Edition)](https://www.iata.org/en/publications/store/world-air-transport-statistics/)
[2] [ICAO — ICAO Doc 9060 — Forecasting and Economic Planning](https://store.icao.int/en/forecasting-and-economic-planning-doc-9060)
