<template>
  <div class="vue-expose">
    <!-- 页面标题 -->

    <header class="page-header">
      <h2>Vue3 defineExpose</h2>

      <p class="page-desc">
        defineExpose 用于在 &lt;script setup&gt; 中向父组件公开变量和方法，
        父组件可以通过 ref 获取子组件实例并调用公开内容。
      </p>
    </header>

    <!-- Expose介绍 -->

    <section class="info-section">
      <h3 class="section-title">defineExpose 特点</h3>

      <ul class="compare-list">
        <li class="compare-item">
          defineExpose 用于主动暴露子组件的数据和方法。
        </li>

        <li class="compare-item">
          父组件通过 ref 获取组件实例后即可调用公开成员。
        </li>

        <li class="compare-item">
          未使用 defineExpose 时，script setup 内部变量默认不可访问。
        </li>
      </ul>
    </section>

    <!-- 示例 -->

    <section class="info-section">
      <h3 class="section-title">Expose 演示</h3>

      <div class="demo-card">
        <ChildExpose ref="childRef"></ChildExpose>
      </div>

      <div class="btn-group">
        <button class="action-btn" @click="ParentClick">调用子组件方法</button>

        <button class="action-btn" @click="ParentShowVal">
          获取子组件变量
        </button>
      </div>
    </section>

    <!-- 结果 -->

    <section class="info-section">
      <h3 class="section-title">调用结果</h3>

      <div class="result-card">
        {{ tip }}
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

            <span class="code-filename"> ViewExpose.vue </span>
          </div>

          <pre class="code-block"><code>{{ vueCode }}</code>
          </pre>
        </div>

        <div class="code-panel">
          <div class="code-panel-header">
            <span class="code-dot"></span>
            <span class="code-dot"></span>
            <span class="code-dot"></span>

            <span class="code-filename"> ChildComponent.vue </span>
          </div>

          <pre class="code-block"><code>{{ vueCode2 }}</code>
          </pre>
        </div>
      </div>
    </section>
  </div>
</template>
  
  <script setup>
import { ref } from "vue";

import ChildExpose from "@/components/ChildExpose.vue";

import vueCode from "!!raw-loader!@/views/Level3/ViewExpose.vue?raw";
import vueCode2 from "!!raw-loader!@/components/ChildComponent.vue?raw";

const childRef = ref();

const tip = ref("等待父组件调用...");

function ParentClick() {
  childRef.value.show();
}

function ParentShowVal() {
  tip.value = "显示子组件变量值：" + childRef.value.val;
}
</script>
  
  <style scoped>
.vue-expose {
  width: 100%;
}

/* 页面头部 */

.page-header {
  margin-bottom: 28px;
}

.page-desc {
  margin: 0;
  color: #606266;
  font-size: 14px;
  line-height: 1.6;
}

/* 区域 */

.info-section {
  margin-bottom: 32px;
  padding: 20px;
  background: #f8faf9;
  border: 1px solid #e8f0ec;
  border-radius: 8px;
}

.section-title {
  margin: 0 0 14px;
  font-size: 15px;
  font-weight: 600;
  color: #303133;
}

/* 说明 */

.compare-list {
  list-style: none;

  margin: 0;

  padding: 0;
}

.compare-item {
  padding: 12px 16px;

  background: #fff;

  border-radius: 8px;

  border: 1px solid #ebeef5;

  line-height: 1.6;

  color: #303133;
}

.compare-item + .compare-item {
  margin-top: 10px;
}

/* demo */

.demo-card {
  padding: 20px;

  background: white;

  border-radius: 8px;

  border: 1px solid #ebeef5;
}

.btn-group {
  display: flex;

  gap: 15px;

  margin-top: 20px;
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
  background: #369d6c;
}

/* 结果 */

.result-card {
  min-height: 50px;

  padding: 15px;

  background: white;

  border-radius: 8px;

  border: 1px solid #ebeef5;

  display: flex;

  align-items: center;

  color: #2c3e50;
}

/* 源码 */

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

  font-family: Consolas, Monaco, monospace;
}

.code-block {
  margin: 0;

  padding: 16px;

  max-height: 500px;

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