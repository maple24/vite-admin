<template>
  <div class="border overflow-auto w-screen">
    <h1>page content 2</h1>
    <input type="text" class="border border-black" v-model="text" />
    <table>
      <tr v-for="(value, key, index) in testcases" :key="index">
        <td>{{ key }}:</td>
        <td>{{ value }}</td>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { fetchTestCase } from '@/api/ibmrqm';
  const text = ref('');
  const testcases = ref();

  async function fetchRQM() {
    try {
      const response = await fetchTestCase('testcase');
      testcases.value = response.data.data;
    } catch (e) {
      console.log(e);
    }
  }
  fetchRQM();
</script>
<style scoped></style>
