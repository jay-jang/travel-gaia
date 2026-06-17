---
type: Business Term
title: Through Fare
description: 'A single published fare covering carriage between an origin and a final destination over the whole journey, including any intermediate connecting points, rather than the sum of separate local fares for each segment. Through fares are filed and priced as one product and are commonly lower than adding up point-to-point fares.'
tags:
  - air-partner
  - active
timestamp: '2026-06-17T00:00:00Z'
id: through-fare
vertical: air
category: air-partner
conceptType: business-term
status: active
term_ko: 일관 운임(스루 페어)
definition_ko: '각 구간별 개별 로컬 운임의 합이 아니라, 중간 연결 지점을 포함한 여정 전체에 대해 출발지와 최종 목적지 간 운송을 포괄하는 단일 공시 운임. 일관 운임은 하나의 상품으로 신고·책정되며, 흔히 구간별(point-to-point) 운임을 합산한 것보다 저렴하다.'
longDef: 'Through fares are central to multi-segment and multi-carrier pricing: a fare component is priced from origin to destination as a through fare, and on interline or codeshare itineraries the through fare''s value is then divided among carriers via proration, often using Special Prorate Agreements. Through fares enable the hub-and-spoke and connecting models by giving travelers one competitive price for the entire trip rather than penalizing connections. They are filed through fare-distribution systems such as ATPCO and applied by pricing engines according to the relevant fare rules.'
longDef_ko: '일관 운임은 다구간·다중 항공사 운임 책정의 핵심이다. 운임 구성요소(fare component)는 출발지에서 목적지까지 일관 운임으로 책정되며, 인터라인 또는 공동운항 여정에서는 그 일관 운임 값이 흔히 SPA(Special Prorate Agreement)를 사용한 프로레이션을 통해 항공사 간에 분배된다. 일관 운임은 여행객에게 여정 전체에 대한 하나의 경쟁력 있는 가격을 제공하여 연결을 불리하게 하지 않음으로써 허브 앤 스포크 및 연결 모델을 가능하게 한다. 이는 ATPCO와 같은 운임 배포 시스템을 통해 신고되며, 관련 운임 규정에 따라 운임 계산 엔진이 적용한다.'
aliases:
  - Through-Fare
  - Thru Fare
providerTerms:
  - provider: ATPCO
    term: Through fare
    context: Through fares are filed in ATPCO's fare database and applied under ATPCO fare rules categories.
    context_ko: 일관 운임은 ATPCO 운임 데이터베이스에 신고되어 ATPCO 운임 규정 카테고리에 따라 적용된다.
    relationship: related
relationships:
  - type: related
    targetTerm: Fare Component
  - type: related
    targetTerm: Proration
  - type: related
    targetTerm: Origin & Destination
  - type: related
    targetTerm: ATPCO
  - type: related
    targetTerm: Connection
  - type: related
    targetTerm: Interline
distinctions:
  - targetTerm: Proration
    explanation: A through fare is the single end-to-end price charged to the passenger; proration is the back-office process of splitting that fare's revenue among the carriers that operated the journey.
    explanation_ko: '일관 운임은 승객에게 부과되는 출발지-목적지 단일 가격이고, 프로레이션은 그 운임 수익을 여정을 운송한 항공사들 간에 나누는 후방(back-office) 처리다.'
  - targetTerm: Fare Component
    explanation: A fare component is the priced portion of an itinerary to which a fare applies; a through fare is a fare type that prices an origin-to-destination component as one continuous fare across intermediate points.
    explanation_ko: '운임 구성요소는 운임이 적용되는 여정의 일부 구간이고, 일관 운임은 중간 지점들을 가로질러 출발지-목적지 구성요소를 하나의 연속 운임으로 책정하는 운임 유형이다.'
sources:
  - name: Airline industry glossary — Through fare
    org: ATPCO
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="34" r="3"/><circle cx="24" cy="34" r="3"/><circle cx="40" cy="34" r="3"/><line x1="11" y1="34" x2="21" y2="34"/><line x1="27" y1="34" x2="37" y2="34"/><path d="M8 22 q16 -16 32 0"/><line x1="8" y1="22" x2="8" y2="18"/><line x1="40" y1="22" x2="40" y2="18"/></svg>
---

> A single published fare covering carriage between an origin and a final destination over the whole journey, including any intermediate connecting points, rather than the sum of separate local fares for each segment. Through fares are filed and priced as one product and are commonly lower than adding up point-to-point fares.

Through fares are central to multi-segment and multi-carrier pricing: a fare component is priced from origin to destination as a through fare, and on interline or codeshare itineraries the through fare's value is then divided among carriers via proration, often using Special Prorate Agreements. Through fares enable the hub-and-spoke and connecting models by giving travelers one competitive price for the entire trip rather than penalizing connections. They are filed through fare-distribution systems such as ATPCO and applied by pricing engines according to the relevant fare rules.

**한국어 / Korean** — **일관 운임(스루 페어)** — 각 구간별 개별 로컬 운임의 합이 아니라, 중간 연결 지점을 포함한 여정 전체에 대해 출발지와 최종 목적지 간 운송을 포괄하는 단일 공시 운임. 일관 운임은 하나의 상품으로 신고·책정되며, 흔히 구간별(point-to-point) 운임을 합산한 것보다 저렴하다.

일관 운임은 다구간·다중 항공사 운임 책정의 핵심이다. 운임 구성요소(fare component)는 출발지에서 목적지까지 일관 운임으로 책정되며, 인터라인 또는 공동운항 여정에서는 그 일관 운임 값이 흔히 SPA(Special Prorate Agreement)를 사용한 프로레이션을 통해 항공사 간에 분배된다. 일관 운임은 여행객에게 여정 전체에 대한 하나의 경쟁력 있는 가격을 제공하여 연결을 불리하게 하지 않음으로써 허브 앤 스포크 및 연결 모델을 가능하게 한다. 이는 ATPCO와 같은 운임 배포 시스템을 통해 신고되며, 관련 운임 규정에 따라 운임 계산 엔진이 적용한다.

**Aliases:** `Through-Fare`, `Thru Fare`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| ATPCO | `Through fare` | related | Through fares are filed in ATPCO's fare database and applied under ATPCO fare rules categories. |

# Related
- [Fare Component](/air/air-shop/fare-component.md) — related
- [Proration](/air/air-partner/proration.md) — related
- [Origin & Destination](/air/air-shop/origin-destination.md) — related
- [ATPCO](/air/air-shop/atpco.md) — related
- [Connection](/air/air-partner/connection.md) — related
- [Interline](/air/air-partner/interline.md) — related

# Distinctions
- **Through Fare** vs [Proration](/air/air-partner/proration.md) — A through fare is the single end-to-end price charged to the passenger; proration is the back-office process of splitting that fare's revenue among the carriers that operated the journey.
- **Through Fare** vs [Fare Component](/air/air-shop/fare-component.md) — A fare component is the priced portion of an itinerary to which a fare applies; a through fare is a fare type that prices an origin-to-destination component as one continuous fare across intermediate points.

# Citations
[1] ATPCO — Airline industry glossary — Through fare
