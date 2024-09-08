## Javascript Basic

1. [변수, 상수](https://github.com/hgene2452/React_Study/blob/main/section01/chapter04.js)

- 변수 :
  - 프로그램이 실행되는 동안 계속해서 값을 변경해가면서 저장가능한 저장소.
  - 변수 선언 예약어 `let`.
- 상수 :
  - 한번 저장된 값을 다시는 변경할 수 없는 저장소.
  - 상수 선언 예약어 `const`.

2. [자료형(타입)](https://github.com/hgene2452/React_Study/blob/main/section01/chapter05.js)

- 원시타입
  - Number : 정수, 실수, 음수, `Infinity`, `NaN`.
  - String : 모든 문자열.
    - 템플릿 리터럴 문법 : `${변수}를 동적으로 할당 가능`.
  - Boolean : `true` or `false`.
  - Null : '아무것도 없다'를 개발자가 직접 할당.
  - Undefined : '아무것도 없다'를 프로그램이 자동 할당.

3. [형 변환(타입캐스팅)](https://github.com/hgene2452/React_Study/blob/main/section01/chapter06.js)

- 묵시적 형 변환 : 개발자가 직접 설정하지 않아도 알아서 Javascript 엔진이 형 변환하는 것을 말함.
- 명시적 형 변환 : 개발자가 직접 내장함수 등을 이용해 형 변환을 일으킴.

4. [기본 연산자](https://github.com/hgene2452/React_Study/blob/main/section01/chapter07.js)

- 프로그래밍에서의 다양한 연산을 위한 기호, 키워드를 말함.
- 기본 연산자
  - 대입 연산자(`=`) : 변수의 값을 저장할 때 사용.
  - 산술 연산자(`+`,`-`,`*`,`/`,`%`) : 사칙연산, 모듈러 연산.
  - 복합 대입 연산자(`+=`) : 산술연산 + 대입연산.
  - 증감 연산자(`++`,`--`) : 값을 1씩 늘이거나, 줄일 때 사용.
  - 논리 연산자(`||`,`&&`,`!`) : Boolean 타입의 값을 다룰 때 사용.
  - 비교 연산자(`===`,`!==`,`<`,`>`,`<=`,`>=`) : 두 개의 값을 서로 비교.
    - `===` : 값의 자료형까지 비교.

4. [특수 연산자](https://github.com/hgene2452/React_Study/blob/main/section01/chapter08.js)

- Javascript 특수 연산자
  - null 병합 연산자(`??`) : null, undefined가 아닌 값을 찾아내는 연산자.
  - typeof 연산자(`typeof`) : 값의 타입을 문자열로 반환하는 연산자.
  - 삼항 연산자(`op ? tv : fv`) : 항을 3개 사용하는 연산자 - 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환.
