---
type: Standard Term
title: OSI
description: 'Other Service Information (OSI) is an informational free-text or semi-structured message element in a PNR sent to one or all carriers to communicate information that does not require any carrier action or reply, such as a passenger contact note or VIP advisory. Unlike an SSR, it carries no action/status code.'
tags:
  - air-ops
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: osi
vertical: air
category: air-ops
conceptType: standard-term
status: active
abbreviation: OSI
term_ko: 기타 서비스 정보(OSI)
definition_ko: 'OSI(Other Service Information, 기타 서비스 정보)는 승객 연락처 메모나 VIP 안내처럼 항공사의 조치나 응답이 필요 없는 정보를 전달하기 위해 한 곳 또는 모든 항공사에 전송되는, PNR 내의 정보성 자유 텍스트 또는 반정형 메시지 요소다. SSR과 달리 action/status 코드를 포함하지 않는다.'
longDef: 'OSI elements convey advisory information to the carrier (for example, frequent-flyer notes, special handling courtesies, or operational remarks) and are addressed either to a specific airline or to all carriers in the itinerary. Because OSI is non-actionable, the carrier is not expected to confirm or respond, which is the key operational difference from an SSR.'
longDef_ko: 'OSI 요소는 항공사에 안내성 정보(예: 상용고객 메모, 특별 응대 사항, 운영상 비고)를 전달하며, 특정 항공사 또는 여정 내 모든 항공사를 수신 대상으로 지정한다. OSI는 조치를 요하지 않으므로 항공사가 확인하거나 응답할 것으로 기대되지 않으며, 이것이 SSR과의 핵심적인 운영상 차이점이다.'
standardBody: IATA
aliases:
  - Other Service Information
  - Other Supplementary Information
providerTerms:
  - provider: Amadeus
    term: OS element (OS <airline> <text>)
    context: 'Amadeus creates an OSI as an OS element addressed to a carrier code (or YY for all), carrying up to 68 characters of free text requiring no carrier reply.'
    context_ko: 'Amadeus는 OSI를 carrier code(또는 전체 대상 YY)로 지정한 OS element로 생성하며, 항공사 회신이 불필요한 최대 68자 free text를 담는다.'
    relationship: same
  - provider: Sabre
    term: 3OSI entry (3OSI <airline> <text>)
    context: Sabre adds informational OSI data with the 3OSI command followed by the carrier code and message text (e.g. 3OSI SQ VIP).
    context_ko: 'Sabre는 3OSI 명령 뒤에 carrier code와 메시지 텍스트를 붙여 informational OSI 데이터를 추가한다(예: 3OSI SQ VIP).'
    relationship: same
relationships:
  - type: contrasts
    targetTerm: SSR
  - type: related
    targetTerm: PNR
distinctions:
  - targetTerm: SSR
    explanation: 'OSI is purely informational with no required carrier action or reply, whereas an SSR is an action request that expects a confirming status code from the carrier.'
    explanation_ko: 'OSI는 항공사의 조치나 응답이 필요 없는 순수 정보성인 반면, SSR은 항공사로부터 확인 상태 코드를 기대하는 조치 요청이다.'
  - targetTerm: PRM
    explanation: 'PRM assistance requires action via an actionable SSR; OSI carries purely informational, non-actionable remarks.'
    explanation_ko: 'PRM 지원은 조치가 필요한 SSR을 통한 처리가 요구되고, OSI는 순수하게 정보성이며 조치가 필요 없는 비고를 담는다.'
  - targetTerm: Received From Element (RF)
    explanation: The Received From element is a mandatory internal PNR field recording who authorized a change; an OSI is an optional informational message sent to carriers and is unrelated to change accountability.
    explanation_ko: 'Received From 요소는 누가 변경을 승인했는지 기록하는 필수 내부 PNR 필드이고, OSI는 항공사에 보내는 선택적 정보성 메시지로 변경 책임과는 무관하다.'
sources:
  - name: Passenger Services Conference Resolutions Manual (PSCRM)
    org: IATA
    version: 46th Edition (2026)
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/'
    tier: association
    verifyQuote: 'Significant Changes and Amendments to the 46th edition (2026) of the IATA Passenger Services Conference Resolution Manual include:'
    verified: true
  - name: PADIS EDIFACT/XML Message Standards
    org: IATA
    version: v17.1
    section: ''
    url: 'https://standards.atlassian.net/wiki/spaces/AIDM/pages/748453892/PADIS+-+Passenger+and+Airport+Data+Exchange+Standards+Edifact+Implementation+Guide+v17.1+Reservation+Messages'
    tier: standard-body
    verifyQuote: PADIS - Passenger and Airport Data Exchange Standards Edifact Implementation Guide (v17.1) Reservation Messages; Latest version is v17.1 (no longer maintained by IATA) since move to AIDM
    verified: true
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="24" r="17"/><line x1="24" y1="22" x2="24" y2="33"/><circle cx="24" cy="16" r="0.5" fill="currentColor"/></svg>
---

> Other Service Information (OSI) is an informational free-text or semi-structured message element in a PNR sent to one or all carriers to communicate information that does not require any carrier action or reply, such as a passenger contact note or VIP advisory. Unlike an SSR, it carries no action/status code.

OSI elements convey advisory information to the carrier (for example, frequent-flyer notes, special handling courtesies, or operational remarks) and are addressed either to a specific airline or to all carriers in the itinerary. Because OSI is non-actionable, the carrier is not expected to confirm or respond, which is the key operational difference from an SSR.

**한국어 / Korean** — **기타 서비스 정보(OSI)** — OSI(Other Service Information, 기타 서비스 정보)는 승객 연락처 메모나 VIP 안내처럼 항공사의 조치나 응답이 필요 없는 정보를 전달하기 위해 한 곳 또는 모든 항공사에 전송되는, PNR 내의 정보성 자유 텍스트 또는 반정형 메시지 요소다. SSR과 달리 action/status 코드를 포함하지 않는다.

OSI 요소는 항공사에 안내성 정보(예: 상용고객 메모, 특별 응대 사항, 운영상 비고)를 전달하며, 특정 항공사 또는 여정 내 모든 항공사를 수신 대상으로 지정한다. OSI는 조치를 요하지 않으므로 항공사가 확인하거나 응답할 것으로 기대되지 않으며, 이것이 SSR과의 핵심적인 운영상 차이점이다.

**Aliases:** `Other Service Information`, `Other Supplementary Information`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Amadeus | `OS element (OS <airline> <text>)` | same | Amadeus creates an OSI as an OS element addressed to a carrier code (or YY for all), carrying up to 68 characters of free text requiring no carrier reply. |
| Sabre | `3OSI entry (3OSI <airline> <text>)` | same | Sabre adds informational OSI data with the 3OSI command followed by the carrier code and message text (e.g. 3OSI SQ VIP). |

# Related
- [SSR](/air/air-ops/ssr.md) — contrasts
- [PNR](/air/air-ops/pnr.md) — related

# Distinctions
- **OSI** vs [SSR](/air/air-ops/ssr.md) — OSI is purely informational with no required carrier action or reply, whereas an SSR is an action request that expects a confirming status code from the carrier.
- **OSI** vs [PRM](/common/customer/prm.md) — PRM assistance requires action via an actionable SSR; OSI carries purely informational, non-actionable remarks.
- **OSI** vs [Received From Element (RF)](/air/air-ops/received-from-element-rf.md) — The Received From element is a mandatory internal PNR field recording who authorized a change; an OSI is an optional informational message sent to carriers and is unrelated to change accountability.

# Citations
[1] [IATA — Passenger Services Conference Resolutions Manual (PSCRM) — 46th Edition (2026)](https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/)
[2] [IATA — PADIS EDIFACT/XML Message Standards — v17.1](https://standards.atlassian.net/wiki/spaces/AIDM/pages/748453892/PADIS+-+Passenger+and+Airport+Data+Exchange+Standards+Edifact+Implementation+Guide+v17.1+Reservation+Messages)
