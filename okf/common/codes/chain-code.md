---
type: Code
title: Chain Code
description: 'A two-letter code used in GDSs and hotel distribution to identify the hotel chain, brand, or representation/distribution company to which a property belongs (e.g., MC for Marriott Hotels, HI for Hilton). A property is identified by its chain code plus a property/hotel ID, and the exact codes can vary by GDS.'
tags:
  - codes
  - active
timestamp: '2026-06-15T00:00:00Z'
id: chain-code
vertical: common
category: codes
conceptType: code
status: active
term_ko: 체인 코드
definition_ko: 'GDS 및 호텔 유통에서 해당 숙소가 속한 호텔 체인, 브랜드, 또는 대리/유통 회사를 식별하는 데 사용되는 2자리 코드(예: 메리어트 호텔은 MC, 힐튼은 HI). 숙소는 체인 코드와 숙소/호텔 ID의 조합으로 식별되며, 정확한 코드는 GDS마다 다를 수 있다.'
longDef: 'Chain codes group hotels under a common brand, parent company, or third-party representation/distribution provider (such as a bedbank or rep firm), and they drive how rates and inventory are loaded and surfaced in the GDS. Independent hotels are often distributed under the chain code of a representation company rather than a true brand. The chain code combined with the GDS property code uniquely addresses a hotel for shopping and booking. Specific two-letter codes are not globally standardized and may differ between GDSs.'
longDef_ko: '체인 코드는 공통 브랜드, 모기업, 또는 제3자 대리/유통 사업자(베드뱅크나 대리 회사 등) 아래로 호텔을 묶으며, 이를 통해 요금과 재고가 GDS에 등록되고 노출되는 방식이 결정된다. 독립 호텔은 실제 브랜드가 아니라 대리 회사의 체인 코드로 유통되는 경우가 많다. 체인 코드와 GDS 숙소 코드를 결합하면 조회 및 예약을 위해 호텔을 고유하게 지정할 수 있다. 구체적인 2자리 코드는 전 세계적으로 표준화되어 있지 않으며 GDS마다 다를 수 있다.'
aliases:
  - Hotel Chain Code
  - GDS Chain Code
  - Two-Letter Chain Code
providerTerms:
  - provider: GDS (Amadeus/Sabre/Travelport)
    term: Two-letter chain code + GDS property code
    context: In GDS hotel distribution the 2-letter chain code prefixes a GDS-specific property code; each GDS holds a different property code for the same hotel.
    context_ko: 'GDS 호텔 유통에서 2자리 체인 코드는 GDS별 프로퍼티 코드 앞에 붙으며, 같은 호텔이라도 GDS마다 프로퍼티 코드가 다르다.'
    relationship: broader
  - provider: OpenTravel (OTA)
    term: ChainCode / BrandCode
    context: 'OpenTravel/HTNG attributes on PropertyInfo identifying the chain and brand (e.g., ChainCode STARWOOD, BrandCode WESTIN) in hotel reservation messages.'
    context_ko: 'OpenTravel/HTNG의 PropertyInfo 속성으로 체인·브랜드를 식별한다(예: ChainCode STARWOOD, BrandCode WESTIN). 호텔 예약 메시지에 사용.'
    relationship: same
relationships:
  - type: related
    targetTerm: GDS
  - type: related
    targetTerm: CRS
  - type: related
    targetTerm: Room Type
  - type: related
    targetTerm: Rate Plan
distinctions:
  - targetTerm: Airline Designator
    explanation: A chain code (2 letters) identifies a hotel chain/brand in distribution; an airline designator (2 characters) identifies an air carrier — different domains despite both being short codes.
    explanation_ko: '체인 코드(2자리)는 유통에서 호텔 체인/브랜드를 식별하고, 항공사 지정 코드(2자리)는 항공 운송 사업자를 식별한다. 둘 다 짧은 코드이지만 서로 다른 영역에 속한다.'
  - targetTerm: GIATA ID
    explanation: 'A chain code identifies the brand/representation entity a property sells under (a 2-character GDS code); a GIATA ID uniquely identifies the individual physical property itself across all suppliers, regardless of chain.'
    explanation_ko: 'Chain code는 프로퍼티가 판매되는 브랜드/대표 주체를 식별하는 2자리 GDS 코드이고, GIATA ID는 체인과 무관하게 모든 공급자에 걸쳐 개별 실제 프로퍼티 자체를 고유하게 식별한다.'
  - targetTerm: Private Label Chain Code
    explanation: A chain code is the general 2-character GDS code that groups properties under a brand or representation entity; a private label chain code specifically denotes an independent hotel/group obtaining its OWN dedicated code rather than sitting under a representation company's shared code.
    explanation_ko: 'Chain code는 프로퍼티를 브랜드나 대표 주체로 묶는 일반적 2자리 GDS 코드이고, 프라이빗 라벨 체인 코드는 독립 호텔/그룹이 대표 회사의 공유 코드 아래 있지 않고 자체 전용 코드를 확보하는 것을 특정한다.'
sources:
  - name: 20 GDS Words and Meanings
    org: OpenHotel
    version: ''
    section: ''
    url: 'https://openhotel.com/blog/news-and-articles-for-hotels/post.cfm/post/6034/20-gds-words-and-meanings'
  - name: GDS Chain Codes
    org: Marriott
    version: ''
    section: ''
    url: 'https://www.travelagents.marriott.com/travelagents/GDSResInfo.mi'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="18" width="16" height="12" rx="6"/><rect x="26" y="18" width="16" height="12" rx="6"/><path d="M18 24h12"/></svg>
---

> A two-letter code used in GDSs and hotel distribution to identify the hotel chain, brand, or representation/distribution company to which a property belongs (e.g., MC for Marriott Hotels, HI for Hilton). A property is identified by its chain code plus a property/hotel ID, and the exact codes can vary by GDS.

Chain codes group hotels under a common brand, parent company, or third-party representation/distribution provider (such as a bedbank or rep firm), and they drive how rates and inventory are loaded and surfaced in the GDS. Independent hotels are often distributed under the chain code of a representation company rather than a true brand. The chain code combined with the GDS property code uniquely addresses a hotel for shopping and booking. Specific two-letter codes are not globally standardized and may differ between GDSs.

**한국어 / Korean** — **체인 코드** — GDS 및 호텔 유통에서 해당 숙소가 속한 호텔 체인, 브랜드, 또는 대리/유통 회사를 식별하는 데 사용되는 2자리 코드(예: 메리어트 호텔은 MC, 힐튼은 HI). 숙소는 체인 코드와 숙소/호텔 ID의 조합으로 식별되며, 정확한 코드는 GDS마다 다를 수 있다.

체인 코드는 공통 브랜드, 모기업, 또는 제3자 대리/유통 사업자(베드뱅크나 대리 회사 등) 아래로 호텔을 묶으며, 이를 통해 요금과 재고가 GDS에 등록되고 노출되는 방식이 결정된다. 독립 호텔은 실제 브랜드가 아니라 대리 회사의 체인 코드로 유통되는 경우가 많다. 체인 코드와 GDS 숙소 코드를 결합하면 조회 및 예약을 위해 호텔을 고유하게 지정할 수 있다. 구체적인 2자리 코드는 전 세계적으로 표준화되어 있지 않으며 GDS마다 다를 수 있다.

**Aliases:** `Hotel Chain Code`, `GDS Chain Code`, `Two-Letter Chain Code`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| GDS (Amadeus/Sabre/Travelport) | `Two-letter chain code + GDS property code` | broader | In GDS hotel distribution the 2-letter chain code prefixes a GDS-specific property code; each GDS holds a different property code for the same hotel. |
| OpenTravel (OTA) | `ChainCode / BrandCode` | same | OpenTravel/HTNG attributes on PropertyInfo identifying the chain and brand (e.g., ChainCode STARWOOD, BrandCode WESTIN) in hotel reservation messages. |

# Related
- [GDS](/common/standards/gds.md) — related
- [CRS](/lodging/hotel-dist/crs.md) — related
- [Room Type](/lodging/hotel-rate/room-type.md) — related
- [Rate Plan](/lodging/hotel-rate/rate-plan.md) — related

# Distinctions
- **Chain Code** vs [Airline Designator](/common/codes/airline-designator.md) — A chain code (2 letters) identifies a hotel chain/brand in distribution; an airline designator (2 characters) identifies an air carrier — different domains despite both being short codes.
- **Chain Code** vs [GIATA ID](/lodging/hotel-dist/giata-id.md) — A chain code identifies the brand/representation entity a property sells under (a 2-character GDS code); a GIATA ID uniquely identifies the individual physical property itself across all suppliers, regardless of chain.
- **Chain Code** vs [Private Label Chain Code](/lodging/hotel-dist/private-label-chain-code.md) — A chain code is the general 2-character GDS code that groups properties under a brand or representation entity; a private label chain code specifically denotes an independent hotel/group obtaining its OWN dedicated code rather than sitting under a representation company's shared code.

# Citations
[1] [OpenHotel — 20 GDS Words and Meanings](https://openhotel.com/blog/news-and-articles-for-hotels/post.cfm/post/6034/20-gds-words-and-meanings)
[2] [Marriott — GDS Chain Codes](https://www.travelagents.marriott.com/travelagents/GDSResInfo.mi)
