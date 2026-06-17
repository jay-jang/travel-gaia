---
type: Code
title: GIATA ID
description: 'A GIATA ID is a unique property identifier assigned by GIATA''s Multicodes service that maps a single physical hotel to the many different codes the same property carries across suppliers — GDSs, OTAs, bedbanks, and tour operators. It is the de facto, widely adopted backbone for hotel mapping and de-duplication, letting any participant exchange content and bookings for the same hotel without rebuilding a bespoke mapping.'
tags:
  - hotel-dist
  - active
  - GIATA
timestamp: '2026-06-17T00:00:00Z'
id: giata-id
category: hotel-dist
conceptType: code
status: active
term_ko: GIATA ID (GIATA 멀티코드)
definition_ko: 'GIATA ID는 GIATA의 Multicodes 서비스가 부여하는 고유 프로퍼티 식별자로, 하나의 실제 호텔을 GDS·OTA·Bedbank·투어 오퍼레이터 등 여러 공급자에서 동일 호텔이 갖는 서로 다른 코드들에 매핑한다. 호텔 매핑과 중복 제거(de-duplication)의 사실상(de facto) 산업 기반으로 널리 채택되어, 각 참여자가 별도의 매핑을 새로 구축하지 않고도 같은 호텔의 콘텐츠와 예약을 교환할 수 있게 한다.'
longDef: 'GIATA (a Berlin-based provider operating since 1996) assigns each accommodation a single GIATA ID and continuously maps the supplier-specific property codes (hotelCode) used by content providers onto it, reconciling tens of millions of booking codes from hundreds of suppliers to a far smaller set of unique properties. Mapping combines automated matching against attributes (name, address, geocode, rating), digital fingerprinting, and manual validation, with daily refresh. Because GDSs, OTAs, metasearch engines, bedbanks, and tour operators all reference the GIATA ID, it serves as the shared ''content/mapping backbone'' of hotel distribution: a property registers or is asked for its GIATA ID so that all channels resolve to the same hotel, which reduces duplicate listings, mis-attributed availability, and parity errors. It is distinct from the generic Property Mapping process: GIATA ID is the concrete cross-industry identifier and reference dataset, whereas property mapping is the activity of matching codes (which GIATA''s identifier operationalizes at industry scale).'
longDef_ko: 'GIATA(1996년부터 운영되는 베를린 소재 사업자)는 각 숙소에 단일 GIATA ID를 부여하고, 콘텐츠 공급자가 사용하는 공급자별 프로퍼티 코드(hotelCode)를 여기에 지속적으로 매핑하여, 수백 개 공급자의 수천만 개 예약 코드를 훨씬 적은 수의 고유 호텔로 정리한다. 매핑은 속성(이름·주소·좌표·등급) 기반 자동 매칭, 디지털 지문(digital fingerprinting), 수작업 검증을 결합하며 매일 갱신된다. GDS·OTA·메타서치·Bedbank·투어 오퍼레이터가 모두 GIATA ID를 참조하므로, 이는 호텔 유통의 공유 ''콘텐츠/매핑 백본'' 역할을 한다. 즉 호텔은 자신의 GIATA ID를 등록하거나 요청받아 모든 채널이 동일한 호텔로 수렴하게 함으로써 중복 리스팅, 잘못 귀속된 가용성, parity 오류를 줄인다. 이는 일반적인 Property Mapping 프로세스와 구별된다. GIATA ID는 구체적인 범산업 식별자이자 참조 데이터셋인 반면, property mapping은 코드를 일치시키는 활동(GIATA의 식별자가 이를 산업 규모로 구현)이다.'
standardBody: GIATA
aliases:
  - GIATA Multicodes
  - GIATA MultiCodes
  - GIATA Code
  - GIATA-ID
providerTerms:
  - provider: GIATA
    term: GIATA Multicodes
    context: 'GIATA''s hotel mapping and de-duplication product that assigns the GIATA ID and maps supplier codes from GDSs, OTAs, tour operators, and bedbanks to it.'
    context_ko: GIATA ID를 부여하고 GDS·OTA·투어 오퍼레이터·Bedbank의 공급자 코드를 여기에 매핑하는 GIATA의 호텔 매핑·중복 제거 제품.
    relationship: same
relationships:
  - type: related
    targetTerm: Property Mapping
  - type: related
    targetTerm: Chain Code
  - type: related
    targetTerm: Bedbank
  - type: related
    targetTerm: GDS
  - type: related
    targetTerm: OTA (Online Travel Agency)
  - type: related
    targetTerm: Aggregator
distinctions:
  - targetTerm: Property Mapping
    explanation: 'Property mapping is the general process of matching a hotel and its products to another system''s identifiers; the GIATA ID is the concrete, cross-industry identifier (and reference dataset) that operationalizes that mapping at scale so all parties share one code.'
    explanation_ko: 'Property mapping은 호텔과 그 상품을 다른 시스템의 식별자에 일치시키는 일반적 프로세스이고, GIATA ID는 그 매핑을 산업 규모로 구현하여 모든 당사자가 하나의 코드를 공유하게 하는 구체적인 범산업 식별자(및 참조 데이터셋)다.'
  - targetTerm: Chain Code
    explanation: 'A chain code identifies the brand/representation entity a property sells under (a 2-character GDS code); a GIATA ID uniquely identifies the individual physical property itself across all suppliers, regardless of chain.'
    explanation_ko: 'Chain code는 프로퍼티가 판매되는 브랜드/대표 주체를 식별하는 2자리 GDS 코드이고, GIATA ID는 체인과 무관하게 모든 공급자에 걸쳐 개별 실제 프로퍼티 자체를 고유하게 식별한다.'
sources:
  - org: GIATA
    name: GIATA Multicodes — The Global Standard for Hotel Mapping
    version: ''
    section: ''
    url: 'https://www.giata.com/en/products-services/hotel-mapping-for-otas/'
  - org: GIATA
    name: What Is GIATA MultiCodes?
    version: ''
    section: ''
    url: 'https://info.giata.com/en/knowledge/what-is-multicodes-mc'
  - org: AltexSoft
    name: 'Hotel Mapping Tools: How GIATA, Gimmonix, Vervotech and Others Work'
    version: ''
    section: ''
    url: 'https://www.altexsoft.com/blog/hotel-mapping-tools-how-giata-gimmonix-databindr-and-other-solutions-work/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="22" r="6"/><circle cx="24" cy="22" r="1.5" fill="currentColor" stroke="none"/><path d="M9 14h6M9 22h4M9 30h6M33 14h6M35 22h4M33 30h6"/><path d="M15 14l3 5M15 30l3-5M33 14l-3 5M33 30l-3-5"/></svg>
---

> A GIATA ID is a unique property identifier assigned by GIATA's Multicodes service that maps a single physical hotel to the many different codes the same property carries across suppliers — GDSs, OTAs, bedbanks, and tour operators. It is the de facto, widely adopted backbone for hotel mapping and de-duplication, letting any participant exchange content and bookings for the same hotel without rebuilding a bespoke mapping.

GIATA (a Berlin-based provider operating since 1996) assigns each accommodation a single GIATA ID and continuously maps the supplier-specific property codes (hotelCode) used by content providers onto it, reconciling tens of millions of booking codes from hundreds of suppliers to a far smaller set of unique properties. Mapping combines automated matching against attributes (name, address, geocode, rating), digital fingerprinting, and manual validation, with daily refresh. Because GDSs, OTAs, metasearch engines, bedbanks, and tour operators all reference the GIATA ID, it serves as the shared 'content/mapping backbone' of hotel distribution: a property registers or is asked for its GIATA ID so that all channels resolve to the same hotel, which reduces duplicate listings, mis-attributed availability, and parity errors. It is distinct from the generic Property Mapping process: GIATA ID is the concrete cross-industry identifier and reference dataset, whereas property mapping is the activity of matching codes (which GIATA's identifier operationalizes at industry scale).

**한국어 / Korean** — **GIATA ID (GIATA 멀티코드)** — GIATA ID는 GIATA의 Multicodes 서비스가 부여하는 고유 프로퍼티 식별자로, 하나의 실제 호텔을 GDS·OTA·Bedbank·투어 오퍼레이터 등 여러 공급자에서 동일 호텔이 갖는 서로 다른 코드들에 매핑한다. 호텔 매핑과 중복 제거(de-duplication)의 사실상(de facto) 산업 기반으로 널리 채택되어, 각 참여자가 별도의 매핑을 새로 구축하지 않고도 같은 호텔의 콘텐츠와 예약을 교환할 수 있게 한다.

GIATA(1996년부터 운영되는 베를린 소재 사업자)는 각 숙소에 단일 GIATA ID를 부여하고, 콘텐츠 공급자가 사용하는 공급자별 프로퍼티 코드(hotelCode)를 여기에 지속적으로 매핑하여, 수백 개 공급자의 수천만 개 예약 코드를 훨씬 적은 수의 고유 호텔로 정리한다. 매핑은 속성(이름·주소·좌표·등급) 기반 자동 매칭, 디지털 지문(digital fingerprinting), 수작업 검증을 결합하며 매일 갱신된다. GDS·OTA·메타서치·Bedbank·투어 오퍼레이터가 모두 GIATA ID를 참조하므로, 이는 호텔 유통의 공유 '콘텐츠/매핑 백본' 역할을 한다. 즉 호텔은 자신의 GIATA ID를 등록하거나 요청받아 모든 채널이 동일한 호텔로 수렴하게 함으로써 중복 리스팅, 잘못 귀속된 가용성, parity 오류를 줄인다. 이는 일반적인 Property Mapping 프로세스와 구별된다. GIATA ID는 구체적인 범산업 식별자이자 참조 데이터셋인 반면, property mapping은 코드를 일치시키는 활동(GIATA의 식별자가 이를 산업 규모로 구현)이다.

**Aliases:** `GIATA Multicodes`, `GIATA MultiCodes`, `GIATA Code`, `GIATA-ID`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| GIATA | `GIATA Multicodes` | same | GIATA's hotel mapping and de-duplication product that assigns the GIATA ID and maps supplier codes from GDSs, OTAs, tour operators, and bedbanks to it. |

# Related
- [Property Mapping](/hotel-dist/property-mapping.md) — related
- [Chain Code](/codes/chain-code.md) — related
- [Bedbank](/hotel-dist/bedbank.md) — related
- [GDS](/standards/gds.md) — related
- [OTA (Online Travel Agency)](/standards/ota-online-travel-agency.md) — related
- [Aggregator](/standards/aggregator.md) — related

# Distinctions
- **GIATA ID** vs [Property Mapping](/hotel-dist/property-mapping.md) — Property mapping is the general process of matching a hotel and its products to another system's identifiers; the GIATA ID is the concrete, cross-industry identifier (and reference dataset) that operationalizes that mapping at scale so all parties share one code.
- **GIATA ID** vs [Chain Code](/codes/chain-code.md) — A chain code identifies the brand/representation entity a property sells under (a 2-character GDS code); a GIATA ID uniquely identifies the individual physical property itself across all suppliers, regardless of chain.

# Citations
[1] [GIATA — GIATA Multicodes — The Global Standard for Hotel Mapping](https://www.giata.com/en/products-services/hotel-mapping-for-otas/)
[2] [GIATA — What Is GIATA MultiCodes?](https://info.giata.com/en/knowledge/what-is-multicodes-mc)
[3] [AltexSoft — Hotel Mapping Tools: How GIATA, Gimmonix, Vervotech and Others Work](https://www.altexsoft.com/blog/hotel-mapping-tools-how-giata-gimmonix-databindr-and-other-solutions-work/)
