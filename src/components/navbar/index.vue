<template>
  <div
    class="flex border-2 px-10 bg-white dark:bg-slate-700 text-gray-700 dark:text-white justify-between items-center">
    <div id="logo" class="whitespace-nowrap flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-8 h-8 text-blue-500 hover:animate-spin-slow">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
      <h1 class="mx-5">{{ route.meta.title?.toUpperCase() }}</h1>
    </div>
    <ul class="flex items-center font-bold font-mono">
      <li class="mx-2 hover:underline">
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li class="mx-2 hover:underline">
        <RouterLink to="/layout">Guide</RouterLink>
      </li>
      <li class="mx-2 hover:underline">
        <RouterLink to="/profile">Contact</RouterLink>
      </li>
      <div id="tool" class="border-l-2 flex items-center capitalize">
        <el-switch v-model="value.darkMode" class="mx-4" style="--el-switch-on-color: grey" inline-prompt
          :active-icon="Sunny" :inactive-icon="Moon" />
        <a href="https://github.com/maple24/vite-admin">
          <font-awesome-icon icon="fa-brands fa-github" class="text-lg pt-1 mr-4" />
        </a>
        <button @click="store.logout">
          <font-awesome-icon icon="fa-solid fa-right-from-bracket" class="text-lg pt-1" />
        </button>
      </div>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { watch } from "vue";
import { Sunny, Moon } from "@element-plus/icons-vue";
import { useUserStore } from "@/store/user";
import { useRoute } from "vue-router";

const store = useUserStore();
const route = useRoute();

const value = reactive({
  darkMode: false,
});

watch(
  () => value.darkMode,
  () => {
    document.documentElement.classList.toggle("dark");
  }
);
</script>

<style scoped>

</style>
