<template>
  <div>
    <div class="relative left-10 w-full h-20 bg-yellow-100">
      <h1>testpage</h1>
      <div class="absolute left-10 bg-slate-400">
        <h1>absolute</h1>
      </div>
      <div class="relative left-10">
        <h1>relative</h1>
      </div>
      <div class="sticky bg-blue-300">
        <h1>sticky</h1>
      </div>
    </div>
    <div class="w-full">
      <dropDown />
    </div>
  </div>
</template>

<script setup lang="ts">
import dropDown from "@/components/dropdown/index.vue";
</script>

<style scoped></style>
