import { createApp } from "vue";
import App from "./RootPage.vue";
import router from "./router";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"
const app = createApp(App);
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.use(router);
app.mount("#app");

// 🔥 关键：Vue 挂载完成后触发 prerender 渲染事件
/*
router.isReady().then(() => {
    app.mount("#app");
    document.dispatchEvent(new Event('render-event'));
  });
*/

/*
setTimeout(() => {
    const app = createApp(App);
    app.use(createPinia());
    app.use(router);
    app.mount("#app");
}, 3000);
*/
/*可挂载多个
import MainPage from "./MainPage.vue";
createApp(MainPage).mount("#app2")
*/