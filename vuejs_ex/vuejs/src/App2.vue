<script setup>
  const parent = "fruits";
  const child = "item";
</script>

<template>
  <li :class="child">사과</li>
  <li :class="child">배</li>
</template>

