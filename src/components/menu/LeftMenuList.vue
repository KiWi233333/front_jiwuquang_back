<template>
  <el-row class="menu-list">
    <el-col class="col">
      <el-menu default-active="1">
        <!-- logo -->
        <div tag="div" class="logo">
          <img :src="isColleapse ? Logo : LogoText" alt="极物圈" :key="1">
        </div>
        <!-- 首页 -->
        <el-menu-item index="1">
          <el-icon>
            <home-filled />
          </el-icon>
          <span class="title">首&emsp;页</span>
        </el-menu-item>
        <el-sub-menu index="2">
          <template #title>
            <el-icon>
              <goods-filled />
            </el-icon>
            <span>商品管理</span>
          </template>
          <el-menu-item index="2-1">
            <el-icon>
              <Collection />
            </el-icon>
            <span>商品分类</span>
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item index="3">
          <el-icon>
            <UserFilled />
          </el-icon>
          <span>用户管理</span>
        </el-menu-item>

        <div class="colleapse" @click="isColleapse = !isColleapse">
          <el-icon class="icon">
            <ArrowLeftBold v-show="!isColleapse" translate="yes"></ArrowLeftBold>
            <ArrowRightBold v-show="isColleapse" translate="yes"></ArrowRightBold>
          </el-icon>
        </div>
      </el-menu>

    </el-col>

  </el-row>
</template>

<script lang="ts" setup>
import LogoText from "@/assets/image/logotxt.svg"
import Logo from "@/assets/image/logo.svg"
// icon
import {
  HomeFilled,
  GoodsFilled,
  Collection,
  DArrowLeft,
  UserFilled,
  ArrowLeftBold,
  ArrowRightBold
} from '@element-plus/icons-vue';
import { ref, watch, onMounted } from 'vue';
import { gsap } from "gsap";
let isColleapse = ref<boolean>(false);

onMounted(() => {

})

watch(isColleapse, (val) => {
  gsap.to(".menu-list .logo", {
    duration: 0.3,
    opacity: 0,
    scale: 0.6,
    rotation: 240,
  })
}, {})
</script>

<style lang="scss" scoped>
.menu-list {
  user-select: none;
  max-width: 200px;
  height: 100vh;

  .col {
    position: relative;
    width: auto;
  }

  // 菜单和项
  .el-menu {
    height: 100%;
    overflow: visible !important;

    .el-menu-item {
      width: calc(100% + 3px);
      overflow: hidden !important;
      border-right: 3px solid transparent;

      .title {
        transition: 0.3s;
      }
    }


    .el-menu-item.is-active {
      transition: 0.3s;
      border-radius: 0 2px 2px 0px;
      background-color: var(--el-color-primary-light-9);
      border-right: 3px solid var(--el-color-primary);
    }
  }

  // logo
  .logo {
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      transition: 0.3s;
      width: 100%;
      height: 100%;
      object-fit: contain;
      padding: 8px;
    }
  }

  // 折叠按钮
  .colleapse {
    position: absolute;
    bottom: 0;
    cursor: pointer;
    margin: auto;
    width: 100%;
    transition: 0.3s;
    margin: 10px 0;
    display: flex;
    transition: 0.3s;

    justify-content: flex-end;

    .icon {
      width: 40px;
      height: 40px;
      transform: translateX(50%);
      color: #fff;
      background-color: var(--el-color-primary);
      border-radius: 50%;
      transition: 0.3s;
    }


  }

}
</style>
