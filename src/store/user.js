import { defineStore } from "pinia";

export const useUserStore = defineStore(
  "user",

  {
    state: () => ({
      name: "张三",

      age: 20,
    }),
    persist: true,//持久化存储，存储到本地localStorage
    getters: {
      info(state) {
        return state.name + "-" + state.age;
      },
    },

    actions: {
      add() {
        this.age++;
      },
    },
  },
);
