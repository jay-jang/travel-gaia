---
type: Business Term
title: PNR History
description: 'PNR History is the audit trail within a Passenger Name Record that records every creation, addition, change and deletion made to the booking, including who made it, what was changed, and when. It is an append-only log that preserves the prior state of elements so the full evolution of the booking can be reconstructed.'
tags:
  - air-ops
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: pnr-history
vertical: air
category: air-ops
conceptType: business-term
status: active
term_ko: PNR 변경 이력(PNR History)
definition_ko: 'PNR History는 PNR(Passenger Name Record) 내의 감사 추적(audit trail)으로, 예약에 가해진 모든 생성·추가·변경·삭제를 누가, 무엇을, 언제 했는지와 함께 기록한다. 요소의 이전 상태를 보존하는 추가 전용(append-only) 로그여서 예약의 전체 변경 이력을 재구성할 수 있다.'
longDef: 'Each time an element of a PNR is added, modified or cancelled, the system writes a history entry stamped with the office/agent (tied to the Received From source), the action, and a timestamp, while retaining the old value. History is consulted to resolve disputes such as Agency Debit Memos (ADMs), to trace fraud or unauthorized changes, and to reconstruct what happened across a split, merge, reissue or schedule-change re-accommodation. Because it is governed by passenger-data retention rules, history is retained for a defined period; the cryptic command to display it differs by GDS (for example, Amadeus RH and Sabre history displays).'
longDef_ko: 'PNR의 요소가 추가·변경·취소될 때마다 시스템은 office/agent(Received From 출처와 연결), 동작, 타임스탬프가 찍힌 이력 항목을 기록하면서 이전 값을 보존한다. 이력은 Agency Debit Memo(ADM) 같은 분쟁 해결, 사기 또는 무단 변경 추적, split·merge·재발행·스케줄 변경 재배정 전반에서 무슨 일이 있었는지 재구성하는 데 참조된다. 여객 데이터 보존 규칙의 적용을 받아 정해진 기간 동안 보관되며, 이를 표시하는 cryptic 명령은 GDS마다 다르다(예: Amadeus는 RH, Sabre는 history 표시).'
standardBody: IATA
aliases:
  - Booking History
  - PNR Audit Trail
  - History Element
  - Reservation History
providerTerms:
  - provider: Amadeus
    term: History (RH)
    context: Amadeus displays the chronological change log of a PNR with the RH command
    context_ko: Amadeus는 RH 명령으로 PNR의 시간순 변경 로그를 표시한다
    relationship: same
  - provider: Sabre
    term: PNR History
    context: Sabre retains a history of all changes to a PNR for retrieval
    context_ko: Sabre는 조회를 위해 PNR의 모든 변경 이력을 보관한다
    relationship: same
relationships:
  - type: parent
    targetTerm: PNR
  - type: related
    targetTerm: Received From Element (RF)
  - type: related
    targetTerm: Split PNR
  - type: related
    targetTerm: Agency Debit Memo (ADM)
  - type: related
    targetTerm: Schedule Change
distinctions:
  - targetTerm: Received From Element (RF)
    explanation: 'The Received From element names the source authorizing a given change at the moment it is made; PNR History is the cumulative, time-stamped log of all such changes (each typically anchored by a Received From entry) over the life of the booking.'
    explanation_ko: 'Received From 요소는 특정 변경이 이루어지는 시점에 그것을 승인한 출처를 명시하고, PNR History는 예약의 생애에 걸친 그러한 모든 변경(각각 보통 Received From 항목으로 고정됨)의 누적·타임스탬프 로그다.'
  - targetTerm: Record Locator
    explanation: 'A Record Locator is the short key used to retrieve a booking; PNR History is the internal change log of that booking, not an identifier.'
    explanation_ko: 'Record Locator는 예약을 조회하는 짧은 key이고, PNR History는 그 예약의 내부 변경 로그이지 식별자가 아니다.'
sources:
  - org: IATA
    name: Passenger Services Conference Resolutions Manual (PSCRM)
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/'
  - org: Amadeus
    name: Amadeus Service Hub - PNR History (RH)
    version: ''
    section: ''
    url: 'https://amadeus.com/en/blog/articles/amadeus-tip-display-the-pnr-history'
icon: '<svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M24 9 a15 15 0 1 1 -14 10"/><polyline points="7,11 10,19 18,17"/><polyline points="24,16 24,24 30,28"/></svg>'
---

> PNR History is the audit trail within a Passenger Name Record that records every creation, addition, change and deletion made to the booking, including who made it, what was changed, and when. It is an append-only log that preserves the prior state of elements so the full evolution of the booking can be reconstructed.

Each time an element of a PNR is added, modified or cancelled, the system writes a history entry stamped with the office/agent (tied to the Received From source), the action, and a timestamp, while retaining the old value. History is consulted to resolve disputes such as Agency Debit Memos (ADMs), to trace fraud or unauthorized changes, and to reconstruct what happened across a split, merge, reissue or schedule-change re-accommodation. Because it is governed by passenger-data retention rules, history is retained for a defined period; the cryptic command to display it differs by GDS (for example, Amadeus RH and Sabre history displays).

**한국어 / Korean** — **PNR 변경 이력(PNR History)** — PNR History는 PNR(Passenger Name Record) 내의 감사 추적(audit trail)으로, 예약에 가해진 모든 생성·추가·변경·삭제를 누가, 무엇을, 언제 했는지와 함께 기록한다. 요소의 이전 상태를 보존하는 추가 전용(append-only) 로그여서 예약의 전체 변경 이력을 재구성할 수 있다.

PNR의 요소가 추가·변경·취소될 때마다 시스템은 office/agent(Received From 출처와 연결), 동작, 타임스탬프가 찍힌 이력 항목을 기록하면서 이전 값을 보존한다. 이력은 Agency Debit Memo(ADM) 같은 분쟁 해결, 사기 또는 무단 변경 추적, split·merge·재발행·스케줄 변경 재배정 전반에서 무슨 일이 있었는지 재구성하는 데 참조된다. 여객 데이터 보존 규칙의 적용을 받아 정해진 기간 동안 보관되며, 이를 표시하는 cryptic 명령은 GDS마다 다르다(예: Amadeus는 RH, Sabre는 history 표시).

**Aliases:** `Booking History`, `PNR Audit Trail`, `History Element`, `Reservation History`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Amadeus | `History (RH)` | same | Amadeus displays the chronological change log of a PNR with the RH command |
| Sabre | `PNR History` | same | Sabre retains a history of all changes to a PNR for retrieval |

# Related
- [PNR](/air/air-ops/pnr.md) — parent
- [Received From Element (RF)](/air/air-ops/received-from-element-rf.md) — related
- [Split PNR](/air/air-ops/split-pnr.md) — related
- [Agency Debit Memo (ADM)](/air/air-ticket/agency-debit-memo-adm.md) — related
- [Schedule Change](/air/air-partner/schedule-change.md) — related

# Distinctions
- **PNR History** vs [Received From Element (RF)](/air/air-ops/received-from-element-rf.md) — The Received From element names the source authorizing a given change at the moment it is made; PNR History is the cumulative, time-stamped log of all such changes (each typically anchored by a Received From entry) over the life of the booking.
- **PNR History** vs [Record Locator](/air/air-ops/record-locator.md) — A Record Locator is the short key used to retrieve a booking; PNR History is the internal change log of that booking, not an identifier.

# Citations
[1] [IATA — Passenger Services Conference Resolutions Manual (PSCRM)](https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/)
[2] [Amadeus — Amadeus Service Hub - PNR History (RH)](https://amadeus.com/en/blog/articles/amadeus-tip-display-the-pnr-history)
