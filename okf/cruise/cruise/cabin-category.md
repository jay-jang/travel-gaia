---
type: Business Term
title: Cabin Category
description: 'The graded class of stateroom that forms the fundamental unit of cruise inventory and pricing. Cruise fares are quoted per person against a category — broadly interior, oceanview, balcony, and suite, each split into numbered or lettered sub-grades by deck, location, and size — so the category is the cruise analogue of a hotel Room Type and the anchor of every cruise booking.'
tags:
  - cruise
  - active
  - OpenTravel Alliance
timestamp: '2026-06-17T00:00:00Z'
id: cabin-category
vertical: cruise
category: cruise
conceptType: business-term
status: active
term_ko: 선실 카테고리(Cabin Category)
definition_ko: '크루즈 재고와 가격 책정의 기본 단위가 되는 등급화된 선실 분류이다. 크루즈 운임은 카테고리를 기준으로 1인당 책정되며, 크게 내측(interior)·해측(oceanview)·발코니(balcony)·스위트(suite)로 나뉘고 각 등급은 갑판 위치·구역·크기에 따라 숫자나 알파벳 하위 등급으로 다시 세분된다. 따라서 cabin category는 호텔의 Room Type에 해당하는 개념이자 모든 크루즈 예약의 기준점이다.'
longDef: 'A cruise line publishes a category ladder: a small number of meta-categories (interior, oceanview, balcony, suite, plus specialty tiers such as concierge or ship-within-a-ship suites) each divided into many fare-graded sub-categories that differ by deck, midship-versus-forward location, square footage, obstructed view, and connecting-cabin status. Inventory is held and sold at the sub-category level, and the per-person double-occupancy fare attaches to it. Distribution systems and the OpenTravel cruise message set express availability, pricing, and holds against these category codes, and a Guarantee (GTY) booking sells a guaranteed minimum category without a specific cabin number.'
longDef_ko: '크루즈 선사는 카테고리 사다리를 공표한다. 즉 소수의 상위 카테고리(내측·해측·발코니·스위트, 그리고 컨시어지나 ship-within-a-ship 스위트 같은 특수 등급)를 두고, 각 카테고리를 갑판, 선체 중앙 대 선수 위치, 면적, 시야 차단 여부, 연결 선실 여부에 따라 다수의 운임 등급 하위 카테고리로 나눈다. 재고는 하위 카테고리 단위로 보유·판매되며 1인당 2인 기준 운임이 여기에 연결된다. 유통 시스템과 OpenTravel 크루즈 메시지 셋은 이 카테고리 코드를 기준으로 가용성·가격·홀드를 표현하며, Guarantee(GTY) 예약은 특정 선실 번호 없이 보장 최저 카테고리를 판매한다.'
standardBody: OpenTravel Alliance
aliases:
  - Stateroom Category
  - Cabin Grade
  - Stateroom Grade
  - Cabin Class
relationships:
  - type: sameAs
    targetTerm: Room Type
  - type: narrower
    targetTerm: Guarantee Cabin (GTY)
  - type: related
    targetTerm: Single Supplement
  - type: contrasts
    targetTerm: Availability
  - type: related
    targetTerm: Revenue Management
distinctions:
  - targetTerm: Room Type
    explanation: Cabin Category is the cruise term for the same concept as a hotel Room Type — a graded physical product against which a rate is quoted — but cruise categories are typically far more numerous and finely graded (often dozens of sub-categories) and are priced per person on double occupancy rather than per room.
    explanation_ko: 'Cabin Category는 호텔의 Room Type과 동일한 개념(요금이 매겨지는 등급화된 실제 상품)에 대한 크루즈 용어이지만, 크루즈 카테고리는 보통 훨씬 더 많고 세밀하게 등급화되며(흔히 수십 개의 하위 카테고리) 객실당이 아니라 2인 기준 1인당으로 가격이 책정된다.'
  - targetTerm: Guarantee Cabin (GTY)
    explanation: A cabin category is the named grade itself; a Guarantee (GTY) is a booking method that locks a guaranteed minimum category while deferring assignment of the specific cabin within or above it.
    explanation_ko: 'cabin category는 명명된 등급 자체이고, Guarantee(GTY)는 보장 최저 카테고리를 확정하되 그 안 또는 그 이상에서 특정 선실 배정을 나중으로 미루는 예약 방식이다.'
sources:
  - name: Cruising Terms (cruise glossary)
    org: Cruise industry
    version: ''
    section: ''
    url: ''
  - name: 'OpenTravel Specification (cruise message set: cabin category availability and pricing)'
    org: OpenTravel Alliance
    version: ''
    section: ''
    url: 'https://opentravel.org/download-specs/'
  - name: Room Types & Included Amenities (cruise FAQ)
    org: Cruise industry
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="10" width="32" height="28" rx="2"/><line x1="8" y1="24" x2="40" y2="24"/><line x1="24" y1="10" x2="24" y2="38"/><circle cx="16" cy="17" r="2.5"/><circle cx="32" cy="17" r="2.5"/></svg>
---

> The graded class of stateroom that forms the fundamental unit of cruise inventory and pricing. Cruise fares are quoted per person against a category — broadly interior, oceanview, balcony, and suite, each split into numbered or lettered sub-grades by deck, location, and size — so the category is the cruise analogue of a hotel Room Type and the anchor of every cruise booking.

A cruise line publishes a category ladder: a small number of meta-categories (interior, oceanview, balcony, suite, plus specialty tiers such as concierge or ship-within-a-ship suites) each divided into many fare-graded sub-categories that differ by deck, midship-versus-forward location, square footage, obstructed view, and connecting-cabin status. Inventory is held and sold at the sub-category level, and the per-person double-occupancy fare attaches to it. Distribution systems and the OpenTravel cruise message set express availability, pricing, and holds against these category codes, and a Guarantee (GTY) booking sells a guaranteed minimum category without a specific cabin number.

**한국어 / Korean** — **선실 카테고리(Cabin Category)** — 크루즈 재고와 가격 책정의 기본 단위가 되는 등급화된 선실 분류이다. 크루즈 운임은 카테고리를 기준으로 1인당 책정되며, 크게 내측(interior)·해측(oceanview)·발코니(balcony)·스위트(suite)로 나뉘고 각 등급은 갑판 위치·구역·크기에 따라 숫자나 알파벳 하위 등급으로 다시 세분된다. 따라서 cabin category는 호텔의 Room Type에 해당하는 개념이자 모든 크루즈 예약의 기준점이다.

크루즈 선사는 카테고리 사다리를 공표한다. 즉 소수의 상위 카테고리(내측·해측·발코니·스위트, 그리고 컨시어지나 ship-within-a-ship 스위트 같은 특수 등급)를 두고, 각 카테고리를 갑판, 선체 중앙 대 선수 위치, 면적, 시야 차단 여부, 연결 선실 여부에 따라 다수의 운임 등급 하위 카테고리로 나눈다. 재고는 하위 카테고리 단위로 보유·판매되며 1인당 2인 기준 운임이 여기에 연결된다. 유통 시스템과 OpenTravel 크루즈 메시지 셋은 이 카테고리 코드를 기준으로 가용성·가격·홀드를 표현하며, Guarantee(GTY) 예약은 특정 선실 번호 없이 보장 최저 카테고리를 판매한다.

**Aliases:** `Stateroom Category`, `Cabin Grade`, `Stateroom Grade`, `Cabin Class`

# Related
- [Room Type](/lodging/hotel-rate/room-type.md) — sameAs
- [Guarantee Cabin (GTY)](/cruise/cruise/guarantee-cabin-gty.md) — narrower
- [Single Supplement](/cruise/cruise/single-supplement.md) — related
- [Availability](/air/air-shop/availability.md) — contrasts
- [Revenue Management](/air/air-shop/revenue-management.md) — related

# Distinctions
- **Cabin Category** vs [Room Type](/lodging/hotel-rate/room-type.md) — Cabin Category is the cruise term for the same concept as a hotel Room Type — a graded physical product against which a rate is quoted — but cruise categories are typically far more numerous and finely graded (often dozens of sub-categories) and are priced per person on double occupancy rather than per room.
- **Cabin Category** vs [Guarantee Cabin (GTY)](/cruise/cruise/guarantee-cabin-gty.md) — A cabin category is the named grade itself; a Guarantee (GTY) is a booking method that locks a guaranteed minimum category while deferring assignment of the specific cabin within or above it.

# Citations
[1] Cruise industry — Cruising Terms (cruise glossary)
[2] [OpenTravel Alliance — OpenTravel Specification (cruise message set: cabin category availability and pricing)](https://opentravel.org/download-specs/)
[3] Cruise industry — Room Types & Included Amenities (cruise FAQ)
