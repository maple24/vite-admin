import { defineStore } from 'pinia';
import { getToken, setToken, removeToken } from '@/utils/auth';
import { role } from '@/types/user';
import { getUserInfo } from '@/api/user';

// difference bewteen define object
// short hand expression of return using bracket
export const useUserStore = defineStore('user', {
  state: () => ({
    token: '' as string,
    name: '' as string,
    roles: [] as role[],
    is_superuser: false as boolean
  }),
  actions: {
    login(token: string) {
      this.token = token;
      setToken(token);
    },
    async getUserInfo() {
      const response = await getUserInfo()
      const { name, roles, is_superuser } = response.data
      if (!roles || roles.length <= 0) {
        console.error('getInfo: roles must be a non-null array!');
      }
      this.name = name;
      this.roles = roles;
      this.is_superuser = is_superuser
    },
    logout() {
      this.token = '';
      removeToken();
      window.location.reload()
    },
  },
});
