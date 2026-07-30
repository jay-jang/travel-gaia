---
type: Document
title: LOPA
description: 'A LOPA (Layout of Passenger Accommodations) is the authoritative document and/or dataset that defines the exact physical arrangement of an aircraft''s passenger cabin: every seat row and letter, galley, lavatory, emergency exit, bulkhead, and class divider. Airlines use LOPA data to generate seat maps in NDC, EDIFACT, and GDS distribution, as well as for weight-and-balance calculations and departure control system configuration.'
tags:
  - air-ops
  - active
  - IATA
timestamp: '2026-07-30T00:00:00Z'
id: lopa
vertical: air
category: air-ops
conceptType: document
status: active
abbreviation: LOPA
term_ko: 객실 좌석 배치도(LOPA)
definition_ko: 'LOPA(Layout of Passenger Accommodations)는 항공기 객실의 물리적 구성을 정의하는 권위 있는 문서 및/또는 데이터셋이다. 모든 좌석 열·좌석 코드, 갤리, 화장실, 비상 탈출구, 격벽(bulkhead), 클래스 구분선이 포함된다. 항공사는 LOPA 데이터를 사용해 NDC·EDIFACT·GDS 유통에서 좌석 배치도(seat map)를 생성하고, 무게 및 균형(weight and balance) 계산 및 출발 통제 시스템(DCS) 구성에도 활용한다.'
longDef: 'Aircraft manufacturers (Airbus, Boeing) deliver a LOPA with each aircraft, and airlines update it whenever they reconfigure the cabin — adding seats, changing pitch, or altering class boundaries. Each seat on the LOPA carries attributes such as seat type (window/middle/aisle), seat characteristics (exit row, bassinet, recline restriction, limited legroom), and class of service. In airline distribution, the LOPA is the source of truth for seat map data published through NDC SeatAvailability responses, EDIFACT SLARES (Seat List and Reservation System) messages, and GDS seat map displays. IATA''s passenger standards specify how LOPA-derived seat attributes are encoded in PADIS codesets and NDC schema elements so that accurate seat maps flow through distribution channels to travelers at the point of sale. In operations, the LOPA feeds departure control systems (DCS) to enforce seat assignment rules and supports weight-and-balance calculations by documenting the arm (moment) of each seat position relative to the aircraft datum.'
longDef_ko: '항공기 제조사(에어버스, 보잉)는 항공기 인도 시 LOPA를 함께 제공하며, 항공사는 좌석 추가·피치 변경·클래스 경계 변경 등 객실 재구성이 이루어질 때마다 이를 업데이트한다. LOPA의 각 좌석에는 좌석 유형(창가/중간/통로), 좌석 특성(비상구 열, 바시넷, 등받이 제한, 레그룸 제한), 서비스 등급 등의 속성이 부여된다. 항공 유통에서 LOPA는 NDC SeatAvailability 응답, EDIFACT SLARES 메시지, GDS 좌석 배치도 표시를 통해 배포되는 좌석 배치도 데이터의 원천 정보다. IATA 승객 표준은 LOPA 기반 좌석 속성이 PADIS 코드셋과 NDC 스키마 요소에 인코딩되는 방식을 규정하여 정확한 좌석 배치도가 유통 채널을 통해 판매 시점에 여행자에게 전달될 수 있도록 한다. 운항 측면에서 LOPA는 좌석 배정 규칙을 시행하기 위해 출발 통제 시스템(DCS)에 데이터를 제공하며, 항공기 기준점(datum) 대비 각 좌석 위치의 모멘트 암(arm)을 문서화함으로써 무게 및 균형 계산을 지원한다.'
standardBody: IATA (PADIS / NDC)
aliases:
  - Layout of Passenger Accommodations
  - Cabin Layout
  - Aircraft Seat Map Configuration
relationships:
  - type: related
    targetTerm: Seat Map
  - type: related
    targetTerm: NDC
  - type: related
    targetTerm: Departure Control System (DCS)
  - type: related
    targetTerm: CUTE
  - type: related
    targetTerm: Weight and Balance
distinctions:
  - targetTerm: Seat Map
    explanation: 'A Seat Map is the visual and data representation of available seats shown to a traveler at booking or check-in; the LOPA is the authoritative cabin configuration document that airlines maintain and from which seat map data is derived — the LOPA is the source, the Seat Map is the distribution-facing output.'
    explanation_ko: 'Seat Map은 예약 또는 체크인 시 여행자에게 표시되는 가용 좌석의 시각적·데이터 표현이고, LOPA는 항공사가 관리하는 권위 있는 객실 구성 문서로 좌석 배치도 데이터가 파생되는 원천이다. 즉, LOPA는 원천이고 Seat Map은 유통 면 출력물이다.'
sources:
  - name: IATA Passenger Standards — NDC Seat Map Schema and PADIS Seat Map Codesets
    org: IATA
    version: NDC 21.3
    section: SeatAvailability / SeatMap response elements
    url: 'https://www.iata.org/en/industry/passenger-standards/ndc/'
    tier: standard-body
  - name: Airbus Aircraft Characteristics — Cabin Layout Documentation
    org: Airbus
    version: ''
    section: LOPA / Cabin Configuration
    url: 'https://www.airbus.com/en/aircraft/support-services/airport-operations-and-technical-data/aircraft-characteristics'
    tier: vendor-doc
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="10" width="36" height="28" rx="3"/><path d="M6 18h36"/><path d="M14 22h4v4h-4z M22 22h4v4h-4z M30 22h4v4h-4z"/><path d="M14 30h4v4h-4z M22 30h4v4h-4z M30 30h4v4h-4z"/><path d="M10 10v28"/></svg>
---

> A LOPA (Layout of Passenger Accommodations) is the authoritative document and/or dataset that defines the exact physical arrangement of an aircraft's passenger cabin: every seat row and letter, galley, lavatory, emergency exit, bulkhead, and class divider. Airlines use LOPA data to generate seat maps in NDC, EDIFACT, and GDS distribution, as well as for weight-and-balance calculations and departure control system configuration.

Aircraft manufacturers (Airbus, Boeing) deliver a LOPA with each aircraft, and airlines update it whenever they reconfigure the cabin — adding seats, changing pitch, or altering class boundaries. Each seat on the LOPA carries attributes such as seat type (window/middle/aisle), seat characteristics (exit row, bassinet, recline restriction, limited legroom), and class of service. In airline distribution, the LOPA is the source of truth for seat map data published through NDC SeatAvailability responses, EDIFACT SLARES messages, and GDS seat map displays. IATA's passenger standards specify how LOPA-derived seat attributes are encoded in PADIS codesets and NDC schema elements so that accurate seat maps flow through distribution channels to travelers at the point of sale. In operations, the LOPA feeds departure control systems (DCS) to enforce seat assignment rules and supports weight-and-balance calculations by documenting the arm (moment) of each seat position relative to the aircraft datum.

**한국어 / Korean** — **객실 좌석 배치도(LOPA)** — LOPA(Layout of Passenger Accommodations)는 항공기 객실의 물리적 구성을 정의하는 권위 있는 문서 및/또는 데이터셋이다. 모든 좌석 열·좌석 코드, 갤리, 화장실, 비상 탈출구, 격벽, 클래스 구분선이 포함된다. 항공사는 LOPA 데이터를 사용해 NDC·EDIFACT·GDS 유통에서 좌석 배치도를 생성하고, 무게 및 균형 계산 및 DCS 구성에도 활용한다.

항공기 제조사는 항공기 인도 시 LOPA를 함께 제공하며, 항공사는 객실 재구성 시마다 업데이트한다. LOPA의 각 좌석에는 좌석 유형, 좌석 특성, 서비스 등급 속성이 부여된다. 항공 유통에서 LOPA는 NDC SeatAvailability 응답, EDIFACT SLARES 메시지, GDS 좌석 배치도 표시의 원천 데이터이다. IATA 승객 표준은 LOPA 기반 좌석 속성이 PADIS 코드셋과 NDC 스키마에 인코딩되는 방식을 규정한다.

**Aliases:** `Layout of Passenger Accommodations`, `Cabin Layout`, `Aircraft Seat Map Configuration`

# Related
- [Seat Map](/air/air-ops/seat-map.md) — related
- [NDC](/common/standards/ndc.md) — related
- [Departure Control System (DCS)](/air/air-ops/departure-control-system-dcs.md) — related
- [CUTE](/common/standards/cute.md) — related
- [Weight and Balance](/air/air-ops/weight-and-balance.md) — related

# Distinctions
- **LOPA** vs [Seat Map](/air/air-ops/seat-map.md) — A Seat Map is the visual and data representation of available seats shown to a traveler at booking or check-in; the LOPA is the authoritative cabin configuration document that airlines maintain and from which seat map data is derived — the LOPA is the source, the Seat Map is the distribution-facing output.

# Citations
[1] [IATA — IATA Passenger Standards — NDC Seat Map Schema and PADIS Seat Map Codesets — NDC 21.3](https://www.iata.org/en/industry/passenger-standards/ndc/)
[2] [Airbus — Airbus Aircraft Characteristics — Cabin Layout Documentation](https://www.airbus.com/en/aircraft/support-services/airport-operations-and-technical-data/aircraft-characteristics)
