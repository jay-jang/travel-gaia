---
type: Process
title: Involuntary Reissue
description: 'A reissue caused by circumstances attributable to the carrier such as a schedule change, flight cancellation, or IROPS, rather than by passenger request. Because the disruption is airline-caused, change penalties and fare differences are typically waived and the passenger is reaccommodated under involuntary rerouting rules.'
tags:
  - air-ticket
  - active
  - IATA
timestamp: '2026-06-15T00:00:00Z'
id: involuntary-reissue
vertical: air
category: air-ticket
conceptType: process
status: active
term_ko: 비자발적 재발행 (Involuntary Reissue)
definition_ko: '승객의 요청이 아니라 스케줄 변경, 항공편 결항 또는 IROPS와 같이 항공사에 귀책되는 사유로 발생하는 재발행이다. 운항 차질이 항공사 사유에 의한 것이므로 변경 위약금과 운임 차액이 일반적으로 면제되며, 승객은 비자발적 재배정(involuntary rerouting) 규정에 따라 재배정된다.'
longDef: 'Involuntary reissue is governed by carrier involuntary rerouting/reaccommodation policies and IATA provisions covering failure to operate as scheduled and schedule irregularity. The new ticket is normally endorsed to document the involuntary nature (commonly with a remark such as INVOL and a reference to the disruption reason), and the fare is reissued at no additional collection where reaccommodation is on the same or comparable service. It is distinguished from a voluntary reissue, where the change originates with the passenger and fare-rule penalties apply.'
longDef_ko: '비자발적 재발행은 항공사의 비자발적 재배정/재수용 정책 및 정시 운항 실패와 스케줄 불규칙성을 다루는 IATA 규정에 따른다. 새 항공권은 일반적으로 비자발적 성격을 증빙하기 위해 배서되며(흔히 INVOL과 같은 표기 및 운항 차질 사유에 대한 참조 포함), 동일하거나 유사한 서비스로 재배정되는 경우 추가 징수 없이 재발행된다. 이는 변경이 승객으로부터 비롯되고 운임 규정상의 위약금이 적용되는 자발적 재발행과 구별된다.'
standardBody: IATA
aliases:
  - Involuntary Exchange
  - INVOL Reissue
  - Involuntary Rerouting
providerTerms:
  - provider: Amadeus
    term: ATC Involuntary Reissue (FXI)
    context: 'Amadeus handles carrier-caused reissues through Amadeus Ticket Changer using the involuntary pricing entry FXI, which applies involuntary rules so change penalties and fare differences are waived.'
    context_ko: 'Amadeus는 항공사 귀책 재발행을 Amadeus Ticket Changer의 비자발적 산정 입력 FXI로 처리하며, 비자발 규정을 적용해 변경 페널티와 운임차액을 면제한다.'
    relationship: same
  - provider: ATPCO
    term: Involuntary handling (vs Category 31)
    context: 'ATPCO Category 31 governs voluntary changes; involuntary (carrier-caused) reissues fall outside its charges, instead following carrier involuntary policy/IATA Resolution 735d re-routing where penalties are waived.'
    context_ko: 'ATPCO Category 31은 자발적 변경을 규율하며, 비자발적(항공사 귀책) 재발행은 그 요금 적용 대상이 아니라 항공사 비자발 정책/IATA Resolution 735d 재여정 규정을 따라 페널티가 면제된다.'
    relationship: related
relationships:
  - type: contrasts
    targetTerm: Reissue
  - type: related
    targetTerm: Schedule Change
  - type: related
    targetTerm: IROPS
  - type: related
    targetTerm: Refund
  - type: related
    targetTerm: E-ticket
distinctions:
  - targetTerm: Reissue
    explanation: A (voluntary) reissue is passenger-initiated with penalties per fare rules; an involuntary reissue is airline-caused and normally penalty-free.
    explanation_ko: '(자발적) 재발행은 승객이 주도하며 운임 규정에 따른 위약금이 적용되고, 비자발적 재발행은 항공사 사유에 의한 것으로 통상 위약금이 없다.'
  - targetTerm: Schedule Change
    explanation: Schedule Change is the trigger event in the schedule; involuntary reissue is the ticketing action taken to reaccommodate the passenger.
    explanation_ko: 'Schedule Change는 스케줄상의 유발 사건이며, 비자발적 재발행은 승객을 재배정하기 위해 취하는 발권 조치이다.'
  - targetTerm: IROPS
    explanation: IROPS is the disruption scenario; involuntary reissue is one of the ticketing actions used to reaccommodate passengers during IROPS.
    explanation_ko: 'IROPS는 중단 상황이고, 비자발적 재발권은 IROPS 동안 승객을 재수용하기 위해 사용되는 발권 처리 중 하나다.'
  - targetTerm: Re-accommodation
    explanation: Re-accommodation is the end-to-end rebooking process; involuntary reissue is the ticketing transaction that documents the new itinerary at no additional collection.
    explanation_ko: '재수용은 처음부터 끝까지의 재예약 과정이고, 비자발적 재발권은 추가 징수 없이 새 여정을 문서화하는 발권 거래다.'
  - targetTerm: Voluntary Changes (ATPCO Category 31)
    explanation: 'Category 31 covers voluntary changes initiated by the passenger; involuntary reissues caused by airline schedule changes or IROPS are handled under separate policies and waivers, not Cat 31''s voluntary penalty conditions.'
    explanation_ko: Category 31은 승객이 시작한 자발적 변경을 다룬다. 항공사 스케줄 변경이나 IROPS로 인한 비자발적 재발권은 Cat 31의 자발적 위약 조건이 아니라 별도 정책·면제로 처리된다.
sources:
  - name: Passenger Services Conference Resolutions Manual (PSCRM)
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="12" width="24" height="16" rx="3"/><path d="M11 18h8M11 22h5"/><path d="M33 35a8 8 0 01-12-2"/><path d="M21 39v-5h5"/><circle cx="36" cy="16" r="7"/><path d="M36 13v3M36 19v.01"/></svg>
---

> A reissue caused by circumstances attributable to the carrier such as a schedule change, flight cancellation, or IROPS, rather than by passenger request. Because the disruption is airline-caused, change penalties and fare differences are typically waived and the passenger is reaccommodated under involuntary rerouting rules.

Involuntary reissue is governed by carrier involuntary rerouting/reaccommodation policies and IATA provisions covering failure to operate as scheduled and schedule irregularity. The new ticket is normally endorsed to document the involuntary nature (commonly with a remark such as INVOL and a reference to the disruption reason), and the fare is reissued at no additional collection where reaccommodation is on the same or comparable service. It is distinguished from a voluntary reissue, where the change originates with the passenger and fare-rule penalties apply.

**한국어 / Korean** — **비자발적 재발행 (Involuntary Reissue)** — 승객의 요청이 아니라 스케줄 변경, 항공편 결항 또는 IROPS와 같이 항공사에 귀책되는 사유로 발생하는 재발행이다. 운항 차질이 항공사 사유에 의한 것이므로 변경 위약금과 운임 차액이 일반적으로 면제되며, 승객은 비자발적 재배정(involuntary rerouting) 규정에 따라 재배정된다.

비자발적 재발행은 항공사의 비자발적 재배정/재수용 정책 및 정시 운항 실패와 스케줄 불규칙성을 다루는 IATA 규정에 따른다. 새 항공권은 일반적으로 비자발적 성격을 증빙하기 위해 배서되며(흔히 INVOL과 같은 표기 및 운항 차질 사유에 대한 참조 포함), 동일하거나 유사한 서비스로 재배정되는 경우 추가 징수 없이 재발행된다. 이는 변경이 승객으로부터 비롯되고 운임 규정상의 위약금이 적용되는 자발적 재발행과 구별된다.

**Aliases:** `Involuntary Exchange`, `INVOL Reissue`, `Involuntary Rerouting`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Amadeus | `ATC Involuntary Reissue (FXI)` | same | Amadeus handles carrier-caused reissues through Amadeus Ticket Changer using the involuntary pricing entry FXI, which applies involuntary rules so change penalties and fare differences are waived. |
| ATPCO | `Involuntary handling (vs Category 31)` | related | ATPCO Category 31 governs voluntary changes; involuntary (carrier-caused) reissues fall outside its charges, instead following carrier involuntary policy/IATA Resolution 735d re-routing where penalties are waived. |

# Related
- [Reissue](/air/air-ticket/reissue.md) — contrasts
- [Schedule Change](/air/air-partner/schedule-change.md) — related
- [IROPS](/air/air-partner/irops.md) — related
- [Refund](/air/air-ticket/refund.md) — related
- [E-ticket](/air/air-ticket/e-ticket.md) — related

# Distinctions
- **Involuntary Reissue** vs [Reissue](/air/air-ticket/reissue.md) — A (voluntary) reissue is passenger-initiated with penalties per fare rules; an involuntary reissue is airline-caused and normally penalty-free.
- **Involuntary Reissue** vs [Schedule Change](/air/air-partner/schedule-change.md) — Schedule Change is the trigger event in the schedule; involuntary reissue is the ticketing action taken to reaccommodate the passenger.
- **Involuntary Reissue** vs [IROPS](/air/air-partner/irops.md) — IROPS is the disruption scenario; involuntary reissue is one of the ticketing actions used to reaccommodate passengers during IROPS.
- **Involuntary Reissue** vs [Re-accommodation](/air/air-partner/re-accommodation.md) — Re-accommodation is the end-to-end rebooking process; involuntary reissue is the ticketing transaction that documents the new itinerary at no additional collection.
- **Involuntary Reissue** vs [Voluntary Changes (ATPCO Category 31)](/air/air-ticket/voluntary-changes-atpco-category-31.md) — Category 31 covers voluntary changes initiated by the passenger; involuntary reissues caused by airline schedule changes or IROPS are handled under separate policies and waivers, not Cat 31's voluntary penalty conditions.

# Citations
[1] [IATA — Passenger Services Conference Resolutions Manual (PSCRM)](https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/)
