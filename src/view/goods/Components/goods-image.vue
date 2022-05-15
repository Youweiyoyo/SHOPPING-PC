<template>
  <div class="goods-image">
    <!-- 大图  -->
    <div class="large" v-show="isShow"
         :style="[{backgroundImage:`url(${Props.images[currIndex]})`}, largePosition]"></div>
    <!-- 中图  -->
    <div class="middle" ref="target">
      <img :src="Props.images[currIndex]" alt="">
      <!--  遮罩盒子  -->
      <div class="layer" v-show="isShow" :style="layerPosition"></div>
    </div>
    <!-- 小图 -->
    <ul class="small">
      <li v-for="(img,i) in Props.images" :key="img" :class="{active:i===currIndex}">
        <img @mouseenter="currIndex=i" :src="img" alt="">
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import {defineProps, withDefaults} from 'vue'
import {useMouseInElement} from '@vueuse/core'

interface props {
  images: []
}

const Props = withDefaults(defineProps<props>(), {
  images: () => []
})
// 当前图片
const currIndex = ref(0)
// 是否显示遮罩和大图
const isShow = ref(false)
// 中图遮罩的坐标
const layerPosition = reactive({
  left: '0',
  top: '0'
})
// 大图定位的坐标
const largePosition = reactive({
  backgroundPositionX: '-1000',
  backgroundPositionY: '0'
})
const target = ref(null)
const {elementX, elementY, isOutside} = useMouseInElement(target)

//  watch 同时监听多个数据，当数据为 Ref 时可以不用使用函数返回的形式
watch([elementX, elementY, isOutside], () => {
  isShow.value = !isOutside.value
  const position = {x: 0, y: 0}

  if (elementX.value < 100) position.x = 0
  else if (elementX.value > 300) position.x = 200
  else position.x = elementX.value - 100

  if (elementY.value < 100) position.y = 0
  else if (elementY.value > 300) position.y = 200
  else position.y = elementY.value - 100

  layerPosition.left = position.x + 'px'
  layerPosition.top = position.y + 'px'

  largePosition.backgroundPositionX = -2 * position.x + 'px'
  largePosition.backgroundPositionY = -2 * position.y + 'px'
})
</script>

<style scoped lang="less">
@import "../../../assets/styles/variables";

.goods-image {
  width: 480px;
  height: 400px;
  position: relative;
  display: flex;
  z-index: 500;

  .large {
    position: absolute;
    top: 0;
    left: 412px;
    width: 400px;
    height: 400px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-repeat: no-repeat;
    background-size: 800px 800px;
    background-color: #f8f8f8;
  }

  .middle {
    width: 400px;
    height: 400px;
    position: relative;
    cursor: move;

    .layer {
      width: 200px;
      height: 200px;
      background: rgba(0, 0, 0, .2);
      left: 0;
      top: 0;
      position: absolute;
    }
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