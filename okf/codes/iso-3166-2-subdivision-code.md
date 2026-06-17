---
type: Standard
title: ISO 3166-2 Subdivision Code
description: 'The ISO standard for coding the principal subdivisions (states, provinces, regions, etc.) of countries listed in ISO 3166-1. Each code is the alpha-2 country code, a hyphen, and up to three alphanumeric characters (for example US-NY for New York), and is widely used in postal addresses and tax/regulatory geography.'
tags:
  - codes
  - active
  - ISO
timestamp: '2026-06-17T00:00:00Z'
id: iso-3166-2-subdivision-code
category: codes
conceptType: standard
status: active
abbreviation: ISO 3166-2
term_ko: ISO 3166-2 행정구역 코드 (ISO 3166-2 Subdivision Code)
definition_ko: 'ISO 3166-1에 등재된 국가의 주요 행정구역(주, 도, 지역 등)을 코딩하는 ISO 표준이다. 각 코드는 alpha-2 국가 코드, 하이픈, 그리고 최대 3자리 영숫자 문자로 구성된다(예: 뉴욕은 US-NY). 우편 주소와 세무·규제 지리 정보에 폭넓게 사용된다.'
longDef: 'ISO 3166-2 builds directly on the alpha-2 country codes of ISO 3166-1: the subdivision element after the hyphen is one to three alphabetic and/or numeric characters, usually drawn from coding systems already in use within the country. It is the de-facto reference for representing states, provinces, prefectures, cantons and similar units in structured data, and is reused by other systems (for example UN/LOCODE adopts ISO 3166-2 for its subdivision field). Because subdivisions change, codes are versioned by the ISO 3166 Maintenance Agency through dated editions and online amendment newsletters.'
longDef_ko: 'ISO 3166-2는 ISO 3166-1의 alpha-2 국가 코드를 직접 기반으로 한다. 하이픈 뒤의 행정구역 요소는 1~3자리의 알파벳 및/또는 숫자 문자이며, 보통 해당 국가에서 이미 사용 중인 코딩 체계에서 가져온다. 구조화된 데이터에서 주·도·현·칸톤 등 행정 단위를 표현하는 사실상의 기준이며, 다른 체계에서도 재사용된다(예: UN/LOCODE는 행정구역 필드에 ISO 3166-2를 채택). 행정구역은 변경되므로, 코드는 ISO 3166 유지관리기관(Maintenance Agency)이 발행하는 날짜별 판본과 온라인 개정 뉴스레터를 통해 버전 관리된다.'
standardBody: ISO
aliases:
  - Country Subdivision Code
  - ISO 3166-2 Code
  - Region Code
relationships:
  - type: related
    targetTerm: ISO 3166 Country Code
  - type: related
    targetTerm: UN/LOCODE
distinctions:
  - targetTerm: ISO 3166 Country Code
    explanation: ISO 3166-1 codes identify whole countries (e.g. US); ISO 3166-2 codes identify subdivisions within a country (e.g. US-NY) by prefixing the country code and adding up to three characters.
    explanation_ko: 'ISO 3166-1 코드는 국가 전체를 식별하지만(예: US), ISO 3166-2 코드는 국가 코드를 앞에 붙이고 최대 3자리를 더해 국가 내부의 행정구역을 식별한다(예: US-NY).'
  - targetTerm: UN/LOCODE
    explanation: 'UN/LOCODE identifies specific trade/transport locations (ports, terminals, towns) within a country; ISO 3166-2 identifies the administrative subdivision a location sits in, and UN/LOCODE actually uses ISO 3166-2 codes for its subdivision element.'
    explanation_ko: 'UN/LOCODE는 국가 내 특정 무역·운송 지점(항만, 터미널, 도시)을 식별하는 반면, ISO 3166-2는 그 지점이 속한 행정구역을 식별한다. 실제로 UN/LOCODE는 행정구역 요소에 ISO 3166-2 코드를 사용한다.'
sources:
  - org: ISO
    name: 'ISO 3166-2 Codes for the representation of names of countries and their subdivisions — Part 2: Country subdivision code'
    version: '2020'
    section: ''
    url: 'https://www.iso.org/standard/72483.html'
  - org: ISO
    name: ISO 3166 Country Codes
    version: ''
    section: ''
    url: 'https://www.iso.org/iso-3166-country-codes.html'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M8 10l32 0 0 28-32 0z"/><path d="M24 10v28M8 24h16"/><path d="M30 17l7 0 0 7-7 0z"/></svg>
---

> The ISO standard for coding the principal subdivisions (states, provinces, regions, etc.) of countries listed in ISO 3166-1. Each code is the alpha-2 country code, a hyphen, and up to three alphanumeric characters (for example US-NY for New York), and is widely used in postal addresses and tax/regulatory geography.

ISO 3166-2 builds directly on the alpha-2 country codes of ISO 3166-1: the subdivision element after the hyphen is one to three alphabetic and/or numeric characters, usually drawn from coding systems already in use within the country. It is the de-facto reference for representing states, provinces, prefectures, cantons and similar units in structured data, and is reused by other systems (for example UN/LOCODE adopts ISO 3166-2 for its subdivision field). Because subdivisions change, codes are versioned by the ISO 3166 Maintenance Agency through dated editions and online amendment newsletters.

**한국어 / Korean** — **ISO 3166-2 행정구역 코드 (ISO 3166-2 Subdivision Code)** — ISO 3166-1에 등재된 국가의 주요 행정구역(주, 도, 지역 등)을 코딩하는 ISO 표준이다. 각 코드는 alpha-2 국가 코드, 하이픈, 그리고 최대 3자리 영숫자 문자로 구성된다(예: 뉴욕은 US-NY). 우편 주소와 세무·규제 지리 정보에 폭넓게 사용된다.

ISO 3166-2는 ISO 3166-1의 alpha-2 국가 코드를 직접 기반으로 한다. 하이픈 뒤의 행정구역 요소는 1~3자리의 알파벳 및/또는 숫자 문자이며, 보통 해당 국가에서 이미 사용 중인 코딩 체계에서 가져온다. 구조화된 데이터에서 주·도·현·칸톤 등 행정 단위를 표현하는 사실상의 기준이며, 다른 체계에서도 재사용된다(예: UN/LOCODE는 행정구역 필드에 ISO 3166-2를 채택). 행정구역은 변경되므로, 코드는 ISO 3166 유지관리기관(Maintenance Agency)이 발행하는 날짜별 판본과 온라인 개정 뉴스레터를 통해 버전 관리된다.

**Aliases:** `Country Subdivision Code`, `ISO 3166-2 Code`, `Region Code`

# Related
- [ISO 3166 Country Code](/codes/iso-3166-country-code.md) — related
- [UN/LOCODE](/codes/un-locode.md) — related

# Distinctions
- **ISO 3166-2 Subdivision Code** vs [ISO 3166 Country Code](/codes/iso-3166-country-code.md) — ISO 3166-1 codes identify whole countries (e.g. US); ISO 3166-2 codes identify subdivisions within a country (e.g. US-NY) by prefixing the country code and adding up to three characters.
- **ISO 3166-2 Subdivision Code** vs [UN/LOCODE](/codes/un-locode.md) — UN/LOCODE identifies specific trade/transport locations (ports, terminals, towns) within a country; ISO 3166-2 identifies the administrative subdivision a location sits in, and UN/LOCODE actually uses ISO 3166-2 codes for its subdivision element.

# Citations
[1] [ISO — ISO 3166-2 Codes for the representation of names of countries and their subdivisions — Part 2: Country subdivision code — 2020](https://www.iso.org/standard/72483.html)
[2] [ISO — ISO 3166 Country Codes](https://www.iso.org/iso-3166-country-codes.html)
