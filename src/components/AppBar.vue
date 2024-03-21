<script setup lang="ts">
import { useDogStore } from '../store/DogStore';


const dogStore = useDogStore();
</script>

<template>  
    <div class="app-bar" style="background-color: grey;">
        <h1 v-if="!dogStore.selectedBreed">Welcome to Dog Libery</h1>
        <h1 v-else>{{ dogStore.selectedBreed.toLocaleUpperCase() }}</h1>
    </div>
</template>

<style scoped>
.app-bar {
    position: sticky;
    top: 0;
    width: 100%;
    height: 80px;
    color: #888;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
