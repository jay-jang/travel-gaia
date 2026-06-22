---
type: Document
title: EMD
description: 'An IATA-standard electronic document used to issue, account for, and settle ancillary services, fees, and other non-flight charges (e.g., baggage, seats, change/service fees, deposits). It replaced legacy paper documents such as the MCO (Miscellaneous Charges Order) and Excess Baggage Ticket.'
tags:
  - air-ticket
  - active
  - IATA
timestamp: '2026-06-15T00:00:00Z'
id: emd
vertical: air
category: air-ticket
conceptType: document
status: active
abbreviation: EMD
term_ko: 전자 기타 서류 (EMD)
definition_ko: '부가 서비스, 수수료 및 기타 비항공 요금(예: 수하물, 좌석, 변경/서비스 수수료, 예치금)을 발행, 회계 처리 및 정산하는 데 사용되는 IATA 표준 전자 서류이다. MCO(Miscellaneous Charges Order, 기타 요금 청구서)와 초과 수하물 항공권 같은 기존 종이 서류를 대체했다.'
longDef: 'There are two principal types: EMD-A (Associated), which is linked to one or more flight coupons of an e-ticket and typically issued for services tied to a specific flight (e.g., a paid seat or extra bag); and EMD-S (Standalone), which is not tied to a flight coupon and is used for residual value, deposits, or services not bound to a segment. Like e-tickets, EMDs carry a 13-digit document number with the airline''s accounting code and have coupon statuses. EMD adoption is a prerequisite for fully automated ancillary service distribution and settlement through BSP/ARC.'
longDef_ko: '두 가지 주요 유형이 있다. EMD-A(Associated)는 전자항공권의 하나 이상의 Flight Coupon에 연결되며 일반적으로 특정 항공편에 묶인 서비스(예: 유료 좌석 또는 추가 수하물)에 대해 발행된다. EMD-S(Standalone)는 Flight Coupon에 연결되지 않으며 잔여 가치, 예치금 또는 특정 구간에 묶이지 않은 서비스에 사용된다. 전자항공권과 마찬가지로 EMD는 항공사 회계 코드를 포함한 13자리 서류 번호를 가지며 쿠폰 상태를 보유한다. EMD 도입은 BSP/ARC를 통한 부가 서비스 유통 및 정산의 완전 자동화를 위한 전제 조건이다.'
standardBody: IATA
aliases:
  - Electronic Miscellaneous Document
  - EMD-A
  - EMD-S
relationships:
  - type: contrasts
    targetTerm: E-ticket
  - type: related
    targetTerm: Ancillary Service
  - type: related
    targetTerm: BSP
  - type: related
    targetTerm: Refund
distinctions:
  - targetTerm: E-ticket
    explanation: E-ticket documents flight carriage; EMD documents ancillary/non-flight charges and fees.
    explanation_ko: '전자항공권은 항공 운송을 증빙하고, EMD는 부가/비항공 요금 및 수수료를 증빙한다.'
  - targetTerm: Ancillary Service
    explanation: 'Ancillary Service is the product sold (e.g., a paid bag); the EMD is the document that fulfills and settles it.'
    explanation_ko: 'Ancillary Service는 판매되는 상품(예: 유료 수하물)이며, EMD는 이를 이행하고 정산하는 서류이다.'
  - targetTerm: Future Cruise Credit (FCC)
    explanation: 'An EMD is an IATA accountable document settled through BSP/ARC that holds value for airline ancillaries or residual ticket value and is interline-recognized; an FCC is a single-brand cruise promotional credit with no industry settlement, redeemable only against that line''s future sailings and not convertible to cash.'
    explanation_ko: 'EMD는 BSP/ARC를 통해 정산되는 IATA 회계 문서로 항공 부가서비스나 잔여 티켓 가치를 담고 인터라인으로 인정되는 반면, FCC는 산업 정산이 없는 단일 브랜드 크루즈 프로모션 크레딧으로 해당 선사의 향후 출항에만 사용 가능하고 현금 전환은 불가하다.'
  - targetTerm: MCO (Miscellaneous Charges Order)
    explanation: 'The EMD is the electronic successor to the MCO; the MCO was the paper document, while the EMD is the IATA-standard electronic equivalent (EMD-S / EMD-A) that has largely replaced it.'
    explanation_ko: 'EMD는 MCO의 전자식 후속 문서이다. MCO는 종이 서류였고, EMD는 이를 대부분 대체한 IATA 표준 전자 문서(EMD-S / EMD-A)이다.'
  - targetTerm: Optional Services
    explanation: Optional Services is the filed data that prices an ancillary at shop time; the EMD is the document issued afterward to fulfill and account for the purchased service.
    explanation_ko: 'Optional Services는 shop 시점에 부가 서비스 가격을 산출하는 파일링 데이터이고, EMD는 그 후 구매된 서비스를 이행·정산하기 위해 발행되는 문서이다.'
  - targetTerm: Reason for Issuance Code / Sub Code (RFIC / RFISC)
    explanation: The EMD is the accountable document; the RFIC/RFISC is the code carried on the EMD that says which service it pays for and how it should be classified and settled.
    explanation_ko: 'EMD는 정산 가능한 서류이고, RFIC/RFISC는 그 EMD에 실려 어떤 서비스에 대한 것인지와 분류·정산 방식을 알려주는 코드이다.'
sources:
  - name: Electronic Miscellaneous Document (EMD)
    org: IATA
    version: ''
    section: ''
    url: 'https://portal.iata.org/faq/s/article/What-is-an-Electronic-Miscellaneous-Document-EMD-1415811054748'
  - name: Passenger Services Conference Resolutions Manual (PSCRM)
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="10" width="32" height="28" rx="3"/><path d="M8 18h32"/><path d="M14 25h8M14 30h12"/><circle cx="31" cy="29" r="4"/><path d="M31 27v4M29.5 28.5h3"/></svg>
---

> An IATA-standard electronic document used to issue, account for, and settle ancillary services, fees, and other non-flight charges (e.g., baggage, seats, change/service fees, deposits). It replaced legacy paper documents such as the MCO (Miscellaneous Charges Order) and Excess Baggage Ticket.

There are two principal types: EMD-A (Associated), which is linked to one or more flight coupons of an e-ticket and typically issued for services tied to a specific flight (e.g., a paid seat or extra bag); and EMD-S (Standalone), which is not tied to a flight coupon and is used for residual value, deposits, or services not bound to a segment. Like e-tickets, EMDs carry a 13-digit document number with the airline's accounting code and have coupon statuses. EMD adoption is a prerequisite for fully automated ancillary service distribution and settlement through BSP/ARC.

**한국어 / Korean** — **전자 기타 서류 (EMD)** — 부가 서비스, 수수료 및 기타 비항공 요금(예: 수하물, 좌석, 변경/서비스 수수료, 예치금)을 발행, 회계 처리 및 정산하는 데 사용되는 IATA 표준 전자 서류이다. MCO(Miscellaneous Charges Order, 기타 요금 청구서)와 초과 수하물 항공권 같은 기존 종이 서류를 대체했다.

두 가지 주요 유형이 있다. EMD-A(Associated)는 전자항공권의 하나 이상의 Flight Coupon에 연결되며 일반적으로 특정 항공편에 묶인 서비스(예: 유료 좌석 또는 추가 수하물)에 대해 발행된다. EMD-S(Standalone)는 Flight Coupon에 연결되지 않으며 잔여 가치, 예치금 또는 특정 구간에 묶이지 않은 서비스에 사용된다. 전자항공권과 마찬가지로 EMD는 항공사 회계 코드를 포함한 13자리 서류 번호를 가지며 쿠폰 상태를 보유한다. EMD 도입은 BSP/ARC를 통한 부가 서비스 유통 및 정산의 완전 자동화를 위한 전제 조건이다.

**Aliases:** `Electronic Miscellaneous Document`, `EMD-A`, `EMD-S`

# Related
- [E-ticket](/air/air-ticket/e-ticket.md) — contrasts
- [Ancillary Service](/air/air-ticket/ancillary-service.md) — related
- [BSP](/common/pay/bsp.md) — related
- [Refund](/air/air-ticket/refund.md) — related

# Distinctions
- **EMD** vs [E-ticket](/air/air-ticket/e-ticket.md) — E-ticket documents flight carriage; EMD documents ancillary/non-flight charges and fees.
- **EMD** vs [Ancillary Service](/air/air-ticket/ancillary-service.md) — Ancillary Service is the product sold (e.g., a paid bag); the EMD is the document that fulfills and settles it.
- **EMD** vs [Future Cruise Credit (FCC)](/cruise/cruise/future-cruise-credit-fcc.md) — An EMD is an IATA accountable document settled through BSP/ARC that holds value for airline ancillaries or residual ticket value and is interline-recognized; an FCC is a single-brand cruise promotional credit with no industry settlement, redeemable only against that line's future sailings and not convertible to cash.
- **EMD** vs [MCO (Miscellaneous Charges Order)](/air/air-ticket/mco-miscellaneous-charges-order.md) — The EMD is the electronic successor to the MCO; the MCO was the paper document, while the EMD is the IATA-standard electronic equivalent (EMD-S / EMD-A) that has largely replaced it.
- **EMD** vs [Optional Services](/air/air-shop/optional-services.md) — Optional Services is the filed data that prices an ancillary at shop time; the EMD is the document issued afterward to fulfill and account for the purchased service.
- **EMD** vs [Reason for Issuance Code / Sub Code (RFIC / RFISC)](/air/air-ticket/rfic-rfisc.md) — The EMD is the accountable document; the RFIC/RFISC is the code carried on the EMD that says which service it pays for and how it should be classified and settled.

# Citations
[1] [IATA — Electronic Miscellaneous Document (EMD)](https://portal.iata.org/faq/s/article/What-is-an-Electronic-Miscellaneous-Document-EMD-1415811054748)
[2] [IATA — Passenger Services Conference Resolutions Manual (PSCRM)](https://www.iata.org/en/publications/manuals/passenger-services-conference-resolution-manual/)
