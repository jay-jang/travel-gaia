---
type: Business Term
title: Rate Plan
description: 'A named, sellable pricing offer attached to one or more room types that defines the price and the commercial conditions under which a room is sold, such as inclusions, cancellation rules, payment terms, and eligibility. Examples include a Best Available Rate, an advance-purchase non-refundable rate, or a corporate negotiated rate.'
tags:
  - hotel-rate
  - active
  - OpenTravel Alliance
timestamp: '2026-06-17T00:00:00Z'
id: rate-plan
category: hotel-rate
conceptType: business-term
status: active
term_ko: 요금제(Rate Plan)
definition_ko: '하나 이상의 객실 유형에 연결되어 객실이 판매되는 가격과 상업적 조건(포함 항목, 취소 규정, 결제 조건, 적용 대상 등)을 정의하는 명명된 판매용 가격 상품이다. BAR(Best Available Rate), 사전 구매형 환불 불가 요금, 기업 협상 요금 등이 그 예이다.'
longDef: 'A rate plan bundles a price (or pricing logic) together with rules and restrictions: board basis, cancellation/guarantee policy, minimum/maximum length of stay, advance booking and stay-date windows, market segment or qualification (e.g. corporate, member, opaque), and whether the rate is commissionable or net. In a CRS/PMS a rate plan is identified by a rate code and mapped to room types and date ranges; the same physical room can be sold under many rate plans at different prices and conditions.'
longDef_ko: '요금제는 가격(또는 가격 산정 로직)을 식사 조건, 취소/보증 정책, 최소/최대 숙박일수, 사전 예약 및 투숙일 기간, 시장 세그먼트나 자격 조건(예: 기업, 회원, 비공개), 수수료 지급 여부 또는 net 여부 등의 규칙·제약과 함께 묶은 것이다. CRS/PMS에서 요금제는 rate code로 식별되며 객실 유형과 날짜 범위에 매핑된다. 동일한 실제 객실이라도 여러 요금제 아래 서로 다른 가격과 조건으로 판매될 수 있다.'
standardBody: OpenTravel Alliance
aliases:
  - Rate Code
  - Rate Type
  - Tariff
relationships:
  - type: related
    targetTerm: Room Type
  - type: related
    targetTerm: Board Basis
  - type: narrower
    targetTerm: BAR
  - type: related
    targetTerm: Cancellation Policy
  - type: related
    targetTerm: Net Rate
  - type: related
    targetTerm: Commissionable Rate
  - type: related
    targetTerm: ARI
  - type: related
    targetTerm: Length of Stay
distinctions:
  - targetTerm: Room Type
    explanation: A rate plan is the price/conditions; a room type is the physical product being priced — the same room type is sold under many rate plans.
    explanation_ko: '요금제는 가격·조건을 의미하고, 객실 유형은 가격이 매겨지는 실제 상품을 의미한다. 동일한 객실 유형이 여러 요금제 아래 판매된다.'
  - targetTerm: BAR
    explanation: 'BAR is one specific kind of rate plan (the best unrestricted publicly available one), whereas Rate Plan is the general concept covering all offer types.'
    explanation_ko: 'BAR은 요금제의 한 특정 유형(제약 없이 일반에 공개되는 최저 요금)인 반면, 요금제는 모든 상품 유형을 아우르는 일반 개념이다.'
sources:
  - name: 'OpenTravel Specification (Hotel messages, RatePlan)'
    org: OpenTravel Alliance
    version: ''
    section: ''
    url: ''
  - name: HTNG distribution and messaging specifications
    org: HTNG
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="6" width="28" height="36" rx="3"/><line x1="16" y1="15" x2="32" y2="15"/><line x1="16" y1="22" x2="28" y2="22"/><path d="M19 31h7a3 3 0 0 1 0 6h-5l3 3"/><line x1="22" y1="28" x2="22" y2="40"/></svg>
---

> A named, sellable pricing offer attached to one or more room types that defines the price and the commercial conditions under which a room is sold, such as inclusions, cancellation rules, payment terms, and eligibility. Examples include a Best Available Rate, an advance-purchase non-refundable rate, or a corporate negotiated rate.

A rate plan bundles a price (or pricing logic) together with rules and restrictions: board basis, cancellation/guarantee policy, minimum/maximum length of stay, advance booking and stay-date windows, market segment or qualification (e.g. corporate, member, opaque), and whether the rate is commissionable or net. In a CRS/PMS a rate plan is identified by a rate code and mapped to room types and date ranges; the same physical room can be sold under many rate plans at different prices and conditions.

**한국어 / Korean** — **요금제(Rate Plan)** — 하나 이상의 객실 유형에 연결되어 객실이 판매되는 가격과 상업적 조건(포함 항목, 취소 규정, 결제 조건, 적용 대상 등)을 정의하는 명명된 판매용 가격 상품이다. BAR(Best Available Rate), 사전 구매형 환불 불가 요금, 기업 협상 요금 등이 그 예이다.

요금제는 가격(또는 가격 산정 로직)을 식사 조건, 취소/보증 정책, 최소/최대 숙박일수, 사전 예약 및 투숙일 기간, 시장 세그먼트나 자격 조건(예: 기업, 회원, 비공개), 수수료 지급 여부 또는 net 여부 등의 규칙·제약과 함께 묶은 것이다. CRS/PMS에서 요금제는 rate code로 식별되며 객실 유형과 날짜 범위에 매핑된다. 동일한 실제 객실이라도 여러 요금제 아래 서로 다른 가격과 조건으로 판매될 수 있다.

**Aliases:** `Rate Code`, `Rate Type`, `Tariff`

# Related
- [Room Type](/hotel-rate/room-type.md) — related
- [Board Basis](/hotel-rate/board-basis.md) — related
- [BAR](/hotel-rate/bar.md) — narrower
- [Cancellation Policy](/hotel-dist/cancellation-policy.md) — related
- [Net Rate](/hotel-dist/net-rate.md) — related
- [Commissionable Rate](/hotel-dist/commissionable-rate.md) — related
- [ARI](/hotel-dist/ari.md) — related
- [Length of Stay](/hotel-rate/length-of-stay.md) — related

# Distinctions
- **Rate Plan** vs [Room Type](/hotel-rate/room-type.md) — A rate plan is the price/conditions; a room type is the physical product being priced — the same room type is sold under many rate plans.
- **Rate Plan** vs [BAR](/hotel-rate/bar.md) — BAR is one specific kind of rate plan (the best unrestricted publicly available one), whereas Rate Plan is the general concept covering all offer types.

# Citations
[1] OpenTravel Alliance — OpenTravel Specification (Hotel messages, RatePlan)
[2] HTNG — HTNG distribution and messaging specifications
