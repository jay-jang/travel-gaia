---
type: Code
title: Passenger Type Code
description: 'A standardized code (typically three alphanumeric characters, e.g. ADT, CHD, INF) that classifies a traveler into a category for the purpose of fare eligibility, pricing and discounts. Passenger Type Codes are maintained by ATPCO and used across shopping, pricing and reservation systems.'
tags:
  - customer
  - active
  - ATPCO
timestamp: '2026-06-15T00:00:00Z'
id: passenger-type-code
vertical: common
category: customer
conceptType: code
status: active
abbreviation: PTC
term_ko: 여객 유형 코드 (PTC)
definition_ko: '운임 적용 자격, 가격 산정, 할인 적용을 위해 여행자를 특정 범주로 분류하는 표준화된 코드(통상 ADT, CHD, INF 등 영숫자 3자리)이다. PTC는 ATPCO가 관리하며 쇼핑, 운임 계산, 예약 시스템 전반에서 사용된다.'
longDef: 'Passenger Type Codes drive which fares a traveler qualifies for. Common examples include ADT (adult), CHD/CNN (child), INF (infant not occupying a seat), SRC (senior) and YTH (youth), along with specialized codes such as MIL (military) or student types. A fare rule (Category 1, Eligibility) restricts a Fare Basis Code to one or more PTCs, and the PTC requested during shopping determines which fares are returned and how they are priced. PTCs are distinct from RBDs, which control inventory and class of service rather than who is eligible.'
longDef_ko: 'PTC는 여행자가 어떤 운임에 자격이 있는지를 결정한다. 대표적인 예로 ADT(성인), CHD/CNN(소아), INF(좌석 비점유 유아), SRC(시니어), YTH(청소년)가 있으며, MIL(군인)이나 학생 유형 같은 특수 코드도 있다. 운임 규정(Category 1, Eligibility)은 특정 Fare Basis Code를 하나 이상의 PTC로 제한하며, 쇼핑 시 요청된 PTC에 따라 어떤 운임이 반환되고 어떻게 가격이 산정되는지가 결정된다. PTC는 자격이 누구에게 있는지가 아니라 좌석 재고와 운송 등급을 제어하는 RBD와는 구별된다.'
standardBody: ATPCO
aliases:
  - PTC
  - Passenger Type
  - Pax Type Code
relationships:
  - type: related
    targetTerm: Fare Basis Code
  - type: related
    targetTerm: ATPCO
  - type: related
    targetTerm: RBD
distinctions:
  - targetTerm: RBD
    explanation: PTC classifies who the traveler is for fare eligibility; RBD is the booking class controlling seat inventory and class of service.
    explanation_ko: 'PTC는 운임 자격을 위해 여행자가 누구인지를 분류하고, RBD는 좌석 재고와 운송 등급을 제어하는 예약 등급이다.'
  - targetTerm: Fare Basis Code
    explanation: A PTC is an input that restricts which Fare Basis Codes a passenger can use; the Fare Basis Code identifies the specific priced fare.
    explanation_ko: 'PTC는 승객이 사용할 수 있는 Fare Basis Code를 제한하는 입력값이고, Fare Basis Code는 가격이 산정된 특정 운임을 식별한다.'
sources:
  - name: ATPCO Passenger Type Codes
    org: ATPCO
    version: ''
    section: ''
    url: ''
  - name: ATPCO Automated Rules (Category 1 — Eligibility)
    org: ATPCO
    version: ''
    section: ''
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="17" cy="15" r="6"/><path d="M7 39c0-6 5-10 10-10s10 4 10 10"/><path d="M30 16h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-8z"/><circle cx="35" cy="23" r="1.5" fill="currentColor"/></svg>
---

> A standardized code (typically three alphanumeric characters, e.g. ADT, CHD, INF) that classifies a traveler into a category for the purpose of fare eligibility, pricing and discounts. Passenger Type Codes are maintained by ATPCO and used across shopping, pricing and reservation systems.

Passenger Type Codes drive which fares a traveler qualifies for. Common examples include ADT (adult), CHD/CNN (child), INF (infant not occupying a seat), SRC (senior) and YTH (youth), along with specialized codes such as MIL (military) or student types. A fare rule (Category 1, Eligibility) restricts a Fare Basis Code to one or more PTCs, and the PTC requested during shopping determines which fares are returned and how they are priced. PTCs are distinct from RBDs, which control inventory and class of service rather than who is eligible.

**한국어 / Korean** — **여객 유형 코드 (PTC)** — 운임 적용 자격, 가격 산정, 할인 적용을 위해 여행자를 특정 범주로 분류하는 표준화된 코드(통상 ADT, CHD, INF 등 영숫자 3자리)이다. PTC는 ATPCO가 관리하며 쇼핑, 운임 계산, 예약 시스템 전반에서 사용된다.

PTC는 여행자가 어떤 운임에 자격이 있는지를 결정한다. 대표적인 예로 ADT(성인), CHD/CNN(소아), INF(좌석 비점유 유아), SRC(시니어), YTH(청소년)가 있으며, MIL(군인)이나 학생 유형 같은 특수 코드도 있다. 운임 규정(Category 1, Eligibility)은 특정 Fare Basis Code를 하나 이상의 PTC로 제한하며, 쇼핑 시 요청된 PTC에 따라 어떤 운임이 반환되고 어떻게 가격이 산정되는지가 결정된다. PTC는 자격이 누구에게 있는지가 아니라 좌석 재고와 운송 등급을 제어하는 RBD와는 구별된다.

**Aliases:** `PTC`, `Passenger Type`, `Pax Type Code`

# Related
- [Fare Basis Code](/air/air-shop/fare-basis-code.md) — related
- [ATPCO](/air/air-shop/atpco.md) — related
- [RBD](/air/air-shop/rbd.md) — related

# Distinctions
- **Passenger Type Code** vs [RBD](/air/air-shop/rbd.md) — PTC classifies who the traveler is for fare eligibility; RBD is the booking class controlling seat inventory and class of service.
- **Passenger Type Code** vs [Fare Basis Code](/air/air-shop/fare-basis-code.md) — A PTC is an input that restricts which Fare Basis Codes a passenger can use; the Fare Basis Code identifies the specific priced fare.

# Citations
[1] ATPCO — ATPCO Passenger Type Codes
[2] ATPCO — ATPCO Automated Rules (Category 1 — Eligibility)
