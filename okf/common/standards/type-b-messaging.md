---
type: Standard
title: Type B Messaging
description: 'Type B Messaging is the legacy store-and-forward teletype (TTY) message format used by airlines and the wider air-travel industry to exchange booking, reservations, and operational messages over private SITA and ARINC networks (and AFTN). Dating to the early 1960s, it remains a baseline transport that newer XML/REST distribution is gradually replacing.'
tags:
  - standards
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: type-b-messaging
vertical: common
category: standards
conceptType: standard
status: active
term_ko: Type B 메시징(타입 B 텔레타이프 메시지)
definition_ko: 'Type B 메시징은 항공사와 항공 여행 업계 전반이 SITA·ARINC 사설망(및 AFTN)을 통해 예약·운영 메시지를 교환하는 데 쓰는 레거시 저장-후-전달(store-and-forward) 텔레타이프(TTY) 메시지 형식이다. 1960년대 초로 거슬러 올라가며, 더 새로운 XML/REST 유통이 점차 대체해 가는 기반 전송 수단으로 남아 있다.'
longDef: 'Type B is prized for its security, reliability, high availability, and assured delivery with tracing, but is deliberately constrained (typically up to 60 lines of 63 characters with a limited character set). It is carried over private SITA/ARINC networks, increasingly via modern protocols such as MATIP and MQ over TCP/IP. Distinct from interactive Type A (query/response) traffic, Type B underpins decades of legacy reservations and operational processes that NDC and REST APIs are slowly succeeding.'
longDef_ko: 'Type B는 보안성, 신뢰성, 높은 가용성, 추적이 가능한 보장 전달로 높이 평가되지만, 의도적으로 제약되어 있다(보통 한 줄 63자, 최대 60줄, 제한된 문자 집합). SITA/ARINC 사설망을 통해 전달되며 점차 TCP/IP 위의 MATIP, MQ 같은 현대적 프로토콜을 사용한다. 대화형 Type A(질의/응답) 트래픽과 구별되며, Type B는 NDC와 REST API가 서서히 대체해 가고 있는 수십 년간의 레거시 예약·운영 프로세스를 떠받친다.'
standardBody: IATA
aliases:
  - Type B
  - Type B Message
  - TTY messaging
  - Airline teletype message
providerTerms:
  - provider: SITA
    term: SITA Type B / Messaging network
    context: SITA operates one of the two principal private networks carrying airline Type B teletype messages
    context_ko: SITA는 항공 Type B 텔레타이프 메시지를 실어 나르는 두 주요 사설망 중 하나를 운영함
    relationship: related
relationships:
  - type: related
    targetTerm: EDIFACT
  - type: contrasts
    targetTerm: NDC
  - type: contrasts
    targetTerm: REST API
  - type: related
    targetTerm: PNR
distinctions:
  - targetTerm: EDIFACT
    explanation: 'Type B is a teletype (TTY) message transport format over SITA/ARINC; EDIFACT is a structured EDI syntax. They are different layers — EDI content can be conveyed, but Type B is fundamentally the legacy teletype messaging medium, not an EDI grammar.'
    explanation_ko: 'Type B는 SITA/ARINC 위의 텔레타이프(TTY) 메시지 전송 형식이고, EDIFACT는 구조화된 EDI 구문이다. 둘은 서로 다른 계층으로, EDI 내용을 실어 나를 수는 있으나 Type B는 본질적으로 EDI 문법이 아니라 레거시 텔레타이프 메시징 매체이다.'
  - targetTerm: REST API
    explanation: Type B is constrained legacy TTY messaging over private aviation networks; a REST API is modern HTTP/JSON web-service integration that is gradually replacing such legacy transports.
    explanation_ko: 'Type B는 항공 사설망 위에서 동작하는 제약된 레거시 TTY 메시징이고, REST API는 그런 레거시 전송을 점차 대체하는 현대적 HTTP/JSON 웹 서비스 연동이다.'
sources:
  - org: IATA
    name: Type B Messaging Whitepaper
    version: v2.1
    section: ''
    url: ''
  - org: Wikipedia
    name: Airline teletype system
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="20" width="36" height="18" rx="2"/><path d="M12 20v-6a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v6"/><path d="M12 27h.01M17 27h.01M22 27h.01M27 27h.01M32 27h.01M36 27h.01"/><path d="M14 32h20"/></svg>
---

> Type B Messaging is the legacy store-and-forward teletype (TTY) message format used by airlines and the wider air-travel industry to exchange booking, reservations, and operational messages over private SITA and ARINC networks (and AFTN). Dating to the early 1960s, it remains a baseline transport that newer XML/REST distribution is gradually replacing.

Type B is prized for its security, reliability, high availability, and assured delivery with tracing, but is deliberately constrained (typically up to 60 lines of 63 characters with a limited character set). It is carried over private SITA/ARINC networks, increasingly via modern protocols such as MATIP and MQ over TCP/IP. Distinct from interactive Type A (query/response) traffic, Type B underpins decades of legacy reservations and operational processes that NDC and REST APIs are slowly succeeding.

**한국어 / Korean** — **Type B 메시징(타입 B 텔레타이프 메시지)** — Type B 메시징은 항공사와 항공 여행 업계 전반이 SITA·ARINC 사설망(및 AFTN)을 통해 예약·운영 메시지를 교환하는 데 쓰는 레거시 저장-후-전달(store-and-forward) 텔레타이프(TTY) 메시지 형식이다. 1960년대 초로 거슬러 올라가며, 더 새로운 XML/REST 유통이 점차 대체해 가는 기반 전송 수단으로 남아 있다.

Type B는 보안성, 신뢰성, 높은 가용성, 추적이 가능한 보장 전달로 높이 평가되지만, 의도적으로 제약되어 있다(보통 한 줄 63자, 최대 60줄, 제한된 문자 집합). SITA/ARINC 사설망을 통해 전달되며 점차 TCP/IP 위의 MATIP, MQ 같은 현대적 프로토콜을 사용한다. 대화형 Type A(질의/응답) 트래픽과 구별되며, Type B는 NDC와 REST API가 서서히 대체해 가고 있는 수십 년간의 레거시 예약·운영 프로세스를 떠받친다.

**Aliases:** `Type B`, `Type B Message`, `TTY messaging`, `Airline teletype message`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| SITA | `SITA Type B / Messaging network` | related | SITA operates one of the two principal private networks carrying airline Type B teletype messages |

# Related
- [EDIFACT](/common/standards/edifact.md) — related
- [NDC](/common/standards/ndc.md) — contrasts
- [REST API](/common/standards/rest-api.md) — contrasts
- [PNR](/air/air-ops/pnr.md) — related

# Distinctions
- **Type B Messaging** vs [EDIFACT](/common/standards/edifact.md) — Type B is a teletype (TTY) message transport format over SITA/ARINC; EDIFACT is a structured EDI syntax. They are different layers — EDI content can be conveyed, but Type B is fundamentally the legacy teletype messaging medium, not an EDI grammar.
- **Type B Messaging** vs [REST API](/common/standards/rest-api.md) — Type B is constrained legacy TTY messaging over private aviation networks; a REST API is modern HTTP/JSON web-service integration that is gradually replacing such legacy transports.

# Citations
[1] IATA — Type B Messaging Whitepaper — v2.1
[2] Wikipedia — Airline teletype system
