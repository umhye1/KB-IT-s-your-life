// 반복되는 숫자의 누적합을 계산하시오.
var sum = 0;

function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i);
  }
}
var add = function (i) {
  sum += i;
};

repeat(5, add);

console.log(sum);
