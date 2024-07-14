// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = 1 + 2 * 10; // 21: *,/,%가 +,-에 비해 우선순위가 높다
console.log(num6);
let num7 = (1 + 2) * 10; // 30: 연산순위가 낮은 연산부터 수행하고 싶은 경우 () 이용
console.log(num7);

// 3. 복합 대입 연산자
// -> 산술 연산자 + 대입 연산자
num7 = num7 + 20;
num7 += 20;
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 20;

// 4. 증감 연산자
let num8 = 10;
num8++; // 후위연산
console.log(++num8); // 전위연산: 변수 뒤에 증감 연산자가 붙으면 해당 행이 끝나고서야 결과 적용됨

// 5. 논리 연산자
let or = true || false;
let and = true && true;
let not = !true;

// 6. 비교 연산자
let comp1 = 1 === 2; // =을 3번 써서 비교할 경우, 값의 자료형까지 비교해준다
let comp2 = 1 !== 2;
let comp3 = 1 == "2"; // =을 2번만 쓰면 값만 비교한다
