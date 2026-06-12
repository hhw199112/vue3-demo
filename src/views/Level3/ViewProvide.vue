<template>
  <div class="provide-page">
    <!-- 页面标题 -->

    <header class="page-header">
      <h2>Vue3 Provide / Inject</h2>

      <p class="page-desc">
        Provide / Inject 用于跨层级组件通信，可以避免多层 Props 逐级传递。
      </p>
    </header>

    <!-- Provider数据 -->

    <section class="info-section">
      <h3 class="section-title">Provider 提供的数据</h3>

      <div class="info-cards">
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

        <div class="info-card info-card--highlight">
          <span class="info-label"> 地址 </span>

          <span class="info-value">
            {{ user.addr }}
          </span>
        </div>
      </div>

      <button class="action-btn" @click="changeData">修改提供的数据</button>
    </section>

    <!-- Inject演示 -->

    <section class="info-section">
      <h3 class="section-title">Inject 子组件演示</h3>

      <div class="demo-card">
        <InjectComponent />
      </div>
    </section>

    <!-- 特点 -->

    <section class="info-section">
      <h3 class="section-title">Provide / Inject 特点</h3>

      <ul class="compare-list">
        <li class="compare-item">provide() 用于祖先组件提供数据。</li>

        <li class="compare-item">inject() 用于后代组件接收数据。</li>

        <li class="compare-item">
          非父子组件也可以共享数据，避免层层 Props 传递。
        </li>

        <li class="compare-item">
          提供 ref 时，后代组件拿到的是响应式对象，数据变化会同步更新。
        </li>
      </ul>
    </section>

    <!-- 源码 -->

    <section class="code-section">
      <h3 class="section-title">源码文件</h3>

      <div class="code-panel">
        <div class="code-panel-header">
          <span class="code-dot"></span>
          <span class="code-dot"></span>
          <span class="code-dot"></span>

          <span class="code-filename"> ViewProvide.vue </span>
        </div>

        <pre class="code-block">
<code>{{ vueCode }}</code>
        </pre>
      </div>
    </section>
  </div>
</template>

<script setup>
import { provide, ref } from "vue";

import InjectComponent from "@/components/InjectComponent.vue";

import vueCode from "!!raw-loader!@/views/Level3/ViewProvide.vue";

const user = ref({
  name: "沙加",

  age: "23",

  addr: "处女宫",
});

provide(
  "dataOrginal",

  user
);


function changeData(){
    user.value.age=Math.floor(Math.random()*30);
}

</script>

<style scoped>
.provide-page {
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
  margin-bottom: 14px;
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

.info-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 12px;
  margin-bottom: 20px;
}

.info-card {
  padding: 16px;
  background: #fff;
  border: 1px solid #ebeef5;
  border-radius: 8px;
}

.info-card--highlight {
  grid-column: span 2;
  background: #f6fffa;
  border-color: #d4edda;
}

.info-label {
  display: block;
  margin-bottom: 8px;
  font-size: 12px;
  color: #909399;
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
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s;
}

.action-btn:hover {
  background: #3aa876;
}

.compare-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.compare-item {
  margin-bottom: 10px;
  padding: 12px;
  background: #fff;
  border: 1px solid #ebeef5;
  border-radius: 8px;
  line-height: 1.6;
}

.demo-card {
  padding: 18px;
  background: #fff;
  border: 1px solid #ebeef5;
  border-radius: 8px;
}

.code-panel {
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #2d2d2d;
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

