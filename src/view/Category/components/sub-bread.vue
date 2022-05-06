<template>
  <PCBread>
    <PCBreadItem to="/">首页</PCBreadItem>
    <PCBreadItem v-if="category.top" :to="`/category/${category.top.id}`">{{category.top.name}}</PCBreadItem>
    <Transition name="fade-right" mode="out-in">
      <PCBreadItem v-if="category.sub" :key="category.sub.id">{{category.sub.name}}</PCBreadItem>
    </Transition>
  </PCBread>
</template>

<script lang="ts" setup>
import {useStore} from 'vuex'
import {useRoute} from 'vue-router'
import {computed} from 'vue'

const store = useStore()
const routr = useRoute()
const category = computed(() => {
  const obj = {}
  store.state.category.list.forEach(top => {
    top.children && top.children.forEach(sub => {
      if (sub.id === routr.params.id) {
        // 设置二级类目
        obj.sub = {id: sub.id, name: sub.name}
        // 设置一级类目
        obj.top = {id: top.id, name: top.name}
      }
    })
  })
  return obj
})
</script>

<style scoped lang="less">
@import "../../../../src/assets/styles/mixins";
</style>