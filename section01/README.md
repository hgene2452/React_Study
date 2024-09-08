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

5. [특수 연산자](https://github.com/hgene2452/React_Study/blob/main/section01/chapter08.js)

- Javascript 특수 연산자
  - null 병합 연산자(`??`) : null, undefined가 아닌 값을 찾아내는 연산자.
  - typeof 연산자(`typeof`) : 값의 타입을 문자열로 반환하는 연산자.
  - 삼항 연산자(`op ? tv : fv`) : 항을 3개 사용하는 연산자 - 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환.

6. [조건문](https://github.com/hgene2452/React_Study/blob/main/section01/chapter09.js)

- 특정 조건을 만족했을 때에만 실행되는 코드를 작성하기 위한 문법.
- `if`, `switch` 조건문.

7. [반복문](https://github.com/hgene2452/React_Study/blob/main/section01/chapter10.js)

- 어떠한 동작을 반복해서 수행할 수 있도록 만들어 주는 문법.
- `break` : 조건문이 완료되지 않았음에도 반복문을 강제 종료.
- `continue` : 특정 조건일 때 반복문을 건너뜀.

8. [함수](https://github.com/hgene2452/React_Study/blob/main/section01/chapter11.js)

- 함수 : 중복으로 작성된 유사항 기능을 하는 코드를 하나로 묶어 필요한 곳에서 호출해서 사용할 수 있도록 함.
- 함수선언 : 함수가 호출되었을 때, 어떤 코드들을 실행시킬 것인지 준비.
- 함수호출 : 미리 준비해두었던 코드들을 실행.
- 특징 :
  - 함수가 호출되면 프로그램의 실행순서가 함수내부로 넘어감.
  - 파라미터를 통해 동적으로 함수를 활용가능.
  - `return`을 통해 함수의 실행결과를 반환할 수 있음.
  - 중첩함수 : 함수 내부에서 또다른 함수호출 가능.
  - 호이스팅 :
    - 코드의 밑바닥에 선언된 코드들을 실행시키기전에 끌어올려줌.
    - Javascript에서는 함수선언을 함수호출보다 아래에 두어도 문제없이 실행됨.

9. [함수표현식, 화살표함수](https://github.com/hgene2452/React_Study/blob/main/section01/chapter12.js)

- 함수 표현식
  - Javascript에서는 함수도 변수로 취급 → 함수의 출력값이 아닌, 함수 자체를 변수에 담을 수 있음.
  - 함수를 담은 변수호출을 통해 함수를 호출 가능.
  - 함수선언을 하지 않고, 변수의 값으로 함수를 바로 담아버릴 수 있음.
  - 변수를 함수에 바로 담아버리면, 함수의 이름으로는 호출 불가.
  - 익명함수 : 따라서 함수생성시 변수에 바로 담을 거라면, 함수의 이름은 생략가능.
  - 변수의 값으로서 생성된 함수는 호이스팅 불가.
- 화살표 함수
  - 함수를 이전보다 더 빠르고, 간결하게 생성 가능.
  - 화살표 함수가 return문 하나만 가진다면, `{}`, `return` 예약어 생략가능.
