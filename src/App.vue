<script setup lang="ts">
import AppBar from "./components/AppBar.vue";
import ErrorModal from "./components/modals/ErrorModal.vue";
import LoadingModal from "./components/modals/LoadingModal.vue";
</script>

<template>
  <ErrorModal />
  <LoadingModal />
  <AppBar />
  <router-view />
</template>
