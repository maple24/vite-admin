import { defineStore } from 'pinia';

// difference bewteen define object
// short hand expression of return using bracket
export const useUserStore = defineStore('user', {
  state: () => ({
    token: '',
    name: '',
    roles: '',
  }),
  actions: {
    setToken(token: string) {
      this.token = token;
    },
  },
});
