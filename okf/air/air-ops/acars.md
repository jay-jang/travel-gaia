---
type: System
title: ACARS
description: 'ACARS (Aircraft Communications Addressing and Reporting System) is a digital data-link communications system that transmits short messages between an aircraft and ground stations, supporting both Aeronautical Operational Control (AOC) communications from the airline and Air Traffic Control (ATC) data-link services. It is the primary electronic messaging channel for automatic position and operational event reports (OOOI: Out, Off, On, In), weather updates, predeparture clearances, and flight plan modifications between the cockpit and airline operations or ATC ground systems.'
tags:
  - air-ops
  - active
  - ARINC
timestamp: '2026-07-22T00:00:00Z'
id: acars
vertical: air
category: air-ops
conceptType: system
status: active
abbreviation: ACARS
term_ko: '항공기 통신 주소·보고 시스템(ACARS)'
definition_ko: 'ACARS(Aircraft Communications Addressing and Reporting System, 항공기 통신 주소·보고 시스템)는 항공기와 지상국 사이에 짧은 메시지를 전송하는 디지털 데이터링크 통신 시스템으로, 항공사의 항공 운항 통제(AOC) 통신과 항공 교통 관제(ATC) 데이터링크 서비스를 모두 지원한다. 조종석과 항공사 운항 센터 또는 ATC 지상 시스템 간의 자동 위치·운항 이벤트 보고(OOOI: Out·Off·On·In), 기상 업데이트, 출발 전 허가, 비행 계획 수정을 위한 주요 전자 메시지 채널이다.'
longDef: 'ACARS was developed by ARINC (Aeronautical Radio, Incorporated) and first deployed commercially in 1978; the protocol is defined in ARINC Characteristic 618 (Air/Ground Character-Oriented Protocol Specification). The system operates over a combination of VHF radio, SATCOM (via Inmarsat or Iridium), and HF radio. Aircraft automatically generate OOOI reports at each gate event, enabling airline operations centres to monitor fleet positions in real time without voice radio contact. ATC data-link services built on ACARS include PDC (Pre-Departure Clearance), D-ATIS (Digital Automatic Terminal Information Service), and CPDLC (Controller-Pilot Data Link Communications). ACARS messages use a standardised format with a label (message type), a block number, and freetext or structured data payloads; the ground network routes each message using the aircraft''s tail number or registration. In IROPS scenarios, operations control centres use ACARS to send rerouting instructions or hold advisories directly to the flight deck without requiring voice communication. ACARS data also feeds flight information display systems and contributes to the FLIFO (Flight Information) data stream used by GDS and downstream applications. Newer data-link technologies such as VDL Mode 2 and the FANS (Future Air Navigation System) package carry the same AOC and ATC message types over more efficient digital subcarrier radio channels and are gradually supplementing legacy VHF ACARS in busier airspace.'
longDef_ko: 'ACARS는 ARINC(Aeronautical Radio, Incorporated)이 개발하여 1978년 상용 운용을 시작했으며, 프로토콜은 ARINC Characteristic 618(공중-지상 문자 기반 프로토콜 사양)에 정의돼 있다. 이 시스템은 VHF 라디오, SATCOM(Inmarsat 또는 Iridium 경유), HF 라디오를 복합적으로 활용한다. 항공기는 각 게이트 이벤트마다 자동으로 OOOI 보고서를 생성하여, 항공사 운항 센터가 음성 무선 통신 없이도 기단 위치를 실시간으로 모니터링할 수 있다. ACARS를 기반으로 구축된 ATC 데이터링크 서비스로는 PDC(출발 전 허가), D-ATIS(디지털 자동 터미널 정보 서비스), CPDLC(관제사-조종사 데이터링크 통신)가 있다. ACARS 메시지는 레이블(메시지 유형), 블록 번호, 자유 텍스트 또는 구조화된 데이터 페이로드로 구성된 표준화된 형식을 사용하며, 지상 네트워크는 항공기 등록 번호(꼬리 번호)를 사용해 각 메시지를 라우팅한다. IROPS 상황에서는 운항 관제 센터가 음성 통신 없이 ACARS를 통해 재라우팅 지시나 대기 지시를 조종석에 직접 전송한다. ACARS 데이터는 항공편 정보 표시 시스템에도 공급되며 GDS 및 하류 애플리케이션에서 사용하는 FLIFO(항공편 정보) 데이터 스트림에도 기여한다. VDL Mode 2나 FANS(미래 항공 항법 시스템) 패키지와 같은 새로운 데이터링크 기술은 효율적인 디지털 서브캐리어 라디오 채널에서 같은 AOC·ATC 메시지 유형을 전달하며, 혼잡한 공역에서 기존 VHF ACARS를 점진적으로 보완하고 있다.'
standardBody: ARINC/AEEC
aliases:
  - Aircraft Communications Addressing and Reporting System
  - ACARS
  - AOC Data Link
relationships:
  - type: related
    targetTerm: FLIFO
  - type: related
    targetTerm: AOG
  - type: related
    targetTerm: NOTAM
  - type: related
    targetTerm: Departure Control System (DCS)
  - type: related
    targetTerm: IROPS
  - type: related
    targetTerm: Weight and Balance
distinctions:
  - targetTerm: FLIFO
    explanation: 'FLIFO (Flight Information) is the airline industry term for real-time flight status data (delays, gate changes, cancellations) used by GDS, airports, and booking systems to update travelers; ACARS is the underlying data-link communications system whose automatic OOOI event reports and ATC messages are one of the primary sources feeding that flight status data.'
    explanation_ko: 'FLIFO(항공편 정보)는 GDS, 공항, 예약 시스템이 여행객에게 업데이트를 제공하는 실시간 항공편 상태 데이터(지연·게이트 변경·취소)에 대한 항공 업계 용어이고, ACARS는 자동 OOOI 이벤트 보고서와 ATC 메시지가 그 항공편 상태 데이터에 공급되는 주요 원천 중 하나인 기저 데이터링크 통신 시스템이다.'
  - targetTerm: NOTAM
    explanation: 'A NOTAM is a published notice issued by aviation authorities to alert pilots and airlines to temporary conditions or hazards affecting safe flight operations; ACARS is the data-link communications channel through which active NOTAMs (and other aeronautical information) are delivered electronically to the cockpit as D-NOTAM or pre-departure uplink messages, supplementing crew pre-flight briefings.'
    explanation_ko: 'NOTAM은 안전 비행 운항에 영향을 미치는 일시적 상황이나 위험을 조종사와 항공사에 알리기 위해 항공 당국이 발행하는 공고이고, ACARS는 활성 NOTAM(및 기타 항공 정보)이 D-NOTAM 또는 출발 전 업링크 메시지로 조종석에 전자적으로 전달되는 데이터링크 통신 채널로, 승무원 출발 전 브리핑을 보완한다.'
sources:
  - name: 'ARINC Characteristic 618 — Air/Ground Character-Oriented Protocol Specification'
    org: Aeronautical Radio, Incorporated (ARINC) / AEEC
    version: ARINC 618
    section: ''
    url: 'https://standards.aviation-ia.net'
    tier: standard-body
  - name: 'Doc 9694 — Manual of Air Traffic Services Data Link Applications'
    org: ICAO
    version: '1st Edition'
    section: 'Part I — ACARS-based applications'
    url: 'https://www.icao.int/safety/acp/ACAS%20II%20MOPS%20and%20Related%20Documentation/icao_doc9694_part-i.pdf'
    tier: standard-body
  - name: Advisory Circular AC 120-70C — Operational Authorization of Air Traffic Data Link Communications
    org: FAA
    version: AC 120-70C
    section: ''
    url: 'https://rgl.faa.gov/Regulatory_and_Guidance_Library/rgAdvisoryCircular.nsf/0/1f8e50c82c55ffca862582430067cf40/$FILE/AC120-70C.pdf'
    tier: regulator-guidance
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M6 32 L20 18 L28 26 L38 10"/><path d="M38 10 L32 10 M38 10 L38 16"/><path d="M42 30 Q44 26 42 22"/><path d="M42 36 Q48 28 42 20"/><circle cx="6" cy="32" r="2" fill="currentColor"/></svg>
---

> ACARS (Aircraft Communications Addressing and Reporting System) is a digital data-link communications system that transmits short messages between an aircraft and ground stations, supporting both Aeronautical Operational Control (AOC) communications from the airline and Air Traffic Control (ATC) data-link services. It is the primary electronic messaging channel for automatic position and operational event reports (OOOI: Out, Off, On, In), weather updates, predeparture clearances, and flight plan modifications between the cockpit and airline operations or ATC ground systems.

ACARS was developed by ARINC (Aeronautical Radio, Incorporated) and first deployed commercially in 1978; the protocol is defined in ARINC Characteristic 618 (Air/Ground Character-Oriented Protocol Specification). The system operates over a combination of VHF radio, SATCOM (via Inmarsat or Iridium), and HF radio. Aircraft automatically generate OOOI reports at each gate event, enabling airline operations centres to monitor fleet positions in real time without voice radio contact. ATC data-link services built on ACARS include PDC (Pre-Departure Clearance), D-ATIS (Digital Automatic Terminal Information Service), and CPDLC (Controller-Pilot Data Link Communications). ACARS messages use a standardised format with a label (message type), a block number, and freetext or structured data payloads; the ground network routes each message using the aircraft's tail number or registration. In IROPS scenarios, operations control centres use ACARS to send rerouting instructions or hold advisories directly to the flight deck without requiring voice communication. ACARS data also feeds flight information display systems and contributes to the FLIFO (Flight Information) data stream used by GDS and downstream applications. Newer data-link technologies such as VDL Mode 2 and the FANS (Future Air Navigation System) package carry the same AOC and ATC message types over more efficient digital subcarrier radio channels and are gradually supplementing legacy VHF ACARS in busier airspace.

**한국어 / Korean** — **항공기 통신 주소·보고 시스템(ACARS)** — ACARS(Aircraft Communications Addressing and Reporting System, 항공기 통신 주소·보고 시스템)는 항공기와 지상국 사이에 짧은 메시지를 전송하는 디지털 데이터링크 통신 시스템으로, 항공사의 항공 운항 통제(AOC) 통신과 항공 교통 관제(ATC) 데이터링크 서비스를 모두 지원한다. 조종석과 항공사 운항 센터 또는 ATC 지상 시스템 간의 자동 위치·운항 이벤트 보고(OOOI: Out·Off·On·In), 기상 업데이트, 출발 전 허가, 비행 계획 수정을 위한 주요 전자 메시지 채널이다.

ACARS는 ARINC(Aeronautical Radio, Incorporated)이 개발하여 1978년 상용 운용을 시작했으며, 프로토콜은 ARINC Characteristic 618(공중-지상 문자 기반 프로토콜 사양)에 정의돼 있다. 이 시스템은 VHF 라디오, SATCOM(Inmarsat 또는 Iridium 경유), HF 라디오를 복합적으로 활용한다. 항공기는 각 게이트 이벤트마다 자동으로 OOOI 보고서를 생성하여, 항공사 운항 센터가 음성 무선 통신 없이도 기단 위치를 실시간으로 모니터링할 수 있다. ATC 데이터링크 서비스로는 PDC(출발 전 허가), D-ATIS(디지털 자동 터미널 정보 서비스), CPDLC(관제사-조종사 데이터링크 통신)가 있다. ACARS 데이터는 항공편 정보 표시 시스템에도 공급되며 GDS 및 하류 애플리케이션에서 사용하는 FLIFO 데이터 스트림에도 기여한다.

**Aliases:** `Aircraft Communications Addressing and Reporting System`, `AOC Data Link`

# Related
- [FLIFO](/air/air-ops/flifo.md) — related
- [AOG](/air/air-ops/aog.md) — related
- [NOTAM](/air/air-ops/notam.md) — related
- [Departure Control System (DCS)](/air/air-ops/departure-control-system-dcs.md) — related
- [IROPS](/air/air-partner/irops.md) — related
- [Weight and Balance](/air/air-ops/weight-and-balance.md) — related

# Distinctions
- **ACARS** vs [FLIFO](/air/air-ops/flifo.md) — FLIFO (Flight Information) is the airline industry term for real-time flight status data (delays, gate changes, cancellations) used by GDS, airports, and booking systems to update travelers; ACARS is the underlying data-link communications system whose automatic OOOI event reports and ATC messages are one of the primary sources feeding that flight status data.
- **ACARS** vs [NOTAM](/air/air-ops/notam.md) — A NOTAM is a published notice issued by aviation authorities to alert pilots and airlines to temporary conditions or hazards affecting safe flight operations; ACARS is the data-link communications channel through which active NOTAMs (and other aeronautical information) are delivered electronically to the cockpit as D-NOTAM or pre-departure uplink messages, supplementing crew pre-flight briefings.

# Citations
[1] [Aeronautical Radio, Incorporated (ARINC) / AEEC — ARINC Characteristic 618 — Air/Ground Character-Oriented Protocol Specification — ARINC 618](https://standards.aviation-ia.net)
[2] [ICAO — Doc 9694 — Manual of Air Traffic Services Data Link Applications — Part I — ACARS-based applications](https://www.icao.int/safety/acp/ACAS%20II%20MOPS%20and%20Related%20Documentation/icao_doc9694_part-i.pdf)
[3] [FAA — Advisory Circular AC 120-70C — Operational Authorization of Air Traffic Data Link Communications — AC 120-70C](https://rgl.faa.gov/Regulatory_and_Guidance_Library/rgAdvisoryCircular.nsf/0/1f8e50c82c55ffca862582430067cf40/$FILE/AC120-70C.pdf)
