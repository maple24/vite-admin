<template>
  <div class="">
    <nav class="sticky top-0 opacity-1">
      <navBar />
    </nav>
    <section class="flex h-screen flex-col md:flex-row">
      <div id="sidebar">
        <sideBar class="max-[768px]:hidden" />
        <sideBarMD class="min-[768px]:hidden" />
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
  import navBar from '@/components/navbar/index.vue';
  import sideBar from '@/components/sidebar/index.vue';
  import sideBarMD from '@/components/sidebar/index_md.vue';
  import mainSection from '@/components/mainsection/index.vue';
  import footBar from '@/components/footer/index.vue';
</script>

<style scoped></style>
