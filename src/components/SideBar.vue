<script setup lang="ts">

import { ref, watch } from 'vue';
import { useDogStore } from '../store/DogStore';

const dogStore = useDogStore();
dogStore.fetchBreeds();

const searchWord = ref<string>("");
watch(searchWord, () => console.log(searchWord))


</script>

<template>
  <div class="container-sidebar" style="background-color: green;">
    <div class="header-sidebar" style="background-color: Blue;">
        <img src="../assets/vue.svg" class="logo">
        <div>
            <input type="text" class="search-filter" v-model="searchWord"/>
        </div>
    </div>

    <div class="breeds-list">
        <div v-for="breed in dogStore.getBreeds">
            <div class="breed-item" v-if="breed.includes(searchWord)">
                {{ breed }}
            </div>
        </div>
    </div>
  </div>
    
</template>

<style scoped>
.container-sidebar{
    position: sticky;
    top: 0;
    left: 0;
    height: 100vh;
    min-width: 150px;
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
    padding: 2px;
    margin: 4px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: large;
}

.breeds-list{
    position: relative;
    height: calc(100vh - 115px);

    overflow-y: scroll;
}


</style>
