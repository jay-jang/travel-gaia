---
type: Business Term
title: Open-Dated Voucher
description: 'An open-dated voucher is an attraction ticket or activity booking confirmation that does not carry a fixed visit date or timeslot at the point of purchase; the holder may redeem it on any qualifying day within the stated validity window by presenting it at the venue entrance or redemption point. It is the principal flexibility mechanism in B2B and B2C experience distribution, allowing downstream resellers to hold and sell inventory without committing to a specific date.'
tags:
  - tour-product
  - active
  - OCTO
timestamp: '2026-06-29T00:00:00Z'
id: open-dated-voucher
vertical: tours
category: tour-product
conceptType: business-term
status: active
aliases:
  - Open Date Voucher
  - Undated Voucher
  - Flexible Date Voucher
  - Open-Ended Ticket
term_ko: '날짜 미지정 바우처(Open-Dated Voucher)'
definition_ko: '날짜 미지정 바우처(Open-Dated Voucher)는 구매 시점에 특정 방문 날짜나 시간대가 지정되지 않은 어트랙션 티켓 또는 액티비티 예약 확인서로, 소지자는 명시된 유효 기간 내 임의의 적합한 날에 입장구 또는 교환 지점에서 제시하여 사용할 수 있다. B2B·B2C 체험 상품 유통에서 특정 날짜 확정 없이 재판매 업체가 재고를 보유·판매할 수 있게 하는 주요 유연성 수단이다.'
longDef: 'Open-dated vouchers are standard in the distribution of major attraction tickets (theme parks, museums, city-sightseeing passes) and pre-packaged day tours sold through OTAs, bedbanks, and wholesalers, where the reseller may be months ahead of the guest's visit. The voucher specifies a product, a number of participants, an expiry date (typically 30 days to 12 months from issue), and the operating conditions; the guest may be required to exchange it for a dated ticket on arrival or at a box office, or may walk in directly if the supplier accepts open-dated redemption. The OCTO (Open Connectivity for Tourism) specification distinguishes open-dated availability from closed/timed availability: an OCTO product with "openDated" availability has no calendar or capacity check at booking time, whereas a timed product requires a specific start-time slot to be reserved.'
longDef_ko: '날짜 미지정 바우처는 재판매업체가 선객의 방문보다 몇 달 앞서 있을 수 있는 OTA·베드뱅크·도매상을 통해 판매되는 주요 어트랙션 티켓(테마파크, 박물관, 시티투어 패스)과 사전 패키지 당일 투어 유통에서 표준이다. 바우처에는 상품, 참가 인원, 유효 기간(발행 후 통상 30일~12개월), 운영 조건이 명시된다. 선객은 도착 시 또는 매표소에서 날짜가 지정된 티켓으로 교환해야 할 수도 있고, 공급사가 날짜 미지정 사용을 허용하면 바로 입장할 수도 있다. OCTO(Open Connectivity for Tourism) 사양은 날짜 미지정 가용성을 기한/시간제 가용성과 구분한다. OCTO에서 "openDated" 가용성을 갖는 상품은 예약 시 캘린더 또는 용량 확인이 없고, 시간제 상품은 특정 시작 시간대를 예약해야 한다.'
standardBody: OCTO (Open Connectivity for Tourism)
relationships:
  - type: related
    targetTerm: Voucher
  - type: contrasts
    targetTerm: Timeslot
  - type: related
    targetTerm: Capacity
  - type: related
    targetTerm: Cut-off Time
  - type: related
    targetTerm: Mobile Ticket
  - type: related
    targetTerm: Free Cancellation
distinctions:
  - targetTerm: Voucher
    explanation: 'A voucher is the generic document or confirmation used to claim a travel product; an open-dated voucher is the specific type that has no pre-assigned visit date — all open-dated vouchers are vouchers, but most vouchers (hotel, tour, flight) carry a fixed date or service period.'
    explanation_ko: '바우처는 여행 상품을 청구하는 데 사용하는 일반적인 문서 또는 확인서이고, 날짜 미지정 바우처는 방문 날짜가 사전 지정되지 않은 특정 유형이다. 모든 날짜 미지정 바우처는 바우처이지만, 대부분의 바우처(호텔·투어·항공)는 고정된 날짜나 서비스 기간을 가지고 있다.'
  - targetTerm: Timeslot
    explanation: 'A timeslot is a specific date-and-time window reserved for a visitor''s entry or activity start; an open-dated voucher has no timeslot at the time of purchase. Depending on the supplier, a guest may need to exchange the open-dated voucher for a timeslot on arrival or before visiting, or may be admitted without a timed reservation.'
    explanation_ko: '시간대(Timeslot)는 방문자의 입장 또는 액티비티 시작을 위해 예약된 특정 날짜·시간 창이고, 날짜 미지정 바우처는 구매 시점에 시간대가 없다. 공급사에 따라 선객은 도착 전이나 방문 전에 날짜 미지정 바우처를 시간대 예약으로 교환해야 할 수도 있고, 시간제 예약 없이 입장이 가능할 수도 있다.'
  - targetTerm: Instant Confirmation
    explanation: 'Instant Confirmation is a booking status indicating that availability is confirmed in real time at the moment of purchase; an open-dated voucher may or may not be instantly confirmed depending on whether the supplier runs capacity checks. Many open-dated products grant instant confirmation precisely because no capacity slot is consumed at booking time.'
    explanation_ko: 'Instant Confirmation은 구매 시점에 가용성이 실시간으로 확정되는 예약 상태이고, 날짜 미지정 바우처는 공급사의 용량 확인 여부에 따라 즉시 확정될 수도 있고 아닐 수도 있다. 많은 날짜 미지정 상품은 예약 시 용량 슬롯이 소비되지 않기 때문에 즉시 확정을 제공한다.'
sources:
  - name: OCTO Core Specification — Availability Types
    org: OCTO (Open Connectivity for Tourism)
    version: '1.3'
    section: Availability / openDated
    url: 'https://github.com/octotravel/octo-core'
    tier: standard-body
  - name: OCTO Consortium — Open Connectivity for Tourism
    org: OCTO
    version: ''
    section: ''
    url: 'https://octotravel.com/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M6 18v-4a2 2 0 0 1 2-2h32a2 2 0 0 1 2 2v4a4 4 0 0 1 0 8v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-4a4 4 0 0 1 0-8z"/><line x1="18" y1="12" x2="18" y2="36"/><circle cx="31" cy="20" r="2"/><path d="M31 24v4"/></svg>
---

> An open-dated voucher is an attraction ticket or activity booking confirmation that does not carry a fixed visit date or timeslot at the point of purchase; the holder may redeem it on any qualifying day within the stated validity window by presenting it at the venue entrance or redemption point. It is the principal flexibility mechanism in B2B and B2C experience distribution, allowing downstream resellers to hold and sell inventory without committing to a specific date.

Open-dated vouchers are standard in the distribution of major attraction tickets (theme parks, museums, city-sightseeing passes) and pre-packaged day tours sold through OTAs, bedbanks, and wholesalers, where the reseller may be months ahead of the guest's visit. The voucher specifies a product, a number of participants, an expiry date (typically 30 days to 12 months from issue), and the operating conditions; the guest may be required to exchange it for a dated ticket on arrival or at a box office, or may walk in directly if the supplier accepts open-dated redemption. The OCTO (Open Connectivity for Tourism) specification distinguishes open-dated availability from closed/timed availability: an OCTO product with "openDated" availability has no calendar or capacity check at booking time, whereas a timed product requires a specific start-time slot to be reserved.

**한국어 / Korean** — **날짜 미지정 바우처(Open-Dated Voucher)** — 날짜 미지정 바우처(Open-Dated Voucher)는 구매 시점에 특정 방문 날짜나 시간대가 지정되지 않은 어트랙션 티켓 또는 액티비티 예약 확인서로, 소지자는 명시된 유효 기간 내 임의의 적합한 날에 입장구 또는 교환 지점에서 제시하여 사용할 수 있다. B2B·B2C 체험 상품 유통에서 특정 날짜 확정 없이 재판매 업체가 재고를 보유·판매할 수 있게 하는 주요 유연성 수단이다.

날짜 미지정 바우처는 재판매업체가 선객의 방문보다 몇 달 앞서 있을 수 있는 OTA·베드뱅크·도매상을 통해 판매되는 주요 어트랙션 티켓(테마파크, 박물관, 시티투어 패스)과 사전 패키지 당일 투어 유통에서 표준이다. 바우처에는 상품, 참가 인원, 유효 기간(발행 후 통상 30일~12개월), 운영 조건이 명시된다. 선객은 도착 시 또는 매표소에서 날짜가 지정된 티켓으로 교환해야 할 수도 있고, 공급사가 날짜 미지정 사용을 허용하면 바로 입장할 수도 있다. OCTO(Open Connectivity for Tourism) 사양은 날짜 미지정 가용성을 기한/시간제 가용성과 구분한다.

**Aliases:** `Open Date Voucher`, `Undated Voucher`, `Flexible Date Voucher`, `Open-Ended Ticket`

# Related
- [Voucher](/tours/tour-product/voucher.md) — related
- [Timeslot](/tours/tour-product/timeslot.md) — contrasts
- [Capacity](/tours/tour-product/capacity.md) — related
- [Cut-off Time](/tours/tour-product/cut-off-time.md) — related
- [Mobile Ticket](/tours/tour-product/mobile-ticket.md) — related
- [Free Cancellation](/tours/tour-product/free-cancellation.md) — related

# Distinctions
- **Open-Dated Voucher** vs [Voucher](/tours/tour-product/voucher.md) — A voucher is the generic document or confirmation used to claim a travel product; an open-dated voucher is the specific type that has no pre-assigned visit date — all open-dated vouchers are vouchers, but most vouchers (hotel, tour, flight) carry a fixed date or service period.
- **Open-Dated Voucher** vs [Timeslot](/tours/tour-product/timeslot.md) — A timeslot is a specific date-and-time window reserved for a visitor's entry or activity start; an open-dated voucher has no timeslot at the time of purchase. Depending on the supplier, a guest may need to exchange the open-dated voucher for a timeslot on arrival or before visiting, or may be admitted without a timed reservation.
- **Open-Dated Voucher** vs [Instant Confirmation](/tours/tour-dist/instant-confirmation.md) — Instant Confirmation is a booking status indicating that availability is confirmed in real time at the moment of purchase; an open-dated voucher may or may not be instantly confirmed depending on whether the supplier runs capacity checks. Many open-dated products grant instant confirmation precisely because no capacity slot is consumed at booking time.

# Citations
[1] [OCTO (Open Connectivity for Tourism) — OCTO Core Specification — Availability Types — 1.3](https://github.com/octotravel/octo-core)
[2] [OCTO — OCTO Consortium — Open Connectivity for Tourism](https://octotravel.com/)
