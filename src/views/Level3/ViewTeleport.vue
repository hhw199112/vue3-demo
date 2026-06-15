<template>
  <div class="vue-teleport">
    <!-- 页面标题 -->
    <header class="page-header">
      <h2>Vue3 Teleport</h2>
      <p class="page-desc">
        Teleport 用于将组件渲染到指定的 DOM 节点，而不是当前组件所在的位置，
        常用于弹窗、消息提示、抽屉、Loading 等需要脱离父组件布局的场景。
      </p>
    </header>

    <!-- Teleport介绍 -->
    <section class="info-section">
      <h3 class="section-title">Teleport 特点</h3>

      <ul class="compare-list">
        <li class="compare-item">
          可以将组件挂载到 body 或指定 DOM 节点。
        </li>

        <li class="compare-item">
          仅改变最终渲染位置，不影响组件之间的父子关系。
        </li>

        <li class="compare-item">
          适用于 Dialog、Drawer、Message、Loading 等全局组件。
        </li>
      </ul>
    </section>

    <!-- 示例 -->
    <section class="info-section">
      <h3 class="section-title">Teleport 示例演示</h3>

      <div class="demo-card">
        <p class="demo-tip">
          点击下面按钮，UserDialog 会通过 Teleport 挂载到 body 节点。
        </p>

        <button
          class="action-btn"
          @click="openDialog"
        >
          打开弹窗
        </button>
      </div>
    </section>

    <!-- 使用场景 -->
    <section class="info-section">
      <h3 class="section-title">常见应用场景</h3>

      <div class="scene-grid">
        <div class="scene-card">
          <span class="scene-title">Dialog</span>
          <span class="scene-desc">全局弹窗</span>
        </div>

        <div class="scene-card">
          <span class="scene-title">Drawer</span>
          <span class="scene-desc">抽屉组件</span>
        </div>

        <div class="scene-card">
          <span class="scene-title">Loading</span>
          <span class="scene-desc">全局加载动画</span>
        </div>

        <div class="scene-card">
          <span class="scene-title">Message</span>
          <span class="scene-desc">消息提示组件</span>
        </div>
      </div>
    </section>

    <!-- Teleport组件 -->
    <UserDialog
      :visible="visible"
      @close="closeDialog"
    >
      <h2>用户信息</h2>

      <p>姓名：张三</p>

      <p>年龄：20</p>
    </UserDialog>

    <!-- 源码展示 -->
    <section class="code-section">
      <h3 class="section-title">源码文件</h3>

      <div class="code-panels">
        <div class="code-panel">
          <div class="code-panel-header">
            <span class="code-dot"></span>
            <span class="code-dot"></span>
            <span class="code-dot"></span>

            <span class="code-filename">
              ViewTeleport.vue
            </span>
          </div>

          <pre class="code-block"><code>{{ vueCode }}</code></pre>
        </div>
        <div class="code-panel">
          <div class="code-panel-header">
            <span class="code-dot"></span>
            <span class="code-dot"></span>
            <span class="code-dot"></span>

            <span class="code-filename">
              UserDialog.vue
            </span>
          </div>

          <pre class="code-block"><code>{{ vueCode2 }}</code></pre>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import UserDialog from "@/components/UserDialog.vue";

// 显示当前页面源码
import vueCode from "!!raw-loader!@/views/Level3/ViewTeleport.vue?raw";
import vueCode2 from "!!raw-loader!@/components/UserDialog.vue?raw";
const visible = ref(false);

function openDialog() {
  visible.value = true;
}

function closeDialog() {
  visible.value = false;
}
</script>

<style scoped>
.vue-teleport {
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
  border-radius: 8px;
  border: 1px solid #ebeef5;
}

.demo-tip {
  margin-bottom: 14px;
  color: #606266;
  font-size: 14px;
}

.action-btn {
  padding: 8px 18px;
  border: none;
  border-radius: 6px;
  background: #42b983;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s;
}

.action-btn:hover {
  background: #36996b;
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