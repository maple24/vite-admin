<template>
  <div class="">
    <span
      v-for="(p, i) in path"
      class="mx-2"
      v-if="typeof path[0].redirect === 'undefined'"
    >
      <button
        v-if="p.path !== route.fullPath"
        class="text-gray-400 border hover:underline capitalize"
        @click="router.push(p.path)"
      >
        {{ p.path.split("/")[i + 1] }}
      </button>
      <button v-else disabled class="border capitalize">
        {{ p.path.split("/")[i + 1] }}
      </button>
      <span v-if="i !== path.length - 1" class="ml-4">></span>
    </span>
    <span v-else class="mx-2 capitalize">{{
      (path[0].redirect as string).split("/")[1]
    }}</span>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";
const route = useRoute();
const router = useRouter();
const path = computed(() => route.matched);
</script>

<style scoped></style>
