---
type: Process
title: Fare Filing
description: 'The formal process by which airlines submit their fares, rules, footnotes, and associated pricing data to a central tariff repository — primarily ATPCO (Airline Tariff Publishing Company) — for validation and onward distribution to GDSs, NDC channels, OTAs, and corporate booking tools. A single fare filing at ATPCO propagates to all connected distribution channels within hours, giving airlines precise, rule-governed control over their worldwide pricing.'
tags:
  - air-shop
  - active
  - ATPCO
timestamp: '2026-07-26T00:00:00Z'
id: fare-filing
vertical: air
category: air-shop
conceptType: process
status: active
abbreviation: ''
term_ko: 운임 등록(Fare Filing)
definition_ko: '항공사가 운임, 규칙(rules), 각주(footnotes) 및 관련 가격 데이터를 중앙 요율 저장소(주로 ATPCO)에 제출하여 검증 후 GDS·NDC 채널·OTA·기업 예약 도구로 배포하는 공식 프로세스. ATPCO에 운임을 한 번 등록하면 연결된 모든 유통 채널에 수 시간 내에 전파되어, 항공사가 전 세계 가격을 정교한 규칙 기반으로 통제할 수 있다.'
longDef: 'Airlines file fares through ATPCO using standardized data formats (the ATPCO filing standards) that encode not just the base fare amount for each city pair and booking class, but also the complete rule set — including advance purchase, minimum/maximum stay, sales/travel restrictions, blackout dates, routing, penalty conditions, and baggage attributes. A filing comprises: (1) Fare — the amount and currency for a city pair and RBD; (2) Footnote — supplemental restrictions shared across multiple fares; (3) Rule — the category-by-category conditions of sale and travel (ATPCO Categories 1–35). ATPCO processes updates continuously, and its subscribers — Amadeus, Sabre, Travelport, Farelogix, and hundreds of other systems — receive the changes in near real time. Airlines may also file via Airline Tariff Publishing Company''s self-service tools (FareManager, Architect), through a GSA, or using automated feed integrations. The process governs both public fares (filed openly and visible in GDS) and private/negotiated fares (filed with a ticketing code so only authorized points of sale can price them).'
longDef_ko: '항공사는 ATPCO의 표준 데이터 형식을 사용해 운임을 등록한다. 등록 데이터에는 각 도시 쌍(city pair)과 예약 등급(RBD)별 기본 운임 금액뿐 아니라, 사전 구매·최소/최대 체류·판매/여행 제한·블랙아웃 날짜·노선·위약금 조건·수하물 속성 등 완전한 규칙 세트가 포함된다. 등록은 (1) 운임(Fare) — 도시 쌍 및 RBD에 대한 금액과 통화; (2) 각주(Footnote) — 여러 운임에 공유되는 보완 제한 사항; (3) 규칙(Rule) — ATPCO 카테고리 1~35에 따른 판매·여행 조건으로 구성된다. ATPCO는 업데이트를 실시간에 가깝게 처리하며, 구독 시스템(Amadeus, Sabre, Travelport, Farelogix 등)은 변경 사항을 거의 즉시 수신한다. 항공사는 ATPCO의 셀프 서비스 도구(FareManager, Architect)나 GSA, 또는 자동화 피드 통합을 통해 운임을 등록할 수 있다. 이 프로세스는 GDS에서 공개적으로 표시되는 공개 운임과, 인가된 판매 시점에서만 가격 산정이 가능한 개인/협약 운임(발권 코드와 함께 등록됨) 모두를 관장한다.'
standardBody: ATPCO
aliases:
  - Tariff Filing
  - Fare Submission
  - ATPCO Filing
relationships:
  - type: related
    targetTerm: ATPCO
  - type: related
    targetTerm: Fare Rule
  - type: related
    targetTerm: Fare Basis Code
  - type: related
    targetTerm: Fare Family
  - type: related
    targetTerm: GDS
  - type: related
    targetTerm: City Pair
distinctions:
  - targetTerm: Fare Rule
    explanation: 'A Fare Rule is the structured set of conditions (ATPCO categories) that govern a specific fare; Fare Filing is the operational process by which an airline creates and submits both the fare amounts and their associated rules to ATPCO for distribution.'
    explanation_ko: '운임 규칙(Fare Rule)은 특정 운임의 조건(ATPCO 카테고리)을 규정하는 구조화된 집합이고, 운임 등록(Fare Filing)은 항공사가 운임 금액과 관련 규칙을 ATPCO에 제출하고 배포하는 운영 프로세스이다.'
  - targetTerm: ATPCO
    explanation: 'ATPCO (Airline Tariff Publishing Company) is the industry-owned central repository and distribution hub for airline tariff data; Fare Filing is the act of submitting pricing data into that system. ATPCO is the infrastructure; fare filing is what airlines do with it.'
    explanation_ko: 'ATPCO는 항공사 요율 데이터의 업계 소유 중앙 저장소 및 유통 허브이고, 운임 등록은 그 시스템에 가격 데이터를 제출하는 행위이다. ATPCO는 인프라이고, 운임 등록은 항공사가 그것으로 하는 작업이다.'
sources:
  - name: 'ATPCO Fare Filing — fares, rules and footnotes in practice'
    org: ATPCO
    version: ''
    section: ''
    url: 'https://www.modernairlineretailing.com/blog/2024-02-27-atpco-fare-filing:-fares,-rules-and-footnotes-in-practice.html'
    tier: association
  - name: 'ATPCO Explained: Understanding Airline Pricing & Fare Filing'
    org: AltexSoft
    version: ''
    section: ''
    url: 'https://www.altexsoft.com/blog/atpco/'
    tier: secondary
  - name: 'ATPCO Pricing & Shopping'
    org: ATPCO
    version: ''
    section: ''
    url: 'https://atpco.net/pricing-shopping-subscriptions/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="6" width="18" height="24" rx="2"/><line x1="14" y1="13" x2="24" y2="13"/><line x1="14" y1="18" x2="24" y2="18"/><line x1="14" y1="23" x2="21" y2="23"/><path d="M28 18 L38 18 M33 13 L33 38"/><circle cx="33" cy="38" r="4"/></svg>
---

> The formal process by which airlines submit their fares, rules, footnotes, and associated pricing data to a central tariff repository — primarily ATPCO (Airline Tariff Publishing Company) — for validation and onward distribution to GDSs, NDC channels, OTAs, and corporate booking tools. A single fare filing at ATPCO propagates to all connected distribution channels within hours, giving airlines precise, rule-governed control over their worldwide pricing.

Airlines file fares through ATPCO using standardized data formats that encode not just the base fare amount for each city pair and booking class, but also the complete rule set — including advance purchase, minimum/maximum stay, sales/travel restrictions, blackout dates, routing, penalty conditions, and baggage attributes. A filing comprises: (1) Fare — the amount and currency for a city pair and RBD; (2) Footnote — supplemental restrictions shared across multiple fares; (3) Rule — the category-by-category conditions of sale and travel (ATPCO Categories 1–35). ATPCO processes updates continuously, and its subscribers — Amadeus, Sabre, Travelport, Farelogix, and hundreds of other systems — receive the changes in near real time.

**한국어 / Korean** — **운임 등록(Fare Filing)** — 항공사가 운임, 규칙(rules), 각주(footnotes) 및 관련 가격 데이터를 중앙 요율 저장소(주로 ATPCO)에 제출하여 검증 후 GDS·NDC 채널·OTA·기업 예약 도구로 배포하는 공식 프로세스. ATPCO에 운임을 한 번 등록하면 연결된 모든 유통 채널에 수 시간 내에 전파되어, 항공사가 전 세계 가격을 정교한 규칙 기반으로 통제할 수 있다.

항공사는 ATPCO의 표준 데이터 형식을 사용해 운임을 등록한다. 등록 데이터에는 각 도시 쌍(city pair)과 예약 등급(RBD)별 기본 운임 금액뿐 아니라, 사전 구매·최소/최대 체류·판매/여행 제한·블랙아웃 날짜·노선·위약금 조건·수하물 속성 등 완전한 규칙 세트가 포함된다.

**Aliases:** `Tariff Filing`, `Fare Submission`, `ATPCO Filing`

# Related
- [ATPCO](/common/standards/atpco.md) — related
- [Fare Rule](/air/air-shop/fare-rule.md) — related
- [Fare Basis Code](/air/air-shop/fare-basis-code.md) — related
- [Fare Family](/air/air-shop/fare-family.md) — related
- [GDS](/common/standards/gds.md) — related
- [City Pair](/air/air-shop/city-pair.md) — related

# Distinctions
- **Fare Filing** vs [Fare Rule](/air/air-shop/fare-rule.md) — A Fare Rule is the structured set of conditions (ATPCO categories) that govern a specific fare; Fare Filing is the operational process by which an airline creates and submits both the fare amounts and their associated rules to ATPCO for distribution.
- **Fare Filing** vs [ATPCO](/common/standards/atpco.md) — ATPCO (Airline Tariff Publishing Company) is the industry-owned central repository and distribution hub for airline tariff data; Fare Filing is the act of submitting pricing data into that system. ATPCO is the infrastructure; fare filing is what airlines do with it.

# Citations
[1] [ATPCO — ATPCO Fare Filing — fares, rules and footnotes in practice](https://www.modernairlineretailing.com/blog/2024-02-27-atpco-fare-filing:-fares,-rules-and-footnotes-in-practice.html)
[2] [AltexSoft — ATPCO Explained: Understanding Airline Pricing & Fare Filing](https://www.altexsoft.com/blog/atpco/)
[3] [ATPCO — ATPCO Pricing & Shopping](https://atpco.net/pricing-shopping-subscriptions/)
