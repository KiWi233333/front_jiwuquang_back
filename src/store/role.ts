import { defineStore } from "pinia";
import { ref } from "vue";

export const roleStore = defineStore("userStore", () => {
  const role = ref<string>("Role_User");

  return {
    role,
  };
});
