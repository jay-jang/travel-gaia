---
type: Business Term
title: Theft Protection
description: 'Theft Protection (TP) is a counter coverage product in car rental that limits or eliminates the renter''s financial liability if the rental vehicle is stolen during the rental period or damaged as a result of an attempted theft. An excess (deductible) typically applies, and coverage is conditional on the renter reporting the theft promptly to both the police and the rental company.'
tags:
  - car
  - active
  - ACRISS
timestamp: '2026-07-05T00:00:00Z'
id: theft-protection-tp
vertical: ground
category: car
conceptType: business-term
status: active
abbreviation: TP
term_ko: '도난 보호(TP, Theft Protection)'
definition_ko: '도난 보호(TP, Theft Protection)는 렌터카 카운터에서 판매되는 보장 상품으로, 렌탈 기간 중 차량이 도난당하거나 도난 시도로 인해 손상된 경우 이용자의 재정적 책임을 제한하거나 면제한다. 통상 자기부담금(excess)이 적용되며, 이용자가 경찰과 렌탈 회사 양쪽에 도난 사실을 즉시 신고해야 보장이 유효하다.'
longDef: 'TP covers the risk of vehicle theft and theft-attempt damage, which are explicitly excluded from a standard Collision Damage Waiver (CDW). In the US and Canadian market, Loss Damage Waiver (LDW) is commonly sold instead, as LDW bundles CDW-equivalent collision protection and TP together. Outside North America, CDW and TP are often sold as separate optional products, so a renter purchasing only CDW would remain liable for vehicle theft. TP does not cover personal belongings left inside the vehicle (addressed by personal-effects coverage), third-party liability (covered by Supplemental Liability Insurance), or personal injury. Coverage is voided by breaches such as leaving keys in the car, failure to secure the vehicle, or unauthorized drivers. ACRISS standardises TP as a distinct coverage category in its abbrevation and coverage documentation so it can be compared across rental suppliers.'
longDef_ko: 'TP는 표준 CDW에서 명시적으로 제외되는 차량 도난 및 도난 시도로 인한 손상 위험을 커버한다. 미국·캐나다 시장에서는 충돌 손해 면책(CDW)과 TP를 묶은 Loss Damage Waiver(LDW)가 주로 판매된다. 북미 이외 지역에서는 CDW와 TP가 별도 선택 상품으로 판매되는 경우가 많아, CDW만 구매한 이용자는 차량 도난에 대한 책임이 남는다. TP는 차량 내 유류품(개인 소지품 보장 별도), 제3자 배상책임(SLI로 보장), 신체 상해를 커버하지 않는다. 차량 내 키를 두거나, 차량 잠금을 해태하거나, 무단 운전자가 운전한 경우 보장이 무효가 된다. ACRISS는 TP를 임차인이 공급사 간 비교할 수 있도록 약칭·보장 설명서에서 별도 보장 범주로 표준화하고 있다.'
standardBody: ACRISS
aliases:
  - Theft Protection
  - TP
  - Theft Waiver
  - Theft and Vandalism Protection
providerTerms:
  - provider: Hertz
    term: Theft Protection (TP)
    context: Hertz offers TP as a named counter product; coverage applies to the rented vehicle if stolen and covers theft-attempt damage subject to a deductible and reporting conditions.
    context_ko: Hertz는 TP를 명시된 카운터 상품으로 제공하며, 도난 시 대여 차량에 적용되고 자기부담금 및 신고 조건 하에 도난 시도 손상을 보장한다.
    relationship: same
  - provider: US/Canada market
    term: Loss Damage Waiver (LDW)
    context: 'In the US and Canada, LDW bundles collision damage and theft protection into a single product, effectively replacing standalone TP.'
    context_ko: '미국·캐나다에서는 LDW가 충돌 손해와 도난 보호를 단일 상품으로 묶어 단독 TP를 사실상 대체한다.'
    relationship: broader
  - provider: OpenTravel (OTA)
    term: VCT code 'TP'
    context: The OpenTravel Vehicle Coverage Type (VCT) code list assigns TP its own code so rental suppliers and aggregators can exchange theft coverage information consistently.
    context_ko: 'OpenTravel VCT(Vehicle Coverage Type) 코드 리스트는 TP에 별도 코드를 부여하여 렌탈 공급사와 애그리게이터가 도난 보장 정보를 일관되게 교환할 수 있도록 한다.'
    relationship: same
relationships:
  - type: narrower
    targetTerm: Loss Damage Waiver
  - type: contrasts
    targetTerm: Collision Damage Waiver
  - type: related
    targetTerm: Excess
  - type: related
    targetTerm: Supplemental Liability Insurance
distinctions:
  - targetTerm: Collision Damage Waiver
    explanation: 'CDW covers damage to the rental vehicle caused by collision or accident; TP covers loss of the vehicle by theft or damage caused during a theft attempt. Theft is explicitly excluded from CDW, so a renter buying only CDW remains exposed to theft risk.'
    explanation_ko: 'CDW는 충돌·사고로 인한 대여 차량 손상을 보장하고, TP는 도난으로 인한 차량 분실이나 도난 시도 중 발생한 손상을 보장한다. 도난은 CDW에서 명시적으로 제외되므로, CDW만 구매한 이용자는 도난 위험에 노출된다.'
  - targetTerm: Loss Damage Waiver
    explanation: 'LDW is the North American composite product that bundles collision (CDW-equivalent) and theft (TP-equivalent) protection into a single waiver; TP is the standalone theft-only coverage sold separately in most non-North-American markets.'
    explanation_ko: 'LDW는 충돌(CDW 해당)과 도난(TP 해당) 보호를 단일 면책으로 묶은 북미 복합 상품이고, TP는 북미 외 대부분 시장에서 별도로 판매되는 도난 전용 단독 보장이다.'
  - targetTerm: Excess
    explanation: 'TP sets the overall protection regime (theft is covered, not the renter''s problem); the excess is the carve-out from that protection — the amount the renter still owes even when TP is in place.'
    explanation_ko: 'TP는 전체 보호 범위를 설정하고(도난은 보장되어 이용자 부담이 아님), excess는 그 보호에서 떼어낸 예외, 즉 TP가 있어도 이용자가 여전히 부담하는 금액이다.'
sources:
  - name: Coverages and Insurances — Theft Protection (TP)
    org: ACRISS — The Association of Car Rental Industry System Standards
    version: ''
    section: ''
    url: 'https://www.acriss.org/car-rental/coverages-and-insurances/'
    tier: association
  - name: Theft Protection (TP) policy detail
    org: Hertz
    version: ''
    section: ''
    url: 'https://www.hertz.com/rentacar/reservation/policy/policy-detail/enGB/DUBT52/TP'
    tier: vendor-doc
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="12" y="20" width="24" height="20" rx="3"/><path d="M18 20v-6a6 6 0 0 1 12 0v6"/><line x1="24" y1="28" x2="24" y2="34"/><circle cx="24" cy="27" r="2" fill="currentColor"/></svg>
---

> Theft Protection (TP) is a counter coverage product in car rental that limits or eliminates the renter's financial liability if the rental vehicle is stolen or damaged in a theft attempt. An excess typically applies, and coverage requires prompt reporting to police and the rental company.

TP covers risks explicitly excluded from a standard Collision Damage Waiver (CDW): vehicle theft and theft-attempt damage. In North America, the composite Loss Damage Waiver (LDW) bundles both CDW and TP into one product. Outside North America, CDW and TP are typically sold separately — a renter buying only CDW remains exposed to theft risk. TP does not cover personal belongings, third-party liability, or personal injury. Coverage is voided if keys are left in the vehicle, the vehicle is left unsecured, or an unauthorized driver operates it.

ACRISS standardises TP as a distinct coverage category so it can be compared across rental suppliers.

**한국어 / Korean** — **도난 보호(TP, Theft Protection)** — 렌탈 기간 중 차량이 도난당하거나 도난 시도로 손상된 경우 이용자의 재정적 책임을 제한하거나 면제하는 렌터카 카운터 보장 상품이다. 통상 자기부담금이 적용되며 경찰·렌탈사 즉시 신고가 보장 조건이다.

**Aliases:** `Theft Protection`, `TP`, `Theft Waiver`, `Theft and Vandalism Protection`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Hertz | `Theft Protection (TP)` | same | Named counter product; covers theft and theft-attempt damage subject to deductible and reporting |
| US/Canada market | `Loss Damage Waiver (LDW)` | broader | LDW bundles collision and theft protection, replacing standalone TP |
| OpenTravel (OTA) | `VCT code 'TP'` | same | VCT code standardises theft coverage exchange between suppliers and aggregators |

# Related
- [Loss Damage Waiver](/ground/car/loss-damage-waiver.md) — narrower
- [Collision Damage Waiver](/ground/car/collision-damage-waiver.md) — contrasts
- [Excess](/ground/car/excess.md) — related
- [Supplemental Liability Insurance](/ground/car/supplemental-liability-insurance.md) — related

# Distinctions
- **Theft Protection (TP)** vs [Collision Damage Waiver](/ground/car/collision-damage-waiver.md) — CDW covers collision/accident damage; TP covers theft and theft-attempt damage. Theft is excluded from CDW, leaving the renter exposed without TP.
- **Theft Protection (TP)** vs [Loss Damage Waiver](/ground/car/loss-damage-waiver.md) — LDW bundles collision and theft into one North American product; TP is the standalone theft-only coverage sold separately in most non-North-American markets.
- **Theft Protection (TP)** vs [Excess](/ground/car/excess.md) — TP sets the protection regime (theft covered); the excess is the amount still owed by the renter even when TP is in place.

# Citations
[1] [ACRISS — Coverages and Insurances — Theft Protection (TP)](https://www.acriss.org/car-rental/coverages-and-insurances/)
[2] [Hertz — Theft Protection (TP) policy detail](https://www.hertz.com/rentacar/reservation/policy/policy-detail/enGB/DUBT52/TP)
