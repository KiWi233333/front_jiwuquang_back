<template>
  <div></div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import store from "./store/index";

onMounted(() => {
  console.log(store.roleSotre);
});
</script>
<style>
</style>
