<template>
  <div id="mainContent">
    <button
      class="border-2 border-black rounded-md bg-gray-200"
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
  </div>
</template>

<script setup lang="ts">
  function toggleSideBar() {
    const sidebar = document.querySelector('#sidebar');
    sidebar?.classList.toggle('hidden');
  }
</script>

<style scoped></style>
