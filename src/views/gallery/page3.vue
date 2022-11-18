<template>
  <div>
    <div id="countdown">
      <h1>{{ count }}</h1>
    </div>
    <div class="flex">
      <select
        id="server"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>Choose a server</option>
        <option
          value="https://rb-cmbinex-szh-p1.apac.bosch.com:443/artifactory/"
        >
          rb-cmbinex-szh-p1.apac.bosch.com
        </option>
        <option value="https://rb-cmbinex-fe-p1.de.bosch.com:443/artifactory/">
          rb-cmbinex-fe-p1.de.bosch.com
        </option>
      </select>
      <button
        class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        @click="fetch_Software"
      >
        Search
      </button>
    </div>
    <table>
      <h1 v-if="!software" class="animate-pulse" :class="{ hidden: loading }">
        Loading...
      </h1>
      <tr v-else v-for="(value, key, index) in software" :key="index">
        <td class="capitalize">{{ key }}:</td>
        <td>{{ value }}</td>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">
  import { ref, Ref } from 'vue';
  import { fetchLatestVersion } from '@/api/artifactory';
  import softwareInterface from '@/types/software';
  const software = ref() as Ref<softwareInterface>;
  const loading = ref(true);
  const count = ref(60);
  // fetchPosts().then((res) => {
  //   todos.value = res.data;
  //   console.log(res.data);
  // });

  async function fetch_Software() {
    loading.value = false;
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
</script>
<style scoped></style>
