// 商品分类 Api

import request from "../utils/request";

/**
 * 获取所有分类
 */
export const findAllCategory = () => {
    return request('/home/category/head', 'get')
}

/**
 * 获取二级分类
 * @param id - 商品id
 * @return Promise
 */
export const findTopCategory = (id: string| string[]) => {
    return request('/category', 'get', {id})
}

/**
 * 二级分类商品
 * @param id
 */
export const fundSubCategory = (id: string | string[]) => {
    return request('/category/sub/filter', 'get', {id})
}

/**
 * 获取二级分类下的商品
 */
export const findSubCategoryGoods = (params: object) => {
    return request('/category/goods/temporary', 'post', params)
}