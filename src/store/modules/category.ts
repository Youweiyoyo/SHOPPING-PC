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
        }
    },
    actions: {
        async getCateGoryList({ commit }){
            const { result } = await findAllCategory()
            commit('setCateGoryList', result)
        }
    }
})