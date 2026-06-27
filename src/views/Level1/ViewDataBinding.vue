<template>
  <div class="vue-data-binding">
    <!-- 页面标题 -->
    <header class="page-header">
      <h2>Vue3 数据绑定</h2>

      <p class="page-desc">
        Vue 最核心的能力之一就是数据绑定，通过插值表达式、v-bind、 v-model
        实现数据与视图同步更新。
      </p>
    </header>

    <!-- 数据绑定介绍 -->

    <section class="info-section">
      <h3 class="section-title">数据绑定分类</h3>

      <ul class="compare-list">
        <li class="compare-item">插值表达式（Mustache）</li>

        <li class="compare-item">v-bind 属性绑定</li>

        <li class="compare-item">v-model 双向绑定</li>

        <li class="compare-item">表单控件绑定</li>
      </ul>
    </section>

    <!-- 基础绑定 -->

    <section class="info-section">
      <h3 class="section-title">基础绑定</h3>

      <div class="demo-grid">
        <div class="demo-card">
          <h4>插值表达式</h4>

          <div class="result-box">
            {{ title }}
          </div>
        </div>

        <div class="demo-card">
          <h4>v-bind</h4>
          绑定网络路径的图片
          <img :src="imageUrl" class="logo" />
          绑定本地路径的图片
          <img :src="imageLocal" class="logo" />
          <div class="result-box">图片地址动态绑定</div>
        </div>
      </div>
    </section>

    <!-- v-model -->

    <section class="info-section">
      <h3 class="section-title">v-model 系列</h3>

      <div class="demo-grid">
        <div class="demo-card">
          <h4>v-model</h4>

          <input class="input-box" v-model="name" placeholder="请输入姓名" />

          <div class="result-box">
            {{ name }}
          </div>
        </div>

        <div class="demo-card">
          <h4>v-model.trim</h4>

          <input
            class="input-box"
            v-model.trim="city"
            placeholder="请输入城市"
          />

          <div class="result-box">
            {{ city }}
          </div>
        </div>

        <div class="demo-card">
          <h4>v-model.number</h4>

          <input class="input-box" type="number" v-model.number="age" />

          <div class="result-box">
            {{ age }}
            ({{ typeof age }})
          </div>
        </div>

        <div class="demo-card">
          <h4>v-model.lazy</h4>

          <input
            class="input-box"
            v-model.lazy="remark"
            placeholder="失焦后更新"
          />

          <div class="result-box">
            {{ remark }}
          </div>
        </div>
      </div>
    </section>

    <!-- 表单控件 -->

    <section class="info-section">
      <h3 class="section-title">表单控件绑定</h3>

      <div class="demo-grid">



        <div class="demo-card">
          <h4>Textarea</h4>

          <textarea
            rows="5"
            class="textarea-box"
            v-model="description"
          ></textarea>

          <div class="result-box">
            {{ description }}
          </div>
        </div>

        <div class="demo-card">
          <h4>Radio</h4>

          <div class="radio-group">
            <label>
              <input type="radio" value="男" v-model="sex" />
              男
            </label>

            <label>
              <input type="radio" value="女" v-model="sex" />
              女
            </label>
          </div>

          <div class="result-box">
            {{ sex }}
          </div>
        </div>

        <div class="demo-card">
          <h4>Checkbox</h4>

          <div class="checkbox-group">
            <label>
              <input type="checkbox" value="Java" v-model="skills" />
              Java
            </label>

            <label>
              <input type="checkbox" value="Vue" v-model="skills" />
              Vue
            </label>

            <label>
              <input type="checkbox" value=".NET" v-model="skills" />
              .NET
            </label>
          </div>

          <div class="result-box">
            {{ skills }}
          </div>
        </div>

        <div class="demo-card">
          <h4>Select</h4>
          绑定的是optioin里的value
          <select class="input-box" v-model="citySelect">
            <option value="">请选择城市</option>
            <option value="nj">南京</option>
            <option value="sh">上海</option>
            <option value="bj">北京</option>
          </select>

          <div class="result-box">
            {{ citySelect }}
          </div>
        </div>

        
        <div class="demo-card">
          <h4>input单项绑定【文本框内容改变，不会改变原数据】</h4>

          <input class="input-box" type="text" :value="msg" />

          <div class="result-box">
            {{ msg }}
          </div>
        </div>
      </div>
    </section>

    <!-- 实际应用 -->

    <section class="info-section">
      <h3 class="section-title">实际应用场景</h3>

      <div class="scene-grid">
        <div class="scene-card">用户登录</div>
        <div class="scene-card">注册页面</div>
        <div class="scene-card">搜索框</div>
        <div class="scene-card">后台管理</div>
        <div class="scene-card">订单录入</div>
        <div class="scene-card">信息编辑</div>
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

          <span class="code-filename"> ViewDataBinding.vue </span>
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

import vueCode from "!!raw-loader!@/views/Level1/ViewDataBinding.vue?raw";

/**
 * 插值表达式
 */
const title = ref("{{Vue3 Data Binding Demo}}");

/**
 * v-bind
 */
const imageUrl = ref("https://vuejs.org/images/logo.png");

const imageLocal = ref(require("@/assets/Learn.png"));
/**
 * v-model
 */
const name = ref("张三");

/**
 * trim
 */
const city = ref("南京");

/**
 * number
 */
const age = ref(18);

/**
 * lazy
 */
const remark = ref("");

const msg=ref("单项绑定文本")

/**
 * textarea
 */
const description = ref("这里是多行文本内容");

/**
 * radio
 */
const sex = ref("男");

/**
 * checkbox
 */
const skills = ref(["Java"]);

/**
 * select
 */
const citySelect = ref("nj");
</script>

<style scoped>
.vue-data-binding {
  width: 100%;
  padding: 10px 0;
  overflow-x: hidden;
}

/* =========================
   页面标题
========================= */

.page-header {
  margin-bottom: 28px;
}

.page-header h2 {
  margin: 0;
  font-size: 22px;
  color: #303133;
}

.page-desc {
  margin-top: 10px;
  color: #606266;
  line-height: 1.8;
  font-size: 14px;
}

/* =========================
   通用区块
========================= */

.info-section {
  margin-bottom: 28px;
  padding: 20px;
  background: #f8faf9;
  border: 1px solid #e8f0ec;
  border-radius: 10px;
}

.section-title {
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: 600;
  color: #303133;
}

/* =========================
   说明列表
========================= */

.compare-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.compare-item {
  padding: 12px 15px;
  margin-bottom: 10px;
  background: white;
  border-radius: 8px;
  border: 1px solid #ebeef5;
  color: #606266;
}

/* =========================
   演示区域
========================= */

.demo-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.demo-card {
  background: white;
  border-radius: 10px;
  border: 1px solid #ebeef5;
  padding: 18px;
  transition: all 0.25s;
}

.demo-card:hover {
  transform: translateY(-2px);

  box-shadow: 0 5px 18px rgba(0, 0, 0, 0.08);
}

.demo-card h4 {
  margin-top: 0;
  margin-bottom: 12px;
  color: #303133;
}

/* =========================
   表单控件
========================= */

.input-box {
  width: 95%;
  height: 40px;
  padding: 0 12px;

  border: 1px solid #dcdfe6;

  border-radius: 6px;

  outline: none;

  transition: all 0.2s;
}

.input-box:focus {
  border-color: #42b983;
}

.textarea-box {
  width: 95%;

  padding: 12px;

  border: 1px solid #dcdfe6;

  border-radius: 6px;

  resize: vertical;

  outline: none;
}

.textarea-box:focus {
  border-color: #42b983;
}

/* =========================
   Radio Checkbox
========================= */

.radio-group,
.checkbox-group {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.radio-group label,
.checkbox-group label {
  cursor: pointer;
}

/* =========================
   结果显示
========================= */

.result-box {
  margin-top: 12px;

  color: #409eff;

  font-size: 13px;

  word-break: break-all;
}

/* =========================
   Logo
========================= */

.logo {
  width: 120px;

  display: block;

  margin: 10px auto;

  transition: all 0.3s;
}

.logo:hover {
  transform: scale(1.08);
}

/* =========================
   应用场景
========================= */

.scene-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}

.scene-card {
  background: white;

  border-radius: 8px;

  border: 1px solid #ebeef5;

  padding: 15px;

  text-align: center;

  transition: all 0.2s;

  cursor: default;
}

.scene-card:hover {
  color: #42b983;

  border-color: #42b983;
}

/* =========================
   VSCode源码展示
========================= */

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

  color: #aaa;

  font-size: 12px;

  font-family: Consolas, Monaco, monospace;
}

.code-block {
  margin: 0;

  padding: 16px;

  background: #1e1e1e;

  color: #d4d4d4;

  font-size: 12px;

  line-height: 1.7;

  font-family: Consolas, Monaco, monospace;

  white-space: pre-wrap;

  word-break: break-word;

  max-height: 500px;

  overflow: auto;
}

/* =========================
   响应式
========================= */

@media (max-width: 900px) {
  .demo-grid {
    grid-template-columns: 1fr;
  }

  .scene-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .scene-grid {
    grid-template-columns: 1fr;
  }
}
</style>