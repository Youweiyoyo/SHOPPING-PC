<template>
  <!--  <div class='xtx-bread'>-->
  <!--    <slot/>-->
  <!--  </div>-->
</template>

<script lang="ts">
import {h} from 'vue'

export default {
  name: "PCBread",
  setup(props: object, {slots}) {
    const items = slots.default()
    const newItems: Array<object> = []
    items.forEach((item: object,index: number) => {
      newItems.push(item)
      if(index < (items.length - 1)){
        newItems.push(h('i', {className: 'iconfont icon-angle-right'}))
      }
    })
    return () => h('div', {className: 'xtx-bread'},newItems)
  }
}
</script>

<style lang="less">
@import "src/assets/styles/variables";
@import "./src/assets/styles/mixins";

.xtx-bread {
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