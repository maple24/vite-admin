import { defineStore } from 'pinia';

export const useLayoutStore = defineStore('count', {
  state: () => {
    return {
      navBar:<boolean>false,
      navBarMD:<boolean>false,
      sideBar: <boolean>false,
      sideBarMD: <boolean>false,
      mainSection: <boolean>false,
      footBar: <boolean>false,
      hamburgerBar: <boolean>true,
    };
  },
  getters: {
  },
  actions: {
    toggleHamburgerBar() {
      this.hamburgerBar = !this.hamburgerBar
    }
  },
});
