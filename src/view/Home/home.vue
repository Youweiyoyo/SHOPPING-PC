<script lang="ts" setup>
import HomeCateGory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
</script>

<template>
  <div class="home-page">
  <!-- home主页 -->
    <div class="home-enter">
      <div class="container">
        <!-- 分类页 -->
        <Suspense>
          <HomeCateGory/>
          <template #fallback>
            Loading....
          </template>
        </Suspense>
        <!-- 轮播图 -->
        <Suspense>
          <HomeBanner />
        </Suspense>
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