<template>
  <div
    class="flex border-2 px-10 bg-white dark:bg-slate-700 text-gray-700 dark:text-white justify-between items-center h-14"
  >
    <div id="logo">
      <h1>Vite-Admin</h1>
    </div>
    <ul class="flex items-center font-bold font-mono">
      <li class="mx-2 hover:underline"><RouterLink to="/">Home</RouterLink></li>
      <li class="mx-2 hover:underline">
        <RouterLink to="/layout">Guide</RouterLink>
      </li>
      <li class="mx-2 hover:underline">
        <RouterLink to="">Contact</RouterLink>
      </li>
      <div id="tool" class="border-l-2 flex items-center capitalize">
        <el-switch
          v-model="value.darkMode"
          class="mx-4"
          style="--el-switch-on-color: grey"
          inline-prompt
          :active-icon="Sunny"
          :inactive-icon="Moon"
        />
        <a href="https://github.com/maple24/vite-admin">
          <font-awesome-icon icon="fa-brands fa-github" class="text-lg pt-1" />
        </a>
      </div>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref } from 'vue';
  import { watch } from 'vue';
  import { Sunny, Moon } from '@element-plus/icons-vue';
  const value = reactive({
    darkMode: false,
  });

  watch(
    () => value.darkMode,
    () => {
      document.documentElement.classList.toggle('dark');
    }
  );
</script>

<style scoped></style>
