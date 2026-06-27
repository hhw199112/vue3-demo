<template>
  <div class="vue-pinia">
    <header class="pinia-header">
      <h2>Pinia 状态演示</h2>
      <p class="pinia-desc">通过 Store 管理共享状态，支持 state、getters 与 actions。</p>
    </header>

    <section class="state-section">
      <h3 class="section-title">当前状态</h3>
      <div class="state-cards">
        <div class="state-card">
          <span class="state-label">name</span>
          <span class="state-value">{{ userStore.name }}</span>
        </div>
        <div class="state-card">
          <span class="state-label">age</span>
          <span class="state-value">{{ userStore.age }}</span>
        </div>
        <div class="state-card state-card--getter">
          <span class="state-label">info (getter)</span>
          <span class="state-value">{{ userStore.info }}</span>
        </div>
      </div>
      <button class="action-btn" @click="changeState">通过代码修改状态</button>
    </section>

    <section class="code-section">
      <h3 class="section-title">源码文件</h3>
      <div class="code-panels">
        <div class="code-panel">
          <div class="code-panel-header">
            <span class="code-dot"></span>
            <span class="code-dot"></span>
            <span class="code-dot"></span>
            <span class="code-filename">ViewPinia.vue</span>
          </div>
          <pre class="code-block"><code>{{ vueCode }}</code></pre>
        </div>
        <div class="code-panel">
          <div class="code-panel-header">
            <span class="code-dot"></span>
            <span class="code-dot"></span>
            <span class="code-dot"></span>
            <span class="code-filename">store/user.js</span>
          </div>
          <pre class="code-block"><code>{{ jsCode }}</code></pre>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useUserStore } from '@/store/user'
import vueCode from '!!raw-loader!@/views/Level5/ViewPinia.vue?raw'
import jsCode from '!!raw-loader!@/store/user'

const userStore = useUserStore()

function changeState() {
  userStore.name = '尼古拉'
  userStore.age++
  userStore.add()
}
</script>

<style scoped>
.vue-pinia {
  width: 100%;
}

.pinia-header {
  margin-bottom: 28px;
}

.pinia-desc {
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

.state-section {
  margin-bottom: 32px;
  padding: 20px;
  background: #f8faf9;
  border: 1px solid #e8f0ec;
  border-radius: 8px;
}

.state-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 12px;
  margin-bottom: 20px;
}

.state-card {
  padding: 16px;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #ebeef5;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}

.state-card--getter {
  border-color: #d4edda;
  background: #f6fffa;
}

.state-label {
  display: block;
  margin-bottom: 8px;
  font-size: 12px;
  color: #909399;
  font-family: Consolas, Monaco, monospace;
}

.state-value {
  font-size: 18px;
  font-weight: 600;
  color: #2c3e50;
  word-break: break-all;
}

.action-btn {
  padding: 10px 20px;
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
