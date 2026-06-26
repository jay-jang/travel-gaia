# Travel Wiki — 2라운드 상호 토론

너(codex 또는 agy)는 1라운드에서 자문을 줬다. 아래는 **두 자문가(codex, agy)의 핵심 의견 요약**이다.
이제 서로의 의견을 보고 **쟁점 3가지에 대해 최종 합의안**을 내라. 결론 지향, 간결하게.

## 두 의견의 수렴점 (이미 합의됨, 재론 불필요)
- "OTA = Online Travel Agency"와 "OpenTravel Alliance(OTA spec)"는 **별도 표제어**로 분리.
- `providerTerms`는 flat 문자열이 아니라 `{term, context/note, relationship}` 객체.
- 모든 entry에 **출처(source) + 표준 버전/조문 번호** 필수, 빌드타임 **스키마 검증**으로 환각 차단.
- 소스 데이터는 `data/*.json`로 분리 관리 → 단일 `index.html`로 빌드.
- hash 라우팅(`#/term/pnr`)으로 deep-link. CSS/JS/JSON 전부 인라인(오프라인).
- 관계 타입 필요: related 외에 parent/children/conflicts, same/narrower/broader/conflicting.

## 쟁점 1: 카테고리 입도(granularity)
- **codex 입장**: 축을 늘려라. Air-Operations/Schedule, Availability/Inventory, Shopping/Pricing,
  Order/Post-booking, Hotel을 Inventory/Rate/Distribution로 분리, 범용 `Identifiers & Codes`, Payments 강화.
- **agy 입장**: 단순화해라. Air-Reservation/Interlining/Codes는 중복 많으니 `Air-Operations & Reservation`으로 통합.
- **질문**: MVP(표제어 ~60~90개)에 맞는 **최종 카테고리 목록**(8~12개)을 하나로 확정해라.

## 쟁점 2: 검색 구현
- **agy 입장**: MiniSearch/FlexSearch 같은 경량 라이브러리를 인라인 임베드해 fuzzy + 가중치 검색.
- **codex 입장**: "의존성 0" 원칙이면 외부 라이브러리 없이 가중치 토큰(역색인) 직접 구현.
- 제약: 이 프로젝트의 최우선 가치는 **standalone(의존성 0, 오프라인, 단일 파일)** 과 단순성이다.
- **질문**: 최종적으로 어떤 검색 방식을 택할지 **하나로 확정**하고 이유를 한 줄로.

## 쟁점 3: 최종 entry 스키마
- codex 추가 제안: `status`(active/deprecated/ambiguous), `conceptType`, `distinctions`, `lastReviewed`.
- agy 추가 제안: `standardBody`, `parent/children/conflicts`.
- **질문**: 위를 통합한 **최종 JSON 스키마**(필드 목록 + 각 1줄 설명)를 확정해라. MVP에서 과한 필드는 빼라.

## 출력 형식 (반드시 이대로)
```
[쟁점1 결론] 카테고리 최종 목록: ...
[쟁점2 결론] 검색 방식: ... (이유 1줄)
[쟁점3 결론] 최종 스키마: 필드 = 설명 (줄단위)
[한줄 총평] ...
```
