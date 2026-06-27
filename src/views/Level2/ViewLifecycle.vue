<template>
  <div class="vue-life-cycle">

    <header class="page-header">
      <h2>Vue3 生命周期</h2>
      <p class="page-desc">
        Vue3 生命周期用于在组件不同阶段执行对应逻辑，例如初始化、更新、销毁等。
      </p>
    </header>

    <section class="info-section">

      <h3 class="section-title">
        生命周期演示
      </h3>

      <div class="info-cards">

        <div class="info-card">
          <span class="info-label">
            当前状态
          </span>

          <span class="info-value">
            {{ text }}
          </span>
        </div>

      </div>

    </section>

    <section class="info-section">

      <h3 class="section-title">
        生命周期说明
      </h3>

      <ul class="compare-list">

        <li class="compare-item">
          onMounted：DOM 挂载完成后执行。
        </li>

        <li class="compare-item">
          onBeforeUnmount：组件即将销毁时执行。
        </li>

        <li class="compare-item">
          onUnmounted：组件销毁完成后执行。
        </li>

      </ul>

    </section>

    <section class="info-section">

      <h3 class="section-title">
        生命周期执行记录
      </h3>

      <div class="demo-card">

        <p
          class="demo-result"
          v-for="(item,index) in logs"
          :key="index"
        >
          {{ item }}
        </p>

      </div>

    </section>

    <section class="code-section">

      <h3 class="section-title">
        源码文件
      </h3>

      <div class="code-panel">

        <div class="code-panel-header">

          <span class="code-dot"></span>
          <span class="code-dot"></span>
          <span class="code-dot"></span>

          <span class="code-filename">
            ViewLifecycle.vue
          </span>

        </div>

        <pre class="code-block">
<code>{{ vueCode }}</code>
        </pre>

      </div>

    </section>

  </div>
</template>

<script setup>

import {
  ref,
  onMounted,
  onBeforeUnmount,
  onUnmounted
} from "vue"

import vueCode from "!!raw-loader!@/views/Level2/ViewLifecycle.vue"

const text = ref("等待加载")

const logs = ref([])

onMounted(() => {

  text.value = "页面加载完成"

  logs.value.push("onMounted 执行")

})

onBeforeUnmount(() => {

  logs.value.push("onBeforeUnmount 执行")

})

onUnmounted(() => {

  console.log("组件销毁")

})

</script>

<style scoped>

.vue-life-cycle{
    width:100%;
}

.page-header{
    margin-bottom:28px;
}

.page-desc{
    color:#606266;
    line-height:1.6;
    font-size:14px;
}

.info-section{
    margin-bottom:30px;
    padding:20px;
    background:#f8faf9;
    border:1px solid #e8f0ec;
    border-radius:8px;
}

.section-title{
    margin-bottom:14px;
}

.info-cards{
    display:grid;
    grid-template-columns:1fr;
    gap:12px;
}

.info-card{
    padding:16px;
    background:white;
    border:1px solid #ebeef5;
    border-radius:8px;
}

.info-label{
    display:block;
    color:#909399;
    font-size:12px;
    margin-bottom:8px;
}

.info-value{
    font-size:16px;
    font-weight:bold;
}

.compare-list{
    padding:0;
    list-style:none;
}

.compare-item{
    margin-bottom:10px;
    padding:12px;
    background:white;
    border:1px solid #ebeef5;
    border-radius:8px;
}

.demo-card{
    padding:16px;
    background:white;
    border-radius:8px;
    border:1px solid #ebeef5;
}

.demo-result{
    margin:6px 0;
}

.code-panel{
    border-radius:8px;
    overflow:hidden;
    border:1px solid #2d2d2d;
}

.code-panel-header{
    display:flex;
    align-items:center;
    padding:10px 14px;
    background:#2d2d2d;
}

.code-dot{
    width:10px;
    height:10px;
    border-radius:50%;
    margin-right:6px;
}

.code-dot:nth-child(1){
    background:#ff5f57;
}

.code-dot:nth-child(2){
    background:#febc2e;
}

.code-dot:nth-child(3){
    background:#28c840;
}

.code-filename{
    margin-left: 8px;
  font-size: 12px;
  color: #aaa;
  font-family: Consolas, Monaco, monospace;
}

.code-block{
    margin:0;
    padding:16px;
    background:#1e1e1e;
    color:#d4d4d4;
    max-height:500px;
    overflow:auto;
    white-space:pre-wrap;
}

</style>

