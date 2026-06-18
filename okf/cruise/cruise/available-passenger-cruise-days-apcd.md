---
type: Metric
title: Available Passenger Cruise Days (APCD)
description: 'The cruise industry''s standard unit of capacity, equal to two passengers (double occupancy) per available cabin multiplied by the number of cruise days in the period. APCD is the denominator for virtually every cruise unit-revenue and unit-cost metric — Gross Yield, Net Yield, Net Cruise Cost per APCD and occupancy are all expressed per APCD — and is the cruise analogue of the airline''s available seat mile or the hotel''s available room night.'
tags:
  - cruise
  - active
timestamp: '2026-06-18T00:00:00Z'
id: available-passenger-cruise-days-apcd
vertical: cruise
category: cruise
conceptType: metric
status: active
abbreviation: APCD
term_ko: '이용가능 승객 크루즈 일수 (Available Passenger Cruise Days, APCD)'
definition_ko: '크루즈 산업 표준 좌석/객실 공급 단위로, 이용 가능한 선실당 2인(2인 1실 기준, double occupancy)에 해당 기간의 크루즈 운항 일수를 곱한 값이다. APCD는 거의 모든 크루즈 단위 수익·단위 원가 지표의 분모로, Gross Yield, Net Yield, APCD당 Net Cruise Cost, 점유율(occupancy)이 모두 APCD를 기준으로 산출된다. 항공의 ASM(available seat mile)이나 호텔의 available room night에 해당하는 크루즈 측 공급 단위다.'
longDef: 'Cruise lines report APCD as their fundamental capacity figure in SEC filings and earnings releases. It is computed as double occupancy (two lower berths) per cabin times the number of days each cabin is available for sale in the period; lay-up, drydock and partial deployment reduce it. Because lower-berth double occupancy is the basis, occupancy can exceed 100% when third and fourth guests sail in a cabin. Every key cruise performance metric is normalized against APCD: Gross Yield (total revenue / APCD), Net Yield (net revenue / APCD), and Net Cruise Cost per APCD. This makes APCD the foundational denominator of cruise revenue management and the comparability unit across ships, brands and quarters. Some operators publish the equivalent figure under the label Available Lower Berth Days (ALBD).'
longDef_ko: '크루즈 선사는 APCD를 SEC 공시와 실적 발표에서 가장 기본이 되는 공급량 지표로 보고한다. 선실당 2인(하부 침대 2개 기준)에 해당 기간 동안 각 선실이 판매 가능한 일수를 곱해 산출하며, 운항 중단·드라이독·부분 배치는 APCD를 감소시킨다. 하부 침대 2인 점유를 기준으로 하기 때문에 셋째·넷째 승객이 함께 탑승하면 occupancy가 100%를 초과할 수 있다. 모든 핵심 크루즈 성과 지표가 APCD로 정규화되는데, Gross Yield(총수익/APCD), Net Yield(순수익/APCD), APCD당 Net Cruise Cost가 그 예다. 따라서 APCD는 크루즈 수익관리의 기초 분모이자 선박·브랜드·분기 간 비교 단위가 된다. 일부 선사는 동일 개념을 Available Lower Berth Days(ALBD)라는 명칭으로 공시한다.'
aliases:
  - APCD
  - Capacity Days
  - Available Lower Berth Days (ALBD)
providerTerms:
  - provider: Royal Caribbean Cruises Ltd.
    term: Available Passenger Cruise Days (APCD)
    context: Defined in the company's earnings-release terminology as a measure of capacity representing double occupancy per cabin multiplied by the number of cruise days for the period; used to compute Gross/Net Yields and unit costs.
    context_ko: '회사 실적 발표 용어 정의에서 선실당 2인 점유에 기간 내 크루즈 일수를 곱한 공급량 지표로 정의되며, Gross/Net Yield와 단위 원가 계산에 사용된다.'
    relationship: same
  - provider: Carnival Corporation
    term: Available Lower Berth Days (ALBD)
    context: Carnival reports the same capacity concept under the label ALBD — lower berths available multiplied by the number of cruise days.
    context_ko: Carnival은 동일 공급량 개념을 ALBD라는 명칭으로 보고한다 — 이용 가능한 하부 침대 수에 크루즈 일수를 곱한 값.
    relationship: same
relationships:
  - type: related
    targetTerm: Net Yield
  - type: related
    targetTerm: RevPAR
  - type: related
    targetTerm: ADR
  - type: related
    targetTerm: Revenue Management
  - type: related
    targetTerm: Occupancy
  - type: related
    targetTerm: Cabin Category
distinctions:
  - targetTerm: Occupancy
    explanation: 'APCD is a fixed capacity measure (cabins available x 2 x days), whereas Occupancy is the utilization ratio computed against it (passenger cruise days / APCD). Because APCD assumes double occupancy, occupancy routinely exceeds 100% when cabins carry a third or fourth guest.'
    explanation_ko: 'APCD는 고정된 공급량 지표(이용 가능 선실 x 2 x 일수)인 반면, Occupancy는 그에 대비한 이용률(passenger cruise days / APCD)이다. APCD가 2인 점유를 가정하므로, 선실에 셋째·넷째 승객이 탑승하면 occupancy가 일상적으로 100%를 초과한다.'
  - targetTerm: RevPAR
    explanation: 'RevPAR normalizes hotel revenue per available room; APCD normalizes cruise capacity per available lower-berth-day (two berths per cabin). The cruise yield equivalent of RevPAR is Net Yield, which is net revenue per APCD rather than per room.'
    explanation_ko: 'RevPAR은 호텔 수익을 이용 가능 객실 단위로 정규화하지만, APCD는 크루즈 공급량을 이용 가능 하부침대-일(선실당 침대 2개) 단위로 정규화한다. RevPAR에 대응하는 크루즈 yield 지표는 객실당이 아니라 APCD당 순수익인 Net Yield다.'
sources:
  - org: Royal Caribbean Cruises Ltd.
    name: 'Earnings Release / SEC Filing — Terminology: Available Passenger Cruise Days (APCD)'
    version: ''
    section: Terminology / Selected Operating Data footnotes
    url: ''
  - org: Cruise Lines International Association (CLIA)
    name: Cruise Industry Terminology — capacity (double occupancy per cabin x cruise days)
    version: ''
    section: Terminology
    url: 'https://cruising.org/about-cruise-industry/terminology'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M6 32h36l-4 8H10z"/><path d="M14 32V14h12l6 6v12"/><line x1="18" y1="19" x2="22" y2="19"/><line x1="18" y1="24" x2="22" y2="24"/><circle cx="34" cy="24" r="5"/><polyline points="34 21 34 24 36 26"/></svg>
---

> The cruise industry's standard unit of capacity, equal to two passengers (double occupancy) per available cabin multiplied by the number of cruise days in the period. APCD is the denominator for virtually every cruise unit-revenue and unit-cost metric — Gross Yield, Net Yield, Net Cruise Cost per APCD and occupancy are all expressed per APCD — and is the cruise analogue of the airline's available seat mile or the hotel's available room night.

Cruise lines report APCD as their fundamental capacity figure in SEC filings and earnings releases. It is computed as double occupancy (two lower berths) per cabin times the number of days each cabin is available for sale in the period; lay-up, drydock and partial deployment reduce it. Because lower-berth double occupancy is the basis, occupancy can exceed 100% when third and fourth guests sail in a cabin. Every key cruise performance metric is normalized against APCD: Gross Yield (total revenue / APCD), Net Yield (net revenue / APCD), and Net Cruise Cost per APCD. This makes APCD the foundational denominator of cruise revenue management and the comparability unit across ships, brands and quarters. Some operators publish the equivalent figure under the label Available Lower Berth Days (ALBD).

**한국어 / Korean** — **이용가능 승객 크루즈 일수 (Available Passenger Cruise Days, APCD)** — 크루즈 산업 표준 좌석/객실 공급 단위로, 이용 가능한 선실당 2인(2인 1실 기준, double occupancy)에 해당 기간의 크루즈 운항 일수를 곱한 값이다. APCD는 거의 모든 크루즈 단위 수익·단위 원가 지표의 분모로, Gross Yield, Net Yield, APCD당 Net Cruise Cost, 점유율(occupancy)이 모두 APCD를 기준으로 산출된다. 항공의 ASM(available seat mile)이나 호텔의 available room night에 해당하는 크루즈 측 공급 단위다.

크루즈 선사는 APCD를 SEC 공시와 실적 발표에서 가장 기본이 되는 공급량 지표로 보고한다. 선실당 2인(하부 침대 2개 기준)에 해당 기간 동안 각 선실이 판매 가능한 일수를 곱해 산출하며, 운항 중단·드라이독·부분 배치는 APCD를 감소시킨다. 하부 침대 2인 점유를 기준으로 하기 때문에 셋째·넷째 승객이 함께 탑승하면 occupancy가 100%를 초과할 수 있다. 모든 핵심 크루즈 성과 지표가 APCD로 정규화되는데, Gross Yield(총수익/APCD), Net Yield(순수익/APCD), APCD당 Net Cruise Cost가 그 예다. 따라서 APCD는 크루즈 수익관리의 기초 분모이자 선박·브랜드·분기 간 비교 단위가 된다. 일부 선사는 동일 개념을 Available Lower Berth Days(ALBD)라는 명칭으로 공시한다.

**Aliases:** `APCD`, `Capacity Days`, `Available Lower Berth Days (ALBD)`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Royal Caribbean Cruises Ltd. | `Available Passenger Cruise Days (APCD)` | same | Defined in the company's earnings-release terminology as a measure of capacity representing double occupancy per cabin multiplied by the number of cruise days for the period; used to compute Gross/Net Yields and unit costs. |
| Carnival Corporation | `Available Lower Berth Days (ALBD)` | same | Carnival reports the same capacity concept under the label ALBD — lower berths available multiplied by the number of cruise days. |

# Related
- [Net Yield](/cruise/cruise/net-yield.md) — related
- [RevPAR](/lodging/hotel-rate/revpar.md) — related
- [ADR](/lodging/hotel-rate/adr.md) — related
- [Revenue Management](/air/air-shop/revenue-management.md) — related
- [Occupancy](/lodging/hotel-rate/occupancy.md) — related
- [Cabin Category](/cruise/cruise/cabin-category.md) — related

# Distinctions
- **Available Passenger Cruise Days (APCD)** vs [Occupancy](/lodging/hotel-rate/occupancy.md) — APCD is a fixed capacity measure (cabins available x 2 x days), whereas Occupancy is the utilization ratio computed against it (passenger cruise days / APCD). Because APCD assumes double occupancy, occupancy routinely exceeds 100% when cabins carry a third or fourth guest.
- **Available Passenger Cruise Days (APCD)** vs [RevPAR](/lodging/hotel-rate/revpar.md) — RevPAR normalizes hotel revenue per available room; APCD normalizes cruise capacity per available lower-berth-day (two berths per cabin). The cruise yield equivalent of RevPAR is Net Yield, which is net revenue per APCD rather than per room.

# Citations
[1] Royal Caribbean Cruises Ltd. — Earnings Release / SEC Filing — Terminology: Available Passenger Cruise Days (APCD) — Terminology / Selected Operating Data footnotes
[2] [Cruise Lines International Association (CLIA) — Cruise Industry Terminology — capacity (double occupancy per cabin x cruise days) — Terminology](https://cruising.org/about-cruise-industry/terminology)
