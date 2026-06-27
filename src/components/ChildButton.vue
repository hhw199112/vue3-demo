<template>
    <div class="vue-inherit-attrs">
  
      <!-- 标题 -->
      <header class="page-header">
        <h2>Vue3 inheritAttrs + $attrs</h2>
        <p class="page-desc">
          inheritAttrs 控制父组件传递的非 props 属性是否自动挂载到子组件根节点，
          配合 $attrs 可以实现精细化控制属性透传。
        </p>
      </header>
  
      <!-- 概念说明 -->
      <section class="info-section">
  
        <h3 class="section-title">inheritAttrs 作用</h3>
  
        <ul class="compare-list">
  
          <li class="compare-item">
            inheritAttrs = true：父组件属性会自动作用在子组件根元素
          </li>
  
          <li class="compare-item">
            inheritAttrs = false：不会自动继承，需要手动使用 $attrs
          </li>
  
          <li class="compare-item">
            $attrs 可以精准控制哪些 DOM 元素接收父级属性
          </li>
  
        </ul>
  
      </section>
  
      <!-- 示例 -->
      <section class="info-section">
  
        <h3 class="section-title">示例演示</h3>
  
        <div class="demo-card">
  
          <p class="demo-tip">
            当前组件 class 可能来自父组件（如：red）
          </p>
  
          <div class="demo-block">
  
            <button class="btn" v-bind="$attrs">
              子控件按钮（使用 $attrs）
            </button>
  
            <button class="btn">
              子控件按钮（未使用 $attrs）
            </button>
  
          </div>
  
        </div>
  
      </section>
  
      <!-- 对比说明 -->
      <section class="info-section">
  
        <h3 class="section-title">行为对比</h3>
  
        <div class="compare-box">
  
          <div class="compare-item-box">
  
            <h4>inheritAttrs = true</h4>
            <p>父组件传递的 class / style 会自动绑定到根节点</p>
  
          </div>
  
          <div class="compare-item-box">
  
            <h4>inheritAttrs = false</h4>
            <p>不会自动绑定，需要通过 v-bind="$attrs" 手动分发属性</p>
  
          </div>
  
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

          <span class="code-filename"> ViewDefineOptions.vue </span>
        </div>

        <pre class="code-block"><code>{{ vueCode }}</code>
          </pre>
      </div>

      <div class="code-panel">
        <div class="code-panel-header">
          <span class="code-dot"></span>
          <span class="code-dot"></span>
          <span class="code-dot"></span>

          <span class="code-filename"> ChildButton.vue </span>
        </div>

        <pre class="code-block"><code>{{ vueCode2 }}</code>
          </pre>
      </div>
      </div>

   
    </section>
  
    </div>
  </template>
  
  <script setup>
  import { defineOptions } from "vue"
  import vueCode from "!!raw-loader!@/views/Level3/ViewDefineOptions.vue?raw";
import vueCode2 from "!!raw-loader!@/components/ChildButton.vue?raw";
  defineOptions({
    name: "BaseBtn",
    inheritAttrs: false
  })
  </script>
  
  <style scoped>
  .vue-inherit-attrs {
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
    margin-bottom: 30px;
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
  
  /* 列表 */
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
    margin-bottom: 10px;
    line-height: 1.6;
    color: #303133;
  }
  
  /* demo */
  .demo-card {
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    border: 1px solid #ebeef5;
  }
  
  .demo-tip {
    font-size: 14px;
    color: #909399;
    margin-bottom: 12px;
  }
  
  .demo-block {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }
  
  /* 按钮 */
  .btn {
    width: 160px;
    height: 45px;
    font-size: 14px;
    border: 1px solid #dcdfe6;
    background: #fff;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.2s;
  }
  
  .btn:hover {
    border-color: #42b983;
    color: #42b983;
  }
  
  /* 对比区域 */
  .compare-box {
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
  }
  
  .compare-item-box {
    padding: 14px 16px;
    background: #fff;
    border: 1px solid #ebeef5;
    border-radius: 8px;
  }
  
  .compare-item-box h4 {
    margin: 0 0 6px;
    font-size: 14px;
    color: #2c3e50;
  }
  
  .compare-item-box p {
    margin: 0;
    font-size: 13px;
    color: #606266;
    line-height: 1.6;
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