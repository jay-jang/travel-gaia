---
type: Standard
title: A-CDM (Airport Collaborative Decision Making)
description: 'A EUROCONTROL operational concept in which the airport operator, airlines, ground handlers, air navigation service provider, and Network Manager share real-time data to improve departure-time accuracy, reduce taxi times, and optimise the use of airport capacity. A-CDM replaces fragmented bilateral communications with a common Milestone Approach that tracks each aircraft from landing through to takeoff.'
tags:
  - air-ops
  - active
  - EUROCONTROL
timestamp: '2026-10-03T00:00:00Z'
id: a-cdm
vertical: air
category: air-ops
conceptType: standard
status: active
abbreviation: A-CDM
term_ko: 공항 협력 의사 결정(A-CDM)
definition_ko: 'A-CDM(Airport Collaborative Decision Making, 공항 협력 의사 결정)은 공항 운영자·항공사·지상 조업사·항공 항행 서비스 제공자·네트워크 매니저가 실시간 데이터를 공유하여 출발 시간 정확도를 높이고, 지상 이동 시간을 줄이며, 공항 용량 활용을 최적화하는 EUROCONTROL의 운영 개념이다. 개별 양자 간 통신을 공통 마일스톤 접근법으로 대체하여 각 항공기의 착륙부터 이륙까지 전 과정을 추적한다.'
longDef: 'The A-CDM Milestone Approach defines a sequence of about 16 key events (milestones) in each aircraft''s turnaround cycle — from actual in-blocks through pushback — giving all stakeholders a shared, updated view of each flight''s departure readiness. A central mechanism is the Target Off-Block Time (TOBT), which the airline or ground handler updates in real time and which allows the network to sequence departures accurately. Key metrics improved by A-CDM include Target Start-Up Approval Time (TSAT), pre-departure sequencing, and Average Departure Delay. The EUROCONTROL Specification for A-CDM (Edition 1.0, January 2025) sets the mandatory and recommended requirements for airports wishing to achieve A-CDM Status. As of 2025, over 34 European airports are fully A-CDM compliant, enabling EUROCONTROL''s Network Manager to issue accurate departure sequences that reduce ATFM delays across the European network.'
longDef_ko: 'A-CDM 마일스톤 접근법은 각 항공기의 지상 처리 주기에서 약 16개의 주요 이벤트(마일스톤)를 정의하며, 실제 블록 인(actual in-blocks)부터 푸시백까지 모든 이해관계자에게 각 항공편의 출발 준비 상태에 대한 공유된 최신 뷰를 제공한다. 핵심 메커니즘은 항공사 또는 지상 조업사가 실시간으로 업데이트하는 목표 블록아웃 시간(TOBT)으로, 네트워크가 출발을 정확하게 순서화할 수 있게 한다. A-CDM으로 개선되는 주요 지표에는 목표 시동 승인 시간(TSAT), 출발 전 순서화, 평균 출발 지연 등이 포함된다. EUROCONTROL A-CDM 사양(2025년 1월 1.0판)은 A-CDM 지위를 달성하려는 공항에 대한 필수 및 권장 요건을 규정한다. 2025년 현재 34개 이상의 유럽 공항이 A-CDM을 완전히 준수하여 EUROCONTROL 네트워크 매니저가 유럽 네트워크 전반의 ATFM 지연을 줄이는 정확한 출발 순서를 발행할 수 있다.'
standardBody: EUROCONTROL
aliases:
  - Airport Collaborative Decision Making
  - CDM
  - Airport CDM
relationships:
  - type: related
    targetTerm: Aircraft Turnaround
  - type: related
    targetTerm: Departure Control System (DCS)
  - type: related
    targetTerm: On-Time Performance (OTP)
distinctions:
  - targetTerm: Departure Control System (DCS)
    explanation: 'A DCS is the airline or airport system that manages passenger check-in, baggage acceptance, seat assignment, boarding, and weight-and-balance — it handles the passenger and baggage lifecycle. A-CDM is a cross-stakeholder data-sharing framework that coordinates the aircraft turnaround process to improve departure punctuality; A-CDM consumes DCS data (e.g., boarding status) as input but focuses on sequencing, slot utilisation, and ATFM coordination, which are outside the DCS scope.'
    explanation_ko: 'DCS는 여객 체크인, 수하물 접수, 좌석 배정, 탑승, 중량 및 균형을 관리하는 항공사 또는 공항 시스템으로 승객·수하물 생애주기를 처리한다. A-CDM은 출발 정시성을 향상시키기 위해 항공기 지상 처리 과정을 조율하는 이해관계자 간 데이터 공유 체계로, DCS 데이터(예: 탑승 상태)를 입력값으로 활용하지만 DCS 범위 밖의 순서화, 슬롯 활용, ATFM 조정에 집중한다.'
  - targetTerm: Aircraft Turnaround
    explanation: 'Aircraft Turnaround is the total ground time from landing to next departure for a single aircraft; A-CDM is the collaborative framework that manages and shares data about turnaround milestones across all airport stakeholders in real time to improve the predictability and efficiency of that turnaround process.'
    explanation_ko: '항공기 지상 처리(Aircraft Turnaround)는 착륙부터 다음 출발까지 단일 항공기의 총 지상 체류 시간이고, A-CDM은 그 지상 처리 과정의 예측 가능성과 효율성을 향상시키기 위해 모든 공항 이해관계자에게 실시간으로 지상 처리 마일스톤 데이터를 관리·공유하는 협력 체계이다.'
sources:
  - name: EUROCONTROL Specification for Airport Collaborative Decision Making, Edition 1.0
    org: EUROCONTROL
    version: 'Edition 1.0 (January 2025)'
    section: ''
    url: 'https://www.eurocontrol.int/publication/eurocontrol-specification-airport-collaborative-decision-making-cdm'
    tier: standard-body
  - name: Airport Collaborative Decision Making concept page
    org: EUROCONTROL
    version: ''
    section: ''
    url: 'https://www.eurocontrol.int/concept/airport-collaborative-decision-making'
    tier: standard-body
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="24" r="16"/><path d="M12 24h24M24 12l4 6h-8l4-6z"/><circle cx="24" cy="24" r="3" fill="currentColor" stroke="none"/><path d="M19 30h10M17 34h14"/></svg>
---

> A EUROCONTROL operational concept in which the airport operator, airlines, ground handlers, air navigation service provider, and Network Manager share real-time data to improve departure-time accuracy, reduce taxi times, and optimise the use of airport capacity. A-CDM replaces fragmented bilateral communications with a common Milestone Approach that tracks each aircraft from landing through to takeoff.

The A-CDM Milestone Approach defines a sequence of about 16 key events (milestones) in each aircraft's turnaround cycle — from actual in-blocks through pushback — giving all stakeholders a shared, updated view of each flight's departure readiness. A central mechanism is the Target Off-Block Time (TOBT), which the airline or ground handler updates in real time and which allows the network to sequence departures accurately. Key metrics improved by A-CDM include Target Start-Up Approval Time (TSAT), pre-departure sequencing, and Average Departure Delay. The EUROCONTROL Specification for A-CDM (Edition 1.0, January 2025) sets the mandatory and recommended requirements for airports wishing to achieve A-CDM Status. As of 2025, over 34 European airports are fully A-CDM compliant, enabling EUROCONTROL's Network Manager to issue accurate departure sequences that reduce ATFM delays across the European network.

**한국어 / Korean** — **공항 협력 의사 결정(A-CDM)** — A-CDM(Airport Collaborative Decision Making)은 공항 운영자·항공사·지상 조업사·항공 항행 서비스 제공자·네트워크 매니저가 실시간 데이터를 공유하여 출발 시간 정확도를 높이고 공항 용량 활용을 최적화하는 EUROCONTROL 운영 개념이다. 각 항공기의 착륙부터 이륙까지 전 과정을 추적하는 공통 마일스톤 접근법으로 분산된 양자 간 통신을 대체한다.

A-CDM 마일스톤 접근법은 실제 블록 인부터 푸시백까지 각 항공기의 지상 처리 주기에서 약 16개의 주요 이벤트(마일스톤)를 정의하여 모든 이해관계자에게 각 항공편의 출발 준비 상태에 대한 공유된 최신 뷰를 제공한다. 핵심 메커니즘은 목표 블록아웃 시간(TOBT)으로, 항공사 또는 지상 조업사가 실시간으로 업데이트하여 네트워크가 출발을 정확하게 순서화할 수 있게 한다.

**Aliases:** `Airport Collaborative Decision Making`, `CDM`, `Airport CDM`

# Related
- [Aircraft Turnaround](/air/air-ops/aircraft-turnaround.md) — related
- [Departure Control System (DCS)](/air/air-ops/departure-control-system-dcs.md) — related
- [On-Time Performance (OTP)](/air/air-ops/on-time-performance-otp.md) — related

# Distinctions
- **A-CDM (Airport Collaborative Decision Making)** vs [Departure Control System (DCS)](/air/air-ops/departure-control-system-dcs.md) — A DCS is the airline or airport system that manages passenger check-in, baggage acceptance, seat assignment, boarding, and weight-and-balance — it handles the passenger and baggage lifecycle. A-CDM is a cross-stakeholder data-sharing framework that coordinates the aircraft turnaround process to improve departure punctuality; A-CDM consumes DCS data (e.g., boarding status) as input but focuses on sequencing, slot utilisation, and ATFM coordination.
- **A-CDM (Airport Collaborative Decision Making)** vs [Aircraft Turnaround](/air/air-ops/aircraft-turnaround.md) — Aircraft Turnaround is the total ground time from landing to next departure for a single aircraft; A-CDM is the collaborative framework that manages and shares data about turnaround milestones across all airport stakeholders in real time to improve the predictability and efficiency of that turnaround process.

# Citations
[1] [EUROCONTROL — EUROCONTROL Specification for Airport Collaborative Decision Making, Edition 1.0 (January 2025)](https://www.eurocontrol.int/publication/eurocontrol-specification-airport-collaborative-decision-making-cdm)
[2] [EUROCONTROL — Airport Collaborative Decision Making concept page](https://www.eurocontrol.int/concept/airport-collaborative-decision-making)
