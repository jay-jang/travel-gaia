---
type: Standard Term
title: Book and Claim
description: 'Book and Claim is a chain-of-custody accounting model that fully decouples a fuel''s environmental attributes from the physical fuel, allowing an airline or corporate buyer to purchase and claim the emissions benefit of SAF that is uplifted at a different airport from where the buyer flies. The attribute is recorded (''booked'') and retired (''claimed'') in a registry independently of the physical fuel logistics.'
tags:
  - sustainability
  - active
  - IATA; ICAO (ACT-SAF)
timestamp: '2026-06-18T00:00:00Z'
id: book-and-claim
vertical: common
category: sustainability
conceptType: standard-term
status: active
term_ko: 북앤클레임(Book and Claim)
definition_ko: 'Book and Claim은 공급사슬 관리(chain-of-custody) 회계 모델로, 연료의 환경적 속성을 물리적 연료와 완전히 분리하여, 항공사나 기업 구매자가 자신이 운항하는 공항과 다른 공항에서 급유된 SAF의 배출 편익을 구매·주장할 수 있게 한다. 속성은 물리적 연료 물류와 독립적으로 레지스트리에서 기록(''book'')되고 소각(''claim'')된다.'
longDef: 'SAF is scarce and expensive to ship, so it is uplifted only at a limited number of airports. Book and Claim removes the requirement that the buyer physically receive the molecules: a SAF producer or supplier registers the certified attributes, a buyer acquires and retires them against its own footprint, and the physical fuel is consumed wherever it is most efficient. This decoupling is what enables corporate Scope 3 SAF procurement and SAF insetting via instruments such as the Sustainable Aviation Fuel Certificate (SAFc), and it is the mechanism IATA and SABA promote to scale SAF demand. Robust registries and one-time retirement are required to prevent double counting, distinguishing book-and-claim from the physically-linked Mass Balance model.'
longDef_ko: 'SAF는 희소하고 운송 비용이 비싸 제한된 수의 공항에서만 급유된다. Book and Claim은 구매자가 분자를 물리적으로 인도받아야 한다는 요건을 제거한다. SAF 생산자·공급자가 인증된 속성을 등록하고, 구매자가 이를 취득해 자신의 발자국에 대해 소각하며, 물리적 연료는 가장 효율적인 곳에서 소비된다. 이러한 분리(decoupling) 덕분에 기업의 Scope 3 SAF 조달과 SAFc(Sustainable Aviation Fuel Certificate) 같은 수단을 통한 SAF 인세팅(insetting)이 가능해지며, IATA와 SABA가 SAF 수요 확대를 위해 추진하는 메커니즘이다. 이중계상을 막기 위해 견고한 레지스트리와 1회 소각이 요구되며, 이 점에서 물리적으로 연결된 Mass Balance 모델과 구별된다.'
standardBody: IATA; ICAO (ACT-SAF)
aliases:
  - Book and Claim
  - Book & Claim
  - Book-and-Claim
providerTerms:
  - provider: RSB
    term: Book & Claim Unit (BCU)
    context: 'Roundtable on Sustainable Biomaterials'' registered, certified attribute unit decoupled from physical SAF on its RSB Book & Claim Registry'
    context_ko: RSB Book & Claim 레지스트리에서 물리적 SAF와 분리해 등록·인증하는 속성 단위(BCU)
    relationship: narrower
  - provider: RMI / SABA
    term: Sustainable Aviation Fuel Certificate (SAFc)
    context: Book-and-claim certificate (and SAFc Registry built with Energy Web) representing the environmental attributes of one tonne of neat SAF for Scope 1/Scope 3 claims
    context_ko: Energy Web와 구축한 SAFc 레지스트리에서 1톤 순수 SAF의 환경 속성을 나타내는 book-and-claim 인증서(Scope1/Scope3 주장용)
    relationship: narrower
  - provider: Shell
    term: Avelia
    context: Shell/Accenture/Amex GBT blockchain book-and-claim platform issuing SAF attribute certificates for Shell-traded volumes
    context_ko: Shell·Accenture·Amex GBT가 만든 블록체인 book-and-claim 플랫폼으로 Shell 거래량의 SAF 속성 인증서를 발행
    relationship: related
  - provider: IATA
    term: SAF Registry (CADO)
    context: IATA's airline-operator-oriented Global SAF Registry/CADO system that records SAF volumes and attributes to enable book-and-claim accounting
    context_ko: 항공사 운영자 관점에서 SAF 물량·속성을 기록해 book-and-claim 회계를 가능케 하는 IATA Global SAF Registry/CADO 시스템
    relationship: related
relationships:
  - type: contrasts
    targetTerm: Mass Balance (MB)
  - type: broader
    targetTerm: Sustainable Aviation Fuel (SAF)
  - type: related
    targetTerm: GHG Protocol Scope 3 (Business Travel)
distinctions:
  - targetTerm: Mass Balance (MB)
    explanation: 'Book and Claim severs the link between the attribute and the physical fuel entirely, so the benefit can be claimed for fuel uplifted at a different airport; Mass Balance keeps the attribute within the same physical logistics system as the fuel.'
    explanation_ko: 'Book and Claim은 속성과 물리적 연료의 연결을 완전히 끊어 다른 공항에서 급유된 연료의 편익도 주장할 수 있게 하지만, Mass Balance는 속성을 연료와 동일한 물리적 물류 시스템 안에 유지한다.'
  - targetTerm: CORSIA Eligible Emissions Unit (EEU)
    explanation: Book and Claim transfers an in-sector SAF reduction benefit (the fuel really replaced fossil kerosene somewhere); an Emissions Unit is an out-of-sector offset credit from a separate carbon-reduction project — different instruments.
    explanation_ko: 'Book and Claim은 부문 내(in-sector) SAF 감축 편익(연료가 실제로 어딘가에서 화석 등유를 대체함)을 이전하지만, EEU는 별개의 탄소감축 프로젝트에서 나온 부문 외(out-of-sector) 상쇄 배출권으로, 서로 다른 수단이다.'
sources:
  - org: IATA
    name: SAF accounting based on robust chain-of-custody approaches (Policy Paper)
    version: ''
    section: ''
    url: 'https://www.iata.org/contentassets/d13875e9ed784f75bac90f000760e998/saf-accounting-policy-paper_20230905_final.pdf'
  - org: ICAO
    name: ACT-SAF Series 6 – SAF accounting and book-and-claim systems
    version: ''
    section: ''
    url: 'https://www.icao.int/sites/default/files/environmental-protection/Documents/ACT-SAF/ACT-SAF-Series-6-SAF-accounting-and-book-and-claim-systems.pdf'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M8 12a4 4 0 0 1 4-4h9v28h-9a4 4 0 0 0-4 4z"/><path d="M40 12a4 4 0 0 0-4-4h-9v28h9a4 4 0 0 1 4 4z"/><path d="M30 22l4 4 8-9"/></svg>
---

> Book and Claim is a chain-of-custody accounting model that fully decouples a fuel's environmental attributes from the physical fuel, allowing an airline or corporate buyer to purchase and claim the emissions benefit of SAF that is uplifted at a different airport from where the buyer flies. The attribute is recorded ('booked') and retired ('claimed') in a registry independently of the physical fuel logistics.

SAF is scarce and expensive to ship, so it is uplifted only at a limited number of airports. Book and Claim removes the requirement that the buyer physically receive the molecules: a SAF producer or supplier registers the certified attributes, a buyer acquires and retires them against its own footprint, and the physical fuel is consumed wherever it is most efficient. This decoupling is what enables corporate Scope 3 SAF procurement and SAF insetting via instruments such as the Sustainable Aviation Fuel Certificate (SAFc), and it is the mechanism IATA and SABA promote to scale SAF demand. Robust registries and one-time retirement are required to prevent double counting, distinguishing book-and-claim from the physically-linked Mass Balance model.

**한국어 / Korean** — **북앤클레임(Book and Claim)** — Book and Claim은 공급사슬 관리(chain-of-custody) 회계 모델로, 연료의 환경적 속성을 물리적 연료와 완전히 분리하여, 항공사나 기업 구매자가 자신이 운항하는 공항과 다른 공항에서 급유된 SAF의 배출 편익을 구매·주장할 수 있게 한다. 속성은 물리적 연료 물류와 독립적으로 레지스트리에서 기록('book')되고 소각('claim')된다.

SAF는 희소하고 운송 비용이 비싸 제한된 수의 공항에서만 급유된다. Book and Claim은 구매자가 분자를 물리적으로 인도받아야 한다는 요건을 제거한다. SAF 생산자·공급자가 인증된 속성을 등록하고, 구매자가 이를 취득해 자신의 발자국에 대해 소각하며, 물리적 연료는 가장 효율적인 곳에서 소비된다. 이러한 분리(decoupling) 덕분에 기업의 Scope 3 SAF 조달과 SAFc(Sustainable Aviation Fuel Certificate) 같은 수단을 통한 SAF 인세팅(insetting)이 가능해지며, IATA와 SABA가 SAF 수요 확대를 위해 추진하는 메커니즘이다. 이중계상을 막기 위해 견고한 레지스트리와 1회 소각이 요구되며, 이 점에서 물리적으로 연결된 Mass Balance 모델과 구별된다.

**Aliases:** `Book and Claim`, `Book & Claim`, `Book-and-Claim`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| RSB | `Book & Claim Unit (BCU)` | narrower | Roundtable on Sustainable Biomaterials' registered, certified attribute unit decoupled from physical SAF on its RSB Book & Claim Registry |
| RMI / SABA | `Sustainable Aviation Fuel Certificate (SAFc)` | narrower | Book-and-claim certificate (and SAFc Registry built with Energy Web) representing the environmental attributes of one tonne of neat SAF for Scope 1/Scope 3 claims |
| Shell | `Avelia` | related | Shell/Accenture/Amex GBT blockchain book-and-claim platform issuing SAF attribute certificates for Shell-traded volumes |
| IATA | `SAF Registry (CADO)` | related | IATA's airline-operator-oriented Global SAF Registry/CADO system that records SAF volumes and attributes to enable book-and-claim accounting |

# Related
- [Mass Balance (MB)](/common/sustainability/mass-balance-mb.md) — contrasts
- [Sustainable Aviation Fuel (SAF)](/common/sustainability/sustainable-aviation-fuel-saf.md) — broader
- [GHG Protocol Scope 3 (Business Travel)](/common/sustainability/ghg-protocol-scope-3-business-travel.md) — related

# Distinctions
- **Book and Claim** vs [Mass Balance (MB)](/common/sustainability/mass-balance-mb.md) — Book and Claim severs the link between the attribute and the physical fuel entirely, so the benefit can be claimed for fuel uplifted at a different airport; Mass Balance keeps the attribute within the same physical logistics system as the fuel.
- **Book and Claim** vs [CORSIA Eligible Emissions Unit (EEU)](/common/sustainability/corsia-eligible-emissions-unit-eeu.md) — Book and Claim transfers an in-sector SAF reduction benefit (the fuel really replaced fossil kerosene somewhere); an Emissions Unit is an out-of-sector offset credit from a separate carbon-reduction project — different instruments.

# Citations
[1] [IATA — SAF accounting based on robust chain-of-custody approaches (Policy Paper)](https://www.iata.org/contentassets/d13875e9ed784f75bac90f000760e998/saf-accounting-policy-paper_20230905_final.pdf)
[2] [ICAO — ACT-SAF Series 6 – SAF accounting and book-and-claim systems](https://www.icao.int/sites/default/files/environmental-protection/Documents/ACT-SAF/ACT-SAF-Series-6-SAF-accounting-and-book-and-claim-systems.pdf)
