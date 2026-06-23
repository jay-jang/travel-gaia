---
type: Business Term
title: Customer Data Platform
description: 'Packaged software that ingests and unifies first-party customer data from disparate operational systems — booking engines, PMS/CRS, loyalty, web/app, and marketing channels — into persistent, individual-level profiles that other systems can query for personalization. In travel retailing it powers real-time offers, segmentation, and consistent recognition of a traveler across touchpoints.'
tags:
  - customer
  - active
timestamp: '2026-06-17T00:00:00Z'
id: customer-data-platform
vertical: common
category: customer
conceptType: business-term
status: active
abbreviation: CDP
term_ko: 고객 데이터 플랫폼 (CDP)
definition_ko: '예약 엔진, PMS/CRS, 로열티, 웹/앱, 마케팅 채널 등 서로 분리된 운영 시스템에서 1차(first-party) 고객 데이터를 수집·통합하여, 다른 시스템이 개인화를 위해 조회할 수 있는 지속적이고 개인 단위의 프로필로 만드는 패키지형 소프트웨어이다. 여행 리테일링에서는 실시간 제안(Offer), 세분화, 그리고 여러 접점에 걸친 일관된 여행자 인식을 구동한다.'
longDef: 'A CDP differs from a generic CRM or data warehouse by being purpose-built to resolve identity and assemble a unified profile from many sources, then activate that profile to downstream channels in real time. Airlines and hotels increasingly position a CDP at the center of their retailing stack so that an Offer Management System and personalization engines can act on a complete, consented view of the customer. The unified profile a CDP produces is typically realized as a Single Customer View, and CDPs must operate within consent rules captured by a Consent Management Platform. "Composable" CDPs implement the same capabilities directly over a cloud data warehouse rather than as a separate datastore.'
longDef_ko: 'CDP는 단순한 CRM이나 데이터 웨어하우스와 달리, 여러 출처로부터 신원을 해소(identity resolution)하고 통합 프로필을 구성한 뒤 이를 실시간으로 하위 채널에 활성화하도록 특화 설계된 점이 다르다. 항공사와 호텔은 CDP를 리테일링 스택의 중심에 두어, Offer Management System과 개인화 엔진이 동의를 받은 완전한 고객 뷰를 기반으로 작동하게 한다. CDP가 만들어내는 통합 프로필은 보통 Single Customer View로 구현되며, CDP는 Consent Management Platform이 수집한 동의 규칙 안에서 운영되어야 한다. ''컴포저블(composable)'' CDP는 별도 저장소가 아니라 클라우드 데이터 웨어하우스 위에서 동일한 기능을 직접 구현한다.'
aliases:
  - CDP
  - Customer Data Platform (CDP)
providerTerms:
  - provider: Salesforce
    term: Data Cloud
    context: 'Salesforce markets its CDP as Data Cloud, unifying customer data across its Marketing/Sales/Service/Commerce clouds into real-time profiles'
    context_ko: Salesforce는 자사 CDP를 Data Cloud로 출시하며 Marketing/Sales/Service/Commerce 전반의 고객 데이터를 실시간 프로파일로 통합한다
    relationship: same
  - provider: Adobe
    term: Real-Time CDP
    context: 'Adobe''s CDP product, Real-Time CDP, ingests streaming data to build real-time customer profiles for B2C experiences'
    context_ko: Adobe의 CDP 제품 Real-Time CDP는 스트리밍 데이터를 수집해 B2C 경험용 실시간 고객 프로파일을 구성한다
    relationship: same
  - provider: Twilio
    term: Segment
    context: Twilio Segment is a developer-oriented CDP known for broad source/destination integrations feeding unified profiles
    context_ko: Twilio Segment는 폭넓은 소스/대상 연동으로 통합 프로파일을 공급하는 개발자 지향 CDP다
    relationship: same
relationships:
  - type: related
    targetTerm: Customer Profile
  - type: narrower
    targetTerm: Single Customer View
  - type: related
    targetTerm: Offer
distinctions:
  - targetTerm: Customer Profile
    explanation: A Customer Profile is the stored record of one traveler's data and preferences in a single system; a CDP is the platform that unifies many such records and source systems into one persistent profile and activates it to other channels.
    explanation_ko: 'Customer Profile은 한 시스템 내에 저장된 한 여행자의 데이터·선호도 기록이고, CDP는 그런 다수의 기록과 원천 시스템을 하나의 지속적 프로필로 통합하여 다른 채널로 활성화하는 플랫폼이다.'
  - targetTerm: Single Customer View
    explanation: A Single Customer View is the unified golden-record output; a CDP is the software that produces and maintains that view and pushes it to operational systems.
    explanation_ko: 'Single Customer View는 통합된 골든 레코드라는 결과물이고, CDP는 그 뷰를 생성·유지하며 운영 시스템으로 전달하는 소프트웨어이다.'
sources:
  - name: CDP for Travel and Hospitality
    org: Industry vendor guidance
    version: ''
    section: ''
    url: 'https://cdp.com/articles/cdp-for-travel/'
    tier: secondary
  - name: 'Composable CDPs for Travel: Personalizing Guest Experiences with AI'
    org: Industry vendor guidance
    version: ''
    section: ''
    url: 'https://www.snowflake.com/en/blog/composable-cdp-travel-hospitality/'
    tier: vendor-doc
  - name: Iberia Powers Next-Level Airline Customer Experience with Real-Time Data and AI
    org: Iberia / vendor case study
    version: ''
    section: ''
    url: 'https://tealium.com/blog/customer-experience/iberia-next-level-airline-customer-experience/'
    tier: vendor-doc
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="10" r="4"/><circle cx="10" cy="24" r="4"/><circle cx="10" cy="38" r="4"/><path d="M14 10h8l6 14M14 24h14M14 38h8l6-14"/><circle cx="34" cy="24" r="7"/><path d="M31 24l2 2 4-4"/></svg>
---

> Packaged software that ingests and unifies first-party customer data from disparate operational systems — booking engines, PMS/CRS, loyalty, web/app, and marketing channels — into persistent, individual-level profiles that other systems can query for personalization. In travel retailing it powers real-time offers, segmentation, and consistent recognition of a traveler across touchpoints.

A CDP differs from a generic CRM or data warehouse by being purpose-built to resolve identity and assemble a unified profile from many sources, then activate that profile to downstream channels in real time. Airlines and hotels increasingly position a CDP at the center of their retailing stack so that an Offer Management System and personalization engines can act on a complete, consented view of the customer. The unified profile a CDP produces is typically realized as a Single Customer View, and CDPs must operate within consent rules captured by a Consent Management Platform. "Composable" CDPs implement the same capabilities directly over a cloud data warehouse rather than as a separate datastore.

**한국어 / Korean** — **고객 데이터 플랫폼 (CDP)** — 예약 엔진, PMS/CRS, 로열티, 웹/앱, 마케팅 채널 등 서로 분리된 운영 시스템에서 1차(first-party) 고객 데이터를 수집·통합하여, 다른 시스템이 개인화를 위해 조회할 수 있는 지속적이고 개인 단위의 프로필로 만드는 패키지형 소프트웨어이다. 여행 리테일링에서는 실시간 제안(Offer), 세분화, 그리고 여러 접점에 걸친 일관된 여행자 인식을 구동한다.

CDP는 단순한 CRM이나 데이터 웨어하우스와 달리, 여러 출처로부터 신원을 해소(identity resolution)하고 통합 프로필을 구성한 뒤 이를 실시간으로 하위 채널에 활성화하도록 특화 설계된 점이 다르다. 항공사와 호텔은 CDP를 리테일링 스택의 중심에 두어, Offer Management System과 개인화 엔진이 동의를 받은 완전한 고객 뷰를 기반으로 작동하게 한다. CDP가 만들어내는 통합 프로필은 보통 Single Customer View로 구현되며, CDP는 Consent Management Platform이 수집한 동의 규칙 안에서 운영되어야 한다. '컴포저블(composable)' CDP는 별도 저장소가 아니라 클라우드 데이터 웨어하우스 위에서 동일한 기능을 직접 구현한다.

**Aliases:** `CDP`, `Customer Data Platform (CDP)`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| Salesforce | `Data Cloud` | same | Salesforce markets its CDP as Data Cloud, unifying customer data across its Marketing/Sales/Service/Commerce clouds into real-time profiles |
| Adobe | `Real-Time CDP` | same | Adobe's CDP product, Real-Time CDP, ingests streaming data to build real-time customer profiles for B2C experiences |
| Twilio | `Segment` | same | Twilio Segment is a developer-oriented CDP known for broad source/destination integrations feeding unified profiles |

# Related
- [Customer Profile](/common/customer/customer-profile.md) — related
- [Single Customer View](/common/customer/single-customer-view.md) — narrower
- [Offer](/common/standards/offer.md) — related

# Distinctions
- **Customer Data Platform** vs [Customer Profile](/common/customer/customer-profile.md) — A Customer Profile is the stored record of one traveler's data and preferences in a single system; a CDP is the platform that unifies many such records and source systems into one persistent profile and activates it to other channels.
- **Customer Data Platform** vs [Single Customer View](/common/customer/single-customer-view.md) — A Single Customer View is the unified golden-record output; a CDP is the software that produces and maintains that view and pushes it to operational systems.

# Citations
[1] [Industry vendor guidance — CDP for Travel and Hospitality](https://cdp.com/articles/cdp-for-travel/)
[2] [Industry vendor guidance — Composable CDPs for Travel: Personalizing Guest Experiences with AI](https://www.snowflake.com/en/blog/composable-cdp-travel-hospitality/)
[3] [Iberia / vendor case study — Iberia Powers Next-Level Airline Customer Experience with Real-Time Data and AI](https://tealium.com/blog/customer-experience/iberia-next-level-airline-customer-experience/)
