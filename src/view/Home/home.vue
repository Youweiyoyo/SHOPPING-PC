<script lang="ts" setup>
import HomeCateGory from './components/HomeCategory.vue'
</script>

<template>
  <div class="home-page">
  <!-- home主页 -->
    <div class="home-enter">
      <div class="container">
        <!-- 分类页 -->
        <HomeCateGory/>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  @import "./src/assets/styles/mixins.less";
  .homePage {
    background-color: @xtxColor;
    .hoverShadow()
  }
</style>