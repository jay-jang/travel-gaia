---
type: Standard
title: NOTAM
description: 'A NOTAM (Notice to Air Missions) is a notice filed with an aviation authority and distributed electronically to flight crews and operations staff that contains information about changes to aeronautical infrastructure, hazards to navigation, or temporary flight restrictions that are essential for safe flight operations. NOTAMs are mandated and standardized under ICAO Annex 15 (Aeronautical Information Services).'
tags:
  - air-ops
  - active
  - ICAO
timestamp: '2026-07-09T00:00:00Z'
id: notam
vertical: air
category: air-ops
conceptType: standard
status: active
abbreviation: NOTAM
term_ko: 항공고시보 (NOTAM)
definition_ko: 'NOTAM(Notice to Air Missions, 항공고시보)은 항공 당국에 제출되어 전자적으로 운항 승무원 및 운항 관련 직원에게 배포되는 통지로, 안전한 비행 운항에 필수적인 항공 인프라 변경 사항, 항법 장애물, 또는 임시 비행 제한에 관한 정보를 담는다. NOTAM은 ICAO Annex 15(항공정보서비스)에 따라 의무화되고 표준화되어 있다.'
longDef: 'NOTAM classes include NOTAM N (new), NOTAM R (replace), and NOTAM C (cancel/withdraw). Each NOTAM is identified by a unique series letter and sequential number issued by the originating NOTAM Office, contains structured fields (Q-code, location indicator, effective time, lower/upper limits, and free-text content), and is transmitted through the Aeronautical Fixed Telecommunication Network (AFTN) and ICAO NOTAMserver to pilots and dispatchers worldwide. Common NOTAM subjects include runway or taxiway closures, navigational aid (navaid) outages, airspace restrictions (TFRs, NOTAMs for VIP movements), aerodrome obstacle warnings, and changes to instrument approach procedures. Pilots are required to review relevant NOTAMs as part of pre-flight planning. The digital NOTAM format NOTAM-D is structured for automated machine parsing, supporting integration with flight planning systems and EFBs (Electronic Flight Bags).'
longDef_ko: 'NOTAM 종류에는 NOTAM N(신규), NOTAM R(대체), NOTAM C(취소/철회)가 있다. 각 NOTAM은 발행 NOTAM 사무소가 부여한 고유 시리즈 문자와 일련번호로 식별되며, 구조화된 필드(Q코드·위치표지·유효 시간·하한/상한 고도·자유 텍스트)를 담고 AFTN(항공고정통신망) 및 ICAO NOTAMserver를 통해 전 세계 조종사·운항관리사에게 전송된다. 일반적인 NOTAM 대상에는 활주로·유도로 폐쇄, 항행안전시설(navaid) 장애, 공역 제한(TFR, VIP 이동 관련 NOTAM), 비행장 장애물 경고, 계기접근절차 변경 등이 있다. 조종사는 비행 전 계획의 일환으로 관련 NOTAM을 검토할 의무가 있다. 디지털 NOTAM 형식인 NOTAM-D는 자동 기계 파싱을 위해 구조화되어 있어, 비행계획 시스템 및 전자비행가방(EFB)과의 통합을 지원한다.'
standardBody: ICAO
aliases:
  - Notice to Air Missions
  - Notice to Airmen
  - NOTAM-D
  - Aeronautical Notice
relationships:
  - type: related
    targetTerm: Block Time
  - type: related
    targetTerm: Slot
  - type: related
    targetTerm: Departure Control System (DCS)
  - type: related
    targetTerm: General Declaration
distinctions:
  - targetTerm: General Declaration
    explanation: 'A General Declaration (GenDec) is the official administrative document submitted to customs and immigration on arrival and departure; a NOTAM is an operational safety notice distributed to flight crews and operations staff before or during flight. They are distinct information flows: NOTAM (aeronautical authority → crew) and GenDec (airline → border authority).'
    explanation_ko: 'General Declaration(GenDec)은 입·출항 시 세관과 출입국 당국에 제출하는 공식 행정 문서이고, NOTAM은 비행 전후로 운항 승무원과 운항 담당자에게 배포되는 운영 안전 통지다. 이 둘은 별개의 정보 흐름이다: NOTAM(항공 당국→승무원)과 GenDec(항공사→국경 당국).'
  - targetTerm: Slot
    explanation: 'An airport slot is a scheduled time window for aircraft movement; a NOTAM may restrict or suspend the use of a runway or airspace that an allocated slot covers, requiring operational re-planning.'
    explanation_ko: '공항 슬롯은 항공기 이동을 위한 예약 시간 창이고, NOTAM은 할당된 슬롯이 적용되는 활주로나 공역을 제한·중단시켜 운영 재계획을 요구할 수 있다.'
sources:
  - name: Annex 15 — Aeronautical Information Services
    org: ICAO
    version: '16th Edition'
    section: ''
    url: 'https://www.icao.int/safety/information-management/Pages/AeronauticalInformationServices.aspx'
    tier: regulator-guidance
  - name: Notices to Air Missions (NOTAMs) and Temporary Flight Restrictions (TFRs)
    org: FAA
    version: ''
    section: ''
    url: 'https://www.faa.gov/pilots/safety/notams_tfr'
    tier: regulator-guidance
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="24" cy="24" r="18"/><line x1="24" y1="14" x2="24" y2="26"/><circle cx="24" cy="31" r="1.5" fill="currentColor"/><path d="M14 8l-4-4M34 8l4-4"/></svg>
---

> A NOTAM (Notice to Air Missions) is a notice filed with an aviation authority and distributed electronically to flight crews and operations staff that contains information about changes to aeronautical infrastructure, hazards to navigation, or temporary flight restrictions that are essential for safe flight operations. NOTAMs are mandated and standardized under ICAO Annex 15 (Aeronautical Information Services).

NOTAM classes include NOTAM N (new), NOTAM R (replace), and NOTAM C (cancel/withdraw). Each NOTAM is identified by a unique series letter and sequential number issued by the originating NOTAM Office, contains structured fields (Q-code, location indicator, effective time, lower/upper limits, and free-text content), and is transmitted through the Aeronautical Fixed Telecommunication Network (AFTN) and ICAO NOTAMserver to pilots and dispatchers worldwide. Common NOTAM subjects include runway or taxiway closures, navigational aid (navaid) outages, airspace restrictions (TFRs, NOTAMs for VIP movements), aerodrome obstacle warnings, and changes to instrument approach procedures. Pilots are required to review relevant NOTAMs as part of pre-flight planning. The digital NOTAM format NOTAM-D is structured for automated machine parsing, supporting integration with flight planning systems and EFBs (Electronic Flight Bags).

**한국어 / Korean** — **항공고시보 (NOTAM)** — NOTAM(Notice to Air Missions, 항공고시보)은 항공 당국에 제출되어 전자적으로 운항 승무원 및 운항 관련 직원에게 배포되는 통지로, 안전한 비행 운항에 필수적인 항공 인프라 변경 사항, 항법 장애물, 또는 임시 비행 제한에 관한 정보를 담는다. NOTAM은 ICAO Annex 15(항공정보서비스)에 따라 의무화되고 표준화되어 있다.

NOTAM 종류에는 NOTAM N(신규), NOTAM R(대체), NOTAM C(취소/철회)가 있다. 각 NOTAM은 발행 NOTAM 사무소가 부여한 고유 시리즈 문자와 일련번호로 식별되며, 구조화된 필드(Q코드·위치표지·유효 시간·하한/상한 고도·자유 텍스트)를 담고 AFTN(항공고정통신망) 및 ICAO NOTAMserver를 통해 전 세계 조종사·운항관리사에게 전송된다. 일반적인 NOTAM 대상에는 활주로·유도로 폐쇄, 항행안전시설(navaid) 장애, 공역 제한(TFR, VIP 이동 관련 NOTAM), 비행장 장애물 경고, 계기접근절차 변경 등이 있다.

**Aliases:** `Notice to Air Missions`, `Notice to Airmen`, `NOTAM-D`, `Aeronautical Notice`

# Related
- [Block Time](/air/air-ops/block-time.md) — related
- [Slot](/air/air-partner/slot.md) — related
- [Departure Control System (DCS)](/air/air-ops/departure-control-system-dcs.md) — related
- [General Declaration](/air/air-ops/general-declaration.md) — related

# Distinctions
- **NOTAM** vs [General Declaration](/air/air-ops/general-declaration.md) — A General Declaration (GenDec) is the official administrative document submitted to customs and immigration on arrival and departure; a NOTAM is an operational safety notice distributed to flight crews and operations staff before or during flight. They are distinct information flows: NOTAM (aeronautical authority → crew) and GenDec (airline → border authority).
- **NOTAM** vs [Slot](/air/air-partner/slot.md) — An airport slot is a scheduled time window for aircraft movement; a NOTAM may restrict or suspend the use of a runway or airspace that an allocated slot covers, requiring operational re-planning.

# Citations
[1] [ICAO — Annex 15 — Aeronautical Information Services — 16th Edition](https://www.icao.int/safety/information-management/Pages/AeronauticalInformationServices.aspx)
[2] [FAA — Notices to Air Missions (NOTAMs) and Temporary Flight Restrictions (TFRs)](https://www.faa.gov/pilots/safety/notams_tfr)
