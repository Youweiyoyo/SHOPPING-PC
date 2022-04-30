<template>
  <div class="skeleton" :style="{width: props.width,height: props.height}" :class="{shan:props.animated}">
    <!-- 1 盒子-->
    <div class="block" :style="{backgroundColor:props.bg}"></div>
    <!-- 2 闪效果 skeleton 伪元素 --->
  </div>
</template>

<script lang="ts" setup>
interface Props {
  bg?: string,
  width?: string,
  height?: string,
  animated?: boolean
}
import { withDefaults, defineProps } from 'vue'
const props = withDefaults(defineProps<Props>(), {
  bg: '#efefef',
  width: '100px',
  height: '100px',
  animated: false
})
</script>

<style lang="less" scoped>
.skeleton {
  display: inline-block;
  position: relative;
  overflow: hidden;
  vertical-align: middle;
  .block {
    width: 100%;
    height: 100%;
    border-radius: 2px;
  }
}
.shan {
  &::after {
    content: "";
    position: absolute;
    animation: shan 1.5s ease 0s infinite;
    top: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(
        to left,
        rgba(255, 255, 255, 0) 0,
        rgba(255, 255, 255, 0.3) 50%,
        rgba(255, 255, 255, 0) 100%
    );
    transform: skewX(-45deg);
  }
}
@keyframes shan {
  0% {
    left: -100%;
  }
  100% {
    left: 120%;
  }
}
</style>