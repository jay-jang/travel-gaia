---
type: Standard Term
title: Type B Message
description: 'A Type B message is the airline industry''s teletype (TTY) message format, carried over the SITA and ARINC networks, used to exchange structured operational and reservation data between airline, airport, reservation and departure-control systems. Originating in the 1960s from teletype technology, it remains the transport layer for a large share of passenger-handling traffic, including messages such as PNL/ADL.'
tags:
  - air-ops
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: type-b-message
vertical: air
category: air-ops
conceptType: standard-term
status: active
abbreviation: Type B
term_ko: Type B 메시지(텔레타이프 메시지)
definition_ko: 'Type B 메시지는 SITA 및 ARINC 네트워크를 통해 운반되는 항공업계의 텔레타이프(TTY) 메시지 형식으로, 항공사·공항·예약·출발 통제(DCS) 시스템 간에 정형화된 운영·예약 데이터를 교환하는 데 사용된다. 1960년대 텔레타이프 기술에서 비롯되었으며, PNL/ADL 같은 메시지를 포함해 여객 처리 트래픽의 상당 부분을 운반하는 전송 계층으로 여전히 쓰인다.'
longDef: 'Type B is a store-and-forward messaging format with a defined address/header structure, message identifiers and a constrained line/character layout (traditionally limited line widths). Data-transfer activity related to passenger handling accounts for roughly 90% of Type B usage, covering reservation, departure-control and airport applications such as passenger lists (PNL/ADL), schedule messages (SSM/ASM), and government reporting flows (API/PNRGOV) where applicable. Although newer XML and IP-based alternatives (e.g. Type X) exist, Type B remains widely deployed because of its ubiquity and interoperability; carriers exchange it through providers such as SITA (SITATEX) and ARINC.'
longDef_ko: 'Type B는 정의된 주소/헤더 구조, 메시지 식별자, 제한된 행/문자 레이아웃(전통적으로 제한된 행 길이)을 갖는 store-and-forward 메시징 형식이다. 여객 처리 관련 데이터 전송이 Type B 사용의 약 90%를 차지하며, 승객 명단(PNL/ADL), 스케줄 메시지(SSM/ASM), 해당되는 경우 정부 보고 흐름(API/PNRGOV) 등 예약·출발 통제·공항 애플리케이션을 포괄한다. 더 새로운 XML 및 IP 기반 대안(예: Type X)이 존재하지만, 보편성과 상호운용성 덕분에 Type B는 여전히 널리 사용되며, 항공사는 SITA(SITATEX)와 ARINC 같은 제공자를 통해 이를 교환한다.'
standardBody: IATA
aliases:
  - Type B
  - TTY Message
  - Teletype Message
  - Type B Messaging
providerTerms:
  - provider: SITA
    term: SITATEX / Type B
    context: SITA carries Type B (and Type X) messages between airline and airport systems over its network
    context_ko: SITA는 자사 네트워크를 통해 항공사·공항 시스템 간에 Type B(및 Type X) 메시지를 운반한다
    relationship: related
relationships:
  - type: related
    targetTerm: AIRIMP
  - type: related
    targetTerm: Passenger Name List / Additions and Deletions List (PNL/ADL)
  - type: related
    targetTerm: Departure Control System (DCS)
  - type: related
    targetTerm: Schedule Change
  - type: related
    targetTerm: Secure Flight
distinctions:
  - targetTerm: EDIFACT
    explanation: 'Type B is the legacy teletype transport format with a constrained free-text line layout; EDIFACT is a structured, segment-based interchange syntax used by IATA PADIS for messages such as PNRGOV and electronic ticketing.'
    explanation_ko: 'Type B는 제한된 자유 텍스트 행 레이아웃을 가진 레거시 텔레타이프 전송 형식이고, EDIFACT는 PNRGOV·전자 발권 등에 IATA PADIS가 사용하는 정형 segment 기반 교환 구문이다.'
  - targetTerm: AIRIMP
    explanation: 'Type B is the physical message format/transport, while AIRIMP is the procedural standard that specifies what a given reservation message must contain and when it may be sent.'
    explanation_ko: 'Type B는 물리적 메시지 형식/전송 수단이고, AIRIMP은 특정 예약 메시지가 무엇을 담아야 하며 언제 전송될 수 있는지를 규정하는 절차 표준이다.'
sources:
  - org: IATA
    name: Type B Messaging Whitepaper
    version: v2.1 (14 June 2024)
    section: ''
    url: 'https://www.iata.org/contentassets/badbfd2d36a74f12b021c9dd899ecbad/type_b_messaging_whitepaper_v2dot1_14_june_2024.pdf'
  - org: SITA
    name: SITATEX / Type B and Type X messaging services
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="16" width="36" height="22" rx="2"/><path d="M12 16 V11 a3 3 0 0 1 3 -3 h18 a3 3 0 0 1 3 3 V16"/><line x1="12" y1="24" x2="30" y2="24"/><line x1="12" y1="30" x2="24" y2="30"/><circle cx="35" cy="28" r="1" fill="currentColor"/></svg>
---

> A Type B message is the airline industry's teletype (TTY) message format, carried over the SITA and ARINC networks, used to exchange structured operational and reservation data between airline, airport, reservation and departure-control systems. Originating in the 1960s from teletype technology, it remains the transport layer for a large share of passenger-handling traffic, including messages such as PNL/ADL.

Type B is a store-and-forward messaging format with a defined address/header structure, message identifiers and a constrained line/character layout (traditionally limited line widths). Data-transfer activity related to passenger handling accounts for roughly 90% of Type B usage, covering reservation, departure-control and airport applications such as passenger lists (PNL/ADL), schedule messages (SSM/ASM), and government reporting flows (API/PNRGOV) where applicable. Although newer XML and IP-based alternatives (e.g. Type X) exist, Type B remains widely deployed because of its ubiquity and interoperability; carriers exchange it through providers such as SITA (SITATEX) and ARINC.

**한국어 / Korean** — **Type B 메시지(텔레타이프 메시지)** — Type B 메시지는 SITA 및 ARINC 네트워크를 통해 운반되는 항공업계의 텔레타이프(TTY) 메시지 형식으로, 항공사·공항·예약·출발 통제(DCS) 시스템 간에 정형화된 운영·예약 데이터를 교환하는 데 사용된다. 1960년대 텔레타이프 기술에서 비롯되었으며, PNL/ADL 같은 메시지를 포함해 여객 처리 트래픽의 상당 부분을 운반하는 전송 계층으로 여전히 쓰인다.

Type B는 정의된 주소/헤더 구조, 메시지 식별자, 제한된 행/문자 레이아웃(전통적으로 제한된 행 길이)을 갖는 store-and-forward 메시징 형식이다. 여객 처리 관련 데이터 전송이 Type B 사용의 약 90%를 차지하며, 승객 명단(PNL/ADL), 스케줄 메시지(SSM/ASM), 해당되는 경우 정부 보고 흐름(API/PNRGOV) 등 예약·출발 통제·공항 애플리케이션을 포괄한다. 더 새로운 XML 및 IP 기반 대안(예: Type X)이 존재하지만, 보편성과 상호운용성 덕분에 Type B는 여전히 널리 사용되며, 항공사는 SITA(SITATEX)와 ARINC 같은 제공자를 통해 이를 교환한다.

**Aliases:** `Type B`, `TTY Message`, `Teletype Message`, `Type B Messaging`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| SITA | `SITATEX / Type B` | related | SITA carries Type B (and Type X) messages between airline and airport systems over its network |

# Related
- [AIRIMP](/air/air-ops/airimp.md) — related
- [Passenger Name List / Additions and Deletions List (PNL/ADL)](/air/air-ops/pnl-adl.md) — related
- [Departure Control System (DCS)](/air/air-ops/departure-control-system-dcs.md) — related
- [Schedule Change](/air/air-partner/schedule-change.md) — related
- [Secure Flight](/common/customer/secure-flight.md) — related

# Distinctions
- **Type B Message** vs [EDIFACT](/common/standards/edifact.md) — Type B is the legacy teletype transport format with a constrained free-text line layout; EDIFACT is a structured, segment-based interchange syntax used by IATA PADIS for messages such as PNRGOV and electronic ticketing.
- **Type B Message** vs [AIRIMP](/air/air-ops/airimp.md) — Type B is the physical message format/transport, while AIRIMP is the procedural standard that specifies what a given reservation message must contain and when it may be sent.

# Citations
[1] [IATA — Type B Messaging Whitepaper — v2.1 (14 June 2024)](https://www.iata.org/contentassets/badbfd2d36a74f12b021c9dd899ecbad/type_b_messaging_whitepaper_v2dot1_14_june_2024.pdf)
[2] SITA — SITATEX / Type B and Type X messaging services
