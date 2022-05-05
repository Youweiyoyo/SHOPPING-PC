<template>
  <div class='xtx-bread'>
    <div class="xtx-bread-item">
      <RouterLink to="/">首页</RouterLink>
    </div>
    <i class="iconfont icon-angle-right"></i>
    <div class="xtx-bread-item" v-if="Props.parentName">
      <RouterLink v-if="Props.parentPath"  :to="Props.parentPath">{{Props.parentName}}</RouterLink>
      <span v-else>{{Props.parentName}}</span>
    </div>
    <i v-if="Props.parentName" class="iconfont icon-angle-right"></i>
    <div class="xtx-bread-item">
      <span><slot/></span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps } from 'vue'
interface props {
  parentName?: string
  parentPath?: string | object
}
const Props = withDefaults(defineProps<props>(), {
  parentName: '',
  parentPath: '/'
})
</script>

<style scoped lang="less">
@import "src/assets/styles/variables";
@import "./src/assets/styles/mixins";
.xtx-bread{
  display: flex;
  padding: 25px 10px;
  &-item {
    a {
      color: #666;
      transition: all .4s;
      &:hover {
        color: @xtxColor;
      }
    }
  }
  i {
    font-size: 12px;
    margin-left: 5px;
    margin-right: 5px;
    line-height: 22px;
  }
}
</style>