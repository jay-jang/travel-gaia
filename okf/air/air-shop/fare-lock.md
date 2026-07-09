---
type: Business Term
title: Fare Lock
description: 'A Fare Lock (also called a Fare Hold or Price Hold) is a paid ancillary service offered by airlines and booking platforms that allows a traveler to reserve a specific itinerary and fare for a defined hold period — typically 24 to 72 hours — without immediately purchasing the ticket, in exchange for a non-refundable fee. If the traveler completes the purchase within the hold window, the fare is guaranteed; if not, the hold expires and the fee is forfeited.'
tags:
  - air-shop
  - active
  - ATPCO
timestamp: '2026-07-09T00:00:00Z'
id: fare-lock
vertical: air
category: air-shop
conceptType: business-term
status: active
term_ko: 운임 잠금 (Fare Lock)
definition_ko: 'Fare Lock(운임 잠금, Fare Hold 또는 Price Hold라고도 함)은 항공사나 예약 플랫폼이 제공하는 유료 부가 서비스로, 여행객이 비환급 수수료를 내고 특정 여정과 운임을 일정 기간(보통 24~72시간) 동안 즉시 구매 없이 예약·보류할 수 있는 서비스다. 여행객이 보류 기간 내에 구매를 완료하면 운임이 보장되고, 그렇지 않으면 보류가 만료되어 수수료는 환급되지 않는다.'
longDef: 'Fare Lock gives travelers time to confirm travel plans, obtain approval (e.g., corporate travel), or gather co-traveler agreement without risking that the fare will increase or sell out. The hold fee is typically between USD 5 and USD 30, varies by fare level and carrier, and is non-refundable regardless of whether the ticket is ultimately purchased. From a revenue management perspective, the airline benefits from the hold fee revenue and from binding a high-intent traveler. Technically, a fare lock may function as a ticketing time limit extension (the airline holds the seat, deferring the ticketing deadline to the end of the hold window) or as a separate confirmed seat reservation with a conditional purchase commitment. ATPCO Optional Services (formerly Optionals/Category 12) is the standard framework through which airlines publish ancillary service fees including fare lock/hold. Hold periods may be as short as one hour (some airlines) or up to seven days (limited cases). Booking platforms (e.g., Google Flights, Kayak) sometimes intermediate their own price-guarantee products on top of airline-issued holds.'
longDef_ko: 'Fare Lock은 여행객이 운임이 오르거나 좌석이 매진될 위험 없이 여행 계획을 확인하거나 승인을 받거나(예: 법인 출장) 동행자 동의를 구할 시간을 준다. 보류 수수료는 보통 USD 5~30이며 운임 수준과 항공사에 따라 다르고, 최종적으로 항공권을 구매하든 안 하든 환급되지 않는다. 수익 관리 관점에서 항공사는 보류 수수료 수익을 얻고 구매 의향이 높은 여행객을 확보하는 이점이 있다. 기술적으로 Fare Lock은 발권 마감 기한을 보류 기간 종료 시점까지 연장하는 방식(항공사가 좌석을 보류하고 발권 기한 유예)으로 작동하거나, 조건부 구매 약정이 포함된 별도의 좌석 확약 예약으로 처리될 수 있다. ATPCO Optional Services(구 Optionals/Category 12)는 항공사가 Fare Lock을 포함한 부가 서비스 요금을 공시하는 표준 체계다. 보류 기간은 1시간(일부 항공사)~최장 7일까지 다양하다. Google Flights·Kayak 등 예약 플랫폼이 항공사 발급 보류 위에 자체 가격 보증 상품을 제공하기도 한다.'
aliases:
  - Fare Hold
  - Price Hold
  - Hold My Fare
  - Fare Guarantee
  - Seat Hold
providerTerms:
  - provider: Ryanair
    term: Hold My Fare
    context: Ryanair's branded fare-lock product, available for a flat fee, reserves the selected flight and price for 24 hours while the traveler decides.
    context_ko: '여행객이 결정을 내리는 동안 선택한 항공편과 가격을 24시간 동안 보류하는 Ryanair의 브랜드 운임 잠금 서비스로, 정액 수수료로 제공된다.'
    relationship: same
  - provider: easyJet
    term: Flexi Fare / Hold Seat
    context: easyJet offers a hold option within its Flexi booking tier, allowing travelers to change or confirm their booking within a defined window.
    context_ko: 'easyJet은 Flexi 예약 등급 내에서 보류 옵션을 제공하여 여행객이 정해진 기간 내에 예약을 변경하거나 확정할 수 있게 한다.'
    relationship: same
relationships:
  - type: narrower
    targetTerm: Ancillary Service
  - type: related
    targetTerm: Fare Rule
  - type: contrasts
    targetTerm: Ticketing Time Limit
distinctions:
  - targetTerm: Ticketing Time Limit
    explanation: 'A Ticketing Time Limit (TTL) is the mandatory system-enforced deadline by which a PNR must be ticketed or it will auto-cancel — it is set automatically by the airline or GDS and the traveler incurs no separate fee for the window. A Fare Lock is an optional, paid service that extends or replaces the ticketing window at the traveler''s election, providing a longer or more formal hold in exchange for a non-refundable fee.'
    explanation_ko: '발권 기한(TTL)은 PNR이 발권되지 않으면 자동 취소되도록 항공사나 GDS가 자동으로 설정하는 의무적 시스템 마감 기한이며, 여행객은 이 기간에 대해 별도 수수료를 내지 않는다. Fare Lock은 여행객이 선택하는 선택적 유료 서비스로, 비환급 수수료를 내고 발권 기간을 연장하거나 공식적인 보류를 제공한다.'
  - targetTerm: Ancillary Service
    explanation: 'A Fare Lock is a specific type of ancillary service focused on holding a price and seat combination. Ancillary Service is the broader category that includes all revenue items sold beyond the base fare (bags, meals, seat upgrades, lounge access, and hold fees).'
    explanation_ko: 'Fare Lock은 가격과 좌석 조합을 보류하는 특정 유형의 부가 서비스다. Ancillary Service는 기본 운임 외에 판매되는 모든 수익 항목(수하물·기내식·좌석 업그레이드·라운지 이용·보류 수수료 등)을 포괄하는 더 넓은 범주다.'
sources:
  - name: Optional Services (Ancillary Fees)
    org: ATPCO
    version: ''
    section: ''
    url: 'https://atpco.net/solutions/optional-services/'
    tier: vendor-doc
  - name: Passenger Services Conference Resolutions Manual (PSCRM)
    org: IATA
    version: '46th Edition (2026)'
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="14" y="18" width="20" height="16" rx="2"/><path d="M20 18v-4a4 4 0 0 1 8 0v4"/><circle cx="24" cy="27" r="2" fill="currentColor" stroke="none"/><line x1="24" y1="27" x2="24" y2="30"/></svg>
---

> A Fare Lock (also called a Fare Hold or Price Hold) is a paid ancillary service offered by airlines and booking platforms that allows a traveler to reserve a specific itinerary and fare for a defined hold period — typically 24 to 72 hours — without immediately purchasing the ticket, in exchange for a non-refundable fee. If the traveler completes the purchase within the hold window, the fare is guaranteed; if not, the hold expires and the fee is forfeited.

Fare Lock gives travelers time to confirm travel plans, obtain approval (e.g., corporate travel), or gather co-traveler agreement without risking that the fare will increase or sell out. The hold fee is typically between USD 5 and USD 30, varies by fare level and carrier, and is non-refundable regardless of whether the ticket is ultimately purchased. From a revenue management perspective, the airline benefits from the hold fee revenue and from binding a high-intent traveler. ATPCO Optional Services is the standard framework through which airlines publish ancillary service fees including fare lock/hold. Hold periods may be as short as one hour (some airlines) or up to seven days (limited cases). Booking platforms such as Google Flights and Kayak sometimes intermediate their own price-guarantee products on top of airline-issued holds.

**한국어 / Korean** — **운임 잠금 (Fare Lock)** — Fare Lock(운임 잠금, Fare Hold 또는 Price Hold라고도 함)은 항공사나 예약 플랫폼이 제공하는 유료 부가 서비스로, 여행객이 비환급 수수료를 내고 특정 여정과 운임을 일정 기간(보통 24~72시간) 동안 즉시 구매 없이 예약·보류할 수 있는 서비스다. 여행객이 보류 기간 내에 구매를 완료하면 운임이 보장되고, 그렇지 않으면 보류가 만료되어 수수료는 환급되지 않는다.

Fare Lock은 여행객이 운임이 오르거나 좌석이 매진될 위험 없이 여행 계획을 확인하거나 법인 출장 승인을 받거나 동행자 동의를 구할 시간을 준다. 보류 수수료는 보통 USD 5~30이며 환급되지 않는다. ATPCO Optional Services는 항공사가 Fare Lock을 포함한 부가 서비스 요금을 공시하는 표준 체계다.

**Aliases:** `Fare Hold`, `Price Hold`, `Hold My Fare`, `Fare Guarantee`, `Seat Hold`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Ryanair | `Hold My Fare` | same | Ryanair's branded fare-lock product, available for a flat fee, reserves the selected flight and price for 24 hours. |
| easyJet | `Flexi Fare / Hold Seat` | same | easyJet offers a hold option within its Flexi booking tier, allowing travelers to confirm or change their booking within a defined window. |

# Related
- [Ancillary Service](/air/air-ticket/ancillary-service.md) — narrower
- [Fare Rule](/air/air-shop/fare-rule.md) — related
- [Ticketing Time Limit](/air/air-ticket/ticketing-time-limit.md) — contrasts

# Distinctions
- **Fare Lock** vs [Ticketing Time Limit](/air/air-ticket/ticketing-time-limit.md) — A Ticketing Time Limit (TTL) is the mandatory system-enforced deadline by which a PNR must be ticketed or it will auto-cancel — it is set automatically by the airline or GDS and the traveler incurs no separate fee. A Fare Lock is an optional, paid service that extends or replaces the ticketing window at the traveler's election, providing a longer or more formal hold in exchange for a non-refundable fee.
- **Fare Lock** vs [Ancillary Service](/air/air-ticket/ancillary-service.md) — A Fare Lock is a specific type of ancillary service focused on holding a price and seat combination. Ancillary Service is the broader category that includes all revenue items sold beyond the base fare (bags, meals, seat upgrades, lounge access, and hold fees).

# Citations
[1] [ATPCO — Optional Services (Ancillary Fees)](https://atpco.net/solutions/optional-services/)
[2] [IATA — Passenger Services Conference Resolutions Manual (PSCRM) — 46th Edition (2026)](https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/)
