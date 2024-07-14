// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let tnum3 = -20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2); // 모듈러 연산: 나머지 구하기

let inf = Infinity; // 양의 무한대
let mInf = -Infinity; // 음의 무한대

let nan = NaN; // Not a Number: 수치연산이 실패했을때의 결과값
console.log(1 * "hello");

// 2. String Type
let myName = "이정환"; // ' or " 으로 값을 감싸주어야 한다
let myLocation = "목동";
let introduce = myName + myLocation; // 덧셈 연산까지 지원한다: 문자열을 이어붙인 값 도출

let introduceText = `${myName}은 ${myLocation}에 거주합니다.`; // 템플릿 리터널 문법: `(백틱)으로 문자열을 감쌀 경우, '${}'를 통해 값을 동적으로 집어넣을 수 있다
console.log(introduceText);

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다)
let empty = null;

// 5. undefined Type
let none;
console.log(none);
