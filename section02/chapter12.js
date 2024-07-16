// -> 비동기 작업 내부의 데이터를 함수 외부에서 사용하고 싶다면 콜백함수 활용
function add(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 3000);
}

add(1, 2, (value) => {
  console.log(value);
});

// 음식을 주문하는 상황
function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이";
    callback(food);
  }, 3000);
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownFood);
  }, 2000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1500);
}

orderFood((food) => {
  // 여기서 food 는 orderFood()의 결과, cooldownedFood는 cooldownFood()의 결과
  console.log(food);
  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);
    freezeFood(cooldownFood, (freezedFood) => {
      console.log(freezedFood);
    });
  });
});
