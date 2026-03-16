// promise 객체로 반환
// async : 비동기
// await : 기다린다
//        자바스크립트에서는 await는 무엇을 기다릴까?
//        성공 또는 실패로 promise객체의 실행이 완료되기를 기다린다.
//        await 뒤에는 promise가 온다

//        await는 async 키워드를 사용한 함수 안에서만 사용됨

async function myName() {
  return 'yumi';
}

async function showName() {
  // 이름을 출력하는 함수
  const name = await myName();
  console.log(name);
}
console.log(showName());
