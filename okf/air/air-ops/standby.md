---
type: Business Term
title: Standby
description: 'A standby passenger has no confirmed reservation for a specific flight and waits at the airport for a seat to become available after all confirmed passengers have boarded. Standby can arise from voluntary bumping agreements, from same-day flight changes, or from non-revenue travel (airline employees and eligible companions). Seats are allocated from the remaining open inventory in priority order defined by the carrier.'
tags:
  - air-ops
  - active
timestamp: '2026-07-04T00:00:00Z'
id: standby
vertical: air
category: air-ops
conceptType: business-term
status: active
term_ko: 스탠바이(Standby)
definition_ko: '스탠바이(Standby) 승객은 특정 항공편에 대한 확정 예약 없이 공항에서 모든 확정 승객이 탑승한 후 좌석이 생기기를 기다린다. 스탠바이는 자발적 탑승 거절 협약, 당일 항공편 변경, 또는 비수익 여행(항공사 직원 및 자격 동반자)에서 발생할 수 있다. 항공사가 정의한 우선순위에 따라 남은 공석에서 좌석이 배정된다.'
longDef: 'Standby is operationally managed at the gate or service desk shortly before departure. The carrier maintains a standby list sorted by priority criteria that typically include fare class paid, elite loyalty status, check-in time, and whether the standby is revenue (paying) or non-revenue (staff). Revenue standby arises when confirmed passengers on a full flight miss their connection or voluntarily change to an earlier or later flight under a same-day change (SDC) provision; they are placed in standby priority ahead of non-revenue travelers. Non-revenue standby is governed by airline employee-travel pass policies and is typically the lowest priority. The US DOT Fly-Rights publication describes standby in the context of overbooking and voluntary denied boarding: passengers who volunteer to give up a confirmed seat in exchange for compensation are placed in confirmed (not standby) status on the next flight, whereas true standby is an unconfirmed waiting status.'
longDef_ko: '스탠바이는 출발 직전 게이트 또는 서비스 데스크에서 운영상으로 관리된다. 항공사는 통상 지불 운임 클래스, 로열티 등급, 체크인 시간, 수익/비수익 여부 등의 우선순위 기준으로 정렬된 스탠바이 목록을 유지한다. 수익 스탠바이는 예약이 가득 찬 항공편에서 연결편을 놓쳤거나 당일 변경(SDC) 조항에 따라 이른 또는 늦은 항공편으로 자발적으로 변경한 확정 승객이 발생할 때 생긴다. 이들은 비수익 여행자보다 높은 우선순위를 부여받는다. 비수익 스탠바이는 항공사 직원 여행 패스 정책에 따라 관리되며 일반적으로 가장 낮은 우선순위이다. 미국 교통부(DOT) Fly-Rights 안내서는 초과 예약 및 자발적 탑승 거절 맥락에서 스탠바이를 설명한다. 확정된 좌석을 자발적으로 양보하는 승객은 다음 항공편에서 확정(비스탠바이) 지위를 받는 반면, 진정한 스탠바이는 비확정 대기 상태이다.'
aliases:
  - Standby List
  - Same-Day Standby
  - Non-Revenue Standby
relationships:
  - type: related
    targetTerm: Waitlist
  - type: related
    targetTerm: No-Show
  - type: related
    targetTerm: Overbooking
  - type: related
    targetTerm: Booking Status Code
distinctions:
  - targetTerm: Waitlist
    explanation: 'A waitlist is an advance-booking queue for a flight that is sold out; passengers on a waitlist hope to be confirmed before departure if a cancellation opens a seat. Standby differs: the passenger is at the airport on the day of travel, with no advance confirmed reservation, waiting for an open seat after all confirmed passengers board.'
    explanation_ko: '대기 목록(Waitlist)은 매진된 항공편에 대한 사전 예약 대기열로, 승객은 취소가 발생하면 출발 전에 확정되기를 기대한다. 스탠바이는 다르다. 승객은 여행 당일 공항에 있으며, 사전 확정 예약 없이 모든 확정 승객 탑승 후 공석을 기다린다.'
  - targetTerm: No-Show
    explanation: 'A no-show is a confirmed passenger who fails to appear for a flight without prior cancellation; standby is the opposite — an unconfirmed passenger present at the gate hoping to board. A high no-show rate on a flight often creates standby boarding opportunities.'
    explanation_ko: 'No-show는 사전 취소 없이 항공편에 나타나지 않는 확정 승객이다. 스탠바이는 그 반대, 즉 탑승하려는 게이트에 있지만 미확정 상태인 승객이다. 항공편의 높은 no-show율은 스탠바이 탑승 기회를 종종 만들어낸다.'
  - targetTerm: Voluntary Denied Boarding
    explanation: 'Voluntary denied boarding (VDB) occurs when a carrier asks for volunteers to give up a confirmed seat and offers compensation; the volunteer then receives a confirmed seat on the next flight. Standby passengers have no confirmed seat to give up — they are already in an unconfirmed queue and receive no VDB compensation.'
    explanation_ko: '자발적 탑승 거절(VDB)은 항공사가 확정 좌석을 포기할 자원자를 요청하고 보상을 제공하는 경우로, 자원자는 다음 항공편에서 확정 좌석을 받는다. 스탠바이 승객은 포기할 확정 좌석이 없으며, 이미 미확정 대기열에 있고 VDB 보상도 받지 않는다.'
sources:
  - name: Fly Rights — A Consumer Guide to Air Travel
    org: US Department of Transportation (DOT)
    version: ''
    section: 'Oversales / standby'
    url: 'https://www.transportation.gov/airconsumer/fly-rights'
    tier: regulator-guidance
  - name: 14 CFR Part 250 — Oversales
    org: US Department of Transportation (DOT)
    version: ''
    section: 'Bumping and oversales'
    url: 'https://www.ecfr.gov/current/title-14/chapter-II/subchapter-A/part-250'
    tier: regulation
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="16" cy="14" r="4"/><path d="M8 38v-6a8 8 0 0 1 16 0v6"/><path d="M28 26h12"/><path d="M28 32h10"/><path d="M28 38h12"/><circle cx="34" cy="20" r="1" fill="currentColor"/></svg>
---

> A standby passenger has no confirmed reservation for a specific flight and waits at the airport for a seat to become available after all confirmed passengers have boarded. Standby can arise from voluntary bumping agreements, from same-day flight changes, or from non-revenue travel (airline employees and eligible companions). Seats are allocated from the remaining open inventory in priority order defined by the carrier.

Standby is operationally managed at the gate or service desk shortly before departure. The carrier maintains a standby list sorted by priority criteria that typically include fare class paid, elite loyalty status, check-in time, and whether the standby is revenue (paying) or non-revenue (staff). Revenue standby arises when confirmed passengers on a full flight miss their connection or voluntarily change to an earlier or later flight under a same-day change (SDC) provision; they are placed in standby priority ahead of non-revenue travelers. Non-revenue standby is governed by airline employee-travel pass policies and is typically the lowest priority. The US DOT Fly-Rights publication describes standby in the context of overbooking and voluntary denied boarding: passengers who volunteer to give up a confirmed seat in exchange for compensation are placed in confirmed (not standby) status on the next flight, whereas true standby is an unconfirmed waiting status.

**한국어 / Korean** — **스탠바이(Standby)** — 스탠바이(Standby) 승객은 특정 항공편에 대한 확정 예약 없이 공항에서 모든 확정 승객이 탑승한 후 좌석이 생기기를 기다린다. 스탠바이는 자발적 탑승 거절 협약, 당일 항공편 변경, 또는 비수익 여행(항공사 직원 및 자격 동반자)에서 발생할 수 있다.

스탠바이는 출발 직전 게이트 또는 서비스 데스크에서 운영상으로 관리된다. 항공사는 지불 운임 클래스, 로열티 등급, 체크인 시간, 수익/비수익 여부 등의 우선순위 기준으로 정렬된 스탠바이 목록을 유지한다. 수익 스탠바이는 연결편을 놓쳤거나 당일 변경(SDC) 조항에 따라 자발적으로 변경한 확정 승객에서 발생한다. 비수익 스탠바이는 항공사 직원 여행 패스 정책에 따라 관리된다.

**Aliases:** `Standby List`, `Same-Day Standby`, `Non-Revenue Standby`

# Related
- [Waitlist](/air/air-ops/waitlist.md) — related
- [No-Show](/air/air-ops/no-show.md) — related
- [Overbooking](/air/air-shop/overbooking.md) — related
- [Booking Status Code](/air/air-ops/booking-status-code.md) — related

# Distinctions
- **Standby** vs [Waitlist](/air/air-ops/waitlist.md) — A waitlist is an advance-booking queue for a flight that is sold out; passengers on a waitlist hope to be confirmed before departure if a cancellation opens a seat. Standby differs: the passenger is at the airport on the day of travel, with no advance confirmed reservation, waiting for an open seat after all confirmed passengers board.
- **Standby** vs [No-Show](/air/air-ops/no-show.md) — A no-show is a confirmed passenger who fails to appear for a flight without prior cancellation; standby is the opposite — an unconfirmed passenger present at the gate hoping to board. A high no-show rate on a flight often creates standby boarding opportunities.
- **Standby** vs [Voluntary Denied Boarding](/common/disruption/voluntary-denied-boarding.md) — Voluntary denied boarding (VDB) occurs when a carrier asks for volunteers to give up a confirmed seat and offers compensation; the volunteer then receives a confirmed seat on the next flight. Standby passengers have no confirmed seat to give up — they are already in an unconfirmed queue and receive no VDB compensation.

# Citations
[1] [US Department of Transportation (DOT) — Fly Rights — A Consumer Guide to Air Travel](https://www.transportation.gov/airconsumer/fly-rights)
[2] [US Department of Transportation (DOT) — 14 CFR Part 250 — Oversales](https://www.ecfr.gov/current/title-14/chapter-II/subchapter-A/part-250)
