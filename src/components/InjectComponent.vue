<template>
  <div>
    注射姓名：{{ injectData.name }}<br />
    注射年龄：{{ injectData.age }}<br />
    注射地址：{{ injectData.addr }}
  </div>
</template>
<script setup>
import { inject } from "vue";
const injectData = inject("dataOrginal");
</script>
