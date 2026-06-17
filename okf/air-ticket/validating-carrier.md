---
type: Role
title: Validating Carrier
description: 'The airline whose accounting code (the first three digits of the ticket number) appears on the ticket and which is responsible for the financial settlement of the document, collecting the fare and distributing proceeds to the transporting carriers. Eligibility to validate is governed by interline/ticketing agreements.'
tags:
  - air-ticket
  - active
  - IATA
timestamp: '2026-06-15T00:00:00Z'
id: validating-carrier
category: air-ticket
conceptType: role
status: active
term_ko: 발권 항공사 (Validating Carrier)
definition_ko: '항공권에 자사의 회계 코드(항공권 번호의 첫 세 자리)가 표시되며 해당 서류의 재무 정산을 책임지는 항공사로, 운임을 징수하고 수익을 운송 항공사들에게 배분한다. 발권 자격은 인터라인/발권 협정에 의해 규율된다.'
longDef: 'The validating (or plating) carrier need not operate any of the flights on the ticket; it is the carrier that takes financial ownership of the sale and settles funds through BSP/ARC, then prorates and pays the participating carriers via interline/SPA agreements. IATA ticketing-authority rules determine which carrier may be plated based on the itinerary and the agreements in place. The choice of validating carrier affects which fares, e-ticketing capability, and interline reach are available.'
longDef_ko: '발권(plating) 항공사는 항공권상의 어떤 항공편도 직접 운항할 필요가 없다. 이 항공사는 판매에 대한 재무적 소유권을 가지며 BSP/ARC를 통해 자금을 정산한 다음, 인터라인/SPA 협정에 따라 참여 항공사들에게 비율 배분(prorate)하여 지급한다. IATA 발권 권한 규정은 여정과 체결된 협정에 따라 어느 항공사가 발권(plating)될 수 있는지를 결정한다. 발권 항공사의 선택은 이용 가능한 운임, 전자 발권 가능 여부 및 인터라인 적용 범위에 영향을 미친다.'
standardBody: IATA
aliases:
  - Plating Carrier
  - Ticketing Carrier
  - Issuing Carrier
relationships:
  - type: related
    targetTerm: E-ticket
  - type: related
    targetTerm: Interline
  - type: related
    targetTerm: Proration
  - type: related
    targetTerm: BSP
  - type: related
    targetTerm: Airline Designator
distinctions:
  - targetTerm: Marketing Carrier
    explanation: The validating carrier owns the ticket's financial settlement; the marketing carrier is the airline selling the flight under its own code.
    explanation_ko: '발권 항공사는 항공권의 재무 정산을 소유하며, 마케팅 항공사(Marketing Carrier)는 자사 코드로 해당 항공편을 판매하는 항공사이다.'
  - targetTerm: Operating Carrier
    explanation: The validating carrier plates and settles the ticket and may not fly any segment; the operating carrier physically performs the flight.
    explanation_ko: '발권 항공사는 항공권을 발권(plate)하고 정산하며 어떤 구간도 운항하지 않을 수 있고, 운항 항공사(Operating Carrier)는 실제로 항공편을 수행한다.'
sources:
  - name: Passenger Services Conference Resolutions Manual (PSCRM)
    org: IATA
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M23 6l13 5v8c0 8-5 13-13 16-8-3-13-8-13-16v-8z"/><path d="M17 19l4 4 9-9"/></svg>
---

> The airline whose accounting code (the first three digits of the ticket number) appears on the ticket and which is responsible for the financial settlement of the document, collecting the fare and distributing proceeds to the transporting carriers. Eligibility to validate is governed by interline/ticketing agreements.

The validating (or plating) carrier need not operate any of the flights on the ticket; it is the carrier that takes financial ownership of the sale and settles funds through BSP/ARC, then prorates and pays the participating carriers via interline/SPA agreements. IATA ticketing-authority rules determine which carrier may be plated based on the itinerary and the agreements in place. The choice of validating carrier affects which fares, e-ticketing capability, and interline reach are available.

**한국어 / Korean** — **발권 항공사 (Validating Carrier)** — 항공권에 자사의 회계 코드(항공권 번호의 첫 세 자리)가 표시되며 해당 서류의 재무 정산을 책임지는 항공사로, 운임을 징수하고 수익을 운송 항공사들에게 배분한다. 발권 자격은 인터라인/발권 협정에 의해 규율된다.

발권(plating) 항공사는 항공권상의 어떤 항공편도 직접 운항할 필요가 없다. 이 항공사는 판매에 대한 재무적 소유권을 가지며 BSP/ARC를 통해 자금을 정산한 다음, 인터라인/SPA 협정에 따라 참여 항공사들에게 비율 배분(prorate)하여 지급한다. IATA 발권 권한 규정은 여정과 체결된 협정에 따라 어느 항공사가 발권(plating)될 수 있는지를 결정한다. 발권 항공사의 선택은 이용 가능한 운임, 전자 발권 가능 여부 및 인터라인 적용 범위에 영향을 미친다.

**Aliases:** `Plating Carrier`, `Ticketing Carrier`, `Issuing Carrier`

# Related
- [E-ticket](/air-ticket/e-ticket.md) — related
- [Interline](/air-partner/interline.md) — related
- [Proration](/air-partner/proration.md) — related
- [BSP](/pay/bsp.md) — related
- [Airline Designator](/codes/airline-designator.md) — related

# Distinctions
- **Validating Carrier** vs [Marketing Carrier](/air-partner/marketing-carrier.md) — The validating carrier owns the ticket's financial settlement; the marketing carrier is the airline selling the flight under its own code.
- **Validating Carrier** vs [Operating Carrier](/air-partner/operating-carrier.md) — The validating carrier plates and settles the ticket and may not fly any segment; the operating carrier physically performs the flight.

# Citations
[1] IATA — Passenger Services Conference Resolutions Manual (PSCRM)
