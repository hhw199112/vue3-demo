<template>
  <div class="vue-basic">
    <header class="page-header">
      <h2>Vue3 项目创建</h2>
      <p class="page-desc">使用 Vue CLI 创建 Vue3 项目，并在 Cursor 中打开进行开发。</p>
    </header>

    <section class="info-section">
      <h3 class="section-title">运行环境</h3>
      <div class="info-cards">
        <div class="info-card">
          <span class="info-label">操作系统</span>
          <span class="info-value">Windows 11</span>
        </div>
        <div class="info-card">
          <span class="info-label">Node.js</span>
          <span class="info-value">v16.20.2</span>
        </div>
        <div class="info-card info-card--highlight">
          <span class="info-label">Vue 版本</span>
          <span class="info-value">Vue 3</span>
        </div>
      </div>
    </section>

    <section class="info-section">
      <h3 class="section-title">创建步骤</h3>
      <ol class="step-list">
        <li v-for="(step, index) in steps" :key="index" class="step-item">
          <span class="step-index">{{ index + 1 }}</span>
          <div class="step-content">
            <p class="step-text">{{ step.text }}</p>
            <pre v-if="step.command" class="step-command"><code>{{ step.command }}</code></pre>
          </div>
        </li>
      </ol>
    </section>


  </div>
</template>

<script setup>

const steps = [
  {
      text:"在命令行里输入以下命令，创建一个 Vue 全局变量,第一次创建后后续不用再次创建：",
      command:"npm install -g vue"
  },
  {
      text:"在命令行里输入以下命令，创建一个 Vue 脚手架,第一次创建后后续不用再次创建：",
      command:"npm install -g @vue/cli"
  },
  {
    text: '在命令行里输入以下命令，创建一个 Vue 项目：',
    command: 'vue create vue3-demo'
  },
  {
    text: '手动选择 Vue 版本，选择 Vue 3'
  },
  {
    text: '利用 Cursor 打开当前项目，开始开发'
  }
]
</script>

<style scoped>
.vue-basic {
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
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 12px;
}

.info-card {
  padding: 16px;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #ebeef5;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
}

.info-card--highlight {
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
  font-size: 18px;
  font-weight: 600;
  color: #2c3e50;
}

.step-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.step-item {
  display: flex;
  gap: 16px;
  padding: 16px;
  background: #fff;
  border: 1px solid #ebeef5;
  border-radius: 8px;
}

.step-item + .step-item {
  margin-top: 12px;
}

.step-index {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  border-radius: 50%;
  background: #42b983;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
}

.step-content {
  flex: 1;
  min-width: 0;
}

.step-text {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  color: #303133;
}

.step-command {
  margin: 10px 0 0;
  padding: 12px 14px;
  background: #1e1e1e;
  color: #d4d4d4;
  border-radius: 6px;
  font-size: 13px;
  line-height: 1.5;
  font-family: Consolas, Monaco, 'Courier New', monospace;
  overflow-x: auto;
}

.step-command code {
  font-family: inherit;
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
