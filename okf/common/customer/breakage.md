---
type: Metric
title: Breakage
description: 'The estimated proportion of loyalty points or miles issued to members that the program expects will never be redeemed. Breakage is a central input to loyalty-program liability accounting, because only the points expected to be redeemed need be recognized as a deferred obligation.'
tags:
  - customer
  - active
timestamp: '2026-06-17T00:00:00Z'
id: breakage
vertical: common
category: customer
conceptType: metric
status: active
term_ko: 브레이키지 (미상환 추정분)
definition_ko: '회원에게 발행된 로열티 포인트·마일 중 결코 상환되지 않을 것으로 프로그램이 예상하는 비율의 추정치이다. 상환될 것으로 예상되는 포인트만 이연 의무로 인식하면 되므로, 브레이키지는 로열티 프로그램 부채 회계의 핵심 입력값이다.'
longDef: 'Under revenue-recognition standards (IFRS 15 and ASC 606), points awarded with a sale are a separate performance obligation, and a portion of consideration is deferred until the points are redeemed or expire. The expected breakage rate lets the issuer recognize the value of points it does not expect to be redeemed in proportion to the pattern of actual redemptions, rather than holding the full liability. Estimating breakage relies on historical redemption behavior, expiry policies, and member tier mix, and is periodically re-estimated; transfers in from a Transfer Partner and changes in redemption demand can shift it. Breakage is a financial/actuarial estimate distinct from the operational acts of Mileage Accrual and Award Redemption.'
longDef_ko: '수익 인식 기준(IFRS 15 및 ASC 606)에 따라, 판매와 함께 부여된 포인트는 별도의 수행 의무(performance obligation)이며, 거래 대가의 일부는 포인트가 상환되거나 소멸될 때까지 이연된다. 예상 브레이키지율을 이용하면 발행자는 상환되지 않을 것으로 예상하는 포인트의 가치를, 전체 부채를 계속 보유하는 대신 실제 상환 패턴에 비례하여 인식할 수 있다. 브레이키지 추정은 과거 상환 행태, 소멸 정책, 회원 등급 구성에 의존하며 주기적으로 재추정된다. Transfer Partner로부터의 유입과 상환 수요 변화가 이를 이동시킬 수 있다. 브레이키지는 Mileage Accrual·Award Redemption이라는 운영 행위와 구별되는 재무·계리적 추정치이다.'
aliases:
  - Breakage
  - Loyalty Breakage
  - Points Breakage
  - Spoilage
relationships:
  - type: related
    targetTerm: Mileage Accrual
  - type: related
    targetTerm: Award Redemption
  - type: related
    targetTerm: Frequent Flyer Program
  - type: related
    targetTerm: Transfer Partner
distinctions:
  - targetTerm: Award Redemption
    explanation: Award Redemption is the act of a member spending points for a reward; Breakage is the accounting estimate of the points that will never be redeemed at all.
    explanation_ko: 'Award Redemption은 회원이 포인트를 보상으로 사용하는 행위이고, Breakage는 결코 상환되지 않을 포인트에 대한 회계 추정치이다.'
  - targetTerm: Mileage Accrual
    explanation: Mileage Accrual increases a member's balance and the program's liability; Breakage reduces the recognized liability by the share of that balance expected to expire unused.
    explanation_ko: 'Mileage Accrual은 회원 잔액과 프로그램 부채를 늘리고, Breakage는 미사용 소멸이 예상되는 잔액 비율만큼 인식 부채를 줄인다.'
sources:
  - name: A Professional's Guide to Loyalty Program Liability
    org: Loyalty/accounting advisory
    version: ''
    section: ''
    url: ''
  - name: What CFOs Need to Know About Loyalty Program Liability in 2026
    org: Loyalty/accounting advisory
    version: ''
    section: ''
    url: ''
  - name: Revenue from Contracts with Customers (IFRS 15) / Revenue from Contracts with Customers (ASC 606)
    org: IASB / FASB
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="24" r="15"/><path d="M24 9v6M24 33v6M9 24h6M33 24h6"/><path d="M18 18l5 6-5 6M30 18l-2 6 2 6" stroke-dasharray="3 3"/></svg>
---

> The estimated proportion of loyalty points or miles issued to members that the program expects will never be redeemed. Breakage is a central input to loyalty-program liability accounting, because only the points expected to be redeemed need be recognized as a deferred obligation.

Under revenue-recognition standards (IFRS 15 and ASC 606), points awarded with a sale are a separate performance obligation, and a portion of consideration is deferred until the points are redeemed or expire. The expected breakage rate lets the issuer recognize the value of points it does not expect to be redeemed in proportion to the pattern of actual redemptions, rather than holding the full liability. Estimating breakage relies on historical redemption behavior, expiry policies, and member tier mix, and is periodically re-estimated; transfers in from a Transfer Partner and changes in redemption demand can shift it. Breakage is a financial/actuarial estimate distinct from the operational acts of Mileage Accrual and Award Redemption.

**한국어 / Korean** — **브레이키지 (미상환 추정분)** — 회원에게 발행된 로열티 포인트·마일 중 결코 상환되지 않을 것으로 프로그램이 예상하는 비율의 추정치이다. 상환될 것으로 예상되는 포인트만 이연 의무로 인식하면 되므로, 브레이키지는 로열티 프로그램 부채 회계의 핵심 입력값이다.

수익 인식 기준(IFRS 15 및 ASC 606)에 따라, 판매와 함께 부여된 포인트는 별도의 수행 의무(performance obligation)이며, 거래 대가의 일부는 포인트가 상환되거나 소멸될 때까지 이연된다. 예상 브레이키지율을 이용하면 발행자는 상환되지 않을 것으로 예상하는 포인트의 가치를, 전체 부채를 계속 보유하는 대신 실제 상환 패턴에 비례하여 인식할 수 있다. 브레이키지 추정은 과거 상환 행태, 소멸 정책, 회원 등급 구성에 의존하며 주기적으로 재추정된다. Transfer Partner로부터의 유입과 상환 수요 변화가 이를 이동시킬 수 있다. 브레이키지는 Mileage Accrual·Award Redemption이라는 운영 행위와 구별되는 재무·계리적 추정치이다.

**Aliases:** `Breakage`, `Loyalty Breakage`, `Points Breakage`, `Spoilage`

# Related
- [Mileage Accrual](/common/customer/mileage-accrual.md) — related
- [Award Redemption](/common/customer/award-redemption.md) — related
- [Frequent Flyer Program](/common/customer/frequent-flyer-program.md) — related
- [Transfer Partner](/common/customer/transfer-partner.md) — related

# Distinctions
- **Breakage** vs [Award Redemption](/common/customer/award-redemption.md) — Award Redemption is the act of a member spending points for a reward; Breakage is the accounting estimate of the points that will never be redeemed at all.
- **Breakage** vs [Mileage Accrual](/common/customer/mileage-accrual.md) — Mileage Accrual increases a member's balance and the program's liability; Breakage reduces the recognized liability by the share of that balance expected to expire unused.

# Citations
[1] Loyalty/accounting advisory — A Professional's Guide to Loyalty Program Liability
[2] Loyalty/accounting advisory — What CFOs Need to Know About Loyalty Program Liability in 2026
[3] IASB / FASB — Revenue from Contracts with Customers (IFRS 15) / Revenue from Contracts with Customers (ASC 606)
