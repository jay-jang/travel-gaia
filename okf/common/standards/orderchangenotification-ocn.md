---
type: Standard Term
title: OrderChangeNotification (OCN)
description: 'OrderChangeNotification (OCN) is the unsolicited, airline-initiated NDC message that pushes a notification to the seller when an existing Order changes—for example a schedule change, disruption, or involuntary re-accommodation. It implements an asynchronous push (webhook-style) pattern rather than a seller-initiated request/response.'
tags:
  - standards
  - active
  - IATA
timestamp: '2026-06-18T00:00:00Z'
id: orderchangenotification-ocn
vertical: common
category: standards
conceptType: standard-term
status: active
abbreviation: OCN
term_ko: 'OrderChangeNotification (OCN, 주문 변경 알림)'
definition_ko: 'OrderChangeNotification(OCN)은 기존 Order에 변경(예: 스케줄 변경, 운항 중단(disruption), 비자발적 재배치(re-accommodation))이 발생했을 때 항공사가 판매자에게 비요청(unsolicited)으로 밀어 보내는 NDC 메시지이다. 판매자 요청 기반의 요청/응답이 아니라 비동기 푸시(webhook 방식) 패턴을 구현한다.'
longDef: 'Unlike most NDC messages, which are triggered by a seller request, OCN is sent proactively by the airline''s order management system when the order state changes, allowing sellers to keep their copy of the Order in sync and to act on disruptions. The message conveys the changed order items, new order state and the reason for change; sellers typically retrieve the full updated order with OrderRetrieve and reprice or rebook with OrderReshop/OrderChange. Because delivery is asynchronous, OCN depends on the seller exposing an endpoint (or polling alternative) and underpins automated disruption handling in NDC distribution.'
longDef_ko: '대부분의 NDC 메시지가 판매자 요청으로 시작되는 것과 달리, OCN은 주문 상태가 변경될 때 항공사의 주문 관리 시스템(OMS)이 능동적으로 발송하여 판매자가 자신의 Order 사본을 동기화하고 disruption에 대응하도록 한다. 메시지는 변경된 주문 항목, 새로운 주문 상태, 변경 사유를 전달하며, 판매자는 보통 OrderRetrieve로 갱신된 전체 주문을 조회하고 OrderReshop/OrderChange로 재가격·재예약한다. 전송이 비동기이므로 OCN은 판매자가 수신 엔드포인트를 노출(또는 폴링 대안 사용)해야 하며, NDC 유통에서 자동화된 disruption 처리의 기반이 된다.'
standardBody: IATA
aliases:
  - OrderChangeNotification
  - OrderChangeNotif
relationships:
  - type: child
    targetTerm: NDC
  - type: related
    targetTerm: Order
  - type: related
    targetTerm: Order Management System (OMS)
  - type: related
    targetTerm: Schedule Change
  - type: related
    targetTerm: IROPS
  - type: related
    targetTerm: Re-accommodation
distinctions:
  - targetTerm: Schedule Change
    explanation: A schedule change is the operational event (the flight time/routing changed); OCN is the NDC message that notifies the seller that the Order was affected by such an event.
    explanation_ko: '스케줄 변경은 운영상의 사건(항공편 시각/경로가 바뀜)이고, OCN은 그 사건으로 Order가 영향받았음을 판매자에게 알리는 NDC 메시지이다.'
  - targetTerm: Order
    explanation: 'The Order is the record being changed; OCN is the asynchronous notification about a change to that Order, not the Order itself.'
    explanation_ko: 'Order는 변경 대상인 레코드이고, OCN은 그 Order의 변경을 알리는 비동기 알림이지 Order 자체가 아니다.'
sources:
  - org: IATA
    name: Enhanced and Simplified Distribution Implementation Guide (OrderChangeNotification message)
    version: ''
    section: ''
    url: 'https://guides.developer.iata.org/docs/21-1_ImplementationGuide.pdf'
    tier: standard-body
  - org: IATA
    name: NDC Technical FAQ (Disruption Notifications)
    version: ''
    section: ''
    url: ''
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M24 8a9 9 0 0 1 9 9c0 8 4 11 4 11H11s4-3 4-11a9 9 0 0 1 9-9z"/><path d="M21 36a3 3 0 0 0 6 0"/><circle cx="35" cy="12" r="5" fill="currentColor" stroke="none"/></svg>
---

> OrderChangeNotification (OCN) is the unsolicited, airline-initiated NDC message that pushes a notification to the seller when an existing Order changes—for example a schedule change, disruption, or involuntary re-accommodation. It implements an asynchronous push (webhook-style) pattern rather than a seller-initiated request/response.

Unlike most NDC messages, which are triggered by a seller request, OCN is sent proactively by the airline's order management system when the order state changes, allowing sellers to keep their copy of the Order in sync and to act on disruptions. The message conveys the changed order items, new order state and the reason for change; sellers typically retrieve the full updated order with OrderRetrieve and reprice or rebook with OrderReshop/OrderChange. Because delivery is asynchronous, OCN depends on the seller exposing an endpoint (or polling alternative) and underpins automated disruption handling in NDC distribution.

**한국어 / Korean** — **OrderChangeNotification (OCN, 주문 변경 알림)** — OrderChangeNotification(OCN)은 기존 Order에 변경(예: 스케줄 변경, 운항 중단(disruption), 비자발적 재배치(re-accommodation))이 발생했을 때 항공사가 판매자에게 비요청(unsolicited)으로 밀어 보내는 NDC 메시지이다. 판매자 요청 기반의 요청/응답이 아니라 비동기 푸시(webhook 방식) 패턴을 구현한다.

대부분의 NDC 메시지가 판매자 요청으로 시작되는 것과 달리, OCN은 주문 상태가 변경될 때 항공사의 주문 관리 시스템(OMS)이 능동적으로 발송하여 판매자가 자신의 Order 사본을 동기화하고 disruption에 대응하도록 한다. 메시지는 변경된 주문 항목, 새로운 주문 상태, 변경 사유를 전달하며, 판매자는 보통 OrderRetrieve로 갱신된 전체 주문을 조회하고 OrderReshop/OrderChange로 재가격·재예약한다. 전송이 비동기이므로 OCN은 판매자가 수신 엔드포인트를 노출(또는 폴링 대안 사용)해야 하며, NDC 유통에서 자동화된 disruption 처리의 기반이 된다.

**Aliases:** `OrderChangeNotification`, `OrderChangeNotif`

# Related
- [NDC](/common/standards/ndc.md) — child
- [Order](/common/standards/order.md) — related
- [Order Management System (OMS)](/common/standards/order-management-system-oms.md) — related
- [Schedule Change](/air/air-partner/schedule-change.md) — related
- [IROPS](/air/air-partner/irops.md) — related
- [Re-accommodation](/air/air-partner/re-accommodation.md) — related

# Distinctions
- **OrderChangeNotification (OCN)** vs [Schedule Change](/air/air-partner/schedule-change.md) — A schedule change is the operational event (the flight time/routing changed); OCN is the NDC message that notifies the seller that the Order was affected by such an event.
- **OrderChangeNotification (OCN)** vs [Order](/common/standards/order.md) — The Order is the record being changed; OCN is the asynchronous notification about a change to that Order, not the Order itself.

# Citations
[1] [IATA — Enhanced and Simplified Distribution Implementation Guide (OrderChangeNotification message)](https://guides.developer.iata.org/docs/21-1_ImplementationGuide.pdf)
[2] IATA — NDC Technical FAQ (Disruption Notifications)
