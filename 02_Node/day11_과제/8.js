// 별을 출력하시오.

function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i);
  }
}

var logStar = function (i) {
  let star = '*';
  for (var j = 0; j < i; j++) {
    star += '*';
  }
  console.log(star);
};

repeat(4, logStar);
