// 배열과 콜백 함수를 전달받아, 콜백의 조건을 만족하는 요소만 출력하는 filterLog 함수를 작성하세요.
function filterLog(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      // true면
      console.log(arr[i]);
    }
  }
}

filterLog([1, 2, 3, 4, 5], function (x) {
  return x % 2 === 0;
});
// 2
// 4
