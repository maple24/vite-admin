<template>
  <div>
    <div class="flex items-center">
      <h1>hello world</h1>
      <h1 v-if="!todos">Loading...</h1>
      <h1 v-else>{{ todos }}</h1>
    </div>
    <div id="countdown">
      <h1>{{ count }}</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { fetchPosts } from "@/api/placeholder";
import { ref } from "vue";
const todos = ref("");
const count = ref(60);
// fetchPosts().then((res) => {
//   todos.value = res.data;
//   console.log(res.data);
// });
async function init() {
  try {
    const response = await fetchPosts();
    todos.value = response.data;
  } catch (e) {
    console.log(e);
  }
}
init();

function countdown() {
  setInterval(() => {
    if (count.value > 0) {
      count.value--;
    }
  }, 1000);
}
countdown();
</script>
<style scoped></style>
