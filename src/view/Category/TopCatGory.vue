<template>
  <div class="top-category">
    <div class="top-category">
      <div class="container">
        <!-- 面包屑 -->
        <PCBread>
          <PCBreadItem to="/">首页</PCBreadItem>
          <PCBreadItem v-if="topCatGory">{{topCatGory.name}}</PCBreadItem>
        </PCBread>
        <!-- 轮播图 -->
        <PCCarousel :sliders="sliders" style="height:500px"/>
        <!-- 所有二级分类 -->
        <div class="sub-list" v-if="topCatGory && topCatGory.children">
          <h3>全部分类</h3>
          <ul>
            <li v-for="item in topCatGory.children" :key="item.id">
              <a href="javascript:;">
                <img :src="item.picture">
                <p>{{item.name}}</p>
              </a>
            </li>
          </ul>
        </div>
        <!-- 不同分类商品 -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref, computed} from 'vue'
import {useStore} from 'vuex'
import {useRoute} from 'vue-router'
import {getHomeBanner} from '../../api/home'

const sliders = ref([])
getHomeBanner().then((res) => sliders.value = res.result)
const topCatGory = computed(() => {
  const store = useStore()
  const route = useRoute()
  return store.state.category.list.find((item: object) => {
    return item.id === route.params.id
  })
})
</script>

<style scoped lang="less">
@import "../src/assets/styles/variables";

.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }

  .sub-list {
    margin-top: 20px;
    background-color: #fff;

    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;

      li {
        width: 168px;
        height: 160px;

        a {
          text-align: center;
          display: block;
          font-size: 16px;

          img {
            width: 100px;
            height: 100px;
          }

          p {
            line-height: 40px;
          }

          &:hover {
            color: @xtxColor;
          }
        }
      }
    }
  }
}
</style>