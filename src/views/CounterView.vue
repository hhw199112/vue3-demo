
<template>
  <div class="vue-demo">
    <!-- 页面标题 -->

    <header class="page-header">
      <h2>Vue3 综合示例</h2>

      <p class="page-desc">
        本示例演示
        ref、reactive、computed、watch、v-model、v-for、生命周期等常见 API。
      </p>
    </header>

    <!-- 基础数据 -->

    <section class="info-section">
      <h3 class="section-title">基础数据</h3>

      <div class="info-cards">
        <div class="info-card">
          <span class="info-label"> 标题 </span>

          <span class="info-value">
            {{ text }}
          </span>
        </div>

        <div class="info-card">
          <span class="info-label"> count </span>

          <span class="info-value">
            {{ num }}
          </span>
        </div>

        <div class="info-card">
          <span class="info-label"> age </span>

          <span class="info-value">
            {{ user.age }}
          </span>
        </div>
      </div>

      <button class="action-btn" @click="add">增加</button>

      <button class="action-btn danger" @click="minus">减少</button>
    </section>

    <!-- computed -->

    <section class="info-section">
      <h3 class="section-title">Computed 计算属性</h3>

      <div class="demo-card">
        <p>
          数量：

          <input v-model="size" />
        </p>

        <p>
          单价：

          <input v-model="price" />
        </p>

        <p>
          {{ size }} × {{ price }} =

          <strong>{{ total }}</strong>
        </p>
      </div>
    </section>

    <!-- watch -->

    <section class="info-section">
      <h3 class="section-title">Watch 监听说明</h3>

      <ul class="compare-list">
        <li class="compare-item">watch(num) 监听 ref</li>

        <li class="compare-item">
          watch(size,{ immediate:true }) 页面初始化立即执行
        </li>

        <li class="compare-item">watch(()=>user.age) 监听 reactive 指定属性</li>
      </ul>
    </section>

    <!-- v-for -->

    <section class="info-section">
      <h3 class="section-title">v-for 渲染</h3>

      <div class="demo-card">
        <ul>
          <li v-for="item in list" :key="item">
            {{ item }}
          </li>
        </ul>
      </div>
    </section>

    <!-- 源码 -->

    <section class="code-section">
      <h3 class="section-title">当前源码</h3>

      <div class="code-panel">
        <div class="code-panel-header">
          <span class="code-dot"></span>

          <span class="code-dot"></span>

          <span class="code-dot"></span>

          <span class="code-filename"> CounterView.vue </span>
        </div>

        <pre class="code-block">
<code>{{ vueCode }}</code>
        </pre>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted, reactive, ref, watch } from "vue";

import vueCode from "!!raw-loader!@/views/CounterView.vue";

const text = "白色巨塔";

const num = ref(1);

const user = reactive({
  name: "age",

  age: 33,
});

const size = ref(0);

const price = ref(0);

const list = ref([]);

const total = computed(() => {
  return size.value * price.value;
});

function add() {
  num.value++;

  user.age = num.value;
}

function minus() {
  num.value--;
}

watch(num, (newVal, oldVal) => {
  console.log(newVal, oldVal);
});

watch(
  size,
  (newVal) => {
    console.log(newVal);
  },
  {
    immediate: true,
  }
);

watch(
  () => user.age,
  (newVal) => {
    console.log(newVal);
  }
);

onMounted(() => {
  list.value = ["Vue", "React", "Angular", "Node", "SpringBoot"];
});
</script>

<style scoped>
.vue-demo {
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

  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));

  gap: 12px;

  margin-bottom: 18px;
}

.info-card {
  padding: 16px;

  background: white;

  border: 1px solid #ebeef5;

  border-radius: 8px;
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
}

.action-btn {
  padding: 8px 16px;

  margin-right: 10px;

  border: none;

  border-radius: 6px;

  background: #42b983;

  color: white;

  cursor: pointer;
}

.danger {
  background: #f56c6c;
}

.demo-card {
  padding: 18px;

  background: white;

  border: 1px solid #ebeef5;

  border-radius: 8px;
}

.compare-list {
  list-style: none;

  padding: 0;
}

.compare-item {
  padding: 12px;

  margin-bottom: 10px;

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

  max-height: 500px;

  overflow: auto;

  white-space: pre-wrap;

  word-break: break-all;
}
</style>

