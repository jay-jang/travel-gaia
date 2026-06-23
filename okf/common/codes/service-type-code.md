---
type: Code
title: Service Type Code
description: 'A single-character IATA SSIM code (defined in Appendix C of the Standard Schedules Information Manual) that classifies each flight or flight leg by its type of service. Values distinguish, for example, scheduled passenger normal service (J), scheduled cargo/mail (F), passenger charter (C), cargo/mail charter (H), and non-revenue positioning/ferry flights (P).'
tags:
  - codes
  - active
  - IATA
timestamp: '2026-06-18T00:00:00Z'
id: service-type-code
vertical: common
category: codes
conceptType: code
status: active
term_ko: 서비스 유형 코드(SSIM Service Type)
definition_ko: '항공편 또는 항공 구간(leg)을 서비스 유형별로 분류하는 IATA SSIM의 1자리 코드로, SSIM 부록 C(Appendix C)에 정의된다. 예를 들어 정기 여객 일반편(J), 정기 화물/우편(F), 여객 전세편(charter, C), 화물/우편 전세편(H), 무수익 회항/페리편(positioning/ferry, P) 등을 구분한다.'
longDef: 'The Service Type Code appears in core SSIM/SSM schedule records and in distribution data feeds, where it underpins how a leg is interpreted across reservations, availability, scheduling, and slot coordination. Appendix C groups the codes by category — scheduled passenger (e.g., J normal, S shuttle), scheduled cargo/mail (e.g., F, M mail), additional (non-scheduled extra-section) flights, charter (e.g., C, H, L), and non-revenue/operational types such as P (positioning/ferry), T (technical test), K (training), and X (technical stop). In data dictionaries the field is often labelled FlightServiceTypeIATA or SERVICE_TYPE. Because nearly every downstream schedule and inventory process keys off whether a leg is sellable passenger service versus cargo, charter, or a ferry movement, the Service Type Code is foundational to schedule data exchange.'
longDef_ko: '서비스 유형 코드는 핵심 SSIM/SSM 스케줄 레코드와 유통 데이터 피드에 나타나며, 예약·가용성·스케줄링·슬롯 조정 전반에서 해당 구간을 어떻게 해석할지 결정하는 기준이 된다. 부록 C는 코드를 정기 여객(예: J 일반, S 셔틀), 정기 화물/우편(예: F, M 우편), 추가(비정기 증편) 편, 전세편(예: C, H, L), 그리고 P(회항/페리), T(기술 시험), K(훈련), X(기술 기착) 같은 무수익·운영 유형으로 분류한다. 데이터 사전에서는 이 필드가 흔히 FlightServiceTypeIATA 또는 SERVICE_TYPE로 표기된다. 거의 모든 후속 스케줄·재고 처리가 해당 구간이 판매 가능한 여객 서비스인지, 아니면 화물·전세·페리 이동인지를 기준으로 분기하므로, 서비스 유형 코드는 스케줄 데이터 교환의 기초가 된다.'
standardBody: IATA
aliases:
  - Service Type
  - Flight Service Type
  - SSIM Service Type Code
  - Traffic Restriction Code (informal)
providerTerms:
  - provider: OAG / schedule data feeds
    term: Service Type
    context: 'Schedule data dictionaries expose the SSIM service type as a field (e.g., FlightServiceTypeIATA / SERVICE_TYPE) so consumers can filter passenger versus cargo/charter legs'
    context_ko: '스케줄 데이터 사전은 SSIM 서비스 유형을 필드(예: FlightServiceTypeIATA / SERVICE_TYPE)로 노출해, 이용자가 여객 구간과 화물/전세 구간을 구분·필터링할 수 있게 한다'
    relationship: same
relationships:
  - type: related
    targetTerm: Standard Schedules Message
  - type: related
    targetTerm: Flight Number
  - type: related
    targetTerm: Leg
  - type: related
    targetTerm: Operating Carrier
distinctions:
  - targetTerm: Flight Number
    explanation: 'A flight number identifies a specific commercial flight (carrier + numeric); the Service Type Code is a separate one-character attribute on the same leg that says what kind of service it is (passenger, cargo, charter, ferry, etc.).'
    explanation_ko: '편명(flight number)은 특정 상업 항공편(항공사 + 숫자)을 식별하지만, 서비스 유형 코드는 같은 구간에 붙는 별도의 1자리 속성으로 그 운항이 어떤 종류의 서비스(여객·화물·전세·페리 등)인지를 나타낸다.'
  - targetTerm: Aircraft Type Code
    explanation: 'The aircraft type code says which equipment operates the leg; the Service Type Code says the commercial nature of the operation, independent of the aircraft used.'
    explanation_ko: '항공기 기종 코드는 해당 구간을 어떤 장비가 운항하는지를 나타내고, 서비스 유형 코드는 사용 항공기와 무관하게 그 운항의 상업적 성격을 나타낸다.'
sources:
  - org: IATA
    name: Standard Schedules Information Manual (SSIM)
    version: 36th edition (2026)
    section: Appendix C — Service Types
    url: 'https://www.iata.org/en/publications/manuals/standard-schedules-information/'
    tier: association
    verifyQuote: Significant Changes and Amendments to the 36th edition (2026) of the Standard Schedules Information Manual (SSIM)
    verified: true
  - org: Avinor
    name: Airport Data Dictionary — FlightServiceTypeIATA
    version: ''
    section: ''
    url: 'https://xwiki.avinor.no/display/ADD/FlightServiceTypeIATA'
    tier: secondary
  - org: Wikipedia
    name: Standard Schedules Information Manual
    version: ''
    section: ''
    url: 'https://en.wikipedia.org/wiki/Standard_Schedules_Information_Manual'
    tier: encyclopedia
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M6 24l10-6v4h12l8-6 4 2-4 4 4 4-4 2-8-6H16v4z"/><rect x="30" y="30" width="12" height="12" rx="2"/><path d="M34 36h4"/></svg>
---

> A single-character IATA SSIM code (defined in Appendix C of the Standard Schedules Information Manual) that classifies each flight or flight leg by its type of service. Values distinguish, for example, scheduled passenger normal service (J), scheduled cargo/mail (F), passenger charter (C), cargo/mail charter (H), and non-revenue positioning/ferry flights (P).

The Service Type Code appears in core SSIM/SSM schedule records and in distribution data feeds, where it underpins how a leg is interpreted across reservations, availability, scheduling, and slot coordination. Appendix C groups the codes by category — scheduled passenger (e.g., J normal, S shuttle), scheduled cargo/mail (e.g., F, M mail), additional (non-scheduled extra-section) flights, charter (e.g., C, H, L), and non-revenue/operational types such as P (positioning/ferry), T (technical test), K (training), and X (technical stop). In data dictionaries the field is often labelled FlightServiceTypeIATA or SERVICE_TYPE. Because nearly every downstream schedule and inventory process keys off whether a leg is sellable passenger service versus cargo, charter, or a ferry movement, the Service Type Code is foundational to schedule data exchange.

**한국어 / Korean** — **서비스 유형 코드(SSIM Service Type)** — 항공편 또는 항공 구간(leg)을 서비스 유형별로 분류하는 IATA SSIM의 1자리 코드로, SSIM 부록 C(Appendix C)에 정의된다. 예를 들어 정기 여객 일반편(J), 정기 화물/우편(F), 여객 전세편(charter, C), 화물/우편 전세편(H), 무수익 회항/페리편(positioning/ferry, P) 등을 구분한다.

서비스 유형 코드는 핵심 SSIM/SSM 스케줄 레코드와 유통 데이터 피드에 나타나며, 예약·가용성·스케줄링·슬롯 조정 전반에서 해당 구간을 어떻게 해석할지 결정하는 기준이 된다. 부록 C는 코드를 정기 여객(예: J 일반, S 셔틀), 정기 화물/우편(예: F, M 우편), 추가(비정기 증편) 편, 전세편(예: C, H, L), 그리고 P(회항/페리), T(기술 시험), K(훈련), X(기술 기착) 같은 무수익·운영 유형으로 분류한다. 데이터 사전에서는 이 필드가 흔히 FlightServiceTypeIATA 또는 SERVICE_TYPE로 표기된다. 거의 모든 후속 스케줄·재고 처리가 해당 구간이 판매 가능한 여객 서비스인지, 아니면 화물·전세·페리 이동인지를 기준으로 분기하므로, 서비스 유형 코드는 스케줄 데이터 교환의 기초가 된다.

**Aliases:** `Service Type`, `Flight Service Type`, `SSIM Service Type Code`, `Traffic Restriction Code (informal)`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| OAG / schedule data feeds | `Service Type` | same | Schedule data dictionaries expose the SSIM service type as a field (e.g., FlightServiceTypeIATA / SERVICE_TYPE) so consumers can filter passenger versus cargo/charter legs |

# Related
- [Standard Schedules Message](/air/air-partner/standard-schedules-message.md) — related
- [Flight Number](/common/codes/flight-number.md) — related
- [Leg](/air/air-ops/leg.md) — related
- [Operating Carrier](/air/air-partner/operating-carrier.md) — related

# Distinctions
- **Service Type Code** vs [Flight Number](/common/codes/flight-number.md) — A flight number identifies a specific commercial flight (carrier + numeric); the Service Type Code is a separate one-character attribute on the same leg that says what kind of service it is (passenger, cargo, charter, ferry, etc.).
- **Service Type Code** vs [Aircraft Type Code](/common/codes/aircraft-type-code.md) — The aircraft type code says which equipment operates the leg; the Service Type Code says the commercial nature of the operation, independent of the aircraft used.

# Citations
[1] [IATA — Standard Schedules Information Manual (SSIM) — 36th edition (2026) — Appendix C — Service Types](https://www.iata.org/en/publications/manuals/standard-schedules-information/)
[2] [Avinor — Airport Data Dictionary — FlightServiceTypeIATA](https://xwiki.avinor.no/display/ADD/FlightServiceTypeIATA)
[3] [Wikipedia — Standard Schedules Information Manual](https://en.wikipedia.org/wiki/Standard_Schedules_Information_Manual)
