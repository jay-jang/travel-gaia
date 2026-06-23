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
providerTerms:
  - provider: Amadeus
    term: SR element (SR <code> <airline>)
    context: 'Amadeus enters an SSR as an SR element with a four-letter SSR code (e.g. SR WCHR) addressed to a carrier, which is queued back when the carrier responds.'
    context_ko: 'Amadeus는 SSR을 carrier 대상의 4자리 SSR code를 가진 SR element(예: SR WCHR)로 입력하며, 항공사 응답 시 PNR이 queue로 회송된다.'
    relationship: same
  - provider: Sabre
    term: 3<SSR code> entry (e.g. 3WCHR / SSR formats)
    context: 'Sabre adds SSRs via the 3-prefixed special-service entries carrying the IATA SSR code, carrier and passenger association.'
    context_ko: 'Sabre는 IATA SSR code, carrier, 승객 연결을 담은 3-접두 special-service 엔트리로 SSR을 추가한다.'
    relationship: same
relationships:
  - type: contrasts
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
  - targetTerm: Frequent Flyer Number
    explanation: The Frequent Flyer Number is the data value; the FQTV SSR is the message element that carries it into a PNR.
    explanation_ko: 'FFN은 데이터 값이고, FQTV SSR은 그 값을 PNR에 전달하는 메시지 요소이다.'
  - targetTerm: Meal Code
    explanation: 'SSR is the general mechanism for special service requests in a PNR; a meal code is a specific 4-letter value (e.g., VGML) carried within a meal SSR.'
    explanation_ko: 'SSR은 PNR 내 특별 서비스 요청을 위한 일반적 수단이고, 기내식 코드는 식사 SSR에 담기는 구체적 4자리 값(예: VGML)이다.'
  - targetTerm: PRM
    explanation: 'PRM is the traveler category/need; SSR codes (e.g. WCHR, BLND) are the standardized messages used to request the corresponding assistance.'
    explanation_ko: 'PRM은 여행자 범주/요구 사항이고, SSR 코드(예: WCHR, BLND)는 해당 지원을 요청하는 데 사용되는 표준화된 메시지이다.'
  - targetTerm: Traveler Preference
    explanation: 'A traveler preference is stored profile data describing a wish, while an SSR is the actionable message that conveys a specific request to a carrier within a booking; preferences are often the source that drives creation of SSRs but are not themselves a transmitted request until applied.'
    explanation_ko: 'Traveler preference는 바람을 기술한 저장 프로필 데이터이고, SSR은 예약 내에서 특정 요청을 항공사에 전달하는 실행 가능한 메시지다. 선호는 흔히 SSR 생성을 유발하는 원천이지만, 적용되기 전까지는 그 자체가 전송된 요청은 아니다.'
sources:
  - name: Passenger Services Conference Resolutions Manual (PSCRM)
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/'
  - name: PADIS EDIFACT/XML Message Standards
    org: IATA
    version: ''
    section: ''
    url: 'https://standards.atlassian.net/wiki/spaces/AIDM/pages/748453892/PADIS+-+Passenger+and+Airport+Data+Exchange+Standards+Edifact+Implementation+Guide+v17.1+Reservation+Messages'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M24 7 L29 18 L41 19.5 L32 28 L34.5 40 L24 34 L13.5 40 L16 28 L7 19.5 L19 18 Z"/></svg>
---

> A Special Service Request (SSR) is a standardized, coded message element in a PNR used to request or notify an action-required special service from a carrier, such as a wheelchair, special meal, unaccompanied minor, or to convey data like Secure Flight passenger details. Each SSR uses a four-letter IATA code and typically receives a status reply (action/advice code) from the carrier.

SSRs follow the IATA PADIS/PSCRM standard format and four-letter code set (e.g., WCHR wheelchair, VGML vegetarian meal, UMNR unaccompanied minor, DOCS for passport/Secure Flight data). Because an SSR is action-oriented, it is transmitted to and acknowledged by each affected carrier, distinguishing it from purely informational messaging. SSRs are central to accessibility (PRM) handling, regulatory data transmission, and ancillary service requests.

**한국어 / Korean** — **특별 서비스 요청(SSR)** — SSR(Special Service Request, 특별 서비스 요청)은 휠체어, 특별 기내식, 비동반 소아 등 항공사로부터 조치가 필요한 특별 서비스를 요청하거나 통보하기 위해, 또는 Secure Flight 승객 정보와 같은 데이터를 전달하기 위해 PNR에 사용되는 표준화된 코드 메시지 요소다. 각 SSR은 4자리 IATA 코드를 사용하며 일반적으로 항공사로부터 상태 응답(action/advice 코드)을 받는다.

SSR은 IATA PADIS/PSCRM 표준 형식과 4자리 코드 체계(예: WCHR 휠체어, VGML 채식 기내식, UMNR 비동반 소아, DOCS 여권/Secure Flight 데이터)를 따른다. SSR은 조치 지향적이므로 영향을 받는 각 항공사에 전송되어 확인되며, 이는 순수 정보성 메시지와 구별되는 점이다. SSR은 접근성(PRM) 처리, 규제 데이터 전송, 부가 서비스 요청에 핵심적이다.

**Aliases:** `Special Service Request`, `Special Service Requirement`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Amadeus | `SR element (SR <code> <airline>)` | same | Amadeus enters an SSR as an SR element with a four-letter SSR code (e.g. SR WCHR) addressed to a carrier, which is queued back when the carrier responds. |
| Sabre | `3<SSR code> entry (e.g. 3WCHR / SSR formats)` | same | Sabre adds SSRs via the 3-prefixed special-service entries carrying the IATA SSR code, carrier and passenger association. |

# Related
- [OSI](/air/air-ops/osi.md) — contrasts
- [PNR](/air/air-ops/pnr.md) — related
- [PRM](/common/customer/prm.md) — related
- [Secure Flight](/common/customer/secure-flight.md) — related
- [Ancillary Service](/air/air-ticket/ancillary-service.md) — related

# Distinctions
- **SSR** vs [OSI](/air/air-ops/osi.md) — An SSR is an action-required, coded request to a carrier that expects a status reply, whereas an OSI is purely informational and requires no carrier action or response.
- **SSR** vs [Frequent Flyer Number](/common/customer/frequent-flyer-number.md) — The Frequent Flyer Number is the data value; the FQTV SSR is the message element that carries it into a PNR.
- **SSR** vs [Meal Code](/common/codes/meal-code.md) — SSR is the general mechanism for special service requests in a PNR; a meal code is a specific 4-letter value (e.g., VGML) carried within a meal SSR.
- **SSR** vs [PRM](/common/customer/prm.md) — PRM is the traveler category/need; SSR codes (e.g. WCHR, BLND) are the standardized messages used to request the corresponding assistance.
- **SSR** vs [Traveler Preference](/common/customer/traveler-preference.md) — A traveler preference is stored profile data describing a wish, while an SSR is the actionable message that conveys a specific request to a carrier within a booking; preferences are often the source that drives creation of SSRs but are not themselves a transmitted request until applied.

# Citations
[1] [IATA — Passenger Services Conference Resolutions Manual (PSCRM)](https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/)
[2] [IATA — PADIS EDIFACT/XML Message Standards](https://standards.atlassian.net/wiki/spaces/AIDM/pages/748453892/PADIS+-+Passenger+and+Airport+Data+Exchange+Standards+Edifact+Implementation+Guide+v17.1+Reservation+Messages)
