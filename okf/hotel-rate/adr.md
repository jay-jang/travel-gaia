---
type: Metric
title: ADR
description: Average Daily Rate is a core lodging performance metric equal to total room revenue divided by the number of rooms sold (occupied) over a given period. It measures the average price actually realized per occupied room and excludes complimentary and house-use rooms.
tags:
  - hotel-rate
  - active
timestamp: '2026-06-17T00:00:00Z'
id: adr
category: hotel-rate
conceptType: metric
status: active
abbreviation: ADR
term_ko: '객실 평균 단가(ADR, Average Daily Rate)'
definition_ko: 'ADR(Average Daily Rate)은 일정 기간의 총 객실 매출을 판매된(투숙된) 객실 수로 나눈 값과 같은 핵심 숙박 성과 지표이다. 투숙 객실당 실제 실현된 평균 가격을 측정하며, 무료 제공 객실과 자체 사용 객실은 제외한다.'
longDef: 'ADR = Room Revenue / Rooms Sold. It captures rate performance independent of how full the property is, so it is typically read alongside occupancy rate and RevPAR. ADR normally counts only revenue-generating occupied rooms (excluding complimentary rooms), and definitions follow industry-standard accounting such as USALI and STR''s metric conventions to keep comparisons consistent across properties.'
longDef_ko: 'ADR = 객실 매출 / 판매 객실 수. 숙소가 얼마나 찼는지와 무관하게 요금 성과를 포착하므로, 보통 객실 점유율 및 RevPAR과 함께 본다. ADR은 일반적으로 매출이 발생한 투숙 객실만 집계하며(무료 객실 제외), 정의는 USALI나 STR의 지표 관행과 같은 업계 표준 회계를 따라 숙소 간 비교의 일관성을 유지한다.'
aliases:
  - Average Daily Rate
  - Average Room Rate
  - ARR
relationships:
  - type: related
    targetTerm: RevPAR
  - type: related
    targetTerm: Occupancy
  - type: related
    targetTerm: BAR
distinctions:
  - targetTerm: RevPAR
    explanation: 'ADR divides revenue by rooms sold (occupied), while RevPAR divides revenue by rooms available, so RevPAR reflects both rate and occupancy.'
    explanation_ko: 'ADR은 매출을 판매된(투숙된) 객실 수로 나누는 반면 RevPAR은 매출을 가용 객실 수로 나누므로, RevPAR은 요금과 점유율을 모두 반영한다.'
  - targetTerm: BAR
    explanation: 'ADR is a realized average measured after the fact; BAR is a forward-looking published selling rate, not an average outcome.'
    explanation_ko: 'ADR은 사후에 측정된 실현 평균이고, BAR은 미래 지향적으로 게시된 판매 요금일 뿐 평균 결과가 아니다.'
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
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="10" width="32" height="30" rx="3"/><line x1="8" y1="18" x2="40" y2="18"/><line x1="16" y1="8" x2="16" y2="14"/><line x1="32" y1="8" x2="32" y2="14"/><path d="M27 24h-5a2.5 2.5 0 0 0 0 5h4a2.5 2.5 0 0 1 0 5h-6"/><line x1="24" y1="22" x2="24" y2="36"/></svg>
---

> Average Daily Rate is a core lodging performance metric equal to total room revenue divided by the number of rooms sold (occupied) over a given period. It measures the average price actually realized per occupied room and excludes complimentary and house-use rooms.

ADR = Room Revenue / Rooms Sold. It captures rate performance independent of how full the property is, so it is typically read alongside occupancy rate and RevPAR. ADR normally counts only revenue-generating occupied rooms (excluding complimentary rooms), and definitions follow industry-standard accounting such as USALI and STR's metric conventions to keep comparisons consistent across properties.

**한국어 / Korean** — **객실 평균 단가(ADR, Average Daily Rate)** — ADR(Average Daily Rate)은 일정 기간의 총 객실 매출을 판매된(투숙된) 객실 수로 나눈 값과 같은 핵심 숙박 성과 지표이다. 투숙 객실당 실제 실현된 평균 가격을 측정하며, 무료 제공 객실과 자체 사용 객실은 제외한다.

ADR = 객실 매출 / 판매 객실 수. 숙소가 얼마나 찼는지와 무관하게 요금 성과를 포착하므로, 보통 객실 점유율 및 RevPAR과 함께 본다. ADR은 일반적으로 매출이 발생한 투숙 객실만 집계하며(무료 객실 제외), 정의는 USALI나 STR의 지표 관행과 같은 업계 표준 회계를 따라 숙소 간 비교의 일관성을 유지한다.

**Aliases:** `Average Daily Rate`, `Average Room Rate`, `ARR`

# Related
- [RevPAR](/hotel-rate/revpar.md) — related
- [Occupancy](/hotel-rate/occupancy.md) — related
- [BAR](/hotel-rate/bar.md) — related

# Distinctions
- **ADR** vs [RevPAR](/hotel-rate/revpar.md) — ADR divides revenue by rooms sold (occupied), while RevPAR divides revenue by rooms available, so RevPAR reflects both rate and occupancy.
- **ADR** vs [BAR](/hotel-rate/bar.md) — ADR is a realized average measured after the fact; BAR is a forward-looking published selling rate, not an average outcome.

# Citations
[1] STR (CoStar) — STR lodging performance metric definitions
[2] AHLA / HFTP — Uniform System of Accounts for the Lodging Industry (USALI)
