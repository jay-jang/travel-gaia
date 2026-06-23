---
type: Code
title: Tour Code
description: A Tour Code is a ticketing-field identifier that links a ticket to a contracted fare agreement — typically a net/negotiated fare or a bulk (BT) or inclusive-tour (IT) fare — so that the sale can be settled and audited against that agreement. It is mandatory on such fares and is printed in the ticket's tour code field rather than (or alongside) the actual fare amount.
tags:
  - air-ticket
  - active
timestamp: '2026-06-18T00:00:00Z'
id: tour-code
vertical: air
category: air-ticket
conceptType: code
status: active
term_ko: 투어 코드 (Tour Code)
definition_ko: 'Tour Code는 항공권을 계약된 운임 합의(주로 net/negotiated 운임 또는 bulk(BT)·inclusive-tour(IT) 운임)에 연결하는 발권 필드 식별자로, 해당 판매가 그 합의에 대해 정산·감사될 수 있도록 한다. 이러한 운임에서는 필수이며, 실제 운임 금액 대신(또는 함께) 항공권의 tour code 필드에 인쇄된다.'
longDef: 'Issued by the airline, the tour code represents a commercial agreement between the agency and the carrier. In GDS practice it is entered via the tour code element (Amadeus FT). For BT (Bulk Tour) and IT (Inclusive Tour) fares the displayed fare is masked: "BT" appears in the fare box, and the currency code with "IT" appears in the total box, instead of the actual confidential net amount, while the tour code carries the link to the contract. Tour codes can be filed in ATPCO Category 27 (Tours) or within Category 35 (Negotiated Fares); where both exist on a fare component, the Category 35 value takes precedence for ticketing. The tour code is essential for net remittance/BSP reporting and revenue audit, allowing the carrier to reconcile the issued ticket against the negotiated agreement.'
longDef_ko: '항공사가 부여하는 tour code는 대리점과 항공사 간의 상업적 합의를 나타낸다. GDS 실무에서는 tour code element(Amadeus의 FT)로 입력한다. BT(Bulk Tour) 및 IT(Inclusive Tour) 운임에서는 표시 운임이 가려진다. 운임 칸(fare box)에는 "BT"가, 합계 칸(total box)에는 실제 기밀 net 금액 대신 통화코드와 "IT"가 표기되며, tour code가 계약과의 연결을 담는다. Tour code는 ATPCO Category 27(Tours) 또는 Category 35(Negotiated Fares)에 신고될 수 있으며, 동일 fare component에 둘 다 존재하면 발권에는 Category 35 값이 우선한다. tour code는 net remittance/BSP 보고와 매출 감사(revenue audit)에 필수적이며, 항공사가 발행된 항공권을 협상된 합의와 대사할 수 있게 한다.'
aliases:
  - Tour Code
  - FT element
  - BT/IT code
providerTerms:
  - provider: Amadeus
    term: Tour code (FT) element
    context: Amadeus captures the tour code in the FT element of the PNR; codes beginning with BT or IT are limited to 14 characters and drive the masked BT/IT fare display on the ticket.
    context_ko: 'Amadeus는 tour code를 PNR의 FT element에 담는다. BT 또는 IT로 시작하는 코드는 14자로 제한되며, 항공권의 가려진 BT/IT 운임 표시를 제어한다.'
    relationship: narrower
  - provider: Travelport
    term: Tour Code (TC) / BT / IT modifier
    context: 'In Travelport (Galileo/Apollo/Worldspan), the Tour Code is added to the filed fare as a TC modifier, with BT (bulk) or IT (inclusive tour) indicators printed in the ticket''s fare/tour-code area for net and bulk fares.'
    context_ko: 'Travelport(Galileo/Apollo/Worldspan)에서 Tour Code는 filed fare에 TC 수정자로 추가되며, 네트/벌크 운임의 경우 BT(벌크) 또는 IT(포괄여행) 표시가 항공권 운임/투어코드 영역에 인쇄된다.'
    relationship: same
relationships:
  - type: related
    targetTerm: Negotiated Fare
  - type: related
    targetTerm: Net Rate
  - type: related
    targetTerm: ATPCO
  - type: related
    targetTerm: Remittance
  - type: related
    targetTerm: BSP
distinctions:
  - targetTerm: Negotiated Fare
    explanation: A negotiated fare is the discounted/contracted fare itself; the tour code is the identifier written into the ticket that ties that specific issuance back to the negotiated agreement for settlement and audit.
    explanation_ko: 'Negotiated Fare는 할인된/계약된 운임 자체이고, tour code는 그 특정 발권을 정산·감사를 위해 협상된 합의에 연결시키기 위해 항공권에 기재되는 식별자이다.'
  - targetTerm: Net Rate
    explanation: Net Rate is the confidential cost the agency pays the carrier; the tour code (and the masked BT/IT display) is the ticketing mechanism that references the net agreement without printing the actual net amount on the customer's ticket.
    explanation_ko: 'Net Rate는 대리점이 항공사에 지불하는 기밀 원가이고, tour code(및 가려진 BT/IT 표시)는 고객 항공권에 실제 net 금액을 인쇄하지 않으면서 net 합의를 참조하는 발권 메커니즘이다.'
sources:
  - org: Travelport
    name: 'Universal API: Net Remittance Ticketing Modifiers (Tour Code, BT, IT)'
    version: ''
    section: ''
    url: 'https://support.travelport.com/webhelp/uapi/Content/Air/Air_Ticketing/Net_Remittance_Ticketing_Modifiers.htm'
    tier: vendor-doc
  - org: Travelport
    name: 'Assisted Ticketing: Voluntary Changes for IT/BT Fares'
    version: ''
    section: ''
    url: 'https://support.travelport.com/webhelp/smartpoint1g1v/content/Air/Ticketing/TicketAssistant/TicketAssistant_VolChange-ItBt-Refund.htm'
    tier: vendor-doc
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="14" width="28" height="20" rx="3"/><path d="M19 14v-3a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v3"/><path d="M16 22h6M16 27h10"/><circle cx="31" cy="24" r="3"/></svg>
---

> A Tour Code is a ticketing-field identifier that links a ticket to a contracted fare agreement — typically a net/negotiated fare or a bulk (BT) or inclusive-tour (IT) fare — so that the sale can be settled and audited against that agreement. It is mandatory on such fares and is printed in the ticket's tour code field rather than (or alongside) the actual fare amount.

Issued by the airline, the tour code represents a commercial agreement between the agency and the carrier. In GDS practice it is entered via the tour code element (Amadeus FT). For BT (Bulk Tour) and IT (Inclusive Tour) fares the displayed fare is masked: "BT" appears in the fare box, and the currency code with "IT" appears in the total box, instead of the actual confidential net amount, while the tour code carries the link to the contract. Tour codes can be filed in ATPCO Category 27 (Tours) or within Category 35 (Negotiated Fares); where both exist on a fare component, the Category 35 value takes precedence for ticketing. The tour code is essential for net remittance/BSP reporting and revenue audit, allowing the carrier to reconcile the issued ticket against the negotiated agreement.

**한국어 / Korean** — **투어 코드 (Tour Code)** — Tour Code는 항공권을 계약된 운임 합의(주로 net/negotiated 운임 또는 bulk(BT)·inclusive-tour(IT) 운임)에 연결하는 발권 필드 식별자로, 해당 판매가 그 합의에 대해 정산·감사될 수 있도록 한다. 이러한 운임에서는 필수이며, 실제 운임 금액 대신(또는 함께) 항공권의 tour code 필드에 인쇄된다.

항공사가 부여하는 tour code는 대리점과 항공사 간의 상업적 합의를 나타낸다. GDS 실무에서는 tour code element(Amadeus의 FT)로 입력한다. BT(Bulk Tour) 및 IT(Inclusive Tour) 운임에서는 표시 운임이 가려진다. 운임 칸(fare box)에는 "BT"가, 합계 칸(total box)에는 실제 기밀 net 금액 대신 통화코드와 "IT"가 표기되며, tour code가 계약과의 연결을 담는다. Tour code는 ATPCO Category 27(Tours) 또는 Category 35(Negotiated Fares)에 신고될 수 있으며, 동일 fare component에 둘 다 존재하면 발권에는 Category 35 값이 우선한다. tour code는 net remittance/BSP 보고와 매출 감사(revenue audit)에 필수적이며, 항공사가 발행된 항공권을 협상된 합의와 대사할 수 있게 한다.

**Aliases:** `Tour Code`, `FT element`, `BT/IT code`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Amadeus | `Tour code (FT) element` | narrower | Amadeus captures the tour code in the FT element of the PNR; codes beginning with BT or IT are limited to 14 characters and drive the masked BT/IT fare display on the ticket. |
| Travelport | `Tour Code (TC) / BT / IT modifier` | same | In Travelport (Galileo/Apollo/Worldspan), the Tour Code is added to the filed fare as a TC modifier, with BT (bulk) or IT (inclusive tour) indicators printed in the ticket's fare/tour-code area for net and bulk fares. |

# Related
- [Negotiated Fare](/air/air-shop/negotiated-fare.md) — related
- [Net Rate](/lodging/hotel-dist/net-rate.md) — related
- [ATPCO](/air/air-shop/atpco.md) — related
- [Remittance](/common/pay/remittance.md) — related
- [BSP](/common/pay/bsp.md) — related

# Distinctions
- **Tour Code** vs [Negotiated Fare](/air/air-shop/negotiated-fare.md) — A negotiated fare is the discounted/contracted fare itself; the tour code is the identifier written into the ticket that ties that specific issuance back to the negotiated agreement for settlement and audit.
- **Tour Code** vs [Net Rate](/lodging/hotel-dist/net-rate.md) — Net Rate is the confidential cost the agency pays the carrier; the tour code (and the masked BT/IT display) is the ticketing mechanism that references the net agreement without printing the actual net amount on the customer's ticket.

# Citations
[1] [Travelport — Universal API: Net Remittance Ticketing Modifiers (Tour Code, BT, IT)](https://support.travelport.com/webhelp/uapi/Content/Air/Air_Ticketing/Net_Remittance_Ticketing_Modifiers.htm)
[2] [Travelport — Assisted Ticketing: Voluntary Changes for IT/BT Fares](https://support.travelport.com/webhelp/smartpoint1g1v/content/Air/Ticketing/TicketAssistant/TicketAssistant_VolChange-ItBt-Refund.htm)
