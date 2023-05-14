<template>Hello</template>


<script setup lang="ts" > 
import { onLoginByPwd } from './api/sys/user';


(async()=>{
  const res  = await onLoginByPwd("kiwi2333", "123456");
  if (res.data.code===20000) {
    console.log(res.data.code);
  }
})()


</script>
<style scoped></style>;
