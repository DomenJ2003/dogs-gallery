<script setup lang="ts">
import { useDogStore } from '../store/DogStore';


const dogStore = useDogStore();
</script>

<template>
    <div class="app-bar">
        <h1 class="title" v-if="!dogStore.selectedBreed">Welcome to Dog Libery</h1>
        <h1 class="title" v-else>{{ dogStore.selectedBreed.toLocaleUpperCase() }}</h1>
        <div class="links">
            <a class="link" href="/">Home</a>
            <a class="link" href="/favorites">Favorites</a>
        </div>
    </div>
</template>

<style scoped>
.app-bar {
    position: sticky;
    top: 0;
    width: 100%;
    height: 80px;
    background-color: var(--color-secondary);
    color: #888;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.links {
    margin-right: 50px;
    gap: 30px;
}

.link {
    padding: 5px;
    color: var(--color-white);
    text-decoration: none;
}

.title {
    color: var(--color-white);
}
</style>
