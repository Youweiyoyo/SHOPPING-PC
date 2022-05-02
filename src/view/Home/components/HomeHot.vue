<template>
<HomePanel title="人气推荐" sub-title="人气爆款 不容错过">
  <div ref="target" style="position: relative;height: 426px">
    <Transition name="fade">
      <ul ref="panel" class="goods-list" v-if="goods.length">
        <li v-for="item in goods" :key="item.id">
          <RouterLink to="/">
            <img :src="item.picture" alt="">
            <p class="name">{{item.title}}</p>
            <p class="desc">{{item.alt}}</p>
          </RouterLink>
        </li>
      </ul>
      <HomeSkeleton v-else />
    </Transition>
  </div>
</HomePanel>
</template>

<script lang="ts" setup>
import HomePanel from './HomePanel.vue'
import HomeSkeleton from './HomeSkeleton.vue'
import { useLazyData } from '../../../Hooks'
import { ref } from 'vue'
import { getHot } from '../../../api/home'
const target = ref(null)
const goods = useLazyData(target, getHot)
</script>

<style lang="less" scoped>
@import "./src/assets/styles/mixins.less";
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;
  li {
    width: 306px;
    height: 406px;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
    }
    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>