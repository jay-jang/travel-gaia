---
type: Code
title: Frequent Flyer Number
description: 'The unique account identifier assigned to a member of a Frequent Flyer Program, used to accrue and redeem miles and to attach loyalty benefits to a booking. In reservations it is carried in the FQTV SSR together with the issuing program''s airline code.'
tags:
  - customer
  - active
  - IATA
timestamp: '2026-06-15T00:00:00Z'
id: frequent-flyer-number
vertical: common
category: customer
conceptType: code
status: active
abbreviation: FFN
term_ko: 상용 고객 번호 (FFN)
definition_ko: 'FFP 회원에게 부여되는 고유한 계정 식별자로, 마일리지를 적립 및 사용하고 예약에 로열티 혜택을 연결하는 데 사용된다. 예약에서는 발급 프로그램의 항공사 코드와 함께 FQTV SSR에 담겨 전달된다.'
longDef: 'A Frequent Flyer Number identifies a specific member account within a specific program; the same physical person may hold many such numbers across different airlines. When added to a PNR via the FQTV Special Service Request, the system records the program (airline designator) and the membership number so that mileage accrues correctly and tier benefits (priority, baggage, lounge, upgrades) are applied. Because the number is account-specific, it is meaningless without the associated program identifier.'
longDef_ko: 'FFN은 특정 프로그램 내의 특정 회원 계정을 식별하며, 동일한 사람이 서로 다른 항공사에 여러 개의 번호를 보유할 수 있다. FQTV Special Service Request를 통해 PNR에 추가되면 시스템은 프로그램(항공사 식별 코드)과 회원 번호를 기록하여 마일리지가 정확히 적립되고 등급 혜택(우선권, 수하물, 라운지, 업그레이드)이 적용되도록 한다. 번호는 계정 고유값이므로 연관된 프로그램 식별자 없이는 의미가 없다.'
standardBody: IATA
aliases:
  - FFN
  - FQTV Number
  - Loyalty Number
  - Membership Number
  - Frequent Traveler Number
relationships:
  - type: child
    targetTerm: Frequent Flyer Program
  - type: related
    targetTerm: SSR
  - type: related
    targetTerm: Customer Profile
  - type: related
    targetTerm: Loyalty Tier Status
distinctions:
  - targetTerm: Frequent Flyer Program
    explanation: The number is the member's account ID; the program is the scheme that issues and governs that account.
    explanation_ko: '번호는 회원의 계정 ID이고, 프로그램은 그 계정을 발급하고 관리하는 제도이다.'
  - targetTerm: SSR
    explanation: The Frequent Flyer Number is the data value; the FQTV SSR is the message element that carries it into a PNR.
    explanation_ko: 'FFN은 데이터 값이고, FQTV SSR은 그 값을 PNR에 전달하는 메시지 요소이다.'
  - targetTerm: Loyalty Tier Status
    explanation: The number identifies the account; the tier status is the benefit level attached to that account.
    explanation_ko: '번호는 계정을 식별하고, 등급 상태는 그 계정에 부여된 혜택 수준이다.'
sources:
  - name: 'Airline Industry Reservations Interline Message Procedures — Passenger (AIRIMP), FQTV SSR'
    org: IATA
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="13" width="36" height="22" rx="3"/><path d="M6 21h36"/><path d="M13 28h6M24 28h4M32 28h4"/></svg>
---

> The unique account identifier assigned to a member of a Frequent Flyer Program, used to accrue and redeem miles and to attach loyalty benefits to a booking. In reservations it is carried in the FQTV SSR together with the issuing program's airline code.

A Frequent Flyer Number identifies a specific member account within a specific program; the same physical person may hold many such numbers across different airlines. When added to a PNR via the FQTV Special Service Request, the system records the program (airline designator) and the membership number so that mileage accrues correctly and tier benefits (priority, baggage, lounge, upgrades) are applied. Because the number is account-specific, it is meaningless without the associated program identifier.

**한국어 / Korean** — **상용 고객 번호 (FFN)** — FFP 회원에게 부여되는 고유한 계정 식별자로, 마일리지를 적립 및 사용하고 예약에 로열티 혜택을 연결하는 데 사용된다. 예약에서는 발급 프로그램의 항공사 코드와 함께 FQTV SSR에 담겨 전달된다.

FFN은 특정 프로그램 내의 특정 회원 계정을 식별하며, 동일한 사람이 서로 다른 항공사에 여러 개의 번호를 보유할 수 있다. FQTV Special Service Request를 통해 PNR에 추가되면 시스템은 프로그램(항공사 식별 코드)과 회원 번호를 기록하여 마일리지가 정확히 적립되고 등급 혜택(우선권, 수하물, 라운지, 업그레이드)이 적용되도록 한다. 번호는 계정 고유값이므로 연관된 프로그램 식별자 없이는 의미가 없다.

**Aliases:** `FFN`, `FQTV Number`, `Loyalty Number`, `Membership Number`, `Frequent Traveler Number`

# Related
- [Frequent Flyer Program](/common/customer/frequent-flyer-program.md) — child
- [SSR](/air/air-ops/ssr.md) — related
- [Customer Profile](/common/customer/customer-profile.md) — related
- [Loyalty Tier Status](/common/customer/loyalty-tier-status.md) — related

# Distinctions
- **Frequent Flyer Number** vs [Frequent Flyer Program](/common/customer/frequent-flyer-program.md) — The number is the member's account ID; the program is the scheme that issues and governs that account.
- **Frequent Flyer Number** vs [SSR](/air/air-ops/ssr.md) — The Frequent Flyer Number is the data value; the FQTV SSR is the message element that carries it into a PNR.
- **Frequent Flyer Number** vs [Loyalty Tier Status](/common/customer/loyalty-tier-status.md) — The number identifies the account; the tier status is the benefit level attached to that account.

# Citations
[1] IATA — Airline Industry Reservations Interline Message Procedures — Passenger (AIRIMP), FQTV SSR
