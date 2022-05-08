<template>
  <div class='sub-category'>
    <div class="container">
      <!-- 面包屑 -->
      <SubBread />
      <!-- 二级分类展示区 -->
      <SubFilter />
      <PCCheckBox v-model="isCheckBoxAll">全选</PCCheckBox>{{isCheckBoxAll}}
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
const isCheckBoxAll = ref(false)
</script>

<style scoped lang="less">
</style>