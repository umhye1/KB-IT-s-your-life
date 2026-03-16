// // 1️⃣ 함수 선언문으로 함수 호출
// function foo() {
//   console.log("foo"); // foo
// }
// foo();

// 2️⃣ 함수 리터럴 표현식으로 함수 호출 . 즉시 실행 IIFE
// 외부에서 함수 이름으로 참조 / 호출 할 수 없음
(function bar() {
  console.log('bar'); // ReferenceError: bar is not defined
})();


// 함수 이름으로 호출하는 것이 아니라 함수 객체를 가리키는 식별자로 호출하는 것!
