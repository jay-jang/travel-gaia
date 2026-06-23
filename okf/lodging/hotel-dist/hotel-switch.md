---
type: Business Term
title: Hotel Switch
description: 'A hotel switch is a technical pass-through intermediary that connects a hotel''s CRS or PMS to many distribution channels (GDSs, OTAs, wholesalers, metasearch) through a single integration, translating and routing availability, rate, and inventory (ARI) messages and reservation traffic between the two sides. The switch is purely technical: it routes data without owning inventory, setting rates, or applying its own business rules.'
tags:
  - hotel-dist
  - active
timestamp: '2026-06-17T00:00:00Z'
id: hotel-switch
vertical: lodging
category: hotel-dist
conceptType: business-term
status: active
term_ko: 호텔 스위치 (Hotel Switch)
definition_ko: '호텔 스위치는 호텔의 CRS 또는 PMS를 단일 연동으로 다수의 유통 채널(GDS, OTA, 도매업체, 메타서치)에 연결하는 기술적 중계(pass-through) 매개체로, 양측 사이에서 ARI(가용성·요금·재고) 메시지와 예약 트래픽을 변환·라우팅한다. 스위치는 순수하게 기술적 역할만 수행하며, 재고를 보유하거나 요금을 설정하거나 자체 비즈니스 규칙을 적용하지 않는다.'
longDef: 'A switch (also called a hub or connectivity provider) solves the many-to-many integration problem in hotel distribution. Instead of each hotel CRS building and maintaining a bespoke interface to every demand channel, both sides connect once to the switch, which normalizes message formats and protocols between them. Switches typically operate in a real-time pull or two-way push model: ARI updates flow outbound to channels and booking/modification/cancellation messages flow back to the CRS/PMS. They generally do not cache or own inventory, do not contract rates, and add no commercial markup, which distinguishes them from bedbanks and OTAs. Historic and current providers include DHISCO (the former Pegasus/WizCom switch, acquired by RateGain) and DerbySoft. Switches commonly implement OpenTravel and HTNG XML messaging on the demand side.'
longDef_ko: '스위치(허브 또는 connectivity provider라고도 함)는 호텔 유통의 다대다(many-to-many) 연동 문제를 해결한다. 각 호텔 CRS가 모든 수요 채널마다 개별 인터페이스를 구축·유지하는 대신, 양측이 스위치에 한 번만 연결하면 스위치가 메시지 포맷과 프로토콜을 표준화한다. 스위치는 보통 실시간 pull 또는 양방향(push) 모델로 동작하여, ARI 업데이트는 채널로 나가고 예약·변경·취소 메시지는 CRS/PMS로 돌아온다. 일반적으로 재고를 캐싱하거나 보유하지 않고, 요금을 계약하지 않으며, 자체 마진을 붙이지 않는다는 점에서 Bedbank나 OTA와 구별된다. 대표 사업자로는 DHISCO(구 Pegasus/WizCom 스위치, RateGain 인수)와 DerbySoft가 있다. 스위치는 수요 측에서 OpenTravel 및 HTNG XML 메시징을 구현하는 경우가 많다.'
aliases:
  - Switch
  - Distribution Switch
  - Connectivity Hub
  - Hub
providerTerms:
  - provider: RateGain (DHISCO)
    term: DHISCO Switch
    context: Legacy Pegasus/WizCom distribution switch connecting hotel CRSs to GDS and OTA demand channels.
    context_ko: 호텔 CRS를 GDS 및 OTA 수요 채널에 연결하는 레거시 Pegasus/WizCom 유통 스위치.
    relationship: same
  - provider: DerbySoft
    term: Connectivity Services / Property Connector
    context: Connectivity platform routing real-time ARI and reservations between hotel CRS/PMS and distributors.
    context_ko: 호텔 CRS/PMS와 유통업체 사이에서 실시간 ARI 및 예약을 라우팅하는 커넥티비티 플랫폼.
    relationship: same
relationships:
  - type: related
    targetTerm: Channel Manager
  - type: related
    targetTerm: CRS
  - type: related
    targetTerm: ARI
  - type: related
    targetTerm: Two-Way XML
  - type: related
    targetTerm: GDS
  - type: contrasts
    targetTerm: Bedbank
distinctions:
  - targetTerm: Channel Manager
    explanation: A channel manager is the hotel-side tool a single property uses to manage its rates and inventory across channels; a switch is the neutral many-to-many routing layer that connects CRS/PMS systems to large distribution networks. Channel managers often connect to channels via switches.
    explanation_ko: '채널 매니저는 개별 호텔이 채널 전반에 걸쳐 요금·재고를 관리하는 호텔 측 도구이고, 스위치는 CRS/PMS를 대규모 유통망에 연결하는 중립적 다대다 라우팅 계층이다. 채널 매니저는 종종 스위치를 통해 채널에 연결된다.'
  - targetTerm: Bedbank
    explanation: 'A bedbank buys and resells hotel inventory at net rates, taking a commercial position; a switch never owns inventory or sets prices and only transports messages.'
    explanation_ko: 'Bedbank은 net rate로 호텔 재고를 사들여 재판매하며 상업적 포지션을 취하지만, 스위치는 재고를 보유하거나 가격을 설정하지 않고 메시지만 전달한다.'
sources:
  - org: AltexSoft
    name: Switch (travel technology) — Glossary
    version: ''
    section: ''
    url: 'https://www.altexsoft.com/glossary/switch-travel-technology/'
    tier: secondary
  - org: DerbySoft
    name: Connectivity Services / Property Connector
    version: ''
    section: ''
    url: 'https://www.derbysoft.com/property-connector/'
    tier: vendor-doc
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="18" y="19" width="12" height="10" rx="2"/><line x1="6" y1="12" x2="18" y2="21"/><line x1="6" y1="24" x2="18" y2="24"/><line x1="6" y1="36" x2="18" y2="27"/><line x1="42" y1="12" x2="30" y2="21"/><line x1="42" y1="24" x2="30" y2="24"/><line x1="42" y1="36" x2="30" y2="27"/><circle cx="6" cy="12" r="2"/><circle cx="6" cy="24" r="2"/><circle cx="6" cy="36" r="2"/><circle cx="42" cy="12" r="2"/><circle cx="42" cy="24" r="2"/><circle cx="42" cy="36" r="2"/></svg>
---

> A hotel switch is a technical pass-through intermediary that connects a hotel's CRS or PMS to many distribution channels (GDSs, OTAs, wholesalers, metasearch) through a single integration, translating and routing availability, rate, and inventory (ARI) messages and reservation traffic between the two sides. The switch is purely technical: it routes data without owning inventory, setting rates, or applying its own business rules.

A switch (also called a hub or connectivity provider) solves the many-to-many integration problem in hotel distribution. Instead of each hotel CRS building and maintaining a bespoke interface to every demand channel, both sides connect once to the switch, which normalizes message formats and protocols between them. Switches typically operate in a real-time pull or two-way push model: ARI updates flow outbound to channels and booking/modification/cancellation messages flow back to the CRS/PMS. They generally do not cache or own inventory, do not contract rates, and add no commercial markup, which distinguishes them from bedbanks and OTAs. Historic and current providers include DHISCO (the former Pegasus/WizCom switch, acquired by RateGain) and DerbySoft. Switches commonly implement OpenTravel and HTNG XML messaging on the demand side.

**한국어 / Korean** — **호텔 스위치 (Hotel Switch)** — 호텔 스위치는 호텔의 CRS 또는 PMS를 단일 연동으로 다수의 유통 채널(GDS, OTA, 도매업체, 메타서치)에 연결하는 기술적 중계(pass-through) 매개체로, 양측 사이에서 ARI(가용성·요금·재고) 메시지와 예약 트래픽을 변환·라우팅한다. 스위치는 순수하게 기술적 역할만 수행하며, 재고를 보유하거나 요금을 설정하거나 자체 비즈니스 규칙을 적용하지 않는다.

스위치(허브 또는 connectivity provider라고도 함)는 호텔 유통의 다대다(many-to-many) 연동 문제를 해결한다. 각 호텔 CRS가 모든 수요 채널마다 개별 인터페이스를 구축·유지하는 대신, 양측이 스위치에 한 번만 연결하면 스위치가 메시지 포맷과 프로토콜을 표준화한다. 스위치는 보통 실시간 pull 또는 양방향(push) 모델로 동작하여, ARI 업데이트는 채널로 나가고 예약·변경·취소 메시지는 CRS/PMS로 돌아온다. 일반적으로 재고를 캐싱하거나 보유하지 않고, 요금을 계약하지 않으며, 자체 마진을 붙이지 않는다는 점에서 Bedbank나 OTA와 구별된다. 대표 사업자로는 DHISCO(구 Pegasus/WizCom 스위치, RateGain 인수)와 DerbySoft가 있다. 스위치는 수요 측에서 OpenTravel 및 HTNG XML 메시징을 구현하는 경우가 많다.

**Aliases:** `Switch`, `Distribution Switch`, `Connectivity Hub`, `Hub`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| RateGain (DHISCO) | `DHISCO Switch` | same | Legacy Pegasus/WizCom distribution switch connecting hotel CRSs to GDS and OTA demand channels. |
| DerbySoft | `Connectivity Services / Property Connector` | same | Connectivity platform routing real-time ARI and reservations between hotel CRS/PMS and distributors. |

# Related
- [Channel Manager](/lodging/hotel-dist/channel-manager.md) — related
- [CRS](/lodging/hotel-dist/crs.md) — related
- [ARI](/lodging/hotel-dist/ari.md) — related
- [Two-Way XML](/lodging/hotel-dist/two-way-xml.md) — related
- [GDS](/common/standards/gds.md) — related
- [Bedbank](/lodging/hotel-dist/bedbank.md) — contrasts

# Distinctions
- **Hotel Switch** vs [Channel Manager](/lodging/hotel-dist/channel-manager.md) — A channel manager is the hotel-side tool a single property uses to manage its rates and inventory across channels; a switch is the neutral many-to-many routing layer that connects CRS/PMS systems to large distribution networks. Channel managers often connect to channels via switches.
- **Hotel Switch** vs [Bedbank](/lodging/hotel-dist/bedbank.md) — A bedbank buys and resells hotel inventory at net rates, taking a commercial position; a switch never owns inventory or sets prices and only transports messages.

# Citations
[1] [AltexSoft — Switch (travel technology) — Glossary](https://www.altexsoft.com/glossary/switch-travel-technology/)
[2] [DerbySoft — Connectivity Services / Property Connector](https://www.derbysoft.com/property-connector/)
