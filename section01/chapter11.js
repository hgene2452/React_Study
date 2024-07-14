// 함수선언
function greeting() {
  console.log("안녕하세요!");
}

// 함수호출
// -> 함수를 호출하게 되면 코드의 실행흐름이 함수내부로 넘어간다
greeting();

// 호이스팅: 함수 선언부를 함수의 호출 이후에 위치해도 상관없이 잘 실행된다
let area3 = getArea(120, 200);

// 매개변수(파라미터) 사용
function getArea(width, height) {
  let area = width * height;
  // 중첩함수: 함수 내부에 또다른 함수를 만들 수 있다
  function another() {
    console.log("another");
  }
  return area; // 반환값 사용: 반환문을 사용하면 해당 행 이후 바로 종료
}

let area1 = getArea(10, 20);
let area2 = getArea(30, 20);
