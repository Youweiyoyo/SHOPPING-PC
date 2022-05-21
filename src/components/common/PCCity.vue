<template>
  <div class="city" ref="target">
    <div class="select" @click="toggle" :class="{active: visible}">
      <span class="placeholder">请选择配送地址</span>
      <span class="value"></span>
      <i class="iconfont icon-angle-down"></i>
    </div>
    <div class="option" v-show="visible">
      <div v-if="loading" class="loading"></div>
      <template v-else>
        <span class="ellipsis" v-for="city in currList" :key="city.code">{{city.name}}</span>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed, ref} from 'vue'
import {onClickOutside} from '@vueuse/core'
import {useGetCityData} from '../../Hooks'

let visible = ref(false)
const target = ref(null)
const allCityData:any = ref([])
const Loading = ref(false)
const open = () => {
  visible.value = true
  Loading.value = true
  useGetCityData().then(res => {
    allCityData.value = res
    console.log(allCityData.value);
    Loading.value = false
  })
}
const close = () => {
  visible.value = false
}
const toggle = () => {
  visible.value ? close(): open()
}
onClickOutside(target, () => {
  close()
})
const currList = computed(() => {
  return allCityData.value
})
</script>

<style scoped lang="less">
.city {
  display: inline-block;
  position: relative;
  z-index: 400;
  .select {
    border: 1px solid #e4e4e4;
    height: 30px;
    padding: 0 5px;
    line-height: 28px;
    cursor: pointer;
    &.active {
      background: #fff;
    }
    .placeholder {
      color: #999;
    }
    .value {
      color: #666;
      font-size: 12px;
    }
    i {
      font-size: 12px;
      margin-left: 5px;
    }
  }
  .option {
    width: 542px;
    border: 1px solid #e4e4e4;
    position: absolute;
    left: 0;
    top: 29px;
    background: #fff;
    min-height: 30px;
    line-height: 30px;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    > span {
      width: 130px;
      text-align: center;
      cursor: pointer;
      border-radius: 4px;
      padding: 0 3px;
      &:hover {
        background: #f5f5f5;
      }
    }
    .loading {
      height: 290px;
      width: 100%;
      background: url(../../assets/images/loading.gif) no-repeat center;
    }
  }
}
</style>