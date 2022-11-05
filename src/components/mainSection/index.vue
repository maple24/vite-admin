<template>
  <div
    id="sidebar"
    class="fixed top-0 left-0 m-0 h-screen w-16 flex flex-col bg-gray-900 text-white"
  >
    <ul class="">
      <li
        class="border text-center m-2 rounded-lg hover:bg-slate-500 hover:shadow-xl bg-gray-800"
      >
        <RouterLink to="/layout/page1"
          ><font-awesome-icon
            icon="fa-solid fa-house"
            class="text-3xl text-white"
        /></RouterLink>
      </li>
      <li class="text-center">
        <RouterLink to="/layout/page2"
          ><font-awesome-icon icon="fa-brands fa-twitter"
        /></RouterLink>
      </li>
      <li class="text-center">
        <RouterLink to="#"
          ><font-awesome-icon icon="fa-solid fa-user-secret"
        /></RouterLink>
      </li>
    </ul>
  </div>
  <button
    class="ml-20 border-2 border-black rounded-md bg-gray-200"
    @click="toggleSideBar"
  >
    toggle
  </button>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <KeepAlive>
        <component :is="Component" />
      </KeepAlive>
    </transition>
  </router-view>
</template>

<script setup lang="ts">
function toggleSideBar() {
  const sidebar = document.querySelector("#sidebar");
  sidebar?.classList.toggle("hidden");
}
</script>

<style scoped></style>
