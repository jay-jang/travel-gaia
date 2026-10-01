---
type: Metric
title: Emissions Factor
description: 'An emissions factor is a published coefficient expressing the mass of greenhouse gases emitted per unit of a defined travel activity — such as kg CO2e per passenger-kilometre, per seat-kilometre, or per tonne of fuel burned — used to convert measured activity data into an estimated carbon footprint. Emissions factors are published by bodies including ICAO, the GHG Protocol, and GLEC, and vary by transport mode, fuel type, aircraft type, seat class, and load factor.'
tags:
  - sustainability
  - active
  - ICAO
timestamp: '2026-10-01T00:00:00Z'
id: emissions-factor
vertical: common
category: sustainability
conceptType: metric
status: active
term_ko: 배출 계수(Emissions Factor)
definition_ko: '배출 계수는 정의된 여행 활동 단위당 — 예를 들어 승객 킬로미터당 kg CO2e, 좌석 킬로미터당, 또는 연소 연료 1톤당 — 방출되는 온실가스 질량을 나타내는 공시 계수이다. 측정된 활동 데이터를 추정 탄소 발자국으로 변환하는 데 사용되며, ICAO, GHG 프로토콜, GLEC 등의 기관에서 발행하고 운송 수단, 연료 유형, 항공기 유형, 좌석 등급, 탑승률에 따라 달라진다.'
longDef: 'For aviation, emissions factors are typically expressed as kg CO2 (or CO2e including non-CO2 effects such as contrails and NOx) per revenue passenger-kilometre (RPK) or per available seat-kilometre (ASK). The ICAO Carbon Emissions Calculator (ICEC) uses ICAO-published seat-class-specific factors; the IATA CO2 Connect methodology publishes flight-level factors accounting for payload and actual fuel burn. For hotels, the Hotel Carbon Measurement Initiative (HCMI) defines factors per occupied room-night using energy consumption data. The GHG Protocol Scope 3 Category 6 (Business Travel) guidance directs companies to use the most specific emission factor available for each leg of a trip. Factors must match the system boundary: a well-to-wake (WtW) factor covers the full fuel life cycle (production + combustion), whereas a tank-to-wake (TtW) factor covers only combustion. Emissions factors are periodically revised as the fuel mix, aircraft technology, and load factors change; using outdated factors is a common source of corporate carbon accounting error.'
longDef_ko: '항공의 경우 배출 계수는 보통 수익 승객 킬로미터(RPK) 또는 가용 좌석 킬로미터(ASK)당 kg CO2(또는 항적운, NOx 등 비CO2 효과를 포함한 CO2e)로 표현된다. ICAO 탄소 배출 계산기(ICEC)는 ICAO가 발행한 좌석 등급별 계수를 사용하고, IATA CO2 Connect 방법론은 페이로드와 실제 연료 소모를 반영한 항공편 수준의 계수를 발행한다. 호텔의 경우 호텔 탄소 측정 이니셔티브(HCMI)는 에너지 소비 데이터를 사용해 점유 객실 숙박당 계수를 정의한다. GHG 프로토콜 Scope 3 카테고리 6(비즈니스 여행) 가이던스는 기업들이 여행의 각 구간에 가장 구체적인 배출 계수를 사용하도록 안내한다. 계수는 시스템 경계와 일치해야 한다: 유정-익면(WtW) 계수는 전체 연료 생애주기(생산 + 연소)를 포함하고, 탱크-익면(TtW) 계수는 연소만 포함한다. 연료 믹스, 항공기 기술, 탑승률이 변화함에 따라 배출 계수는 주기적으로 개정되며, 구식 계수 사용은 기업 탄소 회계의 일반적인 오류 원인이다.'
standardBody: ICAO
aliases:
  - Emission Factor
  - Carbon Emission Factor
  - CO2 Factor
  - GHG Emission Factor
relationships:
  - type: related
    targetTerm: GHG Protocol Scope 3 (Business Travel)
  - type: related
    targetTerm: IATA CO2 Connect
  - type: related
    targetTerm: ICAO Carbon Emissions Calculator (ICEC)
  - type: related
    targetTerm: Well-to-Wake (WtW)
  - type: related
    targetTerm: CORSIA
  - type: related
    targetTerm: Sustainable Aviation Fuel (SAF)
distinctions:
  - targetTerm: Carbon Offset
    explanation: 'An emissions factor is a data input used to quantify how much CO2e a given amount of travel activity produces; a carbon offset is a purchased credit that compensates for a stated quantity of emissions already calculated — an emissions factor is a calculation tool, an offset is a financial instrument.'
    explanation_ko: '배출 계수는 주어진 여행 활동이 얼마나 많은 CO2e를 생성하는지 정량화하는 데 사용되는 데이터 입력값이고, 탄소 상쇄권은 이미 계산된 배출량에 대해 보상하기 위해 구매하는 크레딧이다. 배출 계수는 계산 도구이고, 상쇄권은 금융 수단이다.'
  - targetTerm: Well-to-Wake (WtW)
    explanation: 'A Well-to-Wake (WtW) scope is the system boundary decision that determines which life-cycle stages to include in an emissions calculation; an emissions factor with WtW scope is one that covers fuel production through combustion. An emissions factor is the numerical coefficient; WtW is the boundary specification that defines what that coefficient covers.'
    explanation_ko: '유정-익면(WtW) 범위는 배출 계산에 포함할 생애주기 단계를 결정하는 시스템 경계 결정이고, WtW 범위의 배출 계수는 연료 생산부터 연소까지를 포함하는 계수이다. 배출 계수는 수치 계수이고, WtW는 그 계수가 무엇을 포함하는지를 정의하는 경계 사양이다.'
  - targetTerm: IATA CO2 Connect
    explanation: 'IATA CO2 Connect is a specific API-based flight carbon calculation service that applies IATA-published emissions factors to flight-level data; an emissions factor is the underlying coefficient that any such calculator consumes.'
    explanation_ko: 'IATA CO2 Connect는 IATA가 발행한 배출 계수를 항공편 수준의 데이터에 적용하는 특정 API 기반 항공편 탄소 계산 서비스이고, 배출 계수는 그러한 계산기가 사용하는 기본 계수이다.'
sources:
  - name: ICAO Carbon Emissions Calculator Methodology
    org: ICAO
    version: Version 13 (2023)
    section: ''
    url: 'https://www.icao.int/environmental-protection/CarbonOffset/Pages/default.aspx'
    tier: standard-body
  - name: GHG Protocol Corporate Accounting and Reporting Standard — Scope 3 Category 6
    org: GHG Protocol / World Resources Institute
    version: ''
    section: Category 6 Business Travel
    url: 'https://ghgprotocol.org/scope-3-technical-calculation-guidance'
    tier: standard-body
  - name: Global Logistics Emissions Council (GLEC) Framework for Logistics Emissions Accounting
    org: Smart Freight Centre
    version: Version 3 (2023)
    section: ''
    url: 'https://www.smartfreightcentre.org/en/how-to-implement-items/what-is-glec-framework/58/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="24" r="4"/><path d="M24 8v4M24 36v4M8 24h4M36 24h4"/><path d="M14.1 14.1l2.8 2.8M31.1 31.1l2.8 2.8M14.1 33.9l2.8-2.8M31.1 16.9l2.8-2.8"/><path d="M24 12a12 12 0 0 1 8.5 20.5"/><path d="M24 12a12 12 0 0 0-8.5 20.5"/></svg>
---

> An emissions factor is a published coefficient expressing the mass of greenhouse gases emitted per unit of a defined travel activity — such as kg CO2e per passenger-kilometre, per seat-kilometre, or per tonne of fuel burned — used to convert measured activity data into an estimated carbon footprint. Emissions factors are published by bodies including ICAO, the GHG Protocol, and GLEC, and vary by transport mode, fuel type, aircraft type, seat class, and load factor.

For aviation, emissions factors are typically expressed as kg CO2 (or CO2e including non-CO2 effects such as contrails and NOx) per revenue passenger-kilometre (RPK) or per available seat-kilometre (ASK). The ICAO Carbon Emissions Calculator (ICEC) uses ICAO-published seat-class-specific factors; the IATA CO2 Connect methodology publishes flight-level factors accounting for payload and actual fuel burn. For hotels, the Hotel Carbon Measurement Initiative (HCMI) defines factors per occupied room-night using energy consumption data. The GHG Protocol Scope 3 Category 6 (Business Travel) guidance directs companies to use the most specific emission factor available for each leg of a trip. Factors must match the system boundary: a well-to-wake (WtW) factor covers the full fuel life cycle (production + combustion), whereas a tank-to-wake (TtW) factor covers only combustion. Emissions factors are periodically revised as the fuel mix, aircraft technology, and load factors change; using outdated factors is a common source of corporate carbon accounting error.

**한국어 / Korean** — **배출 계수(Emissions Factor)** — 배출 계수는 정의된 여행 활동 단위당 — 예를 들어 승객 킬로미터당 kg CO2e, 좌석 킬로미터당, 또는 연소 연료 1톤당 — 방출되는 온실가스 질량을 나타내는 공시 계수이다. 측정된 활동 데이터를 추정 탄소 발자국으로 변환하는 데 사용되며, ICAO, GHG 프로토콜, GLEC 등의 기관에서 발행하고 운송 수단, 연료 유형, 항공기 유형, 좌석 등급, 탑승률에 따라 달라진다.

항공의 경우 배출 계수는 보통 수익 승객 킬로미터(RPK) 또는 가용 좌석 킬로미터(ASK)당 kg CO2(또는 항적운, NOx 등 비CO2 효과를 포함한 CO2e)로 표현된다. ICAO 탄소 배출 계산기(ICEC)는 ICAO가 발행한 좌석 등급별 계수를 사용하고, IATA CO2 Connect 방법론은 페이로드와 실제 연료 소모를 반영한 항공편 수준의 계수를 발행한다. 계수는 시스템 경계와 일치해야 하며, 유정-익면(WtW) 계수는 전체 연료 생애주기를 포함하고 탱크-익면(TtW) 계수는 연소만 포함한다.

**Aliases:** `Emission Factor`, `Carbon Emission Factor`, `CO2 Factor`, `GHG Emission Factor`

# Related
- [GHG Protocol Scope 3 (Business Travel)](/common/sustainability/ghg-protocol-scope-3-business-travel.md) — related
- [IATA CO2 Connect](/common/sustainability/iata-co2-connect.md) — related
- [ICAO Carbon Emissions Calculator (ICEC)](/common/sustainability/icao-carbon-emissions-calculator-icec.md) — related
- [Well-to-Wake (WtW)](/common/sustainability/well-to-wake-wtw.md) — related
- [CORSIA](/common/sustainability/corsia.md) — related
- [Sustainable Aviation Fuel (SAF)](/common/sustainability/sustainable-aviation-fuel-saf.md) — related

# Distinctions
- **Emissions Factor** vs [Carbon Offset](/common/sustainability/carbon-offset.md) — An emissions factor is a data input used to quantify how much CO2e a given amount of travel activity produces; a carbon offset is a purchased credit that compensates for a stated quantity of emissions already calculated — an emissions factor is a calculation tool, an offset is a financial instrument.
- **Emissions Factor** vs [Well-to-Wake (WtW)](/common/sustainability/well-to-wake-wtw.md) — A Well-to-Wake (WtW) scope is the system boundary decision that determines which life-cycle stages to include in an emissions calculation; an emissions factor with WtW scope is one that covers fuel production through combustion. An emissions factor is the numerical coefficient; WtW is the boundary specification that defines what that coefficient covers.
- **Emissions Factor** vs [IATA CO2 Connect](/common/sustainability/iata-co2-connect.md) — IATA CO2 Connect is a specific API-based flight carbon calculation service that applies IATA-published emissions factors to flight-level data; an emissions factor is the underlying coefficient that any such calculator consumes.

# Citations
[1] [ICAO — ICAO Carbon Emissions Calculator Methodology — Version 13 (2023)](https://www.icao.int/environmental-protection/CarbonOffset/Pages/default.aspx)
[2] [GHG Protocol / World Resources Institute — GHG Protocol Corporate Accounting and Reporting Standard — Scope 3 Category 6 — Category 6 Business Travel](https://ghgprotocol.org/scope-3-technical-calculation-guidance)
[3] [Smart Freight Centre — Global Logistics Emissions Council (GLEC) Framework for Logistics Emissions Accounting — Version 3 (2023)](https://www.smartfreightcentre.org/en/how-to-implement-items/what-is-glec-framework/58/)
