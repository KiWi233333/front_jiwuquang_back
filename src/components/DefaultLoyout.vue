<template>
  <div class="home-view">
    <!-- 底部菜单栏 -->
    <HeaderMenu :isColleapse="isColleapse" class="top"></HeaderMenu>
    <!-- 内容 -->
    <div class="content">
      <slot name="default"></slot>
    </div>
    <!-- 侧边栏 -->
    <LeftMenu :isColleapse="isColleapse" class="left-menu"></LeftMenu>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
let isColleapse = ref<boolean>(false);
</script>
<style scoped lang="scss">
.home-view {
  padding-top: $top-nav-height;

  .top {
    position: fixed;
    top: 0;
    z-index: 999;
    width: 100%;
    height: $top-nav-height;
    background-color: $theme-bg-color;
  }

  .left-menu {
    height: calc(100vh - $top-nav-height);
  }

  // 主内容
  .content {
    padding: 0 240px;
    display: flex;
  }
}
</style>
