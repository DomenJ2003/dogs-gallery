<script setup lang="ts">
import MainGrid from './components/MainGrid.vue';
import SideBar from './components/Sidebar.vue';
</script>

<template>
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
