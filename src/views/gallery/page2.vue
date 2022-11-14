<template>
  <div class="border overflow-auto w-screen">
    <h1>page content 2</h1>
    <input type="text" class="border border-black" v-model="text" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const text = ref("");
</script>
<style scoped></style>
