<script setup lang="ts">
defineProps<{ action: () => void; isCloseButton?: boolean }>();
</script>

<template>
  <button
    :class="{ 'bars-button': !isCloseButton, 'close-button': isCloseButton }"
    v-on:click="action"
  ></button>
</template>

<style scoped>
.bars-button,
.close-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
}

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
