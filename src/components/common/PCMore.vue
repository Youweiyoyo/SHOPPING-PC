<template>
  <RouterLink :to="Props.path" class="more">
    <span>查看全部</span>
    <i class="iconfont icon-angle-right"></i>
  </RouterLink>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps } from 'vue'
interface props {
  path?: string
}
const Props = withDefaults(defineProps<props>(), {
  path: '/'
})
</script>

<style scoped lang="less">
.more {
  margin-bottom: 2px;
  span {
    font-size: 16px;
    vertical-align: middle;
    margin-right: 4px;
    color: #999;
  }
  i {
    font-size: 14px;
    vertical-align: middle;
    position: relative;
    top: 2px;
    color: #ccc;
  }
  &:hover {
    span,i {
      color: @xtxColor;
    }
  }
}
</style>