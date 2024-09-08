// 1. null 병합 연산자(??) : null, undefined가 아닌 값을 찾아내는 연산자
let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
let var5 = var1 ?? var3;
console.log(var4, var5);

// null 병합 연산에 참여하는 모든 피연산자가 null, undefined가 아니라면, 앞의 값을 반환
let var6 = var2 ?? var3;
console.log(var6);

// 2. typeof 연산자(typeof) : 값의 타입을 문자열로 반환하는 연산자
let var7 = 1;
var7 = "hello";

let t1 = typeof var7;
console.log(t1);

// 3. 삼항 연산자(op ? tv : fv) : 항을 3개 사용하는 연산자 - 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환
let var8 = 10;

// 요구사항 : 변수 res에 var8의 값이 짝수 → "짝", 홀수 → "홀"
let res = var8 % 2 === 0 ? "짝" : "홀";
console.log(res);
