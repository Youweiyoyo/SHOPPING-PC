<template>
  <div class='home-category'>
    <ul class="menu">
      <li v-for="item in HomeCategoryList" :key="item.id">
        <RouterLink :to="`/category/${item.id}`">{{item.name}}</RouterLink>
        <template v-for="sub in item.children" :key="sub.id">
          <RouterLink :to="`/category/sub/${sub.id}`">{{sub.name}}</RouterLink>
        </template>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
import { computed, reactive } from 'vue'
const store = useStore()
const brand = reactive({
  id: 'brand',
  name: '品牌',
  children: [{ id: 'brand-chilren', name: '品牌推荐' }]
})
const HomeCategoryList = computed(() => {
  const list = store.state.category.list.map((item: any) => {
    return {
      id: item.id,
      children:  item.children && item.children.slice(0, 2),
      name: item.name
    }
  })
  list.push(brand)
  return list
})
</script>

<style scoped lang="less">
.home-category {
  width: 250px;
  height: 500px;
  background: rgba(0,0,0,0.8);
  position: relative;
  z-index: 99;
  .menu {
    li {
      padding-left: 40px;
      height: 50px;
      line-height: 50px;
      &:hover {
        background: @xtxColor;
      }
      a {
        margin-right: 4px;
        color: #fff;
        &:first-child {
          font-size: 16px;
        }
      }
    }
  }
}
</style>