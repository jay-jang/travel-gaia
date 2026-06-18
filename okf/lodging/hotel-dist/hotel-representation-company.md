---
type: Business Term
title: Hotel Representation Company
description: 'A hotel representation company is a third party that gives independent hotels GDS and OTA distribution reach—plus voice, sales, and marketing services—typically by placing them under a shared or private-label chain code that they would not have on their own. Examples include Utell, HotelREZ, and Keytel.'
tags:
  - hotel-dist
  - active
timestamp: '2026-06-18T00:00:00Z'
id: hotel-representation-company
vertical: lodging
category: hotel-dist
conceptType: business-term
status: active
term_ko: 호텔 대표 판매 회사(Hotel Representation Company)
definition_ko: 'Hotel Representation Company(호텔 대표 판매 회사)는 독립 호텔에 GDS·OTA 유통 도달 범위와 함께 전화(voice)·영업·마케팅 서비스를 제공하는 제3자로, 보통 독립 호텔이 단독으로는 가질 수 없는 공유 또는 프라이빗 라벨 chain code 아래 호텔을 배치한다. Utell, HotelREZ, Keytel 등이 그 예다.'
longDef: 'Independent (non-chain) hotels generally cannot obtain their own GDS chain code or sustain the technical and commercial relationships needed to sell through Amadeus, Sabre, and Travelport, so they engage a representation company that aggregates many such properties. The rep company connects the hotels to the GDSs (reaching hundreds of thousands of travel agents) and to OTAs and tour operators, often under its own chain code (for example HotelREZ represents properties under the HO chain code) or via a private-label chain code so a property or soft brand can appear under its own two-letter identity. Beyond connectivity, rep companies typically provide central voice reservations, rate loading, revenue and sales consultancy, and marketing. They are the principal distribution route that lets independents compete with chains on the GDS, and they sit upstream of the CRS/channel-manager layer that loads and synchronizes the inventory.'
longDef_ko: '독립(비체인) 호텔은 일반적으로 자체 GDS chain code를 확보하거나 Amadeus·Sabre·Travelport를 통해 판매하는 데 필요한 기술적·상업적 관계를 유지하기 어려우므로, 이러한 다수 호텔을 집약하는 대표 판매 회사를 이용한다. 대표 판매 회사는 호텔을 GDS(수십만 여행사에 도달)와 OTA·투어 오퍼레이터에 연결하며, 흔히 자체 chain code 아래(예: HotelREZ는 HO chain code로 호텔을 대표함) 또는 프라이빗 라벨 chain code를 통해 개별 호텔이나 소프트 브랜드가 자체 두 글자 식별자로 표시되도록 한다. 연결 외에도 대표 판매 회사는 보통 중앙 전화 예약, 요금 로딩, 수익·영업 컨설팅, 마케팅을 제공한다. 이들은 독립 호텔이 GDS에서 체인과 경쟁하게 해 주는 주요 유통 경로이며, 인벤토리를 로딩·동기화하는 CRS/Channel Manager 계층의 상류에 위치한다.'
aliases:
  - Hotel Rep Company
  - Representation Company
  - Rep Firm
  - GDS Representation
providerTerms:
  - provider: HotelREZ
    term: Hotel representation company
    context: 'HotelREZ describes itself as a hotel representation company connecting independent properties to the GDSs and 400+ OTAs/tour operators, representing hotels under the HO chain code and also offering private-label GDS chain code solutions.'
    context_ko: 'HotelREZ는 독립 호텔을 GDS와 400곳 이상의 OTA/투어 오퍼레이터에 연결하는 호텔 대표 판매 회사로, HO chain code 아래 호텔을 대표하며 프라이빗 라벨 GDS chain code 솔루션도 제공한다.'
    relationship: same
  - provider: Pegasus (Utell)
    term: Utell hotel representation
    context: Utell is a long-established hotel representation brand providing GDS distribution and voice/marketing services to independent hotels.
    context_ko: Utell은 독립 호텔에 GDS 유통과 전화(voice)·마케팅 서비스를 제공하는 오랜 역사의 호텔 대표 판매 브랜드다.
    relationship: same
  - provider: Keytel
    term: Hotel representation on GDS
    context: 'Keytel represents hotels on the GDS, letting individual hotels or regional groups access the GDS with their own identity and reach hundreds of thousands of travel agencies.'
    context_ko: Keytel은 GDS에서 호텔을 대표하여 개별 호텔이나 지역 그룹이 자체 정체성으로 GDS에 접근하고 수십만 여행사에 도달할 수 있게 한다.
    relationship: same
relationships:
  - type: related
    targetTerm: Chain Code
  - type: related
    targetTerm: Private Label Chain Code
  - type: related
    targetTerm: GDS
  - type: related
    targetTerm: CRS
  - type: related
    targetTerm: Hotel Switch
distinctions:
  - targetTerm: CRS
    explanation: 'A CRS is the technology that stores and distributes a hotel''s inventory; a representation company is the commercial intermediary that signs up independents, gives them a chain code, and sells/markets them—often on top of a CRS.'
    explanation_ko: 'CRS는 호텔의 인벤토리를 저장·분배하는 기술이고, 대표 판매 회사는 독립 호텔을 모집해 chain code를 부여하고 판매·마케팅하는 상업적 중개자로, 흔히 CRS 위에서 운영된다.'
  - targetTerm: Private Label Chain Code
    explanation: A private-label chain code is the GDS identifier a property is sold under; a representation company is the firm that provides and operates that code (and broader services) for the property.
    explanation_ko: '프라이빗 라벨 chain code는 호텔이 판매되는 GDS 식별자이고, 대표 판매 회사는 그 코드(및 더 넓은 서비스)를 호텔에 제공·운영하는 회사다.'
  - targetTerm: Bedbank
    explanation: A bedbank is a B2B wholesaler that buys net inventory and resells it to travel sellers; a representation company does not buy the rooms—it distributes the hotel's own inventory through the GDS/OTAs under its chain code and brand.
    explanation_ko: 'Bedbank는 순(net) 인벤토리를 사들여 여행 판매자에게 재판매하는 B2B 도매업체이고, 대표 판매 회사는 객실을 사들이지 않고 자사 chain code와 브랜드로 호텔 자체 인벤토리를 GDS/OTA를 통해 분배한다.'
sources:
  - org: HotelREZ
    name: Hotel Representation & Distribution Services
    version: ''
    section: ''
    url: 'https://hotelrez.com/'
  - org: Hospitality Net
    name: 'Utell by Pegasus Expands Hotel Representation Presence (Greece, Italy, Portugal, Spain)'
    version: ''
    section: ''
    url: 'https://www.hospitalitynet.org/'
  - org: Keytel
    name: Keytel — Hotel representation on GDS
    version: ''
    section: ''
    url: 'https://www.keytel.com/EN/GDS/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M24 6l4 6h-8z"/><circle cx="24" cy="20" r="4"/><path d="M24 24v6"/><path d="M10 42v-3a6 6 0 016-6"/><path d="M38 42v-3a6 6 0 00-6-6"/><circle cx="10" cy="24" r="3"/><circle cx="38" cy="24" r="3"/><path d="M24 30c-5 0-8 4-8 8M24 30c5 0 8 4 8 8"/></svg>
---

> A hotel representation company is a third party that gives independent hotels GDS and OTA distribution reach—plus voice, sales, and marketing services—typically by placing them under a shared or private-label chain code that they would not have on their own. Examples include Utell, HotelREZ, and Keytel.

Independent (non-chain) hotels generally cannot obtain their own GDS chain code or sustain the technical and commercial relationships needed to sell through Amadeus, Sabre, and Travelport, so they engage a representation company that aggregates many such properties. The rep company connects the hotels to the GDSs (reaching hundreds of thousands of travel agents) and to OTAs and tour operators, often under its own chain code (for example HotelREZ represents properties under the HO chain code) or via a private-label chain code so a property or soft brand can appear under its own two-letter identity. Beyond connectivity, rep companies typically provide central voice reservations, rate loading, revenue and sales consultancy, and marketing. They are the principal distribution route that lets independents compete with chains on the GDS, and they sit upstream of the CRS/channel-manager layer that loads and synchronizes the inventory.

**한국어 / Korean** — **호텔 대표 판매 회사(Hotel Representation Company)** — Hotel Representation Company(호텔 대표 판매 회사)는 독립 호텔에 GDS·OTA 유통 도달 범위와 함께 전화(voice)·영업·마케팅 서비스를 제공하는 제3자로, 보통 독립 호텔이 단독으로는 가질 수 없는 공유 또는 프라이빗 라벨 chain code 아래 호텔을 배치한다. Utell, HotelREZ, Keytel 등이 그 예다.

독립(비체인) 호텔은 일반적으로 자체 GDS chain code를 확보하거나 Amadeus·Sabre·Travelport를 통해 판매하는 데 필요한 기술적·상업적 관계를 유지하기 어려우므로, 이러한 다수 호텔을 집약하는 대표 판매 회사를 이용한다. 대표 판매 회사는 호텔을 GDS(수십만 여행사에 도달)와 OTA·투어 오퍼레이터에 연결하며, 흔히 자체 chain code 아래(예: HotelREZ는 HO chain code로 호텔을 대표함) 또는 프라이빗 라벨 chain code를 통해 개별 호텔이나 소프트 브랜드가 자체 두 글자 식별자로 표시되도록 한다. 연결 외에도 대표 판매 회사는 보통 중앙 전화 예약, 요금 로딩, 수익·영업 컨설팅, 마케팅을 제공한다. 이들은 독립 호텔이 GDS에서 체인과 경쟁하게 해 주는 주요 유통 경로이며, 인벤토리를 로딩·동기화하는 CRS/Channel Manager 계층의 상류에 위치한다.

**Aliases:** `Hotel Rep Company`, `Representation Company`, `Rep Firm`, `GDS Representation`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| HotelREZ | `Hotel representation company` | same | HotelREZ describes itself as a hotel representation company connecting independent properties to the GDSs and 400+ OTAs/tour operators, representing hotels under the HO chain code and also offering private-label GDS chain code solutions. |
| Pegasus (Utell) | `Utell hotel representation` | same | Utell is a long-established hotel representation brand providing GDS distribution and voice/marketing services to independent hotels. |
| Keytel | `Hotel representation on GDS` | same | Keytel represents hotels on the GDS, letting individual hotels or regional groups access the GDS with their own identity and reach hundreds of thousands of travel agencies. |

# Related
- [Chain Code](/common/codes/chain-code.md) — related
- [Private Label Chain Code](/lodging/hotel-dist/private-label-chain-code.md) — related
- [GDS](/common/standards/gds.md) — related
- [CRS](/lodging/hotel-dist/crs.md) — related
- [Hotel Switch](/lodging/hotel-dist/hotel-switch.md) — related

# Distinctions
- **Hotel Representation Company** vs [CRS](/lodging/hotel-dist/crs.md) — A CRS is the technology that stores and distributes a hotel's inventory; a representation company is the commercial intermediary that signs up independents, gives them a chain code, and sells/markets them—often on top of a CRS.
- **Hotel Representation Company** vs [Private Label Chain Code](/lodging/hotel-dist/private-label-chain-code.md) — A private-label chain code is the GDS identifier a property is sold under; a representation company is the firm that provides and operates that code (and broader services) for the property.
- **Hotel Representation Company** vs [Bedbank](/lodging/hotel-dist/bedbank.md) — A bedbank is a B2B wholesaler that buys net inventory and resells it to travel sellers; a representation company does not buy the rooms—it distributes the hotel's own inventory through the GDS/OTAs under its chain code and brand.

# Citations
[1] [HotelREZ — Hotel Representation & Distribution Services](https://hotelrez.com/)
[2] [Hospitality Net — Utell by Pegasus Expands Hotel Representation Presence (Greece, Italy, Portugal, Spain)](https://www.hospitalitynet.org/)
[3] [Keytel — Keytel — Hotel representation on GDS](https://www.keytel.com/EN/GDS/)
