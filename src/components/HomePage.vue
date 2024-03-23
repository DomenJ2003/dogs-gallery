<script setup lang="ts">
import MainGrid from './MainGrid.vue';
import SideBar from './Sidebar.vue';
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
  top: 80px
}
</style>
