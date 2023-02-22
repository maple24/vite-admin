<template>
  <div class="inline-block border">
    <h1>page content 1</h1>
    <button class="" @click="counterStore.increment">+</button>
    <p>{{ counterStore.count }}</p>


    <input type="date" v-model="date">
    <input type="time" v-model="time">
    <div>{{ sum }}</div>
    <div>{{ date }}</div>
    <div>{{ time }}</div>
    <div>{{ date + time }}</div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/store/counter';
import { ref, computed } from 'vue'
const date = ref('')
const time = ref('')

const sum = computed(() => {
  return new Date(date.value + ' ' + time.value)
})

const counterStore = useCounterStore();
</script>

<style scoped></style>
