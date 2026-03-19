// 각 숫자의 2배 값을 출력하시오.

function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i);
  }
}

var logDouble = function (i) {
  console.log(i * 2);
};

repeat(5, logDouble);
