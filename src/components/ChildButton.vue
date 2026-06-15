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
  
    </div>
  </template>
  
  <script setup>
  import { defineOptions } from "vue"
  
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
  </style>