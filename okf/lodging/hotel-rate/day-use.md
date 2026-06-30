---
type: Business Term
title: Day Use
description: 'Day Use (also Day Room) is a hotel revenue practice in which a room is sold for a limited daytime window — typically check-in between 08:00 and noon, check-out by 18:00–22:00 — without an overnight stay. It captures revenue from otherwise idle inventory during low-demand daytime hours and serves business travelers, long-layover passengers, and guests needing a workspace or rest between flights.'
tags:
  - hotel-rate
  - active
  - HEDNA
timestamp: '2026-06-30T00:00:00Z'
id: day-use
vertical: lodging
category: hotel-rate
conceptType: business-term
status: active
term_ko: 데이 유즈(Day Use, 낮 시간 객실)
definition_ko: '데이 유즈(Day Use, 또는 Day Room)는 호텔 객실을 제한된 주간 시간대(일반적으로 08:00~정오 체크인, 18:00~22:00 체크아웃)에 숙박 없이 판매하는 수익 관행이다. 수요가 낮은 낮 시간대에 유휴 재고에서 수익을 창출하며, 비즈니스 여행자·장시간 환승 승객·항공편 사이에 업무 공간이나 휴식이 필요한 고객을 위한 서비스다.'
longDef: 'Day Use rates are typically priced at 40–60% of the full overnight BAR, reflecting the shorter occupancy window and the fact that the room must be released for overnight check-in. Digital marketplaces — DayUse.com, Byhours, HotelsByDay, and HRS Day Use — have brought day-use inventory into mainstream distribution, allowing customers to book rooms by the hour or as fixed daytime windows via OTA-style flows. Demand drivers include long layovers at airport hotels, remote workers seeking quiet meeting or workspace, local staycation use for couples or individuals without travel plans, and event overflow. Hotel revenue managers forecast day-use demand separately from overnight demand because it peaks around midday and near transit hubs, while overnight demand peaks in the early evening. Day Use is distinct from early check-in and late check-out, which are extensions of an existing overnight booking; a Day Use booking is an entirely separate product sold independently with its own rate code.'
longDef_ko: '데이 유즈 요금은 일반적으로 전체 숙박 BAR 요금의 40~60%로 책정되며, 이는 짧은 체크인 시간과 당일 저녁 숙박을 위한 객실 반환 필요성을 반영한다. DayUse.com, Byhours, HotelsByDay, HRS Day Use 등 디지털 마켓플레이스가 데이 유즈 재고를 주류 유통에 편입시켜, 고객이 OTA 방식의 예약 플로우를 통해 시간 단위 또는 고정 주간 시간대로 객실을 예약할 수 있게 되었다. 수요 동인으로는 공항 호텔의 장시간 환승, 조용한 회의 공간이나 업무 공간을 원하는 원격 근무자, 여행 계획 없이 커플·개인이 이용하는 지역 내 스테이케이션, 행사 수요 초과 등이 있다. 호텔 수익 관리자는 낮 시간대와 환승 허브 근처에서 정점을 이루고 저녁에 정점을 이루는 숙박 수요와 달리 데이 유즈 수요를 별도로 예측한다. 데이 유즈는 기존 숙박 예약을 연장하는 조기 체크인·늦은 체크아웃과 구별되며, 데이 유즈 예약은 별도의 요금 코드로 독립적으로 판매되는 완전히 다른 상품이다.'
aliases:
  - Day Room
  - Day-Use Rate
  - Daytime Room
  - Short-Stay Room
  - Day Use Room
providerTerms:
  - provider: DayUse.com
    term: Day Use Hotel
    context: 'DayUse.com markets hotel rooms for daytime-only use, typically 3–8 hour windows during the day at reduced rates versus overnight prices.'
    context_ko: 'DayUse.com은 일반적으로 숙박 요금 대비 할인된 가격으로 낮 시간대(보통 3~8시간) 동안만 이용할 수 있는 호텔 객실을 중개한다.'
    relationship: same
  - provider: Byhours
    term: Micro-Stay
    context: 'Byhours brands their day-use and short-stay hotel booking product as a "Micro-Stay", allowing bookings for 3, 6, or 12-hour windows.'
    context_ko: 'Byhours는 데이 유즈 및 단기 체류 호텔 예약 상품을 "Micro-Stay"로 브랜딩하며, 3·6·12시간 단위 예약을 제공한다.'
    relationship: narrower
relationships:
  - type: related
    targetTerm: Rate Plan
  - type: related
    targetTerm: ADR
  - type: related
    targetTerm: Room Type
distinctions:
  - targetTerm: Rate Plan
    explanation: 'A Rate Plan defines pricing conditions for an overnight stay (including minimum stay, cancellation rules, and meal basis); Day Use is an entirely separate non-overnight product type — it is not a variant of an overnight rate plan but a distinct inventory category with its own time window and rate code.'
    explanation_ko: 'Rate Plan은 숙박에 대한 가격 조건(최소 투숙 기간, 취소 규정, 식사 조건 포함)을 정의하는 반면, 데이 유즈는 완전히 별개의 비숙박 상품 유형으로, 숙박 Rate Plan의 변형이 아닌 고유한 시간 범위와 요금 코드를 가진 별개의 재고 범주다.'
  - targetTerm: ADR
    explanation: 'ADR (Average Daily Rate) is calculated from overnight room revenue divided by occupied overnight rooms; Day Use revenue may be tracked separately and is often excluded from ADR calculations to avoid distorting the overnight performance metric.'
    explanation_ko: 'ADR(객실 평균 일일 요금)은 숙박 객실 수익을 점유 숙박 객실 수로 나누어 산출하며, 데이 유즈 수익은 별도로 추적되고 숙박 성과 지표의 왜곡을 방지하기 위해 ADR 산출에서 제외되는 경우가 많다.'
sources:
  - name: 'Day Use Hotels: Maximizing Underutilized Inventory'
    org: HotelsByDay
    version: ''
    section: ''
    url: 'https://www.hotelsbyday.com/blog/what-is-a-day-use-hotel/'
    tier: vendor-doc
  - name: 'Day Use Hotel Distribution'
    org: HEDNA (Hotel Electronic Distribution Network Association)
    version: ''
    section: ''
    url: 'https://hedna.org/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="14" width="32" height="24" rx="3"/><path d="M16 14v-4"/><path d="M32 14v-4"/><line x1="8" y1="22" x2="40" y2="22"/><circle cx="24" cy="33" r="5"/><line x1="24" y1="30" x2="24" y2="33"/><line x1="24" y1="33" x2="27" y2="35"/></svg>
---

> Day Use (also Day Room) is a hotel revenue practice in which a room is sold for a limited daytime window — typically check-in between 08:00 and noon, check-out by 18:00–22:00 — without an overnight stay. It captures revenue from otherwise idle inventory during low-demand daytime hours and serves business travelers, long-layover passengers, and guests needing a workspace or rest between flights.

Day Use rates are typically priced at 40–60% of the full overnight BAR, reflecting the shorter occupancy window and the fact that the room must be released for overnight check-in. Digital marketplaces — DayUse.com, Byhours, HotelsByDay, and HRS Day Use — have brought day-use inventory into mainstream distribution, allowing customers to book rooms by the hour or as fixed daytime windows via OTA-style flows. Demand drivers include long layovers at airport hotels, remote workers seeking quiet meeting or workspace, local staycation use for couples or individuals without travel plans, and event overflow. Hotel revenue managers forecast day-use demand separately from overnight demand because it peaks around midday and near transit hubs, while overnight demand peaks in the early evening. Day Use is distinct from early check-in and late check-out, which are extensions of an existing overnight booking; a Day Use booking is an entirely separate product sold independently with its own rate code.

**한국어 / Korean** — **데이 유즈(Day Use, 낮 시간 객실)** — 데이 유즈(Day Use, 또는 Day Room)는 호텔 객실을 제한된 주간 시간대(일반적으로 08:00~정오 체크인, 18:00~22:00 체크아웃)에 숙박 없이 판매하는 수익 관행이다. 수요가 낮은 낮 시간대에 유휴 재고에서 수익을 창출하며, 비즈니스 여행자·장시간 환승 승객·항공편 사이에 업무 공간이나 휴식이 필요한 고객을 위한 서비스다.

데이 유즈 요금은 일반적으로 전체 숙박 BAR 요금의 40~60%로 책정되며, 이는 짧은 체크인 시간과 당일 저녁 숙박을 위한 객실 반환 필요성을 반영한다. DayUse.com, Byhours, HotelsByDay, HRS Day Use 등 디지털 마켓플레이스가 데이 유즈 재고를 주류 유통에 편입시켜, 고객이 OTA 방식의 예약 플로우를 통해 시간 단위 또는 고정 주간 시간대로 객실을 예약할 수 있게 되었다. 수요 동인으로는 공항 호텔의 장시간 환승, 조용한 회의 공간이나 업무 공간을 원하는 원격 근무자, 여행 계획 없이 커플·개인이 이용하는 지역 내 스테이케이션, 행사 수요 초과 등이 있다. 호텔 수익 관리자는 낮 시간대와 환승 허브 근처에서 정점을 이루고 저녁에 정점을 이루는 숙박 수요와 달리 데이 유즈 수요를 별도로 예측한다. 데이 유즈는 기존 숙박 예약을 연장하는 조기 체크인·늦은 체크아웃과 구별되며, 데이 유즈 예약은 별도의 요금 코드로 독립적으로 판매되는 완전히 다른 상품이다.

**Aliases:** `Day Room`, `Day-Use Rate`, `Daytime Room`, `Short-Stay Room`, `Day Use Room`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| DayUse.com | `Day Use Hotel` | same | DayUse.com markets hotel rooms for daytime-only use, typically 3–8 hour windows during the day at reduced rates versus overnight prices. |
| Byhours | `Micro-Stay` | narrower | Byhours brands their day-use and short-stay hotel booking product as a "Micro-Stay", allowing bookings for 3, 6, or 12-hour windows. |

# Related
- [Rate Plan](/lodging/hotel-rate/rate-plan.md) — related
- [ADR](/lodging/hotel-rate/adr.md) — related
- [Room Type](/lodging/hotel-rate/room-type.md) — related

# Distinctions
- **Day Use** vs [Rate Plan](/lodging/hotel-rate/rate-plan.md) — A Rate Plan defines pricing conditions for an overnight stay (including minimum stay, cancellation rules, and meal basis); Day Use is an entirely separate non-overnight product type — it is not a variant of an overnight rate plan but a distinct inventory category with its own time window and rate code.
- **Day Use** vs [ADR](/lodging/hotel-rate/adr.md) — ADR (Average Daily Rate) is calculated from overnight room revenue divided by occupied overnight rooms; Day Use revenue may be tracked separately and is often excluded from ADR calculations to avoid distorting the overnight performance metric.

# Citations
[1] [HotelsByDay — Day Use Hotels: Maximizing Underutilized Inventory](https://www.hotelsbyday.com/blog/what-is-a-day-use-hotel/)
[2] HEDNA (Hotel Electronic Distribution Network Association) — Day Use Hotel Distribution (https://hedna.org/)
