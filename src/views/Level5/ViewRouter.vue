<template>
  <div class="vue-router">
    <!-- 页面标题 -->

    <header class="page-header">
      <h2>Vue Router 路由管理</h2>
      <p class="page-desc">
        Vue Router 用于管理单页面应用（SPA）的页面切换，也可以理解为 URL
        路径与组件之间的映射关系。
      </p>
    </header>

    <!-- 基础介绍 -->

    <section class="info-section">
      <h3 class="section-title">路由配置步骤</h3>

      <ul class="compare-list">
        <li class="compare-item">
          ① 安装 vue-router：
          <br />
          <code>npm install vue-router</code>
        </li>

        <li class="compare-item">
          ② 创建 router/index.js，统一管理所有路由配置。
        </li>

        <li class="compare-item">③ 在 main.js 中注册 Router。</li>

        <li class="compare-item">
          ④ 在 Vue 页面中放置
          <code>&lt;router-view /&gt;</code>
          用于渲染子页面。
        </li>

        <li class="compare-item">
          ⑤ 使用
          <code>push()</code>
          或
          <code>&lt;router-link&gt;</code>
          完成页面跳转。
        </li>
      </ul>
    </section>

    <!-- 代码展示 -->

    <section class="code-section">
      <h3 class="section-title">源码文件</h3>

      <div class="code-panels">
        <div class="code-panel">
          <div class="code-panel-header">
            <span class="code-dot"></span>
            <span class="code-dot"></span>
            <span class="code-dot"></span>

            <span class="code-filename"> RootPage.vue </span>
          </div>

          <pre class="code-block">
<code>{{ rootPageCode }}</code>
          </pre>
        </div>

        <div class="code-panel">
          <div class="code-panel-header">
            <span class="code-dot"></span>
            <span class="code-dot"></span>
            <span class="code-dot"></span>

            <span class="code-filename"> LoginPage.vue </span>
          </div>

          <pre class="code-block">
<code>{{ loginPageCode }}</code>
          </pre>
        </div>

        <div class="code-panel">
          <div class="code-panel-header">
            <span class="code-dot"></span>
            <span class="code-dot"></span>
            <span class="code-dot"></span>

            <span class="code-filename"> App.vue </span>
          </div>

          <pre class="code-block">
<code>{{ appCode }}</code>
          </pre>
        </div>

        <div class="code-panel">
          <div class="code-panel-header">
            <span class="code-dot"></span>
            <span class="code-dot"></span>
            <span class="code-dot"></span>

            <span class="code-filename"> index.js </span>
          </div>

          <pre class="code-block">
<code>{{ indexJSCode }}</code>
          </pre>
        </div>

        <div class="code-panel">
          <div class="code-panel-header">
            <span class="code-dot"></span>
            <span class="code-dot"></span>
            <span class="code-dot"></span>

            <span class="code-filename"> main.js </span>
          </div>

          <pre class="code-block">
<code>{{ mainJSCode }}</code>
          </pre>
        </div>
      </div>
    </section>
  </div>
</template>
  
  <script setup>
import rootPageCode from "!!raw-loader!@/RootPage.vue?raw";

import loginPageCode from "!!raw-loader!@/LoginPage.vue?raw";

import appCode from "!!raw-loader!@/MainPage.vue?raw";

import indexJSCode from "!!raw-loader!@/router/index.js?raw";

import mainJSCode from "!!raw-loader!@/main.js?raw";
</script>
  
  <style scoped>
.vue-router {
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
  margin-bottom: 30px;
  padding: 20px;
  background: #f8faf9;
  border: 1px solid #e8f0ec;
  border-radius: 8px;
}

.compare-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.compare-item {
  padding: 14px;
  background: #fff;
  border: 1px solid #ebeef5;
  border-radius: 8px;
  margin-bottom: 12px;
  line-height: 1.8;
}

.compare-item code {
  background: #f2f6fc;
  padding: 2px 6px;
  border-radius: 4px;
  color: #409eff;
}

.code-section {
  margin-top: 20px;
}

.code-panels {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  width: 100%;
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
  background: #555;
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
  font-size: 12px;
  color: #aaa;
  font-family: Consolas;
}

.code-block {
  margin: 0;
  padding: 16px;
  max-height: 480px;
  overflow: auto;
  background: #1e1e1e;
  color: #d4d4d4;
  font-size: 12px;
  line-height: 1.6;
  font-family: Consolas, Monaco, "Courier New", monospace;
  white-space: pre-wrap;
  word-break: break-all;
}

.code-block code {
  font-family: inherit;
}
</style>