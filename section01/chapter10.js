// 1. for문
for (let i = 1; i <= 10; i++) {
  console.log(i + "번째 반복");

  // 조건문이 완료되지 않았을 때 반복을 중단시킴 → 조건문 + break
  if (i >= 5) {
    break;
  }

  // 특정 회차를 건너쮬 → 조건문 + continue
  if (i == 3) {
    continue;
  }
}
