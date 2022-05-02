<script lang="ts" setup>
import HomeCateGory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNews from './components/HomeNews.vue'
</script>

<template>
  <!-- home主页 -->
    <div class="home-entry">
      <div class="container">
        <!-- 分类页 -->
        <Suspense>
          <HomeCateGory/>
          <template #fallback>
            Loading....
          </template>
        </Suspense>
        <!-- 轮播图 -->
        <HomeBanner />
      </div>
    </div>
  <!-- 新鲜好物 -->
  <HomeNews/>
</template>

<style lang="less" scoped>
  @import "./src/assets/styles/mixins.less";
  .homePage {
    background-color: @xtxColor;
    .hoverShadow()
  }
</style>