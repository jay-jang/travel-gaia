---
type: Standard Term
title: REST API
description: 'A REST API is a web-service interface built on the Representational State Transfer architectural style, using standard HTTP methods and verbs against resource URLs, typically with JSON payloads. In travel distribution it is the modern integration style used by airline, hotel, and aggregator APIs, increasingly including IATA NDC delivered as JSON/REST.'
tags:
  - standards
  - active
timestamp: '2026-06-17T00:00:00Z'
id: rest-api
vertical: common
category: standards
conceptType: standard-term
status: active
abbreviation: API
term_ko: REST API(REST 방식 API)
definition_ko: 'REST API는 Representational State Transfer 아키텍처 스타일을 기반으로 한 웹 서비스 인터페이스로, 리소스 URL에 대해 표준 HTTP 메서드와 동사를 사용하며 보통 JSON 페이로드를 주고받는다. 여행 유통에서는 항공사·호텔·애그리게이터 API가 사용하는 현대적 연동 방식이며, JSON/REST로 제공되는 IATA NDC도 점차 이에 포함된다.'
longDef: 'REST contrasts with older SOAP/XML web services and with batch EDI such as EDIFACT. Travel REST APIs are commonly described with OpenAPI (Swagger) specifications, enabling auto-generated client libraries and easier developer onboarding. Major GDSs and airlines now expose REST/JSON Offer and Order APIs alongside legacy SOAP and EDIFACT channels, reflecting the industry''s broader shift toward lightweight, web-native integration.'
longDef_ko: 'REST는 더 오래된 SOAP/XML 웹 서비스 및 EDIFACT 같은 배치 EDI와 대비된다. 여행 REST API는 흔히 OpenAPI(Swagger) 명세로 기술되어 클라이언트 라이브러리 자동 생성과 개발자 온보딩을 쉽게 한다. 주요 GDS와 항공사는 이제 레거시 SOAP·EDIFACT 채널과 함께 REST/JSON 기반 Offer 및 Order API를 제공하며, 이는 가볍고 웹 친화적인 연동으로 향하는 산업 전반의 전환을 반영한다.'
aliases:
  - RESTful API
  - Representational State Transfer API
  - JSON API
providerTerms:
  - provider: IATA
    term: NDC JSON/REST APIs
    context: IATA's NDC standard is increasingly delivered via REST/JSON in addition to SOAP/XML
    context_ko: IATA의 NDC 표준이 SOAP/XML에 더해 점차 REST/JSON으로 제공됨
    relationship: related
relationships:
  - type: contrasts
    targetTerm: EDIFACT
  - type: related
    targetTerm: NDC
  - type: related
    targetTerm: Shopping API
  - type: related
    targetTerm: Direct Connect
  - type: related
    targetTerm: Aggregator
distinctions:
  - targetTerm: EDIFACT
    explanation: A REST API is a modern HTTP/JSON web-service style; EDIFACT is a legacy compact-text EDI syntax used in classic GDS/PSS messaging.
    explanation_ko: 'REST API는 현대적 HTTP/JSON 웹 서비스 방식이고, EDIFACT는 기존 GDS/PSS 메시징에 쓰이는 레거시 압축 텍스트 EDI 구문이다.'
  - targetTerm: NDC
    explanation: REST is a transport/architectural style; NDC is a domain data standard whose messages may be carried over SOAP/XML or REST/JSON.
    explanation_ko: 'REST는 전송/아키텍처 스타일이고, NDC는 그 메시지를 SOAP/XML 또는 REST/JSON으로 실어 나를 수 있는 도메인 데이터 표준이다.'
  - targetTerm: Type B Messaging
    explanation: Type B is constrained legacy TTY messaging over private aviation networks; a REST API is modern HTTP/JSON web-service integration that is gradually replacing such legacy transports.
    explanation_ko: 'Type B는 항공 사설망 위에서 동작하는 제약된 레거시 TTY 메시징이고, REST API는 그런 레거시 전송을 점차 대체하는 현대적 HTTP/JSON 웹 서비스 연동이다.'
sources:
  - org: IETF / W3C
    name: REST architectural style (HTTP)
    version: ''
    section: ''
    url: 'https://roy.gbiv.com/pubs/dissertation/rest_arch_style.htm'
  - org: OpenAPI Initiative
    name: OpenAPI Specification
    version: ''
    section: ''
    url: 'https://spec.openapis.org/oas/latest.html'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="24" r="5"/><circle cx="38" cy="14" r="5"/><circle cx="38" cy="34" r="5"/><line x1="15" y1="24" x2="33" y2="16"/><line x1="15" y1="24" x2="33" y2="32"/><path d="M22 6l3 3-3 3"/><path d="M19 9h6"/></svg>
---

> A REST API is a web-service interface built on the Representational State Transfer architectural style, using standard HTTP methods and verbs against resource URLs, typically with JSON payloads. In travel distribution it is the modern integration style used by airline, hotel, and aggregator APIs, increasingly including IATA NDC delivered as JSON/REST.

REST contrasts with older SOAP/XML web services and with batch EDI such as EDIFACT. Travel REST APIs are commonly described with OpenAPI (Swagger) specifications, enabling auto-generated client libraries and easier developer onboarding. Major GDSs and airlines now expose REST/JSON Offer and Order APIs alongside legacy SOAP and EDIFACT channels, reflecting the industry's broader shift toward lightweight, web-native integration.

**한국어 / Korean** — **REST API(REST 방식 API)** — REST API는 Representational State Transfer 아키텍처 스타일을 기반으로 한 웹 서비스 인터페이스로, 리소스 URL에 대해 표준 HTTP 메서드와 동사를 사용하며 보통 JSON 페이로드를 주고받는다. 여행 유통에서는 항공사·호텔·애그리게이터 API가 사용하는 현대적 연동 방식이며, JSON/REST로 제공되는 IATA NDC도 점차 이에 포함된다.

REST는 더 오래된 SOAP/XML 웹 서비스 및 EDIFACT 같은 배치 EDI와 대비된다. 여행 REST API는 흔히 OpenAPI(Swagger) 명세로 기술되어 클라이언트 라이브러리 자동 생성과 개발자 온보딩을 쉽게 한다. 주요 GDS와 항공사는 이제 레거시 SOAP·EDIFACT 채널과 함께 REST/JSON 기반 Offer 및 Order API를 제공하며, 이는 가볍고 웹 친화적인 연동으로 향하는 산업 전반의 전환을 반영한다.

**Aliases:** `RESTful API`, `Representational State Transfer API`, `JSON API`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| IATA | `NDC JSON/REST APIs` | related | IATA's NDC standard is increasingly delivered via REST/JSON in addition to SOAP/XML |

# Related
- [EDIFACT](/common/standards/edifact.md) — contrasts
- [NDC](/common/standards/ndc.md) — related
- [Shopping API](/common/standards/shopping-api.md) — related
- [Direct Connect](/common/standards/direct-connect.md) — related
- [Aggregator](/common/standards/aggregator.md) — related

# Distinctions
- **REST API** vs [EDIFACT](/common/standards/edifact.md) — A REST API is a modern HTTP/JSON web-service style; EDIFACT is a legacy compact-text EDI syntax used in classic GDS/PSS messaging.
- **REST API** vs [NDC](/common/standards/ndc.md) — REST is a transport/architectural style; NDC is a domain data standard whose messages may be carried over SOAP/XML or REST/JSON.
- **REST API** vs [Type B Messaging](/common/standards/type-b-messaging.md) — Type B is constrained legacy TTY messaging over private aviation networks; a REST API is modern HTTP/JSON web-service integration that is gradually replacing such legacy transports.

# Citations
[1] [IETF / W3C — REST architectural style (HTTP)](https://roy.gbiv.com/pubs/dissertation/rest_arch_style.htm)
[2] [OpenAPI Initiative — OpenAPI Specification](https://spec.openapis.org/oas/latest.html)
