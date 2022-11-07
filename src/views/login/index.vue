<template>
  <div id="loginform" class="dark:bg-slate-600 dark:text-white h-full">
    <form
      @submit.prevent="handleLogin"
      class="border-solid border-emerald-300 border-2 left-1/3 top-1/3 w-1/2 md:w-1/4 absolute"
    >
      <div class="flex justify-between">
        <label class="text-lg font-serif capitalize">username</label>
        <input
          type="text"
          class="form-input border border-black rounded-md dark:text-black"
          autofocus
          placeholder="admin"
          v-model.trim="loginform.username"
          autocomplete="username"
        />
      </div>
      <div class="flex justify-between">
        <label class="text-lg font-serif capitalize">password</label>
        <input
          type="password"
          class="form-input border border-black rounded-md dark:text-black"
          autofocus
          placeholder="admin"
          v-model.trim="loginform.password"
          autocomplete="current-password"
        />
      </div>
      <div class="flex justify-center">
        <input
          type="submit"
          class="text-lg border border-solid border-black bg-slate-100 p-1 rounded-lg disabled:border-white disabled:text-slate-300"
          :disabled="isValid"
          value="Sign In"
        />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
  import { validEmail, validPassword, validUsername } from '@/utils/validate';
  import { reactive, ref, watch, computed } from 'vue';
  import { useRouter } from 'vue-router';
  import { useUserStore } from '@/store/user';
  import { faL } from '@fortawesome/free-solid-svg-icons';
  const router = useRouter();
  const store = useUserStore();

  interface loginformInterface {
    username: string;
    password: string;
  }
  let loginform: loginformInterface = reactive({
    username: '',
    password: '',
  });

  const handleLogin = (e: Event): void => {
    const token = 'testtoken';
    store.login(token);
    router.push('/');
  };

  const isValid = computed(() => {
    if (
      validUsername(loginform.username) &&
      validPassword(loginform.password)
    ) {
      return false;
    } else {
      return true;
    }
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
