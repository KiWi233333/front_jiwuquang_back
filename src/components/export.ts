import type { App } from "vue";

const modulesFiles = import.meta.glob("./src/components/other/*.vue");
// 批量注册 全局组件
export default (app:App<Element>) => {
  for (const path in modulesFiles) {
    const componentName:string = modulesFiles[path].name; // 获取组件默认名称
    app.component(componentName, modulesFiles[path]);
  }
};
