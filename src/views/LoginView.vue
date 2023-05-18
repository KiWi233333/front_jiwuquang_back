<template>
  <el-form :model="user" status-icon :rules="rules" label-width="120px" class="demo-ruleForm">
    <el-form-item label="用户名：">
      <el-input v-model="user.username" />
    </el-form-item>
    <el-form-item label="密$emps;码：">
      <el-input v-model="user.password" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="toLogin">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { onLoginByPwd } from '@/api/sys/user';
import { reactive, ref } from 'vue'
/** @data **/  
// 表单user
let user = reactive({
  username: "",
  password: "",
})
let saveLogin = ref<boolean>(false);
// 规则
let rules = {
  username: [
    { required: true, message: '请输入用户名！', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码！', trigger: 'blur' },
  ],
}

// 登录请求
const toLogin = async () => {
  const { data } = await onLoginByPwd(user.username, user.password)
  console.log(data.data);
  // 自动登录
  if (saveLogin) {

  }

}
</script>
<style lang="scss" scoped></style>