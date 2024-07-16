// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
let arr1 = [
  { name: "이정환", hobby: "테니스" },
  { name: "김효빈", hobby: "테니스" },
  { name: "홍길동", hobby: "독서" },
];

const tennisPeople = arr1.filter((item) => item.hobby === "테니스");
console.log(tennisPeople);

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
});
console.log(mapResult1);

let names = arr1.map((item) => item.name);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = ["b", "a", "c"];
arr3.sort();
console.log(arr3);

// 숫자값으로 이루어진 배열에는 sort() 함수가 정상적으로 동작하지 X
// 숫자요소를 정렬하려면 비교문을 넣어주어야 함
let arrNum = [10, 3, 5];
arrNum.sort((a, b) => {
  if (a > b) {
    return 1; // b -> a
  } else if (a < b) {
    return -1; // a -> b
  } else {
    return 0; // 자리를 그대로 유지
  }
});
console.log(arrNum);

// 4. toSorted
// 정렬된 새로운 배열을 반환하는 메서드
let arr4 = ["c", "a", "b"];
const sorted = arr4.toSorted();

console.log(arr4);
console.log(sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드
let arr5 = ["hi", "im", "winterlood"];
const joined = arr5.join();
console.log(joined);

// 구분자를 추가할 수 있다
const joined2 = arr5.join("-");
console.log(joined2);
