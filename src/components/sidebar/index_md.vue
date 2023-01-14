<template>
  <div class="flex px-5 items-center bg-white w-screen border">
    <div id="hamburger">
      <button class="space-y-1 shadow mx-2" @click="store.toggleHamburgerBar">
        <span class="block w-5 h-0.5 bg-gray-500 rounded"></span>
        <span class="block w-5 h-0.5 bg-gray-500 rounded"></span>
        <span class="block w-5 h-0.5 bg-gray-500 rounded"></span>
      </button>
      <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg> -->
    </div>
    <breadCrumb />
  </div>
</template>

<script setup lang="ts">
import breadCrumb from "@/components/breadcrumb/index.vue";
import { useLayoutStore } from "@/store/layout";
const store = useLayoutStore();
</script>

<style scoped></style>
