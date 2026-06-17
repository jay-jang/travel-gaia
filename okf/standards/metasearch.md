---
type: Business Term
title: Metasearch
description: 'A travel metasearch engine aggregates and compares prices and availability for flights, hotels, or other travel products across many OTAs and suppliers, then refers the user to the chosen site to complete the booking. Examples include Kayak, Skyscanner, Google Flights, and Trivago.'
tags:
  - standards
  - active
timestamp: '2026-06-15T00:00:00Z'
id: metasearch
category: standards
conceptType: business-term
status: active
term_ko: 메타서치(가격 비교 검색)
definition_ko: '여행 메타서치 엔진은 여러 OTA와 공급사에 걸쳐 항공편, 호텔 등 여행 상품의 가격과 가용성을 통합하여 비교한 뒤, 사용자가 선택한 사이트로 연결해 예약을 완료하도록 한다. Kayak, Skyscanner, Google Flights, Trivago 등이 그 예이다.'
longDef: 'Metasearch typically monetizes via referral fees, cost-per-click, or commission rather than processing the transaction itself, though some operate ''book-on-metasearch'' facilitated bookings. It is distinct from an OTA, which completes and owns the customer transaction.'
longDef_ko: '메타서치는 일반적으로 거래를 직접 처리하기보다 추천 수수료, 클릭당 비용(CPC), 커미션을 통해 수익을 올리지만, 일부는 ''북 온 메타서치(book-on-metasearch)'' 방식의 중개 예약을 운영하기도 한다. 고객 거래를 완료하고 소유하는 OTA와는 구별된다.'
aliases:
  - Metasearch Engine
  - Travel Metasearch
  - Price Comparison Engine
relationships:
  - type: related
    targetTerm: OTA (Online Travel Agency)
  - type: related
    targetTerm: Aggregator
  - type: related
    targetTerm: GDS
distinctions:
  - targetTerm: OTA (Online Travel Agency)
    explanation: Metasearch compares prices and refers out; an OTA actually sells and processes the booking.
    explanation_ko: '메타서치는 가격을 비교하고 외부로 연결하며, OTA는 실제로 예약을 판매하고 처리한다.'
  - targetTerm: Aggregator
    explanation: Metasearch is a consumer-facing comparison/referral product; an aggregator is a back-end content consolidator that pools supplier inventory for resellers.
    explanation_ko: '메타서치는 소비자 대상 비교/연결 서비스이고, 애그리게이터는 재판매자를 위해 공급사 재고를 모으는 백엔드 콘텐츠 통합자이다.'
sources:
  - name: Travel Metasearch (industry definition)
    org: Phocuswright / industry usage
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="21" cy="21" r="12"/><path d="M30 30l8 8"/><path d="M14 18h14M14 24h10"/><path d="M27 27l3 3 3-3" transform="translate(-3 -9)"/><path d="M22 14l3 3 3-3"/></svg>
---

> A travel metasearch engine aggregates and compares prices and availability for flights, hotels, or other travel products across many OTAs and suppliers, then refers the user to the chosen site to complete the booking. Examples include Kayak, Skyscanner, Google Flights, and Trivago.

Metasearch typically monetizes via referral fees, cost-per-click, or commission rather than processing the transaction itself, though some operate 'book-on-metasearch' facilitated bookings. It is distinct from an OTA, which completes and owns the customer transaction.

**한국어 / Korean** — **메타서치(가격 비교 검색)** — 여행 메타서치 엔진은 여러 OTA와 공급사에 걸쳐 항공편, 호텔 등 여행 상품의 가격과 가용성을 통합하여 비교한 뒤, 사용자가 선택한 사이트로 연결해 예약을 완료하도록 한다. Kayak, Skyscanner, Google Flights, Trivago 등이 그 예이다.

메타서치는 일반적으로 거래를 직접 처리하기보다 추천 수수료, 클릭당 비용(CPC), 커미션을 통해 수익을 올리지만, 일부는 '북 온 메타서치(book-on-metasearch)' 방식의 중개 예약을 운영하기도 한다. 고객 거래를 완료하고 소유하는 OTA와는 구별된다.

**Aliases:** `Metasearch Engine`, `Travel Metasearch`, `Price Comparison Engine`

# Related
- [OTA (Online Travel Agency)](/standards/ota-online-travel-agency.md) — related
- [Aggregator](/standards/aggregator.md) — related
- [GDS](/standards/gds.md) — related

# Distinctions
- **Metasearch** vs [OTA (Online Travel Agency)](/standards/ota-online-travel-agency.md) — Metasearch compares prices and refers out; an OTA actually sells and processes the booking.
- **Metasearch** vs [Aggregator](/standards/aggregator.md) — Metasearch is a consumer-facing comparison/referral product; an aggregator is a back-end content consolidator that pools supplier inventory for resellers.

# Citations
[1] Phocuswright / industry usage — Travel Metasearch (industry definition)
