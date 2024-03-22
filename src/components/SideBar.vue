<script setup lang="ts">
import { ref } from 'vue';
import { useDogStore } from '../store/DogStore';
import SidebarButton from './SidebarButton.vue';

const dogStore = useDogStore();
dogStore.fetchBreeds();
dogStore.fetchDogs();

const searchWord = ref<string>("");

const setBreedFilter = (breed: string) => {
    dogStore.setSelectedBreed(breed);
    dogStore.fetchDogsByBreed();
}

</script>

<template>
  <div class="container-sidebar">
    <div class="header-sidebar">
        <img src="../assets/vue.svg" class="logo" v-on:click="()=>dogStore.fetchDogs(false)">
        <div>
            <input placeholder="Search" type="text" class="search-filter" v-model="searchWord"/>
        </div>
    </div>

    <div class="breeds-list">
        <div v-for="breed in dogStore.getBreeds">
            <div class="breed-item" v-if="breed.includes(searchWord)" v-on:click="()=>setBreedFilter(breed)" >
                <SidebarButton :label="breed" :action="()=>{}" :show="true" />
            </div>
        </div>
    </div>
  </div>
    
</template>

<style scoped>
.container-sidebar{
    position: sticky;
    top: 0;
    background-color: var(--color-secondary);
    height: 100vh;
}

.header-sidebar{
    display: flex;
    flex-direction: column;
}

.logo{
    height: 80px;
    object-fit: contain;
}

.search-filter{
    padding: 4px 8px;
    margin: 4px;
    display: inline-block;
    border-radius: 6px;
    font-size: large;
    background-color: var(--color-primary);
}

.breeds-list{
    position: relative;
    height: calc(100vh - 115px);
    overflow-y: scroll;
}


</style>
