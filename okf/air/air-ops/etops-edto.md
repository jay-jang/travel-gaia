---
type: Standard
title: ETOPS/EDTO
description: 'ETOPS/EDTO (Extended-range Twin-engine Operational Performance Standards / Extended Diversion Time Operations) is the regulatory framework that allows twin-engine (and, under ICAO''s broader EDTO term, multi-engine) aircraft to operate routes where the diversion time to an adequate alternate airport exceeds a threshold — historically 60 minutes on a single engine. Both the aircraft type and the operating airline must be separately approved for a specific ETOPS time limit (e.g., 120, 180, 240 minutes).'
tags:
  - air-ops
  - active
  - ICAO
timestamp: '2026-07-10T00:00:00Z'
id: etops-edto
vertical: air
category: air-ops
conceptType: standard
status: active
abbreviation: ETOPS/EDTO
term_ko: 쌍발 장거리 운항 기준 / 연장 회항시간 운항(ETOPS/EDTO)
definition_ko: 'ETOPS/EDTO(Extended-range Twin-engine Operational Performance Standards / Extended Diversion Time Operations)는 쌍발(ETOPS) 또는 다발(ICAO EDTO) 항공기가 적합한 대체 공항까지의 회항 시간이 역사적 기준인 단발 60분을 초과하는 항로를 운항할 수 있도록 허용하는 규제 체계다. 특정 ETOPS 시간 한도(예: 120분, 180분, 240분)에 대해 기종(type design)과 운항 항공사가 별도로 승인을 받아야 한다.'
longDef: 'Before ETOPS, the FAA''s 60-minute rule confined twin-engine airliners to routes within one engine-out flight from a diversion airport, barring them from long overwater transoceanic routes. The first commercial ETOPS approval was granted to TWA in 1985 for B767 North Atlantic operations (ETOPS-120). As airframe reliability improved, authorities expanded limits: ETOPS-180 is now standard for North Atlantic and Pacific routes; ETOPS-207 (3.5 hours) and ETOPS-240 exist for remote Pacific segments; ETOPS-330 is the maximum, enabling ultra-long routes such as Australia–South America. ICAO adopted the term EDTO (Extended Diversion Time Operations) in Amendment 38 to Annex 6 Part I (2012) to encompass all multi-engine aircraft types — not just twins. Both the aircraft type certificate and the operator must hold separate approvals specifying maintenance programs, ETOPS-suitable alternates, fuel reserves, and dispatch procedures.'
longDef_ko: 'ETOPS 이전 FAA의 60분 규칙은 쌍발 여객기를 대체 공항까지 단발 비행 60분 이내 항로로 제한하여 장거리 해상 횡단 항로 운항을 금지했다. 최초 상업용 ETOPS 승인은 1985년 TWA의 B767 북대서양 운항(ETOPS-120)에 부여되었다. 기체 신뢰성이 향상되면서 허용 범위가 확대되었다. ETOPS-180은 현재 북대서양·태평양 항로의 표준이며, 원격 태평양 구간에는 ETOPS-207(3.5시간)·ETOPS-240이, 호주–남미 등 초장거리 항로에는 최대치인 ETOPS-330이 적용된다. ICAO는 2012년 부속서 6 Part I 개정 38호에서 쌍발 외 다발 항공기 전체를 포괄하는 EDTO(Extended Diversion Time Operations)라는 용어를 채택했다. 기종 형식증명과 운항 항공사는 정비 프로그램, ETOPS 적합 대체 공항, 연료 예비량, 출발 절차를 명시한 각각의 별도 승인을 보유해야 한다.'
standardBody: ICAO
aliases:
  - Extended-range Twin-engine Operational Performance Standards
  - Extended Diversion Time Operations
  - EDTO
  - ETOPS
relationships:
  - type: related
    targetTerm: Block Time
  - type: related
    targetTerm: NOTAM
  - type: related
    targetTerm: AOG
  - type: related
    targetTerm: Wet Lease
distinctions:
  - targetTerm: Block Time
    explanation: Block Time is the duration of a completed flight from pushback to engine shutdown; ETOPS/EDTO is the regulatory approval framework that permits twin-engine aircraft to operate specific routes where the single-engine diversion time exceeds the basic 60-minute threshold.
    explanation_ko: 'Block Time은 항공편 출발(pushback)부터 엔진 정지까지의 실제 비행 시간이고, ETOPS/EDTO는 쌍발 항공기가 단발 회항 시간이 기본 60분 임계값을 초과하는 특정 항로를 운항할 수 있도록 허용하는 규제 승인 체계다.'
  - targetTerm: AOG
    explanation: An AOG (Aircraft on Ground) occurs when mechanical unserviceability grounds a specific aircraft; ETOPS/EDTO is a pre-flight regulatory framework governing which routes and alternates are permissible for twin-engine types. An AOG on an ETOPS-certified aircraft does not revoke the airline''s ETOPS program.
    explanation_ko: 'AOG는 기계적 결함으로 특정 항공기가 운항 불능 상태가 된 것이고, ETOPS/EDTO는 쌍발 기종에 허용되는 항로와 대체 공항을 규정하는 비행 전 규제 체계다. ETOPS 인증 항공기에 AOG가 발생해도 항공사의 ETOPS 프로그램 자체가 취소되지는 않는다.'
sources:
  - name: Advisory Circular 120-42B — Extended Operations (ETOPS and Polar Operations)
    org: FAA
    version: AC 120-42B (Change 1, 2015)
    section: General
    url: https://rgl.faa.gov/Regulatory_and_Guidance_Library/rgAdvisoryCircular.nsf/0/c17e2398c9a9f74b862579e5005e9875/$FILE/AC120-42B.pdf
    tier: regulator-guidance
  - name: ICAO Annex 6 — Operation of Aircraft, Part I, Section 4.7 Extended Diversion Time Operations
    org: ICAO
    version: 11th Edition (2018)
    section: '4.7'
    url: https://store.icao.int/en/annex-6-operation-of-aircraft-part-i-international-commercial-air-transport-aeroplanes
    tier: standard-body
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="24" r="17"/><path d="M7 24h34"/><path d="M24 7a28 28 0 0 1 0 34M24 7a28 28 0 0 0 0 34"/><path d="M16 18l5 2-2 2 2 4-4-1-2 2-3-8z"/><path d="M28 28l4 2"/></svg>
---

> ETOPS/EDTO (Extended-range Twin-engine Operational Performance Standards / Extended Diversion Time Operations) is the regulatory framework that allows twin-engine (and, under ICAO's broader EDTO term, multi-engine) aircraft to operate routes where the diversion time to an adequate alternate airport exceeds a threshold — historically 60 minutes on a single engine. Both the aircraft type and the operating airline must be separately approved for a specific ETOPS time limit (e.g., 120, 180, 240 minutes).

Before ETOPS, the FAA's 60-minute rule confined twin-engine airliners to routes within one engine-out flight from a diversion airport, barring them from long overwater transoceanic routes. The first commercial ETOPS approval was granted to TWA in 1985 for B767 North Atlantic operations (ETOPS-120). As airframe reliability improved, authorities expanded limits: ETOPS-180 is now standard for North Atlantic and Pacific routes; ETOPS-207 (3.5 hours) and ETOPS-240 exist for remote Pacific segments; ETOPS-330 is the maximum, enabling ultra-long routes such as Australia–South America. ICAO adopted the term EDTO (Extended Diversion Time Operations) in Amendment 38 to Annex 6 Part I (2012) to encompass all multi-engine aircraft types — not just twins. Both the aircraft type certificate and the operator must hold separate approvals specifying maintenance programs, ETOPS-suitable alternates, fuel reserves, and dispatch procedures.

**한국어 / Korean** — **쌍발 장거리 운항 기준 / 연장 회항시간 운항(ETOPS/EDTO)** — ETOPS/EDTO(Extended-range Twin-engine Operational Performance Standards / Extended Diversion Time Operations)는 쌍발(ETOPS) 또는 다발(ICAO EDTO) 항공기가 적합한 대체 공항까지의 회항 시간이 역사적 기준인 단발 60분을 초과하는 항로를 운항할 수 있도록 허용하는 규제 체계다. 특정 ETOPS 시간 한도(예: 120분, 180분, 240분)에 대해 기종(type design)과 운항 항공사가 별도로 승인을 받아야 한다.

ETOPS 이전 FAA의 60분 규칙은 쌍발 여객기를 대체 공항까지 단발 비행 60분 이내 항로로 제한하여 장거리 해상 횡단 항로 운항을 금지했다. 최초 상업용 ETOPS 승인은 1985년 TWA의 B767 북대서양 운항(ETOPS-120)에 부여되었다. 기체 신뢰성이 향상되면서 허용 범위가 확대되었다. ETOPS-180은 현재 북대서양·태평양 항로의 표준이며, 원격 태평양 구간에는 ETOPS-207(3.5시간)·ETOPS-240이, 호주–남미 등 초장거리 항로에는 최대치인 ETOPS-330이 적용된다. ICAO는 2012년 부속서 6 Part I 개정 38호에서 쌍발 외 다발 항공기 전체를 포괄하는 EDTO(Extended Diversion Time Operations)라는 용어를 채택했다. 기종 형식증명과 운항 항공사는 정비 프로그램, ETOPS 적합 대체 공항, 연료 예비량, 출발 절차를 명시한 각각의 별도 승인을 보유해야 한다.

**Aliases:** `Extended-range Twin-engine Operational Performance Standards`, `Extended Diversion Time Operations`, `EDTO`, `ETOPS`

# Related
- [Block Time](/air/air-ops/block-time.md) — related
- [NOTAM](/air/air-ops/notam.md) — related
- [AOG](/air/air-ops/aog.md) — related
- [Wet Lease](/air/air-partner/wet-lease.md) — related

# Distinctions
- **ETOPS/EDTO** vs [Block Time](/air/air-ops/block-time.md) — Block Time is the duration of a completed flight from pushback to engine shutdown; ETOPS/EDTO is the regulatory approval framework that permits twin-engine aircraft to operate specific routes where the single-engine diversion time exceeds the basic 60-minute threshold.
- **ETOPS/EDTO** vs [AOG](/air/air-ops/aog.md) — An AOG (Aircraft on Ground) occurs when mechanical unserviceability grounds a specific aircraft; ETOPS/EDTO is a pre-flight regulatory framework governing which routes and alternates are permissible for twin-engine types. An AOG on an ETOPS-certified aircraft does not revoke the airline's ETOPS program.

# Citations
[1] [FAA — Advisory Circular 120-42B — Extended Operations (ETOPS and Polar Operations) — AC 120-42B (Change 1, 2015)](https://rgl.faa.gov/Regulatory_and_Guidance_Library/rgAdvisoryCircular.nsf/0/c17e2398c9a9f74b862579e5005e9875/$FILE/AC120-42B.pdf)
[2] [ICAO — ICAO Annex 6 — Operation of Aircraft, Part I, Section 4.7 Extended Diversion Time Operations — 11th Edition (2018)](https://store.icao.int/en/annex-6-operation-of-aircraft-part-i-international-commercial-air-transport-aeroplanes)
