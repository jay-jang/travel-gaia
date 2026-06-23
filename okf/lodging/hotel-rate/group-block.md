---
type: Business Term
title: Group Block
description: 'A group block is a set of guest rooms a hotel holds out of general inventory for a single group, event, or convention, typically at a negotiated contracted rate and tied to a room block agreement. The blocked rooms are reserved against the property''s availability until attendees book individually (pick-up) or the held rooms are released back to inventory at the cutoff date.'
tags:
  - hotel-rate
  - active
timestamp: '2026-06-18T00:00:00Z'
id: group-block
vertical: lodging
category: hotel-rate
conceptType: business-term
status: active
term_ko: 그룹 블록(Group Block / Room Block)
definition_ko: '그룹 블록은 호텔이 단일 그룹·행사·컨벤션을 위해 일반 재고에서 떼어 잡아두는 객실 묶음으로, 보통 협상된 계약 요금(contracted rate)으로 객실 블록 계약에 연동된다. 블록 객실은 참석자가 개별 예약(픽업)을 하거나 컷오프 날짜에 재고로 반환될 때까지 호텔 가용 재고에서 차감되어 예약된 상태로 유지된다.'
longDef: 'The group block is the foundational unit of group sales and group inventory management. A sales contract specifies the number of rooms per night, the group rate, the cutoff date, an attrition/minimum-pickup clause, and how unbooked rooms are washed or released. Revenue managers monitor pick-up (rooms actually booked against the block) versus the block size to forecast demand, apply a wash factor to estimate no-show portions of the block, and decide whether to accept or shrink the block through displacement analysis. Blocks may be ''cut'' (reduced) or ''washed'' as the event approaches, and rooms remaining at cutoff are returned to transient availability.'
longDef_ko: '그룹 블록은 그룹 영업과 그룹 재고 관리의 기본 단위다. 영업 계약은 야간별 객실 수, 그룹 요금(group rate), 컷오프 날짜(cutoff date), 미달/최소 픽업(attrition) 조항, 그리고 미예약 객실을 워시(wash)하거나 반환하는 방식을 명시한다. 레비뉴 매니저는 블록 규모 대비 실제 예약된 픽업(pick-up)을 모니터링해 수요를 예측하고, 워시 팩터(wash factor)를 적용해 블록 중 노쇼로 빠질 비율을 추정하며, displacement analysis를 통해 블록을 수용·축소할지 결정한다. 행사일이 가까워지면 블록은 ''컷(cut)''되거나 워시될 수 있고, 컷오프 시점에 남은 객실은 일반(transient) 가용 재고로 반환된다.'
aliases:
  - Room Block
  - Block
  - Group Room Block
providerTerms:
  - provider: Oracle OPERA
    term: Business Block (Blocks)
    context: 'OPERA manages group inventory as a Business Block with a rooms grid, contracted rate, pickup, and cutoff per room type/date.'
    context_ko: OPERA는 그룹 재고를 객실 그리드·계약요금·pickup·룸타입별 cutoff을 갖는 Business Block으로 관리한다.
    relationship: same
relationships:
  - type: contrasts
    targetTerm: Allotment
  - type: child
    targetTerm: Cutoff Date
  - type: related
    targetTerm: Displacement Analysis
  - type: related
    targetTerm: Corporate Rate
distinctions:
  - targetTerm: Allotment
    explanation: 'An allotment is a recurring inventory of rooms allocated to a distribution partner (e.g., a tour operator or OTA) to sell over time, whereas a group block is held for one specific group or event and date span and is released at a cutoff.'
    explanation_ko: 'Allotment는 유통 파트너(예: 투어 오퍼레이터, OTA)에게 일정 기간 판매하도록 배정하는 반복적 객실 재고인 반면, 그룹 블록은 특정 단일 그룹·행사와 그 기간을 위해 잡아두며 컷오프 시점에 반환된다.'
  - targetTerm: Run of House (ROH)
    explanation: 'Run of House is a rate basis assigning whatever standard room is available, while a group block is an inventory hold; a block can itself be sold on an ROH basis.'
    explanation_ko: 'Run of House는 가용한 표준 객실을 임의 배정하는 요금 방식이고, 그룹 블록은 재고를 잡아두는 것이다. 블록 자체가 ROH 방식으로 판매될 수도 있다.'
  - targetTerm: Displacement Analysis
    explanation: A group block is the inventory unit being requested; displacement analysis is the calculation that decides whether and on what terms to commit that block.
    explanation_ko: '그룹 블록은 요청되는 재고 단위이고, displacement analysis는 그 블록을 약정할지와 어떤 조건으로 할지를 결정하는 계산이다.'
sources:
  - org: Industry reference
    name: Hotel Revenue Management Glossary & Terms (Group Block / Room Block)
    version: ''
    section: ''
    url: ''
    tier: secondary
  - org: AHLA / HFTP
    name: Uniform System of Accounts for the Lodging Industry (USALI)
    version: ''
    section: ''
    url: ''
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="14" width="9" height="9" rx="1"/><rect x="19.5" y="14" width="9" height="9" rx="1"/><rect x="32" y="14" width="9" height="9" rx="1"/><rect x="13" y="27" width="9" height="9" rx="1"/><rect x="25.5" y="27" width="9" height="9" rx="1"/><path d="M11 11l5-4 5 4"/></svg>
---

> A group block is a set of guest rooms a hotel holds out of general inventory for a single group, event, or convention, typically at a negotiated contracted rate and tied to a room block agreement. The blocked rooms are reserved against the property's availability until attendees book individually (pick-up) or the held rooms are released back to inventory at the cutoff date.

The group block is the foundational unit of group sales and group inventory management. A sales contract specifies the number of rooms per night, the group rate, the cutoff date, an attrition/minimum-pickup clause, and how unbooked rooms are washed or released. Revenue managers monitor pick-up (rooms actually booked against the block) versus the block size to forecast demand, apply a wash factor to estimate no-show portions of the block, and decide whether to accept or shrink the block through displacement analysis. Blocks may be 'cut' (reduced) or 'washed' as the event approaches, and rooms remaining at cutoff are returned to transient availability.

**한국어 / Korean** — **그룹 블록(Group Block / Room Block)** — 그룹 블록은 호텔이 단일 그룹·행사·컨벤션을 위해 일반 재고에서 떼어 잡아두는 객실 묶음으로, 보통 협상된 계약 요금(contracted rate)으로 객실 블록 계약에 연동된다. 블록 객실은 참석자가 개별 예약(픽업)을 하거나 컷오프 날짜에 재고로 반환될 때까지 호텔 가용 재고에서 차감되어 예약된 상태로 유지된다.

그룹 블록은 그룹 영업과 그룹 재고 관리의 기본 단위다. 영업 계약은 야간별 객실 수, 그룹 요금(group rate), 컷오프 날짜(cutoff date), 미달/최소 픽업(attrition) 조항, 그리고 미예약 객실을 워시(wash)하거나 반환하는 방식을 명시한다. 레비뉴 매니저는 블록 규모 대비 실제 예약된 픽업(pick-up)을 모니터링해 수요를 예측하고, 워시 팩터(wash factor)를 적용해 블록 중 노쇼로 빠질 비율을 추정하며, displacement analysis를 통해 블록을 수용·축소할지 결정한다. 행사일이 가까워지면 블록은 '컷(cut)'되거나 워시될 수 있고, 컷오프 시점에 남은 객실은 일반(transient) 가용 재고로 반환된다.

**Aliases:** `Room Block`, `Block`, `Group Room Block`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Oracle OPERA | `Business Block (Blocks)` | same | OPERA manages group inventory as a Business Block with a rooms grid, contracted rate, pickup, and cutoff per room type/date. |

# Related
- [Allotment](/lodging/hotel-rate/allotment.md) — contrasts
- [Cutoff Date](/lodging/hotel-rate/cutoff-date.md) — child
- [Displacement Analysis](/lodging/hotel-rate/displacement-analysis.md) — related
- [Corporate Rate](/lodging/hotel-rate/corporate-rate.md) — related

# Distinctions
- **Group Block** vs [Allotment](/lodging/hotel-rate/allotment.md) — An allotment is a recurring inventory of rooms allocated to a distribution partner (e.g., a tour operator or OTA) to sell over time, whereas a group block is held for one specific group or event and date span and is released at a cutoff.
- **Group Block** vs [Run of House (ROH)](/lodging/hotel-rate/run-of-house-roh.md) — Run of House is a rate basis assigning whatever standard room is available, while a group block is an inventory hold; a block can itself be sold on an ROH basis.
- **Group Block** vs [Displacement Analysis](/lodging/hotel-rate/displacement-analysis.md) — A group block is the inventory unit being requested; displacement analysis is the calculation that decides whether and on what terms to commit that block.

# Citations
[1] Industry reference — Hotel Revenue Management Glossary & Terms (Group Block / Room Block)
[2] AHLA / HFTP — Uniform System of Accounts for the Lodging Industry (USALI)
