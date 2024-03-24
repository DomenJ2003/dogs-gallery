<script setup lang="ts">
import { useDogStore } from "../../store/dogStore";
import MainGrid from "../MainGrid.vue";
import SideBar from "../SideBar.vue";

const dogStore = useDogStore();
if (!dogStore.getDogImgUrls.length) {
  dogStore.fetchDogs();
}
</script>

<template>
  <div class="container">
    <SideBar />
    <MainGrid />
  </div>
</template>

<style>
.container {
  display: flex;
  position: sticky;
  top: 80px;
}
</style>
