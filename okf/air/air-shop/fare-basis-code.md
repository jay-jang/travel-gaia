---
type: Code
title: Fare Basis Code
description: 'A fare basis code is an alphanumeric string that uniquely identifies a specific fare and its associated rules within a market. It typically begins with the booking class (RBD) letter and may include further characters encoding season, days of the week, fare type, passenger type, and other conditions.'
tags:
  - air-shop
  - active
  - ATPCO
timestamp: '2026-06-17T00:00:00Z'
id: fare-basis-code
vertical: air
category: air-shop
conceptType: code
status: active
term_ko: 운임 기준 코드
definition_ko: '운임 기준 코드(fare basis code)는 특정 시장 내에서 개별 운임과 그에 연계된 규정을 고유하게 식별하는 영숫자 문자열이다. 일반적으로 예약 등급(RBD) 문자로 시작하며, 시즌, 요일, 운임 유형, 승객 유형 및 기타 조건을 인코딩하는 추가 문자를 포함할 수 있다.'
longDef: 'The fare basis code is the human-readable key that ties a priced fare to its filed fare and rule record. Its first character is normally the prime booking code (RBD), followed by qualifiers such as fare type letters, ticket designators (after a slash), season indicators, and day/time codes (for example YLXAP, BHE7, QW14). The same RBD can carry many distinct fare basis codes representing different fares and conditions. Fare basis codes are filed by carriers, distributed through ATPCO, and printed on the fare-construction portion of tickets.'
longDef_ko: '운임 기준 코드는 산출된 운임을 항공사가 신고한 운임 및 규정 레코드와 연결하는, 사람이 읽을 수 있는 키이다. 첫 글자는 보통 주요 예약 코드(RBD)이며, 그 뒤에 운임 유형 문자, 항공권 지정자(슬래시 이후), 시즌 표시자, 요일/시간 코드 등의 한정자가 따라온다(예: YLXAP, BHE7, QW14). 동일한 RBD라도 서로 다른 운임과 조건을 나타내는 여러 운임 기준 코드를 가질 수 있다. 운임 기준 코드는 항공사가 신고하고 ATPCO를 통해 배포되며, 항공권의 운임 산출(fare construction) 부분에 인쇄된다.'
standardBody: ATPCO
aliases:
  - Fare Basis
  - FBC
providerTerms:
  - provider: ATPCO
    term: Fare Class Code / Fare Basis
    context: ATPCO fares records carry the fare class and rules that produce the fare basis.
    context_ko: ATPCO의 운임 레코드는 운임 기준을 생성하는 운임 등급(fare class)과 규정을 담고 있다.
    relationship: same
relationships:
  - type: related
    targetTerm: RBD
  - type: related
    targetTerm: Fare Component
  - type: related
    targetTerm: Fare Family
  - type: related
    targetTerm: ATPCO
  - type: related
    targetTerm: Passenger Type Code
distinctions:
  - targetTerm: RBD
    explanation: The RBD is a single booking-class letter; the fare basis code is the full alphanumeric fare identifier that usually starts with that letter.
    explanation_ko: 'RBD는 한 글자의 예약 등급 문자이고, 운임 기준 코드는 보통 그 문자로 시작하는 전체 영숫자 운임 식별자이다.'
  - targetTerm: Fare Family
    explanation: A fare basis identifies one specific filed fare; a fare family is a marketing bundle that may span multiple fare basis codes.
    explanation_ko: '운임 기준은 신고된 하나의 특정 운임을 식별하고, 운임 패밀리(fare family)는 여러 운임 기준 코드에 걸칠 수 있는 마케팅 묶음이다.'
  - targetTerm: Add-on
    explanation: A fare basis code identifies a complete published fare; an add-on is a proportional amount that cannot stand alone and must be combined with such a published fare to form a constructed fare.
    explanation_ko: 'Fare basis code는 완전한 공시 운임을 식별하고, add-on은 단독으로 성립할 수 없으며 constructed fare를 만들기 위해 그러한 공시 운임과 결합되어야 하는 proportional 금액이다.'
  - targetTerm: ATPCO
    explanation: ATPCO is the organization/data source; the fare basis code is one data element it distributes.
    explanation_ko: 'ATPCO는 기관이자 데이터 출처이고, 운임 기준 코드는 ATPCO가 배포하는 하나의 데이터 요소이다.'
  - targetTerm: Class Code
    explanation: The class code is one letter (the booking bucket); a fare basis code is a longer alphanumeric string whose first character is usually the class code and which encodes the full fare and its conditions.
    explanation_ko: '클래스 코드는 한 글자(예약 버킷)이고, 운임 기준 코드는 첫 글자가 보통 클래스 코드이며 전체 운임과 그 조건을 인코딩한 더 긴 영숫자 문자열이다.'
  - targetTerm: Fare Rule
    explanation: The Fare Basis Code is the alphanumeric label identifying a specific fare; the Fare Rule is the body of conditions that the fare (and its basis code) must satisfy to be applied.
    explanation_ko: 'Fare Basis Code는 특정 운임을 식별하는 영숫자 코드이며, Fare Rule은 그 운임(및 basis code)이 적용되기 위해 충족해야 하는 조건의 본문이다.'
  - targetTerm: Negotiated Fare
    explanation: 'A fare basis code labels any fare, public or private; Negotiated Fare specifically denotes a privately filed Category 35 fare restricted to authorized sellers, often invisible in neutral public displays.'
    explanation_ko: 'Fare basis code는 public이든 private이든 모든 운임에 붙는 라벨이고, Negotiated Fare는 특히 인가된 판매자에게만 제한되어 파일링된 Category 35 private 운임을 가리키며 중립 public 조회에서는 보이지 않는 경우가 많다.'
  - targetTerm: Passenger Type Code
    explanation: A PTC is an input that restricts which Fare Basis Codes a passenger can use; the Fare Basis Code identifies the specific priced fare.
    explanation_ko: 'PTC는 승객이 사용할 수 있는 Fare Basis Code를 제한하는 입력값이고, Fare Basis Code는 가격이 산정된 특정 운임을 식별한다.'
sources:
  - name: ATPCO Fares and Rules data documentation
    org: ATPCO
    version: ''
    section: ''
    url: 'https://atpco.net/standards/'
    tier: vendor-doc
  - name: IATA Ticketing Handbook / fare construction
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/publications/manuals/ticketing-handbook/'
    tier: association
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M23 7H10a3 3 0 00-3 3v13a3 3 0 00.9 2.1l15 15a3 3 0 004.2 0l11-11a3 3 0 000-4.2l-15-15A3 3 0 0023 7z"/><circle cx="16" cy="16" r="2.5"/><line x1="21" y1="27" x2="27" y2="33"/><line x1="26" y1="22" x2="32" y2="28"/></svg>
---

> A fare basis code is an alphanumeric string that uniquely identifies a specific fare and its associated rules within a market. It typically begins with the booking class (RBD) letter and may include further characters encoding season, days of the week, fare type, passenger type, and other conditions.

The fare basis code is the human-readable key that ties a priced fare to its filed fare and rule record. Its first character is normally the prime booking code (RBD), followed by qualifiers such as fare type letters, ticket designators (after a slash), season indicators, and day/time codes (for example YLXAP, BHE7, QW14). The same RBD can carry many distinct fare basis codes representing different fares and conditions. Fare basis codes are filed by carriers, distributed through ATPCO, and printed on the fare-construction portion of tickets.

**한국어 / Korean** — **운임 기준 코드** — 운임 기준 코드(fare basis code)는 특정 시장 내에서 개별 운임과 그에 연계된 규정을 고유하게 식별하는 영숫자 문자열이다. 일반적으로 예약 등급(RBD) 문자로 시작하며, 시즌, 요일, 운임 유형, 승객 유형 및 기타 조건을 인코딩하는 추가 문자를 포함할 수 있다.

운임 기준 코드는 산출된 운임을 항공사가 신고한 운임 및 규정 레코드와 연결하는, 사람이 읽을 수 있는 키이다. 첫 글자는 보통 주요 예약 코드(RBD)이며, 그 뒤에 운임 유형 문자, 항공권 지정자(슬래시 이후), 시즌 표시자, 요일/시간 코드 등의 한정자가 따라온다(예: YLXAP, BHE7, QW14). 동일한 RBD라도 서로 다른 운임과 조건을 나타내는 여러 운임 기준 코드를 가질 수 있다. 운임 기준 코드는 항공사가 신고하고 ATPCO를 통해 배포되며, 항공권의 운임 산출(fare construction) 부분에 인쇄된다.

**Aliases:** `Fare Basis`, `FBC`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| ATPCO | `Fare Class Code / Fare Basis` | same | ATPCO fares records carry the fare class and rules that produce the fare basis. |

# Related
- [RBD](/air/air-shop/rbd.md) — related
- [Fare Component](/air/air-shop/fare-component.md) — related
- [Fare Family](/air/air-shop/fare-family.md) — related
- [ATPCO](/air/air-shop/atpco.md) — related
- [Passenger Type Code](/common/customer/passenger-type-code.md) — related

# Distinctions
- **Fare Basis Code** vs [RBD](/air/air-shop/rbd.md) — The RBD is a single booking-class letter; the fare basis code is the full alphanumeric fare identifier that usually starts with that letter.
- **Fare Basis Code** vs [Fare Family](/air/air-shop/fare-family.md) — A fare basis identifies one specific filed fare; a fare family is a marketing bundle that may span multiple fare basis codes.
- **Fare Basis Code** vs [Add-on](/air/air-shop/add-on.md) — A fare basis code identifies a complete published fare; an add-on is a proportional amount that cannot stand alone and must be combined with such a published fare to form a constructed fare.
- **Fare Basis Code** vs [ATPCO](/air/air-shop/atpco.md) — ATPCO is the organization/data source; the fare basis code is one data element it distributes.
- **Fare Basis Code** vs [Class Code](/common/codes/class-code.md) — The class code is one letter (the booking bucket); a fare basis code is a longer alphanumeric string whose first character is usually the class code and which encodes the full fare and its conditions.
- **Fare Basis Code** vs [Fare Rule](/air/air-shop/fare-rule.md) — The Fare Basis Code is the alphanumeric label identifying a specific fare; the Fare Rule is the body of conditions that the fare (and its basis code) must satisfy to be applied.
- **Fare Basis Code** vs [Negotiated Fare](/air/air-shop/negotiated-fare.md) — A fare basis code labels any fare, public or private; Negotiated Fare specifically denotes a privately filed Category 35 fare restricted to authorized sellers, often invisible in neutral public displays.
- **Fare Basis Code** vs [Passenger Type Code](/common/customer/passenger-type-code.md) — A PTC is an input that restricts which Fare Basis Codes a passenger can use; the Fare Basis Code identifies the specific priced fare.

# Citations
[1] [ATPCO — ATPCO Fares and Rules data documentation](https://atpco.net/standards/)
[2] [IATA — IATA Ticketing Handbook / fare construction](https://www.iata.org/en/publications/manuals/ticketing-handbook/)
