---
type: Standard
title: AIRIMP
description: 'AIRIMP (Airline Industry Reservations Interline Message Procedures) is the multilateral industry standard, published by IATA together with Airlines for America (A4A), that defines the formats and procedural rules for passenger reservation interline messages exchanged between airline, GDS and CRS systems. It is the agreed reference governing how PNR data, SSR, OSI, availability and sell/reply messages are structured and transmitted between reservation systems.'
tags:
  - air-ops
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: airimp
vertical: air
category: air-ops
conceptType: standard
status: active
abbreviation: AIRIMP
term_ko: 예약 interline 메시지 절차 표준(AIRIMP)
definition_ko: 'AIRIMP(Airline Industry Reservations Interline Message Procedures)은 IATA가 Airlines for America(A4A)와 함께 발행하는 다자간 업계 표준으로, 항공사·GDS·CRS 시스템 사이에서 교환되는 여객 예약 interline 메시지의 형식과 절차 규칙을 정의한다. PNR 데이터, SSR, OSI, 좌석 가용성, sell/reply 메시지가 예약 시스템 간에 어떻게 구조화되고 전송되는지를 규율하는 합의된 기준 문서다.'
longDef: 'AIRIMP is maintained through IATA''s Passenger Services Conference and is the sole agreed reference source for interline passenger reservation messaging, used across millions of daily transactions between travel agency, airline and airline-to-airline systems. It standardizes the teletype-style message identifiers, mandatory and optional data items, action and advice (status) codes, and the circumstances under which each reservation message type may be sent. Because it defines the common grammar of interline reservations, AIRIMP is effectively the rulebook behind PNR, SSR and OSI exchange; it is published in successive editions (the 50th Edition is dated 2026) and complements the Reservations Handbook and PADIS message standards.'
longDef_ko: 'AIRIMP은 IATA의 Passenger Services Conference를 통해 유지되며, 여행사·항공사 시스템 및 항공사 간 시스템에서 매일 수백만 건의 거래에 사용되는, interline 여객 예약 메시징의 유일한 합의 기준 문서다. 텔레타이프 형식의 메시지 식별자, 필수·선택 데이터 항목, action 및 advice(status) 코드, 그리고 각 예약 메시지 유형을 전송할 수 있는 상황을 표준화한다. interline 예약의 공통 문법을 정의하기에 AIRIMP은 사실상 PNR, SSR, OSI 교환의 규칙서이며, 판(edition)을 거듭하여 발행된다(50th Edition은 2026년판). Reservations Handbook 및 PADIS 메시지 표준을 보완한다.'
standardBody: IATA
aliases:
  - ATA/IATA Reservations Interline Message Procedures
  - A4A/IATA Reservations Interline Message Procedures
  - Airline Industry Reservations Interline Message Procedures
  - Reservations Interline Message Procedures - Passenger
relationships:
  - type: related
    targetTerm: PNR
  - type: related
    targetTerm: SSR
  - type: related
    targetTerm: OSI
  - type: related
    targetTerm: Type B Message
  - type: related
    targetTerm: Interline
  - type: related
    targetTerm: EDIFACT
distinctions:
  - targetTerm: Type B Message
    explanation: 'AIRIMP defines the procedural rules and content/format of interline reservation messages, whereas Type B is the underlying teletype transport format that physically carries many of those messages over the SITA/ARINC networks.'
    explanation_ko: 'AIRIMP은 interline 예약 메시지의 절차 규칙과 내용/형식을 정의하는 반면, Type B는 그 메시지 상당수를 SITA/ARINC 네트워크 위로 실제 운반하는 기저 텔레타이프 전송 형식이다.'
  - targetTerm: EDIFACT
    explanation: AIRIMP is the reservations-specific procedural standard for interline messaging; EDIFACT is a general UN syntax for electronic data interchange used (via IATA PADIS) for many message types beyond reservations.
    explanation_ko: 'AIRIMP은 interline 메시징에 특화된 예약 절차 표준이고, EDIFACT는 (IATA PADIS를 통해) 예약 외 다양한 메시지 유형에도 쓰이는 전자 데이터 교환용 범용 UN 구문 체계다.'
sources:
  - org: IATA
    name: Airline Industry Reservations Interline Message Procedures - Passenger (AIRIMP)
    version: 50th Edition (2026)
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/airline-industry-reservations-interline-message-procedures-airimp/'
  - org: IATA
    name: AIRIMP Table of Contents
    version: ''
    section: ''
    url: 'https://www.iata.org/contentassets/c3c225d5a07249fd8f1447669ce27cdb/airimp-table-of-contents.pdf'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="7" width="32" height="34" rx="3"/><line x1="14" y1="15" x2="34" y2="15"/><line x1="14" y1="22" x2="34" y2="22"/><line x1="14" y1="29" x2="28" y2="29"/><path d="M30 33 33 36 38 30"/></svg>
---

> AIRIMP (Airline Industry Reservations Interline Message Procedures) is the multilateral industry standard, published by IATA together with Airlines for America (A4A), that defines the formats and procedural rules for passenger reservation interline messages exchanged between airline, GDS and CRS systems. It is the agreed reference governing how PNR data, SSR, OSI, availability and sell/reply messages are structured and transmitted between reservation systems.

AIRIMP is maintained through IATA's Passenger Services Conference and is the sole agreed reference source for interline passenger reservation messaging, used across millions of daily transactions between travel agency, airline and airline-to-airline systems. It standardizes the teletype-style message identifiers, mandatory and optional data items, action and advice (status) codes, and the circumstances under which each reservation message type may be sent. Because it defines the common grammar of interline reservations, AIRIMP is effectively the rulebook behind PNR, SSR and OSI exchange; it is published in successive editions (the 50th Edition is dated 2026) and complements the Reservations Handbook and PADIS message standards.

**한국어 / Korean** — **예약 interline 메시지 절차 표준(AIRIMP)** — AIRIMP(Airline Industry Reservations Interline Message Procedures)은 IATA가 Airlines for America(A4A)와 함께 발행하는 다자간 업계 표준으로, 항공사·GDS·CRS 시스템 사이에서 교환되는 여객 예약 interline 메시지의 형식과 절차 규칙을 정의한다. PNR 데이터, SSR, OSI, 좌석 가용성, sell/reply 메시지가 예약 시스템 간에 어떻게 구조화되고 전송되는지를 규율하는 합의된 기준 문서다.

AIRIMP은 IATA의 Passenger Services Conference를 통해 유지되며, 여행사·항공사 시스템 및 항공사 간 시스템에서 매일 수백만 건의 거래에 사용되는, interline 여객 예약 메시징의 유일한 합의 기준 문서다. 텔레타이프 형식의 메시지 식별자, 필수·선택 데이터 항목, action 및 advice(status) 코드, 그리고 각 예약 메시지 유형을 전송할 수 있는 상황을 표준화한다. interline 예약의 공통 문법을 정의하기에 AIRIMP은 사실상 PNR, SSR, OSI 교환의 규칙서이며, 판(edition)을 거듭하여 발행된다(50th Edition은 2026년판). Reservations Handbook 및 PADIS 메시지 표준을 보완한다.

**Aliases:** `ATA/IATA Reservations Interline Message Procedures`, `A4A/IATA Reservations Interline Message Procedures`, `Airline Industry Reservations Interline Message Procedures`, `Reservations Interline Message Procedures - Passenger`

# Related
- [PNR](/air/air-ops/pnr.md) — related
- [SSR](/air/air-ops/ssr.md) — related
- [OSI](/air/air-ops/osi.md) — related
- [Type B Message](/air/air-ops/type-b-message.md) — related
- [Interline](/air/air-partner/interline.md) — related
- [EDIFACT](/common/standards/edifact.md) — related

# Distinctions
- **AIRIMP** vs [Type B Message](/air/air-ops/type-b-message.md) — AIRIMP defines the procedural rules and content/format of interline reservation messages, whereas Type B is the underlying teletype transport format that physically carries many of those messages over the SITA/ARINC networks.
- **AIRIMP** vs [EDIFACT](/common/standards/edifact.md) — AIRIMP is the reservations-specific procedural standard for interline messaging; EDIFACT is a general UN syntax for electronic data interchange used (via IATA PADIS) for many message types beyond reservations.

# Citations
[1] [IATA — Airline Industry Reservations Interline Message Procedures - Passenger (AIRIMP) — 50th Edition (2026)](https://www.iata.org/en/publications/manuals/airline-industry-reservations-interline-message-procedures-airimp/)
[2] [IATA — AIRIMP Table of Contents](https://www.iata.org/contentassets/c3c225d5a07249fd8f1447669ce27cdb/airimp-table-of-contents.pdf)
