import App from "./App.js";
import { getItem } from "./storage.js";

// 상태 저장
const initialState = {
  todos: getItem("todos", []), // function todos라는 속성은 getItem이라는걸 이용해 todos를 가져옴
};

const $app = document.querySelector("#app"); // #app(index.html에 있는 app 아이디값)이라는 참조값을 가져옴 렌더링함

new App({
  $target: $app, 
  initialState,
});
