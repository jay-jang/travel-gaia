---
type: Code
title: UN/LOCODE
description: 'The United Nations Code for Trade and Transport Locations: a 5-character code identifying locations (ports, airports, inland terminals, and other places of relevance to trade and transport) used in international logistics. The first two letters are the ISO 3166 country code and the remaining three identify the location within that country.'
tags:
  - codes
  - active
  - UNECE
timestamp: '2026-06-15T00:00:00Z'
id: un-locode
vertical: common
category: codes
conceptType: code
status: active
abbreviation: UN/LOCODE
term_ko: UN/LOCODE (유엔 무역·운송 위치 코드)
definition_ko: '유엔 무역·운송 위치 코드(United Nations Code for Trade and Transport Locations). 국제 물류에서 사용되는 5자리 코드로, 무역과 운송에 관련된 위치(항만, 공항, 내륙 터미널 및 기타 장소)를 식별한다. 앞 두 글자는 ISO 3166 국가 코드이고, 나머지 세 글자는 해당 국가 내의 위치를 식별한다.'
longDef: 'UN/LOCODE is maintained by UNECE and covers seaports, road and rail terminals, airports, postal exchange offices, and other transport-relevant locations. The structure CC + LLL (e.g., USNYC for New York, USA; DEHAM for Hamburg, Germany) reuses ISO 3166-1 alpha-2 for the country segment. It is heavily used in maritime, freight, and supply-chain systems and is broader in scope than aviation-only codes.'
longDef_ko: 'UN/LOCODE는 UNECE가 관리하며 해항, 도로·철도 터미널, 공항, 우편 교환소 및 기타 운송 관련 위치를 포괄한다. CC + LLL 구조(예: 미국 뉴욕은 USNYC, 독일 함부르크는 DEHAM)로 국가 부분에는 ISO 3166-1 alpha-2를 재사용한다. 해운, 화물, 공급망 시스템에서 폭넓게 사용되며, 항공 전용 코드보다 적용 범위가 넓다.'
standardBody: UNECE
aliases:
  - United Nations Code for Trade and Transport Locations
  - UN Location Code
  - LOCODE
relationships:
  - type: broader
    targetTerm: ISO 3166 Country Code
  - type: contrasts
    targetTerm: Airport Code
  - type: contrasts
    targetTerm: City Code
distinctions:
  - targetTerm: Airport Code
    explanation: 'UN/LOCODE is a 5-character trade/transport location code (CC+LLL) covering ports, terminals and airports; an airport code is an aviation-specific IATA/ICAO identifier.'
    explanation_ko: 'UN/LOCODE는 항만, 터미널, 공항을 포괄하는 5자리 무역/운송 위치 코드(CC+LLL)인 반면, 공항 코드는 항공 전용 IATA/ICAO 식별자이다.'
  - targetTerm: ISO 3166 Country Code
    explanation: ISO 3166 identifies a whole country (2/3-letter); UN/LOCODE identifies a specific location within a country and embeds the ISO 3166 alpha-2 as its first two characters.
    explanation_ko: 'ISO 3166은 국가 전체를 식별하는(2/3자리) 코드인 반면, UN/LOCODE는 국가 내의 특정 위치를 식별하며 앞 두 글자에 ISO 3166 alpha-2를 포함한다.'
  - targetTerm: ISO 3166-2 Subdivision Code
    explanation: 'UN/LOCODE identifies specific trade/transport locations (ports, terminals, towns) within a country; ISO 3166-2 identifies the administrative subdivision a location sits in, and UN/LOCODE actually uses ISO 3166-2 codes for its subdivision element.'
    explanation_ko: 'UN/LOCODE는 국가 내 특정 무역·운송 지점(항만, 터미널, 도시)을 식별하는 반면, ISO 3166-2는 그 지점이 속한 행정구역을 식별한다. 실제로 UN/LOCODE는 행정구역 요소에 ISO 3166-2 코드를 사용한다.'
sources:
  - name: UN/LOCODE Code List by Country and Territory
    org: UNECE
    version: ''
    section: ''
    url: 'https://unece.org/trade/cefact/unlocode-code-list-country-and-territory'
    tier: standard-body
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="18" r="12"/><path d="M12 18h24M24 6c4 3 4 21 0 24M24 6c-4 3-4 21 0 24"/><path d="M24 30v8"/><path d="M18 38c0 3 4 5 6 5s6-2 6-5"/></svg>
---

> The United Nations Code for Trade and Transport Locations: a 5-character code identifying locations (ports, airports, inland terminals, and other places of relevance to trade and transport) used in international logistics. The first two letters are the ISO 3166 country code and the remaining three identify the location within that country.

UN/LOCODE is maintained by UNECE and covers seaports, road and rail terminals, airports, postal exchange offices, and other transport-relevant locations. The structure CC + LLL (e.g., USNYC for New York, USA; DEHAM for Hamburg, Germany) reuses ISO 3166-1 alpha-2 for the country segment. It is heavily used in maritime, freight, and supply-chain systems and is broader in scope than aviation-only codes.

**한국어 / Korean** — **UN/LOCODE (유엔 무역·운송 위치 코드)** — 유엔 무역·운송 위치 코드(United Nations Code for Trade and Transport Locations). 국제 물류에서 사용되는 5자리 코드로, 무역과 운송에 관련된 위치(항만, 공항, 내륙 터미널 및 기타 장소)를 식별한다. 앞 두 글자는 ISO 3166 국가 코드이고, 나머지 세 글자는 해당 국가 내의 위치를 식별한다.

UN/LOCODE는 UNECE가 관리하며 해항, 도로·철도 터미널, 공항, 우편 교환소 및 기타 운송 관련 위치를 포괄한다. CC + LLL 구조(예: 미국 뉴욕은 USNYC, 독일 함부르크는 DEHAM)로 국가 부분에는 ISO 3166-1 alpha-2를 재사용한다. 해운, 화물, 공급망 시스템에서 폭넓게 사용되며, 항공 전용 코드보다 적용 범위가 넓다.

**Aliases:** `United Nations Code for Trade and Transport Locations`, `UN Location Code`, `LOCODE`

# Related
- [ISO 3166 Country Code](/common/codes/iso-3166-country-code.md) — broader
- [Airport Code](/common/codes/airport-code.md) — contrasts
- [City Code](/common/codes/city-code.md) — contrasts

# Distinctions
- **UN/LOCODE** vs [Airport Code](/common/codes/airport-code.md) — UN/LOCODE is a 5-character trade/transport location code (CC+LLL) covering ports, terminals and airports; an airport code is an aviation-specific IATA/ICAO identifier.
- **UN/LOCODE** vs [ISO 3166 Country Code](/common/codes/iso-3166-country-code.md) — ISO 3166 identifies a whole country (2/3-letter); UN/LOCODE identifies a specific location within a country and embeds the ISO 3166 alpha-2 as its first two characters.
- **UN/LOCODE** vs [ISO 3166-2 Subdivision Code](/common/codes/iso-3166-2-subdivision-code.md) — UN/LOCODE identifies specific trade/transport locations (ports, terminals, towns) within a country; ISO 3166-2 identifies the administrative subdivision a location sits in, and UN/LOCODE actually uses ISO 3166-2 codes for its subdivision element.

# Citations
[1] [UNECE — UN/LOCODE Code List by Country and Territory](https://unece.org/trade/cefact/unlocode-code-list-country-and-territory)
