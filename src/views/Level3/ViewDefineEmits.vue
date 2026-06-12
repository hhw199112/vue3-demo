<template>
  <div class="emit-page">
    <!-- 页面标题 -->

    <header class="page-header">
      <h2>Vue3 defineEmits</h2>

      <p class="page-desc">
        defineEmits 用于子组件向父组件发送事件，实现父子组件通信。
      </p>
    </header>

    <!-- 父组件数据 -->

    <section class="info-section">
      <h3 class="section-title">父组件数据</h3>

      <div class="info-cards">
        <div class="info-card">
          <span class="info-label"> 当前编号 </span>

          <span class="info-value">
            {{ num }}
          </span>
        </div>
      </div>
    </section>

    <!-- 子组件演示 -->

    <section class="info-section">
      <h3 class="section-title">子组件演示</h3>

      <div class="demo-card">
        <ChildComponent
          :id="String(num)"
          @send="onSend"
          @delete="onDelete"
          @delete-with-id="onDeleteWithId('guid0001')"
          @delete-by-props-id="onDeleteByPropsId"
        />
      </div>
    </section>

    <!-- defineEmits介绍 -->

    <section class="info-section">
      <h3 class="section-title">defineEmits 特点</h3>

      <ul class="compare-list">
        <li class="compare-item">defineEmits 用于声明组件可以触发哪些事件。</li>

        <li class="compare-item">子组件通过 emit() 通知父组件执行逻辑。</li>

        <li class="compare-item">可以传递参数，实现父子组件的数据回传。</li>
      </ul>
    </section>

    <!-- 执行结果 -->

    <section class="info-section">
      <h3 class="section-title">最近一次事件</h3>

      <div class="demo-card">
        {{ log }}
      </div>
    </section>

    <!-- 父组件源码 -->

    <section class="code-section">
      <h3 class="section-title">源码文件</h3>

      <div class="code-panels">
        <div class="code-panel">
          <div class="code-panel-header">
            <span class="code-dot"></span>
            <span class="code-dot"></span>
            <span class="code-dot"></span>

            <span class="code-filename"> ViewDefineEmits.vue </span>
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

            <span class="code-filename"> ChildComponent.vue </span>
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
import { ref } from "vue";

import ChildComponent from "@/components/ChildComponent.vue";

import vueCode from "!!raw-loader!@/views/Level3/ViewDefineEmits.vue";

import vueCode2 from "!!raw-loader!@/components/ChildComponent.vue";

const num = ref(10086);

const log = ref("等待触发事件");

function onSend() {
  log.value = "触发 send 事件";

  alert("ParentSend");
}

function onDelete() {
  log.value = "触发 delete 事件";

  alert("ParentDelete");
}

function onDeleteWithId(id) {
  log.value = "触发 delete-with-id：" + id;

  alert("delete:" + id);
}

function onDeleteByPropsId(id) {
  log.value = "触发 delete-by-props-id：" + id;

  alert(id);
}
</script>

<style scoped>
.emit-page {
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
}

.info-card {
  padding: 16px;
  background: white;
  border-radius: 8px;
  border: 1px solid #ebeef5;
}

.info-label {
  display: block;
  font-size: 12px;
  color: #909399;
  margin-bottom: 8px;
}

.info-value {
  font-size: 16px;
  font-weight: 600;
}

.compare-list {
  list-style: none;
  padding: 0;
}

.compare-item {
  margin-bottom: 10px;
  padding: 12px;
  background: white;
  border-radius: 8px;
  border: 1px solid #ebeef5;
}

.demo-card {
  padding: 18px;
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
  white-space: pre-wrap;
  word-break: break-all;
}
</style>

