// ESM:  default 함수는 모듈이름을 바꿀 수도 있고, 중괄호도 필요없다
import divide, { add, sub, mul } from "./math.js";
import randomColor from "randomcolor"; // 라이브러리에서 가져올 때에는 경로가 아닌 라이브러리 이름만 명시
// CJS: const { add, sub } = require("./math"); 구조분해할당 활용

console.log("안녕 Node.js");

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(1, 2));
console.log(divide(1, 2));

const color = randomColor();
console.log(color);
