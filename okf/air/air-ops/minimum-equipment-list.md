---
type: Document
title: Minimum Equipment List
description: 'A Minimum Equipment List (MEL) is an operator-specific document, approved by the civil aviation authority, that identifies items of aircraft equipment or systems that may be inoperative at the time of dispatch while still allowing the aircraft to be operated safely, subject to defined conditions, operational limitations, and maintenance procedures. The MEL is derived from the aircraft manufacturer''s Master Minimum Equipment List (MMEL) and customized to each operator''s fleet configuration, routes, and maintenance capabilities.'
tags:
  - air-ops
  - active
  - ICAO
timestamp: '2026-07-22T00:00:00Z'
id: minimum-equipment-list
vertical: air
category: air-ops
conceptType: document
status: active
abbreviation: MEL
term_ko: '최소 장비 목록(MEL, Minimum Equipment List)'
definition_ko: 'MEL(Minimum Equipment List, 최소 장비 목록)은 민간 항공 당국이 승인한 운항사 전용 문서로, 항공기의 특정 장비나 시스템이 불가동 상태여도 정해진 조건·운항 제한·정비 절차를 준수하면 항공기를 안전하게 운항할 수 있다고 허용하는 항목을 명시한다. MEL은 항공기 제조사의 MMEL(Master Minimum Equipment List)에서 파생되어 각 운항사의 기단 구성, 노선, 정비 역량에 맞게 맞춤화된다.'
longDef: 'Without an MEL, any inoperative equipment would ground the aircraft (AOG) until repaired, creating severe operational disruption. The MEL system allows manageable defects to be deferred to a later maintenance opportunity while compensating measures — crew awareness notes (Category A/B/C/D dispatch intervals, O-items for crew action, M-items for maintenance action) — mitigate the associated risk. ICAO Annex 6 Part I requires that operators of large aeroplanes in commercial air transport hold an approved MEL. Each MEL item specifies: the dispatch interval (A = within 1 flight, B = within 3 days, C = within 10 days, D = within 120 days), whether maintenance action (M) or crew operational procedure (O) is required, and any route or environment restrictions. The MMEL (Master MEL) is published by the Type Certificate holder (the manufacturer) and approved by the certifying authority; operators apply to their national authority (FAA, EASA, Transport Canada, CAAC, etc.) to convert the MMEL into their operator-specific MEL, which may be more, but never less, restrictive. When an aircraft is dispatched on the MEL, the defect is entered in the aircraft technical log (ATL) with a deferred item sticker; the MEL dispatch interval clock starts at that point. An MEL dispatch does not affect the aircraft''s Certificate of Airworthiness (CofA); however, if the MEL interval expires before repair, the aircraft becomes unairworthy and must be grounded. Understanding the MEL is essential for airline operations control (AOC) staff, maintenance control, and crew when addressing IROPS — a delayed aircraft may be dispatched under MEL rather than awaiting full repair, thereby reducing downstream schedule disruption.'
longDef_ko: 'MEL 없이는 불가동 장비가 발생할 때마다 수리 완료 시까지 항공기를 결항(AOG) 시켜야 하며, 이는 심각한 운항 차질을 유발한다. MEL 시스템은 관리 가능한 결함을 이후의 정비 기회로 연기하되, 보상 조치(승무원 인식 사항 노트, A/B/C/D 카테고리별 운항 허용 기간, 승무원 조치 항목(O-item), 정비 조치 항목(M-item))로 관련 위험을 완화한다. ICAO Annex 6 Part I은 상업 항공 운송에 대형 항공기를 운항하는 운항사가 승인된 MEL을 보유할 것을 요구한다. 각 MEL 항목은 운항 허용 기간(A=1회 비행 내, B=3일 내, C=10일 내, D=120일 내), 정비 조치(M) 또는 승무원 운항 절차(O) 필요 여부, 모든 노선 또는 환경 제한 사항을 명시한다. MMEL(마스터 MEL)은 형식 증명 보유자(제조사)가 발행하고 인증 당국이 승인한다. 운항사는 국가 당국(FAA, EASA, 캐나다 교통부, CAAC 등)에 MMEL을 운항사 특정 MEL로 전환하도록 신청하며, 이 MEL은 MMEL보다 제한적일 수 있으나 완화될 수는 없다. IROPS 상황에서 MEL을 이해하는 것은 항공사 운항 통제(AOC) 직원, 정비 관제, 승무원에게 필수적이다. 지연 항공기를 완전 수리 대신 MEL 조건으로 운항함으로써 하류 스케줄 혼란을 줄일 수 있기 때문이다.'
standardBody: ICAO
aliases:
  - MEL
  - Minimum Equipment List
  - MMEL
  - Master Minimum Equipment List
  - Dispatch Deviation Guide
relationships:
  - type: related
    targetTerm: AOG
  - type: related
    targetTerm: IROPS
  - type: related
    targetTerm: Weight and Balance
  - type: related
    targetTerm: Deadhead Flight
distinctions:
  - targetTerm: AOG
    explanation: 'An AOG (Aircraft on Ground) condition means the aircraft is unairworthy and cannot operate any revenue flight without repair; a Minimum Equipment List dispatch means the aircraft is permitted to fly with one or more known inoperative items because the MEL provides approved procedures that compensate for the deficiency, avoiding a full AOG and reducing delay.'
    explanation_ko: 'AOG(기재 결항) 상태는 항공기가 수리 없이 어떤 수익 비행도 운항할 수 없는 비감항 상태를 의미하고, MEL 운항은 MEL이 결함을 보완하는 승인된 절차를 제공하기 때문에 하나 이상의 알려진 불가동 항목이 있어도 항공기가 비행할 수 있음을 의미하며, 완전한 AOG를 피하고 지연을 줄인다.'
  - targetTerm: IROPS
    explanation: 'IROPS (Irregular Operations) describes the entire class of disruptions — weather, technical, ATC, crewing — that cause flights to deviate from plan; the MEL is one specific tool used within IROPS recovery to determine whether a technically deficient aircraft can still operate, thereby avoiding additional delays while maintaining safety standards.'
    explanation_ko: 'IROPS(비정규 운항)는 날씨·기술·ATC·승무원 등으로 인해 항공편이 계획에서 벗어나는 모든 혼란의 범주를 나타내고, MEL은 IROPS 복구 내에서 기술적 결함이 있는 항공기가 여전히 운항 가능한지를 결정하는 데 사용되는 특정 도구로, 안전 기준을 유지하면서 추가 지연을 방지한다.'
sources:
  - name: 'Annex 6 to the Convention on International Civil Aviation — Operation of Aircraft, Part I: International Commercial Air Transport — Aeroplanes'
    org: ICAO
    version: '12th Edition, 2018'
    section: 'Chapter 6, Section 6.1.3 — Minimum Equipment List'
    url: 'https://store.icao.int/products/annex-6-operation-of-aircraft-part-i-international-commercial-air-transport-aeroplanes'
    tier: standard-body
  - name: 'Advisory Circular AC 120-79B — Master Minimum Equipment List (MMEL) Development'
    org: FAA
    version: 'AC 120-79B (2016)'
    section: ''
    url: 'https://rgl.faa.gov/Regulatory_and_Guidance_Library/rgAdvisoryCircular.nsf/0/5f5f20a61cb5b5d5862580c90068d85e/$FILE/AC%20120-79B.pdf'
    tier: regulator-guidance
  - name: 'AMC and GM to Part-CAT — CAT.IDE.A.105 Minimum Equipment List'
    org: EASA
    version: ''
    section: 'CAT.IDE.A.105'
    url: 'https://www.easa.europa.eu/en/document-library/easy-access-rules/easy-access-rules-air-operations-regulation-eu-no-9652012'
    tier: regulator-guidance
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="4" width="28" height="38" rx="3"/><polyline points="17,14 20,17 27,10"/><line x1="30" y1="14" x2="36" y2="14"/><polyline points="17,24 20,27 27,20"/><line x1="30" y1="24" x2="36" y2="24"/><polyline points="17,34 20,37 27,30"/><line x1="30" y1="34" x2="36" y2="34"/></svg>
---

> A Minimum Equipment List (MEL) is an operator-specific document, approved by the civil aviation authority, that identifies items of aircraft equipment or systems that may be inoperative at the time of dispatch while still allowing the aircraft to be operated safely, subject to defined conditions, operational limitations, and maintenance procedures. The MEL is derived from the aircraft manufacturer's Master Minimum Equipment List (MMEL) and customized to each operator's fleet configuration, routes, and maintenance capabilities.

Without an MEL, any inoperative equipment would ground the aircraft (AOG) until repaired, creating severe operational disruption. The MEL system allows manageable defects to be deferred to a later maintenance opportunity while compensating measures — crew awareness notes (Category A/B/C/D dispatch intervals, O-items for crew action, M-items for maintenance action) — mitigate the associated risk. ICAO Annex 6 Part I requires that operators of large aeroplanes in commercial air transport hold an approved MEL. Each MEL item specifies: the dispatch interval (A = within 1 flight, B = within 3 days, C = within 10 days, D = within 120 days), whether maintenance action (M) or crew operational procedure (O) is required, and any route or environment restrictions. The MMEL (Master MEL) is published by the Type Certificate holder (the manufacturer) and approved by the certifying authority; operators apply to their national authority (FAA, EASA, Transport Canada, CAAC, etc.) to convert the MMEL into their operator-specific MEL, which may be more, but never less, restrictive. When an aircraft is dispatched on the MEL, the defect is entered in the aircraft technical log (ATL) with a deferred item sticker; the MEL dispatch interval clock starts at that point. An MEL dispatch does not affect the aircraft's Certificate of Airworthiness (CofA); however, if the MEL interval expires before repair, the aircraft becomes unairworthy and must be grounded. Understanding the MEL is essential for airline operations control (AOC) staff, maintenance control, and crew when addressing IROPS — a delayed aircraft may be dispatched under MEL rather than awaiting full repair, thereby reducing downstream schedule disruption.

**한국어 / Korean** — **최소 장비 목록(MEL, Minimum Equipment List)** — MEL(Minimum Equipment List, 최소 장비 목록)은 민간 항공 당국이 승인한 운항사 전용 문서로, 항공기의 특정 장비나 시스템이 불가동 상태여도 정해진 조건·운항 제한·정비 절차를 준수하면 항공기를 안전하게 운항할 수 있다고 허용하는 항목을 명시한다. MEL은 항공기 제조사의 MMEL(Master Minimum Equipment List)에서 파생되어 각 운항사의 기단 구성, 노선, 정비 역량에 맞게 맞춤화된다.

MEL이 없다면 불가동 장비가 발생할 때마다 수리 완료 시까지 항공기를 결항시켜야 하며, 이는 심각한 운항 차질을 유발한다. MEL 시스템은 관리 가능한 결함을 연기하고 보상 조치(A/B/C/D 카테고리별 운항 허용 기간, O-item/M-item)로 위험을 완화한다. ICAO Annex 6 Part I은 상업 항공 운송에 대형 항공기를 운항하는 운항사에게 승인된 MEL 보유를 요구한다. IROPS 상황에서 MEL을 이해하는 것은 AOC 직원, 정비 관제, 승무원에게 필수적이다.

**Aliases:** `MEL`, `MMEL`, `Master Minimum Equipment List`, `Dispatch Deviation Guide`

# Related
- [AOG](/air/air-ops/aog.md) — related
- [IROPS](/air/air-partner/irops.md) — related
- [Weight and Balance](/air/air-ops/weight-and-balance.md) — related
- [Deadhead Flight](/air/air-ops/deadhead-flight.md) — related

# Distinctions
- **Minimum Equipment List** vs [AOG](/air/air-ops/aog.md) — An AOG (Aircraft on Ground) condition means the aircraft is unairworthy and cannot operate any revenue flight without repair; a Minimum Equipment List dispatch means the aircraft is permitted to fly with one or more known inoperative items because the MEL provides approved procedures that compensate for the deficiency, avoiding a full AOG and reducing delay.
- **Minimum Equipment List** vs [IROPS](/air/air-partner/irops.md) — IROPS (Irregular Operations) describes the entire class of disruptions — weather, technical, ATC, crewing — that cause flights to deviate from plan; the MEL is one specific tool used within IROPS recovery to determine whether a technically deficient aircraft can still operate, thereby avoiding additional delays while maintaining safety standards.

# Citations
[1] [ICAO — Annex 6 to the Convention on International Civil Aviation — Operation of Aircraft, Part I: International Commercial Air Transport — Aeroplanes — 12th Edition, 2018 — Chapter 6, Section 6.1.3 — Minimum Equipment List](https://store.icao.int/products/annex-6-operation-of-aircraft-part-i-international-commercial-air-transport-aeroplanes)
[2] [FAA — Advisory Circular AC 120-79B — Master Minimum Equipment List (MMEL) Development — AC 120-79B (2016)](https://rgl.faa.gov/Regulatory_and_Guidance_Library/rgAdvisoryCircular.nsf/0/5f5f20a61cb5b5d5862580c90068d85e/$FILE/AC%20120-79B.pdf)
[3] [EASA — AMC and GM to Part-CAT — CAT.IDE.A.105 Minimum Equipment List — CAT.IDE.A.105](https://www.easa.europa.eu/en/document-library/easy-access-rules/easy-access-rules-air-operations-regulation-eu-no-9652012)
