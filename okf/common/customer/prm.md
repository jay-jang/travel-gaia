---
type: Business Term
title: PRM
description: 'A Passenger with Reduced Mobility — any person whose mobility is reduced due to physical or mental disability, age, illness or other cause and who needs special assistance during travel. PRM needs are communicated to carriers and airports through standardized special-service request codes.'
tags:
  - customer
  - active
  - IATA
timestamp: '2026-06-15T00:00:00Z'
id: prm
vertical: common
category: customer
conceptType: business-term
status: active
abbreviation: PRM
term_ko: 거동 불편 승객 (PRM)
definition_ko: '거동 불편 승객(Passenger with Reduced Mobility)으로, 신체적·정신적 장애, 연령, 질병 또는 기타 사유로 거동이 불편하여 여행 중 특별 지원이 필요한 모든 사람을 말한다. PRM의 요구 사항은 표준화된 특별 서비스 요청(SSR) 코드를 통해 항공사와 공항에 전달된다.'
longDef: 'PRM is an umbrella concept covering travelers requiring assistance; specific needs are encoded as SSR codes such as WCHR (wheelchair to ramp), WCHS (to steps), WCHC (to seat), BLND (blind), DEAF, and DPNA (intellectual/developmental disability). These requests ensure airports and airlines arrange wheelchairs, escorts and other accommodations, and they are governed by accessibility regulations (e.g. EC Regulation 1107/2006 in Europe and the US Air Carrier Access Act). PRM handling is a service obligation distinct from general OSI informational messages.'
longDef_ko: 'PRM은 지원이 필요한 여행자를 포괄하는 상위 개념이며, 구체적인 요구 사항은 WCHR(램프까지 휠체어), WCHS(계단까지), WCHC(좌석까지), BLND(시각장애), DEAF(청각장애), DPNA(지적/발달 장애) 같은 SSR 코드로 부호화된다. 이러한 요청은 공항과 항공사가 휠체어, 동행 안내, 기타 편의를 준비하도록 보장하며, 접근성 규정(예: 유럽의 EC Regulation 1107/2006, 미국의 Air Carrier Access Act)의 적용을 받는다. PRM 처리는 일반적인 OSI 정보성 메시지와 구별되는 서비스 의무이다.'
standardBody: IATA
aliases:
  - Passenger with Reduced Mobility
  - Person with Reduced Mobility
  - Passengers with Reduced Mobility
  - Disabled passenger
relationships:
  - type: related
    targetTerm: SSR
  - type: related
    targetTerm: OSI
  - type: related
    targetTerm: PNR
distinctions:
  - targetTerm: SSR
    explanation: 'PRM is the traveler category/need; SSR codes (e.g. WCHR, BLND) are the standardized messages used to request the corresponding assistance.'
    explanation_ko: 'PRM은 여행자 범주/요구 사항이고, SSR 코드(예: WCHR, BLND)는 해당 지원을 요청하는 데 사용되는 표준화된 메시지이다.'
  - targetTerm: OSI
    explanation: 'PRM assistance requires action via an actionable SSR; OSI carries purely informational, non-actionable remarks.'
    explanation_ko: 'PRM 지원은 조치가 필요한 SSR을 통한 처리가 요구되고, OSI는 순수하게 정보성이며 조치가 필요 없는 비고를 담는다.'
  - targetTerm: Traveler Preference
    explanation: 'A traveler preference is advisory and best-effort (e.g., a window seat), whereas a PRM assistance need is a service obligation the carrier must fulfill; they are governed by different rules and priorities.'
    explanation_ko: 'Traveler preference는 권고적이고 최선노력 대상(예: 창측 좌석)인 반면, PRM 지원 필요는 항공사가 반드시 이행해야 하는 서비스 의무다. 둘은 적용 규칙과 우선순위가 다르다.'
  - targetTerm: Unaccompanied Minor
    explanation: 'An Unaccompanied Minor is a child needing supervised escort due to age, signalled by the UMNR SSR, whereas PRM (Passenger with Reduced Mobility) covers assistance needs arising from disability or mobility limitation, signalled by codes such as WCHR; a passenger could in principle require both.'
    explanation_ko: 'Unaccompanied Minor는 연령 때문에 동반 감독이 필요한 어린이로 UMNR SSR로 표시되는 반면, PRM(거동 불편 승객)은 장애나 이동 제약으로 인한 지원 필요를 WCHR 등의 코드로 표시한다. 한 승객이 원칙적으로 둘 다 필요할 수 있다.'
sources:
  - name: Passenger Services Conference Resolutions Manual (SSR codes)
    org: IATA
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="22" cy="10" r="4"/><path d="M22 16v12h10"/><path d="M32 42l-4-14"/><circle cx="23" cy="33" r="10"/></svg>
---

> A Passenger with Reduced Mobility — any person whose mobility is reduced due to physical or mental disability, age, illness or other cause and who needs special assistance during travel. PRM needs are communicated to carriers and airports through standardized special-service request codes.

PRM is an umbrella concept covering travelers requiring assistance; specific needs are encoded as SSR codes such as WCHR (wheelchair to ramp), WCHS (to steps), WCHC (to seat), BLND (blind), DEAF, and DPNA (intellectual/developmental disability). These requests ensure airports and airlines arrange wheelchairs, escorts and other accommodations, and they are governed by accessibility regulations (e.g. EC Regulation 1107/2006 in Europe and the US Air Carrier Access Act). PRM handling is a service obligation distinct from general OSI informational messages.

**한국어 / Korean** — **거동 불편 승객 (PRM)** — 거동 불편 승객(Passenger with Reduced Mobility)으로, 신체적·정신적 장애, 연령, 질병 또는 기타 사유로 거동이 불편하여 여행 중 특별 지원이 필요한 모든 사람을 말한다. PRM의 요구 사항은 표준화된 특별 서비스 요청(SSR) 코드를 통해 항공사와 공항에 전달된다.

PRM은 지원이 필요한 여행자를 포괄하는 상위 개념이며, 구체적인 요구 사항은 WCHR(램프까지 휠체어), WCHS(계단까지), WCHC(좌석까지), BLND(시각장애), DEAF(청각장애), DPNA(지적/발달 장애) 같은 SSR 코드로 부호화된다. 이러한 요청은 공항과 항공사가 휠체어, 동행 안내, 기타 편의를 준비하도록 보장하며, 접근성 규정(예: 유럽의 EC Regulation 1107/2006, 미국의 Air Carrier Access Act)의 적용을 받는다. PRM 처리는 일반적인 OSI 정보성 메시지와 구별되는 서비스 의무이다.

**Aliases:** `Passenger with Reduced Mobility`, `Person with Reduced Mobility`, `Passengers with Reduced Mobility`, `Disabled passenger`

# Related
- [SSR](/air/air-ops/ssr.md) — related
- [OSI](/air/air-ops/osi.md) — related
- [PNR](/air/air-ops/pnr.md) — related

# Distinctions
- **PRM** vs [SSR](/air/air-ops/ssr.md) — PRM is the traveler category/need; SSR codes (e.g. WCHR, BLND) are the standardized messages used to request the corresponding assistance.
- **PRM** vs [OSI](/air/air-ops/osi.md) — PRM assistance requires action via an actionable SSR; OSI carries purely informational, non-actionable remarks.
- **PRM** vs [Traveler Preference](/common/customer/traveler-preference.md) — A traveler preference is advisory and best-effort (e.g., a window seat), whereas a PRM assistance need is a service obligation the carrier must fulfill; they are governed by different rules and priorities.
- **PRM** vs [Unaccompanied Minor](/common/customer/unaccompanied-minor.md) — An Unaccompanied Minor is a child needing supervised escort due to age, signalled by the UMNR SSR, whereas PRM (Passenger with Reduced Mobility) covers assistance needs arising from disability or mobility limitation, signalled by codes such as WCHR; a passenger could in principle require both.

# Citations
[1] IATA — Passenger Services Conference Resolutions Manual (SSR codes)
