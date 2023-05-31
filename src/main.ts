import App from "./App.vue";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { registerStore } from "./stores";
// router
import router from "./router";
// scss 全局导入
import "./assets/styles/init.scss";
import "./assets/styles/main.scss";
// svg配置
import "virtual:svg-icons-register";
// gsap动画库
import { gsap } from "gsap";
// uno.css
import 'virtual:uno.css'
// svg注册器
import 'virtual:svg-icons-register'
import SvgIcon from "@/components/other/SvgIcon.vue";




const app = createApp(App);
gsap.registerPlugin()
// 注册pinia
app.use(createPinia());
registerStore();
// router
app.use(router);
app.component("svg-icon",SvgIcon);
// App
app.mount("#app");
