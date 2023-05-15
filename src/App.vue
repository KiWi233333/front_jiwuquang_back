<template>
  <!-- 全局位置 -->
  <router-view name="default"></router-view>
</template>


<script setup lang="ts" >
import { ref } from "vue"
import { useDark, useToggle } from "@vueuse/core"
const isDark = useDark()
const toggleTheme = useToggle(isDark)

</script>
<style lang="scss" scoped></style>;
