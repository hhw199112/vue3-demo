import { ref } from "vue";

export default function useCounter() {
  const count = ref(0);

  function add() {
    count.value++;
  }

  return {
    count,

    add,
  };
}
