// (function () {
//   let a = 3;
//   let b = 3;
//   //   return a * b;
//   console.log(a * b);
// })(); // 즉시실행 ㄱㄴ 근데 다시 실행 불가.

// (function foo() {
//   let a = 3;
//   let b = 3;
//   return a + b;
// })(); // 즉시실행 함수도 일반 함수처럼 값을 반환할 수 있다

// foo();

let result = (function () {
  let a = 3;
  let b = 5;
  return a * b;
})();

console.log(result);

// 즉시 실행함수에서 일반함수처럼 인수를 전달할 수 있다
result = (function (a, b) {
  return a + b;
})(3, 5);

console.log(result);
