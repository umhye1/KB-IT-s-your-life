function changeVal(primitive, obj) {
  primitive += 100;
  obj.name = 'kim-wo-mi';
}
let num = 100;
let person = { name: 'kim-dong-woo' };

// 준비한 데이터셋을 이용하여 changeVal 함수를 이용해 값을 변경

// 변경한 값 출력
console.log(num);
console.log(person.name);

changeVal(num, person);
console.log(num);
console.log(person.name);
