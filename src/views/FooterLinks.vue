<template>
  <div class="footer-links">
    <router-link to="/privacy" class="footer-link">隐私政策</router-link>&nbsp;&nbsp;
    <router-link to="/about" class="footer-link">关于我们</router-link>&nbsp;&nbsp;
    <router-link to="/contact" class="footer-link">联系我们</router-link>
  </div>
</template>
  
  <script setup>
</script>
  
  <style scoped>
.footer-links {
  text-align: center;
  margin-top: -15px;
}

.footer-link {
  font-size: 14px;
  color: #888;
  text-decoration: none;
  /*padding: 6px 12px;*/
  border-radius: 6px;
  line-height: 14px;
  transition: all 0.25s ease;
  margin-top: 0px;
}

.footer-link:hover {
  color: #42b983;
}
</style>
  