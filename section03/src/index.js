// ESM:  default 함수는 모듈이름을 바꿀 수도 있고, 중괄호도 필요없다
import divide, { add, sub, mul } from "./math.js";
// CJS: const { add, sub } = require("./math"); 구조분해할당 활용

console.log("안녕 Node.js");

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(1, 2));
console.log(divide(1, 2));
