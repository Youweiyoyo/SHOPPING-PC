<script lang="ts" setup>
  import NavBar from '../../components/NavBar.vue'
</script>

<template>
  <!--  顶部通栏 -->
  <NavBar/>
  <!--  头部  -->
  <header>头部</header>
  <main>
    <!--  二级路由 -->
    <router-view></router-view>
  </main>
  <!--  底部通栏 -->
  <footer>底部通栏</footer>
</template>

<style lang="less" scoped>
</style>