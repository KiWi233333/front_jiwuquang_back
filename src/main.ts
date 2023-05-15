import App from "./App.vue";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { registerStore } from "./stores";
// router
import router from "./router";
// scss 全局导入
import "./assets/styles/init.scss";
import "./assets/styles/main.scss";

const app = createApp(App);

// 注册pinia
app.use(createPinia());
registerStore();
// router
app.use(router);
// App
app.mount("#app");
