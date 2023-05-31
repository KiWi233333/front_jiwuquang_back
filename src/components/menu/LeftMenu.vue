<template>
  <el-drawer class="drawer-list" size="auto" v-model="isColleapse" :lock-scroll="false" z-index="99" :modal="false" direction="ltr">
    <!-- 菜单 -->
    <el-row class="menu-list" > 
      <el-col class="col">
        <el-menu default-active="1">
          <!-- 首页 -->
          <el-menu-item index="1">
            <el-icon>
              <home-filled />
            </el-icon>
            <span class="title">首&emsp;页</span>
          </el-menu-item>
          <!-- 社区 -->
          <el-menu-item index="2"> 
            <el-icon>
              <SwitchFilled />
            </el-icon>
            <span class="title">社&emsp;区</span>
          </el-menu-item>
          <el-menu-item index="3">
            <el-icon>
              <goods-filled />
            </el-icon>
            <span>商品分类</span>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon>
              <Setting />
            </el-icon>
            <span>设置</span>
          </el-menu-item>
          <!-- 折叠框 -->
          <!-- <div class="collapse" @click="isColleapse = !isColleapse">
            <el-icon class="icon">
              <ArrowLeftBold v-show="!isColleapse" translate="yes"></ArrowLeftBold>
              <ArrowRightBold v-show="isColleapse" translate="yes"></ArrowRightBold>
            </el-icon>
          </div> -->
        </el-menu>

      </el-col>
    </el-row>
  </el-drawer>
</template>

<script lang="ts" setup>
import Logo2 from "@/assets/image/logo2.svg"
import {
  HomeFilled,
  GoodsFilled,
  Setting,
SwitchFilled
} from '@element-plus/icons-vue';
import { ref, watch, onMounted } from 'vue';
import { gsap } from "gsap";
let isColleapse = defineProps(["isColleapse"]);
 
watch(isColleapse, (val): void => {
  // 动画logo
  gsap.to(".menu-list .logo", {
    duration: 0.3,
    opacity: 0.5,
    scale: 0.6,
  })
}, {})
</script>

<style lang="scss" scoped> 
.menu-list {
  width: 100%;
  user-select: none;
  width: 200px;

  .col {
    position: relative;
    width: auto;
  }

  // 菜单和项
  .el-menu {
  padding-top: 40px;
    height: 100%;
    overflow: visible !important;

    .el-menu-item {
      width: calc(100% + 1px);
      overflow: hidden !important;
      border-right: 3px solid transparent;
      transition: 0.3s;
      padding:  10px 20px;
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
      padding: 2px;
    }
  }

  // 折叠按钮
  .collapse {
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
