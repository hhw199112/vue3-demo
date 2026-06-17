<template>
    <div class="vue-template-advance">
  
      <!-- 标题 -->
      <header class="page-header">
        <h2>Vue3 模板高级语法</h2>
        <p class="page-desc">
          Vue 提供了丰富的模板指令，用于控制 DOM 渲染逻辑、性能优化与条件展示，是实际开发中非常重要的一部分。
        </p>
      </header>
  
      <!-- 指令说明 -->
      <section class="info-section">
        <h3 class="section-title">高级指令说明</h3>
  
        <ul class="compare-list">
          <li class="compare-item">v-show：切换 display</li>
          <li class="compare-item">v-if / v-else：条件渲染（销毁/重建）</li>
          <li class="compare-item">v-for：列表渲染</li>
          <li class="compare-item">v-once：只渲染一次</li>
          <li class="compare-item">v-cloak：防止模板闪烁,Vue3很少使用。</li>
          <li class="compare-item">v-memo：性能优化缓存</li>
        </ul>
      </section>
  
      <!-- demo -->
      <section class="info-section">
        <h3 class="section-title">Demo 演示</h3>
  
        <div class="demo-grid">
  
          <!-- v-show -->
          <div class="demo-card">
            <h4>v-show</h4>
  
            <button class="action-btn" @click="show = !show">
              切换
            </button>
  
            <p v-show="show" class="demo-box">
              我是 v-show 内容
            </p>
          </div>
  
          <!-- v-if -->
          <div class="demo-card">
            <h4>v-if / v-else</h4>
  
            <button class="action-btn" @click="flag = !flag">
              切换
            </button>
  
            <p v-if="flag">if 显示内容</p>
            <p v-else>else 显示内容</p>
          </div>
  
          <!-- v-for -->
          <div class="demo-card">
            <h4>v-for</h4>
  
            <ul>
              <li v-for="item in list" :key="item">
                {{ item }}
              </li>
            </ul>
          </div>
  
          <!-- v-once -->
          <div class="demo-card">
            <h4>v-once</h4>
  
            <button class="action-btn" @click="changeOnce">
              修改
            </button>
  
            <div v-once class="demo-box">
              {{ once }}
            </div>
  
            <div class="demo-box">
              {{ once }}
            </div>
          </div>
  
          <!-- v-cloak -->
          <div class="demo-card">
            <h4>v-cloak</h4>
  
            <div v-cloak class="demo-box">
              {{ once }}
            </div>
          </div>
  
          <!-- v-memo -->
          <div class="demo-card">
            <h4>v-memo</h4>
  
            <button class="action-btn" @click="changeMemo">
              修改
            </button>
  
            <div class="memo-box">
              <div
                v-for="item in items"
                :key="item.id"
                v-memo="[item.title, item.isExpanded]"
                class="memo-item"
              >
                <strong>{{ item.title }}</strong>
  
                <span v-if="item.isExpanded">
                  —— {{ item.description }}
                </span>
              </div>
            </div>
          </div>
  
        </div>
      </section>
  
      <!-- 场景 -->
      <section class="info-section">
        <h3 class="section-title">应用场景</h3>
  
        <div class="scene-grid">
  
          <div class="scene-card">
            <div class="scene-title">v-show</div>
            <div class="scene-desc">Tab切换 / 显隐控制</div>
          </div>
  
          <div class="scene-card">
            <div class="scene-title">v-if</div>
            <div class="scene-desc">权限控制 / 条件渲染</div>
          </div>
  
          <div class="scene-card">
            <div class="scene-title">v-for</div>
            <div class="scene-desc">列表 / 表格渲染</div>
          </div>
  
          <div class="scene-card">
            <div class="scene-title">v-memo</div>
            <div class="scene-desc">性能优化（大列表）</div>
          </div>
  
        </div>
      </section>
  
      <!-- 源码 -->
      <section class="code-section">
        <h3 class="section-title">源码展示</h3>
  
        <div class="code-panel">
  
          <div class="code-panel-header">
            <span class="code-dot"></span>
            <span class="code-dot"></span>
            <span class="code-dot"></span>
            <span class="code-filename">ViewTemplateAdvance.vue</span>
          </div>
  
          <pre class="code-block"><code>{{ vueCode }}</code></pre>
  
        </div>
      </section>
  
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import vueCode from "!!raw-loader!@/views/Level1/ViewTemplateAdvance.vue?raw";
  
  const show = ref(true);
  const flag = ref(true);
  
  const list = ref([
    "孙悟空",
    "猪八戒",
    "沙和尚",
    "唐僧"
  ]);
  
  const once = ref("第一次加载");
  
  function changeOnce() {
    once.value = "更新：" + Math.random();
  }
  
  const items = ref([
    {
      id: 1,
      title: "标题1",
      description: "描述1",
      isExpanded: true
    },
    {
      id: 2,
      title: "标题2",
      description: "描述2",
      isExpanded: false
    },
    {
      id: 3,
      title: "标题3",
      description: "描述3",
      isExpanded: false
    }
  ]);
  
  function changeMemo() {
    items.value[0].title = "修改 " + Math.random();
    items.value[0].isExpanded = !items.value[0].isExpanded;
    items.value[1].title = "修改 " + Math.random();
  }
  </script>
  
  <style scoped>
  .vue-template-advance {
    width: 100%;
  }
  
  /* header */
  .page-header {
    margin-bottom: 25px;
  }
  
  .page-desc {
    color: #606266;
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
  }
  
  /* list */
  .compare-list {
    list-style: none;
    padding: 0;
  }
  
  .compare-item {
    background: #fff;
    padding: 10px 14px;
    margin-bottom: 10px;
    border-radius: 6px;
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
    background: #42b983;
    border: none;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
  }
  
  /* memo */
  .memo-box {
    margin-top: 10px;
  }
  
  .memo-item {
    padding: 6px;
    border-bottom: 1px solid #eee;
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