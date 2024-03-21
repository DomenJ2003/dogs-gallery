<script setup lang="ts">

import { useDogStore } from '../store/DogStore';

    const dogStore = useDogStore();
    dogStore.fetchBreeds();

    // const breeds = computed(()=> dogStore.getBreeds())
    
// import { ref } from 'vue'

// defineProps<{ msg: string }>()

// const count = ref(0)
</script>

<template>
  <div class="container-sidebar" style="background-color: green;">
    <div class="header-sidebar" style="background-color: Blue;">
        <img src="../assets/vue.svg" class="logo">
        <div>
            <input type="text" class="search-filter"/>
        </div>
    </div>
    <ol class="breeds">
        <li v-for="breed in dogStore.getBreeds">
            {{ breed }}
        </li>
    </ol>
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

</style>
