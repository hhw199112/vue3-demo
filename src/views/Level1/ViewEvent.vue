<template>
  <div class="vue-event">
    <!-- 页面标题 -->

    <header class="page-header">
      <h2>Vue3 事件处理</h2>

      <p class="page-desc">
        Vue 中使用 v-on（@）绑定事件，
        支持鼠标事件、表单事件、键盘事件以及各种事件修饰符。
      </p>
    </header>

    <!-- 常见事件 -->

    <section class="info-section">
      <h3 class="section-title">常见事件类型</h3>

      <ul class="compare-list">
        <li class="compare-item">click：点击事件</li>

        <li class="compare-item">dblclick：双击事件</li>

        <li class="compare-item">input：输入事件</li>

        <li class="compare-item">focus / blur：焦点事件</li>

        <li class="compare-item">keyup.enter：回车事件</li>
      </ul>
    </section>

    <!-- 基础事件 -->

    <section class="info-section">
      <h3 class="section-title">基础事件</h3>

      <div class="demo-grid">
        <div class="demo-card">
          <h4>点击事件</h4>

          <div class="number-box">
            {{ count }}
          </div>

          <button class="action-btn" @click="add">+1</button>

          <button class="action-btn danger" @click="reset">重置</button>
        </div>

        <div class="demo-card">
          <h4>双击事件</h4>

          <button class="action-btn" @dblclick="doubleClick">双击测试</button>
        </div>

        <div class="demo-card">
          <h4>事件传参</h4>

          <button class="action-btn" @click="showMessage('Vue3')">
            传递参数
          </button>
        </div>

        <div class="demo-card">
          <h4>获取 Event 对象</h4>

          <button class="action-btn" @click="showEvent">获取鼠标坐标</button>

          <div class="result-box">
            {{ eventText }}
          </div>
        </div>

        <div class="demo-card">
          <h4>参数 + Event</h4>

          <button class="action-btn" @click="showInfo('张三', $event)">
            查看信息
          </button>
        </div>
      </div>
    </section>

    <!-- 表单事件 -->

    <section class="info-section">
      <h3 class="section-title">表单事件</h3>

      <div class="demo-grid">
        <div class="demo-card">
          <h4>Input事件</h4>

          <input
            class="input-box"
            placeholder="请输入内容"
            @input="handleInput"
          />

          <div class="result-box">
            {{ inputText }}
          </div>
        </div>

        <div class="demo-card">
          <h4>Focus / Blur</h4>

          <input
            class="input-box"
            placeholder="点击获取焦点"
            @focus="focusHandler"
            @blur="blurHandler"
          />
        </div>
      </div>
    </section>

    <!-- 键盘事件 -->

    <section class="info-section">
      <h3 class="section-title">键盘事件</h3>

      <div class="demo-grid">
        <div class="demo-card">
          <h4>Enter搜索</h4>

          <input
            class="input-box"
            v-model="keyword"
            placeholder="输入内容按回车"
            @keyup.enter="search"
          />
        </div>

        <div class="demo-card">
          <h4>Esc取消</h4>

          <input class="input-box" placeholder="按ESC键" @keyup.esc="cancel" />
        </div>
      </div>
    </section>

    <!-- 事件修饰符 -->

    <section class="info-section">
      <h3 class="section-title">事件修饰符</h3>

      <div class="demo-grid">
        <div class="demo-card">
          <h4>.stop 阻止冒泡</h4>

          <div class="parent-box" @click="parentClick">
            父元素

            <div class="btn-group">
              <button class="action-btn" @click.stop="childClick">
                有 stop
              </button>

              <button class="action-btn" @click="childClick">无 stop</button>
            </div>
          </div>
        </div>

        <div class="demo-card">
          <h4>.prevent 阻止默认行为</h4>

          <a href="https://www.baidu.com" @click.prevent="preventClick">
            百度一下
          </a>
        </div>

        <div class="demo-card">
          <h4>.once 执行一次</h4>

          <button class="action-btn" @click.once="onceClick">点击一次</button>
        </div>
      </div>
    </section>

    <!-- 应用场景 -->

    <section class="info-section">
      <h3 class="section-title">实际应用场景</h3>

      <div class="scene-grid">
        <div class="scene-card">登录按钮</div>

        <div class="scene-card">搜索框</div>

        <div class="scene-card">文件上传</div>

        <div class="scene-card">菜单切换</div>

        <div class="scene-card">表单提交</div>

        <div class="scene-card">权限验证</div>
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

          <span class="code-filename"> ViewEvent.vue </span>
        </div>

        <pre class="code-block">
  <code>{{ vueCode }}</code>
          </pre>
      </div>
    </section>
  </div>
</template>
  <script setup>
import { ref } from "vue";

import vueCode from "!!raw-loader!@/views/Level1/ViewEvent.vue?raw";

const count = ref(0);

const inputText = ref("");

const keyword = ref("");

const eventText = ref("");

function add() {
  count.value++;
}

function reset() {
  count.value = 0;
}

function doubleClick() {
  alert("双击成功");
}

function showMessage(msg) {
  alert(msg);
}

function showEvent(event) {
  eventText.value = `X=${event.clientX} Y=${event.clientY}`;
}

function showInfo(name) {
  alert(`姓名：${name}`);
}

function handleInput(event) {
  inputText.value = event.target.value;
}

function focusHandler() {
  console.log("focus");
}

function blurHandler() {
  console.log("blur");
}

function search() {
  alert(`搜索内容：${keyword.value}`);
}

function cancel() {
  alert("取消操作");
}

function parentClick() {
  alert("父元素点击");
}

function childClick() {
  alert("子元素点击");
}

function preventClick() {
  alert("已阻止默认行为");
}

function onceClick() {
  alert("只执行一次");
}
</script>
  <style scoped>
.vue-event {
  width: 100%;
  padding: 10px 0;
}

/* 页面标题 */
.page-header {
  margin-bottom: 26px;
}

.page-header h2 {
  margin: 0;
  font-size: 20px;
  color: #303133;
}

.page-desc {
  margin-top: 8px;
  font-size: 14px;
  color: #606266;
  line-height: 1.6;
}

/* 区块 */
.info-section {
  margin-bottom: 28px;
  padding: 18px;
  background: #f8faf9;
  border: 1px solid #e8f0ec;
  border-radius: 10px;
}

.section-title {
  font-size: 15px;
  font-weight: 600;
  color: #303133;
  margin-bottom: 14px;
}

/* 列表 */
.compare-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.compare-item {
  background: #fff;
  padding: 10px 14px;
  margin-bottom: 10px;
  border-radius: 8px;
  border: 1px solid #ebeef5;
  font-size: 13px;
  color: #303133;
}

/* 卡片布局 */
.demo-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}

.demo-card {
  background: #fff;
  border: 1px solid #ebeef5;
  border-radius: 10px;
  padding: 16px;
  transition: all 0.2s ease;
}

.demo-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.06);
}

.demo-card h4 {
  margin: 0 0 10px;
  font-size: 14px;
  color: #303133;
}

/* 按钮 */
.action-btn {
  padding: 7px 14px;
  margin-right: 8px;
  border: none;
  border-radius: 6px;
  background: #42b983;
  color: #fff;
  font-size: 13px;
  cursor: pointer;
  transition: 0.2s;
}

.action-btn:hover {
  background: #3aa876;
}

.danger {
  background: #f56c6c;
}

.danger:hover {
  background: #e45656;
}

/* 输入框 */
.input-box {
  width: 95%;
  height: 36px;
  padding: 0 10px;
  border: 1px solid #dcdfe6;
  border-radius: 6px;
  outline: none;
  transition: 0.2s;
}

.input-box:focus {
  border-color: #42b983;
}

/* 结果显示 */
.result-box {
  margin-top: 10px;
  font-size: 13px;
  color: #409eff;
}

/* 父子测试区域 */
.parent-box {
  padding: 14px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fafafa;
}

/* 场景 */
.scene-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.scene-card {
  background: #fff;
  border: 1px solid #ebeef5;
  border-radius: 8px;
  padding: 12px;
  text-align: center;
  font-size: 13px;
  color: #606266;
  transition: 0.2s;
}

.scene-card:hover {
  border-color: #42b983;
  color: #42b983;
}

/* =========================
     源码展示（VSCode风格）
     ========================= */

.code-section {
  margin-top: 10px;
}

.code-panel {
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #2d2d2d;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
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
  padding: 14px;
  background: #1e1e1e;
  color: #d4d4d4;
  font-size: 12px;
  line-height: 1.6;
  font-family: Consolas, Monaco, monospace;
  white-space: pre-wrap;
  word-break: break-word;
  max-height: 500px;
  overflow: auto;
}

/* 小优化：避免页面滚动条 */
.vue-event {
  overflow-x: hidden;
}
</style>