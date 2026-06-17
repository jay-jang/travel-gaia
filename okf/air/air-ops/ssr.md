---
type: Standard Term
title: SSR
description: 'A Special Service Request (SSR) is a standardized, coded message element in a PNR used to request or notify an action-required special service from a carrier, such as a wheelchair, special meal, unaccompanied minor, or to convey data like Secure Flight passenger details. Each SSR uses a four-letter IATA code and typically receives a status reply (action/advice code) from the carrier.'
tags:
  - air-ops
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: ssr
vertical: air
category: air-ops
conceptType: standard-term
status: active
abbreviation: SSR
term_ko: 특별 서비스 요청(SSR)
definition_ko: 'SSR(Special Service Request, 특별 서비스 요청)은 휠체어, 특별 기내식, 비동반 소아 등 항공사로부터 조치가 필요한 특별 서비스를 요청하거나 통보하기 위해, 또는 Secure Flight 승객 정보와 같은 데이터를 전달하기 위해 PNR에 사용되는 표준화된 코드 메시지 요소다. 각 SSR은 4자리 IATA 코드를 사용하며 일반적으로 항공사로부터 상태 응답(action/advice 코드)을 받는다.'
longDef: 'SSRs follow the IATA PADIS/PSCRM standard format and four-letter code set (e.g., WCHR wheelchair, VGML vegetarian meal, UMNR unaccompanied minor, DOCS for passport/Secure Flight data). Because an SSR is action-oriented, it is transmitted to and acknowledged by each affected carrier, distinguishing it from purely informational messaging. SSRs are central to accessibility (PRM) handling, regulatory data transmission, and ancillary service requests.'
longDef_ko: 'SSR은 IATA PADIS/PSCRM 표준 형식과 4자리 코드 체계(예: WCHR 휠체어, VGML 채식 기내식, UMNR 비동반 소아, DOCS 여권/Secure Flight 데이터)를 따른다. SSR은 조치 지향적이므로 영향을 받는 각 항공사에 전송되어 확인되며, 이는 순수 정보성 메시지와 구별되는 점이다. SSR은 접근성(PRM) 처리, 규제 데이터 전송, 부가 서비스 요청에 핵심적이다.'
standardBody: IATA
aliases:
  - Special Service Request
  - Special Service Requirement
relationships:
  - type: related
    targetTerm: OSI
  - type: related
    targetTerm: PNR
  - type: related
    targetTerm: PRM
  - type: related
    targetTerm: Secure Flight
  - type: related
    targetTerm: Ancillary Service
distinctions:
  - targetTerm: OSI
    explanation: 'An SSR is an action-required, coded request to a carrier that expects a status reply, whereas an OSI is purely informational and requires no carrier action or response.'
    explanation_ko: 'SSR은 항공사에 보내는 조치가 필요한 코드 요청으로 상태 응답을 기대하는 반면, OSI는 순수 정보성으로 항공사의 조치나 응답을 요구하지 않는다.'
sources:
  - name: Passenger Services Conference Resolutions Manual (PSCRM)
    org: IATA
    version: ''
    section: ''
    url: ''
  - name: PADIS EDIFACT/XML Message Standards
    org: IATA
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M24 7 L29 18 L41 19.5 L32 28 L34.5 40 L24 34 L13.5 40 L16 28 L7 19.5 L19 18 Z"/></svg>
---

> A Special Service Request (SSR) is a standardized, coded message element in a PNR used to request or notify an action-required special service from a carrier, such as a wheelchair, special meal, unaccompanied minor, or to convey data like Secure Flight passenger details. Each SSR uses a four-letter IATA code and typically receives a status reply (action/advice code) from the carrier.

SSRs follow the IATA PADIS/PSCRM standard format and four-letter code set (e.g., WCHR wheelchair, VGML vegetarian meal, UMNR unaccompanied minor, DOCS for passport/Secure Flight data). Because an SSR is action-oriented, it is transmitted to and acknowledged by each affected carrier, distinguishing it from purely informational messaging. SSRs are central to accessibility (PRM) handling, regulatory data transmission, and ancillary service requests.

**한국어 / Korean** — **특별 서비스 요청(SSR)** — SSR(Special Service Request, 특별 서비스 요청)은 휠체어, 특별 기내식, 비동반 소아 등 항공사로부터 조치가 필요한 특별 서비스를 요청하거나 통보하기 위해, 또는 Secure Flight 승객 정보와 같은 데이터를 전달하기 위해 PNR에 사용되는 표준화된 코드 메시지 요소다. 각 SSR은 4자리 IATA 코드를 사용하며 일반적으로 항공사로부터 상태 응답(action/advice 코드)을 받는다.

SSR은 IATA PADIS/PSCRM 표준 형식과 4자리 코드 체계(예: WCHR 휠체어, VGML 채식 기내식, UMNR 비동반 소아, DOCS 여권/Secure Flight 데이터)를 따른다. SSR은 조치 지향적이므로 영향을 받는 각 항공사에 전송되어 확인되며, 이는 순수 정보성 메시지와 구별되는 점이다. SSR은 접근성(PRM) 처리, 규제 데이터 전송, 부가 서비스 요청에 핵심적이다.

**Aliases:** `Special Service Request`, `Special Service Requirement`

# Related
- [OSI](/air/air-ops/osi.md) — related
- [PNR](/air/air-ops/pnr.md) — related
- [PRM](/common/customer/prm.md) — related
- [Secure Flight](/common/customer/secure-flight.md) — related
- [Ancillary Service](/air/air-ticket/ancillary-service.md) — related

# Distinctions
- **SSR** vs [OSI](/air/air-ops/osi.md) — An SSR is an action-required, coded request to a carrier that expects a status reply, whereas an OSI is purely informational and requires no carrier action or response.

# Citations
[1] IATA — Passenger Services Conference Resolutions Manual (PSCRM)
[2] IATA — PADIS EDIFACT/XML Message Standards
