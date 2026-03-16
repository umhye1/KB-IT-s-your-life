// 1. 함수 선언문

function add(x, y) {
  // 타입 선언이 없음.
  return x + y;
}

// x, y : parameter
// 10,20 : argumetn
function multiply(x, y) {
  console.log(x * y);
}

// 2. 함수 표현식
let add = function add(x, y) {
  return x + y;
};

// 3. 화살표 함수
let add1 = (x, y) => x + y;


let result = add(10, 20);
console.log(result);

multiply(2, 3);


