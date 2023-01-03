<template>
  <div>
    <nav class="sticky top-0 left-0 z-50">
      <navBar class="max-[768px]:hidden" />
      <navBarMD class="min-[768px]:hidden" />
      <sideBarMD class="min-[768px]:hidden h-12" />
    </nav>
    <section class="h-screen md:flex-row flex overflow-auto">
      <div id="sidebar">
        <sideBar class="max-[768px]:hidden h-screen w-20 fixed" />
        <hamburgerBar :class="{ hidden: store.hamburgerBar }" class="fixed h-screen z-50" />
      </div>
      <div id="content" class="flex md:ml-20 md:mt-0 w-full" @click="store.closeBar">
        <mainSection />
      </div>
    </section>
    <footer class="sticky left-0 bottom-0 z-50">
      <footBar />
    </footer>
  </div>
</template>

<script setup lang="ts">
import navBar from '@/components/navbar/index.vue';
import navBarMD from '@/components/navbar/index_md.vue';
import sideBar from '@/components/sidebar/index.vue';
import sideBarMD from '@/components/sidebar/index_md.vue';
import mainSection from '@/components/mainsection/index.vue';
import footBar from '@/components/footer/index.vue';
import hamburgerBar from '@/components/hamburger/index.vue';
import { useLayoutStore } from '@/store/layout';
const store = useLayoutStore();
</script>

<style scoped>

</style>
