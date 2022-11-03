import { defineStore } from 'pinia';
import { getToken, setToken, removeToken } from '@/utils/auth';
// difference bewteen define object
// short hand expression of return using bracket
export const useUserStore = defineStore('user', {
  state: () => ({
    token: '',
    name: '',
    role: '',
  }),
  actions: {
    login(token: string) {
      this.token = token;
      setToken(token);
    },
    getUserInfo() {
      this.name = 'maple';
      this.role = 'admin';
    },
    logout() {
      this.token = '';
      removeToken();
    },
  },
});
