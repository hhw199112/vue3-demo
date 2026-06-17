<template>
  <div class="vue-nexttick">
    <!-- 页面标题 -->
    <header class="page-header">
      <h2>Vue3 nextTick()</h2>

      <p class="page-desc">
        nextTick() 用于等待 Vue 完成 DOM 更新之后再执行代码， 常用于获取最新
        DOM、滚动到底部、获取元素尺寸等场景。
      </p>
    </header>

    <!-- 功能介绍 -->
    <section class="info-section">
      <h3 class="section-title">nextTick() 特点</h3>

      <ul class="compare-list">
        <li class="compare-item">
          数据修改后，DOM 不会立即更新，而是异步批量更新。
        </li>

        <li class="compare-item">nextTick() 可以等待 DOM 更新完成。</li>

        <li class="compare-item">
          常用于获取最新 DOM、滚动到底部、计算高度等。
        </li>
      </ul>
    </section>

    <!-- Demo1 -->
    <section class="info-section">
      <h3 class="section-title">Demo1：DOM 更新对比</h3>

      <div class="demo-grid">
        <div class="demo-card">
          <h4>未使用 nextTick()</h4>

          <button class="action-btn" @click="showWithoutNextTick">
            点击更新
          </button>

          <h2 ref="title1">
            {{ num1 }}
          </h2>

          <div class="result-box">
            获取到的DOM：
            {{ innerHTML1 }}
          </div>
        </div>

        <div class="demo-card">
          <h4>使用 nextTick()</h4>

          <button class="action-btn" @click="showWithNextTick">点击更新</button>

          <h2 ref="title2">
            {{ num2 }}
          </h2>

          <div class="result-box">
            获取到的DOM：
            {{ innerHTML2 }}
          </div>
        </div>
      </div>
    </section>

    <!-- Demo2 -->
    <section class="info-section">
      <h3 class="section-title">Demo2：滚动到底部</h3>

      <div class="demo-grid">
        <div class="demo-card">
          <h4>未使用 nextTick()</h4>

          <button class="action-btn" @click="addWithoutNextTick">
            新增数据
          </button>

          <div ref="box1" class="box">
            <div v-for="item in list1" :key="item">
              {{ item }}
            </div>
          </div>
        </div>

        <div class="demo-card">
          <h4>使用 nextTick()</h4>

          <button class="action-btn" @click="addWithNextTick">新增数据</button>

          <div ref="box2" class="box">
            <div v-for="item in list2" :key="item">
              {{ item }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 应用场景 -->

    <section class="info-section">
      <h3 class="section-title">常见应用场景</h3>

      <div class="scene-grid">
        <div class="scene-card">
          <span class="scene-title"> 获取DOM </span>

          <span class="scene-desc"> 获取更新后的innerHTML </span>
        </div>

        <div class="scene-card">
          <span class="scene-title"> 滚动聊天框 </span>

          <span class="scene-desc"> 自动滚动到底部 </span>
        </div>

        <div class="scene-card">
          <span class="scene-title"> 获取高度 </span>

          <span class="scene-desc"> 获取offsetHeight </span>
        </div>

        <div class="scene-card">
          <span class="scene-title"> 第三方插件 </span>

          <span class="scene-desc"> 等待DOM生成再初始化 </span>
        </div>
      </div>
    </section>

    <!-- 源码 -->

    <section class="code-section">
      <h3 class="section-title">源码文件</h3>

      <div class="code-panel">
        <div class="code-panel-header">
          <span class="code-dot"></span>
          <span class="code-dot"></span>
          <span class="code-dot"></span>

          <span class="code-filename"> ViewNextTick.vue </span>
        </div>

        <pre class="code-block"><code>{{ vueCode }}</code></pre>
      </div>
    </section>
  </div>
</template>

<script setup>
import { nextTick, ref } from "vue";

import vueCode from "!!raw-loader!@/views/Level2/ViewNextTick.vue?raw";

const title1 = ref();
const title2 = ref();

const num1 = ref(0);
const num2 = ref(0);

const innerHTML1 = ref("");
const innerHTML2 = ref("");

function showWithoutNextTick() {
  num1.value++;
  innerHTML1.value = title1.value.innerHTML;
}

async function showWithNextTick() {
  num2.value++;
  await nextTick();
  innerHTML2.value = title2.value.innerHTML;
}

const list1 = ref(["A", "B", "C"]);
const list2 = ref(["A", "B", "C"]);

const box1 = ref();
const box2 = ref();

function addWithoutNextTick() {
  list1.value.push("新消息" + Math.random());

  list1.value.push("新消息" + Math.random());

  box1.value.scrollTop = box1.value.scrollHeight;
}

async function addWithNextTick() {
  list2.value.push("新消息" + Math.random());

  list2.value.push("新消息" + Math.random());

  await nextTick();

  box2.value.scrollTop = box2.value.scrollHeight;
}
</script>

<style scoped>
.vue-nexttick {
  width: 100%;
}

.page-header {
  margin-bottom: 28px;
}

.page-desc {
  color: #606266;
  line-height: 1.6;
}

.section-title {
  margin-bottom: 14px;
}

.info-section {
  margin-bottom: 30px;
  padding: 20px;
  border-radius: 8px;
  background: #f8faf9;
  border: 1px solid #e8f0ec;
}

.compare-list {
  list-style: none;
  padding: 0;
}

.compare-item {
  padding: 12px;
  background: white;
  border-radius: 6px;
  margin-bottom: 10px;
}

.demo-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}

.demo-card {
  background: white;
  padding: 18px;
  border-radius: 8px;
  border: 1px solid #ebeef5;
}

.action-btn {
  padding: 8px 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  background: #42b983;
}

.result-box {
  margin-top: 10px;
  background: #f6fffa;
  padding: 10px;
  border-radius: 5px;
}

.box {
  margin-top: 15px;
  width: 100%;
  height: 200px;
  overflow-y: auto;
  border: 1px solid #ddd;
  padding: 10px;
}

.scene-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.scene-card {
  background: white;
  padding: 16px;
  border-radius: 8px;
}

.scene-title {
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
}

.scene-desc {
  color: gray;
}

.code-panel {
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid #2d2d2d;
}

.code-panel-header {
  display: flex;
  align-items: center;
  gap: 6px;
  background: #2d2d2d;
  padding: 10px;
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
}

.code-block {
  margin: 0;
  padding: 15px;
  background: #1e1e1e;
  color: #d4d4d4;
  max-height: 500px;
  overflow: auto;
  white-space: pre-wrap;
  font-family: Consolas;
}
</style>