<template>
  <div class="goods-image">
    <div class="middle">
      <img :src="Props.images[currIndex]" alt="">
    </div>
    <ul class="small">
      <li v-for="(img,i) in Props.images" :key="img" :class="{active:i===currIndex}">
        <img @mouseenter="currIndex=i" :src="img" alt="">
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import {defineProps, withDefaults} from 'vue'

interface props {
  images: []
}
const Props = withDefaults(defineProps<props>(), {
  images: () => []
})
const currIndex = ref(0)
</script>

<style scoped lang="less">
@import "../../../assets/styles/variables";

.goods-image {
  width: 480px;
  height: 400px;
  position: relative;
  display: flex;

  .middle {
    width: 400px;
    height: 400px;
    background: #f5f5f5;
  }

  .small {
    width: 80px;

    li {
      width: 68px;
      height: 68px;
      margin-left: 12px;
      margin-bottom: 15px;
      cursor: pointer;

      &:hover, &.active {
        border: 2px solid @xtxColor;
      }
    }
  }
}
</style>