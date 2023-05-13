// src/store/index.ts
import { roleStore } from "./role";
import { userStore } from "./user";

export interface AppStore {
  roleSotre: ReturnType<typeof roleStore>;
  userStore: ReturnType<typeof userStore>;
}

const appStore: AppStore = {} as AppStore;

/**
 * 注册app状态库
 */
export const registerStore = () => {
  appStore.roleSotre = roleStore();
  appStore.userStore = userStore();
};

export default appStore;
