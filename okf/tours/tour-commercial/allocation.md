---
type: Business Term
title: Allocation
description: 'An allocation is a fixed block of product capacity — seats, spots, or timeslot units — that a tour, activity, or attraction operator commits to a specific distributor or reseller in advance. The reseller may confirm bookings against the allocation without real-time availability checks, up to the agreed quantity and release date.'
tags:
  - tour-commercial
  - active
timestamp: '2026-06-28T00:00:00Z'
id: allocation
vertical: tours
category: tour-commercial
conceptType: business-term
status: active
term_ko: '할당량(Allocation)'
definition_ko: '할당량(Allocation)은 투어·액티비티·어트랙션 운영사가 특정 유통사 또는 리셀러에게 사전에 확약하는 고정 상품 정원 블록(좌석, 참가 인원, 타임슬롯 단위 등)이다. 리셀러는 합의된 수량과 릴리스 날짜 내에서 실시간 가용성 확인 없이 예약을 확정할 수 있다.'
longDef: 'Under an allocation model, the operator commits a defined quantity of spots to a distributor at agreed terms (usually a net or confidential rate). The distributor treats the allocation as instantly bookable inventory. If spots are not sold by the release date, they revert to the operator''s open inventory. Allocation differs from free-sale (fully open) availability: free-sale allows unlimited bookings until the operator stops it, while an allocation is a capped, pre-committed quota. The OCTO connectivity specification models allocation-based availability so that distributor systems can confirm bookings without round-tripping to the operator on every request.'
longDef_ko: '할당량 모델에서 운영사는 합의된 조건(보통 넷 또는 기밀 요금)으로 특정 수량의 참가 인원을 유통사에 확약한다. 유통사는 할당량을 즉시 예약 가능한 재고로 취급한다. 릴리스 날짜까지 판매되지 않은 인원은 운영사의 일반 재고로 반환된다. 할당량은 자유 판매(free-sale) 가용성과 다르다. 자유 판매는 운영사가 중단할 때까지 무제한 예약을 허용하는 반면, 할당량은 상한이 정해진 사전 확약 쿼터다. OCTO 커넥티비티 사양은 유통사 시스템이 매 요청마다 운영사와 왕복 통신하지 않고도 예약을 확정할 수 있도록 할당량 기반 가용성을 모델링한다.'
aliases:
  - Capacity Allocation
  - Distributor Allocation
  - Channel Allocation
relationships:
  - type: related
    targetTerm: OCTO
  - type: related
    targetTerm: Activity Operator
  - type: contrasts
    targetTerm: Allotment
  - type: related
    targetTerm: Marketplace Commission
  - type: related
    targetTerm: Net Rate
distinctions:
  - targetTerm: Allotment
    explanation: 'A hotel allotment is a block of rooms contracted to a wholesaler, with a release date after which unsold rooms revert; a tour allocation is the product-level equivalent — a capped block of seats or spots committed to a specific distributor — governed by a reseller agreement and, in modern connectivity, the OCTO standard.'
    explanation_ko: '호텔 allotment는 릴리스 날짜 이후 미판매 객실이 반환되는 조건으로 도매업체에 계약된 객실 블록이다. 투어 allocation은 이와 유사하지만 특정 유통사에 확약된 상품 단위(좌석·참가 인원)의 정원 블록으로, 리셀러 계약과 OCTO 표준 기반의 디지털 연결로 관리된다.'
sources:
  - name: OCTO Open Connectivity Specification — Availability
    org: OCTO (open-connectivity)
    version: '1.0'
    section: Availability
    url: 'https://octo.travel/'
    tier: standard-body
  - name: Distribution pricing models for tours and activities
    org: Arival
    version: ''
    section: ''
    url: 'https://arival.travel/'
    tier: secondary
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="8" width="36" height="32" rx="3"/><line x1="6" y1="18" x2="42" y2="18"/><line x1="20" y1="18" x2="20" y2="40"/><path d="M12 27h4M12 34h4M26 27h10M26 34h7"/></svg>
---

> An allocation is a fixed block of product capacity — seats, spots, or timeslot units — that a tour, activity, or attraction operator commits to a specific distributor or reseller in advance. The reseller may confirm bookings against the allocation without real-time availability checks, up to the agreed quantity and release date.

Under an allocation model, the operator commits a defined quantity of spots to a distributor at agreed terms (usually a net or confidential rate). The distributor treats the allocation as instantly bookable inventory. If spots are not sold by the release date, they revert to the operator's open inventory. Allocation differs from free-sale (fully open) availability: free-sale allows unlimited bookings until the operator stops it, while an allocation is a capped, pre-committed quota. The OCTO connectivity specification models allocation-based availability so that distributor systems can confirm bookings without round-tripping to the operator on every request.

**한국어 / Korean** — **할당량(Allocation)** — 할당량(Allocation)은 투어·액티비티·어트랙션 운영사가 특정 유통사 또는 리셀러에게 사전에 확약하는 고정 상품 정원 블록(좌석, 참가 인원, 타임슬롯 단위 등)이다. 리셀러는 합의된 수량과 릴리스 날짜 내에서 실시간 가용성 확인 없이 예약을 확정할 수 있다.

할당량 모델에서 운영사는 합의된 조건(보통 넷 또는 기밀 요금)으로 특정 수량의 참가 인원을 유통사에 확약한다. 유통사는 할당량을 즉시 예약 가능한 재고로 취급한다. 릴리스 날짜까지 판매되지 않은 인원은 운영사의 일반 재고로 반환된다. 할당량은 자유 판매(free-sale) 가용성과 다르다. 자유 판매는 운영사가 중단할 때까지 무제한 예약을 허용하는 반면, 할당량은 상한이 정해진 사전 확약 쿼터다. OCTO 커넥티비티 사양은 유통사 시스템이 매 요청마다 운영사와 왕복 통신하지 않고도 예약을 확정할 수 있도록 할당량 기반 가용성을 모델링한다.

**Aliases:** `Capacity Allocation`, `Distributor Allocation`, `Channel Allocation`

# Related
- [OCTO](/tours/tour-dist/octo-spec.md) — related
- [Activity Operator](/tours/tour-dist/activity-operator.md) — related
- [Allotment](/lodging/hotel-rate/allotment.md) — contrasts
- [Marketplace Commission](/tours/tour-commercial/marketplace-commission.md) — related
- [Net Rate](/lodging/hotel-dist/net-rate.md) — related

# Distinctions
- **Allocation** vs [Allotment](/lodging/hotel-rate/allotment.md) — A hotel allotment is a block of rooms contracted to a wholesaler, with a release date after which unsold rooms revert; a tour allocation is the product-level equivalent — a capped block of seats or spots committed to a specific distributor — governed by a reseller agreement and, in modern connectivity, the OCTO standard.

# Citations
[1] [OCTO (open-connectivity) — OCTO Open Connectivity Specification — Availability](https://octo.travel/)
[2] [Arival — Distribution pricing models for tours and activities](https://arival.travel/)
