<template>
  <div class="vue-vmodel">
    <!-- 页面标题 -->
    <header class="page-header">
      <h2>Vue3 自定义组件 v-model</h2>

      <p class="page-desc">
        Vue3 支持在自定义组件上使用 v-model， 本质上是父组件通过 modelValue
        传值，子组件通过 update:modelValue 事件修改数据，
        实现父子组件之间的双向绑定。
      </p>
    </header>

    <!-- 功能介绍 -->
    <section class="info-section">
      <h3 class="section-title">v-model 特点</h3>

      <ul class="compare-list">
        <li class="compare-item">简化父子组件数据双向绑定。</li>

        <li class="compare-item">底层实际上是 props + emit 的语法糖。</li>

        <li class="compare-item">一个组件可以支持多个 v-model。</li>
      </ul>
    </section>

    <!-- Demo -->
    <section class="info-section">
      <h3 class="section-title">示例演示</h3>

      <div class="demo-card">
        <p class="demo-tip">输入内容后，父组件的 keyword 会同步更新。</p>

        <UserInput v-model="keyword" />

        <div class="result-box">
          当前输入：

          <span class="result-text">
            {{ keyword || "暂无内容" }}
          </span>
        </div>
      </div>
    </section>

    <!-- 场景 -->
    <section class="info-section">
      <h3 class="section-title">常见应用场景</h3>

      <div class="scene-grid">
        <div class="scene-card">
          <span class="scene-title"> Input组件 </span>

          <span class="scene-desc"> 自定义输入框 </span>
        </div>

        <div class="scene-card">
          <span class="scene-title"> Select组件 </span>

          <span class="scene-desc"> 下拉框双向绑定 </span>
        </div>

        <div class="scene-card">
          <span class="scene-title"> DatePicker </span>

          <span class="scene-desc"> 日期选择器 </span>
        </div>

        <div class="scene-card">
          <span class="scene-title"> 表单组件 </span>

          <span class="scene-desc"> 数据联动 </span>
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

            <span class="code-filename"> ViewVModel.vue </span>
          </div>

          <pre class="code-block"><code>{{ vueCode }}</code>
          </pre>
        </div>

        <div class="code-panel">
          <div class="code-panel-header">
            <span class="code-dot"></span>
            <span class="code-dot"></span>
            <span class="code-dot"></span>

            <span class="code-filename"> UserInput.vue </span>
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

import UserInput from "@/components/UserInput.vue";

import vueCode from "!!raw-loader!@/views/Level3/ViewVModel.vue?raw";

import vueCode2 from "!!raw-loader!@/components/UserInput.vue?raw";

const keyword = ref("");
</script>
  
  <style scoped>
.vue-vmodel {
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
  margin-bottom: 14px;
  color: #606266;
}

.result-box {
  margin-top: 18px;
  padding: 12px;
  background: #f6fffa;
  border: 1px solid #d4edda;
  border-radius: 6px;
}

.result-text {
  color: #42b983;
  font-weight: bold;
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
  margin-bottom: 8px;
  color: #303133;
}

.scene-desc {
  color: #909399;
  font-size: 13px;
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