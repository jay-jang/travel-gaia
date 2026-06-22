---
type: Process
title: Property Mapping
description: 'Property mapping is the process of matching a hotel — and its room types and rate plans — to the corresponding identifiers used by another system or distribution channel, so that ARI and reservation messages reference the same property and product on both sides. It resolves the fact that the same hotel carries different property codes (hotelCode) and room/rate codes across CRSs, GDSs, OTAs, switches, and bedbanks.'
tags:
  - hotel-dist
  - active
  - OpenTravel Alliance
timestamp: '2026-06-17T00:00:00Z'
id: property-mapping
vertical: lodging
category: hotel-dist
conceptType: process
status: active
term_ko: 프로퍼티 매핑 (Property Mapping)
definition_ko: '프로퍼티 매핑은 한 호텔과 그 객실 유형·요금 플랜을 다른 시스템 또는 유통 채널에서 사용하는 식별자에 일치시켜, 양측의 ARI·예약 메시지가 동일한 호텔과 상품을 가리키도록 하는 작업이다. 동일한 호텔이라도 CRS·GDS·OTA·스위치·Bedbank마다 서로 다른 프로퍼티 코드(hotelCode)와 객실/요금 코드를 갖는 문제를 해소한다.'
longDef: 'Because each distribution platform assigns its own identifiers, a single physical hotel may appear as different property IDs across systems, and its "Deluxe King, Breakfast Included" product may carry different room-type and rate-plan codes on each channel. Property mapping (and the finer-grained room and rate mapping) establishes the correspondence so that an inbound availability request or booking is routed to the correct property and product. Mapping can be manual, rules-based, or increasingly machine-learning assisted using attributes such as name, address, geocode, and star rating. Incorrect mapping is a common root cause of distribution errors: rooms sold against the wrong product, rate discrepancies, parity breaches, or overbookings. In OpenTravel/HTNG messaging the mapped property identifier is the hotelCode (and chainCode) used in OTA_Hotel* requests.'
longDef_ko: '각 유통 플랫폼이 자체 식별자를 부여하기 때문에, 하나의 실제 호텔이 시스템마다 서로 다른 property ID로 나타나고 ''Deluxe King, 조식 포함'' 상품도 채널마다 다른 객실 유형·요금 플랜 코드를 가질 수 있다. 프로퍼티 매핑(및 더 세밀한 객실·요금 매핑)은 이 대응 관계를 설정하여, 들어오는 가용성 요청이나 예약이 올바른 호텔과 상품으로 라우팅되게 한다. 매핑은 수작업, 규칙 기반, 또는 이름·주소·좌표·등급 등 속성을 활용한 머신러닝 보조 방식으로 이뤄진다. 잘못된 매핑은 엉뚱한 상품으로 판매, 요금 불일치, parity 위반, 오버부킹 등 유통 오류의 흔한 원인이다. OpenTravel/HTNG 메시징에서 매핑된 프로퍼티 식별자는 OTA_Hotel* 요청에 사용되는 hotelCode(및 chainCode)다.'
standardBody: OpenTravel Alliance
aliases:
  - Hotel Mapping
  - Room & Rate Mapping
  - Content Mapping
relationships:
  - type: related
    targetTerm: Hotel Switch
  - type: related
    targetTerm: Channel Manager
  - type: related
    targetTerm: ARI
  - type: related
    targetTerm: Room Type
  - type: related
    targetTerm: Rate Plan
  - type: related
    targetTerm: Chain Code
distinctions:
  - targetTerm: ARI
    explanation: ARI is the availability/rate/inventory data exchanged between systems; property mapping is the prerequisite that ensures each ARI message is attributed to the correct property and product on the receiving side.
    explanation_ko: 'ARI는 시스템 간에 교환되는 가용성·요금·재고 데이터이고, 프로퍼티 매핑은 각 ARI 메시지가 수신 측에서 올바른 호텔·상품에 귀속되도록 보장하는 선행 조건이다.'
  - targetTerm: GIATA ID
    explanation: 'Property mapping is the general process of matching a hotel and its products to another system''s identifiers; the GIATA ID is the concrete, cross-industry identifier (and reference dataset) that operationalizes that mapping at scale so all parties share one code.'
    explanation_ko: 'Property mapping은 호텔과 그 상품을 다른 시스템의 식별자에 일치시키는 일반적 프로세스이고, GIATA ID는 그 매핑을 산업 규모로 구현하여 모든 당사자가 하나의 코드를 공유하게 하는 구체적인 범산업 식별자(및 참조 데이터셋)다.'
sources:
  - org: AltexSoft
    name: 'Hotel Tech Specifications by HTNG, OpenTravel, and HEDNA'
    version: ''
    section: Property Identification
    url: 'https://www.altexsoft.com/blog/hotel-tech-specifications-htng-opentravel/'
  - org: OpenTravel Alliance
    name: OpenTravel Object Model (Hospitality)
    version: ''
    section: ''
    url: 'https://opentravel.org/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="14" width="14" height="20" rx="2"/><line x1="9" y1="19" x2="15" y2="19"/><line x1="9" y1="24" x2="15" y2="24"/><rect x="29" y="14" width="14" height="20" rx="2"/><line x1="33" y1="19" x2="39" y2="19"/><line x1="33" y1="24" x2="39" y2="24"/><path d="M19 24h4l2-3 2 6 1-3h1"/></svg>
---

> Property mapping is the process of matching a hotel — and its room types and rate plans — to the corresponding identifiers used by another system or distribution channel, so that ARI and reservation messages reference the same property and product on both sides. It resolves the fact that the same hotel carries different property codes (hotelCode) and room/rate codes across CRSs, GDSs, OTAs, switches, and bedbanks.

Because each distribution platform assigns its own identifiers, a single physical hotel may appear as different property IDs across systems, and its "Deluxe King, Breakfast Included" product may carry different room-type and rate-plan codes on each channel. Property mapping (and the finer-grained room and rate mapping) establishes the correspondence so that an inbound availability request or booking is routed to the correct property and product. Mapping can be manual, rules-based, or increasingly machine-learning assisted using attributes such as name, address, geocode, and star rating. Incorrect mapping is a common root cause of distribution errors: rooms sold against the wrong product, rate discrepancies, parity breaches, or overbookings. In OpenTravel/HTNG messaging the mapped property identifier is the hotelCode (and chainCode) used in OTA_Hotel* requests.

**한국어 / Korean** — **프로퍼티 매핑 (Property Mapping)** — 프로퍼티 매핑은 한 호텔과 그 객실 유형·요금 플랜을 다른 시스템 또는 유통 채널에서 사용하는 식별자에 일치시켜, 양측의 ARI·예약 메시지가 동일한 호텔과 상품을 가리키도록 하는 작업이다. 동일한 호텔이라도 CRS·GDS·OTA·스위치·Bedbank마다 서로 다른 프로퍼티 코드(hotelCode)와 객실/요금 코드를 갖는 문제를 해소한다.

각 유통 플랫폼이 자체 식별자를 부여하기 때문에, 하나의 실제 호텔이 시스템마다 서로 다른 property ID로 나타나고 'Deluxe King, 조식 포함' 상품도 채널마다 다른 객실 유형·요금 플랜 코드를 가질 수 있다. 프로퍼티 매핑(및 더 세밀한 객실·요금 매핑)은 이 대응 관계를 설정하여, 들어오는 가용성 요청이나 예약이 올바른 호텔과 상품으로 라우팅되게 한다. 매핑은 수작업, 규칙 기반, 또는 이름·주소·좌표·등급 등 속성을 활용한 머신러닝 보조 방식으로 이뤄진다. 잘못된 매핑은 엉뚱한 상품으로 판매, 요금 불일치, parity 위반, 오버부킹 등 유통 오류의 흔한 원인이다. OpenTravel/HTNG 메시징에서 매핑된 프로퍼티 식별자는 OTA_Hotel* 요청에 사용되는 hotelCode(및 chainCode)다.

**Aliases:** `Hotel Mapping`, `Room & Rate Mapping`, `Content Mapping`

# Related
- [Hotel Switch](/lodging/hotel-dist/hotel-switch.md) — related
- [Channel Manager](/lodging/hotel-dist/channel-manager.md) — related
- [ARI](/lodging/hotel-dist/ari.md) — related
- [Room Type](/lodging/hotel-rate/room-type.md) — related
- [Rate Plan](/lodging/hotel-rate/rate-plan.md) — related
- [Chain Code](/common/codes/chain-code.md) — related

# Distinctions
- **Property Mapping** vs [ARI](/lodging/hotel-dist/ari.md) — ARI is the availability/rate/inventory data exchanged between systems; property mapping is the prerequisite that ensures each ARI message is attributed to the correct property and product on the receiving side.
- **Property Mapping** vs [GIATA ID](/lodging/hotel-dist/giata-id.md) — Property mapping is the general process of matching a hotel and its products to another system's identifiers; the GIATA ID is the concrete, cross-industry identifier (and reference dataset) that operationalizes that mapping at scale so all parties share one code.

# Citations
[1] [AltexSoft — Hotel Tech Specifications by HTNG, OpenTravel, and HEDNA — Property Identification](https://www.altexsoft.com/blog/hotel-tech-specifications-htng-opentravel/)
[2] [OpenTravel Alliance — OpenTravel Object Model (Hospitality)](https://opentravel.org/)
