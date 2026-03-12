// 언제 프로그램이 끝나는가를 유심히 보기
// 주로 프로그램은 마지막 실행이 끝나면 끝남
// 비동기 함수가 호출되면 동작이 달라짐

function displayA() {
  console.log('A');
}

function displayB() {
  setTimeout(() => {
    console.log('B');
  }, 2000);
}

function displayC() {
  console.log('C');
}

displayA();
displayB();
displayC();
