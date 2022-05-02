<template>
  <div class="home-panel">
    <div class="container">
      <div class="head">
        <h3>{{ Props.title }}<small>{{ Props.subTitle }}</small></h3>
        <slot name="right" />
      </div>
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps } from 'vue'
interface props {
  title?:string,
  subTitle?: string
}
const Props = withDefaults(defineProps<props>(), {
  title: "",
  subTitle: ""
})
</script>

<style lang="less" scoped>
.home-panel {
  background-color: #fff;
  .head {
    padding: 40px 0;
    display: flex;
    align-items: flex-end;
    h3 {
      flex: 1;
      font-size: 32px;
      font-weight: normal;
      margin-left: 6px;
      height: 35px;
      line-height: 35px;
      small {
        font-size: 16px;
        color: #999;
        margin-left: 20px;
      }
    }
  }
}
</style>