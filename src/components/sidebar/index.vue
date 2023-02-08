<template>
  <div id="sidebar" class="dark:bg-gray-700 dark:text-white border-2">
    <ul class="py-5 flex flex-col">
      <li class="siderbar-icon">
        <RouterLink to="/"><font-awesome-icon icon="fa-solid fa-dashboard" class="text-5xl text-green-800" />
        </RouterLink>
      </li>
      <li class="siderbar-icon">
        <RouterLink to="/task"><font-awesome-icon icon="fa-solid fa-computer" class="text-5xl text-red-700" />
        </RouterLink>
      </li>
      <li class="siderbar-icon">
        <RouterLink to="/RQM"><font-awesome-icon icon="fa-solid fa-magnifying-glass" class="text-5xl text-blue-500" />
        </RouterLink>
      </li>
      <li class="siderbar-icon">
        <RouterLink to="/chat/index"><font-awesome-icon icon="fa-brands fa-rocketchat"
            class="text-5xl text-green-400" />
        </RouterLink>
      </li>
      <li class="siderbar-icon">
        <RouterLink to="/layout/calendar"><font-awesome-icon icon="fa-solid fa-house"
            class="text-5xl text-yellow-400" />
        </RouterLink>
      </li>
      <li class="siderbar-icon">
        <RouterLink to="/permission"><font-awesome-icon icon="fa-solid fa-user" class="text-5xl text-red-400" />
        </RouterLink>
      </li>
      <!-- <li class="siderbar-icon">
        <RouterLink to="/js30"><font-awesome-icon icon="fa-solid fa-book-open" class="text-5xl" />
        </RouterLink>
      </li> -->
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>

</style>
