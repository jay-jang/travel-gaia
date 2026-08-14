---
type: Business Term
title: Train Path
description: 'A train path (also called a train slot or path allocation) is a specific combination of rail infrastructure capacity — defined by route, direction, stopping pattern, and timetabled times — allocated to a train operating company or open access operator by the infrastructure manager for a given timetable period. Train paths are the fundamental unit of capacity allocation in vertically separated rail markets and are subject to allocation rules set by EU Directive 2012/34/EU and national access frameworks.'
tags:
  - rail
  - active
  - ERA
timestamp: '2026-08-14T00:00:00Z'
id: train-path
vertical: ground
category: rail
conceptType: business-term
status: active
term_ko: 열차 경로(Train Path)
definition_ko: '열차 경로(Train Path, 열차 슬롯)는 기간 시설 관리자(Infrastructure Manager)가 특정 시간표 기간 동안 철도 운영사 또는 오픈 액세스 운영사에 할당하는, 노선·방향·정차 패턴·시간표상 시각으로 정의된 철도 기간 시설 용량의 단위다. 열차 경로는 수직 분리 철도 시장에서 용량 할당의 기본 단위이며, EU Directive 2012/34/EU와 각국 접근 프레임워크가 규정하는 할당 규칙의 적용을 받는다.'
longDef: 'In vertically separated rail markets (where infrastructure and operations are legally or structurally unbundled), the infrastructure manager (IM) publishes available capacity in a Network Statement (issued annually, typically 12 months before the timetable year) and invites train operating companies (TOCs), open access operators, and freight operators to apply for path requests. Where multiple operators request the same path, the IM applies a defined conflict-resolution framework (coordination process, and if unresolved, referral to a regulatory body). Successful applicants receive Framework Agreements or Annual Timetable paths that entitle them to operate a specific train service between specified points at specified times. The train path is the basis for the Track Access Charge billed by the IM: charges are typically structured as a minimum access package charge (reflecting variable costs of train operations on the network) plus optional supplements (station facilities, traction current, etc.). TAP TSI (Technical Specification for Interoperability in the field of Telematics Applications for Passenger Services) defines the data standards for exchanging path request and allocation data between IMs and operators across national borders, enabling through-ticketing and international path coordination. In the UK, Network Rail (the IM) calls the equivalent concept a "train path" and manages requests through the Long-Term Planning Process (LTPP) and the Working Timetable. The EU Single European Railway Area framework enshrined in Directive 2012/34/EU establishes the non-discriminatory access regime under which IMs must allocate paths on transparent, cost-based criteria.'
longDef_ko: '수직 분리 철도 시장(기간 시설과 운영이 법적·구조적으로 분리된 시장)에서는 기간 시설 관리자(IM)가 네트워크 성명서(시간표 연도 보통 12개월 전 연간 발행)에 이용 가능한 용량을 공표하고, 철도 운영사(TOC)·오픈 액세스 운영사·화물 운영사에게 경로 신청을 요청한다. 여러 운영사가 동일한 경로를 신청할 경우, IM은 정해진 갈등 해결 프레임워크(조정 절차, 미해결 시 규제 기관 회부)를 적용한다. 신청에 성공한 사업자는 Framework Agreement 또는 연간 시간표 경로를 부여받아 지정 시각에 지정 구간에서 특정 열차 서비스를 운영할 권리를 얻는다. 열차 경로는 IM이 청구하는 선로 이용료(Track Access Charge)의 기준이 되며, 요금은 통상 최소 접근 패키지 요금(열차 운영의 변동 비용 반영)과 선택적 부가 요금(역 시설·견인 전력 등)으로 구성된다. TAP TSI(승객 서비스 텔레매틱스 응용 분야 상호운용 기술 명세)는 국경을 넘나드는 IM과 운영사 간 경로 신청·할당 데이터 교환 표준을 정의하여 관통 발권과 국제 경로 조정을 가능하게 한다. 영국에서는 기간 시설 관리자인 Network Rail이 동등한 개념을 "train path"로 지칭하며, 장기 계획 절차(LTPP)와 운행 시간표(Working Timetable)를 통해 신청을 관리한다.'
standardBody: ERA
aliases:
  - Train Slot
  - Path Allocation
  - Railway Path
  - Train Service Path
relationships:
  - type: parent
    targetTerm: Infrastructure Manager
  - type: related
    targetTerm: Track Access Charge
  - type: related
    targetTerm: Open Access Operator
  - type: related
    targetTerm: Train Operating Company
  - type: related
    targetTerm: TAP TSI
distinctions:
  - targetTerm: Slot
    explanation: 'An airport slot (or airport coordination slot) is a permission granted by a slot coordinator to an airline to use the full range of airport infrastructure (runway, terminal, gate) at a specific date and time; a train path is allocated by the rail infrastructure manager and defines the specific route, stopping pattern, and timetable times a train service may use across the rail network. Both are capacity allocation mechanisms for scarce transport infrastructure, but airport slots cover single-airport movements while train paths span point-to-point network routes. In aviation, IATA slot guidelines govern allocation; in rail, EU Directive 2012/34/EU governs path allocation.'
    explanation_ko: '공항 슬롯(airport coordination slot)은 슬롯 조정기관이 항공사에 특정 날짜·시각에 공항 기반 시설(활주로·터미널·게이트) 전체를 사용할 권한을 부여하는 것이고, 열차 경로는 철도 기간 시설 관리자가 할당하며 열차 서비스가 철도 네트워크에서 이용할 구체적인 노선·정차 패턴·시간표 시각을 정의한다. 둘 다 희소 운송 기간 시설에 대한 용량 할당 메커니즘이지만, 공항 슬롯은 단일 공항 이동을 대상으로 하고 열차 경로는 네트워크의 출발지-목적지 구간에 걸쳐 적용된다. 항공에서는 IATA 슬롯 가이드라인이, 철도에서는 EU Directive 2012/34/EU가 경로 할당을 규율한다.'
  - targetTerm: Track Access Charge
    explanation: 'The Track Access Charge (TAC) is the fee that a train operator pays to the infrastructure manager for using the rail network; a train path is the allocated slot of network capacity that the TAC is charged against. The path defines what service can run and when; the TAC is the price for that right. Obtaining a path does not guarantee a specific TAC until the minimum access package and any supplements are calculated from the path parameters.'
    explanation_ko: '선로 이용료(TAC)는 열차 운영사가 철도 네트워크 사용에 대해 기간 시설 관리자에게 지불하는 요금이고, 열차 경로는 TAC가 부과되는 근거인 할당된 네트워크 용량 슬롯이다. 경로는 어떤 서비스를 언제 운행할 수 있는지를 정의하고, TAC는 그 권리에 대한 요금이다. 경로를 확보한다고 TAC가 확정되는 것은 아니며, 경로 매개변수로부터 최소 접근 패키지와 부가 요금이 산정된 후 확정된다.'
sources:
  - name: 'Directive 2012/34/EU — Establishing a Single European Railway Area (Train Path Allocation)'
    org: European Parliament and Council
    version: '2012'
    section: 'Chapter IV — Capacity Allocation'
    url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32012L0034'
    tier: regulation
  - name: 'ERA — Technical Document on Train Path Allocation'
    org: European Union Agency for Railways (ERA)
    version: ''
    section: ''
    url: 'https://www.era.europa.eu/domains/infrastructure/rail-network-statements_en'
    tier: regulator-guidance
  - name: 'Network Rail Network Statement — Train Path Requests'
    org: Network Rail (UK)
    version: ''
    section: ''
    url: 'https://www.networkrail.co.uk/industry-and-commercial/network-statement/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="40" x2="42" y2="40"/><line x1="6" y1="32" x2="42" y2="32"/><line x1="13" y1="32" x2="13" y2="40"/><line x1="24" y1="32" x2="24" y2="40"/><line x1="35" y1="32" x2="35" y2="40"/><rect x="10" y="14" width="17" height="16" rx="2"/><line x1="14" y1="30" x2="14" y2="32"/><line x1="23" y1="30" x2="23" y2="32"/></svg>
---

> A train path (also called a train slot or path allocation) is a specific combination of rail infrastructure capacity — defined by route, direction, stopping pattern, and timetabled times — allocated to a train operating company or open access operator by the infrastructure manager for a given timetable period. Train paths are the fundamental unit of capacity allocation in vertically separated rail markets and are subject to allocation rules set by EU Directive 2012/34/EU and national access frameworks.

In vertically separated rail markets (where infrastructure and operations are legally or structurally unbundled), the infrastructure manager (IM) publishes available capacity in a Network Statement (issued annually, typically 12 months before the timetable year) and invites train operating companies (TOCs), open access operators, and freight operators to apply for path requests. Where multiple operators request the same path, the IM applies a defined conflict-resolution framework (coordination process, and if unresolved, referral to a regulatory body). Successful applicants receive Framework Agreements or Annual Timetable paths that entitle them to operate a specific train service between specified points at specified times. The train path is the basis for the Track Access Charge billed by the IM: charges are typically structured as a minimum access package charge (reflecting variable costs of train operations on the network) plus optional supplements (station facilities, traction current, etc.). TAP TSI defines the data standards for exchanging path request and allocation data between IMs and operators across national borders, enabling through-ticketing and international path coordination.

**한국어 / Korean** — **열차 경로(Train Path)** — 열차 경로(Train Path, 열차 슬롯)는 기간 시설 관리자(Infrastructure Manager)가 특정 시간표 기간 동안 철도 운영사 또는 오픈 액세스 운영사에 할당하는, 노선·방향·정차 패턴·시간표상 시각으로 정의된 철도 기간 시설 용량의 단위다.

수직 분리 철도 시장에서 기간 시설 관리자(IM)는 네트워크 성명서에 이용 가능한 용량을 공표하고 운영사의 경로 신청을 받는다. 신청에 성공하면 Framework Agreement 또는 연간 시간표 경로를 부여받아 지정 시각·구간에서 열차를 운행할 권리를 얻는다. 열차 경로는 선로 이용료(Track Access Charge)의 과금 기준이 되며, TAP TSI가 국경 간 경로 데이터 교환 표준을 정의한다.

**Aliases:** `Train Slot`, `Path Allocation`, `Railway Path`, `Train Service Path`

# Related
- [Infrastructure Manager](/ground/rail/infrastructure-manager.md) — parent
- [Track Access Charge](/ground/rail/track-access-charge.md) — related
- [Open Access Operator](/ground/rail/open-access-operator.md) — related
- [Train Operating Company](/ground/rail/train-operating-company.md) — related
- [TAP TSI](/ground/rail/tap-tsi.md) — related

# Distinctions
- **Train Path** vs [Slot](/air/air-partner/slot.md) — An airport slot (or airport coordination slot) is a permission granted by a slot coordinator to an airline to use the full range of airport infrastructure (runway, terminal, gate) at a specific date and time; a train path is allocated by the rail infrastructure manager and defines the specific route, stopping pattern, and timetable times a train service may use across the rail network. Both are capacity allocation mechanisms for scarce transport infrastructure, but airport slots cover single-airport movements while train paths span point-to-point network routes. In aviation, IATA slot guidelines govern allocation; in rail, EU Directive 2012/34/EU governs path allocation.
- **Train Path** vs [Track Access Charge](/ground/rail/track-access-charge.md) — The Track Access Charge (TAC) is the fee that a train operator pays to the infrastructure manager for using the rail network; a train path is the allocated slot of network capacity that the TAC is charged against. The path defines what service can run and when; the TAC is the price for that right.

# Citations
[1] [European Parliament and Council — Directive 2012/34/EU — Establishing a Single European Railway Area (Train Path Allocation)](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32012L0034)
[2] [European Union Agency for Railways (ERA) — ERA — Technical Document on Train Path Allocation](https://www.era.europa.eu/domains/infrastructure/rail-network-statements_en)
[3] [Network Rail (UK) — Network Rail Network Statement — Train Path Requests](https://www.networkrail.co.uk/industry-and-commercial/network-statement/)
