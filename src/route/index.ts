import { createRouter, createWebHashHistory } from "vue-router";
const Layout  = () => import('../view/Layout/layout.vue');
const Home = () => import('../view/Home/home.vue')
const routes = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '/',
                component: Home
            }
        ]
  }
]

export default  createRouter({
    history: createWebHashHistory(),
    routes,
})