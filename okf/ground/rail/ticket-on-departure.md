---
type: Process
title: Ticket on Departure
description: 'Ticket on Departure (ToD) is a rail ticket delivery method in which a passenger purchases a ticket online or by phone and then collects the physical ticket(s) from a self-service ticket vending machine (TVM) at any staffed or equipped station before travel, using a booking reference and the payment card used at purchase. It is one of several fulfillment modes standardised within UK National Rail and broader European rail distribution, alongside e-tickets (print-at-home or mobile barcode) and postal delivery.'
tags:
  - rail
  - active
  - Rail Delivery Group
timestamp: '2026-08-15T00:00:00Z'
id: ticket-on-departure
vertical: ground
category: rail
conceptType: process
status: active
abbreviation: ToD
term_ko: 출발 시 티켓 수령(Ticket on Departure)
definition_ko: 'Ticket on Departure(ToD)는 승객이 온라인 또는 전화로 티켓을 구매한 후 여행 전에 어느 역의 자동 발권기(TVM)에서 예약 번호와 구매 시 사용한 결제 카드를 이용해 실물 티켓을 수령하는 철도 티켓 인도 방법이다. 전자 티켓(프린트-앳-홈 또는 모바일 바코드), 우편 배송과 함께 영국 National Rail 및 유럽 철도 유통 내에서 표준화된 인도 방식 중 하나이다.'
longDef: 'In the UK National Rail context, ToD was introduced to allow online ticket sales to reach passengers who did not have access to printers (print-at-home) or did not want to wait for postal delivery. The process: (1) Passenger books online, receives a booking reference (and, optionally, a collection reference); (2) Passenger arrives at any National Rail station equipped with TVMs; (3) Ticket is collected by inserting the payment card and entering the booking reference; (4) The TVM prints and dispenses all coupons for the booking (tickets, supplements, seat reservation vouchers). ToD is available at the majority of UK stations and can be performed at a station other than the departure station. Security controls require the original payment card — this prevents misuse of booking references. In the broader European rail context, collect-at-station mechanisms exist under different brand names (e.g., Ticket en Gare in France) and are increasingly harmonised under the OSDM (Open Sales and Distribution Model) standard, which includes a Fulfillment Type taxonomy (Barcode/Print, Collect, Postal) for interoperable ticket delivery across rail operators. The rise of mobile ticketing (barcodes on smartphone, smart device, or wearable) has reduced but not eliminated ToD demand, as it remains preferred for paper-format coupons or when mobile data connectivity is unreliable.'
longDef_ko: '영국 National Rail 맥락에서 ToD는 프린터 접근성이 없거나 우편 배송을 기다리고 싶지 않은 승객이 온라인으로 티켓을 구매할 수 있도록 도입되었다. 과정: (1) 승객이 온라인으로 예약하고 예약 번호(및 선택적으로 수령 번호)를 받음; (2) 승객이 TVM이 설치된 임의 National Rail 역에 도착; (3) 결제 카드를 삽입하고 예약 번호를 입력하여 티켓 수령; (4) TVM이 예약에 대한 모든 쿠폰(티켓, 추가요금, 좌석 예약 바우처)을 인쇄·발급. ToD는 출발역이 아닌 다른 역에서도 수행할 수 있다. 보안 통제를 위해 원래 결제 카드가 필요하며, 이는 예약 번호 오남용을 방지한다. 유럽 철도 맥락에서는 각기 다른 브랜드명(프랑스의 Ticket en Gare 등)으로 역 수령 메커니즘이 존재하며, 철도 운영자 간 상호 운용 가능한 티켓 인도를 위한 OSDM(Open Sales and Distribution Model)의 인도 유형 분류(바코드/인쇄, 수령, 우편) 아래 점점 더 표준화되고 있다. 모바일 발권(스마트폰, 스마트 기기, 웨어러블의 바코드)의 부상으로 ToD 수요가 감소했지만, 종이 형식 쿠폰 선호 또는 모바일 데이터 연결이 불안정한 경우에는 여전히 선호된다.'
aliases:
  - ToD
  - Collect at Station
  - Ticket Collection
relationships:
  - type: related
    targetTerm: OSDM
  - type: related
    targetTerm: Fulfillment (Rail)
  - type: related
    targetTerm: Integrated Reservation Ticket (IRT)
  - type: related
    targetTerm: NeTEx
distinctions:
  - targetTerm: Fulfillment (Rail)
    explanation: 'Fulfillment (Rail) is the broader concept covering all methods by which a rail booking is converted into a travel document the passenger can use — encompassing e-ticket barcodes, mobile tickets, ToD (collect at kiosk), postal delivery, and issuing at the counter. Ticket on Departure is one specific fulfillment mode within that broader category.'
    explanation_ko: 'Fulfillment (Rail)은 철도 예약을 승객이 사용할 수 있는 여행 서류로 변환하는 모든 방법을 아우르는 더 넓은 개념으로, 전자 티켓 바코드, 모바일 티켓, ToD(키오스크 수령), 우편 배송, 창구 발급 등을 포함한다. Ticket on Departure는 그 더 넓은 범주 내의 특정 인도 방식이다.'
  - targetTerm: Integrated Reservation Ticket (IRT)
    explanation: 'An Integrated Reservation Ticket (IRT) is a ticket format in which the transport document and the seat reservation are combined in a single coupon. Ticket on Departure (ToD) is a delivery mechanism — the physical means by which any ticket format (IRT, NRT, or standard) is collected at the station — and describes when and where the ticket is obtained, not what it contains.'
    explanation_ko: 'IRT(통합 예약 티켓)는 운송 서류와 좌석 예약이 단일 쿠폰에 결합된 티켓 형식이다. Ticket on Departure(ToD)는 인도 메커니즘으로, 어떤 형식의 티켓(IRT, NRT, 또는 표준)이든 역에서 수령하는 물리적 방법이다. 티켓이 언제 어디서 수령되는지를 설명하며, 내용물을 설명하지 않는다.'
sources:
  - name: 'Ticket Delivery Options — National Rail (UK)'
    org: Rail Delivery Group
    version: ''
    section: ''
    url: 'https://www.nationalrail.co.uk/tickets-railcards-and-fees/buying-tickets/'
    tier: association
  - name: 'Ticket on Departure — TrainSplit Guide'
    org: TrainSplit
    version: ''
    section: ''
    url: 'https://trainsplit.com/ticket-on-departure'
    tier: secondary
  - name: 'OSDM Standard — Open Sales and Distribution Model'
    org: UIC (International Union of Railways)
    version: ''
    section: 'Fulfillment types'
    url: 'https://uic.org/support-activities/it/article/osdm-open-sales-and-distribution-model'
    tier: standard-body
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="8" width="14" height="32" rx="2"/><line x1="9" y1="16" x2="17" y2="16"/><line x1="9" y1="22" x2="17" y2="22"/><line x1="9" y1="28" x2="14" y2="28"/><path d="M24 28l6-12 6 12"/><line x1="26" y1="24" x2="34" y2="24"/><path d="M20 40h24"/><line x1="30" y1="28" x2="30" y2="40"/></svg>
---

> Ticket on Departure (ToD) is a rail ticket delivery method in which a passenger purchases a ticket online or by phone and then collects the physical ticket(s) from a self-service ticket vending machine (TVM) at any staffed or equipped station before travel, using a booking reference and the payment card used at purchase. It is one of several fulfillment modes standardised within UK National Rail and broader European rail distribution.

In the UK National Rail context, ToD was introduced to allow online ticket sales to reach passengers who did not have access to printers (print-at-home) or did not want to wait for postal delivery. The process: (1) Passenger books online, receives a booking reference (and, optionally, a collection reference); (2) Passenger arrives at any National Rail station equipped with TVMs; (3) Ticket is collected by inserting the payment card and entering the booking reference; (4) The TVM prints and dispenses all coupons for the booking (tickets, supplements, seat reservation vouchers). ToD is available at the majority of UK stations and can be performed at a station other than the departure station. Security controls require the original payment card — this prevents misuse of booking references. In the broader European rail context, collect-at-station mechanisms exist under different brand names (e.g., Ticket en Gare in France) and are increasingly harmonised under the OSDM (Open Sales and Distribution Model) standard, which includes a Fulfillment Type taxonomy (Barcode/Print, Collect, Postal) for interoperable ticket delivery across rail operators. The rise of mobile ticketing has reduced but not eliminated ToD demand, as it remains preferred for paper-format coupons or when mobile data connectivity is unreliable.

**한국어 / Korean** — **출발 시 티켓 수령(Ticket on Departure, ToD)** — Ticket on Departure(ToD)는 승객이 온라인 또는 전화로 티켓을 구매한 후 여행 전에 어느 역의 자동 발권기(TVM)에서 예약 번호와 구매 시 사용한 결제 카드를 이용해 실물 티켓을 수령하는 철도 티켓 인도 방법이다.

승객은 온라인으로 예약하고 예약 번호를 받은 뒤, TVM이 설치된 임의 National Rail 역에서 결제 카드를 삽입하고 예약 번호를 입력해 티켓을 수령한다. 출발역이 아닌 다른 역에서도 수령할 수 있으며, 보안을 위해 원래 결제 카드가 필요하다. OSDM 표준 아래 유럽 전역에서 점점 더 표준화되고 있다.

**Aliases:** `ToD`, `Collect at Station`, `Ticket Collection`

# Related
- [OSDM](/ground/rail/osdm.md) — related
- [Fulfillment (Rail)](/ground/rail/fulfillment-rail.md) — related
- [Integrated Reservation Ticket (IRT)](/ground/rail/integrated-reservation-ticket-irt.md) — related
- [NeTEx](/ground/rail/netex.md) — related

# Distinctions
- **Ticket on Departure** vs [Fulfillment (Rail)](/ground/rail/fulfillment-rail.md) — Fulfillment (Rail) is the broader concept covering all methods by which a rail booking is converted into a travel document the passenger can use — encompassing e-ticket barcodes, mobile tickets, ToD (collect at kiosk), postal delivery, and issuing at the counter. Ticket on Departure is one specific fulfillment mode within that broader category.
- **Ticket on Departure** vs [Integrated Reservation Ticket (IRT)](/ground/rail/integrated-reservation-ticket-irt.md) — An Integrated Reservation Ticket (IRT) is a ticket format in which the transport document and the seat reservation are combined in a single coupon. Ticket on Departure (ToD) is a delivery mechanism — the physical means by which any ticket format (IRT, NRT, or standard) is collected at the station — and describes when and where the ticket is obtained, not what it contains.

# Citations
[1] [Rail Delivery Group — Ticket Delivery Options — National Rail (UK)](https://www.nationalrail.co.uk/tickets-railcards-and-fees/buying-tickets/)
[2] [TrainSplit — Ticket on Departure — TrainSplit Guide](https://trainsplit.com/ticket-on-departure)
[3] [UIC (International Union of Railways) — OSDM Standard — Open Sales and Distribution Model — Fulfillment types](https://uic.org/support-activities/it/article/osdm-open-sales-and-distribution-model)
