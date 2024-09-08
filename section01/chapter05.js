// 1. Number Type : 존재할 수 있는 모든 숫자값들을 포함

// 정수, 실수, 음수 모두 포함
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

// 기본적인 사칙연산을 모두 지원
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2); // 모듈러 연산(나머지 연산)

// 양,음의 무한대
let inf = Infinity;
let mInf = -Infinity;

// 수치연산이 실패했을때의 결과값 → 불가능할때의 연산에도 NaN이라는 결과가 존재하므로, 프로그램이 종료되지 않음
let nan = NaN;
console.log(1 * "hello"); // NaN

// 2. String Type : 문자열 값들을 모두 포함

// 무조건 ",' 를 통해 감싸주어야 함.
let myName = "이정환";

// 문자열 덧셈 연산을 지원
let myLocation = "목동";
let introduce = myName + myLocation;
console.log(introduce);

// 템플릿리터럴 문법 : `(백틱)으로도 문자열 표현 가능 → 문자열 내부에 변수를 동적으로 집어넣을 수 있도록 지원
let introduceText = `${myName}은 ${myLocation}에 거주합니다.`;
console.log(introduceText);

// 3. Boolean Type : 참이거나 거짓인 값들을 저장

// 어떠한 현재의 상태를 표현하는데 주로 사용됨
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type : '아무것도 없다' 라는 의미

let empty = null;

// 5. Undefined Type : undefined(변수를 선언하고 아무런 값도 집어넣지 않았을때 자동 할당됨)만을 포함

let none;
console.log(none);

// null vs undefined
// - null은 프로그래머가 직접 할당
// - undefined는 변수선언 후, 값을 할당하지 않거나 존재하지 않는 값을 불러오려고 하면 자동 할당됨
