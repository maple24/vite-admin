<template>
  <div>
    <div class="">
      <el-row class="mb-4">
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
      </el-row>
    </div>
    <div class="flex items-center">
      <h1>hello world</h1>
      <h1>{{ todos }}</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { fetchPosts } from '@/api/placeholder';
  import { ref } from 'vue';
  import axios from 'axios';
  const todos = ref('hello');
  const response = await fetchPosts();
  // console.log(response?.data);
  todos.value = response.data.results;
  // function fetchdata(): void {
  //   axios.get('https://pokeapi.co/api/v2/pokemon?offset=0').then((response) => {
  //     todos.value = response.data.results; // 👈 get just results
  //   });
  // }
  // fetchdata();
</script>
<style scoped></style>
