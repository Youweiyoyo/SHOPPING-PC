<script lang="ts" setup>
  import NavBar from '../../components/NavBar.vue'
  import HeaDer from '../../components/Header.vue'
  import Footer from '../../components/Footer.vue'
  import HeaderNavStick from '../../components/HeaderNavStick.vue'
  import { useStore } from 'vuex'
  const store = useStore();
  store.dispatch('category/getCateGoryList')
</script>

<template>
  <!--  顶部通栏 -->
  <NavBar/>
  <!--  头部  -->
  <HeaDer/>
  <HeaderNavStick/>
  <main class="app-body">
    <!--  二级路由 -->
    <router-view></router-view>
  </main>
  <!--  底部通栏 -->
  <Footer>底部通栏</Footer>
</template>

<style lang="less" scoped>
  .app-body {
    min-height: 600px;
  }
</style>