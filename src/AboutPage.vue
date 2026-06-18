<template>
  <div class="about-wrapper">
    <div class="about-content">
      <h1>关于本站</h1>
      <p>
        vue3.tech 是一个专注于 <strong>Vue3 技术学习</strong> 的个人站点，
        提供简洁、实用、可直接上手的前端教程与示例。
      </p>

      <h2>网站目标</h2>
      <ul>
        <li>提供高质量的 Vue3 学习资料</li>
        <li>帮助初学者快速入门</li>
        <li>为进阶开发者提供参考</li>
        <li>持续构建可扩展的知识库</li>
      </ul>

      <h2>站长信息</h2>
      <p>本站由个人独立维护，如有建议或合作欢迎联系：</p>
      <p><strong>Email：</strong> jacklion199112@gmail.com</p>

      <h2>版权说明</h2>
      <p>
        本站原创内容受版权保护，转载需注明来源 vue3.tech。
        部分内容基于官方文档整理，版权归原作者所有。
      </p>

      <h2>隐私与合规</h2>
      <p>
        本站已提供完整的隐私政策页面，详情请查看：
        <router-link to="/privacy">隐私政策</router-link>
      </p>

      <h2>网站状态</h2>
      <p>本站持续更新中，未来将加入更多内容，包括：</p>
      <ul>
        <li>Vue3 进阶教程</li>
        <li>实战项目示例</li>
        <li>前端工程化</li>
        <li>TypeScript + Vue3</li>
        <li>性能优化与部署</li>
      </ul>

      <p>感谢访问，欢迎收藏本站。</p>
    </div>
  </div>
</template>
  
  <script setup>
// 无需脚本逻辑
</script>
  
  <style scoped>
/* 外层容器：可滚动但不显示滚动条 */
.about-wrapper {
  height: calc(100vh - 60px); /* 根据你的布局调整 */
  overflow-y: auto;
  padding: 20px;
  box-sizing: border-box;

  /* 隐藏滚动条（Chrome / Safari） */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
}
.about-wrapper::-webkit-scrollbar {
  display: none; /* Chrome / Safari */
}

/* 内容区域 */
.about-content {
  max-width: 760px;
  margin: 0 auto;
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
  font-size: 17px;
}

ul {
  padding-left: 18px;
}

a {
  color: #42b983;
}
</style>
  