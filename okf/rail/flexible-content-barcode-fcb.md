---
type: Standard
title: Flexible Content Barcode (FCB)
description: 'The Flexible Content Barcode is the current UIC barcode standard (IRS 90918-9; ERA TAP TSI Technical Document B.12) that uses an asymmetrically signed Aztec barcode to carry the rail transport contract. It is the enabling technology for paperless, PNR-less rail tickets that can be controlled on plain paper or a screen.'
tags:
  - rail
  - active
  - UIC
timestamp: '2026-06-17T00:00:00Z'
id: flexible-content-barcode-fcb
category: rail
conceptType: standard
status: active
abbreviation: FCB
term_ko: 유연 콘텐츠 바코드(FCB)
definition_ko: 'Flexible Content Barcode(FCB)는 현행 UIC 바코드 표준(IRS 90918-9; ERA TAP TSI 기술문서 B.12)으로, 비대칭 전자서명된 Aztec 바코드를 사용해 철도 운송 계약을 담는다. 일반 용지나 화면에서 검표 가능한 무지(paperless)·무(無)PNR 철도 승차권을 가능케 하는 기반 기술이다.'
longDef: 'FCB encodes the contract data and an asymmetric digital signature so that any inspecting party with the issuer''s public key can validate authenticity offline, without querying a central reservation system. As the successor to earlier fixed-layout UIC barcode standards, FCB supports flexible record structures for varied products (admissions, reservations, passes). It underpins ''print at home'' and mobile tickets and is referenced by OSDM fulfillment and by TAP TSI Technical Document B.12.'
longDef_ko: 'FCB는 계약 데이터와 비대칭 디지털 서명을 인코딩하여, 발행자의 공개키를 가진 검표 주체가 중앙 예약 시스템을 조회하지 않고도 오프라인에서 진위를 검증할 수 있게 한다. 고정 레이아웃의 구형 UIC 바코드 표준을 잇는 후속 표준으로, 다양한 상품(admission, reservation, 패스)에 대한 유연한 레코드 구조를 지원한다. ''집에서 인쇄''·모바일 승차권을 뒷받침하며, OSDM fulfillment과 TAP TSI 기술문서 B.12에서 참조된다.'
standardBody: UIC
aliases:
  - Flexible Content Barcode
  - UIC barcode (FCB)
relationships:
  - type: related
    targetTerm: Fulfillment (Rail)
  - type: related
    targetTerm: OSDM
  - type: related
    targetTerm: TAP TSI
  - type: contrasts
    targetTerm: E-ticket
distinctions:
  - targetTerm: Fulfillment (Rail)
    explanation: 'FCB is the signed-barcode container technology; fulfillment is the lifecycle step of issuing and controlling the ticket, which typically embeds an FCB.'
    explanation_ko: 'FCB는 서명된 바코드 컨테이너 기술이고, fulfillment은 승차권을 발행·통제하는 생애주기 단계로 보통 FCB를 내장한다.'
  - targetTerm: E-ticket
    explanation: 'FCB is a self-validating, offline-checkable rail barcode; an air E-ticket is a coupon record held in a host system and validated against it. FCB enables PNR-less control, unlike GDS/host-dependent e-tickets.'
    explanation_ko: 'FCB는 오프라인 검증이 가능한 자체 검증형 철도 바코드이고, 항공 E-ticket은 호스트 시스템에 보관된 쿠폰 기록을 대조해 검증한다. FCB는 GDS/호스트 의존 e-ticket과 달리 무PNR 검표를 가능케 한다.'
sources:
  - name: 'FCB: Flexible Content Barcode (factsheet)'
    org: UIC
    version: IRS 90918-9
    section: ''
    url: ''
  - name: TAP TSI Technical Document B.12
    org: European Union Agency for Railways (ERA)
    version: ''
    section: B.12
    url: ''
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10 12v24M15 12v24M20 12v24M25 12v24M30 12v24M35 12v24M38 12v24" stroke-width="1.6"/><path d="M28 30l3 3 6-7"/></svg>
---

> The Flexible Content Barcode is the current UIC barcode standard (IRS 90918-9; ERA TAP TSI Technical Document B.12) that uses an asymmetrically signed Aztec barcode to carry the rail transport contract. It is the enabling technology for paperless, PNR-less rail tickets that can be controlled on plain paper or a screen.

FCB encodes the contract data and an asymmetric digital signature so that any inspecting party with the issuer's public key can validate authenticity offline, without querying a central reservation system. As the successor to earlier fixed-layout UIC barcode standards, FCB supports flexible record structures for varied products (admissions, reservations, passes). It underpins 'print at home' and mobile tickets and is referenced by OSDM fulfillment and by TAP TSI Technical Document B.12.

**한국어 / Korean** — **유연 콘텐츠 바코드(FCB)** — Flexible Content Barcode(FCB)는 현행 UIC 바코드 표준(IRS 90918-9; ERA TAP TSI 기술문서 B.12)으로, 비대칭 전자서명된 Aztec 바코드를 사용해 철도 운송 계약을 담는다. 일반 용지나 화면에서 검표 가능한 무지(paperless)·무(無)PNR 철도 승차권을 가능케 하는 기반 기술이다.

FCB는 계약 데이터와 비대칭 디지털 서명을 인코딩하여, 발행자의 공개키를 가진 검표 주체가 중앙 예약 시스템을 조회하지 않고도 오프라인에서 진위를 검증할 수 있게 한다. 고정 레이아웃의 구형 UIC 바코드 표준을 잇는 후속 표준으로, 다양한 상품(admission, reservation, 패스)에 대한 유연한 레코드 구조를 지원한다. '집에서 인쇄'·모바일 승차권을 뒷받침하며, OSDM fulfillment과 TAP TSI 기술문서 B.12에서 참조된다.

**Aliases:** `Flexible Content Barcode`, `UIC barcode (FCB)`

# Related
- [Fulfillment (Rail)](/rail/fulfillment-rail.md) — related
- [OSDM](/rail/osdm.md) — related
- [TAP TSI](/rail/tap-tsi.md) — related
- [E-ticket](/air-ticket/e-ticket.md) — contrasts

# Distinctions
- **Flexible Content Barcode (FCB)** vs [Fulfillment (Rail)](/rail/fulfillment-rail.md) — FCB is the signed-barcode container technology; fulfillment is the lifecycle step of issuing and controlling the ticket, which typically embeds an FCB.
- **Flexible Content Barcode (FCB)** vs [E-ticket](/air-ticket/e-ticket.md) — FCB is a self-validating, offline-checkable rail barcode; an air E-ticket is a coupon record held in a host system and validated against it. FCB enables PNR-less control, unlike GDS/host-dependent e-tickets.

# Citations
[1] UIC — FCB: Flexible Content Barcode (factsheet) — IRS 90918-9
[2] European Union Agency for Railways (ERA) — TAP TSI Technical Document B.12 — B.12
