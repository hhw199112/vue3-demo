<template>
    <div class="contact-wrapper">
      <div class="contact-container">
        <h1>联系我们（Contact）</h1>
  
        <p>
          如果您对本站内容有建议、合作意向、问题反馈或希望进行技术交流，
          欢迎通过以下方式联系站长。
        </p>
  
        <h2>联系邮箱</h2>
        <p><strong>Email：</strong> jacklion199112@gmail.com</p>
  
        <h2>适用范围</h2>
        <ul>
          <li>内容纠错与补充建议</li>
          <li>前端技术交流（Vue3 / TypeScript / 前端工程化）</li>
          <li>合作、授权、转载申请</li>
          <li>网站相关问题反馈</li>
        </ul>
  
        <h2>回复时间</h2>
        <p>一般会在 1～3 个工作日内回复您的邮件。</p>
  
        <p>感谢您对 vue3.tech 的支持。</p>
      </div>
    </div>
  </template>
  
  <script setup>
  // 无需脚本逻辑
  </script>
  
  <style scoped>
  /* 外层容器：可滚动但不显示滚动条 */
  .contact-wrapper {
    height: calc(100vh - 60px); /* 根据你的布局调整 */
    overflow-y: auto;
    padding: 20px;
    box-sizing: border-box;
  
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE/Edge */
  }
  .contact-wrapper::-webkit-scrollbar {
    display: none; /* Chrome / Safari */
  }
  
  /* 内容区域 */
  .contact-container {
    max-width: 760px;
    margin: 0 auto;
    padding: 10px 16px;
    line-height: 1.55;
    font-size: 15px;
    color: #333;
  }
  
  h1 {
    margin-bottom: 14px;
    font-size: 22px;
  }
  
  h2 {
    margin-top: 18px;
    margin-bottom: 6px;
    font-size: 18px;
  }
  
  ul {
    padding-left: 18px;
  }
  
  a {
    color: #42b983;
  }
  </style>
  