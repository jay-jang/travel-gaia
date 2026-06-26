# Travel Wiki — Design Brief (자문 요청용)

## 목표
여행 산업의 **데이터 레퍼런스**가 되는 콘텐츠 서비스. 1차 산출물은 여행 관련 각 업체/표준의
spec을 분석해 **용어를 통일**한 **wiki 형태의 백과사전**. 항상 쉽게 접근 가능하도록 **standalone
단일 HTML 파일**(빌드/서버 불필요, 오프라인·더블클릭 동작)로 제공.

## 내가 제안하는 설계 (이걸 비평/보완해줘)

### A. 용어 도메인(카테고리) 커버리지 — 항공/유통/숙박/정산/부가
1. Air-Reservation: GDS, PNR, segment, ARNK, passive segment, queue
2. Air-Fares: RBD/booking class, fare basis, fare family, branded fare, ATPCO, NUC
3. Air-Ticketing: e-ticket, EMD, coupon, ticketing time limit, involuntary/voluntary reissue
4. Air-Codes: IATA/ICAO airport·airline·city code, SSR, OSI, APIS
5. Air-Interlining: codeshare, interline, MITA, SPA, leg/segment
6. NDC: NDC, offer, order, OrderID, ONE Order, Aggregator/Seller/Carrier roles
7. Distribution: OTA(Online Travel Agency), OpenTravel Alliance(OTA spec), bedbank, channel manager, metasearch
8. Hotel: rate plan, room type, board basis(BB/HB/FB/AI), occupancy, ADR, RevPAR, allotment, BAR
9. Settlement: BSP, ARC, IATA clearing house, commission, net rate
10. Ancillary/Other: car rental, rail, cruise, travel insurance, ancillary/EMD-A

### B. "용어 통일" 데이터 모델
각 표제어 entry:
```
{ id, term, category, shortDef, longDef,
  aliases: [...다른 표기],
  providerTerms: { "Amadeus":"...", "Sabre":"...", "Booking.com":"...", "IATA":"..." },
  related: [다른 term id], source: "IATA Resolution xxx / NDC 21.3 ..." }
```
같은 개념이 공급자마다 다른 이름을 갖는 문제를 `aliases` + `providerTerms`로 해소.

### C. Standalone wiki 포맷
- 단일 `index.html`에 JSON 데이터 인라인 임베드, 의존성 0, 클라이언트 사이드 검색.
- 좌측 카테고리 네비 + 상단 검색 + 표제어 본문(교차링크) + "see also" + 공급자별 동의어 표.

## 질문 (구조화해서 답해줘)
1. 도메인 커버리지에서 빠진 것 / 합쳐야 할 것 / 잘못된 것?
2. "용어 통일" 데이터 모델 개선점? (provider 간 동의어/충돌 표현에 더 나은 구조?)
3. Standalone 단일 HTML 접근의 함정(파일 크기, 검색 UX, 접근성)과 권고?
4. 반드시 포함해야 할 핵심 표제어 20개를 꼽아줘.
5. 정확성 리스크(실제 산업 spec 기반인데 LLM 환각 위험) 줄일 방법?

간결하고 구조화된 답변 부탁. 각 항목 번호로 답해줘.
