---
type: Document
title: Property Irregularity Report
description: 'The standardized report an airline or ground handler raises, with a unique reference number, when checked baggage is found to be lost, delayed, or damaged. Filed at the airport baggage service desk, it is the mandatory first step that documents the mishandling and opens any subsequent Montreal Convention baggage claim.'
tags:
  - disruption
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: property-irregularity-report
vertical: common
category: disruption
conceptType: document
status: active
abbreviation: PIR
term_ko: '수하물 사고 보고서 (Property Irregularity Report, PIR)'
definition_ko: '위탁 수하물이 분실·지연·파손된 것으로 확인되었을 때 항공사 또는 지상조업사가 고유 참조번호와 함께 작성하는 표준화된 보고서다. 공항 수하물 서비스 데스크에서 작성되며, 처리 오류를 기록하고 이후의 Montreal Convention 수하물 청구를 개시하는 필수 첫 단계다.'
longDef: 'The PIR (often quoted to the passenger as a ''PIR number'' or file reference, typically a station-code-plus-alphanumeric string) captures bag-tag numbers, a baggage description, flight and contact details, and feeds the tracing process. The reference is commonly the key into SITA''s WorldTracer system, where the airline registers the file to begin global matching of the missing bag against found-bag records. Filing a PIR promptly is important because MC99 imposes short written-complaint deadlines (in practice 7 days for damaged and 21 days for delayed baggage from receipt/availability). Without a PIR, a carrier will generally not progress a delayed- or damaged-baggage claim.'
longDef_ko: 'PIR(승객에게는 흔히 ''PIR 번호'' 또는 파일 참조번호로, 보통 station code와 영숫자 조합으로 안내됨)은 수하물 태그 번호, 수하물 설명, 항공편 및 연락처 정보를 담아 추적 절차에 입력된다. 이 참조번호는 흔히 SITA WorldTracer 시스템의 키로 사용되며, 항공사는 여기에 파일을 등록하여 분실 수하물을 발견된 수하물 기록과 전 세계적으로 매칭하기 시작한다. MC99가 짧은 서면 통지 기한(실무상 파손은 수령 후 7일, 지연은 수령 가능 시점부터 21일)을 부과하므로 PIR을 신속히 작성하는 것이 중요하다. PIR 없이는 항공사가 일반적으로 지연·파손 수하물 청구를 진행하지 않는다.'
standardBody: IATA
aliases:
  - Property Irregularity Report
  - PIR
  - PIR Number
  - Baggage Irregularity Report
providerTerms:
  - provider: SITA
    term: WorldTracer File / PIR
    context: A PIR is registered as a file in SITA's WorldTracer to drive global tracing and matching of the mishandled bag.
    context_ko: PIR은 SITA WorldTracer에 파일로 등록되어 처리 오류 수하물의 전 세계 추적·매칭을 구동한다.
    relationship: related
relationships:
  - type: related
    targetTerm: WorldTracer
  - type: related
    targetTerm: Montreal Convention 1999
  - type: related
    targetTerm: IROPS
distinctions:
  - targetTerm: WorldTracer
    explanation: The PIR is the report/reference documenting a baggage irregularity; WorldTracer is the SITA system that registers PIR files and performs the global search-and-match for the missing bag.
    explanation_ko: 'PIR은 수하물 이상을 기록하는 보고서·참조번호이고, WorldTracer는 PIR 파일을 등록하고 분실 수하물에 대한 전 세계 검색·매칭을 수행하는 SITA 시스템이다.'
  - targetTerm: Baggage Delay
    explanation: 'A Property Irregularity Report (PIR) is the carrier''s mishandled-baggage record filed at the airport; it is the documentation a traveler uses to substantiate a baggage delay insurance claim, not the insurance benefit itself.'
    explanation_ko: 'Property Irregularity Report(PIR)는 공항에서 작성하는 운송인의 수하물 사고 기록으로, baggage delay 보험 클레임을 입증하는 증빙 서류이지 보장 자체가 아니다.'
sources:
  - org: IATA
    name: Baggage Standards / RP 1743e Baggage Irregularity Report (Passenger Services Conference Resolutions Manual)
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/'
  - org: SITA
    name: WorldTracer baggage management
    version: ''
    section: ''
    url: 'https://www.sita.aero/solutions/sita-at-airports/sita-baggage-management/worldtracer/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14 16h16a2 2 0 0 1 2 2v22H12V18a2 2 0 0 1 2-2z"/><path d="M18 16v-3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3"/><path d="M17 24h10M17 30h7"/><circle cx="34" cy="30" r="6"/><path d="M34 27v3M34 33v.5"/></svg>
---

> The standardized report an airline or ground handler raises, with a unique reference number, when checked baggage is found to be lost, delayed, or damaged. Filed at the airport baggage service desk, it is the mandatory first step that documents the mishandling and opens any subsequent Montreal Convention baggage claim.

The PIR (often quoted to the passenger as a 'PIR number' or file reference, typically a station-code-plus-alphanumeric string) captures bag-tag numbers, a baggage description, flight and contact details, and feeds the tracing process. The reference is commonly the key into SITA's WorldTracer system, where the airline registers the file to begin global matching of the missing bag against found-bag records. Filing a PIR promptly is important because MC99 imposes short written-complaint deadlines (in practice 7 days for damaged and 21 days for delayed baggage from receipt/availability). Without a PIR, a carrier will generally not progress a delayed- or damaged-baggage claim.

**한국어 / Korean** — **수하물 사고 보고서 (Property Irregularity Report, PIR)** — 위탁 수하물이 분실·지연·파손된 것으로 확인되었을 때 항공사 또는 지상조업사가 고유 참조번호와 함께 작성하는 표준화된 보고서다. 공항 수하물 서비스 데스크에서 작성되며, 처리 오류를 기록하고 이후의 Montreal Convention 수하물 청구를 개시하는 필수 첫 단계다.

PIR(승객에게는 흔히 'PIR 번호' 또는 파일 참조번호로, 보통 station code와 영숫자 조합으로 안내됨)은 수하물 태그 번호, 수하물 설명, 항공편 및 연락처 정보를 담아 추적 절차에 입력된다. 이 참조번호는 흔히 SITA WorldTracer 시스템의 키로 사용되며, 항공사는 여기에 파일을 등록하여 분실 수하물을 발견된 수하물 기록과 전 세계적으로 매칭하기 시작한다. MC99가 짧은 서면 통지 기한(실무상 파손은 수령 후 7일, 지연은 수령 가능 시점부터 21일)을 부과하므로 PIR을 신속히 작성하는 것이 중요하다. PIR 없이는 항공사가 일반적으로 지연·파손 수하물 청구를 진행하지 않는다.

**Aliases:** `Property Irregularity Report`, `PIR`, `PIR Number`, `Baggage Irregularity Report`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| SITA | `WorldTracer File / PIR` | related | A PIR is registered as a file in SITA's WorldTracer to drive global tracing and matching of the mishandled bag. |

# Related
- [WorldTracer](/common/disruption/worldtracer.md) — related
- [Montreal Convention 1999](/common/disruption/montreal-convention-1999.md) — related
- [IROPS](/air/air-partner/irops.md) — related

# Distinctions
- **Property Irregularity Report** vs [WorldTracer](/common/disruption/worldtracer.md) — The PIR is the report/reference documenting a baggage irregularity; WorldTracer is the SITA system that registers PIR files and performs the global search-and-match for the missing bag.
- **Property Irregularity Report** vs [Baggage Delay](/common/insurance/baggage-delay.md) — A Property Irregularity Report (PIR) is the carrier's mishandled-baggage record filed at the airport; it is the documentation a traveler uses to substantiate a baggage delay insurance claim, not the insurance benefit itself.

# Citations
[1] [IATA — Baggage Standards / RP 1743e Baggage Irregularity Report (Passenger Services Conference Resolutions Manual)](https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/)
[2] [SITA — WorldTracer baggage management](https://www.sita.aero/solutions/sita-at-airports/sita-baggage-management/worldtracer/)
