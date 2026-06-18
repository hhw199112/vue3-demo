<template>
    <div class="footer-wrapper">
      <div class="footer-links">
        <router-link to="/privacy" class="footer-link">隐私政策</router-link>
        <router-link to="/about" class="footer-link">关于我们</router-link>
        <router-link to="/contact" class="footer-link">联系我们</router-link>
      </div>
  
      <div class="copyright">
        © 2026 vue3.tech All Rights Reserved.
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .footer-wrapper {
    text-align: center;
    margin-top: 0px;
    padding-bottom: 10px;
    color: #888;
    font-size: 13px;
  }
  
  .footer-links {
    margin-bottom: 6px;
  }
  
  .footer-link {
    font-size: 14px;
    color: #888;
    text-decoration: none;
    margin: 0 10px;
    transition: all 0.25s ease;
  }
  
  .footer-link:hover {
    color: #42b983;
  }
  
  copyright {
    margin-top: 4px;
    font-size: 12px;
    color: #aaa;
  }
  </style>
  