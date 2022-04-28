import { createStore } from 'vuex';
import user from './modules/user';
import cart from './modules/cart';
import category from './modules/category';
// 引入持久化插件
import createPersistedState from "vuex-persistedstate";

export default  createStore({
    modules: {
        user,
        cart,
        category
    },
    // 配置 vuex 插件
    plugins: [
        // 持久化插件： 默认存储在 localstorage
        createPersistedState({
        // 本地存储的名称
        key: "shoppingPc",
            // 需要存储的模块
        paths:['user', 'cart']
    })]
})