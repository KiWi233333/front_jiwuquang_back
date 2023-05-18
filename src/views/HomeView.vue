<template>
  <!-- 菜单栏 -->
  <LeftMenuList></LeftMenuList>

</template>
<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core"
const isDark = useDark()
const toggleTheme = useToggle(isDark)
</script>
<style lang="scss" scoped></style>