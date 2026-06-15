<template>
  <div class="user-box">
    <h2>用户信息</h2>

    <p>姓名：张三</p>

    <p>年龄：20</p>

    <p>职业：Java开发工程师</p>
  </div>
</template>
  
  <script setup>
// 模拟接口请求耗时3秒

await new Promise((resolve) => {
  setTimeout(resolve, 3000);
});
</script>
  
  <style scoped>
.user-box {
  padding: 20px;

  border: 1px solid #ccc;

  border-radius: 8px;

  background: #f7f7f7;
}
</style>