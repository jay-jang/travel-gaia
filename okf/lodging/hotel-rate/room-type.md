---
type: Business Term
title: Room Type
description: 'A category of bookable accommodation defined by its physical and product attributes — such as bed configuration, size, view, floor, and amenities — that groups individual rooms a hotel sells as interchangeable inventory. Examples include Standard Double, Deluxe King, and Junior Suite.'
tags:
  - hotel-rate
  - active
  - OpenTravel Alliance
timestamp: '2026-06-17T00:00:00Z'
id: room-type
vertical: lodging
category: hotel-rate
conceptType: business-term
status: active
term_ko: 객실 유형(Room Type)
definition_ko: '침대 구성, 면적, 전망, 층, 편의시설 등 물리적·상품적 속성으로 정의되는 예약 가능한 숙박 범주로, 호텔이 상호 교환 가능한 재고로 판매하는 개별 객실들을 묶은 것이다. 스탠다드 더블, 디럭스 킹, 주니어 스위트 등이 그 예이다.'
longDef: Room types are the inventory unit hoteliers count and sell; availability and allotments are tracked per room type and date. Each room type is identified by a room type code in the CRS/PMS and is combined with one or more rate plans to produce sellable offers. The room-type-and-rate-plan combination is what is ultimately distributed as a sellable product.
longDef_ko: '객실 유형은 호텔이 집계하고 판매하는 재고 단위로, 가용 객실과 allotment는 객실 유형 및 날짜별로 관리된다. 각 객실 유형은 CRS/PMS에서 room type code로 식별되며, 하나 이상의 요금제와 결합되어 판매 가능한 상품을 만든다. 궁극적으로 유통되는 판매 상품은 이 객실 유형과 요금제의 조합이다.'
standardBody: OpenTravel Alliance
aliases:
  - Room Category
  - Accommodation Type
  - Room Class
providerTerms:
  - provider: OpenTravel / HTNG
    term: RoomType / RoomTypeCode (InvTypeCode)
    context: 'OTA messages identify bookable accommodation via RoomTypeCode/InvTypeCode in RoomStayCandidate and ARI inventory updates, mapped across systems.'
    context_ko: OTA 메시지는 RoomStayCandidate와 ARI 재고 갱신의 RoomTypeCode/InvTypeCode로 예약 가능 객실을 식별하며 시스템 간 매핑된다.
    relationship: same
  - provider: Oracle OPERA
    term: Room Type / Room Class
    context: 'OPERA configures a Room Type code (e.g. Deluxe, Standard) grouped under a Room Class umbrella for controlled inventory management.'
    context_ko: 'OPERA는 Room Type 코드(예: Deluxe, Standard)를 구성하고 이를 Room Class 우산 아래 묶어 재고를 통제한다.'
    relationship: same
relationships:
  - type: related
    targetTerm: Rate Plan
  - type: related
    targetTerm: Occupancy
  - type: related
    targetTerm: Allotment
  - type: related
    targetTerm: ARI
distinctions:
  - targetTerm: Rate Plan
    explanation: Room type is the physical product (the room); rate plan is the price and conditions under which that room is sold.
    explanation_ko: '객실 유형은 실제 상품(객실)을 의미하고, 요금제는 그 객실이 판매되는 가격과 조건을 의미한다.'
  - targetTerm: Occupancy
    explanation: 'Room type describes the room''s attributes; occupancy describes how many guests stay in it, which can affect the applicable price.'
    explanation_ko: '객실 유형은 객실의 속성을 설명하고, 투숙 인원(occupancy)은 몇 명의 투숙객이 머무는지를 설명하며 이는 적용 가격에 영향을 줄 수 있다.'
  - targetTerm: Cabin Category
    explanation: Cabin Category is the cruise term for the same concept as a hotel Room Type — a graded physical product against which a rate is quoted — but cruise categories are typically far more numerous and finely graded (often dozens of sub-categories) and are priced per person on double occupancy rather than per room.
    explanation_ko: 'Cabin Category는 호텔의 Room Type과 동일한 개념(요금이 매겨지는 등급화된 실제 상품)에 대한 크루즈 용어이지만, 크루즈 카테고리는 보통 훨씬 더 많고 세밀하게 등급화되며(흔히 수십 개의 하위 카테고리) 객실당이 아니라 2인 기준 1인당으로 가격이 책정된다.'
  - targetTerm: Run of House (ROH)
    explanation: 'A Room Type booking guarantees a specific product category and its attributes; an ROH booking guarantees only a room within the property, with the actual type assigned by the hotel at check-in based on availability.'
    explanation_ko: 'Room Type 예약은 특정 상품 등급과 속성을 보장하지만, ROH 예약은 호텔 내 객실만을 보장하며 실제 타입은 가용성에 따라 체크인 시 호텔이 배정한다.'
sources:
  - name: 'OpenTravel Specification (Hotel messages, RoomType / RoomStay)'
    org: OpenTravel Alliance
    version: ''
    section: ''
    url: 'https://opentravel.org/download-specs/'
  - name: HTNG messaging specifications
    org: HTNG
    version: ''
    section: ''
    url: 'https://www.ahla.com/htng-technical-specifications'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M6 18v18"/><path d="M6 24h36v12"/><path d="M42 30v6"/><path d="M6 24v-6h22a8 8 0 0 1 8 8"/><path d="M12 22a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3"/></svg>
---

> A category of bookable accommodation defined by its physical and product attributes — such as bed configuration, size, view, floor, and amenities — that groups individual rooms a hotel sells as interchangeable inventory. Examples include Standard Double, Deluxe King, and Junior Suite.

Room types are the inventory unit hoteliers count and sell; availability and allotments are tracked per room type and date. Each room type is identified by a room type code in the CRS/PMS and is combined with one or more rate plans to produce sellable offers. The room-type-and-rate-plan combination is what is ultimately distributed as a sellable product.

**한국어 / Korean** — **객실 유형(Room Type)** — 침대 구성, 면적, 전망, 층, 편의시설 등 물리적·상품적 속성으로 정의되는 예약 가능한 숙박 범주로, 호텔이 상호 교환 가능한 재고로 판매하는 개별 객실들을 묶은 것이다. 스탠다드 더블, 디럭스 킹, 주니어 스위트 등이 그 예이다.

객실 유형은 호텔이 집계하고 판매하는 재고 단위로, 가용 객실과 allotment는 객실 유형 및 날짜별로 관리된다. 각 객실 유형은 CRS/PMS에서 room type code로 식별되며, 하나 이상의 요금제와 결합되어 판매 가능한 상품을 만든다. 궁극적으로 유통되는 판매 상품은 이 객실 유형과 요금제의 조합이다.

**Aliases:** `Room Category`, `Accommodation Type`, `Room Class`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| OpenTravel / HTNG | `RoomType / RoomTypeCode (InvTypeCode)` | same | OTA messages identify bookable accommodation via RoomTypeCode/InvTypeCode in RoomStayCandidate and ARI inventory updates, mapped across systems. |
| Oracle OPERA | `Room Type / Room Class` | same | OPERA configures a Room Type code (e.g. Deluxe, Standard) grouped under a Room Class umbrella for controlled inventory management. |

# Related
- [Rate Plan](/lodging/hotel-rate/rate-plan.md) — related
- [Occupancy](/lodging/hotel-rate/occupancy.md) — related
- [Allotment](/lodging/hotel-rate/allotment.md) — related
- [ARI](/lodging/hotel-dist/ari.md) — related

# Distinctions
- **Room Type** vs [Rate Plan](/lodging/hotel-rate/rate-plan.md) — Room type is the physical product (the room); rate plan is the price and conditions under which that room is sold.
- **Room Type** vs [Occupancy](/lodging/hotel-rate/occupancy.md) — Room type describes the room's attributes; occupancy describes how many guests stay in it, which can affect the applicable price.
- **Room Type** vs [Cabin Category](/cruise/cruise/cabin-category.md) — Cabin Category is the cruise term for the same concept as a hotel Room Type — a graded physical product against which a rate is quoted — but cruise categories are typically far more numerous and finely graded (often dozens of sub-categories) and are priced per person on double occupancy rather than per room.
- **Room Type** vs [Run of House (ROH)](/lodging/hotel-rate/run-of-house-roh.md) — A Room Type booking guarantees a specific product category and its attributes; an ROH booking guarantees only a room within the property, with the actual type assigned by the hotel at check-in based on availability.

# Citations
[1] [OpenTravel Alliance — OpenTravel Specification (Hotel messages, RoomType / RoomStay)](https://opentravel.org/download-specs/)
[2] [HTNG — HTNG messaging specifications](https://www.ahla.com/htng-technical-specifications)
