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
    <table>
      <h1 v-if="!software" class="animate-pulse">Loading...</h1>
      <tr v-else v-for="(value, key, index) in software" :key="index">
        <td class="capitalize">{{ key }}:</td>
        <td>{{ value }}</td>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">
  import { ref, Ref } from 'vue';
  import { fetchPosts } from '@/api/placeholder';
  import { fetchLatestVersion } from '@/api/artifactory';
  import softwareInterface from '@/types/software';
  const todos = ref();
  const software = ref() as Ref<softwareInterface>;
  const count = ref(60);
  // fetchPosts().then((res) => {
  //   todos.value = res.data;
  //   console.log(res.data);
  // });
  async function fetch_Posts() {
    try {
      const response = await fetchPosts();
      todos.value = response.data;
    } catch (e) {
      console.log(e);
    }
  }
  async function fetch_Software() {
    try {
      const response = await fetchLatestVersion();
      software.value = response.data;
    } catch (e) {
      console.log(e);
    }
  }

  setInterval(() => {
    if (count.value > 0) {
      count.value--;
    }
  }, 1000);

  fetch_Posts();
  fetch_Software();
</script>
<style scoped></style>
