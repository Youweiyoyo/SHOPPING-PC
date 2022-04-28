// 封装请求相关
import Axios from 'axios';
import store from '../store'

export const BASEURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const axios = Axios.create({
    baseURL: BASEURL,
    timeout: 5000
})
// 响应拦截器
axios.interceptors.response.use(()=> {}, () => {})

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