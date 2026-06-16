<script setup>
import { ref } from "vue";

import UserInput from "@/components/UserInput.vue";

const keyword = ref("");
</script>

<template>
  <UserInput v-model="keyword" />

  <p>
    {{ keyword }}
  </p>
</template>