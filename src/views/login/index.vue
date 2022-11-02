<template>
  <div class="dark:bg-slate-600 dark:text-white">
    <form @submit.prevent="handleClick" class="border-solid border-emerald-300">
      <div>
        <label class="text-lg mx-10">username</label>
        <input
          type="text"
          class="form-input px-4 py-3 rounded-full"
          autofocus
          placeholder="admin"
          v-model.trim="loginform.username"
        />
      </div>
      <div>
        <label class="text-lg mx-10">password</label>
        <input
          type="password"
          class="form-input px-4 py-3 rounded-full"
          autofocus
          placeholder="admin"
          v-model.trim="loginform.password"
        />
      </div>
      <div>
        <input
          type="submit"
          class="text-lg border-"
          :disabled="loginform.valid"
          value="Sign In"
        />
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
  import { validEmail, validPassword, validUsername } from '@/utils/validate';
  import { reactive, ref, watch } from 'vue';
  import { useRouter } from 'vue-router';
  const router = useRouter();

  interface loginformInterface {
    username: string;
    password: string;
    valid: boolean;
  }
  let loginform: loginformInterface = reactive({
    username: '',
    password: '',
    valid: true,
  });
  const handleClick = (e: Event): void => {
    handleLogin();
  };

  function handleLogin() {
    router.push('/');
    console.log('submited');
  }

  // watch source need to be a getter/effect function, actually do not know why, but it works
  watch(
    [() => loginform.username, () => loginform.password],
    ([username, password]) => {
      if (validUsername(username) && validPassword(password)) {
        loginform.valid = false;
      } else {
        loginform.valid = true;
      }
    }
  );
</script>

<style scoped></style>
