---
type: Business Term
title: Board Basis
description: 'The meals included in a hotel rate, expressed as a standardized code such as Room Only (RO), Bed & Breakfast (BB), Half Board (HB), Full Board (FB), or All-Inclusive (AI). It is a key inclusion attribute of a rate plan that affects price and guest expectations.'
tags:
  - hotel-rate
  - active
  - OpenTravel Alliance
timestamp: '2026-06-17T00:00:00Z'
id: board-basis
vertical: lodging
category: hotel-rate
conceptType: business-term
status: active
term_ko: 식사 조건(Board Basis)
definition_ko: '호텔 요금에 포함되는 식사로, Room Only(RO), Bed & Breakfast(BB), Half Board(HB), Full Board(FB), All-Inclusive(AI) 등 표준화된 코드로 표현된다. 가격과 투숙객의 기대에 영향을 미치는 요금제의 핵심 포함 속성이다.'
longDef: 'Board basis communicates which meals are part of the rate: RO/EP (Room Only / European Plan) means no meals; BB/CP (Bed & Breakfast / Continental Plan) includes breakfast; HB/MAP (Half Board / Modified American Plan) typically includes breakfast and dinner; FB/AP (Full Board / American Plan) includes three meals; AI (All-Inclusive) adds meals, snacks and usually drinks. Codes and exact inclusions vary by hotel, chain, and distribution channel, so board basis is normally carried as a coded attribute on the rate plan in CRS/GDS and OpenTravel messages.'
longDef_ko: '식사 조건은 어떤 식사가 요금에 포함되는지를 전달한다. RO/EP(Room Only / European Plan)는 식사 미포함, BB/CP(Bed & Breakfast / Continental Plan)는 조식 포함, HB/MAP(Half Board / Modified American Plan)는 일반적으로 조식과 석식 포함, FB/AP(Full Board / American Plan)는 세 끼 포함, AI(All-Inclusive)는 식사·간식과 보통 음료까지 추가된다. 코드와 정확한 포함 내역은 호텔, 체인, 유통 채널에 따라 다르므로, 식사 조건은 보통 CRS/GDS 및 OpenTravel 메시지에서 요금제의 코드화된 속성으로 전달된다.'
standardBody: OpenTravel Alliance
aliases:
  - Meal Plan
  - Board Type
  - Board
relationships:
  - type: broader
    targetTerm: Rate Plan
  - type: related
    targetTerm: Room Type
distinctions:
  - targetTerm: Rate Plan
    explanation: 'Board basis is one inclusion attribute carried within a rate plan; a rate plan also defines price, cancellation, and other conditions beyond meals.'
    explanation_ko: '식사 조건은 요금제에 포함된 하나의 포함 속성이다. 요금제는 식사 외에도 가격, 취소 규정 등 여러 조건을 함께 정의한다.'
  - targetTerm: Cruise-Only Fare
    explanation: 'Hotel Board Basis grades what meals are included (room only to all-inclusive); a cruise-only fare already bundles standard meals, so the cruise concept brackets the whole voyage rather than only the meal plan.'
    explanation_ko: '호텔의 Board Basis는 포함되는 식사 범위(room only부터 all-inclusive까지)를 구분하는 반면, 크루즈 온리 운임은 기본 식사를 이미 포함하므로 크루즈 개념은 식사 계획만이 아니라 항해 전체를 묶는다.'
  - targetTerm: Open Seating Dining
    explanation: Hotel Board Basis defines which meals are included in the rate; open seating dining assumes meals are included and instead defines the seating arrangement (flexible versus fixed times and tables).
    explanation_ko: '호텔 Board Basis는 요금에 어떤 식사가 포함되는지를 정의하고, 오픈 시팅 다이닝은 식사 포함을 전제한 채 시팅 방식(유연 대 고정 시간·테이블)을 정의한다.'
  - targetTerm: Package Rate
    explanation: 'Board Basis describes only the meal component included in a rate (room-only, B&B, half-board, etc.); a Package Rate is broader, bundling any combination of services and amenities, of which meals are just one possible element.'
    explanation_ko: 'Board Basis는 요금에 포함된 식사 구성요소(객실 단독, B&B, 하프보드 등)만을 가리키지만, Package Rate는 식사를 포함한 임의의 서비스·편의시설 조합을 묶는 더 넓은 개념이다.'
sources:
  - name: OpenTravel Specification (Hotel meal plan / meal codes)
    org: OpenTravel Alliance
    version: ''
    section: ''
    url: 'https://opentravel.org/download-specs/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="26" r="13"/><circle cx="24" cy="26" r="6"/><line x1="9" y1="10" x2="9" y2="20"/><line x1="6" y1="10" x2="6" y2="15"/><line x1="12" y1="10" x2="12" y2="15"/><path d="M9 15v-5"/><path d="M40 10c-2 0-3 3-3 6s1 4 3 4v10"/></svg>
---

> The meals included in a hotel rate, expressed as a standardized code such as Room Only (RO), Bed & Breakfast (BB), Half Board (HB), Full Board (FB), or All-Inclusive (AI). It is a key inclusion attribute of a rate plan that affects price and guest expectations.

Board basis communicates which meals are part of the rate: RO/EP (Room Only / European Plan) means no meals; BB/CP (Bed & Breakfast / Continental Plan) includes breakfast; HB/MAP (Half Board / Modified American Plan) typically includes breakfast and dinner; FB/AP (Full Board / American Plan) includes three meals; AI (All-Inclusive) adds meals, snacks and usually drinks. Codes and exact inclusions vary by hotel, chain, and distribution channel, so board basis is normally carried as a coded attribute on the rate plan in CRS/GDS and OpenTravel messages.

**한국어 / Korean** — **식사 조건(Board Basis)** — 호텔 요금에 포함되는 식사로, Room Only(RO), Bed & Breakfast(BB), Half Board(HB), Full Board(FB), All-Inclusive(AI) 등 표준화된 코드로 표현된다. 가격과 투숙객의 기대에 영향을 미치는 요금제의 핵심 포함 속성이다.

식사 조건은 어떤 식사가 요금에 포함되는지를 전달한다. RO/EP(Room Only / European Plan)는 식사 미포함, BB/CP(Bed & Breakfast / Continental Plan)는 조식 포함, HB/MAP(Half Board / Modified American Plan)는 일반적으로 조식과 석식 포함, FB/AP(Full Board / American Plan)는 세 끼 포함, AI(All-Inclusive)는 식사·간식과 보통 음료까지 추가된다. 코드와 정확한 포함 내역은 호텔, 체인, 유통 채널에 따라 다르므로, 식사 조건은 보통 CRS/GDS 및 OpenTravel 메시지에서 요금제의 코드화된 속성으로 전달된다.

**Aliases:** `Meal Plan`, `Board Type`, `Board`

# Related
- [Rate Plan](/lodging/hotel-rate/rate-plan.md) — broader
- [Room Type](/lodging/hotel-rate/room-type.md) — related

# Distinctions
- **Board Basis** vs [Rate Plan](/lodging/hotel-rate/rate-plan.md) — Board basis is one inclusion attribute carried within a rate plan; a rate plan also defines price, cancellation, and other conditions beyond meals.
- **Board Basis** vs [Cruise-Only Fare](/cruise/cruise/cruise-only-fare.md) — Hotel Board Basis grades what meals are included (room only to all-inclusive); a cruise-only fare already bundles standard meals, so the cruise concept brackets the whole voyage rather than only the meal plan.
- **Board Basis** vs [Open Seating Dining](/cruise/cruise/open-seating-dining.md) — Hotel Board Basis defines which meals are included in the rate; open seating dining assumes meals are included and instead defines the seating arrangement (flexible versus fixed times and tables).
- **Board Basis** vs [Package Rate](/lodging/hotel-rate/package-rate.md) — Board Basis describes only the meal component included in a rate (room-only, B&B, half-board, etc.); a Package Rate is broader, bundling any combination of services and amenities, of which meals are just one possible element.

# Citations
[1] [OpenTravel Alliance — OpenTravel Specification (Hotel meal plan / meal codes)](https://opentravel.org/download-specs/)
