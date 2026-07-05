---
type: Metric
title: Booking Pace
description: 'Booking pace is a hotel revenue-management metric that measures the rate at which reservations are accumulating for a specific future arrival date — expressed as rooms on-the-books (OTB) at a given number of days in advance. Pace is compared against the same point last year (or a benchmark period) to reveal whether demand is building faster or slower than historic norms, enabling proactive rate and inventory decisions.'
tags:
  - hotel-rate
  - active
timestamp: '2026-07-05T00:00:00Z'
id: booking-pace
vertical: lodging
category: hotel-rate
conceptType: metric
status: active
term_ko: 예약 속도 (Booking Pace)
definition_ko: '예약 속도(Booking Pace)는 특정 미래 도착일에 대해 예약이 누적되는 속도를 측정하는 호텔 수익 관리 지표로, 특정 예약 선행기간(days in advance)에서의 확정 객실 수(OTB)로 표현된다. 속도는 전년 동일 시점(또는 기준 기간)과 비교하여 수요가 역사적 기준보다 빠르게 또는 느리게 쌓이고 있는지 파악하고, 요금 및 재고 의사결정을 선제적으로 내릴 수 있게 한다.'
longDef: 'Booking pace is read by comparing on-the-books (OTB) data for a future date at the same point in the booking window in a prior period — for example, comparing rooms booked 60 days before arrival this year against rooms booked 60 days before the same date last year. A positive pace (ahead of last year) suggests strong demand, which can support a rate increase; a negative pace may warrant promotional action or lower channel restrictions. Pace is distinct from pickup: pace is the snapshot comparison of a cumulative OTB count, while pickup measures the incremental change in OTB over a short recent window (e.g., the past 7 days). Both metrics are standard inputs to revenue-management system (RMS) algorithms and manual revenue-management review processes. Pace is also used in group and events business to monitor block fill against the contract cut-off date.'
longDef_ko: '예약 속도는 특정 미래 날짜의 확정 객실 수(OTB) 데이터를, 예약 창 내 동일 시점의 이전 기간과 비교하여 파악한다. 예를 들어, 올해 도착일 60일 전 예약 객실 수를 작년 같은 날짜의 60일 전과 비교하는 방식이다. 속도가 전년보다 빠르면(positive pace) 강한 수요를 시사하여 요금 인상을 지지하고, 느리면(negative pace) 프로모션 실행이나 채널 제한 완화를 고려할 수 있다. 예약 속도는 픽업(pickup)과 구별된다. 속도는 누적 OTB 건수의 스냅샷 비교이고, 픽업은 최근 단기간(예: 과거 7일)의 OTB 증분 변화다. 두 지표 모두 수익 관리 시스템(RMS) 알고리즘 및 수동 수익 관리 검토 프로세스의 표준 입력값이다. 그룹·이벤트 영업에서는 계약 cut-off date에 대비한 블록 채움 속도를 모니터링하는 데도 사용된다.'
aliases:
  - Pace
  - Booking Build
  - On-the-Books Pace
  - OTB Pace
relationships:
  - type: related
    targetTerm: Dynamic Pricing
  - type: broader
    targetTerm: Revenue Management
  - type: related
    targetTerm: ADR
  - type: related
    targetTerm: RevPAR
  - type: related
    targetTerm: Occupancy
distinctions:
  - targetTerm: Dynamic Pricing
    explanation: 'Booking pace is an input metric — it tells the revenue manager how fast demand is building for a date; dynamic pricing is the output process of adjusting the selling rate in response to that and other signals.'
    explanation_ko: '예약 속도는 입력 지표로, 특정 날짜에 수요가 얼마나 빠르게 쌓이는지 수익 관리자에게 알려주고, Dynamic Pricing은 그 신호와 다른 신호에 반응하여 판매 요금을 조정하는 출력 프로세스이다.'
  - targetTerm: Occupancy
    explanation: 'Occupancy is a historical metric reporting the percentage of rooms sold for dates that have already passed; booking pace is a forward-looking metric showing how rooms are accumulating for future dates.'
    explanation_ko: '객실 점유율(Occupancy)은 이미 지난 날짜에 대해 판매된 객실 비율을 보고하는 과거 지표이고, 예약 속도는 미래 날짜에 대해 객실이 어떻게 누적되는지 보여주는 전향적 지표이다.'
  - targetTerm: RevPAR
    explanation: 'RevPAR measures realised revenue per available room across dates already sold; booking pace gives the forward-looking trajectory of demand accumulation, indicating what RevPAR may materialise if the current trend continues.'
    explanation_ko: 'RevPAR는 이미 판매된 날짜의 가용 객실당 실현 수익을 측정하고, 예약 속도는 현재 추세가 지속될 경우 어떤 RevPAR가 실현될지 시사하는 수요 누적의 전향적 궤적을 제공한다.'
sources:
  - name: Booking Pace Definition / Meaning
    org: Xotels — Hotel Revenue Management Consultancy
    version: ''
    section: ''
    url: 'https://www.xotels.com/en/glossary/booking-pace'
    tier: secondary
  - name: What Is Booking Pace? (Hotel Terminology)
    org: Canary Technologies
    version: ''
    section: ''
    url: 'https://www.canarytechnologies.com/hotel-terminology/booking-pace'
    tier: secondary
  - name: The importance of pickup and pace in hotel revenue management
    org: Lighthouse (formerly OTA Insight)
    version: ''
    section: ''
    url: 'https://www.mylighthouse.com/resources/blog/booking-pickup-and-pace-revenue-management'
    tier: secondary
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="8,36 18,24 26,30 38,12"/><circle cx="38" cy="12" r="3"/><line x1="8" y1="40" x2="40" y2="40"/><line x1="8" y1="40" x2="8" y2="8"/></svg>
---

> Booking pace is a hotel revenue-management metric that measures the rate at which reservations are accumulating for a specific future arrival date. Compared against the same point in prior periods, it reveals whether demand is building faster or slower than historic norms, enabling proactive rate and inventory decisions.

Booking pace is read by comparing on-the-books (OTB) data for a future date at the same point in the booking window of a prior period — for example, rooms booked 60 days before arrival this year vs. the same date last year. A positive pace suggests strong demand (supporting a rate increase); a negative pace may warrant promotional action or lower channel restrictions.

Booking pace differs from pickup: pace is the snapshot comparison of a cumulative OTB count; pickup measures the incremental change over a short recent window (e.g., the past 7 days). Both are standard inputs to revenue-management system (RMS) algorithms. Pace is also used in group business to monitor block fill against contract cut-off dates.

**한국어 / Korean** — **예약 속도(Booking Pace)** — 특정 미래 도착일에 대한 예약 누적 속도를 전년 동일 시점과 비교하는 호텔 수익 관리 지표. 수요가 역사적 기준 대비 빠른지 느린지를 파악하여 요금 및 재고 의사결정을 선제적으로 내릴 수 있게 한다.

**Aliases:** `Pace`, `Booking Build`, `On-the-Books Pace`, `OTB Pace`

# Related
- [Dynamic Pricing](/lodging/hotel-rate/dynamic-pricing.md) — related
- [Revenue Management](/lodging/hotel-rate/revenue-management.md) — broader
- [ADR](/lodging/hotel-rate/adr.md) — related
- [RevPAR](/lodging/hotel-rate/revpar.md) — related
- [Occupancy](/lodging/hotel-rate/occupancy.md) — related

# Distinctions
- **Booking Pace** vs [Dynamic Pricing](/lodging/hotel-rate/dynamic-pricing.md) — Booking pace is an input metric showing how fast demand is building; dynamic pricing is the output process of adjusting the selling rate in response to that and other signals.
- **Booking Pace** vs [Occupancy](/lodging/hotel-rate/occupancy.md) — Occupancy is a historical metric for dates already passed; booking pace is forward-looking, showing accumulation for future dates.
- **Booking Pace** vs [RevPAR](/lodging/hotel-rate/revpar.md) — RevPAR measures realised revenue per available room on past dates; booking pace gives the forward-looking demand trajectory, indicating what RevPAR may materialise if the trend continues.

# Citations
[1] [Xotels — Booking Pace Definition / Meaning](https://www.xotels.com/en/glossary/booking-pace)
[2] [Canary Technologies — What Is Booking Pace?](https://www.canarytechnologies.com/hotel-terminology/booking-pace)
[3] [Lighthouse — The importance of pickup and pace in hotel revenue management](https://www.mylighthouse.com/resources/blog/booking-pickup-and-pace-revenue-management)
