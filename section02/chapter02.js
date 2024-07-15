function returnFalse() {
  console.log("False 함수");
  return false;
}

function returnTrue() {
  console.log("True 함수");
  return true;
}

// -> False 함수 라는 결과만 출력됨 : && 연산 중 첫번째 피연산자만으로도 연산결과가 확정되기 때문에 단락평가가 발생한다
// -> returnTrue() 호출이 생략됨
console.log(returnFalse() && returnTrue());

// -> 단락평가가 발생하지 않음 : 첫번째 피연산자만으로는 && 연산의 결과가 확정되지 않기 때문
// -> returnTrue()와 returnFalse()가 모두 호출됨
console.log(returnTrue() && returnFalse());

console.log(returnTrue() || returnFalse());

// 단락평가 활용사례
function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "이정환" });
