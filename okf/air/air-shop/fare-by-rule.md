---
type: Standard Term
title: Fare-by-Rule
description: 'An ATPCO filing mechanism (Category 25) that enables airlines and their tariff agents to create derived fares by specifying a percentage or absolute-amount relationship to an already-published base fare, inheriting unspecified rule categories from that base fare while allowing selective overrides. It is the principal method for filing negotiated, corporate, group, wholesale, and agency-private fares without repeating the full set of fare rules for each derived product.'
tags:
  - air-shop
  - active
  - ATPCO
timestamp: '2026-08-16T00:00:00Z'
id: fare-by-rule
vertical: air
category: air-shop
conceptType: standard-term
status: active
abbreviation: FBR
term_ko: 운임 규칙 기반 운임(Fare-by-Rule) / ATPCO Cat 25
definition_ko: '이미 공시된 기준 운임(base fare)과의 비율(%) 또는 절대 금액 관계를 명시하여 파생 운임을 생성하는 ATPCO 신고 메커니즘(Category 25). 명시되지 않은 운임 규칙 카테고리는 기준 운임에서 상속되며, 특정 카테고리는 선택적으로 재정의할 수 있다. 교섭 운임·기업 운임·그룹 운임·도매 운임·대리점 전용 운임 등 각 파생 상품에 대해 운임 규칙 전체를 반복 신고하지 않고 신고할 수 있는 주요 방법이다.'
longDef: 'A Fare-by-Rule filing (ATPCO Category 25) consists of a header identifying the governed market, booking class, and dates, followed by record tables that define the calculation method (Base Fare Percent, Base Fare Plus Differential, or absolute amount) and a series of ''inherit/override'' instructions for each of ATPCO''s 35 rule categories (advance purchase, minimum/maximum stay, combinability, penalties, etc.). Because unspecified categories inherit from the base fare''s own Category filings, the FBR record is compact: a private negotiated fare may override only the penalty and advance-purchase categories while inheriting all other restrictions from the published base. GDS systems process FBR data during pricing to produce a derived fared entry that behaves as a distinct fare for booking and ticketing purposes. ATPCO''s SIGMA platform and its successor infrastructure handle FBR records as part of the airline tariff data stream published daily to participating GDS, NDC offer engines, and direct-connect systems.'
longDef_ko: 'Fare-by-Rule 신고(ATPCO Category 25)는 대상 시장, 예약 클래스, 날짜를 식별하는 헤더와, 계산 방식(기준 운임 백분율, 기준 운임 + 차액, 또는 절대 금액)을 정의하는 레코드 테이블, 그리고 ATPCO의 35개 운임 규칙 카테고리(사전 구매, 최소/최대 체류, 조합 가능성, 위약금 등) 각각에 대한 ''상속/재정의'' 지시로 구성된다. 명시되지 않은 카테고리는 기준 운임의 자체 카테고리 신고에서 상속되므로 FBR 레코드는 간결하다: 예를 들어 비공개 교섭 운임은 위약금과 사전 구매 카테고리만 재정의하고 다른 모든 제한은 공시 기준 운임에서 상속할 수 있다. GDS 시스템은 요금 계산 중에 FBR 데이터를 처리하여, 예약 및 발권 목적에서 별도의 운임으로 동작하는 파생 운임 항목을 생성한다. ATPCO의 SIGMA 플랫폼과 그 후속 인프라는 FBR 레코드를 매일 참가 GDS, NDC 오퍼 엔진, 다이렉트 커넥트 시스템에 게시되는 항공사 관세 데이터 스트림의 일부로 처리한다.'
standardBody: ATPCO
aliases:
  - Fare by Rule
  - ATPCO Category 25
  - Cat 25
  - FBR
  - Derived Fare
relationships:
  - type: broader
    targetTerm: ATPCO
  - type: related
    targetTerm: Fare Rule
  - type: related
    targetTerm: Negotiated Fare
  - type: related
    targetTerm: Fare Filing
  - type: related
    targetTerm: Fare Family
distinctions:
  - targetTerm: Fare Rule
    explanation: 'A Fare Rule (ATPCO Category 35 and related categories) defines the restrictions and conditions that govern a single published fare — advance purchase, minimum stay, penalties, combinability. Fare-by-Rule (Category 25) is a separate, compact record that creates a new derived fare by referencing an existing base fare and inheriting or overriding its rule categories; it is a filing technique, not itself a set of conditions.'
    explanation_ko: '운임 규칙(Fare Rule, ATPCO Category 35 및 관련 카테고리)은 단일 공시 운임을 지배하는 제한·조건(사전 구매, 최소 체류, 위약금, 조합 가능성)을 정의한다. Fare-by-Rule(Category 25)은 기존 기준 운임을 참조해 파생 운임을 생성하는 별도의 간결한 레코드로서 그 규칙 카테고리를 상속하거나 재정의한다. 즉, 신고 기법(filing technique)이지 그 자체가 조건의 집합이 아니다.'
  - targetTerm: Negotiated Fare
    explanation: 'A Negotiated Fare is the commercial outcome — a private price agreed between an airline and a corporate/agency buyer; Fare-by-Rule is one of the primary ATPCO filing techniques used to record and publish that negotiated price in airline tariff systems and GDS.'
    explanation_ko: '교섭 운임(Negotiated Fare)은 항공사와 기업/대리점 구매자 간에 합의된 비공개 가격이라는 상업적 결과이고, Fare-by-Rule은 그 교섭 가격을 항공사 관세 시스템과 GDS에 기록·공시하는 데 사용되는 ATPCO의 주요 신고 기법 중 하나이다.'
sources:
  - name: ATPCO Fare Filing Specification — Category 25 Fare By Rule
    org: ATPCO
    version: ''
    section: Category 25
    url: 'https://atpco.net/solutions/sigma'
    tier: standard-body
  - name: ATPCO SIGMA Platform
    org: ATPCO
    version: ''
    section: ''
    url: 'https://atpco.net/solutions/sigma'
    tier: vendor-doc
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="10" width="32" height="28" rx="3"/><line x1="16" y1="20" x2="32" y2="20"/><line x1="16" y1="28" x2="28" y2="28"/><circle cx="22" cy="24" r="5"/><path d="M18 24h8M22 20v8"/></svg>
---

> An ATPCO filing mechanism (Category 25) that enables airlines and their tariff agents to create derived fares by specifying a percentage or absolute-amount relationship to an already-published base fare, inheriting unspecified rule categories from that base fare while allowing selective overrides. It is the principal method for filing negotiated, corporate, group, wholesale, and agency-private fares without repeating the full set of fare rules for each derived product.

A Fare-by-Rule filing (ATPCO Category 25) consists of a header identifying the governed market, booking class, and dates, followed by record tables that define the calculation method (Base Fare Percent, Base Fare Plus Differential, or absolute amount) and a series of 'inherit/override' instructions for each of ATPCO's 35 rule categories (advance purchase, minimum/maximum stay, combinability, penalties, etc.). Because unspecified categories inherit from the base fare's own Category filings, the FBR record is compact: a private negotiated fare may override only the penalty and advance-purchase categories while inheriting all other restrictions from the published base. GDS systems process FBR data during pricing to produce a derived fared entry that behaves as a distinct fare for booking and ticketing purposes. ATPCO's SIGMA platform and its successor infrastructure handle FBR records as part of the airline tariff data stream published daily to participating GDS, NDC offer engines, and direct-connect systems.

**한국어 / Korean** — **운임 규칙 기반 운임(Fare-by-Rule) / ATPCO Cat 25** — 이미 공시된 기준 운임(base fare)과의 비율(%) 또는 절대 금액 관계를 명시하여 파생 운임을 생성하는 ATPCO 신고 메커니즘(Category 25). 명시되지 않은 운임 규칙 카테고리는 기준 운임에서 상속되며, 특정 카테고리는 선택적으로 재정의할 수 있다. 교섭 운임·기업 운임·그룹 운임·도매 운임·대리점 전용 운임 등 각 파생 상품에 대해 운임 규칙 전체를 반복 신고하지 않고 신고할 수 있는 주요 방법이다.

Fare-by-Rule 신고(ATPCO Category 25)는 대상 시장, 예약 클래스, 날짜를 식별하는 헤더와, 계산 방식(기준 운임 백분율, 기준 운임 + 차액, 또는 절대 금액)을 정의하는 레코드 테이블, 그리고 ATPCO의 35개 운임 규칙 카테고리 각각에 대한 '상속/재정의' 지시로 구성된다. 명시되지 않은 카테고리는 기준 운임의 자체 카테고리 신고에서 상속되므로 FBR 레코드는 간결하다.

**Aliases:** `Fare by Rule`, `ATPCO Category 25`, `Cat 25`, `FBR`, `Derived Fare`

# Related
- [ATPCO](/common/standards/atpco.md) — broader
- [Fare Rule](/air/air-shop/fare-rule.md) — related
- [Negotiated Fare](/air/air-shop/negotiated-fare.md) — related
- [Fare Filing](/air/air-shop/fare-filing.md) — related
- [Fare Family](/air/air-shop/fare-family.md) — related

# Distinctions
- **Fare-by-Rule** vs [Fare Rule](/air/air-shop/fare-rule.md) — A Fare Rule (ATPCO Category 35 and related categories) defines the restrictions and conditions that govern a single published fare — advance purchase, minimum stay, penalties, combinability. Fare-by-Rule (Category 25) is a separate, compact record that creates a new derived fare by referencing an existing base fare and inheriting or overriding its rule categories; it is a filing technique, not itself a set of conditions.
- **Fare-by-Rule** vs [Negotiated Fare](/air/air-shop/negotiated-fare.md) — A Negotiated Fare is the commercial outcome — a private price agreed between an airline and a corporate/agency buyer; Fare-by-Rule is one of the primary ATPCO filing techniques used to record and publish that negotiated price in airline tariff systems and GDS.

# Citations
[1] [ATPCO — ATPCO Fare Filing Specification — Category 25 Fare By Rule](https://atpco.net/solutions/sigma)
[2] [ATPCO — ATPCO SIGMA Platform](https://atpco.net/solutions/sigma)
