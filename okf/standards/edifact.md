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
sources:
  - org: UN/CEFACT
    name: UN/EDIFACT standard
    version: ''
    section: ''
    url: ''
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

# Related
- [GDS](/standards/gds.md) — related
- [NDC](/standards/ndc.md) — contrasts
- [REST API](/standards/rest-api.md) — contrasts
- [PNR](/air-ops/pnr.md) — related
- [Availability](/air-shop/availability.md) — related

# Distinctions
- **EDIFACT** vs [NDC](/standards/ndc.md) — EDIFACT is the legacy compact-text EDI standard underpinning classic GDS/PSS messaging; NDC is IATA's modern XML (increasingly JSON/REST) standard designed to express rich, personalized offers EDIFACT cannot fully convey.
- **EDIFACT** vs [REST API](/standards/rest-api.md) — EDIFACT is a batch/message-oriented EDI syntax over legacy transports; a REST API is a modern web-service style using HTTP with JSON/XML payloads.

# Citations
[1] UN/CEFACT — UN/EDIFACT standard
[2] IATA — Passenger and Airport Data Interchange Standards (PADIS)
