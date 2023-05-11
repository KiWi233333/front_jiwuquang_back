import { defineStore } from "pinia";
import { ref } from "vue";

export const roleStore = defineStore("userStore", () => {
  const token = ref<string>("token");

  function getToken(): string {
    return token.value;
  }

  function setToken(newToken: string): void {
    token.value = newToken;
  }

  return {
    token,
    // action
    setToken,
    // getter
    getToken,
  };
});
