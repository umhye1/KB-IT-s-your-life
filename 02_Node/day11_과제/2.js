// 0 ~ n-1 중 **짝수만 출력**하는 콜백 함수를 작성하시오.

function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i);
  }
}

var logEven = function (i) {
  if (i % 2 == 0) {
    console.log(i);
  }
};

repeat(10, logEven);
