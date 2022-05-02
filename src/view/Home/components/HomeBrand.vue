<template>
  <HomePanel title="热门品牌" sub-title="国际经典 品质保证">
    <template v-slot:right>
      <a @click="toggle(-1)" :class="{disabled: INDEX === 0 }"  href="javascript:;" class="iconfont icon-angle-left prev"></a>
      <a @click="toggle(1)"  :class="{disabled: INDEX === 1 }" href="javascript:;" class="iconfont icon-angle-right next"></a>
    </template>
    <div class="box" ref="box">
      <Transition name="fade">
        <ul v-if="brand?.length" class="list" :style="{transform: `translateX(${-INDEX * 1240}px)`}">
          <li v-for="item in brand" :key="item.id">
            <RouterLink to="/">
              <img :src="item.picture" alt="">
            </RouterLink>
          </li>
        </ul>
        <div v-else class="skeleton">
          <PCSkeleton class="item" v-for="i in 5" :key="i" animated bg="#e4e4e4" width="240px" height="305px"/>
        </div>
      </Transition>
    </div>
  </HomePanel>
</template>

<script lang="ts" setup>
import  { ref } from 'vue'
import HomePanel from './HomePanel.vue'
import { getBrandInfo } from '../../../api/home'
import { useLazyData } from '../../../Hooks'
const box = ref(null)
const INDEX = ref(0)
const brand = useLazyData(box, () => getBrandInfo(10))
const toggle = (step: number) => {
  const newIndex = INDEX.value + step
  if(newIndex < 0 || newIndex > 1) return
  INDEX.value = newIndex
}
</script>

<style scoped lang="less">
.home-panel {
  background:#f5f5f5
}
.iconfont {
  width: 20px;
  height: 20px;
  background: #ccc;
  color: #fff;
  display: inline-block;
  text-align: center;
  margin-left: 5px;
  background: @xtxColor;
  &::before {
    font-size: 12px;
    position: relative;
    top: -2px
  }
  &.disabled {
    background: #ccc;
    cursor: not-allowed;
  }
}
.box {
  display: flex;
  width: 100%;
  height: 345px;
  overflow: hidden;
  padding-bottom: 40px;
  .list {
    width: 200%;
    display: flex;
    transition: all 1s;
    li {
      margin-right: 10px;
      width: 240px;
      &:nth-child(5n) {
        margin-right: 0;
      }
      img {
        width: 240px;
        height: 305px;
      }
    }
  }
}
.skeleton {
  width: 100%;
  display: flex;
  .item {
    margin-right: 10px;
    &:nth-child(5n) {
      margin-right: 0;
    }
  }
}
</style>