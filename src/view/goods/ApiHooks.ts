import {nextTick, ref, watch} from 'vue'
import {findGoods} from '../../api/product'

// 如果抽离为 Hook 函数,尽量使用箭头函数，保证 this 指向正确、

/**
 * 获取商品详情
 */
export const useGoods = (id: string) => {
    const goods = ref(null)
    watch(()=> id, (newValue) => {
        if(newValue){
            findGoods(id).then((res) => {
                goods.value = null
                // 让商品数据置为空，让使用了 v-if 来判断的组件可以销毁
                nextTick(() => {
                    goods.value = res.result
                })
            })
        }
    }, {immediate: true})
    return goods
}