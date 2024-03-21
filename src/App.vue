<script setup lang="ts">
import MainGrid from './components/MainGrid.vue';
import SideBar from './components/Sidebar.vue';
import LoadingModal from './components/LoadingModal.vue'
</script>

<template>
  <LoadingModal />
  <div class="container">
    <SideBar />
    <MainGrid />
  </div>
</template>

<style>

.container{
  display: flex;
}

</style>
