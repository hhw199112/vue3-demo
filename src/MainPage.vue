<template>
  <MainLayout :menus="menus" />
</template>

<script setup>
import MainLayout from "./views/MainView.vue";
import UseCounterComponent from "./views/Level4/ViewComposables.vue";
import CounterView from "./views/CounterView.vue";
import ProductView from "./views/ProductView.vue";
import PiniaLevel5 from "./views/Level5/PiniaLevel5.vue";
import AxiosLevel5 from "./views/Level5/AxiosLevel5.vue";
import VueBasic from "./views/Level1/VueBasic.vue";
import VueSetup from "./views/Level1/VueSetup.vue";
import VueRef from "./views/Level2/VueRef.vue";
import VueReactive from "./views/Level2/VueReactive.vue";
import VueLifecycle from "./views/Level2/VueLifecycle.vue";
import ViewDefineProps from "./views/Level3/ViewDefineProps.vue";
import ViewDefineEmits from "./views/Level3/ViewDefineEmits.vue";
import ViewProvide from "./views/Level3/ViewProvide.vue";
import ViewRouter from "./views/Level5/ViewRouter.vue";
import ViewSlot from "./views/Level3/ViewSlot.vue";
import ViewExpose from "./views/Level3/ViewExpose.vue";
import ViewDefineOptions from "./views/Level3/ViewDefineOptions.vue";
import ViewTeleport from "./views/Level3/ViewTeleport.vue";
const menus = [
  {
    id: "Level1",
    label: "Vue3 基础语法",
    children: [
      { id: "viewBasic", label: "创建vue项目", component: VueBasic },
      { id: "viewSetup", label: "Setup的使用", component: VueSetup },
    ],
  },
  {
    id: "Level2",
    label: "Composition API",
    children: [
      { id: "VueRef", label: "Ref的使用", component: VueRef },
      { id: "VueReactive", label: "Reactive的使用", component: VueReactive },
      { id: "VueLifecycle", label: "Lifecycle的使用", component: VueLifecycle },
    ],
  },
  {
    id: "Level3",
    label: "Vue3 组件通信",
    children: [
      {
        id: "ViewDefineProps",
        label: "父传子defineProps",
        component: ViewDefineProps,
      },
      {
        id: "ViewDefineEmits",
        label: "子传父defineEmits",
        component: ViewDefineEmits,
      },
      { id: "ViewProvide", label: "Provide & Inject", component: ViewProvide },
      { id: "ViewSlot", label: "插槽", component: ViewSlot },
      { id: "ViewExpose", label: "Expose", component: ViewExpose },
      {id:"ViewDefineOptions",label:"DefineOptions",component:ViewDefineOptions},
      {id:"ViewTeleport",label:"Teleport",component:ViewTeleport}
    ],
  },
  {
    id: "basic",
    label: "基础功能",
    children: [
      { id: "counter", label: "计数器演示", component: CounterView },
      { id: "product", label: "产品信息", component: ProductView },
    ],
  },
  {
    id: "Level4",
    label: "Vue3 企业开发核心",
    children: [
      { id: "composable", label: "组合式函数", component: UseCounterComponent },
    ],
  },
  {
    id: "Level5",
    label: "企业项目开发",
    children: [
      { id: "pinia", label: "Pinia 状态管理", component: PiniaLevel5 },
      { id: "axios", label: "Axios 二次封装", component: AxiosLevel5 },
      { id: "ViewRouter", label: "路由管理", component: ViewRouter },
    ],
  },
];
</script>

<style>
* {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  margin: 0;
  overflow: hidden;
}

#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  overflow: hidden;
}
</style>
