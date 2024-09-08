// 함수선언 : 함수가 호출되었을 때 어떤 코드들을 실행시킬 것인지 미리 준비
function greeting() {
  console.log("안녕하세요!");
}

// 함수호출 : 미리 준비해두었던 코드를 실행
greeting();

// 함수가 호출되면 프로그램의 실행순서가 함수내부로 넘어감
console.log("호출 전");
greeting();
console.log("호출 후");

// 파라미터를 통해 동적으로 함수를 사용할 수 있음
function writeArea(width, height) {
  let area = width * height;
  console.log(area);
}

writeArea(10, 20);
writeArea(120, 600);

// return을 통해 함수의 실행결과를 반환시킬 수 있음
function getArea(width, height) {
  let area = width * height;
  return area;
}

let a1 = getArea(10, 20);
let a2 = getArea(120, 600);
console.log(a1, a2);

// 중첩함수 : 함수 내부에서 또다른 함수호출 가능
function another() {
  console.log("another");
}

function callAnother() {
  console.log("origin");
  another();
}

callAnother();

// 호이스팅 : 코드의 밑바닥에 선언된 코드들을 실행시키기전에 끌어올려줌
// Javascript에서는 함수선언을 함수호출보다 아래에 두어도 문제없이 실행됨
func();

function func() {
  console.log("문제없음!");
}
