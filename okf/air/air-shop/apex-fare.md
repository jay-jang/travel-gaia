---
type: Business Term
title: APEX Fare
description: 'An APEX Fare (Advance Purchase Excursion Fare) is a discounted round-trip airfare that requires the traveler to purchase the ticket a specified number of days before the outbound departure — typically 7, 14, or 21 days — in exchange for a lower price. Standard conditions include minimum and maximum stay requirements, restricted stopovers, and substantial change or cancellation penalties. Introduced in the 1970s, APEX fare logic forms the conceptual foundation of modern advance-purchase fare families and ATPCO Category 14 (advance purchase) rules.'
tags:
  - air-shop
  - active
  - IATA
timestamp: '2026-07-12T00:00:00Z'
id: apex-fare
vertical: air
category: air-shop
conceptType: business-term
status: active
abbreviation: APEX
term_ko: 사전구매 할인 운임(APEX 운임)
definition_ko: 'APEX 운임(Advance Purchase Excursion Fare)은 출발 전 지정된 일수(보통 7일, 14일 또는 21일) 이전에 항공권을 구매해야 하는 조건으로 저렴한 가격을 제공하는 할인 왕복 항공 운임이다. 표준 조건에는 최소·최대 체류 기간, 스탑오버 제한, 상당한 변경·취소 위약금이 포함된다. 1970년대에 도입된 APEX 운임 논리는 현대의 사전구매 운임 패밀리와 ATPCO Category 14(사전구매) 규정의 개념적 토대를 형성한다.'
longDef: 'APEX fares were pioneered by Laker Airways and adopted by US carriers following the US Airline Deregulation Act of 1978, spreading globally as IATA deregulated international tariffs through the 1980s and 1990s. The core pricing principle — larger discounts for earlier purchase commitments — incentivizes advance booking, allows airlines to forecast demand, and fills capacity that would otherwise sell closer to departure at higher prices. In the ATPCO (Airline Tariff Publishing Company) fare rules structure, advance purchase conditions are codified in Category 14 (Advance Purchase): an airline specifies a required "purchase by" date or day-count before departure (e.g., "must purchase 14 days before departure"), failure of which invalidates the fare. The APEX framework also typically incorporates: Category 6 (Minimum Stay — e.g., must include a Saturday night) and Category 7 (Maximum Stay — e.g., must return within 30 days); Category 3 (Seasonality — blacking out peak periods); and Category 31 (Voluntary Changes — the change fee, or in modern "Flex" fares, the waiver). While airlines no longer sell fares literally branded as "APEX", the concept remains active in every advance-purchase discount economy fare and is standard in IATA Conditions of Carriage.'
longDef_ko: 'APEX 운임은 레이커 에어웨이즈가 선도하였고 1978년 미국 항공 규제 완화법 이후 미국 항공사들이 채택하였으며, 1980~90년대 IATA가 국제 운임을 규제 완화함에 따라 전 세계로 확산되었다. 더 일찍 예약할수록 더 큰 할인을 제공하는 핵심 가격 원리는 사전 예약을 유인하고, 항공사가 수요를 예측하며, 출발 임박 시 더 높은 가격에 판매될 좌석을 미리 채울 수 있게 한다. ATPCO(항공사 요율 게시 회사) 운임 규정 구조에서 사전구매 조건은 Category 14(사전구매)에 코드화되어 있다. APEX 체계에는 또한 Category 6(최소 체류, 예: 토요일 밤 포함 의무), Category 7(최대 체류, 예: 30일 이내 귀환), Category 3(계절성, 성수기 블랙아웃), Category 31(자발적 변경, 변경 수수료 또는 현대 Flex 운임의 면제 조건)이 포함된다. 항공사들이 더 이상 "APEX"라는 브랜드명으로 운임을 판매하지 않지만, 이 개념은 모든 사전구매 할인 이코노미 운임에 현재도 유효하며 IATA 운송 약관의 표준이다.'
aliases:
  - Advance Purchase Excursion Fare
  - Advance Purchase Fare
  - APEX
  - Super APEX
relationships:
  - type: related
    targetTerm: Fare Rule
  - type: related
    targetTerm: Fare Basis Code
  - type: related
    targetTerm: Blackout Date
  - type: related
    targetTerm: Booking Limit
  - type: related
    targetTerm: Overbooking
  - type: related
    targetTerm: Voluntary Changes (ATPCO Category 31)
distinctions:
  - targetTerm: Fare Rule
    explanation: 'A Fare Rule is the full set of ATPCO-published conditions (Categories 1–35) that govern when a fare can be sold, changed, or refunded; the APEX Fare is a class of discounted ticket defined by specific values in those rules, most notably Category 14 (Advance Purchase) combined with Category 6 (Minimum Stay) and Category 31 (Voluntary Changes).'
    explanation_ko: 'Fare Rule은 운임을 언제 판매·변경·환불할 수 있는지를 규율하는 ATPCO 공시 조건(Category 1~35) 전체 집합이고, APEX 운임은 그 규정 중 특히 Category 14(사전구매), Category 6(최소 체류), Category 31(자발적 변경)의 특정 값에 의해 정의되는 할인 항공권의 한 유형이다.'
  - targetTerm: Fare Basis Code
    explanation: 'A Fare Basis Code is the alphanumeric string that uniquely identifies a specific published fare and encodes its class, booking code, and key conditions; an APEX Fare is the broader category of advance-purchase discount fare, of which a particular Fare Basis Code (e.g., "VLAX14") is one specific instance with a defined advance-purchase period.'
    explanation_ko: 'Fare Basis Code는 특정 공시 운임을 고유하게 식별하고 그 등급·예약 코드·주요 조건을 인코딩하는 영숫자 문자열이고, APEX 운임은 특정 사전구매 기간을 가진 특정 Fare Basis Code(예: "VLAX14")가 하나의 구체적 사례인 사전구매 할인 운임의 더 넓은 범주이다.'
sources:
  - name: IATA Conditions of Carriage for Passengers and Baggage
    org: IATA
    version: ''
    section: 'Article 3 (Tickets/Fares)'
    url: 'https://www.iata.org/en/programs/passenger/conditions-of-carriage/'
    tier: association
  - name: ATPCO — Category 14 (Advance Purchase) Fare Rules
    org: ATPCO (Airline Tariff Publishing Company)
    version: ''
    section: 'Fare Rules Category 14'
    url: 'https://www.atpco.net/learn/what-is-a-fare-rule'
    tier: association
  - name: U.S. Department of Transportation — Airline Deregulation History
    org: U.S. Department of Transportation (DOT)
    version: ''
    section: ''
    url: 'https://www.transportation.gov/testimony/airline-deregulation-act-1978-impact-consumers'
    tier: regulator-guidance
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="10" width="32" height="30" rx="2"/><line x1="8" y1="18" x2="40" y2="18"/><line x1="16" y1="6" x2="16" y2="14"/><line x1="32" y1="6" x2="32" y2="14"/><path d="M14 26h6v6h-6z"/><line x1="26" y1="26" x2="34" y2="26"/><line x1="26" y1="32" x2="32" y2="32"/></svg>
---

> An APEX Fare (Advance Purchase Excursion Fare) is a discounted round-trip airfare that requires the traveler to purchase the ticket a specified number of days before the outbound departure — typically 7, 14, or 21 days — in exchange for a lower price. Standard conditions include minimum and maximum stay requirements, restricted stopovers, and substantial change or cancellation penalties. Introduced in the 1970s, APEX fare logic forms the conceptual foundation of modern advance-purchase fare families and ATPCO Category 14 (advance purchase) rules.

APEX fares were pioneered by Laker Airways and adopted by US carriers following the US Airline Deregulation Act of 1978, spreading globally as IATA deregulated international tariffs through the 1980s and 1990s. The core pricing principle — larger discounts for earlier purchase commitments — incentivizes advance booking, allows airlines to forecast demand, and fills capacity that would otherwise sell closer to departure at higher prices. In the ATPCO (Airline Tariff Publishing Company) fare rules structure, advance purchase conditions are codified in Category 14 (Advance Purchase): an airline specifies a required "purchase by" date or day-count before departure. The APEX framework also typically incorporates Category 6 (Minimum Stay — e.g., must include a Saturday night), Category 7 (Maximum Stay — e.g., must return within 30 days), Category 3 (Seasonality — blacking out peak periods), and Category 31 (Voluntary Changes — the change fee). While airlines no longer sell fares literally branded as "APEX", the concept remains active in every advance-purchase discount economy fare and is standard in IATA Conditions of Carriage.

**한국어 / Korean** — **사전구매 할인 운임(APEX 운임)** — APEX 운임(Advance Purchase Excursion Fare)은 출발 전 지정된 일수(보통 7일, 14일 또는 21일) 이전에 항공권을 구매해야 하는 조건으로 저렴한 가격을 제공하는 할인 왕복 항공 운임이다. 표준 조건에는 최소·최대 체류 기간, 스탑오버 제한, 상당한 변경·취소 위약금이 포함된다.

APEX 운임은 레이커 에어웨이즈가 선도하였고 1978년 미국 항공 규제 완화법 이후 미국 항공사들이 채택하였으며 전 세계로 확산되었다. ATPCO 운임 규정 구조에서 사전구매 조건은 Category 14에 코드화되며, APEX 체계에는 최소·최대 체류(Category 6/7), 계절성(Category 3), 자발적 변경(Category 31)이 포함된다. 항공사들이 더 이상 "APEX"로 브랜드하지 않더라도 이 개념은 모든 사전구매 할인 운임에 현재도 유효하다.

**Aliases:** `Advance Purchase Excursion Fare`, `Advance Purchase Fare`, `APEX`, `Super APEX`

# Related
- [Fare Rule](/air/air-shop/fare-rule.md) — related
- [Fare Basis Code](/air/air-shop/fare-basis-code.md) — related
- [Blackout Date](/lodging/hotel-rate/blackout-date.md) — related
- [Booking Limit](/air/air-shop/booking-limit.md) — related
- [Overbooking](/air/air-shop/overbooking.md) — related
- [Voluntary Changes (ATPCO Category 31)](/air/air-ticket/voluntary-changes-atpco-category-31.md) — related

# Distinctions
- **APEX Fare** vs [Fare Rule](/air/air-shop/fare-rule.md) — A Fare Rule is the full set of ATPCO-published conditions (Categories 1–35) that govern when a fare can be sold, changed, or refunded; the APEX Fare is a class of discounted ticket defined by specific values in those rules, most notably Category 14 (Advance Purchase) combined with Category 6 (Minimum Stay) and Category 31 (Voluntary Changes).
- **APEX Fare** vs [Fare Basis Code](/air/air-shop/fare-basis-code.md) — A Fare Basis Code is the alphanumeric string that uniquely identifies a specific published fare and encodes its class, booking code, and key conditions; an APEX Fare is the broader category of advance-purchase discount fare, of which a particular Fare Basis Code (e.g., "VLAX14") is one specific instance with a defined advance-purchase period.

# Citations
[1] [IATA — Conditions of Carriage for Passengers and Baggage](https://www.iata.org/en/programs/passenger/conditions-of-carriage/)
[2] [ATPCO (Airline Tariff Publishing Company) — Category 14 (Advance Purchase) Fare Rules](https://www.atpco.net/learn/what-is-a-fare-rule)
[3] [U.S. Department of Transportation (DOT) — Airline Deregulation Act of 1978 impact on consumers](https://www.transportation.gov/testimony/airline-deregulation-act-1978-impact-consumers)
