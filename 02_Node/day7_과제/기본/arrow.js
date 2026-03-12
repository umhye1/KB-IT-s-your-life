var getTriangle = function (base, height) {
  return (base * height) / 2;
};
console.log('삼각형의 면적:' + getTriangle(5, 2));

// 화살표 함수로
function getTriangle(base, height) {
  return (base * height) / 2;
}

console.log('삼각형의 면적' + getTriangle(5, 2));
