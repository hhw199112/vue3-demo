<template>
    <input
      :value="props.modelValue"
      @input="
        emit(
          'update:modelValue',
  
          $event.target.value
        )
      "
    />
  </template>

<script setup>
import {defineProps,defineEmits} from 'vue'
const props = defineProps({
  modelValue: String,
});

const emit = defineEmits(["update:modelValue"]);
</script>
<style scoped>
input{
    width: 200px;
    height:50px;
}
</style>

