<template>
  <div class="vue-keep-alive">
    <!-- 页面标题 -->
    <header class="page-header">
      <h2>Vue3 动态组件 & KeepAlive</h2>

      <p class="page-desc">
        Component 用于切换组件。 KeepAlive
        用于缓存动态组件，避免组件切换时被销毁，
        再次切换回来时可以保留之前的状态。
      </p>
    </header>

    <!-- 功能介绍 -->
    <section class="info-section">
      <h3 class="section-title">KeepAlive 特点</h3>

      <ul class="compare-list">
        <li class="compare-item">缓存组件实例，避免重复创建和销毁。</li>

        <li class="compare-item">保留组件内部状态，例如表单输入内容。</li>

        <li class="compare-item">常用于标签页、菜单切换、页面缓存等场景。</li>

        <li class="compare-item">exclude属性排除缓存指定组件，include属性缓存指定组件</li>
      </ul>
    </section>

    <!-- 演示区域 -->
    <section class="info-section">
      <h3 class="section-title">动态组件+KeepAlive 示例</h3>

      <div class="demo-card">
        <p class="demo-tip">
          当前组件：
          <strong>{{ current }}</strong>
        </p>

        <button class="action-btn" @click="change">切换显示组件</button>

        <div class="component-wrapper">
          <keep-alive exclude="BComponent">
            <component :is="components[current]" />
          </keep-alive>
        </div>
      </div>
    </section>

    <section class="info-section">
      <h3 class="section-title">动态组件【没有KeepAlive】 示例</h3>

      <div class="demo-card">
        <p class="demo-tip">
          当前组件：
          <strong>{{ currentWithoutKeppAlive }}</strong>
        </p>

        <button class="action-btn" @click="changeWithoutKeppAlive">
          切换显示组件
        </button>

        <div class="component-wrapper">
          <component :is="components[currentWithoutKeppAlive]" />
        </div>
      </div>
    </section>

    <!-- 场景介绍 -->
    <section class="info-section">
      <h3 class="section-title">常见应用场景</h3>

      <div class="scene-grid">
        <div class="scene-card">
          <span class="scene-title"> Tab标签页 </span>

          <span class="scene-desc"> 保留用户输入内容 </span>
        </div>

        <div class="scene-card">
          <span class="scene-title"> 多页面切换 </span>

          <span class="scene-desc"> 保留滚动位置 </span>
        </div>

        <div class="scene-card">
          <span class="scene-title"> 表单填写 </span>

          <span class="scene-desc"> 避免重复输入 </span>
        </div>

        <div class="scene-card">
          <span class="scene-title"> 后台管理系统 </span>

          <span class="scene-desc"> 提升用户体验 </span>
        </div>
      </div>
    </section>

    <!-- 源码展示 -->
    <section class="code-section">
      <h3 class="section-title">源码文件</h3>

      <div class="code-panels">
  

  

        <div class="code-panel">
          <div class="code-panel-header">
            <span class="code-dot"></span>
            <span class="code-dot"></span>
            <span class="code-dot"></span>

            <span class="code-filename"> ViewDynamicComponent.vue </span>
          </div>

          <pre class="code-block"><code>{{ vueCode }}</code></pre>
        </div>

        <div class="code-panel">
          <div class="code-panel-header">
            <span class="code-dot"></span>
            <span class="code-dot"></span>
            <span class="code-dot"></span>

            <span class="code-filename"> AComponent.vue </span>
          </div>

          <pre class="code-block"><code>{{ vueCode2 }}</code></pre>
        </div>

        <div class="code-panel">
          <div class="code-panel-header">
            <span class="code-dot"></span>
            <span class="code-dot"></span>
            <span class="code-dot"></span>

            <span class="code-filename"> BComponent.vue </span>
          </div>

          <pre class="code-block"><code>{{ vueCode3 }}</code></pre>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

import AComponent from "@/components/AComponent.vue";
import BComponent from "@/components/BComponent.vue";

import vueCode from "!!raw-loader!@/views/Level3/ViewDynamicComponent.vue?raw";
import vueCode2 from "!!raw-loader!@/components/AComponent.vue?raw";
import vueCode3 from "!!raw-loader!@/components/BComponent.vue?raw";

const components = {
  A: AComponent,
  B: BComponent,
};

const current = ref("A");
const currentWithoutKeppAlive = ref("A");

function change() {
  current.value = current.value === "A" ? "B" : "A";
}

function changeWithoutKeppAlive() {
  currentWithoutKeppAlive.value =
    currentWithoutKeppAlive.value == "A" ? "B" : "A";
}
</script>

<style scoped>
.vue-keep-alive {
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
  padding: 0;
  margin: 0;
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
}

.action-btn {
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  background: #42b983;
  color: white;
  cursor: pointer;
  transition: 0.2s;
}

.action-btn:hover {
  background: #36996b;
}

.component-wrapper {
  margin-top: 20px;
  padding: 20px;
  border: 1px dashed #dcdfe6;
  border-radius: 8px;
  background: #fafafa;
}

.scene-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
}

.scene-card {
  padding: 16px;
  background: white;
  border: 1px solid #ebeef5;
  border-radius: 8px;
}

.scene-title {
  display: block;
  font-weight: 600;
  color: #303133;
  margin-bottom: 8px;
}

.scene-desc {
  color: #909399;
  font-size: 13px;
}

.code-panels {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  width: 100%;
}

/* 源码区域 */

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
}

.code-block {
  margin: 0;
  padding: 16px;
  background: #1e1e1e;
  color: #d4d4d4;
  max-height: 500px;
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-all;
  font-size: 12px;
  line-height: 1.6;
  font-family: Consolas, Monaco, monospace;
}
</style>