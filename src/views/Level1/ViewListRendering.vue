<template>
    <div class="vue-list-rendering">
  
      <!-- ================= Header ================= -->
      <header class="page-header">
        <h2>Vue3 列表渲染（v-for 全场景）</h2>
        <p class="page-desc">
          v-for 用于数组、对象、数字循环，是 Vue 中最常用的渲染指令之一，适用于绝大多数业务列表结构。
        </p>
      </header>
  
      <!-- ================= 1 ================= -->
      <section class="info-section">
        <h3 class="section-title">1. 普通数组循环</h3>
  
        <div class="demo-card">
          <ul>
            <li v-for="item in names" :key="item">
              {{ item }}
            </li>
          </ul>
        </div>
      </section>
  
      <!-- ================= 2 ================= -->
      <section class="info-section">
        <h3 class="section-title">2. Index索引</h3>
  
        <div class="demo-card">
          <ul>
            <!-- 循环names数组，第一个1itemVal是数组元素，第二个参数indexVal是数组索引 -->
            <li v-for="(itemVal,indexVal) in names" :key="itemVal">
              {{ indexVal }} — {{ itemVal }}
            </li>
          </ul>
        </div>
      </section>
  
      <!-- ================= 3 ================= -->
      <section class="info-section">
        <h3 class="section-title">3. 对象数组（企业最常用）</h3>
  
        <div class="demo-card">
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>姓名</th>
                <th>年龄</th>
              </tr>
            </thead>
  
            <tbody>
              <tr v-for="user in users" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.age }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
  
      <!-- ================= 4 ================= -->
      <section class="info-section">
        <h3 class="section-title">4. 对象循环</h3>
  
        <div class="demo-card">
          <ul>
            <!-- 循环person对象，第一个参数value是对象的值，第二个参数key是对象的键 -->
            <li v-for="(value,key) in person" :key="key">
              {{ key }} ： {{ value }}
            </li>
          </ul>
        </div>
      </section>
  
      <!-- ================= 5 ================= -->
      <section class="info-section">
        <h3 class="section-title">5. 数字循环</h3>
  
        <div class="demo-card">
          <span v-for="item in 10" :key="item" class="num-box">
            {{ item }}
          </span>
        </div>
      </section>
  
      <!-- ================= 6 ================= -->
      <section class="info-section">
        <h3 class="section-title">6. 菜单案例</h3>
  
        <div class="demo-card">
          <ul class="menu">
            <li
              v-for="menu in menus"
              :key="menu.id"
              :class="{ active: currentMenu === menu.id }"
              @click="currentMenu = menu.id"
            >
              {{ menu.name }}
            </li>
          </ul>
        </div>
      </section>
  
      <!-- ================= 7 ================= -->
      <section class="info-section">
        <h3 class="section-title">7. Select循环</h3>
  
        <div class="demo-card">
          <select v-model="cityId">
            <option v-for="city in cities" :key="city.id" :value="city.id">
              {{ city.name }}
            </option>
          </select>
  
          <p class="result">当前选择：{{ cityId }}</p>
        </div>
      </section>
  
      <!-- ================= 8 ================= -->
      <section class="info-section">
        <h3 class="section-title">8. 新增 / 删除</h3>
  
        <div class="demo-card">
          <button class="btn" @click="addUser">新增用户</button>
          <button class="btn danger" @click="removeUser">删除第一位</button>
  
          <table class="table">
            <tbody>
              <tr v-for="user in users" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.age }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
  
      <!-- ================= 源码 ================= -->
      <section class="code-section">
      <h3 class="section-title">源码文件</h3>
      <div class="code-panels">
        <div class="code-panel">
          <div class="code-panel-header">
            <span class="code-dot"></span>
            <span class="code-dot"></span>
            <span class="code-dot"></span>
            <span class="code-filename"> ViewListRendering.vue </span>
          </div>
          <pre class="code-block"><code>{{ vueCode }}</code></pre>
        </div>
      </div>
    </section>
  
    </div>
  </template>

<script setup>
import { ref } from "vue";

/* 源码 */
import vueCode from "!!raw-loader!@/views/Level1/ViewListRendering.vue";

/* data */
const names = ref(["张三", "李四", "王五", "赵六", "孙七"]);

const users = ref([
  { id: 1, name: "张三", age: 20 },
  { id: 2, name: "李四", age: 21 },
  { id: 3, name: "王五", age: 22 }
]);

const person = ref({
  name: "张三",
  age: 20,
  sex: "男",
  city: "南京",
  job: "Java工程师"
});

const menus = ref([
  { id: 1, name: "首页" },
  { id: 2, name: "用户管理" },
  { id: 3, name: "订单管理" }
]);

const currentMenu = ref(1);

const cities = ref([
  { id: 1, name: "南京" },
  { id: 2, name: "上海" },
  { id: 3, name: "北京" }
]);

const cityId = ref(1);

/* methods */
function addUser() {
  users.value.push({
    id: Date.now(),
    name: "新用户",
    age: 18
  });
}

function removeUser() {
  if (users.value.length === 0) return;
  users.value.shift();
}
</script>

<style scoped>
.vue-list-rendering {
  width: 100%;
}

/* header */
.page-header {
  margin-bottom: 28px;
}

.page-desc {
  margin: 0;
  color: #606266;
  font-size: 14px;
  line-height: 1.6;
}

/* section */
.info-section {
  margin-bottom: 32px;
  padding: 20px;
  background: #f8faf9;
  border: 1px solid #e8f0ec;
  border-radius: 8px;
}

.section-title {
  margin: 0 0 14px;
  font-size: 15px;
  font-weight: 600;
  color: #303133;
}

/* demo */
.demo-card {
  background: #fff;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #ebeef5;
}

/* table */
.table {
  width: 100%;
  border-collapse: collapse;
}

.table th,
.table td {
  border: 1px solid #ebeef5;
  padding: 10px;
  text-align: center;
}

/* menu */
.menu {
  display: flex;
  gap: 10px;
  padding: 0;
  list-style: none;
}

.menu li {
  padding: 6px 12px;
  border: 1px solid #dcdfe6;
  cursor: pointer;
}

.menu li.active {
  background: #42b983;
  color: #fff;
}

/* number */
.num-box {
  display: inline-block;
  width: 28px;
  height: 28px;
  margin: 3px;
  text-align: center;
  line-height: 28px;
  background: #e6f7ff;
  border-radius: 4px;
}

/* buttons */
.btn {
  padding: 6px 12px;
  margin-right: 8px;
  border: none;
  background: #409eff;
  color: #fff;
  cursor: pointer;
}

.btn.danger {
  background: #f56c6c;
}

/* code */
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