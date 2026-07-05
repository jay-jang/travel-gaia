---
type: Role
title: Train Operating Company
description: 'A Train Operating Company (TOC) is a private company that holds a licence or franchise to operate passenger rail services on national rail infrastructure. TOCs are responsible for timetabling, staffing, customer service, and ticketing, while the infrastructure (track, signals, stations) is typically owned and maintained by a separate infrastructure manager. The model is central to the privatised and franchised rail markets of Great Britain and several other European countries.'
tags:
  - rail
  - active
timestamp: '2026-07-05T00:00:00Z'
id: train-operating-company
vertical: ground
category: rail
conceptType: role
status: active
abbreviation: TOC
term_ko: '철도 운영사(TOC, Train Operating Company)'
definition_ko: '철도 운영사(TOC, Train Operating Company)는 국가 철도 인프라에서 여객 철도 서비스를 운영할 면허 또는 프랜차이즈를 보유한 민간 회사다. TOC는 시간표 작성, 인력 배치, 고객 서비스, 발권 등을 담당하는 반면, 인프라(선로, 신호, 역)는 별도의 인프라 관리자가 소유·유지한다. 이 모델은 영국 및 일부 유럽 국가의 민영화·프랜차이즈 철도 시장의 핵심 구조다.'
longDef: 'In Great Britain the term TOC designates companies operating services under the National Rail brand, regulated by the Office of Rail and Road (ORR), which issues the operating licence. Traditionally, most TOCs held time-limited franchises let by the Department for Transport (DfT), under which the TOC receives a mix of fare revenue and public subsidy (or pays a premium to the government) in exchange for meeting specified service levels. A small number of open-access operators hold licences to run supplementary services on specific routes outside the franchise model. The Rail Delivery Group (RDG) coordinates the TOCs, owns the National Rail brand, and operates interoperable ticketing. The 2021 Williams–Shapps Rail Review proposed replacing the franchise model with National Rail Contracts (NRCs), under which operators act as management contractors with the revenue risk held by government — a transition that has been ongoing. Beyond the UK, the EU railway liberalisation packages mandate separation of infrastructure management from train operation and open the network to licensed passenger operators, making the TOC concept broadly applicable across European markets. In the OSDM standard and rail distribution APIs, the TOC is typically identified by its RICS code (UIC company code).'
longDef_ko: '영국에서 TOC는 운영 면허를 부여하는 철도도로청(ORR)의 규제 하에 National Rail 브랜드로 서비스를 운영하는 회사를 가리킨다. 전통적으로 대부분의 TOC는 교통부(DfT)가 발주하는 기간제 프랜차이즈를 보유하며, 지정된 서비스 수준 충족 대가로 운임 수입과 정부 보조금(또는 프리미엄 납부)을 혼합으로 수령한다. 소수의 오픈액세스 운영사는 프랜차이즈 모델 밖에서 특정 노선에 보완 서비스를 운영할 면허를 보유한다. Rail Delivery Group(RDG)은 TOC를 조율하고, National Rail 브랜드를 소유하며, 상호운용 발권 체계를 운영한다. 2021년 Williams–Shapps 철도 검토는 프랜차이즈 모델을 수입 리스크를 정부가 부담하는 관리 계약(NRC) 방식으로 대체할 것을 제안했으며, 이 전환이 진행 중이다. 영국 밖에서는 EU 철도 자유화 패키지가 인프라 관리와 열차 운영의 분리를 의무화하고 면허 운영사에 네트워크를 개방함으로써 TOC 개념이 유럽 전역에 광범위하게 적용된다. OSDM 표준 및 철도 유통 API에서 TOC는 일반적으로 RICS 코드(UIC 회사 코드)로 식별된다.'
standardBody: Office of Rail and Road
aliases:
  - Train Operating Company
  - TOC
  - Rail Operator
  - Passenger Train Operator
  - Franchised Operator
  - Open-Access Operator
relationships:
  - type: related
    targetTerm: OSDM
  - type: related
    targetTerm: Rail Passenger Rights Regulation (EU) 2021/782
  - type: related
    targetTerm: RICS Code (Company Code)
  - type: related
    targetTerm: Through-Ticketing
distinctions:
  - targetTerm: RICS Code (Company Code)
    explanation: 'A TOC is the operating company entity holding the franchise or licence to run train services; the RICS code (UIC company code) is the standardised numeric identifier assigned to that company for use in rail distribution and interoperability systems.'
    explanation_ko: 'TOC는 열차 서비스 운영 프랜차이즈 또는 면허를 보유한 운영 회사 주체이고, RICS 코드(UIC 회사 코드)는 철도 유통 및 상호운용 시스템에서 사용하기 위해 해당 회사에 부여되는 표준화된 숫자 식별자이다.'
  - targetTerm: OSDM
    explanation: 'OSDM is the open API and data model standard for rail distribution; a TOC is the type of company that typically acts as a supply-side participant in OSDM-based distribution, providing offers, managing bookings, and fulfilling tickets.'
    explanation_ko: 'OSDM은 철도 유통을 위한 개방형 API 및 데이터 모델 표준이고, TOC는 OSDM 기반 유통에서 공급 측 참여자로서 오퍼를 제공하고 예약을 관리하며 티켓을 발권하는 형태의 회사 유형이다.'
sources:
  - name: Train Operating Companies — Who we work with
    org: Office of Rail and Road (ORR)
    version: ''
    section: ''
    url: 'https://www.orr.gov.uk/about/who-we-work-with/industry/train-operating-companies'
    tier: regulator-guidance
  - name: A Quick Guide to the Railways
    org: UK Parliament — House of Commons Library
    version: ''
    section: ''
    url: 'https://researchbriefings.files.parliament.uk/documents/SN04128/SN04128.pdf'
    tier: regulator-guidance
  - name: Train operating company
    org: Wikipedia
    version: ''
    section: ''
    url: 'https://en.wikipedia.org/wiki/Train_operating_company'
    tier: secondary
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="14" width="28" height="22" rx="4"/><path d="M10 26h28"/><circle cx="17" cy="38" r="3"/><circle cx="31" cy="38" r="3"/><path d="M14 38H10"/><path d="M34 38h4"/><rect x="16" y="18" width="6" height="6" rx="1"/><rect x="26" y="18" width="6" height="6" rx="1"/></svg>
---

> A Train Operating Company (TOC) is a private company licensed or franchised to operate passenger rail services on national rail infrastructure. TOCs manage timetabling, staffing, customer service, and ticketing; infrastructure is owned and maintained by a separate infrastructure manager.

In Great Britain, TOCs operate under the National Rail brand and are regulated by the Office of Rail and Road (ORR), which issues operating licences. Most TOCs traditionally held time-limited franchises let by the Department for Transport (DfT), receiving a mix of fare revenue and subsidy in exchange for meeting specified service levels. Open-access operators hold licences to run supplementary services on selected routes outside the franchise model. The Rail Delivery Group (RDG) coordinates TOCs, owns the National Rail brand, and operates the common interoperable ticketing system.

The EU railway liberalisation packages mandate separation of infrastructure management from train operation and open networks to licensed passenger operators — making the TOC concept applicable broadly across European markets. In rail distribution systems and the OSDM standard, a TOC is typically identified by its RICS code (UIC company code).

**한국어 / Korean** — **철도 운영사(TOC, Train Operating Company)** — 국가 철도 인프라에서 여객 철도 서비스를 운영할 면허 또는 프랜차이즈를 보유한 민간 회사. TOC는 시간표·인력·고객 서비스·발권을 담당하며, 인프라는 별도 인프라 관리자가 소유·유지한다. 영국의 민영화 철도 시장 핵심 구조이며 EU 철도 자유화 패키지에 의해 유럽 전역으로 확장된 개념이다.

**Aliases:** `Train Operating Company`, `TOC`, `Rail Operator`, `Passenger Train Operator`, `Franchised Operator`, `Open-Access Operator`

# Related
- [OSDM](/ground/rail/osdm.md) — related
- [Rail Passenger Rights Regulation (EU) 2021/782](/ground/rail/rail-passenger-rights-regulation-eu-2021-782.md) — related
- [RICS Code (Company Code)](/ground/rail/rics-code-company-code.md) — related
- [Through-Ticketing](/ground/rail/through-ticketing.md) — related

# Distinctions
- **Train Operating Company (TOC)** vs [RICS Code (Company Code)](/ground/rail/rics-code-company-code.md) — A TOC is the operating company entity; the RICS code is the standardised numeric identifier assigned to that company for rail distribution and interoperability.
- **Train Operating Company (TOC)** vs [OSDM](/ground/rail/osdm.md) — OSDM is the open API and data model standard for rail distribution; a TOC is the supply-side participant that provides offers, manages bookings, and fulfils tickets within OSDM-based distribution.

# Citations
[1] [Office of Rail and Road (ORR) — Train Operating Companies](https://www.orr.gov.uk/about/who-we-work-with/industry/train-operating-companies)
[2] [UK Parliament House of Commons Library — A Quick Guide to the Railways](https://researchbriefings.files.parliament.uk/documents/SN04128/SN04128.pdf)
[3] [Wikipedia — Train operating company](https://en.wikipedia.org/wiki/Train_operating_company)
