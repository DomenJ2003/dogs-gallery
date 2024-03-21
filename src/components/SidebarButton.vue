<script setup lang="ts">
defineProps<{ label: string, action: ()=>{}, show: boolean }>()
</script>

<template>
  <button class="button" role="button" @click="action" v-if="show">{{ label }}</button>
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
  color: #3D3D3D;
  background: #fff;
  border: none;
  box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button:focus {
  box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1), 0px 0px 0px 3.5px rgba(58, 108, 217, 0.5);
  outline: 0;
}
</style>
