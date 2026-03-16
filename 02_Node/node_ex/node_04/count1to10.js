function waitOneSecond(message) {
  return new Promise((resolve) => {
    setTimeout(() => { // 반환 값이 없음, 기능만 단순 수행.
      resolve(`${message}`);
    }, 1000);
  });
} // 1초 대기하고 메시지를 출력

async function CountOneToTen() {
  //10초 동안 1초마다 숫자메시지를 출력
  for (let number of [...Array(10).keys()]) { // [0,1,2,3,4,5,6,7,8,9]리스트 생성
    let result = await waitOneSecond(`${number + 1}초 대기중....`);
    console.log(result);
  }
  console.log('카운트 완료');
}

CountOneToTen();

// Promise와 async,await를 사용해서 비동기 함수를 동기 방식으로 코드처럼 직관화 하여 코드처럼 직관화하여 작성.  순차적으로 처리