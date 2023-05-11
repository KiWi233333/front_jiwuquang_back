// src/store/index.ts
import { roleStore } from "./role";

export interface AppStore {
  roleSotre: ReturnType<typeof roleStore>;
}

const appStore: AppStore = {} as AppStore;

/**
 * 注册app状态库
 */
export const registerStore = () => {
  appStore.roleSotre = roleStore();
};

export default appStore;