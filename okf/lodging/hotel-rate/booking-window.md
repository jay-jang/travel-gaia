---
type: Metric
title: Booking Window
description: 'The booking window (also called lead time) is the number of days between the date a reservation is made and the guest''s check-in date. It is a foundational hotel revenue management metric that measures how far in advance guests book, and is used to calibrate pricing strategies, forecast demand accuracy, set rate fences, and evaluate market health. A lengthening booking window generally signals strengthening demand; a compressing window may indicate weakening demand, increased competitive supply, or a growing reliance on last-minute booking channels.'
tags:
  - hotel-rate
  - active
timestamp: '2026-08-12T00:00:00Z'
id: booking-window
vertical: lodging
category: hotel-rate
conceptType: metric
status: active
term_ko: 예약 윈도우(Booking Window)
definition_ko: '예약 윈도우(리드 타임이라고도 함)는 예약이 이루어진 날짜부터 고객의 체크인 날짜까지의 일수이다. 고객이 얼마나 미리 예약하는지를 측정하는 기본적인 호텔 수익 관리 지표로, 가격 전략 조정·수요 예측 정확도 향상·요금 울타리 설정·시장 건전성 평가에 활용된다. 예약 윈도우가 길어지면 일반적으로 수요가 강화되고 있음을 나타내며, 반대로 단축되면 수요 약화·경쟁 공급 증가 또는 막바지 예약 채널 의존도 증가를 시사할 수 있다.'
longDef: 'Booking windows vary significantly by market segment, hotel type, and destination. Leisure hotels in resort areas typically have longer windows (30–120+ days for peak season weekends) while urban business hotels have shorter windows (7–21 days), reflecting the last-minute nature of corporate travel. Revenue managers track the booking window distribution for each future stay date and compare it to historical pick-up curves (booking pace) to detect anomalous demand patterns early. If today''s on-the-books pace for a date 60 days out is running 20% ahead of last year, that is an early signal to tighten availability or raise rates. The booking window also drives channel strategy: direct bookings tend to have shorter windows (often 1–3 days for mobile same-day bookings, or via app) than OTA bookings, while MICE and group bookings typically have windows of 6–18 months. STR (now CoStar) and similar benchmarking services publish aggregate booking window data by market segment, allowing revenue managers to compare their property''s booking curve against the competitive set. Booking window compression — a structural shortening of the average lead time across a market — is a long-term trend driven by mobile booking proliferation and the rise of dynamic, real-time pricing. The window differs from Booking Pace (which measures the rate at which reservations are accumulating for a future date) and from the Cut-off Date (a hard deadline for group block reservations).'
longDef_ko: '예약 윈도우는 시장 세그먼트·호텔 유형·목적지에 따라 크게 다르다. 리조트 지역 레저 호텔은 일반적으로 윈도우가 길고(성수기 주말은 30~120일+), 도시 비즈니스 호텔은 출장 여행의 막바지 성격으로 인해 짧다(7~21일). 수익 관리자는 각 미래 체류 날짜의 예약 윈도우 분포를 추적하고 과거 픽업 곡선(예약 페이스)과 비교하여 비정상적인 수요 패턴을 조기에 감지한다. STR(현 CoStar) 등 벤치마킹 서비스는 시장 세그먼트별 집계 예약 윈도우 데이터를 제공하여 수익 관리자가 자산의 예약 곡선을 경쟁 세트와 비교할 수 있게 한다. 예약 윈도우 압축(시장 전반에서 평균 리드 타임의 구조적 단축)은 모바일 예약 확산과 동적·실시간 가격 책정의 부상으로 인한 장기 추세다. 이 지표는 예약 페이스(미래 날짜에 대한 예약 누적 속도), 그리고 단체 블록 예약의 확정 기한인 마감일(cut-off date)과 구별된다.'
aliases:
  - Lead Time
  - Reservation Window
  - Advance Purchase Window
  - Booking Horizon
relationships:
  - type: related
    targetTerm: Booking Pace
  - type: broader
    targetTerm: Revenue Management
  - type: related
    targetTerm: ADR
  - type: related
    targetTerm: RevPAR
  - type: related
    targetTerm: BAR
  - type: related
    targetTerm: Booking Limit
  - type: related
    targetTerm: Rate Shopping
distinctions:
  - targetTerm: Booking Pace
    explanation: 'Booking Pace (or "pace") measures the rate at which reservations are accumulating for a specific future date compared with a historical baseline — it is a velocity measure. The Booking Window is a static measurement of how many days before arrival a booking was made — it is a lead-time measure. Both are used together: a short-window booking that arrives early in the pace curve signals different demand behaviour than a short-window booking arriving the day before.'
    explanation_ko: '예약 페이스(pace)는 특정 미래 날짜에 대한 예약 누적 속도를 과거 기준과 비교하는 속도 지표이고, 예약 윈도우는 예약이 체크인 며칠 전에 이루어졌는지를 나타내는 정적인 리드 타임 지표이다. 둘은 함께 사용된다. 페이스 곡선 초기에 도착한 단기 윈도우 예약은 전날 도착한 단기 윈도우 예약과 다른 수요 행동을 나타낸다.'
sources:
  - name: Booking Lead Time for Hotels
    org: SiteMinder
    version: ''
    section: ''
    url: 'https://www.siteminder.com/r/booking-lead-time/'
    tier: vendor-doc
  - name: 'Booking Windows, Curves, and Pace: Know Your STR Industry Terms'
    org: LocalVR
    version: ''
    section: ''
    url: 'https://golocalvr.com/blog/booking-windows-curves-and-pace-know-your-str-industry-terms'
    tier: secondary
  - name: Hotel Booking Lead Time — The Demand Signal Hiding Inside Every Reservation
    org: RevPerfect
    version: ''
    section: ''
    url: 'https://www.revperfect.io/blog/what-is-booking-lead-time'
    tier: secondary
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="10" width="36" height="30" rx="2"/><path d="M6 20h36"/><path d="M16 6v8M32 6v8"/><path d="M12 28h6"/><path d="M30 28h6"/><path d="M18 28h12" stroke-dasharray="2 2"/><path d="M18 27v2"/><path d="M30 27v2"/></svg>
---

> The booking window (also called lead time) is the number of days between the date a reservation is made and the guest's check-in date. It is a foundational hotel revenue management metric that measures how far in advance guests book, and is used to calibrate pricing strategies, forecast demand accuracy, set rate fences, and evaluate market health.

Booking windows vary significantly by market segment: leisure hotels in resort areas typically have longer windows (30–120+ days for peak season weekends) while urban business hotels have shorter windows (7–21 days). Revenue managers track the booking window distribution for each future stay date and compare it to historical pick-up curves (booking pace) to detect anomalous demand patterns early.

STR (now CoStar) and similar benchmarking services publish aggregate booking window data by market segment, allowing revenue managers to compare their property's booking curve against the competitive set. **Booking window compression** — a structural shortening of the average lead time across a market — is a long-term trend driven by mobile booking proliferation and real-time pricing.

**한국어 / Korean** — **예약 윈도우(Booking Window)** — 예약 윈도우(리드 타임이라고도 함)는 예약이 이루어진 날짜부터 고객의 체크인 날짜까지의 일수이다. 고객이 얼마나 미리 예약하는지를 측정하는 기본적인 호텔 수익 관리 지표로, 가격 전략 조정·수요 예측·요금 울타리 설정·시장 건전성 평가에 활용된다.

예약 윈도우 압축(평균 리드 타임의 구조적 단축)은 모바일 예약 확산과 동적 가격 책정 부상으로 인한 장기 추세다.

**Aliases:** `Lead Time`, `Reservation Window`, `Advance Purchase Window`, `Booking Horizon`

# Related
- [Booking Pace](/lodging/hotel-rate/booking-pace.md) — related
- [Revenue Management](/air/air-shop/revenue-management.md) — broader
- [ADR](/lodging/hotel-rate/adr.md) — related
- [RevPAR](/lodging/hotel-rate/revpar.md) — related
- [BAR](/lodging/hotel-rate/bar.md) — related
- [Booking Limit](/air/air-shop/booking-limit.md) — related
- [Rate Shopping](/lodging/hotel-dist/rate-shopping.md) — related

# Distinctions
- **Booking Window** vs [Booking Pace](/lodging/hotel-rate/booking-pace.md) — Booking Pace (or "pace") measures the rate at which reservations are accumulating for a specific future date compared with a historical baseline — it is a velocity measure. The Booking Window is a static measurement of how many days before arrival a booking was made — it is a lead-time measure. Both are used together: a short-window booking that arrives early in the pace curve signals different demand behaviour than a short-window booking arriving the day before.

# Citations
[1] [SiteMinder — Booking Lead Time for Hotels](https://www.siteminder.com/r/booking-lead-time/)
[2] [LocalVR — Booking Windows, Curves, and Pace: Know Your STR Industry Terms](https://golocalvr.com/blog/booking-windows-curves-and-pace-know-your-str-industry-terms)
[3] [RevPerfect — Hotel Booking Lead Time — The Demand Signal Hiding Inside Every Reservation](https://www.revperfect.io/blog/what-is-booking-lead-time)
