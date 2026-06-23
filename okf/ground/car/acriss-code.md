---
type: Code
title: ACRISS Code
description: 'The ACRISS Code is the industry-standard four-character code that classifies a rental vehicle by Category, Type, Transmission/Drive, and Fuel/Air-conditioning, maintained by the Association of Car Rental Industry Systems Standards. It is the foundational vocabulary used to describe, shop, and book rental vehicles across GDSs, OTAs, and suppliers.'
tags:
  - car
  - active
  - ACRISS (Association of Car Rental Industry Systems Standards)
timestamp: '2026-06-17T00:00:00Z'
id: acriss-code
vertical: ground
category: car
conceptType: code
status: active
abbreviation: ACRISS
term_ko: ACRISS 코드(ACRISS Code)
definition_ko: 'ACRISS Code는 렌터카 차량을 등급(Category), 차종(Type), 변속기/구동(Transmission·Drive), 연료/에어컨(Fuel·Air-conditioning)의 네 글자로 분류하는 업계 표준 코드로, Association of Car Rental Industry Systems Standards가 관리한다. GDS, OTA, 공급사 전반에서 렌터카를 기술·쇼핑·예약하는 기반 어휘다.'
longDef: 'Each of the four positions carries a single letter from a fixed value set: position 1 = Category (e.g. M=Mini, E=Economy, C=Compact, I=Intermediate, S=Standard, F=Fullsize, P=Premium, L=Luxury); position 2 = Type (e.g. C=2/4-door, D=4/5-door, W=Wagon/Estate, V=Passenger Van, F=SUV); position 3 = Transmission and drive (M=Manual, A=Automatic, plus drive indicators); position 4 = Fuel and air-conditioning (R=Unspecified Fuel/Power with A/C, N=Unspecified Fuel/Power without A/C, plus electric/hybrid indicators). A code such as ''ECMR'' means Economy, 2/4-door, Manual unspecified drive, unspecified fuel with A/C. ACRISS codes let one supplier''s car group be mapped to another''s and let agencies compare like-for-like vehicles, so they underpin car availability, pricing, and booking messages in the GDS and via NDC-style or supplier APIs.'
longDef_ko: '네 자리 각각은 고정된 값 집합에서 한 글자를 사용한다. 1번째 자리 = 등급(예: M=Mini, E=Economy, C=Compact, I=Intermediate, S=Standard, F=Fullsize, P=Premium, L=Luxury), 2번째 자리 = 차종(예: C=2/4도어, D=4/5도어, W=왜건, V=승합, F=SUV), 3번째 자리 = 변속기·구동(M=수동, A=자동 및 구동 표시), 4번째 자리 = 연료·에어컨(R=연료 미지정·에어컨 있음, N=연료 미지정·에어컨 없음, 전기/하이브리드 표시 등)이다. 예를 들어 ''ECMR''은 Economy, 2/4도어, 수동·구동 미지정, 연료 미지정·에어컨 있음을 뜻한다. ACRISS 코드는 한 공급사의 차량 그룹을 다른 공급사의 그룹에 매핑하고 여행사가 동일 조건 차량을 비교할 수 있게 하므로, GDS 및 공급사 API의 렌터카 가용·가격·예약 메시지의 토대가 된다.'
standardBody: ACRISS (Association of Car Rental Industry Systems Standards)
aliases:
  - ACRISS Car Classification Code
  - ACRISS Vehicle Code
  - Car Type Code
providerTerms:
  - provider: Sabre
    term: Vehicle Type Code
    context: Sabre's car booking entries and APIs use the four-character ACRISS code as the vehicle type code (e.g. ECMR) to request and classify rental cars.
    context_ko: 'Sabre의 car 예약 엔트리와 API에서는 네 자리 ACRISS 코드를 차량 유형 코드(예: ECMR)로 사용해 렌터카를 조회·분류한다.'
    relationship: same
  - provider: Amadeus
    term: Car type code (ACRISS)
    context: 'Amadeus Cars uses standard ACRISS four-character car type codes (alongside pseudo codes for predefined vehicle groups), filtered via the /VT- option.'
    context_ko: 'Amadeus Cars는 표준 ACRISS 네 자리 car type code를 사용하며(사전 정의 그룹용 pseudo code 병행), /VT- 옵션으로 필터링한다.'
    relationship: same
  - provider: OpenTravel (OTA)
    term: VehicleCategory / VehType (Code='ACRISS')
    context: OpenTravel vehicle messages carry the ACRISS classification in the Vehicle element so brokers and suppliers exchange car type consistently.
    context_ko: OpenTravel 차량 메시지는 Vehicle 요소에 ACRISS 분류를 실어 브로커·공급자 간 차량 유형을 일관되게 교환한다.
    relationship: same
relationships:
  - type: sameAs
    targetTerm: SIPP Code
  - type: related
    targetTerm: Car Class
  - type: related
    targetTerm: GDS
  - type: related
    targetTerm: OTA (Online Travel Agency)
distinctions:
  - targetTerm: SIPP Code
    explanation: 'ACRISS is the current four-character standard maintained by the ACRISS association; SIPP is the older GDS-origin name for essentially the same four-letter car code, still used colloquially (especially in North America). ACRISS expanded and now governs the value sets.'
    explanation_ko: 'ACRISS는 ACRISS 협회가 관리하는 현행 네 글자 표준이고, SIPP는 사실상 같은 네 글자 차량 코드의 더 오래된 GDS 기원 명칭으로 특히 북미에서 여전히 통용된다. ACRISS가 이를 확장했고 현재 값 집합을 관장한다.'
  - targetTerm: Car Class
    explanation: The ACRISS code is the standardized descriptor of a vehicle's attributes; a car class is the sellable inventory grouping (with rates and availability) that suppliers build on top of one or more ACRISS codes.
    explanation_ko: 'ACRISS 코드는 차량 속성을 표준화해 기술하는 식별자이고, Car Class는 공급사가 하나 이상의 ACRISS 코드 위에 만드는, 요금과 가용성을 가진 판매용 재고 그룹이다.'
sources:
  - org: ACRISS (Association of Car Rental Industry Systems Standards)
    name: Car Codes — ACRISS Car Classification Code Explained
    version: ''
    section: ''
    url: 'https://www.acriss.org/car-codes/'
    tier: association
  - org: ACRISS (Association of Car Rental Industry Systems Standards)
    name: Car Codes Explained — Expanded Matrix
    version: ''
    section: ''
    url: 'https://www.acriss.org/car-codes/expanded-matrix/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M7 30l3-9a4 4 0 0 1 4-3h20a4 4 0 0 1 4 3l3 9"/><path d="M5 30h38v6a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-1H12v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"/><circle cx="13" cy="30" r="2"/><circle cx="35" cy="30" r="2"/><path d="M19 12h10M19 8h6"/></svg>
---

> The ACRISS Code is the industry-standard four-character code that classifies a rental vehicle by Category, Type, Transmission/Drive, and Fuel/Air-conditioning, maintained by the Association of Car Rental Industry Systems Standards. It is the foundational vocabulary used to describe, shop, and book rental vehicles across GDSs, OTAs, and suppliers.

Each of the four positions carries a single letter from a fixed value set: position 1 = Category (e.g. M=Mini, E=Economy, C=Compact, I=Intermediate, S=Standard, F=Fullsize, P=Premium, L=Luxury); position 2 = Type (e.g. C=2/4-door, D=4/5-door, W=Wagon/Estate, V=Passenger Van, F=SUV); position 3 = Transmission and drive (M=Manual, A=Automatic, plus drive indicators); position 4 = Fuel and air-conditioning (R=Unspecified Fuel/Power with A/C, N=Unspecified Fuel/Power without A/C, plus electric/hybrid indicators). A code such as 'ECMR' means Economy, 2/4-door, Manual unspecified drive, unspecified fuel with A/C. ACRISS codes let one supplier's car group be mapped to another's and let agencies compare like-for-like vehicles, so they underpin car availability, pricing, and booking messages in the GDS and via NDC-style or supplier APIs.

**한국어 / Korean** — **ACRISS 코드(ACRISS Code)** — ACRISS Code는 렌터카 차량을 등급(Category), 차종(Type), 변속기/구동(Transmission·Drive), 연료/에어컨(Fuel·Air-conditioning)의 네 글자로 분류하는 업계 표준 코드로, Association of Car Rental Industry Systems Standards가 관리한다. GDS, OTA, 공급사 전반에서 렌터카를 기술·쇼핑·예약하는 기반 어휘다.

네 자리 각각은 고정된 값 집합에서 한 글자를 사용한다. 1번째 자리 = 등급(예: M=Mini, E=Economy, C=Compact, I=Intermediate, S=Standard, F=Fullsize, P=Premium, L=Luxury), 2번째 자리 = 차종(예: C=2/4도어, D=4/5도어, W=왜건, V=승합, F=SUV), 3번째 자리 = 변속기·구동(M=수동, A=자동 및 구동 표시), 4번째 자리 = 연료·에어컨(R=연료 미지정·에어컨 있음, N=연료 미지정·에어컨 없음, 전기/하이브리드 표시 등)이다. 예를 들어 'ECMR'은 Economy, 2/4도어, 수동·구동 미지정, 연료 미지정·에어컨 있음을 뜻한다. ACRISS 코드는 한 공급사의 차량 그룹을 다른 공급사의 그룹에 매핑하고 여행사가 동일 조건 차량을 비교할 수 있게 하므로, GDS 및 공급사 API의 렌터카 가용·가격·예약 메시지의 토대가 된다.

**Aliases:** `ACRISS Car Classification Code`, `ACRISS Vehicle Code`, `Car Type Code`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Sabre | `Vehicle Type Code` | same | Sabre's car booking entries and APIs use the four-character ACRISS code as the vehicle type code (e.g. ECMR) to request and classify rental cars. |
| Amadeus | `Car type code (ACRISS)` | same | Amadeus Cars uses standard ACRISS four-character car type codes (alongside pseudo codes for predefined vehicle groups), filtered via the /VT- option. |
| OpenTravel (OTA) | `VehicleCategory / VehType (Code='ACRISS')` | same | OpenTravel vehicle messages carry the ACRISS classification in the Vehicle element so brokers and suppliers exchange car type consistently. |

# Related
- [SIPP Code](/ground/car/sipp-code.md) — sameAs
- [Car Class](/ground/car/car-class.md) — related
- [GDS](/common/standards/gds.md) — related
- [OTA (Online Travel Agency)](/common/standards/ota-online-travel-agency.md) — related

# Distinctions
- **ACRISS Code** vs [SIPP Code](/ground/car/sipp-code.md) — ACRISS is the current four-character standard maintained by the ACRISS association; SIPP is the older GDS-origin name for essentially the same four-letter car code, still used colloquially (especially in North America). ACRISS expanded and now governs the value sets.
- **ACRISS Code** vs [Car Class](/ground/car/car-class.md) — The ACRISS code is the standardized descriptor of a vehicle's attributes; a car class is the sellable inventory grouping (with rates and availability) that suppliers build on top of one or more ACRISS codes.

# Citations
[1] [ACRISS (Association of Car Rental Industry Systems Standards) — Car Codes — ACRISS Car Classification Code Explained](https://www.acriss.org/car-codes/)
[2] [ACRISS (Association of Car Rental Industry Systems Standards) — Car Codes Explained — Expanded Matrix](https://www.acriss.org/car-codes/expanded-matrix/)
