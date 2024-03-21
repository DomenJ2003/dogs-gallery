<script setup lang="ts">
import { useDogStore } from '../store/DogStore';

const dogStore = useDogStore();


</script>

<template>

    <div class="grid">
        <div class="" v-for="dogImgUrl in dogStore.getDogImgUrls">
            <img :src="dogImgUrl" alt="Dog image" srcset="" class="dogImg">
        </div>
    </div>

</template>

<style scoped>

.grid{
    width: calc(100vw - 220px);
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(50px, 300px) );
    gap: 10px;
    margin: 20px 10px;
}

.dogImg{
    width: 300px;
    height: 300px;
    object-fit: fill;
}

</style>
