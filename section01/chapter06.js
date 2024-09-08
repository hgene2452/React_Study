// 1. 묵시적 형 변환 : 자바스크립트 엔진이 알아서 형 변환 하는것

let num = 10;
let str = "20";

// int + string → string
// 특정 하나의 변수만 형 변환해주면, 오류가 일어나지 않는 연산일때만 묵시적 형 변환
const result = num + str;
console.log(result);

// 2. 명시적 형 변환 : 개발자가 내장함수 등을 이용해서 직접 형 변환을 명시

let str1 = "10";
let strToNum1 = Number(str1);
console.log(strToNum1);

// 숫자값이 아닌 문자열을 Number()로 형 변환하려하면 NaN이 결과값
let str2 = "10개";
let strToNum2 = Number(str2);

// 숫자값이 아닌 문자열은 parseInt()를 통해 형 변환 → 이때에도 숫자가 앞쪽에 나와있어야 함
let strToNum3 = parseInt(str2);
console.log(strToNum3);

let num1 = 20;
let numToStr1 = String(num1);
console.log(num1);
