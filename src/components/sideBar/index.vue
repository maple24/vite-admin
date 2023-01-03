<template>
  <div id="sidebar" class="dark:bg-gray-700 dark:text-white border-2">
    <ul class="py-5 flex flex-col">
      <li class="siderbar-icon">
        <RouterLink to="/layout/page1"><font-awesome-icon icon="fa-solid fa-dashboard"
            class="text-5xl text-green-300" /></RouterLink>
      </li>
      <li class="siderbar-icon">
        <RouterLink to="/layout/RQM"><font-awesome-icon icon="fa-brands fa-twitter" class="text-5xl text-blue-400" />
        </RouterLink>
      </li>
      <li class="siderbar-icon">
        <RouterLink to="/layout/page3"><font-awesome-icon icon="fa-solid fa-download" class="text-5xl" /></RouterLink>
      </li>
      <li class="siderbar-icon">
        <RouterLink to="/layout/page4"><font-awesome-icon icon="fa-solid fa-house" class="text-5xl text-yellow-400" />
        </RouterLink>
      </li>
      <li class="siderbar-icon">
        <RouterLink to="/permission"><font-awesome-icon icon="fa-solid fa-user" class="text-5xl text-red-400" />
        </RouterLink>
      </li>
      <li class="siderbar-icon">
        <RouterLink to="/layout/chat"><font-awesome-icon icon="fa-brands fa-rocketchat"
            class="text-5xl text-green-400" />
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>

</style>
