---
type: Code
title: Standard Carrier Alpha Code
description: 'A unique two-to-four-letter code assigned by the National Motor Freight Traffic Association (NMFTA) to identify a transportation company. The SCAC is the recognized carrier identifier in ANSI ASC X12 and UN/EDIFACT electronic data interchange and appears on transport documents such as bills of lading, freight bills, and customs entries across motor, rail, and water carriers.'
tags:
  - codes
  - active
  - NMFTA
timestamp: '2026-06-18T00:00:00Z'
id: standard-carrier-alpha-code
vertical: common
category: codes
conceptType: code
status: active
abbreviation: SCAC
term_ko: 'Standard Carrier Alpha Code(표준 운송사 알파 코드, SCAC)'
definition_ko: '운송 회사를 식별하기 위해 미국 NMFTA(National Motor Freight Traffic Association)가 부여하는 2~4자리의 고유 영문 코드. SCAC는 ANSI ASC X12 및 UN/EDIFACT 전자문서교환(EDI)에서 공인된 운송사 식별자이며, 도로·철도·해상 운송 전반에서 선하증권(bill of lading)·운임명세서·세관 신고 등 운송 문서에 표기된다.'
longDef: 'Developed by NMFTA in the 1960s to enable computerization in transportation, the SCAC is mandated by U.S. Customs and Border Protection for systems such as the Automated Manifest System (AMS) and Automated Commercial Environment (ACE), making it central to multimodal and cross-border freight. Certain final letters are reserved by mode: codes ending in ''U'' denote freight containers, ''X'' denotes privately owned railroad cars, and ''Z'' denotes truck chassis and trailers in intermodal service. Codes are issued and renewed by NMFTA; because it spans road, rail, and ocean carriers under a single identification scheme, the SCAC is the multimodal counterpart to airline-specific carrier codes like the IATA airline designator.'
longDef_ko: '운송업 전산화를 위해 1960년대에 NMFTA가 개발한 SCAC는, 미국 세관국경보호청(CBP)이 AMS(Automated Manifest System)·ACE(Automated Commercial Environment) 같은 시스템에서 의무화하고 있어 복합운송 및 국경 간 화물에서 핵심적이다. 특정 끝 글자는 운송 수단별로 예약되어 있는데, ''U''로 끝나면 화물 컨테이너, ''X''로 끝나면 사유 철도차량, ''Z''로 끝나면 복합운송용 트럭 섀시·트레일러를 뜻한다. 코드는 NMFTA가 발급·갱신한다. 도로·철도·해상 운송사를 하나의 식별 체계 아래 아우르기 때문에, SCAC는 IATA 항공사 지정 코드 같은 항공 전용 운송사 코드에 대응하는 복합운송 측 식별자라 할 수 있다.'
standardBody: NMFTA
aliases:
  - SCAC Code
  - Standard Carrier Alpha Code (SCAC)
relationships:
  - type: related
    targetTerm: EDIFACT
  - type: related
    targetTerm: Multimodal Transport
  - type: related
    targetTerm: Airline Designator
distinctions:
  - targetTerm: Airline Designator
    explanation: 'An IATA/ICAO airline designator identifies an air carrier for passenger and cargo aviation; the SCAC identifies a surface/ocean carrier (motor, rail, water) for freight EDI and customs. They name carriers in different transport modes and are issued by different bodies (IATA/ICAO vs. NMFTA).'
    explanation_ko: 'IATA/ICAO 항공사 지정 코드는 여객·화물 항공의 항공 운송사를 식별하지만, SCAC는 화물 EDI·세관용으로 지상/해상 운송사(도로·철도·해상)를 식별한다. 서로 다른 운송 수단의 운송사를 지칭하며 발급 기관도 다르다(IATA/ICAO 대 NMFTA).'
  - targetTerm: Air Waybill Number
    explanation: An Air Waybill Number identifies a single air cargo shipment; the SCAC identifies the carrier company itself and may appear on many shipping documents regardless of mode.
    explanation_ko: 'Air Waybill Number는 단일 항공 화물 선적을 식별하지만, SCAC는 운송 회사 자체를 식별하며 운송 수단과 무관하게 여러 선적 문서에 나타날 수 있다.'
sources:
  - org: NMFTA
    name: Standard Carrier Alpha Code (SCAC)
    version: ''
    section: ''
    url: 'https://nmfta.org/scac/'
  - org: NMFTA
    name: Standard Carrier Alpha Code (SCAC) History
    version: ''
    section: ''
    url: 'https://nmfta.org/scac/history/'
  - org: Wikipedia
    name: Standard Carrier Alpha Code
    version: ''
    section: ''
    url: 'https://en.wikipedia.org/wiki/Standard_Carrier_Alpha_Code'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 18h20v14H4z"/><path d="M24 22h8l6 6v4H24z"/><circle cx="12" cy="34" r="3"/><circle cx="32" cy="34" r="3"/><path d="M8 14h12M10 10h8"/></svg>
---

> A unique two-to-four-letter code assigned by the National Motor Freight Traffic Association (NMFTA) to identify a transportation company. The SCAC is the recognized carrier identifier in ANSI ASC X12 and UN/EDIFACT electronic data interchange and appears on transport documents such as bills of lading, freight bills, and customs entries across motor, rail, and water carriers.

Developed by NMFTA in the 1960s to enable computerization in transportation, the SCAC is mandated by U.S. Customs and Border Protection for systems such as the Automated Manifest System (AMS) and Automated Commercial Environment (ACE), making it central to multimodal and cross-border freight. Certain final letters are reserved by mode: codes ending in 'U' denote freight containers, 'X' denotes privately owned railroad cars, and 'Z' denotes truck chassis and trailers in intermodal service. Codes are issued and renewed by NMFTA; because it spans road, rail, and ocean carriers under a single identification scheme, the SCAC is the multimodal counterpart to airline-specific carrier codes like the IATA airline designator.

**한국어 / Korean** — **Standard Carrier Alpha Code(표준 운송사 알파 코드, SCAC)** — 운송 회사를 식별하기 위해 미국 NMFTA(National Motor Freight Traffic Association)가 부여하는 2~4자리의 고유 영문 코드. SCAC는 ANSI ASC X12 및 UN/EDIFACT 전자문서교환(EDI)에서 공인된 운송사 식별자이며, 도로·철도·해상 운송 전반에서 선하증권(bill of lading)·운임명세서·세관 신고 등 운송 문서에 표기된다.

운송업 전산화를 위해 1960년대에 NMFTA가 개발한 SCAC는, 미국 세관국경보호청(CBP)이 AMS(Automated Manifest System)·ACE(Automated Commercial Environment) 같은 시스템에서 의무화하고 있어 복합운송 및 국경 간 화물에서 핵심적이다. 특정 끝 글자는 운송 수단별로 예약되어 있는데, 'U'로 끝나면 화물 컨테이너, 'X'로 끝나면 사유 철도차량, 'Z'로 끝나면 복합운송용 트럭 섀시·트레일러를 뜻한다. 코드는 NMFTA가 발급·갱신한다. 도로·철도·해상 운송사를 하나의 식별 체계 아래 아우르기 때문에, SCAC는 IATA 항공사 지정 코드 같은 항공 전용 운송사 코드에 대응하는 복합운송 측 식별자라 할 수 있다.

**Aliases:** `SCAC Code`, `Standard Carrier Alpha Code (SCAC)`

# Related
- [EDIFACT](/common/standards/edifact.md) — related
- [Multimodal Transport](/ground/rail/multimodal-transport.md) — related
- [Airline Designator](/common/codes/airline-designator.md) — related

# Distinctions
- **Standard Carrier Alpha Code** vs [Airline Designator](/common/codes/airline-designator.md) — An IATA/ICAO airline designator identifies an air carrier for passenger and cargo aviation; the SCAC identifies a surface/ocean carrier (motor, rail, water) for freight EDI and customs. They name carriers in different transport modes and are issued by different bodies (IATA/ICAO vs. NMFTA).
- **Standard Carrier Alpha Code** vs [Air Waybill Number](/common/codes/air-waybill-number.md) — An Air Waybill Number identifies a single air cargo shipment; the SCAC identifies the carrier company itself and may appear on many shipping documents regardless of mode.

# Citations
[1] [NMFTA — Standard Carrier Alpha Code (SCAC)](https://nmfta.org/scac/)
[2] [NMFTA — Standard Carrier Alpha Code (SCAC) History](https://nmfta.org/scac/history/)
[3] [Wikipedia — Standard Carrier Alpha Code](https://en.wikipedia.org/wiki/Standard_Carrier_Alpha_Code)
