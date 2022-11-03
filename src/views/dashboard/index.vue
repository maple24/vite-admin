<template>
  <div>
    <h1>Dash board</h1>
    <div class="h-screen flex items-center justify-center">
      <div
        class="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in"
      >
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          class="bg-yellow-300 border-yellow-500 mr-1 focus:ring-transparent toggle-checkbox absolute block w-6 h-6 rounded-full border-2 appearance-none cursor-pointer"
        />
        <label
          for="toggle"
          class="toggle-label block h-8 -ml-1 -mt-1 rounded-full bg-green-400 cursor-pointer"
        ></label>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
  .toggle-checkbox:checked {
    right: 0;
    border: none;
    background-color: rgb(129 124 214);
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' className='h-10 w-10' fill='%23FFF' viewBox='0 0 24 24' stroke='rgb(129 124 214)' > <path strokeLinecap='round' strokeLinejoin='round' d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z' /> </svg>");
  }
  .toggle-checkbox:checked + .toggle-label {
    background-color: rgb(76 73 188);
  }
</style>
