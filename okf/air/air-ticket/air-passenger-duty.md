---
type: Regulation
title: Air Passenger Duty
description: 'Air Passenger Duty (APD) is a UK government excise tax charged on the carriage of passengers from UK airports, introduced by the Finance Act 1994 and collected by airlines on behalf of HM Revenue & Customs (HMRC). The duty is levied per passenger and varies by distance band and travel class, making it a significant line-item in the total cost of a UK-departing air ticket.'
tags:
  - air-ticket
  - active
  - HMRC
timestamp: '2026-07-27T00:00:00Z'
id: air-passenger-duty
vertical: air
category: air-ticket
conceptType: regulation
status: active
abbreviation: APD
term_ko: 항공 여행자 세금(APD, Air Passenger Duty)
definition_ko: 'Air Passenger Duty(APD)는 1994년 Finance Act에 의해 도입된 영국 정부의 소비세로, 영국 공항에서 출발하는 여행자 운송에 부과된다. 항공사가 HMRC(영국 국세청)를 대신해 징수하며, 승객 1인당 부과되고 비행 거리대와 좌석 등급에 따라 세율이 달라지기 때문에 영국 출발 항공권 총 비용에서 중요한 항목이 된다.'
longDef: 'APD applies to commercial flights departing UK airports (including England, Scotland, Wales, and Northern Ireland) carrying paying passengers. Airlines register as APD accountable persons with HMRC and submit quarterly returns. The duty is structured around two distance bands: Band A (destinations within 2,000 miles of London) and Band B (all other destinations); within each band, a reduced rate applies for Economy/reduced class and a standard rate for all other classes (Business, First, and premium cabins). A higher rate applies to private jet operators. Scottish airports were temporarily exempted for long-haul routes under devolved powers. APD does not apply to transit/transfer passengers continuing on the same aircraft or domestic flights in Scotland, and connecting passengers are generally exempt if on through ticketing. The duty is a direct passenger tax, legally distinct from airline-imposed surcharges (YQ/YR): it appears as a government-collected tax line on the ticket rather than as a carrier fee. Airlines frequently embed APD within the "Taxes & Fees" total displayed to consumers, but IATA ticketing standards require it to be reported under the UK tax code "GB".'
longDef_ko: 'APD는 유상 승객을 운송하는 영국 공항(잉글랜드·스코틀랜드·웨일스·북아일랜드 포함) 출발 상업 항공편에 적용된다. 항공사는 HMRC에 APD 납세 의무자로 등록하고 분기별 신고서를 제출한다. 세율은 두 가지 거리대로 구성된다: Band A(런던에서 2,000마일 이내 목적지)와 Band B(그 외 모든 목적지)로 나뉘며, 각 거리대 안에서 일반석/축소 클래스에는 감면 세율이, 그 외 클래스(비즈니스·퍼스트·프리미엄 객실)에는 표준 세율이 적용된다. 전세기(private jet) 운영사에는 더 높은 세율이 적용된다. 스코틀랜드 공항은 자치권에 따라 장거리 노선에 한해 일시적 면제를 받은 바 있다. APD는 같은 항공기를 계속 이용하는 환승·통과 승객과 스코틀랜드 국내선에는 적용되지 않으며, 일반적으로 연결 승객은 through ticketing인 경우 면제된다. APD는 직접 여행자세로, 항공사 부과 서차지(YQ/YR)와는 법적으로 구별된다. IATA 발권 기준에서는 영국 세금 코드 "GB"로 신고해야 한다.'
standardBody: HMRC
aliases:
  - Air Passenger Duty
  - UK Departure Tax
  - APD
  - UK APD
providerTerms:
  - provider: IATA / GDS
    term: Tax code GB
    context: 'Under IATA ticketing standards, APD is reported on tickets as tax code GB, distinguishing it from airline-collected fuel surcharges (YQ) or other carrier-imposed fees (YR).'
    context_ko: 'IATA 발권 기준에서 APD는 항공권에 세금 코드 GB로 신고되며, 항공사 징수 연료 서차지(YQ)나 기타 항공사 부과 수수료(YR)와 구별된다.'
    relationship: same
  - provider: EU / Other markets
    term: Passenger duty / departure tax
    context: 'Other countries levy similar per-passenger departure taxes (e.g. German Air Transport Levy, French Solidarity Tax on Air Tickets); APD is specifically the UK version.'
    context_ko: '독일 항공 운송 부담금, 프랑스 항공권 연대세 등 타국도 유사한 1인당 출발세를 부과하며, APD는 그 영국판이다.'
    relationship: related
relationships:
  - type: related
    targetTerm: Tax (YQ/YR)
  - type: related
    targetTerm: Passenger Facility Charge (PFC)
  - type: related
    targetTerm: Surcharge
distinctions:
  - targetTerm: Tax (YQ/YR)
    explanation: 'Tax (YQ/YR) are airline-imposed surcharges that carriers collect for their own account (fuel cost recovery, carrier-imposed fees); APD is a UK government excise tax collected by airlines on behalf of HMRC and remitted to government.'
    explanation_ko: 'Tax(YQ/YR)는 항공사가 자기 계정으로 징수하는 서차지(연료비 회수, 항공사 부과 수수료)이고, APD는 항공사가 HMRC를 대신해 징수하여 정부에 납부하는 영국 정부 소비세이다.'
  - targetTerm: Passenger Facility Charge (PFC)
    explanation: 'A PFC is a US airport improvement fee collected by airlines on behalf of airports; APD is a UK national government excise tax not tied to a specific facility improvement.'
    explanation_ko: 'PFC는 항공사가 공항 대신 징수하는 미국 공항 개선 수수료이고, APD는 특정 시설 개선과 무관한 영국 국가 정부 소비세이다.'
sources:
  - name: 'Air Passenger Duty: registering and paying'
    org: HM Revenue & Customs (HMRC)
    version: ''
    section: ''
    url: 'https://www.gov.uk/guidance/air-passenger-duty-registering-and-submitting-your-return'
    tier: regulator-guidance
  - name: 'Finance Act 1994, Part I, Chapter IV'
    org: UK Parliament
    version: '1994 c. 9'
    section: 'Sections 28–43: Air passenger duty'
    url: 'https://www.legislation.gov.uk/ukpga/1994/9/part/I/chapter/IV'
    tier: regulation
  - name: 'Air Passenger Duty rates and allowances'
    org: HM Revenue & Customs (HMRC)
    version: ''
    section: ''
    url: 'https://www.gov.uk/government/publications/rates-and-allowances-air-passenger-duty'
    tier: regulator-guidance
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M8 36l8-14 8 6 8-18 8 10"/><circle cx="36" cy="20" r="0" fill="currentColor" stroke="none"/><text x="30" y="13" font-size="10" stroke="none" fill="currentColor">£</text><path d="M6 40h36"/></svg>
---

> Air Passenger Duty (APD) is a UK government excise tax charged on the carriage of passengers from UK airports, introduced by the Finance Act 1994 and collected by airlines on behalf of HM Revenue & Customs (HMRC). The duty is levied per passenger and varies by distance band and travel class, making it a significant line-item in the total cost of a UK-departing air ticket.

APD applies to commercial flights departing UK airports carrying paying passengers. Airlines register as APD accountable persons with HMRC and submit quarterly returns. The duty is structured around two distance bands: Band A (destinations within 2,000 miles of London) and Band B (all other destinations); within each band, a reduced rate applies for Economy/reduced class and a standard rate for all other classes. The duty does not apply to transit/transfer passengers continuing on the same aircraft or to connecting passengers on through ticketing. APD is a direct government tax, legally distinct from airline-imposed surcharges (YQ/YR): under IATA ticketing standards it is reported on tickets as tax code GB.

**한국어 / Korean** — **항공 여행자 세금(APD, Air Passenger Duty)** — Air Passenger Duty(APD)는 1994년 Finance Act에 의해 도입된 영국 정부의 소비세로, 영국 공항에서 출발하는 여행자 운송에 부과된다. 항공사가 HMRC를 대신해 징수하며, 승객 1인당 부과되고 비행 거리대와 좌석 등급에 따라 세율이 달라진다.

APD는 유상 승객을 운송하는 영국 공항 출발 상업 항공편에 적용된다. 세율은 Band A(런던에서 2,000마일 이내)와 Band B(그 외)로 나뉘며, 각 거리대 안에서 일반석에는 감면 세율이, 그 외 클래스에는 표준 세율이 적용된다. APD는 항공사 부과 서차지(YQ/YR)와는 법적으로 구별되는 정부세이며, IATA 발권 기준에서 세금 코드 GB로 신고된다.

**Aliases:** `Air Passenger Duty`, `UK Departure Tax`, `APD`, `UK APD`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| IATA / GDS | `Tax code GB` | same | Under IATA ticketing standards, APD is reported on tickets as tax code GB, distinguishing it from airline-collected fuel surcharges (YQ) or other carrier-imposed fees (YR). |
| EU / Other markets | `Passenger duty / departure tax` | related | Other countries levy similar per-passenger departure taxes (e.g. German Air Transport Levy, French Solidarity Tax on Air Tickets); APD is specifically the UK version. |

# Related
- [Tax (YQ/YR)](/air/air-shop/tax-yq-yr.md) — related
- [Passenger Facility Charge (PFC)](/air/air-ticket/passenger-facility-charge.md) — related
- [Surcharge](/air/air-shop/surcharge.md) — related

# Distinctions
- **Air Passenger Duty** vs [Tax (YQ/YR)](/air/air-shop/tax-yq-yr.md) — Tax (YQ/YR) are airline-imposed surcharges that carriers collect for their own account; APD is a UK government excise tax collected by airlines on behalf of HMRC and remitted to government.
- **Air Passenger Duty** vs [Passenger Facility Charge (PFC)](/air/air-ticket/passenger-facility-charge.md) — A PFC is a US airport improvement fee collected by airlines on behalf of airports; APD is a UK national government excise tax not tied to a specific facility improvement.

# Citations
[1] [HMRC — Air Passenger Duty: registering and paying](https://www.gov.uk/guidance/air-passenger-duty-registering-and-submitting-your-return)
[2] [UK Parliament — Finance Act 1994, Part I, Chapter IV](https://www.legislation.gov.uk/ukpga/1994/9/part/I/chapter/IV)
[3] [HMRC — Air Passenger Duty rates and allowances](https://www.gov.uk/government/publications/rates-and-allowances-air-passenger-duty)
