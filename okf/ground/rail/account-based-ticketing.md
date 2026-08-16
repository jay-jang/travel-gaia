---
type: Standard Term
title: Account-Based Ticketing
description: 'A public-transport fare collection architecture in which entitlement, validation, and fare calculation are managed in a central back-end account linked to the passenger, rather than stored on a physical or digital fare medium at the point of travel. Passengers tap in and out using a contactless bank card, EMV card, mobile wallet, or linked credential; the back-end records the journey, applies fare-capping rules, and charges the optimal amount to the linked payment method.'
tags:
  - rail
  - active
  - UITP
timestamp: '2026-08-16T00:00:00Z'
id: account-based-ticketing
vertical: ground
category: rail
conceptType: standard-term
status: active
abbreviation: ABT
term_ko: 계좌 기반 티켓팅(Account-Based Ticketing)
definition_ko: '탑승 자격, 검증, 운임 계산이 여행 시점에 물리적·디지털 요금 매체에 저장되지 않고 승객에 연결된 중앙 백엔드 계좌에서 관리되는 대중교통 운임 징수 아키텍처. 승객은 비접촉 은행 카드, EMV 카드, 모바일 지갑 또는 연결된 자격 증명으로 탑승·하차 시 태그 처리하며, 백엔드가 여정을 기록하고 운임 상한(fare-capping) 규칙을 적용하여 최적 금액을 연결된 결제 수단에 청구한다.'
longDef: 'In Account-Based Ticketing the credential (bank card, mobile device, or app token) is merely an identifier; no fare value is stored on it. The back-end system receives check-in/check-out events from validators, reconstructs the journey, determines the applicable fare product, applies any capping or concession, and initiates payment — typically as a deferred, aggregated transaction at end-of-day or journey completion. Key capabilities enabled by ABT: (1) Best-price guarantee / fare capping — the system charges the cheapest fare for a day or week''s travel, equivalent to a daily or weekly pass, without the passenger needing to buy one; (2) Multi-modal integration — a single account can handle bus, rail, and metro fares; (3) Account-based loyalty and journey history; (4) Rapid rollout — any EMV contactless card or device works without issuing proprietary media. Major deployments include Transport for London''s contactless payment layer on the Oyster network (2012 onwards), Singapore''s EZ-Link/SimplyGo, New South Wales Opal, and the UK Rail emerging ABT programme under Great British Railways. Relevant standards include BSI PAS 505 (ABT process specification), ITSO (UK Interoperable Smart Ticketing Organization specification), and UITP guidance on contactless fare collection.'
longDef_ko: '계좌 기반 티켓팅에서 자격 증명(은행 카드, 모바일 기기, 앱 토큰)은 단순한 식별자일 뿐이며 운임 가치가 저장되지 않는다. 백엔드 시스템은 검증기로부터 체크인/체크아웃 이벤트를 수신하여 여정을 재구성하고, 적용 가능한 운임 상품을 결정하며, 상한 또는 할인을 적용한 후 결제를 시작한다(통상 하루 또는 여정 완료 시 지연·집계 트랜잭션). ABT로 가능해지는 주요 기능: (1) 최저가 보장/운임 상한 — 시스템이 일별·주별 통행 최저 운임을 자동 적용(일일·주간 패스 구매 불필요); (2) 복합 교통 통합 — 단일 계좌로 버스·철도·지하철 요금 처리; (3) 계좌 기반 로열티 및 여정 내역; (4) 빠른 도입 — 전용 매체 발급 없이 모든 EMV 비접촉 카드·기기 사용 가능. 주요 사례로는 런던교통국(TfL)의 Oyster 네트워크 비접촉 결제 레이어(2012년~), 싱가포르 SimplyGo, 뉴사우스웨일스 Opal, 영국 철도 신흥 ABT 프로그램(Great British Railways)이 있다. 관련 표준으로는 BSI PAS 505(ABT 프로세스 사양), ITSO(영국 상호운용 스마트 티켓팅 표준), UITP 비접촉 요금 징수 지침이 있다.'
standardBody: UITP
aliases:
  - ABT
  - Contactless Fare Collection
  - Account-Based Fare Collection
  - Open-Loop Ticketing
relationships:
  - type: contrasts
    targetTerm: Season Ticket
  - type: related
    targetTerm: Mobile Ticket
  - type: related
    targetTerm: Tokenization
  - type: related
    targetTerm: GTFS
distinctions:
  - targetTerm: Season Ticket
    explanation: 'A Season Ticket is a pre-purchased, time-limited pass (weekly, monthly, annual) stored on a physical card or app; Account-Based Ticketing calculates and charges the optimal equivalent fare retroactively from tap-in/out data, eliminating the need to buy a pass in advance.'
    explanation_ko: '정기권(Season Ticket)은 물리적 카드나 앱에 저장된 사전 구매 시한부 패스(주간·월간·연간)이고, 계좌 기반 티켓팅은 체크인/아웃 데이터로부터 최적 운임을 소급 계산·청구하여 사전 패스 구매를 불필요하게 만든다.'
  - targetTerm: Mobile Ticket
    explanation: 'A Mobile Ticket is a digital version of a traditional ticket or pass stored in a mobile wallet or app — entitlement is still embedded in the credential; Account-Based Ticketing uses a mobile device only as an identifier, with entitlement and fare logic entirely in the back-end account.'
    explanation_ko: '모바일 티켓(Mobile Ticket)은 모바일 지갑이나 앱에 저장된 전통적 티켓·패스의 디지털 버전으로 자격이 여전히 자격 증명에 내장되어 있고, 계좌 기반 티켓팅은 모바일 기기를 식별자로만 사용하며 자격과 운임 로직은 전적으로 백엔드 계좌에 있다.'
sources:
  - name: Account-Based Ticketing — UITP Position Paper
    org: UITP (International Association of Public Transport)
    version: ''
    section: ''
    url: 'https://www.uitp.org/publications/account-based-ticketing/'
    tier: association
  - name: 'BSI PAS 505: Account Based Ticketing — Process Specification'
    org: BSI (British Standards Institution)
    version: '2014'
    section: ''
    url: 'https://www.bsigroup.com/en-GB/standards/pas/'
    tier: standard-body
  - name: TfL Contactless Payment — How It Works
    org: Transport for London
    version: ''
    section: Fares & payments
    url: 'https://tfl.gov.uk/fares/contactless-and-oyster-account'
    tier: vendor-doc
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="14" y="8" width="20" height="32" rx="3"/><path d="M20 14h8M20 19h8M20 24h5"/><path d="M32 34c4-2 4-8 0-10"/><path d="M35 37c6-3 6-13 0-16"/></svg>
---

> A public-transport fare collection architecture in which entitlement, validation, and fare calculation are managed in a central back-end account linked to the passenger, rather than stored on a physical or digital fare medium at the point of travel. Passengers tap in and out using a contactless bank card, EMV card, mobile wallet, or linked credential; the back-end records the journey, applies fare-capping rules, and charges the optimal amount to the linked payment method.

In Account-Based Ticketing the credential (bank card, mobile device, or app token) is merely an identifier; no fare value is stored on it. The back-end system receives check-in/check-out events from validators, reconstructs the journey, determines the applicable fare product, applies any capping or concession, and initiates payment — typically as a deferred, aggregated transaction at end-of-day or journey completion. Key capabilities enabled by ABT: (1) Best-price guarantee / fare capping — the system charges the cheapest fare for a day or week's travel, equivalent to a daily or weekly pass, without the passenger needing to buy one; (2) Multi-modal integration — a single account can handle bus, rail, and metro fares; (3) Account-based loyalty and journey history; (4) Rapid rollout — any EMV contactless card or device works without issuing proprietary media. Major deployments include Transport for London's contactless payment layer on the Oyster network (2012 onwards), Singapore's SimplyGo, New South Wales Opal, and the UK Rail emerging ABT programme. Relevant standards include BSI PAS 505, ITSO, and UITP guidance on contactless fare collection.

**한국어 / Korean** — **계좌 기반 티켓팅(Account-Based Ticketing)** — 탑승 자격, 검증, 운임 계산이 여행 시점에 물리적·디지털 요금 매체에 저장되지 않고 승객에 연결된 중앙 백엔드 계좌에서 관리되는 대중교통 운임 징수 아키텍처. 승객은 비접촉 은행 카드, EMV 카드, 모바일 지갑 또는 연결된 자격 증명으로 탑승·하차 시 태그 처리하며, 백엔드가 여정을 기록하고 운임 상한(fare-capping) 규칙을 적용하여 최적 금액을 연결된 결제 수단에 청구한다.

**Aliases:** `ABT`, `Contactless Fare Collection`, `Account-Based Fare Collection`, `Open-Loop Ticketing`

# Related
- [Season Ticket](/ground/rail/season-ticket.md) — contrasts
- [Mobile Ticket](/common/standards/mobile-ticket.md) — related
- [Tokenization](/common/pay/tokenization.md) — related
- [GTFS](/ground/rail/gtfs.md) — related

# Distinctions
- **Account-Based Ticketing** vs [Season Ticket](/ground/rail/season-ticket.md) — A Season Ticket is a pre-purchased, time-limited pass (weekly, monthly, annual) stored on a physical card or app; Account-Based Ticketing calculates and charges the optimal equivalent fare retroactively from tap-in/out data, eliminating the need to buy a pass in advance.
- **Account-Based Ticketing** vs [Mobile Ticket](/common/standards/mobile-ticket.md) — A Mobile Ticket is a digital version of a traditional ticket or pass stored in a mobile wallet or app — entitlement is still embedded in the credential; Account-Based Ticketing uses a mobile device only as an identifier, with entitlement and fare logic entirely in the back-end account.

# Citations
[1] [UITP — Account-Based Ticketing — UITP Position Paper](https://www.uitp.org/publications/account-based-ticketing/)
[2] [BSI — BSI PAS 505: Account Based Ticketing — Process Specification](https://www.bsigroup.com/en-GB/standards/pas/)
[3] [Transport for London — TfL Contactless Payment — How It Works](https://tfl.gov.uk/fares/contactless-and-oyster-account)
