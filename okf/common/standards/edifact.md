---
type: Standard
title: EDIFACT
description: 'EDIFACT (Electronic Data Interchange for Administration, Commerce and Transport) is a United Nations-developed international standard for structured, machine-to-machine electronic data interchange. In air travel its IATA profile (PADIS) is the long-standing messaging format used between airline Passenger Service Systems and GDSs for availability, booking, fares, and ticketing.'
tags:
  - standards
  - active
  - UN/CEFACT; IATA (PADIS profile)
timestamp: '2026-06-17T00:00:00Z'
id: edifact
vertical: common
category: standards
conceptType: standard
status: active
abbreviation: EDIFACT
term_ko: EDIFACT(전자 데이터 교환 표준)
definition_ko: 'EDIFACT(Electronic Data Interchange for Administration, Commerce and Transport)는 구조화된 기계 대 기계 전자 데이터 교환을 위해 UN이 개발한 국제 표준이다. 항공 여행에서는 그 IATA 프로파일인 PADIS가 항공사 여객 서비스 시스템(PSS)과 GDS 사이에서 가용성, 예약, 운임, 발권 정보를 주고받는 데 오랫동안 쓰여 온 메시징 형식이다.'
longDef: 'Developed under the UN in the 1980s for an era of expensive, low-bandwidth links, EDIFACT uses a compact, segment- and element-based text syntax. IATA maintains the air-industry application as PADIS (Passenger and Airport Data Interchange Standards), which exists in both EDIFACT and XML syntaxes. Classic GDS distribution and most full-service-carrier PSS integrations still rely heavily on EDIFACT, which IATA''s NDC and the broader move to XML/JSON REST APIs increasingly supplement rather than fully replace.'
longDef_ko: 'EDIFACT는 회선 비용이 비싸고 대역폭이 낮던 시대를 위해 1980년대 UN 주도로 개발되었으며, 세그먼트와 요소 기반의 간결한 텍스트 구문을 사용한다. IATA는 항공 산업용 적용으로 PADIS(Passenger and Airport Data Interchange Standards)를 유지하며, 이는 EDIFACT와 XML 두 구문으로 존재한다. 전통적인 GDS 유통과 대부분의 풀서비스 항공사 PSS 연동은 여전히 EDIFACT에 크게 의존하며, IATA의 NDC와 XML/JSON REST API로의 전반적 전환이 이를 완전히 대체하기보다 점차 보완하고 있다.'
standardBody: UN/CEFACT; IATA (PADIS profile)
aliases:
  - UN/EDIFACT
  - 'Electronic Data Interchange for Administration, Commerce and Transport'
  - PADIS EDIFACT
providerTerms:
  - provider: NDC/IATA
    term: EDIST (NDC XML)
    context: IATA's Enhanced and Simplified Distribution XML messages are the modern successor to EDIFACT for airline shopping and ordering
    context_ko: IATA의 EDIST XML 메시지는 항공 조회·주문에서 EDIFACT를 잇는 현대적 후속 표준
    relationship: related
  - provider: IATA PADIS
    term: PADIS EDIFACT message directory
    context: IATA PADIS governs and publishes the EDIFACT passenger-travel message standards (Type A interactive messaging)
    context_ko: IATA PADIS가 EDIFACT 여객 여행 메시지 표준(Type A 대화형 메시징)을 관리·발행함
    relationship: broader
relationships:
  - type: related
    targetTerm: GDS
  - type: contrasts
    targetTerm: NDC
  - type: contrasts
    targetTerm: REST API
  - type: related
    targetTerm: PNR
  - type: related
    targetTerm: Availability
distinctions:
  - targetTerm: NDC
    explanation: 'EDIFACT is the legacy compact-text EDI standard underpinning classic GDS/PSS messaging; NDC is IATA''s modern XML (increasingly JSON/REST) standard designed to express rich, personalized offers EDIFACT cannot fully convey.'
    explanation_ko: 'EDIFACT는 기존 GDS/PSS 메시징을 떠받치는 레거시 압축 텍스트 EDI 표준이고, NDC는 EDIFACT로는 충분히 표현할 수 없는 풍부하고 개인화된 오퍼를 담기 위해 설계된 IATA의 현대적 XML(점차 JSON/REST) 표준이다.'
  - targetTerm: REST API
    explanation: EDIFACT is a batch/message-oriented EDI syntax over legacy transports; a REST API is a modern web-service style using HTTP with JSON/XML payloads.
    explanation_ko: 'EDIFACT는 레거시 전송 위에서 동작하는 배치/메시지 지향 EDI 구문이고, REST API는 HTTP와 JSON/XML 페이로드를 사용하는 현대적 웹 서비스 방식이다.'
  - targetTerm: AIRIMP
    explanation: AIRIMP is the reservations-specific procedural standard for interline messaging; EDIFACT is a general UN syntax for electronic data interchange used (via IATA PADIS) for many message types beyond reservations.
    explanation_ko: 'AIRIMP은 interline 메시징에 특화된 예약 절차 표준이고, EDIFACT는 (IATA PADIS를 통해) 예약 외 다양한 메시지 유형에도 쓰이는 전자 데이터 교환용 범용 UN 구문 체계다.'
  - targetTerm: Enhanced and Simplified Distribution (EDIST)
    explanation: EDIST is the modern XML message family for offers and orders; EDIFACT is the legacy compact-text EDI syntax for classic reservations/ticketing messaging.
    explanation_ko: 'EDIST는 오퍼와 주문을 위한 현대적 XML 메시지 계열이고, EDIFACT는 전통적 예약/발권 메시징을 위한 레거시 압축 텍스트 EDI 구문이다.'
  - targetTerm: PADIS Codeset Directory
    explanation: 'EDIFACT is a message syntax/standard for structuring data; the PADIS Codeset Directory supplies the controlled code values those messages (and NDC XML) reference—a vocabulary, not a syntax.'
    explanation_ko: 'EDIFACT는 데이터를 구조화하는 메시지 구문/표준이고, PADIS Codeset Directory는 그 메시지(및 NDC XML)가 참조하는 통제된 코드값을 공급한다. 즉 구문이 아니라 어휘이다.'
  - targetTerm: Passenger and Airport Data Interchange Standards (PADIS)
    explanation: EDIFACT is the UN-origin EDI syntax; PADIS is the IATA body and air-industry standards set (in both EDIFACT and XML syntaxes) that governs how those messages are defined for passenger and airport use.
    explanation_ko: 'EDIFACT는 UN에서 유래한 EDI 구문이고, PADIS는 그 메시지가 여객·공항 용도로 어떻게 정의되는지를 관장하는 IATA 기구이자 항공 산업 표준 집합(EDIFACT와 XML 두 구문)이다.'
  - targetTerm: SITA Teletype Address
    explanation: 'EDIFACT (Type A) is a structured message syntax for transactional messaging; the SITA teletype address is the routing/addressing layer for Type B free-format teletype traffic, though the same 7-character addresses are also used to carry EDIFACT over Type B.'
    explanation_ko: 'EDIFACT(Type A)는 거래성 메시징을 위한 구조화된 메시지 구문인 반면, SITA 텔레타이프 주소는 Type B 자유형식 텔레타이프 트래픽의 라우팅/주소 계층이다. 다만 동일한 7자리 주소가 Type B를 통해 EDIFACT를 전송하는 데에도 사용된다.'
  - targetTerm: Type B Message
    explanation: 'Type B is the legacy teletype transport format with a constrained free-text line layout; EDIFACT is a structured, segment-based interchange syntax used by IATA PADIS for messages such as PNRGOV and electronic ticketing.'
    explanation_ko: 'Type B는 제한된 자유 텍스트 행 레이아웃을 가진 레거시 텔레타이프 전송 형식이고, EDIFACT는 PNRGOV·전자 발권 등에 IATA PADIS가 사용하는 정형 segment 기반 교환 구문이다.'
  - targetTerm: Type B Messaging
    explanation: 'Type B is a teletype (TTY) message transport format over SITA/ARINC; EDIFACT is a structured EDI syntax. They are different layers — EDI content can be conveyed, but Type B is fundamentally the legacy teletype messaging medium, not an EDI grammar.'
    explanation_ko: 'Type B는 SITA/ARINC 위의 텔레타이프(TTY) 메시지 전송 형식이고, EDIFACT는 구조화된 EDI 구문이다. 둘은 서로 다른 계층으로, EDI 내용을 실어 나를 수는 있으나 Type B는 본질적으로 EDI 문법이 아니라 레거시 텔레타이프 메시징 매체이다.'
sources:
  - org: UN/CEFACT
    name: UN/EDIFACT standard
    version: ''
    section: ''
    url: 'https://unece.org/trade/uncefact/introducing-unedifact'
  - org: IATA
    name: Passenger and Airport Data Interchange Standards (PADIS)
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="10" width="14" height="28" rx="2"/><rect x="30" y="10" width="14" height="28" rx="2"/><line x1="18" y1="18" x2="30" y2="18"/><line x1="18" y1="24" x2="30" y2="24"/><line x1="18" y1="30" x2="30" y2="30"/><path d="M26 21l4 3-4 3"/><line x1="8" y1="16" x2="14" y2="16"/><line x1="8" y1="22" x2="14" y2="22"/></svg>
---

> EDIFACT (Electronic Data Interchange for Administration, Commerce and Transport) is a United Nations-developed international standard for structured, machine-to-machine electronic data interchange. In air travel its IATA profile (PADIS) is the long-standing messaging format used between airline Passenger Service Systems and GDSs for availability, booking, fares, and ticketing.

Developed under the UN in the 1980s for an era of expensive, low-bandwidth links, EDIFACT uses a compact, segment- and element-based text syntax. IATA maintains the air-industry application as PADIS (Passenger and Airport Data Interchange Standards), which exists in both EDIFACT and XML syntaxes. Classic GDS distribution and most full-service-carrier PSS integrations still rely heavily on EDIFACT, which IATA's NDC and the broader move to XML/JSON REST APIs increasingly supplement rather than fully replace.

**한국어 / Korean** — **EDIFACT(전자 데이터 교환 표준)** — EDIFACT(Electronic Data Interchange for Administration, Commerce and Transport)는 구조화된 기계 대 기계 전자 데이터 교환을 위해 UN이 개발한 국제 표준이다. 항공 여행에서는 그 IATA 프로파일인 PADIS가 항공사 여객 서비스 시스템(PSS)과 GDS 사이에서 가용성, 예약, 운임, 발권 정보를 주고받는 데 오랫동안 쓰여 온 메시징 형식이다.

EDIFACT는 회선 비용이 비싸고 대역폭이 낮던 시대를 위해 1980년대 UN 주도로 개발되었으며, 세그먼트와 요소 기반의 간결한 텍스트 구문을 사용한다. IATA는 항공 산업용 적용으로 PADIS(Passenger and Airport Data Interchange Standards)를 유지하며, 이는 EDIFACT와 XML 두 구문으로 존재한다. 전통적인 GDS 유통과 대부분의 풀서비스 항공사 PSS 연동은 여전히 EDIFACT에 크게 의존하며, IATA의 NDC와 XML/JSON REST API로의 전반적 전환이 이를 완전히 대체하기보다 점차 보완하고 있다.

**Aliases:** `UN/EDIFACT`, `Electronic Data Interchange for Administration, Commerce and Transport`, `PADIS EDIFACT`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| NDC/IATA | `EDIST (NDC XML)` | related | IATA's Enhanced and Simplified Distribution XML messages are the modern successor to EDIFACT for airline shopping and ordering |
| IATA PADIS | `PADIS EDIFACT message directory` | broader | IATA PADIS governs and publishes the EDIFACT passenger-travel message standards (Type A interactive messaging) |

# Related
- [GDS](/common/standards/gds.md) — related
- [NDC](/common/standards/ndc.md) — contrasts
- [REST API](/common/standards/rest-api.md) — contrasts
- [PNR](/air/air-ops/pnr.md) — related
- [Availability](/air/air-shop/availability.md) — related

# Distinctions
- **EDIFACT** vs [NDC](/common/standards/ndc.md) — EDIFACT is the legacy compact-text EDI standard underpinning classic GDS/PSS messaging; NDC is IATA's modern XML (increasingly JSON/REST) standard designed to express rich, personalized offers EDIFACT cannot fully convey.
- **EDIFACT** vs [REST API](/common/standards/rest-api.md) — EDIFACT is a batch/message-oriented EDI syntax over legacy transports; a REST API is a modern web-service style using HTTP with JSON/XML payloads.
- **EDIFACT** vs [AIRIMP](/air/air-ops/airimp.md) — AIRIMP is the reservations-specific procedural standard for interline messaging; EDIFACT is a general UN syntax for electronic data interchange used (via IATA PADIS) for many message types beyond reservations.
- **EDIFACT** vs [Enhanced and Simplified Distribution (EDIST)](/common/standards/enhanced-and-simplified-distribution-edist.md) — EDIST is the modern XML message family for offers and orders; EDIFACT is the legacy compact-text EDI syntax for classic reservations/ticketing messaging.
- **EDIFACT** vs [PADIS Codeset Directory](/common/standards/padis-codeset-directory.md) — EDIFACT is a message syntax/standard for structuring data; the PADIS Codeset Directory supplies the controlled code values those messages (and NDC XML) reference—a vocabulary, not a syntax.
- **EDIFACT** vs [Passenger and Airport Data Interchange Standards (PADIS)](/common/standards/passenger-and-airport-data-interchange-standards-padis.md) — EDIFACT is the UN-origin EDI syntax; PADIS is the IATA body and air-industry standards set (in both EDIFACT and XML syntaxes) that governs how those messages are defined for passenger and airport use.
- **EDIFACT** vs [SITA Teletype Address](/common/codes/sita-teletype-address.md) — EDIFACT (Type A) is a structured message syntax for transactional messaging; the SITA teletype address is the routing/addressing layer for Type B free-format teletype traffic, though the same 7-character addresses are also used to carry EDIFACT over Type B.
- **EDIFACT** vs [Type B Message](/air/air-ops/type-b-message.md) — Type B is the legacy teletype transport format with a constrained free-text line layout; EDIFACT is a structured, segment-based interchange syntax used by IATA PADIS for messages such as PNRGOV and electronic ticketing.
- **EDIFACT** vs [Type B Messaging](/common/standards/type-b-messaging.md) — Type B is a teletype (TTY) message transport format over SITA/ARINC; EDIFACT is a structured EDI syntax. They are different layers — EDI content can be conveyed, but Type B is fundamentally the legacy teletype messaging medium, not an EDI grammar.

# Citations
[1] [UN/CEFACT — UN/EDIFACT standard](https://unece.org/trade/uncefact/introducing-unedifact)
[2] IATA — Passenger and Airport Data Interchange Standards (PADIS)
