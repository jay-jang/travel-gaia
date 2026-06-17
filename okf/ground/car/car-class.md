---
type: Business Term
title: Car Class
description: 'A car class (car group or category) is the sellable inventory grouping of vehicles, defined by ACRISS attributes, against which rates are filed and reservations are made. It is the core unit of car rental shopping and pricing, with a specific vehicle assigned only at pickup.'
tags:
  - car
  - active
timestamp: '2026-06-17T00:00:00Z'
id: car-class
vertical: ground
category: car
conceptType: business-term
status: active
term_ko: 차량 등급(Car Class)
definition_ko: '차량 등급(car group·car category)은 ACRISS 속성으로 정의되며 요금이 적재되고 예약이 이루어지는 판매용 차량 재고 그룹이다. 렌터카 쇼핑과 가격 산정의 핵심 단위로, 특정 차량은 픽업 시에야 배정된다.'
longDef: 'Renters book a class, not a specific car: a reservation for an ''Intermediate'' or ''Compact'' class guarantees a vehicle from that group (or an upgrade), described to the renter as ''or similar''. Each class maps to one or more ACRISS codes and is the level at which suppliers file time-and-mileage rates, set availability, and apply surcharges. Cross-supplier and GDS/OTA comparison relies on aligning classes through their underlying ACRISS codes, so the car class sits between the standardized vehicle code and the sellable rate.'
longDef_ko: '렌터카 이용자는 특정 차량이 아니라 등급을 예약한다. ''Intermediate''나 ''Compact'' 등급 예약은 해당 그룹의 차량(또는 업그레이드)을 보장하며, 이용자에게는 ''or similar''로 안내된다. 각 등급은 하나 이상의 ACRISS 코드에 매핑되며, 공급사가 time-and-mileage 요금을 적재하고 가용성을 설정하며 부가요금을 적용하는 기준 레벨이다. 공급사 간 및 GDS/OTA 비교는 기저의 ACRISS 코드로 등급을 정렬하는 데 의존하므로, 차량 등급은 표준화된 차량 코드와 판매용 요금 사이에 위치한다.'
aliases:
  - Car Group
  - Car Category
  - Vehicle Class
  - Car Type Group
relationships:
  - type: related
    targetTerm: ACRISS Code
  - type: related
    targetTerm: Time and Mileage
  - type: related
    targetTerm: GDS
  - type: related
    targetTerm: OTA (Online Travel Agency)
distinctions:
  - targetTerm: ACRISS Code
    explanation: An ACRISS code is a standardized four-letter descriptor of a vehicle's attributes; a car class is the supplier's sellable grouping (with rates and availability) built from one or more such codes and booked as 'or similar'.
    explanation_ko: 'ACRISS 코드는 차량 속성을 표준화한 네 글자 식별자이고, 차량 등급은 그런 코드 하나 이상으로 구성되어 ''or similar''로 예약되는, 요금·가용성을 가진 공급사의 판매 그룹이다.'
sources:
  - org: ACRISS (Association of Car Rental Industry Systems Standards)
    name: How to read ACRISS codes for car rentals / Industry Standard Car Classification Code
    version: ''
    section: ''
    url: ''
  - org: ''
    name: Car Rental and Mobility Tech Glossary — Car category
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M6 26l2-6a3 3 0 0 1 3-2h12a3 3 0 0 1 3 2l2 6"/><path d="M4 26h26v4a1.5 1.5 0 0 1-1.5 1.5h-2A1.5 1.5 0 0 1 25 30H9a1.5 1.5 0 0 1-1.5 1.5h-2A1.5 1.5 0 0 1 4 30z"/><circle cx="10" cy="26" r="1.6"/><circle cx="24" cy="26" r="1.6"/><path d="M34 20h8M34 28h8M34 36h8M37 20v16"/></svg>
---

> A car class (car group or category) is the sellable inventory grouping of vehicles, defined by ACRISS attributes, against which rates are filed and reservations are made. It is the core unit of car rental shopping and pricing, with a specific vehicle assigned only at pickup.

Renters book a class, not a specific car: a reservation for an 'Intermediate' or 'Compact' class guarantees a vehicle from that group (or an upgrade), described to the renter as 'or similar'. Each class maps to one or more ACRISS codes and is the level at which suppliers file time-and-mileage rates, set availability, and apply surcharges. Cross-supplier and GDS/OTA comparison relies on aligning classes through their underlying ACRISS codes, so the car class sits between the standardized vehicle code and the sellable rate.

**한국어 / Korean** — **차량 등급(Car Class)** — 차량 등급(car group·car category)은 ACRISS 속성으로 정의되며 요금이 적재되고 예약이 이루어지는 판매용 차량 재고 그룹이다. 렌터카 쇼핑과 가격 산정의 핵심 단위로, 특정 차량은 픽업 시에야 배정된다.

렌터카 이용자는 특정 차량이 아니라 등급을 예약한다. 'Intermediate'나 'Compact' 등급 예약은 해당 그룹의 차량(또는 업그레이드)을 보장하며, 이용자에게는 'or similar'로 안내된다. 각 등급은 하나 이상의 ACRISS 코드에 매핑되며, 공급사가 time-and-mileage 요금을 적재하고 가용성을 설정하며 부가요금을 적용하는 기준 레벨이다. 공급사 간 및 GDS/OTA 비교는 기저의 ACRISS 코드로 등급을 정렬하는 데 의존하므로, 차량 등급은 표준화된 차량 코드와 판매용 요금 사이에 위치한다.

**Aliases:** `Car Group`, `Car Category`, `Vehicle Class`, `Car Type Group`

# Related
- [ACRISS Code](/ground/car/acriss-code.md) — related
- [Time and Mileage](/ground/car/time-and-mileage.md) — related
- [GDS](/common/standards/gds.md) — related
- [OTA (Online Travel Agency)](/common/standards/ota-online-travel-agency.md) — related

# Distinctions
- **Car Class** vs [ACRISS Code](/ground/car/acriss-code.md) — An ACRISS code is a standardized four-letter descriptor of a vehicle's attributes; a car class is the supplier's sellable grouping (with rates and availability) built from one or more such codes and booked as 'or similar'.

# Citations
[1] ACRISS (Association of Car Rental Industry Systems Standards) — How to read ACRISS codes for car rentals / Industry Standard Car Classification Code
[2] Car Rental and Mobility Tech Glossary — Car category
