---
type: Standard
title: OpenTravel 2.0 Object Model
description: 'The OpenTravel 2.0 Object Model is the next-generation, object-oriented specification from the OpenTravel Alliance whose objects can be exchanged as JSON or XML and consumed via REST. Unlike the message-centric legacy 1.x XML message set, it is a fundamental redesign that shifts the focus from on-the-wire messages to reusable business objects, adding lightweight JSON/REST messaging across air, hotel, car, and other travel verticals.'
tags:
  - standards
  - active
  - OpenTravel
timestamp: '2026-06-17T00:00:00Z'
id: opentravel-2-0-object-model
vertical: common
category: standards
conceptType: standard
status: active
abbreviation: OTA 2.0
term_ko: OpenTravel 2.0 오브젝트 모델
definition_ko: 'OpenTravel 2.0 오브젝트 모델은 OpenTravel Alliance의 차세대 객체지향 명세로, 그 객체를 JSON 또는 XML로 교환하고 REST로 사용할 수 있다. 메시지 중심이던 레거시 1.x XML 메시지 집합과 달리, 온더와이어 메시지에서 재사용 가능한 비즈니스 객체로 초점을 옮긴 근본적 재설계이며, 항공·호텔·렌터카 등 여러 여행 분야에 걸쳐 가벼운 JSON/REST 메시징을 더한다.'
longDef: 'By incorporating JSON and REST, 2.0 reduces message weight and improves mobile and app compatibility compared with the verbose 1.x XML schemas. It is designed in tiered detail levels so developers can target anything from lightweight mobile widgets to full-featured integrations, and it can emit XML, JSON, WSDL, and OpenAPI (Swagger) outputs. Schemas are produced from the model using the OpenTravel Model-Development Environment (OTM-DE) tooling.'
longDef_ko: 'JSON과 REST를 도입함으로써 2.0은 장황한 1.x XML 스키마에 비해 메시지 크기를 줄이고 모바일·앱 호환성을 높인다. 단계적 상세 수준으로 설계되어 개발자는 가벼운 모바일 위젯부터 완전한 기능의 연동까지 목표로 삼을 수 있으며, XML, JSON, WSDL, OpenAPI(Swagger) 출력을 생성할 수 있다. 스키마는 OpenTravel Model-Development Environment(OTM-DE) 도구를 통해 이 모델로부터 산출된다.'
standardBody: OpenTravel
aliases:
  - OTA 2.0
  - OpenTravel 2.0
  - OpenTravel Object Model
  - 2.0 Object Model
providerTerms:
  - provider: OpenTravel
    term: OpenTravel 1.x OTA_* message schemas
    context: The legacy message-centric OpenTravel 1.x XML messages (e.g. OTA_AirAvailRQ) that the object-oriented 2.0 model supersedes
    context_ko: '객체지향 2.0 모델이 대체하는 레거시 메시지 중심 OpenTravel 1.x XML 메시지(예: OTA_AirAvailRQ)'
    relationship: related
  - provider: NDC/IATA
    term: AIDM / NDC schemas
    context: IATA's AIDM-derived NDC schemas are a parallel travel data model that OpenTravel collaborates with for interoperability
    context_ko: 'OpenTravel이 상호운용을 위해 협력하는, IATA AIDM 기반 NDC 스키마라는 병행 여행 데이터 모델'
    relationship: related
relationships:
  - type: parent
    targetTerm: OpenTravel Alliance
  - type: related
    targetTerm: REST API
  - type: related
    targetTerm: NDC
distinctions:
  - targetTerm: OpenTravel Alliance
    explanation: 'The OpenTravel Alliance is the standards organization; the 2.0 Object Model is the specific next-generation object-oriented specification that body publishes, succeeding its legacy 1.x XML message set.'
    explanation_ko: 'OpenTravel Alliance는 표준 단체이고, 2.0 오브젝트 모델은 그 단체가 발행하는 구체적인 차세대 객체지향 명세로, 레거시 1.x XML 메시지 집합을 잇는다.'
  - targetTerm: NDC
    explanation: OpenTravel 2.0 is a broad multi-sector travel object model; NDC is IATA's air-specific offer-and-order distribution standard.
    explanation_ko: 'OpenTravel 2.0은 여러 분야를 아우르는 광범위한 여행 오브젝트 모델이고, NDC는 IATA의 항공 전용 offer-and-order 유통 표준이다.'
sources:
  - org: OpenTravel Alliance
    name: About 2.0 Object Model
    version: ''
    section: ''
    url: 'https://opentravel.org/news/2018a-2-0-object-model/'
    tier: association
  - org: OpenTravel Alliance
    name: Releases 2018A 2.0 Object Model Publication for Hospitality
    version: ''
    section: ''
    url: 'https://opentravel.org/news/opentravel-alliance-releases-2018a-2-0-object-model-publication-for-hospitality/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M24 6l16 9v18l-16 9-16-9V15z"/><path d="M8 15l16 9 16-9M24 24v18"/><path d="M16 19.5l16 9"/></svg>
---

> The OpenTravel 2.0 Object Model is the next-generation, object-oriented specification from the OpenTravel Alliance whose objects can be exchanged as JSON or XML and consumed via REST. Unlike the message-centric legacy 1.x XML message set, it is a fundamental redesign that shifts the focus from on-the-wire messages to reusable business objects, adding lightweight JSON/REST messaging across air, hotel, car, and other travel verticals.

By incorporating JSON and REST, 2.0 reduces message weight and improves mobile and app compatibility compared with the verbose 1.x XML schemas. It is designed in tiered detail levels so developers can target anything from lightweight mobile widgets to full-featured integrations, and it can emit XML, JSON, WSDL, and OpenAPI (Swagger) outputs. Schemas are produced from the model using the OpenTravel Model-Development Environment (OTM-DE) tooling.

**한국어 / Korean** — **OpenTravel 2.0 오브젝트 모델** — OpenTravel 2.0 오브젝트 모델은 OpenTravel Alliance의 차세대 객체지향 명세로, 그 객체를 JSON 또는 XML로 교환하고 REST로 사용할 수 있다. 메시지 중심이던 레거시 1.x XML 메시지 집합과 달리, 온더와이어 메시지에서 재사용 가능한 비즈니스 객체로 초점을 옮긴 근본적 재설계이며, 항공·호텔·렌터카 등 여러 여행 분야에 걸쳐 가벼운 JSON/REST 메시징을 더한다.

JSON과 REST를 도입함으로써 2.0은 장황한 1.x XML 스키마에 비해 메시지 크기를 줄이고 모바일·앱 호환성을 높인다. 단계적 상세 수준으로 설계되어 개발자는 가벼운 모바일 위젯부터 완전한 기능의 연동까지 목표로 삼을 수 있으며, XML, JSON, WSDL, OpenAPI(Swagger) 출력을 생성할 수 있다. 스키마는 OpenTravel Model-Development Environment(OTM-DE) 도구를 통해 이 모델로부터 산출된다.

**Aliases:** `OTA 2.0`, `OpenTravel 2.0`, `OpenTravel Object Model`, `2.0 Object Model`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| OpenTravel | `OpenTravel 1.x OTA_* message schemas` | related | The legacy message-centric OpenTravel 1.x XML messages (e.g. OTA_AirAvailRQ) that the object-oriented 2.0 model supersedes |
| NDC/IATA | `AIDM / NDC schemas` | related | IATA's AIDM-derived NDC schemas are a parallel travel data model that OpenTravel collaborates with for interoperability |

# Related
- [OpenTravel Alliance](/common/standards/opentravel-alliance.md) — parent
- [REST API](/common/standards/rest-api.md) — related
- [NDC](/common/standards/ndc.md) — related

# Distinctions
- **OpenTravel 2.0 Object Model** vs [OpenTravel Alliance](/common/standards/opentravel-alliance.md) — The OpenTravel Alliance is the standards organization; the 2.0 Object Model is the specific next-generation object-oriented specification that body publishes, succeeding its legacy 1.x XML message set.
- **OpenTravel 2.0 Object Model** vs [NDC](/common/standards/ndc.md) — OpenTravel 2.0 is a broad multi-sector travel object model; NDC is IATA's air-specific offer-and-order distribution standard.

# Citations
[1] [OpenTravel Alliance — About 2.0 Object Model](https://opentravel.org/news/2018a-2-0-object-model/)
[2] [OpenTravel Alliance — Releases 2018A 2.0 Object Model Publication for Hospitality](https://opentravel.org/news/opentravel-alliance-releases-2018a-2-0-object-model-publication-for-hospitality/)
