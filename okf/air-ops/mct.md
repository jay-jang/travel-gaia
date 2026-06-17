---
type: Standard Term
title: MCT
description: 'Minimum Connecting Time (MCT) is the shortest published time interval required for a passenger and their baggage to transfer between two flights at a given airport for the connection to be considered legal and bookable. It varies by airport, terminal, domestic/international status, and carrier combination.'
tags:
  - air-ops
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: mct
category: air-ops
conceptType: standard-term
status: active
abbreviation: MCT
term_ko: 최소 연결 시간(MCT)
definition_ko: 'MCT(Minimum Connecting Time, 최소 연결 시간)는 특정 공항에서 두 항공편 간 승객과 수하물이 환승하는 데 필요한, 해당 연결이 정상적이고 예약 가능한 것으로 간주되기 위한 최소 공시 시간 간격이다. 공항, 터미널, 국내/국제 여부, 항공사 조합에 따라 달라진다.'
longDef: 'MCT values are published by airports and carriers and aggregated by IATA in standard reference data, and reservation/availability systems use them to validate whether a connection is legal before offering it. Distinct MCTs apply to combinations such as domestic-to-domestic, domestic-to-international, international-to-international, and online versus interline connections. A connection shorter than the applicable MCT is normally rejected by booking systems as an illegal connection.'
longDef_ko: 'MCT 값은 공항과 항공사가 공시하고 IATA가 표준 참조 데이터로 집계하며, 예약/가용성 시스템은 연결편을 제공하기 전에 해당 연결이 정상적인지 검증하는 데 이를 사용한다. 국내-국내, 국내-국제, 국제-국제, 그리고 online(자사) 연결과 interline 연결과 같은 조합에 각각 다른 MCT가 적용된다. 적용 MCT보다 짧은 연결은 일반적으로 예약 시스템에 의해 비정상 연결(illegal connection)로 거부된다.'
standardBody: IATA
aliases:
  - Minimum Connecting Time
  - Minimum Connect Time
relationships:
  - type: related
    targetTerm: Segment
  - type: related
    targetTerm: Journey
  - type: related
    targetTerm: Interline
  - type: related
    targetTerm: Availability
distinctions:
  - targetTerm: Slot
    explanation: 'MCT is the minimum passenger/baggage transfer time governing connection legality, whereas a slot is an allocated airport authorization to use runway/terminal capacity at a specific time.'
    explanation_ko: 'MCT는 연결 적법성을 좌우하는 승객/수하물의 최소 환승 시간인 반면, slot은 특정 시각에 활주로/터미널 용량을 사용하도록 배정된 공항 허가다.'
sources:
  - name: Standard Schedules Information Manual (SSIM)
    org: IATA
    version: ''
    section: ''
    url: ''
icon: '<svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="27" r="13"/><polyline points="24,20 24,27 29,30"/><path d="M9 9 H17 M17 9 L14 6 M17 9 L14 12"/><path d="M39 14 H31 M31 14 L34 11 M31 14 L34 17"/></svg>'
---

> Minimum Connecting Time (MCT) is the shortest published time interval required for a passenger and their baggage to transfer between two flights at a given airport for the connection to be considered legal and bookable. It varies by airport, terminal, domestic/international status, and carrier combination.

MCT values are published by airports and carriers and aggregated by IATA in standard reference data, and reservation/availability systems use them to validate whether a connection is legal before offering it. Distinct MCTs apply to combinations such as domestic-to-domestic, domestic-to-international, international-to-international, and online versus interline connections. A connection shorter than the applicable MCT is normally rejected by booking systems as an illegal connection.

**한국어 / Korean** — **최소 연결 시간(MCT)** — MCT(Minimum Connecting Time, 최소 연결 시간)는 특정 공항에서 두 항공편 간 승객과 수하물이 환승하는 데 필요한, 해당 연결이 정상적이고 예약 가능한 것으로 간주되기 위한 최소 공시 시간 간격이다. 공항, 터미널, 국내/국제 여부, 항공사 조합에 따라 달라진다.

MCT 값은 공항과 항공사가 공시하고 IATA가 표준 참조 데이터로 집계하며, 예약/가용성 시스템은 연결편을 제공하기 전에 해당 연결이 정상적인지 검증하는 데 이를 사용한다. 국내-국내, 국내-국제, 국제-국제, 그리고 online(자사) 연결과 interline 연결과 같은 조합에 각각 다른 MCT가 적용된다. 적용 MCT보다 짧은 연결은 일반적으로 예약 시스템에 의해 비정상 연결(illegal connection)로 거부된다.

**Aliases:** `Minimum Connecting Time`, `Minimum Connect Time`

# Related
- [Segment](/air-ops/segment.md) — related
- [Journey](/air-shop/journey.md) — related
- [Interline](/air-partner/interline.md) — related
- [Availability](/air-shop/availability.md) — related

# Distinctions
- **MCT** vs [Slot](/air-partner/slot.md) — MCT is the minimum passenger/baggage transfer time governing connection legality, whereas a slot is an allocated airport authorization to use runway/terminal capacity at a specific time.

# Citations
[1] IATA — Standard Schedules Information Manual (SSIM)
