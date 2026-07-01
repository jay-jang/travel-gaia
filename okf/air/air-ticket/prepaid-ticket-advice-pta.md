---
type: Document
title: Prepaid Ticket Advice (PTA)
description: 'An IATA-governed accountable traffic document (or electronic equivalent) by which an airline or travel agent in one location (the issuing city) instructs a carrier ticket office or sales agent in a different location (the collecting city) to issue a ticket and/or EMD for a named passenger, the cost of which has already been fully collected at the issuing end. PTAs are used when the payer is physically or commercially separated from the traveller.'
tags:
  - air-ticket
  - active
  - IATA
timestamp: '2026-07-01T00:00:00Z'
id: prepaid-ticket-advice-pta
vertical: air
category: air-ticket
conceptType: document
status: active
abbreviation: PTA
term_ko: 선불 항공권 통지서(PTA)
definition_ko: 'PTA(Prepaid Ticket Advice, 선불 항공권 통지서)는 한 장소(발행 도시)의 항공사 또는 여행사가 다른 장소(수령 도시)의 운송인 발권소 또는 판매 에이전트에게 특정 승객의 항공권 및/또는 EMD를 발행하도록 지시하는 IATA 관할의 정산 가능 여행 서류(또는 전자적 동등물)로, 발행 측에서 이미 비용을 전액 수취한 상태이다. 지불인이 여행자와 물리적 또는 상업적으로 분리되어 있을 때 사용한다.'
longDef: 'A PTA is initiated when a person or company (typically a corporate travel manager, an immigrant worker sending a ticket to a family member abroad, or an airline employee) wishes to purchase a ticket that will be picked up and used by a traveller in a different country or city. The PTA message — transmitted via the airline''s internal system or the GDS — authorises the carrier''s ticket office in the collecting city to issue the ticket against the pre-collected funds. Under IATA Resolution 722 (and related passenger conference resolutions), the issuing agent records the PTA as an accountable document in BSP. The traveller presents identification at the collecting office and receives the ticket or electronic record. With the near-universal adoption of e-tickets, physical PTA documents have largely disappeared; the workflow now occurs electronically — the PNR is built, the fare is quoted, payment collected at origin, and the ticket issued electronically for collection or delivery at destination. The PTA concept remains relevant for controlled-ticketing flows in corporate travel, airline staff travel, and charitable travel programs where payment and travel are intentionally separated.'
longDef_ko: 'PTA는 다른 국가나 도시의 여행자를 위해 항공권을 구매하려는 사람 또는 기업(보통 법인 여행 관리자, 해외 가족에게 항공권을 보내는 이민 노동자, 또는 항공사 직원)이 이를 이용한다. PTA 메시지는 항공사 내부 시스템 또는 GDS를 통해 전송되어, 수령 도시의 발권소가 미리 수취된 자금을 근거로 항공권을 발행하도록 승인한다. IATA Resolution 722(및 관련 여객 컨퍼런스 결의)에 따라 발행 에이전트는 PTA를 BSP의 정산 가능 서류로 기록한다. 여행자는 수령 사무소에서 신분증을 제시하고 항공권 또는 전자 기록을 받는다. e-ticket이 사실상 보편화됨에 따라 물리적 PTA 서류는 대부분 사라졌으며, 현재 워크플로는 전자적으로 이루어진다. 즉, 출발지에서 PNR을 생성하고 요금을 산출하며 결제를 수취한 뒤, 목적지에서 수령 또는 전달을 위해 전자적으로 항공권을 발행한다. PTA 개념은 법인 여행, 항공사 직원 여행, 자선 여행 프로그램 등 결제와 여행이 의도적으로 분리되는 통제된 발권 흐름에서 여전히 유효하다.'
standardBody: IATA
aliases:
  - Prepaid Ticket Advice
  - PTA
  - Prepaid Ticket
providerTerms:
  - provider: Amadeus
    term: PTA (Prepaid Ticket Advice)
    context: 'In Amadeus, a PTA is handled as a special ticketing element within the PNR; the GDS records the issuing city, collecting city, and confirmation number and flags the booking for ticket collection at the remote office.'
    context_ko: 'Amadeus에서 PTA는 PNR 내의 특수 발권 요소로 처리되며, GDS는 발행 도시, 수령 도시, 확인 번호를 기록하고 원격 발권소에서 항공권 수령을 위해 예약에 플래그를 표시한다.'
    relationship: same
  - provider: Sabre
    term: PTA / Prepaid Ticket
    context: 'Sabre documents and processes PTAs through its ticketing workflow, linking the payment collected at origin to an authorisation for ticket issuance at the destination or remote city office.'
    context_ko: 'Sabre는 발권 워크플로를 통해 PTA를 문서화·처리하며, 출발지에서 수취된 결제를 목적지 또는 원격 도시 발권소에서의 항공권 발행 승인과 연결한다.'
    relationship: same
relationships:
  - type: related
    targetTerm: E-ticket
  - type: related
    targetTerm: PNR
  - type: related
    targetTerm: Record Locator
  - type: related
    targetTerm: BSP
  - type: related
    targetTerm: EMD
  - type: related
    targetTerm: Validating Carrier
  - type: contrasts
    targetTerm: MCO (Miscellaneous Charges Order)
distinctions:
  - targetTerm: MCO (Miscellaneous Charges Order)
    explanation: 'An MCO (now largely replaced by EMD-S) records miscellaneous charges not tied to a specific flight coupon — residual values, deposits, fees; a PTA is specifically an instruction to issue a ticket for carriage, funded from a pre-collected payment at a different location. A PTA instructs ticket issuance; an MCO records a non-ticket charge.'
    explanation_ko: 'MCO(현재는 EMD-S로 대부분 대체됨)는 특정 항공편 쿠폰과 연결되지 않은 기타 요금(잔여 가치, 보증금, 수수료 등)을 기록하는 반면, PTA는 다른 장소에서 미리 수취된 결제로 자금을 조달하여 운송 항공권을 발행하도록 지시하는 특수 목적 서류이다. PTA는 발권 지시이고, MCO는 비항공권 요금을 기록한다.'
  - targetTerm: EMD
    explanation: 'An EMD (Electronic Miscellaneous Document) records non-flight value such as ancillary services, fees, or residual amounts; a PTA authorises the issuance of a ticket (e-ticket or flight coupon) for actual air carriage. The PTA workflow often results in an e-ticket, not an EMD.'
    explanation_ko: 'EMD(전자 기타 서류)는 부가 서비스, 수수료, 잔여 금액 등 비항공 가치를 기록하고, PTA는 실제 항공 운송을 위한 항공권(e-ticket 또는 비행 쿠폰) 발행을 승인한다. PTA 워크플로는 EMD가 아니라 e-ticket을 결과로 낳는 경우가 많다.'
  - targetTerm: E-ticket
    explanation: 'The e-ticket is the electronic document of carriage (the ticket itself); a PTA is the upstream authorisation mechanism that enables an e-ticket to be issued at a location remote from where the payment was collected. A PTA is not a ticket — it is the instruction that causes a ticket to be issued.'
    explanation_ko: 'e-ticket은 운송 전자 서류(항공권 자체)이고, PTA는 결제가 수취된 곳과 다른 장소에서 e-ticket이 발행될 수 있도록 하는 선행 승인 메커니즘이다. PTA는 항공권이 아니라 항공권 발행을 일으키는 지시다.'
sources:
  - name: 'Passenger Services Conference Resolutions Manual (PSCRM) — Resolution 722 et seq.'
    org: IATA (International Air Transport Association)
    version: '46th Edition (2026)'
    section: 'Resolution 722'
    url: 'https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/'
    tier: association
  - name: 'Passenger Agency Conference Resolutions Manual (PACRM) — PTA Provisions'
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/passenger-agency-conference-resolutions-manual/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="14" width="16" height="20" rx="2"/><rect x="28" y="14" width="16" height="20" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="8" y1="27" x2="14" y2="27"/><line x1="32" y1="21" x2="40" y2="21"/><line x1="32" y1="27" x2="38" y2="27"/><path d="M20 24 h8" marker-end="url(#a)"/><line x1="21" y1="20" x2="27" y2="24"/><line x1="21" y1="28" x2="27" y2="24"/></svg>
---

> An IATA-governed accountable traffic document (or electronic equivalent) by which an airline or travel agent in one location (the issuing city) instructs a carrier ticket office or sales agent in a different location (the collecting city) to issue a ticket and/or EMD for a named passenger, the cost of which has already been fully collected at the issuing end. PTAs are used when the payer is physically or commercially separated from the traveller.

A PTA is initiated when a person or company (typically a corporate travel manager, an immigrant worker sending a ticket to a family member abroad, or an airline employee) wishes to purchase a ticket that will be picked up and used by a traveller in a different country or city. The PTA message — transmitted via the airline's internal system or the GDS — authorises the carrier's ticket office in the collecting city to issue the ticket against the pre-collected funds. Under IATA Resolution 722 (and related passenger conference resolutions), the issuing agent records the PTA as an accountable document in BSP. The traveller presents identification at the collecting office and receives the ticket or electronic record. With the near-universal adoption of e-tickets, physical PTA documents have largely disappeared; the workflow now occurs electronically — the PNR is built, the fare is quoted, payment collected at origin, and the ticket issued electronically for collection or delivery at destination. The PTA concept remains relevant for controlled-ticketing flows in corporate travel, airline staff travel, and charitable travel programs where payment and travel are intentionally separated.

**한국어 / Korean** — **선불 항공권 통지서(PTA)** — PTA(Prepaid Ticket Advice, 선불 항공권 통지서)는 한 장소(발행 도시)의 항공사 또는 여행사가 다른 장소(수령 도시)의 운송인 발권소 또는 판매 에이전트에게 특정 승객의 항공권 및/또는 EMD를 발행하도록 지시하는 IATA 관할의 정산 가능 여행 서류(또는 전자적 동등물)로, 발행 측에서 이미 비용을 전액 수취한 상태이다. 지불인이 여행자와 물리적 또는 상업적으로 분리되어 있을 때 사용한다.

PTA는 다른 국가나 도시의 여행자를 위해 항공권을 구매하려는 사람 또는 기업(보통 법인 여행 관리자, 해외 가족에게 항공권을 보내는 이민 노동자, 또는 항공사 직원)이 이를 이용한다. PTA 메시지는 항공사 내부 시스템 또는 GDS를 통해 전송되어, 수령 도시의 발권소가 미리 수취된 자금을 근거로 항공권을 발행하도록 승인한다. IATA Resolution 722(및 관련 여객 컨퍼런스 결의)에 따라 발행 에이전트는 PTA를 BSP의 정산 가능 서류로 기록한다. 여행자는 수령 사무소에서 신분증을 제시하고 항공권 또는 전자 기록을 받는다. e-ticket이 사실상 보편화됨에 따라 물리적 PTA 서류는 대부분 사라졌으며, 현재 워크플로는 전자적으로 이루어진다. PTA 개념은 법인 여행, 항공사 직원 여행, 자선 여행 프로그램 등 결제와 여행이 의도적으로 분리되는 통제된 발권 흐름에서 여전히 유효하다.

**Aliases:** `Prepaid Ticket Advice`, `PTA`, `Prepaid Ticket`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Amadeus | `PTA (Prepaid Ticket Advice)` | same | In Amadeus, a PTA is handled as a special ticketing element within the PNR; the GDS records the issuing city, collecting city, and confirmation number and flags the booking for ticket collection at the remote office. |
| Sabre | `PTA / Prepaid Ticket` | same | Sabre documents and processes PTAs through its ticketing workflow, linking the payment collected at origin to an authorisation for ticket issuance at the destination or remote city office. |

# Related
- [E-ticket](/air/air-ticket/e-ticket.md) — related
- [PNR](/air/air-ops/pnr.md) — related
- [Record Locator](/air/air-ops/record-locator.md) — related
- [BSP](/common/pay/bsp.md) — related
- [EMD](/air/air-ticket/emd.md) — related
- [Validating Carrier](/air/air-ticket/validating-carrier.md) — related
- [MCO (Miscellaneous Charges Order)](/air/air-ticket/mco-miscellaneous-charges-order.md) — contrasts

# Distinctions
- **Prepaid Ticket Advice (PTA)** vs [MCO (Miscellaneous Charges Order)](/air/air-ticket/mco-miscellaneous-charges-order.md) — An MCO (now largely replaced by EMD-S) records miscellaneous charges not tied to a specific flight coupon — residual values, deposits, fees; a PTA is specifically an instruction to issue a ticket for carriage, funded from a pre-collected payment at a different location. A PTA instructs ticket issuance; an MCO records a non-ticket charge.
- **Prepaid Ticket Advice (PTA)** vs [EMD](/air/air-ticket/emd.md) — An EMD (Electronic Miscellaneous Document) records non-flight value such as ancillary services, fees, or residual amounts; a PTA authorises the issuance of a ticket (e-ticket or flight coupon) for actual air carriage. The PTA workflow often results in an e-ticket, not an EMD.
- **Prepaid Ticket Advice (PTA)** vs [E-ticket](/air/air-ticket/e-ticket.md) — The e-ticket is the electronic document of carriage (the ticket itself); a PTA is the upstream authorisation mechanism that enables an e-ticket to be issued at a location remote from where the payment was collected. A PTA is not a ticket — it is the instruction that causes a ticket to be issued.

# Citations
[1] [IATA (International Air Transport Association) — Passenger Services Conference Resolutions Manual (PSCRM) — Resolution 722 et seq.](https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/)
[2] [IATA — Passenger Agency Conference Resolutions Manual (PACRM) — PTA Provisions](https://www.iata.org/en/publications/manuals/passenger-agency-conference-resolutions-manual/)
