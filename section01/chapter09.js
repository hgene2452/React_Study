// 1. if문
let num = 10;

// 반드시 if → if else → else 순으로 작성해야 함
if (num >= 10) {
  // 조건이 참일 때 실행될 코드
  console.log("num은 10 이상입니다.");
  console.log("조건이 참 입니다.");
} else if (num >= 5) {
  // 첫번 째 조건이 아닌 다음 조건이 참일 때 실행될 코드
  console.log("두번 째 조건이 참 입니다.");
} else {
  // 조건이 거짓일 때 실행될 코드
  console.log("조건이 거짓 입니다.");
}

// 2. switch문 : 다수의 조건을 처리할 때, if문보다 더 직관적임
let animal = "cat";

switch (animal) {
  case "cat": {
    console.log("고양이");
    break; // 조건이 참인 경우의 실행코드만 실행될 수 있도록 함
  }
  case "dog": {
    console.log("강아지");
    break;
  }
  case "bear": {
    console.log("곰");
    break;
  }
  case "snake": {
    console.log("뱀");
    break;
  }
  case "tiger": {
    console.log("호랑이");
    break;
  }
  default: {
    // 모든 조건이 다 맞지 않는 경우 사용
    console.log("그런 동물은 전 모릅니다.");
  }
}
