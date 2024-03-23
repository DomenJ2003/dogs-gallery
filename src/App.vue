<script setup lang="ts">
import AppBar from './components/AppBar.vue';
import ErrorPage from './components/ErrorPage.vue';
import LoadingModal from './components/LoadingModal.vue';
</script>

<template>
  <ErrorPage />
  <LoadingModal />
  <AppBar />
  <router-view />
</template>

