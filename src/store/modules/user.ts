// 用户模块

export default {
    namespaced: true,
    state(){
        return {
            userInfo: {
                id: '',
                token: '',
                avatar: '',
                account: '',
                mobile: '',
                nickname: ''
            }
        }
    },
    mutations: {
         // 修改用户信息的方法
        setUser(state: any, payload: Object){
            state.userInfo = payload
        }
    },
    actions: {},
    getters: {}
}