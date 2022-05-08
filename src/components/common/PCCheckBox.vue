<template>
  <div class="checkbox" @click="checkBoxChange">
    <i v-if="isChecked" class="iconfont icon-checked"></i>
    <i v-else class="iconfont icon-unchecked"></i>
    <span v-if="$slots.default"><slot/></span>
  </div>
</template>

<script lang="ts" setup>
import { useVModel } from '@vueuse/core'
import {ref, withDefaults, defineProps, defineEmits, watch} from 'vue'

interface props {
  modelValue: boolean
}

const Props = withDefaults(defineProps<props>(), {
  modelValue: false
})

// emit 类型约束 组件的 v-model  :modelValue  @update:modelValue 事件
const emits = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

// 1.使用 vueUse 实现 双向绑定
const isChecked = useVModel(Props,'modelValue', emits)
const checkBoxChange = () => {
  isChecked.value = !isChecked.value
}
// 2.传统方式实现 双向绑定
// const isChecked = ref(false)
// const checkBoxChange = () => {
//   isChecked.value = !isChecked.value
//   emits('update:modelValue', isChecked.value)
// }
// watch(() => Props.modelValue, (newValue) => {
//   isChecked.value = newValue
// }, {immediate: true})
</script>

<style lang="less" scoped>
@import "../../assets/styles/variables";

.checkbox {
  display: inline-block;
  margin-right: 2px;

  .icon-checked {
    color: @xtxColor;

    ~ span {
      color: @xtxColor;
    }
  }

  i {
    position: relative;
    top: 1px;
  }

  span {
    margin-left: 2px;
  }
}
</style>