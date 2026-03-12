// const order = () => {};
// const display = (result) => {
//   console.log(`${result} 완료!`);
// };
// order('아메리카노', display);

// callback

const order = (coffee, callback) => {
  // 커피 주문
  console.log(`${coffee} 주문 접수`);
  // 3초 기다린 후 콜백 실행
  setTimeout(() => {
    callback(coffee);
  }, 3000);
};

const display = (result) => {
  // 커피 완료 표시
  console.log(`${result} 완료!`);
};

order('아메리카노', display);
