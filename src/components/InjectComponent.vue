<template>
  <div>
    注射数据姓名：{{ injectData.name }}<br />
    注射数据年龄：{{ injectData.age }}<br />
    注射数据地址：{{ injectData.addr }}
  </div>
</template>
<script setup>
import { inject } from "vue";
const injectData = inject("dataOrginal");
</script>
