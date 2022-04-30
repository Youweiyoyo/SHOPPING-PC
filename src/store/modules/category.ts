// 分类模块
import { topCategory } from '../../api/constants'
import { findAllCategory } from '../../api/category'
export default ({
    namespaced: true,
    state() {
        return {
            list:topCategory.map((item) => ({name: item}))
        }
    },
    mutations: {
        setCateGoryList(state: any,payload: Object){
            state.list = payload
        },
        // 移入一级菜单时显示
        show(state: any, id: string){
            const currentCateGory = state.list.find((gory: Object) => gory.id === id)
            currentCateGory.open = true
        },
        // 移出一级菜单时隐藏
        hide(state: any, id: string){
            const currentCateGory = state.list.find((gory: Object) => gory.id === id)
            currentCateGory.open = false
        }
    },
    actions: {
        async getCateGoryList({ commit }){
            const { result } = await findAllCategory()
            // 增加一个控制分类栏显示和隐藏的变量
            result.forEach((item: Object) => {
                item.open = false
            })
            commit('setCateGoryList', result)
        }
    }
})