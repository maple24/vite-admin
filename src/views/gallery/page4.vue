<template>
  <div>
    <!-- <div class="relative left-10 h-20 bg-yellow-100 w-full">
      <h1>testpage</h1>
      <div class="absolute left-10 bg-slate-400">
        <h1>absolute</h1>
      </div>
      <div class="relative left-10">
        <h1>relative</h1>
      </div>
      <div class="sticky bg-blue-300">
        <h1>sticky</h1>
      </div>
    </div> -->
    <div class="">
      <dropDown />
    </div>
    <button :disabled="disabled" class="bg-gray-300 rounded-sm shadow-md">
      click me
    </button>
    <button class="bg-green-200" @click="handleClick">
      toggle button disabled
    </button>
    <breadCrumb />
  </div>
</template>

<script setup lang="ts">
  import dropDown from '@/components/dropdown/index.vue';
  import breadCrumb from '@/components/breadcrumb/index.vue';
  import { ref } from 'vue';
  let disabled = ref(true);
  function handleClick() {
    console.log('hello');
    disabled.value = !disabled.value;
  }
</script>

<style scoped></style>
