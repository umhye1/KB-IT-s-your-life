// 다음과 같이 출력하는 콜백 함수를 작성하시오.

function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i);
  }
}

var logIndex = function (i) {
  console.log(`index: ${i}`);
};

repeat(3, logIndex);
