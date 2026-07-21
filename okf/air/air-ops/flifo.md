---
type: Business Term
title: FLIFO
description: 'FLIFO (Flight Information) is the airline industry term for real-time operational flight status data, covering the current and projected state of a specific flight — including scheduled vs. actual departure and arrival times, gate assignments, delay codes, diversion, and cancellation status. GDS systems surface this data via dedicated FLIFO display commands, and SITA operates the FLIFO Airport Management System (AMS) as a central flight-information exchange hub using the IATA AIDX XML standard.'
tags:
  - air-ops
  - active
  - IATA
timestamp: '2026-07-21T00:00:00Z'
id: flifo
vertical: air
category: air-ops
conceptType: business-term
status: active
abbreviation: FLIFO
term_ko: 항공편 운항 정보(FLIFO)
definition_ko: 'FLIFO(Flight Information)는 특정 항공편의 현재 및 예상 운항 상태를 나타내는 항공 업계 실시간 운항 정보 용어로, 계획 대비 실제 출발·도착 시각, 게이트 배정, 지연 코드, 회항, 결항 상태를 포함한다. GDS 시스템은 전용 FLIFO 조회 명령어로 이 데이터를 제공하며, SITA는 IATA AIDX XML 표준을 사용하는 FLIFO Airport Management System(AMS)을 중앙 항공편 정보 교환 허브로 운영한다.'
longDef: 'FLIFO data is sourced from multiple inputs — the operating airline, the departure airport, en-route ATC, and the arrival airport — and covers a window typically spanning 52 hours before scheduled departure through 24 hours after scheduled arrival. Key data elements include: estimated time of departure (ETD), estimated time of arrival (ETA), actual times (ATD/ATA), gate/stand assignments, delay codes, diversion airport (indicated by OVR/RTN codes), and cancellation flags (CX/FX for full cancellation, LX for a leg cancellation). In GDS cryptic-entry environments, "FLIFO" is a standard display command — for example, in Amadeus the entry FI followed by flight details retrieves FLIFO. Operationally the data feeds departure control systems (DCS), gate allocation, baggage systems, and passenger notification. SITA''s FLIFO AMS Community is the industry-standard data-sharing platform through which airports and airlines publish flight information in AIDX (Aviation Information Data Exchange) format; AIDX is the IATA/ACI-endorsed XML schema for structured flight data exchange and supersedes earlier IATA Type B telex-based operational messages (such as MVT movement messages) for modern real-time integrations.'
longDef_ko: 'FLIFO 데이터는 운항 항공사, 출발 공항, 항로 ATC, 도착 공항 등 여러 소스로부터 수집되며, 일반적으로 계획 출발 52시간 전부터 계획 도착 24시간 후까지의 범위를 커버한다. 주요 데이터 요소에는 예상 출발 시각(ETD), 예상 도착 시각(ETA), 실제 출발/도착 시각(ATD/ATA), 게이트/스탠드 배정, 지연 코드, 회항 공항(OVR/RTN 코드), 결항 플래그(CX/FX: 전편 결항, LX: 구간 결항)가 포함된다. GDS 암호형 입력 환경에서 "FLIFO"는 표준 조회 명령어로, 예를 들어 Amadeus에서는 FI 입력 후 항공편 정보를 입력하면 FLIFO를 조회할 수 있다. 운영 측면에서 이 데이터는 출발관리시스템(DCS)·게이트 배분·수하물 시스템·승객 알림에 연동된다. SITA의 FLIFO AMS Community는 공항과 항공사가 AIDX(Aviation Information Data Exchange) 형식으로 항공편 정보를 공유하는 업계 표준 데이터 공유 플랫폼이다. AIDX는 IATA·ACI가 승인한 구조적 항공편 데이터 교환 XML 스키마로, 현대적 실시간 통합에서 이전의 IATA Type B 텔레타이프 기반 운항 메시지(MVT 등)를 대체한다.'
aliases:
  - Flight Information
  - Flight Info
  - FLIFO Data
providerTerms:
  - provider: Amadeus
    term: FI (FLIFO display)
    context: In Amadeus cryptic entry, the FI command retrieves real-time flight information (FLIFO) for a specified flight, displaying operational status including actual and estimated times, gate, and delay codes.
    context_ko: Amadeus 암호형 입력에서 FI 명령어를 사용하면 지정 항공편의 실시간 운항 정보(FLIFO)를 조회할 수 있으며, 실제/예상 시각·게이트·지연 코드를 포함한 운항 상태가 표시된다.
    relationship: same
  - provider: SITA
    term: FLIFO AMS (Airport Management System)
    context: SITA operates the FLIFO Airport Management System as a centralised community platform enabling airports and airlines to publish and subscribe to standardised flight information using the AIDX XML format.
    context_ko: SITA는 FLIFO Airport Management System을 중앙화된 커뮤니티 플랫폼으로 운영하여, 공항과 항공사가 AIDX XML 형식으로 표준화된 항공편 정보를 발행·구독할 수 있게 한다.
    relationship: same
relationships:
  - type: related
    targetTerm: AIRIMP
  - type: related
    targetTerm: Type B Message
  - type: related
    targetTerm: Departure Control System (DCS)
  - type: related
    targetTerm: IATA Delay Codes
distinctions:
  - targetTerm: AIRIMP
    explanation: 'AIRIMP defines the format and procedural rules for passenger reservations interline messages (PNR, SSR, availability) between airlines and GDS systems; FLIFO carries operational flight status data (actual/estimated times, gate, delay, diversion) from airlines and airports to distribution and operations systems. The two serve different data domains: commercial reservation versus operational movement.'
    explanation_ko: 'AIRIMP은 항공사와 GDS 시스템 간 여객 예약 interline 메시지(PNR, SSR, 가용성)의 형식과 절차 규칙을 정의하는 반면, FLIFO는 항공사와 공항에서 유통·운영 시스템으로 전달되는 운항 상태 데이터(실제/예상 시각, 게이트, 지연, 회항)를 전송한다. 두 표준은 서로 다른 데이터 도메인을 담당한다: 상업적 예약 vs. 운항 이동(movement).'
  - targetTerm: Departure Control System (DCS)
    explanation: 'A DCS manages the operational check-in, boarding, and load-control processes at departure; FLIFO is the upstream flight status data feed that the DCS consumes to trigger notifications, update displays, and synchronise gate processes. FLIFO is the information source; DCS is the downstream operational system.'
    explanation_ko: 'DCS는 출발 시 체크인·탑승·탑재 관리 운영 프로세스를 처리하고, FLIFO는 DCS가 알림 발송·화면 갱신·게이트 프로세스 동기화에 활용하는 상위 항공편 상태 데이터 피드다. FLIFO는 정보 소스이고, DCS는 하위 운영 시스템이다.'
sources:
  - name: FLIFO Overview
    org: SITA (Société Internationale de Télécommunications Aéronautiques)
    version: ''
    section: ''
    url: 'https://www.developer.aero/api-catalog/flifo-overview'
    tier: vendor-doc
  - name: AIDX (Aviation Information Data Exchange) Overview
    org: SITA / IATA / ACI
    version: ''
    section: ''
    url: 'https://www.developer.aero/api-catalog/aidx-overview'
    tier: association
  - name: IATA Type B Messaging Whitepaper v2.5
    org: IATA
    version: '2.5 (May 2025)'
    section: ''
    url: 'https://www.iata.org/contentassets/badbfd2d36a74f12b021c9dd899ecbad/type-b-messaging-whitepaper-v2.5.pdf'
    tier: association
icon: '<svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M8 24h6l4-10 6 20 4-14 3 4h9"/><circle cx="38" cy="14" r="5"/><path d="M36 12l4 4M40 12l-4 4"/></svg>'
---

> FLIFO (Flight Information) is the airline industry term for real-time operational flight status data, covering the current and projected state of a specific flight — including scheduled vs. actual departure and arrival times, gate assignments, delay codes, diversion, and cancellation status. GDS systems surface this data via dedicated FLIFO display commands, and SITA operates the FLIFO Airport Management System (AMS) as a central flight-information exchange hub using the IATA AIDX XML standard.

FLIFO data is sourced from multiple inputs — the operating airline, the departure airport, en-route ATC, and the arrival airport — and covers a window typically spanning 52 hours before scheduled departure through 24 hours after scheduled arrival. Key data elements include estimated time of departure (ETD), estimated time of arrival (ETA), actual times (ATD/ATA), gate/stand assignments, delay codes, diversion airport indicators, and cancellation flags. In GDS cryptic-entry environments, "FLIFO" is a standard display command — in Amadeus the FI entry retrieves it. Operationally, the data feeds departure control systems (DCS), gate allocation, baggage systems, and passenger notification. SITA's FLIFO Airport Management System (AMS) is the industry-standard sharing platform through which airports and airlines publish flight information in AIDX (Aviation Information Data Exchange) format; AIDX is the IATA/ACI-endorsed XML schema for structured flight data exchange, and supersedes earlier IATA Type B telex-based operational messages (MVT movement messages) for modern real-time integrations.

**한국어 / Korean** — **항공편 운항 정보(FLIFO)** — FLIFO(Flight Information)는 특정 항공편의 현재 및 예상 운항 상태를 나타내는 항공 업계 실시간 운항 정보 용어로, 계획 대비 실제 출발·도착 시각, 게이트 배정, 지연 코드, 회항, 결항 상태를 포함한다. GDS 시스템은 전용 FLIFO 조회 명령어로 이 데이터를 제공하며, SITA는 IATA AIDX XML 표준을 사용하는 FLIFO Airport Management System(AMS)을 중앙 항공편 정보 교환 허브로 운영한다.

FLIFO 데이터는 운항 항공사, 출발 공항, 항로 ATC, 도착 공항 등 여러 소스로부터 수집되며, 일반적으로 계획 출발 52시간 전부터 계획 도착 24시간 후까지의 범위를 커버한다. 주요 데이터 요소에는 ETD(예상 출발 시각), ETA(예상 도착 시각), ATD/ATA(실제 출발/도착 시각), 게이트/스탠드 배정, 지연 코드, 회항 공항, 결항 플래그가 포함된다. GDS 암호형 입력 환경에서 Amadeus FI 명령어 등으로 조회한다. SITA FLIFO AMS는 AIDX XML 형식으로 공항과 항공사가 항공편 정보를 공유하는 업계 표준 플랫폼으로, 현대적 실시간 통합에서 IATA Type B 텔레타이프 기반 운항 메시지를 대체한다.

**Aliases:** `Flight Information`, `Flight Info`, `FLIFO Data`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Amadeus | `FI (FLIFO display)` | same | In Amadeus cryptic entry, the FI command retrieves real-time flight information (FLIFO) for a specified flight, displaying operational status including actual and estimated times, gate, and delay codes. |
| SITA | `FLIFO AMS (Airport Management System)` | same | SITA operates the FLIFO Airport Management System as a centralised community platform enabling airports and airlines to publish and subscribe to standardised flight information using the AIDX XML format. |

# Related
- [AIRIMP](/air/air-ops/airimp.md) — related
- [Type B Message](/air/air-ops/type-b-message.md) — related
- [Departure Control System (DCS)](/air/air-ops/departure-control-system-dcs.md) — related
- [IATA Delay Codes](/common/codes/iata-delay-codes.md) — related

# Distinctions
- **FLIFO** vs [AIRIMP](/air/air-ops/airimp.md) — AIRIMP defines the format and procedural rules for passenger reservations interline messages (PNR, SSR, availability) between airlines and GDS systems; FLIFO carries operational flight status data (actual/estimated times, gate, delay, diversion) from airlines and airports to distribution and operations systems. The two serve different data domains: commercial reservation versus operational movement.
- **FLIFO** vs [Departure Control System (DCS)](/air/air-ops/departure-control-system-dcs.md) — A DCS manages the operational check-in, boarding, and load-control processes at departure; FLIFO is the upstream flight status data feed that the DCS consumes to trigger notifications, update displays, and synchronise gate processes. FLIFO is the information source; DCS is the downstream operational system.

# Citations
[1] [SITA — FLIFO Overview](https://www.developer.aero/api-catalog/flifo-overview)
[2] [SITA / IATA / ACI — AIDX (Aviation Information Data Exchange) Overview](https://www.developer.aero/api-catalog/aidx-overview)
[3] [IATA — Type B Messaging Whitepaper v2.5](https://www.iata.org/contentassets/badbfd2d36a74f12b021c9dd899ecbad/type-b-messaging-whitepaper-v2.5.pdf)
