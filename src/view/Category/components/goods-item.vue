<template>
  <RouterLink to="/" class='goods-item'>
    <img :src="Props.goods.picture" alt="">
    <p class="name ellipsis">{{Props.goods.name}}</p>
    <p class="desc ellipsis">{{Props.goods.tag}}</p>
    <p class="price">&yen;{{Props.goods.price}}</p>
  </RouterLink>
</template>

<script setup lang="ts">
import {withDefaults,defineProps} from 'vue'
interface prop {
  goods: object
}
const Props = withDefaults(defineProps<prop>(), {
  goods: () => ({})
})
</script>

<style scoped lang="less">
@import "./src/assets/styles/mixins.less";
@import "./src/assets/styles/variables.less";

.goods-item {
  display: block;
  width: 220px;
  padding: 20px 30px;
  text-align: center;
  .hoverShadow();

  img {
    width: 160px;
    height: 160px;
  }

  p {
    padding-top: 10px;
  }

  .name {
    font-size: 16px;
  }

  .desc {
    color: #999;
    height: 29px;
  }

  .price {
    color: @priceColor;
    font-size: 20px;
  }
}
</style>