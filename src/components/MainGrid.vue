<script setup lang="ts">
import { useDogStore } from "../store/dogStore";
import CustomButton from "./CustomButton.vue";
import { ref } from 'vue';

const props = defineProps<{ showFavorites?: boolean }>()

const dogStore = useDogStore();
const favoritedImgsJson: string | null = localStorage.getItem("favoritedImgs");
const favoritedImgs = ref<string[]>([]);
if (favoritedImgsJson) {
  favoritedImgs.value = JSON.parse(favoritedImgsJson);
}


const loadMoreImages = () => {
  dogStore.fetchDogs(true);
};

const toggleFavorite = (dogImgUrl: string) => {
  if (favoritedImgs.value.includes(dogImgUrl)) {
    favoritedImgs.value = favoritedImgs.value.filter(favoritedImg => favoritedImg !== dogImgUrl);
  } else {
    favoritedImgs.value.push(dogImgUrl);
  }
  localStorage.setItem("favoritedImgs", JSON.stringify(favoritedImgs.value));
  if (props.showFavorites) {
    dogStore.setDogImgUrls(favoritedImgs.value);
  }
};
</script>

<template>
  <div class="grid-container">
    <div class="grid">
      <div v-for="dogImgUrl in dogStore.getDogImgUrls" :key="dogImgUrl" class="img-container flex-center-col">
        <img @click="() => console.log(dogImgUrl)" :src="dogImgUrl" alt="Dog image" class="dogImg" />
        <div class="img-bar">
          <CustomButton :label="favoritedImgs.includes(dogImgUrl) ? 'Remove from favorites' : 'Add to favorite'"
            :action="() => toggleFavorite(dogImgUrl)" />
        </div>
      </div>
      <div class="flex-center" v-if="dogStore.getDogImgUrls.length === 0">
        <div class="">
          There is no data to display
        </div>
      </div>
    </div>
    <div class="flex-center">
      <div class="load-more-button-container" v-if="!dogStore.getSelectedBreed">
        <CustomButton label=" Load More" :action="loadMoreImages" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid-container {
  width: 100%;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, 280px);
  gap: 20px;
  padding: 20px 10px;
  overflow-y: scroll;
}

.img-card {
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.img-container {
  background-color: var(--color-white);
  border-radius: 20px;
  padding-top: 10px;
  box-shadow: 7px 7px 13px 0px rgba(100, 100, 100, 0.2);
}

.dogImg {
  width: 90%;
  height: 280px;
  object-fit: cover;
  border-radius: 10px;
}

.load-more-button-container {
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5vh;
}

.img-bar {
  margin: 10px 0;
}
</style>
