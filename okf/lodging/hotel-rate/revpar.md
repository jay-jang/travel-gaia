---
type: Metric
title: RevPAR
description: 'Revenue Per Available Room is a lodging performance metric equal to total room revenue divided by the number of available rooms over a period, equivalently ADR multiplied by occupancy rate. It combines pricing and occupancy into a single measure of how effectively a property monetizes its room inventory.'
tags:
  - hotel-rate
  - active
timestamp: '2026-06-17T00:00:00Z'
id: revpar
vertical: lodging
category: hotel-rate
conceptType: metric
status: active
abbreviation: RevPAR
term_ko: '가용 객실당 매출(RevPAR, Revenue Per Available Room)'
definition_ko: 'RevPAR(Revenue Per Available Room)은 일정 기간의 총 객실 매출을 가용 객실 수로 나눈 값과 같은 숙박 성과 지표로, ADR에 객실 점유율을 곱한 값과 동일하다. 가격과 점유율을 하나의 지표로 결합해 숙소가 객실 재고를 얼마나 효과적으로 수익화하는지를 측정한다.'
longDef: 'RevPAR = Room Revenue / Rooms Available = ADR x Occupancy Rate. Because it uses available rooms (not just sold rooms) as the denominator, RevPAR reflects both rate achievement and how full the hotel is, making it the headline metric for comparing properties and tracking revenue management performance. A related metric, TRevPAR (Total Revenue Per Available Room), extends the numerator to all revenue (F&B, spa, etc.), and GOPPAR measures gross operating profit per available room.'
longDef_ko: 'RevPAR = 객실 매출 / 가용 객실 수 = ADR x 객실 점유율. 분모로 판매 객실이 아닌 가용 객실을 사용하므로, RevPAR은 요금 달성도와 호텔이 얼마나 찼는지를 모두 반영하여 숙소 비교와 수익 관리 성과 추적의 대표 지표가 된다. 관련 지표로 TRevPAR(Total Revenue Per Available Room)은 분자를 모든 매출(F&B, 스파 등)로 확장하며, GOPPAR은 가용 객실당 총영업이익을 측정한다.'
aliases:
  - Revenue Per Available Room
relationships:
  - type: related
    targetTerm: ADR
  - type: related
    targetTerm: Occupancy
distinctions:
  - targetTerm: ADR
    explanation: RevPAR uses available rooms as the denominator and blends in occupancy; ADR uses only sold rooms and isolates price.
    explanation_ko: 'RevPAR은 가용 객실을 분모로 사용해 점유율을 함께 반영하고, ADR은 판매 객실만 사용해 가격만 분리해 본다.'
  - targetTerm: Occupancy
    explanation: Occupancy rate is one of the two inputs to RevPAR (RevPAR = ADR x occupancy rate); on its own it ignores the rate achieved.
    explanation_ko: '객실 점유율은 RevPAR의 두 입력값 중 하나이며(RevPAR = ADR x 객실 점유율), 그 자체만으로는 달성된 요금을 반영하지 못한다.'
sources:
  - name: STR lodging performance metric definitions
    org: STR (CoStar)
    version: ''
    section: ''
    url: ''
  - name: Uniform System of Accounts for the Lodging Industry (USALI)
    org: AHLA / HFTP
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M6 40V8"/><path d="M6 40h36"/><rect x="12" y="28" width="6" height="10"/><rect x="21" y="20" width="6" height="18"/><rect x="30" y="12" width="6" height="26"/><path d="M12 22l9-8 6 4 9-10"/><path d="M30 8h6v6"/></svg>
---

> Revenue Per Available Room is a lodging performance metric equal to total room revenue divided by the number of available rooms over a period, equivalently ADR multiplied by occupancy rate. It combines pricing and occupancy into a single measure of how effectively a property monetizes its room inventory.

RevPAR = Room Revenue / Rooms Available = ADR x Occupancy Rate. Because it uses available rooms (not just sold rooms) as the denominator, RevPAR reflects both rate achievement and how full the hotel is, making it the headline metric for comparing properties and tracking revenue management performance. A related metric, TRevPAR (Total Revenue Per Available Room), extends the numerator to all revenue (F&B, spa, etc.), and GOPPAR measures gross operating profit per available room.

**한국어 / Korean** — **가용 객실당 매출(RevPAR, Revenue Per Available Room)** — RevPAR(Revenue Per Available Room)은 일정 기간의 총 객실 매출을 가용 객실 수로 나눈 값과 같은 숙박 성과 지표로, ADR에 객실 점유율을 곱한 값과 동일하다. 가격과 점유율을 하나의 지표로 결합해 숙소가 객실 재고를 얼마나 효과적으로 수익화하는지를 측정한다.

RevPAR = 객실 매출 / 가용 객실 수 = ADR x 객실 점유율. 분모로 판매 객실이 아닌 가용 객실을 사용하므로, RevPAR은 요금 달성도와 호텔이 얼마나 찼는지를 모두 반영하여 숙소 비교와 수익 관리 성과 추적의 대표 지표가 된다. 관련 지표로 TRevPAR(Total Revenue Per Available Room)은 분자를 모든 매출(F&B, 스파 등)로 확장하며, GOPPAR은 가용 객실당 총영업이익을 측정한다.

**Aliases:** `Revenue Per Available Room`

# Related
- [ADR](/lodging/hotel-rate/adr.md) — related
- [Occupancy](/lodging/hotel-rate/occupancy.md) — related

# Distinctions
- **RevPAR** vs [ADR](/lodging/hotel-rate/adr.md) — RevPAR uses available rooms as the denominator and blends in occupancy; ADR uses only sold rooms and isolates price.
- **RevPAR** vs [Occupancy](/lodging/hotel-rate/occupancy.md) — Occupancy rate is one of the two inputs to RevPAR (RevPAR = ADR x occupancy rate); on its own it ignores the rate achieved.

# Citations
[1] STR (CoStar) — STR lodging performance metric definitions
[2] AHLA / HFTP — Uniform System of Accounts for the Lodging Industry (USALI)
