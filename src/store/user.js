import { defineStore } from "pinia";
import { ref,computed } from "vue";
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

/*setup store函数式写法*/
export const countStore = defineStore("count", ()=>{

  const count = ref(0);

  const doubleCount = computed(() => {
    return count.value * 2;
  });

  /*increment函数用于增加count的值*/
  const increment = () => {
    count.value++;
  };
  /*返回count和increment函数*/
  return {
    count,
    doubleCount,
    increment,
  };


});
