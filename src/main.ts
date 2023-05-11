import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createPinia} from "pinia"
import { registerStore } from './store'
const app = createApp(App);
// Pinia
app.use(createPinia());
// 注册app状态库
registerStore();

app.mount('#app')
