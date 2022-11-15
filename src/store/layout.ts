import { defineStore } from 'pinia';

export const useLayoutStore = defineStore('layout', {
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
    closeBar() {
      this.hamburgerBar = true
      this.ellipsis = true
    },
    toggleEllipsis() {
      this.ellipsis = !this.ellipsis
    }
  },
});
