<template>
  <div>
    <nav class="sticky top-0 opacity-1">
      <navBar />
    </nav>
    <section class="h-screen md:flex-row flex">
      <div id="sidebar">
        <sideBar
          class="max-[768px]:hidden h-screen w-20 dark:bg-gray-700 dark:text-white border-2 fixed"
        />
        <sideBarMD
          class="min-[768px]:hidden h-12 border fixed bg-white w-screen"
        />
        <hamburgerBar
          :class="{ hidden: store.hamburgerBar }"
          class="fixed h-screen overflow-scroll w-1/2 bg-white mt-12"
        />
      </div>
      <div id="content" class="flex mt-12 md:ml-20 md:mt-0">
        <mainSection />
      </div>
    </section>
    <footer>
      <footBar />
    </footer>
  </div>
</template>

<script setup lang="ts">
import navBar from "@/components/navbar/index.vue";
import sideBar from "@/components/sidebar/index.vue";
import sideBarMD from "@/components/sidebar/index_md.vue";
import mainSection from "@/components/mainsection/index.vue";
import footBar from "@/components/footer/index.vue";
import hamburgerBar from "@/components/hamburger/index.vue";
import { useLayoutStore } from "@/store/layout";
const store = useLayoutStore();
</script>

<style scoped></style>
