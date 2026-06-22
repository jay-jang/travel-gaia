---
type: Standard Term
title: Cancel For Any Reason (CFAR)
description: 'Cancel For Any Reason (CFAR) is an optional travel-insurance upgrade that lets a traveler cancel for reasons not named in the base policy and still recover part of their prepaid costs, typically 50-75% of the insured trip cost. It is a flexibility product sold both as an insurance rider and, in merchant/fintech form, as a non-insurance cancellation benefit.'
tags:
  - insurance
  - active
timestamp: '2026-06-17T00:00:00Z'
id: cancel-for-any-reason-cfar
vertical: common
category: insurance
conceptType: standard-term
status: active
abbreviation: CFAR
term_ko: 사유 불문 취소 특약(CFAR)
definition_ko: 'Cancel For Any Reason(CFAR, 사유 불문 취소)은 기본 약관에 열거되지 않은 사유로도 취소하고 선결제 비용의 일부(보통 부보 여행비용의 50~75%)를 돌려받을 수 있게 해주는 여행보험 선택 특약이다. 보험 특약으로도, 머천트/핀테크 형태의 비보험 취소 혜택으로도 판매되는 ''유연성'' 상품이다.'
longDef: 'CFAR removes the named-peril restriction of standard trip cancellation but does so with strict conditions: it must usually be purchased within a short window of the initial trip deposit (commonly 10-21 days), it requires insuring 100% of prepaid non-refundable trip cost, the trip must typically be cancelled at least 48-72 hours before departure, and it reimburses only a partial percentage (50% or 75%). Because it is the only way to recover money for unlisted reasons (fear of travel, change of plans), it is a signature add-on; merchant-of-record platforms sell a functionally similar ''CFAR'' as an ancillary refund product outside insurance regulation.'
longDef_ko: 'CFAR은 기본 Trip Cancellation의 열거 위험 제한을 없애지만 엄격한 조건이 따른다. 보통 최초 예약금 결제 후 짧은 기간(흔히 10~21일) 내에 가입해야 하고, 환불 불가 선결제 비용의 100%를 부보해야 하며, 통상 출발 48~72시간 전까지 취소해야 하고, 일부 비율(50% 또는 75%)만 보상한다. 열거되지 않은 사유(여행 불안, 단순 변심)로 돈을 돌려받을 수 있는 유일한 방법이어서 대표적인 추가 특약이며, Merchant of Record 플랫폼은 기능적으로 유사한 ''CFAR''을 보험 규제 밖의 부가 환불 상품으로 판매한다.'
aliases:
  - Cancel For Any Reason
  - CFAR Coverage
  - CFAR Upgrade
providerTerms:
  - provider: Hopper (HTS)
    term: Cancel For Any Reason
    context: Hopper sells a merchant CFAR product where the platform itself refunds the booking rather than an insurer paying a claim.
    context_ko: Hopper는 보험사가 클레임을 지급하는 대신 플랫폼 자체가 예약을 환불하는 머천트형 CFAR 상품을 판매한다.
    relationship: narrower
relationships:
  - type: contrasts
    targetTerm: Trip Cancellation
  - type: child
    targetTerm: Comprehensive Travel Insurance
  - type: contrasts
    targetTerm: Merchant Cancellation Protection
  - type: contrasts
    targetTerm: Cancellation Fee Waiver
distinctions:
  - targetTerm: Trip Cancellation
    explanation: 'Base trip cancellation pays 100% but only for named reasons; CFAR pays a partial percentage (50-75%) for any reason, and exists only as a paid upgrade on top of cancellation coverage.'
    explanation_ko: '기본 Trip Cancellation은 열거 사유에 대해 100%를 지급하고, CFAR은 사유 불문으로 일부(50~75%)를 지급하며 취소 보장 위에 얹는 유료 특약으로만 존재한다.'
  - targetTerm: Merchant Cancellation Protection
    explanation: Insurance CFAR is a regulated insurer-paid benefit; a merchant 'Cancel For Any Reason' is a platform's own ancillary refund product that sidesteps insurance regulation despite the similar name.
    explanation_ko: '보험 CFAR은 규제 대상이며 보험사가 지급하는 보장이고, 머천트형 ''Cancel For Any Reason''은 이름은 비슷해도 보험 규제를 우회하는 플랫폼 자체의 부가 환불 상품이다.'
  - targetTerm: Free Look Period
    explanation: 'A free look refunds 100% of the premium itself when you cancel the policy early, before any trip or claim; CFAR keeps the policy in force and pays a partial percentage (50-75%) of prepaid trip cost when you later cancel the trip for a non-covered reason. One unwinds the insurance purchase; the other pays a trip benefit under it.'
    explanation_ko: '프리룩은 여행·클레임 발생 전에 약관을 조기 취소하면 보험료 100%를 환불하고, CFAR은 약관을 유지한 채 이후 비보장 사유로 여행을 취소할 때 선결제 여행비용의 일부(50~75%)를 지급한다. 하나는 보험 구매 자체를 되돌리고, 다른 하나는 그 약관 하의 여행 보장을 지급한다.'
  - targetTerm: Pre-Existing Condition Waiver
    explanation: 'Both are early-purchase upgrades, but a pre-existing condition waiver makes covered-reason claims from a prior medical condition eligible, whereas CFAR lets you cancel for reasons the policy does not cover at all (for a partial refund).'
    explanation_ko: '둘 다 조기 가입 특약이지만, 기왕증 면제는 기존 질환으로 인한 ''보장 사유'' 클레임을 보장 대상으로 만들고, CFAR은 약관이 아예 보장하지 않는 사유로 (부분 환불을 받고) 취소할 수 있게 한다.'
sources:
  - name: 'Insurance Topics: Travel Insurance'
    org: NAIC
    version: ''
    section: ''
    url: 'https://content.naic.org/insurance-topics/travel-insurance'
  - name: Cancel for Any Reason (CFAR) Trip Insurance
    org: Progressive
    version: ''
    section: ''
    url: 'https://www.progressive.com/answers/cancel-for-any-reason-travel-insurance/'
icon: '<svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M38 24 a14 14 0 1 1 -4.1 -9.9"/><polyline points="38,8 38,16 30,16"/><line x1="18" y1="19" x2="30" y2="31"/><line x1="30" y1="19" x2="18" y2="31"/></svg>'
---

> Cancel For Any Reason (CFAR) is an optional travel-insurance upgrade that lets a traveler cancel for reasons not named in the base policy and still recover part of their prepaid costs, typically 50-75% of the insured trip cost. It is a flexibility product sold both as an insurance rider and, in merchant/fintech form, as a non-insurance cancellation benefit.

CFAR removes the named-peril restriction of standard trip cancellation but does so with strict conditions: it must usually be purchased within a short window of the initial trip deposit (commonly 10-21 days), it requires insuring 100% of prepaid non-refundable trip cost, the trip must typically be cancelled at least 48-72 hours before departure, and it reimburses only a partial percentage (50% or 75%). Because it is the only way to recover money for unlisted reasons (fear of travel, change of plans), it is a signature add-on; merchant-of-record platforms sell a functionally similar 'CFAR' as an ancillary refund product outside insurance regulation.

**한국어 / Korean** — **사유 불문 취소 특약(CFAR)** — Cancel For Any Reason(CFAR, 사유 불문 취소)은 기본 약관에 열거되지 않은 사유로도 취소하고 선결제 비용의 일부(보통 부보 여행비용의 50~75%)를 돌려받을 수 있게 해주는 여행보험 선택 특약이다. 보험 특약으로도, 머천트/핀테크 형태의 비보험 취소 혜택으로도 판매되는 '유연성' 상품이다.

CFAR은 기본 Trip Cancellation의 열거 위험 제한을 없애지만 엄격한 조건이 따른다. 보통 최초 예약금 결제 후 짧은 기간(흔히 10~21일) 내에 가입해야 하고, 환불 불가 선결제 비용의 100%를 부보해야 하며, 통상 출발 48~72시간 전까지 취소해야 하고, 일부 비율(50% 또는 75%)만 보상한다. 열거되지 않은 사유(여행 불안, 단순 변심)로 돈을 돌려받을 수 있는 유일한 방법이어서 대표적인 추가 특약이며, Merchant of Record 플랫폼은 기능적으로 유사한 'CFAR'을 보험 규제 밖의 부가 환불 상품으로 판매한다.

**Aliases:** `Cancel For Any Reason`, `CFAR Coverage`, `CFAR Upgrade`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Hopper (HTS) | `Cancel For Any Reason` | narrower | Hopper sells a merchant CFAR product where the platform itself refunds the booking rather than an insurer paying a claim. |

# Related
- [Trip Cancellation](/common/insurance/trip-cancellation.md) — contrasts
- [Comprehensive Travel Insurance](/common/insurance/comprehensive-travel-insurance.md) — child
- [Merchant Cancellation Protection](/common/insurance/merchant-cancellation-protection.md) — contrasts
- [Cancellation Fee Waiver](/common/insurance/cancellation-fee-waiver.md) — contrasts

# Distinctions
- **Cancel For Any Reason (CFAR)** vs [Trip Cancellation](/common/insurance/trip-cancellation.md) — Base trip cancellation pays 100% but only for named reasons; CFAR pays a partial percentage (50-75%) for any reason, and exists only as a paid upgrade on top of cancellation coverage.
- **Cancel For Any Reason (CFAR)** vs [Merchant Cancellation Protection](/common/insurance/merchant-cancellation-protection.md) — Insurance CFAR is a regulated insurer-paid benefit; a merchant 'Cancel For Any Reason' is a platform's own ancillary refund product that sidesteps insurance regulation despite the similar name.
- **Cancel For Any Reason (CFAR)** vs [Free Look Period](/common/insurance/free-look-period.md) — A free look refunds 100% of the premium itself when you cancel the policy early, before any trip or claim; CFAR keeps the policy in force and pays a partial percentage (50-75%) of prepaid trip cost when you later cancel the trip for a non-covered reason. One unwinds the insurance purchase; the other pays a trip benefit under it.
- **Cancel For Any Reason (CFAR)** vs [Pre-Existing Condition Waiver](/common/insurance/pre-existing-condition-waiver.md) — Both are early-purchase upgrades, but a pre-existing condition waiver makes covered-reason claims from a prior medical condition eligible, whereas CFAR lets you cancel for reasons the policy does not cover at all (for a partial refund).

# Citations
[1] [NAIC — Insurance Topics: Travel Insurance](https://content.naic.org/insurance-topics/travel-insurance)
[2] [Progressive — Cancel for Any Reason (CFAR) Trip Insurance](https://www.progressive.com/answers/cancel-for-any-reason-travel-insurance/)
