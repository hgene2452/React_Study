// 1. 함수 표현식
function funcA() {
  console.log("funcA");
}

let varA = funcA(); // 함수자체를 변수에 저장
varA(); // 함수자체를 저장한 변수를 호출함으로써 함수를 호출할 수 있음

let varB = function funcB() {
  console.log("funcB");
};

varB(); // 값으로써 함수생성: 함수를 만듦과 동시에 변수에 담은 함수는 함수명으로 호출할 수 없음

let varC = function () {
  console.log("funcC");
};

varC(); // 익명함수: 어차피 만듦과 동시에 변수에 저장한 함수는 함수명으로 호출할 수 없기 때문에 이름 생략 가능

// 2. 화살표 함수
// -> 함수를 이전보다 더 빠르고 간결하게 생성할 수 있도록 도와주는 자바스크립트 문법
let varD = () => {
  return 1;
};

varD();

let varE = (value) => 1; // 함수내부 선언이 단순히 return문이라면 중괄호, return 생략가능

varE(10);
