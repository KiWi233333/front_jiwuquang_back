/// <reference types="vite/client" />
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
declare module "node_modules/gsap/types/index.d.ts";
// declare module "element-plus/dist/locale/zh-cn.mjs";
