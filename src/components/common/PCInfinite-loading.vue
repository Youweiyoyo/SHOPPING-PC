<template>
  <div class="infinite-loading" ref="container">
    <div class="loading" v-if="Props.loading">
      <span class="img"></span>
      <span class="text">正在加载...</span>
    </div>
    <div class="none" v-if="Props.finished">
      <span class="img"></span>
      <span class="text">亲，没有更多了</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {withDefaults, defineProps, defineEmits, ref} from 'vue'
import {useIntersectionObserver} from '@vueuse/core'

interface props {
  loading: boolean,
  finished: boolean
}
const emits = defineEmits<{
  (e: 'infinite'): void
}>()
const Props = withDefaults(defineProps<props>(), {
  loading: false,
  finished: false
})
const container = ref(null)
const {stop} = useIntersectionObserver(container, ([{isIntersecting}]) => {
  if (isIntersecting) {
    console.log('进入可视区');
    if(!Props.loading && !Props.finished){
      emits('infinite')
    }
  }
}, {threshold: 0})
</script>

<style scoped lang="less">
.infinite-loading {
  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;

    .img {
      width: 50px;
      height: 50px;
      background: url(../../assets/images/load.gif) no-repeat center / contain;
    }

    .text {
      color: #999;
      font-size: 16px;
    }
  }

  .none {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;

    .img {
      width: 200px;
      height: 134px;
      background: url(../../assets/images/none.png) no-repeat center / contain;
    }

    .text {
      color: #999;
      font-size: 16px;
    }
  }
}
</style>