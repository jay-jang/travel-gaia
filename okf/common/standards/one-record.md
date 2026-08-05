---
type: Standard
title: IATA ONE Record
description: 'IATA ONE Record is an open data-sharing standard for the air transport industry that replaces bilateral EDIFACT/Type B messaging with a JSON-LD linked-data approach over HTTPS REST APIs. Each stakeholder in the air supply chain — shipper, freight forwarder, ground handler, airline, customs authority — maintains authoritative records ("Logistics Objects") on their own systems and exposes them via standardised endpoints; others access only what they are authorised to see, creating a shared, distributed data layer across the entire shipment journey.'
tags:
  - standards
  - active
  - IATA
timestamp: '2026-08-04T00:00:00Z'
id: one-record
vertical: common
category: standards
conceptType: standard
status: active
abbreviation: ONE Record
term_ko: IATA ONE Record (원 레코드)
definition_ko: 'IATA ONE Record는 항공 운송 산업을 위한 개방형 데이터 공유 표준으로, 기존의 양자 간 EDIFACT/Type B 메시징을 HTTPS REST API 위에서 JSON-LD 연결 데이터 방식으로 대체한다. 항공 공급망의 각 이해관계자(화주·포워더·지상 조업사·항공사·세관 당국)는 자체 시스템에 권위 있는 기록("물류 객체")을 유지하고 표준화된 엔드포인트를 통해 공개하며, 다른 주체는 권한이 부여된 범위에서만 접근한다. 이를 통해 전체 화물 여정에 걸쳐 공유되고 분산된 데이터 레이어가 형성된다.'
longDef: 'ONE Record defines a common data model based on JSON-LD (JSON for Linked Data) and a REST API specification that standardises how logistics objects — Shipment, Piece, Waybill, Transport Movement, Loading Unit, etc. — are created, updated, and accessed across organisational boundaries. Unlike legacy EDIFACT/CAMIR messaging in which cargo data is transferred by point-to-point messages between bilateral trading partners, ONE Record treats each record as a persistent, addressable resource (an "Internet of Logistics" concept) that authorised parties can retrieve or subscribe to in real time via HTTPS. Access control and audit trails are built into the standard. The data model is governed by an ontology published on GitHub (github.com/IATA-Cargo/ONE-Record) and versioned for stability. IATA launched the ONE Record initiative in 2016 as part of the e-freight programme; in 2023 IATA declared a roadmap toward making ONE Record the preferred cargo data-sharing channel. Adoption is driven by cargo community systems (CCS) such as Cargo Community Network (CCN) and CargoAi, as well as by major airlines and ground handlers. Extensions of the standard to passenger services — particularly baggage tracking and customer order data — are under exploration by IATA as a pathway from ONE Record (cargo) toward an eventual full "ONE Record for Passengers" concept, though the current standard is cargo-focused.'
longDef_ko: 'ONE Record는 JSON-LD(JSON for Linked Data)에 기반한 공통 데이터 모델과 물류 객체(화물·조각·항공화물운송장·운송 이동·적재 단위 등)를 조직 경계를 넘어 생성·갱신·접근하는 방법을 표준화하는 REST API 사양을 정의한다. 화물 데이터가 양자 간 거래 파트너 사이에서 점 대 점 메시지로 전달되는 기존 EDIFACT/CAMIR 메시징과 달리, ONE Record는 각 기록을 권한 있는 주체가 HTTPS를 통해 실시간으로 조회하거나 구독할 수 있는 지속적·주소 지정 가능한 리소스("물류 인터넷" 개념)로 처리한다. 접근 제어와 감사 추적은 표준에 내장되어 있다. 데이터 모델은 GitHub(github.com/IATA-Cargo/ONE-Record)에 공개된 온톨로지로 관리되며 안정성을 위해 버전이 부여된다. IATA는 2016년 e-freight 프로그램의 일환으로 ONE Record 이니셔티브를 시작했으며, 2023년에는 ONE Record를 선호 화물 데이터 공유 채널로 삼는 로드맵을 발표했다. Cargo Community Network(CCN), CargoAi 등 화물 커뮤니티 시스템(CCS)과 주요 항공사 및 지상 조업사가 도입을 추진하고 있다. 여객 서비스(특히 수하물 추적 및 고객 주문 데이터)로의 표준 확장은 IATA가 화물 중심의 현 ONE Record에서 최종적인 "ONE Record for Passengers" 개념으로 가는 경로로 모색 중이지만, 현재 표준은 화물 중심이다.'
standardBody: IATA
aliases:
  - ONE Record
  - IATA 1R
  - Internet of Logistics
relationships:
  - type: replaces
    targetTerm: EDIFACT
  - type: replaces
    targetTerm: Type B Messaging
  - type: related
    targetTerm: NDC
  - type: related
    targetTerm: ONE Order
distinctions:
  - targetTerm: EDIFACT
    explanation: 'EDIFACT is a legacy UN/IATA standard for structured message exchange in batch, point-to-point flat-file format between bilateral trading partners; IATA ONE Record replaces EDIFACT-based cargo messaging with a REST/JSON-LD approach in which records are persistent, addressable resources accessed in real time across multiple authorised stakeholders without bilateral setup per partner pair.'
    explanation_ko: 'EDIFACT는 양자 간 거래 파트너 사이에서 배치 방식·점 대 점 플랫 파일 형식으로 구조화된 메시지를 교환하는 레거시 UN/IATA 표준이고, IATA ONE Record는 EDIFACT 기반 화물 메시징을 REST/JSON-LD 방식으로 대체하여 기록을 여러 권한 이해관계자가 파트너별 양자 설정 없이 실시간으로 접근하는 지속적·주소 지정 가능 리소스로 취급한다.'
  - targetTerm: ONE Order
    explanation: 'IATA ONE Order is the passenger retailing standard that unifies the PNR and ticket into a single airline order record, replacing the legacy PNR/ticket split in passenger distribution; IATA ONE Record is the cargo-focused data-sharing standard for sharing logistics object data across the air freight supply chain. They share a name family and both aim to modernise IATA data exchange, but they address different verticals and different data layers.'
    explanation_ko: 'IATA ONE Order는 PNR과 항공권을 단일 항공사 주문 기록으로 통합하는 여객 리테일링 표준이고, IATA ONE Record는 항공 화물 공급망 전반에 걸쳐 물류 객체 데이터를 공유하기 위한 화물 중심 데이터 공유 표준이다. 둘 다 IATA 데이터 교환 현대화를 목표로 같은 이름 계열을 공유하지만, 서로 다른 산업 수직(여객 vs 화물)과 서로 다른 데이터 레이어를 다룬다.'
  - targetTerm: NDC
    explanation: 'NDC (New Distribution Capability) is the IATA XML standard for modernising airline passenger product distribution — offers, ancillaries, orders — via API between airlines and travel sellers; ONE Record is the JSON-LD standard for sharing cargo logistics data across the air freight supply chain. Both are IATA modernisation programmes that use APIs instead of legacy messaging, but they address the passenger retail layer (NDC) and the cargo logistics layer (ONE Record) respectively.'
    explanation_ko: 'NDC(New Distribution Capability)는 항공사와 여행 판매자 간 API를 통해 항공사 여객 상품(제안·부가 서비스·주문)의 유통을 현대화하는 IATA XML 표준이고, ONE Record는 항공 화물 공급망 전반에 걸쳐 화물 물류 데이터를 공유하기 위한 JSON-LD 표준이다. 둘 다 레거시 메시징 대신 API를 사용하는 IATA 현대화 프로그램이지만, 각각 여객 리테일 레이어(NDC)와 화물 물류 레이어(ONE Record)를 다룬다.'
sources:
  - name: 'IATA ONE Record — Programme Overview and Data Model'
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/programs/cargo/e/one-record/'
    tier: association
  - name: 'IATA ONE Record API & Data Model — GitHub Repository'
    org: IATA Cargo
    version: ''
    section: ''
    url: 'https://github.com/IATA-Cargo/ONE-Record'
    tier: standard-body
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="14" r="4"/><circle cx="38" cy="14" r="4"/><circle cx="10" cy="34" r="4"/><circle cx="38" cy="34" r="4"/><circle cx="24" cy="24" r="5"/><line x1="14" y1="14" x2="19" y2="21"/><line x1="34" y1="14" x2="29" y2="21"/><line x1="14" y1="34" x2="19" y2="27"/><line x1="34" y1="34" x2="29" y2="27"/></svg>
---

> IATA ONE Record is an open data-sharing standard for the air transport industry that replaces bilateral EDIFACT/Type B messaging with a JSON-LD linked-data approach over HTTPS REST APIs. Each stakeholder in the air supply chain — shipper, freight forwarder, ground handler, airline, customs authority — maintains authoritative records ("Logistics Objects") on their own systems and exposes them via standardised endpoints; others access only what they are authorised to see, creating a shared, distributed data layer across the entire shipment journey.

ONE Record defines a common data model based on JSON-LD (JSON for Linked Data) and a REST API specification that standardises how logistics objects — Shipment, Piece, Waybill, Transport Movement, Loading Unit, etc. — are created, updated, and accessed across organisational boundaries. Unlike legacy EDIFACT/CAMIR messaging in which cargo data is transferred by point-to-point messages between bilateral trading partners, ONE Record treats each record as a persistent, addressable resource (an "Internet of Logistics" concept) that authorised parties can retrieve or subscribe to in real time via HTTPS. Access control and audit trails are built into the standard. The data model is governed by an ontology published on GitHub (github.com/IATA-Cargo/ONE-Record) and versioned for stability. IATA launched the ONE Record initiative in 2016 as part of the e-freight programme; in 2023 IATA declared a roadmap toward making ONE Record the preferred cargo data-sharing channel. Adoption is driven by cargo community systems (CCS) such as Cargo Community Network (CCN) and CargoAi, as well as by major airlines and ground handlers.

**한국어 / Korean** — **IATA ONE Record (원 레코드)** — IATA ONE Record는 항공 운송 산업을 위한 개방형 데이터 공유 표준으로, 기존의 양자 간 EDIFACT/Type B 메시징을 HTTPS REST API 위에서 JSON-LD 연결 데이터 방식으로 대체한다. 항공 공급망의 각 이해관계자(화주·포워더·지상 조업사·항공사·세관 당국)는 자체 시스템에 권위 있는 기록("물류 객체")을 유지하고 표준화된 엔드포인트를 통해 공개하며, 다른 주체는 권한이 부여된 범위에서만 접근한다.

ONE Record는 JSON-LD에 기반한 공통 데이터 모델과 물류 객체(화물·조각·항공화물운송장·운송 이동·적재 단위 등)를 조직 경계를 넘어 생성·갱신·접근하는 방법을 표준화하는 REST API 사양을 정의한다. 화물 데이터가 양자 간 거래 파트너 사이에서 점 대 점 메시지로 전달되는 기존 EDIFACT/CAMIR 메시징과 달리, ONE Record는 각 기록을 권한 있는 주체가 HTTPS를 통해 실시간으로 조회하거나 구독할 수 있는 지속적·주소 지정 가능한 리소스("물류 인터넷" 개념)로 처리한다.

**Aliases:** `ONE Record`, `IATA 1R`, `Internet of Logistics`

# Related
- [EDIFACT](/common/standards/edifact.md) — replaces
- [Type B Messaging](/common/standards/type-b-messaging.md) — replaces
- [NDC](/common/standards/ndc.md) — related
- [ONE Order](/common/standards/one-order.md) — related

# Distinctions
- **IATA ONE Record** vs [EDIFACT](/common/standards/edifact.md) — EDIFACT is a legacy UN/IATA standard for structured message exchange in batch, point-to-point flat-file format between bilateral trading partners; IATA ONE Record replaces EDIFACT-based cargo messaging with a REST/JSON-LD approach in which records are persistent, addressable resources accessed in real time across multiple authorised stakeholders without bilateral setup per partner pair.
- **IATA ONE Record** vs [ONE Order](/common/standards/one-order.md) — IATA ONE Order is the passenger retailing standard that unifies the PNR and ticket into a single airline order record, replacing the legacy PNR/ticket split in passenger distribution; IATA ONE Record is the cargo-focused data-sharing standard for sharing logistics object data across the air freight supply chain. They share a name family and both aim to modernise IATA data exchange, but they address different verticals and different data layers.
- **IATA ONE Record** vs [NDC](/common/standards/ndc.md) — NDC (New Distribution Capability) is the IATA XML standard for modernising airline passenger product distribution — offers, ancillaries, orders — via API between airlines and travel sellers; ONE Record is the JSON-LD standard for sharing cargo logistics data across the air freight supply chain. Both are IATA modernisation programmes that use APIs instead of legacy messaging, but they address the passenger retail layer (NDC) and the cargo logistics layer (ONE Record) respectively.

# Citations
[1] [IATA — IATA ONE Record — Programme Overview and Data Model](https://www.iata.org/en/programs/cargo/e/one-record/)
[2] [IATA Cargo — IATA ONE Record API & Data Model — GitHub Repository](https://github.com/IATA-Cargo/ONE-Record)
