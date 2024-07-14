// 1. if 조건문(if문)
let num = 10;

if (num >= 10) {
  console.log("num은 10 이상입니다.");
  console.log("조건이 참 입니다!");
} else if (num >= 5) {
  console.log("num은 5 이상입니다!");
} else if (num >= 3) {
  console.log("num은 3 이상입니다!");
} else {
  console.log("조건이 거짓입니다!");
}

// 2. switch문
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리할 때 if보다 더 직관적이다
let animal = "cat";

switch (animal) {
  case "cat":
    console.log("고양이");
    break; // break가 없다면 특정 case가 아님에도 아래로 계속해서 실행된다
  case "dog":
    console.log("강아지");
    break;
  case "bear":
    console.log("곰");
    break;
  case "snake":
    console.log("뱀");
    break;
  case "tiger":
    console.log("호랑이");
    break;
  default: // 어떠한 case에도 해당하지 않는 경우 실행된다
    console.log("기타");
    break;
}
