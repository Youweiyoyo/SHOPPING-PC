<template>
  <div class="city" ref="target">
    <div class="select" @click="toggle" :class="{active: visible}">
      <span v-if="!Props.fullLocation" class="placeholder">请选择配送地址</span>
      <span v-else class="value">{{ Props.fullLocation }}</span>
      <i class="iconfont icon-angle-down"></i>
    </div>
    <div class="option" v-show="visible">
      <div v-if="loading" class="loading"></div>
      <template v-else>
        <span class="ellipsis" @click="handleClick(city)" v-for="city in currList" :key="city.code">{{
            city.name
          }}</span>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed, ref, withDefaults, defineProps, reactive, defineEmits} from 'vue'
import {onClickOutside} from '@vueuse/core'
import {useGetCityData} from '../../Hooks'

interface props {
  fullLocation: string
}

const Props = withDefaults(defineProps<props>(), {
  fullLocation: ''
})
const Emits = defineEmits<{
  (e: 'change', cityInfo: object): void
}>()
let visible = ref(false)
const target = ref(null)
const allCityData: any = ref([])
const Loading = ref(false)
const open = () => {
  visible.value = true
  Loading.value = true
  useGetCityData().then(res => {
    allCityData.value = res
    console.log(allCityData.value);
    Loading.value = false
  })
  for (const key in changeResult) {
    changeResult[key] = ''
  }
}
const close = () => {
  visible.value = false
}
const toggle = () => {
  visible.value ? close() : open()
}
onClickOutside(target, () => {
  close()
})
const currList = computed(() => {
  // 省
  let list = allCityData.value
  // 市
  if (changeResult.provinceCode) {
    list = list.find((item: any) => item.code === changeResult.provinceCode)?.areaList
  }
  // 区
  if (changeResult.cityCode) {
    list = list.find((item: any) => item.code === changeResult.cityCode)?.areaList
  }
  return list
})
// 定义省市区数据
const changeResult = reactive({
  provinceCode: '',
  provinceName: '',
  cityCode: '',
  cityName: '',
  countyCode: '',
  countyName: '',
  fullLocation: ''
})
const handleClick = (city: object) => {
  // 省
  if (city.level === 0) {
    changeResult.provinceCode = city.code
    changeResult.provinceName = city.name
  }
  // 市
  if (city.level === 1) {
    changeResult.cityCode = city.code
    changeResult.cityName = city.name
  }
  // 地区
  // 最后一级
  if (city.level === 2) {
    changeResult.countyCode = city.code
    changeResult.countyName = city.name
    // 拼接城市名称
    changeResult.fullLocation = `${changeResult.provinceName} ${changeResult.cityName} ${changeResult.countyName}`
    close()
    Emits('change', changeResult)
  }
}
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