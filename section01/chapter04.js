// 1. 변수
let age = 27; // 변수 선언 및 초기화
console.log(age);

age = 30; // 변수의 값은 변경가능
console.log(age);

let undefinedData; // 변수 선언 후 초기화를 해주지 않으면 'undefined'라는 값이 들어감
console.log(undefinedData);

// let age = 40; 중복되는 변수는 다시 선언할 수 없음

// 2. 상수
const birth = "1997.01.07"; // 선언 이후에는 다시는 값을 넣을 수 없으므로, 선언과 동시에 초기화해주어야 함
// birth = "123"; 한 번 저장된 값을 다시는 바꿀 수 없음

// 3. 변수/상수 명명규칙(네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용할 수 없다.
let $_name;

// 3-2. 숫자로 시작할 수 없다.
let na2me;
let name2;
let _2name;
let $2name;

// 3-3. 예약어를 사용할 수 없다.

// 4. 변수 명명 가이드
// 친절하고 의미있는 변수명을 사용한다.
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;
