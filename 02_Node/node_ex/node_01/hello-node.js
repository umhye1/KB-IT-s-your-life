const http = require('http'); // http 객체를 생성. 서버만들기위함
// const { setTimeout } = require('timers/promises');
let count = 0;

// 노드 서버 객체 생성
// 서버는 하나의 요청이 있으면 그 요청에 대한 응답이 필수적. 즉 2개의 인수가 필수적임
const server = http.createServer((request, response) => {
  console.log('my first node server!');
  log(count);

  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.write('hello\n');

  setTimeout(() => {
    response.end('Node.js');
  }, 2000);
});

function log(count) {
  console.log((count += 1));
}

server.listen(8000, () => console.log('Hello Node.js'));
