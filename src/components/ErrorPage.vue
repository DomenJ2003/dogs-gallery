<script setup lang="ts">
import { useDogStore } from '../store/dogStore';
import CustomButton from './CustomButton.vue';

const dogStore = useDogStore();
</script>

<template>
  <div class="error-modal-container flex-center-col" v-if="dogStore.errorMessage !== ''">
    <div class="card flex-center-col">
      <h3 class="error-title">
        Error occurred
      </h3>
      <div class="error-body">
        {{ dogStore.errorMessage }}
      </div>
      <CustomButton :action="dogStore.errorFunction" label="Retry" />
    </div>
  </div>
</template>

<style scoped>
.error-modal-container {
  position: fixed;
  z-index: 998;
  width: 100vw;
  height: 100vh;
  background-color: rgba(50, 50, 50, 0.4);
}

.card {
  padding: 20px;
  background-color: var(--color-white);
  border-radius: 20px;
}

.error-title {}

.error-body {
  padding: 10px;
}

.error-button {}
</style>
