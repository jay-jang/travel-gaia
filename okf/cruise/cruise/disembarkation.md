---
type: Process
title: Disembarkation
description: 'The process by which cruise passengers leave the ship at the conclusion of their voyage, completing customs and immigration formalities, collecting their luggage, and exiting the terminal. Disembarkation is the mirror counterpart to embarkation and is a critical element of the turnaround day, during which the outgoing guest flow must be cleared before the next sailing''s embarkation can begin.'
tags:
  - cruise
  - active
  - CLIA
timestamp: '2026-07-04T00:00:00Z'
id: disembarkation
vertical: cruise
category: cruise
conceptType: process
status: active
term_ko: 하선(Disembarkation)
definition_ko: '하선(Disembarkation)은 크루즈 선객이 항해를 마치고 선박을 떠나는 과정으로, 세관·출입국 절차를 완료하고 수하물을 찾아 터미널을 빠져나간다. 하선은 승선(embarkation)의 대칭 짝이며, 다음 항차의 승선이 시작되기 전에 하선 흐름이 완료되어야 하는 회항일(turnaround day)의 핵심 요소이다.'
longDef: 'Disembarkation typically begins in the early morning on the final day and is managed in color-coded or time-slotted waves to control the flow of thousands of passengers off a large ship within a few hours. Cruise lines generally operate two options: self-assist (express) disembarkation, where guests carry their own luggage off the ship and leave earliest, and the standard luggage-tag program, where bags are collected outside cabin doors the night before, sorted by tag group in the terminal, and released in waves. Customs and border protection formalities depend on the itinerary — closed-loop voyages departing and returning to the same US port trigger the most streamlined process. The OpenTravel cruise message set uses debark times as part of the sailing definition and can reflect disembarkation port details. Disembarkation logistics directly affect turnaround-day timelines, shore excursion scheduling, and the embarkation slot for incoming guests.'
longDef_ko: '하선은 보통 마지막 날 이른 아침에 시작되며, 수천 명의 승객이 몇 시간 내에 대형 선박에서 내릴 수 있도록 컬러 코드 또는 시간대별 순서로 관리된다. 선사는 일반적으로 두 가지 옵션을 운영한다. 자가 하선(익스프레스 하선)은 승객이 직접 수하물을 들고 내려 가장 일찍 떠나는 방식이고, 표준 수하물 태그 프로그램은 전날 밤 객실 문 앞에 수하물을 내놓으면 터미널에서 태그 그룹별로 분류하여 순차적으로 인도하는 방식이다. 세관·국경 보호 절차는 여정에 따라 다르며, 동일한 미국 항구에서 출발·귀항하는 폐쇄형 항차가 가장 간소화된 절차를 적용한다. OpenTravel 크루즈 메시지 셋은 항차 정의의 일부로 하선 시각을 사용하며 하선 항구 정보를 반영할 수 있다. 하선 물류는 회항일 일정, 기항지 투어 일정, 신규 승객의 승선 슬롯에 직접 영향을 미친다.'
standardBody: CLIA
aliases:
  - Debarkation
  - Disembark
  - Debark
relationships:
  - type: contrasts
    targetTerm: Embarkation
  - type: related
    targetTerm: Turnaround Day
  - type: related
    targetTerm: Port of Call
distinctions:
  - targetTerm: Embarkation
    explanation: 'Embarkation is the boarding process at the start of a voyage; disembarkation is its mirror — the departure process at the end. Both occur on the turnaround day, with disembarkation completing first so that embarkation of the next sailing can begin.'
    explanation_ko: '승선(Embarkation)은 항해 시작 시점의 탑승 과정이고, 하선(Disembarkation)은 그 대칭, 즉 항해 종료 시점의 하차 과정이다. 둘 다 회항일에 발생하며, 다음 항차 승선이 시작될 수 있도록 하선이 먼저 완료되어야 한다.'
  - targetTerm: Port of Call
    explanation: 'Port-of-call stops are temporary: guests go ashore and return to the same ship. Disembarkation is final — it occurs only at the home port at the voyage end and guests do not reboard.'
    explanation_ko: 'Port of call 기항은 일시적이다. 선객이 하선했다가 같은 선박으로 돌아온다. 하선(Disembarkation)은 최종적이며, 오직 항해 종료 시 모항에서만 발생하고 선객은 재승선하지 않는다.'
sources:
  - name: CLIA Cruising Terms Glossary
    org: CLIA (Cruise Lines International Association)
    version: ''
    section: Disembarkation
    url: 'https://cruising.org/cruise-vacationer/learn-about-cruising/cruising-terms'
    tier: association
  - name: 'OpenTravel Specification (cruise message set: embark/debark times)'
    org: OpenTravel Alliance
    version: ''
    section: ''
    url: 'https://opentravel.org/download-specs/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M8 34h32l-3 6H11z"/><path d="M14 34V22h12l5 5h5"/><path d="M22 12l-4 4 4 4M18 16h14"/><circle cx="18" cy="16" r="1.5" fill="currentColor"/></svg>
---

> The process by which cruise passengers leave the ship at the conclusion of their voyage, completing customs and immigration formalities, collecting their luggage, and exiting the terminal. Disembarkation is the mirror counterpart to embarkation and is a critical element of the turnaround day, during which the outgoing guest flow must be cleared before the next sailing's embarkation can begin.

Disembarkation typically begins in the early morning on the final day and is managed in color-coded or time-slotted waves to control the flow of thousands of passengers off a large ship within a few hours. Cruise lines generally operate two options: self-assist (express) disembarkation, where guests carry their own luggage off the ship and leave earliest, and the standard luggage-tag program, where bags are collected outside cabin doors the night before, sorted by tag group in the terminal, and released in waves. Customs and border protection formalities depend on the itinerary — closed-loop voyages departing and returning to the same US port trigger the most streamlined process. The OpenTravel cruise message set uses debark times as part of the sailing definition. Disembarkation logistics directly affect turnaround-day timelines, shore excursion scheduling, and the embarkation slot for incoming guests.

**한국어 / Korean** — **하선(Disembarkation)** — 하선(Disembarkation)은 크루즈 선객이 항해를 마치고 선박을 떠나는 과정으로, 세관·출입국 절차를 완료하고 수하물을 찾아 터미널을 빠져나간다. 하선은 승선(embarkation)의 대칭 짝이며, 다음 항차의 승선이 시작되기 전에 하선 흐름이 완료되어야 하는 회항일(turnaround day)의 핵심 요소이다.

하선은 보통 마지막 날 이른 아침에 시작되며, 컬러 코드 또는 시간대별 순서로 관리된다. 선사는 자가 하선(익스프레스 하선)과 표준 수하물 태그 프로그램 두 가지 옵션을 운영한다. OpenTravel 크루즈 메시지 셋은 항차 정의의 일부로 하선 시각을 사용한다.

**Aliases:** `Debarkation`, `Disembark`, `Debark`

# Related
- [Embarkation](/cruise/cruise/embarkation.md) — contrasts
- [Turnaround Day](/cruise/cruise/turnaround-day.md) — related
- [Port of Call](/cruise/cruise/port-of-call.md) — related

# Distinctions
- **Disembarkation** vs [Embarkation](/cruise/cruise/embarkation.md) — Embarkation is the boarding process at the start of a voyage; disembarkation is its mirror — the departure process at the end. Both occur on the turnaround day, with disembarkation completing first so that embarkation of the next sailing can begin.
- **Disembarkation** vs [Port of Call](/cruise/cruise/port-of-call.md) — Port-of-call stops are temporary: guests go ashore and return to the same ship. Disembarkation is final — it occurs only at the home port at the voyage end and guests do not reboard.

# Citations
[1] [CLIA (Cruise Lines International Association) — CLIA Cruising Terms Glossary](https://cruising.org/cruise-vacationer/learn-about-cruising/cruising-terms)
[2] [OpenTravel Alliance — OpenTravel Specification (cruise message set: embark/debark times)](https://opentravel.org/download-specs/)
