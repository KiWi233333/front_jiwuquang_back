import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { registerStore } from "./stores";

const app = createApp(App);

// 注册pinia
app.use(createPinia());
registerStore();
// router
app.use(router);

app.mount("#app");
