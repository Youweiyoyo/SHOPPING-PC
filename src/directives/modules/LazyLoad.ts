/**
 * 懒加载指令
 */

import type {Directive} from 'vue'
import defaultImage from "../../assets/images/200.png";
// 扩展元素身上的属性类型
interface ElType extends HTMLElement {
    src: string;
}

// 图片懒加载原理：先把图片数据存起来，但不给 src 设置, 当图片进入可视区，再将图片资源设置给元素的 src
const lazyLoad: Directive = {
    mounted: function (el: ElType, binding) {
        // el：此时使用指令的 DOM 元素
        // binding: 指令绑定的值对象
        // 创建一个观察者对象,观察当前的 DOM 元素
        const observe = new IntersectionObserver(([{isIntersecting}]) => {
            if (isIntersecting) {
                // 进入可视区后停止观察
                observe.unobserve(el)
                // 设置图片地址
                el.src = binding.value
                // 出来图片加载失败
                el.onerror = () => {
                    // 设置默地址
                    el.src = defaultImage
                }
            }
        }, {threshold: 0})
        observe.observe(el)
    }
}

export default lazyLoad