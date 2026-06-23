---
type: Code
title: TIDS Code
description: 'An IATA-issued numeric identifier from the Travel Industry Designator Service (TIDS) that lets non-accredited sales intermediaries (such as tour operators, travel advisors and other points of sale) be uniquely recognized by airlines, hotels, car rental firms and other suppliers in electronic reservation systems. It is distinct from the IATA Number, which is issued only to financially accredited agencies.'
tags:
  - codes
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: tids-code
vertical: common
category: codes
conceptType: code
status: active
abbreviation: TIDS
term_ko: TIDS 코드 (여행산업 식별자 서비스 코드)
definition_ko: 'IATA의 여행산업 식별자 서비스(Travel Industry Designator Service, TIDS)에서 발급하는 숫자 식별자로, 비공인(non-accredited) 판매 중개인(투어 오퍼레이터, 여행 어드바이저, 기타 판매 지점 등)이 전자 예약 시스템에서 항공사·호텔·렌터카·기타 공급자에게 고유하게 식별되도록 한다. 재정적으로 공인된 대리점에만 발급되는 IATA Number와는 구별된다.'
longDef: 'TIDS was created so that travel businesses that are not IATA-accredited (and therefore cannot ticket through the BSP or hold an IATA Number) still have a single, globally recognized identity in supplier and GDS bookings. The TIDS Numeric Code is used in the booking/PNR rather than as a settlement credential: it identifies who made the sale for reporting, commission and tracking purposes, but it does not by itself confer ticketing authority or access to IATA settlement. Suppliers use TIDS codes to identify non-accredited points of sale, while accredited agencies that already have an IATA Number may also register TIDS codes to identify individual non-accredited sub-locations.'
longDef_ko: 'TIDS는 IATA 공인을 받지 않아 BSP를 통한 발권이나 IATA Number 보유가 불가능한 여행 사업체도 공급자·GDS 예약에서 전 세계적으로 통용되는 단일 식별자를 갖도록 만들어졌다. TIDS Numeric Code는 정산 자격 증명이 아니라 예약/PNR 안에서 사용되어, 누가 판매를 일으켰는지를 보고·커미션·추적 목적으로 식별한다. 다만 그 자체로 발권 권한이나 IATA 정산 접근권을 부여하지는 않는다. 공급자는 비공인 판매 지점을 식별하기 위해 TIDS 코드를 사용하며, 이미 IATA Number를 보유한 공인 대리점도 개별 비공인 하위 지점을 식별하기 위해 TIDS 코드를 추가로 등록할 수 있다.'
standardBody: IATA
aliases:
  - Travel Industry Designator Service Code
  - TIDS Numeric Code
  - IATA TIDS
relationships:
  - type: contrasts
    targetTerm: IATA Number
  - type: related
    targetTerm: OTA (Online Travel Agency)
  - type: related
    targetTerm: GDS
  - type: related
    targetTerm: Pseudo City Code
distinctions:
  - targetTerm: IATA Number
    explanation: 'An IATA Number is issued only to financially accredited agencies and grants ticketing/BSP settlement authority; a TIDS code merely identifies a non-accredited point of sale for recognition, reporting and commission, with no settlement rights.'
    explanation_ko: 'IATA Number는 재정 공인을 받은 대리점에만 발급되어 발권·BSP 정산 권한을 부여하는 반면, TIDS 코드는 비공인 판매 지점을 인식·보고·커미션 목적으로 식별만 할 뿐 정산 권한이 없다.'
  - targetTerm: Pseudo City Code
    explanation: A Pseudo City Code identifies an agency office within a specific GDS host; a TIDS code is an IATA-wide identity recognized across suppliers and systems regardless of GDS.
    explanation_ko: 'Pseudo City Code는 특정 GDS 호스트 내부에서 대리점 사무소를 식별하는 반면, TIDS 코드는 GDS와 무관하게 여러 공급자·시스템에 걸쳐 통용되는 IATA 차원의 식별자다.'
sources:
  - org: IATA
    name: Travel Industry Designator Service (TIDS)
    version: ''
    section: ''
    url: 'https://www.iata.org/en/services/travel-agency-program/tids/'
    tier: association
  - org: IATA
    name: TIDS - Frequently Asked Questions
    version: ''
    section: ''
    url: 'https://www.iata.org/en/services/travel-agency-program/tids/faq/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="12" width="32" height="24" rx="3"/><circle cx="18" cy="22" r="4"/><path d="M13 31c1-3 3-4 5-4s4 1 5 4"/><path d="M28 20h8M28 25h8M28 30h5"/></svg>
---

> An IATA-issued numeric identifier from the Travel Industry Designator Service (TIDS) that lets non-accredited sales intermediaries (such as tour operators, travel advisors and other points of sale) be uniquely recognized by airlines, hotels, car rental firms and other suppliers in electronic reservation systems. It is distinct from the IATA Number, which is issued only to financially accredited agencies.

TIDS was created so that travel businesses that are not IATA-accredited (and therefore cannot ticket through the BSP or hold an IATA Number) still have a single, globally recognized identity in supplier and GDS bookings. The TIDS Numeric Code is used in the booking/PNR rather than as a settlement credential: it identifies who made the sale for reporting, commission and tracking purposes, but it does not by itself confer ticketing authority or access to IATA settlement. Suppliers use TIDS codes to identify non-accredited points of sale, while accredited agencies that already have an IATA Number may also register TIDS codes to identify individual non-accredited sub-locations.

**한국어 / Korean** — **TIDS 코드 (여행산업 식별자 서비스 코드)** — IATA의 여행산업 식별자 서비스(Travel Industry Designator Service, TIDS)에서 발급하는 숫자 식별자로, 비공인(non-accredited) 판매 중개인(투어 오퍼레이터, 여행 어드바이저, 기타 판매 지점 등)이 전자 예약 시스템에서 항공사·호텔·렌터카·기타 공급자에게 고유하게 식별되도록 한다. 재정적으로 공인된 대리점에만 발급되는 IATA Number와는 구별된다.

TIDS는 IATA 공인을 받지 않아 BSP를 통한 발권이나 IATA Number 보유가 불가능한 여행 사업체도 공급자·GDS 예약에서 전 세계적으로 통용되는 단일 식별자를 갖도록 만들어졌다. TIDS Numeric Code는 정산 자격 증명이 아니라 예약/PNR 안에서 사용되어, 누가 판매를 일으켰는지를 보고·커미션·추적 목적으로 식별한다. 다만 그 자체로 발권 권한이나 IATA 정산 접근권을 부여하지는 않는다. 공급자는 비공인 판매 지점을 식별하기 위해 TIDS 코드를 사용하며, 이미 IATA Number를 보유한 공인 대리점도 개별 비공인 하위 지점을 식별하기 위해 TIDS 코드를 추가로 등록할 수 있다.

**Aliases:** `Travel Industry Designator Service Code`, `TIDS Numeric Code`, `IATA TIDS`

# Related
- [IATA Number](/common/codes/iata-number.md) — contrasts
- [OTA (Online Travel Agency)](/common/standards/ota-online-travel-agency.md) — related
- [GDS](/common/standards/gds.md) — related
- [Pseudo City Code](/common/codes/pseudo-city-code.md) — related

# Distinctions
- **TIDS Code** vs [IATA Number](/common/codes/iata-number.md) — An IATA Number is issued only to financially accredited agencies and grants ticketing/BSP settlement authority; a TIDS code merely identifies a non-accredited point of sale for recognition, reporting and commission, with no settlement rights.
- **TIDS Code** vs [Pseudo City Code](/common/codes/pseudo-city-code.md) — A Pseudo City Code identifies an agency office within a specific GDS host; a TIDS code is an IATA-wide identity recognized across suppliers and systems regardless of GDS.

# Citations
[1] [IATA — Travel Industry Designator Service (TIDS)](https://www.iata.org/en/services/travel-agency-program/tids/)
[2] [IATA — TIDS - Frequently Asked Questions](https://www.iata.org/en/services/travel-agency-program/tids/faq/)
