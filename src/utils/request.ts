// 封装请求相关
import Axios, { AxiosRequestConfig } from 'axios';
import store from '../store'
import router from '../route'
export const BASEURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const axios = Axios.create({
    baseURL: BASEURL,
    timeout: 5000
})

// 请求拦截器
axios.interceptors.request.use((config) => {
    // 需要给每一个请求增加 token
    const { token } = store.state.user.userInfo
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return  config
}, (err) => {
    return Promise.reject(err)
})

// 响应拦截器
axios.interceptors.response.use((res)=> {
    return res.data
}, (err) => {
    if(err.response && err.response.status === 401) {
        store.commit('user/setUser', {})
        // encodeURIComponent 转化 url 编码
        const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
        router.push(`/login?redirectUrl=${fullPath}`)
    }
    return  Promise.reject(err)
})

// 请求工具函数
export default (url: String, method: String, data?: Object) => {
    return axios ({
        url,
        method,
        // [] 可以设置一个动态的 key
        [method.toLowerCase() === 'get' ? 'params' : 'data']: data
    })
}