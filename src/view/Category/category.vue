<template>
  <div class='sub-category'>
    <div class="container">
      <!-- 面包屑 -->
      <SubBread />
      <!-- 二级分类展示区 -->
      <SubFilter />
      <!-- 商品面板 排序 + 列表 -->
      <div class="goods-list">
        <SubSort />
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
import SubSort from './components/sub-sort.vue'
import SubFilter from './components/sub-filter.vue'
import SubBread from './components/sub-bread.vue'
</script>

<style scoped lang="less">
.goods-list {
  background: #fff;
  padding: 0 25px;
  margin-top: 25px;
}
</style>