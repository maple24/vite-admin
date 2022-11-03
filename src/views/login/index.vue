<template>
  <div class="dark:bg-slate-600 dark:text-white">
    <form @submit.prevent="handleLogin" class="border-solid border-emerald-300">
      <div>
        <label class="text-lg mx-10">username</label>
        <input
          type="text"
          class="form-input px-4 py-3 rounded-full"
          autofocus
          placeholder="admin"
          v-model.trim="loginform.username"
          autocomplete="username"
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
          autocomplete="current-password"
        />
      </div>
      <div>
        <input
          type="submit"
          class="text-lg border-"
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
