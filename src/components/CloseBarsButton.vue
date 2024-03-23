<script setup lang="ts">
defineProps<{ action: () => void }>()
</script>

<template>
  <button class="close-button" v-on:click="action"></button>
</template>

<style scoped>
.close-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
}

.close-button::before,
.close-button::after {
  content: "";
  position: absolute;
  width: 20px;
  height: 2px;
  background-color: #000;
}

.close-button::before {
  transform: rotate(45deg);
}

.close-button::after {
  transform: rotate(-45deg);
}
</style>
