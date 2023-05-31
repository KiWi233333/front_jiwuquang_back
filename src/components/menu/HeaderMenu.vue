<template>
  <div class="nav">
    <div class="left">
      <SvgIcon name="logotxt.svg"></SvgIcon>
      <span>极物圈</span>
    </div>
    
    <div class="right">
      <span @click="onLogin(1)">登录</span>
      <span @click="onLogin(2)">注册</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

let isColleapse = defineProps(["isColleapse"]);
// 登录表单
let showForm = ref<boolean>(false)
const onLogin = (type: number) => {
  if (type === 1) {
    showForm.value = true
  } else {
    showForm.value = false
  }
  showForm.value = !showForm.value
}
</script>
<style lang="scss" scoped>
.nav {
  width: 100%;
  height: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  >* {
    color: $theme-text-color2;
  }

  .left {
    padding: 0;
    display: flex;
    align-items: center;
    
    img {
      height: $top-nav-height;

    }
  }
  .right {
    letter-spacing: 0.4em;
  }
}
</style>