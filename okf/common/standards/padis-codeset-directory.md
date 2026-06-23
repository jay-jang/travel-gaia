---
type: Code
title: PADIS Codeset Directory
description: 'The PADIS Codeset Directory is IATA''s authoritative published directory of the standardized code sets used in passenger and airport data interchange messages, covering both EDIFACT and XML/NDC message families. Maintained under the PADIS board (and its Technical Assessment Group), it defines the permitted code values—such as status, reason, and type codes—that messages reference for interoperability.'
tags:
  - standards
  - active
  - IATA
timestamp: '2026-06-18T00:00:00Z'
id: padis-codeset-directory
vertical: common
category: standards
conceptType: code
status: active
term_ko: PADIS Codeset Directory (PADIS 코드셋 디렉터리)
definition_ko: 'PADIS Codeset Directory는 여객·공항 데이터 교환 메시지에서 사용되는 표준 코드셋을 IATA가 공인·발행한 디렉터리로, EDIFACT와 XML/NDC 메시지 계열 모두를 포괄한다. PADIS 위원회(및 산하 Technical Assessment Group)가 관리하며, 상호운용을 위해 메시지가 참조하는 허용 코드값(상태·사유·유형 코드 등)을 정의한다.'
longDef: 'The directory enumerates code lists (each with a code, name and description) that NDC and EDIFACT messages cite by reference rather than embedding free text, ensuring senders and receivers interpret values identically. Examples include codes for booking/coupon status, contact and document types, and service reason codes. It is versioned (e.g., aligned to a given NDC/EDIST release) and is a normative companion to the message schemas: a schema defines structure while the codeset directory defines the controlled vocabularies that populate coded data elements.'
longDef_ko: '이 디렉터리는 코드 리스트(각 코드·명칭·설명 포함)를 열거하며, NDC와 EDIFACT 메시지는 자유 텍스트를 내장하는 대신 이를 참조로 인용하여 송신자와 수신자가 값을 동일하게 해석하도록 한다. 예약/쿠폰 상태, 연락처·문서 유형, 서비스 사유 코드 등이 그 예이다. 특정 NDC/EDIST 릴리스에 맞춰 버전이 관리되며, 메시지 스키마의 규범적 동반 문서이다. 즉 스키마가 구조를 정의한다면 codeset directory는 코드화된 데이터 요소를 채우는 통제 어휘(controlled vocabulary)를 정의한다.'
standardBody: IATA
aliases:
  - PADIS Code Set Directory
  - PADIS EDIFACT and XML Codeset Directory
relationships:
  - type: parent
    targetTerm: Passenger and Airport Data Interchange Standards (PADIS)
  - type: related
    targetTerm: NDC
  - type: related
    targetTerm: EDIFACT
  - type: related
    targetTerm: Enhanced and Simplified Distribution (EDIST)
  - type: related
    targetTerm: Booking Status Code
  - type: related
    targetTerm: Reason for Issuance Code / Sub Code (RFIC / RFISC)
distinctions:
  - targetTerm: Passenger and Airport Data Interchange Standards (PADIS)
    explanation: PADIS is the overall IATA standards programme and board for passenger/airport data interchange; the Codeset Directory is one specific deliverable within it—the catalogue of standardized code values.
    explanation_ko: 'PADIS는 여객·공항 데이터 교환을 위한 IATA 표준 프로그램·위원회 전반을 가리키고, Codeset Directory는 그 안의 특정 산출물, 즉 표준 코드값 목록(카탈로그)이다.'
  - targetTerm: EDIFACT
    explanation: 'EDIFACT is a message syntax/standard for structuring data; the PADIS Codeset Directory supplies the controlled code values those messages (and NDC XML) reference—a vocabulary, not a syntax.'
    explanation_ko: 'EDIFACT는 데이터를 구조화하는 메시지 구문/표준이고, PADIS Codeset Directory는 그 메시지(및 NDC XML)가 참조하는 통제된 코드값을 공급한다. 즉 구문이 아니라 어휘이다.'
sources:
  - org: IATA
    name: PADIS EDIFACT and XML Codeset Directory
    version: ''
    section: ''
    url: ''
    tier: association
  - org: IATA
    name: Enhanced and Simplified Distribution Implementation Guide
    version: ''
    section: ''
    url: ''
    tier: standard-body
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="8" width="32" height="32" rx="3"/><path d="M8 16h32"/><path d="M14 24l-3 3 3 3"/><path d="M21 24l3 3-3 3"/><path d="M30 23l-3 8"/></svg>
---

> The PADIS Codeset Directory is IATA's authoritative published directory of the standardized code sets used in passenger and airport data interchange messages, covering both EDIFACT and XML/NDC message families. Maintained under the PADIS board (and its Technical Assessment Group), it defines the permitted code values—such as status, reason, and type codes—that messages reference for interoperability.

The directory enumerates code lists (each with a code, name and description) that NDC and EDIFACT messages cite by reference rather than embedding free text, ensuring senders and receivers interpret values identically. Examples include codes for booking/coupon status, contact and document types, and service reason codes. It is versioned (e.g., aligned to a given NDC/EDIST release) and is a normative companion to the message schemas: a schema defines structure while the codeset directory defines the controlled vocabularies that populate coded data elements.

**한국어 / Korean** — **PADIS Codeset Directory (PADIS 코드셋 디렉터리)** — PADIS Codeset Directory는 여객·공항 데이터 교환 메시지에서 사용되는 표준 코드셋을 IATA가 공인·발행한 디렉터리로, EDIFACT와 XML/NDC 메시지 계열 모두를 포괄한다. PADIS 위원회(및 산하 Technical Assessment Group)가 관리하며, 상호운용을 위해 메시지가 참조하는 허용 코드값(상태·사유·유형 코드 등)을 정의한다.

이 디렉터리는 코드 리스트(각 코드·명칭·설명 포함)를 열거하며, NDC와 EDIFACT 메시지는 자유 텍스트를 내장하는 대신 이를 참조로 인용하여 송신자와 수신자가 값을 동일하게 해석하도록 한다. 예약/쿠폰 상태, 연락처·문서 유형, 서비스 사유 코드 등이 그 예이다. 특정 NDC/EDIST 릴리스에 맞춰 버전이 관리되며, 메시지 스키마의 규범적 동반 문서이다. 즉 스키마가 구조를 정의한다면 codeset directory는 코드화된 데이터 요소를 채우는 통제 어휘(controlled vocabulary)를 정의한다.

**Aliases:** `PADIS Code Set Directory`, `PADIS EDIFACT and XML Codeset Directory`

# Related
- [Passenger and Airport Data Interchange Standards (PADIS)](/common/standards/passenger-and-airport-data-interchange-standards-padis.md) — parent
- [NDC](/common/standards/ndc.md) — related
- [EDIFACT](/common/standards/edifact.md) — related
- [Enhanced and Simplified Distribution (EDIST)](/common/standards/enhanced-and-simplified-distribution-edist.md) — related
- [Booking Status Code](/air/air-ops/booking-status-code.md) — related
- [Reason for Issuance Code / Sub Code (RFIC / RFISC)](/air/air-ticket/rfic-rfisc.md) — related

# Distinctions
- **PADIS Codeset Directory** vs [Passenger and Airport Data Interchange Standards (PADIS)](/common/standards/passenger-and-airport-data-interchange-standards-padis.md) — PADIS is the overall IATA standards programme and board for passenger/airport data interchange; the Codeset Directory is one specific deliverable within it—the catalogue of standardized code values.
- **PADIS Codeset Directory** vs [EDIFACT](/common/standards/edifact.md) — EDIFACT is a message syntax/standard for structuring data; the PADIS Codeset Directory supplies the controlled code values those messages (and NDC XML) reference—a vocabulary, not a syntax.

# Citations
[1] IATA — PADIS EDIFACT and XML Codeset Directory
[2] IATA — Enhanced and Simplified Distribution Implementation Guide
