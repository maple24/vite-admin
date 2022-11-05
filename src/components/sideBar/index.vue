<template>
  <div class="fixed border-4 border-blue-500 bg-yellow-100 h-screen">
    <ul class="h-full">
      <!-- sidebar icon fas -->

      <li>
        <RouterLink to="/layout/page1"
          ><font-awesome-icon icon="fa-solid fa-user-secret" />page1</RouterLink
        >
      </li>
      <li>
        <RouterLink to="/layout/page2"
          ><font-awesome-icon icon="fa-brands fa-twitter" />page2</RouterLink
        >
      </li>
      <li>
        <RouterLink to="#"
          ><font-awesome-icon icon="fa-solid fa-house" />page3</RouterLink
        >
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
