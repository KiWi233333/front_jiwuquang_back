<template>
  <DefaultLoyout>
    <h2>主页</h2>
  </DefaultLoyout>
</template>
<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core"
const isDark = useDark()
const toggleTheme = useToggle(isDark)
</script>
<style lang="scss" scoped></style>