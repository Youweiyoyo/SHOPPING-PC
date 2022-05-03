// 全局 Hooks


import { useIntersectionObserver  } from "@vueuse/core"
import {Ref, ref} from 'vue'


/**
 * 懒加载函数
 * @param target - 监听的 Dom 对象
 * @param fn - 获取数据的函数
 */
export const useLazyData  = (target: any, fn: Function) => {
     // stop 是对 target 停止观察的是否进入可是区域的函数
    // target 是需要监听的目标容器
    // isIntersecting 目标是否进入可是区域, 返回 true or false
    // observerElement 是被观察的 DoM
    let result = ref([])
    const { stop } = useIntersectionObserver(target,
        ([{ isIntersecting }], observerElement) => {
            // 是否进入可视区域
            if(isIntersecting){
                console.log('进入可视区')
                // 停止监听
                stop()
                // 调用接口返回数据
                fn().then((res: any) => {
                    result.value = res.result
                })
            }
        },
        // 配置相交的比例大于0
        {
            threshold: 0
        }
    )
    return result
}