import request from "../utils/request";

// 首页接口

/**
 * 获取品牌信息
 * @param limit 数量限制
 * @return Promise
 */
export const getBrandInfo = (limit: Number = 6) => {
    return request('/home/brand','get', {limit: limit})
}

/**
 * 获取轮播图
 * @return Promise
 */
export const getHomeBanner = () => {
    return request('/home/banner','get')
}

/**
 * 获取新鲜好物
 *@return Promise
 */
export const findNew  = () => {
    return request('home/new', 'get')
}

/**
 * 获取人气推荐
 * @return Promise
 */
export const getHot = () => {
    return request('home/hot', 'get')
}