<template>
  <div class="bg-gray-100 h-full">
    <div class="container mx-auto p-5">
      <div class="md:flex no-wrap md:-mx-2 ">
        <!-- Left Side -->
        <div class="w-full md:w-3/12 md:mx-2">
          <!-- Profile Card -->
          <div class="bg-white p-3 border-t-4 border-green-400">
            <div class="image overflow-hidden">
              <img class="h-auto w-full mx-auto"
                src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg" alt="">
            </div>
            <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">Jin Zhu</h1>
            <h3 class="text-gray-600 font-lg text-semibold leading-6">Bosch (China) Automotive Innovation&Software
              Engineering Center</h3>
            <img src="/avatar.png" class="rounded-full w-32" alt="Avatar" />

            <ul
              class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
              <li class="flex items-center py-3">
                <span>Status</span>
                <span class="ml-auto"><span
                    class="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
              </li>
              <li class="flex items-center py-3">
                <span>Member since</span>
                <span class="ml-auto">Oct 14, 2022</span>
              </li>
            </ul>
          </div>
          <!-- End of profile card -->
        </div>
        <!-- Right Side -->
        <div class="w-full md:w-9/12 mx-2 h-64 divide-y">
          <!-- Profile tab -->
          <!-- About Section -->
          <div class="bg-white p-3 shadow-sm rounded-sm">
            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
              <span clas="text-green-500">
                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              <span class="tracking-wide">About</span>
            </div>
            <div class="text-gray-700">
              <div class="grid md:grid-cols-2 text-sm">
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">First Name</div>
                  <div class="px-4 py-2">Jin</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Last Name</div>
                  <div class="px-4 py-2">Zhu</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Gender</div>
                  <div class="px-4 py-2">Male</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Contact No.</div>
                  <div class="px-4 py-2">+86(510)8059-8427</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Current Address</div>
                  <div class="px-4 py-2">Building 5#. Xiushui Fang. No.99 Qingshu Avenue</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Office</div>
                  <div class="px-4 py-2">Wx8</div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Email.</div>
                  <div class="px-4 py-2">
                    <a class="text-blue-800" href="mailto:jane@example.com">Jin.ZHU5@cn.bosch.com</a>
                  </div>
                </div>
                <div class="grid grid-cols-2">
                  <div class="px-4 py-2 font-semibold">Department</div>
                  <div class="px-4 py-2">CN/ESC-EPA4</div>
                </div>
              </div>
            </div>
          </div>
          <!-- End of about section -->

          <!-- Experience and education -->
          <div class="bg-white p-3 shadow-sm rounded-sm">
            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
              <span clas="text-green-500">
                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              <span class="tracking-wide">Message</span>
            </div>
            <div class="container mx-auto">
              <form class="bg-white p-6 rounded-lg shadow-md">
                <label class="block text-gray-700 font-medium mb-2">Name</label>
                <input class="w-full border border-gray-400 p-2 rounded-lg" type="text" placeholder="John Doe">
                <label class="block text-gray-700 font-medium mb-2 mt-4">Email</label>
                <input class="w-full border border-gray-400 p-2 rounded-lg" type="email"
                  placeholder="johndoe@example.com">
                <label class="block text-gray-700 font-medium mb-2 mt-4">Message</label>
                <textarea class="w-full border border-gray-400 p-2 rounded-lg h-32"></textarea>
                <button class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 mt-4">Send</button>
              </form>
            </div>
          </div>
          <!-- End of profile tab -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>

</style>
