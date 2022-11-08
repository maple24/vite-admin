import { defineStore } from 'pinia';
import { getToken, setToken, removeToken } from '@/utils/auth';
import { role } from '@/types/role';
// difference bewteen define object
// short hand expression of return using bracket
export const useUserStore = defineStore('user', {
  state: () => ({
    token: '' as string,
    name: '' as string,
    roles: [] as role[],
  }),
  actions: {
    login(token: string) {
      this.token = token;
      setToken(token);
    },
    async getUserInfo() {
      // await request
      this.name = 'maple';
      this.roles.push('visitor');
    },
    logout() {
      this.token = '';
      removeToken();
    },
  },
});
