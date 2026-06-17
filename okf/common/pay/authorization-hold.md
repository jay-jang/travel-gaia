---
type: Process
title: Authorization Hold
description: 'An authorization hold (pre-authorization) is the step in card processing where an issuer approves and reserves a portion of a cardholder''s available funds before the merchant captures the actual charge, splitting payment into authorization, capture and settlement. In travel it is widely used by hotels and car-rental companies to secure room rates, deposits and incidentals, with capture and settlement occurring only when the final amount is known.'
tags:
  - pay
  - active
timestamp: '2026-06-17T00:00:00Z'
id: authorization-hold
vertical: common
category: pay
conceptType: process
status: active
term_ko: 승인 보류(Authorization Hold)
definition_ko: '승인 보류(authorization hold, 사전승인)는 카드 처리에서 가맹점이 실제 청구를 확정(capture)하기 전에 발급사가 카드 소지자의 가용 자금 일부를 승인·예약하는 단계로, 결제를 승인(authorization)·확정(capture)·정산(settlement)으로 나눈다. 여행 분야에서는 호텔과 렌터카 업체가 객실 요금, 보증금, 부대 비용(incidentals)을 확보하기 위해 널리 사용하며, 최종 금액이 확정될 때에만 확정·정산이 이루어진다.'
longDef: 'The authorize/capture/settle lifecycle lets travel merchants reserve funds at check-in or pickup and adjust to the final amount at check-out or return. Hotels typically hold the estimated room rate, taxes and fees plus an incidental buffer for minibar, parking or damage; car-rental firms add holds for fuel, late return or excess mileage. Card-scheme rules govern hold amounts, authorization adjustments and how long an unused hold may stand before automatic release (often several days, varying by network, card type and issuer). The merchant completes the transaction with a prior-authorization capture; the funds then move at settlement. Because the held amount can exceed the eventual charge, holds materially affect a traveler''s available credit even though no money has moved.'
longDef_ko: '승인/확정/정산 생애주기는 여행 가맹점이 체크인이나 픽업 시 자금을 예약하고 체크아웃이나 반납 시 최종 금액으로 조정할 수 있게 한다. 호텔은 보통 예상 객실 요금·세금·수수료에 미니바·주차·손상에 대비한 부대 비용 완충액을 더해 보류하고, 렌터카 업체는 연료·연체 반납·초과 주행에 대한 보류를 추가한다. 카드 스킴 규칙은 보류 금액, 승인 조정(authorization adjustment), 사용되지 않은 보류가 자동 해제 전까지 유지될 수 있는 기간(흔히 수일이며 네트워크·카드 유형·발급사에 따라 다름)을 규율한다. 가맹점은 사전승인 확정(prior-authorization capture)으로 거래를 완료하며, 자금은 정산 시점에 이동한다. 보류 금액이 최종 청구액을 초과할 수 있으므로, 돈이 실제로 이동하지 않았더라도 보류는 여행객의 가용 신용에 실질적인 영향을 준다.'
aliases:
  - pre-authorization
  - preauthorization
  - auth hold
  - card hold
relationships:
  - type: related
    targetTerm: Settlement Cycle
  - type: related
    targetTerm: Acquirer
  - type: related
    targetTerm: Guarantee Policy
  - type: related
    targetTerm: No-Show
  - type: related
    targetTerm: Merchant of Record
distinctions:
  - targetTerm: Settlement Cycle
    explanation: An authorization hold reserves funds before any charge is captured; the settlement cycle is the later timetable on which captured transactions are cleared and funds actually move.
    explanation_ko: '승인 보류는 어떤 청구도 확정되기 전에 자금을 예약하는 것이고, 정산 주기는 확정된 거래가 청산되고 자금이 실제로 이동하는 이후의 시간표다.'
  - targetTerm: Guarantee Policy
    explanation: A guarantee policy is the hotel's contractual rule on holding a booking and charging for no-shows; an authorization hold is the payment-rail mechanism often used to enforce or secure that guarantee.
    explanation_ko: '보증 정책(Guarantee Policy)은 예약 보장과 노쇼 청구에 관한 호텔의 계약 규칙이고, 승인 보류는 그 보증을 집행하거나 확보하는 데 흔히 사용되는 결제망 메커니즘이다.'
sources:
  - org: Adyen
    name: Pre-authorisation and authorisation adjustment
    version: ''
    section: ''
    url: 'https://docs.adyen.com/point-of-sale/pre-authorisation'
  - org: Chargeback Gurus
    name: Credit Card Authorization Hold - How and When to Use
    version: ''
    section: ''
    url: 'https://www.chargebackgurus.com/blog/credit-card-authorization-holds'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="14" width="28" height="18" rx="3"/><line x1="6" y1="20" x2="34" y2="20"/><rect x="30" y="26" width="12" height="9" rx="1.5"/><path d="M33 26v-2a3 3 0 0 1 6 0v2"/></svg>
---

> An authorization hold (pre-authorization) is the step in card processing where an issuer approves and reserves a portion of a cardholder's available funds before the merchant captures the actual charge, splitting payment into authorization, capture and settlement. In travel it is widely used by hotels and car-rental companies to secure room rates, deposits and incidentals, with capture and settlement occurring only when the final amount is known.

The authorize/capture/settle lifecycle lets travel merchants reserve funds at check-in or pickup and adjust to the final amount at check-out or return. Hotels typically hold the estimated room rate, taxes and fees plus an incidental buffer for minibar, parking or damage; car-rental firms add holds for fuel, late return or excess mileage. Card-scheme rules govern hold amounts, authorization adjustments and how long an unused hold may stand before automatic release (often several days, varying by network, card type and issuer). The merchant completes the transaction with a prior-authorization capture; the funds then move at settlement. Because the held amount can exceed the eventual charge, holds materially affect a traveler's available credit even though no money has moved.

**한국어 / Korean** — **승인 보류(Authorization Hold)** — 승인 보류(authorization hold, 사전승인)는 카드 처리에서 가맹점이 실제 청구를 확정(capture)하기 전에 발급사가 카드 소지자의 가용 자금 일부를 승인·예약하는 단계로, 결제를 승인(authorization)·확정(capture)·정산(settlement)으로 나눈다. 여행 분야에서는 호텔과 렌터카 업체가 객실 요금, 보증금, 부대 비용(incidentals)을 확보하기 위해 널리 사용하며, 최종 금액이 확정될 때에만 확정·정산이 이루어진다.

승인/확정/정산 생애주기는 여행 가맹점이 체크인이나 픽업 시 자금을 예약하고 체크아웃이나 반납 시 최종 금액으로 조정할 수 있게 한다. 호텔은 보통 예상 객실 요금·세금·수수료에 미니바·주차·손상에 대비한 부대 비용 완충액을 더해 보류하고, 렌터카 업체는 연료·연체 반납·초과 주행에 대한 보류를 추가한다. 카드 스킴 규칙은 보류 금액, 승인 조정(authorization adjustment), 사용되지 않은 보류가 자동 해제 전까지 유지될 수 있는 기간(흔히 수일이며 네트워크·카드 유형·발급사에 따라 다름)을 규율한다. 가맹점은 사전승인 확정(prior-authorization capture)으로 거래를 완료하며, 자금은 정산 시점에 이동한다. 보류 금액이 최종 청구액을 초과할 수 있으므로, 돈이 실제로 이동하지 않았더라도 보류는 여행객의 가용 신용에 실질적인 영향을 준다.

**Aliases:** `pre-authorization`, `preauthorization`, `auth hold`, `card hold`

# Related
- [Settlement Cycle](/common/pay/settlement-cycle.md) — related
- [Acquirer](/common/pay/acquirer.md) — related
- [Guarantee Policy](/lodging/hotel-dist/guarantee-policy.md) — related
- [No-Show](/lodging/hotel-dist/no-show.md) — related
- [Merchant of Record](/common/pay/merchant-of-record.md) — related

# Distinctions
- **Authorization Hold** vs [Settlement Cycle](/common/pay/settlement-cycle.md) — An authorization hold reserves funds before any charge is captured; the settlement cycle is the later timetable on which captured transactions are cleared and funds actually move.
- **Authorization Hold** vs [Guarantee Policy](/lodging/hotel-dist/guarantee-policy.md) — A guarantee policy is the hotel's contractual rule on holding a booking and charging for no-shows; an authorization hold is the payment-rail mechanism often used to enforce or secure that guarantee.

# Citations
[1] [Adyen — Pre-authorisation and authorisation adjustment](https://docs.adyen.com/point-of-sale/pre-authorisation)
[2] [Chargeback Gurus — Credit Card Authorization Hold - How and When to Use](https://www.chargebackgurus.com/blog/credit-card-authorization-holds)
