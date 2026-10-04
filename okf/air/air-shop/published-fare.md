---
type: Business Term
title: Published Fare
description: 'A published fare is an airline fare filed with ATPCO (or directly with a GDS) in a public tariff, made available to all distribution channels at the same price without restriction. It contrasts with a negotiated (private) fare, which is filed with limited distribution and is accessible only to designated agencies, corporate accounts, or booking channels. Published fares are the baseline of the airline pricing system and form the starting point for all voluntary change, reissue, and penalty calculations.'
tags:
  - air-shop
  - active
  - ATPCO
timestamp: '2026-10-04T00:00:00Z'
id: published-fare
vertical: air
category: air-shop
conceptType: business-term
status: active
term_ko: 공시 운임(Published Fare)
definition_ko: '공시 운임(published fare)은 ATPCO(또는 GDS 직접)에 공개 타리프로 신고된 항공 운임으로, 제한 없이 모든 유통 채널에 동일한 가격으로 제공된다. 한정 유통으로 신고되어 지정 대리점·기업 계정·예약 채널에만 접근 가능한 협상 운임(negotiated/private fare)과 대조된다. 공시 운임은 항공 요금 체계의 기준이 되며, 자발적 변경·재발행·위약금 산정의 출발점을 형성한다.'
longDef: 'ATPCO defines a public tariff as one whose data is available for retrieval by any organisation once processed; fares filed in public tariffs are universally visible to all subscribing GDSs and booking channels at the same price without restriction. Airlines file published fares for all cabin classes, fare basis codes, and routing combinations, specifying conditions such as advance purchase requirements, minimum stay, non-refundability, and seasonality through ATPCO category rules (Cat 2–35). Unlike negotiated fares, published fares carry no "need not match" or "net reporting" flag; they are the single common price any agent can quote and book. In the context of repricing and reissue, the distinction matters significantly: an involuntary rerouting or schedule change reissue must compare against the fare originally paid (which may be published or negotiated) and the currently applicable published fare to determine any additional collection or waiver. The rise of NDC dynamic pricing has introduced some complexity: while traditional published fares are static ATPCO filings, NDC dynamic offers may produce prices not pre-filed in any public tariff, though underlying fare rules often still trace back to ATPCO-published constructs for historical and regulatory reasons.'
longDef_ko: 'ATPCO는 공개 타리프를 모든 가입 조직이 처리 후 조회할 수 있는 타리프로 정의하며, 공개 타리프에 신고된 운임은 제한 없이 모든 가입 GDS와 예약 채널에서 동일 가격으로 조회 가능하다. 항공사는 모든 좌석 등급, 운임 기준 코드, 구간 조합에 대해 ATPCO 카테고리 규칙(Cat 2–35)을 통해 사전 구매 요건, 최소 체류, 환불 불가, 계절성 등의 조건을 지정하여 공시 운임을 신고한다. 협상 운임과 달리 공시 운임에는 "need not match" 또는 "net reporting" 플래그가 없어, 어떤 대리점이든 인용하고 예약할 수 있는 단일 공통 가격이다. 재요금 산정 및 재발행 맥락에서 이 구분은 중요하다: 비자발적 경로 변경이나 일정 변경 재발행은 추가 징수 또는 면제 결정을 위해 원래 지불한 운임(공시 또는 협상)과 현재 적용 가능한 공시 운임을 비교해야 한다.'
standardBody: ATPCO
aliases:
  - Public Fare
  - Filed Fare
  - Tariff Fare
  - Normal Fare
relationships:
  - type: contrasts
    targetTerm: Negotiated Fare
  - type: related
    targetTerm: ATPCO
  - type: related
    targetTerm: Fare Basis Code
  - type: related
    targetTerm: GDS
distinctions:
  - targetTerm: Negotiated Fare
    explanation: 'A negotiated (private) fare is filed with limited distribution in ATPCO — it is visible only to designated agencies or booking channels and the fare amount may be net or selling; a published fare is filed in a public tariff accessible to all distribution channels simultaneously at the same price, with no distribution restriction. In passenger booking systems a "private fare" indicator distinguishes the two.'
    explanation_ko: '협상 운임(private fare)은 ATPCO에 한정 유통으로 신고되어 지정 대리점이나 예약 채널에만 표시되며 운임 금액은 순액(net) 또는 판매가(selling)일 수 있고, 공시 운임은 배포 제한 없이 모든 유통 채널에 동시에 동일 가격으로 접근 가능한 공개 타리프에 신고된다. 예약 시스템에서 "private fare" 표시자가 둘을 구분한다.'
  - targetTerm: Fare Family
    explanation: 'A Fare Family (Branded Fare) is a marketing bundle that groups fares with defined ancillary inclusions and restrictions under a brand name such as Basic or Flex; a published fare is the underlying price filed with ATPCO. A single branded fare tier can map to multiple published fares across different booking classes and routing combinations.'
    explanation_ko: '운임 패밀리(Fare Family, 브랜드 운임)는 Basic, Flex 같은 브랜드명으로 정의된 부가 포함 사항과 제약 조건을 포함한 운임 묶음이고, 공시 운임은 ATPCO에 신고된 기초 가격이다. 단일 브랜드 운임 등급은 다양한 예약 등급과 구간 조합에 걸친 여러 공시 운임으로 매핑될 수 있다.'
sources:
  - name: ATPCO Glossary — Published Fare / Public Tariff
    org: ATPCO
    version: ''
    section: ''
    url: 'https://www.atpco.net/glossary/P'
    tier: standard-body
  - name: ATPCO Glossary — Negotiated Fare
    org: ATPCO
    version: ''
    section: ''
    url: 'https://www.atpco.net/glossary/N'
    tier: standard-body
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="6" width="28" height="36" rx="2"/><line x1="16" y1="14" x2="32" y2="14"/><line x1="16" y1="20" x2="32" y2="20"/><line x1="16" y1="26" x2="24" y2="26"/><path d="M26 32l4-4 4 4"/><line x1="30" y1="28" x2="30" y2="38"/></svg>
---

> A published fare is an airline fare filed with ATPCO (or directly with a GDS) in a public tariff, made available to all distribution channels at the same price without restriction. It contrasts with a negotiated (private) fare, which is filed with limited distribution and is accessible only to designated agencies, corporate accounts, or booking channels. Published fares are the baseline of the airline pricing system and form the starting point for all voluntary change, reissue, and penalty calculations.

ATPCO defines a public tariff as one whose data is available for retrieval by any organisation once processed; fares filed in public tariffs are universally visible to all subscribing GDSs and booking channels at the same price without restriction. Airlines file published fares for all cabin classes, fare basis codes, and routing combinations, specifying conditions such as advance purchase requirements, minimum stay, non-refundability, and seasonality through ATPCO category rules (Cat 2–35). Unlike negotiated fares, published fares carry no "need not match" or "net reporting" flag — they are the single common price any agent can quote and book. In the context of repricing and reissue, the distinction matters: an involuntary rerouting or schedule change reissue must compare against the fare originally paid and the currently applicable published fare to determine any additional collection or waiver.

**한국어 / Korean** — **공시 운임(Published Fare)** — 공시 운임(published fare)은 ATPCO(또는 GDS 직접)에 공개 타리프로 신고된 항공 운임으로, 제한 없이 모든 유통 채널에 동일한 가격으로 제공된다. 한정 유통으로 신고되어 지정 대리점·기업 계정·예약 채널에만 접근 가능한 협상 운임(negotiated/private fare)과 대조된다. 공시 운임은 항공 요금 체계의 기준이 되며, 자발적 변경·재발행·위약금 산정의 출발점을 형성한다.

ATPCO는 공개 타리프를 모든 가입 조직이 처리 후 조회할 수 있는 타리프로 정의하며, 공개 타리프에 신고된 운임은 제한 없이 모든 가입 GDS와 예약 채널에서 동일 가격으로 조회 가능하다. 협상 운임과 달리 공시 운임에는 배포 제한 플래그가 없어 어떤 대리점이든 인용하고 예약할 수 있는 단일 공통 가격이다.

**Aliases:** `Public Fare`, `Filed Fare`, `Tariff Fare`, `Normal Fare`

# Related
- [Negotiated Fare](/air/air-shop/negotiated-fare.md) — contrasts
- [ATPCO](/air/air-shop/atpco.md) — related
- [Fare Basis Code](/air/air-shop/fare-basis-code.md) — related
- [GDS](/common/standards/gds.md) — related

# Distinctions
- **Published Fare** vs [Negotiated Fare](/air/air-shop/negotiated-fare.md) — A negotiated (private) fare is filed with limited distribution in ATPCO — visible only to designated agencies or booking channels — while a published fare is filed in a public tariff accessible to all distribution channels simultaneously at the same price, with no distribution restriction. A "private fare" indicator in booking systems distinguishes the two.
- **Published Fare** vs [Fare Family](/air/air-shop/fare-family.md) — A Fare Family (Branded Fare) is a marketing bundle grouping fares with defined ancillary inclusions under a brand name; a published fare is the underlying price filed with ATPCO. A single branded fare tier can map to multiple published fares across booking classes and routing combinations.

# Citations
[1] [ATPCO — Glossary: Published Fare / Public Tariff](https://www.atpco.net/glossary/P)
[2] [ATPCO — Glossary: Negotiated Fare](https://www.atpco.net/glossary/N)
