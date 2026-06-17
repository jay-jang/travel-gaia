---
type: Standard Term
title: Received From Element (RF)
description: 'The Received From (RF) element is one of the mandatory PNR elements (the ''R'' in the PRINT set: Phone, Received-from, Itinerary, Name, Ticketing) that records the source authorizing the creation or modification of the booking, such as the passenger or a named agent. It establishes accountability for each change and is captured into the PNR history.'
tags:
  - air-ops
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: received-from-element-rf
category: air-ops
conceptType: standard-term
status: active
abbreviation: RF
term_ko: '접수처 요소(Received From, RF)'
definition_ko: 'Received From(RF, 접수처) 요소는 PNR 필수 요소 중 하나(PRINT 세트의 ''R'': Phone, Received-from, Itinerary, Name, Ticketing)로, 예약의 생성 또는 변경을 승인한 출처(예: 승객 또는 특정 담당자)를 기록한다. 각 변경에 대한 책임 소재를 확립하며 PNR history에 기록된다.'
longDef: 'Per IATA passenger-reservation standards, every PNR must contain five mandatory elements commonly memorized as PRINT, and the Received From element identifies who instructed the action (for example ''P'' for passenger, or an agent/caller name). It anchors the booking''s accountability chain: each time a change is made, the agent enters a Received From value, which is then stamped into PNR history alongside the office and timestamp. This makes RF essential for audit, dispute resolution (e.g. ADM defence) and security, and it is required before a PNR can be committed/end-transacted in most reservation systems.'
longDef_ko: 'IATA 여객 예약 표준에 따라 모든 PNR은 흔히 PRINT로 암기되는 다섯 가지 필수 요소를 포함해야 하며, Received From 요소는 조치를 지시한 주체를 식별한다(예: 승객이면 ''P'', 또는 담당자/요청자 이름). 예약의 책임 사슬을 고정하여, 변경이 있을 때마다 담당자가 Received From 값을 입력하고 이는 office 및 타임스탬프와 함께 PNR history에 기록된다. 따라서 RF는 감사, 분쟁 해결(예: ADM 방어), 보안에 필수적이며, 대부분의 예약 시스템에서 PNR을 확정/end-transact하기 전에 요구된다.'
standardBody: IATA
aliases:
  - Received From
  - RF Element
  - Received-From Field
providerTerms:
  - provider: Amadeus
    term: Received From (RF)
    context: Amadeus requires an RF entry identifying who requested the change before saving the PNR
    context_ko: Amadeus는 PNR 저장 전에 변경을 요청한 주체를 식별하는 RF 입력을 요구한다
    relationship: same
  - provider: Sabre
    term: Received From (6 entry)
    context: Sabre captures the received-from field as a mandatory step before ending the transaction
    context_ko: Sabre는 트랜잭션 종료 전 필수 단계로 received-from 필드를 수집한다
    relationship: same
relationships:
  - type: child
    targetTerm: PNR
  - type: related
    targetTerm: PNR History
  - type: related
    targetTerm: Itinerary
  - type: related
    targetTerm: Agency Debit Memo (ADM)
distinctions:
  - targetTerm: OSI
    explanation: The Received From element is a mandatory internal PNR field recording who authorized a change; an OSI is an optional informational message sent to carriers and is unrelated to change accountability.
    explanation_ko: 'Received From 요소는 누가 변경을 승인했는지 기록하는 필수 내부 PNR 필드이고, OSI는 항공사에 보내는 선택적 정보성 메시지로 변경 책임과는 무관하다.'
  - targetTerm: PNR History
    explanation: 'Received From is the single field entered for one action naming its source; PNR History is the accumulated log into which each Received From value, with office and timestamp, is recorded over time.'
    explanation_ko: 'Received From은 한 동작에 대해 그 출처를 명시하며 입력하는 단일 필드이고, PNR History는 각 Received From 값이 office·타임스탬프와 함께 시간에 걸쳐 기록되는 누적 로그다.'
sources:
  - org: IATA
    name: Passenger Services Conference Resolutions Manual (PSCRM)
    version: ''
    section: ''
    url: ''
  - org: Sabre
    name: Sabre - PNR Mandatory Elements (PRINT / Received From)
    version: ''
    section: ''
    url: ''
icon: '<svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="16" r="7"/><path d="M12 38 a12 12 0 0 1 24 0"/><polyline points="30,30 35,35 42,26"/></svg>'
---

> The Received From (RF) element is one of the mandatory PNR elements (the 'R' in the PRINT set: Phone, Received-from, Itinerary, Name, Ticketing) that records the source authorizing the creation or modification of the booking, such as the passenger or a named agent. It establishes accountability for each change and is captured into the PNR history.

Per IATA passenger-reservation standards, every PNR must contain five mandatory elements commonly memorized as PRINT, and the Received From element identifies who instructed the action (for example 'P' for passenger, or an agent/caller name). It anchors the booking's accountability chain: each time a change is made, the agent enters a Received From value, which is then stamped into PNR history alongside the office and timestamp. This makes RF essential for audit, dispute resolution (e.g. ADM defence) and security, and it is required before a PNR can be committed/end-transacted in most reservation systems.

**한국어 / Korean** — **접수처 요소(Received From, RF)** — Received From(RF, 접수처) 요소는 PNR 필수 요소 중 하나(PRINT 세트의 'R': Phone, Received-from, Itinerary, Name, Ticketing)로, 예약의 생성 또는 변경을 승인한 출처(예: 승객 또는 특정 담당자)를 기록한다. 각 변경에 대한 책임 소재를 확립하며 PNR history에 기록된다.

IATA 여객 예약 표준에 따라 모든 PNR은 흔히 PRINT로 암기되는 다섯 가지 필수 요소를 포함해야 하며, Received From 요소는 조치를 지시한 주체를 식별한다(예: 승객이면 'P', 또는 담당자/요청자 이름). 예약의 책임 사슬을 고정하여, 변경이 있을 때마다 담당자가 Received From 값을 입력하고 이는 office 및 타임스탬프와 함께 PNR history에 기록된다. 따라서 RF는 감사, 분쟁 해결(예: ADM 방어), 보안에 필수적이며, 대부분의 예약 시스템에서 PNR을 확정/end-transact하기 전에 요구된다.

**Aliases:** `Received From`, `RF Element`, `Received-From Field`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Amadeus | `Received From (RF)` | same | Amadeus requires an RF entry identifying who requested the change before saving the PNR |
| Sabre | `Received From (6 entry)` | same | Sabre captures the received-from field as a mandatory step before ending the transaction |

# Related
- [PNR](/air-ops/pnr.md) — child
- [PNR History](/air-ops/pnr-history.md) — related
- [Itinerary](/air-ops/itinerary.md) — related
- [Agency Debit Memo (ADM)](/air-ticket/agency-debit-memo-adm.md) — related

# Distinctions
- **Received From Element (RF)** vs [OSI](/air-ops/osi.md) — The Received From element is a mandatory internal PNR field recording who authorized a change; an OSI is an optional informational message sent to carriers and is unrelated to change accountability.
- **Received From Element (RF)** vs [PNR History](/air-ops/pnr-history.md) — Received From is the single field entered for one action naming its source; PNR History is the accumulated log into which each Received From value, with office and timestamp, is recorded over time.

# Citations
[1] IATA — Passenger Services Conference Resolutions Manual (PSCRM)
[2] Sabre — Sabre - PNR Mandatory Elements (PRINT / Received From)
