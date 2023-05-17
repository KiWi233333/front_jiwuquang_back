<template>
  <el-row class="menu-list">
    <el-col>
      <el-menu default-active="1" :collapse="isColleapse">
        <!-- logo -->
        <transition-group name="fade" tag="div" class="logo">
          <img :src="isColleapse ? Logo : LogoText" alt="极物圈">
        </transition-group>
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
        <el-icon class="colleapse" @click="isColleapse = !isColleapse">
          <d-arrow-left v-show="!isColleapse" translate="yes"></d-arrow-left>
          <d-arrow-right v-show="isColleapse" translate="yes"></d-arrow-right>
        </el-icon>
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
  DArrowRight,
  DArrowLeft,
  UserFilled
} from '@element-plus/icons-vue';
import { ref } from 'vue';
let isColleapse = ref<boolean>(false);


</script>

<style lang="scss" scoped>
.menu-list {
  user-select: none;
  width: 200px;
  height: 100vh;

  .el-menu {
    height: 100%;
  }

  .logo {
    margin-bottom: 20px;

    img {
      width: 100%;
      object-fit: contain;
      padding: 10%;
    }
  }

  .colleapse {
    padding: 22px;
    font-size: large;
    width: 100%;
    text-align: right;
    display: flex;
    justify-content: flex-end;
    transition: 0.3s;
  }

}
</style>
