---
type: Role
title: Merchant of Record
description: 'The Merchant of Record is the legal entity that accepts the customer''s payment and is responsible for processing the card transaction, including tax handling, refunds, and chargeback liability. In travel, the MoR is the name that appears on the customer''s card statement for a booking.'
tags:
  - pay
  - active
timestamp: '2026-06-17T00:00:00Z'
id: merchant-of-record
vertical: common
category: pay
conceptType: role
status: active
abbreviation: MoR
term_ko: '기록상 가맹점(Merchant of Record, MoR)'
definition_ko: '기록상 가맹점(Merchant of Record, MoR)은 고객의 결제를 수납하고 세금 처리, 환불, 차지백 책임을 포함한 카드 거래 처리를 담당하는 법적 주체다. 여행 업계에서 MoR은 예약 건에 대해 고객의 카드 명세서에 표시되는 명의다.'
longDef: 'Whether the supplier or the intermediary is the MoR depends on the distribution model. Under the agency model the supplier is the MoR; under the merchant model the OTA or agency is the MoR, collecting payment from the traveler and remitting suppliers their share. Being the MoR carries compliance obligations (PCI DSS, SCA/3-D Secure where applicable) and the financial liability for disputes and chargebacks.'
longDef_ko: '공급업체와 중개업체 중 누가 MoR이 되는지는 유통 모델에 따라 달라진다. 에이전시 모델에서는 공급업체가 MoR이고, 머천트 모델에서는 OTA 또는 여행사가 MoR이 되어 여행객으로부터 결제를 수납하고 공급업체에 해당 몫을 송금한다. MoR이 된다는 것은 규정 준수 의무(PCI DSS, 해당되는 경우 SCA/3-D Secure)와 분쟁 및 차지백에 대한 재무적 책임을 수반한다.'
aliases:
  - MoR
  - Merchant on Record
relationships:
  - type: contrasts
    targetTerm: Agency Model
  - type: contrasts
    targetTerm: Merchant Model
  - type: related
    targetTerm: Chargeback
  - type: related
    targetTerm: OTA (Online Travel Agency)
distinctions:
  - targetTerm: Agency Model
    explanation: 'In the agency model the supplier is the Merchant of Record; the role describes who bears payment responsibility, not the commercial model itself.'
    explanation_ko: 에이전시 모델에서는 공급업체가 Merchant of Record이다. 이 역할은 상업적 모델 자체가 아니라 결제 책임을 누가 지는지를 나타낸다.
  - targetTerm: Merchant Model
    explanation: In the merchant model the intermediary becomes the Merchant of Record and shows on the cardholder's statement.
    explanation_ko: 머천트 모델에서는 중개업체가 Merchant of Record가 되어 카드 소지자의 명세서에 표시된다.
  - targetTerm: Acquirer
    explanation: 'The acquirer is the bank that processes and settles card transactions; the Merchant of Record is the legal seller responsible to the cardholder for the sale, which contracts with an acquirer but is not itself one.'
    explanation_ko: 'Acquirer는 카드 거래를 처리·정산하는 은행이고, Merchant of Record는 판매에 대해 카드 소지자에게 책임지는 법적 판매자로서 매입사와 계약하지만 그 자신이 매입사는 아니다.'
sources:
  - name: 'Merchant of Record in Travel: OTA''s Guide to Owning the Payment Flow'
    org: AltexSoft
    version: ''
    section: ''
    url: 'https://www.altexsoft.com/blog/merchant-of-record-in-travel/'
    tier: secondary
  - name: 'Merchant model vs. agency model: A guide for business success'
    org: WEX Inc.
    version: ''
    section: ''
    url: 'https://www.wexinc.com/resources/blog/merchant-vs-agency-model-travel-payments/'
    tier: secondary
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M8 18 11 9h26l3 9"/><path d="M8 18a4 4 0 0 0 8 0 4 4 0 0 0 8 0 4 4 0 0 0 8 0 4 4 0 0 0 8 0"/><path d="M11 21v18h26V21"/><path d="M19 30l3 3 6-6"/></svg>
---

> The Merchant of Record is the legal entity that accepts the customer's payment and is responsible for processing the card transaction, including tax handling, refunds, and chargeback liability. In travel, the MoR is the name that appears on the customer's card statement for a booking.

Whether the supplier or the intermediary is the MoR depends on the distribution model. Under the agency model the supplier is the MoR; under the merchant model the OTA or agency is the MoR, collecting payment from the traveler and remitting suppliers their share. Being the MoR carries compliance obligations (PCI DSS, SCA/3-D Secure where applicable) and the financial liability for disputes and chargebacks.

**한국어 / Korean** — **기록상 가맹점(Merchant of Record, MoR)** — 기록상 가맹점(Merchant of Record, MoR)은 고객의 결제를 수납하고 세금 처리, 환불, 차지백 책임을 포함한 카드 거래 처리를 담당하는 법적 주체다. 여행 업계에서 MoR은 예약 건에 대해 고객의 카드 명세서에 표시되는 명의다.

공급업체와 중개업체 중 누가 MoR이 되는지는 유통 모델에 따라 달라진다. 에이전시 모델에서는 공급업체가 MoR이고, 머천트 모델에서는 OTA 또는 여행사가 MoR이 되어 여행객으로부터 결제를 수납하고 공급업체에 해당 몫을 송금한다. MoR이 된다는 것은 규정 준수 의무(PCI DSS, 해당되는 경우 SCA/3-D Secure)와 분쟁 및 차지백에 대한 재무적 책임을 수반한다.

**Aliases:** `MoR`, `Merchant on Record`

# Related
- [Agency Model](/common/pay/agency-model.md) — contrasts
- [Merchant Model](/common/pay/merchant-model.md) — contrasts
- [Chargeback](/common/pay/chargeback.md) — related
- [OTA (Online Travel Agency)](/common/standards/ota-online-travel-agency.md) — related

# Distinctions
- **Merchant of Record** vs [Agency Model](/common/pay/agency-model.md) — In the agency model the supplier is the Merchant of Record; the role describes who bears payment responsibility, not the commercial model itself.
- **Merchant of Record** vs [Merchant Model](/common/pay/merchant-model.md) — In the merchant model the intermediary becomes the Merchant of Record and shows on the cardholder's statement.
- **Merchant of Record** vs [Acquirer](/common/pay/acquirer.md) — The acquirer is the bank that processes and settles card transactions; the Merchant of Record is the legal seller responsible to the cardholder for the sale, which contracts with an acquirer but is not itself one.

# Citations
[1] [AltexSoft — Merchant of Record in Travel: OTA's Guide to Owning the Payment Flow](https://www.altexsoft.com/blog/merchant-of-record-in-travel/)
[2] [WEX Inc. — Merchant model vs. agency model: A guide for business success](https://www.wexinc.com/resources/blog/merchant-vs-agency-model-travel-payments/)
