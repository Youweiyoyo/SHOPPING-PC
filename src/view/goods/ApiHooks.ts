import {nextTick, ref, watch} from 'vue'
import {findGoods} from '../../api/product'
import PowerSet from '../../vender/power-set.js'

// 如果抽离为 Hook 函数,尽量使用箭头函数，保证 this 指向正确、

/**
 * 获取商品详情
 */
export const useGoods = (id: string) => {
    const goods = ref(null)
    watch(() => id, (newValue) => {
        if (newValue) {
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

/**
 * 路径字典对象
 */
const SPLITER = '-'
export const useGetPathMap = (sku: []) => {
    const pathMap = {}
    sku?.forEach((sku) => {
        if (sku?.inventory > 0) {
            const valueArr = sku?.specs.map(val => val.valueName)
            const valueArrPowerSet = PowerSet(valueArr)
            valueArrPowerSet.forEach((item) => {
                const key = item.join(SPLITER)
                if (pathMap[key]) {
                    pathMap[key].push(sku.id)
                } else {
                    pathMap[key] = [sku.id]
                }
            })
        }
    })
    return pathMap
}

export const getSelectedArr = (specs: any) => {
    const selectedArr = []
    specs.forEach(spec => {
        const selectedVal = spec.values.find(val => val.selected)
        selectedArr.push(selectedVal ? selectedVal.name : undefined)
    })
    return selectedArr
}
/**
 * 控制选中状态
 */
export const updateDisabledStatus = (specs: any, pathMap: any) => {
    specs.forEach((spec, i) => {
        const selectedArr = getSelectedArr(specs)
        spec.values.forEach(val => {
            // 已经选中的按钮不用判断
            if (val.name === selectedArr[i]) return false
            // 未选中的替换对应的值
            selectedArr[i] = val.name
            // 过滤无效值得到key
            const key = selectedArr.filter(v => v).join(SPLITER)
            // 设置禁用状态
            val.disabled = !pathMap[key]
        })
    })
}