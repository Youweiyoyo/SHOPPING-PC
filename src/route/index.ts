import { createRouter, createWebHashHistory } from "vue-router";
const Layout  = () => import('../view/Layout/layout.vue');
const Home = () => import('../view/Home/home.vue')
const TopCatGory = () => import('../view/Category/TopCatGory.vue')
const CareGory = () => import('../view/Category/category.vue')
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
        ]
  }
]

export default  createRouter({
    history: createWebHashHistory(),
    routes,
})