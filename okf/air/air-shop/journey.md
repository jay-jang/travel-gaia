---
type: Business Term
title: Journey
description: 'A journey is the complete travel a passenger undertakes from the point of origin to final destination, including all flights and any return or onward portions. In shopping and ordering it is the end-to-end itinerary against which offers are constructed.'
tags:
  - air-shop
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: journey
vertical: air
category: air-shop
conceptType: business-term
status: active
term_ko: 여정
definition_ko: '여정(journey)은 승객이 출발지에서 최종 목적지까지 수행하는 전체 여행으로, 모든 항공편과 귀환 또는 후속 구간을 포함한다. 쇼핑 및 주문(ordering) 단계에서는 오퍼가 구성되는 기준이 되는 처음부터 끝까지의 전체 일정이다.'
longDef: 'A journey encompasses one or more O&Ds: a one-way journey is a single O&D, a round trip is typically two O&Ds, and multi-city travel comprises several. For pricing, a journey is decomposed into fare components, each priced over an O&D, which are then summed. In NDC shopping, a journey (or origin-destination request) defines the trip for which offers and orders are produced. The journey aggregates segments and legs into the traveler''s overall trip view.'
longDef_ko: '여정은 하나 이상의 O&D를 포함한다. 편도 여정은 하나의 O&D이고, 왕복은 일반적으로 두 개의 O&D이며, 다구간(multi-city) 여행은 여러 개로 구성된다. 운임 산정 시 여정은 각각 O&D 단위로 가격이 매겨지는 운임 컴포넌트로 분해된 뒤 합산된다. NDC 쇼핑에서는 여정(또는 origin-destination 요청)이 오퍼와 주문이 생성되는 대상 여행을 정의한다. 여정은 세그먼트와 레그를 여행자의 전체 여행 관점으로 집계한다.'
standardBody: IATA
aliases:
  - Itinerary
  - Travel Journey
relationships:
  - type: related
    targetTerm: Origin & Destination
  - type: related
    targetTerm: Fare Component
  - type: related
    targetTerm: Segment
  - type: related
    targetTerm: Offer
  - type: related
    targetTerm: Order
distinctions:
  - targetTerm: Origin & Destination
    explanation: 'A journey is the whole trip; an O&D is a single directional point-pair, and a journey may contain several O&Ds.'
    explanation_ko: '여정은 전체 여행이고, O&D는 방향성을 가진 하나의 지점 쌍이며, 한 여정은 여러 O&D를 포함할 수 있다.'
  - targetTerm: Segment
    explanation: A segment is one priced/booked flight portion within a journey; the journey is the full set of segments end to end.
    explanation_ko: '세그먼트는 여정 내에서 가격이 매겨지거나 예약된 하나의 비행 구간이고, 여정은 처음부터 끝까지의 전체 세그먼트 집합이다.'
  - targetTerm: Itinerary
    explanation: 'A Journey is the fare/pricing concept describing the overall trip (e.g., one-way, round-trip, open-jaw) used in fare construction; the Itinerary is the concrete ordered list of booked segments. One itinerary realizes a journey but adds specific flights, dates and times.'
    explanation_ko: 'Journey는 운임 산출에서 쓰는 전체 여행의 운임 개념(편도, 왕복, open-jaw 등)이고, Itinerary는 예약된 segment의 구체적 순서 목록이다. 하나의 itinerary가 journey를 실현하되 구체적 편명·날짜·시간을 더한다.'
  - targetTerm: Multimodal Transport
    explanation: 'A Journey (in air pricing) is the routing structure of one trip, typically single-mode; multimodal transport explicitly spans multiple modes and operators, and is the organizing concept for the Rail & Multimodal category.'
    explanation_ko: '항공 가격 산정의 Journey는 보통 단일 수단인 한 여정의 라우팅 구조이고, multimodal transport는 명시적으로 여러 수단과 운영사를 아우르며 Rail & Multimodal 카테고리의 조직 개념이다.'
  - targetTerm: Pricing Unit
    explanation: 'A Journey is the whole travel from start to end; a Pricing Unit is a sub-portion of the journey priced as one entity, and a journey may contain several pricing units.'
    explanation_ko: 'Journey는 시작부터 끝까지의 전체 여행이고, Pricing Unit은 한 단위로 가격이 책정되는 여정의 하위 부분이며, 한 journey는 여러 pricing unit을 포함할 수 있다.'
sources:
  - name: IATA NDC / Offer and Order management standards
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/programs/airline-distribution/retailing/ndc/'
  - name: IATA fare construction principles
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/ticketing-handbook/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10 12h9a5 5 0 010 10H16a5 5 0 000 10h12"/><circle cx="10" cy="12" r="3"/><circle cx="38" cy="32" r="3"/><circle cx="24" cy="22" r="2"/></svg>
---

> A journey is the complete travel a passenger undertakes from the point of origin to final destination, including all flights and any return or onward portions. In shopping and ordering it is the end-to-end itinerary against which offers are constructed.

A journey encompasses one or more O&Ds: a one-way journey is a single O&D, a round trip is typically two O&Ds, and multi-city travel comprises several. For pricing, a journey is decomposed into fare components, each priced over an O&D, which are then summed. In NDC shopping, a journey (or origin-destination request) defines the trip for which offers and orders are produced. The journey aggregates segments and legs into the traveler's overall trip view.

**한국어 / Korean** — **여정** — 여정(journey)은 승객이 출발지에서 최종 목적지까지 수행하는 전체 여행으로, 모든 항공편과 귀환 또는 후속 구간을 포함한다. 쇼핑 및 주문(ordering) 단계에서는 오퍼가 구성되는 기준이 되는 처음부터 끝까지의 전체 일정이다.

여정은 하나 이상의 O&D를 포함한다. 편도 여정은 하나의 O&D이고, 왕복은 일반적으로 두 개의 O&D이며, 다구간(multi-city) 여행은 여러 개로 구성된다. 운임 산정 시 여정은 각각 O&D 단위로 가격이 매겨지는 운임 컴포넌트로 분해된 뒤 합산된다. NDC 쇼핑에서는 여정(또는 origin-destination 요청)이 오퍼와 주문이 생성되는 대상 여행을 정의한다. 여정은 세그먼트와 레그를 여행자의 전체 여행 관점으로 집계한다.

**Aliases:** `Itinerary`, `Travel Journey`

# Related
- [Origin & Destination](/air/air-shop/origin-destination.md) — related
- [Fare Component](/air/air-shop/fare-component.md) — related
- [Segment](/air/air-ops/segment.md) — related
- [Offer](/common/standards/offer.md) — related
- [Order](/common/standards/order.md) — related

# Distinctions
- **Journey** vs [Origin & Destination](/air/air-shop/origin-destination.md) — A journey is the whole trip; an O&D is a single directional point-pair, and a journey may contain several O&Ds.
- **Journey** vs [Segment](/air/air-ops/segment.md) — A segment is one priced/booked flight portion within a journey; the journey is the full set of segments end to end.
- **Journey** vs [Itinerary](/air/air-ops/itinerary.md) — A Journey is the fare/pricing concept describing the overall trip (e.g., one-way, round-trip, open-jaw) used in fare construction; the Itinerary is the concrete ordered list of booked segments. One itinerary realizes a journey but adds specific flights, dates and times.
- **Journey** vs [Multimodal Transport](/ground/rail/multimodal-transport.md) — A Journey (in air pricing) is the routing structure of one trip, typically single-mode; multimodal transport explicitly spans multiple modes and operators, and is the organizing concept for the Rail & Multimodal category.
- **Journey** vs [Pricing Unit](/air/air-shop/pricing-unit.md) — A Journey is the whole travel from start to end; a Pricing Unit is a sub-portion of the journey priced as one entity, and a journey may contain several pricing units.

# Citations
[1] [IATA — IATA NDC / Offer and Order management standards](https://www.iata.org/en/programs/airline-distribution/retailing/ndc/)
[2] [IATA — IATA fare construction principles](https://www.iata.org/en/publications/manuals/ticketing-handbook/)
