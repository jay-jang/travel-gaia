---
type: Metric
title: Average Length of Stay (ALOS)
description: 'Average Length of Stay (ALOS) is the mean number of nights guests stay per booking during a given period, calculated as total occupied room-nights divided by total number of arrivals. It is a standard lodging performance metric used alongside ADR and Occupancy to model revenue patterns, optimise length-of-stay pricing restrictions, and benchmark against competitive sets.'
tags:
  - hotel-rate
  - active
  - STR
timestamp: '2026-06-29T00:00:00Z'
id: average-length-of-stay
vertical: lodging
category: hotel-rate
conceptType: metric
status: active
abbreviation: ALOS
term_ko: '평균 숙박일수(ALOS)'
definition_ko: '평균 숙박일수(Average Length of Stay, ALOS)는 특정 기간 동안 예약 1건당 선객이 머무는 평균 박수로, 총 점유 객실·박수를 총 도착 건수로 나누어 산출한다. ADR 및 점유율과 함께 활용되는 숙박 업계 표준 성과 지표로, 수익 패턴 모델링·숙박일수 요금 제한 최적화·경쟁 집합 벤치마킹에 사용된다.'
longDef: 'ALOS is a central input for revenue management decisions including Minimum Length of Stay (MLOS) and Closed to Arrival (CTA) restrictions, which are calibrated to extend ALOS on high-demand nights or restrict short stays that displace longer-stay business. Properties with a longer ALOS (extended-stay hotels, resort destinations) incur lower per-stay costs for housekeeping and front-desk operations, enabling different pricing strategies compared with transient-focused urban hotels. STR (CoStar Group) tracks ALOS in its competitive benchmarking reports alongside RevPAR, ADR, and Occupancy; ALOS is also used by destination management organisations to evaluate the economic impact of tourism by multiplying average spend per night by ALOS.'
longDef_ko: 'ALOS는 최소 숙박일수(MLOS) 및 도착 제한(CTA) 등 수익 관리 결정의 핵심 입력값이다. 이러한 제한은 수요가 높은 날 밤 ALOS를 연장하거나 장기 체류 수요를 대체하는 단기 체류를 제한하도록 조정된다. ALOS가 긴 숙박 시설(장기 체류 호텔, 리조트 목적지)은 하우스키핑·프런트 운영의 1박당 비용이 낮아져 단기 체류 위주 도심 호텔과 다른 요금 전략을 구사할 수 있다. STR(CoStar Group)은 RevPAR·ADR·점유율과 함께 경쟁 집합 벤치마킹 보고서에서 ALOS를 추적하며, 목적지 관리 기관은 1박당 평균 지출에 ALOS를 곱해 관광의 경제적 영향을 평가한다.'
standardBody: STR (CoStar Group)
aliases:
  - Average Stay Length
  - Average Visitor Stay
relationships:
  - type: related
    targetTerm: ADR
  - type: related
    targetTerm: RevPAR
  - type: related
    targetTerm: Occupancy
  - type: related
    targetTerm: Minimum Length of Stay (MLOS)
  - type: related
    targetTerm: Closed to Arrival (CTA)
distinctions:
  - targetTerm: ADR
    explanation: 'ADR (Average Daily Rate) measures the average revenue earned per occupied room per night; ALOS measures how many nights guests stay per arrival. Together with Occupancy, ADR and ALOS determine total room revenue — higher ALOS at the same ADR means proportionally more revenue per booking cycle.'
    explanation_ko: 'ADR(평균 일일 요금)은 점유 객실 1실당 1박 평균 수익을 측정하고, ALOS는 도착 1건당 선객이 머무는 박수를 측정한다. ADR과 ALOS는 점유율과 함께 총 객실 수익을 결정하며, 동일 ADR에서 ALOS가 높을수록 예약 사이클당 수익이 비례적으로 증가한다.'
  - targetTerm: Occupancy
    explanation: 'Occupancy is the proportion of available rooms sold on a given night; ALOS reflects the duration pattern across bookings rather than single-night fill rate. A high-occupancy hotel with a low ALOS serves many short-stay guests; a lower-occupancy extended-stay property may generate comparable or higher revenue per booking.'
    explanation_ko: '점유율은 특정 날 밤 판매된 가용 객실 비율이고, ALOS는 단일 야간 충족률이 아닌 예약 전반의 기간 패턴을 반영한다. 점유율이 높고 ALOS가 낮은 호텔은 단기 체류 고객이 많고, 장기 체류 위주 시설은 점유율이 낮아도 예약당 비슷하거나 더 높은 수익을 낼 수 있다.'
  - targetTerm: Minimum Length of Stay (MLOS)
    explanation: 'MLOS is a booking restriction that requires guests to stay a minimum number of nights; ALOS is the observed average across all actual stays. MLOS is a lever used to increase ALOS on high-demand dates; ALOS is the outcome metric that measures whether the restriction is working.'
    explanation_ko: 'MLOS는 선객에게 최소 박수 체류를 요구하는 예약 제한이고, ALOS는 실제 체류 전반의 평균 관측치다. MLOS는 수요가 높은 날짜에 ALOS를 높이기 위해 사용하는 수단이고, ALOS는 그 제한이 효과를 발휘하는지 측정하는 결과 지표다.'
sources:
  - name: STR Benchmark Glossary — Average Length of Stay
    org: STR (CoStar Group)
    version: ''
    section: ''
    url: 'https://str.com/data-insights-blog/glossary'
    tier: association
  - name: HSMAI Revenue Optimization Glossary
    org: HSMAI (Hospitality Sales and Marketing Association International)
    version: ''
    section: ''
    url: 'https://hsmai.org/knowledge/glossary/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="14" width="36" height="28" rx="2"/><line x1="6" y1="22" x2="42" y2="22"/><line x1="16" y1="8" x2="16" y2="18"/><line x1="32" y1="8" x2="32" y2="18"/><rect x="12" y="27" width="6" height="5" rx="1"/><rect x="21" y="27" width="6" height="5" rx="1"/><rect x="30" y="27" width="6" height="5" rx="1"/><line x1="15" y1="36" x2="33" y2="36"/></svg>
---

> Average Length of Stay (ALOS) is the mean number of nights guests stay per booking during a given period, calculated as total occupied room-nights divided by total number of arrivals. It is a standard lodging performance metric used alongside ADR and Occupancy to model revenue patterns, optimise length-of-stay pricing restrictions, and benchmark against competitive sets.

ALOS is a central input for revenue management decisions including Minimum Length of Stay (MLOS) and Closed to Arrival (CTA) restrictions, which are calibrated to extend ALOS on high-demand nights or restrict short stays that displace longer-stay business. Properties with a longer ALOS (extended-stay hotels, resort destinations) incur lower per-stay costs for housekeeping and front-desk operations, enabling different pricing strategies compared with transient-focused urban hotels. STR (CoStar Group) tracks ALOS in its competitive benchmarking reports alongside RevPAR, ADR, and Occupancy; ALOS is also used by destination management organisations to evaluate the economic impact of tourism by multiplying average spend per night by ALOS.

**한국어 / Korean** — **평균 숙박일수(ALOS)** — 평균 숙박일수(Average Length of Stay, ALOS)는 특정 기간 동안 예약 1건당 선객이 머무는 평균 박수로, 총 점유 객실·박수를 총 도착 건수로 나누어 산출한다. ADR 및 점유율과 함께 활용되는 숙박 업계 표준 성과 지표로, 수익 패턴 모델링·숙박일수 요금 제한 최적화·경쟁 집합 벤치마킹에 사용된다.

ALOS는 최소 숙박일수(MLOS) 및 도착 제한(CTA) 등 수익 관리 결정의 핵심 입력값이다. 이러한 제한은 수요가 높은 날 밤 ALOS를 연장하거나 장기 체류 수요를 대체하는 단기 체류를 제한하도록 조정된다. ALOS가 긴 숙박 시설(장기 체류 호텔, 리조트 목적지)은 하우스키핑·프런트 운영의 1박당 비용이 낮아져 단기 체류 위주 도심 호텔과 다른 요금 전략을 구사할 수 있다. STR(CoStar Group)은 RevPAR·ADR·점유율과 함께 경쟁 집합 벤치마킹 보고서에서 ALOS를 추적한다.

**Aliases:** `Average Stay Length`, `Average Visitor Stay`

# Related
- [ADR](/lodging/hotel-rate/adr.md) — related
- [RevPAR](/lodging/hotel-rate/revpar.md) — related
- [Occupancy](/lodging/hotel-rate/occupancy.md) — related
- [Minimum Length of Stay (MLOS)](/lodging/hotel-rate/minimum-length-of-stay-mlos.md) — related
- [Closed to Arrival (CTA)](/lodging/hotel-rate/closed-to-arrival-cta.md) — related

# Distinctions
- **Average Length of Stay (ALOS)** vs [ADR](/lodging/hotel-rate/adr.md) — ADR (Average Daily Rate) measures the average revenue earned per occupied room per night; ALOS measures how many nights guests stay per arrival. Together with Occupancy, ADR and ALOS determine total room revenue — higher ALOS at the same ADR means proportionally more revenue per booking cycle.
- **Average Length of Stay (ALOS)** vs [Occupancy](/lodging/hotel-rate/occupancy.md) — Occupancy is the proportion of available rooms sold on a given night; ALOS reflects the duration pattern across bookings rather than single-night fill rate. A high-occupancy hotel with a low ALOS serves many short-stay guests; a lower-occupancy extended-stay property may generate comparable or higher revenue per booking.
- **Average Length of Stay (ALOS)** vs [Minimum Length of Stay (MLOS)](/lodging/hotel-rate/minimum-length-of-stay-mlos.md) — MLOS is a booking restriction that requires guests to stay a minimum number of nights; ALOS is the observed average across all actual stays. MLOS is a lever used to increase ALOS on high-demand dates; ALOS is the outcome metric that measures whether the restriction is working.

# Citations
[1] [STR (CoStar Group) — STR Benchmark Glossary — Average Length of Stay](https://str.com/data-insights-blog/glossary)
[2] [HSMAI (Hospitality Sales and Marketing Association International) — HSMAI Revenue Optimization Glossary](https://hsmai.org/knowledge/glossary/)
