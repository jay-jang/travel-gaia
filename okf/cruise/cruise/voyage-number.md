---
type: Code
title: Voyage Number
description: 'A Voyage Number is the unique alphanumeric or numeric identifier assigned by a cruise line to a specific sailing of a vessel, distinguishing one itinerary execution from all others operated by the same ship across the season. It serves as the primary key in cruise reservation, manifest, shore excursion, and revenue-reporting systems for linking all guest bookings, crew assignments, port clearances, and onboard service records to a single departure.'
tags:
  - cruise
  - active
  - CLIA
timestamp: '2026-07-22T00:00:00Z'
id: voyage-number
vertical: cruise
category: cruise
conceptType: code
status: active
term_ko: '항해 번호(Voyage Number)'
definition_ko: '항해 번호(Voyage Number)는 크루즈 선사가 특정 선박의 특정 항해에 부여하는 고유 영숫자 또는 숫자 식별자로, 동일 선박이 시즌 내내 운항하는 모든 항해를 구별한다. 크루즈 예약, 매니페스트, 기항지 투어, 수익 보고 시스템에서 모든 선객 예약, 승무원 배정, 입항 허가, 선내 서비스 기록을 단일 출항으로 연결하는 기본 키(primary key) 역할을 한다.'
longDef: 'Cruise lines typically compose a Voyage Number from a ship code (2–3 characters), a two-digit year, and a sequential voyage counter, though the exact format varies by carrier. For example, a Royal Caribbean voyage might carry a number such as "AE230401" denoting ship Adventure of the Seas, 2023, voyage 04, sailing 01. The Voyage Number anchors all downstream systems: the reservation system links each stateroom booking to the voyage; the shore excursion system sells products keyed to the voyage and its port-of-call schedule; the guest manifest produced for customs and immigration authorities references the voyage number for reporting; and CLIA uses voyage-level data to compile the Available Passenger Cruise Days (APCD) metric. In OpenTravel cruise API messages, the voyage identifier appears as a structured field (VoyageID) enabling automated booking and confirmation exchange between the cruise line and travel agents or online travel agencies. From a revenue management perspective, the Voyage Number defines the inventory unit: staterooms are priced and yielded per voyage, and wave-season yield tracking is aggregated at the voyage level. Repositioning cruises and World Cruise segments each receive their own Voyage Number, allowing discrete revenue and operational reporting even when itineraries share ship time.'
longDef_ko: '크루즈 선사는 일반적으로 선박 코드(2~3자), 두 자리 연도, 순차 항해 카운터를 결합해 항해 번호를 구성하지만 정확한 형식은 선사마다 다르다. 예컨대 로열캐리비안의 항해 번호 "AE230401"은 선박 Adventure of the Seas, 2023년, 4번째 항해, 1번 세일링을 나타낼 수 있다. 항해 번호는 모든 하위 시스템의 닻 역할을 한다. 예약 시스템은 각 선실 예약을 항해에 연결하고, 기항지 투어 시스템은 해당 항해와 기항지 일정에 맞는 상품을 판매하며, 세관·출입국 당국에 제출하는 선객 매니페스트는 항해 번호를 기준으로 보고된다. CLIA는 항해 단위 데이터를 활용해 APCD(가용 여객 크루즈 일수) 지표를 집계한다. OpenTravel 크루즈 API 메시지에서 항해 식별자는 구조화된 필드(VoyageID)로 나타나며, 크루즈 선사와 여행사 또는 OTA 간의 자동화된 예약·확정 교환을 지원한다. 수익 관리 관점에서 항해 번호는 재고 단위를 정의하며, 선실은 항해별로 요금이 책정·수익화되고, 성수기 수익 추적은 항해 단위로 집계된다. 리포지셔닝 크루즈와 월드 크루즈 구간은 각각 별도의 항해 번호를 부여받아, 동일 선박 시간을 공유하는 경우에도 독립적인 수익·운항 보고가 가능하다.'
standardBody: CLIA
aliases:
  - Voyage Number
  - Voyage ID
  - VoyageID
  - Sailing Number
  - Cruise Voyage Number
relationships:
  - type: related
    targetTerm: Shore Excursion
  - type: related
    targetTerm: Manifest
  - type: related
    targetTerm: Port of Call
  - type: related
    targetTerm: Turnaround Day
  - type: related
    targetTerm: Available Passenger Cruise Days (APCD)
  - type: related
    targetTerm: Repositioning Cruise
  - type: related
    targetTerm: Stateroom
distinctions:
  - targetTerm: Available Passenger Cruise Days (APCD)
    explanation: 'APCD is an industry capacity metric representing the total number of passenger berths multiplied by the days in a given period; the Voyage Number is the discrete operational identifier for a single sailing, and APCD is aggregated across all voyage numbers in a fleet to compute the metric.'
    explanation_ko: 'APCD는 주어진 기간의 총 선객 침상 수에 일수를 곱한 업계 용량 지표이고, 항해 번호는 단일 항해의 개별 운항 식별자로서, APCD는 기단 내 모든 항해 번호에 걸쳐 집계하여 산출된다.'
  - targetTerm: Repositioning Cruise
    explanation: 'A Repositioning Cruise is a sailing that moves a ship from one homeport or deployment region to another, usually at a heavily discounted fare; the Voyage Number is the operational identifier for any such sailing, treating it as a discrete inventory and revenue unit regardless of whether it is a repositioning voyage or a regular itinerary.'
    explanation_ko: '리포지셔닝 크루즈는 선박을 한 홈포트나 배치 지역에서 다른 곳으로 이동시키는 항해로 보통 대폭 할인 요금으로 제공되고, 항해 번호는 리포지셔닝 항해든 정규 일정이든 관계없이 독립적인 재고·수익 단위로 처리하는 해당 항해의 운항 식별자다.'
sources:
  - name: Cruise Industry Source Book — Voyage Number conventions
    org: CLIA (Cruise Lines International Association)
    version: ''
    section: ''
    url: 'https://www.cruising.org'
    tier: association
  - name: OpenTravel Cruise Message Set — VoyageID field specification
    org: OpenTravel Alliance
    version: ''
    section: 'OTA_CruiseSail'
    url: 'https://opentravel.org/download-specs/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M6 34 Q24 22 42 34"/><path d="M10 34 L10 28 Q10 24 14 24 L34 24 Q38 24 38 28 L38 34"/><path d="M18 24 L18 18 L30 18 L30 24"/><path d="M22 18 L22 14 L26 14 L26 18"/><path d="M4 38 H44"/><rect x="20" y="36" width="8" height="5" rx="1"/><text x="24" y="41" font-size="4" text-anchor="middle" fill="currentColor" stroke="none">VN</text></svg>
---

> A Voyage Number is the unique alphanumeric or numeric identifier assigned by a cruise line to a specific sailing of a vessel, distinguishing one itinerary execution from all others operated by the same ship across the season. It serves as the primary key in cruise reservation, manifest, shore excursion, and revenue-reporting systems for linking all guest bookings, crew assignments, port clearances, and onboard service records to a single departure.

Cruise lines typically compose a Voyage Number from a ship code (2–3 characters), a two-digit year, and a sequential voyage counter, though the exact format varies by carrier. For example, a Royal Caribbean voyage might carry a number such as "AE230401" denoting ship Adventure of the Seas, 2023, voyage 04, sailing 01. The Voyage Number anchors all downstream systems: the reservation system links each stateroom booking to the voyage; the shore excursion system sells products keyed to the voyage and its port-of-call schedule; the guest manifest produced for customs and immigration authorities references the voyage number for reporting; and CLIA uses voyage-level data to compile the Available Passenger Cruise Days (APCD) metric. In OpenTravel cruise API messages, the voyage identifier appears as a structured field (VoyageID) enabling automated booking and confirmation exchange between the cruise line and travel agents or online travel agencies. From a revenue management perspective, the Voyage Number defines the inventory unit: staterooms are priced and yielded per voyage, and wave-season yield tracking is aggregated at the voyage level. Repositioning cruises and World Cruise segments each receive their own Voyage Number, allowing discrete revenue and operational reporting even when itineraries share ship time.

**한국어 / Korean** — **항해 번호(Voyage Number)** — 항해 번호(Voyage Number)는 크루즈 선사가 특정 선박의 특정 항해에 부여하는 고유 영숫자 또는 숫자 식별자로, 동일 선박이 시즌 내내 운항하는 모든 항해를 구별한다. 크루즈 예약, 매니페스트, 기항지 투어, 수익 보고 시스템에서 모든 선객 예약, 승무원 배정, 입항 허가, 선내 서비스 기록을 단일 출항으로 연결하는 기본 키(primary key) 역할을 한다.

크루즈 선사는 일반적으로 선박 코드(2~3자), 두 자리 연도, 순차 항해 카운터를 결합해 항해 번호를 구성하지만 정확한 형식은 선사마다 다르다. 항해 번호는 예약 시스템, 기항지 투어 시스템, 세관·출입국 선객 매니페스트, CLIA APCD 집계 등 모든 하위 시스템의 닻 역할을 한다. OpenTravel 크루즈 API 메시지에서 항해 식별자는 VoyageID 구조화 필드로 나타나며, 선사와 여행사·OTA 간 자동화 예약·확정 교환을 지원한다.

**Aliases:** `Voyage ID`, `VoyageID`, `Sailing Number`, `Cruise Voyage Number`

# Related
- [Shore Excursion](/cruise/cruise/shore-excursion.md) — related
- [Manifest](/tours/tour-ops/manifest.md) — related
- [Port of Call](/cruise/cruise/port-of-call.md) — related
- [Turnaround Day](/cruise/cruise/turnaround-day.md) — related
- [Available Passenger Cruise Days (APCD)](/cruise/cruise/available-passenger-cruise-days-apcd.md) — related
- [Repositioning Cruise](/cruise/cruise/repositioning-cruise.md) — related
- [Stateroom](/cruise/cruise/stateroom.md) — related

# Distinctions
- **Voyage Number** vs [Available Passenger Cruise Days (APCD)](/cruise/cruise/available-passenger-cruise-days-apcd.md) — APCD is an industry capacity metric representing the total number of passenger berths multiplied by the days in a given period; the Voyage Number is the discrete operational identifier for a single sailing, and APCD is aggregated across all voyage numbers in a fleet to compute the metric.
- **Voyage Number** vs [Repositioning Cruise](/cruise/cruise/repositioning-cruise.md) — A Repositioning Cruise is a sailing that moves a ship from one homeport or deployment region to another, usually at a heavily discounted fare; the Voyage Number is the operational identifier for any such sailing, treating it as a discrete inventory and revenue unit regardless of whether it is a repositioning voyage or a regular itinerary.

# Citations
[1] [CLIA (Cruise Lines International Association) — Cruise Industry Source Book — Voyage Number conventions](https://www.cruising.org)
[2] [OpenTravel Alliance — OpenTravel Cruise Message Set — VoyageID field specification — OTA_CruiseSail](https://opentravel.org/download-specs/)
