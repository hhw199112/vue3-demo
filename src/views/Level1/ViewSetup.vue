<template>
  <div class="vue-setup">
    <header class="page-header">
      <h2>Vue3 Setup</h2>
      <p class="page-desc">
        Vue3 Setup 是组合式 API 的写法，更简洁，也更符合现代 JavaScript 风格。
      </p>
    </header>

    <section class="info-section">
      <h3 class="section-title">与 Vue2 的对比</h3>
      <ul class="compare-list">
        <li v-for="item in compareItems" :key="item" class="compare-item">
          {{ item }}
        </li>
      </ul>
    </section>

    <section class="info-section">
      <h3 class="section-title">功能演示</h3>
      <div class="demo-grid">
        <div class="demo-card">
          <span class="demo-label">ref — 响应式数据</span>
          <p class="demo-value">Name: {{ name }}</p>
        </div>

        <div class="demo-card">
          <span class="demo-label">method — 修改数据</span>
          <button class="action-btn" @click="changeName">改变 Name</button>
        </div>

        <div class="demo-card demo-card--wide">
          <span class="demo-label">computed — 计算总价</span>
          <div class="input-row">
            <label>数量：<input type="number" v-model.number="num" /></label>
            <label>价格：<input type="number" v-model.number="price" /></label>
          </div>
          <p class="demo-result">总价：<strong>{{ total }}</strong></p>
        </div>

        <div class="demo-card demo-card--wide">
          <span class="demo-label">watch — 监听 num 变化</span>
          <p class="demo-result">{{ text || '修改数量后将显示变化记录' }}</p>
        </div>

    
      </div>
    </section>

    <section class="code-section">
      <h3 class="section-title">源码文件</h3>
      <div class="code-panels">
        <div class="code-panel">
          <div class="code-panel-header">
            <span class="code-dot"></span>
            <span class="code-dot"></span>
            <span class="code-dot"></span>
            <span class="code-filename">ViewSetup.vue</span>
          </div>
          <pre class="code-block"><code>{{ vueCode }}</code></pre>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import vueCode from '!!raw-loader!@/views/Level1/ViewSetup.vue?raw'
import { ref, computed, watch } from 'vue'

const compareItems = [
  'Vue2 中 data 选项必须是一个函数，Vue3 中可使用 ref / reactive',
  'Vue2 中 methods 是对象选项，Vue3 中直接定义函数',
  'Vue2 中 computed 是对象选项，Vue3 中使用 computed()',
  'Vue2 中 watch 是对象选项，Vue3 中使用 watch()'
]

const name = ref('Ted')
const num = ref(0)
const price = ref(0)
const text = ref('')


function changeName() {
  name.value = 'Ted Mosby'
}

const total = computed(() => num.value * price.value)

watch(num, (newVal, oldVal) => {
  text.value = `原始值：${oldVal}  新值：${newVal}`
})
</script>

<style scoped>
.vue-setup {
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
  margin: 0 0 14px;
  font-size: 15px;
  font-weight: 600;
  color: #303133;
}

.info-section {
  margin-bottom: 32px;
  padding: 20px;
  background: #f8faf9;
  border: 1px solid #e8f0ec;
  border-radius: 8px;
}

.compare-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.compare-item {
  padding: 12px 16px;
  background: #fff;
  border: 1px solid #ebeef5;
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.6;
  color: #303133;
}

.compare-item + .compare-item {
  margin-top: 10px;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.demo-card {
  padding: 16px;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #ebeef5;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}

.demo-card--wide {
  grid-column: span 2;
  border-color: #d4edda;
  background: #f6fffa;
}

.demo-label {
  display: block;
  margin-bottom: 10px;
  font-size: 12px;
  color: #909399;
  font-family: Consolas, Monaco, monospace;
}

.demo-value,
.demo-result {
  margin: 0;
  font-size: 15px;
  color: #2c3e50;
}

.demo-result strong {
  color: #42b983;
  font-size: 18px;
}

.input-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 10px;
}

.input-row label {
  font-size: 14px;
  color: #606266;
}

.input-row input {
  width: 80px;
  margin-left: 6px;
  padding: 4px 8px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
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

.code-section {
  margin-top: 8px;
}

.code-panels {
  display: grid;
  grid-template-columns: 1fr;
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

.code-dot:nth-child(1) { background: #ff5f57; }
.code-dot:nth-child(2) { background: #febc2e; }
.code-dot:nth-child(3) { background: #28c840; }

.code-filename {
  margin-left: 8px;
  font-size: 12px;
  color: #aaa;
  font-family: Consolas, Monaco, monospace;
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
  font-family: Consolas, Monaco, 'Courier New', monospace;
  white-space: pre-wrap;
  word-break: break-all;
}

.code-block code {
  font-family: inherit;
}
</style>
