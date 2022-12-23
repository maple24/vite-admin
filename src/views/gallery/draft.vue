<template>
  <div>
    <button @click="get_UserList">getUserList</button>
    <p>{{ userList }}</p>
  </div>
</template>

<script setup lang="ts">
import { getUserList } from '@/api/user';
import { ref } from 'vue';
const userList = ref()
async function get_UserList() {
  const response = await getUserList()
  userList.value = response.data
}

</script>

<style scoped>

</style>
