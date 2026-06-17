---
type: Code
title: Air Waybill Number
description: 'The air-cargo equivalent of a ticket number: an 11-digit identifier in which the first 3 digits (the prefix, assigned by IATA) identify the carrier and the remaining 8 digits form a serial that uniquely tracks the consignment. The serial''s final digit is a modulo-7 check digit. It is the central reference for air freight distribution, tracking and billing.'
tags:
  - codes
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: air-waybill-number
category: codes
conceptType: code
status: active
abbreviation: AWB
term_ko: 항공화물운송장 번호 (Air Waybill Number)
definition_ko: '여객 항공권 번호에 해당하는 항공화물의 식별자로, 11자리 번호이며 앞 3자리(IATA가 배정하는 prefix)는 운송 항공사를 식별하고 나머지 8자리는 해당 화물(consignment)을 고유하게 추적하는 일련번호다. 일련번호의 마지막 자리는 modulo-7 검증 숫자(check digit)다. 항공화물의 유통·추적·정산의 중심 참조번호 역할을 한다.'
longDef: 'An AWB number is typically written as prefix-serial (for example 176-12345675). The 3-digit prefix is the IATA-assigned numeric airline prefix tied to the issuing/operating carrier; the 8-digit serial consists of a 7-digit running number plus a single check digit equal to the running number modulo 7. A Master Air Waybill (MAWB) covers the consignment between carriers, while House Air Waybills (HAWB) issued by freight forwarders sit beneath it for individual shippers. The number drives e-freight / e-AWB electronic messaging, customs filing, status milestones and revenue accounting across the air-cargo supply chain.'
longDef_ko: 'AWB 번호는 보통 prefix-serial 형식으로 표기된다(예: 176-12345675). 앞 3자리 prefix는 발행/운송 항공사에 연결된 IATA 배정 숫자 prefix이며, 8자리 일련번호는 7자리 순차번호와 그 순차번호를 7로 나눈 나머지(modulo 7)인 1자리 check digit으로 구성된다. Master Air Waybill(MAWB)은 항공사 간 화물 전체를 포괄하고, 포워더가 발행하는 House Air Waybill(HAWB)이 그 아래에서 개별 화주를 담당한다. 이 번호는 항공화물 공급망 전반의 e-freight / e-AWB 전자 메시징, 세관 신고, 상태 마일스톤, 수익 회계의 기준이 된다.'
standardBody: IATA
aliases:
  - AWB Number
  - Air Waybill Reference
  - Master Air Waybill Number
relationships:
  - type: contrasts
    targetTerm: Ticket Number
  - type: related
    targetTerm: Airline Accounting Code
  - type: related
    targetTerm: EDIFACT
distinctions:
  - targetTerm: Ticket Number
    explanation: 'A ticket number identifies a passenger document and embeds the 3-digit airline accounting (numeric) code; an AWB number identifies a cargo consignment and embeds the 3-digit IATA airline prefix, with a modulo-7 check digit on the serial.'
    explanation_ko: 'Ticket Number는 여객 발권 문서를 식별하며 3자리 항공사 회계(숫자) 코드를 포함하는 반면, AWB 번호는 화물 consignment를 식별하며 3자리 IATA 항공사 prefix를 포함하고 일련번호에 modulo-7 check digit을 둔다.'
  - targetTerm: Airline Accounting Code
    explanation: 'The 3-digit airline accounting code is the numeric carrier code used in passenger ticket numbers; the AWB 3-digit prefix is the analogous numeric carrier identifier used in cargo, and the two numbering schemes are administered separately though both by IATA.'
    explanation_ko: '3자리 항공사 회계 코드는 여객 항공권 번호에 쓰이는 숫자 항공사 코드이고, AWB 3자리 prefix는 화물에서 쓰이는 유사한 숫자 항공사 식별자다. 두 체계 모두 IATA가 관리하지만 별개로 운영된다.'
sources:
  - org: IATA
    name: e-freight / e-AWB
    version: ''
    section: ''
    url: 'https://www.iata.org/en/programs/cargo/e/'
  - org: Wikipedia
    name: Air waybill
    version: ''
    section: ''
    url: 'https://en.wikipedia.org/wiki/Air_waybill'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="8" width="28" height="32" rx="2"/><path d="M16 16h16M16 22h16M16 28h10"/><path d="M30 34l4 4 8-8"/></svg>
---

> The air-cargo equivalent of a ticket number: an 11-digit identifier in which the first 3 digits (the prefix, assigned by IATA) identify the carrier and the remaining 8 digits form a serial that uniquely tracks the consignment. The serial's final digit is a modulo-7 check digit. It is the central reference for air freight distribution, tracking and billing.

An AWB number is typically written as prefix-serial (for example 176-12345675). The 3-digit prefix is the IATA-assigned numeric airline prefix tied to the issuing/operating carrier; the 8-digit serial consists of a 7-digit running number plus a single check digit equal to the running number modulo 7. A Master Air Waybill (MAWB) covers the consignment between carriers, while House Air Waybills (HAWB) issued by freight forwarders sit beneath it for individual shippers. The number drives e-freight / e-AWB electronic messaging, customs filing, status milestones and revenue accounting across the air-cargo supply chain.

**한국어 / Korean** — **항공화물운송장 번호 (Air Waybill Number)** — 여객 항공권 번호에 해당하는 항공화물의 식별자로, 11자리 번호이며 앞 3자리(IATA가 배정하는 prefix)는 운송 항공사를 식별하고 나머지 8자리는 해당 화물(consignment)을 고유하게 추적하는 일련번호다. 일련번호의 마지막 자리는 modulo-7 검증 숫자(check digit)다. 항공화물의 유통·추적·정산의 중심 참조번호 역할을 한다.

AWB 번호는 보통 prefix-serial 형식으로 표기된다(예: 176-12345675). 앞 3자리 prefix는 발행/운송 항공사에 연결된 IATA 배정 숫자 prefix이며, 8자리 일련번호는 7자리 순차번호와 그 순차번호를 7로 나눈 나머지(modulo 7)인 1자리 check digit으로 구성된다. Master Air Waybill(MAWB)은 항공사 간 화물 전체를 포괄하고, 포워더가 발행하는 House Air Waybill(HAWB)이 그 아래에서 개별 화주를 담당한다. 이 번호는 항공화물 공급망 전반의 e-freight / e-AWB 전자 메시징, 세관 신고, 상태 마일스톤, 수익 회계의 기준이 된다.

**Aliases:** `AWB Number`, `Air Waybill Reference`, `Master Air Waybill Number`

# Related
- [Ticket Number](/codes/ticket-number.md) — contrasts
- [Airline Accounting Code](/codes/airline-accounting-code.md) — related
- [EDIFACT](/standards/edifact.md) — related

# Distinctions
- **Air Waybill Number** vs [Ticket Number](/codes/ticket-number.md) — A ticket number identifies a passenger document and embeds the 3-digit airline accounting (numeric) code; an AWB number identifies a cargo consignment and embeds the 3-digit IATA airline prefix, with a modulo-7 check digit on the serial.
- **Air Waybill Number** vs [Airline Accounting Code](/codes/airline-accounting-code.md) — The 3-digit airline accounting code is the numeric carrier code used in passenger ticket numbers; the AWB 3-digit prefix is the analogous numeric carrier identifier used in cargo, and the two numbering schemes are administered separately though both by IATA.

# Citations
[1] [IATA — e-freight / e-AWB](https://www.iata.org/en/programs/cargo/e/)
[2] [Wikipedia — Air waybill](https://en.wikipedia.org/wiki/Air_waybill)
