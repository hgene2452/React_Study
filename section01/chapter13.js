// 1. 콜백함수
function main(value) {
  value(); // 콜백함수는 메인함수가 언제든지 원하는 타이밍에 실행시킬 수 있다
}

function sub() {
  console.log("sub");
}

main(sub); // 함수를 값으로서 또다른 함수의 매개변수로 전달 -> 매개변수 함수를 메인함수 내부에서 호출가능

main(function () {
  console.log("sub");
});

main(() => {
  console.log("sub");
});

// 2. 콜백함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, (idx) => {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});
