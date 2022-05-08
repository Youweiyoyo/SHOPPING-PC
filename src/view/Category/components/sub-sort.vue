<template>
  <div class='sub-sort'>
    <div class="sort">
      <a :class="{active: sortParams.sortField === null}" @click="sortChange(null)" href="javascript:;">默认排序</a>
      <a :class="{active: sortParams.sortField === 'publishTime'}" @click="sortChange('publishTime')"
         href="javascript:;">最新商品</a>
      <a :class="{active: sortParams.sortField === 'orderNum'}" @click="sortChange('orderNum')"
         href="javascript:;">最高人气</a>
      <a :class="{active: sortParams.sortField === 'evaluateNum'}" @click="sortChange('evaluateNum')"
         href="javascript:;">评论最多</a>
      <a @click="sortChange('price')" href="javascript:;">
        价格排序
        <i class="arrow up" :class="{active:sortParams.sortField === 'price'&& sortParams.sortMethod ==='asc'}"/>
        <i class="arrow down" :class="{active:sortParams.sortField ==='price'&& sortParams.sortMethod ==='desc'}"/>
      </a>
    </div>
    <div class="check">
      <PCCheckBox v-model="sortParams.inventory">仅显示有货商品</PCCheckBox>
      <PCCheckBox v-model="sortParams.onlyDiscount">仅显示特惠商品</PCCheckBox>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {reactive} from 'vue'
interface ISortData {
  inventory: boolean,
  onlyDiscount: boolean,
  sortField: null | string,
  sortMethod: null | string,
}
const sortParams = reactive<ISortData>({
  inventory: false,
  onlyDiscount: false,
  sortField: null,
  sortMethod: null
})
const sortChange = (sortField: string | null) => {
  if (sortField === 'price') {
    sortParams.sortField = sortField
    if (sortParams.sortMethod === null) {
      // 第一次点击，默认是降序
      sortParams.sortMethod = 'desc'
    } else {
      // 其他情况根据当前排序取反
      sortParams.sortMethod = sortParams.sortMethod === 'desc' ? 'asc' : 'desc'
    }
  } else {
    // 如果排序未改变停止逻辑
    if (sortParams.sortField === sortField) return
    sortParams.sortField = sortField
    sortParams.sortMethod = null
  }
}
</script>

<style scoped lang="less">
@import "../../../assets/styles/variables";

.sub-sort {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .sort {
    display: flex;

    a {
      height: 30px;
      line-height: 28px;
      border: 1px solid #e4e4e4;
      padding: 0 20px;
      margin-right: 20px;
      color: #999;
      border-radius: 2px;
      position: relative;
      transition: all .3s;

      &.active {
        background: @xtxColor;
        border-color: @xtxColor;
        color: #fff;
      }

      .arrow {
        position: absolute;
        border: 5px solid transparent;
        right: 8px;

        &.up {
          top: 3px;
          border-bottom-color: #bbb;

          &.active {
            border-bottom-color: @xtxColor;
          }
        }

        &.down {
          top: 15px;
          border-top-color: #bbb;

          &.active {
            border-top-color: @xtxColor;
          }
        }
      }
    }
  }

  .check {
    .checkbox {
      margin-left: 20px;
      color: #999;
    }
  }
}
</style>