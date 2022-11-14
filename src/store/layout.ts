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
      ellipsis: <boolean>true
    };
  },
  getters: {
  },
  actions: {
    toggleHamburgerBar() {
      this.hamburgerBar = !this.hamburgerBar
    },
    closeHamburgerBar() {
      this.hamburgerBar = true
    },
    toggleEllipsis() {
      this.ellipsis = !this.ellipsis
    },
    closeEllipsis() {
      this.ellipsis = true
    }
  },
});
