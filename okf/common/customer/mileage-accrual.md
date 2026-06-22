---
type: Process
title: Mileage Accrual
description: 'Mileage accrual is the process by which a frequent flyer program member earns and accumulates miles or points into their loyalty account. Miles are typically credited for flown segments (calculated by distance flown or by fare paid), and through partner activity such as co-branded credit card spend, hotel stays, car rentals, and retail partners.'
tags:
  - customer
  - active
timestamp: '2026-06-17T00:00:00Z'
id: mileage-accrual
vertical: common
category: customer
conceptType: process
status: active
term_ko: 마일리지 적립(Mileage Accrual)
definition_ko: '마일리지 적립(Mileage Accrual)은 상용고객우대(FFP) 회원이 자신의 로열티 계정에 마일 또는 포인트를 적립·누적하는 과정이다. 일반적으로 탑승한 구간(비행 거리 또는 지불 운임 기준 산정)에 대해 마일이 적립되며, 제휴 신용카드 사용, 호텔 숙박, 렌터카, 제휴 가맹점 같은 파트너 활동을 통해서도 적립된다.'
longDef: 'Accrual rules determine the earning basis: distance-based programs credit miles per mile flown adjusted by a fare-class multiplier, while revenue-based programs credit points as a multiple of the eligible fare paid, often tied to the passenger''s loyalty tier. Accrual is recorded against the member''s Frequent Flyer Number and may post immediately or after the flight is flown. Accrued balances are the asset that members later draw down through award redemption. Some programs distinguish redeemable miles (spent on awards) from qualifying/status miles (used to attain or retain tier status), so a given activity may accrue one, the other, or both.'
longDef_ko: '적립 규칙이 적립 기준을 정한다. 거리 기반 프로그램은 운임 등급 배수를 반영해 비행 거리당 마일을 적립하고, 매출 기반 프로그램은 회원 등급과 연동해 적격 운임의 일정 배수로 포인트를 적립한다. 적립은 회원의 Frequent Flyer Number에 기록되며 즉시 또는 탑승 후에 반영될 수 있다. 적립된 잔액은 회원이 이후 award redemption(보상 사용)을 통해 사용하는 자산이다. 일부 프로그램은 보상에 쓰는 적립 마일과 등급 달성·유지에 쓰는 자격(등급) 마일을 구분하므로, 하나의 활동이 둘 중 하나만 또는 둘 다 적립할 수 있다.'
aliases:
  - Mileage Earning
  - Miles Accrual
  - Points Accrual
  - Earning
relationships:
  - type: broader
    targetTerm: Frequent Flyer Program
  - type: related
    targetTerm: Frequent Flyer Number
  - type: related
    targetTerm: Loyalty Tier Status
  - type: contrasts
    targetTerm: Award Redemption
distinctions:
  - targetTerm: Award Redemption
    explanation: 'Mileage accrual is the earning side of a loyalty account (miles flowing in), whereas award redemption is the spending side (miles flowing out for flights, upgrades, or other rewards).'
    explanation_ko: 'Mileage accrual은 로열티 계정의 적립(마일이 들어오는) 측면이고, award redemption은 마일을 항공권·업그레이드 등 보상에 쓰는(마일이 빠져나가는) 측면이다.'
  - targetTerm: Loyalty Tier Status
    explanation: 'Redeemable miles accrue as spendable currency, while tier/qualifying miles accrue toward earning or retaining status; both can be earned simultaneously but serve different purposes.'
    explanation_ko: '적립(사용 가능) 마일은 사용 가능한 통화로 쌓이고, 등급(자격) 마일은 등급 달성·유지를 위해 쌓인다. 둘은 동시에 적립될 수 있지만 목적이 다르다.'
  - targetTerm: Breakage
    explanation: Mileage Accrual increases a member's balance and the program's liability; Breakage reduces the recognized liability by the share of that balance expected to expire unused.
    explanation_ko: 'Mileage Accrual은 회원 잔액과 프로그램 부채를 늘리고, Breakage는 미사용 소멸이 예상되는 잔액 비율만큼 인식 부채를 줄인다.'
  - targetTerm: Co-branded Credit Card
    explanation: Mileage accrual is the general process of earning miles into an account; a co-branded credit card is one of the largest specific channels through which that accrual happens — via card spend funded by the bank's bulk point purchases.
    explanation_ko: 'Mileage accrual은 계정에 마일을 적립하는 일반적 과정이고, co-branded credit card는 그 적립이 일어나는 가장 큰 구체적 경로 중 하나로, 은행의 대량 포인트 구매로 자금이 조달되는 카드 지출을 통해 이루어진다.'
  - targetTerm: Elite Qualifying Metric
    explanation: 'Mileage accrual builds the redeemable balance spent on awards; qualifying metrics build toward earning or retaining tier status. The same trip can generate both, but they are tracked and used separately.'
    explanation_ko: 'Mileage accrual은 보상에 사용하는 적립 잔액을 쌓고, 자격 지표는 등급 달성·유지를 향해 쌓인다. 같은 여행이 둘 다 적립할 수 있지만, 별도로 추적·사용된다.'
  - targetTerm: Transfer Partner
    explanation: Mileage Accrual is earning miles from a member's own flying or spend; a transfer from a Transfer Partner adds miles by converting a balance held in a different program's currency.
    explanation_ko: 'Mileage Accrual은 회원 자신의 탑승·지출로 마일을 적립하는 것이고, Transfer Partner로부터의 전환은 다른 프로그램 통화로 보유한 잔액을 변환하여 마일을 더하는 것이다.'
sources:
  - org: Navan
    name: What are Frequent Flyer Miles? How They Work
    version: ''
    section: ''
    url: 'https://navan.com/resources/glossary/what-is-frequent-flyer-miles'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M6 38h36"/><rect x="9" y="28" width="6" height="10"/><rect x="21" y="20" width="6" height="18"/><rect x="33" y="12" width="6" height="26"/><path d="M8 22l10-8 8 4 12-12"/></svg>
---

> Mileage accrual is the process by which a frequent flyer program member earns and accumulates miles or points into their loyalty account. Miles are typically credited for flown segments (calculated by distance flown or by fare paid), and through partner activity such as co-branded credit card spend, hotel stays, car rentals, and retail partners.

Accrual rules determine the earning basis: distance-based programs credit miles per mile flown adjusted by a fare-class multiplier, while revenue-based programs credit points as a multiple of the eligible fare paid, often tied to the passenger's loyalty tier. Accrual is recorded against the member's Frequent Flyer Number and may post immediately or after the flight is flown. Accrued balances are the asset that members later draw down through award redemption. Some programs distinguish redeemable miles (spent on awards) from qualifying/status miles (used to attain or retain tier status), so a given activity may accrue one, the other, or both.

**한국어 / Korean** — **마일리지 적립(Mileage Accrual)** — 마일리지 적립(Mileage Accrual)은 상용고객우대(FFP) 회원이 자신의 로열티 계정에 마일 또는 포인트를 적립·누적하는 과정이다. 일반적으로 탑승한 구간(비행 거리 또는 지불 운임 기준 산정)에 대해 마일이 적립되며, 제휴 신용카드 사용, 호텔 숙박, 렌터카, 제휴 가맹점 같은 파트너 활동을 통해서도 적립된다.

적립 규칙이 적립 기준을 정한다. 거리 기반 프로그램은 운임 등급 배수를 반영해 비행 거리당 마일을 적립하고, 매출 기반 프로그램은 회원 등급과 연동해 적격 운임의 일정 배수로 포인트를 적립한다. 적립은 회원의 Frequent Flyer Number에 기록되며 즉시 또는 탑승 후에 반영될 수 있다. 적립된 잔액은 회원이 이후 award redemption(보상 사용)을 통해 사용하는 자산이다. 일부 프로그램은 보상에 쓰는 적립 마일과 등급 달성·유지에 쓰는 자격(등급) 마일을 구분하므로, 하나의 활동이 둘 중 하나만 또는 둘 다 적립할 수 있다.

**Aliases:** `Mileage Earning`, `Miles Accrual`, `Points Accrual`, `Earning`

# Related
- [Frequent Flyer Program](/common/customer/frequent-flyer-program.md) — broader
- [Frequent Flyer Number](/common/customer/frequent-flyer-number.md) — related
- [Loyalty Tier Status](/common/customer/loyalty-tier-status.md) — related
- [Award Redemption](/common/customer/award-redemption.md) — contrasts

# Distinctions
- **Mileage Accrual** vs [Award Redemption](/common/customer/award-redemption.md) — Mileage accrual is the earning side of a loyalty account (miles flowing in), whereas award redemption is the spending side (miles flowing out for flights, upgrades, or other rewards).
- **Mileage Accrual** vs [Loyalty Tier Status](/common/customer/loyalty-tier-status.md) — Redeemable miles accrue as spendable currency, while tier/qualifying miles accrue toward earning or retaining status; both can be earned simultaneously but serve different purposes.
- **Mileage Accrual** vs [Breakage](/common/customer/breakage.md) — Mileage Accrual increases a member's balance and the program's liability; Breakage reduces the recognized liability by the share of that balance expected to expire unused.
- **Mileage Accrual** vs [Co-branded Credit Card](/common/customer/co-branded-credit-card.md) — Mileage accrual is the general process of earning miles into an account; a co-branded credit card is one of the largest specific channels through which that accrual happens — via card spend funded by the bank's bulk point purchases.
- **Mileage Accrual** vs [Elite Qualifying Metric](/common/customer/elite-qualifying-metric.md) — Mileage accrual builds the redeemable balance spent on awards; qualifying metrics build toward earning or retaining tier status. The same trip can generate both, but they are tracked and used separately.
- **Mileage Accrual** vs [Transfer Partner](/common/customer/transfer-partner.md) — Mileage Accrual is earning miles from a member's own flying or spend; a transfer from a Transfer Partner adds miles by converting a balance held in a different program's currency.

# Citations
[1] [Navan — What are Frequent Flyer Miles? How They Work](https://navan.com/resources/glossary/what-is-frequent-flyer-miles)
