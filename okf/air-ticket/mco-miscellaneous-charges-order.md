---
type: Document
title: MCO (Miscellaneous Charges Order)
description: 'A Miscellaneous Charges Order (MCO) is an accountable traffic document used to record the prepayment or collection of charges that are not for the carriage of a passenger on a specific flight coupon, such as residual value from an exchange, deposits, additional collections, or non-flight services. Historically issued on paper, the MCO has been largely superseded by the Electronic Miscellaneous Document (EMD), which performs the same functions electronically.'
tags:
  - air-ticket
  - deprecated
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: mco-miscellaneous-charges-order
category: air-ticket
conceptType: document
status: deprecated
abbreviation: MCO
term_ko: 'MCO (Miscellaneous Charges Order, 기타 비용 청구서)'
definition_ko: 'MCO(Miscellaneous Charges Order)는 특정 항공편 쿠폰의 운송이 아닌 비용(교환 시 발생한 잔여 가치, 보증금, 추가 징수액, 비항공 서비스 등)을 선결제하거나 징수하기 위해 발행하는 정산 가능 여행 서류이다. 과거에는 종이로 발행되었으나, 동일한 기능을 전자적으로 수행하는 EMD(Electronic Miscellaneous Document)로 대부분 대체되었다.'
longDef: 'The MCO (and the related Multi-Purpose Document, MPD) was a standard accountable document in the BSP/ARC settlement environment used to collect value not tied to a specific flight coupon: residual amounts left over when a non-refundable ticket of higher value was exchanged for a lower-value ticket, additional fare collections, deposits, taxes, fees, excess baggage, and similar miscellaneous services. With the industry mandate to move to electronic documents, the MCO and MPD were replaced by the Electronic Miscellaneous Document (EMD), which exists in two forms (EMD-S standalone and EMD-A associated to a flight coupon). The term MCO still appears in legacy documentation, residual-value workflows, and some carrier policies as a synonym for the standalone EMD function.'
longDef_ko: 'MCO(및 관련 문서인 MPD, Multi-Purpose Document)는 BSP/ARC 정산 환경에서 특정 항공편 쿠폰과 연결되지 않은 가치를 징수하는 데 사용된 표준 정산 가능 서류였다. 고액의 비환불 항공권을 더 낮은 가치의 항공권으로 교환할 때 남는 잔여 금액(residual value), 추가 운임 징수, 보증금, 세금·요금, 초과 수하물, 기타 부대 서비스 등을 담았다. 전자 서류 전환 의무화에 따라 MCO와 MPD는 EMD로 대체되었으며, EMD는 EMD-S(독립형)와 EMD-A(항공권 쿠폰 연결형) 두 가지 형태로 존재한다. ''MCO''라는 용어는 여전히 레거시 문서, 잔여 가치 처리 흐름, 일부 항공사 정책에서 독립형 EMD 기능을 가리키는 동의어로 남아 있다.'
standardBody: IATA
aliases:
  - Miscellaneous Charges Order
  - Miscellaneous Charge Order
  - MPD (Multi-Purpose Document)
providerTerms:
  - provider: Travelport
    term: EMD
    context: 'Travelport documents EMDs as the electronic replacement for MCO, MPD, and other miscellaneous paper documents.'
    context_ko: 'Travelport는 EMD를 MCO, MPD 및 기타 종이 기타 서류를 대체하는 전자 문서로 설명한다.'
    relationship: broader
relationships:
  - type: replaces
    targetTerm: EMD
  - type: related
    targetTerm: Residual Value
  - type: related
    targetTerm: Reissue
  - type: related
    targetTerm: BSP
  - type: related
    targetTerm: ARC
distinctions:
  - targetTerm: EMD
    explanation: 'The EMD is the electronic successor to the MCO; the MCO was the paper document, while the EMD is the IATA-standard electronic equivalent (EMD-S / EMD-A) that has largely replaced it.'
    explanation_ko: 'EMD는 MCO의 전자식 후속 문서이다. MCO는 종이 서류였고, EMD는 이를 대부분 대체한 IATA 표준 전자 문서(EMD-S / EMD-A)이다.'
  - targetTerm: E-ticket
    explanation: 'An e-ticket records the carriage of a passenger on flight coupons; an MCO/EMD records non-flight value such as fees, deposits, or residual amounts.'
    explanation_ko: 'E-ticket은 항공편 쿠폰상의 여객 운송을 기록하지만, MCO/EMD는 수수료, 보증금, 잔여 금액 등 비항공 가치를 기록한다.'
sources:
  - org: IATA
    name: Ticketing Handbook
    version: ''
    section: ''
    url: ''
  - org: Travelport
    name: EMDs (Electronic Miscellaneous Documents) Support
    version: ''
    section: ''
    url: 'https://support.travelport.com/webhelp/Smartpoint1G1V/Content/Air/EMD/EMD.htm'
  - org: ARC
    name: Electronic Miscellaneous Document (EMD)
    version: ''
    section: ''
    url: 'https://www2.arccorp.com/support-training/electronic-miscellaneous-document/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="7" width="30" height="34" rx="3"/><line x1="15" y1="15" x2="33" y2="15"/><line x1="15" y1="21" x2="33" y2="21"/><line x1="15" y1="27" x2="26" y2="27"/><path d="M22 33h12"/><path d="M29 30l3 3-3 3"/></svg>
---

> A Miscellaneous Charges Order (MCO) is an accountable traffic document used to record the prepayment or collection of charges that are not for the carriage of a passenger on a specific flight coupon, such as residual value from an exchange, deposits, additional collections, or non-flight services. Historically issued on paper, the MCO has been largely superseded by the Electronic Miscellaneous Document (EMD), which performs the same functions electronically.

The MCO (and the related Multi-Purpose Document, MPD) was a standard accountable document in the BSP/ARC settlement environment used to collect value not tied to a specific flight coupon: residual amounts left over when a non-refundable ticket of higher value was exchanged for a lower-value ticket, additional fare collections, deposits, taxes, fees, excess baggage, and similar miscellaneous services. With the industry mandate to move to electronic documents, the MCO and MPD were replaced by the Electronic Miscellaneous Document (EMD), which exists in two forms (EMD-S standalone and EMD-A associated to a flight coupon). The term MCO still appears in legacy documentation, residual-value workflows, and some carrier policies as a synonym for the standalone EMD function.

**한국어 / Korean** — **MCO (Miscellaneous Charges Order, 기타 비용 청구서)** — MCO(Miscellaneous Charges Order)는 특정 항공편 쿠폰의 운송이 아닌 비용(교환 시 발생한 잔여 가치, 보증금, 추가 징수액, 비항공 서비스 등)을 선결제하거나 징수하기 위해 발행하는 정산 가능 여행 서류이다. 과거에는 종이로 발행되었으나, 동일한 기능을 전자적으로 수행하는 EMD(Electronic Miscellaneous Document)로 대부분 대체되었다.

MCO(및 관련 문서인 MPD, Multi-Purpose Document)는 BSP/ARC 정산 환경에서 특정 항공편 쿠폰과 연결되지 않은 가치를 징수하는 데 사용된 표준 정산 가능 서류였다. 고액의 비환불 항공권을 더 낮은 가치의 항공권으로 교환할 때 남는 잔여 금액(residual value), 추가 운임 징수, 보증금, 세금·요금, 초과 수하물, 기타 부대 서비스 등을 담았다. 전자 서류 전환 의무화에 따라 MCO와 MPD는 EMD로 대체되었으며, EMD는 EMD-S(독립형)와 EMD-A(항공권 쿠폰 연결형) 두 가지 형태로 존재한다. 'MCO'라는 용어는 여전히 레거시 문서, 잔여 가치 처리 흐름, 일부 항공사 정책에서 독립형 EMD 기능을 가리키는 동의어로 남아 있다.

**Aliases:** `Miscellaneous Charges Order`, `Miscellaneous Charge Order`, `MPD (Multi-Purpose Document)`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Travelport | `EMD` | broader | Travelport documents EMDs as the electronic replacement for MCO, MPD, and other miscellaneous paper documents. |

# Related
- [EMD](/air-ticket/emd.md) — replaces
- [Residual Value](/air-ticket/residual-value.md) — related
- [Reissue](/air-ticket/reissue.md) — related
- [BSP](/pay/bsp.md) — related
- [ARC](/pay/arc.md) — related

# Distinctions
- **MCO (Miscellaneous Charges Order)** vs [EMD](/air-ticket/emd.md) — The EMD is the electronic successor to the MCO; the MCO was the paper document, while the EMD is the IATA-standard electronic equivalent (EMD-S / EMD-A) that has largely replaced it.
- **MCO (Miscellaneous Charges Order)** vs [E-ticket](/air-ticket/e-ticket.md) — An e-ticket records the carriage of a passenger on flight coupons; an MCO/EMD records non-flight value such as fees, deposits, or residual amounts.

# Citations
[1] IATA — Ticketing Handbook
[2] [Travelport — EMDs (Electronic Miscellaneous Documents) Support](https://support.travelport.com/webhelp/Smartpoint1G1V/Content/Air/EMD/EMD.htm)
[3] [ARC — Electronic Miscellaneous Document (EMD)](https://www2.arccorp.com/support-training/electronic-miscellaneous-document/)
