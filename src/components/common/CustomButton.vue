<script setup lang="ts">
defineProps<{ label: string; action: () => void }>();
</script>

<template>
  <button class="button" role="button" @click="action">{{ label }}</button>
</template>

<style scoped>
.button {
  display: flex;
  width: calc(100% - 6px);
  flex-direction: column;
  align-items: center;
  padding: 6px 14px;
  margin: 3px;
  border-radius: 6px;
  background: var(--color-primary);
  border: none;
  box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  cursor: pointer;
}

.button:focus {
  box-shadow:
    0px 0.5px 1px rgba(0, 0, 0, 0.1),
    0px 0px 0px 3.5px rgba(58, 108, 217, 0.5);
  outline: 0;
}
</style>
