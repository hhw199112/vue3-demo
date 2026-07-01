// src/router/index.js
import { createRouter,createWebHistory } from "vue-router"

/* Layout */
import MainLayout from "@/views/MainView.vue"

/* Welcome */
import Welcome from "@/WelcomePage.vue"

/* Level1 */
import ViewBasic from "@/views/Level1/ViewBasic.vue"
import VieSetup from "@/views/Level1/ViewSetup.vue"
import ViewTemplateBase from "@/views/Level1/ViewTemplateBase.vue"
import ViewTemplateAdvance from "@/views/Level1/ViewTemplateAdvance.vue"
import ViewEvent from "@/views/Level1/ViewEvent.vue"
import ViewDataBinding from "@/views/Level1/ViewDataBinding.vue"
import ViewClassStyleBinding from "@/views/Level1/ViewClassStyleBinding.vue"
import ViewListRendering from "@/views/Level1/ViewListRendering.vue"
/* Level2 */
import ViewRef from "@/views/Level2/ViewRef.vue"
import ViewReactive from "@/views/Level2/ViewReactive.vue"
import ViewLifecycle from "@/views/Level2/ViewLifecycle.vue"
import ViewNextTick from "@/views/Level2/ViewNextTick.vue"

/* Level3 */
import ViewDefineProps from "@/views/Level3/ViewDefineProps.vue"
import ViewDefineEmits from "@/views/Level3/ViewDefineEmits.vue"
import ViewProvide from "@/views/Level3/ViewProvide.vue"
import ViewSlot from "@/views/Level3/ViewSlot.vue"
import ViewExpose from "@/views/Level3/ViewExpose.vue"
import ViewDefineOptions from "@/views/Level3/ViewDefineOptions.vue"
import ViewTeleport from "@/views/Level3/ViewTeleport.vue"
import VueSuspense from "@/views/Level3/ViewSuspense.vue"
import ViewDynamicComponent from "@/views/Level3/ViewDynamicComponent.vue"
import ViewVModel from "@/views/Level3/ViewVModel.vue"

/* Basic */
/*
import CounterView from "@/views/CounterView.vue"
import ProductView from "@/views/ProductView.vue"*/

/* Level4 */
import ViewComposables from "@/views/Level4/ViewComposables.vue"

/* Level5 */
import ViewPinia from "@/views/Level5/ViewPinia.vue"
import ViewAxios from "@/views/Level5/ViewAxios.vue"
import ViewRouter from "@/views/Level5/ViewRouter.vue"

import Privacy from "@/PrivacyPage.vue"
import AboutPage from "@/AboutPage.vue"
import ContactPage from "@/ContactPage.vue"



const routes = [
  {
    path: "/",
    component:Welcome
    //redirect: "/welcome"
  },

  {
    path: "/welcome",
    component: Welcome,
    meta:{
      title: "Vue3 Learning System 欢迎页：Vue3 核心特性与学习引导 | vue3.tech",
      description: "Vue3 Learning System 是一个用于学习 Vue3 Composition API 的实验性项目，展示 Vue3 的核心特性，包括组合式 API、响应式系统、Teleport、Suspense、Pinia 等内容。欢迎页采用动态背景与动画效果，并将在数秒后自动进入主系统。",
      keywords: "Vue3 Learning System, Vue3 学习系统, Vue3 Composition API, Vue3 特性, Vue3 入门, Vue3 教程"
    }
    
  },
  {
    path:"/privacy",
    component:Privacy
  },
  {
    path:"/about",
    component:AboutPage
  },
  {
    path:"/contact",
    component:ContactPage
  },

  /* ================= Layout ================= */
  {
    path: "/main",
    component: MainLayout,
    redirect: "/main/level1/basic",
    children: [

      /* ================= Level1 ================= */
      {
        path: "level1/basic",
        component: ViewBasic,
        meta: {
          group: "Level1",
          groupName: "Vue3 基础语法",
          subtitle: "创建Vue项目",
          title: 'Vue3 项目创建教程 | vue3.tech',
          description: '使用 Vue CLI 创建 Vue3 项目，包含环境要求、安装步骤、命令示例等完整教程。',
          keywords: 'Vue3 创建项目, Vue CLI, Vue3 教程, Vue3 入门'
        }
      },
      {
        path: "level1/setup",
        component: VieSetup,
        meta: {
          group: "Level1",
          groupName: "Vue3 基础语法",
          subtitle: "Setup的使用",
          title: "Vue3 Setup 教程：ref、computed、watch、方法定义与 Vue2 对比 | vue3.tech",
          description: "Vue3 Setup 组合式 API 全面讲解，包括 ref 响应式数据、computed 计算属性、watch 监听、方法定义方式，以及与 Vue2 的详细对比，并附带完整示例代码与演示。适合 Vue3 初学者快速掌握核心用法。",
          keywords: "Vue3 Setup, Vue3 组合式API, ref, computed, watch, Vue3 教程, Vue2 对比, Vue3 入门"
        }
        
      },
      {
        path: "level1/template-base",
        component: ViewTemplateBase,
        meta: {
          group: "Level1",
          groupName: "Vue3 基础语法",
          subtitle: "基础模板语法",
          title: "Vue3 模板基础语法：v-text、v-html、v-bind、v-on 全面讲解与示例 | vue3.tech",
          description: "Vue3 模板基础语法详解，包括 v-text、v-html、v-bind、v-on 以及插值表达式的使用方式，并提供完整 Demo 演示与应用场景说明，帮助初学者快速掌握 Vue3 模板指令的核心用法。",
          keywords: "Vue3 模板语法, v-text, v-html, v-bind, v-on, Vue3 指令, Vue3 教程, Vue3 入门"
        }
        
      },
      {
        path: "level1/template-advance",
        component: ViewTemplateAdvance,
        meta: {
          group: "Level1",
          groupName: "Vue3 基础语法",
          subtitle: "高级模板语法",
          title: "Vue3 模板高级语法详解：v-show、v-if、v-for、v-once、v-memo 全面示例 | vue3.tech",
          description: "深入讲解 Vue3 模板高级语法，包括 v-show、v-if、v-for、v-once、v-cloak、v-memo 的使用方式、性能差异、适用场景与完整 Demo 示例。通过实际代码演示帮助你快速掌握 Vue3 模板指令的高级用法。",
          keywords: "Vue3 模板语法, Vue3 指令, v-show, v-if, v-for, v-once, v-memo, Vue3 性能优化, Vue3 教程"
        }
      },
      {
        path: "level1/event",
        component: ViewEvent,
        meta: {
          group: "Level1",
          groupName: "Vue3 基础语法",
          subtitle: "事件对象",
          title: "Vue3 事件处理详解：click、input、keyup、事件修饰符与完整示例 | vue3.tech",
          description: "Vue3 事件处理的完整教程，涵盖 click、dblclick、input、focus、blur、keyup.enter 等常见事件类型，并展示事件传参、获取 event 对象、事件修饰符（stop、prevent、once）以及表单与键盘事件的实际应用场景。附带完整示例与源码展示，帮助你全面掌握 Vue3 事件机制。",
          keywords: "Vue3 事件处理, v-on, Vue3 click, Vue3 input, Vue3 keyup, Vue3 事件修饰符, Vue3 教程"
        }
        
      },
      {
        path: "level1/dataBinding",
        component: ViewDataBinding,
        meta: {
          group: "Level1",
          groupName: "Vue3 基础语法",
          subtitle: "数据绑定",
          title: "Vue3 数据绑定详解：插值表达式、v-bind、v-model 与表单控件绑定 | vue3.tech",
          description: "Vue3 数据绑定的完整教程，涵盖插值表达式、v-bind 属性绑定、v-model 双向绑定（trim、number、lazy 修饰符）以及 textarea、radio、checkbox、select 等表单控件绑定。通过示例展示数据与视图同步更新机制，帮助你全面掌握 Vue3 的核心数据绑定能力。",
          keywords: "Vue3 数据绑定, v-bind, v-model, Vue3 表单绑定, Vue3 Mustache, Vue3 教程"
        }
        
        
      },

      {
        path: "level1/classStyleBinding",
        component: ViewClassStyleBinding,
        meta: {
          group: "Level1",
          groupName: "Vue3 基础语法",
          subtitle: "样式绑定",
          title: "Vue3 样式绑定详解：Class 与 Style 动态绑定、企业案例与综合示例 | vue3.tech",
          description: "Vue3 样式绑定的完整教程，涵盖 :class 与 :style 的字符串、对象、数组写法，以及动态样式、菜单高亮、动态进度条等企业级案例。通过示例展示如何在实际项目中灵活控制组件样式，是前端开发中最常用的 Vue3 技能之一。",
          keywords: "Vue3 样式绑定, Vue3 class, Vue3 style, Vue3 动态样式, Vue3 企业案例, Vue3 教程"
        }
        
        
        
      },
      {
        path: "level1/listRendering",
        component: ViewListRendering,
        meta: {
          group: "Level1",
          groupName: "Vue3 基础语法",
          subtitle: "列表渲染",
          title: "Vue3 列表渲染完整指南：v-for 数组、对象、索引、Select、增删操作全场景示例 | vue3.tech",
          description: "Vue3 列表渲染（v-for）全场景教程，涵盖数组循环、索引、对象数组、对象遍历、数字循环、菜单渲染、Select 下拉框循环以及新增/删除操作。提供企业级示例与完整源码展示，帮助你全面掌握 Vue3 中最常用的渲染指令。",
          keywords: "Vue3 列表渲染, Vue3 v-for, Vue3 数组循环, Vue3 对象循环, Vue3 Select 渲染, Vue3 增删操作, Vue3 教程"
        }
        
        
        
        
      },


      

      

      /* ================= Level2 ================= */
      {
        path: "level2/ref",
        component: ViewRef,
        meta: {
          group: "Level2",
          groupName: "Composition API",
          subtitle: "Ref的使用",
          title: "Vue3 ref 使用详解：响应式对象、watch 深度监听与属性监听对比 | vue3.tech",
          description: "Vue3 ref 的完整教程，包含基本类型与对象的响应式处理方式、watch 深度监听与属性监听的区别、用户信息示例演示，以及完整源码展示。帮助你深入理解 ref 的工作机制与最佳实践。",
          keywords: "Vue3 ref, Vue3 响应式, watch 深度监听, watch 属性监听, Vue3 教程, Vue3 组合式API"
        }
        
      },
      {
        path: "level2/reactive",
        component: ViewReactive,
        meta: {
          group: "Level2",
          groupName: "Composition API",
          subtitle: "Reactive的使用",
          title: "Vue3 reactive 深层响应式对象详解：嵌套结构、watch 监听对比与完整示例 | vue3.tech",
          description: "Vue3 reactive 的完整教程，讲解如何创建深层响应式对象、处理嵌套结构、管理数组与对象属性，并对比 watch 深度监听与属性监听的差异。包含用户信息示例、修改演示与完整源码展示，帮助你深入理解 reactive 的工作机制。",
          keywords: "Vue3 reactive, 深层响应式, Vue3 响应式对象, watch 深度监听, watch 属性监听, Vue3 教程, Vue3 组合式API"
        }
        
      },
      {
        path: "level2/lifecycle",
        component: ViewLifecycle,
        meta: {
          group: "Level2",
          groupName: "Composition API",
          subtitle: "Lifecycle的使用",
          title: "Vue3 生命周期详解：onMounted、onBeforeUnmount、onUnmounted 执行顺序与示例 | vue3.tech",
          description: "Vue3 生命周期完整教程，讲解 onMounted、onBeforeUnmount、onUnmounted 的触发时机与执行顺序，并通过状态展示与日志记录进行可视化演示，帮助你快速理解组件从创建到销毁的全过程。",
          keywords: "Vue3 生命周期, onMounted, onBeforeUnmount, onUnmounted, Vue3 组件销毁, Vue3 教程, Vue3 组合式API"
        }
        

      },
      {
        path: "level2/nexttick",
        component: ViewNextTick,
        meta: {
          group: "Level2",
          groupName: "Composition API",
          subtitle: "nextTick的使用",
          title: "Vue3 nextTick() 使用详解：DOM 更新机制、获取最新 DOM、滚动到底部示例 | vue3.tech",
          description: "Vue3 nextTick() 的完整教程，讲解 Vue 的异步 DOM 更新机制，并通过示例对比未使用与使用 nextTick() 的差异，展示如何获取最新 DOM、自动滚动到底部、处理列表更新等常见场景，附带完整源码示例。",
          keywords: "Vue3 nextTick, DOM 更新, Vue3 异步更新, 获取最新 DOM, Vue3 滚动到底部, Vue3 教程, Vue3 组合式API"
        }
        
      },

      /* ================= Level3 ================= */
      {
        path: "level3/define-props",
        component: ViewDefineProps,
        meta: {
          group: "Level3",
          groupName: "Vue3组件通信",
          subtitle: "defineProps",
          title: "Vue3 defineProps 使用详解：父子组件通信、Props 特点与完整示例 | vue3.tech",
          description: "Vue3 defineProps 的完整教程，讲解父组件向子组件传递数据的方式、Props 的核心特点、子组件展示逻辑，并通过商品名称示例演示父子组件通信的响应式更新机制，附带完整源码文件。",
          keywords: "Vue3 defineProps, Vue3 Props, 父子组件通信, Vue3 组件传值, Vue3 教程, Vue3 组合式API"
        }
        
      },
      {
        path: "level3/define-emits",
        component: ViewDefineEmits,
        meta: {
          group: "Level3",
          groupName: "Vue3组件通信",
          subtitle: "defineEmits",
          title: "Vue3 defineEmits 使用详解：子组件向父组件发送事件与参数回传示例 | vue3.tech",
          description: "Vue3 defineEmits 的完整教程，讲解子组件如何通过 emit() 向父组件发送事件，包括 send、delete、delete-with-id、delete-by-props-id 等多种事件触发方式，并展示父组件如何接收参数与处理逻辑，附带完整父子组件源码示例。",
          keywords: "Vue3 defineEmits, Vue3 emit, 子组件向父组件通信, Vue3 事件传递, Vue3 组件通信, Vue3 教程"
        }
        
      },
      {
        path: "level3/provide",
        component: ViewProvide,
        meta: {
          group: "Level3",
          groupName: "Vue3组件通信",
          subtitle: "Provide & Inject",
          title: "Vue3 Provide / Inject 使用详解：跨层级组件通信与响应式数据共享 | vue3.tech",
          description: "Vue3 Provide / Inject 的完整教程，讲解如何在祖先组件与后代组件之间共享数据，避免多层 Props 传递。包含响应式 ref 提供方式、子组件注入示例、动态数据更新演示，以及完整源码文件，帮助你深入理解跨层级组件通信机制。",
          keywords: "Vue3 Provide, Vue3 Inject, 跨层级通信, Vue3 组件通信, Vue3 数据共享, Vue3 教程, Vue3 组合式API"
        }
        
      },
      {
        path: "level3/slot",
        component: ViewSlot,
        meta: {
          group: "Level3",
          groupName: "Vue3组件通信",
          subtitle: "Slot",
          title: "Vue3 插槽 Slots 使用详解：默认插槽、具名插槽、作用域插槽完整示例 | vue3.tech",
          description: "Vue3 插槽（Slots）完整教程，讲解默认插槽、具名插槽与作用域插槽的使用方式，展示父组件如何向子组件传递结构化内容，以及子组件如何通过作用域插槽向父组件暴露数据。附带多个插槽组件的完整源码示例。",
          keywords: "Vue3 插槽, Vue3 Slots, 默认插槽, 具名插槽, 作用域插槽, Vue3 组件内容分发, Vue3 教程"
        }
        
      },
      {
        path: "level3/expose",
        component: ViewExpose,
        meta: {
          group: "Level3",
          groupName: "Vue3组件通信",
          subtitle: "Expose",
          title: "Vue3 defineExpose 使用详解：父组件调用子组件方法与变量的完整示例 | vue3.tech",
          description: "Vue3 defineExpose 的完整教程，讲解如何在 script setup 中向父组件公开变量与方法，使父组件能够通过 ref 获取子组件实例并调用其公开成员。包含方法调用示例、变量读取示例，以及父子组件完整源码展示。",
          keywords: "Vue3 defineExpose, Vue3 子组件方法, Vue3 父组件调用子组件, Vue3 组件实例, Vue3 教程, Vue3 组合式API"
        }
        
      },
      {
        path: "level3/define-options",
        component: ViewDefineOptions,
        meta: {
          group: "Level3",
          groupName: "Vue3组件通信",
          subtitle: "DefineOptions",
          title: "Vue3 子组件使用示例：组件引入与样式传递 | vue3.tech",
          description: "Vue3 子组件使用的基础示例，展示如何在父组件中引入子组件并通过 class 传递样式。适合初学者理解组件复用与样式控制的基本方式。",
          keywords: "Vue3 子组件, Vue3 组件引入, Vue3 class 样式, Vue3 教程, Vue3 组件复用"
        }
        
      },
      {
        path: "level3/teleport",
        component: ViewTeleport,
        meta: {
          group: "Level3",
          groupName: "Vue3组件通信",
          subtitle: "Teleport",
          title: "Vue3 Teleport 使用详解：弹窗、抽屉、全局组件渲染示例 | vue3.tech",
          description: "Vue3 Teleport 的完整教程，讲解如何将组件渲染到 body 或指定 DOM 节点，适用于 Dialog、Drawer、Message、Loading 等全局组件场景。包含弹窗示例、挂载机制说明以及完整源码展示，帮助你深入理解 Teleport 的使用方式。",
          keywords: "Vue3 Teleport, Vue3 弹窗, Vue3 全局组件, Teleport 示例, Vue3 Dialog, Vue3 Drawer, Vue3 教程"
        }
        
      },
      {
        path: "level3/suspense",
        component: VueSuspense,
        meta: {
          group: "Level3",
          groupName: "Vue3组件通信",
          subtitle: "Suspense",
          title: "Vue3 Suspense 使用详解：异步组件加载、Fallback 占位与完整示例 | vue3.tech",
          description: "Vue3 Suspense 的完整教程，讲解如何处理异步组件与异步 setup()，并通过 default 与 fallback 插槽展示加载占位界面。包含 UserInfo 异步加载示例、常见应用场景说明以及完整源码展示，帮助你掌握 Suspense 的实际使用方式。",
          keywords: "Vue3 Suspense, 异步组件, fallback 插槽, Vue3 异步加载, defineAsyncComponent, Vue3 教程, Vue3 组合式API"
        }
        
      },
      {
        path: "level3/dynamic-component",
        component: ViewDynamicComponent,
        meta: {
          group: "Level3",
          groupName: "Vue3组件通信",
          subtitle: "动态组件 & KeepAlive",
          title: "Vue3 动态组件与 KeepAlive 使用详解：组件缓存、状态保留与完整示例 | vue3.tech",
          description: "Vue3 动态组件与 KeepAlive 的完整教程，讲解如何通过 component 切换组件，并使用 KeepAlive 缓存组件实例以保留内部状态。包含 exclude 排除缓存示例、无 KeepAlive 对比示例，以及 Tab 标签页、表单、后台系统等常见应用场景与完整源码展示。",
          keywords: "Vue3 KeepAlive, Vue3 动态组件, component is, 组件缓存, Vue3 exclude include, Vue3 状态保留, Vue3 教程"
        }
        
      },
      {
        path: "level3/v-model",
        component: ViewVModel,
        meta: {
          group: "Level3",
          groupName: "Vue3组件通信",
          subtitle: "V-Model",
          title: "Vue3 自定义组件 v-model 使用详解：双向绑定机制与完整示例 | vue3.tech",
          description: "Vue3 自定义组件 v-model 的完整教程，讲解 v-model 的底层原理（modelValue + update:modelValue），并通过 UserInput 示例展示父子组件之间的双向绑定机制。包含多个 v-model 的使用说明、常见应用场景以及完整源码展示。",
          keywords: "Vue3 v-model, 自定义组件 v-model, modelValue, update:modelValue, Vue3 双向绑定, Vue3 Input 组件, Vue3 教程"
        }
        
      },

      /* ================= Basic ================= */
      /*
      {
        path: "basic/counter",
        component: CounterView,
        meta: {
          group: "Basic",
          groupName: "基础功能",
          subtitle: "计数器演示"
        }
      },
      {
        path: "basic/product",
        component: ProductView,
        meta: {
          group: "Basic",
          groupName: "基础功能",
          subtitle: "产品信息"
        }
      },
      */
      /* ================= Level4 ================= */
      {
        path: "level4/composable",
        component: ViewComposables,
        meta: {
          group: "Level4",
          groupName: "Vue3企业开发核心",
          subtitle: "组合式函数",
          title: "Vue3 组合式函数 Composables 使用详解：逻辑抽离与复用完整示例 | vue3.tech",
          description: "Vue3 组合式函数（Composables）完整教程，讲解如何将业务逻辑抽离到独立函数中，实现多个组件共享同一逻辑。包含 useCounter、useUser 的封装示例、状态展示、逻辑复用说明以及完整源码展示，是 Composition API 的核心实践方式。",
          keywords: "Vue3 Composables, 组合式函数, useCounter, useUser, Vue3 逻辑复用, Composition API, Vue3 教程"
        }
        
      },

      /* ================= Level5 ================= */
      {
        path: "level5/pinia",
        component: ViewPinia,
        meta: {
          group: "Level5",
          groupName: "企业项目开发",
          subtitle: "Pinia状态管理",
          title: "Pinia 状态管理使用详解：state、getters、actions 示例演示 | vue3.tech",
          description: "Pinia 状态管理的完整教程，展示如何使用 state、getters 与 actions 管理全局共享状态。通过 useUserStore 示例演示状态读取、修改与 getter 计算属性，并附带完整的 store 与页面源码，帮助你快速掌握 Pinia 的核心用法。",
          keywords: "Pinia, Vue3 状态管理, Pinia state, Pinia getters, Pinia actions, useUserStore, Vue3 全局状态"
        }
        
      },
      {
        path: "level5/axios",
        component: ViewAxios,
        meta: {
          group: "Level5",
          groupName: "企业项目开发",
          subtitle: "Axios二次封装",
          title: "Axios 数据请求使用详解：封装 request 实例与异步接口调用示例 | vue3.tech",
          description: "Axios 数据请求的完整教程，展示如何封装 request 实例并在组件中通过 getData 异步获取接口数据。包含加载状态处理、表格数据展示、接口封装结构以及完整源码文件，适用于 Vue3 项目中的网络请求实践。",
          keywords: "Axios, Vue3 Axios, request 封装, 异步请求, getData 示例, Vue3 接口调用, 前端数据请求"
        }
        
      },
      {
        path: "level5/router",
        component: ViewRouter,
        meta: {
          group: "Level5",
          groupName: "企业项目开发",
          subtitle: "路由管理",
          title: "Vue Router 路由管理使用详解：路由配置、页面跳转与完整示例 | vue3.tech",
          description: "Vue Router 的完整教程，讲解如何在 Vue3 中配置路由、注册 Router、使用 router-view 渲染页面，并通过 push 或 router-link 实现页面跳转。包含 RootPage、LoginPage、App、index.js、main.js 等完整源码示例，帮助你快速掌握 SPA 路由管理。",
          keywords: "Vue Router, Vue3 路由, SPA 路由管理, router-view, router-link, push 跳转, Vue3 教程"
        }
        
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  // 设置标题
  if (to.meta.title) {
    document.title = to.meta.title
  }

  const setMeta = (name, content) => {
    if (!content) return

    let meta = document.querySelector(`meta[name="${name}"]`)

    // 如果不存在则创建
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', name)
      document.head.appendChild(meta)
    }

    // 更新内容
    meta.setAttribute('content', content)
  }

  // 设置 description
  setMeta('description', to.meta.description)

  // 设置 keywords
  setMeta('keywords', to.meta.keywords)

  next()
})


export default router