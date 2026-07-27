---
type: Business Term
title: Open Return
description: 'An Open Return is a rail ticket type in which the outbound journey is purchased and dated at the point of sale but the return journey carries an "open" validity, allowing the holder to travel back on any qualifying service within the ticket''s validity period (typically one calendar month from the outward travel date). The term is primarily used in the UK National Rail market and contrasts with fixed, date-specific Advance tickets.'
tags:
  - rail
  - active
  - National Rail
timestamp: '2026-07-27T00:00:00Z'
id: open-return
vertical: ground
category: rail
conceptType: business-term
status: active
term_ko: 오픈 반환 승차권(Open Return)
definition_ko: 'Open Return은 출발 여정은 구매 시 날짜를 지정하지만 귀환 여정은 승차권 유효기간(통상 출발일로부터 1개월) 내 어떤 해당 열차든 이용할 수 있는 ''오픈'' 유효기간을 갖는 철도 승차권 유형이다. 주로 영국 National Rail 시장에서 사용되는 용어로, 날짜와 열차가 고정된 Advance 승차권과 대비된다.'
longDef: 'Open Return tickets correspond to the Off-Peak Return or Anytime Return fare families on National Rail: only the outbound journey is tied to a specific date (and sometimes a specific service), while the return coupon carries the ticket''s face validity — normally one calendar month from the outward travel date, or sometimes restricted to the same calendar day or three days, depending on the specific fare. The return journey must be on a qualifying service for the fare type (e.g., an Off-Peak return ticket cannot be used on a morning peak service for the return), but within that constraint it does not require advance reservation. This flexibility comes at a cost: open-return tickets are substantially more expensive than equivalent Advance tickets for the same origin–destination pair. Open Returns are the standard choice for business travelers who cannot predict their return time, and they can often be split or combined with a Railcard discount. In European rail markets, the concept is analogous to a flexible return ticket; OSDM and NeTEx model this as a "flexible" or "validity-based" ticket in contrast to a date/train-specific reserved ticket.'
longDef_ko: 'Open Return 승차권은 National Rail의 Off-Peak Return 또는 Anytime Return 요금 패밀리에 해당한다. 출발 여정만 특정 날짜(때로는 특정 열차)에 묶이고, 귀환 쿠폰은 승차권 표면 유효기간(통상 출발일로부터 1개월, 경우에 따라 당일 또는 3일로 제한)을 갖는다. 귀환 여정은 요금 유형에 맞는 열차(예: Off-Peak 반환 승차권은 출퇴근 시간대 열차 사용 불가)를 이용해야 하지만, 그 범위 안에서 사전 예약이 필요 없다. 이 유연성은 비용을 수반하는데, open-return 승차권은 같은 출발-도착 구간의 Advance 승차권보다 훨씬 비싸다. Open Return은 귀환 시간을 예측할 수 없는 비즈니스 여행자에게 표준적인 선택이며, Railcard 할인과 결합할 수 있는 경우가 많다. 유럽 철도 시장에서는 이에 상당하는 개념을 유연 반환 승차권이라 부르며, OSDM과 NeTEx는 이를 날짜·열차 지정 예약 승차권과 대비되는 ''유연'' 또는 ''유효기간 기반'' 승차권으로 모델링한다.'
standardBody: Rail Delivery Group
aliases:
  - Open Ticket Return
  - Flexible Return
  - Anytime Return
  - Off-Peak Return
providerTerms:
  - provider: National Rail (UK)
    term: Off-Peak Return / Anytime Return
    context: 'The two main National Rail flexible return products are the Off-Peak Return (travel outside peak hours, one-month validity on the return) and the Anytime Return (any train, any time, one-month validity on the return). Both are informally called ''Open Returns''.'
    context_ko: '영국 National Rail의 두 가지 주요 유연 반환 상품은 Off-Peak Return(비피크 시간대 이용, 귀환 1개월 유효기간)과 Anytime Return(언제든지 이용 가능, 귀환 1개월 유효기간)이다. 두 상품 모두 비공식적으로 ''Open Return''이라 불린다.'
    relationship: same
  - provider: Eurostar / International rail
    term: Flexible Return / Flexi Return
    context: 'Eurostar and other international rail operators use ''Flexible'' or ''Flexi Return'' for tickets where the return date is not fixed at purchase, analogous to the UK open return concept.'
    context_ko: 'Eurostar 등 국제 철도 운영사는 구매 시 귀환일을 지정하지 않는 승차권을 ''Flexible'' 또는 ''Flexi Return''으로 표현하며, 이는 영국의 open return 개념과 유사하다.'
    relationship: same
relationships:
  - type: contrasts
    targetTerm: Advance Fare
  - type: related
    targetTerm: Season Ticket
  - type: related
    targetTerm: Railcard
distinctions:
  - targetTerm: Advance Fare
    explanation: 'An Advance Fare is fixed to a specific train service on a specific date (both outbound and inbound) and is typically non-refundable; an Open Return fixes only the outbound date and leaves the return journey open within a one-month validity, at a significantly higher price.'
    explanation_ko: 'Advance Fare는 특정 날짜·특정 열차(출발·귀환 모두)에 고정되고 통상 환불 불가이며, Open Return은 출발일만 고정하고 귀환 여정은 1개월 유효기간 안에서 열어 두지만 가격이 훨씬 비싸다.'
  - targetTerm: Season Ticket
    explanation: 'A Season Ticket covers unlimited travel between two points for a defined calendar period (week/month/year) and is suited to commuters; an Open Return covers a single outward journey and a single return journey within its validity and is suited to occasional travelers needing flexibility on the return date.'
    explanation_ko: 'Season Ticket은 특정 기간(주·월·연) 동안 두 지점 간 무제한 이용을 허용하며 통근자에 적합하고, Open Return은 유효기간 안의 단일 출발·단일 귀환을 커버하며 귀환 날짜에 유연성이 필요한 비정기 여행자에 적합하다.'
sources:
  - name: 'National Rail Conditions of Travel'
    org: Rail Delivery Group
    version: '2024 Edition'
    section: 'Section 4: Using Your Ticket'
    url: 'https://www.nationalrail.co.uk/travel-information/national-rail-conditions-of-travel/'
    tier: association
  - name: 'Rail Fares — Ticket Types Explained'
    org: Office of Rail and Road (ORR)
    version: ''
    section: ''
    url: 'https://www.orr.gov.uk/passengers/your-rights-when-things-go-wrong/rail-fares'
    tier: regulator-guidance
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="14" width="36" height="22" rx="3"/><line x1="14" y1="22" x2="20" y2="22"/><line x1="14" y1="28" x2="20" y2="28"/><path d="M28 20l4 4-4 4"/><line x1="28" y1="24" x2="34" y2="24"/><line x1="6" y1="20" x2="6" y2="20"/></svg>
---

> An Open Return is a rail ticket type in which the outbound journey is purchased and dated at the point of sale but the return journey carries an "open" validity, allowing the holder to travel back on any qualifying service within the ticket's validity period (typically one calendar month from the outward travel date). The term is primarily used in the UK National Rail market and contrasts with fixed, date-specific Advance tickets.

Open Return tickets correspond to the Off-Peak Return or Anytime Return fare families on National Rail: only the outbound journey is tied to a specific date (and sometimes a specific service), while the return coupon carries the ticket's face validity — normally one calendar month from the outward travel date. The return journey must be on a qualifying service for the fare type (e.g., an Off-Peak return ticket cannot be used on a morning peak service for the return), but within that constraint it does not require advance reservation. This flexibility comes at a cost: open-return tickets are substantially more expensive than equivalent Advance tickets for the same origin–destination pair. Open Returns are the standard choice for business travelers who cannot predict their return time, and they can often be combined with a Railcard discount. In European rail markets, the concept is analogous to a flexible return ticket; OSDM and NeTEx model this as a "flexibility-based" ticket in contrast to a date/train-specific reserved ticket.

**한국어 / Korean** — **오픈 반환 승차권(Open Return)** — Open Return은 출발 여정은 구매 시 날짜를 지정하지만 귀환 여정은 승차권 유효기간(통상 출발일로부터 1개월) 내 어떤 해당 열차든 이용할 수 있는 ''오픈'' 유효기간을 갖는 철도 승차권 유형이다. 주로 영국 National Rail 시장에서 사용되는 용어로, 날짜와 열차가 고정된 Advance 승차권과 대비된다.

Open Return 승차권은 National Rail의 Off-Peak Return 또는 Anytime Return 요금 패밀리에 해당한다. 출발 여정만 특정 날짜에 묶이고, 귀환 쿠폰은 승차권 표면 유효기간을 갖는다. 귀환 여정은 요금 유형에 맞는 열차를 이용해야 하지만, 그 범위 안에서 사전 예약이 필요 없다. Open Return은 귀환 시간을 예측할 수 없는 비즈니스 여행자에게 표준적인 선택이며, Railcard 할인과 결합할 수 있는 경우가 많다.

**Aliases:** `Open Ticket Return`, `Flexible Return`, `Anytime Return`, `Off-Peak Return`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| National Rail (UK) | `Off-Peak Return / Anytime Return` | same | The two main National Rail flexible return products are the Off-Peak Return (travel outside peak hours, one-month validity on the return) and the Anytime Return (any train, any time, one-month validity on the return). Both are informally called 'Open Returns'. |
| Eurostar / International rail | `Flexible Return / Flexi Return` | same | Eurostar and other international rail operators use 'Flexible' or 'Flexi Return' for tickets where the return date is not fixed at purchase, analogous to the UK open return concept. |

# Related
- [Advance Fare](/ground/rail/advance-fare.md) — contrasts
- [Season Ticket](/ground/rail/season-ticket.md) — related
- [Railcard](/ground/rail/railcard.md) — related

# Distinctions
- **Open Return** vs [Advance Fare](/ground/rail/advance-fare.md) — An Advance Fare is fixed to a specific train service on a specific date (both outbound and inbound) and is typically non-refundable; an Open Return fixes only the outbound date and leaves the return journey open within a one-month validity, at a significantly higher price.
- **Open Return** vs [Season Ticket](/ground/rail/season-ticket.md) — A Season Ticket covers unlimited travel between two points for a defined calendar period and is suited to commuters; an Open Return covers a single outward journey and a single return journey within its validity and is suited to occasional travelers needing flexibility on the return date.

# Citations
[1] [Rail Delivery Group — National Rail Conditions of Travel](https://www.nationalrail.co.uk/travel-information/national-rail-conditions-of-travel/)
[2] [Office of Rail and Road (ORR) — Rail Fares — Ticket Types Explained](https://www.orr.gov.uk/passengers/your-rights-when-things-go-wrong/rail-fares)
