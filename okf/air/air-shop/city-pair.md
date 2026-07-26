---
type: Business Term
title: City Pair
description: 'An origin–destination combination of two airport or city codes that defines the market for which an airline files fares or measures traffic. City pairs are the fundamental unit of airline tariff filing in ATPCO and of traffic-flow analysis by IATA and DOT; every fare in the global distribution system is anchored to a specific city pair with an associated booking class and rule set.'
tags:
  - air-shop
  - active
  - ATPCO
timestamp: '2026-07-26T00:00:00Z'
id: city-pair
vertical: air
category: air-shop
conceptType: business-term
status: active
term_ko: 도시 쌍(City Pair)
definition_ko: '항공사가 운임을 등록하거나 트래픽을 측정하는 시장을 정의하는 두 공항 또는 도시 코드의 출발지-목적지 조합. 도시 쌍은 ATPCO 운임 등록과 IATA·DOT의 트래픽 흐름 분석에서 기본 단위이며, 전 세계 유통 시스템의 모든 운임은 특정 도시 쌍, 예약 등급(RBD), 규칙 세트에 연결되어 있다.'
longDef: 'A city pair is a directional or non-directional pairing of two points in the fare/traffic system. In ATPCO fare filing, each fare is filed against an origin airport or city code and a destination airport or city code, forming the city pair that anchors the pricing record. City codes (e.g., LON for all London airports, PAR for all Paris airports) may aggregate multiple airports, allowing one fare to cover several airport combinations simultaneously. Airlines analyze city-pair markets to make pricing and scheduling decisions: market share, average fares, load factors, and yield are all measured at the city-pair level. The US DOT Airline Origin and Destination Survey (DB1B) and the IATA Traffic Statistics platform both publish city-pair-level data. Directional city pairs (A→B and B→A) are typically filed separately because demand and competitor pricing may differ. City pairs are also the unit in the US GSA City Pair Program (CPP), which procures government-contracted fares for each route.'
longDef_ko: '도시 쌍은 운임/트래픽 시스템에서 두 지점을 방향성 있게 또는 비방향성으로 결합한 것이다. ATPCO 운임 등록에서 각 운임은 출발 공항 또는 도시 코드와 목적지 공항 또는 도시 코드에 등록되어 가격 레코드를 고정하는 도시 쌍을 형성한다. 도시 코드(예: 런던의 모든 공항에 대한 LON, 파리의 모든 공항에 대한 PAR)는 여러 공항을 집계하여 하나의 운임이 여러 공항 조합을 동시에 포괄하도록 허용한다. 항공사는 가격 책정 및 스케줄 결정을 위해 도시 쌍 시장을 분석하며, 시장 점유율·평균 운임·탑승률·수익성은 모두 도시 쌍 단위로 측정된다. 미국 DOT 항공 출발지-목적지 조사(DB1B)와 IATA 트래픽 통계 플랫폼은 도시 쌍 수준의 데이터를 공개한다. 방향성 도시 쌍(A→B 및 B→A)은 수요와 경쟁사 가격이 다를 수 있으므로 보통 별도로 등록된다. 도시 쌍은 미국 GSA 도시 쌍 프로그램(CPP)에서도 단위로 사용되며, 각 노선에 대한 정부 계약 운임을 조달한다.'
standardBody: ATPCO
aliases:
  - City-Pair Market
  - O&D Market
  - Traffic Market
relationships:
  - type: related
    targetTerm: Fare Filing
  - type: related
    targetTerm: ATPCO
  - type: related
    targetTerm: Origin & Destination
  - type: related
    targetTerm: Fare Basis Code
  - type: related
    targetTerm: Fare Rule
  - type: related
    targetTerm: Revenue Management
distinctions:
  - targetTerm: Origin & Destination
    explanation: 'Origin & Destination (O&D) typically refers to the full beginning and end points of a passenger''s itinerary for revenue management and demand-analysis purposes; a city pair in the ATPCO/tariff sense is the specific two-point market (airport or city code) to which a fare is filed and is the unit of tariff distribution.'
    explanation_ko: 'O&D(출발지·목적지)는 통상 수익 관리 및 수요 분석 목적으로 승객 여정의 전체 시작·종착점을 지칭하고, ATPCO/요율 맥락의 도시 쌍은 운임이 등록되는 특정 두 지점(공항 또는 도시 코드) 시장으로 요율 유통의 단위이다.'
  - targetTerm: Fare Filing
    explanation: 'A city pair is the market unit — the two geographic points — that defines where a fare applies; fare filing is the process of submitting that fare (and its rule) for the city pair into the ATPCO system.'
    explanation_ko: '도시 쌍은 운임이 적용되는 두 지리적 지점, 즉 시장 단위이고, 운임 등록은 그 도시 쌍에 대한 운임(과 규칙)을 ATPCO 시스템에 제출하는 프로세스이다.'
sources:
  - name: 'ATPCO — fare data structure and city-pair pricing'
    org: ATPCO
    version: ''
    section: ''
    url: 'https://atpco.net/price-elements/'
    tier: association
  - name: 'City Pair Program (CPP)'
    org: US General Services Administration (GSA)
    version: ''
    section: ''
    url: 'https://www.gsa.gov/travel/plan-a-trip/transportation-airfare-rates-pov-rates/airfare-rates-city-pair-program'
    tier: regulator-guidance
  - name: 'ATPCO Explained: Understanding Airline Pricing & Fare Filing'
    org: AltexSoft
    version: ''
    section: ''
    url: 'https://www.altexsoft.com/blog/atpco/'
    tier: secondary
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="24" r="5"/><circle cx="36" cy="24" r="5"/><path d="M17 22 L31 22 M17 26 L31 26"/><line x1="24" y1="18" x2="24" y2="30"/></svg>
---

> An origin–destination combination of two airport or city codes that defines the market for which an airline files fares or measures traffic. City pairs are the fundamental unit of airline tariff filing in ATPCO and of traffic-flow analysis by IATA and DOT; every fare in the global distribution system is anchored to a specific city pair with an associated booking class and rule set.

A city pair is a directional or non-directional pairing of two points in the fare/traffic system. In ATPCO fare filing, each fare is filed against an origin airport or city code and a destination airport or city code, forming the city pair that anchors the pricing record. City codes (e.g., LON for all London airports, PAR for all Paris airports) may aggregate multiple airports, allowing one fare to cover several airport combinations simultaneously. Airlines analyze city-pair markets to make pricing and scheduling decisions: market share, average fares, load factors, and yield are all measured at the city-pair level.

**한국어 / Korean** — **도시 쌍(City Pair)** — 항공사가 운임을 등록하거나 트래픽을 측정하는 시장을 정의하는 두 공항 또는 도시 코드의 출발지-목적지 조합. 도시 쌍은 ATPCO 운임 등록과 IATA·DOT의 트래픽 흐름 분석에서 기본 단위이며, 전 세계 유통 시스템의 모든 운임은 특정 도시 쌍, 예약 등급(RBD), 규칙 세트에 연결되어 있다.

도시 쌍은 운임/트래픽 시스템에서 두 지점을 방향성 있게 또는 비방향성으로 결합한 것이다. ATPCO 운임 등록에서 각 운임은 출발 공항 또는 도시 코드와 목적지 공항 또는 도시 코드에 등록되어 가격 레코드를 고정하는 도시 쌍을 형성한다. 항공사는 가격 책정 및 스케줄 결정을 위해 도시 쌍 시장을 분석하며, 시장 점유율·평균 운임·탑승률·수익성은 모두 도시 쌍 단위로 측정된다.

**Aliases:** `City-Pair Market`, `O&D Market`, `Traffic Market`

# Related
- [Fare Filing](/air/air-shop/fare-filing.md) — related
- [ATPCO](/common/standards/atpco.md) — related
- [Origin & Destination](/air/air-ops/origin-and-destination.md) — related
- [Fare Basis Code](/air/air-shop/fare-basis-code.md) — related
- [Fare Rule](/air/air-shop/fare-rule.md) — related
- [Revenue Management](/lodging/hotel-rate/revenue-management.md) — related

# Distinctions
- **City Pair** vs [Origin & Destination](/air/air-ops/origin-and-destination.md) — Origin & Destination (O&D) typically refers to the full beginning and end points of a passenger's itinerary for revenue management and demand-analysis purposes; a city pair in the ATPCO/tariff sense is the specific two-point market (airport or city code) to which a fare is filed and is the unit of tariff distribution.
- **City Pair** vs [Fare Filing](/air/air-shop/fare-filing.md) — A city pair is the market unit — the two geographic points — that defines where a fare applies; fare filing is the process of submitting that fare (and its rule) for the city pair into the ATPCO system.

# Citations
[1] [ATPCO — ATPCO fare data structure and city-pair pricing](https://atpco.net/price-elements/)
[2] [US General Services Administration (GSA) — City Pair Program (CPP)](https://www.gsa.gov/travel/plan-a-trip/transportation-airfare-rates-pov-rates/airfare-rates-city-pair-program)
[3] [AltexSoft — ATPCO Explained: Understanding Airline Pricing & Fare Filing](https://www.altexsoft.com/blog/atpco/)
