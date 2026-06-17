---
type: Business Term
title: Allotment
description: 'A block of room inventory that a hotel pre-assigns to a specific distribution partner, channel, group, or contract for a defined period, allowing that partner to sell those rooms up to the allotted quantity without checking real-time availability for each booking. Unsold rooms are typically released back to the hotel by a contracted release (cut-off) date.'
tags:
  - hotel-rate
  - active
timestamp: '2026-06-17T00:00:00Z'
id: allotment
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
relationships:
  - type: related
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
sources:
  - name: OpenTravel Specification (Hotel inventory and allocation messages)
    org: OpenTravel Alliance
    version: ''
    section: ''
    url: ''
  - name: HTNG inventory distribution specifications
    org: HTNG
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="8" width="14" height="14" rx="2"/><rect x="27" y="8" width="14" height="14" rx="2"/><rect x="7" y="28" width="14" height="14" rx="2"/><rect x="27" y="28" width="14" height="14" rx="2" fill="currentColor" stroke="none"/></svg>
---

> A block of room inventory that a hotel pre-assigns to a specific distribution partner, channel, group, or contract for a defined period, allowing that partner to sell those rooms up to the allotted quantity without checking real-time availability for each booking. Unsold rooms are typically released back to the hotel by a contracted release (cut-off) date.

Allotments are central to contracted distribution (tour operators, bedbanks, group blocks, corporate accounts). They are governed by terms such as the allotment size per date, the release period, and whether sales are on allotment, on request, or free sale. When a partner can sell beyond or without a fixed allotment subject to availability, the arrangement is often called free sale. Allotment management is handled in CRS/PMS and channel managers via ARI updates.

**한국어 / Korean** — **객실 할당량(Allotment)** — 호텔이 특정 유통 파트너, 채널, 단체, 계약에 일정 기간 동안 미리 배정하는 객실 재고 블록으로, 해당 파트너가 예약마다 실시간 가용 여부를 확인하지 않고도 할당된 수량까지 객실을 판매할 수 있게 한다. 판매되지 않은 객실은 보통 계약상 반환(cut-off) 일자에 호텔로 반환된다.

Allotment는 계약 기반 유통(투어 오퍼레이터, 베드뱅크, 단체 블록, 기업 계정)의 핵심이다. 날짜별 할당 규모, 반환 기간, 판매 방식이 allotment 기반인지 요청형(on request)인지 free sale인지 등의 조건으로 관리된다. 파트너가 고정 할당량을 초과하거나 고정 할당량 없이 가용 여부에 따라 판매할 수 있는 경우, 이를 흔히 free sale이라 부른다. Allotment 관리는 ARI 업데이트를 통해 CRS/PMS와 채널 매니저에서 처리된다.

**Aliases:** `Room Allocation`, `Inventory Allocation`, `Contracted Allotment`

# Related
- [Free Sale](/hotel-dist/free-sale.md) — related
- [Bedbank](/hotel-dist/bedbank.md) — related
- [ARI](/hotel-dist/ari.md) — related
- [Room Type](/hotel-rate/room-type.md) — related
- [Channel Manager](/hotel-dist/channel-manager.md) — related

# Distinctions
- **Allotment** vs [Free Sale](/hotel-dist/free-sale.md) — An allotment is a fixed pre-assigned block with a release date; free sale lets a partner sell without a fixed block, relying on real-time availability.

# Citations
[1] OpenTravel Alliance — OpenTravel Specification (Hotel inventory and allocation messages)
[2] HTNG — HTNG inventory distribution specifications
