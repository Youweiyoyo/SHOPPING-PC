<template>
<div class="top-category">
  <div class="container">
      <!-- 面包屑 -->
    <PCBread>
      <PCBreadItem :to="{path: '/'}">首页</PCBreadItem>
      <PCBreadItem>电器</PCBreadItem>
      <PCBreadItem>空调</PCBreadItem>
    </PCBread>
  </div>
</div>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="less">

</style>