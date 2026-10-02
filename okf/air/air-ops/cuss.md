---
type: Standard
title: CUSS
description: 'Common-Use Self-Service (CUSS) is an IATA standard (RP 1706c) that allows a shared self-service kiosk at an airport to be used by multiple participating airlines, enabling passengers of those airlines to check in, select seats, or print boarding passes without airline-dedicated hardware. Unlike CUTE (which governs shared staff workstations), CUSS governs the passenger-facing self-service layer at kiosks and bag-drop units.'
tags:
  - air-ops
  - active
  - IATA
timestamp: '2026-10-02T00:00:00Z'
id: cuss
vertical: air
category: air-ops
conceptType: standard
status: active
abbreviation: CUSS
term_ko: 공용 셀프서비스(CUSS)
definition_ko: 'CUSS(Common-Use Self-Service)는 공항의 공용 셀프서비스 키오스크를 여러 항공사가 함께 사용할 수 있도록 규정한 IATA 표준(RP 1706c)이다. 해당 항공사의 승객은 항공사 전용 하드웨어 없이 체크인, 좌석 선택, 탑승권 출력 등의 셀프서비스를 이용할 수 있다. 직원 전용 탑승구·카운터 장비 공유를 규정하는 CUTE와 달리, CUSS는 키오스크·자동수하물위탁(bag-drop) 장비 등 승객 대면 셀프서비스 계층을 다룬다.'
longDef: 'Under CUSS, an airport authority or ground handler installs shared kiosk hardware running CUSS-compliant software; each participating airline contributes its own application module, which the kiosk loads when a passenger identifies their carrier. This model reduces airline capex (no per-carrier dedicated hardware), increases airport floor-space efficiency, and provides a consistent self-service experience. The companion standard CUPPS (IATA RP 1797) governs common-use staff workstations at check-in counters and gates. CUSS 2.0, published around 2018, updated the technical specifications to support biometric boarding and off-airport kiosk deployments (hotels, city check-in counters). The standard is maintained by IATA in coordination with ACI (Airports Council International) and NCI (NARITA Common IT Infrastructure).'
longDef_ko: 'CUSS에서는 공항 당국 또는 지상취급사가 CUSS 호환 소프트웨어를 실행하는 공용 키오스크 하드웨어를 설치하고, 각 참여 항공사는 자체 애플리케이션 모듈을 제공하여 승객이 항공사를 확인하면 키오스크가 해당 모듈을 로드한다. 이 방식은 항공사 자본비용(항공사 전용 하드웨어 불필요)을 줄이고 공항 공간 효율을 높이며 일관된 셀프서비스 경험을 제공한다. 직원용 체크인 카운터와 게이트의 공용 장비를 규정하는 동반 표준은 CUPPS(IATA RP 1797)이다. 2018년 전후로 발표된 CUSS 2.0은 생체인식 탑승 및 공항 외부 키오스크(호텔, 시내 체크인 카운터) 배포를 지원하도록 기술 사양을 갱신했다.'
standardBody: IATA
aliases:
  - Common-Use Self-Service
  - CUSS Kiosk
  - Common Use Self Service
relationships:
  - type: related
    targetTerm: CUTE
  - type: related
    targetTerm: Boarding Pass
  - type: related
    targetTerm: Departure Control System (DCS)
  - type: related
    targetTerm: Biometric Passport
distinctions:
  - targetTerm: CUTE
    explanation: 'CUTE (Common Use Terminal Equipment) governs shared staff workstations at check-in counters and boarding gates, used by airline agents; CUSS governs shared self-service kiosks used directly by passengers without staff assistance.'
    explanation_ko: 'CUTE는 항공사 직원이 사용하는 체크인 카운터와 탑승 게이트의 공용 직원 워크스테이션을 규정하고, CUSS는 직원 도움 없이 승객이 직접 사용하는 공용 셀프서비스 키오스크를 규정한다.'
  - targetTerm: Departure Control System (DCS)
    explanation: 'The DCS is the airline back-end system managing check-in, seat assignments, and boarding; CUSS is the front-end standard that defines how shared kiosks present the DCS-connected airline applications to passengers.'
    explanation_ko: 'DCS는 체크인, 좌석 배정, 탑승을 관리하는 항공사 백엔드 시스템이고, CUSS는 DCS에 연결된 항공사 애플리케이션을 승객에게 제공하는 공용 키오스크의 프런트엔드 표준이다.'
sources:
  - name: Common-Use Self-Service (CUSS) Standard
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/store/publications/manuals-standards-and-regulations/common-use-self-service-cuss__cuss/'
    tier: standard-body
  - name: Common Use Programs Overview
    org: IATA
    version: ''
    section: ''
    url: 'https://www.iata.org/en/programs/passenger/common-use/'
    tier: standard-body
  - name: CUSS and CUPPS Explained
    org: KMA Global
    version: ''
    section: ''
    url: 'https://kma.global/cuss-cupps/'
    tier: secondary
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><rect x="14" y="6" width="20" height="32" rx="2"/><line x1="19" y1="12" x2="29" y2="12"/><line x1="19" y1="17" x2="29" y2="17"/><line x1="19" y1="22" x2="25" y2="22"/><rect x="18" y="27" width="12" height="5" rx="1"/><line x1="24" y1="38" x2="24" y2="42"/><line x1="18" y1="42" x2="30" y2="42"/></svg>
---

> Common-Use Self-Service (CUSS) is an IATA standard (RP 1706c) that allows a shared self-service kiosk at an airport to be used by multiple participating airlines, enabling passengers of those airlines to check in, select seats, or print boarding passes without airline-dedicated hardware. Unlike CUTE (which governs shared staff workstations), CUSS governs the passenger-facing self-service layer at kiosks and bag-drop units.

Under CUSS, an airport authority or ground handler installs shared kiosk hardware running CUSS-compliant software; each participating airline contributes its own application module, which the kiosk loads when a passenger identifies their carrier. This model reduces airline capex (no per-carrier dedicated hardware), increases airport floor-space efficiency, and provides a consistent self-service experience. The companion standard CUPPS (IATA RP 1797) governs common-use staff workstations at check-in counters and gates. CUSS 2.0, published around 2018, updated the technical specifications to support biometric boarding and off-airport kiosk deployments (hotels, city check-in counters).

**한국어 / Korean** — **공용 셀프서비스(CUSS)** — CUSS(Common-Use Self-Service)는 공항의 공용 셀프서비스 키오스크를 여러 항공사가 함께 사용할 수 있도록 규정한 IATA 표준(RP 1706c)이다. 해당 항공사의 승객은 항공사 전용 하드웨어 없이 체크인, 좌석 선택, 탑승권 출력 등의 셀프서비스를 이용할 수 있다. 직원 전용 탑승구·카운터 장비 공유를 규정하는 CUTE와 달리, CUSS는 키오스크·자동수하물위탁(bag-drop) 장비 등 승객 대면 셀프서비스 계층을 다룬다.

CUSS에서는 공항 당국 또는 지상취급사가 CUSS 호환 소프트웨어를 실행하는 공용 키오스크 하드웨어를 설치하고, 각 참여 항공사는 자체 애플리케이션 모듈을 제공하여 승객이 항공사를 확인하면 키오스크가 해당 모듈을 로드한다. 직원용 체크인 카운터와 게이트의 공용 장비를 규정하는 동반 표준은 CUPPS(IATA RP 1797)이다.

**Aliases:** `Common-Use Self-Service`, `CUSS Kiosk`, `Common Use Self Service`

# Related
- [CUTE](/air/air-ops/cute.md) — related
- [Boarding Pass](/air/air-ops/boarding-pass.md) — related
- [Departure Control System (DCS)](/air/air-ops/departure-control-system-dcs.md) — related
- [Biometric Passport](/common/customer/biometric-passport.md) — related

# Distinctions
- **CUSS** vs [CUTE](/air/air-ops/cute.md) — CUTE (Common Use Terminal Equipment) governs shared staff workstations at check-in counters and boarding gates, used by airline agents; CUSS governs shared self-service kiosks used directly by passengers without staff assistance.
- **CUSS** vs [Departure Control System (DCS)](/air/air-ops/departure-control-system-dcs.md) — The DCS is the airline back-end system managing check-in, seat assignments, and boarding; CUSS is the front-end standard that defines how shared kiosks present the DCS-connected airline applications to passengers.

# Citations
[1] [IATA — Common-Use Self-Service (CUSS) Standard](https://www.iata.org/en/store/publications/manuals-standards-and-regulations/common-use-self-service-cuss__cuss/)
[2] [IATA — Common Use Programs Overview](https://www.iata.org/en/programs/passenger/common-use/)
[3] [KMA Global — CUSS and CUPPS Explained](https://kma.global/cuss-cupps/)
