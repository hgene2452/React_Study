// 자바스크립트에 내장된 비동기 함수
// setTimeout() 함수 실행 이후, 종료를 기다리지 않고 다음으로 넘어감
console.log(1);
setTimeout(() => {
  console.log(2);
}, 3000);
console.log(3);
