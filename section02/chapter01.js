// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; // BigInteger

if (!f1) {
  console.log("falsy");
}

// 2. Truthy한 값
// -> 7가지의 Falsy한 값을 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t4) {
  console.log("truthy");
}

// 3. 활용 사례
// -> 객체의 특정 프로퍼티에 접근하려고 하는데, 실제 웹개발 상황에서는 해당 프로퍼티가 undefined인 경우가 많다
// -> 따라서 웹개발시 객체의 프로퍼티에 접근해야하는 상황인 경우, 조건문으로 null이거나 undefined가 아님을 우선 확인해준다
// -> 이때, Truthy, Falsy를 활용하여 조건식을 단순화할 수 있다
function printName(person) {
  if (!person) {
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

let person = { name: "이정환" };
printName(person);
