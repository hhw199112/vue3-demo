<template>
  <div class="vue-slot">
    <!-- 标题 -->

    <header class="page-header">
      <h2>Vue3 插槽（Slots）</h2>
      <p class="page-desc">
        插槽用于组件内容分发机制，让父组件可以向子组件传递结构化内容，
        包括默认插槽、具名插槽和作用域插槽。
      </p>
    </header>

    <!-- 默认插槽 -->

    <section class="info-section">
      <h3 class="section-title">默认插槽</h3>

      <div class="demo-box">
        <DefaultSlot> 臣妾告发熹贵妃私通 </DefaultSlot>
      </div>

      <p class="tip-text">
        👉 默认插槽：不指定 name 的内容自动填充 default 区域
      </p>
    </section>

    <!-- 具名插槽 -->

    <section class="info-section">
      <h3 class="section-title">具名插槽</h3>

      <div class="demo-box">
        <NamedSlot>
          <template #header> this is header </template>

          <template #default> this is default content </template>

          <template #footer> this is footer </template>
        </NamedSlot>
      </div>

      <p class="tip-text">👉 具名插槽：通过 #name 指定不同区域内容</p>
    </section>

    <!-- 作用域插槽 -->

    <section class="info-section">
      <h3 class="section-title">作用域插槽</h3>

      <div class="demo-box">
        <ScopedSlot>
          <template #default="scope">
            <div class="scope-item">
              <strong>{{ scope.item.name }}</strong>
            </div>
          </template>
        </ScopedSlot>
      </div>

      <p class="tip-text">👉 作用域插槽：子组件向父组件暴露数据</p>
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

            <span class="code-filename"> ViewSlot.vue </span>
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

            <span class="code-filename"> DefaultSlot.vue </span>
          </div>

          <pre class="code-block">
<code>{{ defaultSlot }}</code>
          </pre>
        </div>

        <div class="code-panel">
          <div class="code-panel-header">
            <span class="code-dot"></span>
            <span class="code-dot"></span>
            <span class="code-dot"></span>

            <span class="code-filename"> NamedSlot.vue </span>
          </div>

          <pre class="code-block">
<code>{{ namedSlot }}</code>
          </pre>
        </div>

        <div class="code-panel">
          <div class="code-panel-header">
            <span class="code-dot"></span>
            <span class="code-dot"></span>
            <span class="code-dot"></span>

            <span class="code-filename"> ScopedSlot.vue </span>
          </div>

          <pre class="code-block">
<code>{{ scopedSlot }}</code>
          </pre>
        </div>
      </div>
    </section>
  </div>
</template>
  
  <script setup>
import DefaultSlot from "@/components/DefaultSlot.vue";
import NamedSlot from "@/components/NamedSlot.vue";
import ScopedSlot from "@/components/ScopedSlot.vue";

import vueCode from "!!raw-loader!@/views/Level3/ViewSlot.vue";
import defaultSlot from "!!raw-loader!@/components/DefaultSlot.vue"
import namedSlot from "!!raw-loader!@/components/NamedSlot.vue";
import scopedSlot from "!!raw-loader!@/components/ScopedSlot.vue";
</script>
  
  <style scoped>
/* 页面整体 */

.vue-slot {
  width: 100%;
}

/* header */

.page-header {
  margin-bottom: 28px;
}

.page-desc {
  margin: 0;
  font-size: 14px;
  color: #606266;
  line-height: 1.6;
}

/* 区块 */

.info-section {
  margin-bottom: 28px;
  padding: 20px;
  background: #f8faf9;
  border: 1px solid #e8f0ec;
  border-radius: 8px;
}

/* 标题 */

.section-title {
  margin-bottom: 14px;
  font-size: 15px;
  font-weight: 600;
  color: #303133;
}

/* demo区域 */

.demo-box {
  padding: 16px;
  background: #fff;
  border: 1px solid #ebeef5;
  border-radius: 8px;
}

/* 提示 */

.tip-text {
  margin-top: 10px;
  font-size: 13px;
  color: #909399;
}

/* 作用域样式 */

.scope-item {
  padding: 6px 0;
}

/* ===== 代码区 ===== */

.code-section {
  margin-top: 30px;
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
  background: #1e1e1e;
  color: #d4d4d4;
  font-size: 12px;
  line-height: 1.6;
  max-height: 500px;
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-all;
}
</style>