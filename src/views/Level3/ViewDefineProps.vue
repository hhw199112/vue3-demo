<template>
  <div class="vue-props-page">
    <!-- 页面标题 -->

    <header class="page-header">
      <h2>Vue3 defineProps</h2>
      <p class="page-desc">
        Props 用于父组件向子组件传递数据，是 Vue 中最常见的组件通信方式。
      </p>
    </header>

    <!-- 当前数据 -->

    <section class="info-section">
      <h3 class="section-title">父组件数据</h3>

      <div class="info-cards">
        <div class="info-card">
          <span class="info-label"> 商品名称 </span>

          <span class="info-value">
            {{ name }}
          </span>
        </div>
      </div>

      <button class="action-btn" @click="changeName">修改商品名称</button>
    </section>

    <!-- 子组件展示 -->

    <section class="info-section">
      <h3 class="section-title">子组件展示</h3>

      <div class="demo-card">
        <ProductComponent :name="name" />
      </div>
    </section>

    <!-- Props说明 -->

    <section class="info-section">
      <h3 class="section-title">Props 特点</h3>

      <ul class="compare-list">
        <li class="compare-item">Props 用于父组件向子组件传递数据。</li>

        <li class="compare-item">子组件不能直接修改 Props，否则会产生警告。</li>

        <li class="compare-item">父组件数据变化，子组件会自动更新。</li>
      </ul>
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

            <span class="code-filename"> ViewDefineProps.vue </span>
          </div>

          <pre class="code-block">
<code>{{ vueCode }}</code>
        </pre>
        </div>
        <div class="code-panel">
          <div class="code-panel-header">
            <span class="code-dot"></span>
            <span class="code-dot"></span>
            <span class="code-dot"></span>

            <span class="code-filename"> ProductComponent.vue </span>
          </div>

          <pre class="code-block">
<code>{{ vueCode2 }}</code>
        </pre>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import ProductComponent from "@/components/ProductComponent.vue";

import { ref, onMounted } from "vue";

import vueCode from "!!raw-loader!@/views/Level3/ViewDefineProps.vue";

import vueCode2 from "!!raw-loader!@/components/ProductComponent.vue";

const name = ref("");

onMounted(() => {
  name.value = "五香瓜子";
});

function changeName() {
  const arr = ["五香瓜子", "可乐", "方便面", "矿泉水", "薯片", "牛奶"];

  name.value = arr[Math.floor(Math.random() * arr.length)];
}
</script>

<style scoped>
.vue-props-page {
  width: 100%;
}

.page-header {
  margin-bottom: 28px;
}

.page-desc {
  color: #606266;
  font-size: 14px;
  line-height: 1.6;
}

.section-title {
  margin-bottom: 14px;
  font-size: 15px;
  font-weight: 600;
}

.info-section {
  margin-bottom: 30px;
  padding: 20px;
  background: #f8faf9;
  border: 1px solid #e8f0ec;
  border-radius: 8px;
}

.info-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 12px;
  margin-bottom: 18px;
}

.info-card {
  padding: 16px;
  background: #fff;
  border: 1px solid #ebeef5;
  border-radius: 8px;
}

.info-label {
  display: block;
  margin-bottom: 8px;
  color: #909399;
  font-size: 12px;
}

.info-value {
  font-size: 16px;
  font-weight: 600;
  color: #2c3e50;
}

.action-btn {
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  background: #42b983;
  color: white;
  cursor: pointer;
}

.action-btn:hover {
  background: #3aa876;
}

.compare-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.compare-item {
  margin-bottom: 10px;
  padding: 12px;
  background: white;
  border: 1px solid #ebeef5;
  border-radius: 8px;
}

.demo-card {
  padding: 20px;
  background: white;
  border-radius: 8px;
  border: 1px solid #ebeef5;
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
}

.code-panel-header {
  display: flex;
  align-items: center;
  padding: 10px 14px;
  background: #2d2d2d;
}

.code-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 6px;
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
  background: #1e1e1e;
  color: #d4d4d4;
  max-height: 500px;
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-all;
  font-size: 12px;
}
</style>

