---
type: Business Term
title: Infant Fare
description: >-
  A reduced airfare for a child under two years of age who does not occupy a
  separate seat but travels on the lap of an accompanying adult. On international
  routes governed by IATA tariff principles, an infant fare is typically 10% of
  the applicable adult fare plus applicable taxes; the infant is assigned the
  passenger type code INF and requires no individual seat assignment but is
  entitled to a baggage allowance (usually one checked bag and/or stroller).
tags:
  - air-ticket
  - active
  - IATA
timestamp: '2026-08-08T00:00:00Z'
id: infant-fare
vertical: air
category: air-ticket
conceptType: business-term
status: active
term_ko: 유아 요금(Infant Fare)
definition_ko: >-
  별도의 좌석 없이 동반 성인의 무릎 위에 앉아 여행하는 만 2세 미만 유아를 위한 할인 항공요금이다. IATA 운임 원칙이
  적용되는 국제선에서 유아 요금은 통상 해당 성인 요금의 10%에 적용 세금을 더한 금액이며, 유아는 여객 유형 코드 INF를
  부여받고 개별 좌석 배정은 없지만 수하물 허용량(보통 위탁 수하물 1개 및/또는 유모차)이 주어진다.
longDef: >-
  An infant fare applies to children from birth up to but not including their
  second birthday; a child who turns two on the day of travel must be ticketed at
  a child fare with a seat. IATA traditionally sets the international infant fare
  at 10% of the fare component (excluding surcharges and taxes), though individual
  airline tariffs may vary. The ticket is issued as a separate e-ticket using the
  PTC INF and cross-referenced to the accompanying adult's ticket. Each adult
  may carry only one infant on their lap due to the single supplemental seatbelt
  per adult seat available on commercial aircraft. If the airline offers a bassinet
  (sky cot), it is subject to availability and assigned via an SSR element (BSCT).
  For domestic US travel, most carriers allow lap infants at no base fare; taxes
  may still apply. Airlines offering infant fares at the INS (infant with seat)
  PTC charge at child rates and require a seat assignment. The infant fare interacts
  with award redemption (infants may travel on a fraction of an adult redemption
  mileage or a fixed fee) and may carry its own checked-bag entitlement even
  without a seat.
longDef_ko: >-
  유아 요금은 출생부터 만 2세 생일 전날까지의 아동에게 적용된다. 여행 당일 만 2세가 되는 아동은 좌석이 있는 소아 요금으로
  발권해야 한다. IATA는 전통적으로 국제선 유아 요금을 운임 구성 요소(할증료 및 세금 제외)의 10%로 설정하지만, 개별 항공사
  요율에 따라 다를 수 있다. 항공권은 PTC INF를 사용하는 별도의 e-ticket으로 발권되며 동반 성인 항공권과 교차 참조된다.
  상업용 항공기의 성인 좌석당 한 개의 보조 안전벨트만 제공되므로, 각 성인은 한 명의 유아만 무릎에 안을 수 있다. 항공사가
  바시넷(하늘 요람)을 제공하는 경우 이는 가용성에 따라 SSR 요소(BSCT)를 통해 배정된다. 미국 국내선의 경우 대부분 항공사가
  무릎 유아에게 기본 요금을 부과하지 않으나 세금은 적용될 수 있다. INS(좌석 있는 유아) PTC 코드로 유아 좌석을 제공하는
  항공사는 소아 요금으로 청구하며 좌석 배정이 필요하다. 유아 요금은 마일리지 상환(유아는 성인 상환 마일의 일부 또는 고정 수수료로
  탑승 가능)과 상호작용하며, 좌석 없이도 별도의 위탁 수하물 허용량이 부여될 수 있다.
aliases:
  - Infant Ticket
  - Lap Infant Fare
  - INF Fare
  - Baby Fare
relationships:
  - type: related
    targetTerm: Passenger Type Code
  - type: related
    targetTerm: E-ticket
  - type: related
    targetTerm: SSR
  - type: contrasts
    targetTerm: Unaccompanied Minor
distinctions:
  - targetTerm: Passenger Type Code
    explanation: >-
      The Passenger Type Code (PTC) is the two-or-three-letter code that
      identifies the traveller category (INF for lap infant, INS for infant
      with seat, CHD for child) and drives fare look-up; the Infant Fare is
      the specific commercial pricing outcome when the PTC is INF.
    explanation_ko: >-
      여객 유형 코드(PTC)는 여행자 카테고리를 식별하는 2~3자리 코드(무릎 유아는 INF, 좌석 유아는 INS, 소아는 CHD)로
      요금 조회를 구동하고, 유아 요금은 PTC가 INF일 때의 구체적인 상업적 요금 산출 결과이다.
  - targetTerm: Unaccompanied Minor
    explanation: >-
      An Unaccompanied Minor (UM) is a child (typically aged 5–17) travelling
      without an adult and subject to a special supervision service and UM fee;
      an infant fare applies to children under two who are on a lap — the two
      categories never overlap, as infants must always be accompanied.
    explanation_ko: >-
      비동반 미성년자(UM)는 성인 없이 여행하며 특별 감독 서비스와 UM 수수료가 부과되는 아동(통상 만 5~17세)이고, 유아
      요금은 무릎 위에 앉는 만 2세 미만 아동에게 적용된다. 유아는 항상 동반이 필요하므로 두 카테고리는 겹치지 않는다.
sources:
  - name: Infant and Child Fare & Ticketing Guidelines
    org: Qantas (IATA airline agency documentation)
    version: ''
    section: Infant fares — international
    url: 'https://agencyconnect.qantas.com/en-asia/policies/fares-and-ticketing/infant-fare-and-ticketing-guidelines'
    tier: vendor-doc
  - name: Universal API — Air Pricing with Passenger Types
    org: Travelport
    version: ''
    section: INF / INS Passenger Type Codes
    url: 'https://support.travelport.com/webhelp/uapi/Content/Air/Air_Pricing/Air_Pricing_with_Passenger_Types.htm'
    tier: vendor-doc
  - name: Passenger Services Conference Resolutions Manual (PSCRM)
    org: IATA
    version: 46th Edition (2026)
    section: Passenger type codes and infant provisions
    url: 'https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="30" cy="12" r="5"/><path d="M18 28c0-5 4-9 9-9"/><path d="M10 36c2-6 7-10 13-10h6c4 0 7 2 9 5"/><circle cx="22" cy="20" r="3"/><path d="M16 36h16"/></svg>
---

> A reduced airfare for a child under two years of age who does not occupy a separate seat but travels on the lap of an accompanying adult. On international routes governed by IATA tariff principles, an infant fare is typically 10% of the applicable adult fare plus applicable taxes; the infant is assigned the passenger type code INF and requires no individual seat assignment but is entitled to a baggage allowance (usually one checked bag and/or stroller).

An infant fare applies to children from birth up to but not including their second birthday; a child who turns two on the day of travel must be ticketed at a child fare with a seat. IATA traditionally sets the international infant fare at 10% of the fare component (excluding surcharges and taxes), though individual airline tariffs may vary. The ticket is issued as a separate e-ticket using the PTC INF and cross-referenced to the accompanying adult's ticket. Each adult may carry only one infant on their lap due to the single supplemental seatbelt per adult seat available on commercial aircraft. If the airline offers a bassinet (sky cot), it is subject to availability and assigned via an SSR element (BSCT). For domestic US travel, most carriers allow lap infants at no base fare; taxes may still apply. Airlines offering infant fares at the INS (infant with seat) PTC charge at child rates and require a seat assignment. The infant fare interacts with award redemption (infants may travel on a fraction of an adult redemption mileage or a fixed fee) and may carry its own checked-bag entitlement even without a seat.

**한국어 / Korean** — **유아 요금(Infant Fare)** — 별도의 좌석 없이 동반 성인의 무릎 위에 앉아 여행하는 만 2세 미만 유아를 위한 할인 항공요금이다. IATA 운임 원칙이 적용되는 국제선에서 유아 요금은 통상 해당 성인 요금의 10%에 적용 세금을 더한 금액이며, 유아는 여객 유형 코드 INF를 부여받고 개별 좌석 배정은 없지만 수하물 허용량(보통 위탁 수하물 1개 및/또는 유모차)이 주어진다.

유아 요금은 출생부터 만 2세 생일 전날까지의 아동에게 적용된다. 여행 당일 만 2세가 되는 아동은 좌석이 있는 소아 요금으로 발권해야 한다. IATA는 전통적으로 국제선 유아 요금을 운임 구성 요소(할증료 및 세금 제외)의 10%로 설정하지만, 개별 항공사 요율에 따라 다를 수 있다. 항공권은 PTC INF를 사용하는 별도의 e-ticket으로 발권되며 동반 성인 항공권과 교차 참조된다. 상업용 항공기의 성인 좌석당 한 개의 보조 안전벨트만 제공되므로, 각 성인은 한 명의 유아만 무릎에 안을 수 있다. 항공사가 바시넷(하늘 요람)을 제공하는 경우 이는 가용성에 따어 SSR 요소(BSCT)를 통해 배정된다. 미국 국내선의 경우 대부분 항공사가 무릎 유아에게 기본 요금을 부과하지 않으나 세금은 적용될 수 있다. INS(좌석 있는 유아) PTC 코드로 유아 좌석을 제공하는 항공사는 소아 요금으로 청구하며 좌석 배정이 필요하다. 유아 요금은 마일리지 상환(유아는 성인 상환 마일의 일부 또는 고정 수수료로 탑승 가능)과 상호작용하며, 좌석 없이도 별도의 위탁 수하물 허용량이 부여될 수 있다.

**Aliases:** `Infant Ticket`, `Lap Infant Fare`, `INF Fare`, `Baby Fare`

# Related
- [Passenger Type Code](/common/codes/passenger-type-code.md) — related
- [E-ticket](/air/air-ticket/e-ticket.md) — related
- [SSR](/air/air-ops/ssr.md) — related
- [Unaccompanied Minor](/common/customer/unaccompanied-minor.md) — contrasts

# Distinctions
- **Infant Fare** vs [Passenger Type Code](/common/codes/passenger-type-code.md) — The Passenger Type Code (PTC) is the two-or-three-letter code that identifies the traveller category (INF for lap infant, INS for infant with seat, CHD for child) and drives fare look-up; the Infant Fare is the specific commercial pricing outcome when the PTC is INF.
- **Infant Fare** vs [Unaccompanied Minor](/common/customer/unaccompanied-minor.md) — An Unaccompanied Minor (UM) is a child (typically aged 5–17) travelling without an adult and subject to a special supervision service and UM fee; an infant fare applies to children under two who are on a lap — the two categories never overlap, as infants must always be accompanied.

# Citations
[1] [Qantas (IATA airline agency documentation) — Infant and Child Fare & Ticketing Guidelines — infant fares — international](https://agencyconnect.qantas.com/en-asia/policies/fares-and-ticketing/infant-fare-and-ticketing-guidelines)
[2] [Travelport — Universal API — Air Pricing with Passenger Types — INF / INS Passenger Type Codes](https://support.travelport.com/webhelp/uapi/Content/Air/Air_Pricing/Air_Pricing_with_Passenger_Types.htm)
[3] [IATA — Passenger Services Conference Resolutions Manual (PSCRM) — 46th Edition (2026) — Passenger type codes and infant provisions](https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/)
