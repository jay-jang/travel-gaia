---
type: Standard Term
title: Rate of Exchange
description: 'The IATA Rate of Exchange (ROE) is the official conversion factor used to translate NUC (Neutral Unit of Construction) amounts into the local currency of the country of ticket commencement. IATA publishes ROE values for each ticketing country based on its Banker''s Selling Rate (BSR) mechanism, and airlines use these rates — rather than live market rates — as the mandated conversion step in international fare construction.'
tags:
  - air-shop
  - active
  - IATA
timestamp: '2026-07-30T00:00:00Z'
id: rate-of-exchange
vertical: air
category: air-shop
conceptType: standard-term
status: active
abbreviation: ROE
term_ko: 환산율(ROE)
definition_ko: 'IATA 환산율(ROE)은 NUC(Neutral Unit of Construction) 금액을 티켓 발행 국가의 현지 통화로 변환하는 데 사용되는 공식 환산 계수이다. IATA는 자체 은행 매도 환율(BSR) 체계를 기반으로 각 발권 국가의 ROE를 발행하며, 항공사는 시장 환율 대신 이 공식 ROE를 국제선 운임 산정의 필수 변환 단계로 사용한다.'
longDef: 'In IATA international fare construction, prices are first built in NUC to allow the summation of fare components denominated in different local currencies. The resulting NUC total must then be converted to the traveler''s ticketing currency using the ROE for that country. The conversion formula is: Local Currency Amount = NUC Total ÷ ROE (where ROE is expressed as NUCs per one local currency unit). For example, if ROE = 0.7450 for EUR, a NUC total of 745.00 converts to EUR 1,000.00. The ROE for USD is fixed at 1.000000, making USD the effective reference currency of the NUC system. IATA publishes ROEs weekly in its Banker''s Selling Rate tables, derived from bank buying rates for US dollars in each country, pursuant to IATA Resolution 024. Because the ROE reflects the rate at which banks in that country sell USD, it is always the official booking-currency conversion rate regardless of the actual payment currency used at point of sale — the ROE is not the rate applied to credit-card transactions or DCC (Dynamic Currency Conversion). ATPCO stores fare amounts in local currency; ticketing systems convert them to NUC using the ROE for comparison across the fare ladder, then convert the NUC total back to local currency at point of sale. Countries without an IATA-published ROE (typically closed economies or currencies with restricted convertibility) require special handling, and airlines may apply government-mandated rates.'
longDef_ko: 'IATA 국제선 운임 산정에서 가격은 먼저 서로 다른 현지 통화로 표기된 운임 컴포넌트의 합산을 가능하게 하기 위해 NUC로 구성된다. 그런 다음 결과 NUC 합계는 해당 국가의 ROE를 사용하여 여행자의 발권 통화로 변환되어야 한다. 변환 공식은 다음과 같다: 현지 통화 금액 = NUC 합계 ÷ ROE(ROE는 현지 통화 1단위당 NUC 수로 표현). 예를 들어 EUR ROE = 0.7450이면 NUC 745.00은 EUR 1,000.00으로 환산된다. USD의 ROE는 1.000000으로 고정되어 있어 USD가 NUC 시스템의 사실상 기준 통화가 된다. IATA는 IATA Resolution 024에 따라 각 국가의 USD 매입 환율에서 파생된 은행 매도 환율표에서 매주 ROE를 공시한다. ROE는 해당 국가 은행이 USD를 판매하는 환율을 반영하므로 판매 시점에 사용된 실제 결제 통화와 관계없이 항상 공식 예약 통화 환산율로 적용된다. ROE는 신용 카드 거래나 DCC(동적 통화 환산)에 적용되는 환율이 아니다. ATPCO는 운임 금액을 현지 통화로 저장하고, 발권 시스템은 운임 단계(fare ladder) 전반에 걸친 비교를 위해 ROE를 사용하여 NUC로 변환한 다음, 판매 시점에 NUC 합계를 다시 현지 통화로 변환한다.'
standardBody: IATA
aliases:
  - Rate of Exchange
  - IATA Rate of Exchange
  - IROE
  - Banker's Selling Rate
  - BSR
relationships:
  - type: related
    targetTerm: NUC
  - type: related
    targetTerm: Fare Construction
  - type: related
    targetTerm: Fare Component
  - type: related
    targetTerm: ISO 4217 Currency Code
  - type: related
    targetTerm: ATPCO
distinctions:
  - targetTerm: NUC
    explanation: 'NUC (Neutral Unit of Construction) is the common unit into which fare components are summed; the ROE is the conversion factor applied at the end of fare construction to translate the NUC total back into the local ticketing currency — NUC is the accumulation unit, ROE is the conversion key.'
    explanation_ko: 'NUC(Neutral Unit of Construction)는 운임 컴포넌트가 합산되는 공통 단위이고, ROE는 운임 산정 마지막 단계에서 NUC 합계를 현지 발권 통화로 환산하는 데 적용되는 환산 계수이다. NUC는 누적 단위이고 ROE는 환산 키이다.'
  - targetTerm: ISO 4217 Currency Code
    explanation: 'ISO 4217 codes identify the currencies involved in a transaction; the ROE is the specific IATA-published numeric conversion factor between NUC and each ISO 4217 currency in the context of international fare construction — the code names the currency, the ROE provides the fare-calculation exchange rate.'
    explanation_ko: 'ISO 4217 코드는 거래에 관련된 통화를 식별하고, ROE는 국제선 운임 산정 맥락에서 NUC와 각 ISO 4217 통화 간의 IATA 공시 환산 계수이다. 코드는 통화를 지칭하고 ROE는 운임 계산 환율을 제공한다.'
sources:
  - name: 'IATA Resolution 024 — Bank Selling Rates (Banker''s Selling Rates for currency conversion)'
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/programs/passenger/iata-rates-of-exchange/'
    tier: standard-body
  - name: IATA Ticketing Handbook — NUC and ROE in International Fare Construction
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/ticketing-handbook/'
    tier: standard-body
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="16" cy="20" r="8"/><circle cx="32" cy="28" r="8"/><path d="M22 14l4 4-4 4"/><path d="M26 34l-4-4 4-4"/><path d="M14 20h4 M30 28h4"/></svg>
---

> The IATA Rate of Exchange (ROE) is the official conversion factor used to translate NUC (Neutral Unit of Construction) amounts into the local currency of the country of ticket commencement. IATA publishes ROE values for each ticketing country based on its Banker's Selling Rate (BSR) mechanism, and airlines use these rates — rather than live market rates — as the mandated conversion step in international fare construction.

In IATA international fare construction, prices are first built in NUC to allow the summation of fare components denominated in different local currencies. The resulting NUC total must then be converted to the traveler's ticketing currency using the ROE for that country. The conversion formula is: Local Currency Amount = NUC Total ÷ ROE (where ROE is expressed as NUCs per one local currency unit). For example, if ROE = 0.7450 for EUR, a NUC total of 745.00 converts to EUR 1,000.00. The ROE for USD is fixed at 1.000000, making USD the effective reference currency of the NUC system. IATA publishes ROEs weekly in its Banker's Selling Rate tables, derived from bank buying rates for US dollars in each country, pursuant to IATA Resolution 024. Because the ROE reflects the rate at which banks in that country sell USD, it is always the official booking-currency conversion rate regardless of the actual payment currency used at point of sale — the ROE is not the rate applied to credit-card transactions or DCC (Dynamic Currency Conversion). ATPCO stores fare amounts in local currency; ticketing systems convert them to NUC using the ROE for comparison across the fare ladder, then convert the NUC total back to local currency at point of sale. Countries without an IATA-published ROE (typically closed economies or currencies with restricted convertibility) require special handling, and airlines may apply government-mandated rates.

**한국어 / Korean** — **환산율(ROE)** — IATA 환산율(ROE)은 NUC(Neutral Unit of Construction) 금액을 티켓 발행 국가의 현지 통화로 변환하는 데 사용되는 공식 환산 계수이다. IATA는 자체 은행 매도 환율(BSR) 체계를 기반으로 각 발권 국가의 ROE를 발행하며, 항공사는 시장 환율 대신 이 공식 ROE를 국제선 운임 산정의 필수 변환 단계로 사용한다.

IATA 국제선 운임 산정에서 가격은 먼저 NUC로 구성되며, NUC 합계는 해당 국가의 ROE를 사용하여 여행자의 발권 통화로 변환된다. 변환 공식: 현지 통화 금액 = NUC 합계 ÷ ROE. USD의 ROE는 1.000000으로 고정되어 있다. IATA는 IATA Resolution 024에 따라 매주 ROE를 공시한다. ROE는 신용 카드 거래나 DCC에 적용되는 환율이 아닌 공식 예약 통화 환산율이다.

**Aliases:** `Rate of Exchange`, `IATA Rate of Exchange`, `IROE`, `Banker's Selling Rate`, `BSR`

# Related
- [NUC](/air/air-shop/nuc.md) — related
- [Fare Construction](/air/air-shop/fare-construction.md) — related
- [Fare Component](/air/air-shop/fare-component.md) — related
- [ISO 4217 Currency Code](/common/codes/iso-4217-currency-code.md) — related
- [ATPCO](/air/air-shop/atpco.md) — related

# Distinctions
- **Rate of Exchange** vs [NUC](/air/air-shop/nuc.md) — NUC (Neutral Unit of Construction) is the common unit into which fare components are summed; the ROE is the conversion factor applied at the end of fare construction to translate the NUC total back into the local ticketing currency — NUC is the accumulation unit, ROE is the conversion key.
- **Rate of Exchange** vs [ISO 4217 Currency Code](/common/codes/iso-4217-currency-code.md) — ISO 4217 codes identify the currencies involved in a transaction; the ROE is the specific IATA-published numeric conversion factor between NUC and each ISO 4217 currency in the context of international fare construction — the code names the currency, the ROE provides the fare-calculation exchange rate.

# Citations
[1] [IATA — IATA Resolution 024 — Bank Selling Rates (Banker's Selling Rates for currency conversion)](https://www.iata.org/en/programs/passenger/iata-rates-of-exchange/)
[2] [IATA — IATA Ticketing Handbook — NUC and ROE in International Fare Construction](https://www.iata.org/en/publications/manuals/ticketing-handbook/)
