---
type: Code
title: ISO 4217 Currency Code
description: 'The international standard defining three-letter alphabetic codes (and corresponding numeric codes) for currencies, e.g., USD, EUR, GBP, JPY. It is used throughout travel pricing, ticketing, and settlement to unambiguously denote the currency of an amount.'
tags:
  - codes
  - active
  - ISO
timestamp: '2026-06-15T00:00:00Z'
id: iso-4217-currency-code
category: codes
conceptType: code
status: active
abbreviation: ISO 4217
term_ko: ISO 4217 통화 코드
definition_ko: '통화에 대한 3자리 알파벳 코드(및 그에 대응하는 숫자 코드)를 정의하는 국제 표준(예: USD, EUR, GBP, JPY). 여행 가격 산정, 발권, 정산 전반에서 금액의 통화를 명확하게 나타내는 데 사용된다.'
longDef: 'ISO 4217 alphabetic codes are typically formed from the ISO 3166 country code plus a letter for the currency name (e.g., US + D = USD). The standard also defines the minor unit (number of decimal places) for each currency. In airline pricing, fares are filed and converted between currencies and the neutral NUC; the local currency on a ticket is expressed using an ISO 4217 code.'
longDef_ko: 'ISO 4217 알파벳 코드는 일반적으로 ISO 3166 국가 코드에 통화 명칭의 한 글자를 더해 구성된다(예: US + D = USD). 이 표준은 또한 각 통화의 최소 단위(소수점 자릿수)도 정의한다. 항공 가격 산정에서 운임은 여러 통화와 중립 단위인 NUC 사이에서 신고·환산되며, 항공권상의 현지 통화는 ISO 4217 코드로 표현된다.'
standardBody: ISO
aliases:
  - Currency Code
  - ISO Currency Code
  - Three-Letter Currency Code
relationships:
  - type: related
    targetTerm: ISO 3166 Country Code
  - type: related
    targetTerm: NUC
  - type: related
    targetTerm: BSP
distinctions:
  - targetTerm: NUC
    explanation: 'ISO 4217 codes denote real-world currencies; NUC is a fare-construction neutral unit used internally to convert fares between currencies, not an ISO 4217 currency.'
    explanation_ko: 'ISO 4217 코드는 실제 통화를 나타내는 반면, NUC는 운임을 통화 간에 환산하기 위해 내부적으로 사용되는 운임 산정용 중립 단위이며 ISO 4217 통화가 아니다.'
sources:
  - name: ISO 4217 Currency codes
    org: ISO
    version: ''
    section: ''
    url: 'https://www.iso.org/iso-4217-currency-codes.html'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="10" width="32" height="28" rx="3"/><path d="M28 18a6 5 0 0 0-9 4c0 6 9 3 9 9a6 5 0 0 1-9 4"/><path d="M23 14v3M23 31v3"/></svg>
---

> The international standard defining three-letter alphabetic codes (and corresponding numeric codes) for currencies, e.g., USD, EUR, GBP, JPY. It is used throughout travel pricing, ticketing, and settlement to unambiguously denote the currency of an amount.

ISO 4217 alphabetic codes are typically formed from the ISO 3166 country code plus a letter for the currency name (e.g., US + D = USD). The standard also defines the minor unit (number of decimal places) for each currency. In airline pricing, fares are filed and converted between currencies and the neutral NUC; the local currency on a ticket is expressed using an ISO 4217 code.

**한국어 / Korean** — **ISO 4217 통화 코드** — 통화에 대한 3자리 알파벳 코드(및 그에 대응하는 숫자 코드)를 정의하는 국제 표준(예: USD, EUR, GBP, JPY). 여행 가격 산정, 발권, 정산 전반에서 금액의 통화를 명확하게 나타내는 데 사용된다.

ISO 4217 알파벳 코드는 일반적으로 ISO 3166 국가 코드에 통화 명칭의 한 글자를 더해 구성된다(예: US + D = USD). 이 표준은 또한 각 통화의 최소 단위(소수점 자릿수)도 정의한다. 항공 가격 산정에서 운임은 여러 통화와 중립 단위인 NUC 사이에서 신고·환산되며, 항공권상의 현지 통화는 ISO 4217 코드로 표현된다.

**Aliases:** `Currency Code`, `ISO Currency Code`, `Three-Letter Currency Code`

# Related
- [ISO 3166 Country Code](/codes/iso-3166-country-code.md) — related
- [NUC](/air-shop/nuc.md) — related
- [BSP](/pay/bsp.md) — related

# Distinctions
- **ISO 4217 Currency Code** vs [NUC](/air-shop/nuc.md) — ISO 4217 codes denote real-world currencies; NUC is a fare-construction neutral unit used internally to convert fares between currencies, not an ISO 4217 currency.

# Citations
[1] [ISO — ISO 4217 Currency codes](https://www.iso.org/iso-4217-currency-codes.html)
