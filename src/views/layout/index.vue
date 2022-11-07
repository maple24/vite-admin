<template>
  <div>
    <nav class="sticky top-0 opacity-1">
      <navBar />
    </nav>
    <section class="flex h-screen">
      <div id="sidebar">
        <sideBar />
      </div>
      <div id="content">
        <mainSection />
      </div>
    </section>
    <footer>
      <footBar />
    </footer>
  </div>
</template>

<script setup lang="ts">
  import navBar from '@/components/navBar/index.vue';
  import sideBar from '@/components/sideBar/index.vue';
  import mainSection from '@/components/mainSection/index.vue';
  import footBar from '@/components/footBar/index.vue';
</script>

<style scoped></style>
