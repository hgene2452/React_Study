// for문
for (let idx = 1; idx <= 10; idx++) {
  // 초기식; 조건식; 증감식

  if (idx % 2 == 0) {
    continue; // 특정 조건에서 건너뛰기
  }

  console.log("반복!");
  console.log(idx);

  if (idx >= 5) {
    break; // 특정 조건에서 멈추기
  }
}
