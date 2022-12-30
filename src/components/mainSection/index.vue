<template>
  <div id="mainContent">
    <!-- <button
      class="border-2 border-black rounded-md bg-gray-200"
      @click="toggleSideBar"
    >
      toggle
    </button> -->
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <KeepAlive>
          <component :is="Component" :key="route.name" />
        </KeepAlive>
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
function toggleSideBar() {
  const sidebar = document.querySelector("#sidebar");
  sidebar?.classList.toggle("hidden");
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
