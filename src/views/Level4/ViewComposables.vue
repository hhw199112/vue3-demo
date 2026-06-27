<template>
  <div class="vue-composable">
    <!-- 页面标题 -->

    <header class="page-header">
      <h2>Vue3 组合式函数（Composables）</h2>

      <p class="page-desc">
        组合式函数（Composables）用于抽取和复用组件逻辑，让多个组件共享同一套业务代码。
      </p>
    </header>

    <!-- 当前数据 -->

    <section class="info-section">
      <h3 class="section-title">当前状态</h3>

      <div class="info-cards">
        <div class="info-card">
          <span class="info-label"> count </span>

          <span class="info-value">
            {{ count }}
          </span>
        </div>

        <div class="info-card">
          <span class="info-label"> 姓名 </span>

          <span class="info-value">
            {{ user.name }}
          </span>
        </div>

        <div class="info-card">
          <span class="info-label"> 年龄 </span>

          <span class="info-value">
            {{ user.age }}
          </span>
        </div>
      </div>

      <button class="action-btn" @click="add">count + 1</button>
    </section>

    <!-- 示例说明 -->

    <section class="info-section">
      <h3 class="section-title">组合式函数说明</h3>

      <ul class="compare-list">
        <li class="compare-item">useCounter() 用于封装计数逻辑。</li>

        <li class="compare-item">useUser() 用于封装用户数据加载逻辑。</li>

        <li class="compare-item">
          多个组件都可以调用同一个 Composable，实现逻辑复用。
        </li>

        <li class="compare-item">
          Composition API 推荐将业务逻辑抽离到 composables 目录。
        </li>
      </ul>
    </section>

    <!-- 返回结果 -->

    <section class="info-section">
      <h3 class="section-title">当前返回结果</h3>

      <div class="demo-card">
        <p>count：{{ count }}</p>

        <p>name：{{ user.name }}</p>

        <p>age：{{ user.age }}</p>
      </div>
    </section>

    <!-- useCounter源码 -->

    <section class="code-section">
      <h3 class="section-title">源码文件</h3>

      <div class="code-panels">
        <div class="code-panel">
          <div class="code-panel-header">
            <span class="code-dot"></span>
            <span class="code-dot"></span>
            <span class="code-dot"></span>

            <span class="code-filename"> useCounter.js </span>
          </div>

          <pre class="code-block">
<code>{{ counterCode }}</code>
        </pre>
        </div>

        <div class="code-panel">
          <div class="code-panel-header">
            <span class="code-dot"></span>
            <span class="code-dot"></span>
            <span class="code-dot"></span>

            <span class="code-filename"> useUser.js </span>
          </div>

          <pre class="code-block">
<code>{{ userCode }}</code>
        </pre>
        </div>

        <div class="code-panel">
          <div class="code-panel-header">
            <span class="code-dot"></span>
            <span class="code-dot"></span>
            <span class="code-dot"></span>

            <span class="code-filename"> ViewComposables.vue </span>
          </div>

          <pre class="code-block">
<code>{{ vueCode }}</code>
        </pre>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import useCounter from "@/composables/useCounter";

import useUser from "@/composables/useUser";

import { onMounted } from "vue";

import vueCode from "!!raw-loader!@/views/Level4/ViewComposables.vue";

import counterCode from "!!raw-loader!@/composables/useCounter.js";

import userCode from "!!raw-loader!@/composables/useUser.js";

const {
  count,

  add,
} = useCounter();

const {
  user,

  load,
} = useUser();

onMounted(() => {
  load();
});
</script>

<style scoped>
.vue-composable {
  width: 100%;
}

.page-header {
  margin-bottom: 28px;
}

.page-desc {
  color: #606266;
  line-height: 1.6;
  font-size: 14px;
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
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 12px;
  margin-bottom: 18px;
}

.info-card {
  padding: 16px;
  background: white;
  border-radius: 8px;
  border: 1px solid #ebeef5;
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
  background: #38a36f;
}

.compare-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.compare-item {
  padding: 12px;
  margin-bottom: 10px;
  background: white;
  border: 1px solid #ebeef5;
  border-radius: 8px;
}

.demo-card {
  padding: 16px;
  background: white;
  border-radius: 8px;
  border: 1px solid #ebeef5;
}

.code-panels {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  width: 100%;
}

.code-panel {
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #2d2d2d;
  margin-bottom: 18px;
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
  max-height: 480px;
  overflow: auto;
  background: #1e1e1e;
  color: #d4d4d4;
  font-size: 12px;
  line-height: 1.6;
  white-space: pre-wrap;
  word-break: break-all;
}
</style>

