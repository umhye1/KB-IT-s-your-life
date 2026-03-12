// const c = require('ansi-colors');

// function hello(name) {
//   console.log(c.green(name) + '님 안녕하세요');
// }

// hello('홍길동');

const hello = (name) => {
  console.log(`${name}님, 안녕하세요?`);
};

module.exports = hello;

exports.hello = (name) => {
  console.log(`${name} 님, 안녕하세요?`);
};
