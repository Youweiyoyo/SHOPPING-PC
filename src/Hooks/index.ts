// 全局 Hooks


import { useIntersectionObserver  } from "@vueuse/core"
import {ref} from 'vue'
import axios from "axios";


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

/**
 * 获取城市信息
 */
export const useGetCityData = () => {
    return new Promise((resolve,reject) => {
        if(window.cityData){
            resolve(window.cityData)
        }else {
            const URL = 'https://yjy-oss-files.oss-cn-zhangjiakou.aliyuncs.com/tuxian/area.json'
            axios.get(URL).then((res) => {
                window.cityData = res.data
                resolve(res.data)
            })
        }
    })
}