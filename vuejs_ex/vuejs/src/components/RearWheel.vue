<script setup>
  import Tire from "./Tire.vue";

</script>

<template>
  <div class="rear-wheel">
    <span>Rear Wheel</span>
    <Tire color="YELLOW"/>
  </div>
</template>

<style scoped>
.rear-wheel{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100px;
  height: 100px;
  border: 1px solid black;
  border-radius: 50%;
}
</style>