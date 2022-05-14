import {createRouter, createWebHashHistory} from "vue-router";

const Layout = () => import('../view/Layout/layout.vue');
const Home = () => import('../view/Home/home.vue')
const TopCatGory = () => import('../view/Category/TopCatGory.vue')
const CareGory = () => import('../view/Category/category.vue')
const Goods = () => import('../view/goods/Goods.vue')
const routes = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '/',
                component: Home
            },
            // 一级分类
            {
                path: '/category/:id',
                component: TopCatGory
            },
            // 二级分类
            {
                path: '/category/sub/:id',
                component: CareGory
            },
            // 商品详情
            {
                path: '/product/:id',
                component: Goods
            }
        ]
    }
]

export default createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior() {
        return {left: 0, top: 0}
    }
})