---
type: Standard Term
title: On the Books (OTB)
description: 'On the Books (OTB) is the total number of confirmed room reservations that have been received and are sitting in the hotel''s system for a specified future date or date range. It represents the cumulative demand already captured for that period and is used as the baseline for demand forecasting, booking-pace analysis, and revenue management decisions.'
tags:
  - hotel-rate
  - active
timestamp: '2026-08-18T00:00:00Z'
id: on-the-books-otb
vertical: lodging
category: hotel-rate
conceptType: standard-term
status: active
abbreviation: OTB
term_ko: 'On the Books (OTB, 예약 잔량)'
definition_ko: 'On the Books(OTB)는 지정된 미래 날짜 또는 기간에 대해 호텔 시스템에 접수·확보된 확정 예약의 총 객실 수다. 해당 기간에 이미 확보된 누적 수요를 나타내며, 수요 예측·예약 속도 분석·수익 관리 의사결정의 기준선으로 사용된다.'
longDef: 'OTB is measured at a specific point in time (the "snapshot date") for a target date or range of dates. For a given arrival date, OTB grows as reservations are added and shrinks as cancellations occur. Revenue managers compare OTB at the same lead time across different years or competitive-set data (STR pick-up reports) to assess whether demand is tracking ahead of, behind, or in line with forecast. OTB is also used to calculate remaining available inventory: Available Rooms = Physical Capacity – OTB – Out-of-Order Rooms. When OTB is high relative to forecast, rate restrictions (MLOS, CTA, CTD) or rate increases may be applied to maximize yield; when OTB is low, promotional rates or last-minute deals may be opened.'
longDef_ko: 'OTB는 특정 시점(스냅샷 날짜)에서 대상 날짜 또는 기간에 대해 측정된다. 특정 도착 날짜에 대한 OTB는 예약이 추가되면 늘어나고 취소가 발생하면 줄어든다. 수익 관리자는 동일한 리드타임에서 연도별 OTB를 비교하거나 경쟁 세트 데이터(STR 픽업 리포트)와 비교해 수요가 예측보다 앞서는지, 뒤처지는지, 또는 일치하는지를 판단한다. OTB는 남은 가용 재고 산정에도 사용된다: 가용 객실 수 = 총 물리적 객실 수 – OTB – 운영 불가 객실(Out-of-Order). OTB가 예측 대비 높으면 수익 극대화를 위해 숙박 제한(MLOS·CTA·CTD)이나 요금 인상을 적용하고, OTB가 낮으면 프로모션 요금이나 막판 할인 제안을 열 수 있다.'
aliases:
  - On the Books
  - OTB Reservations
  - Rooms on the Books
  - Confirmed Bookings
providerTerms:
  - provider: IDeaS Revenue Solutions
    term: On the Books (OTB)
    context: 'IDeaS RMS tracks OTB by arrival date and booking lead time as a core demand signal, comparing it with historical OTB curves and constrained forecast to recommend optimal pricing.'
    context_ko: 'IDeaS RMS는 OTB를 도착 날짜 및 예약 리드타임별로 추적하여 핵심 수요 신호로 활용하며, 과거 OTB 곡선 및 제약 예측과 비교해 최적 요금을 권고한다.'
    relationship: same
  - provider: STR / CoStar
    term: On the Books (Pick-up Reports)
    context: 'STR pick-up reports show how a hotel''s OTB has grown or declined versus the same measurement point in a prior period, enabling pace benchmarking against the competitive set.'
    context_ko: 'STR 픽업 리포트는 호텔의 OTB가 이전 기간의 동일 측정 시점 대비 어떻게 증감했는지를 보여줘 경쟁 세트 대비 예약 속도 벤치마킹을 가능하게 한다.'
    relationship: same
relationships:
  - type: related
    targetTerm: Booking Pace
  - type: related
    targetTerm: Revenue Management
  - type: related
    targetTerm: Occupancy
  - type: related
    targetTerm: Stop Sell
  - type: related
    targetTerm: Closed to Arrival (CTA)
distinctions:
  - targetTerm: Booking Pace
    explanation: 'Booking Pace is the rate at which OTB reservations are accumulating over time — how quickly reservations are being added for a future date. OTB is the static count of confirmed reservations at a given snapshot; Booking Pace measures the velocity and trajectory of that count.'
    explanation_ko: '예약 속도(Booking Pace)는 OTB 예약이 시간에 따라 누적되는 속도, 즉 미래 날짜에 대한 예약이 얼마나 빠르게 추가되고 있는지를 나타낸다. OTB는 특정 스냅샷 시점에서의 확정 예약 수(정적 수치)이고, Booking Pace는 그 수치의 속도와 추세를 측정한다.'
  - targetTerm: Occupancy
    explanation: 'Occupancy is the realized percentage of rooms sold on the night of stay (after check-in); OTB is a forward-looking count of confirmed reservations for a future date. OTB converts to actual occupancy only after guests arrive and the night closes.'
    explanation_ko: '점유율(Occupancy)은 투숙 당일 밤에 판매된 객실의 실현된 비율이고(체크인 이후), OTB는 미래 날짜에 대한 확정 예약 수(미래 지향 수치)다. OTB는 게스트가 도착하고 해당 날이 마감된 후에야 실제 점유율로 전환된다.'
sources:
  - org: IDeaS Revenue Solutions
    name: Hotel Revenue Management Glossary — On the Books
    version: ''
    section: ''
    url: 'https://www.ideas.com/resources/glossary/'
    tier: vendor-doc
  - org: HSMAI
    name: HSMAI Revenue Management Glossary
    version: ''
    section: ''
    url: 'https://hsmai.org/knowledge/glossary/'
    tier: association
  - org: STR / CoStar
    name: STR Hotel Industry Benchmarking Glossary
    version: ''
    section: 'On the Books'
    url: 'https://str.com/data-insights/str-glossary'
    tier: secondary
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="10" width="32" height="30" rx="2"/><line x1="8" y1="18" x2="40" y2="18"/><line x1="16" y1="6" x2="16" y2="14"/><line x1="32" y1="6" x2="32" y2="14"/><line x1="16" y1="26" x2="22" y2="26"/><line x1="26" y1="26" x2="32" y2="26"/><line x1="16" y1="32" x2="22" y2="32"/></svg>
---

> On the Books (OTB) is the total number of confirmed room reservations that have been received and are sitting in the hotel's system for a specified future date or date range. It represents the cumulative demand already captured for that period and is used as the baseline for demand forecasting, booking-pace analysis, and revenue management decisions.

OTB is measured at a specific point in time (the "snapshot date") for a target date or range of dates. For a given arrival date, OTB grows as reservations are added and shrinks as cancellations occur. Revenue managers compare OTB at the same lead time across different years or competitive-set data (STR pick-up reports) to assess whether demand is tracking ahead of, behind, or in line with forecast. OTB is also used to calculate remaining available inventory: Available Rooms = Physical Capacity – OTB – Out-of-Order Rooms. When OTB is high relative to forecast, rate restrictions (MLOS, CTA, CTD) or rate increases may be applied to maximize yield; when OTB is low, promotional rates or last-minute deals may be opened.

**한국어 / Korean** — **On the Books (OTB, 예약 잔량)** — On the Books(OTB)는 지정된 미래 날짜 또는 기간에 대해 호텔 시스템에 접수·확보된 확정 예약의 총 객실 수다. 해당 기간에 이미 확보된 누적 수요를 나타내며, 수요 예측·예약 속도 분석·수익 관리 의사결정의 기준선으로 사용된다.

OTB는 특정 시점(스냅샷 날짜)에서 대상 날짜 또는 기간에 대해 측정된다. 특정 도착 날짜에 대한 OTB는 예약이 추가되면 늘어나고 취소가 발생하면 줄어든다. 수익 관리자는 동일한 리드타임에서 연도별 OTB를 비교하거나 경쟁 세트 데이터(STR 픽업 리포트)와 비교해 수요가 예측보다 앞서는지, 뒤처지는지, 또는 일치하는지를 판단한다. OTB는 남은 가용 재고 산정에도 사용된다: 가용 객실 수 = 총 물리적 객실 수 – OTB – 운영 불가 객실. OTB가 예측 대비 높으면 MLOS·CTA·CTD 등 숙박 제한이나 요금 인상을 적용하고, OTB가 낮으면 프로모션 요금이나 막판 할인 제안을 열 수 있다.

**Aliases:** `On the Books`, `OTB Reservations`, `Rooms on the Books`, `Confirmed Bookings`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| IDeaS Revenue Solutions | `On the Books (OTB)` | same | IDeaS RMS tracks OTB by arrival date and booking lead time as a core demand signal, comparing it with historical OTB curves and constrained forecast to recommend optimal pricing. |
| STR / CoStar | `On the Books (Pick-up Reports)` | same | STR pick-up reports show how a hotel's OTB has grown or declined versus the same measurement point in a prior period, enabling pace benchmarking against the competitive set. |

# Related
- [Booking Pace](/lodging/hotel-rate/booking-pace.md) — related
- [Revenue Management](/common/standards/revenue-management.md) — related
- [Occupancy](/lodging/hotel-rate/occupancy.md) — related
- [Stop Sell](/lodging/hotel-rate/stop-sell.md) — related
- [Closed to Arrival (CTA)](/lodging/hotel-rate/closed-to-arrival-cta.md) — related

# Distinctions
- **On the Books (OTB)** vs [Booking Pace](/lodging/hotel-rate/booking-pace.md) — Booking Pace is the rate at which OTB reservations are accumulating over time — how quickly reservations are being added for a future date. OTB is the static count of confirmed reservations at a given snapshot; Booking Pace measures the velocity and trajectory of that count.
- **On the Books (OTB)** vs [Occupancy](/lodging/hotel-rate/occupancy.md) — Occupancy is the realized percentage of rooms sold on the night of stay (after check-in); OTB is a forward-looking count of confirmed reservations for a future date. OTB converts to actual occupancy only after guests arrive and the night closes.

# Citations
[1] [IDeaS Revenue Solutions — Hotel Revenue Management Glossary — On the Books](https://www.ideas.com/resources/glossary/)
[2] [HSMAI — HSMAI Revenue Management Glossary](https://hsmai.org/knowledge/glossary/)
[3] [STR / CoStar — STR Hotel Industry Benchmarking Glossary](https://str.com/data-insights/str-glossary)
