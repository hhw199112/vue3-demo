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

/* Level2 */
import VueRef from "@/views/Level2/VueRef.vue"
import VueReactive from "@/views/Level2/VueReactive.vue"
import VueLifecycle from "@/views/Level2/VueLifecycle.vue"
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
import UseCounterComponent from "@/views/Level4/ViewComposables.vue"

/* Level5 */
import PiniaLevel5 from "@/views/Level5/PiniaLevel5.vue"
import AxiosLevel5 from "@/views/Level5/AxiosLevel5.vue"
import ViewRouter from "@/views/Level5/ViewRouter.vue"

import Privacy from "@/PrivacyPage.vue"
import AboutPage from "@/AboutPage.vue"
import ContactPage from "@/ContactPage.vue"

const routes = [
  {
    path: "/",
    redirect: "/welcome"
  },

  {
    path: "/welcome",
    component: Welcome
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

      /* ================= Level2 ================= */
      {
        path: "level2/ref",
        component: VueRef,
        meta: {
          group: "Level2",
          groupName: "Composition API",
          subtitle: "Ref的使用"
        }
      },
      {
        path: "level2/reactive",
        component: VueReactive,
        meta: {
          group: "Level2",
          groupName: "Composition API",
          subtitle: "Reactive的使用"
        }
      },
      {
        path: "level2/lifecycle",
        component: VueLifecycle,
        meta: {
          group: "Level2",
          groupName: "Composition API",
          subtitle: "Lifecycle的使用"
        }
      },
      {
        path: "level2/nexttick",
        component: ViewNextTick,
        meta: {
          group: "Level2",
          groupName: "Composition API",
          subtitle: "nextTick的使用"
        }
      },

      /* ================= Level3 ================= */
      {
        path: "level3/define-props",
        component: ViewDefineProps,
        meta: {
          group: "Level3",
          groupName: "Vue3组件通信",
          subtitle: "defineProps"
        }
      },
      {
        path: "level3/define-emits",
        component: ViewDefineEmits,
        meta: {
          group: "Level3",
          groupName: "Vue3组件通信",
          subtitle: "defineEmits"
        }
      },
      {
        path: "level3/provide",
        component: ViewProvide,
        meta: {
          group: "Level3",
          groupName: "Vue3组件通信",
          subtitle: "Provide & Inject"
        }
      },
      {
        path: "level3/slot",
        component: ViewSlot,
        meta: {
          group: "Level3",
          groupName: "Vue3组件通信",
          subtitle: "Slot"
        }
      },
      {
        path: "level3/expose",
        component: ViewExpose,
        meta: {
          group: "Level3",
          groupName: "Vue3组件通信",
          subtitle: "Expose"
        }
      },
      {
        path: "level3/define-options",
        component: ViewDefineOptions,
        meta: {
          group: "Level3",
          groupName: "Vue3组件通信",
          subtitle: "DefineOptions"
        }
      },
      {
        path: "level3/teleport",
        component: ViewTeleport,
        meta: {
          group: "Level3",
          groupName: "Vue3组件通信",
          subtitle: "Teleport"
        }
      },
      {
        path: "level3/suspense",
        component: VueSuspense,
        meta: {
          group: "Level3",
          groupName: "Vue3组件通信",
          subtitle: "Suspense"
        }
      },
      {
        path: "level3/dynamic-component",
        component: ViewDynamicComponent,
        meta: {
          group: "Level3",
          groupName: "Vue3组件通信",
          subtitle: "动态组件 & KeepAlive"
        }
      },
      {
        path: "level3/v-model",
        component: ViewVModel,
        meta: {
          group: "Level3",
          groupName: "Vue3组件通信",
          subtitle: "V-Model"
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
        component: UseCounterComponent,
        meta: {
          group: "Level4",
          groupName: "Vue3企业开发核心",
          subtitle: "组合式函数"
        }
      },

      /* ================= Level5 ================= */
      {
        path: "level5/pinia",
        component: PiniaLevel5,
        meta: {
          group: "Level5",
          groupName: "企业项目开发",
          subtitle: "Pinia状态管理"
        }
      },
      {
        path: "level5/axios",
        component: AxiosLevel5,
        meta: {
          group: "Level5",
          groupName: "企业项目开发",
          subtitle: "Axios二次封装"
        }
      },
      {
        path: "level5/router",
        component: ViewRouter,
        meta: {
          group: "Level5",
          groupName: "企业项目开发",
          subtitle: "路由管理"
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