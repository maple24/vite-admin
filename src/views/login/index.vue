<template>
  <div class="flex justify-center h-full items-center">
    <div id="loginform" class="dark:bg-slate-600 dark:text-white flex-col">
      <form @submit.prevent="handleLogin" class="border-solid border-emerald-300 border-2 shadow-2xl">
        <div class="flex justify-between my-2">
          <label class="text-lg font-serif capitalize">username</label>
          <input type="text" class="form-input border border-black rounded-md dark:text-black w-1/2" autofocus
            placeholder="admin" v-model.trim="loginform.username" autocomplete="username" />
        </div>
        <div class="flex justify-between my-2">
          <label class="text-lg font-serif capitalize">password</label>
          <input type="password" class="form-input border border-black rounded-md dark:text-black w-1/2" autofocus
            placeholder="admin" v-model.trim="loginform.password" autocomplete="current-password" />
        </div>
        <div class="flex justify-center m-2">
          <input type="submit"
            class="hover:text-gray-500 hover:shadow-sm text-lg  border-black bg-green-500  text-white p-1 rounded-lg disabled:border-white disabled:text-slate-300 w-full"
            :disabled="isValid" value="Sign In" />
        </div>
      </form>
      <div>
        Please login with your NT account.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { validEmail, validPassword, validUsername } from '@/utils/validate';
import { reactive, ref, watch, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/user';
import loginformInterface from '@/types/loginform';
import { login } from '@/api/user';
const router = useRouter();
const store = useUserStore();

const loginform: loginformInterface = reactive({
  username: '',
  password: '',
});

const handleLogin = async (e: Event): Promise<void> => {
  // const token = 'testtoken';
  const response = await login({
    username: loginform.username,
    password: loginform.password
  });
  const { access } = await response.data
  store.login(access);
  router.push('/');
};

const isValid = computed(() => {
  return validUsername(loginform.username) && validPassword(loginform.password) ? false : true
});

  // watch source need to be a getter/effect function, actually do not know why, but it works
  //   watch(
  //     [() => loginform.username, () => loginform.password],
  //     ([username, password]) => {
  //       if (validUsername(username) && validPassword(password)) {
  //         loginform.valid = false;
  //       } else {
  //         loginform.valid = true;
  //       }
  //     }
  //   );
</script>

<style scoped></style>
