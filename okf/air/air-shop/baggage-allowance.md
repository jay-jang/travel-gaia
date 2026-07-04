---
type: Business Term
title: Baggage Allowance
description: 'The quantity of checked baggage and/or cabin baggage a passenger is entitled to carry without additional charge, as determined by the applicable fare rules and airline policy. Most carriers apply either the piece concept (a fixed number of bags, each up to a specified weight and size) on transatlantic and transpacific routes per IATA Resolution 302, or the weight concept (total allowable kilograms across all checked items) on other international routes.'
tags:
  - air-shop
  - active
  - IATA
timestamp: '2026-07-04T00:00:00Z'
id: baggage-allowance
vertical: air
category: air-shop
conceptType: business-term
status: active
term_ko: 수하물 허용량(Baggage Allowance)
definition_ko: '수하물 허용량(Baggage Allowance)은 승객이 추가 요금 없이 위탁 또는 기내에 가지고 탑승할 수 있는 수하물의 양으로, 적용 운임 규칙과 항공사 정책에 따라 결정된다. 대부분의 항공사는 IATA Resolution 302에 따라 대서양·태평양 횡단 노선에는 개수 기준(개수·중량·크기 제한이 있는 고정 개수의 가방), 그 외 국제선에는 중량 기준(모든 위탁 수하물의 허용 총 킬로그램)을 적용한다.'
longDef: 'Baggage allowances are encoded in ATPCO-filed baggage rules (Baggage Rules Service, Category 16 and related categories) and are linked to the fare basis code, routing, passenger type, and booking class. IATA Resolution 302 (Baggage Interline Provisions) establishes the Most Significant Carrier (MSC) framework to determine whose allowance rules govern on multi-carrier interline itineraries. The allowance is typically divided into checked baggage (hold/checked bags) and cabin/carry-on baggage (personal items and overhead-bin bags). Allowances may be zero for basic economy fares, requiring passengers to purchase baggage as an ancillary service. Airline loyalty program status can unlock higher allowances. The Electronic Miscellaneous Document (EMD) is issued for pre-purchased excess baggage when the fee is collected separately from the base fare. Allowances are publicly filed through ATPCO and consumed by GDS shopping systems to display included allowances alongside fares.'
longDef_ko: '수하물 허용량은 ATPCO에 신고된 수하물 규칙(Baggage Rules Service, 카테고리 16 및 관련 카테고리)에 인코딩되며, 운임 기준 코드·노선·승객 유형·예약 등급에 연결된다. 허용량은 보통 위탁 수하물(hold/checked bags)과 기내 수하물(개인 소지품 및 오버헤드 빈 가방)로 나뉜다. 기본 이코노미 운임의 경우 허용량이 0인 경우도 있어 승객이 수하물을 부가 서비스로 구매해야 한다. 항공사 로열티 프로그램 등급에 따라 더 높은 허용량을 받을 수 있다. 기본 운임과 별도로 요금을 징수하는 사전 구매 초과 수하물에는 EMD(전자 기타 서류)가 발급된다. 허용량은 ATPCO를 통해 공개 신고되며, GDS 쇼핑 시스템이 운임과 함께 포함된 허용량을 표시하는 데 활용한다.'
standardBody: IATA
aliases:
  - Free Baggage Allowance
  - Checked Baggage Allowance
  - Baggage Entitlement
  - FBA
relationships:
  - type: related
    targetTerm: Fare Basis Code
  - type: related
    targetTerm: Fare Rule
  - type: related
    targetTerm: Ancillary Service
  - type: related
    targetTerm: EMD
distinctions:
  - targetTerm: Ancillary Service
    explanation: 'The baggage allowance is the amount already included in a fare; excess baggage (additional bags or oversized items beyond the allowance) is sold as an ancillary service, priced and filed separately through ATPCO or NDC.'
    explanation_ko: '수하물 허용량은 운임에 이미 포함된 양이고, 초과 수하물(허용량을 초과하는 추가 가방 또는 대형 수하물)은 ATPCO 또는 NDC를 통해 별도로 가격 책정·신고되는 부가 서비스로 판매된다.'
  - targetTerm: EMD
    explanation: 'The baggage allowance defines what is included at no extra cost; an EMD (Electronic Miscellaneous Document) is issued when a passenger purchases pre-paid excess baggage or additional bags beyond the included allowance, creating the accountable document for that fee.'
    explanation_ko: '수하물 허용량은 추가 비용 없이 포함된 항목을 정의하고, EMD(전자 기타 서류)는 승객이 포함 허용량을 초과하는 사전 구매 초과 수하물 또는 추가 가방을 구매할 때 발급되어 해당 요금의 회계 서류가 된다.'
  - targetTerm: Fare Rule
    explanation: 'A fare rule is the full set of conditions (advance purchase, changes, refunds, etc.) governing a fare; the baggage allowance is a specific sub-component within the fare rule that quantifies the included luggage entitlement.'
    explanation_ko: '운임 규칙은 운임을 지배하는 전체 조건(사전 구매, 변경, 환불 등)의 집합이고, 수하물 허용량은 포함된 수하물 권리를 정량화하는 운임 규칙 내의 특정 하위 구성 요소이다.'
sources:
  - name: 'IATA Baggage Standards — Piece Concept and Weight Concept'
    org: IATA
    version: ''
    section: 'Resolution 302 (Baggage Interline Provisions); Baggage Reference Manual'
    url: 'https://www.iata.org/en/programs/ops-infra/baggage/standards/'
    tier: association
  - name: ATPCO Baggage Rules Service
    org: ATPCO
    version: ''
    section: 'Category 16 (Penalties/Baggage), Baggage Allowance Filing'
    url: 'https://www.atpco.net/products/baggage'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="12" y="16" width="24" height="22" rx="3"/><path d="M18 16v-4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4"/><line x1="12" y1="26" x2="36" y2="26"/><line x1="20" y1="16" x2="20" y2="38"/><line x1="28" y1="16" x2="28" y2="38"/><line x1="8" y1="22" x2="8" y2="34"/><line x1="40" y1="22" x2="40" y2="34"/></svg>
---

> The quantity of checked baggage and/or cabin baggage a passenger is entitled to carry without additional charge, as determined by the applicable fare rules and airline policy. Most carriers apply either the piece concept (a fixed number of bags, each up to a specified weight and size) on transatlantic and transpacific routes per IATA Resolution 302, or the weight concept (total allowable kilograms across all checked items) on other international routes.

Baggage allowances are encoded in ATPCO-filed baggage rules (Baggage Rules Service, Category 16 and related categories) and are linked to the fare basis code, routing, passenger type, and booking class. IATA Resolution 302 (Baggage Interline Provisions) establishes the Most Significant Carrier (MSC) framework to determine whose allowance rules govern on multi-carrier interline itineraries. The allowance is typically divided into checked baggage (hold/checked bags) and cabin/carry-on baggage (personal items and overhead-bin bags). Allowances may be zero for basic economy fares, requiring passengers to purchase baggage as an ancillary service. Airline loyalty program status can unlock higher allowances. The Electronic Miscellaneous Document (EMD) is issued for pre-purchased excess baggage when the fee is collected separately from the base fare. Allowances are publicly filed through ATPCO and consumed by GDS shopping systems to display included allowances alongside fares.

**한국어 / Korean** — **수하물 허용량(Baggage Allowance)** — 수하물 허용량(Baggage Allowance)은 승객이 추가 요금 없이 위탁 또는 기내에 가지고 탑승할 수 있는 수하물의 양으로, 적용 운임 규칙과 항공사 정책에 따라 결정된다. 대부분의 항공사는 IATA Resolution 302에 따라 대서양·태평양 횡단 노선에는 개수 기준, 그 외 국제선에는 중량 기준을 적용한다.

수하물 허용량은 ATPCO에 신고된 수하물 규칙(Baggage Rules Service, 카테고리 16 및 관련 카테고리)에 인코딩되며, 운임 기준 코드·노선·승객 유형·예약 등급에 연결된다. 허용량은 보통 위탁 수하물과 기내 수하물로 나뉜다. 기본 이코노미 운임의 경우 허용량이 0인 경우도 있어 수하물을 부가 서비스로 구매해야 한다. ATPCO를 통해 공개 신고되며, GDS 쇼핑 시스템이 운임과 함께 표시하는 데 활용한다.

**Aliases:** `Free Baggage Allowance`, `Checked Baggage Allowance`, `Baggage Entitlement`, `FBA`

# Related
- [Fare Basis Code](/air/air-shop/fare-basis-code.md) — related
- [Fare Rule](/air/air-shop/fare-rule.md) — related
- [Ancillary Service](/air/air-ticket/ancillary-service.md) — related
- [EMD](/air/air-ticket/emd.md) — related

# Distinctions
- **Baggage Allowance** vs [Ancillary Service](/air/air-ticket/ancillary-service.md) — The baggage allowance is the amount already included in a fare; excess baggage (additional bags or oversized items beyond the allowance) is sold as an ancillary service, priced and filed separately through ATPCO or NDC.
- **Baggage Allowance** vs [EMD](/air/air-ticket/emd.md) — The baggage allowance defines what is included at no extra cost; an EMD (Electronic Miscellaneous Document) is issued when a passenger purchases pre-paid excess baggage or additional bags beyond the included allowance, creating the accountable document for that fee.
- **Baggage Allowance** vs [Fare Rule](/air/air-shop/fare-rule.md) — A fare rule is the full set of conditions (advance purchase, changes, refunds, etc.) governing a fare; the baggage allowance is a specific sub-component within the fare rule that quantifies the included luggage entitlement.

# Citations
[1] [IATA — IATA Resolution 302 — Conditions of Carriage for Passengers and Baggage](https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/)
[2] [ATPCO — ATPCO Baggage Rules Service](https://www.atpco.net/products/baggage)
