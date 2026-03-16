// 템플릿 리터럴 : 백틱으로 묶여진 문자열에서 템플릿 대입문(${표현식})을 이용해 동적으로 문자열을 끼워 넣어 구성

const d1 = new Date();
let name = '홍길동';
let r1 = `${name}님에게 {d1.toDateString()}에 연락했다`;
console.log(r1);
let product = '갤럭시s7';
let price = 199000;
let str = `${product}의 가격은 ${price}원 입니다`;
console.log(str);
