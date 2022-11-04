import { defineStore } from 'pinia';

export const useCounterStore = defineStore('count', {
  state: () => {
    return {
      count: <number>0,
    };
  },
  getters: {
    doubledcount(state) {
      return state.count * 2;
    },
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
