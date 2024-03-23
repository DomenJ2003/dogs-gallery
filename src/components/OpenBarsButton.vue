<script setup lang="ts">
defineProps<{ action: () => void }>()
</script>

<template>
  <button class="bars-button" v-on:click="action"></button>
</template>

<style scoped>
.bars-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
}

/* Styles for the bars icon */
.bars-button::before {
  content: "";
  display: block;
  width: 20px;
  height: 2px;
  background-color: #000;
  margin-bottom: 5px;
}

.bars-button::after {
  content: "";
  display: block;
  width: 20px;
  height: 2px;
  background-color: #000;
}
</style>
