<script setup lang="ts">
import { useDogStore } from '../store/dogStore';


const dogStore = useDogStore();
</script>

<template>
    <div class="app-bar">
        <div class="flex title-logo">
            <RouterLink class="link" to="/">
                <img src="../assets/vue.svg" class="logo">
            </RouterLink>
            <h1 class="title" v-if="!dogStore.selectedBreed">Welcome to Dog Libery</h1>
            <h1 class="title" v-else>{{ dogStore.selectedBreed.toLocaleUpperCase() }}</h1>
        </div>

        <nav class="links">
            <RouterLink class="link" to="/">Home</RouterLink>
            <RouterLink class="link" to="/favorites">Favorites</RouterLink>
        </nav>
    </div>
</template>

<style scoped>
.app-bar {
    position: sticky;
    top: 0;
    width: 100%;
    height: 100px;
    background-color: var(--color-secondary);
    color: #888;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 99;
}

.title-logo {
    flex-direction: row;
    align-items: center;
}

.logo {
    height: 40px;
    object-fit: contain;
    padding: 5px 20px;
}

.links {
    display: flex;
    flex-direction: column;
    margin-right: 5px;
}

.link {
    padding: 5px;
    color: var(--color-white);
    text-decoration: none;
}

.title {
    color: var(--color-white);
}

@media (min-width: 768px) {

    .app-bar {
        height: 80px;
    }

    .logo {
        height: 80px;
    }

    .title-logo {
        justify-content: center;
    }

    .links {
        margin-right: 20px;
        justify-content: center;
        flex-direction: row;
    }

    .link {
        padding: 5px 10px;
    }
}
</style>
