<script setup lang="ts">
import { useDogStore } from '../store/dogStore';
import CustomButton from './CustomButton.vue';

const dogStore = useDogStore();
</script>

<template>
  <div class="detail-container flex">
    <img :src="dogStore.getSelectedDogImg" alt="Dog image" class="detail-img">
    <div class="detail-content">
      <p><b>Description: </b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi quod fuga asperiores
        explicabo odit? Cumque, distinctio. Atque ducimus, sit magni, similique neque deserunt ipsum minima hic, animi
        dignissimos voluptatibus nam!</p>
      <div class="flex-center buttons-container">
        <CustomButton :action="dogStore.decrementIndex" label="Previus" />
        <CustomButton :action="dogStore.incrementIndex" label="Next" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.detail-container {
  margin: 30px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 7px 7px 13px 0px rgba(100, 100, 100, 0.2);
  display: flex;
  flex-direction: column;
}

.detail-img {
  max-width: 100%;
  max-height: 50vh;
  border-radius: 10px;
  margin-bottom: 20px;
  object-fit: cover;
}

.detail-content {
  flex: 1;
}

.buttons-container {
  min-width: 200px;
  width: 50%;
}

@media (min-width: 768px) {
  .detail-container {
    flex-direction: row;
  }

  .detail-content {
    margin-left: 20px;
  }

  .detail-img {
    max-width: 50%;
    max-height: 50vh;
  }
}
</style>