import { createApp } from "vue";
import App from "./RootPage.vue";
import router from "./router";
import { createPinia } from "pinia";
//import './styles/view-common.css'
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount("#app");

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