<template>
  <div class="home-new">
    <HomePanel title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
      <template #right><PCMore path="/" /></template>
      <Transition name="fade" ref="target">
        <!-- 面板内容 -->
        <ul class="goods-list" v-if="goods.length">
          <li v-for="item in goods" :key="item.id">
            <RouterLink :to="`/product/${item.id}`">
              <img :src="item.picture" alt="">
              <p class="name ellipsis">{{item.name}}</p>
              <p class="price">&yen;{{item.price}}</p>
            </RouterLink>
          </li>
        </ul>
        <HomeSkeleton bg="#f0f9f4" v-else />
      </Transition>
    </HomePanel>
  </div>
</template>

<script lang="ts" setup>
import HomePanel from './HomePanel.vue'
import HomeSkeleton from './HomeSkeleton.vue'
import { findNew } from '../../../api/home'
import { ref } from "vue";
import { useLazyData } from '../../../Hooks'
const target = ref(null)
const goods = useLazyData(target, findNew)
</script>

<style lang="less" scoped>
@import "./src/assets/styles/mixins.less";
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;
  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding: 12px 30px 0 30px;
      text-align: center;
    }
    .price {
      color: @priceColor;
    }
  }
}
</style>