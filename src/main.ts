import App from "./App.vue";
import { createApp } from "vue";

import { createPinia } from "pinia";
import { registerStore } from "./stores";

import router from "./router";

import ElementPlus from "element-plus";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";

const app = createApp(App);
// element-plus lang
app.use(ElementPlus, { locale: zhCn });

// 注册pinia
app.use(createPinia());
registerStore();
// router
app.use(router);
// App
app.mount("#app");
