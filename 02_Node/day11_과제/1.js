// TODO: 콜백 함수 작성
// 0 ~ n-1 까지 모든 숫자를 출력하는 콜백 함수를 작성하시오.

function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i);
  }
}

var logAll = function (i) {
  // 함수표현식 콜백함수
  console.log(i);
};

repeat(5, logAll);
