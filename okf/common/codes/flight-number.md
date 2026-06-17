---
type: Code
title: Flight Number
description: 'The identifier of a scheduled flight, formed by the two-character airline designator plus a numeric suffix of one to four digits (e.g., AA100, LH9). It identifies a marketing flight on a route and date, not a specific aircraft.'
tags:
  - codes
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: flight-number
vertical: common
category: codes
conceptType: code
status: active
term_ko: 편명(항공편 번호)
definition_ko: '정기 항공편을 식별하는 코드로, 2자리 항공사 지정 코드에 1~4자리 숫자가 결합되어 구성된다(예: AA100, LH9). 특정 항공기가 아니라 노선·날짜상의 마케팅 항공편을 식별한다.'
longDef: 'The numeric portion is limited to four digits. Many carriers follow conventions where direction influences parity (e.g., eastbound/northbound even, westbound/southbound odd) and high number ranges denote regional or codeshare flights, but these conventions are not standardized across the industry. Under codeshare, the same physical flight carries multiple flight numbers: the marketing carrier''s flight number shown to the customer and the operating carrier''s flight number. A flight number combined with a date and origin/destination identifies a flight segment in a PNR.'
longDef_ko: '숫자 부분은 최대 4자리로 제한된다. 다수 항공사는 방향에 따라 홀짝을 나누거나(예: 동행/북행은 짝수, 서행/남행은 홀수) 높은 번호 대역을 지역 노선·공동운항편에 배정하는 관례를 따르지만, 이러한 관례가 업계 전반에서 표준화되어 있지는 않다. 공동운항(codeshare)에서는 동일한 실제 운항편이 여러 편명을 갖는다. 고객에게 표시되는 마케팅 항공사 편명과 실제 운항 항공사 편명이 그것이다. 편명에 날짜와 출발지/도착지를 결합하면 PNR 내 항공 구간(segment)을 식별할 수 있다.'
standardBody: IATA
aliases:
  - Flight Designator
  - Flight Identifier
relationships:
  - type: related
    targetTerm: Airline Designator
  - type: related
    targetTerm: Segment
  - type: related
    targetTerm: Codeshare
  - type: related
    targetTerm: Marketing Carrier
  - type: related
    targetTerm: Operating Carrier
distinctions:
  - targetTerm: Segment
    explanation: A flight number identifies a scheduled flight; a segment is the booked flight number plus a specific date and origin/destination held in a PNR.
    explanation_ko: '편명은 정기 항공편을 식별하고, 세그먼트(segment)는 PNR에 보관되는 특정 날짜·출발지/도착지가 결합된 예약된 편명이다.'
  - targetTerm: Airline Accounting Code
    explanation: A flight number labels a flight on a route/date; the accounting code is the 3-digit airline identifier on the ticket number and is unrelated to any particular flight.
    explanation_ko: '편명은 노선·날짜상의 항공편을 가리키고, 정산 코드는 항공권 번호상의 3자리 항공사 식별자로 특정 항공편과 무관하다.'
sources:
  - org: IATA
    name: Standard Schedules Information Manual (SSIM)
    version: ''
    section: ''
    url: ''
  - org: Wikipedia
    name: Flight number
    version: ''
    section: ''
    url: 'https://en.wikipedia.org/wiki/Flight_number'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M9 27l30-9c2-.6 4 .4 4 2s-1.7 3-3.5 3.6L13 32l-4 6-3-1 2-7-6-1 2-2 5 1z"/><path d="M22 28l4 8"/></svg>
---

> The identifier of a scheduled flight, formed by the two-character airline designator plus a numeric suffix of one to four digits (e.g., AA100, LH9). It identifies a marketing flight on a route and date, not a specific aircraft.

The numeric portion is limited to four digits. Many carriers follow conventions where direction influences parity (e.g., eastbound/northbound even, westbound/southbound odd) and high number ranges denote regional or codeshare flights, but these conventions are not standardized across the industry. Under codeshare, the same physical flight carries multiple flight numbers: the marketing carrier's flight number shown to the customer and the operating carrier's flight number. A flight number combined with a date and origin/destination identifies a flight segment in a PNR.

**한국어 / Korean** — **편명(항공편 번호)** — 정기 항공편을 식별하는 코드로, 2자리 항공사 지정 코드에 1~4자리 숫자가 결합되어 구성된다(예: AA100, LH9). 특정 항공기가 아니라 노선·날짜상의 마케팅 항공편을 식별한다.

숫자 부분은 최대 4자리로 제한된다. 다수 항공사는 방향에 따라 홀짝을 나누거나(예: 동행/북행은 짝수, 서행/남행은 홀수) 높은 번호 대역을 지역 노선·공동운항편에 배정하는 관례를 따르지만, 이러한 관례가 업계 전반에서 표준화되어 있지는 않다. 공동운항(codeshare)에서는 동일한 실제 운항편이 여러 편명을 갖는다. 고객에게 표시되는 마케팅 항공사 편명과 실제 운항 항공사 편명이 그것이다. 편명에 날짜와 출발지/도착지를 결합하면 PNR 내 항공 구간(segment)을 식별할 수 있다.

**Aliases:** `Flight Designator`, `Flight Identifier`

# Related
- [Airline Designator](/common/codes/airline-designator.md) — related
- [Segment](/air/air-ops/segment.md) — related
- [Codeshare](/air/air-partner/codeshare.md) — related
- [Marketing Carrier](/air/air-partner/marketing-carrier.md) — related
- [Operating Carrier](/air/air-partner/operating-carrier.md) — related

# Distinctions
- **Flight Number** vs [Segment](/air/air-ops/segment.md) — A flight number identifies a scheduled flight; a segment is the booked flight number plus a specific date and origin/destination held in a PNR.
- **Flight Number** vs [Airline Accounting Code](/common/codes/airline-accounting-code.md) — A flight number labels a flight on a route/date; the accounting code is the 3-digit airline identifier on the ticket number and is unrelated to any particular flight.

# Citations
[1] IATA — Standard Schedules Information Manual (SSIM)
[2] [Wikipedia — Flight number](https://en.wikipedia.org/wiki/Flight_number)
