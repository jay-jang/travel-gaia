---
type: Business Term
title: Inclusive Tour (IT) Fare
description: 'An IATA/ATPCO fare category in which a discounted airfare is available exclusively when the air ticket is sold as part of a qualifying tour package. Governed by ATPCO Category 27 (Tours), an IT fare typically requires minimum ground-content value, a minimum stay, and the tour operator to hold a recognised IT number; the "IT" designator appears in the fare basis code, and the corresponding tour code is printed on the ticket.'
tags:
  - air-shop
  - active
  - ATPCO
timestamp: '2026-07-29T00:00:00Z'
id: inclusive-tour-it-fare
vertical: air
category: air-shop
conceptType: business-term
status: active
abbreviation: IT Fare
term_ko: 패키지 여행 운임(IT 운임, Inclusive Tour Fare)
definition_ko: '항공권이 적격 패키지 상품의 일부로 판매될 때에만 적용되는 IATA/ATPCO 할인 운임 범주. ATPCO Category 27(Tours)에 의해 규율되며, 통상 최소 지상 콘텐츠 금액, 최소 체류 기간, 투어 오퍼레이터의 공인 IT 번호 보유를 요건으로 한다. 운임 기준 코드에 "IT" 지시자가 포함되고, 해당 tour code가 항공권에 인쇄된다.'
longDef: 'Inclusive Tour fares originated under IATA Tariff Coordinating Conference agreements as a mechanism to allow airlines to offer below-published fares on the condition that the airline seat was inseparably bundled with qualifying land content (accommodation, transfers, or sightseeing) from a licensed tour organiser. The ATPCO Category 27 fare rule specifies the tour conditions: minimum land price, minimum nights of accommodation, minimum tour price, and/or a mandatory tour code or IT number. The fare basis code carries an "IT" or "ITC" designator (e.g., YOWIT, VLOWIT). The tour operator (or air consolidator acting as packager) takes responsibility for ensuring package conditions are met; selling an IT fare as a standalone ticket is a tariff violation. ITC (Inclusive Tour Charter) fares apply to charter operations. Separately, FIT (First Individual Tour) is a sub-type coding in some GDS/ATPCO tables. In practice, IT fares are most visible in charter-heavy leisure markets (UK, Germany, Scandinavia) but also exist as scheduled-service IT components used by consolidators in wholesale packaging.'
longDef_ko: 'IT 운임은 IATA 운임 조정 회의 협정 하에, 항공 좌석이 공인 투어 주최자의 적격 지상 콘텐츠(숙박·이동·관광)와 불가분하게 묶이는 조건으로 공시 운임 이하를 항공사가 제공할 수 있는 메커니즘으로 탄생했다. ATPCO Category 27 운임 규정은 투어 조건을 명시한다: 최소 지상 가격, 최소 숙박 박수, 최소 투어 가격, 그리고/또는 필수 tour code 또는 IT 번호. 운임 기준 코드에는 "IT" 또는 "ITC" 지시자가 포함된다(예: YOWIT, VLOWIT). 투어 오퍼레이터(또는 패키지업자 역할의 항공 통합업자)는 패키지 조건 충족을 보장할 책임이 있으며, IT 운임을 단독 항공권으로 판매하는 것은 운임 위반이다. ITC(Inclusive Tour Charter) 운임은 전세기 운항에 적용된다. GDS/ATPCO 테이블에서는 FIT(First Individual Tour)가 하위 유형 코드로 등장하기도 한다. 실무적으로 IT 운임은 영국·독일·스칸디나비아 등 전세기 비중이 높은 레저 시장에서 가장 잘 보이지만, 도매 패키징에 활용되는 정기 노선 IT 구성 요소로도 존재한다.'
standardBody: ATPCO
aliases:
  - IT Fare
  - Inclusive Tour Fare
  - ITC Fare
  - IT Air Component
relationships:
  - type: related
    targetTerm: ATPCO
  - type: related
    targetTerm: Tour Code
  - type: related
    targetTerm: Fare Basis Code
  - type: related
    targetTerm: Air Consolidator
distinctions:
  - targetTerm: Tour Code
    explanation: 'The Tour Code is a reference number printed on the ticket in the Tour Code box, identifying the tour operator or package to the airline and GDS; the IT Fare is the underlying ATPCO Category 27 tariff provision that grants the reduced fare rate on the condition of qualifying land content. A Tour Code may be required to trigger an IT Fare, but the two are distinct: the Tour Code is a ticket field, the IT Fare is a fare type.'
    explanation_ko: 'Tour Code는 항공권 Tour Code 칸에 인쇄되어 투어 오퍼레이터 또는 패키지를 항공사·GDS에 식별시키는 참조 번호이고, IT 운임은 적격 지상 콘텐츠를 조건으로 할인 운임을 부여하는 ATPCO Category 27 운임 규정이다. Tour Code는 IT 운임을 발동하는 데 필요할 수 있지만 둘은 서로 다르다. Tour Code는 항공권 필드이고, IT 운임은 운임 유형이다.'
  - targetTerm: Air Consolidator
    explanation: 'An Air Consolidator purchases bulk blocks of airline seats at net fares for redistribution; an IT Fare is a specific ATPCO-published fare type that requires qualifying tour content. Consolidators may use IT Fares as part of their packaging activity, but consolidators also work with non-IT negotiated net fares.'
    explanation_ko: 'Air Consolidator는 재배포를 위해 순 운임으로 항공 좌석을 대량 구매하는 업체이고, IT 운임은 적격 투어 콘텐츠를 요건으로 하는 ATPCO 공시 운임 유형이다. 통합업자는 패키징 활동의 일환으로 IT 운임을 사용할 수 있지만, 비-IT 협상 순 운임으로도 작업한다.'
sources:
  - name: 'ATPCO Fare Rules — Category 27 (Tours)'
    org: ATPCO
    version: ''
    section: Category 27
    url: 'https://atpco.net/single-blog/what-are-atpco-fare-rules-categories/'
    tier: standard-body
  - name: Inclusive Tour — IFTTA Glossary
    org: International Forum of Travel & Tourism Advocates (IFTTA)
    version: ''
    section: ''
    url: 'https://iftta.org/glossary/inclusive-tour/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="16" width="36" height="22" rx="3"/><path d="M16 16v-5a8 4 0 0 1 16 0v5"/><path d="M6 26h36"/><text x="14" y="37" font-size="9" stroke="none" fill="currentColor" font-family="monospace">IT</text></svg>
---

> An IATA/ATPCO fare category in which a discounted airfare is available exclusively when the air ticket is sold as part of a qualifying tour package; governed by ATPCO Category 27 (Tours), with the "IT" designator appearing in the fare basis code.

Inclusive Tour fares originated under IATA Tariff Coordinating Conference agreements as a mechanism to allow airlines to offer below-published fares on the condition that the airline seat was inseparably bundled with qualifying land content (accommodation, transfers, or sightseeing) from a licensed tour organiser. The ATPCO Category 27 fare rule specifies the tour conditions: minimum land price, minimum nights of accommodation, minimum tour price, and/or a mandatory tour code or IT number. The fare basis code carries an "IT" or "ITC" designator (e.g., YOWIT, VLOWIT). The tour operator (or air consolidator acting as packager) takes responsibility for ensuring package conditions are met; selling an IT fare as a standalone ticket is a tariff violation. In practice, IT fares are most visible in charter-heavy leisure markets (UK, Germany, Scandinavia) but also exist as scheduled-service IT components used by consolidators in wholesale packaging.

**한국어 / Korean** — **패키지 여행 운임(IT 운임, Inclusive Tour Fare)** — 항공권이 적격 패키지 상품의 일부로 판매될 때에만 적용되는 IATA/ATPCO 할인 운임 범주. ATPCO Category 27(Tours)에 의해 규율되며, 운임 기준 코드에 "IT" 지시자가 포함된다.

IT 운임은 IATA 운임 조정 회의 협정 하에, 항공 좌석이 공인 투어 주최자의 적격 지상 콘텐츠와 불가분하게 묶이는 조건으로 공시 운임 이하를 항공사가 제공할 수 있는 메커니즘으로 탄생했다. ATPCO Category 27 운임 규정은 투어 조건을 명시한다. 운임 기준 코드에는 "IT" 또는 "ITC" 지시자가 포함된다(예: YOWIT, VLOWIT). 투어 오퍼레이터는 패키지 조건 충족을 보장할 책임이 있으며, IT 운임을 단독 항공권으로 판매하는 것은 운임 위반이다.

**Aliases:** `IT Fare`, `Inclusive Tour Fare`, `ITC Fare`, `IT Air Component`

# Related
- [ATPCO](/air/air-shop/atpco.md) — related
- [Tour Code](/air/air-ticket/tour-code.md) — related
- [Fare Basis Code](/air/air-shop/fare-basis-code.md) — related
- [Air Consolidator](/air/air-ticket/air-consolidator.md) — related

# Distinctions
- **Inclusive Tour (IT) Fare** vs [Tour Code](/air/air-ticket/tour-code.md) — The Tour Code is a reference number printed on the ticket identifying the tour operator; the IT Fare is the underlying ATPCO Category 27 tariff provision granting the reduced fare on condition of qualifying land content. A Tour Code may be required to trigger an IT Fare, but the two are distinct: the Tour Code is a ticket field, the IT Fare is a fare type.
- **Inclusive Tour (IT) Fare** vs [Air Consolidator](/air/air-ticket/air-consolidator.md) — An Air Consolidator purchases bulk blocks of airline seats at net fares for redistribution; an IT Fare is a specific ATPCO-published fare type requiring qualifying tour content. Consolidators may use IT Fares as part of packaging activity, but also work with non-IT negotiated net fares.

# Citations
[1] [ATPCO — ATPCO Fare Rules — Category 27 (Tours)](https://atpco.net/single-blog/what-are-atpco-fare-rules-categories/)
[2] [International Forum of Travel & Tourism Advocates (IFTTA) — Inclusive Tour — IFTTA Glossary](https://iftta.org/glossary/inclusive-tour/)
