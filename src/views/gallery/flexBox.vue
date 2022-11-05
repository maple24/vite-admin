<template>
  <nav class="bg-blue-500">
    <div class="flex justify-between h-10 items-center mx-4">
      <div class="text-white font-bold text-xl">Flexbox</div>
      <ul class="hidden md:flex text-white h-full items-center">
        <li class="ml-4"><a href="#" class="hover:text-gray-200">Home</a></li>
        <li class="ml-4"><a href="#" class="hover:text-gray-200">About</a></li>
        <li class="ml-4">
          <a href="#" class="hover:text-gray-200">Contact</a>
        </li>
      </ul>
    </div>
  </nav>

  <header class="bg-blue-700">
    <div class="flex flex-row justify-between items-center mx-4 h-80">
      <div id="intro" class="flex flex-col w-2/3 text-left">
        <h1 class="text-white text-3xl font-bold my-4">Flexbox crash course</h1>
        <p class="text-white leading-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor alias
          animi similique. Aliquam, ratione eius illum itaque quae aspernatur
          earum ea, cum, reprehenderit est officiis. Qui corporis odio unde
          accusamus.
        </p>
      </div>
      <div id="logo" class="flex w-1/3 flex-col">
        <div id="rol1" class="flex">
          <div class="border-4 w-9 h-9 ml-3 mb-4"></div>
          <div class="border-4 w-9 h-9 ml-3 mb-4"></div>
          <div class="border-4 w-9 h-9 ml-3 mb-4"></div>
        </div>
        <div id="rol2" class="flex">
          <div class="border-4 w-9 h-9 ml-3 mb-4"></div>
          <div class="border-4 w-9 h-9 ml-3"></div>
          <div class="border-4 w-9 h-9 ml-3 mb-4"></div>
        </div>
        <div id="rol3" class="flex">
          <div class="border-4 w-9 h-9 ml-3 mb-4"></div>
          <div class="border-4 w-9 h-9 ml-3 mb-4"></div>
          <div class="border-4 w-9 h-9 ml-3 mb-4"></div>
        </div>
      </div>
    </div>
  </header>

  <section></section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
