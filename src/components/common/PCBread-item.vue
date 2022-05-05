<template>
  <div class="xtx-bread-item">
    <RouterLink  v-if="Props.to" :to="Props.to"><slot/></RouterLink>
    <span v-else><slot/></span>
  </div>
<!--  <i class="iconfont icon-angle-right"></i>-->
</template>

<script lang="ts" setup>
import { withDefaults, defineProps } from 'vue';
interface props {
  to?: string | object
}
const Props = withDefaults(defineProps<props>(), {
  to: ''
})
</script>

<style scoped lang="less">

</style>