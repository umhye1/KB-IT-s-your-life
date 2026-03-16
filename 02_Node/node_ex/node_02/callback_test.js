// 회원가입 3단계
// 1. 회원가입 api 호출되면 db에 회원의 정보 저장
// 2. 이메일 보냄
// 3. 성공메시지 보여줌
// 해당 시나리오에서 사용할 api를 콜백 방식으로 작성

const DB = []; // 회원의 정보 저장

// 회원가입 api 함수
function register(user) {
  return saveDB(user, function (user) {
    return sendEmail(user, function (user) {
      return getResult(user);
    });
  });
}

// 여기서 function은 "이 안에 적힌 일들은 내가 지금 하는 게 아니라,
// saveDB가 끝나면 걔보고 시키라고 내가 적어준 '매뉴얼'이야"라고 알려주는 것

// 가입 요청한 회원의 정보를 저장하는 api함수
function saveDB(user, callback) {
  DB.push(user);
  console.log(`save ${user.name} to DB`);
  return callback(user);
}

// 회원의 정보를 저장 후 회원에게 이메일 발송
function sendEmail(user, callback) {
  console.log(`email to ${user.email}`);
  return callback(user);
}

// 회원에게 가입 성공 메시지 출력 api 함수
function getResult(user) {
  return `success register ${user.name} 님!`;
}

const result = register({
  email: 'youmi@gmail.com',
  password: '1234',
  name: 'yumi',
});

console.log(result);

// depth가 깊어짐 - 에러 발생시 추적하기 어려움
