---
type: Document
title: Ship Manifest
description: 'The official document listing all persons — passengers and crew — aboard a vessel for a given voyage, required by maritime regulations (IMO FAL Convention, SOLAS) and submitted to port authorities at each port of call for immigration, customs, and safety accountability. Passenger entries typically include full name, nationality, date of birth, travel document type and number, and embarkation/disembarkation port.'
tags:
  - cruise
  - active
  - IMO
timestamp: '2026-10-05T00:00:00Z'
id: ship-manifest
vertical: cruise
category: cruise
conceptType: document
status: active
term_ko: 선박 매니페스트(Ship Manifest)
definition_ko: '특정 항해에 승선한 모든 사람(여객 및 선원)을 열거한 공식 문서. IMO FAL 협약 및 SOLAS 등 해사 규정에 따라 요구되며, 출입국·세관·안전 책임 관리를 위해 각 기항지 항구 당국에 제출된다. 여객 항목에는 통상 성명, 국적, 생년월일, 여행 서류 종류 및 번호, 승하선 항구가 포함된다.'
longDef: 'The ship manifest fulfils multiple legal and operational purposes. Under the IMO Facilitation (FAL) Convention (FAL Form 6 — Passenger List and FAL Form 5 — Crew List), carriers are required to provide standardized passenger and crew declarations to port state authorities to expedite clearance. Under SOLAS Chapter III, carriers must also record sufficient data to account for every person on board for search-and-rescue purposes. In cruise operations, the manifest integrates with the passenger reservation system: guest bookings are reconciled against the manifest at embarkation to confirm headcounts and ensure all documents are in order. The manifest is also the basis for the gangway list maintained by security to track which guests are aboard at any given time. Flag-state and port-state inspectors may request the manifest during port-state control inspections. In the US, the Coast Guard and CBP require passenger manifests (APIS advance submissions) 60 minutes before departure from a US port and upon arrival.'
longDef_ko: '선박 매니페스트는 여러 법적·운영적 목적을 수행한다. IMO 편의(FAL) 협약에 따라(FAL Form 6 — 여객 명단 및 FAL Form 5 — 선원 명단), 운송인은 통관 절차를 신속화하기 위해 표준화된 여객 및 선원 신고서를 항만 국가 당국에 제출해야 한다. SOLAS 3장에 따라 운송인은 수색·구조 목적으로 선상의 모든 인원을 파악하기에 충분한 데이터를 기록해야 한다. 크루즈 운항에서는 매니페스트가 여객 예약 시스템과 통합되어 승선 시 게스트 예약과 매니페스트를 대조하여 인원 수를 확인하고 모든 서류가 갖춰졌는지 확인한다. 매니페스트는 또한 보안 담당자가 어떤 게스트가 현재 선상에 있는지 추적하기 위해 유지하는 갱웨이 리스트의 기반이 된다. 기국 및 항만국 점검관은 항만국 통제 점검 시 매니페스트를 요청할 수 있다. 미국에서는 해안경비대와 CBP가 미국 항구 출항 60분 전 및 입항 시 여객 매니페스트(APIS 사전 제출)를 요구한다.'
standardBody: IMO
aliases:
  - Passenger Manifest
  - Crew Manifest
  - IMO FAL Form 6
  - Passenger List
  - Gangway List
providerTerms:
  - provider: Royal Caribbean / Carnival / NCL
    term: Manifest
    context: 'Major cruise lines use "manifest" for the sailing-day summary of all embarked guests checked against reservations; the document is submitted electronically to port authorities and CBP (US sailings).'
    context_ko: '주요 크루즈 선사는 출항일에 예약과 대조하여 승선한 모든 게스트를 요약한 문서를 "manifest"라고 부르며, 이를 전자적으로 항만 당국 및 CBP(미국 항해의 경우)에 제출한다.'
    relationship: same
relationships:
  - type: related
    targetTerm: Disembarkation
  - type: related
    targetTerm: Voyage Number
  - type: related
    targetTerm: Tender Port
distinctions:
  - targetTerm: Voyage Number
    explanation: 'A voyage number identifies a specific sailing (ship + departure date + itinerary) as a business and operational reference; the ship manifest is the official regulatory document listing the persons who actually sailed on that voyage.'
    explanation_ko: '항해 번호는 특정 항해(선박 + 출항일 + 여정)를 식별하는 비즈니스·운영 참조 번호이고, 선박 매니페스트는 그 항해에 실제로 탑승한 인원을 열거하는 공식 규제 문서이다.'
  - targetTerm: Disembarkation
    explanation: 'Disembarkation is the process of guests leaving the ship at a port or final destination; the ship manifest is the document reconciled at both embarkation and disembarkation to confirm that all persons who boarded have also disembarked — a critical safety and immigration requirement.'
    explanation_ko: '하선은 게스트가 기항지나 최종 목적지에서 선박을 떠나는 과정이고, 선박 매니페스트는 승선과 하선 모두에서 대조되어 탑승한 모든 인원이 하선했는지 확인하는 문서로, 안전 및 출입국 관리의 핵심 요건이다.'
sources:
  - name: 'IMO Convention on Facilitation of International Maritime Traffic (FAL Convention) — FAL Form 6 (Passenger List)'
    org: IMO
    version: 'As amended (FAL 43, 2019)'
    section: 'FAL Form 6; Standard 2.4'
    url: 'https://www.imo.org/en/OurWork/Facilitation/Pages/ConventionFAL.aspx'
    tier: regulation
  - name: 'SOLAS (International Convention for the Safety of Life at Sea), Chapter III — Life-Saving Appliances and Arrangements'
    org: IMO
    version: 'Consolidated Edition 2020'
    section: 'Regulation 19 — Emergency training and drills'
    url: 'https://www.imo.org/en/About/Conventions/Pages/International-Convention-for-the-Safety-of-Life-at-Sea-(SOLAS),-1974.aspx'
    tier: regulation
  - name: IMO Passenger List (FAL Form 6) — Port of Rotterdam sample
    org: Port of Rotterdam
    version: ''
    section: ''
    url: 'https://www.portofrotterdam.com/sites/default/files/2021-06/IMO-Passenger-List.pdf'
    tier: secondary
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="6" width="28" height="36" rx="2"/><line x1="15" y1="14" x2="33" y2="14"/><line x1="15" y1="19" x2="33" y2="19"/><line x1="15" y1="24" x2="26" y2="24"/><line x1="15" y1="29" x2="26" y2="29"/><circle cx="32" cy="28" r="4"/><path d="M35 31 L38 34"/></svg>
---

> The official document listing all persons — passengers and crew — aboard a vessel for a given voyage, required by maritime regulations (IMO FAL Convention, SOLAS) and submitted to port authorities at each port of call for immigration, customs, and safety accountability.

The ship manifest fulfils multiple legal and operational purposes. Under the IMO Facilitation (FAL) Convention (FAL Form 6 — Passenger List and FAL Form 5 — Crew List), carriers are required to provide standardized passenger and crew declarations to port state authorities to expedite clearance. Under SOLAS Chapter III, carriers must also record sufficient data to account for every person on board for search-and-rescue purposes. In cruise operations, the manifest integrates with the passenger reservation system: guest bookings are reconciled against the manifest at embarkation to confirm headcounts and ensure all documents are in order. The manifest is also the basis for the gangway list maintained by security to track which guests are aboard at any given time. In the US, the Coast Guard and CBP require passenger manifests (APIS advance submissions) 60 minutes before departure from a US port and upon arrival.

**한국어 / Korean** — **선박 매니페스트(Ship Manifest)** — 특정 항해에 승선한 모든 사람(여객 및 선원)을 열거한 공식 문서. IMO FAL 협약 및 SOLAS 등 해사 규정에 따라 요구되며, 출입국·세관·안전 책임 관리를 위해 각 기항지 항구 당국에 제출된다.

선박 매니페스트는 여러 법적·운영적 목적을 수행한다. IMO FAL 협약에 따라(FAL Form 6 — 여객 명단 및 FAL Form 5 — 선원 명단), 운송인은 통관 절차를 신속화하기 위해 표준화된 여객 및 선원 신고서를 항만 국가 당국에 제출해야 한다. 크루즈 운항에서는 매니페스트가 여객 예약 시스템과 통합되어 승선 시 게스트 예약과 매니페스트를 대조하여 인원 수를 확인하고 모든 서류가 갖춰졌는지 확인한다. 미국에서는 해안경비대와 CBP가 미국 항구 출항 60분 전 및 입항 시 여객 매니페스트(APIS 사전 제출)를 요구한다.

**Aliases:** `Passenger Manifest`, `Crew Manifest`, `IMO FAL Form 6`, `Passenger List`, `Gangway List`

# Related
- [Disembarkation](/cruise/cruise/disembarkation.md) — related
- [Voyage Number](/cruise/cruise/voyage-number.md) — related
- [Tender Port](/cruise/cruise/tender-port.md) — related

# Distinctions
- **Ship Manifest** vs [Voyage Number](/cruise/cruise/voyage-number.md) — A voyage number identifies a specific sailing (ship + departure date + itinerary) as a business and operational reference; the ship manifest is the official regulatory document listing the persons who actually sailed on that voyage.
- **Ship Manifest** vs [Disembarkation](/cruise/cruise/disembarkation.md) — Disembarkation is the process of guests leaving the ship at a port or final destination; the ship manifest is the document reconciled at both embarkation and disembarkation to confirm that all persons who boarded have also disembarked — a critical safety and immigration requirement.

# Citations
[1] [IMO — Convention on Facilitation of International Maritime Traffic (FAL Convention)](https://www.imo.org/en/OurWork/Facilitation/Pages/ConventionFAL.aspx)
[2] [IMO — SOLAS (International Convention for the Safety of Life at Sea), 1974](https://www.imo.org/en/About/Conventions/Pages/International-Convention-for-the-Safety-of-Life-at-Sea-(SOLAS),-1974.aspx)
[3] [Port of Rotterdam — IMO Passenger List (FAL Form 6)](https://www.portofrotterdam.com/sites/default/files/2021-06/IMO-Passenger-List.pdf)
