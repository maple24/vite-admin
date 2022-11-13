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
      <h1 v-if="!todos">Loading...</h1>
      <h1 v-else>{{ todos }}</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { fetchPosts } from "@/api/placeholder";
import { ref } from "vue";
const todos = ref("");
// fetchPosts().then((res) => {
//   todos.value = res.data;
//   console.log(res.data);
// });
const init = async () => {
  try {
    const response = await fetchPosts();
    todos.value = response.data;
  } catch (e) {
    console.log(e);
  }
};
init();
</script>
<style scoped></style>
