---
type: Business Term
title: Through-Ticketing
description: 'A ticket or set of tickets representing a single transport contract for successive services operated by one or more railway undertakings or transport modes, enabling a passenger to travel from origin to destination under unified purchase, fare, and passenger-rights coverage. EU Regulation 2021/782 (Article 3) provides the binding legal definition within the EU/EEA: "a ticket or tickets representing a single transport contract for successive railway services operated by one or more railway undertakings."'
tags:
  - rail
  - active
  - UIC
timestamp: '2026-07-03T00:00:00Z'
id: through-ticketing
vertical: ground
category: rail
conceptType: business-term
status: active
term_ko: 통합 발권(Through-Ticketing)
definition_ko: '하나 이상의 철도 운영사 또는 교통수단이 운영하는 연속 서비스를 단일 운송 계약 하에 묶어, 출발지에서 목적지까지 하나의 구매·운임·여객 권리 적용 체계로 여행할 수 있게 하는 승차권 또는 승차권 조합. EU 규정 2021/782 제3조는 이를 "하나 이상의 철도 운영사가 운행하는 연속 철도 서비스에 대한 단일 운송 계약을 나타내는 승차권 또는 승차권들"로 정의한다.'
longDef: 'The legal significance of through-ticketing is primarily in passenger rights: under EU Regulation 2021/782, when a passenger holds a through-ticket and misses a connection due to a delay, the carrier issuing the ticket is obliged to re-route or refund the passenger — even if the delay occurred on a service operated by a different railway undertaking. This protection does not apply when the passenger holds separate tickets (i.e., split ticketing) because each ticket represents an independent contract. In the UK, train operators are required as a condition of their operating licence to participate in arrangements for the sale and acceptance of through tickets across the National Rail network; the Rail Delivery Group (RDG) administers this via the Ticketing and Settlement Agreement (TSA). The OSDM (Open Sales and Distribution Model) standard, developed under UIC auspices, is the technical rail-industry architecture designed to enable cross-operator through-ticketing at scale across European networks, replacing bilateral agreements with a standardised offer-and-order API. The European Commission''s proposed Single Digital Booking and Ticketing Regulation (SDBTR, May 2026) aims to extend through-ticketing obligations to multimodal journeys (rail + bus, rail + ferry) under a "one journey, one ticket" framework. In practice, true through-ticketing — where connection protection applies — is more common within a single operator (e.g., National Rail UK, DB Germany, SNCF France) than across multiple competing operators, where commercial agreements and technical interoperability have historically been barriers.'
longDef_ko: '통합 발권의 법적 중요성은 주로 여객 권리에 있다. EU 규정 2021/782에 따르면, 승객이 통합 발권을 소지하고 지연으로 인해 환승을 놓칠 경우, 다른 철도 운영사의 서비스에서 지연이 발생했더라도 발권 운영사는 승객의 재경로 배정 또는 환불 의무를 진다. 별도 승차권을 소지한 경우(분할 발권)에는 각 승차권이 독립 계약을 구성하므로 이 보호가 적용되지 않는다. 영국에서는 열차 운영사가 운영 면허 조건에 따라 National Rail 전체 네트워크에서 통합 발권의 판매·수용 협정에 참여해야 하며, Rail Delivery Group(RDG)이 발권·정산 협정(TSA)을 통해 이를 관리한다. UIC 주관 하에 개발된 OSDM(개방형 판매·유통 모델)은 양자 협정을 표준화된 오퍼·주문 API로 대체해 유럽 네트워크 전반에 걸쳐 운영사 간 통합 발권을 가능케 하는 기술 표준이다. 유럽위원회의 단일 디지털 예약·발권 규정(SDBTR, 2026년 5월 제안)은 "한 여정, 한 승차권" 체계 하에 복합운송(철도+버스, 철도+페리) 여정에도 통합 발권 의무를 확대하는 것을 목표로 한다.'
aliases:
  - Through Ticket
  - Through-Fare Ticket
  - Connecting Ticket
  - Combined Ticket
relationships:
  - type: contrasts
    targetTerm: Split Ticketing
  - type: related
    targetTerm: OSDM
  - type: related
    targetTerm: Multimodal Transport
  - type: related
    targetTerm: Rail Passenger Rights Regulation (EU) 2021/782
  - type: related
    targetTerm: TAP TSI
distinctions:
  - targetTerm: Split Ticketing
    explanation: 'A through-ticket is a single contract providing connection protection and unified passenger rights across operators; split ticketing involves separate contracts per segment, with no carrier liability if a connection is missed due to delay on a prior segment.'
    explanation_ko: '통합 발권은 운영사 전반에 걸쳐 환승 보호와 통합 여객 권리를 제공하는 단일 계약이고, 분할 발권은 구간별 별도 계약으로서 이전 구간의 지연으로 환승을 놓쳐도 운송사 책임이 없다.'
  - targetTerm: OSDM
    explanation: 'OSDM is the UIC-backed API standard that enables railway undertakings to exchange offer and booking data across operator boundaries; through-ticketing is the passenger-facing commercial product and contractual outcome that OSDM is designed to make technically feasible at scale.'
    explanation_ko: 'OSDM은 철도 운영사들이 운영사 경계를 넘어 오퍼·예약 데이터를 교환할 수 있게 하는 UIC 후원 API 표준이고, 통합 발권은 OSDM이 대규모로 기술적으로 실현하고자 하는 승객 대면 상업 상품이자 계약 결과물이다.'
sources:
  - name: 'Regulation (EU) 2021/782 on rail passengers'' rights and obligations — Article 3'
    org: European Union
    version: 'OJ L 172, 17 May 2021'
    section: 'Article 3 — Definitions'
    url: 'https://eur-lex.europa.eu/eli/reg/2021/782/oj/eng'
    tier: regulation
  - name: 'ORR — Licence Obligations: Through Ticketing'
    org: Office of Rail and Road (ORR)
    version: ''
    section: ''
    url: 'https://www.orr.gov.uk/guidance-compliance/rail/operator-licences-exemptions/licence-obligations'
    tier: standard-body
  - name: 'European Commission — Single Digital Booking and Ticketing Regulation (SDBTR) Overview'
    org: European Commission
    version: '2026'
    section: ''
    url: 'https://transport.ec.europa.eu/news-events/news/one-journey-one-ticket-full-rights-commission-simplifies-europe-wide-travel-booking-and-train-travel-2026-05-13_en'
    tier: standard-body
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="16" width="40" height="16" rx="2"/><circle cx="14" cy="24" r="2"/><circle cx="24" cy="24" r="2"/><circle cx="34" cy="24" r="2"/><line x1="4" y1="24" x2="12" y2="24"/><line x1="16" y1="24" x2="22" y2="24"/><line x1="26" y1="24" x2="32" y2="24"/><line x1="36" y1="24" x2="44" y2="24"/><line x1="8" y1="20" x2="8" y2="28"/></svg>
---

> A ticket or set of tickets representing a single transport contract for successive services operated by one or more railway undertakings or transport modes, enabling a passenger to travel from origin to destination under unified purchase, fare, and passenger-rights coverage. EU Regulation 2021/782 (Article 3) provides the binding legal definition within the EU/EEA: "a ticket or tickets representing a single transport contract for successive railway services operated by one or more railway undertakings."

The legal significance of through-ticketing is primarily in passenger rights: under EU Regulation 2021/782, when a passenger holds a through-ticket and misses a connection due to delay, the carrier issuing the ticket must re-route or refund the passenger — even if the delay occurred on a different operator's service. This protection does not apply to split tickets, since each represents an independent contract. In the UK, train operators are required by their operating licence to participate in through-ticketing across the National Rail network (administered by the Rail Delivery Group via the Ticketing and Settlement Agreement). The OSDM standard (UIC) is the technical architecture to enable cross-operator through-ticketing at scale. The European Commission's proposed Single Digital Booking and Ticketing Regulation (SDBTR, May 2026) aims to extend through-ticketing obligations to multimodal journeys under a "one journey, one ticket" framework.

**한국어 / Korean** — **통합 발권(Through-Ticketing)** — 하나 이상의 철도 운영사 또는 교통수단이 운영하는 연속 서비스를 단일 운송 계약 하에 묶어, 출발지에서 목적지까지 하나의 구매·운임·여객 권리 적용 체계로 여행할 수 있게 하는 승차권 또는 승차권 조합. EU 규정 2021/782 제3조는 이를 EU/EEA 내 구속력 있는 법적 정의로 규정한다.

통합 발권의 법적 중요성은 주로 여객 권리에 있다. 승객이 통합 발권을 소지하고 다른 운영사 서비스의 지연으로 환승을 놓친 경우에도 발권 운영사가 재경로 또는 환불 의무를 진다. 반면 분할 발권은 구간별 별도 계약이므로 이러한 보호가 적용되지 않는다.

**Aliases:** `Through Ticket`, `Through-Fare Ticket`, `Connecting Ticket`, `Combined Ticket`

# Related
- [Split Ticketing](/ground/rail/split-ticketing.md) — contrasts
- [OSDM](/ground/rail/osdm.md) — related
- [Multimodal Transport](/ground/rail/multimodal-transport.md) — related
- [Rail Passenger Rights Regulation (EU) 2021/782](/ground/rail/rail-passenger-rights-regulation-eu-2021-782.md) — related
- [TAP TSI](/ground/rail/tap-tsi.md) — related

# Distinctions
- **Through-Ticketing** vs [Split Ticketing](/ground/rail/split-ticketing.md) — A through-ticket is a single contract providing connection protection and unified passenger rights across operators; split ticketing involves separate contracts per segment, with no carrier liability if a connection is missed due to delay on a prior segment.
- **Through-Ticketing** vs [OSDM](/ground/rail/osdm.md) — OSDM is the UIC-backed API standard that enables railway undertakings to exchange offer and booking data across operator boundaries; through-ticketing is the passenger-facing commercial product and contractual outcome that OSDM is designed to make technically feasible at scale.

# Citations
[1] [European Union — Regulation (EU) 2021/782 on rail passengers' rights and obligations — Article 3](https://eur-lex.europa.eu/eli/reg/2021/782/oj/eng)
[2] [Office of Rail and Road (ORR) — ORR — Licence Obligations: Through Ticketing](https://www.orr.gov.uk/guidance-compliance/rail/operator-licences-exemptions/licence-obligations)
[3] [European Commission — European Commission — Single Digital Booking and Ticketing Regulation (SDBTR) Overview](https://transport.ec.europa.eu/news-events/news/one-journey-one-ticket-full-rights-commission-simplifies-europe-wide-travel-booking-and-train-travel-2026-05-13_en)
