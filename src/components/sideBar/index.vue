<template>
  <div
    id="sidebar"
    class="h-screen w-16 dark:bg-gray-700 dark:text-white border-2"
  >
    <ul class="py-5 flex flex-col">
      <li
        class="border text-center m-2 rounded-lg hover:bg-slate-200 hover:shadow-xl dark:bg-gray-800"
      >
        <RouterLink to="/layout/page1"
          ><font-awesome-icon
            icon="fa-solid fa-house"
            class="text-3xl dark:text-white"
        /></RouterLink>
      </li>
      <li class="siderbar-icon">
        <RouterLink to="/layout/page2"
          ><font-awesome-icon
            icon="fa-brands fa-twitter"
            class="text-3xl dark:text-white"
        /></RouterLink>
      </li>
      <li class="siderbar-icon">
        <RouterLink to="#"
          ><font-awesome-icon
            icon="fa-solid fa-user-secret"
            class="text-3xl dark:text-white"
        /></RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
