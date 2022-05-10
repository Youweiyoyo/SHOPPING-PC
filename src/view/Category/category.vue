<template>
  <div class='sub-category'>
    <div class="container">
      <!-- 面包屑 -->
      <SubBread/>
      <!-- 二级分类展示区 -->
      <SubFilter/>
      <!-- 商品面板 排序 + 列表 -->
      <div class="goods-list">
        <SubSort/>
        <!--  列表  -->
        <ul>
          <li v-for="i in 20" :key="i">
            <GoodsItem :goods="{}"/>
          </li>
        </ul>
        <PCInfiniteLoading  :finished="finished" :loading="loading" @infinite="getData"/>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import SubSort from './components/sub-sort.vue'
import SubFilter from './components/sub-filter.vue'
import SubBread from './components/sub-bread.vue'
import GoodsItem from './components/goods-item.vue'

const loading = ref(false)
const finished = ref(false)
const getData = () => {
  console.log('加载数据~')
}
</script>

<style scoped lang="less">
.goods-list {
  background: #fff;
  padding: 0 25px;
  margin-top: 25px;

  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 5px;

    li {
      margin-right: 20px;
      margin-bottom: 20px;

      &:nth-child(5n) {
        margin-right: 0;
      }
    }
  }
}
</style>