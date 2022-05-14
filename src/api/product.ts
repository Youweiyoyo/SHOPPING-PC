import request from "../utils/request";


/**
 * 获取商品详情
 * @param id {string} - 商品id
 */
export const findGoods = (id: string) => {
    return request('/goods', 'get', {id})
}