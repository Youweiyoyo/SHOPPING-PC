<script lang="ts" setup>
import HomeCateGory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNews from './components/HomeNews.vue'
import HomeHot from './components/HomeHot.vue'
import HomeBrand from './components/HomeBrand.vue'
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
    <HomeNews />
    <!-- 人气推荐 -->
    <HomeHot />
    <!-- 热门品牌 -->
    <HomeBrand />
</template>

<style lang="less" scoped>
  @import "./src/assets/styles/mixins.less";
  .homePage {
    background-color: @xtxColor;
    .hoverShadow()
  }
</style>