<template>
  <div class="app-container">
    <router-view />
  </div>
</template>

<style>
html,
body {
  height: 100%;
  margin: 0;
  overflow: hidden; /* ❗核心：禁止全局滚动 */
}

#app {
  height: 100%;
  overflow: hidden; /* ❗防止 Vue 根容器滚动 */
}

.app-container {
  height: 100%;
  overflow: hidden;
}
</style>