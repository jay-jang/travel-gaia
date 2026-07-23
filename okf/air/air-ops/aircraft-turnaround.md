---
type: Business Term
title: Aircraft Turnaround
description: 'Aircraft Turnaround (also called turn time or ground turn) is the total time an aircraft spends on the ground between arriving at a gate and departing on its next flight, encompassing all ground-handling activities — passenger deplaning and boarding, baggage exchange, cargo loading, fueling, catering, cabin cleaning, technical checks, and pushback.'
tags:
  - air-ops
  - active
  - IATA
timestamp: '2026-07-23T00:00:00Z'
id: aircraft-turnaround
vertical: air
category: air-ops
conceptType: business-term
status: active
term_ko: 항공기 지상 회전(Aircraft Turnaround)
definition_ko: '항공기 지상 회전(Aircraft Turnaround, 턴 타임 또는 그라운드 턴이라고도 함)은 항공기가 게이트에 도착한 후 다음 운항을 위해 출발할 때까지 지상에서 보내는 총 시간으로, 승객 하기·탑승, 수하물 교환, 화물 적재, 연료 보급, 케이터링, 객실 청소, 기술 점검, 푸시백 등 모든 지상 처리 활동을 포함한다.'
longDef: 'The turnaround time is a critical constraint in airline scheduling and operations control. Low-cost carriers (LCCs) such as Southwest, Ryanair, and easyJet have built their business models around minimising turnaround times — often targeting 25 minutes or less — to achieve high aircraft utilisation and reduce the number of aircraft required for a given network. Full-service carriers typically plan longer turns (60–90 min) to accommodate connecting passengers, catering for long-haul cabins, and more complex ground processes. IATA''s Ground Operations Manual (IGOM) standardises the sequence and safety protocols for each ground-handling task within the turnaround. The Minimum Ground Time (MGT) is the shortest safe turn the airline schedules; actual turns that overrun MGT generate delay codes under IATA/AHM 730 and feed into punctuality reporting. Aircraft utilisation, measured in block hours per aircraft per day, is directly limited by average turnaround time: a 10-minute reduction in turns across a 10-aircraft fleet can effectively add an extra flying slot per aircraft per day.'
longDef_ko: '지상 회전 시간은 항공 일정 계획과 운항 통제에서 핵심적인 제약 요소다. 사우스웨스트, 라이언에어, 이지젯 등 저비용 항공사(LCC)는 통상 25분 이하를 목표로 지상 회전 시간을 최소화하는 것을 중심으로 비즈니스 모델을 구축하여, 높은 항공기 가동률을 달성하고 주어진 네트워크에 필요한 항공기 수를 줄인다. 풀서비스 항공사는 연결 승객 수용, 장거리 노선 기내식 서비스, 더 복잡한 지상 절차를 위해 통상 더 긴 회전 시간(60~90분)을 계획한다. IATA의 지상운영 매뉴얼(IGOM)은 지상 회전 내 각 지상 처리 작업의 순서와 안전 절차를 표준화한다. 최소 지상 시간(MGT, Minimum Ground Time)은 항공사가 계획하는 가장 짧은 안전 회전 시간이며, MGT를 초과하는 실제 회전은 IATA/AHM 730에 따른 지연 코드를 생성하고 정시 운항 보고에 반영된다. 항공기 가동률(항공기당 일일 블록 시간으로 측정)은 평균 지상 회전 시간에 직접 제한되며, 10기 항공기 대수에서 회전 시간을 10분 단축하면 항공기당 하루 비행 슬롯이 사실상 한 편 추가된다.'
standardBody: IATA
aliases:
  - Turn Time
  - Ground Turn
  - Gate Turn
  - Turnaround Time
  - Aircraft Turn
relationships:
  - type: related
    targetTerm: Block Time
  - type: related
    targetTerm: Aircraft Utilization
  - type: related
    targetTerm: Slot
distinctions:
  - targetTerm: Block Time
    explanation: 'Block Time is the total elapsed time from when an aircraft''s parking brakes are released at departure until they are set at the destination gate; Aircraft Turnaround is the ground phase at the destination between that block-in and the next block-out. Block Time is the airborne (and taxi) metric; Turnaround is the intervening ground metric.'
    explanation_ko: 'Block Time은 출발 시 항공기 주차 브레이크 해제부터 목적지 게이트에서 브레이크 설정까지의 총 경과 시간이고, Aircraft Turnaround는 해당 block-in과 다음 block-out 사이의 목적지 지상 단계다. Block Time은 비행(및 지상 이동) 지표이고, Turnaround는 그 사이의 지상 지표다.'
  - targetTerm: Aircraft Utilization
    explanation: 'Aircraft Utilization measures how many block hours an aircraft flies per day (or year); the Aircraft Turnaround time is the principal driver that limits how many flights — and therefore how many block hours — can be operated per day. Shorter turns directly increase utilization.'
    explanation_ko: '항공기 가동률은 항공기가 하루(또는 연간) 비행하는 블록 시간 수를 측정하고, 항공기 지상 회전 시간은 하루에 운항할 수 있는 비행 편수(따라서 블록 시간 수)를 제한하는 주요 요인이다. 회전 시간이 짧을수록 가동률이 직접 향상된다.'
  - targetTerm: Slot
    explanation: 'A Slot is the scheduled permission for an aircraft to use airport infrastructure (runway, gate) at a specific time; the Aircraft Turnaround is the actual ground-time process that must be completed within the window between the in-bound slot and the next out-bound slot.'
    explanation_ko: 'Slot은 항공기가 특정 시간에 공항 인프라(활주로, 게이트)를 사용할 수 있는 예약 허가이고, Aircraft Turnaround는 인바운드 슬롯과 다음 아웃바운드 슬롯 사이의 창 내에서 완료되어야 하는 실제 지상 처리 프로세스다.'
sources:
  - name: 'IATA — Ground Operations Manual (IGOM)'
    org: IATA
    version: '12th Edition (2023)'
    section: Turnaround coordination and ground handling
    url: 'https://www.iata.org/en/publications/manuals/ground-operations-manual/'
    tier: association
  - name: 'Eurocontrol CODA — Digest: Delays to Air Transport in Europe'
    org: Eurocontrol CODA
    version: ''
    section: Delay code and turnaround analysis
    url: 'https://www.eurocontrol.int/publication/delays-air-transport-europe-coda-digest'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M8 32l8-14 4 6 8-12 4 6 8-10"/><path d="M8 38h32"/><circle cx="8" cy="32" r="2" fill="currentColor" stroke="none"/><circle cx="40" cy="22" r="2" fill="currentColor" stroke="none"/><path d="M36 10l4 12-4 0"/></svg>
---

> Aircraft Turnaround (also called turn time or ground turn) is the total time an aircraft spends on the ground between arriving at a gate and departing on its next flight, encompassing all ground-handling activities — passenger deplaning and boarding, baggage exchange, cargo loading, fueling, catering, cabin cleaning, technical checks, and pushback.

The turnaround time is a critical constraint in airline scheduling and operations control. Low-cost carriers (LCCs) such as Southwest, Ryanair, and easyJet have built their business models around minimising turnaround times — often targeting 25 minutes or less — to achieve high aircraft utilisation and reduce the number of aircraft required for a given network. Full-service carriers typically plan longer turns (60–90 min) to accommodate connecting passengers, catering for long-haul cabins, and more complex ground processes. IATA's Ground Operations Manual (IGOM) standardises the sequence and safety protocols for each ground-handling task within the turnaround. The Minimum Ground Time (MGT) is the shortest safe turn the airline schedules; actual turns that overrun MGT generate delay codes under IATA/AHM 730 and feed into punctuality reporting. Aircraft utilisation, measured in block hours per aircraft per day, is directly limited by average turnaround time: a 10-minute reduction in turns across a 10-aircraft fleet can effectively add an extra flying slot per aircraft per day.

**한국어 / Korean** — **항공기 지상 회전(Aircraft Turnaround)** — 항공기 지상 회전(Aircraft Turnaround, 턴 타임 또는 그라운드 턴이라고도 함)은 항공기가 게이트에 도착한 후 다음 운항을 위해 출발할 때까지 지상에서 보내는 총 시간으로, 승객 하기·탑승, 수하물 교환, 화물 적재, 연료 보급, 케이터링, 객실 청소, 기술 점검, 푸시백 등 모든 지상 처리 활동을 포함한다.

지상 회전 시간은 항공 일정 계획과 운항 통제에서 핵심적인 제약 요소다. 저비용 항공사(LCC)는 지상 회전 시간 최소화(통상 25분 이하 목표)를 중심으로 비즈니스 모델을 구축한다. IATA의 지상운영 매뉴얼(IGOM)은 지상 회전 내 각 처리 작업의 순서와 안전 절차를 표준화한다. MGT(최소 지상 시간) 초과는 지연 코드를 생성하고 정시 운항 보고에 반영된다.

**Aliases:** `Turn Time`, `Ground Turn`, `Gate Turn`, `Turnaround Time`, `Aircraft Turn`

# Related
- [Block Time](/air/air-ops/block-time.md) — related
- [Aircraft Utilization](/air/air-ops/aircraft-utilization.md) — related
- [Slot](/air/air-ops/slot.md) — related

# Distinctions
- **Aircraft Turnaround** vs [Block Time](/air/air-ops/block-time.md) — Block Time is the total elapsed time from when an aircraft's parking brakes are released at departure until they are set at the destination gate; Aircraft Turnaround is the ground phase at the destination between that block-in and the next block-out. Block Time is the airborne (and taxi) metric; Turnaround is the intervening ground metric.
- **Aircraft Turnaround** vs [Aircraft Utilization](/air/air-ops/aircraft-utilization.md) — Aircraft Utilization measures how many block hours an aircraft flies per day (or year); the Aircraft Turnaround time is the principal driver that limits how many flights — and therefore how many block hours — can be operated per day. Shorter turns directly increase utilization.
- **Aircraft Turnaround** vs [Slot](/air/air-ops/slot.md) — A Slot is the scheduled permission for an aircraft to use airport infrastructure (runway, gate) at a specific time; the Aircraft Turnaround is the actual ground-time process that must be completed within the window between the in-bound slot and the next out-bound slot.

# Citations
[1] [IATA — Ground Operations Manual (IGOM) 12th Edition](https://www.iata.org/en/publications/manuals/ground-operations-manual/)
[2] [Eurocontrol CODA — Delays to Air Transport in Europe — Digest](https://www.eurocontrol.int/publication/delays-air-transport-europe-coda-digest)
