---
type: Code
title: SITA Teletype Address
description: 'A 7-character addressing scheme used to route IATA Type B teletype (and EDIFACT) messages between airline and airport systems. It is formed of a 3-letter IATA location code, a 2-letter department/function indicator and a 2-character airline designator (for example JFKRMBA), giving each operational mailbox a unique address on the SITA messaging network.'
tags:
  - codes
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: sita-teletype-address
vertical: common
category: codes
conceptType: code
status: active
term_ko: SITA 텔레타이프 주소 (SITA Teletype Address)
definition_ko: '항공사와 공항 시스템 사이에서 IATA Type B 텔레타이프(및 EDIFACT) 메시지를 라우팅하는 데 사용되는 7자리 주소 체계다. 3자리 IATA 위치 코드, 2자리 부서/기능 지시자, 2자리 항공사 지정 코드(예: JFKRMBA)로 구성되어, SITA 메시징 네트워크 상의 각 운영용 메일박스에 고유 주소를 부여한다.'
longDef: 'The address structure is AAABBCC: AAA is the 3-letter IATA city/airport code identifying the location, BB is a function/department code (such as RM for reservations or KK for departure control), and CC is the 2-character IATA airline designator. The scheme is the addressing layer of IATA Type B messaging and is most commonly carried over the SITA network (and historically ARINC); it is distinct from the 8-character AFTN aeronautical address used for air-traffic-service messages. These addresses underpin operational messages such as PNR, ticketing, baggage and movement (MVT) traffic exchanged between carriers and ground systems.'
longDef_ko: '주소 구조는 AAABBCC다. AAA는 위치를 식별하는 3자리 IATA 도시/공항 코드, BB는 기능/부서 코드(예: 예약은 RM, 출발 통제는 KK 등), CC는 2자리 IATA 항공사 지정 코드다. 이 체계는 IATA Type B 메시징의 주소 계층으로, 주로 SITA 네트워크(역사적으로는 ARINC 포함)를 통해 전송되며, 항공교통업무 메시지에 쓰이는 8자리 AFTN 항공 주소와는 구별된다. 이 주소는 항공사와 지상 시스템 사이에 오가는 PNR, 발권, 수하물, 운항(MVT) 등 운영 메시지의 기반이 된다.'
standardBody: IATA
aliases:
  - IATA Teletype Address
  - Type B Address
  - SITA Address
  - 7-character teletype address
providerTerms:
  - provider: SITA
    term: SITA Type B Messaging
    context: SITA operates the global network that most commonly transports IATA Type B messages addressed with these 7-character codes.
    context_ko: SITA는 이 7자리 주소로 지정된 IATA Type B 메시지를 가장 흔히 전송하는 글로벌 네트워크를 운영한다.
    relationship: related
relationships:
  - type: related
    targetTerm: EDIFACT
  - type: related
    targetTerm: Airport Code
  - type: related
    targetTerm: Airline Designator
  - type: related
    targetTerm: PNR
distinctions:
  - targetTerm: Airport Code
    explanation: An airport code is just the 3-letter location component; a SITA teletype address embeds that code as its first three characters but adds a 2-letter department and a 2-character airline designator to form a complete 7-character routing address.
    explanation_ko: '공항 코드는 3자리 위치 요소일 뿐이지만, SITA 텔레타이프 주소는 그 코드를 앞 3자리로 포함하면서 2자리 부서 코드와 2자리 항공사 지정 코드를 더해 완전한 7자리 라우팅 주소를 만든다.'
  - targetTerm: EDIFACT
    explanation: 'EDIFACT (Type A) is a structured message syntax for transactional messaging; the SITA teletype address is the routing/addressing layer for Type B free-format teletype traffic, though the same 7-character addresses are also used to carry EDIFACT over Type B.'
    explanation_ko: 'EDIFACT(Type A)는 거래성 메시징을 위한 구조화된 메시지 구문인 반면, SITA 텔레타이프 주소는 Type B 자유형식 텔레타이프 트래픽의 라우팅/주소 계층이다. 다만 동일한 7자리 주소가 Type B를 통해 EDIFACT를 전송하는 데에도 사용된다.'
sources:
  - org: Wikipedia
    name: Airline teletype system
    version: ''
    section: ''
    url: 'https://en.wikipedia.org/wiki/Airline_teletype_system'
  - org: SITA
    name: Type B Messaging
    version: ''
    section: ''
    url: 'https://www.sita.aero/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="14" width="36" height="22" rx="2"/><path d="M6 18l18 11 18-11"/><path d="M14 40h20"/><path d="M24 36v4"/></svg>
---

> A 7-character addressing scheme used to route IATA Type B teletype (and EDIFACT) messages between airline and airport systems. It is formed of a 3-letter IATA location code, a 2-letter department/function indicator and a 2-character airline designator (for example JFKRMBA), giving each operational mailbox a unique address on the SITA messaging network.

The address structure is AAABBCC: AAA is the 3-letter IATA city/airport code identifying the location, BB is a function/department code (such as RM for reservations or KK for departure control), and CC is the 2-character IATA airline designator. The scheme is the addressing layer of IATA Type B messaging and is most commonly carried over the SITA network (and historically ARINC); it is distinct from the 8-character AFTN aeronautical address used for air-traffic-service messages. These addresses underpin operational messages such as PNR, ticketing, baggage and movement (MVT) traffic exchanged between carriers and ground systems.

**한국어 / Korean** — **SITA 텔레타이프 주소 (SITA Teletype Address)** — 항공사와 공항 시스템 사이에서 IATA Type B 텔레타이프(및 EDIFACT) 메시지를 라우팅하는 데 사용되는 7자리 주소 체계다. 3자리 IATA 위치 코드, 2자리 부서/기능 지시자, 2자리 항공사 지정 코드(예: JFKRMBA)로 구성되어, SITA 메시징 네트워크 상의 각 운영용 메일박스에 고유 주소를 부여한다.

주소 구조는 AAABBCC다. AAA는 위치를 식별하는 3자리 IATA 도시/공항 코드, BB는 기능/부서 코드(예: 예약은 RM, 출발 통제는 KK 등), CC는 2자리 IATA 항공사 지정 코드다. 이 체계는 IATA Type B 메시징의 주소 계층으로, 주로 SITA 네트워크(역사적으로는 ARINC 포함)를 통해 전송되며, 항공교통업무 메시지에 쓰이는 8자리 AFTN 항공 주소와는 구별된다. 이 주소는 항공사와 지상 시스템 사이에 오가는 PNR, 발권, 수하물, 운항(MVT) 등 운영 메시지의 기반이 된다.

**Aliases:** `IATA Teletype Address`, `Type B Address`, `SITA Address`, `7-character teletype address`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| SITA | `SITA Type B Messaging` | related | SITA operates the global network that most commonly transports IATA Type B messages addressed with these 7-character codes. |

# Related
- [EDIFACT](/common/standards/edifact.md) — related
- [Airport Code](/common/codes/airport-code.md) — related
- [Airline Designator](/common/codes/airline-designator.md) — related
- [PNR](/air/air-ops/pnr.md) — related

# Distinctions
- **SITA Teletype Address** vs [Airport Code](/common/codes/airport-code.md) — An airport code is just the 3-letter location component; a SITA teletype address embeds that code as its first three characters but adds a 2-letter department and a 2-character airline designator to form a complete 7-character routing address.
- **SITA Teletype Address** vs [EDIFACT](/common/standards/edifact.md) — EDIFACT (Type A) is a structured message syntax for transactional messaging; the SITA teletype address is the routing/addressing layer for Type B free-format teletype traffic, though the same 7-character addresses are also used to carry EDIFACT over Type B.

# Citations
[1] [Wikipedia — Airline teletype system](https://en.wikipedia.org/wiki/Airline_teletype_system)
[2] [SITA — Type B Messaging](https://www.sita.aero/)
