<template>
  <div class="goods-sku">
    <dl v-for="item in Props.goods?.specs" :key="item.id">
      <dt>{{ item.name }}</dt>
      <dd>
        <template v-for="val in item.values" :key="val.name">
          <img :class="{selected: val.selected, disabled: val.disabled}" v-if="val.picture" :src="val.picture"
               :title="val.name" alt=""
               @click="changeSku(item,val)">
          <span :class="{selected: val.selected, disabled: val.disabled}" v-else @click="changeSku(item,val)">{{
              val.name
            }}</span>
        </template>
      </dd>
    </dl>
  </div>
</template>

<script lang="ts" setup>
import {useGetPathMap, updateDisabledStatus, getSelectedArr} from '../ApiHooks'
import {defineProps, withDefaults, defineEmits} from 'vue'

interface IProps {
  goods: object
  skuId?: string
}

const Emist = defineEmits<{
  (e: 'change', value: object): void
}>()
const Props = withDefaults(defineProps<IProps>(), {
  goods: () => ({}),
  skuId: ''
})
//默认选中的方法
const initDefaultSelect = (goods: object, skuId: string) => {
  const sku = goods?.skus.find(sku => sku.id === skuId)
  goods?.specs.forEach((item, i) => {
    const val = item.values.find(val => val.name === sku?.specs[i].valueName)
    val.selected = true
  })
}
if (Props.skuId) {
  initDefaultSelect(Props.goods, Props.skuId)
}
const changeSku = (item: any, val: any) => {
  // 1. 点击已选中
  // 将状态置为 false
  // 2. 点击未选中
  // 将其他统一规格的状态全部置为 false, 将当前状态改为 true
  if (val.disabled) return
  if (val.selected) {
    val.selected = false
  } else {
    item.values.forEach((valItem: any) => {
      valItem.selected = false
    })
    val.selected = true
  }
  updateDisabledStatus(Props.goods.specs, pathMap)
  const validSelectedValue = getSelectedArr(Props.goods.specs,).filter(v => v)
  if (validSelectedValue.length === Props.goods?.specs.length) {
    const skuIds = pathMap[validSelectedValue.join('-')]
    const sku = Props.goods?.skus.find(sku => sku.id === skuIds[0])
    Emist('change', {
      skuId: sku.id,
      price: sku.price,
      oldPrice: sku.oldPrice,
      inventory: sku.inventory,
      specsText: sku.specs.reduce((p, n) => `${p} ${n.name}：${n.valueName}`, '').replace(' ', '')
    })
  } else {
    Emist('change', {})
  }
}
// 获取到的子集分类
const pathMap = useGetPathMap(Props.goods?.skus)
updateDisabledStatus(Props.goods?.specs, pathMap)
</script>

<style scoped lang="less">
@import "../../../assets/styles/variables";

.sku-state-mixin () {
  border: 1px solid #e4e4e4;
  margin-right: 10px;
  cursor: pointer;
  &.selected {
    border-color: @xtxColor;
  }
  &.disabled {
    opacity: 0.6;
    border-style: dashed;
    cursor: not-allowed;
  }
}

.goods-sku {
  padding-left: 10px;
  padding-top: 20px;

  dl {
    display: flex;
    padding-bottom: 20px;
    align-items: center;

    dt {
      width: 50px;
      color: #999;
    }

    dd {
      flex: 1;
      color: #666;

      > img {
        width: 50px;
        height: 50px;
        .sku-state-mixin ();
      }

      > span {
        display: inline-block;
        height: 30px;
        line-height: 28px;
        padding: 0 20px;
        .sku-state-mixin ();
      }
    }
  }
}
</style>