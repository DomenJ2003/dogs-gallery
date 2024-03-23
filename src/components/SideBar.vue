<script setup lang="ts">
import { ref } from 'vue';
import { useDogStore } from '../store/dogStore';
import CustomButton from './CustomButton.vue';

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
            <div>
                <input placeholder="Search" type="text" class="search-filter" v-model="searchWord" />
            </div>
        </div>

        <div class="breeds-list">
            <div v-for="breed in dogStore.getBreeds">
                <div class="breed-item" v-if="breed.includes(searchWord)" v-on:click="() => setBreedFilter(breed)">
                    <CustomButton :label="breed" :action="() => { }" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container-sidebar {
    position: sticky;
    top: 80px;
    background-color: var(--color-secondary);
    height: calc(100vh - 80px);
}

.header-sidebar {
    display: flex;
    flex-direction: column;
}

.search-filter {
    padding: 4px 8px;
    margin: 4px;
    display: inline-block;
    border-radius: 6px;
    font-size: large;
    background-color: var(--color-primary);
}

.breeds-list {
    position: relative;
    height: calc(100vh - 121px);
    overflow-y: scroll;
}
</style>
