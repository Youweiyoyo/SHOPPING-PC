<template>
  <div class="home-banner">
    <PCCarousel autoPlay :sliders="sliders" />
  </div>
</template>

<script lang="ts" setup>
import {Ref, ref} from 'vue'
import { getHomeBanner } from '../../../api/home'
const sliders: Ref<object> = ref([])
getHomeBanner().then((res) => {
  sliders.value = res.result
})

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
.xtx-carousel {
  /deep/ .carousel-btn.prev {
    left: 270px;
  }
  /deep/ .carousel-indicator {
    padding-left: 250px;
  }
}
</style>