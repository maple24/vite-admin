<template>
  <div>
    <navBar />
    <sideBar />
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
  import navBar from '@/components/navBar/index.vue';
  import sideBar from '@/components/sideBar/index.vue';
</script>

<style scoped></style>
