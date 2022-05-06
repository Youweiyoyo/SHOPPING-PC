<template>
  <div class='sub-category'>
    <div class="container">
      <!-- 面包屑 -->
      <SubBread />
      <!-- 二级分类展示区 -->
      <SubFilter />
    </div>
  </div>
</template>

<script lang="ts" setup>
import SubBread from './components/sub-bread.vue'
import SubFilter from './components/sub-filter.vue'
</script>

<style scoped lang="less">
</style>