// 1. 대입 연산자(=) : 변수의 값을 저장할 때 사용
let var1 = 1;

// 2. 산술 연산자(+,-,*,/,%) : 사칙연산, 모듈러 연산
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

// 산술연산 사이의 우선순위 존재 : *, /, % → +, -
let num6 = 1 + 2 * 10;
console.log(num6);

// 우선순위가 낮은 연산부터 수행하고 싶다면 ()소괄호 활용
let num7 = (1 + 2) * 10;
console.log(num7);

// 3. 복합 대입 연산자(+=) : 산술연산 + 대입연산
let num8 = 10;
num8 += 20; // num8 = num8 + 20;
console.log(num8);

// 4. 증감 연산자(++,--) : 값을 1씩 늘이거나, 줄일때 사용
let num9 = 10;
console.log(num9++); // 후위연산
console.log(++num9); // 전위연산

// 5. 논리 연산자(||,&&,!) : Boolean 타입의 값을 다룰 때 사용
let or = true || false; // 하나만 참이면 참
let and = true && false; // 모두 참이어야 참
let not = !true; // 참 → 거짓, 거짓 → 참
console.log(or, and, not);

// 6. 비교 연산자 : 두 개의 값을 서로 비교하는 연산
// === : 값의 자료형까지 비교
let comp1 = 1 === 2; // 동등 연산자
let comp2 = 1 !== 2; // 비동등 연산자
console.log(comp1, comp2);

let comp3 = 2 > 1; // 대소 연산자
let comp4 = 2 < 1;
console.log(comp3, comp4);

let comp5 = 2 >= 2; // 대소 동등 연산자
let comp6 = 2 <= 2;
console.log(comp5, comp6);
