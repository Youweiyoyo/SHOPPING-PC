<template>
  <div class="top-category">
    <div class="container">
      <!-- 面包屑 -->
      <PCBread>
        <PCBreadItem to="/">首页</PCBreadItem>
        <PCBreadItem>{{ topCatGory.name }}</PCBreadItem>
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
              <p>{{ item.name }}</p>
            </a>
          </li>
        </ul>
      </div>
      <!-- 不同分类商品 -->
      <div class="ref-goods" v-for="item in subList" :key="item.id">
        <div class="head">
          <h3>- {{item.name}} -</h3>
          <p class="tag">{{item.desc}}</p>
          <PCMore :path="`/category/sub/${item.id}`"/>
        </div>
        <div class="body">
          <GoodsItem v-for="goods in item.goods" :key="goods.id" :goods="goods"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import GoodsItem from './components/goods-item.vue'
import {ref, computed, watch} from 'vue'
import {useStore} from 'vuex'
import {useRoute} from 'vue-router'
import {getHomeBanner} from '../../api/home'
import {findTopCategory} from '../../api/category'

const sliders = ref([])
const subList = ref([])
const store = useStore()
const route = useRoute()
getHomeBanner().then((res) => sliders.value = res.result)
const topCatGory = computed(() => {
  console.log(route.params.id)
  let cate = {}
  let item = store.state.category.list.find((item: object) => {
    return item.id === route.params.id
  })
  if (item) cate = item
  return cate
})

const getSubList = () => {
  findTopCategory(route.params.id).then((res) => subList.value = res.result.children)
}
watch(() => route.params.id, (newValue) => {
  newValue && getSubList()
}, {immediate: true})
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

  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;

    .head {
      .more {
        position: absolute;
        top: 20px;
        right: 20px;
      }

      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }

    .body {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      padding: 0 65px 30px;
    }
  }
}
</style>