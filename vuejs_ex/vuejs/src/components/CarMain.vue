<script setup>
  const props = defineProps({
    bgColor: String
  });
</script>

<template>
  <div class="car-main" :style="{ backgroundColor: props.bgColor }">
    <span > {{props.bgColor||'BLACK'}} CarMain</span>
  </div>
</template>

<style scoped>
  .car-main{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 100px;
    border: 1px solid black;
  }
</style>