---
type: Metric
title: Bednight
description: 'A bednight (also "guest night" or "night spent") is a unit of hotel and tourism occupancy measurement representing one guest accommodated in one establishment for one night. It is the standard unit used by UNWTO, Eurostat, and national tourism organisations to measure and report accommodation demand volume, distinct from the room-based "room night" measure which counts rooms regardless of guest count.'
tags:
  - hotel-rate
  - active
  - UNWTO
timestamp: '2026-08-17T00:00:00Z'
id: bednight
vertical: lodging
category: hotel-rate
conceptType: metric
status: active
term_ko: 침대박수(Bednight) / 숙박 게스트박
definition_ko: 'Bednight(게스트 나이트 또는 숙박 박수)는 한 명의 숙박객이 하나의 숙박 시설에서 1박을 한 단위를 나타내는 호텔 및 관광 점유 측정 지표다. UNWTO, Eurostat, 각국 관광 기관이 숙박 수요 규모를 측정·보고할 때 사용하는 표준 단위로, 숙박객 수와 무관하게 객실 단위로 집계하는 "room night"과 구별된다.'
longDef: 'A bednight equals one guest multiplied by one overnight stay: if two guests stay for three nights in one hotel, the property records 6 bednights but only 3 room nights. Eurostat and UNWTO use "nights spent" as the canonical statistic, published in national tourism satellite accounts and accommodation occupancy surveys. Bednights are used in: (1) destination capacity planning and tourism impact studies; (2) hotel performance contracts and allotment agreements that reference minimum guaranteed bednights; (3) tour-operator contracting, where a block of bednights is pre-purchased at a contracted net rate. Average Length of Stay (ALOS) = Total Bednights / Total Arrivals. The term "guest night" (used in UK/Ireland statistics) and "overnight stay" (EU/OECD) are direct synonyms; "room night" counts the room unit rather than each guest and is preferred in hotel revenue accounting.'
longDef_ko: 'Bednight는 숙박객 1명 × 1박을 1단위로 한다. 예를 들어 2명이 한 호텔에 3박 투숙하면 6 bednight지만 room night는 3이다. Eurostat와 UNWTO는 "nights spent(숙박 박수)"를 국가 관광 위성 계정 및 숙박 점유 조사에서 정식 통계 단위로 발표한다. Bednight는 (1) 목적지 수용 계획 및 관광 영향 연구, (2) 최소 보장 bednight를 참조하는 호텔 성과 계약·할당 계약, (3) 계약된 순 요금으로 일정 블록의 bednight를 사전 구매하는 투어 오퍼레이터 계약에 사용된다. 평균 체류 기간(ALOS) = 총 bednight / 총 도착 수. 영국·아일랜드 통계의 "guest night"와 EU/OECD의 "overnight stay"는 동의어이며, "room night"는 숙박객 수가 아닌 객실 단위를 세는 것으로 호텔 수익 회계에서 선호된다.'
standardBody: UNWTO
aliases:
  - Guest Night
  - Night Spent
  - Overnight Stay
  - Nights Spent
providerTerms:
  - provider: Eurostat
    term: Nights spent
    context: 'Eurostat uses "nights spent" as the official statistical term in the EU tourism statistics framework (Regulation EC 692/2011), counting each guest-night as one unit in accommodation occupancy surveys.'
    context_ko: 'Eurostat는 EU 관광 통계 프레임워크(규정 EC 692/2011)에서 "nights spent"를 공식 통계 용어로 사용하며, 숙박 점유 조사에서 각 게스트-나이트를 1단위로 집계한다.'
    relationship: same
  - provider: UNWTO
    term: Tourism nights / Nights spent
    context: 'UN Tourism publishes "nights spent" in accommodation as a core indicator in its Tourism Statistics Database, distinguishing it from "arrivals" (check-ins) as the volume measure.'
    context_ko: 'UN Tourism은 Tourism Statistics Database에서 "nights spent"를 핵심 지표로 발표하며, 입수(체크인) 수와 구별되는 규모 측정 지표로 사용한다.'
    relationship: same
  - provider: STR (CoStar)
    term: Room Nights Sold
    context: 'STR hotel benchmarking data uses "room nights sold" (not bednights) as the demand denominator in occupancy, ADR and RevPAR calculations — counting rooms, not the number of guests per room.'
    context_ko: 'STR 호텔 벤치마킹 데이터는 점유율·ADR·RevPAR 산출의 수요 분모로 bednight 대신 "room nights sold"를 사용하며, 객실당 투숙객 수가 아닌 객실 수를 집계한다.'
    relationship: related
relationships:
  - type: related
    targetTerm: Occupancy
  - type: related
    targetTerm: Average Length of Stay (ALOS)
  - type: related
    targetTerm: Length of Stay
  - type: related
    targetTerm: ADR
  - type: related
    targetTerm: RevPAR
distinctions:
  - targetTerm: Occupancy
    explanation: 'Bednights is an absolute volume count (total guest-nights in a period); Occupancy Rate is a ratio (rooms sold ÷ rooms available × 100%) measuring how full a property is. A destination can report growing bednights while occupancy rate remains flat if capacity has also expanded.'
    explanation_ko: 'Bednight는 절대적 볼륨 카운트(기간 내 총 게스트-나이트)이고, 점유율(Occupancy Rate)은 숙소의 판매 비율(판매 객실 ÷ 가용 객실 × 100%)을 나타낸다. 수용 능력이 확장되면 bednight가 늘어나도 점유율이 제자리일 수 있다.'
  - targetTerm: ADR
    explanation: 'ADR is a revenue metric (total room revenue ÷ rooms sold); bednights is a demand-volume metric. A high ADR with low bednights indicates a luxury, low-volume market; a low ADR with high bednights indicates a mass-market, high-volume one.'
    explanation_ko: 'ADR은 수익 지표(총 객실 수익 ÷ 판매 객실)이고, bednight는 수요 볼륨 지표이다. ADR이 높고 bednight가 낮으면 럭셔리 소량 시장, ADR이 낮고 bednight가 높으면 대중 다량 시장을 의미한다.'
  - targetTerm: Average Length of Stay (ALOS)
    explanation: 'ALOS = Total Bednights ÷ Total Arrivals; bednights is one of the two inputs (along with arrivals/check-ins) from which ALOS is derived. They measure complementary aspects: bednights total volume, ALOS average visit duration.'
    explanation_ko: 'ALOS = 총 bednight ÷ 총 도착 수이므로 bednight는 도착 수(체크인)와 함께 ALOS를 도출하는 두 입력 중 하나이다. bednight는 총 볼륨을, ALOS는 평균 방문 기간을 측정한다.'
sources:
  - name: Glossary — Nights spent (Eurostat Statistics Explained)
    org: Eurostat
    version: ''
    section: ''
    url: 'https://ec.europa.eu/eurostat/statistics-explained/index.php/Glossary:Nights_spent'
    tier: regulator-guidance
  - name: Tourism Statistics — Accommodation Demand and Capacity
    org: UNWTO (UN Tourism)
    version: ''
    section: ''
    url: 'https://www.untourism.int/tourism-data/accommodation-demand-capacity'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="24" width="28" height="14" rx="2"/><line x1="6" y1="30" x2="34" y2="30"/><rect x="12" y="20" width="8" height="10" rx="1"/><path d="M38 10a8 8 0 0 0-5 14.5"/><path d="M38 10l2 4M38 10l-2 4"/></svg>
---

> A bednight (also "guest night" or "night spent") is a unit of hotel and tourism occupancy measurement representing one guest accommodated in one establishment for one night. It is the standard unit used by UNWTO, Eurostat, and national tourism organisations to measure and report accommodation demand volume, distinct from the room-based "room night" measure which counts rooms regardless of guest count.

A bednight equals one guest multiplied by one overnight stay: if two guests stay for three nights in one hotel, the property records 6 bednights but only 3 room nights. Eurostat and UNWTO use "nights spent" as the canonical statistic, published in national tourism satellite accounts and accommodation occupancy surveys. Bednights are used in destination capacity planning and tourism impact studies; hotel performance contracts and allotment agreements that reference minimum guaranteed bednights; and tour-operator contracting, where a block of bednights is pre-purchased at a contracted net rate. Average Length of Stay (ALOS) = Total Bednights / Total Arrivals. The term "guest night" (UK/Ireland statistics) and "overnight stay" (EU/OECD) are direct synonyms; "room night" counts the room unit rather than each guest and is preferred in hotel revenue accounting.

**한국어 / Korean** — **침대박수(Bednight)** — Bednight(게스트 나이트 또는 숙박 박수)는 한 명의 숙박객이 하나의 숙박 시설에서 1박을 한 단위를 나타내는 호텔 및 관광 점유 측정 지표다. UNWTO, Eurostat, 각국 관광 기관이 숙박 수요 규모를 측정·보고할 때 사용하는 표준 단위로, 숙박객 수와 무관하게 객실 단위로 집계하는 "room night"과 구별된다.

Bednight = 투숙객 1명 × 1박. 2명이 3박 투숙 시 6 bednight, 3 room night. Eurostat와 UNWTO는 "nights spent"를 공식 통계 단위로 발표한다. ALOS = 총 bednight ÷ 총 도착 수.

**Aliases:** `Guest Night`, `Night Spent`, `Overnight Stay`, `Nights Spent`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Eurostat | `Nights spent` | same | Eurostat uses "nights spent" in EU tourism statistics regulation (EC 692/2011), each guest-night = 1 unit |
| UNWTO | `Tourism nights / Nights spent` | same | UN Tourism publishes "nights spent" as a core accommodation demand indicator |
| STR (CoStar) | `Room Nights Sold` | related | STR benchmarking uses room nights (not guest nights) as the occupancy/ADR/RevPAR denominator |

# Related
- [Occupancy](/lodging/hotel-rate/occupancy.md) — related
- [Average Length of Stay (ALOS)](/lodging/hotel-rate/average-length-of-stay.md) — related
- [Length of Stay](/lodging/hotel-rate/length-of-stay.md) — related
- [ADR](/lodging/hotel-rate/adr.md) — related
- [RevPAR](/lodging/hotel-rate/revpar.md) — related

# Distinctions
- **Bednight** vs [Occupancy](/lodging/hotel-rate/occupancy.md) — Bednights is an absolute volume count (total guest-nights in a period); Occupancy Rate is a ratio measuring how full a property is. Growing bednights with flat occupancy indicates capacity expansion.
- **Bednight** vs [ADR](/lodging/hotel-rate/adr.md) — ADR is a revenue metric (room revenue ÷ rooms sold); bednights is a demand-volume count. High ADR + low bednights = luxury market; low ADR + high bednights = mass market.
- **Bednight** vs [Average Length of Stay (ALOS)](/lodging/hotel-rate/average-length-of-stay.md) — ALOS = Total Bednights ÷ Total Arrivals; bednights is one of the two inputs from which ALOS is derived.

# Citations
[1] [Eurostat — Glossary: Nights spent (Statistics Explained)](https://ec.europa.eu/eurostat/statistics-explained/index.php/Glossary:Nights_spent)
[2] [UNWTO (UN Tourism) — Tourism Statistics: Accommodation Demand and Capacity](https://www.untourism.int/tourism-data/accommodation-demand-capacity)
