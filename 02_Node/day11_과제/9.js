// 반복되는 숫자를 배열에 저장하시오.

var arr = [];

function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i);
  }
}

var saveNumber = function (i) {
  arr.push(i);
};

repeat(5, saveNumber);

console.log(arr);
