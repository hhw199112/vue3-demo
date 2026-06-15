<template>
  <div class="vue-suspense">
    <!-- 页面标题 -->
    <header class="page-header">
      <h2>Vue3 Suspense</h2>

      <p class="page-desc">
        Suspense 用于处理异步组件或异步 setup()，在资源加载完成之前，
        可以显示一个备用（Fallback）界面，提高用户体验。
      </p>
    </header>

    <!-- 功能介绍 -->
    <section class="info-section">
      <h3 class="section-title">Suspense 特点</h3>

      <ul class="compare-list">
        <li class="compare-item">用于等待异步组件加载完成。</li>

        <li class="compare-item">可以指定 default 插槽和 fallback 插槽。</li>

        <li class="compare-item">
          常用于页面初始化、接口加载、懒加载组件等场景。
        </li>
      </ul>
    </section>

    <!-- 示例 -->
    <section class="info-section">
      <h3 class="section-title">Suspense 示例</h3>

      <div class="demo-card">
        <p class="demo-tip">
          UserInfo 组件未加载完成时，将显示 Loading... 内容。
        </p>

        <Suspense>
          <template #default>
            <UserInfo />
          </template>

          <template #fallback>
            <div class="loading">Loading...</div>
          </template>
        </Suspense>
      </div>
    </section>

    <!-- 常见应用 -->
    <section class="info-section">
      <h3 class="section-title">常见应用场景</h3>

      <div class="scene-grid">
        <div class="scene-card">
          <span class="scene-title"> 页面初始化 </span>

          <span class="scene-desc"> 等待接口数据返回 </span>
        </div>

        <div class="scene-card">
          <span class="scene-title"> Async Setup </span>

          <span class="scene-desc"> setup() 异步执行 </span>
        </div>

        <div class="scene-card">
          <span class="scene-title"> 异步组件 </span>

          <span class="scene-desc"> defineAsyncComponent </span>
        </div>

        <div class="scene-card">
          <span class="scene-title"> 懒加载页面 </span>

          <span class="scene-desc"> Router 按需加载 </span>
        </div>
      </div>
    </section>

    <!-- 源码 -->

    <section class="code-section">
      <h3 class="section-title">源码文件</h3>

      <div class="code-panels">
        <div class="code-panel">
          <div class="code-panel-header">
            <span class="code-dot"></span>
            <span class="code-dot"></span>
            <span class="code-dot"></span>

            <span class="code-filename"> ViewSuspense.vue </span>
          </div>

          <pre class="code-block"><code>{{ vueCode }}</code></pre>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import UserInfo from "@/components/UserInfo.vue";
import vueCode from "!!raw-loader!@/views/Level3/ViewSuspense.vue?raw";
/*import vueCode from "!!raw-loader!@/views/Level3/ViewTeleport.vue?raw";*/
</script>

<style scoped>
.vue-suspense {
  width: 100%;
}

.page-header {
  margin-bottom: 28px;
}

.page-desc {
  margin: 0;
  color: #606266;
  font-size: 14px;
  line-height: 1.6;
}

.section-title {
  margin: 0 0 14px;
  font-size: 15px;
  font-weight: 600;
  color: #303133;
}

.info-section {
  margin-bottom: 32px;
  padding: 20px;
  background: #f8faf9;
  border: 1px solid #e8f0ec;
  border-radius: 8px;
}

.compare-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.compare-item {
  padding: 12px 16px;
  background: #fff;
  border: 1px solid #ebeef5;
  border-radius: 8px;
  line-height: 1.6;
}

.compare-item + .compare-item {
  margin-top: 10px;
}

.demo-card {
  padding: 20px;
  background: #fff;
  border: 1px solid #ebeef5;
  border-radius: 8px;
}

.demo-tip {
  margin-bottom: 15px;
  color: #606266;
  font-size: 14px;
}

.loading {
  padding: 40px;
  text-align: center;
  font-size: 20px;
  color: #42b983;
  font-weight: bold;
}

.scene-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 14px;
}

.scene-card {
  padding: 18px;
  background: #fff;
  border: 1px solid #ebeef5;
  border-radius: 8px;
}

.scene-title {
  display: block;
  font-size: 15px;
  font-weight: 600;
  color: #303133;
  margin-bottom: 8px;
}

.scene-desc {
  color: #909399;
  font-size: 13px;
}

.code-section {
  margin-top: 10px;
}

.code-panels {
  display: grid;
  grid-template-columns: 1fr;
}

.code-panel {
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #2d2d2d;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
}

.code-panel-header {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 14px;
  background: #2d2d2d;
}

.code-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.code-dot:nth-child(1) {
  background: #ff5f57;
}

.code-dot:nth-child(2) {
  background: #febc2e;
}

.code-dot:nth-child(3) {
  background: #28c840;
}

.code-filename {
  margin-left: 8px;
  color: #aaa;
  font-size: 12px;
  font-family: Consolas, Monaco, monospace;
}

.code-block {
  margin: 0;
  padding: 16px;
  background: #1e1e1e;
  color: #d4d4d4;
  font-size: 12px;
  line-height: 1.6;
  max-height: 500px;
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-all;
  font-family: Consolas, Monaco, "Courier New", monospace;
}

.code-block code {
  font-family: inherit;
}
</style>