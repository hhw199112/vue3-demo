<template>
    <div class="vue-template-base">
  
      <!-- 标题 -->
      <header class="page-header">
        <h2>Vue3 模板基础语法</h2>
        <p class="page-desc">
          Vue 模板语法用于将数据绑定到 DOM 中，核心基础指令包括 v-text、v-html、v-bind、v-on。
        </p>
      </header>
  
      <!-- 知识点 -->
      <section class="info-section">
        <h3 class="section-title">基础指令说明</h3>
  
        <ul class="compare-list">
          <li class="compare-item">v-text：等价 innerText</li>
          <li class="compare-item">v-html：等价 innerHTML</li>
          <li class="compare-item">v-bind：绑定属性</li>
          <li class="compare-item">v-on：绑定事件</li>
        </ul>
      </section>
  
      <!-- Demo区域 -->
      <section class="info-section">
        <h3 class="section-title">Demo 演示</h3>
  
        <div class="demo-grid">
  
          <!-- v-text -->
          <div class="demo-card">
            <h4>v-text</h4>
            <div class="demo-box">
              <div v-text="text"></div>
            </div>
          </div>
  
          <!-- 插值 -->
          <div class="demo-card">
            <h4>插值表达式</h4>
            <div class="demo-box">
              {{ text }}
            </div>
          </div>
  
          <!-- v-html -->
          <div class="demo-card">
            <h4>v-html</h4>
            <div class="demo-box" v-html="html"></div>
          </div>
  
          <!-- v-bind -->
          <div class="demo-card">
            <h4>v-bind</h4>
            <div class="demo-box">
              <div :title="name">{{ name }}</div>
            </div>
          </div>
  
          <!-- v-on -->
          <div class="demo-card">
            <h4>v-on</h4>
            <button class="action-btn" @click="handleClick">
              点击触发事件
            </button>
          </div>
  
        </div>
      </section>
  
      <!-- 场景 -->
      <section class="info-section">
        <h3 class="section-title">应用场景</h3>
  
        <div class="scene-grid">
          <div class="scene-card">
            <div class="scene-title">v-text</div>
            <div class="scene-desc">纯文本渲染</div>
          </div>
  
          <div class="scene-card">
            <div class="scene-title">v-html</div>
            <div class="scene-desc">富文本展示</div>
          </div>
  
          <div class="scene-card">
            <div class="scene-title">v-bind</div>
            <div class="scene-desc">动态属性绑定</div>
          </div>
  
          <div class="scene-card">
            <div class="scene-title">v-on</div>
            <div class="scene-desc">事件绑定处理</div>
          </div>
        </div>
      </section>
  
      <!-- 源码展示 -->
      <section class="code-section">
        <h3 class="section-title">源码展示</h3>
  
        <div class="code-panel">
          <div class="code-panel-header">
            <span class="code-dot"></span>
            <span class="code-dot"></span>
            <span class="code-dot"></span>
            <span class="code-filename">ViewTemplateBase.vue</span>
          </div>
  
          <pre class="code-block"><code>{{ vueCode }}</code></pre>
        </div>
      </section>
  
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import vueCode from "!!raw-loader!@/views/Level1/ViewTemplateBase.vue?raw";
  
  const text = ref("Vue3 Template");
  const html = ref("<button style='color:red'>HTML Button</button>");
  const name = ref("Vue Bind Demo");
  
  function handleClick() {
    alert("v-on 点击事件触发");
  }
  </script>
  
  <style scoped>
  .vue-template-base {
    width: 100%;
  }
  
  /* header */
  .page-header {
    margin-bottom: 25px;
  }
  
  .page-desc {
    color: #606266;
    font-size: 14px;
    line-height: 1.6;
  }
  
  /* section */
  .info-section {
    margin-bottom: 30px;
    padding: 20px;
    background: #f8faf9;
    border: 1px solid #e8f0ec;
    border-radius: 8px;
  }
  
  .section-title {
    margin-bottom: 12px;
    font-size: 15px;
    font-weight: 600;
  }
  
  /* list */
  .compare-list {
    list-style: none;
    padding: 0;
  }
  
  .compare-item {
    background: #fff;
    padding: 10px 14px;
    border-radius: 6px;
    margin-bottom: 10px;
    border: 1px solid #ebeef5;
  }
  
  /* demo */
  .demo-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
  
  .demo-card {
    background: #fff;
    padding: 16px;
    border-radius: 8px;
    border: 1px solid #ebeef5;
  }
  
  .demo-box {
    margin-top: 8px;
    padding: 10px;
    border: 1px dashed #ccc;
  }
  
  .action-btn {
    padding: 8px 14px;
    border: none;
    border-radius: 5px;
    background: #42b983;
    color: #fff;
    cursor: pointer;
  }
  
  /* scene */
  .scene-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
  }
  
  .scene-card {
    background: #fff;
    padding: 14px;
    border-radius: 8px;
    border: 1px solid #ebeef5;
  }
  
  .scene-title {
    font-weight: bold;
    margin-bottom: 6px;
  }
  
  .scene-desc {
    color: #888;
    font-size: 13px;
  }
  
  /* code */
  .code-panel {
    border-radius: 8px;
    overflow: hidden;
    border: 1px solid #2d2d2d;
  }
  
  .code-panel-header {
    display: flex;
    align-items: center;
    gap: 6px;
    background: #2d2d2d;
    padding: 10px 12px;
  }
  
  .code-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  
  .code-dot:nth-child(1) { background: #ff5f57; }
  .code-dot:nth-child(2) { background: #febc2e; }
  .code-dot:nth-child(3) { background: #28c840; }
  
  .code-filename {
    margin-left: 8px;
    font-size: 12px;
    color: #aaa;
  }
  
  .code-block {
    margin: 0;
    padding: 14px;
    background: #1e1e1e;
    color: #d4d4d4;
    font-size: 12px;
    line-height: 1.6;
    overflow: auto;
    white-space: pre-wrap;
  }
  </style>