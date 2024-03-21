<script setup lang="ts">
import { useDogStore } from '../store/DogStore';
import AppBar from './AppBar.vue';
import SidebarButton from './SidebarButton.vue';

const dogStore = useDogStore();

function loadMoreImages() {
    dogStore.fetchDogs(true);
}
</script>

<template>
    <div>
        <AppBar/>
        <div class="grid">
            <div v-for="dogImgUrl in dogStore.getDogImgUrls" :key="dogImgUrl">
                <img :src="dogImgUrl" alt="Dog image" class="dogImg">
            </div>
        </div>
        <div class="load-more-button-container">
            <SidebarButton label="Load More" :action="loadMoreImages" :show="!dogStore.getSelectedBreed"/>
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

.dogImg {
    width: 300px;
    height: 300px;
    object-fit: cover;
}

.load-more-button-container{
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>