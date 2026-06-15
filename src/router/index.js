// src/router/index.js
import { createRouter, createWebHistory } from "vue-router"

import Welcome from "@/WelcomePage.vue"
/*import Login from "@/LoginPage.vue"*/
import Main from "@/MainPage.vue"

const routes = [
  {
    path: "/",
    redirect: "/Welcome"
  },
  {
    path: "/Welcome",
    component: Welcome
  },
  {
    path: "/main",
    component: Main
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router