<template>
  <div class="home-banner">
    <PCCarousel :sliders="sliders" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { getHomeBanner } from '../../../api/home'
const sliders = ref([])
const { result } = await getHomeBanner()
sliders.value = result
</script>

<style scoped lang="less">
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98
}
</style>