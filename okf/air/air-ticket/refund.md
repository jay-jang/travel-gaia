---
type: Process
title: Refund
description: The return of all or part of a ticket's or EMD's value to the passenger or form of payment for unused or partially used coupons. Refund eligibility and any penalties are determined by the applicable fare rules (voluntary) or by involuntary refund provisions when the carrier fails to provide carriage.
tags:
  - air-ticket
  - active
  - IATA
timestamp: '2026-06-15T00:00:00Z'
id: refund
vertical: air
category: air-ticket
conceptType: process
status: active
term_ko: 환불 (Refund)
definition_ko: '미사용 또는 부분 사용된 쿠폰에 대해 항공권 또는 EMD 가치의 전부 또는 일부를 승객 또는 지불 수단으로 반환하는 것이다. 환불 자격 여부와 위약금은 해당 운임 규정(자발적인 경우)에 의해, 또는 항공사가 운송을 제공하지 못한 경우 비자발적 환불 규정에 의해 결정된다.'
longDef: 'Refunds are categorized as voluntary (passenger-initiated, subject to refundability and cancellation penalties in the fare rule) or involuntary (carrier-caused cancellation/schedule failure, generally full and penalty-free). Refunded coupons are set to status REFUNDED so value cannot be reused, and unused taxes/fees may be refundable even on non-refundable fares depending on jurisdiction. For BSP/ARC sales, refunds are processed through the settlement system and netted against the agent''s billing.'
longDef_ko: '환불은 자발적 환불(승객 주도이며 운임 규정상의 환불 가능 여부 및 취소 위약금 적용)과 비자발적 환불(항공사 사유에 의한 결항/운항 실패로, 일반적으로 전액이며 위약금 없음)로 구분된다. 환불된 쿠폰은 가치가 재사용되지 못하도록 REFUNDED 상태로 설정되며, 미사용 세금/수수료는 관할 지역에 따라 환불 불가 운임에서도 환불될 수 있다. BSP/ARC 판매의 경우 환불은 정산 시스템을 통해 처리되어 대리점 청구액과 상계된다.'
standardBody: IATA
aliases:
  - Ticket Refund
  - Refund Application
relationships:
  - type: related
    targetTerm: E-ticket
  - type: related
    targetTerm: EMD
  - type: related
    targetTerm: Flight Coupon
  - type: contrasts
    targetTerm: Void
  - type: contrasts
    targetTerm: Reissue
  - type: related
    targetTerm: BSP
  - type: related
    targetTerm: ARC
distinctions:
  - targetTerm: Void
    explanation: 'Void cancels an issuance within the same sales period at zero cost; a refund returns value after the sales/void window, typically with applicable penalties.'
    explanation_ko: 'Void는 동일한 판매 기간 내에 무비용으로 발권을 취소하며, 환불은 판매/Void 기한 이후에 가치를 반환하되 통상 적용 가능한 위약금이 따른다.'
  - targetTerm: Reissue
    explanation: Refund returns value to the customer; reissue exchanges the ticket for new transportation.
    explanation_ko: '환불은 고객에게 가치를 반환하며, 재발행은 항공권을 새로운 운송으로 교환한다.'
  - targetTerm: Chargeback
    explanation: A refund is a merchant-initiated return of funds; a chargeback is a cardholder-initiated dispute forced through the card network.
    explanation_ko: '환불은 가맹점이 주도하는 자금 반환이며, 지불 거절(chargeback)은 카드 소지자가 주도하여 카드 네트워크를 통해 강제되는 분쟁이다.'
sources:
  - name: Passenger Services Conference Resolutions Manual (PSCRM)
    org: IATA
    version: ''
    section: ''
    url: ''
  - name: BSP Refund procedures
    org: IATA
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="16" width="30" height="20" rx="3"/><path d="M6 22h30"/><path d="M40 14a10 10 0 11-3 14"/><path d="M37 28v-5h5"/></svg>
---

> The return of all or part of a ticket's or EMD's value to the passenger or form of payment for unused or partially used coupons. Refund eligibility and any penalties are determined by the applicable fare rules (voluntary) or by involuntary refund provisions when the carrier fails to provide carriage.

Refunds are categorized as voluntary (passenger-initiated, subject to refundability and cancellation penalties in the fare rule) or involuntary (carrier-caused cancellation/schedule failure, generally full and penalty-free). Refunded coupons are set to status REFUNDED so value cannot be reused, and unused taxes/fees may be refundable even on non-refundable fares depending on jurisdiction. For BSP/ARC sales, refunds are processed through the settlement system and netted against the agent's billing.

**한국어 / Korean** — **환불 (Refund)** — 미사용 또는 부분 사용된 쿠폰에 대해 항공권 또는 EMD 가치의 전부 또는 일부를 승객 또는 지불 수단으로 반환하는 것이다. 환불 자격 여부와 위약금은 해당 운임 규정(자발적인 경우)에 의해, 또는 항공사가 운송을 제공하지 못한 경우 비자발적 환불 규정에 의해 결정된다.

환불은 자발적 환불(승객 주도이며 운임 규정상의 환불 가능 여부 및 취소 위약금 적용)과 비자발적 환불(항공사 사유에 의한 결항/운항 실패로, 일반적으로 전액이며 위약금 없음)로 구분된다. 환불된 쿠폰은 가치가 재사용되지 못하도록 REFUNDED 상태로 설정되며, 미사용 세금/수수료는 관할 지역에 따라 환불 불가 운임에서도 환불될 수 있다. BSP/ARC 판매의 경우 환불은 정산 시스템을 통해 처리되어 대리점 청구액과 상계된다.

**Aliases:** `Ticket Refund`, `Refund Application`

# Related
- [E-ticket](/air/air-ticket/e-ticket.md) — related
- [EMD](/air/air-ticket/emd.md) — related
- [Flight Coupon](/air/air-ticket/flight-coupon.md) — related
- [Void](/air/air-ticket/void.md) — contrasts
- [Reissue](/air/air-ticket/reissue.md) — contrasts
- [BSP](/common/pay/bsp.md) — related
- [ARC](/common/pay/arc.md) — related

# Distinctions
- **Refund** vs [Void](/air/air-ticket/void.md) — Void cancels an issuance within the same sales period at zero cost; a refund returns value after the sales/void window, typically with applicable penalties.
- **Refund** vs [Reissue](/air/air-ticket/reissue.md) — Refund returns value to the customer; reissue exchanges the ticket for new transportation.
- **Refund** vs [Chargeback](/common/pay/chargeback.md) — A refund is a merchant-initiated return of funds; a chargeback is a cardholder-initiated dispute forced through the card network.

# Citations
[1] IATA — Passenger Services Conference Resolutions Manual (PSCRM)
[2] IATA — BSP Refund procedures
