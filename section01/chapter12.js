// 1. 함수 표현식
function funcA() {
  console.log("funcA");
}

// Javascript에서는 함수도 변수로 취급 → 함수의 출력값이 아닌, 함수 자체를 변수에 담음
let varA = funcA;
console.log(varA);

// 함수를 담은 변수호출을 통해 함수를 호출할 수도 있음
varA();

// 함수선언을 하지 않고, 변수의 값으로서 함수를 바로 담아버릴 수 있음
let varB = function funcB() {
  console.log("funcB");
};

// 변수에 함수를 바로 담아버리면 함수의 이름으로는 호출 불가
// funcB()
varB();

// 익명함수 : 따라서 함수생성시 변수에 바로 담을거라면, 함수의 이름은 생략가능
let varC = function () {
  console.log("funcC");
};
varC();

// 변수의 값으로서 생성된 함수는 호이스팅 불가
// varD();
let varD = function () {
  console.log("funcD");
};

// 2. 화살표 함수 : 함수를 이전보다 더 빠르고, 간결하게 생성가능
let varE = () => {
  console.log("funcE");
};
varE();

// 화살표 함수가 return문 하나만 가지고 있으면, {}중괄호, return 예약어 생략가능
let varF = (value) => value + 1;
console.log(varE(10));
