// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는 것

let num = 10;
let str = "20";

const result = num + str;
console.log(result); // 1020: num 10이 연산과정에서 str의 타입인 string 타입으로 변환되었음

// 2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시
// -> 문자열 to 숫자
let str1 = "10";
let strToNum1 = Number(str1);
console.log(10 + strToNum1);

let str2 = "10개"; // 문자열에 숫자값이 아닌 다른 값이 포함될 경우, Number()가 아닌 parseInt()를 사용해야 한다
let strToNum2 = Number(str2);
console.log(strToNum2);
let strToNum3 = parseInt(str2); // parseInt()를 사용하더라도 값에 숫자값이 앞쪽에 와있어야 한다
console.log(strToNum3);

// 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1 + "입니다.");
