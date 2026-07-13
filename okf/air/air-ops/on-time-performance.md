---
type: Metric
title: On-Time Performance (OTP)
description: 'An airline and airport operational metric that measures the percentage of scheduled flights departing or arriving within 15 minutes of their published timetable, used globally to benchmark punctuality and service reliability.'
tags:
  - air-ops
  - active
  - IATA
timestamp: '2026-07-13T00:00:00Z'
id: on-time-performance
vertical: air
category: air-ops
conceptType: metric
status: active
abbreviation: OTP
term_ko: 정시 운항률(OTP)
definition_ko: '항공사·공항의 핵심 운영 지표로, 예정된 항공편 중 공표 시각표 기준 15분 이내에 출발 또는 도착한 비율을 측정하며, 전 세계적으로 정시성과 서비스 신뢰도 벤치마크에 활용된다.'
longDef: 'OTP is calculated separately for departure punctuality and arrival punctuality and expressed as a percentage. The 15-minute threshold is the IATA-recommended industry standard, though regulators or slot-allocation bodies may apply different windows. IATA publishes monthly global performance reports tracking OTP by airline and airport. In the United States, 14 CFR Part 234 requires carriers operating ten or more domestic scheduled flights per day to report on-time data to the Bureau of Transportation Statistics, enabling the DOT Air Travel Consumer Report. OTP is an upstream input into revenue management, crew scheduling, and slot-allocation decisions; carriers with chronically low OTP may face regulatory scrutiny and reputational damage with corporate accounts.'
longDef_ko: 'OTP는 출발 정시율과 도착 정시율을 각각 퍼센트로 산출한다. 15분 기준은 IATA가 권고하는 업계 표준이지만, 규제 기관이나 슬롯 배분 기관에 따라 다른 기준이 적용될 수 있다. IATA는 항공사·공항별 OTP를 추적하는 글로벌 성과 월간 보고서를 발행한다. 미국에서는 14 CFR Part 234에 따라 하루 10편 이상 국내선을 운항하는 항공사가 정시 운항 데이터를 교통통계국(BTS)에 보고해야 하며, 이를 통해 DOT 항공 소비자 보고서가 발간된다. OTP는 수익 관리, 승무원 일정 수립, 슬롯 배분 결정의 상위 입력값이며, 만성적으로 낮은 OTP는 규제 당국의 조사와 기업 고객의 신뢰 하락을 초래할 수 있다.'
standardBody: IATA
aliases:
  - On-Time Performance
  - Punctuality Rate
  - Flight Punctuality
  - OTP
relationships:
  - type: related
    targetTerm: Revenue Management
  - type: related
    targetTerm: Schedule Change
  - type: related
    targetTerm: IROPS
  - type: related
    targetTerm: Load Factor
  - type: related
    targetTerm: Slot
distinctions:
  - targetTerm: IROPS
    explanation: 'OTP is an aggregate statistical measure of punctuality compiled over a period; IROPS (Irregular Operations) is the real-time management of individually disrupted flights. Chronic IROPS events are the operational root cause of poor OTP.'
    explanation_ko: 'OTP는 일정 기간 전체 항공편의 정시성을 집계한 통계 지표이고, IROPS(비정상 운항)는 개별 결항·지연 항공편의 실시간 관리를 말한다. 만성적 IROPS 사건은 낮은 OTP의 운영적 근본 원인이 된다.'
  - targetTerm: Schedule Change
    explanation: 'A Schedule Change is a discrete event in which a carrier alters a future published timetable entry; OTP measures how often actual flown operations matched the original timetable.'
    explanation_ko: 'Schedule Change는 항공사가 미래 공표 시각표를 변경하는 특정 이산 사건이고, OTP는 실제 운항이 원래 시각표와 얼마나 일치했는지 측정하는 지표다.'
sources:
  - name: 'Global Airline Performance — Monthly On-Time Statistics'
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/documentstore/global-airline-performance/'
    tier: association
  - name: '14 CFR Part 234 — Airline Service Quality Performance Reports'
    org: US Department of Transportation (DOT/BTS)
    version: ''
    section: 'Part 234'
    url: 'https://www.ecfr.gov/current/title-14/chapter-II/subchapter-A/part-234'
    tier: regulator-guidance
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="24" r="15"/><polyline points="24 13 24 24 30 24"/><path d="M10 16 L7 19"/><path d="M38 16 L41 19"/></svg>
---

> An airline and airport operational metric that measures the percentage of scheduled flights departing or arriving within 15 minutes of their published timetable, used globally to benchmark punctuality and service reliability.

OTP is calculated separately for departure punctuality and arrival punctuality and expressed as a percentage. The 15-minute threshold is the IATA-recommended industry standard, though regulators or slot-allocation bodies may apply different windows. IATA publishes monthly global performance reports tracking OTP by airline and airport. In the United States, 14 CFR Part 234 requires carriers operating ten or more domestic scheduled flights per day to report on-time data to the Bureau of Transportation Statistics, enabling the DOT Air Travel Consumer Report. OTP is an upstream input into revenue management, crew scheduling, and slot-allocation decisions; carriers with chronically low OTP may face regulatory scrutiny and reputational damage with corporate accounts.

**한국어 / Korean** — **정시 운항률(OTP)** — 항공사·공항의 핵심 운영 지표로, 예정된 항공편 중 공표 시각표 기준 15분 이내에 출발 또는 도착한 비율을 측정하며, 전 세계적으로 정시성과 서비스 신뢰도 벤치마크에 활용된다.

OTP는 출발 정시율과 도착 정시율을 각각 퍼센트로 산출한다. 15분 기준은 IATA가 권고하는 업계 표준이지만, 규제 기관이나 슬롯 배분 기관에 따라 다른 기준이 적용될 수 있다. IATA는 항공사·공항별 OTP를 추적하는 글로벌 성과 월간 보고서를 발행한다. 미국에서는 14 CFR Part 234에 따라 하루 10편 이상 국내선을 운항하는 항공사가 정시 운항 데이터를 교통통계국(BTS)에 보고해야 한다. OTP는 수익 관리, 승무원 일정 수립, 슬롯 배분 결정의 상위 입력값이다.

**Aliases:** `On-Time Performance`, `Punctuality Rate`, `Flight Punctuality`, `OTP`

# Related
- [Revenue Management](/air/air-shop/revenue-management.md) — related
- [Schedule Change](/air/air-partner/schedule-change.md) — related
- [IROPS](/air/air-partner/irops.md) — related
- [Load Factor](/air/air-shop/load-factor.md) — related
- [Slot](/air/air-partner/slot.md) — related

# Distinctions
- **On-Time Performance (OTP)** vs [IROPS](/air/air-partner/irops.md) — OTP is an aggregate statistical measure of punctuality compiled over a period; IROPS (Irregular Operations) is the real-time management of individually disrupted flights. Chronic IROPS events are the operational root cause of poor OTP.
- **On-Time Performance (OTP)** vs [Schedule Change](/air/air-partner/schedule-change.md) — A Schedule Change is a discrete event in which a carrier alters a future published timetable entry; OTP measures how often actual flown operations matched the original timetable.

# Citations
[1] [IATA — Global Airline Performance — Monthly On-Time Statistics](https://www.iata.org/en/publications/documentstore/global-airline-performance/)
[2] [US Department of Transportation (DOT/BTS) — 14 CFR Part 234 — Airline Service Quality Performance Reports](https://www.ecfr.gov/current/title-14/chapter-II/subchapter-A/part-234)
