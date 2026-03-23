<script setup>
  const fruits = "apple avocado";
  const fruitsArr = ["banana","blueberry"];
</script>

<template>
  <div :class="fruits">사과 /아보카도</div>
  <div :class="fruits">바나나 /블루베리</div>
  <div :title="fruits">바나나 /블루베리</div>
</template>

