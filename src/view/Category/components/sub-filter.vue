<template>
  <!-- 筛选区 -->
  <div class="sub-filter" v-if="filterData && !filterLoading">
    <div class="item">
      <div class="head">品牌：</div>
      <div class="body">
        <a @click="filterData.brands.selectedBrands = item.id" :class="{active:filterData?.brands.selectedBrands === item.id}" href="javascript:;"
           v-for="item in filterData?.brands" :key="item?.id">{{ item?.name }}</a>
      </div>
    </div>
    <div class="item" v-for="item in filterData?.saleProperties" :key="item.id">
      <div class="head">{{ item.name }}</div>
      <div class="body">
        <a @click="item.properties.selectedAttr = pro.id"  :class="{active:item.properties.selectedAttr === pro.id}" href="javascript:;" v-for="pro in item.properties"
           :key="pro?.id">{{ pro?.name }}</a>
      </div>
    </div>
  </div>
  <div v-else class="sub-filter">
    <PCSkeleton class="item" width="800px" height="40px"/>
    <PCSkeleton class="item" width="800px" height="40px"/>
    <PCSkeleton class="item" width="600px" height="40px"/>
    <PCSkeleton class="item" width="600px" height="40px"/>
    <PCSkeleton class="item" width="600px" height="40px"/>
  </div>
</template>

<script lang="ts" setup>
import {fundSubCategory} from '../../../api/category'
import {useRoute} from 'vue-router'
import {ref, watch} from 'vue'
import {log} from "util";

const route = useRoute()
const filterData = ref(null)
const filterLoading = ref(false)

watch(() => route.params.id, (newValue, oldValue) => {
  if (newValue && route.path === `/category/sub/${newValue}`) {
    filterLoading.value = true
    fundSubCategory(route.params.id).then((res) => {
      res.result.brands.selectedBrands = null
      res.result.brands.unshift({id: null, name: '全部'})
      res.result.saleProperties.forEach((item: object) => {
        item.properties.selectedAttr = null
        item.properties.unshift({id: null, name: '全部'})
      })
      filterData.value = res.result
      filterLoading.value = false
    })
  }
}, {
  immediate: true
})
</script>

<style scoped lang="less">
@import "../../../assets/styles/variables";
// 筛选区
.sub-filter {
  background: #fff;
  padding: 25px;

  .item {
    display: flex;
    line-height: 40px;

    .head {
      width: 80px;
      color: #999;
    }

    .body {
      flex: 1;

      a {
        margin-right: 36px;
        transition: all .3s;
        display: inline-block;

        &.active,
        &:hover {
          color: @xtxColor;
        }
      }
    }
  }
}

.skeleton {
  padding: 10px 0;
}
</style>