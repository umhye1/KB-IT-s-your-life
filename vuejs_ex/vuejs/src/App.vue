<script setup>
// const message = "There !!!";
//   const message = {name:"seo yoomi", major:"computer"};
//   const page ="history";
  let loading = false;
</script>
<template>
  <div :id="page"> HISTORY PAGE
<!--    <span>Hello</span>-->
<!--    <span v-text="JSON.stringify(message)"></span>-->
  </div>
</template>

<input type="text" placeholder="아이디" readonly="loading"/>
<input type="button" placeholder="비밀번호" readonly="loading"/>
<button :disabled="loading"/>