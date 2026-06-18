// src/router/index.js
import { createRouter,createWebHistory } from "vue-router"

/* Layout */
import MainLayout from "@/views/MainView.vue"

/* Welcome */
import Welcome from "@/WelcomePage.vue"

/* Level1 */
import VueBasic from "@/views/Level1/VueBasic.vue"
import VueSetup from "@/views/Level1/VueSetup.vue"
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

  /* ================= Layout ================= */
  {
    path: "/main",
    component: MainLayout,
    redirect: "/main/level1/basic",
    children: [

      /* ================= Level1 ================= */
      {
        path: "level1/basic",
        component: VueBasic,
        meta: {
          group: "Level1",
          groupName: "Vue3 基础语法",
          title: "创建Vue项目"
        }
      },
      {
        path: "level1/setup",
        component: VueSetup,
        meta: {
          group: "Level1",
          groupName: "Vue3 基础语法",
          title: "Setup的使用"
        }
      },
      {
        path: "level1/template-base",
        component: ViewTemplateBase,
        meta: {
          group: "Level1",
          groupName: "Vue3 基础语法",
          title: "基础模板语法"
        }
      },
      {
        path: "level1/template-advance",
        component: ViewTemplateAdvance,
        meta: {
          group: "Level1",
          groupName: "Vue3 基础语法",
          title: "高级模板语法"
        }
      },

      /* ================= Level2 ================= */
      {
        path: "level2/ref",
        component: VueRef,
        meta: {
          group: "Level2",
          groupName: "Composition API",
          title: "Ref的使用"
        }
      },
      {
        path: "level2/reactive",
        component: VueReactive,
        meta: {
          group: "Level2",
          groupName: "Composition API",
          title: "Reactive的使用"
        }
      },
      {
        path: "level2/lifecycle",
        component: VueLifecycle,
        meta: {
          group: "Level2",
          groupName: "Composition API",
          title: "Lifecycle的使用"
        }
      },
      {
        path: "level2/nexttick",
        component: ViewNextTick,
        meta: {
          group: "Level2",
          groupName: "Composition API",
          title: "nextTick的使用"
        }
      },

      /* ================= Level3 ================= */
      {
        path: "level3/define-props",
        component: ViewDefineProps,
        meta: {
          group: "Level3",
          groupName: "Vue3组件通信",
          title: "defineProps"
        }
      },
      {
        path: "level3/define-emits",
        component: ViewDefineEmits,
        meta: {
          group: "Level3",
          groupName: "Vue3组件通信",
          title: "defineEmits"
        }
      },
      {
        path: "level3/provide",
        component: ViewProvide,
        meta: {
          group: "Level3",
          groupName: "Vue3组件通信",
          title: "Provide & Inject"
        }
      },
      {
        path: "level3/slot",
        component: ViewSlot,
        meta: {
          group: "Level3",
          groupName: "Vue3组件通信",
          title: "Slot"
        }
      },
      {
        path: "level3/expose",
        component: ViewExpose,
        meta: {
          group: "Level3",
          groupName: "Vue3组件通信",
          title: "Expose"
        }
      },
      {
        path: "level3/define-options",
        component: ViewDefineOptions,
        meta: {
          group: "Level3",
          groupName: "Vue3组件通信",
          title: "DefineOptions"
        }
      },
      {
        path: "level3/teleport",
        component: ViewTeleport,
        meta: {
          group: "Level3",
          groupName: "Vue3组件通信",
          title: "Teleport"
        }
      },
      {
        path: "level3/suspense",
        component: VueSuspense,
        meta: {
          group: "Level3",
          groupName: "Vue3组件通信",
          title: "Suspense"
        }
      },
      {
        path: "level3/dynamic-component",
        component: ViewDynamicComponent,
        meta: {
          group: "Level3",
          groupName: "Vue3组件通信",
          title: "动态组件 & KeepAlive"
        }
      },
      {
        path: "level3/v-model",
        component: ViewVModel,
        meta: {
          group: "Level3",
          groupName: "Vue3组件通信",
          title: "V-Model"
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
          title: "计数器演示"
        }
      },
      {
        path: "basic/product",
        component: ProductView,
        meta: {
          group: "Basic",
          groupName: "基础功能",
          title: "产品信息"
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
          title: "组合式函数"
        }
      },

      /* ================= Level5 ================= */
      {
        path: "level5/pinia",
        component: PiniaLevel5,
        meta: {
          group: "Level5",
          groupName: "企业项目开发",
          title: "Pinia状态管理"
        }
      },
      {
        path: "level5/axios",
        component: AxiosLevel5,
        meta: {
          group: "Level5",
          groupName: "企业项目开发",
          title: "Axios二次封装"
        }
      },
      {
        path: "level5/router",
        component: ViewRouter,
        meta: {
          group: "Level5",
          groupName: "企业项目开发",
          title: "路由管理"
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router