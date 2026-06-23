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
vertical: ground
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
providerTerms:
  - provider: UIC (IRS 90918-9 / GitHub UIC-barcode)
    term: 'FCB (IRS 90918-9, uicRailTicketData ASN.1)'
    context: 'The formal UIC designation is the IRS 90918-9 ''Flexible Content Barcode'', defined via the uicRailTicketData ASN.1 schema in the UIC-barcode reference implementation; FCB/TLB use a variable-field, variable-size encoding.'
    context_ko: 'UIC 공식 명칭은 IRS 90918-9 ''Flexible Content Barcode''이며, UIC-barcode 레퍼런스 구현의 uicRailTicketData ASN.1 스키마로 정의된다(FCB/TLB는 가변 필드·가변 크기 인코딩).'
    relationship: same
  - provider: UIC (legacy Leaflet 918-2 / 918-3)
    term: SSB / ELB / TLB
    context: 'The predecessor UIC barcode formats carry the same rail contract but with different, mostly fixed-field encodings: SSB (Small Structured Barcode, ''AZTEC V2'' in 918-2V3), ELB (Element List Barcode, PDF417, used by SNCF), and TLB (Ticket Layout Barcode, ''DST barcode'' in 918-3) — all now superseded by FCB.'
    context_ko: '선행 UIC 바코드 포맷들은 동일한 철도 계약을 담되 대부분 고정 필드 방식으로 인코딩한다: SSB(Small Structured Barcode, 918-2V3의 ''AZTEC V2''), ELB(Element List Barcode, PDF417, SNCF 사용), TLB(Ticket Layout Barcode, 918-3의 ''DST barcode''). 모두 FCB로 대체됨.'
    relationship: narrower
  - provider: ERA TAP TSI (TD B.12)
    term: TAP TSI Technical Document B.12 (2D barcode security)
    context: 'ERA TAP TSI TD B.12 is the EU regulatory document that mandates the 2D Aztec barcode and its asymmetric signing for rail ticketing, paired with TD B.11 (layout); it is the regulatory carrier of the FCB standard.'
    context_ko: 'ERA TAP TSI TD B.12는 철도 발권용 2D Aztec 바코드와 비대칭 서명을 규정하는 EU 규제 문서로, 레이아웃을 다루는 TD B.11과 짝을 이루며 FCB 표준의 규제적 근거다.'
    relationship: related
relationships:
  - type: related
    targetTerm: Fulfillment (Rail)
  - type: related
    targetTerm: OSDM
  - type: broader
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
  - targetTerm: TAP TSI
    explanation: 'TAP TSI is the overarching regulation; FCB is one specific technical artifact (the barcode standard, referenced as TD B.12) that helps satisfy its fulfillment/control requirements.'
    explanation_ko: 'TAP TSI는 포괄적 규정이고, FCB는 그 발권/검표 요구를 충족하는 데 기여하는 구체적 기술 산물(TD B.12로 참조되는 바코드 표준)이다.'
sources:
  - name: 'FCB: Flexible Content Barcode (factsheet)'
    org: UIC
    version: IRS 90918-9
    section: ''
    url: 'https://uic.org/passenger/passenger-services-group/article/fcb-flexible-content-barcode'
  - name: TAP TSI Technical Document B.12
    org: European Union Agency for Railways (ERA)
    version: ''
    section: B.12
    url: 'https://www.era.europa.eu/system/files/2022-10/Recommendation%20on%20TAP%20TSI%20Revision%20-%20Technical%20Document%20-%20B12.pdf'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M10 12v24M15 12v24M20 12v24M25 12v24M30 12v24M35 12v24M38 12v24" stroke-width="1.6"/><path d="M28 30l3 3 6-7"/></svg>
---

> The Flexible Content Barcode is the current UIC barcode standard (IRS 90918-9; ERA TAP TSI Technical Document B.12) that uses an asymmetrically signed Aztec barcode to carry the rail transport contract. It is the enabling technology for paperless, PNR-less rail tickets that can be controlled on plain paper or a screen.

FCB encodes the contract data and an asymmetric digital signature so that any inspecting party with the issuer's public key can validate authenticity offline, without querying a central reservation system. As the successor to earlier fixed-layout UIC barcode standards, FCB supports flexible record structures for varied products (admissions, reservations, passes). It underpins 'print at home' and mobile tickets and is referenced by OSDM fulfillment and by TAP TSI Technical Document B.12.

**한국어 / Korean** — **유연 콘텐츠 바코드(FCB)** — Flexible Content Barcode(FCB)는 현행 UIC 바코드 표준(IRS 90918-9; ERA TAP TSI 기술문서 B.12)으로, 비대칭 전자서명된 Aztec 바코드를 사용해 철도 운송 계약을 담는다. 일반 용지나 화면에서 검표 가능한 무지(paperless)·무(無)PNR 철도 승차권을 가능케 하는 기반 기술이다.

FCB는 계약 데이터와 비대칭 디지털 서명을 인코딩하여, 발행자의 공개키를 가진 검표 주체가 중앙 예약 시스템을 조회하지 않고도 오프라인에서 진위를 검증할 수 있게 한다. 고정 레이아웃의 구형 UIC 바코드 표준을 잇는 후속 표준으로, 다양한 상품(admission, reservation, 패스)에 대한 유연한 레코드 구조를 지원한다. '집에서 인쇄'·모바일 승차권을 뒷받침하며, OSDM fulfillment과 TAP TSI 기술문서 B.12에서 참조된다.

**Aliases:** `Flexible Content Barcode`, `UIC barcode (FCB)`

# Provider & standard equivalents

| Provider | Term | Relationship | Context |
| --- | --- | --- | --- |
| UIC (IRS 90918-9 / GitHub UIC-barcode) | `FCB (IRS 90918-9, uicRailTicketData ASN.1)` | same | The formal UIC designation is the IRS 90918-9 'Flexible Content Barcode', defined via the uicRailTicketData ASN.1 schema in the UIC-barcode reference implementation; FCB/TLB use a variable-field, variable-size encoding. |
| UIC (legacy Leaflet 918-2 / 918-3) | `SSB / ELB / TLB` | narrower | The predecessor UIC barcode formats carry the same rail contract but with different, mostly fixed-field encodings: SSB (Small Structured Barcode, 'AZTEC V2' in 918-2V3), ELB (Element List Barcode, PDF417, used by SNCF), and TLB (Ticket Layout Barcode, 'DST barcode' in 918-3) — all now superseded by FCB. |
| ERA TAP TSI (TD B.12) | `TAP TSI Technical Document B.12 (2D barcode security)` | related | ERA TAP TSI TD B.12 is the EU regulatory document that mandates the 2D Aztec barcode and its asymmetric signing for rail ticketing, paired with TD B.11 (layout); it is the regulatory carrier of the FCB standard. |

# Related
- [Fulfillment (Rail)](/ground/rail/fulfillment-rail.md) — related
- [OSDM](/ground/rail/osdm.md) — related
- [TAP TSI](/ground/rail/tap-tsi.md) — broader
- [E-ticket](/air/air-ticket/e-ticket.md) — contrasts

# Distinctions
- **Flexible Content Barcode (FCB)** vs [Fulfillment (Rail)](/ground/rail/fulfillment-rail.md) — FCB is the signed-barcode container technology; fulfillment is the lifecycle step of issuing and controlling the ticket, which typically embeds an FCB.
- **Flexible Content Barcode (FCB)** vs [E-ticket](/air/air-ticket/e-ticket.md) — FCB is a self-validating, offline-checkable rail barcode; an air E-ticket is a coupon record held in a host system and validated against it. FCB enables PNR-less control, unlike GDS/host-dependent e-tickets.
- **Flexible Content Barcode (FCB)** vs [TAP TSI](/ground/rail/tap-tsi.md) — TAP TSI is the overarching regulation; FCB is one specific technical artifact (the barcode standard, referenced as TD B.12) that helps satisfy its fulfillment/control requirements.

# Citations
[1] [UIC — FCB: Flexible Content Barcode (factsheet) — IRS 90918-9](https://uic.org/passenger/passenger-services-group/article/fcb-flexible-content-barcode)
[2] [European Union Agency for Railways (ERA) — TAP TSI Technical Document B.12 — B.12](https://www.era.europa.eu/system/files/2022-10/Recommendation%20on%20TAP%20TSI%20Revision%20-%20Technical%20Document%20-%20B12.pdf)
