---
type: Business Term
title: Flight Credit
description: 'A flight credit is a non-cash, carrier-specific credit issued by an airline representing the value of an unused or partially used ticket, redeemable against future bookings on the same carrier. It arises when a flight is cancelled, significantly changed, or when a passenger voluntarily modifies a booking and declines a cash refund. Under the US DOT''s 2024 Refund Final Rule, a cash refund — not a credit — is the passenger''s default entitlement when the airline cancels or significantly changes a flight; flight credits are a permissible alternative only with the passenger''s explicit written consent.'
tags:
  - air-ticket
  - active
  - US DOT
timestamp: '2026-08-13T00:00:00Z'
id: flight-credit
vertical: air
category: air-ticket
conceptType: business-term
status: active
term_ko: 항공 크레딧 (Flight Credit)
definition_ko: '항공 크레딧(Flight Credit)은 미사용 또는 일부 사용된 항공권의 잔존 가치를 나타내는 동일 항공사 전용 비현금 크레딧으로, 같은 항공사의 향후 예약에 사용할 수 있다. 항공편이 취소·대폭 변경되거나 승객이 자발적으로 예약을 변경하고 현금 환불을 거절할 때 발생한다. 미국 교통부(DOT)의 2024년 환불 최종 규칙(Refund Final Rule)에 따르면, 항공사가 항공편을 취소하거나 대폭 변경할 경우 승객의 기본 권리는 항공 크레딧이 아니라 현금 환불이며, 항공 크레딧은 승객의 명시적인 서면 동의가 있을 때만 허용되는 대안이다.'
longDef: 'Flight credits go by carrier-specific brand names — United Airlines calls them "travel credits," American Airlines offers "travel credits" and "trip credits," Southwest Airlines uses "travel funds," and Delta issues "eCredits" — but they share the common property of being redeemable only against future bookings with the issuing carrier. They are not transferable to other carriers, cannot be cashed out, and have historically carried expiry dates (though the DOT 2024 rule requires that credits offered instead of refunds for communicable-disease disruptions be valid for at least five years). Flight credits are typically issued automatically into the passenger''s loyalty account, or as a booking reference the passenger can apply at checkout. In the GDS/IATA context, the commercial credit is often backed by an EMD (Electronic Miscellaneous Document), which is the formal accountable-document mechanism used to record and settle the value; however, the passenger-facing concept of a "flight credit" is distinct from the technical EMD construct.'
longDef_ko: '항공 크레딧은 항공사별 브랜드 이름으로 불린다. 유나이티드항공은 "travel credits", 아메리칸항공은 "travel credits"와 "trip credits", 사우스웨스트항공은 "travel funds", 델타항공은 "eCredits"라고 부르지만, 모두 발행 항공사의 향후 예약에만 사용할 수 있다는 공통점이 있다. 다른 항공사에 이전할 수 없고 현금으로 환전도 안 되며, 역사적으로 유효 기간이 있었다(단, DOT 2024년 규칙은 전염병 관련 운항 차질로 환불 대신 발행된 크레딧은 최소 5년간 유효해야 한다고 요구한다). 항공 크레딧은 보통 승객의 마일리지 계정으로 자동 발행되거나, 결제 시 적용할 수 있는 예약 참조 번호 형태로 제공된다. GDS/IATA 맥락에서 상업적 크레딧은 흔히 EMD(전자 기타 서류)로 뒷받침되는데, EMD는 가치를 기록하고 정산하는 데 사용되는 공식 회계 문서 메커니즘이다. 그러나 승객 관점의 "항공 크레딧" 개념은 기술적인 EMD 구조와는 별개이다.'
aliases:
  - Travel Credit
  - eCredit
  - Future Flight Credit
  - Travel Funds
  - Airline Credit Voucher
providerTerms:
  - provider: United Airlines
    term: Travel Credit
    context: United issues credits to passengers' MileagePlus accounts, accessible at checkout as "Travel Credits."
    context_ko: 유나이티드항공은 MileagePlus 계정에 크레딧을 발행하며, 결제 시 "Travel Credits"로 사용할 수 있다.
    relationship: same
  - provider: American Airlines
    term: Trip Credit / Travel Credit
    context: American distinguishes "Trip Credits" (lower value, single itinerary use) from "Travel Credits" (higher value, multiple uses); both are flight credits.
    context_ko: 아메리칸항공은 "Trip Credits"(소액, 단일 여정 사용)와 "Travel Credits"(고액, 복수 사용 가능)를 구분하지만, 둘 다 항공 크레딧이다.
    relationship: same
  - provider: Southwest Airlines
    term: Travel Funds
    context: Southwest stores unused ticket value as "Travel Funds" linked to the original confirmation number, usable by the original ticketed passenger.
    context_ko: 사우스웨스트항공은 미사용 항공권 가치를 원래 예약 확인 번호에 연결된 "Travel Funds"로 저장하며, 원래 발권 승객만 사용 가능하다.
    relationship: same
  - provider: Delta Air Lines
    term: eCredit
    context: Delta calls flight credits "eCredits," visible in the passenger's SkyMiles profile and redeemable on delta.com or via phone.
    context_ko: 델타항공은 항공 크레딧을 "eCredits"라고 부르며, 승객의 스카이마일 프로필에서 확인하고 delta.com 또는 전화로 사용할 수 있다.
    relationship: same
relationships:
  - type: contrasts
    targetTerm: Refund
  - type: contrasts
    targetTerm: EMD
  - type: related
    targetTerm: Voucher
  - type: related
    targetTerm: Reissue
  - type: related
    targetTerm: Voluntary Refunds (ATPCO Category 33)
distinctions:
  - targetTerm: Refund
    explanation: 'A refund returns money to the original form of payment (cash or card credit); a flight credit is a non-cash airline-held balance redeemable only against future bookings on the same carrier. Under the US DOT 2024 Refund Final Rule, when a carrier cancels or significantly changes a flight, the default entitlement is a cash refund — a flight credit is acceptable only if the passenger explicitly consents to it.'
    explanation_ko: '환불(Refund)은 원래 결제 수단(현금 또는 카드)으로 금액을 돌려주는 것이고, 항공 크레딧은 동일 항공사의 향후 예약에만 사용할 수 있는 비현금 잔액이다. 미국 DOT 2024년 환불 최종 규칙에 따르면, 항공사가 항공편을 취소하거나 대폭 변경할 경우 기본 권리는 현금 환불이며, 항공 크레딧은 승객이 명시적으로 동의할 때만 허용된다.'
  - targetTerm: EMD
    explanation: 'An EMD (Electronic Miscellaneous Document) is the IATA-standardized accountable document used internally by airlines and GDSs to record, settle, and track the financial value underlying a credit or ancillary; a flight credit is the commercial, passenger-facing product that the EMD may technically represent. Passengers interact with a flight credit through the airline''s own interface; the EMD is a back-office settlement mechanism.'
    explanation_ko: 'EMD(전자 기타 서류)는 항공사와 GDS가 크레딧이나 부가서비스의 재정적 가치를 기록·정산·추적하기 위해 내부적으로 사용하는 IATA 표준 회계 문서이다. 항공 크레딧은 EMD가 기술적으로 나타낼 수 있는 상업적·승객 대면 상품이다. 승객은 항공사 자체 인터페이스를 통해 항공 크레딧을 사용하고, EMD는 백오피스 정산 메커니즘이다.'
  - targetTerm: Voucher
    explanation: '"Voucher" is the broader IATA umbrella term for any mechanism providing a customer credit exchangeable for future services; a flight credit is the airline-specific form of that concept, typically electronic and linked to the passenger''s booking or loyalty account. A paper or standalone voucher code issued as compensation (e.g., for IDB) is also a form of voucher but operates differently from an account-linked flight credit.'
    explanation_ko: '"Voucher"는 미래 서비스로 교환 가능한 고객 크레딧을 제공하는 모든 메커니즘에 대한 IATA의 더 넓은 상위 개념이다. 항공 크레딧은 그 개념의 항공사별 형태로, 보통 전자적이며 승객의 예약 또는 마일리지 계정에 연결된다. 보상(예: 탑승 거부)으로 발행되는 종이 또는 독립형 바우처 코드도 바우처의 한 형태지만, 계정에 연결된 항공 크레딧과는 다르게 운영된다.'
sources:
  - name: Refunds and Other Consumer Protections (Refund Final Rule)
    org: US Department of Transportation
    version: 'May 2024 (effective Jun 25 2024)'
    section: 14 CFR Part 259 — Enhanced Protections for Airline Passengers
    url: 'https://www.transportation.gov/airconsumer/refundsfinalruleapril2024'
    tier: regulator-guidance
  - name: Refunds and Other Consumer Protections — Federal Register
    org: US Department of Transportation
    version: '89 FR 32760 (Apr 26 2024)'
    section: ''
    url: 'https://www.federalregister.gov/documents/2024/04/26/2024-07177/refunds-and-other-consumer-protections'
    tier: regulation
  - name: IATA Customer Voucher — Guidance for Airlines
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/contentassets/c33c192da39a42fcac34cb5ac81fd2ea/iata-customer-voucher.pdf'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="14" width="34" height="22" rx="3"/><line x1="7" y1="21" x2="41" y2="21"/><circle cx="17" cy="29" r="3"/><line x1="22" y1="27" x2="35" y2="27"/><line x1="22" y1="31" x2="31" y2="31"/></svg>
---

> A flight credit is a non-cash, carrier-specific credit issued by an airline representing the value of an unused or partially used ticket, redeemable against future bookings on the same carrier. It arises when a flight is cancelled, significantly changed, or when a passenger voluntarily modifies a booking and declines a cash refund. Under the US DOT's 2024 Refund Final Rule, a cash refund — not a credit — is the passenger's default entitlement when the airline cancels or significantly changes a flight; flight credits are a permissible alternative only with the passenger's explicit written consent.

Flight credits go by carrier-specific brand names — United Airlines calls them "travel credits," American Airlines offers "travel credits" and "trip credits," Southwest Airlines uses "travel funds," and Delta issues "eCredits" — but they share the common property of being redeemable only against future bookings with the issuing carrier. They are not transferable to other carriers, cannot be cashed out, and have historically carried expiry dates (though the DOT 2024 rule requires that credits offered instead of refunds for communicable-disease disruptions be valid for at least five years). Flight credits are typically issued automatically into the passenger's loyalty account, or as a booking reference the passenger can apply at checkout. In the GDS/IATA context, the commercial credit is often backed by an EMD (Electronic Miscellaneous Document), which is the formal accountable-document mechanism used to record and settle the value; however, the passenger-facing concept of a "flight credit" is distinct from the technical EMD construct.

**한국어 / Korean** — **항공 크레딧 (Flight Credit)** — 항공 크레딧(Flight Credit)은 미사용 또는 일부 사용된 항공권의 잔존 가치를 나타내는 동일 항공사 전용 비현금 크레딧으로, 같은 항공사의 향후 예약에 사용할 수 있다. 항공편이 취소·대폭 변경되거나 승객이 자발적으로 예약을 변경하고 현금 환불을 거절할 때 발생한다. 미국 교통부(DOT)의 2024년 환불 최종 규칙(Refund Final Rule)에 따르면, 항공사가 항공편을 취소하거나 대폭 변경할 경우 승객의 기본 권리는 항공 크레딧이 아니라 현금 환불이며, 항공 크레딧은 승객의 명시적인 서면 동의가 있을 때만 허용되는 대안이다.

항공 크레딧은 항공사별 브랜드 이름으로 불린다. 유나이티드항공은 "travel credits", 아메리칸항공은 "travel credits"와 "trip credits", 사우스웨스트항공은 "travel funds", 델타항공은 "eCredits"라고 부르지만, 모두 발행 항공사의 향후 예약에만 사용할 수 있다는 공통점이 있다. 다른 항공사에 이전할 수 없고 현금으로 환전도 안 되며, 역사적으로 유효 기간이 있었다(단, DOT 2024년 규칙은 전염병 관련 운항 차질로 환불 대신 발행된 크레딧은 최소 5년간 유효해야 한다고 요구한다). 항공 크레딧은 보통 승객의 마일리지 계정으로 자동 발행되거나, 결제 시 적용할 수 있는 예약 참조 번호 형태로 제공된다. GDS/IATA 맥락에서 상업적 크레딧은 흔히 EMD(전자 기타 서류)로 뒷받침되는데, EMD는 가치를 기록하고 정산하는 데 사용되는 공식 회계 문서 메커니즘이다. 그러나 승객 관점의 "항공 크레딧" 개념은 기술적인 EMD 구조와는 별개이다.

**Aliases:** `Travel Credit`, `eCredit`, `Future Flight Credit`, `Travel Funds`, `Airline Credit Voucher`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| United Airlines | `Travel Credit` | same | United issues credits to passengers' MileagePlus accounts, accessible at checkout as "Travel Credits." |
| American Airlines | `Trip Credit / Travel Credit` | same | American distinguishes "Trip Credits" (lower value, single itinerary use) from "Travel Credits" (higher value, multiple uses); both are flight credits. |
| Southwest Airlines | `Travel Funds` | same | Southwest stores unused ticket value as "Travel Funds" linked to the original confirmation number, usable by the original ticketed passenger. |
| Delta Air Lines | `eCredit` | same | Delta calls flight credits "eCredits," visible in the passenger's SkyMiles profile and redeemable on delta.com or via phone. |

# Related
- [Refund](/air/air-ticket/refund.md) — contrasts
- [EMD](/air/air-ticket/emd.md) — contrasts
- [Voucher](/tours/tour-product/voucher.md) — related
- [Reissue](/air/air-ticket/reissue.md) — related
- [Voluntary Refunds (ATPCO Category 33)](/air/air-ticket/voluntary-refunds-atpco-category-33.md) — related

# Distinctions
- **Flight Credit** vs [Refund](/air/air-ticket/refund.md) — A refund returns money to the original form of payment (cash or card credit); a flight credit is a non-cash airline-held balance redeemable only against future bookings on the same carrier. Under the US DOT 2024 Refund Final Rule, when a carrier cancels or significantly changes a flight, the default entitlement is a cash refund — a flight credit is acceptable only if the passenger explicitly consents to it.
- **Flight Credit** vs [EMD](/air/air-ticket/emd.md) — An EMD (Electronic Miscellaneous Document) is the IATA-standardized accountable document used internally by airlines and GDSs to record, settle, and track the financial value underlying a credit or ancillary; a flight credit is the commercial, passenger-facing product that the EMD may technically represent. Passengers interact with a flight credit through the airline's own interface; the EMD is a back-office settlement mechanism.
- **Flight Credit** vs [Voucher](/tours/tour-product/voucher.md) — "Voucher" is the broader IATA umbrella term for any mechanism providing a customer credit exchangeable for future services; a flight credit is the airline-specific form of that concept, typically electronic and linked to the passenger's booking or loyalty account. A paper or standalone voucher code issued as compensation (e.g., for IDB) is also a form of voucher but operates differently from an account-linked flight credit.

# Citations
[1] [US Department of Transportation — Refunds and Other Consumer Protections (Refund Final Rule) — 14 CFR Part 259](https://www.transportation.gov/airconsumer/refundsfinalruleapril2024)
[2] [US Department of Transportation — Refunds and Other Consumer Protections — Federal Register — 89 FR 32760 (Apr 26 2024)](https://www.federalregister.gov/documents/2024/04/26/2024-07177/refunds-and-other-consumer-protections)
[3] [IATA — IATA Customer Voucher — Guidance for Airlines](https://www.iata.org/contentassets/c33c192da39a42fcac34cb5ac81fd2ea/iata-customer-voucher.pdf)
