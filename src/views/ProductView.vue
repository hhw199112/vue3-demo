<template>
  <div class="product-page">
    <!-- 页面标题 -->

    <header class="page-header">
      <h2>Vue3 Props 响应式更新</h2>

      <p class="page-desc">
        父组件修改数据后，通过 Props
        传递给子组件，子组件会自动更新视图，无需手动刷新。
      </p>
    </header>

    <!-- 产品信息 -->

    <section class="info-section">
      <h3 class="section-title">当前产品信息</h3>

      <div class="info-cards">
        <div class="info-card">
          <span class="info-label"> 产品名称 </span>

          <span class="info-value">
            {{ product.name }}
          </span>
        </div>

        <div class="info-card">
          <span class="info-label"> 产品价格 </span>

          <span class="info-value"> ￥{{ product.price }} </span>
        </div>

        <div class="info-card">
          <span class="info-label"> 产品型号 </span>

          <span class="info-value">
            {{ product.model }}
          </span>
        </div>

        <div class="info-card info-card--highlight">
          <span class="info-label"> 产品详情 </span>

          <span class="info-value">
            {{ product.detail }}
          </span>
        </div>
      </div>

      <button class="action-btn" @click="updateProduct">更新产品信息</button>
    </section>

    <!-- 子组件 -->

    <section class="info-section">
      <h3 class="section-title">子组件展示</h3>

      <div class="demo-card">
        <ProductComponent
          :name="product.name"
          :price="product.price"
          :defatil="product.detail"
          :model="product.model"
        />
      </div>
    </section>

    <!-- Props说明 -->

    <section class="info-section">
      <h3 class="section-title">Props 更新特点</h3>

      <ul class="compare-list">
        <li class="compare-item">Props 是单向数据流，只能由父组件修改。</li>

        <li class="compare-item">父组件数据变化后，子组件会自动重新渲染。</li>

        <li class="compare-item">子组件不应该直接修改 Props。</li>

        <li class="compare-item">
          Props 可以传递字符串、数字、对象、数组、函数等任意类型。
        </li>
      </ul>
    </section>

    <!-- 源码 -->

    <section class="code-section">
      <h3 class="section-title">当前页面源码</h3>

      <div class="code-panel">
        <div class="code-panel-header">
          <span class="code-dot"></span>
          <span class="code-dot"></span>
          <span class="code-dot"></span>

          <span class="code-filename"> ProductView.vue </span>
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

import ProductComponent from "@/components/ProductComponent.vue";

import vueCode from "!!raw-loader!@/views/ProductView.vue";

const product = ref({
  name: "抗生素",

  price: "333",

  model: "型号3333",

  detail: "产品详情描述信息",
});

function updateProduct() {
  product.value.price = String(Number(product.value.price) + 1);

  product.value.detail = "已更新：" + new Date().toLocaleTimeString();
}
</script>

<style scoped>
.product-page {
  width: 100%;
}

.page-header {
  margin-bottom: 28px;
}

.page-desc {
  color: #606266;

  font-size: 14px;

  line-height: 1.6;
}

.info-section {
  margin-bottom: 30px;

  padding: 20px;

  background: #f8faf9;

  border: 1px solid #e8f0ec;

  border-radius: 8px;
}

.section-title {
  margin-bottom: 14px;

  font-size: 15px;

  font-weight: 600;
}

.info-cards {
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));

  gap: 12px;

  margin-bottom: 18px;
}

.info-card {
  padding: 16px;

  background: white;

  border: 1px solid #ebeef5;

  border-radius: 8px;
}

.info-card--highlight {
  grid-column: span 2;

  background: #f6fffa;

  border-color: #d4edda;
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
}

.action-btn {
  padding: 8px 18px;

  border: none;

  border-radius: 6px;

  background: #42b983;

  color: white;

  cursor: pointer;
}

.action-btn:hover {
  background: #38a36f;
}

.compare-list {
  list-style: none;

  padding: 0;

  margin: 0;
}

.compare-item {
  padding: 12px;

  margin-bottom: 10px;

  background: white;

  border: 1px solid #ebeef5;

  border-radius: 8px;

  line-height: 1.6;
}

.demo-card {
  padding: 20px;

  background: white;

  border: 1px solid #ebeef5;

  border-radius: 8px;
}

.code-panel {
  border-radius: 8px;

  overflow: hidden;

  border: 1px solid #2d2d2d;
}

.code-panel-header {
  display: flex;

  align-items: center;

  padding: 10px 14px;

  background: #2d2d2d;
}

.code-dot {
  width: 10px;

  height: 10px;

  border-radius: 50%;

  margin-right: 6px;
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
}

.code-block {
  margin: 0;

  padding: 16px;

  background: #1e1e1e;

  color: #d4d4d4;

  font-size: 12px;

  max-height: 480px;

  overflow: auto;

  white-space: pre-wrap;

  word-break: break-all;
}
</style>

