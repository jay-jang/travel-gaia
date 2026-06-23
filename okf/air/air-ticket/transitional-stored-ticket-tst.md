---
type: Document
title: Transitional Stored Ticket (TST)
description: 'A Transitional Stored Ticket (TST) is the pricing-and-ticketing record attached to a PNR that holds all fare, tax, and fare-calculation data for the priced flight segments, and is the data source from which an e-ticket is subsequently issued. A TST may be created automatically by the pricing engine (Automatic Stored Ticket) or built/updated by the agent (Manual Stored Ticket), and one PNR can hold multiple TSTs (e.g., per passenger or fare).'
tags:
  - air-ticket
  - active
timestamp: '2026-06-18T00:00:00Z'
id: transitional-stored-ticket-tst
vertical: air
category: air-ticket
conceptType: document
status: active
abbreviation: TST
term_ko: 임시 저장 발권 레코드 (TST)
definition_ko: 'TST(Transitional Stored Ticket)는 PNR에 연결되는 운임·발권 레코드로, 운임이 계산된 모든 항공 구간의 운임, 세금, 운임계산(fare calculation) 데이터를 보유하며, 이후 전자항공권(e-ticket)을 발행하는 데이터 원천이 된다. TST는 자동 운임계산에 의해 시스템이 생성하거나(Automatic Stored Ticket) 발권 담당자가 직접 생성·수정할 수 있으며(Manual Stored Ticket), 하나의 PNR이 (승객별 또는 운임별로) 여러 개의 TST를 가질 수 있다.'
longDef: 'The TST is a GDS/PSS construct (most prominently in Amadeus) that sits between pricing and document issuance — hence "transitional." It stores the fare amount, applicable taxes (e.g., YQ/YR and government taxes), the fare-calculation line, fare basis codes, validating carrier, form-of-payment indicators, and the Fare Calculation Pricing Indicator (FCPI) that records how it was priced. When the agent issues the ticket, the system reads the TST to create the e-ticket coupons in the validating carrier''s ticketing database. A TST is valid only for a defined period; issuing after expiry returns an error (TST EXPIRED) and requires repricing. Because the TST is editable before issuance, it is the point at which manual fare construction, negotiated/net fares, endorsements, and tour codes are reviewed and confirmed.'
longDef_ko: 'TST는 운임계산과 서류 발행 사이에 위치하는 GDS/PSS 구성요소로(특히 Amadeus에서 두드러짐), 그래서 ''전이적(transitional)''이라 불린다. 운임 금액, 적용 세금(예: YQ/YR 및 정부 세금), 운임계산 라인(fare calculation line), Fare Basis Code, validating carrier, 지불수단 표시, 그리고 운임계산 방식을 기록하는 FCPI(Fare Calculation Pricing Indicator)를 저장한다. 발권 담당자가 발권하면 시스템은 TST를 읽어 validating carrier의 발권 데이터베이스에 e-ticket 쿠폰을 생성한다. TST는 정해진 기간 동안만 유효하며, 만료 후 발권하면 오류(TST EXPIRED)가 발생해 재운임계산이 필요하다. TST는 발권 전 수정이 가능하므로, 수동 운임계산, negotiated/net 운임, endorsement, tour code 등을 검토·확정하는 지점이 된다.'
aliases:
  - TST
  - Transitional Stored Ticket
providerTerms:
  - provider: Amadeus
    term: Transitional Stored Ticket (TST)
    context: 'Amadeus uses TST as the named pricing record attached to the PNR, displayed/edited cryptically (e.g., TQT) and used to issue e-tickets; subtypes Automatic Stored Ticket (AST) and Manual Stored Ticket (MST).'
    context_ko: 'Amadeus는 TST를 PNR에 연결된 운임 레코드의 명칭으로 사용하며, 크립틱 명령(예: TQT)으로 표시·수정하고 e-ticket 발행에 사용한다. 하위 유형으로 AST(Automatic Stored Ticket)와 MST(Manual Stored Ticket)가 있다.'
    relationship: same
  - provider: Sabre
    term: Price Quote (PQ) Record
    context: 'Sabre stores the priced fare, tax, and fare-construction data for ticketing in a Price Quote (PQ) record attached to the PNR (up to 99 per PNR) — the functional equivalent of the Amadeus TST as the source for issuing the e-ticket.'
    context_ko: 'Sabre는 발권용 운임·세금·운임구성 데이터를 PNR에 첨부된 Price Quote(PQ) 레코드(PNR당 최대 99개)에 저장하며, 이는 전자항공권 발행 소스로서 Amadeus TST의 기능적 대응물이다.'
    relationship: same
  - provider: Travelport
    term: Filed Fare (Stored Fare)
    context: 'Travelport (Galileo/Apollo/Worldspan) holds the priced fare-and-tax data for ticketing as a Filed Fare (stored fare) on the PNR/booking file, from which tickets are issued.'
    context_ko: 'Travelport(Galileo/Apollo/Worldspan)는 발권용 운임·세금 데이터를 PNR/예약 파일의 Filed Fare(저장 운임)로 보관하며, 이로부터 항공권을 발행한다.'
    relationship: same
relationships:
  - type: broader
    targetTerm: PNR
  - type: related
    targetTerm: E-ticket
  - type: related
    targetTerm: Fare Construction
  - type: related
    targetTerm: Validating Carrier
  - type: related
    targetTerm: Tax (YQ/YR)
distinctions:
  - targetTerm: E-ticket
    explanation: 'The TST is the pre-issuance pricing record held in the PNR; the e-ticket is the accountable document created from the TST and stored in the validating carrier''s ticketing database. The TST can be edited and repriced; once an e-ticket is issued, changes require reissue/revalidation.'
    explanation_ko: 'TST는 PNR에 보관되는 발권 이전 단계의 운임 레코드이고, e-ticket은 TST로부터 생성되어 validating carrier의 발권 데이터베이스에 저장되는 회계 서류이다. TST는 수정·재운임계산이 가능하지만, e-ticket이 발행되면 변경에는 reissue/revalidation이 필요하다.'
  - targetTerm: PNR
    explanation: 'The PNR holds the itinerary, passenger and contact data; the TST is a separate record attached to that PNR that holds the priced fare/tax/fare-calculation data needed to ticket it.'
    explanation_ko: 'PNR은 여정, 승객 및 연락처 데이터를 보유하고, TST는 그 PNR에 연결된 별도의 레코드로서 발권에 필요한 운임/세금/운임계산 데이터를 보유한다.'
sources:
  - org: Amadeus
    name: Understanding Transitional Stored Tickets (TST) (Cryptic and Graphic)
    version: ''
    section: ''
    url: 'https://servicehub.amadeus.com/c/portal/view-solution/780102/understanding-transitional-stored-tickets-tst-cryptic-and-graphic-'
  - org: Amadeus
    name: How to display a TST and a TST history (Cryptic)
    version: ''
    section: ''
    url: 'https://servicehub.amadeus.com/c/portal/view-solution/820197/how-to-display-a-tst-and-a-tst-history-cryptic-'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="9" width="26" height="22" rx="3"/><path d="M7 16h26"/><path d="M12 22h10M12 26h7"/><path d="M29 24l5 5 8-8"/></svg>
---

> A Transitional Stored Ticket (TST) is the pricing-and-ticketing record attached to a PNR that holds all fare, tax, and fare-calculation data for the priced flight segments, and is the data source from which an e-ticket is subsequently issued. A TST may be created automatically by the pricing engine (Automatic Stored Ticket) or built/updated by the agent (Manual Stored Ticket), and one PNR can hold multiple TSTs (e.g., per passenger or fare).

The TST is a GDS/PSS construct (most prominently in Amadeus) that sits between pricing and document issuance — hence "transitional." It stores the fare amount, applicable taxes (e.g., YQ/YR and government taxes), the fare-calculation line, fare basis codes, validating carrier, form-of-payment indicators, and the Fare Calculation Pricing Indicator (FCPI) that records how it was priced. When the agent issues the ticket, the system reads the TST to create the e-ticket coupons in the validating carrier's ticketing database. A TST is valid only for a defined period; issuing after expiry returns an error (TST EXPIRED) and requires repricing. Because the TST is editable before issuance, it is the point at which manual fare construction, negotiated/net fares, endorsements, and tour codes are reviewed and confirmed.

**한국어 / Korean** — **임시 저장 발권 레코드 (TST)** — TST(Transitional Stored Ticket)는 PNR에 연결되는 운임·발권 레코드로, 운임이 계산된 모든 항공 구간의 운임, 세금, 운임계산(fare calculation) 데이터를 보유하며, 이후 전자항공권(e-ticket)을 발행하는 데이터 원천이 된다. TST는 자동 운임계산에 의해 시스템이 생성하거나(Automatic Stored Ticket) 발권 담당자가 직접 생성·수정할 수 있으며(Manual Stored Ticket), 하나의 PNR이 (승객별 또는 운임별로) 여러 개의 TST를 가질 수 있다.

TST는 운임계산과 서류 발행 사이에 위치하는 GDS/PSS 구성요소로(특히 Amadeus에서 두드러짐), 그래서 '전이적(transitional)'이라 불린다. 운임 금액, 적용 세금(예: YQ/YR 및 정부 세금), 운임계산 라인(fare calculation line), Fare Basis Code, validating carrier, 지불수단 표시, 그리고 운임계산 방식을 기록하는 FCPI(Fare Calculation Pricing Indicator)를 저장한다. 발권 담당자가 발권하면 시스템은 TST를 읽어 validating carrier의 발권 데이터베이스에 e-ticket 쿠폰을 생성한다. TST는 정해진 기간 동안만 유효하며, 만료 후 발권하면 오류(TST EXPIRED)가 발생해 재운임계산이 필요하다. TST는 발권 전 수정이 가능하므로, 수동 운임계산, negotiated/net 운임, endorsement, tour code 등을 검토·확정하는 지점이 된다.

**Aliases:** `TST`, `Transitional Stored Ticket`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Amadeus | `Transitional Stored Ticket (TST)` | same | Amadeus uses TST as the named pricing record attached to the PNR, displayed/edited cryptically (e.g., TQT) and used to issue e-tickets; subtypes Automatic Stored Ticket (AST) and Manual Stored Ticket (MST). |
| Sabre | `Price Quote (PQ) Record` | same | Sabre stores the priced fare, tax, and fare-construction data for ticketing in a Price Quote (PQ) record attached to the PNR (up to 99 per PNR) — the functional equivalent of the Amadeus TST as the source for issuing the e-ticket. |
| Travelport | `Filed Fare (Stored Fare)` | same | Travelport (Galileo/Apollo/Worldspan) holds the priced fare-and-tax data for ticketing as a Filed Fare (stored fare) on the PNR/booking file, from which tickets are issued. |

# Related
- [PNR](/air/air-ops/pnr.md) — broader
- [E-ticket](/air/air-ticket/e-ticket.md) — related
- [Fare Construction](/air/air-shop/fare-construction.md) — related
- [Validating Carrier](/air/air-ticket/validating-carrier.md) — related
- [Tax (YQ/YR)](/air/air-shop/tax-yq-yr.md) — related

# Distinctions
- **Transitional Stored Ticket (TST)** vs [E-ticket](/air/air-ticket/e-ticket.md) — The TST is the pre-issuance pricing record held in the PNR; the e-ticket is the accountable document created from the TST and stored in the validating carrier's ticketing database. The TST can be edited and repriced; once an e-ticket is issued, changes require reissue/revalidation.
- **Transitional Stored Ticket (TST)** vs [PNR](/air/air-ops/pnr.md) — The PNR holds the itinerary, passenger and contact data; the TST is a separate record attached to that PNR that holds the priced fare/tax/fare-calculation data needed to ticket it.

# Citations
[1] [Amadeus — Understanding Transitional Stored Tickets (TST) (Cryptic and Graphic)](https://servicehub.amadeus.com/c/portal/view-solution/780102/understanding-transitional-stored-tickets-tst-cryptic-and-graphic-)
[2] [Amadeus — How to display a TST and a TST history (Cryptic)](https://servicehub.amadeus.com/c/portal/view-solution/820197/how-to-display-a-tst-and-a-tst-history-cryptic-)
