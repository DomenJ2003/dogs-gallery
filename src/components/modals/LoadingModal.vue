<script setup lang="ts">
import { useDogStore } from "../../store/dogStore";

const dogStore = useDogStore();
</script>

<template>
  <div class="loading-modal-container" v-if="dogStore.loading">
    <div class="ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<style scoped>
.loading-modal-container {
  position: fixed;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(50, 50, 50, 0.4);
}

.ring {
  display: inline-block;
  position: absolute;
  top: calc(100vh / 2);
  left: calc(100vw / 2);
  width: 80px;
  height: 80px;
}

.ring div {
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #000;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #000 transparent transparent transparent;
}

.ring div:nth-child(1) {
  animation-delay: -0.45s;
}

.ring div:nth-child(2) {
  animation-delay: -0.3s;
}

.ring div:nth-child(3) {
  animation-delay: -0.15s;
}

@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
