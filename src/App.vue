<template>
  <!-- 全局位置 -->
  <router-view name="default" />
</template>


<script setup lang="ts" >
import { useDark, useToggle } from "@vueuse/core"
import { onLoginByPwd } from "./api/sys/user";
const isDark = useDark()
const toggleTheme = useToggle(isDark)

onLoginByPwd("admin233","123456").then(res=>{
  console.log(res.data.data);
  
}) 

</script>
<style lang="scss" scoped></style>;
