---
type: Code
title: Airline Accounting Code
description: 'A three-digit numeric code assigned by IATA to identify an airline in traffic documents and settlement. It forms the first three digits of the 13-digit airline ticket number (e.g., 001 = American Airlines, 006 = Delta, 014 = Air Canada).'
tags:
  - codes
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: airline-accounting-code
vertical: common
category: codes
conceptType: code
status: active
term_ko: 항공사 정산 코드(3자리 숫자 코드)
definition_ko: 'IATA가 항공사를 식별하기 위해 부여하는 3자리 숫자 코드로, 운송 서류와 정산에 사용된다. 13자리 항공권 번호의 앞 세 자리를 구성한다(예: 001 = American Airlines, 006 = Delta, 014 = Air Canada).'
longDef: 'The accounting code applies to passenger operations; a parallel three-digit prefix code applies to cargo. An airline that operates both may hold the same number for both, but each code is applied for separately. The code prefixes the ticket/document number used in BSP and ARC settlement, so it identifies the issuing/validating carrier for reporting, proration, and interline billing. Because it is purely numeric and three digits, it is distinct from the two-character IATA airline designator (e.g., AA) used in flight numbers and reservations.'
longDef_ko: '정산 코드(accounting code)는 여객 운송에 적용되며, 화물에는 별도의 3자리 prefix code가 적용된다. 여객과 화물을 모두 운영하는 항공사는 두 용도에 같은 번호를 보유할 수 있으나, 각 코드는 별도로 신청해야 한다. 이 코드는 BSP·ARC 정산에 사용되는 항공권/서류 번호의 접두부를 이루므로, 보고·프로레이션(proration)·인터라인 정산에서 발권/검증 항공사를 식별한다. 순수하게 숫자 3자리이므로, 편명과 예약에 쓰이는 2자리 IATA 항공사 지정 코드(예: AA)와는 구별된다.'
standardBody: IATA
aliases:
  - Airline Numeric Code
  - Three-Digit Airline Code
  - Airline Prefix Code
  - Ticketing Prefix
  - Airline Code Number
providerTerms:
  - provider: IATA Cargo
    term: Airline prefix code
    context: 'The same 3-digit numeric assigned by IATA, called the ''prefix code'' on the cargo side where it forms the first 3 digits of the AWB number.'
    context_ko: 'IATA가 부여하는 동일한 3자리 숫자로, 화물 측에서는 ''prefix code''라 불리며 AWB 번호의 앞 3자리를 구성한다.'
    relationship: same
relationships:
  - type: contrasts
    targetTerm: Airline Designator
  - type: related
    targetTerm: E-ticket
  - type: related
    targetTerm: BSP
  - type: related
    targetTerm: ARC
  - type: related
    targetTerm: Validating Carrier
distinctions:
  - targetTerm: Airline Designator
    explanation: 'The accounting code is a 3-digit numeric airline identifier used in ticket/document numbers and settlement; the airline designator is the 2-character alphanumeric code (e.g., AA) used in reservations and flight numbers.'
    explanation_ko: '정산 코드는 항공권/서류 번호와 정산에 쓰이는 3자리 숫자 항공사 식별자이고, 항공사 지정 코드는 예약과 편명에 쓰이는 2자리 영숫자 코드(예: AA)이다.'
  - targetTerm: Air Waybill Number
    explanation: 'The 3-digit airline accounting code is the numeric carrier code used in passenger ticket numbers; the AWB 3-digit prefix is the analogous numeric carrier identifier used in cargo, and the two numbering schemes are administered separately though both by IATA.'
    explanation_ko: '3자리 항공사 회계 코드는 여객 항공권 번호에 쓰이는 숫자 항공사 코드이고, AWB 3자리 prefix는 화물에서 쓰이는 유사한 숫자 항공사 식별자다. 두 체계 모두 IATA가 관리하지만 별개로 운영된다.'
  - targetTerm: Flight Number
    explanation: A flight number labels a flight on a route/date; the accounting code is the 3-digit airline identifier on the ticket number and is unrelated to any particular flight.
    explanation_ko: '편명은 노선·날짜상의 항공편을 가리키고, 정산 코드는 항공권 번호상의 3자리 항공사 식별자로 특정 항공편과 무관하다.'
  - targetTerm: Ticket Number
    explanation: The accounting code is only the first 3 digits identifying the airline; the ticket number is the full 13-digit document number that contains it.
    explanation_ko: '정산 코드는 항공사를 식별하는 앞 3자리에 불과하고, 항공권 번호는 그것을 포함하는 13자리 전체 서류 번호이다.'
sources:
  - org: IATA
    name: Airline Coding Directory
    version: ''
    section: ''
    url: 'https://www.iata.org/en/store/publications/manuals-standards-and-regulations/airline-coding-directory-acd__acd/'
    tier: association
  - org: AltexSoft
    name: IATA Numbers and Codes Explained
    version: ''
    section: ''
    url: 'https://www.altexsoft.com/blog/iata-numbers-codes/'
    tier: secondary
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="16" width="34" height="16" rx="3"/><path d="M14 22v4M14 22h2M14 26h2M14 24h2"/><path d="M22 22v4M26 22v4M22 22h4M22 24h4"/><path d="M31 22v4M35 22v4M31 22h4"/></svg>
---

> A three-digit numeric code assigned by IATA to identify an airline in traffic documents and settlement. It forms the first three digits of the 13-digit airline ticket number (e.g., 001 = American Airlines, 006 = Delta, 014 = Air Canada).

The accounting code applies to passenger operations; a parallel three-digit prefix code applies to cargo. An airline that operates both may hold the same number for both, but each code is applied for separately. The code prefixes the ticket/document number used in BSP and ARC settlement, so it identifies the issuing/validating carrier for reporting, proration, and interline billing. Because it is purely numeric and three digits, it is distinct from the two-character IATA airline designator (e.g., AA) used in flight numbers and reservations.

**한국어 / Korean** — **항공사 정산 코드(3자리 숫자 코드)** — IATA가 항공사를 식별하기 위해 부여하는 3자리 숫자 코드로, 운송 서류와 정산에 사용된다. 13자리 항공권 번호의 앞 세 자리를 구성한다(예: 001 = American Airlines, 006 = Delta, 014 = Air Canada).

정산 코드(accounting code)는 여객 운송에 적용되며, 화물에는 별도의 3자리 prefix code가 적용된다. 여객과 화물을 모두 운영하는 항공사는 두 용도에 같은 번호를 보유할 수 있으나, 각 코드는 별도로 신청해야 한다. 이 코드는 BSP·ARC 정산에 사용되는 항공권/서류 번호의 접두부를 이루므로, 보고·프로레이션(proration)·인터라인 정산에서 발권/검증 항공사를 식별한다. 순수하게 숫자 3자리이므로, 편명과 예약에 쓰이는 2자리 IATA 항공사 지정 코드(예: AA)와는 구별된다.

**Aliases:** `Airline Numeric Code`, `Three-Digit Airline Code`, `Airline Prefix Code`, `Ticketing Prefix`, `Airline Code Number`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| IATA Cargo | `Airline prefix code` | same | The same 3-digit numeric assigned by IATA, called the 'prefix code' on the cargo side where it forms the first 3 digits of the AWB number. |

# Related
- [Airline Designator](/common/codes/airline-designator.md) — contrasts
- [E-ticket](/air/air-ticket/e-ticket.md) — related
- [BSP](/common/pay/bsp.md) — related
- [ARC](/common/pay/arc.md) — related
- [Validating Carrier](/air/air-ticket/validating-carrier.md) — related

# Distinctions
- **Airline Accounting Code** vs [Airline Designator](/common/codes/airline-designator.md) — The accounting code is a 3-digit numeric airline identifier used in ticket/document numbers and settlement; the airline designator is the 2-character alphanumeric code (e.g., AA) used in reservations and flight numbers.
- **Airline Accounting Code** vs [Air Waybill Number](/common/codes/air-waybill-number.md) — The 3-digit airline accounting code is the numeric carrier code used in passenger ticket numbers; the AWB 3-digit prefix is the analogous numeric carrier identifier used in cargo, and the two numbering schemes are administered separately though both by IATA.
- **Airline Accounting Code** vs [Flight Number](/common/codes/flight-number.md) — A flight number labels a flight on a route/date; the accounting code is the 3-digit airline identifier on the ticket number and is unrelated to any particular flight.
- **Airline Accounting Code** vs [Ticket Number](/common/codes/ticket-number.md) — The accounting code is only the first 3 digits identifying the airline; the ticket number is the full 13-digit document number that contains it.

# Citations
[1] [IATA — Airline Coding Directory](https://www.iata.org/en/store/publications/manuals-standards-and-regulations/airline-coding-directory-acd__acd/)
[2] [AltexSoft — IATA Numbers and Codes Explained](https://www.altexsoft.com/blog/iata-numbers-codes/)
