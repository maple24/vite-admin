<template>
  <div class="border overflow-auto w-screen">
    <h1>page content 2</h1>
    <input type="text" class="border border-black" v-model="text" />
    <select
      id="server"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      v-model="type"
    >
      <option selected>Choose a resourcetype</option>
      <option v-for="(item, index) in resourceTypes" :value="item" :key="index">
        {{ item }}
      </option>
    </select>
    <button
      class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      @click="fetchRQM(type)"
    >
      Search
    </button>
    <table>
      <h1 class="animate-pulse" :class="{ hidden: loading }">Loading...</h1>
      <tr
        v-for="(value, key, index) in resource"
        :key="index"
        :class="{ hidden: !loading }"
      >
        <td class="hover:text-blue-600 hover:underline">
          <a href="#">{{ key }}:</a>
        </td>
        <td>{{ value.trim() }}</td>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { fetchTestCase } from '@/api/ibmrqm';
  import { resourceInterface } from '@/types/rqmresource';
  const text = ref<string>('');
  const loading = ref<boolean>(true);
  const resource = ref<resourceInterface>();
  const type = ref<string>('');
  const resourceTypes: string[] = ['testcase', 'testscript', 'testsuite'];
  async function fetchRQM(resourceType: string) {
    loading.value = false;
    try {
      const response = await fetchTestCase(resourceType);
      resource.value = response.data.data;
      loading.value = true;
    } catch (e) {
      console.log(e);
    }
  }
</script>
<style scoped></style>
