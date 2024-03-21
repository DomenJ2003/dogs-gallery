<script setup lang="ts">
import { useDogStore } from "../store/DogStore";
import AppBar from "./AppBar.vue";
import SidebarButton from "./SidebarButton.vue";
import { ref } from 'vue';

const dogStore = useDogStore();
const favoritedImgsJson: string | null = localStorage.getItem("favoritedImgs");
const favoritedImgs = ref<string[]>([]);
if(favoritedImgsJson){
    favoritedImgs.value = JSON.parse(favoritedImgsJson);
}


const loadMoreImages = () => {
  dogStore.fetchDogs(true);
};

const toggleFavorite = (dogImgUrl: string) => {
    if (favoritedImgs.value.includes(dogImgUrl)){
        favoritedImgs.value = favoritedImgs.value.filter(favoritedImg => favoritedImg !==dogImgUrl);
    }else{
        favoritedImgs.value.push(dogImgUrl);
    }
    localStorage.setItem("favoritedImgs", JSON.stringify(favoritedImgs.value));
    console.log(localStorage.getItem("favoritedImgs"));
};
</script>

<template>
  <div>
    <AppBar />
    <div class="grid">
      <div
        v-for="dogImgUrl in dogStore.getDogImgUrls"
        :key="dogImgUrl"
        class="img-container flex-center-col"
      >
        <img
          @click="() => console.log(dogImgUrl)"
          :src="dogImgUrl"
          alt="Dog image"
          class="dogImg"
        />
        <div class="img-bar">
          <SidebarButton :label="favoritedImgs.includes(dogImgUrl) ? 'Remove from favorites' : 'Add to favorite'" :show="true" :action="()=>toggleFavorite(dogImgUrl)" />
        </div>
      </div>
    </div>
    <div class="flex-center">
      <div class="load-more-button-container">
        <SidebarButton
          label="Load More"
          :action="loadMoreImages"
          :show="!dogStore.getSelectedBreed"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid {
  width: calc(100vw - 220px);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 300px));
  gap: 10px;
  margin: 20px 10px;
}

.img-container {
  background-color: #888;
  border: 1px solid black;
  border-radius: 10px;
  padding-top: 10px;
}

.dogImg {
  width: 280px;
  height: 280px;
  object-fit: cover;
  border-radius: 10px;
}

.load-more-button-container {
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
