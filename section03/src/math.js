// math 모듈
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

export function mul(a, b) {
  return a * b;
}

export default function div(a, b) {
  return a / b;
}

// ESM (ES) 모듈 시스템
export { add, sub };

// CJS (Common JS) 모듈 시스템
// module.exports = {
//   add: add,
//   sub, // value로 사용될 key, value가 동일한 경우 ': value' 생략가능
// };
