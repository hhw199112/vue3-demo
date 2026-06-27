<template>
  <div class="vue-axios">
    <header class="axios-header">
      <h2>Axios 数据请求</h2>
      <p class="axios-desc">通过封装的 request 实例调用接口，在组件中异步获取并展示数据。</p>
    </header>

    <section class="data-section">
      <h3 class="section-title">接口数据</h3>
      <div v-if="loading" class="loading-box">
        <span class="loading-spinner"></span>
        数据加载中...
      </div>
      <div v-else class="table-wrapper">
        <table class="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>用户 ID</th>
              <th>标题</th>
              <th>完成状态</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in todoList" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.userId }}</td>
              <td class="title-cell">{{ item.title }}</td>
              <td>
                <span
                  class="status-tag"
                  :class="item.completed ? 'status-tag--done' : 'status-tag--pending'"
                >
                  {{ item.completed ? '已完成' : '未完成' }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
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
            <span class="code-filename">ViewAxios.vue</span>
          </div>
          <pre class="code-block"><code>{{ vueCode }}</code></pre>
        </div>
        <div class="code-panel">
          <div class="code-panel-header">
            <span class="code-dot"></span>
            <span class="code-dot"></span>
            <span class="code-dot"></span>
            <span class="code-filename">utils/request.js</span>
          </div>
          <pre class="code-block"><code>{{ requestCode }}</code></pre>
        </div>
        <div class="code-panel">
          <div class="code-panel-header">
            <span class="code-dot"></span>
            <span class="code-dot"></span>
            <span class="code-dot"></span>
            <span class="code-filename">utils/api.js</span>
          </div>
          <pre class="code-block"><code>{{ apiCode }}</code></pre>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getData } from '@/utils/api'
import vueCode from '!!raw-loader!@/views/Level5/ViewAxios.vue?raw'
import requestCode from '!!raw-loader!@/utils/request'
import apiCode from '!!raw-loader!@/utils/api'

const todoList = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await getData()
    todoList.value = res.slice(0, 5)
  } catch (e) {
    console.log(e)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.vue-axios {
  width: 100%;
}

.axios-header {
  margin-bottom: 28px;
}

.axios-desc {
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

.data-section {
  margin-bottom: 32px;
  padding: 20px;
  background: #f8faf9;
  border: 1px solid #e8f0ec;
  border-radius: 8px;
}

.loading-box {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 24px;
  color: #606266;
  font-size: 14px;
}

.loading-spinner {
  width: 18px;
  height: 18px;
  border: 2px solid #e8f0ec;
  border-top-color: #42b983;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.table-wrapper {
  overflow-x: auto;
  border-radius: 8px;
  border: 1px solid #ebeef5;
  background: #fff;
}

.data-table {
  width: 100%;
  border-collapse: collapse;
}

.data-table th,
.data-table td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid #ebeef5;
}

.data-table th {
  background: #f5f7fa;
  font-size: 13px;
  font-weight: 600;
  color: #606266;
}

.data-table tbody tr:hover {
  background: #fafbfc;
}

.data-table tbody tr:last-child td {
  border-bottom: none;
}

.title-cell {
  max-width: 360px;
  word-break: break-word;
}

.status-tag {
  display: inline-block;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
}

.status-tag--done {
  background: #ecf9f3;
  color: #42b983;
}

.status-tag--pending {
  background: #fef0f0;
  color: #f56c6c;
}

.code-section {
  margin-top: 8px;
}

.code-panels {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
