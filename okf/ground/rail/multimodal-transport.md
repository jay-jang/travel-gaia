---
type: Business Term
title: Multimodal Transport
description: 'Multimodal transport is the combination of two or more modes — such as rail, bus, air, and micromobility — within a single journey or travel offer. OSDM is explicitly designed to sell trains ''and other modes,'' making multimodal the organizing concept of rail distribution beyond a single carrier or mode.'
tags:
  - rail
  - active
timestamp: '2026-06-17T00:00:00Z'
id: multimodal-transport
vertical: ground
category: rail
conceptType: business-term
status: active
term_ko: 복합운송(Multimodal Transport)
definition_ko: 'Multimodal transport(복합운송)는 단일 여정 또는 여행 오퍼 안에서 철도·버스·항공·마이크로모빌리티 등 둘 이상의 교통수단을 결합하는 것이다. OSDM은 명시적으로 열차 ''및 다른 교통수단''을 함께 판매하도록 설계되어, 복합운송을 단일 운영사·단일 수단을 넘어선 철도 유통의 조직 개념으로 만든다.'
longDef: 'Multimodal transport treats a trip as a chain of segments potentially spanning different modes and operators, requiring distribution standards to combine offers, fares, and fulfillment across them. It is sometimes distinguished from ''intermodal'': in the conventional convention, multimodal denotes several modes covered by a single ticket (passengers) or single contract with one carrier liable for the whole journey (freight), whereas intermodal denotes several modes where each carrier issues its own ticket/contract. In practice, especially in passenger and Mobility-as-a-Service contexts, the two terms are often used interchangeably to describe trips not confined to one mode. Multimodal is the commercial frame that connects rail standards like OSDM to broader Mobility-as-a-Service offerings.'
longDef_ko: '복합운송은 여정을 서로 다른 수단과 운영사를 아우를 수 있는 구간들의 연쇄로 보며, 유통 표준이 이들 전반에 걸쳐 오퍼·운임·발권을 결합하도록 요구한다. 때로 ''intermodal(연계운송)''과 구분되는데, 통상적 구분에 따르면 multimodal은 여러 수단을 하나의 승차권(여객) 또는 한 운송인이 전 구간 책임을 지는 단일 계약(화물)으로 묶는 것을 가리키고, intermodal은 여러 수단을 이용하되 각 운송인이 자기 승차권/계약을 발행하는 것을 가리킨다. 다만 실무에서는, 특히 여객 및 MaaS 맥락에서 두 용어가 단일 수단에 국한되지 않는 여정을 가리키는 말로 흔히 혼용된다. multimodal은 OSDM 같은 철도 표준을 더 넓은 MaaS 제공물과 잇는 상업적 틀이다.'
aliases:
  - Multimodal Travel
  - Multi-modal Transport
providerTerms:
  - provider: CEN (Transmodel / NeTEx / SIRI)
    term: 'Transmodel multimodal data model (NeTEx static, SIRI real-time)'
    context: 'Transmodel is the EU reference data model explicitly designed for multimodality (scheduled, flexible, vehicle-sharing, taxi), implemented as NeTEx for planned data and SIRI for real-time; CER/UITP position OSDM and Transmodel as two complementary multimodal solutions.'
    context_ko: 'Transmodel은 다중 모드(정기·유연·차량공유·택시)를 위해 명시적으로 설계된 EU 참조 데이터 모델로, 정적 데이터는 NeTEx, 실시간은 SIRI로 구현된다. CER/UITP는 OSDM과 Transmodel을 상호보완적 멀티모달 솔루션으로 규정한다.'
    relationship: related
  - provider: Transmodel (OJP)
    term: Open Journey Planner (OJP)
    context: 'OJP is the Transmodel-based API for cross-operator, multimodal journey planning — the distributed query layer that stitches modes together, complementing OSDM''s sales/booking role.'
    context_ko: 'OJP는 운영사 간·다중 모드 여정 계획을 위한 Transmodel 기반 API로, 모드를 연결하는 분산 질의 계층이며 OSDM의 판매·예약 역할을 보완한다.'
    relationship: related
relationships:
  - type: related
    targetTerm: OSDM
  - type: related
    targetTerm: Journey
  - type: related
    targetTerm: Dynamic Packaging
  - type: contrasts
    targetTerm: Through Fare
distinctions:
  - targetTerm: Journey
    explanation: 'A Journey (in air pricing) is the routing structure of one trip, typically single-mode; multimodal transport explicitly spans multiple modes and operators, and is the organizing concept for the Rail & Multimodal category.'
    explanation_ko: '항공 가격 산정의 Journey는 보통 단일 수단인 한 여정의 라우팅 구조이고, multimodal transport는 명시적으로 여러 수단과 운영사를 아우르며 Rail & Multimodal 카테고리의 조직 개념이다.'
  - targetTerm: Dynamic Packaging
    explanation: 'Dynamic packaging bundles travel products (e.g., flight + hotel) into one purchase; multimodal transport specifically chains transport modes into one journey, which packaging may or may not do.'
    explanation_ko: 'dynamic packaging은 여행 상품(예: 항공+호텔)을 하나의 구매로 묶는 것이고, multimodal transport는 구체적으로 교통수단을 하나의 여정으로 연결하는 것으로 패키징이 반드시 이를 포함하지는 않는다.'
  - targetTerm: Mobility as a Service
    explanation: 'Multimodal transport describes a journey physically using more than one mode; MaaS is the digital integration layer that aggregates, plans, books and pays for those modes through one offer — a commercial/technical concept, not just the physical use of several modes.'
    explanation_ko: 'Multimodal transport(복합운송)는 물리적으로 둘 이상의 수단을 사용하는 여정을 가리키고, MaaS는 그 수단들을 하나의 제공으로 묶어 통합·계획·예약·결제하는 디지털 통합 계층으로, 단순히 여러 수단을 물리적으로 사용하는 것이 아니라 상업·기술적 개념이다.'
sources:
  - name: Multimodal vs intermodal (Mobility as a Service explainer)
    org: Industry MaaS literature
    version: ''
    section: ''
    url: ''
    tier: secondary
  - name: Open Sales and Distribution Model (trains and other modes)
    org: UIC
    version: ''
    section: ''
    url: 'https://uic.org/projects-99/osdm'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="10" width="14" height="10" rx="2"/><path d="M8 20l-1 3M18 20l1 3"/><path d="M30 12l8 0 3 6v6h-11z"/><circle cx="33" cy="30" r="3"/><path d="M13 28v8M13 36l-3 3M13 36l3 3M13 28l-4 2M13 28l4 2"/></svg>
---

> Multimodal transport is the combination of two or more modes — such as rail, bus, air, and micromobility — within a single journey or travel offer. OSDM is explicitly designed to sell trains 'and other modes,' making multimodal the organizing concept of rail distribution beyond a single carrier or mode.

Multimodal transport treats a trip as a chain of segments potentially spanning different modes and operators, requiring distribution standards to combine offers, fares, and fulfillment across them. It is sometimes distinguished from 'intermodal': in the conventional convention, multimodal denotes several modes covered by a single ticket (passengers) or single contract with one carrier liable for the whole journey (freight), whereas intermodal denotes several modes where each carrier issues its own ticket/contract. In practice, especially in passenger and Mobility-as-a-Service contexts, the two terms are often used interchangeably to describe trips not confined to one mode. Multimodal is the commercial frame that connects rail standards like OSDM to broader Mobility-as-a-Service offerings.

**한국어 / Korean** — **복합운송(Multimodal Transport)** — Multimodal transport(복합운송)는 단일 여정 또는 여행 오퍼 안에서 철도·버스·항공·마이크로모빌리티 등 둘 이상의 교통수단을 결합하는 것이다. OSDM은 명시적으로 열차 '및 다른 교통수단'을 함께 판매하도록 설계되어, 복합운송을 단일 운영사·단일 수단을 넘어선 철도 유통의 조직 개념으로 만든다.

복합운송은 여정을 서로 다른 수단과 운영사를 아우를 수 있는 구간들의 연쇄로 보며, 유통 표준이 이들 전반에 걸쳐 오퍼·운임·발권을 결합하도록 요구한다. 때로 'intermodal(연계운송)'과 구분되는데, 통상적 구분에 따르면 multimodal은 여러 수단을 하나의 승차권(여객) 또는 한 운송인이 전 구간 책임을 지는 단일 계약(화물)으로 묶는 것을 가리키고, intermodal은 여러 수단을 이용하되 각 운송인이 자기 승차권/계약을 발행하는 것을 가리킨다. 다만 실무에서는, 특히 여객 및 MaaS 맥락에서 두 용어가 단일 수단에 국한되지 않는 여정을 가리키는 말로 흔히 혼용된다. multimodal은 OSDM 같은 철도 표준을 더 넓은 MaaS 제공물과 잇는 상업적 틀이다.

**Aliases:** `Multimodal Travel`, `Multi-modal Transport`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| CEN (Transmodel / NeTEx / SIRI) | `Transmodel multimodal data model (NeTEx static, SIRI real-time)` | related | Transmodel is the EU reference data model explicitly designed for multimodality (scheduled, flexible, vehicle-sharing, taxi), implemented as NeTEx for planned data and SIRI for real-time; CER/UITP position OSDM and Transmodel as two complementary multimodal solutions. |
| Transmodel (OJP) | `Open Journey Planner (OJP)` | related | OJP is the Transmodel-based API for cross-operator, multimodal journey planning — the distributed query layer that stitches modes together, complementing OSDM's sales/booking role. |

# Related
- [OSDM](/ground/rail/osdm.md) — related
- [Journey](/air/air-shop/journey.md) — related
- [Dynamic Packaging](/common/standards/dynamic-packaging.md) — related
- [Through Fare](/air/air-partner/through-fare.md) — contrasts

# Distinctions
- **Multimodal Transport** vs [Journey](/air/air-shop/journey.md) — A Journey (in air pricing) is the routing structure of one trip, typically single-mode; multimodal transport explicitly spans multiple modes and operators, and is the organizing concept for the Rail & Multimodal category.
- **Multimodal Transport** vs [Dynamic Packaging](/common/standards/dynamic-packaging.md) — Dynamic packaging bundles travel products (e.g., flight + hotel) into one purchase; multimodal transport specifically chains transport modes into one journey, which packaging may or may not do.
- **Multimodal Transport** vs [Mobility as a Service](/ground/car/mobility-as-a-service.md) — Multimodal transport describes a journey physically using more than one mode; MaaS is the digital integration layer that aggregates, plans, books and pays for those modes through one offer — a commercial/technical concept, not just the physical use of several modes.

# Citations
[1] Industry MaaS literature — Multimodal vs intermodal (Mobility as a Service explainer)
[2] [UIC — Open Sales and Distribution Model (trains and other modes)](https://uic.org/projects-99/osdm)
