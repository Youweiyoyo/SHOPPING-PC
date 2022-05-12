<template>
  <div class='sub-category'>
    <div class="container">
      <!-- 面包屑 -->
      <SubBread />
      <!-- 二级分类展示区 -->
      <SubFilter @filter-change="filterChange"/>
      <!-- 商品面板 排序 + 列表 -->
      <div class="goods-list">
        <SubSort @sort-change="sortChange"/>
        <!--  列表  -->
        <ul>
          <li v-for="good in goodsList" :key="good.id">
            <GoodsItem :goods="good"/>
          </li>
        </ul>
        <PCInfiniteLoading :finished="finished" :loading="loading" @infinite="getData"/>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref, watch} from 'vue'
import {useRoute} from 'vue-router'
import {findSubCategoryGoods} from '../../api/category'
import SubSort from './components/sub-sort.vue'
import SubFilter from './components/sub-filter.vue'
import SubBread from './components/sub-bread.vue'
import GoodsItem from './components/goods-item.vue'

const route = useRoute()

// 是否加载中
const loading = ref(false)
// 是否加载完毕
const finished = ref(false)
const goodsList = ref([])
// 请求参数
let params = {
  page: 1,
  pageSize: 20
}
const getData = () => {
  loading.value = true
  params.categoryId = route.params.id
  findSubCategoryGoods(params).then(({result}) => {
    if (result.items.length) {
      goodsList.value.push(...result.items)
      params.page++
    } else {
      finished.value = true
    }
    loading.value = false
  })
}
watch(() => route.params.id, (newValue) => {
  if (newValue && `/category/sub/${newValue}` === route.path) {
    finished.value = false
    goodsList.value = []
    params.page = 1
    params.pageSize = 20
  }
})
const sortChange = (data: object) => {
  finished.value = false
  params = {...params, ...data}
  params.page = 1
  goodsList.value = []
}
const filterChange = (data: object) => {
  finished.value = false
  params = {...params, ...data}
  params.page = 1
  goodsList.value = []
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