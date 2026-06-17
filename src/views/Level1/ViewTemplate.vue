<template>
  <h2>模板语法</h2>
  <ul>
    <li>
      <h3>v-text</h3>
      本质上对innerText赋值
      <div v-text="text"></div>
      <div>{{ text }}</div>
    </li>
    <li>
      <h3>v-html</h3>
      本质上对innerHTML赋值
      <div v-html="html"></div>
      <div :innerHTML="html"></div>
    </li>
    <li>
      <h3>v-bind</h3>
      本质上对指定的属性赋值
      <div v-bind:name="name" class="divClass" v-bind:innerText="name"></div>
      <div :name="name" class="divClass">{{ name }}</div>
    </li>
    <li>
      <h3>v-on</h3>
      本质上指定对应的事件<br />
      <button v-on:click="test">测试按钮</button><br />
      <button @click="test">测试按钮</button>
    </li>
    <li>
      <h3>v-show & v-if & v-else</h3>
      <button @click="ShowOrHide">v-show & v-f切换</button><br />
      <span v-show="show">带功可乐</span>
      <p v-if="show">this is if</p>
      <p v-else>this is else</p>
    </li>
    <li>
      <h3>v-for</h3>
      <ul>
        <li v-for="item in list" :key="item">{{ item }}</li>
      </ul>
    </li>
    <li>
      <h3>v-once</h3>
      <button @click="ChangeOnce">改变once</button>
      <div v-once>有v-once命令：once= {{ once }}</div>
      <div>无v-once命令：once= {{ once }}</div>
    </li>
    <li>
      <h3>v-cloak</h3>
      原先是为了防止闪烁，就是避免出现模板括号,现在几乎不用
      <div v-cloak>
        {{ once }}
      </div>
    </li>
    <li>
      <h3>v-memo</h3>
      设置改变内容，当内容改变时才更新页面
      <button @click="ChangeItems">修改</button>
      <div class="list">
        <div
          v-for="item in items"
          :key="item.id"
          v-memo="[item.isSelected, item.isExpanded]"
          class="item"
        >
          <span class="header">{{ item.title }}----</span>
          <span v-if="item.isExpanded" class="content">
            {{ item.description }}
          </span>
        </div>
      </div>
    </li>
  </ul>
</template>
<script setup>
import { ref } from "vue";
const text = ref("v-text模板");
const html = ref("<button>测试</button>");
const name = ref("v-bind-name");
const show = ref(true);
const list = ref(["孙悟空", "孙悟饭", "孙悟天"]);
const once = ref("第一次加载");
const items=ref([
        { id: 1, title: '标题1', description: '描述1', isSelected: true, isExpanded: true },
        { id: 2, title: '标题2', description: '描述2', isSelected: false, isExpanded: false },
        { id: 3, title: '标题3', description: '描述3', isSelected: false, isExpanded: false },
        { id: 4, title: '标题4', description: '描述4', isSelected: false, isExpanded: false }
      ]);
function test() {
  alert("this is click");
}

function ShowOrHide() {
  show.value = !show.value;
}
function ChangeOnce() {
  once.value = "第二次加载" + Math.random();
}

function ChangeItems(){
    items.value[0].isSelected=false;
    items.value[0].title='标题1'+Math.random();
    items.value[1].title='标题2'+Math.random();
}
</script>
<style scoped>
.divClass {
  border: solid 1px gray;
  width: 100px;
  height: 40px;
}
button {
  cursor: pointer;
}
[v-cloak] {
  display: none;
}
</style>