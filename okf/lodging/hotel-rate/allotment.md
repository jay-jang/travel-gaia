---
type: Business Term
title: Allotment
description: 'A block of room inventory that a hotel pre-assigns to a specific distribution partner, channel, group, or contract for a defined period, allowing that partner to sell those rooms up to the allotted quantity without checking real-time availability for each booking. Unsold rooms are typically released back to the hotel by a contracted release (cut-off) date.'
tags:
  - hotel-rate
  - active
timestamp: '2026-06-17T00:00:00Z'
id: allotment
vertical: lodging
category: hotel-rate
conceptType: business-term
status: active
term_ko: 객실 할당량(Allotment)
definition_ko: '호텔이 특정 유통 파트너, 채널, 단체, 계약에 일정 기간 동안 미리 배정하는 객실 재고 블록으로, 해당 파트너가 예약마다 실시간 가용 여부를 확인하지 않고도 할당된 수량까지 객실을 판매할 수 있게 한다. 판매되지 않은 객실은 보통 계약상 반환(cut-off) 일자에 호텔로 반환된다.'
longDef: 'Allotments are central to contracted distribution (tour operators, bedbanks, group blocks, corporate accounts). They are governed by terms such as the allotment size per date, the release period, and whether sales are on allotment, on request, or free sale. When a partner can sell beyond or without a fixed allotment subject to availability, the arrangement is often called free sale. Allotment management is handled in CRS/PMS and channel managers via ARI updates.'
longDef_ko: 'Allotment는 계약 기반 유통(투어 오퍼레이터, 베드뱅크, 단체 블록, 기업 계정)의 핵심이다. 날짜별 할당 규모, 반환 기간, 판매 방식이 allotment 기반인지 요청형(on request)인지 free sale인지 등의 조건으로 관리된다. 파트너가 고정 할당량을 초과하거나 고정 할당량 없이 가용 여부에 따라 판매할 수 있는 경우, 이를 흔히 free sale이라 부른다. Allotment 관리는 ARI 업데이트를 통해 CRS/PMS와 채널 매니저에서 처리된다.'
aliases:
  - Room Allocation
  - Inventory Allocation
  - Contracted Allotment
providerTerms:
  - provider: Oracle OPERA
    term: Block / Allocation (Allotment)
    context: OPERA holds rooms out of house inventory as a block allocation that a partner or group draws down (picks up) until cutoff.
    context_ko: OPERA는 파트너·그룹이 cutoff까지 pickup하는 block allocation으로 객실을 house inventory에서 떼어 보유한다.
    relationship: same
  - provider: Sabre Hospitality
    term: Allotment (SynXis ARI inventory)
    context: SynXis CRS distributes allotment inventory to channels and decrements it as the partner sells against the allocated block.
    context_ko: SynXis CRS는 allotment 재고를 채널에 배포하고 파트너가 할당 블록을 판매하면 차감한다.
    relationship: same
relationships:
  - type: contrasts
    targetTerm: Free Sale
  - type: related
    targetTerm: Bedbank
  - type: related
    targetTerm: ARI
  - type: related
    targetTerm: Room Type
  - type: related
    targetTerm: Channel Manager
distinctions:
  - targetTerm: Free Sale
    explanation: 'An allotment is a fixed pre-assigned block with a release date; free sale lets a partner sell without a fixed block, relying on real-time availability.'
    explanation_ko: 'Allotment는 반환 일자가 있는 고정 사전 배정 블록이고, free sale은 고정 블록 없이 실시간 가용 여부에 의존해 파트너가 판매하도록 한다.'
  - targetTerm: Block Space Agreement
    explanation: An allotment is a contracted inventory block (common in hotels and tour operators); a block space agreement is the airline analogue for seats on a partner's flight under a codeshare.
    explanation_ko: 'Allotment는 (호텔·여행사에서 흔한) 계약된 재고 블록이고, 블록 스페이스 협정은 공동운항 하에서 파트너 항공편의 좌석에 대한 항공사판 유사 개념이다.'
  - targetTerm: Group Block
    explanation: 'An allotment is a recurring inventory of rooms allocated to a distribution partner (e.g., a tour operator or OTA) to sell over time, whereas a group block is held for one specific group or event and date span and is released at a cutoff.'
    explanation_ko: 'Allotment는 유통 파트너(예: 투어 오퍼레이터, OTA)에게 일정 기간 판매하도록 배정하는 반복적 객실 재고인 반면, 그룹 블록은 특정 단일 그룹·행사와 그 기간을 위해 잡아두며 컷오프 시점에 반환된다.'
  - targetTerm: Group PNR
    explanation: An Allotment is a pre-negotiated block of inventory a carrier or supplier grants a distributor to sell; a Group PNR is a specific reservation record holding seats for one identified travelling group. A group booking may draw on an allotment but is not the same as the allotment agreement.
    explanation_ko: 'Allotment는 항공사·공급자가 판매자에게 사전 협상으로 부여한 inventory block이고, Group PNR은 식별된 한 단체를 위해 좌석을 보유한 구체적 예약 레코드다. 단체 예약이 allotment를 사용할 수 있지만 allotment 계약 자체와는 다르다.'
  - targetTerm: Last Room Availability (LRA)
    explanation: 'An allotment is a fixed block of rooms held for a partner; LRA is a guarantee about rate access against the hotel''s whole live inventory, not a reserved block. LRA can apply even when no allotment exists.'
    explanation_ko: 'Allotment는 파트너를 위해 확보된 고정 객실 블록이고, LRA는 예약된 블록이 아니라 호텔의 전체 실시간 재고에 대한 요금 접근 보장이다. LRA는 allotment가 없어도 적용될 수 있다.'
  - targetTerm: Release Period
    explanation: An Allotment is the block of rooms held for a partner; the Release Period is the rule defining how many days before arrival the unsold portion of that allotment is given back to the hotel.
    explanation_ko: 'Allotment는 파트너를 위해 보류된 객실 블록 자체이고, Release Period는 그 allotment 중 미판매분을 도착 며칠 전에 호텔로 반환할지를 정하는 규칙이다.'
  - targetTerm: Single Image Inventory
    explanation: 'An allotment is a fixed block of rooms set aside for one channel or partner; Single Image Inventory is the opposite approach—no rooms are pre-carved, every channel competes for the same pool.'
    explanation_ko: 'Allotment는 특정 채널이나 파트너를 위해 떼어 둔 고정 객실 블록이고, Single Image Inventory는 그 반대 접근으로 어떤 객실도 미리 분할하지 않으며 모든 채널이 동일한 풀을 두고 경쟁한다.'
sources:
  - name: OpenTravel Specification (Hotel inventory and allocation messages)
    org: OpenTravel Alliance
    version: ''
    section: ''
    url: 'https://opentravel.org/download-specs/'
    tier: association
  - name: HTNG inventory distribution specifications
    org: HTNG
    version: ''
    section: ''
    url: 'https://www.ahla.com/htng-technical-specifications'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="8" width="14" height="14" rx="2"/><rect x="27" y="8" width="14" height="14" rx="2"/><rect x="7" y="28" width="14" height="14" rx="2"/><rect x="27" y="28" width="14" height="14" rx="2" fill="currentColor" stroke="none"/></svg>
---

> A block of room inventory that a hotel pre-assigns to a specific distribution partner, channel, group, or contract for a defined period, allowing that partner to sell those rooms up to the allotted quantity without checking real-time availability for each booking. Unsold rooms are typically released back to the hotel by a contracted release (cut-off) date.

Allotments are central to contracted distribution (tour operators, bedbanks, group blocks, corporate accounts). They are governed by terms such as the allotment size per date, the release period, and whether sales are on allotment, on request, or free sale. When a partner can sell beyond or without a fixed allotment subject to availability, the arrangement is often called free sale. Allotment management is handled in CRS/PMS and channel managers via ARI updates.

**한국어 / Korean** — **객실 할당량(Allotment)** — 호텔이 특정 유통 파트너, 채널, 단체, 계약에 일정 기간 동안 미리 배정하는 객실 재고 블록으로, 해당 파트너가 예약마다 실시간 가용 여부를 확인하지 않고도 할당된 수량까지 객실을 판매할 수 있게 한다. 판매되지 않은 객실은 보통 계약상 반환(cut-off) 일자에 호텔로 반환된다.

Allotment는 계약 기반 유통(투어 오퍼레이터, 베드뱅크, 단체 블록, 기업 계정)의 핵심이다. 날짜별 할당 규모, 반환 기간, 판매 방식이 allotment 기반인지 요청형(on request)인지 free sale인지 등의 조건으로 관리된다. 파트너가 고정 할당량을 초과하거나 고정 할당량 없이 가용 여부에 따라 판매할 수 있는 경우, 이를 흔히 free sale이라 부른다. Allotment 관리는 ARI 업데이트를 통해 CRS/PMS와 채널 매니저에서 처리된다.

**Aliases:** `Room Allocation`, `Inventory Allocation`, `Contracted Allotment`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Oracle OPERA | `Block / Allocation (Allotment)` | same | OPERA holds rooms out of house inventory as a block allocation that a partner or group draws down (picks up) until cutoff. |
| Sabre Hospitality | `Allotment (SynXis ARI inventory)` | same | SynXis CRS distributes allotment inventory to channels and decrements it as the partner sells against the allocated block. |

# Related
- [Free Sale](/lodging/hotel-dist/free-sale.md) — contrasts
- [Bedbank](/lodging/hotel-dist/bedbank.md) — related
- [ARI](/lodging/hotel-dist/ari.md) — related
- [Room Type](/lodging/hotel-rate/room-type.md) — related
- [Channel Manager](/lodging/hotel-dist/channel-manager.md) — related

# Distinctions
- **Allotment** vs [Free Sale](/lodging/hotel-dist/free-sale.md) — An allotment is a fixed pre-assigned block with a release date; free sale lets a partner sell without a fixed block, relying on real-time availability.
- **Allotment** vs [Block Space Agreement](/air/air-partner/block-space-agreement.md) — An allotment is a contracted inventory block (common in hotels and tour operators); a block space agreement is the airline analogue for seats on a partner's flight under a codeshare.
- **Allotment** vs [Group Block](/lodging/hotel-rate/group-block.md) — An allotment is a recurring inventory of rooms allocated to a distribution partner (e.g., a tour operator or OTA) to sell over time, whereas a group block is held for one specific group or event and date span and is released at a cutoff.
- **Allotment** vs [Group PNR](/air/air-ops/group-pnr.md) — An Allotment is a pre-negotiated block of inventory a carrier or supplier grants a distributor to sell; a Group PNR is a specific reservation record holding seats for one identified travelling group. A group booking may draw on an allotment but is not the same as the allotment agreement.
- **Allotment** vs [Last Room Availability (LRA)](/lodging/hotel-rate/last-room-availability-lra.md) — An allotment is a fixed block of rooms held for a partner; LRA is a guarantee about rate access against the hotel's whole live inventory, not a reserved block. LRA can apply even when no allotment exists.
- **Allotment** vs [Release Period](/lodging/hotel-rate/release-period.md) — An Allotment is the block of rooms held for a partner; the Release Period is the rule defining how many days before arrival the unsold portion of that allotment is given back to the hotel.
- **Allotment** vs [Single Image Inventory](/lodging/hotel-dist/single-image-inventory.md) — An allotment is a fixed block of rooms set aside for one channel or partner; Single Image Inventory is the opposite approach—no rooms are pre-carved, every channel competes for the same pool.

# Citations
[1] [OpenTravel Alliance — OpenTravel Specification (Hotel inventory and allocation messages)](https://opentravel.org/download-specs/)
[2] [HTNG — HTNG inventory distribution specifications](https://www.ahla.com/htng-technical-specifications)
