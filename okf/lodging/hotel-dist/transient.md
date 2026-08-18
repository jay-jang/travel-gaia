---
type: Standard Term
title: Transient
description: 'In lodging revenue management and accounting, Transient refers to the market segment comprising individual guests who book independently — not as part of a group block or definite group contract. The transient segment includes leisure travelers paying the Best Available Rate, individual business travelers on negotiated corporate rates, and retail customers paying rack or promotional rates.'
tags:
  - hotel-dist
  - active
timestamp: '2026-08-18T00:00:00Z'
id: transient
vertical: lodging
category: hotel-dist
conceptType: standard-term
status: active
term_ko: '트랜지언트(개인 예약 세그먼트)'
definition_ko: '숙박 수익 관리 및 회계에서 Transient(트랜지언트)는 그룹 블록이나 확정 그룹 계약의 일부가 아닌 개인 자격으로 예약하는 게스트로 구성된 시장 세그먼트를 말한다. 트랜지언트 세그먼트에는 Best Available Rate(최선 가용 요금)를 지불하는 레저 여행객, 협상된 법인 요금을 이용하는 개인 출장자, 정가 또는 프로모션 요금을 지불하는 소매 고객이 포함된다.'
longDef: 'The Uniform System of Accounts for the Lodging Industry (USALI) divides rooms revenue into two primary segments: Transient and Group. Transient revenue encompasses all individual guest bookings that are not part of a group block. Within transient, most hotels track sub-segments such as retail/leisure (guests paying BAR or promotional rates), corporate (individual business travelers on negotiated rates), and qualifying (discount-eligible guests such as senior, AAA/CAA, government). Because transient guests book closer to the arrival date and are more price-sensitive than groups, they are central to short-term demand optimization. Revenue management systems apply dynamic pricing tools — BAR, booking pace, length-of-stay controls — primarily against the transient segment, while group business is managed via block and pickup tracking.'
longDef_ko: '미국 숙박업계 통일 회계 기준(USALI)은 객실 수익을 크게 Transient(개인)와 Group(단체)으로 나눈다. Transient 수익은 그룹 블록에 속하지 않는 모든 개인 게스트 예약을 포괄한다. 트랜지언트 내에서 대부분의 호텔은 소매/레저(BAR 또는 프로모션 요금 지불 고객), 법인(협상 요금 이용 개인 출장자), 적격 할인(시니어·AAA/CAA·정부 등 할인 자격 고객) 등 세부 세그먼트를 추적한다. 트랜지언트 게스트는 단체에 비해 도착 날짜 가까이 예약하고 가격에 더 민감하므로 단기 수요 최적화의 핵심이다. 수익 관리 시스템은 BAR·예약 속도·숙박 기간 제어 등 동적 요금 도구를 주로 트랜지언트 세그먼트에 적용하고, 단체 영업은 블록 및 픽업 추적으로 별도 관리한다.'
aliases:
  - Transient Segment
  - Individual Segment
  - Transient Guest
  - Non-Group Segment
providerTerms:
  - provider: USALI / AHLA
    term: Transient Rooms Revenue
    context: 'USALI classifies rooms revenue as Transient or Group; transient encompasses all individual bookings outside a group block, further sub-segmented into retail, corporate, and qualifying categories.'
    context_ko: 'USALI는 객실 수익을 Transient(개인)와 Group(단체)으로 분류한다. 트랜지언트는 그룹 블록 외 모든 개인 예약을 포괄하며, 소매·법인·적격 할인 세부 세그먼트로 나뉜다.'
    relationship: same
  - provider: STR / CoStar
    term: Transient
    context: 'STR benchmarking reports segment hotel demand into transient and group to allow competitive-set comparisons of individual-booking demand and pricing performance.'
    context_ko: 'STR 벤치마킹 리포트는 호텔 수요를 트랜지언트와 그룹으로 분류해, 개인 예약 수요 및 요금 성과에 대한 competitive-set 비교를 지원한다.'
    relationship: same
relationships:
  - type: related
    targetTerm: Group Block
  - type: related
    targetTerm: ADR
  - type: related
    targetTerm: RevPAR
  - type: related
    targetTerm: Occupancy
  - type: related
    targetTerm: FIT
  - type: related
    targetTerm: Revenue Management
distinctions:
  - targetTerm: Group Block
    explanation: 'A Group Block is a contracted set of rooms reserved for a named group at an agreed rate; transient refers to all individual, non-group bookings. Transient guests book independently through retail channels, while group guests book against a pre-negotiated block with a fixed cut-off date and attrition clause.'
    explanation_ko: 'Group Block은 합의된 요금으로 특정 단체를 위해 예약된 계약 객실 세트이고, 트랜지언트는 단체가 아닌 모든 개인 예약을 가리킨다. 트랜지언트 게스트는 소매 채널을 통해 독립적으로 예약하는 반면, 단체 게스트는 마감일·위약금 조항이 있는 사전 협상된 블록을 통해 예약한다.'
  - targetTerm: FIT
    explanation: 'FIT (Free Independent Traveler) is a sub-type within the transient segment — an individual or couple traveling on a custom itinerary without escorted group services. All FIT bookings are transient, but not all transient bookings are FIT; corporate travelers or walk-ins are also transient but not typically called FIT.'
    explanation_ko: 'FIT(Free Independent Traveler)는 트랜지언트 세그먼트 내 하위 유형으로, 에스코트 단체 서비스 없이 맞춤형 여정을 여행하는 개인 또는 커플이다. 모든 FIT 예약은 트랜지언트이지만, 모든 트랜지언트 예약이 FIT는 아니다. 법인 출장자나 당일 투숙객도 트랜지언트이지만 일반적으로 FIT라고 부르지 않는다.'
sources:
  - org: HFTP / AHLA
    name: 'Uniform System of Accounts for the Lodging Industry (USALI), 11th Edition — Rooms Revenue'
    version: '11th Edition'
    section: 'Chapter 1 — Revenues: Rooms'
    url: 'https://www.hftp.org/publications/usali/'
    tier: association
  - org: HSMAI
    name: HSMAI Revenue Management Glossary — Transient Segment
    version: ''
    section: ''
    url: 'https://hsmai.org/knowledge/glossary/'
    tier: association
  - org: STR / CoStar
    name: Hotel Industry Benchmarking Glossary
    version: ''
    section: 'Transient'
    url: 'https://str.com/data-insights/str-glossary'
    tier: secondary
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="11" r="6"/><path d="M14 42v-9a10 10 0 0 1 20 0v9"/><line x1="8" y1="42" x2="40" y2="42"/><line x1="24" y1="33" x2="24" y2="42"/></svg>
---

> In lodging revenue management and accounting, Transient refers to the market segment comprising individual guests who book independently — not as part of a group block or definite group contract. The transient segment includes leisure travelers paying the Best Available Rate, individual business travelers on negotiated corporate rates, and retail customers paying rack or promotional rates.

The Uniform System of Accounts for the Lodging Industry (USALI) divides rooms revenue into two primary segments: Transient and Group. Transient revenue encompasses all individual guest bookings that are not part of a group block. Within transient, most hotels track sub-segments such as retail/leisure (guests paying BAR or promotional rates), corporate (individual business travelers on negotiated rates), and qualifying (discount-eligible guests such as senior, AAA/CAA, government). Because transient guests book closer to the arrival date and are more price-sensitive than groups, they are central to short-term demand optimization. Revenue management systems apply dynamic pricing tools — BAR, booking pace, length-of-stay controls — primarily against the transient segment, while group business is managed via block and pickup tracking.

**한국어 / Korean** — **트랜지언트(개인 예약 세그먼트)** — 숙박 수익 관리 및 회계에서 Transient(트랜지언트)는 그룹 블록이나 확정 그룹 계약의 일부가 아닌 개인 자격으로 예약하는 게스트로 구성된 시장 세그먼트를 말한다. 트랜지언트 세그먼트에는 Best Available Rate(최선 가용 요금)를 지불하는 레저 여행객, 협상된 법인 요금을 이용하는 개인 출장자, 정가 또는 프로모션 요금을 지불하는 소매 고객이 포함된다.

USALI는 객실 수익을 크게 Transient(개인)와 Group(단체)으로 나눈다. Transient 수익은 그룹 블록에 속하지 않는 모든 개인 게스트 예약을 포괄한다. 트랜지언트 내에서 대부분의 호텔은 소매/레저·법인·적격 할인 등 세부 세그먼트를 추적한다. 트랜지언트 게스트는 단체에 비해 도착 날짜 가까이 예약하고 가격에 더 민감하므로 단기 수요 최적화의 핵심이다. 수익 관리 시스템은 BAR·예약 속도·숙박 기간 제어 등 동적 요금 도구를 주로 트랜지언트 세그먼트에 적용하고, 단체 영업은 블록 및 픽업 추적으로 별도 관리한다.

**Aliases:** `Transient Segment`, `Individual Segment`, `Transient Guest`, `Non-Group Segment`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| USALI / AHLA | `Transient Rooms Revenue` | same | USALI classifies rooms revenue as Transient or Group; transient encompasses all individual bookings outside a group block, further sub-segmented into retail, corporate, and qualifying categories. |
| STR / CoStar | `Transient` | same | STR benchmarking reports segment hotel demand into transient and group to allow competitive-set comparisons of individual-booking demand and pricing performance. |

# Related
- [Group Block](/lodging/hotel-rate/group-block.md) — related
- [ADR](/lodging/hotel-rate/adr.md) — related
- [RevPAR](/lodging/hotel-rate/revpar.md) — related
- [Occupancy](/lodging/hotel-rate/occupancy.md) — related
- [FIT](/tours/tour-ops/fit.md) — related
- [Revenue Management](/common/standards/revenue-management.md) — related

# Distinctions
- **Transient** vs [Group Block](/lodging/hotel-rate/group-block.md) — A Group Block is a contracted set of rooms reserved for a named group at an agreed rate; transient refers to all individual, non-group bookings. Transient guests book independently through retail channels, while group guests book against a pre-negotiated block with a fixed cut-off date and attrition clause.
- **Transient** vs [FIT](/tours/tour-ops/fit.md) — FIT (Free Independent Traveler) is a sub-type within the transient segment — an individual or couple traveling on a custom itinerary without escorted group services. All FIT bookings are transient, but not all transient bookings are FIT; corporate travelers or walk-ins are also transient but not typically called FIT.

# Citations
[1] [HFTP / AHLA — Uniform System of Accounts for the Lodging Industry (USALI), 11th Edition — Rooms Revenue](https://www.hftp.org/publications/usali/)
[2] [HSMAI — HSMAI Revenue Management Glossary — Transient Segment](https://hsmai.org/knowledge/glossary/)
[3] [STR / CoStar — Hotel Industry Benchmarking Glossary](https://str.com/data-insights/str-glossary)
