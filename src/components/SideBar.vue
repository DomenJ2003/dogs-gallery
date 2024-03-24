<script setup lang="ts">
import { ref } from "vue";
import { useDogStore } from "../store/dogStore";
import CustomButton from "./common/CustomButton.vue";
import SidebarButton from "./common/SidebarButton.vue";

const dogStore = useDogStore();
const searchWord = ref<string>("");
const openSideBar = ref<boolean>(
  window.matchMedia("(min-width: 520px)").matches
);

dogStore.fetchBreeds();

const setBreedFilter = (breed: string) => {
  dogStore.setSelectedBreed(breed);
  dogStore.fetchDogsByBreed();
};

const toggleSideBar = () => {
  openSideBar.value = !openSideBar.value;
};
</script>

<template>
  <div class="container-sidebar" v-if="openSideBar">
    <div class="header-sidebar">
      <div class="flex">
        <input
          placeholder="Search"
          type="text"
          class="search-filter"
          v-model="searchWord"
        />
        <div class="close-button flex-center">
          <SidebarButton :isCloseButton="true" :action="toggleSideBar" />
        </div>
      </div>
    </div>

    <div class="breeds-list">
      <div v-for="breed in dogStore.getBreeds">
        <div
          class="breed-item"
          v-if="breed.includes(searchWord)"
          v-on:click="() => setBreedFilter(breed)"
        >
          <CustomButton :label="breed" :action="() => {}" />
        </div>
      </div>
    </div>
  </div>
  <div v-else class="open-button">
    <SidebarButton :isCloseButton="false" :action="toggleSideBar" />
  </div>
</template>

<style scoped>
.container-sidebar {
  position: fixed;
  top: 95px;
  background-color: var(--color-secondary);
  width: 100vw;
  height: 100%;
  padding-bottom: 5px;
}

.header-sidebar {
  display: flex;
  flex-direction: column;
}

.search-filter {
  width: calc(90% - 20px);
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

.close-button {
  width: 20px;
  padding-right: 10px;
}

.open-button {
  position: fixed;
  top: 110px;
}

@media (min-width: 520px) {
  .container-sidebar {
    top: 80px;
    position: sticky;
    height: calc(100vh - 80px);
    width: auto;
  }

  .search-filter {
    width: 90%;
  }

  .close-button {
    margin-right: 5px;
  }
}

@media (min-width: 768px) {
  .open-button {
    top: 90px;
  }
}
</style>
