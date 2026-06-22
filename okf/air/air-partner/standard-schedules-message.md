---
type: Standard
title: Standard Schedules Message
description: 'The IATA-standard message format (defined in the Standard Schedules Information Manual, SSIM Chapter 4) by which an airline distributes permanent flight-schedule creations, changes, and cancellations to GDSs, partners, and other recipients. The SSM communicates the carrier''s regular operating program; its companion, the Ad-hoc Schedule Message (ASM, SSIM Chapter 5), handles short-term, flight-specific or irregular adjustments.'
tags:
  - air-partner
  - active
  - IATA
timestamp: '2026-06-17T00:00:00Z'
id: standard-schedules-message
vertical: air
category: air-partner
conceptType: standard
status: active
abbreviation: SSM
term_ko: 표준 스케줄 메시지(SSM)
definition_ko: '항공사가 영구적인 항공편 스케줄의 생성·변경·취소를 GDS, 파트너 및 기타 수신자에게 배포하는 IATA 표준 메시지 포맷(SSIM 제4장에서 정의). SSM은 항공사의 정규 운항 프로그램을 전달하며, 그 짝이 되는 임시 스케줄 메시지(ASM, SSIM 제5장)는 단기적이고 특정 항공편 단위이거나 비정기적인 조정을 처리한다.'
longDef: 'The Standard Schedules Message (SSM) is the operational mechanism behind schedule changes: airlines send SSM actions—such as NEW (create a flight), CNL (cancel), TIM (time change), EQT (equipment change), RPL (replace), and SKD (schedule period)—in the standardized SSIM structure so that downstream systems can update their flight databases consistently. SSMs carry recurring, dated schedule periods, whereas the Ad-hoc Schedule Message (ASM) is used for individual flight legs and last-minute changes closer to departure. Together SSM/ASM are how published schedules propagate to GDSs and reservation systems, and they are the source of the schedule-change notifications that drive PNR queueing, involuntary reissue, and re-accommodation.'
longDef_ko: '표준 스케줄 메시지(SSM)는 스케줄 변경의 운영적 메커니즘이다. 항공사는 NEW(항공편 생성), CNL(취소), TIM(시간 변경), EQT(기재 변경), RPL(대체), SKD(스케줄 기간) 같은 SSM 액션을 표준화된 SSIM 구조로 전송하여, 하류(downstream) 시스템이 자신의 항공편 데이터베이스를 일관되게 갱신할 수 있게 한다. SSM은 반복적이고 기간이 지정된 스케줄을 전달하는 반면, 임시 스케줄 메시지(ASM)는 개별 항공편 구간(leg)과 출발에 임박한 막판 변경에 사용된다. SSM/ASM은 함께 게시된 스케줄이 GDS와 예약 시스템으로 전파되는 방식이며, PNR 큐잉, 비자발적 재발권, 재수용을 유발하는 스케줄 변경 통지의 원천이다.'
standardBody: IATA
aliases:
  - SSM
  - Standard Schedules Message
  - Standard Schedule Message
relationships:
  - type: related
    targetTerm: Schedule Change
  - type: related
    targetTerm: GDS
  - type: related
    targetTerm: Flight Number
  - type: related
    targetTerm: Codeshare
  - type: related
    targetTerm: Queue
  - type: related
    targetTerm: Aircraft Type Code
distinctions:
  - targetTerm: Schedule Change
    explanation: 'A schedule change is the business event of altering a published flight; the SSM is the standardized IATA message format that actually carries that creation, change, or cancellation to GDSs and partners.'
    explanation_ko: '스케줄 변경은 게시된 항공편을 변경하는 비즈니스 사건이고, SSM은 그 생성·변경·취소를 실제로 GDS와 파트너에게 전달하는 표준화된 IATA 메시지 포맷이다.'
  - targetTerm: Codeshare
    explanation: SSM is the messaging that distributes schedules (and can convey codeshare/operating-carrier data per SSIM); a codeshare is the commercial arrangement whose marketing and operating flight data those messages communicate.
    explanation_ko: 'SSM은 스케줄을 배포하는 메시징(SSIM에 따라 공동운항/운항 항공사 데이터를 전달할 수 있음)이고, 공동운항은 그 메시지가 전달하는 판매·운항 항공편 데이터의 기반이 되는 상업적 협정이다.'
  - targetTerm: Availability Status Message (AVS)
    explanation: 'An SSM distributes the existence and timing of flights (schedule creates, changes, cancellations); an AVS distributes the bookable seat status of those flights by class. Schedule first, then availability on it.'
    explanation_ko: 'SSM은 flight의 존재와 시각(스케줄 생성·변경·취소)을 배포하고, AVS는 그 flight들의 class별 판매 가능 좌석 상태를 배포한다. 스케줄이 먼저, 그 위의 availability가 그 다음이다.'
  - targetTerm: MERITS
    explanation: 'MERITS is a UIC integrated rail timetable database exchanged via EDIFACT SKDUPD/TSDUPD messages; the Standard Schedules Message (SSIM) is the IATA standard for exchanging airline schedule data. Both convey schedules, but MERITS is the rail-mode integrated timetable store while SSIM is the air-mode schedule message format.'
    explanation_ko: 'MERITS는 EDIFACT SKDUPD/TSDUPD 메시지로 교환되는 UIC 통합 철도 시각표 데이터베이스이고, Standard Schedules Message(SSIM)는 항공 스케줄 데이터를 교환하는 IATA 표준이다. 둘 다 스케줄을 전달하지만, MERITS는 철도 통합 시각표 저장소, SSIM은 항공 스케줄 메시지 형식이다.'
  - targetTerm: Standard Schedules Information Manual (SSIM)
    explanation: 'The SSM is one message type defined within the SSIM; the SSIM is the full manual and file-format standard that defines the SSM, the ASM, the batch SSIM file and all the supporting code conventions.'
    explanation_ko: 'SSM은 SSIM 안에서 정의된 하나의 메시지 타입이고, SSIM은 SSM·ASM·batch SSIM 파일과 그 모든 보조 코드 관례를 정의하는 전체 매뉴얼이자 파일 포맷 표준이다.'
sources:
  - name: 'Standard Schedules Information Manual (SSIM), Chapter 4 — Standard Schedules Message (SSM)'
    org: IATA
    version: ''
    section: Chapter 4
    url: 'https://www.iata.org/en/publications/manuals/standard-schedules-information/'
  - name: 'Standard Schedules Information Manual (SSIM), Chapter 5 — Ad-hoc Schedule Message (ASM)'
    org: IATA
    version: ''
    section: Chapter 5
    url: 'https://www.iata.org/en/publications/manuals/standard-schedules-information/'
icon: <svg viewBox="0 0 48 48" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M8 12h32a2 2 0 0 1 2 2v18a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V14a2 2 0 0 1 2-2z"/><path d="M6 15l18 11 18-11"/><path d="M14 38l5-5M34 38l-5-5"/></svg>
---

> The IATA-standard message format (defined in the Standard Schedules Information Manual, SSIM Chapter 4) by which an airline distributes permanent flight-schedule creations, changes, and cancellations to GDSs, partners, and other recipients. The SSM communicates the carrier's regular operating program; its companion, the Ad-hoc Schedule Message (ASM, SSIM Chapter 5), handles short-term, flight-specific or irregular adjustments.

The Standard Schedules Message (SSM) is the operational mechanism behind schedule changes: airlines send SSM actions—such as NEW (create a flight), CNL (cancel), TIM (time change), EQT (equipment change), RPL (replace), and SKD (schedule period)—in the standardized SSIM structure so that downstream systems can update their flight databases consistently. SSMs carry recurring, dated schedule periods, whereas the Ad-hoc Schedule Message (ASM) is used for individual flight legs and last-minute changes closer to departure. Together SSM/ASM are how published schedules propagate to GDSs and reservation systems, and they are the source of the schedule-change notifications that drive PNR queueing, involuntary reissue, and re-accommodation.

**한국어 / Korean** — **표준 스케줄 메시지(SSM)** — 항공사가 영구적인 항공편 스케줄의 생성·변경·취소를 GDS, 파트너 및 기타 수신자에게 배포하는 IATA 표준 메시지 포맷(SSIM 제4장에서 정의). SSM은 항공사의 정규 운항 프로그램을 전달하며, 그 짝이 되는 임시 스케줄 메시지(ASM, SSIM 제5장)는 단기적이고 특정 항공편 단위이거나 비정기적인 조정을 처리한다.

표준 스케줄 메시지(SSM)는 스케줄 변경의 운영적 메커니즘이다. 항공사는 NEW(항공편 생성), CNL(취소), TIM(시간 변경), EQT(기재 변경), RPL(대체), SKD(스케줄 기간) 같은 SSM 액션을 표준화된 SSIM 구조로 전송하여, 하류(downstream) 시스템이 자신의 항공편 데이터베이스를 일관되게 갱신할 수 있게 한다. SSM은 반복적이고 기간이 지정된 스케줄을 전달하는 반면, 임시 스케줄 메시지(ASM)는 개별 항공편 구간(leg)과 출발에 임박한 막판 변경에 사용된다. SSM/ASM은 함께 게시된 스케줄이 GDS와 예약 시스템으로 전파되는 방식이며, PNR 큐잉, 비자발적 재발권, 재수용을 유발하는 스케줄 변경 통지의 원천이다.

**Aliases:** `SSM`, `Standard Schedules Message`, `Standard Schedule Message`

# Related
- [Schedule Change](/air/air-partner/schedule-change.md) — related
- [GDS](/common/standards/gds.md) — related
- [Flight Number](/common/codes/flight-number.md) — related
- [Codeshare](/air/air-partner/codeshare.md) — related
- [Queue](/air/air-ops/queue.md) — related
- [Aircraft Type Code](/common/codes/aircraft-type-code.md) — related

# Distinctions
- **Standard Schedules Message** vs [Schedule Change](/air/air-partner/schedule-change.md) — A schedule change is the business event of altering a published flight; the SSM is the standardized IATA message format that actually carries that creation, change, or cancellation to GDSs and partners.
- **Standard Schedules Message** vs [Codeshare](/air/air-partner/codeshare.md) — SSM is the messaging that distributes schedules (and can convey codeshare/operating-carrier data per SSIM); a codeshare is the commercial arrangement whose marketing and operating flight data those messages communicate.
- **Standard Schedules Message** vs [Availability Status Message (AVS)](/air/air-ops/availability-status-message-avs.md) — An SSM distributes the existence and timing of flights (schedule creates, changes, cancellations); an AVS distributes the bookable seat status of those flights by class. Schedule first, then availability on it.
- **Standard Schedules Message** vs [MERITS](/ground/rail/merits.md) — MERITS is a UIC integrated rail timetable database exchanged via EDIFACT SKDUPD/TSDUPD messages; the Standard Schedules Message (SSIM) is the IATA standard for exchanging airline schedule data. Both convey schedules, but MERITS is the rail-mode integrated timetable store while SSIM is the air-mode schedule message format.
- **Standard Schedules Message** vs [Standard Schedules Information Manual (SSIM)](/air/air-ops/standard-schedules-information-manual-ssim.md) — The SSM is one message type defined within the SSIM; the SSIM is the full manual and file-format standard that defines the SSM, the ASM, the batch SSIM file and all the supporting code conventions.

# Citations
[1] [IATA — Standard Schedules Information Manual (SSIM), Chapter 4 — Standard Schedules Message (SSM) — Chapter 4](https://www.iata.org/en/publications/manuals/standard-schedules-information/)
[2] [IATA — Standard Schedules Information Manual (SSIM), Chapter 5 — Ad-hoc Schedule Message (ASM) — Chapter 5](https://www.iata.org/en/publications/manuals/standard-schedules-information/)
