<template>
  <div class='home-skeleton'>
    <div class="item" v-for="i in 4" :key="i" :style="{backgroundColor: Props.bg}">
      <PCSkeleton bg="#e4e4e4" width="306px" height="306px" animated />
      <PCSkeleton bg="#e4e4e4" width="160px" height="24px" animated />
      <PCSkeleton bg="#e4e4e4" width="120px" height="24px" animated />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps } from 'vue'
interface props {
  bg?: string
}
const Props = withDefaults(defineProps<props>(), {
  bg: "#fff"
})
</script>

<style lang="less" scoped>
.home-skeleton {
  width: 1240px;
  height: 406px;
  display: flex;
  justify-content: space-between;
  .item {
    width: 306px;
    .skeleton ~ .skeleton{
      display: block;
      margin: 16px auto 0;
    }
  }
}
</style>