<template>
  <div class='xtx-goods-page'>
    <div class="container">
      <!-- 面包屑 -->
      <PCBread>
        <PCBreadItem to="/">首页</PCBreadItem>
        <PCBreadItem :to="`/category/${goodRes?.categories[1].id}`">{{ goodRes?.categories[1].name }}</PCBreadItem>
        <PCBreadItem :to="`/category/sub/${goodRes?.categories[0].id}`">{{ goodRes?.categories[0].name }}</PCBreadItem>
        <PCBreadItem to="/">{{ goodRes?.name }}</PCBreadItem>
      </PCBread>
      <!-- 商品信息 -->
      <div class="goods-info">
        <div class="media">
          <GoodsImage :images="goodRes?.mainPictures"/>
          <GoodsSales/>
        </div>
        <div class="spec">
          <GoodsName :goods="goodRes"/>
          <GoodsSku :goods="goodRes" :skuId="300289497" @change="changeSku"/>
        </div>
      </div>
      <!-- 商品推荐 -->
      <GoodsRelevant v-if="goodRes"/>
      <!-- 商品详情 -->
      <div class="goods-footer">
        <div class="goods-article">
          <!-- 商品+评价 -->
          <div class="goods-tabs"></div>
          <!-- 注意事项 -->
          <div class="goods-warn"></div>
        </div>
        <!-- 24热榜+专题推荐 -->
        <div class="goods-aside"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import GoodsRelevant from './Components/goods-relevant.vue';
import GoodsImage from './Components/goods-image.vue'
import GoodsName from './Components/goods-name.vue'
import GoodsSales from './Components/goods-sales.vue'
import GoodsSku from './Components/goods-sku.vue'
import {useGoods} from './ApiHooks'
import {useRoute} from 'vue-router'

const route = useRoute()
const goodRes = useGoods(route.params.id as string)
const changeSku = (sku) => {
  if (sku.skuId) {
    goodRes?.value?.price = sku.price
    goodRes?.value?.oldPrice = sku.oldPrice
    goodRes?.value?.inventory = sku.inventory
  }
}
</script>

<style lang="less" scoped>
.goods-info {
  min-height: 600px;
  background: #fff;
  display: flex;

  .media {
    width: 580px;
    height: 600px;
    padding: 30px 50px;
  }

  .spec {
    flex: 1;
    padding: 30px 30px 30px 0;
  }
}

.goods-footer {
  display: flex;
  margin-top: 20px;

  .goods-article {
    width: 940px;
    margin-right: 20px;
  }

  .goods-aside {
    width: 280px;
    min-height: 1000px;
  }
}

.goods-tabs {
  min-height: 600px;
  background: #fff;
}

.goods-warn {
  min-height: 600px;
  background: #fff;
  margin-top: 20px;
}
</style>