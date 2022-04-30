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