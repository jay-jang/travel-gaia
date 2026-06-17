---
type: Process
title: Embarkation
description: 'The boarding and check-in process at the start of a cruise, when passengers board the ship at the home port, complete security and document checks, and are registered for the voyage. Its counterpart is disembarkation at the end of the cruise, and together they bracket the turnaround day on which one sailing ends and the next begins.'
tags:
  - cruise
  - active
  - OpenTravel Alliance
timestamp: '2026-06-17T00:00:00Z'
id: embarkation
category: cruise
conceptType: process
status: active
term_ko: 승선(Embarkation)
definition_ko: '크루즈 시작 시점의 승선·체크인 과정으로, 선객이 모항에서 선박에 탑승하여 보안·서류 확인을 마치고 항해에 등록되는 절차이다. 항해 종료 시점의 하선(disembarkation)이 그 짝이며, 둘은 한 항차가 끝나고 다음 항차가 시작되는 회항일(turnaround day)을 양끝에서 감싼다.'
longDef: 'Embarkation is a foundational operational and distribution milestone: it governs the turnaround-day logistics of disembarking one set of guests and embarking the next within hours, drives the collection of Advance Passenger Information System (APIS) and immigration manifests, and triggers the safety obligations of the voyage, including the SOLAS muster drill that must occur before or immediately on departure. Booking and check-in systems capture embarkation date, port, time window, and required identity and health documents; the OpenTravel cruise message set expresses embark/debark times as part of the sailing definition.'
longDef_ko: 'Embarkation은 운영·유통상의 근간이 되는 이정표이다. 한 무리의 선객을 하선시키고 몇 시간 내에 다음 무리를 승선시키는 회항일 물류를 좌우하고, 사전입국정보시스템(APIS)과 출입국 명부 수집을 추동하며, SOLAS 비상소집훈련(muster drill)을 포함한 항해의 안전 의무를 발동시킨다. 이 훈련은 출항 전 또는 출항 즉시 이루어져야 한다. 예약·체크인 시스템은 승선 날짜·항구·시간대와 필요한 신원·건강 서류를 수집하며, OpenTravel 크루즈 메시지 셋은 승선/하선 시각을 항차 정의의 일부로 표현한다.'
standardBody: OpenTravel Alliance
aliases:
  - Boarding
  - Embarkation Day
  - Check-in
relationships:
  - type: related
    targetTerm: Muster Drill
  - type: related
    targetTerm: Port of Call
  - type: related
    targetTerm: Itinerary
  - type: related
    targetTerm: Repositioning Cruise
distinctions:
  - targetTerm: Port of Call
    explanation: 'Embarkation happens once, at the home port that opens the voyage; ports of call are the intermediate stops where guests go ashore and reboard the same ship without checking in anew.'
    explanation_ko: 'Embarkation은 항해를 여는 모항에서 한 번 일어나고, port of call은 선객이 하선했다가 새로 체크인하지 않고 같은 선박에 다시 오르는 중간 기항지이다.'
  - targetTerm: Muster Drill
    explanation: Embarkation is the overall boarding/check-in process; the muster drill is one mandatory safety step within it that SOLAS requires before or at departure.
    explanation_ko: 'Embarkation은 전체 승선·체크인 과정이고, muster drill은 그 안에서 SOLAS가 출항 전 또는 출항 시점에 요구하는 의무 안전 절차 하나이다.'
sources:
  - name: Glossary of Shipboard Terms
    org: Cruise industry
    version: ''
    section: ''
    url: ''
  - name: 'OpenTravel Specification (cruise message set: embark/debark times)'
    org: OpenTravel Alliance
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M8 34h32l-3 6H11z"/><path d="M14 34V22h12l5 5h5"/><path d="M22 16l4-4 4 4M26 12v14"/></svg>
---

> The boarding and check-in process at the start of a cruise, when passengers board the ship at the home port, complete security and document checks, and are registered for the voyage. Its counterpart is disembarkation at the end of the cruise, and together they bracket the turnaround day on which one sailing ends and the next begins.

Embarkation is a foundational operational and distribution milestone: it governs the turnaround-day logistics of disembarking one set of guests and embarking the next within hours, drives the collection of Advance Passenger Information System (APIS) and immigration manifests, and triggers the safety obligations of the voyage, including the SOLAS muster drill that must occur before or immediately on departure. Booking and check-in systems capture embarkation date, port, time window, and required identity and health documents; the OpenTravel cruise message set expresses embark/debark times as part of the sailing definition.

**한국어 / Korean** — **승선(Embarkation)** — 크루즈 시작 시점의 승선·체크인 과정으로, 선객이 모항에서 선박에 탑승하여 보안·서류 확인을 마치고 항해에 등록되는 절차이다. 항해 종료 시점의 하선(disembarkation)이 그 짝이며, 둘은 한 항차가 끝나고 다음 항차가 시작되는 회항일(turnaround day)을 양끝에서 감싼다.

Embarkation은 운영·유통상의 근간이 되는 이정표이다. 한 무리의 선객을 하선시키고 몇 시간 내에 다음 무리를 승선시키는 회항일 물류를 좌우하고, 사전입국정보시스템(APIS)과 출입국 명부 수집을 추동하며, SOLAS 비상소집훈련(muster drill)을 포함한 항해의 안전 의무를 발동시킨다. 이 훈련은 출항 전 또는 출항 즉시 이루어져야 한다. 예약·체크인 시스템은 승선 날짜·항구·시간대와 필요한 신원·건강 서류를 수집하며, OpenTravel 크루즈 메시지 셋은 승선/하선 시각을 항차 정의의 일부로 표현한다.

**Aliases:** `Boarding`, `Embarkation Day`, `Check-in`

# Related
- [Muster Drill](/cruise/muster-drill.md) — related
- [Port of Call](/cruise/port-of-call.md) — related
- [Itinerary](/air-ops/itinerary.md) — related
- [Repositioning Cruise](/cruise/repositioning-cruise.md) — related

# Distinctions
- **Embarkation** vs [Port of Call](/cruise/port-of-call.md) — Embarkation happens once, at the home port that opens the voyage; ports of call are the intermediate stops where guests go ashore and reboard the same ship without checking in anew.
- **Embarkation** vs [Muster Drill](/cruise/muster-drill.md) — Embarkation is the overall boarding/check-in process; the muster drill is one mandatory safety step within it that SOLAS requires before or at departure.

# Citations
[1] Cruise industry — Glossary of Shipboard Terms
[2] OpenTravel Alliance — OpenTravel Specification (cruise message set: embark/debark times)
