<template>
  <div class="vue-style">
    <!-- 页面标题 -->
    <header class="page-header">
      <h2>Vue3 样式绑定（Class 与 Style）</h2>

      <p class="page-desc">
        Vue 可以通过 <strong>:class</strong> 与
        <strong>:style</strong> 实现动态样式绑定，
        这是企业项目中最常用的功能之一。
      </p>
    </header>

    <!-- 样式绑定介绍 -->

    <section class="info-section">
      <h3 class="section-title">样式绑定方式</h3>

      <ul class="compare-list">
        <li class="compare-item">Class 字符串绑定</li>

        <li class="compare-item">Class Object 写法</li>

        <li class="compare-item">Class Array 写法</li>

        <li class="compare-item">Style Object 写法</li>

        <li class="compare-item">Style Array 写法</li>

        <li class="compare-item">企业项目动态样式</li>
      </ul>
    </section>

    <!-- Class绑定 -->

    <section class="info-section">
      <h3 class="section-title">Class 动态绑定</h3>

      <div class="demo-grid">
        <!-- Boolean -->

        <div class="demo-card">
          <h4>Boolean 控制 Class</h4>

          <div class="box" :class="{ active: isActive }">Hello Vue3</div>

          <button class="action-btn" @click="toggleActive">切换 Active</button>
        </div>

        <!-- Object -->

        <div class="demo-card">
          <h4>Object 写法</h4>

          <div
            class="box"
            :class="{
              active: isActive,
              error: isError,
            }"
          >
            多个 Class
          </div>

          <button class="action-btn" @click="toggleError">Error</button>
        </div>

        <!-- Array -->

        <div class="demo-card">
          <h4>Array 写法</h4>

          <div class="box" :class="[class1, class2]">Array Class</div>

          <button class="action-btn" @click="switchArrayClass">切换</button>
        </div>

        <!-- String -->

        <div class="demo-card">
          <h4>字符串写法</h4>

          <div class="box" :class="className">String Class</div>

          <button class="action-btn" @click="switchStringClass">切换</button>
        </div>
      </div>
    </section>

    <!-- Style绑定 -->

    <section class="info-section">
      <h3 class="section-title">Style 动态绑定</h3>

      <div class="demo-grid">
        <div class="demo-card">
          <h4>Style Object</h4>

          <div class="box" :style="styleObject">Style Object</div>
        </div>

        <div class="demo-card">
          <h4>Style Array</h4>

          <div class="box" :style="[style1, style2]">Style Array</div>
        </div>

        <div class="demo-card">
          <h4>动态 Style</h4>

          <div
            class="box"
            :style="{
              color: textColor,
              fontSize: fontSize + 'px',
            }"
          >
            Dynamic Style
          </div>

          <button class="action-btn" @click="increaseFont">字体+</button>

          <button class="action-btn" @click="changeColor">换颜色</button>
        </div>
      </div>
    </section>

    <!-- 企业案例 -->

    <section class="info-section">
      <h3 class="section-title">企业案例</h3>

      <div class="demo-grid">
        <!-- 菜单 -->

        <div class="demo-card">
          <h4>菜单高亮</h4>

          <ul class="menu">
            <li
              v-for="item in menus"
              :key="item.id"
              :class="{ active: currentMenu === item.id }"
              @click="currentMenu = item.id"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>

        <!-- Progress -->

        <div class="demo-card">
          <h4>动态进度条</h4>

          <div class="progress">
            <div
              class="progress-inner"
              :style="{
                width: progress + '%',
              }"
            ></div>
          </div>

          <div class="result-box">{{ progress }}%</div>

          <button class="action-btn" @click="progress += 10">+10%</button>

          <button class="action-btn danger" @click="progress = 0">重置</button>
        </div>
      </div>
    </section>

    <!-- 综合案例 -->

    <section class="info-section">
      <h3 class="section-title">综合案例</h3>

      <div
        class="box demo-box"
        :class="{
          active: isActive,
          error: isError,
        }"
        :style="{
          color: textColor,
          fontSize: fontSize + 'px',
        }"
      >
        综合效果演示
      </div>
    </section>

    <!-- 源码展示 -->

    <section class="code-section">
      <h3 class="section-title">源码展示</h3>

      <div class="code-panel">
        <div class="code-panel-header">
          <span class="code-dot"></span>
          <span class="code-dot"></span>
          <span class="code-dot"></span>

          <span class="code-filename"> ViewClassStyleBinding.vue </span>
        </div>

        <pre class="code-block"><code>{{ vueCode }}</code></pre>
      </div>
    </section>
  </div>
</template>


<script setup>
import { ref } from "vue";

/**
 * 源码展示
 */
import vueCode from "!!raw-loader!@/views/Level1/ViewClassStyleBinding.vue";

/* =====================================================
 * 1. Boolean 控制 Class
 * ===================================================== */

const isActive = ref(false);

function toggleActive() {
  isActive.value = !isActive.value;
}

/* =====================================================
 * 2. Object 写法
 * ===================================================== */

const isError = ref(false);

function toggleError() {
  isError.value = !isError.value;
}

/* =====================================================
 * 3. Array 写法
 * ===================================================== */

const class1 = ref("active");
const class2 = ref("large");

function switchArrayClass() {
  class1.value =
    class1.value === "active"
      ? "error"
      : "active";
}

/* =====================================================
 * 4. 字符串写法
 * ===================================================== */

const className = ref("active");

function switchStringClass() {
  className.value =
    className.value === "active"
      ? "error"
      : "active";
}

/* =====================================================
 * 5. Style Object
 * ===================================================== */

const styleObject = ref({
  color: "#409EFF",
  fontSize: "24px",
  background: "#ECF5FF",
  padding: "18px",
  borderRadius: "8px",
  textAlign: "center",
});

/* =====================================================
 * 6. Style Array
 * ===================================================== */

const style1 = {
  color: "#F56C6C",
};

const style2 = {
  fontSize: "28px",
  fontWeight: "bold",
};

/* =====================================================
 * 7. 动态 Style
 * ===================================================== */

const textColor = ref("#303133");

const fontSize = ref(20);

function increaseFont() {
  fontSize.value += 2;
}

function changeColor() {

  if (textColor.value === "#303133") {

    textColor.value = "#409EFF";

  } else if (textColor.value === "#409EFF") {

    textColor.value = "#67C23A";

  } else if (textColor.value === "#67C23A") {

    textColor.value = "#E6A23C";

  } else {

    textColor.value = "#303133";

  }

}

/* =====================================================
 * 8. 菜单高亮
 * ===================================================== */

const menus = ref([
  {
    id: 1,
    name: "首页",
  },
  {
    id: 2,
    name: "商品管理",
  },
  {
    id: 3,
    name: "订单管理",
  },
  {
    id: 4,
    name: "系统设置",
  },
]);

const currentMenu = ref(1);

/* =====================================================
 * 9. 动态进度条
 * ===================================================== */

const progress = ref(30);
</script>
<style scoped>
.vue-style {
  width: 100%;
  padding: 10px 0;
  overflow-x: hidden;
}

/* =====================================
   页面标题
===================================== */

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
  line-height: 1.8;
  color: #606266;
  font-size: 14px;
}

/* =====================================
   通用Section
===================================== */

.info-section {
  margin-bottom: 28px;
  padding: 20px;
  background: #f8fafc;
  border: 1px solid #ebeef5;
  border-radius: 10px;
}

.section-title {
  margin-bottom: 18px;
  color: #303133;
  font-size: 16px;
  font-weight: 600;
}

/* =====================================
   说明列表
===================================== */

.compare-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.compare-item {
  margin-bottom: 10px;
  padding: 12px 15px;
  background: white;
  border: 1px solid #ebeef5;
  border-radius: 8px;
}

/* =====================================
   Demo布局
===================================== */

.demo-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
}

.demo-card {
  background: white;
  border-radius: 10px;
  border: 1px solid #ebeef5;
  padding: 18px;
  transition: all .25s;
}

.demo-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(0,0,0,.08);
}

.demo-card h4 {
  margin: 0 0 15px;
  color: #303133;
}

/* =====================================
   Button
===================================== */

.action-btn {
  margin-top: 15px;
  margin-right: 10px;

  padding: 8px 18px;

  border: none;

  border-radius: 6px;

  background: #42b983;

  color: white;

  cursor: pointer;

  transition: .25s;
}

.action-btn:hover {
  background: #38a06d;
}

.action-btn.danger {
  background: #f56c6c;
}

.action-btn.danger:hover {
  background: #e54d4d;
}

/* =====================================
   演示Box
===================================== */

.box {

  margin-top: 12px;

  padding: 20px;

  border: 1px solid #dcdfe6;

  border-radius: 8px;

  transition: .3s;

  text-align: center;

}

/* Active */

.active {

  background: #42b983;

  color: white;

}

/* Error */

.error {

  border: 2px solid #f56c6c;

  background: #fff4f4;

}

/* Large */

.large {

  font-size: 28px;

}

/* =====================================
   Menu
===================================== */

.menu {

  padding: 0;

  margin: 0;

  display: flex;

  list-style: none;

  flex-wrap: wrap;

  gap: 12px;

}

.menu li {

  padding: 10px 22px;

  background: white;

  border-radius: 6px;

  border: 1px solid #dcdfe6;

  cursor: pointer;

  transition: .25s;

}

.menu li:hover {

  background: #ecf5ff;

}

.menu li.active {

  background: #409EFF;

  color: white;

}

/* =====================================
   Progress
===================================== */

.progress {

  width: 100%;

  height: 24px;

  border-radius: 20px;

  overflow: hidden;

  background: #ebeef5;

  margin: 20px 0;

}

.progress-inner {

  height: 100%;

  background: linear-gradient(
      90deg,
      #42b983,
      #67c23a
  );

  transition: .35s;

}

/* =====================================
   综合案例
===================================== */

.demo-box {

  width: 320px;

  margin: auto;

}

/* =====================================
   结果
===================================== */

.result-box {

  margin-top: 15px;

  color: #409EFF;

  font-size: 13px;

}

/* =====================================
   VSCode源码窗口
===================================== */

.code-section {

  margin-top: 10px;

}

.code-panel {

  overflow: hidden;

  border-radius: 10px;

  border: 1px solid #2d2d2d;

  box-shadow: 0 6px 18px rgba(0,0,0,.12);

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

  color: #bdbdbd;

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

  white-space: pre-wrap;

  word-break: break-word;

  max-height: 520px;

  overflow: auto;

  font-family: Consolas, Monaco, monospace;

}

/* =====================================
   响应式
===================================== */

@media (max-width: 900px) {

  .demo-grid {

    grid-template-columns: 1fr;

  }

}

@media (max-width: 600px) {

  .menu {

    flex-direction: column;

  }

}
</style>