# 출처 신뢰도 업그레이드 설계 (claude code)

[검증전략] 환각 방지의 핵심 = **"조문/버전은 반드시 발행기관 도메인 URL에 묶일 때만 기입"**.
- 에이전트는 WebSearch→1차문서 발견→**WebFetch로 본문 확인** 후에만 version/section 기입. 못 찾으면 비워둔다(추측 금지).
- 적용 규칙: `version`/`section`이 있는데 그 출처의 `url`이 발행기관 도메인이 아니면 **version/section을 드롭**(거짓 권위 차단). 즉 조항번호는 검증 가능한 1차 URL과 항상 동반.
- (선택) 2단계: 새로 채운 version/section의 표본을 별도 verify 에이전트가 재-WebFetch해 일치 확인.

[tier 분류] source.tier:
- `standard-body` — IATA·ATPCO·OpenTravel·HTNG·ISO·ICAO·EMVCo·IETF
- `regulation` — 법/규제기관(eur-lex·US DOT·EBA·RBI·gov)
- `vendor-doc` — 공급자 공식문서(Amadeus·Sabre·Travelport·Booking dev)
- `association` — 산업협회(CLIA·AHLA·UIC·ACRISS·MobilityData)
- `encyclopedia` — wikipedia
- `secondary` — 블로그/뉴스/분석(altexsoft·squaremouth·xotels)
판정: 발행 org + 도메인으로.

[스키마] source에 추가: `tier`(위 enum), 선택 `accessed`(검증 ISO일자). version/section/url 유지. 후방호환(확장키 허용). UI: standard-body/regulation/vendor-doc/association = "1차 출처" 배지, encyclopedia/secondary = "참고".

[게이트] okf-validate 규칙:
1. WARN: 모든 출처가 secondary/encyclopedia인 엔트리(1차 없음)
2. WARN: version/section 있는데 url 없음(검증불가 조항=의심)
3. WARN: conceptType=standard|regulation인데 standard-body|regulation 출처 없음
4. WARN: regulation 엔트리 단일출처
5. INFO: 1차출처 %, version %

[워크플로 설계] 카테고리 에이전트. 입력=각 엔트리의 sources(특히 secondary거나 standard/regulation인데 version 없는 것)+정의. 출력=엔트리별 `sourcePatches:[{matchName, tier, url?, version?, section?}]`(name으로 기존 source 매칭). WebFetch로 확인한 필드만 반환. 적용: tier는 항상 설정, url/version/section은 제공+url동반시만. 중복/충돌은 name 매칭으로 덮어쓰기.

[스킵 기준] 이미 1차+버전 있는 출처는 손대지 않음. 지배 조문이 없는 일반 업무용어에 억지 version 금지(tier만). 좋은 vendor-doc을 더 약한 일반자료로 교체 금지(1차 추가+2차 강등, 삭제 금지).

[리스크/함정] (1) 조항 환각 → url-동반+WebFetch확인으로. (2) 과잉교체로 읽기 좋은 2차 손실 → 1차 추가하되 2차 보존. (3) 버전 드리프트(옛 NDC 버전) → 개념을 정의한 버전 + "as of". (4) 딥링크 link-rot → Wayback permalink 후속.

[한줄총평] **모든 조문/버전을 fetch된 1차-도메인 URL에 묶어라** — '있음'이 아니라 '검증가능성'이 신뢰다.
