<template>
  <div class="inline-block border">
    <h1>page content 1</h1>
    <button class="" @click="counterStore.increment">+</button>
    <p>{{ counterStore.count }}</p>
  </div>
</template>

<script setup lang="ts">
  import { useCounterStore } from '@/store/counter';

  const counterStore = useCounterStore();
</script>

<style scoped></style>
