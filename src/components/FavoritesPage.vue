<script setup lang="ts">
import { ref } from "@vue/runtime-dom";
import { useDogStore } from "../store/dogStore";
import MainGrid from "./MainGrid.vue";

const dogStore = useDogStore();

const favoritedImgsJson: string | null = localStorage.getItem("favoritedImgs");
const favoritedImgs = ref<string[]>([]);
if (favoritedImgsJson) {
  favoritedImgs.value = JSON.parse(favoritedImgsJson);
}
dogStore.setDogImgUrls(favoritedImgs.value);
</script>

<template>
  <div class="container">
    <MainGrid :show-favorites="true" />
  </div>
</template>

<style>
.container {
  display: flex;
}
</style>
