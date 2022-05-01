<template>
  <div class='xtx-carousel'>
    <ul class="carousel-body">
      <li class="carousel-item" v-for="(item,i) in Props.sliders" :key="i" :class="{fade:CurrentIndex === i}">
        <RouterLink to="/">
          <img :src="item.imgUrl" alt="">
        </RouterLink>
      </li>
    </ul>
    <a href="javascript:;" class="carousel-btn prev"><i class="iconfont icon-angle-left"></i></a>
    <a href="javascript:;" class="carousel-btn next"><i class="iconfont icon-angle-right"></i></a>
    <div class="carousel-indicator">
      <!--  激活点 -->
      <span v-for="(item,i) in Props.sliders" :key="i" :class="{active:CurrentIndex === i}"></span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {defineProps, withDefaults, ref, Ref, watch} from 'vue'
interface Props {
  sliders?: [] // 轮播图数据
  autoPlay?: boolean // 是否自动轮播
  duration?: number // 间隔时间
}
const Props = withDefaults(defineProps<Props>(), {
  sliders: () => [],
  autoPlay: true,
  duration: 3000
})
let CurrentIndex: Ref<number> = ref(0)
let timer = null
// 自动播放函数
const autoPlayFn = () => {
  timer = setInterval(() => {
    CurrentIndex.value++
    if(CurrentIndex.value >= Props.sliders.length){
      CurrentIndex.value = 0
    }
  }, Props.duration)
}
watch(() => Props.sliders, (newValue) => {
  if(newValue.length && Props.autoPlay){
    autoPlayFn()
  }
}, {immediate: true})
</script>

<style scoped lang="less">
.xtx-carousel{
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 150px;
  position: relative;
  .carousel{
    &-body {
      width: 100%;
      height: 100%;
    }
    &-item {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity 0.5s linear;
      &.fade {
        opacity: 1;
        z-index: 1;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-indicator {
      position: absolute;
      left: 0;
      bottom: 20px;
      z-index: 2;
      width: 100%;
      text-align: center;
      span {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: rgba(0,0,0,0.2);
        border-radius: 50%;
        cursor: pointer;
        ~ span {
          margin-left: 12px;
        }
        &.active {
          background:  #fff;
        }
      }
    }
    &-btn {
      width: 44px;
      height: 44px;
      background: rgba(0,0,0,.2);
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 228px;
      z-index: 2;
      text-align: center;
      line-height: 44px;
      opacity: 0;
      transition: all 0.5s;
      &.prev{
        left: 20px;
      }
      &.next{
        right: 20px;
      }
    }
  }
  &:hover {
    .carousel-btn {
      opacity: 1;
    }
  }
}
</style>