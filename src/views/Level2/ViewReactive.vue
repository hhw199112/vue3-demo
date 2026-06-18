<template>
  <div class="vue-reactive">
    <header class="page-header">
      <h2>Vue3 Reactive</h2>
      <p class="page-desc">
        reactive 用于创建深层响应式对象，适合管理包含嵌套结构的数据。
      </p>
    </header>

    <section class="info-section">
      <h3 class="section-title">用户信息</h3>
      <div class="info-cards">
        <div class="info-card">
          <span class="info-label">姓名</span>
          <span class="info-value">{{ user.name }}</span>
        </div>
        <div class="info-card">
          <span class="info-label">性别</span>
          <span class="info-value">{{ user.sex }}</span>
        </div>
        <div class="info-card">
          <span class="info-label">年龄</span>
          <span class="info-value">{{ user.age }}</span>
        </div>
        <div class="info-card">
          <span class="info-label">城市</span>
          <span class="info-value">{{ user.address.city }}</span>
        </div>
        <div class="info-card">
          <span class="info-label">街道</span>
          <span class="info-value">{{ user.address.street }}</span>
        </div>
        <div class="info-card info-card--highlight">
          <span class="info-label">爱好</span>
          <span class="info-value info-value--small">{{ user.hobbies.join('、') }}</span>
        </div>
      </div>
      <button class="action-btn" @click="changeUser">修改用户信息</button>
    </section>

    <section class="info-section">
      <h3 class="section-title">watch 监听对比</h3>
      <ul class="compare-list">
        <li class="compare-item">
          直接监听整个 reactive 对象，不管加没加上 deep: true，oldVal 与 newVal ，难以区分先后值。
        </li>
        <li class="compare-item">
          监听某个具体属性（如 user.age），才能正确拿到变化前后的值。
        </li>
      </ul>

      <div class="demo-grid">
        <div class="demo-card demo-card--wide">
          <span class="demo-label">watch(user, { deep: true })</span>
          <p class="demo-result">{{ text1 || '点击上方按钮修改用户信息后查看结果' }}</p>
        </div>
        <div class="demo-card demo-card--wide">
          <span class="demo-label">watch(() => user.age)</span>
          <p class="demo-result">{{ text2 || '点击上方按钮修改用户信息后查看结果' }}</p>
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
            <span class="code-filename">ViewReactive.vue</span>
          </div>
          <pre class="code-block"><code>{{ vueCode }}</code></pre>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, watch, ref } from 'vue'
import vueCode from '!!raw-loader!@/views/Level2/ViewReactive.vue?raw'

const text1 = ref('')
const text2 = ref('')

const user = reactive({
  name: 'barney',
  sex: '男',
  age: 20,
  address: {
    city: '北京',
    street: '朝阳区'
  },
  hobbies: ['篮球', '足球', '乒乓球']
})

function changeUser() {
  user.name = 'barney stinson'
  user.sex = '女'
  user.age = 21 + Math.floor(Math.random() * 10)
  user.address.city = '上海'
  user.address.street = '浦东新区'
  user.hobbies.push('游泳')
}

watch(
  user,
  (newVal, oldVal) => {
    text1.value = `原始age：${oldVal.age}  新age：${newVal.age}`
  },
  { deep: true }
)

watch(() => user.age, (newVal, oldVal) => {
  text2.value = `原始age：${oldVal}  新age：${newVal}`
})
</script>

<style scoped>
.vue-reactive {
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

.info-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 12px;
  margin-bottom: 20px;
}

.info-card {
  padding: 16px;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #ebeef5;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}

.info-card--highlight {
  grid-column: span 2;
  border-color: #d4edda;
  background: #f6fffa;
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
  word-break: break-all;
}

.info-value--small {
  font-size: 14px;
  font-weight: 500;
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
  margin: 0 0 16px;
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
  grid-template-columns: 1fr;
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

.demo-result {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  color: #2c3e50;
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
