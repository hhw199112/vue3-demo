import { defineStore } from "pinia";

export const useUserStore = defineStore(
  "user",

  {
    state: () => ({
      name: "张三",

      age: 20,
    }),

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
