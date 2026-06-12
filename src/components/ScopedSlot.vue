<template>
    <ul>
      <li v-for="item in list" :key="item.id">
  
        <slot :item="item"></slot>
  
      </li>
    </ul>
  </template>
  
  <script setup>
  const list = [
    { id: 1, name: "张三" },
    { id: 2, name: "李四" }
  ]
  </script>