import { ref } from "vue";

export default function useUser() {
  const user = ref({
    name: "刘大明",

    age: 32,
  });

  function load() {
    user.value = {
      name: "张三",

      age: 20,
    };
  }

  return {
    user,

    load,
  };
}
