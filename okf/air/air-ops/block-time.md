---
type: Business Term
title: Block Time
description: 'Block Time is the elapsed operational time of a flight measured from off-blocks (chocks removed, brakes released for pushback or taxi) at the departure stand to on-blocks (chocks in, parking brake set) at the arrival stand. It is the standard time unit for airline scheduling (SSIM), crew-duty and block-hour calculations, airport slot management, and IATA delay-code measurement.'
tags:
  - air-ops
  - active
  - IATA
timestamp: '2026-06-30T00:00:00Z'
id: block-time
vertical: air
category: air-ops
conceptType: business-term
status: active
abbreviation: BLK
term_ko: 블록 타임(Block Time)
definition_ko: '블록 타임은 출발 스탠드에서 항공기의 off-blocks(바퀴 고임대 제거·제동 해제·푸시백 또는 지상 활주 시작) 시각부터 도착 스탠드에서의 on-blocks(바퀴 고임대 설치·주차 제동 잠금) 시각까지의 운항 경과 시간이다. 항공사 스케줄링(SSIM), 승무원 근무 및 블록 시간 계산, 공항 슬롯 관리, IATA 지연 코드 측정의 표준 시간 단위다.'
longDef: 'Block Time = taxi-out time + airborne (flight) time + taxi-in time. It differs from flight time (wheels-up to wheels-down, airborne only) and from elapsed journey time (gate-to-gate door-open to door-open). IATA''s Standard Schedules Information Manual (SSIM) defines scheduled block time as the primary field in the Standard Schedules Message (SSM), which carriers file with GDSs and slot coordinators. Actual departure delay under IATA delay codes is measured as the difference between the published scheduled off-blocks time (SOBT) and the actual off-blocks time (AOBT), the latter captured by A-CDM (Airport Collaborative Decision Making) systems. Block hours are the primary unit airlines use to measure engine utilization for maintenance intervals, lease billing, and crew pairing — a Boeing 737 typical block-hour burn rate is approximately 800 kg/h of fuel. FAA 14 CFR Part 117, EASA OPS Subpart FTL, and ICAO Annex 6 all define maximum block-hour limits for crew-duty and rest-period regulations.'
longDef_ko: '블록 타임 = 지상 활주(출발) 시간 + 공중 비행 시간 + 지상 활주(도착) 시간이다. 이륙부터 착륙까지의 공중 시간만을 의미하는 비행 시간(flight time), 또는 게이트-투-게이트 도어 개방 시각 간 경과 시간과는 구별된다. IATA의 표준 스케줄 정보 매뉴얼(SSIM)은 항공사가 GDS 및 슬롯 조정 기관에 제출하는 표준 스케줄 메시지(SSM)의 핵심 필드로 예정 블록 타임을 정의한다. IATA 지연 코드에서 출발 지연은 게시된 예정 off-blocks 시각(SOBT)과 실제 off-blocks 시각(AOBT)의 차이로 측정되며, AOBT는 A-CDM(공항 협력 의사결정) 시스템이 포착한다. 블록 시간은 항공사가 엔진 사용량(정비 주기·리스 청구)과 승무원 페어링 측정에 사용하는 기본 단위이다. FAA 14 CFR Part 117, EASA OPS Subpart FTL, ICAO Annex 6 모두 승무원 근무 및 휴식 규정에 최대 블록 시간 한도를 정의한다.'
aliases:
  - Block Hours
  - BLK Time
  - Chock-to-Chock Time
  - Gate-to-Gate Block Time
relationships:
  - type: related
    targetTerm: Segment
  - type: related
    targetTerm: IATA Delay Codes
  - type: related
    targetTerm: Flight Number
distinctions:
  - targetTerm: Segment
    explanation: 'A Segment is the commercial booking unit representing a single flight between an origin and destination; Block Time is the operational time measurement for that same flight from off-blocks to on-blocks, used for scheduling, crew-duty rules, and slot allocation rather than as a sales or itinerary concept.'
    explanation_ko: 'Segment는 출발지와 목적지 사이의 단일 비행을 나타내는 상업적 예약 단위이고, 블록 타임은 같은 비행에 대해 off-blocks에서 on-blocks까지 측정된 운항 시간으로, 판매·일정 개념이 아닌 스케줄링·승무원 근무 규정·슬롯 배분에 사용된다.'
  - targetTerm: IATA Delay Codes
    explanation: 'IATA Delay Codes classify the cause of a departure delay, which is measured as the gap between the published scheduled block time (SOBT) and the actual off-blocks time (AOBT); Block Time itself is the time reference being compared, not a cause category.'
    explanation_ko: 'IATA 지연 코드는 출발 지연의 원인을 분류하며, 지연은 예정 off-blocks 시각(SOBT)과 실제 off-blocks 시각(AOBT) 간의 차이로 측정된다. 블록 타임 자체는 비교 기준이 되는 시간 참조점이지 원인 범주가 아니다.'
sources:
  - name: Standard Schedules Information Manual (SSIM)
    org: IATA
    version: ''
    section: 'Chapter 6 — Standard Schedules Messages'
    url: 'https://www.iata.org/en/publications/manuals/standard-schedules-information-manual/'
    tier: association
  - name: Airport Handling Manual (AHM)
    org: IATA
    version: ''
    section: 'AHM 810 — Standard Ground Handling Agreement'
    url: 'https://www.iata.org/en/publications/manuals/airport-handling-manual/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="20" width="8" height="8" rx="1"/><rect x="36" y="20" width="8" height="8" rx="1"/><line x1="12" y1="24" x2="36" y2="24"/><path d="M20 24c0-5 8-8 12-4"/><path d="M24 13l4 5h-8z"/><circle cx="24" cy="38" r="3"/></svg>
---

> Block Time is the elapsed operational time of a flight measured from off-blocks (chocks removed, brakes released for pushback or taxi) at the departure stand to on-blocks (chocks in, parking brake set) at the arrival stand. It is the standard time unit for airline scheduling (SSIM), crew-duty and block-hour calculations, airport slot management, and IATA delay-code measurement.

Block Time = taxi-out time + airborne (flight) time + taxi-in time. It differs from flight time (wheels-up to wheels-down, airborne only) and from elapsed journey time (gate-to-gate door-open to door-open). IATA's Standard Schedules Information Manual (SSIM) defines scheduled block time as the primary field in the Standard Schedules Message (SSM), which carriers file with GDSs and slot coordinators. Actual departure delay under IATA delay codes is measured as the difference between the published scheduled off-blocks time (SOBT) and the actual off-blocks time (AOBT), the latter captured by A-CDM (Airport Collaborative Decision Making) systems. Block hours are the primary unit airlines use to measure engine utilization for maintenance intervals, lease billing, and crew pairing — a Boeing 737 typical block-hour burn rate is approximately 800 kg/h of fuel. FAA 14 CFR Part 117, EASA OPS Subpart FTL, and ICAO Annex 6 all define maximum block-hour limits for crew-duty and rest-period regulations.

**한국어 / Korean** — **블록 타임(Block Time)** — 블록 타임은 출발 스탠드에서 항공기의 off-blocks(바퀴 고임대 제거·제동 해제·푸시백 또는 지상 활주 시작) 시각부터 도착 스탠드에서의 on-blocks(바퀴 고임대 설치·주차 제동 잠금) 시각까지의 운항 경과 시간이다. 항공사 스케줄링(SSIM), 승무원 근무 및 블록 시간 계산, 공항 슬롯 관리, IATA 지연 코드 측정의 표준 시간 단위다.

블록 타임 = 지상 활주(출발) 시간 + 공중 비행 시간 + 지상 활주(도착) 시간이다. 이륙부터 착륙까지의 공중 시간만을 의미하는 비행 시간(flight time), 또는 게이트-투-게이트 도어 개방 시각 간 경과 시간과는 구별된다. IATA의 표준 스케줄 정보 매뉴얼(SSIM)은 항공사가 GDS 및 슬롯 조정 기관에 제출하는 표준 스케줄 메시지(SSM)의 핵심 필드로 예정 블록 타임을 정의한다. IATA 지연 코드에서 출발 지연은 게시된 예정 off-blocks 시각(SOBT)과 실제 off-blocks 시각(AOBT)의 차이로 측정되며, AOBT는 A-CDM(공항 협력 의사결정) 시스템이 포착한다. 블록 시간은 항공사가 엔진 사용량(정비 주기·리스 청구)과 승무원 페어링 측정에 사용하는 기본 단위이다. FAA 14 CFR Part 117, EASA OPS Subpart FTL, ICAO Annex 6 모두 승무원 근무 및 휴식 규정에 최대 블록 시간 한도를 정의한다.

**Aliases:** `Block Hours`, `BLK Time`, `Chock-to-Chock Time`, `Gate-to-Gate Block Time`

# Related
- [Segment](/air/air-ops/segment.md) — related
- [IATA Delay Codes](/common/codes/iata-delay-codes.md) — related
- [Flight Number](/common/codes/flight-number.md) — related

# Distinctions
- **Block Time** vs [Segment](/air/air-ops/segment.md) — A Segment is the commercial booking unit representing a single flight between an origin and destination; Block Time is the operational time measurement for that same flight from off-blocks to on-blocks, used for scheduling, crew-duty rules, and slot allocation rather than as a sales or itinerary concept.
- **Block Time** vs [IATA Delay Codes](/common/codes/iata-delay-codes.md) — IATA Delay Codes classify the cause of a departure delay, which is measured as the gap between the published scheduled block time (SOBT) and the actual off-blocks time (AOBT); Block Time itself is the time reference being compared, not a cause category.

# Citations
[1] [IATA — Standard Schedules Information Manual (SSIM)](https://www.iata.org/en/publications/manuals/standard-schedules-information-manual/)
[2] [IATA — Airport Handling Manual (AHM)](https://www.iata.org/en/publications/manuals/airport-handling-manual/)
