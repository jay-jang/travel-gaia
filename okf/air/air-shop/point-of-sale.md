---
type: Business Term
title: Point of Sale
description: 'The geographic location — typically defined as a country or, in some cases, a city — where an air ticket is issued or sold, used by airline fare-filing systems (primarily ATPCO) and airline tariff rules to determine which published fares, taxes, and currency-of-sale rules apply to a given booking. The same passenger itinerary may attract different fare levels depending on the POS.'
tags:
  - air-shop
  - active
  - ATPCO
timestamp: '2026-08-02T00:00:00Z'
id: point-of-sale
vertical: air
category: air-shop
conceptType: business-term
status: active
abbreviation: POS
term_ko: 발권 판매지(Point of Sale, POS)
definition_ko: '항공권이 발권되거나 판매되는 지리적 위치(일반적으로 국가, 일부 경우 도시)로, ATPCO 등 항공사 운임 신고 시스템과 항공사 운임 규정이 특정 예약에 적용될 공시 운임·세금·판매 통화 규정을 결정하는 데 사용된다. 동일한 승객 여정도 POS에 따라 운임이 달라질 수 있다.'
longDef: 'In air distribution, Point of Sale (POS) is a fare-filing and pricing construct that restricts or channels specific fares to the country (or city) where the ticket is sold. Airlines file POS restrictions in ATPCO Category 15 (Sales Restrictions), allowing them to offer, for example, a promotional fare that is only purchasable in the United States, or a cheaper fare in the origin-country market versus the destination-country market. GDS and online booking systems pass the POS (usually derived from the travel agency''s country or the consumer''s IP location) as part of the shopping request, and the pricing engine filters fares accordingly. POS also determines which local taxes and currency rules apply, since many countries require domestic taxes to be collected in local currency. POS differs from Point of Commencement (POC), which is the first departure point of travel — a ticket purchased in London for travel Paris-New York has a POS of GB and a POC of FR.'
longDef_ko: '항공 유통에서 POS는 특정 운임을 항공권이 판매되는 국가(또는 도시)에 한정하거나 채널화하는 운임 신고·가격 책정 구조다. 항공사는 ATPCO 카테고리 15(판매 제한)에 POS 제한을 신고하여 예를 들어 미국에서만 구매 가능한 프로모션 운임, 또는 출발국 시장과 도착국 시장에서 서로 다른 운임을 제공할 수 있다. GDS와 온라인 예약 시스템은 POS(일반적으로 여행사 소재국 또는 소비자 IP 위치에서 파생)를 쇼핑 요청의 일부로 전달하고, 가격 엔진은 이에 따라 운임을 필터링한다. POS는 또한 어느 현지 세금과 통화 규정이 적용되는지 결정한다. POS는 여행의 첫 출발지인 Point of Commencement(POC)와 구별된다.'
standardBody: ATPCO
aliases:
  - POS
  - Country of Sale
  - Ticketing Country
relationships:
  - type: related
    targetTerm: ATPCO
  - type: related
    targetTerm: Fare Basis Code
  - type: related
    targetTerm: Fare Rule
  - type: related
    targetTerm: Fare Construction
  - type: related
    targetTerm: Rate of Exchange
  - type: related
    targetTerm: Surcharge
  - type: related
    targetTerm: NUC
  - type: related
    targetTerm: Tax (YQ/YR)
distinctions:
  - targetTerm: Fare Basis Code
    explanation: 'A Fare Basis Code identifies the specific fare product (booking class, restrictions, validity); Point of Sale is a rule applied on top of the fare that restricts where that fare product may be sold.'
    explanation_ko: 'Fare Basis Code는 특정 운임 상품(예약 등급·제한·유효기간)을 식별하고, POS는 그 운임 상품이 판매될 수 있는 곳을 제한하기 위해 운임에 적용되는 규칙이다.'
  - targetTerm: Fare Construction
    explanation: 'Fare Construction is the calculation of total fare from components (fare amounts, MPMs, surcharges, NUC); Point of Sale is a pre-selection filter determining which fares are even eligible to appear in that construction for a given ticketing country.'
    explanation_ko: 'Fare Construction은 운임 요소(운임 금액·MPM·할증료·NUC)에서 총 운임을 계산하는 것이고, POS는 특정 발권 국가에 대해 해당 계산에 포함될 수 있는 운임을 결정하는 사전 선택 필터다.'
  - targetTerm: Rate of Exchange
    explanation: 'Rate of Exchange converts NUC fare amounts into a local ticketing currency; Point of Sale determines which country''s currency and exchange rate regime applies, as well as which local taxes are collected.'
    explanation_ko: 'Rate of Exchange는 NUC 운임을 현지 발권 통화로 환산하고, POS는 어느 국가의 통화·환율 체계가 적용되는지, 그리고 어느 현지 세금이 징수되는지를 결정한다.'
sources:
  - name: 'ATPCO Category 15 — Sales Restrictions'
    org: 'Airline Tariff Publishing Company (ATPCO)'
    version: ''
    section: 'Category 15: Sales Restrictions'
    url: 'https://www.atpco.net/'
    tier: standard-body
  - name: 'IATA Tariff — Passenger Fares and Rates Resolutions Manual'
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/passenger-fares-rates-resolutions-manual/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="20" r="8"/><path d="M24 28c0 0-12 10-12 16h24c0-6-12-16-12-16z"/><path d="M20 20h8"/><path d="M24 16v8"/></svg>
---

> The geographic location — typically defined as a country or, in some cases, a city — where an air ticket is issued or sold, used by airline fare-filing systems (primarily ATPCO) and airline tariff rules to determine which published fares, taxes, and currency-of-sale rules apply to a given booking. The same passenger itinerary may attract different fare levels depending on the POS.

In air distribution, Point of Sale (POS) is a fare-filing and pricing construct that restricts or channels specific fares to the country (or city) where the ticket is sold. Airlines file POS restrictions in ATPCO Category 15 (Sales Restrictions), allowing them to offer, for example, a promotional fare that is only purchasable in the United States, or a cheaper fare in the origin-country market versus the destination-country market. GDS and online booking systems pass the POS (usually derived from the travel agency's country or the consumer's IP location) as part of the shopping request, and the pricing engine filters fares accordingly. POS also determines which local taxes and currency rules apply, since many countries require domestic taxes to be collected in local currency. POS differs from Point of Commencement (POC), which is the first departure point of travel — a ticket purchased in London for travel Paris-New York has a POS of GB and a POC of FR.

**한국어 / Korean** — **발권 판매지(Point of Sale, POS)** — 항공권이 발권되거나 판매되는 지리적 위치(일반적으로 국가)로, 항공사 운임 신고 시스템과 운임 규정이 특정 예약에 적용될 공시 운임·세금·통화 규정을 결정하는 데 사용된다. 동일한 여정도 POS에 따라 운임이 달라질 수 있다.

항공사는 ATPCO 카테고리 15에 POS 제한을 신고하여 국가별로 상이한 운임을 제공할 수 있다. GDS는 POS(여행사 소재국 또는 소비자 IP에서 파생)를 쇼핑 요청에 포함하여 가격 엔진이 적용 가능한 운임을 필터링하도록 한다.

**Aliases:** `POS`, `Country of Sale`, `Ticketing Country`

# Related
- [ATPCO](/air/air-shop/atpco.md) — related
- [Fare Basis Code](/air/air-shop/fare-basis-code.md) — related
- [Fare Rule](/air/air-shop/fare-rule.md) — related
- [Fare Construction](/air/air-shop/fare-construction.md) — related
- [Rate of Exchange](/air/air-shop/rate-of-exchange.md) — related
- [Surcharge](/air/air-shop/surcharge.md) — related
- [NUC](/air/air-shop/nuc.md) — related
- [Tax (YQ/YR)](/air/air-shop/tax-yq-yr.md) — related

# Distinctions
- **Point of Sale** vs [Fare Basis Code](/air/air-shop/fare-basis-code.md) — A Fare Basis Code identifies the specific fare product (booking class, restrictions, validity); Point of Sale is a rule applied on top of the fare that restricts where that fare product may be sold.
- **Point of Sale** vs [Fare Construction](/air/air-shop/fare-construction.md) — Fare Construction is the calculation of total fare from components (fare amounts, MPMs, surcharges, NUC); Point of Sale is a pre-selection filter determining which fares are even eligible to appear in that construction for a given ticketing country.
- **Point of Sale** vs [Rate of Exchange](/air/air-shop/rate-of-exchange.md) — Rate of Exchange converts NUC fare amounts into a local ticketing currency; Point of Sale determines which country's currency and exchange rate regime applies, as well as which local taxes are collected.

# Citations
[1] [Airline Tariff Publishing Company (ATPCO) — ATPCO Category 15 — Sales Restrictions](https://www.atpco.net/)
[2] [IATA — IATA Tariff — Passenger Fares and Rates Resolutions Manual](https://www.iata.org/en/publications/manuals/passenger-fares-rates-resolutions-manual/)
